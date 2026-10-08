import type { Component } from 'svelte';

export interface ProjectMeta {
	slug: string;
	title: string;
	summary: string;
	thumbnail: string;
	thumbnailHover?: string;
	// Image or video (.mp4/.webm/.mov) at the top of the project page; nothing shows if unset.
	cover?: string;
	tags: string[];
	link?: string;
	linkLabel?: string;
	order: number;
}

type MdModule = { default: Component; metadata: Omit<ProjectMeta, 'slug'> };

const modules = import.meta.glob<MdModule>('/src/content/projects/*.md', { eager: true });

const projects = Object.entries(modules)
	.map(([path, mod]) => ({
		meta: { ...mod.metadata, slug: path.split('/').pop()!.replace(/\.md$/, '') },
		component: mod.default
	}))
	.sort((a, b) => a.meta.order - b.meta.order);

export function getProjects(): ProjectMeta[] {
	return projects.map((p) => p.meta);
}

export function getProject(slug: string) {
	return projects.find((p) => p.meta.slug === slug);
}
