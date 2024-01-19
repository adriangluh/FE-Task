<!-- Main layout file with header, footer, and <Nuxt> -->

<template>
    <div>
        <main>
            <Navbar />
            <Nuxt />
        </main>
        <Footer />
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        Navbar,
        Footer
    }
}

</script>

<style></style>