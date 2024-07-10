import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { copyFile } from "fs";

@Module({
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule {}