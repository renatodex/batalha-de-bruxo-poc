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
	}
	return{
		render : _render
	}
}()