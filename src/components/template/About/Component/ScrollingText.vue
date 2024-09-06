<template>
<div class="scrolling-wrapper">
    <div id="scrollText" class="scroll-text">
        Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer
        <br>Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer - Not Your Average Software Engineer
    </div>
</div>
</template>

  
<script>
export default {
    name: 'HorizontalScroll',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollValue = window.scrollY; // Pega o valor da rolagem vertical
            const textElement = document.getElementById('scrollText');
            const textWidth = textElement.clientWidth; // Pega a largura do texto

            // Move o texto horizontalmente com base na rolagem
            let translateXValue = -((scrollValue * 2) % textWidth);
            textElement.style.transform = `translateX( ${translateXValue + 200 }px)`;
        }
    }
}
</script>

  
<style scoped>
.scrolling-wrapper {
    position: relative;
    width: 100%;
    top: -5vh;
    overflow: hidden;
    white-space: nowrap;
    height: 158px;
    margin-bottom: 1vh;
}

.scroll-text {
    display: inline-block;
    font-size: 45px;
    /* Tamanho do texto baseado na largura da viewport */
    color: #F9E3DE;
    white-space: nowrap;
    font-weight: bold;
}
</style>
