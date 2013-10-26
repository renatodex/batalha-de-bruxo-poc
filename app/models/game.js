var Game = function(id, map_id){
	var _id = id,
			_map_id = map_id,
			_npcs = [],
			_initialized = false,
			_game_state = 0,
			_team_a = [],
			_team_b = [];
	
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
		},
		getTeamA : function(){
			return _team_a;
		},
		getTeamB : function(){
			return _team_b;
		},
		addNpctoTeam : function(npc, team){
			team.push(npc);
		},
		removeNpcfromTeam : function(npc){
			
		}
	}
}