import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './core/filters/all-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(
		new AllExceptionFilter(), // глобальный фильтр ошибок
	);
	await app.listen(80, '0.0.0.0');
}
bootstrap();
