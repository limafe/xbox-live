import { ApiConnectionInterface } from "./abstract/apiConnection-abstract";
import { apiLink } from "./apiLink";

export class ApiConnection implements ApiConnectionInterface {
  private readonly apiLink: string;

  constructor(link?: string) {
    this.apiLink = link ? link : apiLink;
  }

  public getLink(): string {
    return this.apiLink;
  }
}
