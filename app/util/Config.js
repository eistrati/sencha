Ext.define('Commutalize.util.Config', {
    singleton: true,

    config: {
        baseUrl: 'http://m.commutalize.com/',

        btnHomeWidth: 101,
        btnHomeHeight: 101,

        fadeIn: { type: 'fadeIn', duration: 200 },
        fadeOut: { type: 'fadeOut', duration: 200 },

        slideLeft: { type: 'slide', direction: 'left' },
        slideRight: { type: 'slide', direction: 'right' }
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});
