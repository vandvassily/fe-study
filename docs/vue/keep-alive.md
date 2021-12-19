# keep-alive 组件

`keep-alive` 是官方提供的组件。目的是用于保留组件的状态或避免重复渲染引发的性能问题。

## 源码解析

[组件源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/components/keep-alive.js)

```js
export default {
  name: 'keep-alive',
  abstract: true, // 抽象组件，并不会渲染为实际DOM

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number] // 最大缓存数
  },

  methods: {
    cacheVNode() {
      // 缓存节点 vnode
      const { cache, keys, vnodeToCache, keyToCache } = this
      if (vnodeToCache) {
        const { tag, componentInstance, componentOptions } = vnodeToCache
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag,
          componentInstance,
        }
        keys.push(keyToCache)
        // prune oldest entry
        // 如果超过设置的最大缓存数，则移走最早的节点，即 keys[0]
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
        this.vnodeToCache = null
      }
    }
  },

  created () {
    // 初始换keep-alive组件，创建一个空对象 cache，用于保存 vnode
    this.cache = Object.create(null)
    // 空数组，用于保存访问的顺序，以便删除和移动；顺序为： 最先访问 -> 最近访问
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.cacheVNode()
    // 根据匹配规则，移除相应缓存的 vnode
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  updated () {
    // updated 钩子后，及时更新缓存
    this.cacheVNode()
  },

  render () {
    const slot = this.$slots.default
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        // 更新此 vnode 在数组中的顺序。先移除，再push到最后
        remove(keys, key)
        keys.push(key)
      } else {
        // delay setting the cache until update
        // 如果缓存不存在，则将需要保存的 vnode 和 key 放到组件 updated 钩子后进行更新
        this.vnodeToCache = vnode
        this.keyToCache = key
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```

`keep-alive` 组件是一个 `abstract` 抽象组件，并不会渲染为 `DOM` 节点。

初始化 `keep-alive` 组件时，会创建 `cache` 和 `keys` ，分别用于保存 `vnode` 和 `vnode` 的访问顺序。

> 基于 `LRU(Least Recently Used)` 最近最少使用算法，保存 被包裹组件 的状态 `vnode`。

```js
  created () {
    // 初始换keep-alive组件，创建一个空对象 cache，用于保存 vnode
    this.cache = Object.create(null)
    // 空数组，用于保存访问的顺序，以便删除和移动；顺序为： 最先访问 -> 最近访问
    this.keys = []
  },
```

在 `Vue` 组件中， `render` 方法返回的是虚拟节点 `vnode` 。`vnode` 用于之后的 `patchVnode` ，节点对比过程中，会不断地操作真实 `DOM` 。

`keep-alive` 组件中的 `render` 方法，返回的也是 `vnode` ，不过返回的是组件内第一个有效子节点的 `vnode` 。 `render` 方法中，通过 `LRU` 算法获得、更新缓存 `cache` 和 `keys` ，复用之前生成的 `vnode` ，减少了重复渲染的操作。

```js
  render () {
    const slot = this.$slots.default
    // 组件内第一个有效子节点
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      // 匹配规则
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      // 判断是否已存在 cache 中
      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        // 拿缓存中的componentInstance 替换现有 vnode 的 componentInstance
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        // 更新此 vnode 在数组中的顺序。先移除，再push到最后
        remove(keys, key)
        keys.push(key)
      } else {
        // delay setting the cache until update
        // 如果缓存不存在，则将需要保存的 vnode 和 key 放到组件 updated 钩子后进行更新
        this.vnodeToCache = vnode
        this.keyToCache = key
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
```

// TODO

1. `componentVNodeHooks` [源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/vdom/create-component.js#L35)
2. `prepatch ` [源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/vdom/create-component.js#L55)
3. `updateChildComponent` [源码](https://github.com/vuejs/vue/blob/v2.6.14/src/core/instance/lifecycle.js#215)
