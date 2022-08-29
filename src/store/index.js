import {createStore} from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
import enterprise from './modules/enterprise'
export default createStore({
    state:'',
    modules:{
        user,menu,enterprise
    }
})