Ext.define('Commutalize.controller.ApplicationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'view-main',

            buttonCommute: '#btn-commute',
            buttonGroup: '#btn-group',
            buttonFriend: '#btn-friend',
            buttonInvite: '#btn-invite',
            buttonPersonal: '#btn-personal',
            buttonSetting: '#btn-setting',
            buttonTerms: '#btn-terms',
            buttonPolicy: '#btn-policy',
            buttonAbout: '#btn-about',

            buttonCommuteNew: '#btn-commute-new',

            buttonGroupNew: '#btn-group-new',
            fieldGroupSearch: '#field-group-search',

            editButton: '#editButton',
            listContact: 'view-contact',
            showContact: 'view-contact-show',
            editContact: 'view-contact-edit',
            saveButton: '#saveButton'
        },

        control: {
            main: { push: 'onViewPush', pop: 'onViewPop' },

            buttonCommute: { tap: 'onHomeButtonTap' },
            buttonGroup: { tap: 'onHomeButtonTap' },
            buttonFriend: { tap: 'onHomeButtonTap' },
            buttonInvite: { tap: 'onHomeButtonTap' },
            buttonPersonal: { tap: 'onHomeButtonTap' },
            buttonSetting: { tap: 'onHomeButtonTap' },
            buttonTerms: { tap: 'onHomeButtonTap' },
            buttonPolicy: { tap: 'onHomeButtonTap' },
            buttonAbout: { tap: 'onHomeButtonTap' },

            buttonCommuteNew: { tap: 'onCommuteNewButtonTap' },

            buttonGroupNew: { tap: 'onGroupNewButtonTap' },
            fieldGroupSearch: { clearicontap: 'onGroupSearchClearIconTap', keyup: 'onGroupSearchKeyUp' },
            listGroupSelect: { itemtap: 'onGroupSelect' },

            listContact: { itemtap: 'onContactSelect' },
            editButton: { tap: 'onContactEdit' },
            saveButton: { tap: 'onContactSave' },
            editContact: { change: 'onContactChange' }
        }
    },

    onViewPush: function(view, item) {
        if (item.xtype) {
            if (item.xtype == 'view-commute-form') {
                this.hideButton('btn-commute-new');
            }
        }
    },

    onViewPop: function(view, item) {
        if (item.xtype) {
            if (item.xtype == 'view-commute-form') {
                this.showButton('btn-commute-new', 'normal', 'add1');
            }
        }
    },

    showButton: function(id, ui, iconCls) {
        if (!id) { return }
        if (!ui) { ui = 'normal' }
        if (!iconCls) { iconCls = 'add1' }
        var button = Ext.create('Ext.Button', {
            id: id,
            ui: ui,
            align: 'right',
            iconMask: true,
            iconCls: iconCls,
            hide: true,
            hideAnimation: Ext.os.is.Android
                ? false : Commutalize.util.Config.getFadeOut(),
            showAnimation: Ext.os.is.Android
                ? false : Commutalize.util.Config.getFadeIn()
        });
        Ext.Viewport.getActiveItem().getNavigationBar().add(button);
        button.show();
    },

    hideButton: function(id) {
        if (!id) { return }
        button = Ext.getCmp(id);
        if (button) {
            button.hide();
            Ext.Viewport.getActiveItem().getNavigationBar().remove(button);
        }
    },

    onHomeButtonTap: function(button) {
        var action = 'Main';
        if (button === this.getButtonCommute()) { action = 'Commute'; }
        else if (button === this.getButtonGroup()) { action = 'Group'; }
        else if (button === this.getButtonFriend()) { action = 'Friend'; }
        else if (button === this.getButtonInvite()) { action = 'Invite'; }
        else if (button === this.getButtonPersonal()) { action = 'Personal'; }
        else if (button === this.getButtonSetting()) { action = 'Setting'; }
        else if (button === this.getButtonTerms()) { action = 'Terms'; }
        else if (button === this.getButtonPolicy()) { action = 'Policy'; }
        else if (button === this.getButtonAbout()) { action = 'About'; }

        var view = Ext.create('Commutalize.view.' + action + 'View');
        this.getMain().push(view);
    },

    onCommuteNewButtonTap: function(button) {
        var view = Ext.create('Commutalize.view.Commute.FormView');
        this.getMain().push(view);
    },

    onGroupNewButtonTap: function(button) {
        Ext.Msg.alert('Alert', 'New Group!');
        console.log('onGroupNewButtonTap');
    },

    onGroupSearchKeyUp: function(field) {
        var value = field.getValue(),
            store = Ext.getCmp('view-group').getStore();

        store.clearFilter();

        if (value) {
            var searches = value.split(' '), regexps = [], i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) {
                    continue;
                }

                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('name').match(search)
                            || record.get('location').match(search);

                    matched.push(didMatch);

                }               

                if ((regexps.length > 1) && (matched.indexOf(false) != -1)) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },

    onGroupSearchClearIconTap: function() {
        Ext.getCmp('view-group').getStore().clearFilter();
    },

    onGroupSelect: function(list, index, node, record) {
        var editButton = this.getEditButton();
        if (!this.showContact) {
            this.showContact = Ext.create('Commutalize.view.contact.ShowView');
        }
        this.showContact.setRecord(record);
        this.getMain().push(this.showContact);
    },

    onContactEdit: function() {
        if (!this.editContact) {
            this.editContact = Ext.create('Commutalize.view.contact.EditView');
        }
        this.editContact.setRecord(this.getShowContact().getRecord());
        this.getMain().push(this.editContact);
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();
        this.getShowContact().updateRecord(record);
        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();
        if (!editButton.isHidden()) { return; }
        this.hideSaveButton();
        editButton.show();
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();
        if (editButton.isHidden()) { return; }
        editButton.hide();
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();
        if (!saveButton.isHidden()) { return; }
        saveButton.show();
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();
        if (saveButton.isHidden()) { return; }
        saveButton.hide();
    }
});
