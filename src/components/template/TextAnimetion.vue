<template>
    <div class="container">
        <p>Hello!</p>
        <h2>I'm Lucius</h2>
        <p>Desenvolvedor Full-Stack & Love To Play Video Games</p>
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
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 20px;
  
}
p{
    color: #999999;
    font-size: 20px;
}
h2{
    font-size: 40px; 
}
.container p,
.container h2 {
    margin: 14px;
}

</style>
