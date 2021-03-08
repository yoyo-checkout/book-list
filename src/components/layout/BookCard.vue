<template>
  <li class="card flex-shrink-0 p-1 w-1/2 md:w-1/3">
    <a class="block bg-white border rounded overflow-hidden" href="#" :title="bookName">

      <div class="card__image-container relative overflow-hidden">
        <div
          :style="`background-image: url(${bookImg})`"
          class="card__image absolute top-0 left-0 w-full h-full bg-cover duration-200"
        />
      </div>

      <div class="p-3">
        <hr class="my-3" />
        <h3 class="card__title text-sm md:text-xl font-medium leading-6 text-left">{{ bookName }}</h3>
      </div>

    </a>
  </li>
</template>

<script>
export default {
  props: {
    bookImg: {
      type: String,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
    },
  }
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
