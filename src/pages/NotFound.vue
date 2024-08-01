<script>
export default{
    beforeMount(){
        document.title = "Non c`è nulla qui"
    }
}
</script>

<template>
<div>
    <h1>Pagina non trovata!</h1>
</div>
</template>

<style scoped lang="scss">
    @use '../assets/scss/partials/variables' as *;

    div{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: $bg-dark;

        h1{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>