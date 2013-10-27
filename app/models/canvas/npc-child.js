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
		
		
		 var spritesheet = new createjs.SpriteSheet({
		     images: [$(hero_sprite).attr('src')],
             frames: {"regX": 0, "height": npc_frame_height, "count": 1, "regY": 0, "width": npc_frame_width}
		 });

		
		hero_spritesheet = new createjs.Sprite(spritesheet);		

		//hero_spritesheet.x = npc_tile_x;
		//hero_spritesheet.y = npc_tile_y;
		
		App.getStage().addChild(hero_spritesheet);
		App.getStage().update();
	}	
	
	var _set_animation_move_down = function(npc_child) {
		var x = npc_child.getNpcTileX();
		var y = npc_child.getNpcTileY();
		var hero_sprite = App.getLoader().getResult(npc_child.getNpc().getSprite());
		var npc_sprite_x = npc_child.getNpcSpriteX();
		var npc_sprite_y = npc_child.getNpcSpriteY();		
		var npc_tile_x = npc_child.getNpcTileX();
		var npc_tile_y = npc_child.getNpcTileY();
		var npc_frame_width = npc_child.getFrameWidth();
		var npc_frame_height = npc_child.getFrameHeight();
		
		 var data = new createjs.SpriteSheet({
		     images: [$(hero_sprite).attr('src')],
             frames: {"regX": 0, "height": npc_frame_height, "count": 4, "regY": 0, "width": npc_frame_width},
			 animations: {
				move_down : {
					frames: [0,1,2,3]
			  }
			}
		 });
		
		hero_spritesheet = new createjs.Sprite(data, 'move_down');
		
		App.getStage().addChild(hero_spritesheet);
		App.getStage().update();
		
		return hero_spritesheet;
	}
	
	var _set_animation_stand = function(npc_child) {
		var x = npc_child.getNpcTileX();
		var y = npc_child.getNpcTileY();
		var hero_sprite = App.getLoader().getResult(npc_child.getNpc().getSprite());
		var npc_sprite_x = npc_child.getNpcSpriteX();
		var npc_sprite_y = npc_child.getNpcSpriteY();		
		var npc_tile_x = npc_child.getNpcTileX();
		var npc_tile_y = npc_child.getNpcTileY();
		var npc_frame_width = npc_child.getFrameWidth();
		var npc_frame_height = npc_child.getFrameHeight();
		
		 var data = new createjs.SpriteSheet({
		     images: [$(hero_sprite).attr('src')],
             frames: {"regX": 0, "height": npc_frame_height, "count": 1, "regY": 0, "width": npc_frame_width},
			 animations: {
				stand : {
					frames: [0]
			  }
			}
		 });
		
		hero_spritesheet = new createjs.Sprite(data, 'stand');
		hero_spritesheet.x = npc_tile_x;
		hero_spritesheet.y = npc_tile_y;		

		App.getStage().update();
		
		return hero_spritesheet;
	}	
	
	
	var _move = function(npc_child, target_x, target_y) {
		console.log('move')
		var sprite = _set_animation_move_down(npc_child);
		new createjs.Tween.get(hero_spritesheet).to({y:target_y}, 1000).call(function() {
			_set_animation_stand(npc_child)
			App.getStage().update()
		});
	}
	
	var _move_tick = function() {
		
	}
	
	return {
		render:_render,
		move:_move
	}
}();