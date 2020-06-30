class Controls {
	constructor() {

	}

	setup() {
		this._drawBg();
		textSize(40)
		textAlign(CENTER)
		text('Utilize as setas direcionais para mover,', width/2, 200)
		text('pular e aterrisar a personagem',width/2, 250)

		text('Aperte R para restart', width/2, 350)
		text('Tente pular em cima dos inimigos ',width/2, 400)
		text('para ganhar mais pontos! ',width/2, 430)
		buttons.push(new Button('Voltar', width/2 , height - 75, 'menu'));
	}

	draw() {
		this._btns();
	}

	_btns() {
	    buttons.forEach(btn => {
	      btn.draw();
	    })
	}

	_drawBg () {
		image(imgMenu, 0, 0, width, height);
	}


}