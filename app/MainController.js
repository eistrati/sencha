Ext.define('Commutalize.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        xtype: 'ctrl-main',
        refs: {
            back: '#btn-back',
            home: '#btn-home',
            commute: '#btn-commute',
            commuteNew: '#btn-commute-new',
            commuteSave: '#btn-commute-save',
            commuteSubmit: '#btn-commute-submit',
            group: '#btn-group',
            friend: '#btn-friend',
            invite: '#btn-invite',
            personal: '#btn-personal',
            setting: '#btn-setting',
            terms: '#btn-terms',
            policy: '#btn-policy',
            about: '#btn-about',
            commuteForm: '#view-commute-form',
            commuteSubmit: '#btn-commute-submit',
            groupSearch: '#field-group-search'
        }
    },

    init: function() {
        var me = this;
        this.app = this.getApplication();
        this.app.vp = Ext.Viewport;

        this.control({
            'back': { tap: 'onBackButtonTap' },
            'home': { tap: 'onHomeButtonTap' },
            'commute': { tap: 'onHomeButtonTap' },
            'commuteNew': { tap: 'onCommuteNew' },
            'commuteSave': { tap: 'onCommuteSubmit' },
            'commuteSubmit': { tap: 'onCommuteSubmit' },
            'group': { tap: 'onHomeButtonTap' },
            'friend': { tap: 'onHomeButtonTap' },
            'invite': { tap: 'onHomeButtonTap' },
            'personal': { tap: 'onHomeButtonTap' },
            'setting': { tap: 'onHomeButtonTap' },
            'terms': { tap: 'onHomeButtonTap' },
            'policy': { tap: 'onHomeButtonTap' },
            'about': { tap: 'onHomeButtonTap' },
            'groupSearch': {
                clearicontap: 'onSearchClearIconTap', 
                keyup: 'onSearchKeyUp'
            }
        });

        console.log("MainController.init()");
        //this.setHistory(this.getApplication().getHistory());
    },

    addToHistory: function(id) {
        this.getHistory().add(new Ext.app.Action({ url: id }), true);
        //this.getApplication().getHistory().add(new Ext.app.Action({ url: id }), true);
    },

    onBackButtonTap: function(button) {
        console.log(this.getApplication().getHistory(-1));
    },

    onHomeButtonTap: function(button) {
        var action = 'Main',
            animation = { type: 'slide', direction: 'right' };

        if (button === this.getCommute()) { action = 'Commute'; }
        else if (button === this.getGroup()) { action = 'Group'; }
        else if (button === this.getFriend()) { action = 'Friend'; }
        else if (button === this.getInvite()) { action = 'Invite'; }
        else if (button === this.getPersonal()) { action = 'Personal'; }
        else if (button === this.getSetting()) { action = 'Setting'; }
        else if (button === this.getTerms()) { action = 'Terms'; }
        else if (button === this.getPolicy()) { action = 'Policy'; }
        else if (button === this.getAbout()) { action = 'About'; }
        else { animation.direction = 'left'; }

        console.log('onHomeButtonTap: ' + action.toLowerCase());
        Commutalize.app.updateUrl(action.toLowerCase());
        var view = Ext.create('Commutalize.view.' + action + 'View');
        this.app.vp.add(view);
        this.app.vp.setActiveItem(view, animation);
    },

    onCommuteNew: function(button) {
        var action = 'Commute.Form',
            animation = { type: 'slide', direction: 'right' };
        Commutalize.app.updateUrl(action.toLowerCase());
        var view = Ext.create('Commutalize.view.' + action + 'View');
        this.app.vp.add(view);
        this.app.vp.setActiveItem(view, animation);
    },

    onCommuteSubmit: function(button) {
        var values = this.getCommuteForm().getValues();
        Ext.Msg.alert('Alert', values);
        console.log(values);
    },

    onSearchKeyUp: function(field) {
        var value = field.getValue(),
	        store = Ext.getCmp('list-group').getStore();

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

    onSearchClearIconTap: function() {
        Ext.getCmp('list-group').getStore().clearFilter();
    }
});
