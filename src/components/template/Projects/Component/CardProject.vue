<template>
	<div class="card">
        <div class="imgBx"></div>
        <div class="content">
            <span class="price">
                <a href="#">
                    Challenger Pentagro
                </a>
            </span>
            <div>
                <p>O projeto envolve o desenvolvimento de uma tela de login e gestão de usuários em Vue.js, com integração a uma API que permite o acesso dos usuários, além de salvar e recuperar dados.</p>
                <i class="fa-brands fa-github fa-2x"></i>
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
    width: 314px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card .imgBx{
    position: relative;
    width: 100%;
    height: 240px;
    background: #f00;
    border-radius: 15px;
    background: url('@/img/teste.png');
    background-size: cover;

}

.card .imgBx::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #fff;
}

.card .imgBx::after {
    content: '';
    position: absolute;
    bottom: 70px;
    left: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #fff;
}

.card .content{
    position: relative;
    width: 100%;
    height: 150px;
    background: #101322;
    border-radius: 15px;
    border-top-left-radius: 0;
    padding: 8px 18px;

}
.card .content div{
    display: flex;
    color: #fff;
    align-items: center;
    gap: 20px;
}
.card .content .price{
    position: absolute;
    top: -80px;
    left: 0;
    height: 80px;
    width: 50%;
    background: #101322;
    border-top: 10px solid #fff;
    border-right: 10px solid #fff;
    border-top-right-radius: 25px;
}

.card .content .price::before{
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px -10px 0 #fff;

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
    box-shadow: -10px 10px 0 #101322;
}

.card .content .price a {
    margin: 15px 15px;
    display: block;
    border-radius: 7px;
    text-decoration: none;
    color: #333;
    padding: 0px 10px;
    color: #fff;

    font-weight: bolder;
    text-transform: uppercase;
}
p{
    font-size: 13px;
}

</style>
