<template>
<div class="parent" v-if="isMobile">
    <section class="avatar-mobile">
        <AvatarImgMobile />
    </section>
    <section class="Scroll-section">
        <ScrollingAnimation />
    </section>

</div>
<div class="parent" v-else>
    <section class="text-section">
        <TextAnimetion />
    </section>
    <section class="avatar-section">
        <avatarVue />
    </section>
    <section class="Scroll-section">
        <ScrollingAnimation />
    </section>


</div>
</template>

<!-- fazer uma verificação, caso for mobile usar outro componente do div1 e 2 -->

<script>
import avatarVue from './Component/AvatarImg.vue';
import ScrollingAnimation from './Component/ScrollingAnimation.vue';
import TextAnimetion from './Component/TextAnimetion.vue';
import AvatarImgMobile from './Component/AvatarImgMobile.vue';

export default {
    data() {
        return {
            isMobile: false,
        };
    },
    components: {
        avatarVue,
        TextAnimetion,
        ScrollingAnimation,
        AvatarImgMobile
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.avatar-mobile {
    grid-area: 1 / 1 / 5 / 6;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
}

.text-section {
    grid-area: 1 / 1 / 4 / 3;
}

.avatar-section {
    grid-area: 1 / 3 / 4 / 5;
}

.Scroll-section {
    grid-area: 4 / 1 / 5 / 5;
}

@media (max-width: 1056px) {
    .parent {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }

    .Scroll-section {
        grid-area: 5 / 1 / 6 / 6;
    }
}

@media (max-width: 600px) {}


</style>
