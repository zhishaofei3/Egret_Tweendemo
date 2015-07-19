 	//是否循环
        var isloop: boolean = this.isloopCheckBox.selected;
	//毫秒
        var duration: number = this.durationSlider.getValue();
	//下个动画等待时间 如果不循环，设置为0
        var waited: number = 500; 
	//缓动类型
        var ease: Function = this.dropDownList.selectedItem.ease;
	//目标X坐标
        var x_: number = this.xSlider.getValue();
	//目标Y坐标
        var y_: number = this.ySlider.getValue();
	//缩放 0-1
        var scaleX_: number = this.scaleXSlider.getValue() / 100;
	//缩放 0-1
        var scaleY_: number = this.scaleYSlider.getValue() / 100;
	//旋转0-360
        var rotation_: number = this.rotationSlider.getValue();
	//透明度0-1
        var alpha_: number = this.alphaSlider.getValue() / 100;

        var obj: Object = { x: this.jian_png.x + x_, y: this.jian_png.y + y_, alpha: alpha_, rotation: rotation_, scaleX: scaleX_, scaleY: scaleY_ };
         //等同 egret.Tween.get(this.jian_png, { loop: isloop }).to({ x: x_, y:y_, alpha: alpha_, rotation: rotation_, scaleX: scaleX_, scaleY: scaleY_ }, duration, ease).wait(waited);
        if (this.callCheckBox.selected)
        {
	    //有回调方法
            egret.Tween.get(this.jian_png, { loop: false }).to(obj, duration, ease).wait(waited).call(this.tweenComplete, this, ["tweenComplete", "param2", "param3"]);
        }
        else 
        {
	    //没有回调方法
            egret.Tween.get(this.jian_png, { loop: isloop }).to(obj, duration, ease).wait(waited);
         }