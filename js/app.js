/*
=========================
NAMESPACE DECLARATION
=========================
*/

var tycoonimals = tycoonimals || {};

/*
=========================
CONSTANTS
=========================
*/

tycoonimals.assetType = {
	image:"image"
}

tycoonimals.itemType = {
	food:"food",
	toy:"toy",
	tool:"tool"
}

/*
=========================
STATES DECLARATION
=========================
*/

tycoonimals.states = function(game) { };

tycoonimals.states.boot = function(game) { };
tycoonimals.states.boot.prototype = {
    preload: function () {
        //TODO: Load primary assets
    },
    create: function () {
		//TODO: Init
    },
    update: function () {
        //TODO: Update
    }
}

tycoonimals.states.main = function(game) { };
tycoonimals.states.main.prototype = {
    preload: function () {
        //TODO: Load primary assets
		// Load packs assets
		for(var i = 0; i < tycoonimals.config.assets.length; i++) {
			if(tycoonimals.config.assets[i].type == tycoonimals.assetType.image) {
				tycoonimals.app.game.load.image(tycoonimals.config.assets[i].id, tycoonimals.config.assets[i].path);
			}
		}
		// Add isometric plugin
		tycoonimals.app.game.time.advancedTiming = true;
        tycoonimals.app.game.plugins.add(new Phaser.Plugin.Isometric(tycoonimals.app.game));
        tycoonimals.app.game.iso.anchor.setTo(0.5, 0.2);
    },
    create: function () {
		//TODO: Init
		//TODO: Make world according the saved game state
    },
    update: function () {
        // Update
    }
}

/*
=========================
CONFIG OBJECT
=========================
*/

tycoonimals.config = {
	assets:[],
	items:[],
	areas:[],
	animals:[],
}

/*
=========================
MAIN APP
=========================
*/

tycoonimals.app = {
	// Phaser game reference
	game: null,
	// World save
	world: {
		money: 10000,
		areas: [
			{id:"starting.areas.grass", x:0, y:0, animals:[]}
		],
		items: [],
	},
    // Application Constructor
    start: function() {
		//TODO: Load packs dynamically
		//TODO: Load saved game
		tycoonimals.app.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: tycoonimals.app.onPreload, create: tycoonimals.app.onCreate });
		tycoonimals.app.game.state.add('boot', tycoonimals.states.boot);
		tycoonimals.app.game.state.add('main', tycoonimals.states.main);
		tycoonimals.app.game.state.start('main');
    }
};