var FacadeNpcController = {
	create_npc_instance_for : function(npc_id) {
		var _fake_instance = {
			npc_id : 1,
			hp : 100,
			npc_x : 12,
			npc_y : 24,
			attackable : true,
			game_id : 682398432
		}
		
		return new NpcController(_fake_instance['npc_id'], _fake_instance['hp'], _fake_instance['npc_x'], _fake_instance['npc_y'], _fake_instance['attackable'], _fake_instance['game_id']);
	}
}