import { ApiResponse } from "../dtos/apiResponse-dto";
import { Game } from "../../../domain/game";
import { GameDto } from "../dtos/game-dto";
import { HttpRequestAdapterInterface } from "../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../connection/abstract/apiConnection-abstract";
import { GameRouterInterface } from "./abstract/game-router-interface";

export class GameRouter implements GameRouterInterface {
  private readonly httpRequestAdapter: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;

  constructor(
    httpRequestAdapter: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async create(
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/game/create-game",
      game,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Game[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/game/get-all-games",
      authorizationToken
    );
  }

  public async getById(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/game/get-game/" + gameId,
      authorizationToken
    );
  }

  public async delete(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/game/delete-game/" + gameId,
      authorizationToken
    );
  }

  public async update(
    gameId: string,
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/game/update-game/" + gameId,
      game,
      authorizationToken
    );
  }
}
