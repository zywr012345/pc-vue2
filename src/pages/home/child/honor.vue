<!--
 Page: honnr.vue [591484]
 From: 2023-04-03 17:33:41 Ywr
 Remark: 公司荣誉
-->
<template>
  <div class="sn-page honnr-style" :style="{'background-image': backgroundImage}" >

    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-gsry.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 右上角麦穗 -->
    <div class="wheat-box">
      <img class="wheat-left" src="../../../../static/img/honor/wheat-left.png" alt="">
      <ul class="sn-f-s-c">
        <li  v-for="(obj, i) in wheatList" :key="i" @click="funPreview(obj)">
          <img :src="obj" alt="">
        </li>
      </ul>
      <img class="wheat-right" src="../../../../static/img/honor/wheat-right.png" alt="">
    </div>

    <!-- 数据展示 -->
    <div class="data-box">
      <!-- 标题 -->
      <div class="title">认证荣誉资质</div>

      <!-- 列表 -->
      <ul class="sn-f-s-c data-ul">
        <li class="sn-f-col-s-c" v-for="(obj, i) in dataList" :key="i">
          <p>{{ obj.name }}</p>
          <span>{{ obj.remark }}</span>
        </li>
      </ul>

      <!-- 证书 -->
      <div class="certificate can-scroll">
        <ul class="sn-f-s-c can-scroll animated" :class="{'x-center': imgList.length < 10}">
          <li class="can-scroll" v-for="(obj, i) in imgList" :key="i" @click="funPreview(obj)">
            <img class="can-scroll" :src="obj" />
          </li>
        </ul>
      </div>
    </div>

    <!-- 预览证书 -->
    <!-- <div class="preview-box" v-show="previewSrc" @click="previewSrc = ''">
      <img :src="previewSrc" alt="">
    </div> -->
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'Honnr',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/honor.png')}")`, // 背景图
      dataList: [
        {
          name: '10+',
          remark: '用户价值最大化'
        },
        {
          name: '12+',
          remark: '企业荣誉'
        },
        {
          name: '48+',
          remark: '项目荣誉'
        }
      ],
      previewSrc: '', // 证书地址
      wheatList: [ // 麦穗证书
        require('../../../../static/img/honor/wheat0.png'),
        require('../../../../static/img/honor/wheat1.png'),
        require('../../../../static/img/honor/wheat2.png')
      ],
      imgList: [ // 滚动证书
        require('../../../../static/img/honor/0.png'),
        require('../../../../static/img/honor/1.png'),
        require('../../../../static/img/honor/2.png'),
        require('../../../../static/img/honor/3.png'),
        require('../../../../static/img/honor/4.png'),
        require('../../../../static/img/honor/5.png'),
        require('../../../../static/img/honor/6.png'),
        require('../../../../static/img/honor/7.png'),
        require('../../../../static/img/honor/8.png'),
        require('../../../../static/img/honor/9.png')
      ]
    };
  },

  computed: {
    // 当前年份
    nowYear() {
      return new Date().getFullYear() || 2023;
    }
  },

  created() {
    if (this.imgList.length > 9) {
      for (let i = 0; i < 7; i++) {
        this.imgList = [...this.imgList, ...this.imgList];
      }
      this.imgList = this.imgList.slice(0, 900);
    }
  },

  methods: {
    /*
    * 2023-04-03 17:56:41 Ywr
    * 预览证书
    */
    funPreview(obj) {
      this.previewSrc = obj;
      this.$emit('getPreviewSrc', obj);
    }
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.honnr-style {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  // 左上角头部图片
  .head {
    position: absolute;
    width: 100%;
    top: 69px;
    left: 50px;

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

  // 右上角麦穗
  .wheat-box {
    position: absolute;
    top: 158px;
    right: 144px;

    >img {
      width: 115px;
      height: 202px;
      position: absolute;
      top: 90px;
    }

    .wheat-left {
      left: -71px;
    }

    .wheat-right {
      right: -71px;
    }

    >ul {
      width: fit-content;
      height: fit-content;
      position: relative;
      z-index: 1;

      li {
        width: fit-content;
        height: fit-content;

        &:not(:last-child) {
          margin-right: 12px;
        }

        img {
          width: 288px;
          height: 335px;
        }
      }
    }
  }

  // 介绍
  .data-box {
    width: 100%;
    height: 384px;
    margin-top: 326px;
    background: $lineargradient4;

    @keyframes example {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .animated {
      animation: example 3000s infinite linear;
    }

    // 标题
    .title {
      padding-left: 160px;
      padding-top: 32px;
      margin-bottom: 20px;
      font-size: 48px;
      line-height: 72px;
      font-weight: 400;
      color: $white;
    }

    .data-ul {
      padding-left: 160px;

      li {
        margin-right: 74px;
        color: $white;
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;

        p {
          font-size: 58px;
          line-height: 87px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }

    // 证书
    .certificate {
      margin-top: 81px;
      width: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      color: $white;

      &::-webkit-scrollbar {
        display: none;
      }

      ul {
        width: fit-content;

        li {
          margin: 0 5px;
          width: fit-content;

          img {
            width: 199px;
            height: 140px;
          }
        }
      }

      .x-center {
        margin: 0 auto;
      }
    }
  }

  // 预览证书
  // .preview-box {
  //   position: absolute;
  //   z-index: 11;
  //   top: 0;
  //   left: 0;
  //   text-align: center;
  //   width: 100%;
  //   height: 917px;
  //   background: rgba(0, 0, 0, 0.8);
  //   overflow-x: scroll;
  //   overflow-y: hidden;

  //   &::-webkit-scrollbar {
  //     display: none;
  //   }

  //   img {
  //     margin-top: 8px;
  //     height: 900px;
  //     width: fit-content;
  //   }
  // }
}
</style>
