<template>
    <div id="nav">
        <div class="formNav">
            <router-link to="/" id="logo-url">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>
        </div>
        <div>
            <router-link to="/">Home</router-link><span>|</span>
            <router-link to="/ListUserTable">Table</router-link>
            <p>🌐{{ $t('Linguagem') }}</p>

        <select v-model="selectedItem" @change="toggleLocale">
          <option disabled value="">{{ $t('Selecione-uma-opção') }}</option>
          <option value="EN">{{ $t('ingles') }}</option>
          <option value="PTBR">{{ $t('brasil') }}</option>
        </select>
        </div>
    </div>
</template> 
<script>

export default {
    name: "NavbarMenu",
    props: ["logo", "alt"],
    data() {
        return {
            selectedItem: 'PTBR',
        }

    },
    methods: {
        toggleLocale() {      
            this.$i18n.locale = this.selectedItem;
        },
        
    },

} 
</script> 

<style scoped>
#nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #EFE9F4;
    /* border-bottom: 2px solid #3F287A; */
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

#nav a,
.fileName p {
    color: #3F287A;
    text-decoration: none;
    margin: 12px;
    transition: 0.5s;
}

#nav span {
    color: #3F287A;
}

#nav a:hover {
    text-decoration: underline;
}
</style>