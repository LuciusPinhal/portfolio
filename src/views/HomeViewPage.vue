<template>
<div>
    <div class="main-container">
        <div class="header-static">
            <section id="home">
                <ViewHome />
            </section>
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

<ViewFooter />
</template>

<script>
import ViewAbout from '@/components/template/About/ViewAbout.vue'
import ViewHome from '@/components/template/Home/ViewHome.vue'
import ViewProject from '@/components/template/Projects/ViewProject.vue'
import ViewFooter from '@/components/template/PageBaseBoard/ViewFooter.vue'

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
        ViewFooter

    },
    methods: {

    }
}
</script>

<style scoped>
.main-container {
    margin-top: 32px !important;
    margin: 35vh 35vh 0 35vh;
    min-height: 250px;
    overflow: hidden !important;
}

h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
    color: #222;
}

@media screen and (max-width: 2105px) {

    .main-container {
        margin: 10vh 10vh 0 10vh;

    }
}

section {
    width: 100%;
    height: 100vh;
    background: var(--clr);
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
    height: 650px;
}
</style>
