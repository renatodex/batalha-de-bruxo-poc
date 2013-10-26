var FacadeNpc = {
	retrieve_by_id : function(npc_id) {
		var _fake_npc = {
			id : 1,
			name : 'Dalgun Samanad',
			sprite : 'http://localhost:3000/sprite1.png',
			level : 1
		}
		
		var npc = new Npc(_fake_npc['id'], _fake_npc['name'], _fake_npc['sprite'], _fake_npc['level'])
		var npc_powers = FacadePower.retrieve_by_npc_id(npc_id);
		npc.setPowers(npc_powers);
		
		return npc;
	}
}