<template>
<div class="Container-Square">
    <div class="square">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
            <div class="contentBx active" id="content1">
                <div class="card">
                    <div class="imgBx">
                        <img :src="require('@/img/me.jpeg')">
                    </div>
                    <div class="textBx">
                        <h2> <a>Lucius Pinhal</a><br><b> {{ $t('desenvolvedor') }}</b></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
.Container-Square {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.square {
    position: relative;
    width: 480px;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    color: #A43913;
}

@media (max-width: 600px) {
    .square {
        width: 0;
        height: 0;
    }
}

.square span {
    position: absolute;
    inset: 0;
    border: 2px solid #333;
    opacity: 0.5;
}

.square span:nth-child(1) {
    border-radius: 46% 54% 61% 39% / 40% 40% 60% 60%;
    animation: animateSquare 6s linear infinite;
}

.square span:nth-child(2) {
    border-radius: 68% 32% 61% 39% / 49% 52% 48% 51%;
    animation: animateSquare 4s linear infinite;
}

.square span:nth-child(3) {
    border-radius: 56% 44% 36% 64% / 51% 68% 32% 49%;
    animation: animateSquare2 10s linear infinite;
}

@keyframes animateSquare {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animateSquare2 {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.icon .imgBx {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    transform: 0.5s;
    box-shadow: 0 0 0 4px #fff;
    opacity: 0.5;
}

.icon .imgBx.active {
    opacity: 1;
    scale: 1.2;
    margin: 0 10px;
    box-shadow: 0 0 0 4px #fff,
        0 0 0 10px #66a3ff,
        0 0 0 12px #fff;
}

.icon .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentBx {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transform: scale(0);
    opacity: 0;
}

.contentBx.active {
    transform: scale(1);
    opacity: 1;
    transition-delay: 0.5s;
}

.contentBx .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 15px;
}

.contentBx .card .imgBx {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}

.contentBx .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentBx .card .textBx {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contentBx .card .textBx h2 {
    position: relative;
    font-size: 1.25em;
    font-weight: 600;
    color: #333;
    line-height: 1em;
    text-transform: uppercase;
}

.contentBx .card .textBx h2 b {
    font-size: 0.65em;
    color: #222;
    font-weight: 500;
    letter-spacing: 0.5em;
}

.contentBx .card .sci {
    position: relative;
    display: flex;
    gap: 7px;
    margin-top: 10px;
}

.contentBx .card .sci li {
    list-style: none;
}

.contentBx .card .sci li a {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 50%;
    transition: 0.5s;
}

.contentBx .card .sci li a:hover {
    background-color: #66a3ff;
}
</style>
