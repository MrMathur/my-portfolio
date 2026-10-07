import { error } from '@sveltejs/kit';
import { getProject, getProjects } from '#lib/content.ts';

export function entries() {
	return getProjects().map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
	const project = getProject(params.slug);
	if (!project) error(404, 'Project not found');
	return project;
}
