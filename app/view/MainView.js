Ext.define('Commutalize.view.MainView', {
    extend: 'Ext.navigation.View',
    xtype: 'view-main',

    requires: [
        'Commutalize.view.CommuteView',
        'Commutalize.view.GroupView',
        'Commutalize.view.FriendView',
        'Commutalize.view.InviteView',
        'Commutalize.view.PersonalView',
        'Commutalize.view.SettingView',
        'Commutalize.view.TermsView',
        'Commutalize.view.PolicyView',
        'Commutalize.view.AboutView'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                title: '#commutalize',
                layout : { type: 'vbox', pack: 'top', align: 'middle' },

                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',

                        defaults: {
                            width: Commutalize.util.Config.getBtnHomeWidth(),
                            height: Commutalize.util.Config.getBtnHomeHeight(),
                            flex: 1
                        },

                        items: [
                            {
                                xtype: 'button',
                                id: 'btn-commute',
                                label: 'My Commutes',
                                cls: 'icon-commute'//, text: 'Commutes'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-group',
                                cls: 'icon-group'//, text: 'Groups'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-friend',
                                cls: 'icon-friend'//, text: 'Friends'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',

                        defaults: {
                            width: Commutalize.util.Config.getBtnHomeWidth(),
                            height: Commutalize.util.Config.getBtnHomeHeight(),
                            flex: 1
                        },

                        items: [
                            {
                                xtype: 'button',
                                id: 'btn-invite',
                                cls: 'icon-invite'//, text: 'Invite'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-personal',
                                cls: 'icon-personal'//, text: 'Personal'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-setting',
                                cls: 'icon-setting'//, text: 'Setting'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',

                        defaults: {
                            width: Commutalize.util.Config.getBtnHomeWidth(),
                            height: Commutalize.util.Config.getBtnHomeHeight(),
                            flex: 1
                        },

                        items: [
                            {
                                xtype: 'button',
                                id: 'btn-terms',
                                cls: 'icon-terms'//, text: 'Terms'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-policy',
                                cls: 'icon-policy'//, text: 'Policies'
                            },
                            {
                                xtype: 'button',
                                id: 'btn-about',
                                cls: 'icon-about'//, text: 'About'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
