<template>
  <div>
    <header>
      <NavbarMenu :logo="logo_src" :alt="app_name"/> 
    </header>
    <main>
      <router-view />
    </main>
  </div> 

</template>


<script>
import NavbarMenu from "./components/NavbarMenu.vue";
import { onMounted } from 'vue';

onMounted(() => {
  document.cookie = 'locale=PTBR'
})

export default {

  components: {
    NavbarMenu,
  },
  data() {
    return {
      logo_src: require('./img/logo.png'),
      app_name: "Make Your Burger"
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.main-container {
  margin-top: 55px !important;
  margin: 24px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  color: #222;

}
</style>