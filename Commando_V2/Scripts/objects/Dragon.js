var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Dragon class
    var Dragon = (function (_super) {
        __extends(Dragon, _super);
        function Dragon() {
            _super.call(this, managers.Assets.enemyAtlas, "dragon");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            stage.addChild(this);

            this.reset();
        }
        //update the position
        Dragon.prototype.update = function () {
            this.y -= this.dy;
            this.x -= this.dx;
            if (this.x < -500 + this.width) {
                this.reset();
            }
        };

        //reset the position
        Dragon.prototype.reset = function () {
            this.y = Math.floor(Math.random() * stage.canvas.height * 0.5);
            this.x = Math.floor(Math.random() + stage.canvas.width * 1.8);
            this.dy = Math.floor(Math.random() * 2);
            this.dx = Math.floor(Math.random() * 2 + 7);
        };
        return Dragon;
    })(createjs.Sprite);
    objects.Dragon = Dragon;
})(objects || (objects = {}));
//# sourceMappingURL=Dragon.js.map
