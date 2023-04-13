<!--
 Page: introduce.vue [493793]
 From: 2023-04-03 10:30:22 Ywr
 Remark: 公司介绍-轮播
-->
<template>
  <div class="sn-page introduce">
    <wc-swiper ref="swiper" class="swiper" therehold='10' :autoplay="false" :pagination="false"
      :defaultSlide="currentPage" @transitionend="funOnSlideChange">
      <wc-slide>
        <company></company>
      </wc-slide>
      <wc-slide>
        <team></team>
      </wc-slide>
      <wc-slide>
        <history></history>
      </wc-slide>
      <wc-slide>
        <strategy></strategy>
      </wc-slide>
      <wc-slide>
        <industrial-structure></industrial-structure>
      </wc-slide>
      <wc-slide>
        <honor @getPreviewSrc="getPreviewSrc"></honor>
      </wc-slide>
    </wc-swiper>

    <!-- 底部切换按钮 -->
    <div class="switch-btn-box">
      <ul class="my-btn">
        <li class="sn-f-s-c" @click="funGoHome">
          <img :src="icon" alt="">
          <div>首页</div>
        </li>
        <li class="sn-f-s-c" :class='{active: i === currentPage}'
          v-for="(item, i) in switchList" :key="i" @click="funClickBtn(i)">
          <img :src="item.icon" alt="">
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>

    <!-- 预览证书 -->
    <div class="sn-f-c-c preview-box" v-show="previewSrc" @click="previewSrc = ''">
      <img :src="previewSrc" alt="">
    </div>
  </div>
</template>
<script type="text/javascript">
import Company from './child/company.vue';
import Team from './child/team.vue';
import History from './child/history.vue';
import Strategy from './child/strategy.vue';
import IndustrialStructure from './child/industrial-structure.vue';
import Honor from './child/honor.vue';
import * as constants from '../../common/utils/constants';

export default {
  components: {
    'company': Company,
    'team': Team,
    'history': History,
    'strategy': Strategy,
    'industrial-structure': IndustrialStructure,
    'honor': Honor
  },

  data() {
    return {
      previewSrc: '', // honor组件中 预览图片
      Constants: constants, // 静态路径
      currentPage: null, // 当前下标项
      icon: require('../../../static/img/switch-btn/sy.png'), // 首页icon

      switchList: [
        {
          name: '公司介绍',
          icon: require('../../../static/img/switch-btn/gsjs.png')
        },
        {
          name: '团队介绍',
          icon: require('../../../static/img/switch-btn/tdjs.png')
        },
        {
          name: '发展历程',
          icon: require('../../../static/img/switch-btn/fzlc.png')
        },
        {
          name: '公司战略',
          icon: require('../../../static/img/switch-btn/gszl.png')
        },
        {
          name: '产业结构',
          icon: require('../../../static/img/switch-btn/cyjg.png')
        },
        {
          name: '公司荣誉',
          icon: require('../../../static/img/switch-btn/gsry.png')
        }
      ]
    };
  },

  computed: {
    swiper() { // 当前Swiper对象
      return this.$refs.swiper;
    }
  },

  created() {
    this.currentPage = +this.$route.query.index;
  },

  mounted() {
    // this.$nextTick(() => {
    //   console.log(this.swiper);
    //   setTimeout(() => {
    //     this.funClickBtn(this.currentPage);
    //   }, 100);
    // });
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
    * 点击去首页 (2023-03-30 13:42:45 Ywr)
    */
    funOnSlideChange(currentSlide) {
      this.currentPage = currentSlide;
    },

    /*
    * 2023-04-03 10:37:12 Ywr
    * 点击按钮切换
    */
    funClickBtn(i) {
      this.swiper.slideTo(i);
    },

    /*
    * 2023-04-06 14:41:16 Ywr
    * 获取子组件预览
    */
    getPreviewSrc(src) {
      this.previewSrc = src;
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
    border-top: 2px solid $border;
    backdrop-filter: blur(10px);

    .my-btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 50px auto;
      width: fit-content;

      li {
        background-image: url('../../../static/img/switch-btn/bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 156px;
        width: fit-content;
        height: 61px;
        margin-right: 15px;
        padding-right: 20px;
        color: $white;
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;

        img {
          width: 32px;
          height: fit-content;
          margin-left: 20px;
          margin-right: 15px;
        }
      }

      .active {
        background-image: url('../../../static/img/switch-btn/bg-active.png');
      }
    }
  }

  // 预览证书
  .preview-box {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $mask1;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      height: 900px;
      width: fit-content;
    }
  }
}
</style>
