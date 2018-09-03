// <app-content/>
import { tag } from './_props'

export const props = {
  tag
}

export default {
  functional: true,
  props,
  render (h, /* { props, children } */c) {
    const { props = {}, children = {}, data = {} } = c || {} // issue of unit test
    return h(
      props.tag,
      {
        ref: data.ref,
        class: {
          'app-content': true
        }
      },
      children
    )
  }
}
