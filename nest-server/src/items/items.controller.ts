import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { Currency } from '../core/types/currency';
import { validateGetItemsParams } from './items.validation';
import * as fs from 'fs';

@Controller('v1/items')
export class ItemsController
{
	/**
	 * Получение списка объектов
	 * @param appId
	 * @param currency
	 * @param tradable
	 */
	@Get()
	async getItems(
		@Param('app_id') appId: number,
		@Param('currency') currency: Currency,
		@Param('tradable') tradable: boolean,
	) {
		// проверка входных аргументов
		const check = validateGetItemsParams({ appId, currency, tradable, x: 22 });
		if (check.error) {
			throw new BadRequestException(check.error, 'Ошибка при валидации аргументов');
		}
		// установки по умолчанию
		if (!appId) {
			appId = 730;
		}
		if (!currency) {
			currency = 'EUR';
		}
		if (!tradable) {
			tradable = false;
		}
		// читаем список из базы
		const items = JSON.parse(fs.readFileSync('items.json').toString());
		return items;
	}
}
