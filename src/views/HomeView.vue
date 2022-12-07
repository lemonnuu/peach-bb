<script setup lang='ts'>
// import InfoCard from '@/components/atom/InfoCard.vue'
import {reactive} from 'vue'

const dataList = reactive([
  {
    title: '前端架构师直播海报',
    author: 'Idhs的撒娇',
    people: 167
  },
  {
    title: '1024程序员日',
    author: 'mochi',
    people: 72
  },
  {
    title: '招聘-打撒十大',
    author: 'mochi',
    people: 72
  },
  {
    title: '未命名作品',
    author: 'mochi',
    people: 72
  },
  {
    title: 'worasSaaSald',
    author: 'mochi',
    people: 72
  }
])
</script>

<template>
  <main class="main">
    <div class="search"></div>
    <div class="introduce"></div>
    <div class="content">
      <div class="title">热门海报</div>
      <div class="desc">只需替换文字和图片，一键自动生成 H5</div>
      <info-card :data-list="dataList" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../styles/variable.scss' as *;
@use '../styles/_mixins.scss' as *; 
.main {
  min-height: calc(100vh - 120px);
  .search {
    height: 60vh;
    background-image: 
      radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%),
      radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: screen;
  }
  .introduce {
    background:  
      linear-gradient(-180deg, rgba(255, 255, 255, 0.50) 2%, rgba(0, 0, 0, 0.50) 100%),
      radial-gradient(51% 97%, #E8E8E8 7%, #CCCCCC 97%);
    background-blend-mode: multiply;
    height: 20vh;
  }

  .content {
    margin-top: 25px;
    padding: 0 5%;
    
    .title {
      font-size: 26px;
      font-weight: 700;
      @include end-line(60px, 1px, $border-corlor, 10px);
    }

    .desc {
      margin: 10px 0 45px;
      text-align: center;
      font-weight: 500;
    }
  }
}
</style>
