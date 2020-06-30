class Credits {

	constructor() {
	}

	setup() {
		this._drawBg()
		textSize(40)
		textAlign(CENTER)
		text('Jogo desenvolvido por Marcus Buzette', width/2, 200)
		text('para a semana de Imersao Alura Game Dev',width/2, 250)

		text('Sprites por: PIPOYA FREE 2D Game Character Sprites', width/2, 350)
		text('Musica por: VGcomposer',width/2, 400)
		buttons.push(new Button('Voltar', width/2 , height - 75, 'menu'));

	}

	draw() {
		this._btns();
	}

	_drawBg () {
		image(imgMenu, 0, 0, width, height);
	}

	_btns() {
	    buttons.forEach(btn => {
	      btn.draw();
	    })
	}
}