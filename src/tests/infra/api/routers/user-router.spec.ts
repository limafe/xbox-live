import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { UserRouterInterface } from "../../../../infra/api/routers/abstract/user-router-interface";
import { UserRouter } from "../../../../infra/api/routers/user-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";
import { makeFakeError } from "../../../mocks/fakers/error-fake";
import { makeFakeLink } from "../../../mocks/fakers/link-fake";
import { makeFakeToken } from "../../../mocks/fakers/token-fake";
import { makeFakeUser } from "../../../mocks/fakers/user-fake";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  userRouter: UserRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const userRouter = new UserRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, userRouter };
}

describe("UserRouter", () => {
  test("Create method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const user = makeFakeUser();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.create(user);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const user = makeFakeUser();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    userRouter.create(user);
    expect(postRequestSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const user = makeFakeUser();
    const apiLink = makeFakeLink();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    userRouter.create(user);
    expect(postRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/create-user",
      user
    );
  });

  test("Create method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const user = makeFakeUser();
    jest
      .spyOn(httpRequestAdapter, "post")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.create(user);
    await expect(promise).rejects.toThrow();
  });

  test("GetAll method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getAll(token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    userRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    userRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/get-all-users",
      token
    );
  });

  test("GetAll method should throw if httpRequestAdapter get method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.getAll(token);
    await expect(promise).rejects.toThrow();
  });

  test("GetById method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getById(userId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter get method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    userRouter.getById(userId, token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter get method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    userRouter.getById(userId, token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/get-user-by-id/" + userId,
      token
    );
  });

  test("GetById method should throw if httpRequestAdapter get method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.getById(userId, token);
    await expect(promise).rejects.toThrow();
  });

  test("GetByEmail method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userEmail = makeFakeUser().email;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getByEmail(userEmail, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetByEmail method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userEmail = makeFakeUser().email;
    const token = makeFakeToken();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    userRouter.getByEmail(userEmail, token);
    expect(postRequestSpy).toHaveBeenCalled();
  });

  test("GetByEmail method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userEmail = makeFakeUser().email;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    userRouter.getByEmail(userEmail, token);
    expect(postRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/get-user-by-email",
      {
        email: userEmail,
      },
      token
    );
  });

  test("GetByEmail method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userEmail = makeFakeUser().email;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "post")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.getByEmail(userEmail, token);
    await expect(promise).rejects.toThrow();
  });

  test("Delete method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.delete(userId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    userRouter.delete(userId, token);
    expect(deleteRequestSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    userRouter.delete(userId, token);
    expect(deleteRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/delete-user/" + userId,
      token
    );
  });

  test("Delete method should throw if httpRequestAdapter delete method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "delete")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.delete(userId, token);
    await expect(promise).rejects.toThrow();
  });

  test("Update method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userData = makeFakeUser();
    const userId = userData.id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.update(userId, userData, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userData = makeFakeUser();
    const userId = userData.id;
    const token = makeFakeToken();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    userRouter.update(userId, userData, token);
    expect(patchRequestSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method with correct values", () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userData = makeFakeUser();
    const userId = userData.id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    userRouter.update(userId, userData, token);
    expect(patchRequestSpy).toHaveBeenCalledWith(
      apiLink + "/user/update-user/" + userId,
      userData,
      token
    );
  });

  test("Update method should throw if httpRequestAdapter patch method throws", async () => {
    const { httpRequestAdapter, userRouter } = makeSut();
    const userData = makeFakeUser();
    const userId = userData.id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "patch")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = userRouter.update(userId, userData, token);
    await expect(promise).rejects.toThrow();
  });
});
