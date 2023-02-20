import { ApiResponse } from "../../dtos/apiResponse-dto";
import { LoginDto } from "../../dtos/login-dto";
import { TokenDto } from "../../dtos/token-dto";

export interface AuthRouterInterface {
  login(loginData: LoginDto): Promise<ApiResponse<TokenDto>>;
}
