<template>
<div>
    <div class="main-container">
        <div class="header-static">
            <section id="home">
                <ViewHome />
            </section>
            <div class="no-margin">
                <ScrollingAnimation />
            </div>
            <section id="about">
                <ViewAbout />
            </section>
            <section id="portfolio">
                <ViewProject />
            </section>
            <section id="contact">
            </section>
        </div>
    </div>
</div>
</template>

<script>
import ViewAbout from '@/components/template/About/ViewAbout.vue'
import ViewHome from '@/components/template/Home/ViewHome.vue'
import ViewProject from '@/components/template/Projects/ViewProject.vue'
import ScrollingAnimation from '@/components/template/About/Component/ScrollingText.vue';

export default {
    name: 'HomeViewPage',

    data() {
        return {

        }
    },
    components: {
        ViewHome,
        ViewAbout,
        ViewProject,
        ScrollingAnimation,

    },
    methods: {

    }
}
</script>

<style scoped>
.main-container {
    margin-top: 32px !important;
    min-height: 250px;
    overflow: hidden !important;
}

.main-container> :not(.no-margin) {
    margin: 0vh 32vh 0 32vh;
}

.no-margin {
    margin: 8vh -32vh;
}

h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
    color: #222;
}
#about{
    height: 438px;
}

@media (max-width: 1056px) {

    .main-container> :not(.no-margin) {
        margin: 0vh 5vh 0 5vh;
    }

    .no-margin {
        margin: 5vh -5vh
    }

    #about{
        height: 438px;
    }
}


section {
    width: 100%;
    height: 94vh;
    background: var(--clr);
}


#portfolio {
    height: auto;
    min-height: 100vh;
}

.form-header {
    margin-bottom: 1.5rem;
}

.fileName p {
    font-size: 15px;
    margin-right: 4px;
    font-weight: bold;
}

.fileNameText {
    font-weight: 300 !important;
    transition: color 0.3s ease;
}

.form-header>h1 {
    text-align: left;
}

.fileName {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #666666;
}

.icon-cancel {
    cursor: pointer;
    width: 23px;
    height: 25px;
    color: #EE6352;
}

.fileName:hover .fileNameText,
.fileName:hover .icon-cancel {
    color: #EE6352;
    text-decoration: underline;
}

.icon-cancel {
    cursor: pointer;
    width: 23px;
    height: 25px;
    transition: color 0.3s ease;
}

.iconContainer {
    display: inline-block;
}

#contact {
    display: flex;
    align-items: flex-end;
    margin: 0 !important;
    height: 325px;

}
</style>
