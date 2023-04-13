<!--
 Page: introduce.vue [493793]
 From: 2023-04-03 10:30:22 Ywr
 Remark: 公司介绍-轮播
-->
<template>
  <div class="sn-page introduce">
    <company v-if="currentPage === 0"></company>
    <team v-else-if="currentPage === 1"></team>
    <history v-else-if="currentPage === 2"></history>
    <strategy v-else-if="currentPage === 3"></strategy>
    <industrial-structure v-else-if="currentPage === 4"></industrial-structure>
    <honnr v-else></honnr>

    <!-- 底部切换按钮 -->
    <div class="switch-btn-box">
      <ul class="my-btn">
        <li class="sn-f-s-c" @click="funGoHome">
          <img :src="icon" alt="">
          <div>首页</div>
        </li>
        <li class="sn-f-s-c" :class='{active:i === currentPage}'
          v-for="(item, i) in switchList" :key="i" @click="funClickBtn(i)">
          <img :src="item.icon" alt="">
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Company from './company.vue';
import Team from './team.vue';
import History from './history.vue';
import Strategy from './strategy.vue';
import IndustrialStructure from './industrial-structure.vue';
import Honnr from './honnr';

import * as constants from '../../common/utils/constants';

export default {
  data() {
    return {
      Constants: constants, // 静态路径
      currentPage: 0, // 当前下标项
      icon: require('../../common/img/switch-btn/sy.png'),

      switchList: [
        {
          name: '公司介绍',
          icon: require('../../common/img/switch-btn/gsjs.png')
        },
        {
          name: '团队介绍',
          icon: require('../../common/img/switch-btn/tdjs.png')
        },
        {
          name: '发展历程',
          icon: require('../../common/img/switch-btn/fzlc.png')
        },
        {
          name: '公司战略',
          icon: require('../../common/img/switch-btn/gszl.png')
        },
        {
          name: '产业结构',
          icon: require('../../common/img/switch-btn/cyjg.png')
        },
        {
          name: '公司荣誉',
          icon: require('../../common/img/switch-btn/gsry.png')
        }
      ]
    };
  },

  components: {
    'company': Company,
    'team': Team,
    'history': History,
    'strategy': Strategy,
    'industrial-structure': IndustrialStructure,
    'honnr': Honnr
  },

  beforeRouteLeave(to, from, next) {
    next();
  },

  created() {
    this.currentPage = +this.$route.query.index;
    // this.$router.push({path: '/swiper'});
  },

  methods: {
    /*
    * 2023-04-03 10:36:46 Ywr
    * 点击去首页
    */
    funGoHome() {
      this.$router.back();
    },

    /*
    * 2023-04-03 10:36:55 Ywr
    * 点击按钮切换
    */
    funOnSlideChange() {
      // this.currentPage = this.Swiper.activeIndex - 1;
    },

    /*
    * 2023-04-03 10:37:12 Ywr
    * 点击按钮切换
    */
    funClickBtn(i) {
      // this.Swiper.slideTo(i);
      this.currentPage = i;
    }
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.introduce {
  // 底部切换按钮
  .switch-btn-box {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    text-align: center;
    background-color: $blue1;
    border-top: 2px solid $border;

    .my-btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 50px auto;
      width: fit-content;

      li {
        width: 156px;
        height: 61px;
        margin-right: 15px;
        background: $blue2;
        color: $white;
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        // transition: all .1s;

        img {
          width: 32px;
          height: fit-content;
          margin-left: 20px;
          margin-right: 15px;
        }
      }

      .active {
        background: linear-gradient(180deg, $blue3 0%, $blue4 100%);
      }
    }
  }
}
</style>
