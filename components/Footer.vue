<template>
<footer class="footer bg-darkBlue text-white p-10">
    <div class="footer-top grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
    <div>
        <h4 class="footer-heading">CarDealer uk</h4>
        <address class="not-italic">
        101 Business Street<br>
        Business Town<br>
        Business County<br>
        BU51 N55
        </address>
        <p>Telephone: 01234 567890</p>
        <p>Email: enquiries@cardealer.uk</p>
    </div>
    </div>
    
    <div class="footer-bottom grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <p>Company Info</p>
        <p>Registered in England and Wales.</p>
        <p>Registered No: 00000000 | VAT No: 000 0000 00</p>
        <p>Registered Office: 101 Business Street, Business Town, Business County BU51 N55.</p>
    </div>
    <div>
        <p>Financial Disclosure</p>
    </div>
    </div>
    
    <div class="footer-credit mt-8 text-center text-sm">
        <a href="https://www.nexuspoint.co.uk/" alt="Nexus Point">Powered by Nexus Point</a> 
        <p>© 2024 Adrian Gluh | FE - Task</p>
    </div>
</footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-top,
.footer-bottom {
    @apply grid gap-8;
}

</style>




