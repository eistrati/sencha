Ext.define('Commutalize.view.ContactView', {
    extend: 'Ext.List',
    xtype: 'view-contact',

    config: {
        title: 'Address Book',
        cls: 'x-list-contact',

        store: 'ContactStore',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{firstName} {lastName}',
            '<span>{title}</span>'
        ].join('')
    }
});
