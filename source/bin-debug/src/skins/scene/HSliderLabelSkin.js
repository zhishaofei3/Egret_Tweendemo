var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var HSliderLabelSkin = (function (_super) {
            __extends(HSliderLabelSkin, _super);
            function HSliderLabelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [300, 400]);
                this.elementsContent = [this.label_i(), this.hSlider_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = HSliderLabelSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return HSliderLabelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.label_i = function () {
                var t = new egret.gui.Label();
                this.label = t;
                this.__s(t, ["left", "right", "size", "text", "y"], [0, 0, 18, "标签", 11]);
                return t;
            };
            __egretProto__.hSlider_i = function () {
                var t = new egret.gui.HSlider();
                this.hSlider = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 27]);
                return t;
            };
            HSliderLabelSkin._skinParts = ["label", "hSlider"];
            return HSliderLabelSkin;
        })(egret.gui.Skin);
        scene.HSliderLabelSkin = HSliderLabelSkin;
        HSliderLabelSkin.prototype.__class__ = "skins.scene.HSliderLabelSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
