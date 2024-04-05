import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Controller('api/orders/')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Put(':user_id/:order_id/checkout')
  async checkout(@Param('order_id') order_id: number, @Body() order: Order, @Param('user_id') user_id: number) {
    return this.ordersService.checkout(Number(order_id), order, user_id);

  }
  
}
