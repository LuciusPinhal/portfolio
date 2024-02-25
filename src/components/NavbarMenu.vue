<template>
    <div id="nav">
        <div class="formNav">
            <router-link to="/" id="logo-url">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>
        </div>
        <div>
            <nav class="tabsNav">
                <a @click="scrollToSection('home')" :class="{ active: activeSection === 'home' }">Home</a>
                <a @click="scrollToSection('about')" :class="{ active: activeSection === 'about' }">About</a>
                <a @click="scrollToSection('services')" :class="{ active: activeSection === 'services' }">Services</a>
                <a @click="scrollToSection('portfolio')" :class="{ active: activeSection === 'portfolio' }">Portfolio</a>
                <a @click="scrollToSection('contact')" :class="{ active: activeSection === 'contact' }">Contact</a>
               <div class="dropdown">
               <select v-model="selectedItem" @change="toggleLocale">
                    <option disabled hidden value="">🌐{{ $t('Linguagem') }}</option>
                    <option disabled  value="">{{ $t('Selecione-uma-opção') }}</option>
                    <option value="EN">{{ $t('ingles') }}</option>
                    <option value="PTBR">{{ $t('brasil') }}</option>
                </select>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarMenu",
    props: ["logo", "alt"],
    data() {
        return {
            selectedItem: '',
            activeSection: ''
        };
    },
    mounted() {
        this.handleScroll(); 
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleLocale() {
            this.$i18n.locale = this.selectedItem;
        },
        scrollToSection(sectionId) {

            const section = document.getElementById(sectionId);
            let offsetTop = section.offsetTop - 60;

            if (sectionId == 'home') {
                offsetTop = section.offsetTop - 150;
            }
            

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            const sections = document.querySelectorAll('section');
            let maxSectionId = '';
            let maxSectionPosition = -Infinity;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;

                if (sectionTop <= windowHeight / 2 && sectionBottom > windowHeight / 2) {
                    // Verifica se essa seção está mais próxima do topo da janela de visualização
                    if (sectionTop > maxSectionPosition || maxSectionId === '') {
                        maxSectionId = section.id;
                        maxSectionPosition = sectionTop;
                    }
                }
            });

            if (maxSectionId === '') {
                this.activeSection = 'home';
            } else {
                this.activeSection = maxSectionId;
            }
        },

    }
};
</script>

<style scoped>
#nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #EFE9F4;
    padding: 0px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1000;
    transition: all ease .3s;
    background: #ffffff;
    z-index: 12;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    padding: 5px 40px;
}

#nav .formNav {
    display: flex;
    align-items: center;
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 59px;
    height: 60px;
}


/* icones nav */

#nav .tabsNav{
    display: flex;
    gap: 10px;
}
#nav .tabsNav a {
    position: relative;
    text-decoration: none;
    padding: 12px 20px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    color: #000000; 
    transition: 0.5s;
}

#nav .tabsNav a.active {
    color: #BC3432;
    border-color: #BC3432;
}

#nav .tabsNav a:hover {
    color: #4b1413;
    border-color: #4b1413;
    padding: 6px 20px;
    transition: 0.5s;
    
}
/* icones nav */
.dropdown{
    display: flex;
}
.dropdown select{
    border: none;
}
</style>
