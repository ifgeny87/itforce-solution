import { Body, Controller, Post } from '@nestjs/common';
import { InvoiceCallbackDto } from './dto/invoice.callback.dto';

const axios = require('axios');

@Controller()
export class InvoicesController
{
	/**
	 * Роут создания запроса на платеж
	 */
	@Post('invoices/create')
	async invoiceTest() {
		await axios
			.post('https://demo-paygate.steaminventoryhelper.com/invoice', {})
			.then(res => {
				console.log('Response:', JSON.stringify({
					status: res.status,
					data: res.data,
				}));
			})
			.catch(error => {
				console.error(error);
			});
	}

	/**
	 * Роут для обработки результата платежа
	 * @param body
	 */
	@Post('callback')
	async invoiceCallback(@Body() body: InvoiceCallbackDto) {
		console.log('Incoming callback:', JSON.stringify(body));
	}
}
