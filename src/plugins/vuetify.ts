// import Vue from 'vue'
import app from '../main.ts'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


app.use(vuetify)

// const opts = {
  
// }

// export default new Vuetify(opts)