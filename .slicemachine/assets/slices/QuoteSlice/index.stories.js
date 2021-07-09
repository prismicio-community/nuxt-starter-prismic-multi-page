import MyComponent from './../../../../slices/QuoteSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/QuoteSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Culpa aliqua proident cupidatat exercitation pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => ({
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
      mock: {"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Qui nulla nulla reprehenderit veniam cillum sint reprehenderit et dolore duis.","spans":[]}],"reference":[{"type":"paragraph","text":"Proident sunt ad labore qui enim aliquip duis anim sint. Anim sunt in pariatur proident cupidatat voluptate nulla laborum officia.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'Quote Reference'
