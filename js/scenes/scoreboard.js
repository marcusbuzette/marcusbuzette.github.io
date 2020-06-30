class Scoreboard {

	constructor () {}
	setup () {
		this.ranking = ranking
		this.titleY = 100
		this._drawBg();
		this._drawText();
		buttons.push(new Button('Voltar', width/2 , height - 75, 'menu'));
	}

	draw() {
		this._btns();
		if (ranking !== this.ranking) {
			this.ranking = ranking
			this._drawText();
		}
		
	}



	_drawBg () {
		image(imgMenu, 0, 0, width, height);
	}

	_btns() {
	    buttons.forEach(btn => {
	      btn.draw();
	    })
	}

	_drawText () {
		fill(0)
		const heightFirst = height / 5
		textFont(fontMenu)
		textAlign(CENTER)
		textSize(100)
		text('Top 10', width/2, this.titleY);

		this.ranking.forEach((position, index) => {
			textSize(40)
			textAlign(LEFT)
			text((index) + ' - ' + position.name,
				width/4, this.titleY + (index + 1) * 45);
			textAlign(RIGHT)
			text(position.points, 3*width/4, this.titleY + (index + 1) * 45)
		})



		// console.log(ranking)
	}
}