<template>
  <div class="p-5 bg-gray-100">
    <ul class="flex flex-wrap md:flex-nowrap overflow-auto">

      <BookCard
        v-for="book in books"
        :key="book.id"
        :bookId="book.id"
        :bookName="book.name"
        :bookImg="book.image"
      />

    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BookCard from '@/components/layout/BookCard';

export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapState('book', {
      books: state => state.books,
    }),
  },
};
</script>
