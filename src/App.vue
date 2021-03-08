<template>
  <div id="app" class="container mx-auto py-10">
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
  color: #2c3e50;
}
</style>
