<!--
 Page: team.vue [146971]
 From: 2023-04-03 15:11:01 Ywr
 Remark: 团队介绍
-->
<template>
  <div class="sn-page team-style" :style="{'background-image': backgroundImage}">
    <!-- 左上角标题 -->
    <div class="head">
      <img src="../../../../static/img/head/head-tdjs.png" alt="">
      <p>Company Profile {{ nowYear }}</p>
    </div>

    <!-- 数据展示 -->
    <div class="sn-f-s-s data-box">
      <!-- 左侧 -->
      <div class="left-msg" :style="{'background-image': leftBgImg}">
        <div class="chinese">拥有优秀的研发工程师、软件工程师及销售运营人员120余人，技术人员占70%。</div>
        <div class="english">It has more than 120 excellent R&D engineers, software engineers and sales and operation personnel, 70% of whom are technicians.</div>
      </div>
      <!-- 右侧 -->
      <div class="right-msg">
        <ul>
          <li class="sn-f-s-c" v-for="(obj, i) in dataList" :key="i"
            :class="{'mg-left': obj.left}">
            <div class="sn-f-c-c round">0{{ i + 1 }}</div>
            <div class="name">{{ obj.name }}</div>
            <div class="remark">{{ obj.remark }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'Team',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/img/bg/tdjs.png')}")`, // 背景图
      leftBgImg: `url("${require('../../../../static/img/tdjs/left.png')}")`, // 背景图
      dataList: [
        {
          name: '高材',
          remark: '本科生占据80%以上'
        },
        {
          name: '专业',
          remark: '其中22人取得高级软件工程师，11人取得PMP证书，6人取得系统集成项目管理工程师',
          left: true
        },
        {
          name: '顶级',
          remark: '2人取得星环大数据平台认证数据工程师，1人取得微软认证数据库管理员（MCDBA）',
          left: true
        },
        {
          name: '年轻',
          remark: '平均年龄在26岁左右，队伍年轻有活力'
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
  },

  methods: {
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.team-style {
  background-size: cover;
  background-repeat: no-repeat;

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

  // 数据展示
  .data-box {
    // 左侧
    .left-msg {
      width: 796px;
      height: 401px;
      margin-top: 126px;
      padding-top: 90px;
      background-size: cover;
      background-repeat: no-repeat;

      .chinese {
        margin-bottom: 20px;
        margin-left: 50px;
        width: 642px;
        height: 90px;
        font-size: 32px;
        line-height: 48px;
        font-weight: 600;
        color: $white;
      }

      .english {
        margin-left: 57px;
        width: 642px;
        height: 44px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: $white;
        opacity: 0.7;
      }
    }

    // 右侧
    .right-msg {
      margin-left: 49px;
      margin-top: 26px;

      >ul {
        >li {
          width: 862px;
          height: 100px;
          background: $lineargradient4;
          border-radius: 50px;
          margin-bottom: 67px;
          color: $white;
          border: 0;

          .round {
            width: 100px;
            height: 100px;
            background: $lineargradient3;
            overflow: hidden;
            border-radius: 50%;
            font-size: 47px;
            line-height: 70.5px;
            font-weight: 600;
          }

          .name {
            margin-left: 20px;
            margin-right: 30px;
            font-size: 36px;
            line-height: 54px;
            font-weight: bold;
            height: fit-content;
          }

          .remark {
            max-width: 569px;
            font-size: 18px;
            line-height: 27px;
            font-weight: 400;
            height: fit-content;
          }
        }

        .mg-left {
          margin-left: 77px;
        }
      }
    }
  }
}
</style>
