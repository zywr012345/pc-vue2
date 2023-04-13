<template>
  <div class="sn-f-c-c" id="app">
    <router-view></router-view>
    <loading v-if="$sn.vuex.get('vuex_loading')"></loading>
    <toast v-if="$sn.vuex.get('vuex_toast.type')"></toast>
    <modal v-if="$sn.vuex.get('vuex_modal.type')"></modal>
  </div>
</template>
<script type="text/javascript">
import Loading from './components/loading';
import Toast from './components/toast';
import Modal from './components/modal';
import Swagger from './common/utils/swagger';

export default {
  components: {
    'loading': Loading,
    'toast': Toast,
    'modal': Modal
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created: function() {
    this.global_getCurrentTime();
  },
  methods: {
    global_getCurrentTime() {
      const params = {
        domain: process.env.VUE_APP_PAY_LOCALHOST,
        url: Swagger.getCurrentTime
      };
      this.$sn.utils.ordinaryRequest(params).then(result => {
        if (result && result.code === 0 && result.data) {
          this.$sn.utils.setSessionStorage('TimeDisparity', new Date().getTime() - new Date(result.data).getTime());
        }
        else {
          this.$sn.utils.setSessionStorage('TimeDisparity', 0);
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "src/common/style/integration";

#app {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: $white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
