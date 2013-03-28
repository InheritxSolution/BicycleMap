Ext.define('BM.view.Place',{
	extend: 'Ext.Panel',
	xtype: 'placePanel',
	
	config: {
	
		layout:{
            type:'fit'
        },
		
		title: 'Place',
		
		items: [
            {
				xtype: 'titlebar',
				docked: 'top',
				title: 'Place Information',
			    items: [
					{
						xtype: 'button',
						text:'Back',
						iconMask: true,
						iconCls: 'arrow_left'
					},
					{
						xtype: 'button',
						align: 'right',
						iconMask: true,
						iconCls: 'refresh'
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
		
		// var container = {
			// xtype: 'container',
            // items: [
				// {
					// html: '<h3>' + this.placename + '</h3>'
				// }
            // ]
		// }; 
		
		var container = {
				xtype: 'panel',
				scrollable: true,
				layout:{
						type:'fit'						
					},				
				items:[
					{
						xtype: 'panel',					
						layout: 'vbox',	
						cls:'panel1',	
						items:[
							{
								docked: 'left',																
								xtype: 'image'								
							},
							{
								 xtype: 'panel',
								 flex: 1,
								 html: this.placename							 
								 
							},
							{
								xtype: 'panel',
								cls:'fontsize',
								flex: 2,
								html: '1.2 miles east of current location'
							}
							
						]
						
					},					
					{
						xtype: 'panel',		
						layout: 'hbox',	
						cls:'panel2',
						items:[
							{
								 xtype: 'panel',
								 flex: 1,								 
								 height:120								 
							},
							{
								xtype: 'panel',																
								height:120,
								flex: 2								
							}
						]
					},	
					{
						xtype: 'panel',		
						layout: 'vbox',	
						cls:'panel3',
						items:[
							{
								 xtype: 'panel',
								 flex: 1,			
								 width:1000,
								 html: 'Data Pulished by TFL 3 minuts ago'
							},
							{
								xtype: 'panel',																
								flex: 2,
								width:1000,
								html: 'sLast checked 30s ago'
							}
						]
					},
					{
						xtype:'panel',
						cls:'panel4',						
						items:[
							{
								xtype:'panel',
								layout: 'vbox',		
								
								items:[
									{
										xtype: 'panel',
										flex: 1,
										width:57,
										height:54
									},
									{
										 xtype: 'panel',
										 flex: 2,			
										 width:500,
										 html: 'Rought Planning</br>'
									}
								]								 
							},
							{
								xtype:'panel',
								layout: 'vbox',							 									
								items:[
									{
										xtype: 'panel',
										flex: 1,
										width:57,
										height:54
									},
									{
										 xtype: 'panel',
										 flex: 2,			
										 width:550,
										 html: 'Add to favourites</br>'
									}
								]								
							}
						]
						
					}
				]		
			}; 
		
		

		this.add([container]);
	}
	
});