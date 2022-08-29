<template>
   <el-menu
    class="el-menu-vertical-demo"
    default-active="2"
    :collapse="collapse"
    router
    active-text-color="black"
    text-color="white"
    background-color="#212c55"
  >
    <transition 
     class="transition"
     style="color:white;font: bold;">
      <div v-if="collapse" style="text-align:center;height:50px;line-height:50px;margin:0;font:bold"    class="animate__animated animate__fadeIn">
        {{enterprise.nickName}}
      </div>
      <div v-else style="text-align:center;height:50px;line-height:50px;margin:0;font:bold"    class="animate__animated animate__fadeIn">  
        {{enterprise.name}}
      </div>
    </transition>
    <el-menu-item 
    v-for="item in noChildren" 
    :key="item.name" 
    :index="item.name"
    >
       <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{item.name}}</span>
    </el-menu-item>

    <el-sub-menu v-for="item in hasChildren" :key="item.name" :index="item.name">
      <template #title>
        <el-icon>
        <component :is="item.meta.icon" />
        </el-icon>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item  v-for="ele in item.children" :key="ele.name" :index="ele.name"  >
        <el-icon><component :is="ele.meta.icon" /></el-icon>  
        {{ele.name}}
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup>
  import {useStore} from 'vuex'
  import { computed } from 'vue'
  import "animate.css"
  const store = useStore()
  const collapse = computed(()=>store.state.menu.isCollapse)
  const enterprise = computed(()=>store.state.enterprise.enterprise)
  console.log('@@@',store.state.enterprise.name)
  const asyncMenuList = computed(()=>store.state.user.menu)  

  const hasChildren = computed(()=>{const result =  (store.state.user.menu).filter(item=>item.children) 
    return result
  })

  const noChildren = computed(()=>{const result =  (store.state.user.menu).filter(item=>!item.children)
    return result
  })
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height:100vh;
  .el-menu-item.is-active{
    border-radius:40px;
    background: #f1f5f9 !important;
  }
  .el-menu-item{
    border-radius:40px;
  }
  .el-menu-item {
    height:50px
  }
  .el-sub-menu{
    height:50px
  }
  .el-menu-item:hover{
    background: #f1f5f9 !important;
    color:black
  }
}
.el-menu-vertical-demo:is(.el-menu--collapse) {
  height:100vh;
  
}
</style>>

