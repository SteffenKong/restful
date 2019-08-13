// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//vue不带路径代表从node_modeules中导入
import Vue from 'vue'

//引入当前路径的App.vue
import App from './App'

//导入路由,如果没有route.后缀 的文件，就会去找router目录，然后去加载index.js
import router from './router'

import Vuetify from 'vuetify'

Vue.use(Vuetify);


import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
//实例化一个vue对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
