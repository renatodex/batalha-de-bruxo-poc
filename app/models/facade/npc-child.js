var FacadeNpcChild = function() {	
	var _create_npc_instance = function(npc_id) {
		var _fake_instance = {
			hp : 100,
			npc_tile_x : 12,
			npc_tile_y : 24,
			npc_frame_width: 64,
			npc_frame_height: 52,
			attackable : true,
			game_id : 682398432
		}

		var npc_controller = new NpcChild(_fake_instance['hp'], _fake_instance['npc_tile_x'], _fake_instance['npc_tile_y'], _fake_instance['attackable'], _fake_instance['game_id']);
		npc_controller.setFrameWidth(_fake_instance['npc_frame_width']);
		npc_controller.setFrameHeight(_fake_instance['npc_frame_height']);
		
		var npc = FacadeNpc.retrieveById(npc_id)
		npc_controller.setNpc(npc);
		
		return npc_controller;
	}
	
	var _isValidMove = function(npc, callback) {
		var cb = callback || function(){};
		cb(true);
	}
	
	return {
		createNpcInstance:_create_npc_instance,
		isValidMove:_isValidMove
	}
}()
