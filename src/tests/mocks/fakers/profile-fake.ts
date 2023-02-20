import { Profile } from "../../../domain/profile";

export function makeFakeProfile(): Profile {
  return {
    id: "fake_id",
    title: "fake_title",
    imageUrl: "fake_imageUrl",
    createdAt: "fake_createdAt",
    updatedAt: "fake_updatedAt",
    userId: "fake_userId",
    favoriteGames: [],
    Game: [],
  };
}
