<template>
<div>
    <div class="textProject">
        <h1>Portifolio</h1>
        <div class="Dice">
            <p class="Total">Total</p>
            <div class="DiceInfo">
                <p>
                    <b>{{ totalProjects }}</b> 
                    Projetos

                    <span style="margin:0px 12px 0px 5px;font-weight: 500;">|</span>

                    <b>{{ totalPrototypes }}</b> 
                    Protótipos
                </p>
            </div>
        </div>
    </div>
    <div class="ContainerCards">
        <CardProjectVue v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
</div>
</template>

<script>
import CardProjectVue from './Component/CardProject.vue';

export default {
    components: {
        CardProjectVue
    },

    data() {
        return {
            projects: this.getTranslatedProjects(),
            totalProjects: 0,
            totalPrototypes: 0
        };

    },
    watch: {
        // Observa a mudança no idioma
        '$i18n.locale'() {
            this.projects = this.getTranslatedProjects();
        }
    },

    mounted() {
        this.calculateCounts();
    },
    methods: {
        getTranslatedProjects() {
            return [
                {
                    name: this.$t('ChallengerPentagro'),
                    description: 'O projeto envolve o desenvolvimento de uma tela de login e gestão de usuários...',
                    link: 'https://github.com/LuciusPinhal/PentagroChallenge?tab=readme-ov-file',
                    title: 'Link para ir para o Projeto',
                    stacks: ['Vue.js', 'API', 'Login System'],
                    image: require('@/img/teste.png'),
                    Type: 'project | prototype'
                },
                {
                    name: this.$t('cart'),
                    description: 'Descrição do segundo projeto...',
                    link: 'https://github.com/OutroProjeto',
                    title: 'Link para o segundo projeto',
                    stacks: ['JavaScript', 'Node.js', 'MongoDB'],
                    image: require('@/img/teste.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('cart'),
                    description: 'Descrição do segundo projeto...',
                    link: 'https://github.com/OutroProjeto',
                    title: 'Link para o segundo projeto',
                    stacks: ['JavaScript', 'Node.js', 'MongoDB'],
                    image: require('@/img/teste.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('cart'),
                    description: 'Descrição do segundo projeto...',
                    link: 'https://github.com/OutroProjeto',
                    title: 'Link para o segundo projeto',
                    stacks: ['JavaScript', 'Node.js', 'MongoDB'],
                    image: require('@/img/teste.png'),
                    Type: 'project'
                }
                
            ];
        },
        calculateCounts() {
            this.totalProjects = this.projects.filter(p => p.Type.includes('project')).length;
            this.totalPrototypes = this.projects.filter(p => p.Type.includes('prototype')).length;
        }
    }
};
</script>

<style scoped>
.ContainerCards {
    display: flex;
    align-items: center;
    margin-top: 15vh;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 50px;
}

.parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

}

.textProject h1 {
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: #c72626;
    text-underline-offset: 15px;
    text-align: left;
    color: #000000;
}

.textProject {
    position: relative;
    top: 50px;
}

.Dice {
    margin-top: 30px;
}

.Dice .Total {
    font-weight: bolder;
    text-transform: uppercase;
}

.DiceInfo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.DiceInfo b {
    color: #c72626;
}
</style>
