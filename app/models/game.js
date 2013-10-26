var Game = function(id, map_id){
	var _id = id,
			_map_id = map_id,
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
		getTeamA : function(){
			return _team_a;
		},
		getTeamB : function(){
			return _team_b;
		},
		addNpctoTeam : function(npc, team_id){
			if(team_id == 'A'){
				_team_a.push(npc);
			}else{
				_team_b.push(npc);
			}
		},
		removeNpcfromTeam : function(npc, team_id){
			if(team_id == 'A'){
				var team = _.without(_team_a, npc);
				_team_a.push(team);
			}else{
				var team = _.without(_team_b, npc);
				_team_b.push(team);
			}

		}
	}
}