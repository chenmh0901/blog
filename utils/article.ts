import type { ArticleMeta } from "~/types/article";

export const splitArticleName = (title: string) => {
  const [name, tag, time] = title.replace(".md", "").split("@");

  return { name, tag, time } as ArticleMeta;
};
