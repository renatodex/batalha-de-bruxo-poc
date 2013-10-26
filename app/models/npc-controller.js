var NpcController = function(vida_atual, npc_x, npc_y, game_id){
	var _vida_atual = vida_atual,
	_npc_x = x,
	_npc_y = y,
	_attackable = false,
	_game_id = game_id 

	return{
		getVidaAtual : function(){
			return _vida_atual;
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
		},
	}
}