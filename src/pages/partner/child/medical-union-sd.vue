<!--
 Page: medical-union-sd.vue [166721]
 From: 2023-04-07 16:44:27 Ywr
 Remark: 医联山东
-->
<template>
<div class="sn-page medical-union-sd" :style="{'background-image': backgroundImage}">
  <!-- 标题 -->
  <img class="head" src="../../../../static/partner/head/ylsd.png" alt="">

  <div class="sn-f-b-c data-box">
    <!-- 左侧切换框 -->
    <ul class="switch-box">
      <li v-for="(obj, i) in dataList" :key="i" @click="nowIndex = i"
        :class="{active: i === nowIndex}">
        <img src="../../../../static/partner/medical-union-sd/title-icon.png" alt="">
        <div class="sn-f-s-c title">
          <span>0{{ i+1 }}</span>
          {{ obj.name }}
        </div>
        <div class="remark">{{ obj.remark }}</div>
      </li>
    </ul>

    <!-- 右侧展示数据 -->
    <div class="show-box">
      <!-- 平台介绍 -->
      <div v-show="nowIndex === 0" class="platform-introduction">
        <div class="title">“医联山东”平台由山东省医师协会牵头主导，以移动互联网终端为载体，应用最新的分布式架构，在保证医院系统独立运行情况下，打破信息孤岛，通过网络与院内信息化系统实时连接，实现信息的互联互通！</div>
        <!-- 信息 -->
        <div class="sn-f-col-b-s msg-box">
          <div class="msg-top">
            <div class="my-icon" v-for="(str, strIndex) in platformArr[platformIndex].msg" :key="strIndex">
              {{ str }}
            </div>
          </div>
          <ul class="sn-f-s-c msg-bottom">
            <li class="sn-f-c-c" :class="{'msg-active': platformIndex === index}"
              v-for="(item, index) in platformArr" :key="index"
              @click="platformIndex = index">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 荣誉及合作伙伴 -->
      <div v-show="nowIndex === 1" class="honor-partner">
        <div class="my-icon">获评2019年度济南市智慧城市创新应用示范项目！</div>
        <div class="my-icon">2020年，医联山东被工业和信息化部评为“大数据产业发展试点示范项目” !</div>
        <!-- 证书 -->
        <ul class="certificate sn-f-b-c">
          <li class="sn-f-col-b-c" v-for="(item, honorIndex) in honorList" :key="honorIndex" @click="funPreviewImg(item.src)">
            <img :src="item.src" alt="">
            <div>{{ item.name }}</div>
          </li>
        </ul>
        <!-- 底部图片 -->
        <img class="bottom-partner" src="../../../../static/partner/medical-union-sd/honor-bottom.png" alt="">
      </div>

      <!-- 平台介绍 -->
      <div v-show="nowIndex === 2" class="platform-introduction">
        <div class="title">“医联山东”平台由山东省医师协会牵头主导，以移动互联网终端为载体，应用最新的分布式架构，在保证医院系统独立运行情况下，打破信息孤岛，通过网络与院内信息化系统实时连接，实现信息的互联互通！</div>
        <!-- 信息 -->
        <div class="sn-f-col-b-s msg-box">
          <div class="msg-top">
            <div class="my-icon" v-for="(str, strIndex) in endArr[endIndex].msg" :key="strIndex">
              {{ str }}
            </div>
          </div>
          <ul class="sn-f-s-c msg-bottom">
            <li class="sn-f-c-c" :class="{'msg-active': endIndex === index}"
              v-for="(item, index) in endArr" :key="index"
              @click="endIndex = index">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'MedicalUnionSD',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/partner/bg/jdal.png')}")`, // 背景图
      nowIndex: 0, // 当前触发下标
      dataList: [ // 左侧切换框
        {
          name: '平台介绍',
          remark: '指供人们施展才能的舞台、为操作方便而设置的工作台'
        },
        {
          name: '荣誉及合作伙伴',
          remark: '指供人们施展才能的舞台、为操作方便而设置的工作台'
        },
        {
          name: '平台介绍',
          remark: '指供人们施展才能的舞台、为操作方便而设置的工作台'
        }
      ],

      platformIndex: 0, // 平台介绍触发下标
      platformArr: [ // 平台介绍数据
        {
          title: '权威认证',
          msg: [
            '“医健通”、山东省医师协会、山东移动、济南市政府泉城政务APP、浪潮集团、万科集团、漱玉平民大药房、齐鲁银行、山东省城市商业银行等'
          ]
        },
        {
          title: '便民功能',
          msg: [
            '便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能便民功能'
          ]
        },
        {
          title: '建设原则',
          msg: [
            '建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则建设原则'
          ]
        },
        {
          title: '海量用户',
          msg: [
            '海量用户海量用户海量用户海量用户海量用户'
          ]
        },
        {
          title: '指导思想',
          msg: [
            '指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想指导思想'
          ]
        },
        {
          title: '平台合作',
          msg: [
            '平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作平台合作'
          ]
        },
        {
          title: '优质的医疗合作机构',
          msg: [
            '优质的医疗合作机构'
          ]
        }
      ],

      honorList: [ // 荣誉及合作伙伴数据
        {
          name: '山东省企业技术创新奖',
          src: require('../../../../static/partner/medical-union-sd/honor0.png')
        },
        {
          name: '山东省大数据创新应用技能大赛于一等奖',
          src: require('../../../../static/partner/medical-union-sd/honor1.png')
        },
        {
          name: '山东省移动互联网及5G应用创新技能大赛二等奖',
          src: require('../../../../static/partner/medical-union-sd/honor2.png')
        }
      ],

      endIndex: 0, // 最后一项触发下标
      endArr: [ // 最后一项数据
        {
          title: '便民医疗服务阶段',
          msg: ['预约挂号、就医服务、在线咨询、私人医生、体检预约、在线购药、心理测评、保险购买等']
        },
        {
          title: '健康管理阶段',
          msg: [
            '特定服务（陪诊、放号/退号提醒、专家号预约、在线购药，药品配送）',
            '健康讲堂（传播健康意识、倡导健康生活） ',
            '专病版块运营（孕婴、早产儿、慢病管理等）'
          ]
        },
        {
          title: '健康生态运营阶段',
          msg: [
            '医生服务（打造个人品牌，建立与患者的紧密联系）',
            '商城的打造（就医权益类、医药（器械）类、体检权益类）'
          ]
        }
      ]
    };
  },

  methods: {
    /*
    * 2023-04-07 16:26:41 Ywr
    * 预览证书
    */
    funPreviewImg(obj) {
      this.$emit('getPreviewSrc', obj);
    }
  }
};
</script>

