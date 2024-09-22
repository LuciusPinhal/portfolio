<template>
<div>
    <header>
        <NavbarMenu :logo="logo_src" :alt="app_name" />
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <ViewFooter />
    </footer>
</div>
</template>

<script>
import NavbarMenu from '@/components/template/Navbar/NavbarMenu.vue';
import ViewFooter from '@/components/template/PageBaseBoard/ViewFooter.vue'

export default {
    components: {
        NavbarMenu,
        ViewFooter
    },
    data() {
        return {
            logo_src: require('./img/logo.png'),
            app_name: "Project",
            title: "Lucius | Full-stack Developer"
        }
    },
    methods: {
        setLocaleCookie(locale) {
            document.cookie = `locale=${locale}; path=/;`;
        },
        getLocaleCookie() {
            const match = document.cookie.match(new RegExp('(^| )locale=([^;]+)'));
            return match ? match[2] : null;
        },
        setInitialLanguage() {
            const savedLocale = this.getLocaleCookie();
            if (!savedLocale) {
                this.setLocaleCookie('PTBR'); 
                this.$i18n.locale = 'PTBR';   
            } else {
                this.$i18n.locale = savedLocale; 
            }
        }
    },
    mounted() {
        this.setInitialLanguage(); 
        document.title = this.title;
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
