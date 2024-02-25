<template>
  <div>
    <section id="home" style="--clr:#ff4d4d;"><P_home /></section>
    <section id="about" style="--clr:#c56cf0;">{{ $t('About') }}</section>
    <section id="services" style="--clr:#ffeaa7;">{{ $t('Services') }}</section>
    <section id="portfolio" style="--clr:#17c0eb;">{{ $t('Portfolio') }}</section>
    <section id="contact" style="--clr:#fd79a8;">{{ $t('Contact') }}</section>
  </div>
</template>

<script>
import P_home from './src/P_Home.vue'



export default {
  data() {
    return {

    };
  },
  components: {
    P_home
  },
  computed: {


  },
  methods: {


  },
  mounted() {


  },
  created() {

  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8em;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  background: var(--clr);
}
</style>
