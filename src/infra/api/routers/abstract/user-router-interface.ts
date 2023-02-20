import { User } from "../../../../domain/user";
import { ApiResponse } from "../../dtos/apiResponse-dto";
import { UserDto } from "../../dtos/user-dto";

export interface UserRouterInterface {
  create(user: UserDto): Promise<ApiResponse<User>>;
  getAll(authorizationToken: string): Promise<ApiResponse<User[]>>;
  getById(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>>;
  getByEmail(
    userEmail: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>>;
  delete(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>>;
  update(
    userId: string,
    user: UserDto,
    authorizationToken: string
  ): Promise<ApiResponse<User>>;
}
