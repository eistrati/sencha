//<debug>
Ext.Loader.setPath({
    'Commutalize': 'app',
    'Ext': 'sdk/src'
});
//</debug>

Ext.require([
    'Commutalize.util.Config',
    'Ext.MessageBox'
]);

Ext.application({
    name: 'Commutalize',

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    glossOnIcon: false,
    isIconPrecomposed: true,

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    models: [ 'ContactModel' ],
    stores: [ 'ContactStore' ],
    views: [ 'MainView' ],
    controllers: [ 'ApplicationController' ],

    viewport: {
        autoMaximize: true
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Commutalize.view.MainView'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    updateUrl: function(url) {
        // Convenience function for updating the URL location hash
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', { url: url }));
    }
});
