const Main = imports.ui.main;

function init() {
}

function disable() {
        Main.panel._dateMenu.actor.show();
}

function enable() {
        Main.panel._dateMenu.actor.hide();
}
