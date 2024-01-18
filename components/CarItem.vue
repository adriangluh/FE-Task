<template>
    <div class="car-item" @click="selectCar(car)">
      <img :src="car.media_urls[0].url" :alt="`Image of ${car.model.name}`" class="car-image"/>
      <div class="car-details">
        <h2 class="car-title">{{ car.make.name }} {{ car.model.name}}</h2>
        <p class="car-price">{{ formatCurrency(car.price) }}</p>
        <div class="car-meta">
          <span class="car-year">Year: {{ getFormattedYear(car.date_first_registered) }}</span>
          <span class="car-mileage">{{ mileageFormat( car.odometer_value) }}</span>
        </div>
        <div class="car-specs">
          <span class="car-transmission">{{ car.transmission }}</span>
          <span class="car-fuel-type">{{ car.fuel_type }}</span>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      car: {
        type: Object,
        required: true
      }
    },
    methods: {
      selectCar(car) {
        this.$emit('selected', selectedCar);
      },
      // getYear(dateStr) {
      //   return dateStr.split('-')[0];
      // },
      getFormattedYear(dateStr) {
        const date = new Date(dateStr);
        return date.getFullYear();
      },
      mileageFormat(value) {
        const numberValue = Number(value);
          if (!isNaN(numberValue)) {
            return `${numberValue.toLocaleString()} miles`;
          }
          return '';
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
    },
    filters: {
      // currency(value) {
      //   return `$${parseFloat(value).toFixed(2)}`;
      // },

    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  