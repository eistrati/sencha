Ext.define('Commutalize.view.Commute.ItemView', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'view-commute-item',

    requires: [
        'Ext.field.Toggle'
    ],

    config: {
        cls: 'commute-list-item',
        autoDestroy: true,

        layout: { type: 'hbox', align: 'center' },

        dataMap: {
            getText: { setHtml: 'text' },
            getToggle: { setValue: 'status' }
        },

        text: { flex: 2 },
        toggle: { flex: 1 }
    },

    applyText: function(config) {
        return Ext.factory(config, Ext.Container, this.getText());
    },

    updateText: function(newCmp, oldCmp) {
        if (newCmp) { this.add(newCmp); }
        if (oldCmp) { this.remove(oldCmp); }
    },

    applyToggle: function(config) {
        return Ext.factory(config, Ext.field.Toggle, this.getToggle());
    },

    updateToggle: function(newCmp, oldCmp) {
        if (newCmp) { this.add(newCmp); }
        if (oldCmp) { this.remove(oldCmp); }
    }
});
