<template>
<div class="container">
    <p>{{ $t('Skills') }}</p>
    <hr class="line">
    <div class="scroll" style="--t:90s">
        <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>Vue.js</span>
            <span>Figma</span>
            <span>.Net</span>
            <span>Node.js</span>
            <span>Selenium</span>

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>Vue.js</span>
            <span>Figma</span>
            <span>.Net</span>
            <span>Node.js</span>
            <span>Selenium</span>
        </div>
        <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vue.js</span>
            <span>Figma</span>
            <span>.Net</span>
            <span>Git</span>
            <span>Node.js</span>
            <span>Selenium</span>

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vue.js</span>
            <span>Figma</span>
            <span>.Net</span>
            <span>Git</span>
            <span>Node.js</span>
            <span>Selenium</span>
        </div>
    </div>
</div>
</template>

<script>
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
p {
    color: #000000;
    font-size: 24px;
    padding-bottom: 10px;

}

.line {
    width: 100%;
    color: #000000;
    margin-bottom: 10px;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 12px 0px;

}

.scroll {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 90%, transparent);
}

.scroll div {
    white-space: nowrap;
    animation: Scrolling var(--t) linear infinite;
    animation-delay: calc(var(--t) * -1);
}

.scroll div:nth-child(2) {
    animation: Scrolling2 var(--t) linear infinite;
    animation-delay: calc(var(--t) / -2);
}

@keyframes Scrolling {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes Scrolling2 {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-200%);
    }
}

.scroll div span {
    display: inline-flex;
    margin: 0.3rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.5s;
}

.scroll div span:hover {
    background: #4caf50;
}
</style>
