import { CreateGameUseCase } from "../../../data/usecases/game/createGame-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ApiConnection } from "../../../infra/api/connection/apiConnection";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GameCreationAdminController } from "../../../presentation/controllers/gameCreationAdmin-controller";
import { makeGameCreationAdminPageFactory } from "../pages/gameCreationAdmin-page-factory";

export function makeGameCreationAdminControllerFactory(): GameCreationAdminController {
  const gameCreationAdminPage = makeGameCreationAdminPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const gameRouter = new GameRouter(httpRequestAdapter, apiConnection);
  const tokenHandler = new TokenHandler();
  const createGameUseCase = new CreateGameUseCase(gameRouter, tokenHandler);
  return new GameCreationAdminController(
    gameCreationAdminPage,
    createGameUseCase
  );
}
