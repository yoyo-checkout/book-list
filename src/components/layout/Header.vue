<template>
  <header class="header flex justify-center items-center fixed top-0 right-0 left-0 bg-white shadow z-50">
    <router-link :to="{ name: 'Home' }">
      首頁
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    height: 60px;
  }
</style>
