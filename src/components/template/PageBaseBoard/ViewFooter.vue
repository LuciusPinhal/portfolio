<template>
<div class="page-wrapper">
    <footer class="footer">
        <div class="footer-content">
            <div class="content">
                <p class="Tilte">Contatos</p>
                <div class="LinkItens">
                    <div class="sci">
                        <a href="https://www.google.com/maps/place/S%C3%A3o+Carlos/data=!4m2!3m1!1s0x94b87726bb9dd181:0xd9d7d71505999bc?sa=X&ved=1t:242&ictx=111"><i class="fa-solid fa-location-dot Info">
                                <div>
                                    <p>LOCALIZAÇÂO</p>
                                    <p>São Paulo, Brasil.</p>
                                </div>
                            </i></a>
                        <a href="mailto:pinhal.lucius@gmail.com"><i class="fa-regular fa-envelope Info">
                                <div>
                                    <p>E-MAIL</p>
                                    <p>@pinhal.lucius</p>
                                </div>
                            </i></a>
                    </div>
                </div>
            </div>
            <div class="content">
                <p class="Tilte">Redes Sociais</p>
                <div class="LinkItens">
                    <div class="sci">
                        <a href="https://www.linkedin.com/in/luciuspinhal/"><i class="fa-brands fa-linkedin-in Info">
                                <div>
                                    <p>LINKEDIN</p>
                                    <p>@/in/luciuspinhal/</p>
                                </div>
                            </i></a>
                        <a href="https://github.com/LuciusPinhal"><i class="fa-brands fa-github Info">
                                <div>
                                    <p>GITHUB</p>
                                    <p>@LuciusPinhal</p>
                                </div>
                            </i></a>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 2105px) {

    .page-wrapper {
        margin-left: -10vh;

    }
}

.content {
    padding: 20px;
    /* Adiciona espaçamento interno ao conteúdo */
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.Tilte {
    font-weight: bolder;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-underline-offset: 15px;
    text-align: left;
    color: #000000;
    margin-bottom: 35px;
}

.LinkItens {
    display: flex;
    flex-direction: row;
}

.sci {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

i {
    display: flex;
    flex-direction: row;
    align-items: top;
}

i div {
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
}

a {
    text-decoration: none;
}

.Info {
    font-size: 30px;
    gap: 15px;
    color: #000;

}

.Info p {
    font-size: 16px;
    gap: 10px;
    color: #000000;
    font-weight: 500;
}

.page-wrapper {
    position: relative;
    width: 100%;
    margin-left: 0;
    overflow: hidden;
    margin-top: 100px;
}

.footer {
    background-color: #A43913;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    width: 100%;
    position: relative;
    /* Alterado para relative */
    bottom: 0;
    left: 0;
}
</style>
