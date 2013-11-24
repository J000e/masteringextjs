Ext.define('Packt.Application', {
    name: 'Packt',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.form.Panel',
        'Ext.window.Window',
        'Ext.menu.Menu',
        'Ext.form.Label',
        'Ext.data.proxy.Ajax',
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.File'
    ],

    views: [
        'Login'
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ]
});
