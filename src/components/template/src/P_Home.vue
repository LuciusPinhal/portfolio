<template>
	<div class="parent">
	<div class="div1"><TextAnimetion/></div>
	<div class="div2"><avatarVue/></div>
	<div class="div3"> guys</div>
	</div>
</template>

<script>

import avatarVue from '../AvatarImg.vue';
import TextAnimetion from '../TextAnimetion.vue';


export default {
	data() {
		return {

		};
	},
	components: {
		avatarVue,
		TextAnimetion
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
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 4 / 3; }
.div2 { grid-area: 1 / 3 / 4 / 5; }
.div3 { grid-area: 4 / 1 / 5 / 5; background: rgb(105, 206, 11);}
</style>
