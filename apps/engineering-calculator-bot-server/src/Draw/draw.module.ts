import { Module } from "@nestjs/common";
import { DrawService } from "./draw.service";
import { DrawController } from "./draw.controller";
import { DrawResolver } from "./draw.resolver";

@Module({
  controllers: [DrawController],
  providers: [DrawService, DrawResolver],
  exports: [DrawService],
})
export class DrawModule {}
