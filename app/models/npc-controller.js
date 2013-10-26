var NpcController = function(hp, npc_x, npc_y, game_id){
	var _npc = {},
			_hp = hp,
			_npc_x = npc_x,
			_npc_y = npc_y,
			_attackable = false,
			_game_id = game_id 

	return{
		setNpc : function(npc){
			_npc = npc;
		},
		getNpc : function(){
			return _npc;
		},
		getNpcId : function(){
			return _npc_id;
		},
		getHp : function(){
			return _hp;
		},
		getNpcX : function(){
			return _npc_x;
		},
		getNpcY : function(){
			return _npc_y;
		},
		getGameId : function(){
			return _game_id;
		},
		setAttackable : function(attackable){
			_attackable = attackable;
			return _attackable;
		}
	}
}