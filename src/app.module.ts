import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';
import { UsersModule } from './users/users.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { FeesModule } from './fees/fees.module';

@Module({
  imports: [CategoriesModule, OrderItemsModule, OrdersModule, ProductsModule, StoresModule, UsersModule, VouchersModule, FeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
