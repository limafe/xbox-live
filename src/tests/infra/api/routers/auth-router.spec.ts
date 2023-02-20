import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { AuthRouterInterface } from "../../../../infra/api/routers/abstract/auth-router-interface";
import { AuthRouter } from "../../../../infra/api/routers/auth-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";
import { makeFakeError } from "../../../mocks/fakers/error-fake";
import { makeFakeLink } from "../../../mocks/fakers/link-fake";
import { makeFakeLoginData } from "../../../mocks/fakers/loginData-fake";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  authRouter: AuthRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const authRouter = new AuthRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, authRouter };
}

describe("AuthRouter", () => {
  test("Login method should call apiConnection getLink method", () => {
    const { authRouter, apiConnection } = makeSut();
    const loginData = makeFakeLoginData();
    const getLinkSpy = jest.spyOn(apiConnection, "getLink");
    authRouter.login(loginData);
    expect(getLinkSpy).toHaveBeenCalled();
  });

  test("Login method should call httpRequestAdapter", () => {
    const { authRouter, httpRequestAdapter } = makeSut();
    const loginData = makeFakeLoginData();
    const postSpy = jest.spyOn(httpRequestAdapter, "post");
    authRouter.login(loginData);
    expect(postSpy).toHaveBeenCalled();
  });

  test("Login method should call httpRequestAdapter with correct params", () => {
    const { authRouter, httpRequestAdapter } = makeSut();
    const loginData = makeFakeLoginData();
    const apiLink = makeFakeLink();
    const postSpy = jest.spyOn(httpRequestAdapter, "post");
    authRouter.login(loginData);
    expect(postSpy).toHaveBeenCalledWith(apiLink + "/auth/login", loginData);
  });

  test("Login method should throw if httpRequestAdapter throws", async () => {
    const { authRouter, httpRequestAdapter } = makeSut();
    const loginData = makeFakeLoginData();
    jest
      .spyOn(httpRequestAdapter, "post")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = authRouter.login(loginData);
    await expect(promise).rejects.toThrow();
  });
});
