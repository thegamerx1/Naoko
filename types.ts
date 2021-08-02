import Discord from "discord.js";

export interface IMessage extends Discord.Message {
  command: string;
  args: string[];
}

export type TExecute = (message: Discord.Message) => Promise<string> | string;

export interface ICommand {
  execute: TExecute;
  name: string;
  description: string;
  requiresProcessing?: boolean;
}

export interface IAnime {
  anilist: number;
  filename: string;
  episode?: number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export interface CoverImage {
  large: string;
}

export interface Title {
  romaji: string;
  native: string;
}

export interface ExternalLinks {
  url: string;
}

export interface IAnilistAnime {
  id: number;
  description: string;
  coverImage: CoverImage;
  title: Title;
  externalLinks: ExternalLinks[];
  bannerImage?: string;
}
