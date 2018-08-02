import Vue from 'vue'

const test = {
  text: 'button',
  className: 'app-button',
  right: 'right',
  left: 'left',
  disabled: 'disabled',
  tagName: 'SPAN'
}

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({template: `<app-button tag="${test.tagName}" ${test.right} ${test.left} ${test.disabled}>${test.text}</app-button>`})
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.equal(test.tagName)
    expect(vm.$el.className.split(' ')).to.include(test.className)
    !!test.right && expect(vm.$el.className.split(' ')).to.include(test.right)
    !!test.left && expect(vm.$el.className.split(' ')).to.include(test.left)
    !!test.disabled && expect(vm.$el.className.split(' ')).to.include(test.disabled)
    expect(vm.$el.textContent).to.equal(test.text)
  })
})
