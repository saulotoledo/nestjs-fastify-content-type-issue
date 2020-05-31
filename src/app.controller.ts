import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { SampleInterceptor } from './sample.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(SampleInterceptor)
  getHelloWithInterceptor(): Record<string, string> {
    return this.appService.getHello();
  }

  @Get('no-interceptor')
  getHelloNoInterceptor(): Record<string, string> {
    return this.appService.getHello();
  }
}
