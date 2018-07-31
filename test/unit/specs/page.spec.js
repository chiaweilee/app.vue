import Vue from 'vue'
import { page } from '../../../src/components'

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(page)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.app-page').textContent)
      .to.equal('Hello world')
  })
})
