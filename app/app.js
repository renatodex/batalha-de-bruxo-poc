var App = function() {
	var _init = function(canvas_id, callback) {
		_callback = callback || function() {};
		stage = new createjs.Stage(canvas_id);

		// grab canvas width and height for later calculations:
		w = stage.canvas.width;
		h = stage.canvas.height;

		/*manifest = [
			{src:"assets/runningGrant.png", id:"grant"},
			{src:"assets/sky.png", id:"sky"},
			{src:"assets/ground.png", id:"ground"},
			{src:"assets/parallaxHill1.png", id:"hill"},
			{src:"assets/parallaxHill2.png", id:"hill2"}
		];*/

		loader = new createjs.LoadQueue(false);
		loader.addEventListener("complete", callback);
		loader.loadManifest([{id:"image", src:"assets/images/hero_sprite.png"}]);
		loader.load();
	}
	
	return {
		init : _init
	}
}();

App.init('alcides', function() {
	var game = FacadeGame.createGame([1,2,3,4], 40);
	var npc_child = game.getTeamA()[0];
	ControllerNpcChild.render(npc_child, 100, 101)
});