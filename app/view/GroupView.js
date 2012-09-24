Ext.define("Commutalize.view.GroupView", {
    extend: 'Ext.List',
    xtype: 'view-group',
    id: 'view-group',

    requires: [
        'Ext.field.Search'
    ],

    config: {
        title: '#group',
        disableSelection: true,
        onItemDisclosure: true,
        sorter: 'name',
        //grouped: true,
        //indexBar: true,

        //store: Commutalize.store.GroupStore,

        data: [
            { name: 'Lorem epsilum tralala yummy dummy in my tummy', location: 'Foster City, CA' },
            { name: 'Epsilum lorem yummy dummy in my tummy', location: 'Redwood City, CA' },
            { name: 'Lorem epsilum tralala yummy', location: 'San Carlos, CA' }
        ],

        items:[
            {
                xtype: 'searchfield',
                id: 'field-group-search',
                docked: 'bottom',
                placeHolder: 'Search through all nearby groups'
            }
        ],

        emptyText: '<div class="empty">This list is empty! No groups at this point.</div>',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="group-name">{name:ellipsis(30, true)}</div>',
            '<div class="group-location">{location:ellipsis(20, true)}</div>',
            '<div class="clear"></div>'
        )

        /*itemTpl: Ext.create('Ext.XTemplate',
            '<div><strong>{lname:this.toUpper}</strong>, {fname}</div>', {
            toUpper: function (item) {
                return item.toUpperCase();
            }
        })*/

        /*itemTpl: Ext.create('Ext.XTemplate',
            '<div class="run">',
                '<img src="https://graph.facebook.com/{profileId}/picture?type=square" />',
                '<div class="info"><b>{name}</b> jogged <b>{distance} miles</b></div>',
                '<div class="location">{location}</div>',
                '<div class="time">{[this.timeAgoInWords(values.date)]}</div>',
            '</div>',
            {
                timeAgoInWords: function(date) {
                    try {

                        var now = Math.ceil(Number(new Date()) / 1000),
                            dateTime = Math.ceil(Number(date) / 1000),
                            diff = now - dateTime,
                            str;

                        if (diff < 0) {
                            diff = -diff;
                        }

                        if (diff < 86400) {
                            return 'Today';
                        } else if (diff < 60*60*24*365) {
                            str = String(Math.ceil(diff / (60 * 60 * 24)));
                            return str + (str == "1" ? ' day' : ' days') + ' ago';
                        } else {
                            return Ext.Date.format(new Date(date), 'jS M \'y');
                        }
                    } catch(e) {
                        return '';
                    }
                }
            }
        )*/
    },

    initialize: function() {
        this.callParent();
        var button = Ext.create('Ext.Button', {
            id: 'btn-group-new',
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
        var button = Ext.getCmp('btn-group-new');
        if (button) {
            button.hide();
            Ext.Viewport.getActiveItem().getNavigationBar().remove(button);
        }
    }
});
