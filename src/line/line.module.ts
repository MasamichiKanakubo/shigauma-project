import { Module } from "@nestjs/common";
import { LineController } from "./line.controller";
import { LineService } from "./line.service";
import { ConfigModule } from "./config/config.module";

@Module({
    imports: [ConfigModule],
    controllers: [LineController],
    providers: [LineService],
})
export class LineModule {}