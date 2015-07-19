/**
 * 缓动类效果演示
 */

class Main extends egret.DisplayObjectContainer {

	/**
	 * 为了方便查看，我们把演示函数放在此处
	 */
	private test():void {
		this.dropDownList = new egret.gui.DropDownList();
		var dp:Array<any> = [];
		dp.push({label: "egret.Ease.sineIn", toggle: false, ease: egret.Ease.sineIn});
		dp.push({label: "egret.Ease.sineOut", toggle: false, ease: egret.Ease.sineOut});
		dp.push({label: "egret.Ease.sineInOut", toggle: false, ease: egret.Ease.sineInOut});
		dp.push({label: "egret.Ease.backIn", toggle: false, ease: egret.Ease.backIn});
		dp.push({label: "egret.Ease.backOut", toggle: false, ease: egret.Ease.backOut});
		dp.push({label: "egret.Ease.backInOut", toggle: false, ease: egret.Ease.backInOut});
		dp.push({label: "egret.Ease.circIn", toggle: false, ease: egret.Ease.circIn});
		dp.push({label: "egret.Ease.circOut", toggle: false, ease: egret.Ease.circOut});
		dp.push({label: "egret.Ease.circInOut", toggle: false, ease: egret.Ease.circInOut});
		dp.push({label: "egret.Ease.bounceIn", toggle: false, ease: egret.Ease.bounceIn});
		dp.push({label: "egret.Ease.bounceOut", toggle: false, ease: egret.Ease.bounceOut});
		dp.push({label: "egret.Ease.bounceInOut", toggle: false, ease: egret.Ease.bounceInOut});
		dp.push({label: "egret.Ease.elasticIn", toggle: false, ease: egret.Ease.elasticIn});
		dp.push({label: "egret.Ease.elasticOut", toggle: false, ease: egret.Ease.elasticOut});
		dp.push({label: "egret.Ease.elasticInOut", toggle: false, ease: egret.Ease.elasticInOut});
		dp.push({label: "egret.Ease.quadIn", toggle: false, ease: egret.Ease.quadIn});
		dp.push({label: "egret.Ease.quadOut", toggle: false, ease: egret.Ease.quadOut});
		dp.push({label: "egret.Ease.quadInOut", toggle: false, ease: egret.Ease.quadInOut});
		dp.push({label: "egret.Ease.cubicIn", toggle: false, ease: egret.Ease.cubicIn});
		dp.push({label: "egret.Ease.cubicOut", toggle: false, ease: egret.Ease.cubicOut});
		dp.push({label: "egret.Ease.cubicInOut", toggle: false, ease: egret.Ease.cubicInOut});
		dp.push({label: "egret.Ease.quartIn", toggle: false, ease: egret.Ease.quartIn});
		dp.push({label: "egret.Ease.quartOut", toggle: false, ease: egret.Ease.quartOut});
		dp.push({label: "egret.Ease.quartInOut", toggle: false, ease: egret.Ease.quartInOut});
		dp.push({label: "egret.Ease.quintIn", toggle: false, ease: egret.Ease.quintIn});
		dp.push({label: "egret.Ease.quintOut", toggle: false, ease: egret.Ease.quintOut});
		dp.push({label: "egret.Ease.quintInOut", toggle: false, ease: egret.Ease.quintInOut});

		this.dropDownList.dataProvider = new egret.gui.ArrayCollection(dp);
		this.dropDownList.selectedIndex = 0;
		this.dropDownList.x = 10;
		this.dropDownList.y = 530;
		this.dropDownList.width = 350;
		this.guiLayer.addElement(this.dropDownList);

		this.createChildren();
		this.resetPosition();
	}

	private onRunButtonClick(e:egret.TouchEvent):void {
		egret.Tween.removeTweens(this.jian_png);

		var isloop:boolean = this.isloopCheckBox.selected; //是否循环
		var duration:number = this.durationSlider.getValue(); //耗时，毫秒。 2000=2秒完成
		var waited:number = 500; //下个动画等待时间 如果不循环，设置为0
		var ease:Function = this.dropDownList.selectedItem.ease;
		var x_:number = this.xSlider.getValue();
		var y_:number = this.ySlider.getValue();
		var scaleX_:number = this.scaleXSlider.getValue() / 100;
		var scaleY_:number = this.scaleYSlider.getValue() / 100;
		var rotation_:number = this.rotationSlider.getValue();
		var alpha_:number = this.alphaSlider.getValue() / 100;

		var obj:Object = {x: this.jian_png.x + x_, y: this.jian_png.y + y_, alpha: alpha_, rotation: rotation_, scaleX: scaleX_, scaleY: scaleY_};
		//等同 egret.Tween.get(this.jian_png, { loop: isloop }).to({ x: x_, y:y_, alpha: alpha_, rotation: rotation_, scaleX: scaleX_, scaleY: scaleY_ }, duration, ease).wait(waited);
		if (this.callCheckBox.selected) { //有回调方法
			egret.Tween.get(this.jian_png, {loop: false}).to(obj, duration, ease).wait(waited).call(this.tweenComplete, this, ["tweenComplete", "param2", "param3"]);
		}
		else { //没有回调方法
			egret.Tween.get(this.jian_png, {loop: isloop}).to(obj, duration, ease).wait(waited);
		}
	}

