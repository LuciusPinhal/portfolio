<template>
<div class="parent">
    <ScrollingAnimation />
    <FromMeMobile v-if="isMobile"/>
    <FromMe v-else/>
</div>
</template>

<script>
import ScrollingAnimation from './Component/ScrollingText.vue';
import FromMe from './Component/AboutMe.vue'
import FromMeMobile from './Component/AboutMeMobile.vue'
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    components: {
        ScrollingAnimation,
        FromMe,
        FromMeMobile
    },
    computed: {

    },
    methods: {
        checkScreenWidth() {
            this.isMobile = window.innerWidth <= 1056;
        },

    },
    mounted() {

        // Checa o tamanho da tela ao montar o componente
        this.checkScreenWidth();
        // Adiciona o listener para ajustar ao redimensionar a janela
        window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeUnmount() {
        // Remove o listener ao destruir o componente
        window.removeEventListener('resize', this.checkScreenWidth);
    },
};
</script>

<style scoped>
.parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

}

</style>
