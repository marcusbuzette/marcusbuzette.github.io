class GameOver {
	constructor() {
	}

	setup() {
		musicGame.stop();
		gameOverMusic.play();
		if (parseInt(points.points) > ranking[10].points) {
			this.newRecord = true
		} else {
			this.newRecord = false
		}
		image(gameOverImg, (width - 400) / 2, 100)
		this.posicao = this.getPosicao(points.points)
		if(this.newRecord) {
			textSize(75)
			fill(255)
			textAlign(CENTER)
			text('NOVO RECORDE!', width/2, 260)
			textSize(53)
			text(parseInt(points.points) + ' Pontos', width/2, 320)
			textSize(27)
			text('Voce entrou para a tabela de recordes', width/2, 380)
			text('na posicao: ' + this.posicao , width/2, 400)

			textSize(20)
			text('Informe seu apelido para salvar sua colocacao', width/2, 450)
			textSize(50)
			input = createInput();
  			input.position(width/3, 490);
  			submit = createButton('Enviar')
			submit.addClass('botao-tela-inicial');
			submit.position(width/3 + 200, 470);
		} else {
			textSize(60)
			fill(255)
			text(parseInt(points.points) + ' Pontos', width/2, 320)
		}
		buttons.push(new Button('Jogar Novamente', width/3 , height - 150, 'preGame'));
		buttons.push(new Button('Menu', 2*width/3 , height - 75, 'menu'));
	}

	draw() {
		this._btns();
		submit.mousePressed(() => {
			this.updateRanking();
			buttons.forEach(bt => {
				bt.btn.remove()
			})
			submit.remove();
			input.remove();
			buttons = [];
			gameScenes['scoreboard'].setup();
			GAME_STATUS = 'scoreboard'
		})
	}

	_btns() {
	    buttons.forEach(btn => {
	      btn.draw();
	    })
	}

	keyPressed(key) {
		if (!this.newRecord) {
			if (key === 'r') {
				game.setup();
				preGame.setup();
				GAME_STATUS = PRE_GAME

			}
		}
	}

	getPosicao(points) {
		for(let i = 1; i < ranking.length; i++) {
			if(parseInt(points) > parseInt(ranking[i].points)) {
				return i;
			}
		}
	}

	updateRanking() {
		const objToPush = {
			name: input.value().substr(0,12),
			points: parseInt(points.points)
		}
		ranking.splice(this.posicao, 0 , objToPush)
		let newRanking = ranking.slice(0,11);

		for(let i = 1; i < ranking.length; i++) {
			dbRefObject.child(i).set(newRanking[i])
		}
	}

}