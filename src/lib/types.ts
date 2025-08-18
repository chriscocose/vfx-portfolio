export type MediaType = "image" | "video";

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: number;
  roles: string[];
  tags: string[];
  summary: string;
  cover: string;
  mediaType: MediaType;
  mediaSrc: string;
  client?: string;
  credits?: string[];
  durationSec?: number;
};

