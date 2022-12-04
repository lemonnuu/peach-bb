<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Plus } from '@element-plus/icons-vue'
import IcBaselineLightMode from './components/icons/IcBaselineLightMode.vue'

const isDark = useDark()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="hl">桃子积木</div>
        <el-button>搭建</el-button>
        <div class="hr">
          <el-switch 
            v-model="isDark"
            inline-prompt
            :active-icon="Plus"
            :inactive-icon="IcBaselineLightMode"
            style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #f2f2f2"
           />
           <el-icon><Plus /></el-icon>
           <el-icon color="#409EFC"><IcBaselineLightMode /></el-icon>
        </div>
      </el-header>
      <el-main class="main">
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  .header {
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 0 80px;

    .hl {
      font-size: 24px;
      font-weight: bold;
      color: pink;
    }
  }
  .main {
    /* background-color: bisque; */
  }
  .footer {
    background-color: aquamarine;
  }
}
</style>
