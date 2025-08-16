<template>

    <div class="list">
        <div
            class="application"
            :class="{
                'application--success': 'id' in application,
                'application--error': 'error' in application
            }"
            v-for="application in formStore.sentForms"
            :key="application.timestamp.getTime()"
        >
            <div>
                {{ application.id }}
                {{ application.error?.message }}
            </div>
            <div>
                {{ application.timestamp.toLocaleString() }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFormsStore } from '../store/forms';

const formStore = useFormsStore()
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.application {
    display: flex;
    justify-content: space-between;
    gap: 4px;
}

.application--error {
    color: salmon;
}

.application--success {
    color: seagreen;
}
</style>