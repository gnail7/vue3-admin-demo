<template>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-breadcrumb{
    padding:10px 20px;
    box-shadow:0 4px 4px rgba(0, 0, 0, 0.2);
}

</style>