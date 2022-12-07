<script setup lang='ts'>
</script>

<template>
  <el-footer>Copyright © 2022-present Mochi</el-footer>
</template>

<style scoped lang="scss">
@use '../../styles/variable.scss' as *;
.el-footer {
  border-top: 1px solid $border-corlor;
  height:  var(--el-footer-height);
  line-height: var(--el-footer-height);
  text-align: center;
}
</style>
