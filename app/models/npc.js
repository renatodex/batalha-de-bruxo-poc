var npc = function(id, name, sprite){
	var _id = id,
		_name = name,
		_sprite = sprite;

	return {

		getId : function(){
			return _id;
		},
		
		getName : function(){
			return _name;
		},

		getSprite : function(){
			return _sprite;
		}
	}
}