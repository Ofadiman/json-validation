import { Module } from "@nestjs/common";
import { ControlSampleController } from './control-sample/control-sample.controller'

@Module({
  imports: [],
  controllers: [ControlSampleController],
  providers: [],
})
export class AppModule {}
