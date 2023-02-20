import { User } from "../../../domain/user";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { UserDto } from "../dtos/user-dto";
import { HttpRequestAdapterInterface } from "../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../connection/abstract/apiConnection-abstract";
import { UserRouterInterface } from "./abstract/user-router-interface";

export class UserRouter implements UserRouterInterface {
  private readonly httpRequestAdapter: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;

  constructor(
    httpRequestAdapter: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async create(user: UserDto): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/user/create-user",
      user
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<User[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/user/get-all-users",
      authorizationToken
    );
  }

  public async getById(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/user/get-user-by-id/" + userId,
      authorizationToken
    );
  }

  public async getByEmail(
    userEmail: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/user/get-user-by-email",
      {
        email: userEmail,
      },
      authorizationToken
    );
  }

  public async delete(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/user/delete-user/" + userId,
      authorizationToken
    );
  }

  public async update(
    userId: string,
    user: UserDto,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/user/update-user/" + userId,
      user,
      authorizationToken
    );
  }
}
