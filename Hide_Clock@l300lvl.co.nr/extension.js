const Config = imports.misc.config
const Main = imports.ui.main

function init(metadata) {
    let current_version = Config.PACKAGE_VERSION.split('.')
    if (current_version.length != 3 || current_version[0] != 3) throw new Error("Strange version number (extension.js:9).")
    
    switch (current_version[1]) {
        case"3": global.log("Warning of extension [" + metadata.uuid + "]:\n              Old development release detected (" + Config.PACKAGE_VERSION + "). You should upgrade!\n")   //eak
        case"4": age = "old"
            break
        case"5": global.log("Warning of extension [" + metadata.uuid + "]:\n              Development release detected (" + Config.PACKAGE_VERSION + "). Loading as a 3.6 release.\n") //eak
        case"6": age = "new"
            break
        default: throw new Error("Strange version number (extension.js:18).")
    }
}

function disable() {
    let thing
    if (age=="old") menu = Main.panel._dateMenu
    else            menu = Main.panel.statusArea.dateMenu
    menu.actor.show()
}

function enable() {
    let thing
    if (age=="old") menu = Main.panel._dateMenu
    else            menu = Main.panel.statusArea.dateMenu
    menu.actor.hide()
}
