import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Neszt!';
  }

  getHi(): string {
    return 'hi nest';
  }
}
