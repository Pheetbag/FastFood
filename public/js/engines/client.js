//global object "client". control all client actions.
function ClientController() {
  //This take all param values from the config object, so any change you wants to make in the generation engine should be made in the config object.

  this.quantity = 0;
  this.totalQuantity;
  this.lastGeneration;

  //array with the list of active clients.
  this.list = [null, null, null, null];

  /** @type any */
  this.new = function () {
    //create a new client after making the evaluation, this is activated by the game cicle.

    this.list[this.quantity] = new Client();
    this.quantity++;
    this.lastGeneration = cicle.current;
    console.log(this.list[this.quantity - 1]);
  };

  /** @type any */
  this.evaluate = function () {
    if (this.quantity >= config.clientMaxQuantity) {
      return false;
    }

    if (cicle.current - this.lastGeneration < config.clientTimeSpacing) {
      return false;
    }
    if (
      tools.random(0, 100) > config.clientRandomChance &&
      config.clientRandom == true
    ) {
      this.lastGeneration = cicle.current;
      return false;
    }

    return true;
  };
}

function Client() {
  //id will work todefine what kind of client we generate,so it will refer to the asset defining the texture.
  this.id = tools.random(0, 26);
  this.level = game.level;
  this.state = "waiting";

  this.face = game.assets[config.defaultAsset].textureMap.client[this.id];
  this.patience = tools.random(
    config.clientMinPatience,
    config.clientMaxPatience,
  );

  this.wish = new ClientWish();

  Client.prototype.generate = function () {};
}

function ClientWish() {
  this.list;
  this.state;

  ClientWish.prototype.generate = function () {};
}
