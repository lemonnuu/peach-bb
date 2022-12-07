<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <el-header>
    <div class="hl">桃子积木</div>
    <ul class="hr">
      <li><el-button type="primary" round>登录</el-button></li>
      <li><el-switch v-model="isDark" inline-prompt /></li>
    </ul>
  </el-header>
</template>

<style scoped lang="scss">
@use '../../styles/variable.scss' as *;
.el-header {
  background: var(--header-bg-color);
	backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  .hl {
    font-size: 24px;
    font-weight: bold;
    color: var(--el-color-primary);
  }

  .hr {
    display: flex;
    align-items: center;

    li {
      &::before {
        content: '';
        height: 100%;
        border-right: 1px solid rgb(150, 150, 150);
        vertical-align: middle;
        margin: 0 1em;
      }
      &:first-child {
        &::before {
          content: none;
        }
      }
    }
    .el-switch {
      --el-switch-on-color: #2c2c2c;
      --el-switch-off-color: #f2f2f2;
    }
  }
}
</style>
