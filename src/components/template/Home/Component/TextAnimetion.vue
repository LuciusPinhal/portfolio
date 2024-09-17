<template>
<div class="container">
    <p>{{ $t('Hello') }}</p>
    <h2>{{ $t('Im') }} Lucius</h2>
    <p>{{ $t('Introducao') }}</p>
</div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    data() {
        return {

        };
    },
    components: {

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
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 6px 0px;

}

p {
    color: #000000;
    font-size: 20px;
}

h2 {
    color: #A43913;
    font-size: 40px;
}

.container p,
.container h2 {
    margin-bottom: 14px;
}
</style>
