class Button {
	constructor(text, x, y, action, submit) {
		this.text = text;
		this.posX = x;
		this.posY = y;
		this.action = action;
		this.btn = createButton(this.text)
		this.btn.addClass('botao-tela-inicial');
	}




	draw() {
		this.btn.position(this.posX, this.posY)
		this.btn.center('horizontal');
		this.btn.mousePressed(() => {
			if (submit) {
				input.remove();
				submit.remove();
			}
			buttons.forEach(bt => {
				bt.btn.remove()
			})
			buttons = [];
			gameScenes[this.action].setup();
			GAME_STATUS = this.action
		})
	}

}