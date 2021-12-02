import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/philipsnow/prismic/nuxt-sm-tutorial-series/slices/${sliceName}.vue`), import(`/Users/philipsnow/prismic/nuxt-sm-tutorial-series/slices/${sliceName}/index.vue`), import(`/Users/philipsnow/prismic/nuxt-sm-tutorial-series/slices/${sliceName}/index.js`), import(`/Users/philipsnow/prismic/nuxt-sm-tutorial-series/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
