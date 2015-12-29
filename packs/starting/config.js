tycoonimals.config.assets.push(
	{
		id:"starting.assets.grass", // Identifiant de la ressource
		type:tycoonimals.assetType.image, // Type de ressource
		path:"packs/starting/img/grass.png" // Chemin vers la ressource
	},
	{
		id:"starting.assets.fish", // Identifiant de la ressource
		type:tycoonimals.assetType.image, // Type de ressource
		path:"packs/starting/img/fish.png" // Chemin vers la ressource
	},
	{
		id:"starting.assets.ball", // Identifiant de la ressource
		type:tycoonimals.assetType.image, // Type de ressource
		path:"packs/starting/img/ball.png" // Chemin vers la ressource
	}
);

tycoonimals.config.items.push(
	{
		id:"starting.items.fish", // Identifiant de l'objet
		type:tycoonimals.itemType.food, // Type d'objet
		name:{ // Nom de l'objet
			fr_FR:"Poisson",
			fr_FR:"Fish"
		},
		description:{ // Description de l'objet
			fr_FR:"Poisson",
			fr_FR:"Fish"
		},
		image:"starting.assets.fish", // Visuel de l'objet
		price:4, // Prix de l'objet
		onUse:function(animal) { // Un objet de type "tycoonimals.itemType.food" s'utilise sur un animal
			animal.eat(2); // fait manger l'animal
		}
	},
	{
		id:"starting.items.ball", // Identifiant de l'objet
		type:tycoonimals.itemType.toy, // Type d'objet
		name:{ // Nom de l'objet
			fr_FR:"Balle",
			fr_FR:"Ball"
		},
		description:{ // Description de l'objet
			fr_FR:"Poisson",
			fr_FR:"Fish"
		},
		image:"starting.assets.ball", // Visuel de l'objet
		price:150, // Prix de l'objet
		onUse:function(area) { // Un objet de type "tycoonimals.itemType.toy" s'utilise sur une zone
		},
		onEffect:function(area) { // Un objet de type "tycoonimals.itemType.toy" fait effet sur un animal de sa zone choisit de façon aléatoire. Se déclance toutes les 10 secondes.
			area.animals[parseInt(Math.rand() * (area.animals.length + 1))].play(2); // fait jouer l'animal
		}
	}
	// + distributeur de nourriture
);

tycoonimals.config.areas.push(
	{
		id:"starting.areas.grass", // Identifiant de la zone
		name:{ // Nom de la zone
			fr_FR:"Herbes",
			fr_FR:"Grass"
		},
		description:{ // Description de la zone
			fr_FR:"Herbes",
			fr_FR:"Grass"
		},
		animals:["starting.animals.bear"], // Animaux acceptés dans la zone
		image:"starting.assets.grass", // Visuel de la zone
		price:200, // Prix de la zone
		onTime:function(animal) { // Une zone contient des animaux et déclenche cette fonction toutes les 10 secondes
		}
	}
	// + vétérinaire
);

tycoonimals.config.animals.push(
	{
		id:"starting.animals.bear", // Identifiant de l'animal
		name:{ // Nom de l'animal
			fr_FR:"Ours",
			fr_FR:"Bear"
		},
		description:{ // Description de l'animal
			fr_FR:"Ours",
			fr_FR:"Bear"
		},
		price:2500, // Prix de l'animal
		food:["starting.items.fish"], // Nourriture acceptée par l'animal
		animals:["starting.animals.bear"], // Autre animaux acceptés par l'animal
		density:.5, // Place prise par l'animal dans une zone
		life:{ // Variables liées à la vie de l'animal
			hungry:100, // Faim ; diminue de 1/10 sec. Si la faim est inférieure à 25% de ce total, l'animal perd 1/10 sec de vie et 2/10 sec de bonheur. Si la faim est égale à 0, l'animal perd 10/10 sec de vie et 20/10 sec de bonheur.
			dirty:100, // Propreté ; diminue de 1/10 sec. Si la propreté est inférieure à 25% de ce total, l'animal perd 1/10 sec de vie et 2/10 sec de bonheur. Si la propreté est égale à 0, l'animal perd 5/10 sec de vie et 5/10 sec de bonheur.
			life:100, // Vie ; la vie diminue en fonction de la faim et de la properté. D'autres facteurs
			happyness:100, // Bonheur ; si le bonheur tombe à 0, l'animal ne génère plus de bénéfices de visite
		},
		animation:"starting.assets.bear", // Visuels de l'animal
		onTime:function(animal) { // Ici, on peut personnaliser le comportement de l'animal
		}
	}
);

console.log("Starting pack is ready");