var FacadeGame = function() {
	
	return {
		create_game : function(npcs_id, map_id) {	
			var _fake_game = {
				id : 5239532,
				map_id : 4329
			}
			
			var game = new Game(_fake_game['id'])
			var map = FacadeMap.retrieve_by_id(_fake_game['map_id']);
			game.setMap(map);
			game.setup()

			return game;		
		}
	}
}()