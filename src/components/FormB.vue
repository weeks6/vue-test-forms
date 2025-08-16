<template>
    <CommonForm
        action="/form/b"
        class="form"
        :schema="schema"
        @submit="submit"
        v-slot="{ disabled }"
    >
        <h2>Форма Б</h2>
        <CommonField
            name="name"
            label="Имя"
        />

        <CommonField
            name="last_name"
            label="Фамилия"
        />

        <CommonField
            name="patronym"
            label="Отчество"
        />

        <CommonField
            name="login"
            label="Логин"
        />

        <CommonField
            name="email"
            label="Email"
            type="email"
        />

        <CommonField
            name="phone"
            label="Номер телефона"
            placeholder="+7 (xxx) xxx-xx-xx"
            mask="+7 (###) ###-##-##"
        />

        <CommonButton
            class="
            button-gutter"
            :disabled="disabled || loading"
            :loading="loading"
        > Отправить </CommonButton>
    </CommonForm>
</template>

<script setup lang="ts">
import CommonField from './shared/CommonField.vue';
import CommonButton from './shared/CommonButton.vue';
import CommonForm from './shared/CommonForm.vue';
import { useFormSubmit } from '../composables/useFormSubmit';

const schema = {
    name: {
        required: true
    },
    last_name: {
        required: true
    },
    login: {
        required: true,
    },
    email: {
        required: true,
        email: true
    },
    phone: {
        required: true,
    },
}

const { loading, submit } = useFormSubmit()

</script>

<style scoped>
.button-gutter {
    margin-top: 24px;
}
</style>