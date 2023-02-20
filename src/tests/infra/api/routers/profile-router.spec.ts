import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { ProfileRouterInterface } from "../../../../infra/api/routers/abstract/profile-router-interface";
import { ProfileRouter } from "../../../../infra/api/routers/profile-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";
import { makeFakeError } from "../../../mocks/fakers/error-fake";
import { makeFakeLink } from "../../../mocks/fakers/link-fake";
import { makeFakeProfile } from "../../../mocks/fakers/profile-fake";
import { makeFakeToken } from "../../../mocks/fakers/token-fake";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  profileRouter: ProfileRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const profileRouter = new ProfileRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, profileRouter };
}

describe("ProfileRouter", () => {
  test("Create method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profile = makeFakeProfile();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.create(profile, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profile = makeFakeProfile();
    const token = makeFakeToken();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    profileRouter.create(profile, token);
    expect(postRequestSpy).toHaveBeenCalled();
  });

  test("Create method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profile = makeFakeProfile();
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const postRequestSpy = jest.spyOn(httpRequestAdapter, "post");
    profileRouter.create(profile, token);
    expect(postRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/create-profile",
      profile,
      token
    );
  });

  test("Create method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profile = makeFakeProfile();
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "post")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.create(profile, token);
    await expect(promise).rejects.toThrow();
  });

  test("GetAll method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.getAll(token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    profileRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetAll method should call httpRequestAdapter get method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    profileRouter.getAll(token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/get-all-profiles",
      token
    );
  });

  test("GetAll method should throw if httpRequestAdapter get method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.getAll(token);
    await expect(promise).rejects.toThrow();
  });

  test("GetById method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.getById(profileId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter post method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    profileRouter.getById(profileId, token);
    expect(getRequestSpy).toHaveBeenCalled();
  });

  test("GetById method should call httpRequestAdapter post method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const getRequestSpy = jest.spyOn(httpRequestAdapter, "get");
    profileRouter.getById(profileId, token);
    expect(getRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/get-profile/" + profileId,
      token
    );
  });

  test("GetById method should throw if httpRequestAdapter post method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "get")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.getById(profileId, token);
    await expect(promise).rejects.toThrow();
  });

  test("Delete method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.delete(profileId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    profileRouter.delete(profileId, token);
    expect(deleteRequestSpy).toHaveBeenCalled();
  });

  test("Delete method should call httpRequestAdapter delete method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const deleteRequestSpy = jest.spyOn(httpRequestAdapter, "delete");
    profileRouter.delete(profileId, token);
    expect(deleteRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/delete-profile/" + profileId,
      token
    );
  });

  test("Delete method should throw if httpRequestAdapter delete method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "delete")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.delete(profileId, token);
    await expect(promise).rejects.toThrow();
  });

  test("Update method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profileData = makeFakeProfile();
    const profileId = profileData.id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.update(profileId, profileData, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileData = makeFakeProfile();
    const profileId = profileData.id;
    const token = makeFakeToken();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.update(profileId, profileData, token);
    expect(patchRequestSpy).toHaveBeenCalled();
  });

  test("Update method should call httpRequestAdapter patch method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileData = makeFakeProfile();
    const profileId = profileData.id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.update(profileId, profileData, token);
    expect(patchRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/update-profile/" + profileId,
      profileData,
      token
    );
  });

  test("Update method should throw if httpRequestAdapter patch method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileData = makeFakeProfile();
    const profileId = profileData.id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "patch")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.update(profileId, profileData, token);
    await expect(promise).rejects.toThrow();
  });

  test("AddGames method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.addGames(profileId, [], token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("AddGames method should call httpRequestAdapter patch method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.addGames(profileId, [], token);
    expect(patchRequestSpy).toHaveBeenCalled();
  });

  test("AddGames method should call httpRequestAdapter patch method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.addGames(profileId, [], token);
    expect(patchRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/add-games-profile/" + profileId,
      {
        favoriteGames: [],
      },
      token
    );
  });

  test("AddGames method should throw if httpRequestAdapter patch method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "patch")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.addGames(profileId, [], token);
    await expect(promise).rejects.toThrow();
  });

  test("RemoveGames method should call apiConnection getLink method", () => {
    const { apiConnection, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    profileRouter.removeGames(profileId, [], token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  test("RemoveGames method should call httpRequestAdapter patch method", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.removeGames(profileId, [], token);
    expect(patchRequestSpy).toHaveBeenCalled();
  });

  test("RemoveGames method should call httpRequestAdapter patch method with correct values", () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    const apiLink = makeFakeLink();
    const patchRequestSpy = jest.spyOn(httpRequestAdapter, "patch");
    profileRouter.removeGames(profileId, [], token);
    expect(patchRequestSpy).toHaveBeenCalledWith(
      apiLink + "/profile/remove-games-profile/" + profileId,
      {
        favoriteGames: [],
      },
      token
    );
  });

  test("RemoveGames method should throw if httpRequestAdapter patch method throws", async () => {
    const { httpRequestAdapter, profileRouter } = makeSut();
    const profileId = makeFakeProfile().id;
    const token = makeFakeToken();
    jest
      .spyOn(httpRequestAdapter, "patch")
      .mockReturnValueOnce(makeFakeError(true));
    const promise = profileRouter.removeGames(profileId, [], token);
    await expect(promise).rejects.toThrow();
  });
});
