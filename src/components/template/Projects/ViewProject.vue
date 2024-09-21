<template>
<div>
    <div class="textProject">
        <h1>{{ $t('Portfolio') }}</h1>
        <div class="Dice">
            <p class="Total">Total</p>
            <div class="DiceInfo">
                <p>
                    <b>{{ totalProjects }}</b>
                    {{ $t('Projects')}}

                    <span style="margin:0px 12px 0px 5px;font-weight: 500;">|</span>

                    <b>{{ totalPrototypes }}</b>
                    {{ $t('Prototypes')}}
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
            return [{
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

<!-- Footer alinhamento esquerda
Footer mobile

Margem tela all 32
Margem header 32

Mobile home letra vermelha Lucius - ajustar as linhas - 
Definir espaços entre componentes- IGUAL DO PROTOTIPO =)  -  GATINHO TBM

Teste Average  -->

<style scoped>
.ContainerCards {

    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 40px;
    width: 100%;

    box-sizing: border-box;

}

@media screen and (max-width: 740px) {

    .ContainerCards {
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
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

@media screen and (max-width: 1056px) {
    .textProject h1 {
        font-size: 26px;
    }

    .Dice {
        font-size: 14px;
    }
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
