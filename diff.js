/**
 * @file: diff算法
 * @author: ZHS 
 * @Date: 2020-03-20 09:26:50 
 * @Last Modified by: ZHS
 * @Last Modified time: 2020-03-20 09:52:56
 */

function Element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

Element.prototype.render = function () {
    var el = document.createElement(this.tagName)
    var props = this.props;
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const element = props[key];
            el.setAttribute(key, element)
        }
    }

    var children = this.children || [];
    children.forEach(function (child) {
        var childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
        el.appendChild(childEl)
    })

    return el
}

var ul = new Element(
    'ul',
    { id: 'list' },
    [new Element(
        'li',
        { class: 'item' },
        ['item1']),
    new Element(
        'li',
        { class: 'item' },
        ['item2']),
    new Element(
        'li',
        { class: 'item' },
        ['item3'])]
);

var ulRoot = ul.render();
// document.body.appendChild(ulRoot); 
document.body.prepend(ulRoot)
