<template>
  <div id="app" class="container mx-auto py-10">
    <Header />
    <BookList />

    <main>
      <router-view/>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookList from '@/components/layout/BookList';

export default {
  components: {
    Header,
    Footer,
    BookList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  margin-bottom: 60px;
  color: #2c3e50;
}
</style>
