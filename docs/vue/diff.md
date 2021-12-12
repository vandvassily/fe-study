# Diff算法

什么是 `diff` 呢？ `diff` 就是比较两个虚拟节点树 `Vnode` 的不同，找到两棵树之间的差异，并执行相应的更新操作（添加、删除、修改）。

## diff 的背景

我们知道 `Vue` 是通过数据绑定 (`defineProperty`) 来更新视图的。当某个数据被修改的时候，会触发执行 `set` 方法，`set` 方法中的闭包 `dep` 会调用其本身的 `notify` 方法，通知 `subs` 内所有的 `watcher` 执行 `update` 方法。 

## diff 发生的时机？

1. 节点已经挂载 `mounted`
2. 某个数据已修改

## 如何判断节点相同 `sameVnode`

主要是依据：

1. `key` 是否相同
2. `tag` 是否相同

```js
function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```

## 如何对比children节点

updateChildren的简化后的判断逻辑

```js
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
  ...
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    ...
    if(){
      ...
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      // 判断旧列表的头部和新列表的头部
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 判断旧列表的尾部和新列表的尾部
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
      // 旧列表的头部和新列表的尾部比较
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
      // 旧列表的尾部和新列表的头部比较
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 以上四种情况都无法匹配，则利用原来的列表，创建 `key` 和 `列表index` 的map对象
      // 目的是：尽最大可能的复用已生成的 DOM 节点
      // 如果 key 不在map对象中，则证明是新的 element，生成新的 element 并插入
      // 如果 key 存在map对象中，则对比是否是 sameVnode （因为有可能是不同的tag），复用 DOM 或者 生成新的 element，并执行插入
      ...
    }
  }
  if (oldStartIdx > oldEndIdx) {
    ...
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx)
  }
}
```

## 场景分析

```html
<div>
    <p key="1">1</p>
    <p key="2">2</p>
    <p key="3">3</p>
</div>
```

:::tip
- OS == oldStartVnode，初始为0
- NS == newStartVnode，初始为0
- OE == oldEndVnode，初始为2
- NE == newEndVnode，初始为1
:::

### 一、移除列表的第2个数据，修改第1个数据的文本

1. 先比较 `OS` 和 `NS` 
   1. 属于相同节点，会将旧节点的 `elm（dom）` 指向给新节点的 `elm`
   2. 如果节点内有 `children` 节点，则递归比较子节点（DFS）
   3. 比较完毕后 `patchVnode` ，会更改相应的 `dom` 信息。
2. `OS` 和 `NS` 的索引分别向后进1，`OS == 1` `NS == 1`
3. `OS` 和 `NS` 不是相同的节点（ `tag` 相同，但是 `key` 不同），因此判断的分支转到 `OE` 和 `NE` 的比较。
   1. 属于相同节点，会将旧节点的 `elm（dom）` 指向给新节点的 `elm`
   2. 如果节点内有 `children` 节点，则递归比较子节点
   3. 比较完毕后 `patchVnode` ，会更改相应的 `dom` 信息。
4. `OE` 和 `NE` 的索引分别向前进1，`OE == 1` `NE == 0`
5. 因为 `OS` 和 `OE` 都等于1，会跳出 while 判断，转而去比较 `NS` 和 `NE` 。`NS` > `NE` , 说明新的列表比之前的内容少了，需要移除旧列表中的元素。

### 二、列表反转，顺序变为 321

