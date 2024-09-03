<template>
	<div class="card">
        <div class="imgBx"></div>
        <div class="content">
            <span class="price">
                <a href="#">R$1,000,000</a>
            </span>
            <ul>
                <li>Somewhere</li>
                <li>1200sqm</li>
                <li>house</li>
            </ul>
        </div>
    </div>
</template>

<script>

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
    width: 320px;
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
    background: url('@/img/kitty.gif');
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
    background: #232949;
    border-radius: 15px;
    border-top-left-radius: 0;
    padding: 0 35px;

}
.card .content ul{
    color: #fff;
}
.card .content .price{
    position: absolute;
    top: -80px;
    left: 0;
    height: 80px;
    width: 50%;
    background: #232949;
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
    box-shadow: -10px 10px 0 #232949;
}

.card .content .price a {
    position: relative;
    background: #fff;
    padding: 10px 20px;
    margin: 15px 15px;
    display: block;
    border-radius: 7px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
}


</style>
