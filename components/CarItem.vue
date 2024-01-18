<template>
    <div class="car-item" @click="selectCar(car)">
      <img :src="car.imageUrl" :alt="`Image of ${car.model}`" class="car-image"/>
      <div class="car-details">
        <h2 class="car-title">{{ car.make }} {{ car.model }}</h2>
        <p class="car-price">{{ car.price | currency }}</p>
        <div class="car-meta">
          <span class="car-year">{{ car.year }}</span>
          <span class="car-mileage">{{ car.mileage | mileageFormat }}</span>
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
        // This method could emit an event or route to a car-specific page
        this.$emit('selected', car);
      }
    },
    filters: {
      currency(value) {
        // A simple currency filter, you might want to replace with a proper library
        return `$${parseFloat(value).toFixed(2)}`;
      },
      mileageFormat(value) {
        // A simple mileage filter
        return `${value.toLocaleString()} miles`;
      }
    }
  };
  </script>
  
  <style scoped>
  .car-item {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s;
    cursor: pointer;
  }
  
  .car-item:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .car-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .car-details {
    padding: 16px;
  }
  
  .car-title {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .car-price {
    color: #4CAF50;
    font-size: 1.2em;
    margin: 8px 0;
  }
  
  .car-meta {
    color: #666;
    font-size: 0.9em;
  }
  
  .car-year, .car-mileage {
    margin-right: 16px;
  }
  </style>
  