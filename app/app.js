var App = function() {
	var _loader;
	var _stage;
	
	var _init = function(canvas_id, callback) {
		_callback = callback || function() {};
		_stage = new createjs.Stage(canvas_id);

		// grab canvas width and height for later calculations:
		w = _stage.canvas.width;
		h = _stage.canvas.height;

		/*manifest = [
			{src:"assets/runningGrant.png", id:"grant"},
			{src:"assets/sky.png", id:"sky"},
			{src:"assets/ground.png", id:"ground"},
			{src:"assets/parallaxHill1.png", id:"hill"},
			{src:"assets/parallaxHill2.png", id:"hill2"}
		];*/

		_loader = new createjs.LoadQueue(false);
		_loader.addEventListener("complete", callback);
		_loader.loadManifest([{id:"hero", src:"../assets/images/hero_sprite.png"}]);
		_loader.load();
	}
	
	return {
		init : _init,
		getLoader : function() {
			return _loader;
		},
		getStage : function() {
			return _stage;
		},
		
		update : function() {
			_stage.update();
		}
		/*getCanvas : function() {
			return createjs;
		}*/	
	}
}();


App.init('alcides', function() {
	var game = FacadeGame.createGame([1,2,3,4], 40);
	var npc_child = game.getTeamA()[0];
	ControllerNpcChild.moveDown(npc_child, 0, 100)
	
	setInterval(App.update,200)
});