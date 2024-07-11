import { Injectable } from '@nestjs/common';
import {
  WebhookEvent,
  WebhookRequestBody,
} from '@line/bot-sdk';
import { ConfigService as NestConfigService } from './config/config.service';

@Injectable()
export class LineService {
  constructor(private configService: NestConfigService) {}

  async handleWebhook(req: WebhookRequestBody): Promise<void> {
    const client = this.configService.createLinebotClient();

    const events: WebhookEvent[] = req.events;
    events.forEach((event) => {
      if (event.type === 'message') {
        if (
          event.message.type === 'text' &&
          event.message.text === '店舗を検索する'
        ) {
          client.replyMessage({
            replyToken: event.replyToken,
            messages: [
              {
                type: 'text',
                text: '店舗のエリアを指定してください',
                quickReply: {
                  items: [
                    {
                      type: 'action',
                      action: {
                        type: 'message',
                        label: '草津エリア',
                        text: '草津エリア',
                      },
                    },
                    {
                      type: 'action',
                      action: {
                        type: 'message',
                        label: '南草津エリア',
                        text: '南草津エリア',
                      },
                    },
                    {
                      type: 'action',
                      action: {
                        type: 'message',
                        label: '栗東エリア',
                        text: '栗東エリア',
                      },
                    },
                    {
                      type: 'action',
                      action: {
                        type: 'message',
                        label: '瀬田エリア',
                        text: '瀬田エリア',
                      },
                    },
                  ],
                },
              },
            ],
          });
        }
      }
    });
  }
}
