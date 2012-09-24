Ext.define("Commutalize.view.SettingView", {
    extend: 'Ext.Container',
    xtype: 'view-setting',
    id: 'view-setting',

    config: {
        title: '#setting',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    }
});
