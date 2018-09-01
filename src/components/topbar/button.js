// <app-button/>
import { staticProp, tag } from '../_props'

export const props = {
  tag,
  right: staticProp,
  left: staticProp,
  disabled: staticProp
}

export default {
  functional: true,
  props,
  render (h, /* { props, children } */c) {
    const { props = {}, children = {} } = c || {} // issue of unit test
    return h(
      props.tag,
      {
        class: {
          'app-button': true,
          'left': !!props.left,
          'right': !!props.right,
          'disabled': !!props.disabled
        }
      },
      children
    )
  }
}
