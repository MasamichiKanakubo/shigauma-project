import { WebhookRequestBody } from '@line/bot-sdk';
import { Body, Controller, Post } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('line')
export class LineController {
  constructor(private lineService: LineService) {}

  @Post()
  async handler(@Body() req: WebhookRequestBody) {
    return this.lineService.handleWebhook(req);
  }
}
