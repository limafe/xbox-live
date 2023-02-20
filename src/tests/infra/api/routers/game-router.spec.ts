import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { GameRouterInterface } from "../../../../infra/api/routers/abstract/game-router-interface";
import { GameRouter } from "../../../../infra/api/routers/game-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";
import { makeFakeError } from "../../../mocks/fakers/error-fake";
import { makeFakeGame } from "../../../mocks/fakers/game-fake";
import { makeFakeLink } from "../../../mocks/fakers/link-fake";
import { makeFakeToken } from "../../../mocks/fakers/token-fake";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  gameRouter: GameRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const gameRouter = new GameRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, gameRouter };
}

describe("GameRouter", () => {
  test("Create method should call apiConnection getLink method", () => {
    const { apiConnection, gameRouter } = makeSut();
    const game = makeFakeGame();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    gameRouter.create(game, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const game = makeFakeGame();
    const token = makeFakeToken();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    gameRouter.create(game, token);
    expect(postRequestSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const game = makeFakeGame();
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    gameRouter.create(game, token);
    expect(postRequestSpy).toHaveBeenCalledWith(
      apiLink + "/game/create-game",
      game,
      token
    );
  });

  test("Create method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const game = makeFakeGame();
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "post")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = gameRouter.create(game, token);
    await expect(promise).rejects.toThrow();
  });

  test("GetAll method should call apiConnection getLink method", () => {
    const { apiConnection, gameRouter } = makeSut();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    gameRouter.getAll(token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    gameRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method with correct values", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    gameRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/game/get-all-games",
      token
    );
  });

  test("GetAll method should throw if httpRequestAdapter get method throws", async () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = gameRouter.getAll(token);
    await expect(promise).rejects.toThrow();
  });

  test("GetById method should call apiConnection getLink method", () => {
    const { apiConnection, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    gameRouter.getById(gameId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    gameRouter.getById(gameId, token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    gameRouter.getById(gameId, token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/game/get-game/" + gameId,
      token
    );
  });

  test("GetById method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = gameRouter.getById(gameId, token);
    await expect(promise).rejects.toThrow();
  });

  test("Delete method should call apiConnection getLink method", () => {
    const { apiConnection, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    gameRouter.delete(gameId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    gameRouter.delete(gameId, token);
    expect(deleteRequestSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method with correct values", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    gameRouter.delete(gameId, token);
    expect(deleteRequestSpy).toHaveBeenCalledWith(
      apiLink + "/game/delete-game/" + gameId,
      token
    );
  });

  test("Delete method should throw if httpRequestAdapter delete method throws", async () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameId = makeFakeGame().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "delete")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = gameRouter.delete(gameId, token);
    await expect(promise).rejects.toThrow();
  });

  test("Update method should call apiConnection getLink method", () => {
    const { apiConnection, gameRouter } = makeSut();
    const gameData = makeFakeGame();
    const gameId = gameData.id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    gameRouter.update(gameId, gameData, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameData = makeFakeGame();
    const gameId = gameData.id;
    const token = makeFakeToken();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    gameRouter.update(gameId, gameData, token);
    expect(patchRequestSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method with correct values", () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameData = makeFakeGame();
    const gameId = gameData.id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    gameRouter.update(gameId, gameData, token);
    expect(patchRequestSpy).toHaveBeenCalledWith(
      apiLink + "/game/update-game/" + gameId,
      gameData,
      token
    );
  });

  test("Update method should throw if httpRequestAdapter patch method throws", async () => {
    const { httpRequestAdapter, gameRouter } = makeSut();
    const gameData = makeFakeGame();
    const gameId = gameData.id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "patch")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = gameRouter.update(gameId, gameData, token);
    await expect(promise).rejects.toThrow();
  });
});
