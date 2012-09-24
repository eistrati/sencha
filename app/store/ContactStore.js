Ext.define('Commutalize.store.ContactStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Commutalize.model.ContactModel',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'contacts.json'
        }
    }
});
