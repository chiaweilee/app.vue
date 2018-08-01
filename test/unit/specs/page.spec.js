import Vue from 'vue'
import { page } from '../../../src/components'

const propsData = {
  tag: 'span'
}

describe('page.js', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(page)
    const vm = new Constructor({propsData}).$mount()
    expect(vm._props.tag).to.equal(propsData.tag)
    expect(vm.$el.textContent).to.equal('')
  })
})
