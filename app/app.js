var App = function() {
	
	var _init = function(canvas_id, callback) {
		_callback = callback || function() {};
		stage = new createjs.Stage(canvas_id);

		// grab canvas width and height for later calculations:
		w = stage.canvas.width;
		h = stage.canvas.height;

		manifest = [
			{src:"assets/runningGrant.png", id:"grant"},
			{src:"assets/sky.png", id:"sky"},
			{src:"assets/ground.png", id:"ground"},
			{src:"assets/parallaxHill1.png", id:"hill"},
			{src:"assets/parallaxHill2.png", id:"hill2"}
		];

		loader = new createjs.LoadQueue(false);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(manifest);		
	}
	
	return {
		init : _init;
	}
}();

App.init('alcides', function() {
	ControllerNpcChild.render()
});