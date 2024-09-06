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
import NavbarMenu from "./components/Navbar/NavbarMenu.vue";

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

.main-container {
    margin-top: 32px !important;
    margin: 35vh;
    min-height: 250px;
    overflow: hidden !important;
}

h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
    color: #222;
}

@media screen and (max-width: 2105px) {

    .main-container {
        margin: 10vh;

    }
}
</style>
