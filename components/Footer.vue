<template>
<footer class="footer bg-darkBlue text-white p-10">
    <div class="footer-top grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <h1 class="footer-heading">CarDealer UK</h1>
        <div class="branch-details">
            <h2 class="section-title">Branch Details</h2> 
            <address class="not-italic">
            101 Business Street<br>
            Business Town<br>
            Business County<br>
            BU51 N55
            </address>
            <p>Telephone: 01234 567890</p>
            <opening-hours>
                <ul class="week-days">
                    <li>Weekdays</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
                <ul class="opening-times">
                    <li>09:00 - 18:00</li>
                    <li>10:00 - 17:00</li>
                    <li>10:00 - 16:00</li>
                </ul>
            </opening-hours>
            <p>Email: enquiries@cardealer.uk</p>
        </div>
        <div class="popular-brands">
            <h2 class="section-title">Popular Brands</h2>
            <ul>
                <li><a href="#">Audi</a></li>
                <li><a href="#">BMW</a></li>
                <li><a href="#">Fiat</a></li>
                <li><a href="#">Land Rover</a></li>
                <li><a href="#">Mercedes-Benz</a></li>
                <li><a href="#">Mini</a></li>
                <li><a href="#">Peugeot</a></li>
                <li><a href="#">SEAT</a></li>
                <li><a href="#">Vauxhall</a></li>
                <li><a href="#">Volkswagen</a></li>
            </ul>
        </div>
        <div class="site-map">
            <h2 class="section-title">Site Map</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our cars</a></li>
                <li><a href="#">Sell your car</a></li>
                <li><a href="#">Apply for finance</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
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




