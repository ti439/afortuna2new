const senderoFoto = new Proxy({"src":"/_astro/monteverde.uCgzC4KY.jpg","width":4056,"height":2281,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/monteverde.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/monteverde.jpg");
							return target[name];
						}
					});

export { senderoFoto as s };