	private tweenComplete(param1:any, param2:any, param3:any):void {
		//alert(param1);
		egret.gui.Alert.show(param1, "Alert");
	}

	private onResetButtonClick(e:egret.TouchEvent):void {
		egret.Tween.removeTweens(this.jian_png);
		this.resetPosition();
	}

	private resetPosition():void {
		this.jian_png.x = 80;
		this.jian_png.y = 160;
		this.jian_png.scaleX = 1;
		this.jian_png.scaleY = 1;
		this.jian_png.rotation = 0;
		this.jian_png.alpha = 1;

		this.guawu_png.x = 625;
		this.guawu_png.y = 150;
	}

	/**
	 * 加载进度界面
	 * loading process interface
	 */
	private loadingView:LoadingUI;

	private guawu_png:egret.Bitmap;
	private jian_png:egret.Bitmap;
	private dropDownList:egret.gui.DropDownList;

	private xSlider:game.HSliderLabele;
	private ySlider:game.HSliderLabele;
	private scaleXSlider:game.HSliderLabele;
	private scaleYSlider:game.HSliderLabele;
	private rotationSlider:game.HSliderLabele;
	private alphaSlider:game.HSliderLabele;
	private durationSlider:game.HSliderLabele;
	private isloopCheckBox:egret.gui.CheckBox;
	private callCheckBox:egret.gui.CheckBox;


	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event:egret.Event) {
		//inject the custom material parser
		//注入自定义的素材解析器
		egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
		// load skin theme configuration file, you can manually modify the file. And replace the default skin.
		//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
		egret.gui.Theme.load("resource/theme.thm");
		//Config loading process interface
		//设置加载进度界面
		this.loadingView = new LoadingUI();
		this.loadingView.x = (egret.StageDelegate.getInstance()._stageWidth - this.loadingView.width) / 2; //设置进度条居中
		this.stage.addChild(this.loadingView);
		// initialize the Resource loading library
		//初始化Resource资源加载库
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		RES.loadConfig("resource/resource.json", "resource/");
	}

	/**
	 * 配置文件加载完成,开始预加载preload资源组。
	 * Loading of configuration file is complete, start to pre-load the preload resource group
	 */
	private onConfigComplete(event:RES.ResourceEvent):void {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		RES.loadGroup("preload");
	}

	/**
	 * preload资源组加载完成
	 * preload resource group is loaded
	 */
	private onResourceLoadComplete(event:RES.ResourceEvent):void {
		if (event.groupName == "preload") {
			this.stage.removeChild(this.loadingView);
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			this.createScene();
		}
	}

	/**
	 * 资源组加载出错
	 * Resource group loading failed
	 */
	private onResourceLoadError(event:RES.ResourceEvent):void {
		//TODO
		console.warn("Group:" + event.groupName + " has failed to load");
		//忽略加载失败的项目
		//ignore loading failed projects
		this.onResourceLoadComplete(event);
	}

	/**
	 * preload资源组加载进度
	 * loading process of preload resource
	 */
	private onResourceProgress(event:RES.ResourceEvent):void {
		if (event.groupName == "preload") {
			this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
		}
	}

	private gameLayer:egret.DisplayObjectContainer;

	private guiLayer:egret.gui.UIStage;

	/**
	 * 创建场景界面
	 * Create scene interface
	 */
	private createScene():void {
		//游戏场景层，游戏场景相关内容可以放在这里面。
		//Game scene layer, the game content related to the scene can be placed inside this layer.
		this.gameLayer = new egret.DisplayObjectContainer();
		this.addChild(this.gameLayer);
		var bitmap:egret.Bitmap = new egret.Bitmap();
		bitmap.texture = RES.getRes("bg_png");
		this.gameLayer.addChild(bitmap);

		//GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
		//GUI components must be within the container, UIStage will always remain the same as stage size automatically.
		this.guiLayer = new egret.gui.UIStage();
		this.addChild(this.guiLayer);
		this.test();
	}


	private createChildren():void {
		var runBtn:egret.gui.Button = new egret.gui.Button();
		runBtn.name = "run";
		runBtn.label = "start";
		runBtn.x = this.dropDownList.x + this.dropDownList.width + 10;
		runBtn.y = 530;
		runBtn.width = 150;
		runBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRunButtonClick, this);
		this.guiLayer.addElement(runBtn);

		var resetBtn:egret.gui.Button = new egret.gui.Button();
		resetBtn.name = "reset";
		resetBtn.label = "reset";
		resetBtn.x = runBtn.x + runBtn.width + 10;
		resetBtn.y = 530;
		resetBtn.width = 150;
		resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResetButtonClick, this);
		this.guiLayer.addElement(resetBtn);

		this.xSlider = new game.HSliderLabele();
		this.xSlider.x = 10;
		this.xSlider.y = 360;
		this.xSlider.width = 200;
		this.xSlider.labelText = "x";
		this.xSlider.minimum = 0;
		this.xSlider.maximum = 800;
		this.xSlider.value = 500;

		this.ySlider = new game.HSliderLabele();
		this.ySlider.x = 10;
		this.ySlider.y = 410;
		this.ySlider.width = 200;
		this.ySlider.labelText = "y";
		this.ySlider.minimum = 0;
		this.ySlider.maximum = 600;


		this.alphaSlider = new game.HSliderLabele();
		this.alphaSlider.x = 10;
		this.alphaSlider.y = 460;
		this.alphaSlider.width = 200;
		this.alphaSlider.labelText = "alpha";
		this.alphaSlider.minimum = 0;
		this.alphaSlider.maximum = 100;
		this.alphaSlider.value = 100;

		this.durationSlider = new game.HSliderLabele();
		this.durationSlider.x = 230;
		this.durationSlider.y = 360;
		this.durationSlider.width = 200;
		this.durationSlider.labelText = "duration";
		this.durationSlider.minimum = 0;
		this.durationSlider.maximum = 10000;
		this.durationSlider.value = 1500;

		this.scaleXSlider = new game.HSliderLabele();
		this.scaleXSlider.x = 230;
		this.scaleXSlider.y = 410;
		this.scaleXSlider.width = 200;
		this.scaleXSlider.labelText = "scaleX";
		this.scaleXSlider.minimum = 0;
		this.scaleXSlider.maximum = 100;
		this.scaleXSlider.value = 100;

		this.scaleYSlider = new game.HSliderLabele();
		this.scaleYSlider.x = 230;
		this.scaleYSlider.y = 460;
		this.scaleYSlider.width = 200;
		this.scaleYSlider.labelText = "scaleY";
		this.scaleYSlider.minimum = 0;
		this.scaleYSlider.maximum = 100;
		this.scaleYSlider.value = 100;

		this.rotationSlider = new game.HSliderLabele();
		this.rotationSlider.x = 450;
		this.rotationSlider.y = 360;
		this.rotationSlider.width = 200;
		this.rotationSlider.labelText = "rotation";
		this.rotationSlider.minimum = 0;
		this.rotationSlider.maximum = 360;
		this.rotationSlider.value = 0;

		this.isloopCheckBox = new egret.gui.CheckBox();
		this.isloopCheckBox.x = 450;
		this.isloopCheckBox.y = 440;
		this.isloopCheckBox.label = "isLoop";

		this.callCheckBox = new egret.gui.CheckBox();
		this.callCheckBox.x = 450;
		this.callCheckBox.y = 480;
		this.callCheckBox.label = "call";


		this.guiLayer.addElement(this.xSlider);
		this.guiLayer.addElement(this.ySlider);
		this.guiLayer.addElement(this.scaleXSlider);
		this.guiLayer.addElement(this.scaleYSlider);
		this.guiLayer.addElement(this.rotationSlider);
		this.guiLayer.addElement(this.alphaSlider);
		this.guiLayer.addElement(this.durationSlider);
		this.guiLayer.addElement(this.isloopCheckBox);
		this.guiLayer.addElement(this.callCheckBox);

		this.guawu_png = new egret.Bitmap();
		this.guawu_png.texture = RES.getRes("guawu_png");
		this.gameLayer.addChild(this.guawu_png);

		this.jian_png = new egret.Bitmap();
		this.jian_png.texture = RES.getRes("jian_png");
		this.gameLayer.addChild(this.jian_png);
	}


}


