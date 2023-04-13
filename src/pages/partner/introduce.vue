<!--
 Page: introduce.vue [493793]
 From: 2023-04-03 10:30:22 Ywr
 Remark: 公司介绍-轮播
-->
<template>
  <div class="sn-page introduce">
    <!-- <template v-if="currentPage === 0">
      <city-map v-else></city-map>
    </template>
    <cooperative-partner v-show="currentPage === 1"></cooperative-partner>
    <scientific v-show="currentPage === 2"></scientific>
    <classic-case v-show="currentPage === 3"></classic-case>
    <medical-union-sd v-show="currentPage === 4"  @getPreviewSrc="getPreviewSrc"></medical-union-sd> -->

    <wc-swiper ref="swiper" class="swiper" therehold='10' :autoplay="false"
      :defaultSlide="currentPage" @transitionend="funOnSlideChange">
      <wc-slide>
        <shandong-map></shandong-map>
      </wc-slide>
      <wc-slide>
        <cooperative-partner></cooperative-partner>
      </wc-slide>
      <wc-slide>
        <scientific ></scientific>
      </wc-slide>
      <wc-slide>
        <classic-case ></classic-case>
      </wc-slide>
      <wc-slide>
        <medical-union-sd @getPreviewSrc="getPreviewSrc"></medical-union-sd>
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
import ShanongMap from './child/map.vue';
import CooperativePartner from './child/cooperative-partner.vue';
import Scientific from './child/scientific.vue';
import ClassicCase from './child/classic-case.vue';
import MedicalUnionSD from './child/medical-union-sd.vue';
import * as constants from '../../common/utils/constants';

export default {
  components: {
    'shandong-map': ShanongMap,
    'cooperative-partner': CooperativePartner,
    'scientific': Scientific,
    'classic-case': ClassicCase,
    'medical-union-sd': MedicalUnionSD
  },

  data() {
    return {
      previewSrc: '', // honor组件中 预览图片
      Constants: constants, // 静态路径
      currentPage: 0, // 当前下标项
      icon: require('../../../static/partner/switch-btn/sy.png'),

      switchList: [
        {
          name: '医疗合作',
          icon: require('../../../static/partner/switch-btn/ylhz.png')
        },
        {
          name: '战略合作',
          icon: require('../../../static/partner/switch-btn/zlhz.png')
        },
        {
          name: '科研机构',
          icon: require('../../../static/partner/switch-btn/kyjg.png')
        },
        {
          name: '经典案例',
          icon: require('../../../static/partner/switch-btn/jdal.png')
        },
        {
          name: '医联山东',
          icon: require('../../../static/partner/switch-btn/ylsd.png')
        }
      ]
    };
  },

  computed: {
    swiper() { // 当前Swiper对象
      return this.$refs.swiper;
    }
  },

  mounted() {
    this.$nextTick(() => {
      console.log(this.swiper);
    });
  },

  methods: {
    /*
    * 2023-04-03 10:36:46 Ywr
    * 点击去首页
    */
    funGoHome() {
      this.$router.go(-1);
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
      // this.currentPage = i;
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
  background: #1f40aa;

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
        min-width: 156px;
        height: 61px;
        margin-right: 15px;
        padding-right: 20px;
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
