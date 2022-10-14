import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { InvoicesController } from './invoices/invoices.controller';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [ItemsModule, InvoicesModule],
  controllers: [InvoicesController],
})
export class AppModule {}
