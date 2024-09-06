<template>
<div class="About">
    <div class="container-sobre">
        <div class="textAbout">
            Sobre Mim
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
                Sou um desenvolvedor <b>Full Stack especializado em C# e Vue.js</b>, Trabalho profissionalmente com <b>.NET desde 2022</b>, com habilidades em prototipagem usando Figma.
                <br>
                <br>
                Tenho experiência no desenvolvimento de sites e e-commerce utilizando<b>C#, Node.js e Vue.js</b>. Testes automatizados com Selenium para garantir a qualidade do código, <b>CI/CD</b> para automatizar o processo de desenvolvimento e <b>Docker</b> para otimizar o desempenho das aplicações.
                <br>
                <br>
                Foco na otimização de processos para melhorar a experiência do cliente e resolver problemas de projeto de forma eficiente, sempre buscando aprimorar o desempenho.
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
    top: -67vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    font-size: 2.8vh;
    border-left: 4px solid #c72626;
    padding-left: 15px;
}

.imgBx {
    width: 100%;
    height: 100%;
}

.imgBx img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Garante que a imagem se ajuste ao tamanho do pai */
    object-fit: contain;
    /* n corta a img*/
    display: block;
}

@media screen and (min-width: 1820px) {
    .box p {
        font-size: 20px;
    }
}
</style>
