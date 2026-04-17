const logoAF = new Proxy({"src":"/_astro/logoafortundosV.COvfi3LQ.png","width":1600,"height":602,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/logoafortundosV.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/logoafortundosV.png");
							return target[name];
						}
					});

export { logoAF as l };
