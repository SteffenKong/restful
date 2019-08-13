import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/views/users/table'

//导入userList组件
//@代表是src的绝对路径
import UserList from '@/views/users/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      //1.规划路由
    {
      path:'/users',
      name: 'users', //路由别名
      component:UserList, //userList是一个对象(组件)
    },
    {
      path:'/vuetify/table',
      name:'table',
      component:table
    }
  ]
})
