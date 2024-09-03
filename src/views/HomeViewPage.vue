<template>
  <div>
    <div class="main-container">
      <div class="header-static">
        <section id="home"><ViewHome/></section>
        <section id="about"><ViewAbout/></section>
        <section id="portfolio"><ViewProject/></section>
        <section id="contact" style="--clr:#fd79a8;">{{ $t('Contact') }}</section>

        <!-- <section id="contact" style="--clr:#fd79a8;">{{ $t('Contact') }}</section> -->
      </div>
    </div>
  </div>
</template>



<script>

import ViewAbout from '../components/template/About/ViewAbout.vue'
import ViewHome from '../components/template/Home/ViewHome.vue'
import ViewProject from '@/components/template/Projects/ViewProject.vue'

export default {
  name: 'HomeViewPage',

  data() {
    return {
  
    }
   },
  components: {
    ViewHome,
    ViewAbout,
    ViewProject

  },
  methods: {

  }
}
</script>

<style scoped>

section {
  width: 100%;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* font-size: 8em;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase; */
  background: var(--clr);
}

.form-header{
  margin-bottom: 1.5rem;
}
.fileName p {
  font-size: 15px;
  margin-right: 4px;
  font-weight: bold;
}
.fileNameText{
  font-weight: 300 !important;
  transition: color 0.3s ease;
}
.form-header > h1{
  text-align: left;
}
.fileName{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color:#666666;
}

.icon-cancel{
    cursor: pointer;
    width: 23px;
    height: 25px;
    color: #EE6352;
}
.fileName:hover .fileNameText, .fileName:hover .icon-cancel {
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
</style>