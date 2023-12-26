<template>
    <div class="grid max-w-sm rounded-md shadow-md p-5">
        <p class="mx-auto"> Component 2 </p>
        <div class="flex justify-between">
            <span>Count:</span>
            <h1> {{ $counterStore.count }}</h1>
        </div>

        <div class="flex justify-between">
            <button
                class=" bg-green-400 text-white px-3 py-2 "
                @click="counterStore.set({ ...$counterStore, count: $counterStore.count + 1 })"
                >
                +
            </button>
            <button
                class=" bg-orange-400 text-white px-3 py-2 "
                @click="counterStore.set({ ...$counterStore, count: $counterStore.count - 1 })"
                >
                -
            </button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import { useStore } from '@nanostores/vue';
    import {counterStore} from '../store.ts';

    const $counterStore = useStore(counterStore);
    
</script>