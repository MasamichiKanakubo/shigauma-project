import { Injectable } from "@nestjs/common"; 
import { WebhookEvent, WebhookRequestBody } from "@line/bot-sdk";
import { ConfigService as NestConfigService } from './config/config.service';

@Injectable()
export class LineService {
    constructor(private configService: NestConfigService) { }
    
    async handleWebhook(req: WebhookRequestBody): Promise<void> {
        const client = this.configService.createLinebotClient();

        const events: WebhookEvent[] = req.events;
        events.forEach((event) => { 
            if (event.type === 'message') { 
                const replyMessage =
                    event.message.type === 'text'
                        ? event.message.text
                        : 'No Text';
                client.replyMessage({
                    replyToken: event.replyToken,
                    messages: [
                        { type: 'text', text: replyMessage }
                    ]
                })
            }
        });
            
    }
}