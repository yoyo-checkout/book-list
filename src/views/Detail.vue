<template>
  <div class="detail mt-5 py-5 px-3 border rounded">

    <div class="flex items-center my-3">
      <ItemLabel>價格</ItemLabel>

      <CircleButton @click.native="substract('price')">-</CircleButton>

      <ItemCount>{{ bookDetail.price }}</ItemCount>

      <CircleButton @click.native="add('price')">+</CircleButton>
    </div>

    <div class="flex items-center my-3">
      <ItemLabel>數量</ItemLabel>

      <CircleButton @click.native="substract('count')">-</CircleButton>

      <ItemCount>{{ bookDetail.count }}</ItemCount>

      <CircleButton @click.native="add('count')">+</CircleButton>
    </div>

    <div class="text-right">
      <button class="px-5 py-3 text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-500 focus:outline-none rounded-lg transition duration-200">
        確認修改
      </button>
    </div>

  </div>
</template>

<script>
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
  data() {
    return {
      bookDetail: {
        id: 1,
        price: 200,
        count: 20,
      },
    };
  },
  methods: {
    add(type) {
      this.bookDetail[type]++;
    },
    substract(type) {
      const remain = this.bookDetail[type];

      if (!remain) return;

      this.bookDetail[type]--;
    },
  },
}
</script>
