# Vue声明周期

![生命周期](https://cn.vuejs.org/images/lifecycle.png)

    beforeCreate
    created
    beforeMount
    mounted
    beforeUpdate
    updated
    beforeDestroy
    destroyed
    activated
    deactivated

## 在 `beforeCreate` 之前的生命周期

Vue实例化，初始化 事件 和 生命周期

## 在 `beforeCreate` 和 `created` 之间的生命周期

初始化数据，以及设置数据监听

## 在 `created` 和 `beforeMounted` 之间的生命周期

判断是否有 声明 `el` ，以及是否有 `render` 或者 `template`

## 在 `beforeMounted` 和 `mounted` 之间的生命周期

给vue实例添加 `$el` , 并且替换 `el`

## `mounted`

钩子函数完成挂载，同时更改挂载元素中的值

## `beforeUpdate` 和 `updated` 之间的生命周期

当vue实例中，被监听的数据发生了变化，会触发对应组件重新渲染。
当数据改变后调用 beforeUpdate，当渲染完成后调用updated钩子函数

## `beforeDestroy` 和 `destroyed` 钩子函数间的生命周期

在vue 实例销毁之前，会调用 `beforeDestroy`

`destroyed` 钩子函数在vue 实例销毁后调用。调用后，vue 实例的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

## `keep-live` 标签包裹的组件，有两个生命周期钩子函数 `activated` 和 `deactivated`

当组件在 `<keep-alive>` 内被切换时，activated 和 deactivated 这两个生命周期钩子函数将会被对应执行

## 父子孙组件声明周期加载顺序
