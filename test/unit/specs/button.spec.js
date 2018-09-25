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
    const Constructor = Vue.extend({ template: `<app-button tag="${test.tagName}" ${test.right} ${test.left} ${test.disabled}>${test.text}</app-button>` })
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.equal(test.tagName.toUpperCase())
    const _className = vm.$el.className.split(' ')
    expect(_className).to.include(test.className)
    !!test.right && expect(_className).to.include(test.right)
    !!test.left && expect(_className).to.include(test.left)
    !!test.disabled && expect(_className).to.include(test.disabled)
    expect(vm.$el.textContent).to.equal(test.text)
  })
})
