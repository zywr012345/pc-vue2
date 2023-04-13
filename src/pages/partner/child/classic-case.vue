<!--
 Page: classic-case.vue [964013]
 From: 2023-04-07 16:45:49 Ywr
 Remark: 经典案例
-->
<template>
  <div class="sn-page classic-case" :style="{'background-image': backgroundImage}">
    <!-- 标题 -->
    <img class="head" src="../../../../static/partner/head/jdal.png" alt="">

    <div class="data-box">
      <div class="sn-f-c-c title">
        已经合作过100+家知名企业
      </div>

      <!-- 轮播窗口 -->
      <div class="x-scroll">
        <!-- 内部长列表 -->
        <div class="sn-f-s-c animated">
          <!--  循环120页  -->
          <ul class="sn-f-s-c" v-for="index in 120" :key="index">
            <!-- 元数据 -->
            <li class="sn-f-s-c" v-for="(obj, i) in dataList" :key="i">
              <img class="icon-img" :src="obj.icon" alt="">
              <div>{{ obj.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'ClassicCase',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/partner/bg/jdal.png')}")`, // 背景图
      dataList: [
        {
          name: '济南市中心医院',
          icon: require('../../../../static/partner/classic-case/jnszxyy.png')
        },
        {
          name: '青岛市市立医院',
          icon: require('../../../../static/partner/classic-case/qdsslyy.png')
        },
        {
          name: '济宁市第一人民医院',
          icon: require('../../../../static/partner/classic-case/jnsdyrmyy.png')
        },
        {
          name: '聊城市人民医院',
          icon: require('../../../../static/partner/classic-case/lcsrmyy.png')
        },
        {
          name: '滨州医学院附属医院',
          icon: require('../../../../static/partner/classic-case/bzyxyfzsyy.png')
        },
        {
          name: '潍坊市益都中心医院',
          icon: require('../../../../static/partner/classic-case/wfsydzxyy.png')
        },
        {
          name: '泰安市妇幼保健院',
          icon: require('../../../../static/partner/classic-case/tasfybjy.png')
        },
        {
          name: '山东大学附属生殖医院',
          icon: require('../../../../static/partner/classic-case/sddxfzsszsyy.png')
        },
        {
          name: '济南市人民医院',
          icon: require('../../../../static/partner/classic-case/jnsrmyy.png')
        },
        {
          name: '泰安市中心医院',
          icon: require('../../../../static/partner/classic-case/taszxyy.png')
        },
        {
          name: '滕州市中心人民医院',
          icon: require('../../../../static/partner/classic-case/tzszxrmyy.png')
        },
        {
          name: '山东大学齐鲁医院',
          icon: require('../../../../static/partner/classic-case/sddxqjlyy.png')
        },
        {
          name: '山东中医药大学附属医院',
          icon: require('../../../../static/partner/classic-case/sdzyydxfzsyy.png')
        },
        {
          name: '烟台毓璜顶医院',
          icon: require('../../../../static/partner/classic-case/ytyhdyy.png')
        },
        {
          name: '济南千佛山医院',
          icon: require('../../../../static/partner/classic-case/jnqbsyy.png')
        },
        {
          name: '山东大学齐鲁儿童医院',
          icon: require('../../../../static/partner/classic-case/sddxqletyy.png')
        },
        {
          name: '山东省立医院',
          icon: require('../../../../static/partner/classic-case/sdsxlyy.png')
        },
        {
          name: '德州市立医院',
          icon: require('../../../../static/partner/classic-case/dzslyy.png')
        },
        {
          name: '烟台市烟台山医院',
          icon: require('../../../../static/partner/classic-case/ytsytsyy.png')
        },
        {
          name: '滨州市人民医院',
          icon: require('../../../../static/partner/classic-case/bzsrmyy.png')
        }
      ]
    };
  },

  methods: {
  }
};
</script>

<style lang="scss">
.classic-case {
  background-size: cover;
  background-repeat: no-repeat;
  // background: linear-gradient(136deg, #040c19 0%, #0d1d36 100%);
  // background: linear-gradient(136deg, rgba(4, 12, 25, 0.75) 0%, rgba(13, 29, 54, 0.75) 100%);
  // opacity: 0.75;

  // 头部标签
  .head {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 430px;
    height: 136px;
    margin-bottom: 17px;
  }

  // 数据
  .data-box {
    .title {
      font-size: 44px;
      line-height: 66px;
      font-weight: 600;
      color: $orange;
      margin: 73px 0 71px 0;
    }

    @keyframes example {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .animated {
      animation: example 3600s infinite linear;
    }

    // 可使窗口
    .x-scroll {
      width: 1545px;
      margin: 0 auto;
      overflow-x: hidden;

      // 长列表页
      >div {
        width: fit-content;

        // 元数据
        ul {
          flex-wrap: wrap;
          width: 1545px;

          // 单项
          li {
            width: 294px;
            height: 93px;
            background: $white;
            margin-right: 15px;
            margin-bottom: 24px;
            padding: 13px 17px;

            img {
              width: 76px;
              height: fit-content;
              margin-right: 12px;
            }

            div {
              flex: 1;
              font-size: 18px;
              line-height: 27px;
              font-weight: 400;
              color: $black;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
}
</style>
