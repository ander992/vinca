import { defineCollection, z } from 'astro:content';

// Schema for employees
const employeeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string(),
    imageUrl: z.string().url(),
    orcidUrl: z.string().url(),
  }),
});

// Schema for publications
const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    publisher: z.string().optional(),
    year: z.number().optional(),
    url: z.string().url(), // Ensure URL is a valid URL
    categories: z.array(z.string()).default([]), // Default to empty array if no categories
  }),
});

export const collections = {
  'employees': employeeCollection,
  'publications': publicationsCollection,
};