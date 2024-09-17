<template>
<div class="parent">
    <div class="div1">
        <TextAnimetion />
    </div>
    <div class="div2">
        <avatarVue />
    </div>
    <div class="div3">
        <ScrollingAnimation />
    </div>
</div>
</template>

<!-- fazer uma verificação, caso for mobile usar outro componente do div1 e 2 -->

<script>
import avatarVue from './Component/AvatarImg.vue';
import ScrollingAnimation from './Component/ScrollingAnimation.vue';
import TextAnimetion from './Component/TextAnimetion.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        avatarVue,
        TextAnimetion,
        ScrollingAnimation
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    },
    created() {

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

.div1 {
    grid-area: 1 / 1 / 4 / 3;
}

.div2 {
    grid-area: 1 / 3 / 4 / 5;
}

.div3 {
    grid-area: 4 / 1 / 5 / 5;
}
</style>
