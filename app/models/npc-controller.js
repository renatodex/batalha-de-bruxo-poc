var NpcController = function(npc_id, hp, npc_x, npc_y, game_id){
	var  _npc_id = npc_id,
			_hp = hp_actual,
			_npc_x = x,
			_npc_y = y,
			_attackable = false,
			_game_id = game_id 

	return{
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