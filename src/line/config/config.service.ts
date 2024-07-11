import { messagingApi } from '@line/bot-sdk';
import { Injectable } from '@nestjs/common';

import type { ClientConfig } from '@line/bot-sdk';

@Injectable()
export class ConfigService {
  createLinebotClient() {
    const clientConfig: ClientConfig = {
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
      channelSecret: process.env.CHANNEL_SECRET,
    };
    return new messagingApi.MessagingApiClient(clientConfig);
  }
}
