import { Game } from "../../../../domain/game";
import { ApiResponse } from "../../dtos/apiResponse-dto";
import { GameDto } from "../../dtos/game-dto";

export interface GameRouterInterface {
  create(game: GameDto, authorizationToken: string): Promise<ApiResponse<Game>>;
  getAll(authorizationToken: string): Promise<ApiResponse<Game[]>>;
  getById(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>>;
  delete(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>>;
  update(
    gameId: string,
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>>;
}
