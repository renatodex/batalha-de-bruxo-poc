var CanvasNpcChild = function() {	
	
	var _render = function(npc_child) {
		var x = npc_child.getNpcTileX();
		var y = npc_child.getNpcTileY();
		console.log('NPC Rendered!', x, y);
	}
	
	return {
		render:_render
	}
}();