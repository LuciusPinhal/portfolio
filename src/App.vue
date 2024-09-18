<template>
<div>
    <header>
        <NavbarMenu :logo="logo_src" :alt="app_name" />
    </header>
    <main>
        <router-view />
    </main>
</div>
</template>

<script>
import NavbarMenu from '@/components/template/Navbar/NavbarMenu.vue';

export default {
    components: {
        NavbarMenu,
    },
    data() {
        return {
            logo_src: require('./img/logo.png'),
            app_name: "Project"
        }
    },
    methods: {
        setLocaleCookie() {
            document.cookie = 'locale=PTBR';
        }
    },
    mounted() {
        this.setLocaleCookie();
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}


</style>
