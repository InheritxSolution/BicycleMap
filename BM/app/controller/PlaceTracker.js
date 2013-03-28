Ext.define('BM.controller.PlaceTracker', {
	extend: 'Ext.app.Controller',
	markers: [],
	directionsDisplay: null,
    directionsService: null,
	
	config: {
		stores: ['PlaceTracker'],
		refs: {
			placeMap: '#placeMap'
		},	
		control: {
			placeMap: {
                mapRender: 'onMapRenders'
            }
		}
	},
	launch: function() {
        // Initialize Google Map Services
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();

        var mapRendererOptions = {
            //draggable: true,  //Allows to drag route
            //hideRouteList: true,
            suppressMarkers: true
        };

        this.directionsDisplay.setOptions(mapRendererOptions);
    },
	
	// Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
	
	onMapRenders : function(comp, map) {
        alert('Gt');
    }
});