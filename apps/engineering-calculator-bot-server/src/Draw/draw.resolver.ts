import * as graphql from "@nestjs/graphql";
import { ClearInput } from "../draw/ClearInput";
import { ClearOutput } from "../draw/ClearOutput";
import { DrawService } from "./draw.service";

export class DrawResolver {
  constructor(protected readonly service: DrawService) {}

  @graphql.Mutation(() => ClearOutput)
  async Clear(
    @graphql.Args()
    args: ClearInput
  ): Promise<ClearOutput> {
    return this.service.Clear(args);
  }
}
