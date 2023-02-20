import { ApiResponse } from "../dtos/apiResponse-dto";
import { ProfileDto } from "../dtos/profile-dto";
import { Profile } from "../../../domain/profile";
import { ProfileRouterInterface } from "./abstract/profile-router-interface";
import { HttpRequestAdapterInterface } from "../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../connection/abstract/apiConnection-abstract";

export class ProfileRouter implements ProfileRouterInterface {
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
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/profile/create-profile",
      profile,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Profile[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/profile/get-all-profiles",
      authorizationToken
    );
  }

  public async getById(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/profile/get-profile/" + profileId,
      authorizationToken
    );
  }

  public async delete(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/profile/delete-profile/" + profileId,
      authorizationToken
    );
  }

  public async update(
    profileId: string,
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/update-profile/" + profileId,
      profile,
      authorizationToken
    );
  }

  public async addGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/add-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }

  public async removeGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/remove-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }
}
