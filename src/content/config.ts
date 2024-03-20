import { defineCollection, z } from "astro:content";

export const collections = {
  layouts: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        started: z.string(),
        link: z.string().url(),
        images: z.array(
          z.object({
            time: z.string(),
            image: image(),
            credit: z.object({
              name: z.string(),
              link: z.string().url(),
            }),
          }),
        ),
      }),
  }),
};
