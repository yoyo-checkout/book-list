<template>
  <div class="p-5 bg-gray-100">
    <ul class="flex flex-wrap md:flex-nowrap overflow-auto">

      <BookCard
        v-for="book in books"
        :key="book.id"
        :bookName="book.name"
        :bookImg="book.image"
      />

    </ul>
  </div>
</template>

<script>
import BookCard from '@/components/layout/BookCard';

export default {
  components: {
    BookCard,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          name: 'Flutter/Dart 跨平台 App 開發實務入門',
          image: 'https://cf-assets2.tenlong.com.tw/products/images/000/157/608/medium/ACL060200.jpg?1613558091',
        },
        {
          id: 2,
          name: 'Flutter/Dart 跨平台 App 開發實務入門',
          image: 'https://cf-assets2.tenlong.com.tw/products/images/000/157/608/medium/ACL060200.jpg?1613558091',
        },
        {
          id: 3,
          name: 'Flutter/Dart 跨平台 App 開發實務入門',
          image: 'https://cf-assets2.tenlong.com.tw/products/images/000/157/608/medium/ACL060200.jpg?1613558091',
        },
        {
          id: 4,
          name: 'Flutter/Dart 跨平台 App 開發實務入門',
          image: 'https://cf-assets2.tenlong.com.tw/products/images/000/157/608/medium/ACL060200.jpg?1613558091',
        },
      ],
    };
  },
};
</script>
