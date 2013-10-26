var Game = function(id, map_id){
	var _id = id,
			_map_id = map_id,
			_npcs = [],
			_initialized = false,
			_game_state = 0;
	
	return{
		getId : function(){
			return _id;
		},
		getMapId : function(){
			return _map_id;
		},
		getInitialized : function(){
			return _initialized;
		},
		getGameState : function(){
			return _game_state;
		},
		getNpcs : function(){
			return _npcs;
		}
	}
}