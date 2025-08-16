export type FormResponse = {
	id?: string;
	error?: any;
	timestamp: Date;
};

export type FormSubmitPayload = { action: string; values: any; resetForm: any };
