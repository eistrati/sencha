Ext.define("Commutalize.view.PersonalView", {
    extend: 'Ext.Container',
    xtype: 'view-personal',
    id: 'view-personal',

    config: {
        title: '#personal',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    }
});
