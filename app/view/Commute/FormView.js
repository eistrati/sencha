Ext.define("Commutalize.view.Commute.FormView", {
    extend: 'Ext.form.Panel',
    xtype: 'view-commute-form',
    id: 'view-commute-form',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Commutalize.util.DateTimePicker',
        'Commutalize.util.DateTimePickerField',
        'Commutalize.util.MultiSelect'
    ],

    config: {
        title: '#new #route',
        iconCls: 'refresh',

        items: [
            {
                xtype: 'fieldset',
                title: 'My Regular Commute',
                //instructions: 'Please enter the info above',
                items: [
                    {
                        xtype: 'searchfield',
                        name: 'addressFrom',
                        placeHolder: 'From address or cross roads',
                        autoCapitalize: true,
                        required: true,
                        clearIcon: true
                    },
                    {
                        xtype: 'searchfield',
                        name: 'addressTo',
                        placeHolder: 'To address or cross roads',
                        autoCapitalize: true,
                        required: true,
                        clearIcon: true
                    },
                    {
                        xtype: 'multiselectfield',
                        id: 'field-repeat',
                        name: 'repeat',
                        displayField: 'text', //don't change this property
                        valueField: 'value', //don't change this property
                        options: [
                            {text: 'Sunday', value: '0'},
                            {text: 'Monday', value: '1'},
                            {text: 'Tuesday', value: '2'},
                            {text: 'Wednesday', value: '3'},
                            {text: 'Thursday', value: '4'},
                            {text: 'Friday', value: '5'},
                            {text: 'Saturday', value: '6'}
                        ],
                        usePicker: false //required
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            width: '50%'
                        },

                        items: [
                            {
                                xtype: 'datetimepickerfield',
                                distroyPickerOnHide: true,
                                name: 'datetime',
                                value: new Date(2012, 2, 12, 7, 0, 0, 0),
                                dateTimeFormat: 'h:i A',
                                picker: {
                                    minuteInterval: 5,
                                    ampm: true,
                                    slotOrder: ['hour', 'minute', 'ampm']
                                }
                            },
                            {
                                xtype: 'datetimepickerfield',
                                distroyPickerOnHide: true,
                                name: 'returnDatetime',
                                value: new Date(2012, 2, 12, 19, 0, 0),
                                dateTimeFormat: 'h:i A',
                                picker: {
                                    minuteInterval: 5,
                                    ampm: true,
                                    slotOrder: ['hour', 'minute', 'ampm']
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'btn-commute-submit',
                        ui: 'confirm',
                        text: 'Submit'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
        var field = Ext.getCmp('field-repeat');
        if (field && field.getValueField() === 'value') {
            defaultValue = '1,2,3,4,5';
            field.applyValue(defaultValue);
            field.updateValue(defaultValue);
        }

        var button = Ext.create('Ext.Button', {
            id: 'btn-commute-save',
            ui: 'action',
            align: 'right',
            iconMask: true,
            iconCls: 'check2',
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
        var button = Ext.getCmp('btn-commute-save');
        if (button) {
            button.hide();
            Ext.Viewport.getActiveItem().getNavigationBar().remove(button);
        }
    }
});
