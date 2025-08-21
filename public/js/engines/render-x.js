//renderX is the new power engine for rendering, it use the amapole engine that will be defined on the core, to make the renders into the game, amapole does not deal with the action of the render in self, this fall in renderX that have the task of define a render in any scope, make the listen to the state and active the fallback, them use the amapole engine methods and tool in order to render the state into the game. renderX is just an advancement in the way we render this, is not only syntathic sugar because it will include internal features, that will make better and more automatic things with rendering. also more intuitive.

//This is the forming function of the renderX object.
function renderX(method = null){

	let newRender = new RenderX.Renderable;

	if(method != null){

		newRender.method = method;
	}
	return(newRender);
}

function RenderX(){

	this.renderables = [];

	//function that listen to all the states of the renderables, so it can detect changes and active their corresponding method
	this.listener = function(renderable){

		let gameState     = renderable.listenAt;

		//Here is a problem, this will take values as a reference, this should'nt append because when we update the gameState also the reference will be update so the value in gameStateLast will be update to. We have to resolve this problem in orden to really have a variable listener that works.
		let gameStateLast = renderable.memory;


	}

	this.listenTo    = function(renderable){

		this.renderables.push(renderable);
	}

	/** @type any */
	this.Renderable  = function(){

		this.metadata 	= {
			name : 'Unknown_render'
		}

		this.listenAt = null; //This is the state to be listen at

		this.memory   = this.listenAt;

		//this is the action that the renderable will active when it detect a change in the listen.
		this.method	  = function(){ console.log(this.metadata.name + ' ' + 'has been rendered')}

		this.listenTo = function(gameState){

			this.listenAt = gameState;
			this.memory   = gameState;

			RenderX.listenTo(this);
			return this;

		}


	}

}


var RenderX = new RenderX;

var data = renderX().listenTo();

console.log(data);
