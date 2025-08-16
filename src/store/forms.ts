import { defineStore } from 'pinia';
import type { FormResponse } from '../utils/types';

export const useFormsStore = defineStore('forms', {
	state: () =>
		({
			sentForms: [],
		} as { sentForms: FormResponse[] }),
	actions: {
		clear() {
			this.sentForms = [];
		},
		addForm(form: FormResponse) {
			this.sentForms.push(form);
		},
	},
});
