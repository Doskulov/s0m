import Vue from 'vue'
import VueAlertify from 'vue-alertify'
import VueRouter from 'vue-router'
import navbar from './components/HelloWorld'
import CinemaHall from './components/CinemaHall'
import 'bulma/css/bulma.css'
import App from './App.vue'

Vue.use(VueAlertify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // динамические сегменты начинаются с двоеточия
    {
      path: '/', component: navbar
    },
    {
      path: '/cinema_halls', component: CinemaHall
    }
  ],
  mode: 'history'
})

new Vue({
  mounted () {
    setTimeout(() => {
      this.$alertify.success('HELLOWWORLD')
    }, 1000)
  },
  data: {},
  router,
  render: h => h(App)
  // template: `
  // <div>
  //   <navbar />
  //   <section class="section">
  //     <div class="container is-fluid">
  //     </div>
  //   </section>
  // </div>
  // `,
  // components: {
  //   navbar
  // }
}).$mount('#app')
