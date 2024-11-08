# NeutronChatClient

A simple desktop app for hosting or joining local network chat rooms. This project is made with the [Neutron Framework](https://github.com/NeutronFramework/Neutron)

# Build instructions

Install `neutroncli`
```
choco install neutroncli
```

Enable Webview loopback with an elevated PowerShell
```
CheckNetIsolation LoopbackExempt -a -n="Microsoft.win32webviewhost_cw5n1h2txyewy
```

Build it with
```
neutroncli build
```

For more info you can visit the Neutron Framework's github repo