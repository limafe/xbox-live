import { HttpRequestAdapterInterface } from "../../../helpers/adapters/abstract/httpRequest-adapter-interface";

export class HttpRequestAdapterMock implements HttpRequestAdapterInterface {
  public async post(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    return Promise.resolve({ message: "created" });
  }

  public async patch(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    return Promise.resolve({ message: "patched" });
  }

  public async get(url: string, authorizationHeader = ""): Promise<any> {
    return Promise.resolve({ message: "got" });
  }

  public async delete(url: string, authorizationHeader = ""): Promise<any> {
    return Promise.resolve({ message: "deleted" });
  }
}
