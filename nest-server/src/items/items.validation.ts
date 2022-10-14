import * as Joi from 'joi';
import { currencyValues } from '../core/types/currency';

let getItemsSchema: Joi.ObjectSchema;

export function validateGetItemsParams(obj: any): Joi.ValidationResult {
	if (!getItemsSchema) {
		getItemsSchema = Joi.object({
			appId: Joi.number().integer().positive(),
			currency: Joi.string().valid(...currencyValues),
			tradable: Joi.bool(),
		});
	}
	return getItemsSchema.validate(obj);
}
