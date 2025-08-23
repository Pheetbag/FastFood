// this file should start to slowly take responsibility out of the app.js and start being the
// current entrypoint for the codebase.

//initialize default assets
assets.set(ff.defaultAsset);

//------- WE SET ITEMS IN INVENTORY
for (let i = 0; i < 20; i++) {
  scene.set("menu", game.assets[0].itemSet[i]);
}

//it setup all the scene, including reactions, and objects
scene.setup();

//turn on the cicle engine after everything is defined on the code
cicle.action("set");
