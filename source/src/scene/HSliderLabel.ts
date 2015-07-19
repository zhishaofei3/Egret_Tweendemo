module game
{
    export class HSliderLabele extends egret.gui.SkinnableComponent
    {
        public constructor()
        {
            super();
            this.skinName = skins.scene.HSliderLabelSkin;
        }

        public labelText: string = "";
        public minimum: number = 0;
        public maximum: number = 500;
        public value: number = 0;

        private label: egret.gui.Label;
        private hSlider: egret.gui.HSlider;

        public getValue():number
        {
            return this.hSlider.value;
        }

        public childrenCreated()
        {
            super.childrenCreated();
            this.hSlider.minimum = this.minimum;
            this.hSlider.maximum = this.maximum;
            this.hSlider.setValue(this.value);
            this.hSlider.addEventListener(egret.Event.CHANGE, this.onChange, this);
            this.label.text = this.labelText + ":" + this.hSlider.value.toString();
        }

        /*
        * 更改显示的值
        * */
        private onChange(event: egret.Event): void
        {
            var slider: egret.gui.SliderBase = <egret.gui.SliderBase>event.currentTarget;

            this.label.text = this.labelText + ":" + slider.value.toString();
        }
    }
} 