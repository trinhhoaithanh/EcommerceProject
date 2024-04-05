import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  prisma = new PrismaClient();
  async checkout(order_id: number, order: Order, user_id: number) {
    const existingOrder = await this.prisma.orders.findFirst({
      where: {
        order_id: Number(order_id),
      },
    });

    if (!existingOrder) {
      throw new NotFoundException('Order not found');
    }

    const discount = await this.prisma.vouchers.findFirst({
      where: {
        user_id: Number(user_id),
        discount_percentage: {
          gt: 0,
        },
      },
    });

    if (discount) {
      existingOrder.total_amount -= existingOrder.total_amount * (discount.discount_percentage / 100);
      
    }

    // Save the updated order
    const updatedOrder = await this.prisma.orders.update({
      where: {
        order_id: Number(order_id),
      },

      data: {
        total_amount: existingOrder.total_amount,
      },
    });
    return updatedOrder;
  }
}
