<script setup lang="ts">
import NavHeader from './components/structure/NavHeader.vue'
import CustomFooter from './components/structure/CustomFooter.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container direction="vertical">
    <nav-header />
    <RouterView />
    <custom-footer v-if="!route.meta.hiddenFooter" />
  </el-container>
</template>

<style scoped lang="scss">
</style>
