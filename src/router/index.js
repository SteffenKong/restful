import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/views/users/table'
import add from '@/views/users/add'
import edit from '@/views/users/edit'

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
      //用户列表的路由
    {
      path:'/vuetify/table',
      name:'table',
      component:table
    },
      //添加用户的路由
    {
      path:'/vuetify/add',
      name:'add',
      component:add
    },
      //编辑用户的路由
    {
        path:'/vuetify/edit/:id',
        name:'edit',
        component:edit
    },
  ]
})
