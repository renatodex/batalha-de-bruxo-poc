var FacadePower = {
	retrieve_by_npc_id : function(npc_id) {
		var _fake_powers = [
			{
				id: 1,
				name: 'Fireball',
				sprite: 'http://localhost:3000/fireball.png',
				npc_id: 10,
				damage_formula: '{atk}+1'
			},{
				id: 1,
				name: 'Fireball',
				sprite: 'http://localhost:3000/fireball.png',
				npc_id: 10,
				damage_formula: '{atk}+1'
			}			
		]
		
		var power;
		var powers = [];
		_.each(_fake_powers, function() {
			power = new Power(_fake_powers[0]['id'], _fake_powers[0]['name'], _fake_powers[0]['sprite'], _fake_powers[0]['npc_id'], _fake_powers[0]['damage_formula']))
			powers.push(power);
		})
		
		return powers;
	}
}