var CanvasNpcChild = function() {	
	
	var _render = function(npc_child) {
		var x = npc_child.getNpcTileX();
		var y = npc_child.getNpcTileY();
		console.log('NPC Rendered!', x, y);
		
		var hero_sprite = App.getLoader().getResult(npc_child.getNpc().getSprite());
		//var hero_bitmap = new createjs.Bitmap(hero_sprite);
		
		var npc_sprite_x = npc_child.getNpcSpriteX();
		var npc_sprite_y = npc_child.getNpcSpriteY();		
		var npc_tile_x = npc_child.getNpcTileX();
		var npc_tile_y = npc_child.getNpcTileY();
		var npc_frame_width = npc_child.getFrameWidth();
		var npc_frame_height = npc_child.getFrameHeight();
		
		
		 var data = new createjs.SpriteSheet({
		     images: [$(hero_sprite).attr('src')],
             frames: {"regX": 0, "height": npc_frame_height, "count": 1, "regY": 0, "width": npc_frame_width}
		 });
		
		hero_spritesheet = new createjs.Sprite(data);		

		//hero_spritesheet.x = npc_tile_x;
		//hero_spritesheet.y = npc_tile_y;
		
		App.getStage().addChild(hero_spritesheet);
		App.getStage().update();
	}
	
	return {
		render:_render
	}
}();