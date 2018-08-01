import Vue from 'vue'

const test = {
  text: 'Hello world',
  className: 'app-page',
  tagName: 'SPAN'
}

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({template: `<app-page tag="${test.tagName}">${test.text}</app-page>`})
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.equal(test.tagName)
    expect(vm.$el.className).to.equal(test.className)
    expect(vm.$el.textContent).to.equal(test.text)
  })
})
