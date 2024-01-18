<template>
    <section class="listing-feed">
        <ListingHeader 
            :listingsCount="filteredCars.length"
            @quality-changed="filterQuality"
            @sort-changed="sortCars"
        />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <CarItem
                    v-for="car in paginatedCars"
                    :key="car.id"
                    :car="car"
                />
            </div>
        <Pagination 
            :total-pages="totalPages" 
            :current-page="currentPage"
            @page-changed="setCurrentPage" 
        />
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
            cars: carsData.data,
            filteredCars: [],
            selectedQuality: 'All',
            currentPage: 1,
            itemsPerPage: 10
        };
    },
    mounted() {
        this.filterQuality(this.selectedQuality);
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cars.length / this.itemsPerPage);
        },
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.cars.slice(startIndex, startIndex + this.itemsPerPage);
            // const endIndex = startIndex + this.itemsPerPage;
            // return this.cars.slice(startIndex, endIndex)
        }
    },
    methods: {
        filterQuality(quality) {
            this.selectedQuality = quality;
            if(quality === 'All') {
                this.filteredCars = this.cars;
            } else {
                this.filteredCars = this.cars.filter(car => {
                    return car.quality === quality;
                });
            }
            this.currentPage = 1;
        },
        sortCars(sortKey) {
            if(sortKey === 'priceLowHigh') {
                this.cars.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if(sortKey === 'priceHighLow') {
                this.cars.sort((a, b) => {
                    return b.price - a.price;
                });
            } else if(sortKey === 'yearNewOld') {
                this.cars.sort((a, b) => {
                    return new Date(b.date_first_registered) - new Date(a.date_first_registered);
                });
            } else if(sortKey === 'yearOldNew') {
                this.cars.sort((a, b) => {
                    return new Date(a.date_first_registered) - new Date(b.date_first_registered);
                });
            }
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
    }
</script>

<style lang="scss"></style>
