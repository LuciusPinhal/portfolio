<template>
<div class="card">
    <div class="imgBx" :style="{ backgroundImage: `url(${project.image})` }"></div>
    <div class="content">
        <span class="price">
            <a href="https://github.com/LuciusPinhal/PentagroChallenge?tab=readme-ov-file" class="AlingItensHeader" :title="project.title">
                <i class="fa-brands fa-github fa-2x"></i>
            </a>
        </span>
        <div class="Container">
            <p style="font-size: 20px;"><b>{{ project.name }}</b></p>
            <p>{{ project.description }}</p>

            <div class="ContainerStacks">
                <div v-for="stack in project.stacks" :key="stack" class="Stacks">
                    {{ stack }}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.card {
    position: relative;
    width: 100%; /* O card ocupa toda a largura da coluna do grid */
    height: 100%; /* Faz o card ocupar toda a altura disponível */
    min-height: 320px; /* Define uma altura mínima */
    max-height: 488px; /* Define uma altura máxima */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
}

.card .imgBx {
    position: relative;
    width: 100%;
    height: 260px;
    background: #f00;
    /* border-radius: 15px; */
    background-size: cover;
    border: 1px solid black;
    border-radius: 8px 8px 0px 8px;
    border-bottom: none;

}

.card .imgBx::before {
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

.card .content {
    position: relative;
    width: 100%;
    height: 230px;
    background: #ffffff;
    border: 1px solid black;
    border-radius: 8px 0px 8px 8px;
    border-top: none;
    /* border-radius: 15px; */
    border-top-left-radius: 0;
    padding: 20px 18px;

}

.card .content .Container {
    display: flex;
    color: #000;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card .content .price {
    position: absolute;
    top: -44px;
    left: -1.1px;
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
    bottom: 10px;
    right: -34px;
    width: 35px;
    height: 35px;
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

.AlingItensHeader {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 20px;
    text-decoration: none;
    color: #000;
}

p {
    font-size: 13px;
}

.Stacks {
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #333;
    color: #fff !important;
    padding: 4px 8px;
    border-radius: 4px;
    transition: 0.5s;
    cursor: pointer;
}

.ContainerStacks {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

}

.Stacks:hover {
    background: #BC3432;
}

.AlingItensHeader:hover {
    color: #BC3432;

}
</style>
