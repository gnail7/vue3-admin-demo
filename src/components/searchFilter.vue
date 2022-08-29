<template>
  <h2>searchFilter</h2>
  <div class="search-filter-wrapper">

  <el-input
  v-model="searchModel"
  class="search-input"
  placeholder="placeholder"
  :style="`width:${searchWidth}`"
  @keyup.enter="clickSearch"
  clearable
  :prefix-icon="Search"
  >

  </el-input>
  <el-button type="primary" @click="clickSearch" icon="Search">
    <i> 搜索</i>
  </el-button>
  </div>
</template>

<script setup>
import { ref,defineProps  } from 'vue';
import { Avatar, Lock ,Search} from "@element-plus/icons-vue";

const props = defineProps({
    searchWidth:{
        type: String,
        default:"500px"
    },
    plactholder:{
        type: String,
        default: "please input infomation"
    },
    label:{
        type:String,
        default:'搜索'
    }
})
const searchModel =ref('')
let timer = null
function clickSearch(){
    console.log(searchModel.value)
}
</script>

<style lang="less" scoped>
.search-filter-wrapper{
    display: flex;
    .search-input{
        height:36px
    }
    .el-button{
        height:36px
    }
}
</style>