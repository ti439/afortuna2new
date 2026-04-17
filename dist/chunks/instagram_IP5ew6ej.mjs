const logoAF = new Proxy({"src":"/_astro/logoafortunadosver.Z1e9VN6j.png","width":1606,"height":1140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/logoafortunadosver.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/logoafortunadosver.png");
							return target[name];
						}
					});

const facebook = new Proxy({"src":"/_astro/facebook.ejnf6rkB.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/facebook.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/facebook.png");
							return target[name];
						}
					});

const instagram = new Proxy({"src":"/_astro/instagram.BT1rpC5A.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/instagram.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/instagram.png");
							return target[name];
						}
					});

export { facebook as f, instagram as i, logoAF as l };
