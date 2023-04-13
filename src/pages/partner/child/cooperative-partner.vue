<!--
 Page: cooperative-partner.vue [868737]
 From: 2023-04-07 16:45:59 Ywr
 Remark: 战略合作伙伴
-->
<template>
  <div class="sn-page cooperative-partner" :style="{'background-image': backgroundImage}">
    <!-- 标题 -->
    <img class="head" src="../../../../static/partner/head/zlhzhb.png" alt="">

    <div class="data-box">
      <ul class="sn-f-s-c">
        <li class="sn-f-c-c"
          v-for="(obj, i) in dataList.slice(0, dataList.length / 2)" :key="i" >
          <img :src="obj" alt="">
        </li>
        <li class="center-box">
          <div class="sn-f-b-c wheat-box">
            <img src="../../../../static/partner/partner/wheat-left.png" alt="">
            <div class="sn-f-c-b-c msg">
              <p>口碑源于客户的成功验证</p>
              <p class="year">截止{{nowYear}}年</p>
              <div class="yellow">已经合作过100+家知名企业</div>
            </div>
            <img src="../../../../static/partner/partner/wheat-right.png" alt="">
          </div>
          <div class="remark">
            <p>覆盖教育、保险、医美、企业服务等多个领域</p>
            <p>期待您的加入...</p>
          </div>
        </li>
        <li class="sn-f-c-c"
          v-for="(obj, i) in dataList.slice(dataList.length / 2)" :key="i+dataList.length/2" >
          <img :src="obj" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'CooperativePartner',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/partner/bg/jdal.png')}")`, // 背景图
      dataList: [

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
    for (let i = 0; i < 18; i++) {
      this.dataList.push(
        require(`../../../../static/partner/partner/partner${i}.png`)
      );
    }
    // console.log(this.dataList);
  },

  methods: {
  }
};
</script>

<style lang="scss">
.cooperative-partner {
  background-size: cover;
  background-repeat: no-repeat;
  // background: linear-gradient(136deg, #040c19 0%, #0d1d36 100%);
  // background: linear-gradient(136deg, rgba(4, 12, 25, 0.75) 0%, rgba(13, 29, 54, 0.75) 100%);
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
    color: $white;
    padding-left: 165px;

    ul {
      flex-wrap: wrap;
      width: 1660px;

      li {
        margin-right: 72px;
        margin-bottom: 48px;

        img {
          width: 165px;
          height: 165px;
        }
      }

      .center-box {
        line-height: 36px;
        font-size: 24px;
        font-weight: 400;
        width: 639px;
        height: 249px;

        .wheat-box {
          padding: 0 35px;
          align-items: end;

          img {
            width: 71px;
            height: 125px;
            margin-bottom: 12px;
          }

          .msg {
            text-align: center;

            .year {
              margin: 18px 0;
            }

            .yellow {
              font-size: 32px;
              line-height: 48px;
              font-weight: 600;
              color: $orange;
            }
          }
        }

        .remark {
          text-align: center;

          p {
            margin-top: 18px;
          }
        }
      }
    }
  }
}
</style>
