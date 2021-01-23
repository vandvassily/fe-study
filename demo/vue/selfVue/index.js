class SelfVue {
  constructor(options) {
    let vm = this
    this.data = options.data
    // 监听数据变化
    observe(this.data)

    // 代理data数据，方便使用this.name 去访问 this.data.name
    Object.keys(this.data).forEach(function(name) {
      proxy(vm, 'data', name)
    })

    this.methods = options.methods

    // 解析模板
    new Compile(options.el, this)
  }
}

var el = document.querySelector('#app')
var vm = new SelfVue({
  el: '#app',
  data: {
    name: 'zhs',
    msg: 'hello',
    gender: '女',
    obj: {
        name: '123'
    }
  },
  methods: {
    click() {
      console.log('click func')
    },
    say() {
      console.log(this)
      this.msg = '111'
    },
  },
})
// var vm2 = new SelfVue({
//   el: '#fragment',
//   data: {
//     name: 'zhs',
//     msg: 'hello',
//     gender: '女',
//   }
// })

setTimeout(function() {
  vm.data.name = 213
}, 3000)

// let app = nodeToFragment('#fragment');
// console.dir(app)
