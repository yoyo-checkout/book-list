<template>
  <div class="detail mt-5 py-5 px-3 border rounded">

    <div class="flex items-center my-3">
      <div class="label mr-5 text-lg font-bold">價格</div>
      <button class="btn w-10 h-10 border hover:bg-gray-200 rounded-full focus:outline-none transition duration-200">-</button>
      <input
        type="number"
        class="block mx-3 px-5 py-3 w-40 focus:outline-none rounded-md bg-gray-100"
        :value="bookDetail.price"
      >
      <button class="btn w-10 h-10 border hover:bg-gray-200 rounded-full focus:outline-none transition duration-200">+</button>
    </div>

    <div class="flex items-center my-3">
      <div class="label mr-5 text-lg font-bold">數量</div>
      <button class="btn w-10 h-10 border hover:bg-gray-200 rounded-full focus:outline-none transition duration-200">-</button>
      <input
        type="number"
        class="block mx-3 px-5 py-3 w-40 focus:outline-none rounded-md bg-gray-100"
        :value="bookDetail.count"
      >
      <button class="btn w-10 h-10 border hover:bg-gray-200 rounded-full focus:outline-none transition duration-200">+</button>
    </div>

    <div class="text-right">
      <button class="px-5 py-3 text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-500 focus:outline-none rounded-lg transition duration-200">
        確認修改
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      bookDetail: {
        id: 1,
        price: 200,
        count: 20,
      },
    };
  },
}
</script>
