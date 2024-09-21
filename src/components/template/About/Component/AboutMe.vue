<template>
<div class="About">
    <div class="container-sobre">
        <div class="textAbout">
            {{ $t('AboutMe') }}
        </div>
    </div>
    <div class="container">
        <div class="box">
            <div class="imgBx">
                <img :src="require('@/img/kitty.gif')">
            </div>
        </div>
        <div class="box">
            <p>
                {{ $t('I-am-a') }} <b> {{ $t('specialized-in-C#') }}</b> {{ $t('working-professionally') }}<b> {{ $t('2021') }}</b> {{ $t('Figma') }} <b>Figma. </b>
                <br>
                <br>
                {{ $t('e-commerce') }} <b> C#, Node.js</b> {{ $t('and') }} <b> Vue.js.</b> {{ $t('Selenium') }} <b>CI/CD</b> {{ $t('automatizar-processo') }} <b>Docker</b> {{ $t('otimizar') }}
                <br>
                <br>
                {{ $t('processos-melhorar') }}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AnimatedBoxes',

    components: {

    },
    mounted() {
        this.addScrollListener();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.scrollTrigger);
    },
    methods: {
        addScrollListener() {
            window.addEventListener('scroll', this.scrollTrigger);
        },
        scrollTrigger() {
            const boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                if (box.offsetTop < window.scrollY) {
                    box.classList.add('active');
                } else {
                    box.classList.remove('active');
                }
            });
        }
    }
}
</script>

<style scoped>
.About {
    height: 100%;
    width: 100%;
}

.textAbout {
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: #c72626;
    text-underline-offset: 15px;
    color: #000000;

}

.container {
    position: relative;
    top: -58vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    height: 100%;
    grid-gap: 30px;
}

.container .box {
    position: relative;
    top: 74vh;
    width: 100%;
    height: calc(100% - 40vh);
    max-height: 800;
    transition: 0.5s;
    /* background-color: #c7c7c7; */
}

.container .box:nth-child(2n+1) {
    transform: translate(-400px, 0) scale(0);
}

.container .box:nth-child(2n+2) {
    transform: translate(400px, 0) scale(0);
}

.container .box.active {
    transform: translate(0, 0) scale(1);
}

.container-sobre {
    display: grid;
    grid-template-columns: 1fr;
    width: 700px;
    grid-gap: 35px;
}

.container-sobre .box {
    position: relative;
    /* top: 50vh; */
    transition: 0.8s;
    background-color: #fff;
    border-radius: 10px;
}

.box.active {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}

.box p {
    font-size: 14px;
    border-left: 4px solid #c72626;
    padding-left: 15px;
}

.imgBx {
    width: 98%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.imgBx img {
    width: 100%;

    height: 360px;

    object-fit: cover;
    object-fit: contain;
    display: block;
}


@media screen and (max-width: 1200px) {
    .imgBx img {
        width: 400px;
    }

    .box p {
        font-size: 12PX
    }

}
</style>
