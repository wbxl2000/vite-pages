import App from './App.vue'
import { ViteSSG } from 'vite-ssg'

import routes from '~pages'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)