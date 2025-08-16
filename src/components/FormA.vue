<template>
    <CommonForm
        action="/form/a"
        class="form"
        :schema="schema"
        @submit="submit"
        v-slot="{ disabled }"
    >
        <h2>Форма А</h2>
        <CommonField
            name="name"
            label="Имя"
        />

        <CommonField
            name="email"
            label="Email"
            type="email"
        />

        <CommonField
            name="inn"
            label="ИНН"
            type="number"
        />

        <CommonButton
            class="button-gutter"
            :disabled="disabled || loading"
            :loading="loading"
        >
            Отправить
        </CommonButton>
    </CommonForm>
</template>

<script setup lang="ts">
import CommonField from './shared/CommonField.vue';
import CommonButton from './shared/CommonButton.vue';
import CommonForm from './shared/CommonForm.vue';
import type { FormSubmitPayload } from '../utils/types';
import { useFormSubmit } from '../composables/useFormSubmit';


const schema = {
    name: {
        required: true
    },
    email: {
        required: true,
        email: true
    },
    inn: {
        required: true,
        length: 12
    },
}

const { loading, submit } = useFormSubmit()
</script>

<style scoped>
.button-gutter {
    margin-top: 24px;
}
</style>