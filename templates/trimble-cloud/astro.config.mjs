import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Trimble Cloud Documentation',
			logo: {
				src: './src/assets/trimble-platform-logo.svg',
				
			},
			social: {
				github: 'https://github.com/jbend/starlight-template',
			},
			customCss: ["starlight-modus"],
			sidebar: [
				{
					label: 'Concepts',
					collapsed: false,
					autogenerate: { directory: 'concepts', collapsed: true },
				},
				{
					label: 'Guides',
					collapsed: true,
					autogenerate: { directory: 'guides', collapsed: true },
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference', collapsed: true },
				},
			],
		}),
	],
});
