const toursData = [
	{
		slug: "arenal-one-day-package-tour",
		nombre: "Arenal One Day Package Tour",
		descripcion: "The perfect day to experience the best of La Fortuna with adventure, nature, and unforgettable views.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		dificultad: "Moderate",
		duracion: "9 hours",
		ubicacion: "La Palma",
		tags: [
			"Adventure",
			"Scenery"
		],
		precio: 160
	},
	{
		slug: "white-water-rafting",
		nombre: "White Water Rafting II-III",
		descripcion: "Rafting on the Sarapiqui River with Class II-III rapids, ideal for families and those seeking moderate excitement in a natural setting, with expert guides, tropical fruit, and a traditional Costa Rican lunch.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
		dificultad: "Moderate",
		duracion: "3 hours",
		ubicacion: "Sarapiqui River, Costa Rica",
		tags: [
			"Rafting",
			"Adventure",
			"Nature",
			"Family",
			"Sarapiqui River",
			"Water sports",
			"Ecotourism",
			"Adrenaline",
			"Outdoor activities",
			"Guided tour"
		],
		precio: 95
	},
	{
		slug: "eco-atv-tour-la-fortuna",
		nombre: "Eco ATV Tour - La Fortuna Adventure",
		descripcion: "ATV adventure through jungle, mud, and local culture at the foot of Arenal Volcano, ideal for beginners and adrenaline lovers.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/EcologicalATV_1005f75d.jpg",
		dificultad: "Moderate",
		duracion: "2.5 - 3 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"ATV",
			"Adventure",
			"Nature",
			"Arenal Volcano",
			"Local culture",
			"Jungle",
			"Adrenaline",
			"Guided tour",
			"Outdoor activities"
		],
		precio: 105
	},
	{
		slug: "arenal-volcano-horseback-ride",
		nombre: "Horseback Riding to Arenal Volcano",
		descripcion: "Ride through rainforest, rivers and lava fields on Costa Rica's best-trained horses. This adventure takes place on a private ranch surrounded by primary and secondary rainforest near Arenal Volcano National Park, offering breathtaking views of canyon, old lava flows and lush jungle. With well-trained and gentle horses, you'll cross rivers and forest trails while spotting monkeys, hawks, toucans and wildlife. Bilingual nature guides share insights about ecosystems and local fauna. After the ride, relax at Montaña de Fuego hot springs with 3 hot pools and 2 cold pools. Perfect for families, couples, and nature lovers seeking an authentic and memorable experience.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
		dificultad: "Moderate",
		duracion: "3 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Horseback riding",
			"Nature",
			"Arenal Volcano",
			"Hot springs",
			"Family",
			"Adventure",
			"Horses",
			"Guided tour",
			"Wildlife spotting",
			"Rivers",
			"Thermal pools"
		],
		precio: 65
	},
	{
		slug: "coffee-and-chocolate-tour",
		nombre: "Coffee and Chocolate Tour",
		descripcion: "Guided tour at a family farm near Arenal Volcano where visitors learn the coffee, chocolate, and sugarcane process, with tastings included.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cafe_60848456.jpg",
		dificultad: "Easy",
		duracion: "2.5 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Coffee",
			"Chocolate",
			"Cultural tour",
			"Gastronomic experience",
			"Sustainability",
			"Organic farming",
			"Arenal Volcano",
			"La Fortuna",
			"Rural tourism",
			"Family"
		],
		precio: 60
	},
	{
		slug: "canopy-los-canones",
		nombre: "Canopy Los Cañones",
		descripcion: "Fly above the rainforest in Arenal's most thrilling zipline adventure. Canopy Los Cañones is one of La Fortuna's most complete and exhilarating rainforest adventures. With 12 cables and 13 platforms covering 2.8 km, experience the thrill of soaring between giant trees, deep ravines and lush vegetation. Encounter howler monkeys, toucans, sloths, coatis and exotic birds. After the zipline course, enjoy free access to hot and cold pools, crocodile farms and a butterfly garden.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/canopy-pic_e68a4499.jpg",
		dificultad: "Moderate",
		duracion: "2 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Zipline",
			"Canopy",
			"Adventure",
			"Adrenaline",
			"Rainforest",
			"Wildlife",
			"Safety",
			"Professional guides",
			"Nature",
			"Outdoor activities"
		],
		precio: 125
	},
	{
		slug: "mistico-hanging-bridges-park",
		nombre: "Mistico Hanging Bridges Park",
		descripcion: "Walk above the forest and feel the magic of Arenal. Deep in the tropical rainforest at the base of Arenal Volcano lies a place where nature and wonder meet. Over 3.2 km of trails and 14 bridges (6 hanging), you'll feel suspended between earth and sky, surrounded by bird songs, waterfalls, and the lush heartbeat of the jungle. Every step awakens your senses with the sounds of the forest, the scent of rain, and breathtaking views of the volcano. This is a journey into peace, adventure and connection—perfect for couples, families, or anyone seeking to rediscover the joy of feeling alive.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		dificultad: "Easy",
		duracion: "2.5 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Bridges",
			"Hiking",
			"Nature",
			"Rainforest",
			"Arenal Volcano",
			"Wildlife",
			"Birds",
			"Monkeys",
			"Nature connection",
			"Family",
			"Couples",
			"Sensory experience"
		],
		precio: 85
	},
	{
		slug: "horseback-riding-rio-fortuna-waterfall",
		nombre: "Horseback Riding Tour to Rio Fortuna Waterfall",
		descripcion: "The most scenic and thrilling way to discover one of La Fortuna's most iconic treasures. Guided horseback ride through rainforest trails followed by access to the spectacular Rio Fortuna Waterfall. Experience the complete adventure: forest hike, descent down scenic steps, breathtaking views of canyon and lush vegetation, time for memorable photos and a refreshing swim in crystal-clear waters. This accessible adventure is ideal for couples, families, and travelers seeking authentic connection with nature and unforgettable landscapes.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/caballos_al_volcan_c0c3dd51.jpeg",
		dificultad: "Moderate",
		duracion: "4 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Horseback riding",
			"Waterfall",
			"Adventure",
			"Nature",
			"Rainforest",
			"River",
			"Scenic views",
			"Couples",
			"Family",
			"Photography",
			"Guided experience",
			"Outdoor activities"
		],
		precio: 115
	}
];

export { toursData as t };
