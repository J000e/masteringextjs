Ext.define('Packt.view.Login', {
  extend: 'Ext.window.Window',
  alias: 'widget.login',

  autoshow: true,
  height: 170,
  width: 360,
  layout: {
    type: 'fit'
  },
  iconCls: 'key',
  title: 'Login',
  closeAction: 'hide',
  closeable: false,

  items: [
    {
      xtype: 'form',
      frame: false,
      bodypadding: 15,
      defaults: {
        xtype: 'textfield',
        anchor: '100%',
        labelWidth: 60,
        allowedBlank: false,
        vtype: 'alphanum',
        minLength: 3,
        msgTarget: 'under'
      },
      items: [
        {
          name: 'user',
          fieldLabel: 'User',
          maxLength: 25
        },
        {
          name: 'password',
          inputType: 'password',
          fieldLabel: 'Password',
          maxLength: 15
        }
      ]
    }
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'bottom',
 
      items: [
        {
          xtype: 'tbfill'
        },
        {
          xtype: 'button',
          itemId: 'cancel',
          iconCls: 'cancel',
          text: 'Cancel'
        },
        {
          xtype: 'button',
          itemId: 'submit',
          formBind: true,
          iconCls: 'key-go',
          text: 'Submit'
        }
      ]
    }
  ]
});
