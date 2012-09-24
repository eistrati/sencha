Ext.define("Commutalize.view.CommuteView", {
    extend: 'Ext.dataview.DataView',
    xtype: 'view-commute',
    id: 'view-commute',

    requires: [
        'Commutalize.view.Commute.FormView',
        'Commutalize.view.Commute.ItemView'
    ],

    config: {
        title: '#commute',
        useComponents: true,
        cls: 'commute-list',
        layout: { type: 'fit', align: 'center' },
        defaultType: 'view-commute-item',

        store: {
            //autoLoad: true,
            fields: [
                { name: "text", type: 'string' },
                { name: "status", type: 'int' }
            ],
            data: [
                { text: '<div class="commute-from">1559 Beach Park Blvd</div><div class="commute-to">2030 Addison Street</div>', status: 0 },
                { text: '<div class="commute-from">1559 Beach Park Blvd</div><div class="commute-to">2030 Addison Street</div>', status: 1 },
                { text: '<div class="commute-from">2030 Addison Street</div><div class="commute-to">1559 Beach Park Blvd</div>', status: 0 },
            ]/*,
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=Sencha Touch',
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }*/
        }
    },

    initialize: function() {
        this.callParent();
        var button = Ext.create('Ext.Button', {
            id: 'btn-commute-new',
            ui: 'normal',
            align: 'right',
            iconMask: true,
            iconCls: 'add1',
            hide: true,
            hideAnimation: Ext.os.is.Android
                ? false : Commutalize.util.Config.getFadeOut(),
            showAnimation: Ext.os.is.Android
                ? false : Commutalize.util.Config.getFadeIn()
        });
        if (button) {
            Ext.Viewport.getActiveItem().getNavigationBar().add(button);
            button.show();
        }
    },

    destroy: function() {
        this.callParent();
        var button = Ext.getCmp('btn-commute-new');
        if (button) {
            button.hide();
            Ext.Viewport.getActiveItem().getNavigationBar().remove(button);
        }
    }
});
