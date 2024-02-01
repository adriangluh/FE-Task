<template>
    <div class="car-item ">
      <div class="car-image-container">
        <div class="car-quality-overlay">{{ car.quality }}
        </div>
        <div class="car-specs-overlay">
          <span class="car-mileage">{{ formatMileage( car.odometer_value) }}</span>
          <span class="car-transmission">{{ car.transmission }}</span>
          <span class="car-fuel-type">{{ car.fuel_type }}</span>
          <span class="car-body-type">{{ car.body_type }}</span>
        </div>
      </div>
      <div class="car-details flex justify-between items-center">
        <div class="car-meta">{{ getFormattedYear(car.date_first_registered) }} {{ car.make.name }} {{ car.model.name}}
        </div>
        <div 
            class="fav-icon" 
            @click="toggleFavourite"
        >
          <IconsFavourite v-if="!isFavourite"/>
          <IconsFavouriteFilled v-else/>
        </div>
      </div>
      <p class="car-price">{{ formatCurrency(car.price) }} /mo (PCP)</p>
    </div>
</template>
  
  <script>
  export default {
    components: {
      IconsFavourite: () => import('./Icons/Favourite.vue'),
      IconsFavouriteFilled: () => import('./Icons/FavouriteFilled.vue')
    },
    data() {
      return {
        isFavourite: false
      };
    },
    props: {
      car: {
        type: Object,
        required: true
      }
    },
    methods: {
      getFormattedYear(dateStr) {
        const date = new Date(dateStr);
        return date.getFullYear();
      },
      formatMileage(mileage) {
        if (mileage >= 1000) {
          let thousands = mileage / 1000;
          if (mileage % 1000 >= 500) {
            thousands = Math.ceil(thousands);
          } else {
            thousands = Math.floor(thousands);
          }
          return `${thousands}k miles`;
        }
        return `${mileage.toString()} miles`;
      },
      formatCurrency(value) {
        const formatter = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        return formatter.format(value);
      },
      toggleFavourite() {
        this.isFavourite = !this.isFavourite;
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  