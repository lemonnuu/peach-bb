<script setup lang='ts'>
import {useRouter} from 'vue-router'
interface InfoCardItem {
  title: string,
  author: string,
  people: number
  [key: string]: any // 奇奇怪怪
}
interface InfoCards {
  dataList: InfoCardItem[]
}
defineProps<InfoCards>()

const router = useRouter()

const handleClick = (item: InfoCardItem) => {
  console.log('和四大', router)
  router.push({
    path: 'detail',
    query: item
  })
}
</script>

<template>
  <el-row :gutter="30">
    <el-col :span="6" v-for="(item) in dataList" :key="item.title">
      <el-card :body-style="{ padding: 0 }" shadow="hover">
        <div class="img-wrap">
          <img src="../../assets/images/card.jpg" alt="">
          <el-button type="primary" @click="handleClick(item)">使用该模板创建</el-button>
        </div>
        <p class="item-title">{{item.title}}</p>
        <p class="bottom">
          <span class="item-author">作者：{{item.author}}</span>
          <span class="item-people">
            <e-user />
            {{item.people}}
          </span>
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-col  {
  margin-bottom: 30px;
  .el-card {
    .img-wrap {
      position: relative;
      height: 450px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        transition: transform .4s;
      }
      .el-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        transition: display .4s;
      }
      &:hover {
        img {
          transform: scale(1.15);
        }
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: .3;
          background-image: linear-gradient(to top, #F4F4F4 0%, #DFDEDC 100%);
        }
        .el-button {
          display: block;
          z-index: 2;
        }
      }
    }
    .item-title {
      margin: 10px 10px 20px;
      font-size: 16px;
      font-weight: 600;
    }
    .bottom {
      margin: 0 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #7b7a7a;
      font-size: 14px;
    }
  }
}
</style>
