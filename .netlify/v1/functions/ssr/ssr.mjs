
			import { createHandler } from './.netlify/build/entry.mjs';

			export default createHandler({"notFoundContent":"<!DOCTYPE html><html lang=\"es\"> <head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Página no encontrada | Afortunados</title><link rel=\"stylesheet\" href=\"/_astro/global.D0zF-e4d.css\"></head> <body class=\"flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200\"> <main class=\"text-center px-6\"> <h1 class=\"text-8xl font-extrabold text-sky-600\">404</h1> <p class=\"mt-4 text-2xl font-semibold text-gray-700\">¡Ups! Página no encontrada</p> <p class=\"mt-2 text-gray-500\">Parece que te perdiste en el camino 🌋</p> <a href=\"/\" class=\"mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-sky-600 hover:bg-sky-700 shadow-md transition\">\nVolver al inicio\n</a> </main> </body></html>"});

			// The config must be inlined here instead of imported because Netlify
			// parses this file statically to read the config.
			export const config = {
				includedFiles: ['**/*'],
				name: 'Astro SSR',
				nodeBundler: 'none',
				generator: '@astrojs/netlify@7.0.7',
				path: '/*',
				preferStatic: true,
			};
		