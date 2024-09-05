<template>
	<div class="card">
        <div class="imgBx"></div>
        <div class="content">
            <span class="price">
                <a href="https://github.com/LuciusPinhal/PentagroChallenge?tab=readme-ov-file" class="AlingItensHeader">
                    <i class="fa-brands fa-github fa-2x"></i> <p>Challenger Pentagro </p> 
                </a>
            </span>
            <div class="Container">
                <p>O projeto envolve o desenvolvimento de uma tela de login e gestão de usuários em Vue.js, com integração a uma API que permite o acesso dos usuários, além de salvar e recuperar dados.</p>
                <div class="ContainerStacks">
                    <div class="Stacks">Stacks</div>
                    <div class="Stacks">Stacks</div>
                    <div class="Stacks">Stacks</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
export default {
	data() {
		return {

		};
	},
	components: {

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

.card{
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.card .imgBx{
    position: relative;
    width: 100%;
    height: 200px;
    background: #f00;
    /* border-radius: 15px; */
    background: url(http://localhost:8080/img/teste.640c4e33.png);
    background-size: cover;
    border: 1px solid black;
    border-bottom: none;

}

.card .imgBx::before{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 49%;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 49%;
    box-shadow: -4px 4px 0 #fff;
}

/* .card .imgBx::after {
    content: '';
    position: absolute;
    bottom: 70px;
    left: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #fff;
} */

.card .content{
    position: relative;
    width: 100%;
    height: 228px;
    background: #ffffff;
    border: 1px solid black;
    border-top: none;
    /* border-radius: 15px; */
    border-top-left-radius: 0;
    padding: 20px 18px;

}
.card .content .Container{
    display: flex;
    color: #af5959;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
}
.card .content .price{
    position: absolute;
    top: -44px;
    left: -1px;
    height: 55px;
    width: 50%;
    background: #ffffff;
    border-left: 1px solid black;
    /* border-top: 10px solid #fff; */
    /* border-right: 10px solid #fff; */
    border-top-right-radius: 8px;
}

.card .content .price::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -25px;
    width: 25px;
    height: 25px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #ffffff;
}

.card .content .price p {
    display: block;
    border-radius: 7px;
    text-decoration: none;
    color: #ffffff;
    padding: 0px 10px;
    color: #862121;
    font-weight: bolder;
    text-transform: uppercase;
}
.AlingItensHeader{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    padding: 8px 20px;
    text-decoration: none;
}

p{
    font-size: 13px;
}
.Stacks{
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #333;
    color: #fff !important;
    padding: 4px 10px;
    border-radius: 4px;
    transition: 0.5s;
}
.ContainerStacks{
    display: flex;
    flex-wrap: wrap; 
    gap: 10px;

}

</style>
