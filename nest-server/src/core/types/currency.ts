export const currencyValues = [
	'AUD',
	'BRL',
	'CAD',
	'CHF',
	'CNY',
	'CZK',
	'DKK',
	'EUR',
	'GBP',
	'HRK',
	'NOK',
	'PLN',
	'RUB',
	'SEK',
	'TRY',
	'USD',
] as const;

export type Currency = typeof currencyValues[number];

