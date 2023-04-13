<!--
 Page: scientific.vue [603787]
 From: 2023-04-07 16:44:03 Ywr
 Remark: 科研机构
-->
<template>
<div class="sn-page scientific-style" :style="{'background-image': backgroundImage}">
  <!-- 标题 -->
  <img class="head" src="../../../../static/partner/head/kyjg.png" alt="">

  <div class="data-box">
    <ul class="sn-f-b-c">
      <li v-for="(obj, i) in dataList" :key="i">
        <div class="msg">
          <!-- 标题 -->
          <p>{{ obj.name }}</p>
          <!-- 介绍 -->
          <div>{{ obj.remark }}</div>
        </div>
        <!-- 背景图 -->
        <img class="bg-img" :src="obj.bg" alt="">
        <!-- 校徽 -->
        <img class="badge-img" :src="obj.badge" alt="">
      </li>
    </ul>
  </div>
</div>
</template>
<script type="text/javascript">
import * as constants from '../../../common/utils/constants';

export default {
  name: 'Scientific',
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/partner/bg/kyjg.png')}")`, // 背景图
      dataList: [
        {
          name: '山东大学',
          remark: '山东大学科学技术研究院简称“科研院”，是山东大学科学技术类（含军工类）科技政策制定、科技规划布局、科研平台 和管理、科技项目与科技成果组织和管理、推进科技成果转化以及国家大学科技园发展和管理等的职能部门。',
          bg: require('../../../../static/partner/scientific/sd.png'),
          badge: require('../../../../static/partner/scientific/sd-badge.png')
        },
        {
          name: '山东财经大学',
          remark: '研究制定有关科技政策；自然科学类科研项目的组织、申报与过程管理；自然科学类成果与奖励的申报、管理和统计年报；自然科学类科研平台、基地建设与管理；科技安全；科技政策、情报搜集与应用；知识产权管理；产学研合作及科技成果转化与推广应用；对外挂职科技人员的推荐和管理；各级学会、协会等社团组织的管理、自然科学学术交流管理；与科技有关的各类合同审核；自然科学类创新人才、创新团队计划的申报与管理。',
          bg: require('../../../../static/partner/scientific/sdcj.png'),
          badge: require('../../../../static/partner/scientific/sdcj-badge.png')
        },
        {
          name: '国家超算济南中心',
          remark: '“国家超级计算济南中心”  2011年10月27日在济南正式揭牌。该中心建有中国首台全部采用国产CPU和系统软件构建的千万亿次计算机系统，标志着中国成为继美国、日本之后能够采用自主CPU构建千万亿次计算机的国家。',
          bg: require('../../../../static/partner/scientific/gjcsjnzx.png'),
          badge: require('../../../../static/partner/scientific/gjcsjnzx-badge.png')
        },
        {
          name: '山东省电子职业技术学院',
          remark: '山东电子职业技术学院,位于山东省济南市,是由山东省人民政府批准的省属全日制普通高等学校,学校为“山东省高等教育名校建设工程技能型人才培养特色名校”立项建设单位,山东省首批教育信息化试点单位。',
          bg: require('../../../../static/partner/scientific/sddzzy.png'),
          badge: require('../../../../static/partner/scientific/sddzzy-badge.png')
        }
      ]
    };
  },

  created() {
  },

  methods: {
  }
};
</script>

<style lang="scss">
.scientific-style {
  background-size: cover;
  background-repeat: no-repeat;

  .head {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 430px;
    height: 136px;
  }

  // 数据
  .data-box {
    padding: 0 50px;
    margin-top: 116px;
    color: $white;

    ul {
      margin: 0 auto;

      >li {
        position: relative;
        color: $white;
        width: 436px;
        height: 526px;

        &:not(:last-child) {
          margin-right: 25px;
        }

        .msg {
          position: relative;
          z-index: 1;
          height: 370px;
          padding: 25px 43px;
          width: 100%;
          background: $lineargradient10;
          font-size: 18px;
          font-weight: 400;
          line-height: 44px;

          p {
            margin: 0 0 15px 0;
            font-size: 24px;
            line-height: 36px;
            font-weight: 600;
          }

          div {
            height: 272px;
            overflow-x: hidden;
            overflow-y: scroll;

            &::-webkit-scrollbar {
              display: none;
            }
          }
        }

        // 背景图
        .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        // 校徽
        .badge-img {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -64px;
          width: 128px;
          height: 128px;
        }
      }
    }
  }
}
</style>
