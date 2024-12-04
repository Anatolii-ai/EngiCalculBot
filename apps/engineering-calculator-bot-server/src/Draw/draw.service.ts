import { Injectable } from "@nestjs/common";
import { ClearInput } from "../draw/ClearInput";
import { ClearOutput } from "../draw/ClearOutput";

@Injectable()
export class DrawService {
  constructor() {}
  async Clear(args: ClearInput): Promise<ClearOutput> {
    throw new Error("Not implemented");
  }
}
