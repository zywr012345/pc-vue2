<template>
  <div class="sn-page sn-f-c-c loading-page">
    <div class="loading-blank">
      <div class="loading-circle-first"></div>
      <div class="loading-circle-secondary"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'loading'
};
</script>
<style lang="scss">
.loading-page {
  background-color: $mask !important;
  z-index: 1000;

  @keyframes loading-circle-flash {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-circle-flash-infinite {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  .loading-blank {
    width: 50px;
    height: 50px;
    position: relative;

    .loading-circle-first {
      animation: loading-circle-flash 1.1s linear infinite;
      width: 50px;
      height: 50px;
      border: 4px solid $transparent;
      border-top-color: $company1;
      border-bottom-color: $company1;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .loading-circle-secondary {
      animation: loading-circle-flash-infinite 2s linear infinite;
      width: 38px;
      height: 38px;
      border: 4px solid $transparent;
      border-right-color: $company2;
      border-left-color: $company2;
      border-radius: 50%;
      position: absolute;
      top: 6px;
      right: 6px;
      bottom: 6px;
      left: 6px;
    }
  }
}
</style>
