<template>
    <div class="car-item bg-white shadow rounded-lg overflow-hidden p-6 flex flex-col justify-between h-full" @click="selectCar(car)">
      <img :src="car.media_urls[0].url" :alt="`Image of ${car.model.name}`" class="car-image"/>
      <div class="car-details">
        <div class="car-meta">{{ getFormattedYear(car.date_first_registered) }} {{ car.make.name }} {{ car.model.name}}
        </div>
        <p class="car-price">{{ formatCurrency(car.price) }}</p>
        <div class="car-specs">
          <span class="car-mileage">{{ mileageFormat( car.odometer_value) }}</span>
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
  };
  </script>
  
  <style lang="scss" scoped></style>
  