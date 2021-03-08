<template>
  <div class="detail mt-5 py-5 px-3 border rounded">
    <h3 class="mb-10 text-2xl font-bold">{{ bookDetail.name }}</h3>

    <div class="flex items-center my-3">
      <ItemLabel>價格</ItemLabel>

      <CircleButton @click.native="substract('price')">-</CircleButton>

      <ItemCount>{{ bookProfile.price }}</ItemCount>

      <CircleButton @click.native="add('price')">+</CircleButton>
    </div>

    <div class="flex items-center my-3">
      <ItemLabel>數量</ItemLabel>

      <CircleButton @click.native="substract('count')">-</CircleButton>

      <ItemCount>{{ bookProfile.count }}</ItemCount>

      <CircleButton @click.native="add('count')">+</CircleButton>
    </div>

    <div class="text-right">
      <button
        class="px-5 py-3 text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-500 focus:outline-none rounded-lg transition duration-200"
        @click="update"
      >
        確認修改
      </button>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import ItemLabel from '@/components/detail/ItemLabel';
import ItemCount from '@/components/detail/ItemCount';
import CircleButton from '@/components/detail/CircleButton';

export default {
  name: 'Detail',
  components: {
    ItemLabel,
    ItemCount,
    CircleButton,
  },
  computed: {
    ...mapState('book', {
      bookDetail: state => state.bookDetail,
      bookProfile: state => state.bookProfile,
    }),
  },
  created() {
    this.getBook({
      id: this.$route.params.bookId,
    });
  },
  beforeRouteUpdate (to, from, next) {
    this.getBook({
      id: to.params.bookId,
    });

    next();
  },
  beforeRouteLeave (to, from, next) {
    // reset detail page
    this.SET_BOOK_DETAIL({});
    this.SET_BOOK_PROFILE({});

    next();
  },
  methods: {
    ...mapActions('book', [
      'getBook',
      'updateBook',
    ]),
    ...mapMutations('book', [
      'SET_BOOK_DETAIL',
      'SET_BOOK_PROFILE',
    ]),

    add(type) {
      this.SET_BOOK_PROFILE({
        ...this.bookProfile,
        [type]: parseInt(this.bookProfile[type]) + 1,
      });
    },
    substract(type) {
      const remain = this.bookProfile[type];

      if (!remain) return;

      this.SET_BOOK_PROFILE({
        ...this.bookProfile,
        [type]: parseInt(this.bookProfile[type]) - 1,
      });
    },
    update() {
      this.updateBook({
        ...this.bookProfile,
      });
    },
  },
}
</script>
