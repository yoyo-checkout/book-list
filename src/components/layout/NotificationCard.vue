<template>
  <div class="notification-card fixed top-5 right-5 p-5 pr-20 rounded shadow" :class="backgroundColor">

    <button
      class="absolute top-2 right-2 block w-4 h-4 leading-4 text-center focus:outline-none"
      @click="closeCard"
    >
      x
    </button>

    <h3 class="text-base md:text-xl font-bold leading-6">{{ title }}</h3>

    <p class="text-sm md:text-base">{{ text }}</p>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    cardType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundColor() {
      return this.cardType === 'success' ? 'bg-green-50'
        : this.cardType === 'error' ? 'bg-red-50' : 'bg-white';
    },
    title() {
      return this.cardType === 'success' ? '成功'
        : this.cardType === 'error' ? '失敗' : '';
    },
  },
  methods: {
    ...mapMutations('globalVuex', [
      'SET_NOTIFICATION_CARD',
    ]),

    closeCard() {
      this.SET_NOTIFICATION_CARD({ key: 'isShow', val: false });
      this.SET_NOTIFICATION_CARD({ key: 'type', val: '' });
      this.SET_NOTIFICATION_CARD({ key: 'text', val: '' });
    },
  },
};
</script>

<style lang="scss" scoped>
.notification-card {
  z-index: 99;
}
</style>
