<template>
  <li class="card flex-shrink-0 p-1 w-1/2 md:w-1/3">
    <router-link
      :to="{ name: 'Detail', params: { bookId }}"
      :title="bookName"
      :class="[ isSelected ? 'border-2' : 'border', { 'border-green-500': isSelected }]"
      class="block bg-white rounded overflow-hidden"
    >

      <div class="card__image-container relative overflow-hidden">
        <div
          :style="`background-image: url(${bookImg})`"
          class="card__image absolute top-0 left-0 w-full h-full bg-cover duration-200"
        />
      </div>

      <div class="p-3">
        <hr class="my-3" />
        <h3 class="card__title text-sm md:text-xl font-medium leading-6">{{ bookName }}</h3>
      </div>

    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    bookId: {
      type: Number,
      required: true,
    },
    bookImg: {
      type: String,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
    },
  },
  computed: {
    isSelected() {
      return parseInt(this.$route.params.bookId) === this.bookId;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 300px;

  &:hover {
    .card__image {
      transform: scale(1.2);
    }
  }

  &__image-container {
    padding-top: 130%;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
