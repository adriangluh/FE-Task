<template>
    <section class="listing-feed">
        <ListingHeader 
            :listingsCount="filteredCars.length"
            @quality-changed="filterQuality"
            @sort-changed="sortCars"
        />
        <!-- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <CarItem
                    v-for="(car, index) in paginatedCars"
                    :key="car.id"
                    :car="car"
                    v-if="!isValuationPosition(index)"
                />
                <ValuationCard
                    v-if="paginatedCars.length >= valuationPosition"
                    v-show="currentPage === pageForValuationCard"
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
import ValuationCard from './ValuationCard.vue';
import Pagination from './Pagination.vue';
import ListingHeader from './ListingHeader.vue';
import carsData from '../static/cars.json';

export default {
    components: {
        CarItem,
        ValuationCard,
        Pagination,
        ListingHeader
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
            allCars: carsData.data,
            filteredCars: [],
            selectedQuality: 'All',
            valuationPosition: 5,
        };
    },
    mounted() {
        this.filterQuality(this.selectedQuality);
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredCars.length / this.itemsPerPage);
        },
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredCars.slice(startIndex, startIndex + this.itemsPerPage);
            // const endIndex = startIndex + this.itemsPerPage;
            // return this.cars.slice(startIndex, endIndex)
        },
        pageForValuationCard() {
            return Math.ceil((this.valuationPosition + 1) / this.itemsPerPage);
        }
    },
    methods: {
        filterQuality(quality) {
            this.selectedQuality = quality;
            if(quality === 'All') {
                this.filteredCars = this.allCars;
            } else {
                this.filteredCars = this.allCars.filter(car => {
                    return car.quality === quality;
                });
            }
            this.currentPage = 1;
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        isValuationPosition(index) {
            const positionInPage = index % this.itemsPerPage;
            return positionInPage === this.valuationPosition;
        },
        sortCars(sortKey) {
            if(sortKey === 'priceLowHigh') {
                this.allCars.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if(sortKey === 'priceHighLow') {
                this.allCars.sort((a, b) => {
                    return b.price - a.price;
                });
            } else if(sortKey === 'yearNewOld') {
                this.allCars.sort((a, b) => {
                    return new Date(b.date_first_registered) - new Date(a.date_first_registered);
                });
            } else if(sortKey === 'yearOldNew') {
                this.allCars.sort((a, b) => {
                    return new Date(a.date_first_registered) - new Date(b.date_first_registered);
                });
            }
        },
    },
    // watch: {
    //         currentPage(newPage) {
    //             this.paginatedCars = this.filterCarsByPage(newPage);
    //         }
    //     },
    }
</script>

<style lang="scss"></style>
