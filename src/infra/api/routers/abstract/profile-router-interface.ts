import { Profile } from "../../../../domain/profile";
import { ApiResponse } from "../../dtos/apiResponse-dto";
import { ProfileDto } from "../../dtos/profile-dto";

export interface ProfileRouterInterface {
  create(
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
  getAll(authorizationToken: string): Promise<ApiResponse<Profile[]>>;
  getById(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
  delete(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
  update(
    profileId: string,
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
  addGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
  removeGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>>;
}
