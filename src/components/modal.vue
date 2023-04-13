<template>
  <div class="sn-page sn-f-c-c modal-page">
    <div class="modal-blank">
      <div class="sn-f-c-c modal-title" :class="{'grey11BottomBorder-blank': option.caption}">{{option.title}}</div>
      <div class="modal-caption" v-if="option.caption" v-html="option.caption"></div>
      <div class="sn-f-b-c modal-interaction" v-if="interaction.length > 0">
        <van-button :key="index" v-for="(item, index) in interaction"
                    :style="{
                      width: interaction.length === 2 || option.slotInteraction ? '132px' : '100%',
                      height: '40px',
                      fontSize: '16px',
                      color: item.font,
                      border: '1px solid' + item.border,
                      borderRadius: interaction.length === 2 || option.slotInteraction ? '20px': '8px'
                    }"
                    :text="item.duration > 0 ? item.caption + '（' + item.duration + 's）' : item.caption"
                    :color="item.background"
                    :square="interaction.length !== 2 && !option.slotInteraction"
                    :round="interaction.length === 2 || option.slotInteraction"
                    :disabled="item.duration > 0"
                    @click="sendBack(item.type);"></van-button>
        <template v-if="option.slotInteraction">
          <slot name="slotInteraction"></slot>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'modal',
  data() {
    return {
      option: {},
      interaction: [],
      intervalConfirm: null,
      intervalCancel: null
    };
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created: function() {
    this.option = this.$sn.vuex.get('vuex_modal');
    this.formatInteraction();
  },
  methods: {
    formatInteraction() {
      // 初始化按钮信息
      ['Confirm', 'Cancel'].forEach(el => {
        if (this.option['is' + el]) {
          const standard = {
            identify: el,
            type: false,
            caption: this.option['caption' + el],
            background: el === 'Confirm' ? this.option['color' + el] : this.$sn.color.white,
            font: el === 'Confirm' ? this.$sn.color.white : this.option['color' + el],
            border: this.option['color' + el],
            duration: this.option['duration' + el],
            sort: 1
          };
          if (el === 'Confirm') {
            standard.type = true;
            if (this.option.transferInteraction) {
              standard.sort = 0;
            }
            else {
              standard.sort = 2;
            }
          }
          this.interaction.push(standard);
        }
      });
      this.interaction = this.$sn.format.digitalSort(this.interaction);
      // 如有倒计时，则开始进行倒计时
      this.interaction.forEach(el => {
        if (el.duration > 0) {
          this['interval' + el.identify] = setInterval(() => {
            if (el.duration > 0) {
              el.duration--;
            }
          }, 1000);
        }
      });
    },
    sendBack(type) {
      this.$sn.vuex.set('vuex_modal', {});
      if (this.$sn.validate.func(this.option.success)) {
        const result = {};
        if (type) {
          Vue.set(result, 'confirm', true);
        }
        else {
          Vue.set(result, 'cancel', true);
        }
        this.option.success(result);
      }
    }
  },
  beforeDestroy() {
    if (this.intervalConfirm) {
      window.clearInterval(this.intervalConfirm);
    }
    if (this.intervalCancel) {
      window.clearInterval(this.intervalCancel);
    }
  }
};
</script>
<style lang="scss">
.modal-page {
  background-color: $mask !important;
  z-index: 1000;

  .modal-blank {
    overflow: hidden;
    width: 327px;
    background-color: $white;
    border-radius: 8px;
    padding: 0 24px 32px;

    .modal-title {
      width: 100%;
      height: 56px;
      font-size: 18px;
      font-weight: bold;
    }

    .modal-caption {
      overflow-x: hidden;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      max-height: 287px;
      font-size: 16px;
      color: $grey6;
      margin-top: 16px;
    }

    .modal-interaction {
      overflow: hidden;
      width: 100%;
      padding-top: 36px;
    }
  }
}
</style>
