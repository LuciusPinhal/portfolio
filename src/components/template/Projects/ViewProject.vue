<template>
	<div>
		<div class="textAbout">
			Portifolio
		</div>
		<div class="teste">
			<CardProjectVue/>
		</div>
	</div>

</template>

<script>
import CardProjectVue from './Component/CardProject.vue';


export default {
	data() {
		return {

		};
	},
	components: {
		CardProjectVue
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
.teste{
	display: flex;
    align-items: center;
    margin-top: 15vh;
}

.parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

}

.textAbout{
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: underline; 
  text-decoration-color: #c72626;
  text-underline-offset: 15px;
  position: relative;
  top: 50px;
}


</style>
