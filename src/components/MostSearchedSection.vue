---
import ItemsMostSearched from "./ItemsMostSearched.astro";
const {height} = Astro.props;

const cls = [ height]
---
<template>
    <div :class="cls.join(' ')" >
        <div class="flex justify-center items-start h-[5vh]">
            <h3 class=" text-follow text-xl"> Destinos mas buscados </h3>
        </div>
        <div class=" grid h-[75vh]">
            <div class="grid justify-items-center content-start gap-y-1 overflow-y-auto">
                <ItemsMostSearched>
                    <span> Centro Internacional</span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Medicina Nuclear</span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Admisiones </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Caja Torre D </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Odontologia </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Chequeo Medico Especializado </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Punto Donacion Sangre </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Mamografia </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Starbucks </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Cajas salas de Espera Torre 1 </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Cajas salas de Espera Torre 1 </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Cajas salas de Espera Torre 1 </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Cajas salas de Espera Torre 1 </span>
                </ItemsMostSearched>
                <ItemsMostSearched>
                    <span> Cajas salas de Espera Torre 1 </span>
                </ItemsMostSearched>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ItemsMostSearched from "./ItemsMostSearched.vue";

</script>
