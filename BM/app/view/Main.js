Ext.define('BM.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
	requires: 'Ext.Map',
	id: 'placeMapPanel',
	alias: 'widget.placeMap',
    config: {
        layout:{
            type:'fit'
        },
        
		items: [
            {
				xtype: 'titlebar',
				docked: 'top',
				title: 'Find Bike Locations',
			    items: [
					{
						xtype: 'button',
						iconMask: true,
						iconCls: 'locate'
					},
					{
						xtype: 'button',
						align: 'right',
						iconMask: true,
						iconCls: 'list'
					}
				]
            },
			{
				xtype: 'titlebar',
				docked: 'bottom'
            }
        ]
    },
	initialize: function() {
        this.callParent();
		
        var map = {
			xtype: 'map',
			id: 'placeMap',
            mapOptions : {
                center : new google.maps.LatLng(51.52834133, -0.170134484),  //nearby San Fran
                zoom : 15,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },

            plugins : [
                new Ext.plugin.google.Tracker({
                    trackSuspended: true,   //suspend tracking initially
                    allowHighAccuracy: false,
                    marker: new google.maps.Marker({
                        position: new google.maps.LatLng(51.52834133, -0.170134484),
                        title: 'My Current Location',
                        icon: 'resources/img/blue_MarkerA.png'
                    })
                })
            ],
			
			listeners: {
				maprender: this.onMapRender
            }
        };
        this.add([map]);
    },
	
	
	onMapRender: function (comp, map) {
		var store = Ext.getStore('PlaceTracker');
		
		RedirectDetails = function (param) {
			Ext.Viewport.animateActiveItem( {xtype: 'placePanel', placename: param}, { type: 'slide', direction: 'left' });
		};
	
		store.on('load', function(){
			for(var i=0;i<store.getCount();i++)
			{
				var dymarkers = new google.maps.Marker({
					position: new google.maps.LatLng(store.getAt(i).getData().l, store.getAt(i).getData().l2),
					title : store.getAt(i).getData().n,
					map: map,
					icon: 'resources/img/cross_cycle.png'
				});
				
				var ib = new InfoBox({
				    alignBottom: true,
					disableAutoPan: false,
					maxWidth: 0,
					pixelOffset: new google.maps.Size(-100, -200),
					zIndex: null,
					closeBoxURL: "",
					infoBoxClearance: new google.maps.Size(1, 1),
					isHidden: false,
					pane: "floatPane",
					enableEventPropagation:false
				});

				google.maps.event.addListener(dymarkers, 'click', (function (dymarkers, i) {
					return function () {
					    ib.setContent('<div id="googleinfowin" > <table> <tr> <td> <b>' + store.getAt(i).getData().n + '</b><br/><small>28 bikes, </small><small>30 places</small> </td><td><a href="#" onClick="RedirectDetails(\' ' + store.getAt(i).getData().n + ' \')"><img src="arrowblue.png" /></a></td></tr></table></div>');
						ib.open(map, dymarkers);
					}
				})(dymarkers, i));
				
				
			}
		});
	}
});
