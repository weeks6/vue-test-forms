<template>
    <button
        class="button"
        :class="{
            disabled
        }"
    >
        <template v-if="loading">
            Загрузка...
        </template>
        <slot v-else />
    </button>
</template>

<script setup lang="ts">

defineProps<{ disabled?: boolean, loading?: boolean }>()

</script>

<style scoped>
.button {
    appearance: none;
    background-color: cornflowerblue;
    color: white;
    border: none;
    cursor: pointer;
    padding: 16px 8px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;

    transition: background-color 250ms ease-in-out;
}

.button:hover {
    background-color: dodgerblue;
}

.disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>