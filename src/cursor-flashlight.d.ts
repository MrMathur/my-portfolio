declare module 'cursor-flashlight' {
	export function enable(options?: { size?: string }): void;
	export function disable(): void;
	export function isEnabled(): boolean;
}
