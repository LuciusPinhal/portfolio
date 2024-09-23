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
                    description: this.$t('PentagroDescription'),
                    link: 'https://github.com/LuciusPinhal/PentagroChallenge',
                    title: this.$t('Title'),
                    stacks: ['Vue.js', 'API', 'JavaScript'],
                    image: require('@/img/Pentagro.png'),
                    Type: 'project | prototype'
                },
                {
                    name: this.$t('DavinTIName'),
                    description: this.$t('DavinTIDescription'),
                    link: 'https://github.com/LuciusPinhal/DavinTIChallenge',
                    title: this.$t('Title'),
                    stacks: ['JavaScript', 'Node.js', 'Vue.js'],
                    image: require('@/img/Davin.png'),
                    Type: 'project | prototype'
                },
                {
                    name: this.$t('MJVTIName'),
                    description: this.$t('MJVDescription'),
                    link: 'https://github.com/LuciusPinhal/ProjectStore_MJVSchool',
                    title: this.$t('Title'),
                    stacks: ['C#', 'JavaScript', 'MVC'],
                    image: require('@/img/MJV.png'),
                    Type: 'project | prototype'
                },
                {
                    name: this.$t('VoxusName'),
                    description: this.$t('VoxusDescription'),
                    link: 'https://github.com/LuciusPinhal/VoxusChallege',
                    title: this.$t('Title'),
                    stacks: ['Docker', 'Node.js', 'Vue.js', 'JavaScript'],
                    image: require('@/img/Voxus.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('CopyBaseName'),
                    description: this.$t('CopyBaseDescription'),
                    link: 'https://github.com/LuciusPinhal/CopyBaseChallenge',
                    title: this.$t('Title'),
                    stacks: ['Vue.js', 'Docker', 'javaScript'],
                    image: require('@/img/CopyBase.png'),
                    Type: 'project | prototype'
                },
                {
                    name: this.$t('SnakeName'),
                    description: this.$t('SnakeDescription'),
                    link: 'https://github.com/LuciusPinhal/Game_Snake',
                    title: this.$t('Title'),
                    stacks: ['JavaScript', 'HTML', 'CSS'],
                    image: require('@/img/Snake.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('ArrayName'),
                    description: this.$t('ArrayDescription'),
                    link: 'https://github.com/LuciusPinhal/ArrayChallenge',
                    title: this.$t('Title'),
                    stacks: ['C#', 'Vue.js', 'JavaScript'],
                    image: require('@/img/Array.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('ChessName'),
                    description: this.$t('ChessDescription'),
                    link: 'https://github.com/LuciusPinhal/Curso_Udemy/tree/main/C%23%20Completo/Project%20Game%20Xadrez%20Console',
                    title: this.$t('Title'),
                    stacks: ['C#', 'Console Application'],
                    image: require('@/img/Xadrez.png'),
                    Type: 'project'
                },
                {
                    name: this.$t('hamburgerName'),
                    description: this.$t('hamburgerDescription'),
                    link: 'https://github.com/LuciusPinhal/Create_hamburger',
                    title: this.$t('Title'),
                    stacks: ['Vue.js', 'JavaScript'],
                    image: require('@/img/Hamburger.png'),
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
