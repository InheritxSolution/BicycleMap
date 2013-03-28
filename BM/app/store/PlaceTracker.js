Ext.define('BM.store.PlaceTracker',{
	
	extend: 'Ext.data.Store',
    requires: [
        'BM.model.Place'
    ],
	config: {
		autoLoad: true,
		model: 'BM.model.Place',
		storeId: 'PlaceTracker',
		proxy: {
			type: 'jsonp',
			url: 'http://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FQIerPnRAHNxOuRNfV55Z02%22%20as%20tfl%3B%20select%20*%20from%20tfl&format=json',
			reader: {
				type: 'json',
				rootProperty: 'query.results.items.s',
			}
		}
	}
});
