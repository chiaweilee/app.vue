// app-page

export const props = {
  tag: {
    type: String,
    default: 'div'
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
          'app-page': true
        }
      },
      children
    )
  }
}
