/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => SearchEverywherePlugin
});
var import_obsidian = __toModule(require("obsidian"));
var lastKeyupTime = 0;
var lastKeyWasShifted;
function openSearchWhenDoubleShift(event, app) {
  let key = event.key;
  if (key !== "Shift") {
    lastKeyupTime = 0;
    return;
  }
  if (lastKeyWasShifted) {
    lastKeyWasShifted = false;
    return;
  }
  if (Date.now() - lastKeyupTime < 500) {
    lastKeyupTime = 0;
    simulateSearchHotkey(app);
    return;
  }
  lastKeyupTime = Date.now();
}
function clearTimerWhenShifted(event) {
  let key = event.key;
  let shiftKey = event.shiftKey;
  if (key !== "Shift" && shiftKey === true) {
    lastKeyWasShifted = true;
  }
}
function simulateSearchHotkey(app) {
  app.commands.executeCommandById("global-search:open");
}
var SearchEverywherePlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerDomEvent(window, "keyup", (event) => openSearchWhenDoubleShift(event, this.app));
      this.registerDomEvent(window, "keydown", (event) => clearTimerWhenShifted(event));
    });
  }
};
