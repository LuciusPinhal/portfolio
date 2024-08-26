<template>
	<div class="parent">
		<div class="div1"><ScrollingAnimation/> </div>
		<div class="div2"> </div>
		<div class="div3"> </div>
	</div>
</template>

<script>

import ScrollingAnimation from './Component/ScrollingText.vue';
export default {
	data() {
		return {

		};
	},
	components: {
		ScrollingAnimation
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
.parent {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 3 / 6; }
.div2 { grid-area: 3 / 1 / 6 / 3; }
.div3 { grid-area: 3 / 3 / 6 / 5; }
.div1{
	margin: 0;
	overflow-x: hidden; /* Evita rolagem horizontal */
}

</style>
