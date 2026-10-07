import { getProjects } from '#lib/content.ts';
import { publications } from '#lib/data/publications.ts';
import { experience } from '#lib/data/experience.ts';

export function load() {
	return { projects: getProjects(), publications, experience };
}
