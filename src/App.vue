<template>
  <div id="app" class="container mx-auto pt-10">
    <BookList />
    <router-view/>
  </div>
</template>

<script>
import BookList from '@/components/layout/BookList';

export default {
  components: {
    BookList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
