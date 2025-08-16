import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { vMaska } from 'maska/vue';

import { configure, defineRule } from 'vee-validate';
import { email, required, length } from '@vee-validate/rules';
import { createPinia } from 'pinia';

configure({
	validateOnInput: true,
	generateMessage: (context) => {
		const messages: Record<string, string> = {
			required: `${context.field} не может быть пустым`,
			email: `Не корректный Email`,
			length: `${context.field} должен быть длинной ${
				(context.rule?.params as any[])[0]
			} символов`,
		};

		return messages[context.rule?.name!] || `${context.field} is invalid`;
	},
});

defineRule('required', required);
defineRule('email', email);
defineRule('length', length);

const pinia = createPinia();

createApp(App).use(pinia).directive('mask', vMaska).mount('#app');
