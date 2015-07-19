var game;
(function (game) {
    var HSliderLabele = (function (_super) {
        __extends(HSliderLabele, _super);
        function HSliderLabele() {
            _super.call(this);
            this.labelText = "";
            this.minimum = 0;
            this.maximum = 500;
            this.value = 0;
            this.skinName = skins.scene.HSliderLabelSkin;
        }
        var __egretProto__ = HSliderLabele.prototype;
        __egretProto__.getValue = function () {
            return this.hSlider.value;
        };
        __egretProto__.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.hSlider.minimum = this.minimum;
            this.hSlider.maximum = this.maximum;
            this.hSlider.setValue(this.value);
            this.hSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);
            this.label.text = this.labelText + ":" + this.hSlider.value.toString();
        };
        /*
        * 更改显示的值
        * */
        __egretProto__.onChange = function (event) {
            var slider = event.currentTarget;
            this.label.text = this.labelText + ":" + slider.value.toString();
        };
        return HSliderLabele;
    })(egret.gui.SkinnableComponent);
    game.HSliderLabele = HSliderLabele;
    HSliderLabele.prototype.__class__ = "game.HSliderLabele";
})(game || (game = {}));
