<!--
 Page: Company.vue [831327]
 From: 2023-04-03 11:02:09 Ywr
 Remark: 公司介绍
-->
<template>
  <div class="sn-page company-style" :style="{'background-image': backgroundImage}">
    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-gsjs.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 介绍 -->
    <div class="introduce">
      <ul class="sn-f-s-c">
        <li class="sn-f-s-c" v-for="(obj, i) in dataList" :key="i">
          <img :src="obj.icon" alt="">
          <div class="sn-f-col-b-s msg">
            <p class="name">{{ obj.name }}</p>
            <p>{{ obj.remark }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'Company',
  data() {
    return {
      str: 'name',
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/gsjs.png')}")`, // 背景图
      dataList: [
        {
          name: '服务宗旨',
          remark: '用户价值最大化',
          icon: require('../../../../static/img/gsjs/fwzz.png')
        },
        {
          name: '企业理念',
          remark: '移动改变医疗，掌医守护健康',
          icon: require('../../../../static/img/gsjs/qyln.png')
        },
        {
          name: '企业使命',
          remark: '把自己做好，将客户做强',
          icon: require('../../../../static/img/gsjs/qysm.png')
        },
        {
          name: '企业愿景',
          remark: '中国移动医疗行业领军品牌',
          icon: require('../../../../static/img/gsjs/qyyj.png')
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

  beforeRouteLeave(to, from, next) {
    next();
  },

  created() {
    // this.$router.push({path: '/swiper'});
  },

  methods: {
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.company-style {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  // 左上角头部图片
  .head {
    margin-top: 69px;
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

  // 介绍
  .introduce {
    margin-top: 123px;
    margin-left: 107px;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    color: $white1;

    >ul {
      flex-wrap: wrap;
      max-width: 1970px;

      // 单项
      >li {
        width: 764px;
        height: 181px;
        background: $lineargradient3;
        border-radius: 15px;
        padding: 42px 52px;
        margin-right: 129px;
        margin-bottom: 91px;

        // 图标
        >img {
          width: 97px;
          height: fit-content;
          margin-right: 52px;
        }

        // 文字介绍
        .msg {
          height: 100%;

          .name {
            font-size: 32px;
            line-height: 48px;
            font-weight: 600;
            color: $white;
          }
        }
      }
    }
  }
}
</style>
