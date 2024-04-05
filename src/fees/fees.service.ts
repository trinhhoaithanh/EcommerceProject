import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { responseArray } from 'util/response-template';

@Injectable()
export class FeesService {
    prisma = new PrismaClient();
     // get all fees
  async getAllFee() {
    try {
      const fees = await this.prisma.fees.findMany();
      return responseArray(
        200,
        'Get all fees successfully!',
        fees.length,
        fees,
      );
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
