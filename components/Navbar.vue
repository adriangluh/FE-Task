<template>
    <nav class="bg-white border-gray-200 border-b p-4 bg-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="navbar-logo">
                <NuxtLink to="/"></NuxtLink>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex space-x-4">
                    <li><NuxtLink to="/" class="navbar-link">Home</NuxtLink></li>
                    <li><NuxtLink to="/our-cars" class="navbar-link">Our Cars</NuxtLink></li>
                    <li><NuxtLink to="/sell-your-car" class="navbar-link">Sell your car</NuxtLink></li>
                    <li><NuxtLink to="/apply-for-finance" class="navbar-link">Apply for finance</NuxtLink></li>
                    <li><NuxtLink to="/about-us" class="navbar-link">About us</NuxtLink></li>
                    <li><NuxtLink to="/blog" class="navbar-link">Blog</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="navbar-link">Contact</NuxtLink></li>
                    <li><button class="navbar-link contact-options-call rounded-xl">Call us</button></li>
                    <li><button class="navbar-link contact-options-email rounded-xl">Email us</button></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>
