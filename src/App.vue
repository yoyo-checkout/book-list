<template>
  <div id="app" class="container mx-auto py-10">
    <Header />
    <BookList />

    <main>
      <router-view/>
    </main>

    <Footer />

    <LoadingLayer v-show="isLoading" />

    <NotificationCard
      v-show="notificationCard.isShow"
      :cardType="notificationCard.type"
      :text="notificationCard.text"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingLayer from '@/components/layout/LoadingLayer';
import NotificationCard from '@/components/layout/NotificationCard';
import BookList from '@/components/layout/BookList';

export default {
  components: {
    Header,
    Footer,
    LoadingLayer,
    NotificationCard,
    BookList,
  },
  computed: {
    ...mapState('globalVuex', {
      isLoading: state => state.isLoading,
      notificationCard: state => state.notificationCard,
    }),
  },
  created() {
    this.getBooks();
  },
  methods: {
    ...mapActions('book', [
      'getBooks',
    ]),
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
