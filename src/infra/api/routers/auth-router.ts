import { ApiResponse } from "../dtos/apiResponse-dto";
import { TokenDto } from "../dtos/token-dto";
import { LoginDto } from "../dtos/login-dto";
import { AuthRouterInterface } from "./abstract/auth-router-interface";
import { ApiConnectionInterface } from "../connection/abstract/apiConnection-abstract";
import { HttpRequestAdapterInterface } from "../../../helpers/adapters/abstract/httpRequest-adapter-interface";

export class AuthRouter implements AuthRouterInterface {
  private readonly httpRequestAdapter: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;

  constructor(
    httpRequestAdapter: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async login(loginData: LoginDto): Promise<ApiResponse<TokenDto>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/auth/login",
      loginData
    );
  }
}
