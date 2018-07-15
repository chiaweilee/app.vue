// app-page
// inspired by Bootstrap-Vue
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'div'
  }
}

export default {
  functional: true,
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: {
          'app-page': true
        }
      }),
      children
    )
  }
}
