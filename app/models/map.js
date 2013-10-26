var map = function(width, height, tile_height, tile_width, sprite, tile_data ){
	var _width = width,
			_height = height,
			_tile_height = tile_height,
			_tile_width = tile_width,
			_sprite = sprite,
			_tile_data = tile_data;

	_tiles_per_line = _width / _tile_width;
	
	_getY = function(tile_pos) {
		return parseInt((tile_post-1)/_tiles_per_line) * tile_width
	};
	_getX = function(tile_pos) {
		return ((tile_pos-1) % _tiles_per_line) * tile_width
	};

	return{
		getX : function(){
			return _getX(_tile_data);
		},
		getY : function(){
			return _getY(_tile_data);
		}
	}
}