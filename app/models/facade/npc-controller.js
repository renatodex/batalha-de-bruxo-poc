var FacadeNpcController = function() {	
	var _create_npc_instance = function(npc_id) {
		var _fake_instance = {
			hp : 100,
			npc_x : 12,
			npc_y : 24,
			attackable : true,
			game_id : 682398432
		}

		var npc_controller = new NpcController(_fake_instance['hp'], _fake_instance['npc_x'], _fake_instance['npc_y'], _fake_instance['attackable'], _fake_instance['game_id']);
		var npc = FacadeNpc.retrieve_by_id(npc_id)
		npc_controller.setNpc(npc)
	}	
	
	return {
		createNpcInstance:_create_npc_instance
	}
}()
