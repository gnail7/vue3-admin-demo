
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import { handleToken } from '../api/login'
import useNProgress from '../hooks/useNProgress'
import store from '../store'
const NProgess = useNProgress()

const routes =  
[
    {
        path:'/',
        name:'index',
        redirect:'/dashboard',
        component:()=>import ('../views/layout/index.vue'),
        children:{

        }
    },

    {
        path:'/login',
        name:'login',
        component:()=>import ('../views/login/index.vue'),
    },
    {
        path:'/404',
        name:'404',
        component:()=>import ('../views/errorPages/404.vue'),
    },
   
   


]

const router = createRouter({
    history:createWebHistory(),
    routes
})




router.beforeEach(async (to,from,next)=>{
    NProgess.start()
    const res = (await handleToken()).data
    const {code,menu,token} =res
    if (token) {              //如果有token值，并且要回退到登录页面，通过next 跳回到 / 
        if(!store.state.user.alreadyAddRoutes){
            store.commit('setMenu',menu)
            store.dispatch('addAsycnRoutes')
            router.push(to.fullPath)
        }
        if (to.path === '/login') {
          next({
            path: '/'
          })
        } else {   
          next()
        }
      } else {       //没有token值，并且在login页就直接放行到 login 页
        store.commit('clearToken')
        if (to.path === '/login') {
          next()
        } else {
          next('/login')  // 直接跳到 login 页面
        }
      }
})

router.afterEach(()=>{
    NProgess.done()
})

export default router