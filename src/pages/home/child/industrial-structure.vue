<!--
 Page: Industrial-structure.vue [798196]
 From: 2023-04-03 16:41:55 Ywr
 Remark: 产业结构
-->
<template>
  <div class="sn-page company-introduce" :style="{'background-image': backgroundImage}">
    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-cyjg.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 数据展示 -->
    <div class="data-box">
      <ul class="sn-f-s-c">
        <li class="sn-f-col-c-s" v-for="(obj, i) in dataList" :key="i"
          :class="[i%2 === 0 ? 'li-left' : 'li-right']">
          <!-- 圆圈 -->
          <div class="sn-f-c-c round">{{obj.round}}%</div>
          <!-- 名称 -->
          <div class="name">{{ obj.name }}</div>
          <!-- 简介 -->
          <div class="remark">{{ obj.remark }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'IndustrialStructure',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/structure.png')}")`, // 背景图
      dataList: [
        {
          round: 100,
          name: '顺能医生集团管理(山东)有限公司',
          remark: '医生平台'
        },
        {
          round: 100,
          name: '山东直通原产商贸有限公司',
          remark: '健康商城'
        },
        {
          round: 65,
          name: '顺众数字科技(山东)有限公司',
          remark: '医药平台'
        },
        {
          round: 100,
          name: '顺驭数字科技(山东)有限公司',
          remark: '医保平台'
        }
      ]
    };
  },

  computed: {
    // 当前年份
    nowYear() {
      return new Date().getFullYear() || 2023;
    }
  },

  methods: {
  }
};
</script>

<style lang="scss">
.company-introduce {
  background-size: cover;
  background-repeat: no-repeat;

  // 左上角头部图片
  .head {
    margin-top: 70px;
    margin-left: 50px;
    position: relative;

    >img {
      width: 320px;
      height: 114px;
    }

    p {
      position: absolute;
      bottom: 0;
      left: 161px;
      line-height: 36px;
      font-size: 24px;
      color: $white;
      font-weight: 400;
    }
  }

  // 数据展示
  .data-box {
    margin-top: 79px;
    margin-left: 161px;

    ul {
      width: 1880px;
      flex-wrap: wrap;

      li {
        width: 668px;
        height: 251px;
        border: 1px solid;
        color: $white;
        position: relative;
        margin-right: 262px;
        margin-bottom: 40px;

        // 圆圈
        .round {
          width: 161px;
          height: 161px;
          border-radius: 50%;
          overflow: hidden;
          background: $lineargradient3;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 48px;
          line-height: 72px;
          font-weight: 600;
        }

        // 名称
        .name {
          font-size: 32px;
          line-height: 48px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        // 简介
        .remark {
          line-height: 36px;
          font-size: 24px;
          font-weight: 400;
        }
      }

      // 左侧边框样式
      .li-left {
        background: linear-gradient(270deg, $black2 0%, $black3 100%);
        border-image: linear-gradient(to left, $blue10, transparent) 1;
        padding-left: 90px;
        border-left: 0;

        .round {
          right: -80.5px;
        }
      }

      // 右侧边框样式
      .li-right {
        background: linear-gradient(87deg, $black2 0%, $black3 100%);
        border-image: linear-gradient(to right, $blue10, transparent) 1;
        border-right: 0;
        padding-left: 173px;

        .round {
          left: -80.5px;
        }
      }
    }
  }
}
</style>
