import "./imported.ts";

const handler = (e: Event) => {
    console.log(`got ${e.type} event in event handler {main}`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event) => {
    console.log(`got ${e.type} event in onload function {main}`);
};

window.onunload = (e: Event) => {
    console.log(`got ${e.type} event in in onunload function {main}`);
};

console.log('log from the main');
