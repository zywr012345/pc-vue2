<!--
 Page: strategy.vue [748937]
 From: 2023-04-03 15:03:45 Ywr
 Remark: 公司战略
-->
<template>
  <div class="sn-page strategy" :style="{'background-image': backgroundImage}">
    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-gszl.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 数据 -->
    <div class="sn-f-s-s data-box">
      <!-- 左侧点击按钮 -->
      <div class="left-btn">
        <ul class="sn-f-s-c">
          <li class="sn-f-s-c" v-for="(obj, i) in dataList" :key="i" @click="funChange(i)"
            :class="{'active-li': i === nowIndex}">
            <img v-show="i === nowIndex" :src="iconActive" alt="">
            <img v-show="i !== nowIndex" :src="icon" alt="">
            <p>{{ obj.name }}</p>
          </li>
        </ul>
      </div>

      <!-- 右侧数据展示 -->
      <div class="right-data">
        <ul class="sn-f-s-c general">
          <li class="sn-f-c-c btn-name" v-for="(item, index) in nowObj.general" :key="index">
            {{ item }}
          </li>
        </ul>
        <!-- 背景图 -->
        <img :src="nowObj.url" alt="">
        <!-- 数据 -->
        <div class="list">
          <!-- 标题 -->
          <div class="title">{{ nowObj.name }}</div>
          <!-- 列表 -->
          <ul>
            <li v-for="(obj, i) in nowObj.list" :key="i">
              <p v-show="i < 2" class="linear"></p>
              {{ obj }}
            </li>
          </ul>
          <!-- <div class="general-right sn-f-col-s-c">
            <div class="sn-f-c-c btn-name" v-for="(item, index) in nowObj.general" :key="index">
              {{ item }}
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'Strategy',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/strategy.png')}")`, // 背景图
      icon: require('../../../../static/img/strategy/icon.png'), // 图标
      iconActive: require('../../../../static/img/strategy/icon-active.png'), // 高亮图标

      nowIndex: 0, // 右侧显示数据下标
      dataList: [ // 数据
        {
          name: '互联网医院',
          url: require('../../../../static/img/strategy/change/hlwyy.png'),
          general: ['智慧门诊', '智慧住院', '统一支付对账'],
          list: [
            '构建覆盖诊前、诊中、诊后的线上线下一体化医疗服务模式',
            '在线开展部分常见病、慢性病复诊，拓展了医疗服务半径',
            '打造符合多场景互联网诊疗业务的同时，实现真正意义上的线下业务线上化。'
          ]
        },
        {
          name: '数字门诊',
          url: require('../../../../static/img/strategy/change/szmz.png'),
          general: ['流程优化', '便捷化', '智能导诊'],
          list: [
            '搭建基于大数据的官方信息门户端，涵盖患者就诊的服务全过程',
            '对就诊全流程进行优化设计和构建体系，“以患者为中心”对医院门诊就诊流程进行优化重组',
            '将看诊流程以便捷化、智能化的方式整合，实现智能导医数字化门诊'
          ]
        },
        {
          name: '特色科室',
          url: require('../../../../static/img/strategy/change/tsks.png'),
          general: ['生命周期管理', '诊后管理'],
          list: [
            '通过使用互联网、人工智能的技术为诊后患者提供系统的诊后管理。',
            '从用药依从性干预、单病种解决方案等服务，延伸至导医、导诊、慢病保险等',
            '全方位一体化的诊后服务，为患者打造全生命周期管理。'
          ]
        },
        {
          name: '智慧住院',
          url: require('../../../../static/img/strategy/change/zhzy.png'),
          general: ['结算优化', '流程简化'],
          list: [
            '优化医疗服务流程，实现患者信息的全面、准确、及时共享',
            '打破传统入院、出院结算模式，实现“数据多跑路、患者少跑腿',
            '真正做到“零距离”服务，极大地简化了出入院流程，真正实现“一站式”出入院服务'
            // '真正做到“零距离”服务，极大地简化了出入院流程，有效减少了患者来回奔走的次数，真正实现“一站式”出入院服务'
          ]
        },
        {
          name: '鲁康通',
          url: require('../../../../static/img/strategy/change/lkt.png'),
          general: ['智能导诊', '流程优化', '便捷化'],
          list: [
            '努力为广大人民群众提供高质、可及的健康管理服务，用心守护全民健康',
            '以用户健康为中心的服务宗旨，拓展传统医疗服务、医药流通、健康保险、医疗信息化等行业的边界',
            '集医疗服务、健康管理服务、康养服务、保险服务、数字营销服务、电商服务为一体'
          ]
        },
        {
          name: '智慧服务管理平台',
          url: require('../../../../static/img/strategy/change/zhfwglpt.png'),
          general: ['便捷、高效、优质', '提高服务质量', '信息化管理'],
          list: [
            '通过信息化技术和互联网技术，对医院的服务进行全面管理和优化',
            '帮助医院提高服务效率、提升服务质量、改善患者体验，实现医疗信息化管理。',
            '医院智慧服务管理平台可以为患者提供更加便捷、高效、优质的医疗服务'
          ]
        }
      ]
    };
  },

  computed: {
    nowObj() {
      return this.dataList[this.nowIndex || 0];
    },
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
    /*
    * 2023-04-03 15:34:43 Ywr
    * 切换数据
    */
    funChange(i) {
      this.nowIndex = i;
      console.log(i);
    }
  }
};
</script>

