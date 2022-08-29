<template>
<div class="header">
    <div>
        <el-button @click="changeCollapse" :icon="icon"  >
        </el-button>
    </div>
    
    <el-dropdown >
       <div class="avator-icon-btn"> 
       <el-icon>
        <user/>
       </el-icon>
       </div>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b" @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
  </el-dropdown>
   
</div>
</template>

<script setup>
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    import { computed } from 'vue';
import Avatar from './avatar.vue';

    const store = useStore()
    const router = useRouter()
    const icon = computed({
      get(){
        if(store.state.menu.isCollapse){
            return "Right"
        }
        return "Back"
      }
    })
    function logout(){
        store.dispatch('removeAsycnRoutes')
        store.commit('clearToken')
        router.push('login')
        console.log('logout')
    }
    console.log(store.state.menu.isCollapse)
    function changeCollapse(){
        console.log('click')
        store.commit('changeCollapse')
    }
           
</script>

<style lang="less" scoped>
.header{
    display: flex;
    width:100%;
    height:100%;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin:10px;
    .avator-icon-btn{
        border-radius: 4px;
        min-height:40px;
        min-width: 40px;
        cursor:pointer;
        border-radius:50%;
        border:1px solid gray; 
        text-align: center;
        line-height: 40px;
    }
}
</style>