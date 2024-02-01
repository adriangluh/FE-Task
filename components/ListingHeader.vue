<!-- Header for the listing feed, possibly with the sorting options -->

<template>
    <div class="listing-header">
      <h1 class="listing-count">Showing {{ listingsCount }} cars</h1>
      <div class="quality-filter gap-x-1">
        <button
            v-for="quality in ['All', 'New', 'Used', 'Offers']"
            :key="quality"
            :class="{ 'active': selectedQuality === quality }"
            @click="filterQuality(quality)"
        >
          {{ quality }}
        </button>
      </div>
      <div class="sorting-options">
        <label for="sortSelect"></label>
        <select 
            id="sortSelect" 
            v-model="sortKey" 
            @change="onSortChange"
        >
            <option value="priceLowHigh">Lowest Price</option>
            <option value="priceHighLow">Highest Price</option>
            <option value="yearNewOld">Newest</option>
            <option value="yearOldNew">Oldest</option>
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
        sortKey: 'priceLowHigh', // default sorting option
        selectedQuality: 'All' // default quality option
      };
    },
    methods: {
      onSortChange() {
        this.$emit('sort-changed', this.sortKey);
      },
      filterQuality(quality) {
        this.selectedQuality = quality;
        this.$emit('quality-changed', quality);
      }
    }
  };
  </script>
  
  <style lag="scss" scoped></style>
  