function AppTabGroup() {
	//declare module dependencies
	var AppWindow = require('ui/AppWindow');
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var tab1, tab2;
	
	tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: new AppWindow(L('home'),tab1)
	});
	
	tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: new AppWindow(L('settings'),tab2)
	});
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = AppTabGroup;
