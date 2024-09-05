<template>
	<div>
		<div class="textProject">
			<h1>Portifolio</h1>
			<div class="Dice">
				<p class="Total">Total</p>
				<div class="DiceInfo">
					<p><b>10</b> Projetos
						<span style="margin:0px 12px 0px 5px;font-weight: 500;">|</span> 
						<b>15</b> Protótipos
					</p>
				</div>
			</div>
		</div>
		<div class="ContainerCards">
			<CardProjectVue/>
			<CardProjectVue/>
			<CardProjectVue/>
			<CardProjectVue/>
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
.ContainerCards{
	display: flex;
    align-items: center;
    margin-top: 15vh;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 13px;
}

.parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

}

.textProject h1{
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: underline; 
  text-decoration-color: #c72626;
  text-underline-offset: 15px;
  text-align: left;
}
.textProject {
  position: relative;
  top: 50px;
}

.Dice{
	margin-top: 30px;
}
.Dice .Total{
	font-weight: bolder;
	text-transform: uppercase;
}

.DiceInfo{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.DiceInfo b
{
	color: #c72626;
}


</style>
