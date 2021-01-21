import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _128c9fb6 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _8d4f0cfe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1f3f5fb2 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _128c9fb6,
    name: "prismic-preview"
  }, {
    path: "/",
    component: _8d4f0cfe,
    name: "index"
  }, {
    path: "/:uid",
    component: _1f3f5fb2,
    name: "uid"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
