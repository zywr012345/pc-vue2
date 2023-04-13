<template>
  <div class="sn-page sn-f-c-c toast-page">
    <div class="toast-blank">{{$sn.vuex.get('vuex_toast.caption')}}</div>
  </div>
</template>
<script>
export default {
  name: 'toast'
};
</script>
<style lang="scss">
.toast-page {
  background-color: $mask !important;
  z-index: 1000;

  .toast-blank {
    opacity: 0.9;
    overflow: hidden;
    width: 38%;
    background-color: $grey65;
    font-size: 14px;
    color: $grey25;
    border-radius: 4px;
    text-align: center;
    padding: 22.4px 22.4px 24.96px 22.4px;
  }
}
</style>
