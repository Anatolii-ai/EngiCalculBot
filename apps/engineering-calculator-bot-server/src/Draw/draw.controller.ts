import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DrawService } from "./draw.service";
import { ClearInput } from "../draw/ClearInput";
import { ClearOutput } from "../draw/ClearOutput";

@swagger.ApiTags("draws")
@common.Controller("draws")
export class DrawController {
  constructor(protected readonly service: DrawService) {}

  @common.Get("/clear")
  @swagger.ApiOkResponse({
    type: ClearOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Clear(
    @common.Body()
    body: ClearInput
  ): Promise<ClearOutput> {
        return this.service.Clear(body);
      }
}
