const {ipcRenderer: ipc} = require('electron');
const {app} = require('electron').remote;
const log = require('electron-log');
const {ArcElectronDrive} = require('@advanced-rest-client/electron-drive/renderer');
const {OAuth2Handler} = require('@advanced-rest-client/electron-oauth2/renderer');
const {WorkspaceManager} = require('@advanced-rest-client/arc-electron-preferences/renderer');
const {ArcPreferencesProxy} = require('@advanced-rest-client/arc-electron-preferences/renderer');
const {ThemeManager} = require('@advanced-rest-client/arc-electron-sources-manager/renderer');
const {SocketRequest} = require('@advanced-rest-client/electron-request');
const {CookieBridge} = require('@advanced-rest-client/electron-session-state/renderer');
const {ArcContextMenu} = require('./context-menu');
const setImmediateFn = setImmediate;
const versions = process.versions;
process.once('loaded', () => {
  global.ipcRenderer = ipc;
  global.ipc = ipc;
  global.ArcElectronDrive = ArcElectronDrive;
  global.OAuth2Handler = OAuth2Handler;
  global.WorkspaceManager = WorkspaceManager;
  global.ArcPreferencesProxy = ArcPreferencesProxy;
  global.ThemeManager = ThemeManager;
  global.ArcContextMenu = ArcContextMenu;
  global.SocketRequest = SocketRequest;
  global.CookieBridge = CookieBridge;
  global.log = log;
  global.setImmediate = setImmediateFn;
  global.versionInfo = {
    chrome: versions.chrome,
    appVersion: app.getVersion()
  };
});
