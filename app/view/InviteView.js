Ext.define("Commutalize.view.InviteView", {
    extend: 'Ext.Container',
    xtype: 'view-invite',
    id: 'view-invite',

    config: {
        title: '#invite',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    }
});
