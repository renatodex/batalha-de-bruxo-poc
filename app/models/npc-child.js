var NpcController = function(hp, npc_tile_x, npc_tile_y, game_id){
	var _npc = {},
			_hp = hp,
			_npc_tile_x = npc_tile_x,
			_npc_tile_y = npc_tile_y,
			_attackable = false,
			_game_id = game_id,
			_frame_width = 0,
			_frame_height = 0;

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
		getNpcTileX : function(){
			return _npc_tile_x;
		},
		getNpcTileY : function(){
			return _npc_tile_y;
		},
		setNpcTileX : function(npc_tile_x){
			_npc_tile_x = npc_tile_x;
		},
		setNpcTileY : function(npc_tile_y){
			_npc_tile_y = npc_tile_y;
		},
		getGameId : function(){
			return _game_id;
		},
		setAttackable : function(attackable){
			_attackable = attackable;
			return _attackable;
		},
		setFrameWidth : function(frame_width){
			_frame_width = frame_width;
		},
		setFrameHeight : function(frame_height){
			_frame_height = frame_height;
		},
		getFrameWidth : function(){
			return _frame_width;
		},
		getFrameHeight : function(){
			return _frame_height;
		},
	}
}