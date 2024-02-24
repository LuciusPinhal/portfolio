<template>
    <div>
        <div class="main-container">
            <div class="form-header">
                <h1>Table</h1>
                <p>{{ $t('Detalhamento-de-usuários-referente-a-planilha') }}</p>
            </div>
         
        </div>
    </div>
</template>

<script>

export default {
    name: 'ListUserTable',
    components: {
        
    }
}
</script>

<style scoped>
.form-header {
    margin-bottom: 1.5rem;

}

.form-header>h1 {
    text-align: left;
}
</style>