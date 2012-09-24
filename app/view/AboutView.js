Ext.define("Commutalize.view.AboutView", {
    extend: 'Ext.Container',
    xtype: 'view-about',
    id: 'view-about',

    config: {
        title: '#about',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    },

    initialize: function() {
        this.callParent();
        console.log('AboutView: initialize');
    }
});