1. `while` 内第一次判断
   1. `OS == 0` 和 `NS == 0` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS` 和 `NE` 相同，递归比较子节点；
   4. 操作真实 `DOM` ，插入到相应的顺序
   5. `OS` 的索引 `+1` , `NE` 的索引 `-1`
2. 第二次判断
   1. `OS == 1` 和 `NS == 0` 不相同，跳过
   2. `OE == 2` 和 `NE == 1` 不相同，跳过
   3. `OS` 和 `NE` 相同，递归比较子节点；
   4. 操作真实 `DOM` ，插入到相应的顺序
   5. `OS` 的索引 `+1` , `NE` 的索引 `-1`
3. 第三次判断
   1. `OS == 2` 和 `NS == 0` 相同
   2. 递归比较子节点；

### 三、列表变为 432

1. `while` 内第一次判断
   1. `OS == 0` 和 `NS == 0` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS` 和 `NE` 不相同，跳过
   4. `OE` 和 `NS` 不相同，跳过
   5. 生成新的节点，并插入。`NS` 的索引 `+1`
   6. 当前显示 `4123`
2. 第二次判断
   1. `OS == 0` 和 `NS == 1` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS == 0` 和 `NE == 2` 不相同，跳过
   4. `OE == 2` 和 `NS == 1` 相同，递归比较子节点
   5. 操作真实 `DOM` ，插入到相应的顺序
   6. `OE` 的索引 `-1` , `NS` 的索引 `+1`
   7. 当前显示 `4312`
3. 第三次判断
   1. `OS == 0` 和 `NS == 2` 不相同，跳过
   2. `OE == 1` 和 `NE == 2` 相同，递归比较子节点
   3. `OE` 的索引 `-1` , `NE` 的索引 `-1`
   4. 跳出 `while` 判断
   5. `NS == 2` > `NE == 1` ，则证明新列表已经全部遍历完毕，旧列表中间的所有节点都需要移除，即删除1
   6. 当前显示 `432`

### 四、列表变为 524

1. `while` 内第一次判断
   1. `OS == 0` 和 `NS == 1` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS == 0` 和 `NE == 2` 不相同，跳过
   4. `OE == 2` 和 `NS == 1` 不相同，跳过
   5. 进入节点复用判断逻辑。
      1. 在旧的列表中没有对应的 `key` ，因此要生成新的节点，并插入到相应的位置
      2. `NS` 的索引 `+1`
   6. 当前显示 `5123`
2. 第二次判断
   1. `OS == 0` 和 `NS == 1` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS == 0` 和 `NE == 2` 不相同，跳过
   4. `OE == 2` 和 `NS == 1` 不相同，跳过
   5. 进入节点复用判断逻辑。
      1. 在旧的列表中存在对应的 `key == 2` ，递归判断子节点
      2. 复用已存在的节点，在旧列表中置为 `undefined` ；操作真实 `DOM` ，插入到相应的顺序。
      3. `NS` 的索引 `+1`
   6. 当前显示 `5213`
3. 第三次判断
   1. `OS == 0` 和 `NS == 2` 不相同，跳过
   2. `OE == 2` 和 `NE == 2` 不相同，跳过
   3. `OS == 0` 和 `NE == 2` 不相同，跳过
   4. `OE == 2` 和 `NS == 2` 不相同，跳过
   5. 进入节点复用判断逻辑。
      1. 在旧的列表中没有对应的 `key` ，因此要生成新的节点，并插入到相应的位置
      2. `NS` 的索引 `+1`
   6. 当前显示 `52413`
4. 第四次判断
   1. `NS == 3` 大于 `NE == 2` ，跳出 `while` 判断
   2. 进入节点删除逻辑，删除 `OS == 0` 和 `OE == 2` 之间的节点
      1. 注意的是，之前节点复用的时候，已经移走了 `key == 2` 的节点，所以在删除的时候不会处理这个节点。
   3. 当前显示 `524`

// TODO: 补充每一步的执行图片

## 参考资料

[请阐述vue的diff算法](https://mp.weixin.qq.com/s/haOUo3EWcu40rVdeeEU5Zg)

[VirtualDOM与diff(Vue实现)](https://github.com/answershuto/learnVue/blob/master/docs/VirtualDOM%E4%B8%8Ediff(Vue%E5%AE%9E%E7%8E%B0).MarkDown)
