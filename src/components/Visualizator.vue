<template>
    <div class="grid max-w-sm rounded-md shadow-md p-5">
        <p class="mx-auto"> Count view </p>
        <div class="flex justify-between">
            <span>Count:</span>
            <h1> {{ $counterStore.count }}</h1>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import { useStore } from '@nanostores/vue';
    import {counterStore} from '../store.ts';

    const $counterStore = useStore(counterStore);
    
</script>