import MyComponent from '../../../../slices/SestSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SestSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sest_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Innovate interactive users","spans":[]}],"description":[{"type":"paragraph","text":"Cillum commodo ut quis anim nulla pariatur minim.","spans":[]}],"uybvjh":[{"type":"paragraph","text":"Fugiat reprehenderit ipsum mollit qui veniam pariatur. Occaecat esse consectetur incididunt sunt sit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
