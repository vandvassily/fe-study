// 解析模板
// 1.解析模板指令，并替换模板数据，初始化视图
// 2.将模板指令对应的节点绑定对应的更新函数，初始化相应的订阅器

class Compile {
    constructor(el, vm) {
        this.el = document.querySelector(el);
        this.vm = vm

        this.fragment = null;

        this.init()
    }

    init(){
        if(this.el) {
            this.fragment = this.nodeToFragment()
        }
    }

    nodeToFragment() {
        let el = this.el
        let fragment = document.createDocumentFragment();
        let child = el.firstChild

        while(child) {
            fragment.appendChild(child);
            child = el.firstChild
        }

        return fragment
    }

    isTextNode(node) {
        return node.nodeType == 3
    }
}
