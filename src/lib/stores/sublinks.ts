import { writable } from 'svelte/store';
let value: {name: string, link: string}[] = [];
export const sublinks = writable(value);