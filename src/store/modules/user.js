
import { ElMessage } from 'element-plus'
import {loginApi,handleToken} from '../../api/login'
import router from '../../router'
import menu from './menu'
export default{
    namespace:true,
    state:{
        userInfo:localStorage.getItem('userInfo')|| {},
        token:localStorage.getItem('token')||'',
        alreadyAddRoutes:false,
        menu : [],

    },

    actions:{
        async loginActions({commit,dispatch},data){
            try{
                const params = JSON.stringify(data)
                const res = await loginApi(params)
                console.log(params)
                const {code,userInfo,token,menu}  = res.data
                if(code!=200){
                    ElMessage({
                        type:'danger',
                        message:'登陸失敗'
                    })
                }else{
                commit('setToken',token)
                commit('setUserInfo', userInfo)
                commit('setMenu',menu)
                dispatch('addAsycnRoutes')
                ElMessage({
                    type:'success',
                    message:'成功登录'
                })
                }
                router.push({name:'dashboard'})

            }catch(e){
                ElMessage({
                    type:'danger',
                    message:'登陸失敗'
                })
                console.log(e.message)
            }
            
        },

        addAsycnRoutes({commit,state}){
            const menuArrary = []
            state.menu.forEach(item=>{
                if(item.children){
                    item.children = item.children.map(ele=>{
                        ele.component = ()=>import(`../../views/${item.name}/${ele.name}.vue`)
                        return ele
                    })
                    menuArrary.push(...item.children)
                }else{
                    item.component = ()=>import(`../../views/${item.name}/index.vue`)
                    menuArrary.push(item)
                }
            })
            menuArrary.forEach(ele=>{
                router.addRoute('index',ele)
            })
            router.addRoute(  
                {
                path:'/:catchAll(.*)',
                name:'notFound',
                redirect:'/404'
                }
            )
            console.log(router.getRoutes())
            commit('updateAlreadyAddRoutes')
        },
        removeAsycnRoutes({state}){
            const menuArrary = []
            state.menu.forEach(item=>{
                if(item.children){
                    
                    menuArrary.push(...item.children)
                }else{
                    menuArrary.push(item)
                }
            })
            menuArrary.forEach(item=>{
                router.removeRoute(item.name)
            })
            console.log('after remove',router.getRoutes())
        }
    },

    mutations:{
        setToken(state,val){
            localStorage.setItem('token',val)
        },
        getToken(state){
            return state.token
        },
        setUserInfo(state,val){
            localStorage.setItem('userInfo',JSON.stringify(val))
            state.userInfo = val 
        },
        clearToken(state){
            state = {}
            localStorage.clear('token')
        },
        setMenu(state,val){
            state.menu = val
        },
        updateAlreadyAddRoutes(state){
            state.alreadyAddRoutes = true
        },
     
    }
}