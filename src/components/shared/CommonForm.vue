<template>
    <Form
        ref="formRef"
        class="form"
        :action="action"
        :validation-schema="schema"
        v-slot="{ meta }"
        @submit="(values, { resetForm }) => emit('submit', { action, values, resetForm })"
    >
        <slot :disabled="!meta.valid" />
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import type { FormSubmitPayload } from '../../utils/types';

defineProps<{
    action: string,
    schema: Record<string, any>
}>()

const emit = defineEmits<{
    (e: 'submit', { action, values, resetForm }: FormSubmitPayload): void
}>()

</script>

<style scoped>
.form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>