Ext.define('BM.model.Place',{
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{
				name: 'i'
			},
			{
				name: 'n'
			},
			{
				name: 'l',
				type: 'float'
			},
			{
				name: 'l2',
				type: 'float'
			}
		]
	}
});