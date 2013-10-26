var Game = function(id){
	var _id = id,
			_map = {},
			_initialized = false,
			_game_state = 0,
			_team_a = [],
			_team_b = [];

	_isPair = function(num){
		var pair = num % 2;
		if(pair == 0){
			return true;
		}else{
			return false;
		}
	};

	_isValidTeam = function(npcs){
		var valid = npcs.length % 2;
			if(valid == 0){
				return true;
			}else{
				return false;
			}
	};

	_splitTeams = function(npcs){
		if(_isValidTeam(npcs)){
			var shufled = _.shufle(npcs);
			_.each(npcs, function(v,k){
				if(_isPair(k)){
					_team_a.push(v);
				}else{
					_team_b.push(v);
				}
			});
		}else{
			return false;
		}		
	};
	
	return{
		getId : function(){
			return _id;
		},
		setMap : function(map) {
			_map = map;
		},
		getMap : function(){
			return _map;
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
		addNpcToTeam : function(npc, team_id){
			if(team_id == 'A'){
				_team_a.push(npc);
			}else{
				_team_b.push(npc);
			}
		},
		removeNpcFromTeam : function(npc, team_id){
			var team = [];
			if(team_id == 'A'){
				team = _.without(_team_a, npc);
				_team_a.push(team);
			}else{
				team = _.without(_team_b, npc);
				_team_b.push(team);
			}
		},
		setup : function(npcs){
			return _splitTeams(npcs);
		}
	}
}