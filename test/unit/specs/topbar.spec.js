import Vue from 'vue'

const test = {
  text: 'Hello world',
  className: 'app-topbar',
  theme: 'black',
  tagName: 'SPAN'
}

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({template: `<app-topbar tag="${test.tagName}" theme="${test.theme}">${test.text}</app-topbar>`})
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.equal(test.tagName)
    expect(vm.$el.className.split([' '])).to.include(test.className)
    !!test.theme && expect(vm.$el.className.split([' '])).to.include(test.theme)
    expect(vm.$el.textContent).to.equal(test.text)
  })
})
