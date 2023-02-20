import { ApiConnectionInterface } from "../../../infra/api/connection/abstract/apiConnection-abstract";
import { makeFakeLink } from "../fakers/link-fake";

export class ApiConnectionMock implements ApiConnectionInterface {
  private readonly apiLink: string;

  constructor(link?: string) {
    this.apiLink = link ? link : makeFakeLink();
  }
  public getLink(): string {
    return this.apiLink;
  }
}
