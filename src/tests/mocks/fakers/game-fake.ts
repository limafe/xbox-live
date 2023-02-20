import { Game } from "../../../domain/game";

export function makeFakeGame(): Game {
  return {
    id: "fake_id",
    title: "fake_title",
    coverImageUrl: "fake_coverImageUrl",
    description: "fake_description",
    year: 2023,
    gender: "fake_gender",
    imdbScore: 8,
    trailerYouTubeUrl: "fake_trailerYouTubeUrl",
    gameplayYouTubeUrl: "fake_gameplayYouTubeUrl",
    createdAt: "fake_createdAt",
    updatedAt: "fake_updatedAt",
    userId: "fake_userId",
    profileId: "fake_profileId",
  };
}
