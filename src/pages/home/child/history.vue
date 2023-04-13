<!--
 Page: history.vue [248654]
 From: 2023-04-03 13:53:50 Ywr
 Remark: 发展历程
-->
<template>
  <div class="sn-page history-style" :style="{'background-image': backgroundImage}">
    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-fzlc.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 发展历程 -->
    <div class="data-box can-scroll">
      <img :style="{'width': myUlWidth}" class="bg-img can-scroll" src="../../../../static/img/history/scroll-bg.png" alt="">
      <ul ref="myUl" class="data-ul can-scroll" :style="{'padding-right': dataUlRight}">
        <li class="single can-scroll" :class="{'single-top': i%2 === 0}" v-for="(obj, i) in historyList" :key="i">
          <img class="can-scroll" :src="obj.icon" alt="">
          <div class="linear can-scroll"></div>
          <div class="msg can-scroll"
            :style="{width: (obj.width || '600')*100/1920 + 'vw'}">
            <!-- <div class="dot"></div> -->
            <div class="remark can-scroll" v-for="(item, index) in obj.arr" :key="index">
              <p class="can-scroll" v-for="(end, endIndex) in item" :key="endIndex">{{ end }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'History',
  data() {
    return {
      dataUlRight: '10.41667vw',
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/history.png')}")`, // 背景图
      myUlWidth: '',
      historyList: [
        {
          arr: [
            ['我们不是IT技术的提供方，我们是医疗服务的参与方']
          ],
          icon: require('../../../../static/img/history/2012.png')
        },
        {
          arr: [
            ['涉足移动医疗！掌上医院v1.0版权通过']
          ],
          icon: require('../../../../static/img/history/2013.png')
        },
        {
          arr: [
            ['山东省立医院“掌上省医”上线！掌上医院签约数量60+！']
          ],
          icon: require('../../../../static/img/history/2014.png')
        },
        {
          arr: [
            ['支付宝 最佳合作伙伴']
          ],
          icon: require('../../../../static/img/history/2015.png')
        },
        {
          arr: [
            ['蚂蚁金服“互联网+城市服务”全国最佳合作伙伴']
          ],
          icon: require('../../../../static/img/history/2016.png')
        },
        {
          arr: [
            ['“医联山东”正式发布启用！',
              '山东省企业技术创新新奖！',
              '谢军获评济南市首批“泉城产业领军人才”',
              '27001信息安全管理体系认证！'
            ]
          ],
          icon: require('../../../../static/img/history/2017.png')
        },
        {
          arr: [
            [
              '国家认定的高新技术企业！',
              '山东省企业技术创新奖！',
              '济南市“重点平台型企业”',
              '知识产权管理体系认证证书！',
              '谢军获评2018影响济南年度传也人物！',
              '与漱玉平民达成资本及战略合作，双方携手探索医药新零售之路！'
            ]
          ],
          icon: require('../../../../static/img/history/2018.png')
        },
        {
          arr: [
            [
              '成功通过CMMI3级认证!山东省诚信建设示范单位!',
              '谢军荣获“山东省诚信建设示范单位领军人物”称号!',
              '山东省大数据创新应用技能大赛一等奖获批山东省、市级“专精特新”中小企业'
            ]
          ],
          icon: require('../../../../static/img/history/2019.png')
        },
        {
          arr: [
            [
              '疫情期紧急上线100+线上发热门诊，承接济南市防疫品物资预约平台!',
              '荣获“抗击新冠疫情防控工作积极贡献集体”称号!',
              '入选济南市智慧城市创新应用示范项目!'
            ],
            [
              '入选山东省第二批“现代优势产业集群+人工智能”试点示范企业!',
              '入选国家工信部2020年大数据产业发展试点示范项目!',
              '获批“顺能互联网医院”牌照! 获评山东省、市级瞪羚企业!'
            ]
          ],
          icon: require('../../../../static/img/history/2020.png')
        },
        {
          arr: [
            ['谢军获评2021年度山东省大数据产业“领军人物”!公司引入大股东圆心科技，着力打造“医-患-药-险医疗服务闭环!'],
            [
              '获评市级“一企一技术”研发中心、微信渠道电子健康卡2021年度优秀服条商!医联山东获评“山东省三星数字经济平台”!',
              '中标山东大学齐鲁医院互联网医院项目!'
            ]
          ],
          icon: require('../../../../static/img/history/2021.png')
        },
        {
          arr: [
            [
              '成立人才健康管理中心',
              '上线鲁康通平台'
            ],
            [
              '顺利获批增值电信业务经营许可证 (ICP、EDI)获评山东省大数据发展创新平台、济南市数据创新应用优秀解决方案'
            ]
          ],
          icon: require('../../../../static/img/history/2022.png')
        },
        {
          arr: [
            [
              '智慧医疗保险、健康服务顺能大数据平台',
              '…..',
              '与您携手，共创未来'
            ]
          ],
          icon: require('../../../../static/img/history/2023.png')
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

  created() {
    this.historyList.forEach(el => {
      el.arr.forEach(strArr => {
        strArr.forEach(str => {
          str.length > 32 && (el.width = 744);
        });
      });
    });
    if (![...this.historyList].reverse()[0].width) {
      this.dataUlRight = '10.41667vw';
    }
    else {
      this.dataUlRight = '18.75vw';
    }
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.myUlWidth = this.$refs.myUl?.offsetWidth + 'px';
      }, 4);
    });
  },

  beforeRouteLeave(to, from, next) {
    next();
  },

  methods: {
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.history-style {
  background-size: cover;
  background-repeat: no-repeat;

  ul {
    list-style: none;
  }

  // 左上角头部图片
  .head {
    margin-top: 101px;
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

  // 发展历程
  .data-box {
    margin-top: 73px;
    width: 100vw;
    height: 624px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }

    .bg-img {
      width: 3185px;
      height: 175px;
      position: absolute;
      left: 0;
      top: 214px;
    }

    .data-ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 360px 0 57px;
      // padding: 0 200px 0 57px;
      margin-top: 282px;

      .single {
        // width: 255px;
        width: 420px;
        height: 240px;
        position: relative;

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 96px;
          left: 0;
          width: 14px;
          height: 14px;
          background: $blue5;
          box-shadow: $boxshadow;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 152px;
          height: 55px;
        }

        .linear {
          margin-left: 6px;
          width: 2px;
          height: 96px;
          background: $lineargradient2;
          position: relative;
        }

        .msg {
          margin-left: 22px;
          width: 322px;
          width: 342px;
          max-height: 170px;
          overflow-y: scroll;
          font-size: 14px;
          line-height: 14px*1.8;
          font-weight: 400;
          color: $white1;
          position: relative;
          top: -4px;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .remark:not(:last-child) {
          margin-bottom: 28px;
        }
      }

      .single-top {
        top: -120px;

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -208px;
          left: 0;
          width: 14px;
          height: 14px;
          background: $blue5;
          box-shadow: $boxshadow;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
        }

        .linear {
          height: 256px;
          background: $lineargradient1;
          top: -201px;
        }

        .msg {
          top: -467px;
          max-height: 200px;
        }
      }
    }
  }
}
</style>
