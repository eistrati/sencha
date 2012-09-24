Ext.define("Commutalize.view.TermsView", {
    extend: 'Ext.Container',
    xtype: 'view-terms',
    id: 'view-terms',

    config: {
        title: '#terms',
        layout: 'card',

        cls: 'card',
        padding: 10,
        html: 'The title component has a slide up animation, and the ' +
            'button on the right has a fade animation with 500ms delay'
    }
});
