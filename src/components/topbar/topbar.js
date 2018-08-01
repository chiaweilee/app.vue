// <app-topbar/>
import { tag } from '../_props'

export const props = {
  tag,
  theme: {
    type: String,
    default: ''
  }
}

export default {
  functional: true,
  props,
  render (h, /* { props, children } */c) {
    const {props = {}, children = {}} = c || {} // issue of unit test
    return h(
      props.tag,
      {
        class: {
          'app-topbar': true,
          [props.theme]: !!props.theme
        }
      },
      children
    )
  }
}
