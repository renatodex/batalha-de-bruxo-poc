var NPC = {
	retrieve_npc_by_id : function(id) {
		var _fake_npc = {
			id : 1,
			name : 'Dalgun Samanad',
			sprite : 'http://localhost:3000/sprite1.png',
			level : 1,
			powers : []
		}
		
		return new NPC(_fake_npc['id'], _fake_npc['name'], _fake_npc['sprite'], _fake_npc['level'], _fake_npc['powers'])
	}
}