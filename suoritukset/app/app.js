Ext.application({
	name: 'Ohjelmointity�',
	requires: [],
	views: ['Ohjelmointity�.view.Main','Ohjelmointity�.view.opView'],
	
	launch: function(){
		 
		Ext.Viewport.add({xclass:'Ohjelmointity�.view.Main'});

	}
	
	
});