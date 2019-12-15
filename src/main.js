import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import ViewUI from 'view-design'
import http from 'utils/http.js'
import 'view-design/dist/styles/iview.css'
import './assets/style/public.styl'

Vue.use(ViewUI)
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')