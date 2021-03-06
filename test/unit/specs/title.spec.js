import Vue from 'vue'

const test = {
  text: 'Hello World',
  tagName: 'SPAN',
  className: 'app-title'
}

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({ template: `<app-title tag="${test.tagName}">${test.text}</app-title>` })
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.equal(test.tagName.toUpperCase())
    const _className = vm.$el.className.split(' ')
    expect(_className).to.include(test.className)
    expect(vm.$el.textContent).to.equal(test.text)
  })
})
