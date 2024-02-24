<template>
  <div>
    <div class="NavButton">
      <div class="search-container" >
        <Icon class="icon-search" icon="material-symbols:search" />
        <input type="text" v-model="searchQuery"  class="input-with-icon" placeholder="Pesquisar contato ...">
        <p>{{ $t('cart') }}</p>
         <p>{{ $t('teste') }}</p>
      </div>
    </div>
   <CreateContact/>
  </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import CreateContact from './testeDeLocation.vue';

export default {
  data() {
    return {
    
    };
  },
  components: {
    Icon,
    CreateContact
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
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
form {
  margin-bottom: 20px;
}
.buttonsCrud{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
}
.buttonsinfoModal{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
}
.NavButton{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.input-with-icon {
  padding-left: 30px !important;
}
.search-container {
    background-color: white;
    margin-bottom: -1px;
    position: relative;
}
.icon-search {
    position: absolute;
    left: 10px;
    top: 46%;
    transform: translateY(-50%);
    color: #007bff;
}
.titleCenterInModal{
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttonsCrudInModal{
  background-color: #fff;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  margin-right: 10px;
}

.buttonsCrudInModal:hover {
  background-color: #007bff;
  color: #fff;
}

input[type="text"],
input[type="number"],
button {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.flexstart{
  justify-content: flex-start;
 
}
.marginNone{
  margin-right: 0 !important;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table-toggle{
  background-color: #fff;
}
.toggle-style {
  border: none;
  background-color: #faf9f9!important;
}
.toggle{
  margin: 0;
  border: 1px solid #ddd;
}


</style>
