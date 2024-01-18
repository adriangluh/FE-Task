<!-- Header for the listing feed, possibly with the sorting options -->

<template>
    <div class="listing-header">
      <h1 class="listing-title">Showing {{ listingsCount }} cars</h1>
      <div class="sorting-options">
        <label for="sortSelect">Sort by:</label>
        <select id="sortSelect" v-model="sortKey" @change="onSortChange">
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="yearNewOld">Year: New to Old</option>
          <option value="yearOldNew">Year: Old to New</option>
          <!-- Add other sorting options as needed -->
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      listingsCount: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        sortKey: 'priceLowHigh' // default sorting option
      };
    },
    methods: {
      onSortChange() {
        this.$emit('sort-changed', this.sortKey);
      }
    }
  };
  </script>
  
  <style lag="scss" scoped></style>
  