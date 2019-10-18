<template>
    <div>
        <figure class="me" id="me"><img src="" alt="" class="meImg"></figure>
        <ul id="Menu" class="menu">
            <li v-show="!menu">Inicio</li>
            <li v-show="menu">Portafolio</li>
            <li>Contacto</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['menu'])
        },
    }
</script>

<style lang="scss" scoped>

</style>