<template>
    <div class="car-item valuation-card">
        <h2 class="valuation-title">Value my car</h2>
        <p>Find out the value of your car in just a few minutes.</p>
        <form @submit.prevent="submitValuation">
        <input
            type="text"
            v-model="vrm"
            placeholder="Enter VRM"
            required
            class="vrm-input"
        />
        <input
            type="number"
            v-model="mileage"
            placeholder="Enter mileage"
            required
            class="mileage-input"
        />
        <button type="submit" class="value-my-car-btn">Value my car</button>
        </form>
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
</style>
