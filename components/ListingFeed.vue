<template>
    <section class="listing-feed">
    <ListingHeader 
        :listingsCount="carsData.data.length"
        @sort-changed="sortCars"
    />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CarItem
          v-for="(car, index) in carsData.data"
          :key="car.id"
          :car="car"
        />
      </div>
      <Pagination :total-pages="totalPages" @page-changed="fetchCars" />
    </section>
  </template>
  
  <script>
  import CarItem from './CarItem.vue';
  import ListingHeader from './ListingHeader.vue';
  import Pagination from './Pagination.vue';
  import carsData from '../static/cars.json';
  
  export default {
    components: {
        CarItem,
        ListingHeader,
        Pagination
    },
    data() {
      return {
        carsData,
        totalPages: 1
      };
    },
    methods: {
        sortCars(sortKey) {
            if(sortKey === 'priceLowHigh') {
                this.carsData.data.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if(sortKey === 'priceHighLow') {
                this.carsData.data.sort((a, b) => {
                    return b.price - a.price;
                });
            } else if(sortKey === 'yearNewOld') {
                this.carsData.data.sort((a, b) => {
                    return new Date(b.date_first_registered) - new Date(a.date_first_registered);
                });
            } else if(sortKey === 'yearOldNew') {
                this.carsData.data.sort((a, b) => {
                    return new Date(a.date_first_registered) - new Date(b.date_first_registered);
                });
            }
        }
    }
    }
  </script>
  
<style lang="scss"></style>
  