<style lang="scss">
.strategy {
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

  // 按钮 + 数据
  .data-box {
    margin-top: 107px;
    margin-left: 50px;

    // 左侧按钮
    .left-btn {
      margin-right: 55px;

      >ul {
        flex-wrap: wrap;
        max-width: 760px;

        >li {
          width: 361px;
          height: 152px;
          background: $lineargradient5;
          font-size: 24px;
          line-height: 36px;
          color: $white;
          margin-bottom: 18px;
          margin-right: 18px;
          position: relative;

          // 外层边框
          &::before {
            position: absolute;
            top: 5px;
            left: 12px;
            content: '';
            display: block;
            width: 336px;
            height: 140px;
            opacity: 1;
            border: 1px solid;
            border-image: linear-gradient(336deg, $blue9, transparent) 1;
          }

          // 内层边框
          &::after {
            position: absolute;
            top: 10px;
            left: 22px;
            content: '';
            display: block;
            width: 316px;
            height: 131px;
            opacity: 1;
            border: 1px solid;
            border-image: linear-gradient(156deg, $blue9, transparent) 1;
          }

          img {
            width: 50px;
            height: 50px;
            margin-left: 50px;
            margin-right: 20px;
          }
        }

        .active-li {
          background: $lineargradient6;
          font-weight: 600;
        }
      }
    }

    // 右侧展示数据
    .right-data {
      position: relative;
      width: 1017px;
      height: 486px;

      .general {
        position: absolute;
        left: 30px;
        top: 183px;

        .btn-name {
          padding: 0 17px;
          min-width: 162px;
          height: 40px;
          background: linear-gradient(180deg, $blue3 0%, $blue4 100%);
          border-radius: 24px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: $white;
          margin-right: 10px;
        }
      }

      img {
        width: 100%;
        height: 100%;
      }

      // 数据列表
      .list {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1017px;
        height: 243px;
        padding: 20px 30px;
        backdrop-filter: blur(20px);

        // 标题
        .title {
          font-size: 32px;
          line-height: 48px;
          font-weight: 600;
          color: $white;
          margin-bottom: 20px;
        }

        >ul {
          li {
            font-size: 18px;
            line-height: 27px;
            font-weight: 400;
            color: $white1;
            margin-bottom: 23px;
            position: relative;
          }

          .linear {
            bottom: -12px;
            left: 0;
            position: absolute;
            width: 468px;
            opacity: 1;
            border: 1px dashed $border1;
          }
        }

        // .general-right {
        //   position: absolute;
        //   height: 144px;
        //   width: 162px;
        //   right: 30px;
        //   top: 61px;

        //   .btn-name {
        //     width: 162px;
        //     height: 40px;
        //     background: linear-gradient(180deg, $blue3 0%, $blue4 100%);
        //     border-radius: 24px;
        //     font-size: 16px;
        //     line-height: 24px;
        //     font-weight: 400;
        //     color: $white;
        //     margin-bottom: 12px;
        //   }
        // }
      }
    }
  }
}
</style>
