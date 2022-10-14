export type InvoiceCallbackStatus = 'paid' | 'refused';

export class InvoiceCallbackDto {
	id: string
	status: InvoiceCallbackStatus
	amount: number
}
