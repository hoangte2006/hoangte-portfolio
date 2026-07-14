import { defineCollection, image, z } from 'astro:content';

const blog = defineCollection({
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		period: z.string(),
		heroImage: z.optional(image()),
		youtube: z.array(z.string().url()).optional(),
		outcome: z.string(),
	}),
});

export const collections = { blog, projects };
