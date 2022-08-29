<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto" >
        <common-asider/>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <div class="main-container">
          <crumb/>
          <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import commonAsider from '../../components/sidebar.vue'
  import commonHeader from '../../components/commonHeader.vue'
  import crumb from '../../components/crumb.vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

</script>

<style lang="less" scoped>
*{
  border:none;
}

.el-aside{
  height:100vh;
    border:none
}
.el-header{
  height: 5vh;
  min-width:800px;
  background-color:#212c55;
  border:none;
  display:flex;
  align-content: center;
}
.el-main{
  min-height:600px;
  background-color: #212c55;
  .main-container{
    width:100%;
    height:100%;
    border-radius: 50px 0 0 50px;
    background-color: #f2f5f8;
  }
}



</style>