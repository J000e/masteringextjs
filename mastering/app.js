Ext.application({
    name: 'Packt',

    requires: [
        'Packt.view.Login',
        'Ext.form.Panel',
        'Ext.window.Window'
    ],

    views: [
        'Packt.view.Login'
    ],

    splashscreen: {},
/*
    init: function() {
        splashscreen = Ext.getBody().mask('Loading applicatio', 'splashscreen');
        splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
*/
    launch: function() {
/*
        var task = new Ext.util.DelayedTask(function() {

            splashscreen.fadeOut({
                duration: 2000,
                remove: true
            });
            
            splashscreen.next().fadeOut({
                duration: 2000,
                remove: true,
                listeners: {
                   afteranimate: function(el, startTime, eOpts) {
                      console.log('Should start login widget');
                      Ext.widget('login');
                   }
                }
            })
        });

        task.delay(2000);
*/
        console.log('show login page');
        Ext.widget('login');
    }
});
