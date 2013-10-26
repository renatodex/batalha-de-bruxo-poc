var ControllerNpcChild = function(){
	var _render = function(npc, x, y){
		FacadeNpcChild.isValidMove(npc, function(valid){
			if(valid){
				npc.setNpcTileX(x);
				npc.setNpcTileY(y);

				CanvasNpcChild.render(npc);
			}else{
				return false;
			}
		});
	},

	_move_down = function(npc, x, y){
		FacadeNpcChild.isValidMove(npc, function(valid){
			if(valid){
				npc.setNpcTileX(x);
				npc.setNpcTileY(y);

				CanvasNpcChild.move(npc);
			}else{
				return false;
			}
		});
	}
	return{
		render : _render,
		moveDown: _move_down 
	}
}()