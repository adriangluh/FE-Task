<!-- Pagination control -->

<template>
    <nav aria-label="Pagination" class="flex justify-center items-center space-x-1 my-4">
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    totalPages: Number
  });
  const emits = defineEmits(['page-changed']);
  </script>
  
  <style lang="scss" scoped></style>
  