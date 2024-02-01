<template>
<div class="finance-breakdown bg-white p-4 rounded-lg shadow-lg mt-6 mb-4">
    <div class="finance-header flex justify-between items-center">
        <p v-show="showBreakdown"><strong>Representative example:</strong>Representative example: Borrowing £11,790.00 over 4 years with a representative APR of 7.9 %, an annual interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount payable would be £273.59 per month, with a total cost of credit of £1,843.32 and a total amount payable of £13,633.32.</p>
        <button 
            @click="toggleBreakdown" 
            class="breakdown-button flex justify-between items-start rounded-xl "
        >
            <span v-if="showBreakdown">Hide breakdown &uarr;</span>
            <span v-else>Show breakdown &darr;</span>
        </button>
    </div>
    <div v-show="showBreakdown">
        <div class="tab-headers flex border-b border-gray-200 mb-4">
            <h3
                class="finance-tab mr-4 cursor-pointer w-full text-center"
                :class="{ 'active': currentTab === 'pcp' }"
                @click="currentTab = 'pcp'"
            >
            Personal Contract Purchase
            </h3>
            <h3
                class="finance-tab cursor-pointer w-full text-center"
                :class="{ 'active': currentTab === 'hp' }"
                @click="currentTab = 'hp'"
            >
            Hire Purchase
            </h3>
        </div>

        <div 
            v-show="currentTab === 'pcp'" 
            class="finance-content"
        >
            <div class="grid grid-cols-1 md:grid-cols-5 gap-2 p-1">
                <div class="finance-detail">48 monthly payments: <span>£199.99</span></div>
                <div class="finance-detail">Cash price: <span>£14,999.99</span></div>
                <div class="finance-detail">Customer deposit: <span>£1,999.99</span></div>
                <div class="finance-detail">Amount of credit: <span>£12,999.99</span></div>
                <div class="finance-detail">APR: <span>4.9%</span></div>
                <div class="finance-detail">Term: <span>48 months</span></div>
                <div class="finance-detail">Total amount payable: <span>£17,999.99</span></div>
                <div class="finance-detail">Rate of interest (fixed): <span>2.5%</span></div>
                <div class="finance-detail">Annual mileage: <span>10,000 miles</span></div>
                <div class="finance-detail">Optional final payment: <span>£5,999.99</span></div>
            </div>
        </div>

        <div 
            v-show="currentTab === 'hp'" 
            class="finance-content"
        >
            <div class="grid grid-cols-1 md:grid-cols-5 gap-2 p-1">
                <div class="finance-detail">48 monthly payments: <span>£259.99</span></div>
                <div class="finance-detail">Cash price: <span>£18,999.99</span></div>
                <div class="finance-detail">Customer deposit: <span>£999.99</span></div>
                <div class="finance-detail">Amount of credit: <span>£10,999.99</span></div>
                <div class="finance-detail">APR: <span>6.5%</span></div>
                <div class="finance-detail">Term: <span>24 months</span></div>
                <div class="finance-detail">Total amount payable: <span>£9,999.99</span></div>
                <div class="finance-detail">Rate of interest (fixed): <span>4.5%</span></div>
                <div class="finance-detail">Annual mileage: <span>4,000 miles</span></div>
                <div class="finance-detail">Optional final payment: <span>£2,999.99</span></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
    data() {
        return {
        currentTab: 'pcp',
        showBreakdown: true,
        };
    },
    methods: {
        toggleBreakdown() {
        this.showBreakdown = !this.showBreakdown;
        },
    },
};
</script>
