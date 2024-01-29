<template>
    <div class="car-item valuation-card shadow rounded-lg overflow-hidden p-11 flex flex-col items-center justify-between h-full">
        <h2 class="valuation-title text-center text-l">Value your car</h2>
        <p class="find-value-text text-center">Find out the value of your car in just a few minutes.</p>
        <div class="input-wrapper px-5">
            <form @submit.prevent="submitValuation">
            <input
                type="text"
                v-model="vrm"
                placeholder="Enter VRM"
                required
                class="input-field mb-6"
            />
            <input
                type="number"
                v-model="mileage"
                placeholder="Enter mileage"
                required
                class="input-field mb-7"
            />
            <button type="submit" class="value-my-car-btn w-full rounded-lg">Value my car</button>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            vrm: '',
            mileage: ''
            };
        },
        methods: {
            submitValuation() {
                alert(`Valuation for VRM: ${this.vrm} and Mileage: ${this.mileage}`);
            }
        }
    };
</script>

<style scoped lang="scss">
.input-field {
    @apply w-full px-4 py-3 border text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
.value-my-car-btn {
    @apply text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50;
}
</style>
