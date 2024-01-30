<template>
  <div class="pagination-container">
    <a href="#" @click.prevent="backToTop" class="back-to-top">Back to top</a>
    <div class="pagination-controls">
      <button @click="goToFirstPage">&laquo;</button>
      <button @click="goToPrevPage">&lt;</button>
      
      <button
        v-for="pageNum in pageNumbers"
        :key="pageNum"
        :class="{ 'active': pageNum === currentPage }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </button>
      
      <button @click="goToNextPage">&gt;</button>
      <button @click="goToLastPage">&raquo;</button>
    </div>

    <div class="sorting-options">
      <SortingOptions :listingsCount="listingsCount" @sort-changed="onSortChange" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  computed: {
    pageNumbers() {
      let pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(pageNum) {
      this.$emit('page-changed', pageNum);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    goToFirstPage() {
      this.changePage(1);
    },
    goToLastPage() {
      this.changePage(this.totalPages);
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  },
};
</script>

<style scoped></style>
