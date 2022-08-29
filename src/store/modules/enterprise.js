export default{
    namespace:true,
    state:{
        enterprise:{
            name: import.meta.env.VITE_APP_ENTERPRISE_NAME,
            nickName:import.meta.env.VITE_APP_ENTERPRISE_NICKNAME,
        },
       
    }

}