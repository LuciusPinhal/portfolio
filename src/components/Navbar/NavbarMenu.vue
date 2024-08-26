<template>
    <!-- falta trabalhar resposividade -->
    <div id="nav" :class="{ active: activeSection === 'about' }">
        <div class="formNav">
           <nav class="tabsNav">
                <a @click="scrollToSection('home')" :class="{ active: activeSection === 'home' }">{{ $t('Home') }}</a>
                <a @click="scrollToSection('about')" :class="{ active: activeSection === 'about' }">{{ $t('About') }}</a>
                <a @click="scrollToSection('services')" :class="{ active: activeSection === 'services' }">{{ $t('Services') }}</a>
                <a @click="scrollToSection('portfolio')" :class="{ active: activeSection === 'portfolio' }">{{ $t('Portfolio') }}</a>
                <a @click="scrollToSection('contact')" :class="{ active: activeSection === 'contact' }">{{ $t('Contact') }}</a>
            </nav>
        </div>
        <div>
            <nav class="tabsNav">
                <div class="custom-dropdown" @mouseover="rotateIcon" @mouseleave="unrotateIcon">
                    <div class="selected-item" @click="toggleDropdown">
                        <!-- <p>🌐</p> -->
                        <p>{{ $t('Linguagem') }}</p>
                        <i class="fas fa-angle-down" :class="{ 'rotated': isDropdownVisible }"></i>
                    </div>
                    <div class="dropdown-content">
                        <ul>
                            <li :class="{ 'selected': selectedItem === 'EN' }" @click="selectItem('EN')">{{ $t('ingles') }}
                            </li>
                            <li :class="{ 'selected': selectedItem === 'PTBR' }" @click="selectItem('PTBR')">{{ $t('brasil')
                            }}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    name: "NavbarMenu",
    props: ["logo", "alt"],
    data() {
        return {
            selectedItem: 'PTBR',
            activeSection: '',
            isDropdownVisible: false
        };
    },
    mounted() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
            this.toggleLocale(); 
            this.isDropdownVisible = false; 
        },
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
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        rotateIcon() {
            this.isDropdownVisible = true;
        },
        unrotateIcon() {
            this.isDropdownVisible = false;
        }
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
    padding: 5px 40px;
    height: 85px;
}

#nav.active {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
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

#nav .tabsNav {
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

.custom-dropdown .selected-item i.rotated {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.custom-dropdown {
    position: relative;
    display: inline-block;
}

.selected-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 12px 20px;
    min-width: 214px;
    font-weight: 500;
    cursor: pointer;
    color: #000;
    transition: 0.5s;
    justify-content: space-evenly;
}

.selected-item p {
    margin-right: 8px;
}

.dropdown-content {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    padding: 5px 15px 15px 15px;
    display: none; 
}

.dropdown-content ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.dropdown-content ul li {
    padding: 15px 15px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: background-color 0.3s;
}
.dropdown-content ul li:hover {
    color: #BC3432;
    border-color: #BC3432;
    padding: 12px 10px 18px 15px;
    transition: 0.5s;
}
.dropdown-content ul li.selected {
    color: #BC3432;
    border-color: #BC3432;
    padding: 12px 10px 18px 14px;
}

.custom-dropdown:hover .dropdown-content {
    display: block;
}

</style>
