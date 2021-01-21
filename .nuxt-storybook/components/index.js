export { default as HeaderPrismic } from '../../components/HeaderPrismic.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHeaderPrismic = import('../../components/HeaderPrismic.vue' /* webpackChunkName: "components/header-prismic" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
