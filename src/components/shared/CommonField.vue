<template>
    <label class="label">
        <span
            v-if="label"
            class="label-text"
        >
            {{ label }}
        </span>
        <Field
            v-if="mask"
            :name="name"
            :label="label"
        >
            <template #default="{ field }">
                <input
                    v-mask="mask"
                    class="field"
                    :value="field.value"
                    :type="type"
                    :placeholder="placeholder"
                    @input="e => field.onInput((e.target as HTMLInputElement)?.value)"
                />
            </template>
        </Field>
        <Field
            v-else
            :name="name"
            :label="label"
            :type="type"
            :placeholder="placeholder"
            class="field"
        />
        <ErrorMessage
            :name="name"
            class="error"
        />
    </label>

</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';

interface Props {
    label?: string
    name: string
    type?: HTMLInputElement['type']
    placeholder?: string
    mask?: string
}

defineProps<Props>()

</script>

<style scoped>
.label {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.label-text {
    font-size: 16px;
    font-weight: 500;
}

.field {
    font-size: 16px;
    padding: 12px 8px;
    border-radius: 8px;
    border: 1px solid cornflowerblue;
    outline: none;

    transition: border-color 250ms ease-in-out;
}

.field:focus-visible {
    border: 1px solid blue;
}

.error {
    font-size: 14px;
    font-weight: 500;
    color: indianred;

}
</style>