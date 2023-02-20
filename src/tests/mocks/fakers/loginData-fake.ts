import { LoginDto } from "../../../infra/api/dtos/login-dto";
import { makeFakeUser } from "./user-fake";

export function makeFakeLoginData(): LoginDto {
  const { email, password } = makeFakeUser();
  return { email, password };
}