<style lang="scss">
.medical-union-sd {
  background-size: cover;
  background-repeat: no-repeat;
  // background: $lineargradient5;
  // opacity: 0.75;

  .head {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 430px;
    height: 136px;
    margin-bottom: 17px;
  }

  .data-box {
    margin: 80px 122px 0 150px;
    color: $white;

    // 左侧切换框
    .switch-box {
      li {
        position: relative;
        padding: 23px 46px 23px 46px;
        width: 416px;
        height: 183px;
        background: $lineargradient8;

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 126px;
          height: 48px;
        }

        .title {
          font-size: 32px;
          line-height: 48px;
          font-weight: 600;

          span {
            font-size: 48px;
            line-height: 72px;
            font-weight: bold;
          }
        }

        .remark {
          margin-top: 4px;
          font-size: 18px;
          font-weight: 400;
          line-height: 27px;
        }
      }

      .active {
        width: 416px;
        height: 183px;
        background: linear-gradient(180deg, $blue3 0%, $blue4 100%);
      }
    }

    // 右侧显示框
    .show-box {
      // width: 1213px;
      height: 549px;
      flex: 1;
      overflow: hidden;

      .my-icon {
        position: relative;
        padding-left: 19px;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
        color: $white;

        &::before {
          display: block;
          content: '';
          background-image: url('../../../../static/partner/medical-union-sd/msg-icon.png');
          width: 9px;
          height: 23px;
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          left: 0;
        }
      }

      // 平台介绍
      .platform-introduction {
        height: 100%;
        padding: 30px 50px 20px 50px;
        background: $lineargradient9;

        .title {
          font-size: 24px;
          line-height: 24px*3/2;
          font-weight: 600;
          margin-bottom: 35px;
        }

        .msg-box {
          background-image: url('../../../../static/partner/medical-union-sd/msg-bg.png');
          background-size: cover;
          background-repeat: no-repeat;
          height: 398px;
          overflow-y: hidden;

          .msg-top {
            flex: 1;
            padding: 31px 50px 31px 50px;
            width: 783px;
            font-size: 18px;
            line-height: 27px;
            font-weight: 400;
            overflow-x: hidden;
            overflow-y: scroll;
            flex-wrap: wrap;

            &::-webkit-scrollbar {
              display: none;
            }
          }

          .msg-bottom {
            flex-wrap: wrap;
            width: 1100px;
            border-top: 1px dashed $white;
            margin-left: 29px;
            padding: 30px 21px 0 21px;

            li {
              min-width: 162px;
              width: fit-content;
              height: 40px;
              border-radius: 24px;
              font-size: 16px;
              line-height: 16px*2/3;
              font-weight: 400;
              color: $white;
              padding: 0 9px;
              background: rgba(255, 255, 255, 0.5);
              margin-right: 44px;
              margin-bottom: 20px;
            }

            .msg-active {
              background: linear-gradient(180deg, $blue3 0%, $blue4 100%);
              opacity: 1;
            }
          }
        }
      }

      // 荣耀以及合作伙伴
      .honor-partner {
        height: 100%;
        padding: 34px 50px 7px 50px;
        background: $lineargradient9;
        color: $white;

        .my-icon {
          font-size: 18px;
          margin-bottom: 32px;
          font-weight: 400;
          padding-left: 19px;
        }

        // 证书
        .certificate {
          margin-top: 42px;
          width: 100%;

          li {
            // margin-right: 83px;
            flex: 1;

            img {
              width: 314px;
              height: 191px;
              margin-bottom: 16px;
            }

            div {
              width: 100%;
              text-align: center;
              font-size: 16px;
              font-weight: 400;
              color: $white1;
            }
          }
        }

        .bottom-partner {
          display: block;
          margin: 0 auto;
          margin-top: 33px;
          width: 1101px;
          height: 122px;
        }
      }
    }
  }
}
</style>
