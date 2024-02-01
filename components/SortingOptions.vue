<template>
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
            };
        },
        methods: {
            onSortChange() {
                this.$emit('sort-changed', this.sortKey);
            },
        }
    };
</script>