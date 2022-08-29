import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { handleToken } from "../api/login"


const store = useStore()
const router = useRouter()

async function getToken(){
  try{
    const data = (await handleToken()).data
    const token = data.token
    const menu = data.menu
    store.commit('setUserInfo',token)
    store.commit('setMenu',menu)       
    store.commit('addRoutes',router)
  }catch(e){
    console.log('您没有登录凭证')
  }
} 

export default getToken