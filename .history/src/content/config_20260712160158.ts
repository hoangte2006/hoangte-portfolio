import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			period: z.string(),
			category: z.enum(['Project', 'Learning', 'Creative']),
			tags: z.array(z.string()),
			heroImage: image(), // Báo cho Astro đây là một ảnh
			youtube: z.array(z.string()).optional(),
			gallery: z
				.array(
					z.object({
						src: image(), // Báo cho Astro đây là một ảnh
						alt: z.string(),
					})
				)
				.optional(),
			outcome: z.string().optional(),
			pubDate: z.date().optional(),
		}),
});

export const collections = {
	projects: projectsCollection,
};