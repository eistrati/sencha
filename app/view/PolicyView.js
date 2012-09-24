Ext.define("Commutalize.view.PolicyView", {
    extend: 'Ext.Container',
    xtype: 'view-policy',
    id: 'view-policy',

    config: {
        title: '#policy',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    }
});
