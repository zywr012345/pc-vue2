<!--
 Page: index.vue [134445]
 From: 2023-04-04 15:12:34 Ywr
 Remark: 合作伙伴-案例
-->
<template>
  <div class="sn-page homepage" :style="{'background-image': backgroundImage}"
    @click="funGoPath">
  </div>
</template>
<script type="text/javascript">
import * as constants from '../../common/utils/constants';

export default {
  data() {
    return {
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../static/partner/index-bg.png')}")` // 背景图
    };
  },

  methods: {
    /*
    * 2023-04-03 09:16:18 Ywr
    * 路由跳转
    */
    funGoPath() {
      this.$router.push({ path: '/partner/introduce' });
    }
  },

  beforeDestroy() {
  }
};
</script>

<style lang="scss">
.homepage {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
