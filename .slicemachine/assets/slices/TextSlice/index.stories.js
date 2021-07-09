import MyComponent from './../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Occaecat aliquip sunt officia. Magna amet culpa excepteur duis labore reprehenderit irure et dolore duis ea do.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Quis enim duis consequat aliqua laboris mollit eu excepteur magna. Ipsum in dolor labore pariatur.","spans":[]}]},"id":"_TwoColumn"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumn.storyName = 'Two Column'
