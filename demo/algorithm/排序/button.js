function Button(id) {
    this.element = document.querySelector(`#${id}`);
    this.bindEvent();
}

// Button.prototype.bindEvent = function () {
//     this.element.addEventListener('click', this.setBgColor.bind(this), false);
// };

Button.prototype.bindEvent = function () {
    this.element.addEventListener('click', (e) => this.setBgColor(e), false);
};

Button.prototype.setBgColor = function () {
    console.log(this);
    this.element.style.backgroundColor = '#1abc9c';
};

new Button('button');
