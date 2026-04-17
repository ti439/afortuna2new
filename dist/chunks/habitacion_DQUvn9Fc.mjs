const volcan = new Proxy({"src":"/_astro/Habprem.BO66egqW.jpg","width":2560,"height":1772,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/habitacion.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/habitacion.jpg");
							return target[name];
						}
					});

export { volcan as v };
