
module objects {
    // Dragon class
    export class Dragon extends createjs.Sprite {
        image: createjs.Sprite;

        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor() {
            super(managers.Assets.enemyAtlas, "dragon");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            stage.addChild(this);

            this.reset();
        }
       

        //update the position
        update() {
            this.y -= this.dy;
            this.x -= this.dx;
            if (this.x < -500 + this.width) {
                this.reset();
            }
        }

        //reset the position
        reset() {
            this.y = Math.floor(Math.random() * stage.canvas.height * 0.5);
            this.x = Math.floor(Math.random() + stage.canvas.width * 1.8) ;
            this.dy = Math.floor(Math.random() * 2);
            this.dx = Math.floor(Math.random() * 2 + 7);
        }

    }

}