import { ref } from 'vue';
import type { FormSubmitPayload } from '../utils/types';
import { mockSendForm } from '../api/forms';
import { useFormsStore } from '../store/forms';

export function useFormSubmit() {
	const formsStore = useFormsStore();
	const loading = ref(false);

	async function submit({ action, values, resetForm }: FormSubmitPayload) {
		loading.value = true;

		formsStore.addForm(await mockSendForm(action, values));

		loading.value = false;
		resetForm();
	}

	return {
		loading,
		submit,
	};
}
