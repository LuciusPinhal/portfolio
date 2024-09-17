<template>
<div class="parent">
    <ScrollingAnimation />
    <textas />
</div>
</template>

<script>
import ScrollingAnimation from './Component/ScrollingText.vue';
import textas from './Component/AboutMe.vue'
export default {
    data() {
        return {

        };
    },
    components: {
        ScrollingAnimation,
        textas
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
    display: flex;
    flex-wrap: wrap;

}

</style>
