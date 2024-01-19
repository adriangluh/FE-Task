<!-- Pagination control -->

<template>
    <nav aria-label="Pagination" class="flex justify-center items-center space-x-1 my-4">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        class="pagination-button bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
        :class="{'active': page === currentPage}"
        >
        {{ page }}
      </button>
    </nav>
</template>
  
<script setup>
  const props = defineProps({
    totalPages: Number,
    currentPage: Number
  });
  const emits = defineEmits(['page-changed']);

  function changePage(page){
    emits('page-changed', page);
  }
</script>

<style lang="scss"></style>