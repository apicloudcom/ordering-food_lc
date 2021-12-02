// @ts-nocheck
/// <reference path="./modules.d.ts"/>

declare namespace api {
	/**应用的 ID，可以在网站控制台概览里面查看，字符串类型*/
	const appId: string;

	/**应用在桌面显示名称，字符串类型*/
	const appName: string;

	/**应用版本号，字符串类型*/
	const appVersion: string;

	/**系统类型，字符串类型*/
	const systemType: string;

	/**手机平台的系统版本，字符串类型*/
	const systemVersion: string;

	/**引擎版本信息，字符串类型*/
	const version: string;

	/**设备唯一标识，字符串类型*/
	const deviceId: string;

	/**iOS中用于推送的DeviceToken，如果未添加相关推送模块，或者云编译的mobileprovision证书未开启推送功能，则可能会返回空字符串，字符串类型*/
	const deviceToken: string;

	/**设备型号，字符串类型*/
	const deviceModel: string;

	/**设备名称，字符串类型*/
	const deviceName: string;

	/**设备类型，字符串类型*/
	const uiMode: string;

	/**运营商名称，若未获取到则返回none，字符串类型*/
	const operator: string;

	/**当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型*/
	const connectionType: string;

	/**应用是否全屏，布尔类型，只支持iOS*/
	const fullScreen: boolean;

	/**屏幕分辨率宽，数字类型*/
	const screenWidth: number;

	/**屏幕分辨率高，数字类型*/
	const screenHeight: number;

	/**当前 window 名称，字符串类型*/
	const winName: string;

	/**当前 window 宽度，数字类型*/
	const winWidth: number;

	/**当前 window 高度，数字类型*/
	const winHeight: number;

	/**frame 名称，字符串类型*/
	const frameName: string;

	/**frame 宽度，数字类型*/
	const frameWidth: number;

	/**frame 高度，数字类型*/
	const frameHeight: number;

	/**页面不被其它内容（如状态栏）遮住的区域，JSON对象*/
	const safeArea: JSON;

	/**页面参数，JSON 对象类型*/
	const pageParam: JSON;

	/**widget 参数，JSON 对象类型*/
	const wgtParam: JSON;

	/**当应用被第三方应用打开时，传递过来的参数，字符串类型*/
	const appParam: string;

	/**当前应用状态栏是否支持沉浸式效果，布尔类型*/
	const statusBarAppearance: boolean;

	/**widget:		//协议对应的真实目录，即 widget 网页包的根目录，字符串类型*/
	const wgtRootDir: string;

	/**fs:	//协议对应地真实目录，字符串类型*/
	const fsDir: string;

	/**cache://协议对应的真实目录，字符串类型*/
	const cacheDir: string;

	/**box://协议对应的真实目录，字符串类型*/
	const boxDir: string;

	/**获取config.xml配置的debug字段的值。*/
	const debug: any;

	/**渠道号，字符串类型*/
	const channel: string;

	/**设备是否越狱，布尔类型*/
	const jailbreak: boolean;

	/**使用WKWebView加载页面时，若配置了WKWebView渲染进程崩溃后刷新当前页面，则刷新后该属性值为true。只支持iOS，布尔类型*/
	const isRecoveryMode: boolean;

	interface api_openWin_Params {
		/**window名字*/
		name: string;

		/**页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。*/
		url: string;

		/**（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据*/
		data: string;

		/**（可选项）请求头*/
		headers: JSON;

		/**（可选项）设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。*/
		singleInstance: boolean;

		/**（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。*/
		avm: boolean;

		/**（可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。*/
		useWKWebView: boolean;

		/**（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。*/
		historyGestureEnabled: boolean;

		/**（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。*/
		syncCookie: boolean;

		/**（可选项）页面参数，新页面中可以通过 api.pageParam 获取*/
		pageParam: JSON;

		/**（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。*/
		bounces: boolean;

		/**（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径*/
		bgColor: string;

		/**（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效*/
		scrollToTop: boolean;

		/**（可选项）页面内容超出后是否可以滚动，只支持iOS*/
		scrollEnabled: boolean;

		/**（可选项）是否显示垂直滚动条*/
		vScrollBarEnabled: boolean;

		/**（可选项）是否显示水平滚动条*/
		hScrollBarEnabled: boolean;

		/**（可选项）页面是否可以缩放*/
		scaleEnabled: boolean;

		/**（可选项）是否隐藏原生navigationBar控件，该字段只 iOS 有效*/
		hideTopBar: boolean;

		/**（可选项）是否隐藏原生tabBar控件，该字段只 iOS 有效*/
		hideBottomBar: boolean;

		/**（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效*/
		slidBackEnabled: boolean;

		/**（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效*/
		slidBackType: string;

		/**（可选项）动画参数，不传时使用默认动画*/
		animation: JSON;

		/**（可选项）页面加载进度配置信息，若不传则无加载进度效果*/
		progress: JSON;

		/**（可选项）window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性*/
		delay: number;

		/**（可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行*/
		reload: boolean;

		/**（可选项）是否允许长按页面时弹出选择菜单*/
		allowEdit: boolean;

		/**（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用*/
		softInputMode: string;

		/**（可选项）收起键盘的方式，只iOS有效。*/
		softInputDismissMode: Array;

		/**（可选项）是否显示键盘上方的工具条。只支持iOS*/
		softInputBarEnabled: boolean;

		/**（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。*/
		overScrollMode: string;

		/**（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS*/
		dragAndDrop: boolean;

		/**（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS*/
		hideHomeIndicator: boolean;

		/**（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe*/
		defaultRefreshHeader: string;

		/**（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件*/
		customRefreshHeader: string;

	}
	/**
	 * `打开window`
	 * ========params==========
	 *
	 * `name` :string : window名字
	 *
	 * `url` :string : 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。
	 *
	 * `data` :string : （可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据
	 *
	 * `headers` :JSON : （可选项）请求头
	 *
	 * `singleInstance` :boolean : （可选项）设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。
	 *
	 * `avm` :boolean : （可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。
	 *
	 * `useWKWebView` :boolean : （可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。
	 *
	 * `historyGestureEnabled` :boolean : （可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。
	 *
	 * `syncCookie` :boolean : （可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。
	 *
	 * `pageParam` :JSON : （可选项）页面参数，新页面中可以通过 api.pageParam 获取
	 *
	 * `bounces` :boolean : （可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。
	 *
	 * `bgColor` :string : （可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径
	 *
	 * `scrollToTop` :boolean : （可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效
	 *
	 * `scrollEnabled` :boolean : （可选项）页面内容超出后是否可以滚动，只支持iOS
	 *
	 * `vScrollBarEnabled` :boolean : （可选项）是否显示垂直滚动条
	 *
	 * `hScrollBarEnabled` :boolean : （可选项）是否显示水平滚动条
	 *
	 * `scaleEnabled` :boolean : （可选项）页面是否可以缩放
	 *
	 * `hideTopBar` :boolean : （可选项）是否隐藏原生navigationBar控件，该字段只 iOS 有效
	 *
	 * `hideBottomBar` :boolean : （可选项）是否隐藏原生tabBar控件，该字段只 iOS 有效
	 *
	 * `slidBackEnabled` :boolean : （可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效
	 *
	 * `slidBackType` :string : （可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时使用默认动画
	 *
	 * `progress` :JSON : （可选项）页面加载进度配置信息，若不传则无加载进度效果
	 *
	 * `delay` :number : （可选项）window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性
	 *
	 * `reload` :boolean : （可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行
	 *
	 * `allowEdit` :boolean : （可选项）是否允许长按页面时弹出选择菜单
	 *
	 * `softInputMode` :string : （可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用
	 *
	 * `softInputDismissMode` :Array : （可选项）收起键盘的方式，只iOS有效。
	 *
	 * `softInputBarEnabled` :boolean : （可选项）是否显示键盘上方的工具条。只支持iOS
	 *
	 * `overScrollMode` :string : （可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。
	 *
	 * `dragAndDrop` :boolean : （可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS
	 *
	 * `hideHomeIndicator` :boolean : （可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS
	 *
	 * `defaultRefreshHeader` :string : （可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
	 *
	 * `customRefreshHeader` :string : （可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件
	 */
	function openWin(option: api_openWin_Params): void;

	interface api_closeWin_Params {
		/**（可选项）window 名字，不传时关闭当前 window，为 root 时无效*/
		name: string;

		/**（可选项）动画参数，不传时使用默认动画*/
		animation: JSON;

	}
	/**
	 * `关闭 window`
	 * ========params==========
	 *
	 * `name` :string : （可选项）window 名字，不传时关闭当前 window，为 root 时无效
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时使用默认动画
	 */
	function closeWin(option: api_closeWin_Params): void;

	interface api_closeToWin_Params {
		/**window 名字*/
		name: string;

		/**（可选项）动画参数，不传时使用默认动画*/
		animation: JSON;

	}
	/**
	 * `关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。`
	 * ========params==========
	 *
	 * `name` :string : window 名字
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时使用默认动画
	 */
	function closeToWin(option: api_closeToWin_Params): void;

	interface api_windows_ret {
		/** window名字，字符串类型*/
		name: string;

		/** window中的子window，如drawerLayout中的leftPane和rightPane，JSON对象数组类型*/
		children: Array<JSON>;

	}
	function windows(): Array<api_windows_ret>

	interface api_setWinAttr_Params {
		/**（可选项）页面是否弹动*/
		bounces: boolean;

		/**（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径*/
		bgColor: string;

		/**（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效*/
		scrollToTop: boolean;

		/**（可选项）页面内容超出后是否可以滚动，只支持iOS*/
		scrollEnabled: boolean;

		/**（可选项）是否显示垂直滚动条*/
		vScrollBarEnabled: boolean;

		/**（可选项）是否显示水平滚动条*/
		hScrollBarEnabled: boolean;

		/**（可选项）页面是否可以缩放*/
		scaleEnabled: boolean;

		/**（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效*/
		slidBackEnabled: boolean;

		/**（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS*/
		hideHomeIndicator: boolean;

		/**（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式；只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用*/
		softInputMode: string;

	}
	/**
	 * `设置 window 属性`
	 * ========params==========
	 *
	 * `bounces` :boolean : （可选项）页面是否弹动
	 *
	 * `bgColor` :string : （可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
	 *
	 * `scrollToTop` :boolean : （可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效
	 *
	 * `scrollEnabled` :boolean : （可选项）页面内容超出后是否可以滚动，只支持iOS
	 *
	 * `vScrollBarEnabled` :boolean : （可选项）是否显示垂直滚动条
	 *
	 * `hScrollBarEnabled` :boolean : （可选项）是否显示水平滚动条
	 *
	 * `scaleEnabled` :boolean : （可选项）页面是否可以缩放
	 *
	 * `slidBackEnabled` :boolean : （可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效
	 *
	 * `hideHomeIndicator` :boolean : （可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS
	 *
	 * `softInputMode` :string : （可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式；只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用
	 */
	function setWinAttr(option: api_setWinAttr_Params): void;

	interface api_openFrame_Params {
		/**frame 名字*/
		name: string;

		/**页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。*/
		url: string;

		/**（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据*/
		data: string;

		/**（可选项）请求头*/
		headers: JSON;

		/**（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。*/
		avm: boolean;

		/**（可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。*/
		useWKWebView: boolean;

		/**（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。*/
		historyGestureEnabled: boolean;

		/**（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。*/
		syncCookie: boolean;

		/**（可选项）页面参数，在新页面通过 api.pageParam 获取*/
		pageParam: JSON;

		/**（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。*/
		bounces: boolean;

		/**（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径*/
		bgColor: string;

		/**（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只iOS有效*/
		scrollToTop: boolean;

		/**（可选项）页面内容超出后是否可以滚动，只支持iOS*/
		scrollEnabled: boolean;

		/**（可选项）是否显示垂直滚动条*/
		vScrollBarEnabled: boolean;

		/**（可选项）是否显示水平滚动条*/
		hScrollBarEnabled: boolean;

		/**（可选项）页面是否可以缩放*/
		scaleEnabled: boolean;

		/**（可选项）frame所要添加到的目标页面。*/
		fixedOn: string;

		/**（可选项）设置页面的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。*/
		rect: JSON;

		/**（可选项）页面加载进度配置信息，若不传则无加载进度效果*/
		progress: JSON;

		/**（可选项）页面已经打开时，是否重新加载页面*/
		reload: boolean;

		/**（可选项）是否允许长按页面时弹出选择菜单*/
		allowEdit: boolean;

		/**（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用*/
		softInputMode: string;

		/**（可选项）收起键盘的方式，只iOS有效。*/
		softInputDismissMode: Array;

		/**（可选项）是否显示键盘上方的工具条。只支持iOS*/
		softInputBarEnabled: boolean;

		/**（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。*/
		overScrollMode: string;

		/**（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS*/
		dragAndDrop: boolean;

		/**（可选项）动画参数，不传时无动画*/
		animation: JSON;

		/**（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe*/
		defaultRefreshHeader: string;

		/**（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件*/
		customRefreshHeader: string;

	}
	/**
	 * `打开 frame`
	 * ========params==========
	 *
	 * `name` :string : frame 名字
	 *
	 * `url` :string : 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。
	 *
	 * `data` :string : （可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据
	 *
	 * `headers` :JSON : （可选项）请求头
	 *
	 * `avm` :boolean : （可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。
	 *
	 * `useWKWebView` :boolean : （可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。
	 *
	 * `historyGestureEnabled` :boolean : （可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。
	 *
	 * `syncCookie` :boolean : （可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。
	 *
	 * `pageParam` :JSON : （可选项）页面参数，在新页面通过 api.pageParam 获取
	 *
	 * `bounces` :boolean : （可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。
	 *
	 * `bgColor` :string : （可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径
	 *
	 * `scrollToTop` :boolean : （可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只iOS有效
	 *
	 * `scrollEnabled` :boolean : （可选项）页面内容超出后是否可以滚动，只支持iOS
	 *
	 * `vScrollBarEnabled` :boolean : （可选项）是否显示垂直滚动条
	 *
	 * `hScrollBarEnabled` :boolean : （可选项）是否显示水平滚动条
	 *
	 * `scaleEnabled` :boolean : （可选项）页面是否可以缩放
	 *
	 * `fixedOn` :string : （可选项）frame所要添加到的目标页面。
	 *
	 * `rect` :JSON : （可选项）设置页面的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。
	 *
	 * `progress` :JSON : （可选项）页面加载进度配置信息，若不传则无加载进度效果
	 *
	 * `reload` :boolean : （可选项）页面已经打开时，是否重新加载页面
	 *
	 * `allowEdit` :boolean : （可选项）是否允许长按页面时弹出选择菜单
	 *
	 * `softInputMode` :string : （可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用
	 *
	 * `softInputDismissMode` :Array : （可选项）收起键盘的方式，只iOS有效。
	 *
	 * `softInputBarEnabled` :boolean : （可选项）是否显示键盘上方的工具条。只支持iOS
	 *
	 * `overScrollMode` :string : （可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。
	 *
	 * `dragAndDrop` :boolean : （可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时无动画
	 *
	 * `defaultRefreshHeader` :string : （可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
	 *
	 * `customRefreshHeader` :string : （可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件
	 */
	function openFrame(option: api_openFrame_Params): void;

	interface api_closeFrame_Params {
		/**（可选项）frame 名字，不传时关闭当前 frame*/
		name: string;

	}
	/**
	 * `关闭frame`
	 * ========params==========
	 *
	 * `name` :string : （可选项）frame 名字，不传时关闭当前 frame
	 */
	function closeFrame(option: api_closeFrame_Params): void;

	interface api_frames_ret {
		/** frame名字，字符串类型*/
		name: string;

		/** 父窗口的名字，如果是frameGroup中的frame，该值为frameGroup的名字，字符串类型*/
		parent: string;

	}
	function frames(): Array<api_frames_ret>

	interface api_setFrameAttr_Params {
		/**frame 名称*/
		name: string;

		/**（可选项）页面是否弹动*/
		bounces: boolean;

		/**（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。*/
		hidden: boolean;

		/**（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径*/
		bgColor: string;

		/**（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只iOS有效*/
		scrollToTop: boolean;

		/**（可选项）页面内容超出后是否可以滚动，只支持iOS*/
		scrollEnabled: boolean;

		/**（可选项）是否显示垂直滚动条*/
		vScrollBarEnabled: boolean;

		/**（可选项）是否显示水平滚动条*/
		hScrollBarEnabled: boolean;

		/**（可选项）页面是否可以缩放*/
		scaleEnabled: boolean;

		/**（可选项）窗口区域*/
		rect: JSON;

		/**（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用*/
		softInputMode: string;

	}
	/**
	 * `设置frame属性`
	 * ========params==========
	 *
	 * `name` :string : frame 名称
	 *
	 * `bounces` :boolean : （可选项）页面是否弹动
	 *
	 * `hidden` :boolean : （可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。
	 *
	 * `bgColor` :string : （可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径
	 *
	 * `scrollToTop` :boolean : （可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只iOS有效
	 *
	 * `scrollEnabled` :boolean : （可选项）页面内容超出后是否可以滚动，只支持iOS
	 *
	 * `vScrollBarEnabled` :boolean : （可选项）是否显示垂直滚动条
	 *
	 * `hScrollBarEnabled` :boolean : （可选项）是否显示水平滚动条
	 *
	 * `scaleEnabled` :boolean : （可选项）页面是否可以缩放
	 *
	 * `rect` :JSON : （可选项）窗口区域
	 *
	 * `softInputMode` :string : （可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置并云编译使用
	 */
	function setFrameAttr(option: api_setFrameAttr_Params): void;

	interface api_bringFrameToFront_Params {
		/**待调整显示顺序的 frame 名字*/
		from: string;

		/**（可选项）frame 名字，不传时调整 from 对应 frame 到最前面，否则调整 from 对应 frame 到此 frame 前面*/
		to: string;

	}
	/**
	 * `调整 frame 到前面`
	 * ========params==========
	 *
	 * `from` :string : 待调整显示顺序的 frame 名字
	 *
	 * `to` :string : （可选项）frame 名字，不传时调整 from 对应 frame 到最前面，否则调整 from 对应 frame 到此 frame 前面
	 */
	function bringFrameToFront(option: api_bringFrameToFront_Params): void;

	interface api_sendFrameToBack_Params {
		/**frame 名字*/
		from: string;

		/**（可选项）frame 名字，不传时调整 from 对应 frame 到最后面，否则调整 from 对应 frame 到此 frame 后面*/
		to: string;

	}
	/**
	 * `调整 frame 到后面`
	 * ========params==========
	 *
	 * `from` :string : frame 名字
	 *
	 * `to` :string : （可选项）frame 名字，不传时调整 from 对应 frame 到最后面，否则调整 from 对应 frame 到此 frame 后面
	 */
	function sendFrameToBack(option: api_sendFrameToBack_Params): void;

	interface api_setFrameClient_Params {
		/**frame 名字*/
		frameName: string;

	}
	/**
	 * `设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。`
	 * ========params==========
	 *
	 * `frameName` :string : frame 名字
	 */
	function setFrameClient(option: api_setFrameClient_Params): void;

	interface api_animation_Params {
		/**frame 名字*/
		name: string;

		/**（可选项）动画延迟时间，单位毫秒，默认立即开始*/
		delay: number;

		/**（可选项）动画过渡时间，单位毫秒*/
		duration: number;

		/**（可选项）动画曲线类型，指定动画开始和结束时的快慢*/
		curve: string;

		/**（可选项）动画次数，默认不重复，为-1时无限重复*/
		repeatCount: number;

		/**（可选项）一次动画结束后是否自动反转动画*/
		autoreverse: boolean;

		/**（可选项）整个页面的透明度，介于0 1之间，Android 不支持*/
		alpha: number;

		/**（可选项）位置平移参数*/
		translation: JSON;

		/**（可选项）页面缩放参数，Android 不支持*/
		scale: JSON;

		/**（可选项）页面旋转参数，Android 不支持*/
		rotation: JSON;

	}
	/**
	 * `frame 动画，支持平移，缩放，旋转和透明度变化`
	 * ========params==========
	 *
	 * `name` :string : frame 名字
	 *
	 * `delay` :number : （可选项）动画延迟时间，单位毫秒，默认立即开始
	 *
	 * `duration` :number : （可选项）动画过渡时间，单位毫秒
	 *
	 * `curve` :string : （可选项）动画曲线类型，指定动画开始和结束时的快慢
	 *
	 * `repeatCount` :number : （可选项）动画次数，默认不重复，为-1时无限重复
	 *
	 * `autoreverse` :boolean : （可选项）一次动画结束后是否自动反转动画
	 *
	 * `alpha` :number : （可选项）整个页面的透明度，介于0 1之间，Android 不支持
	 *
	 * `translation` :JSON : （可选项）位置平移参数
	 *
	 * `scale` :JSON : （可选项）页面缩放参数，Android 不支持
	 *
	 * `rotation` :JSON : （可选项）页面旋转参数，Android 不支持
	 */
	function animation(option: api_animation_Params): void;

	interface api_openFrameGroup_Params {
		/**frame 组名字*/
		name: string;

		/**（可选项）frame 组背景，颜色（#fff,#ffffff,rgba(r,g,b,a)）或图片（支持文件路径协议和相对路径）*/
		background: string;

		/**（可选项）frame 组是否能够左右滚动*/
		scrollEnabled: boolean;

		/**（可选项）frameGroup所要添加到的目标页面。*/
		fixedOn: string;

		/**（可选项）设置frameGroup的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。*/
		rect: JSON;

		/**（可选项）默认显示的页面索引*/
		index: number;

		/**（可选项）预加载的 frame 个数，默认加载当前页后面一个*/
		preload: number;

		/**frame 数组*/
		frames: Array;

	}
	/**
	 * `打开frame组`
	 * ========params==========
	 *
	 * `name` :string : frame 组名字
	 *
	 * `background` :string : （可选项）frame 组背景，颜色（#fff,#ffffff,rgba(r,g,b,a)）或图片（支持文件路径协议和相对路径）
	 *
	 * `scrollEnabled` :boolean : （可选项）frame 组是否能够左右滚动
	 *
	 * `fixedOn` :string : （可选项）frameGroup所要添加到的目标页面。
	 *
	 * `rect` :JSON : （可选项）设置frameGroup的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。
	 *
	 * `index` :number : （可选项）默认显示的页面索引
	 *
	 * `preload` :number : （可选项）预加载的 frame 个数，默认加载当前页后面一个
	 *
	 * `frames` :Array : frame 数组
	 */
	function openFrameGroup(option: api_openFrameGroup_Params): void;

	interface api_closeFrameGroup_Params {
		/**frame 组名字*/
		name: string;

	}
	/**
	 * `关闭frame组`
	 * ========params==========
	 *
	 * `name` :string : frame 组名字
	 */
	function closeFrameGroup(option: api_closeFrameGroup_Params): void;

	interface api_setFrameGroupAttr_Params {
		/**frame 组名字*/
		name: string;

		/**（可选项）frame 组是否隐藏，设置显示隐藏并不会改变frame组在整个窗口系统之间的层级关系。*/
		hidden: boolean;

		/**（可选项）frame 组是否能够左右滚动*/
		scrollEnabled: boolean;

		/**（可选项）frame 组区域*/
		rect: JSON;

	}
	/**
	 * `设置 frame 组属性`
	 * ========params==========
	 *
	 * `name` :string : frame 组名字
	 *
	 * `hidden` :boolean : （可选项）frame 组是否隐藏，设置显示隐藏并不会改变frame组在整个窗口系统之间的层级关系。
	 *
	 * `scrollEnabled` :boolean : （可选项）frame 组是否能够左右滚动
	 *
	 * `rect` :JSON : （可选项）frame 组区域
	 */
	function setFrameGroupAttr(option: api_setFrameGroupAttr_Params): void;

	interface api_setFrameGroupIndex_Params {
		/**frame 组名字*/
		name: string;

		/**frame 索引*/
		index: number;

		/**（可选项）是否平滑滚动至目标窗口，即是否带有动画*/
		scroll: boolean;

		/**（可选项）是否刷新 frame*/
		reload: boolean;

	}
	/**
	 * `设置 frame 组当前可见 frame`
	 * ========params==========
	 *
	 * `name` :string : frame 组名字
	 *
	 * `index` :number : frame 索引
	 *
	 * `scroll` :boolean : （可选项）是否平滑滚动至目标窗口，即是否带有动画
	 *
	 * `reload` :boolean : （可选项）是否刷新 frame
	 */
	function setFrameGroupIndex(option: api_setFrameGroupIndex_Params): void;

	interface api_openPopoverWin_Params {
		/**（可选项）弹出窗口展示类型*/
		style: string;

		/**（可选项）弹出窗口显示的宽度*/
		width: number;

		/**（可选项）弹出窗口显示的高度*/
		height: number;

		/**（可选项）当style为popover时，箭头指向的位置*/
		arrowRect: JSON;

		/**（可选项）当style为popover时，箭头指向的方向*/
		arrowDirection: string;

	}
	/**
	 * `打开弹出层窗口，只支持iPad`
	 * ========params==========
	 *
	 * `style` :string : （可选项）弹出窗口展示类型
	 *
	 * `width` :number : （可选项）弹出窗口显示的宽度
	 *
	 * `height` :number : （可选项）弹出窗口显示的高度
	 *
	 * `arrowRect` :JSON : （可选项）当style为popover时，箭头指向的位置
	 *
	 * `arrowDirection` :string : （可选项）当style为popover时，箭头指向的方向
	 */
	function openPopoverWin(option: api_openPopoverWin_Params): void;

	function closePopoverWin(): void;

	interface api_openSlidLayout_Params {
		/**（可选项）侧滑类型（left：左侧滑、right：右侧滑、all：左右侧滑）。安卓暂只支持left。*/
		type: string;

		/**（可选项）左侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 leftEdge 参数代替*/
		leftEdge: number;

		/**（可选项）右侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 rightEdge 参数代替*/
		rightEdge: number;

		/**侧滑层 window 样式*/
		slidPaneStyle: JSON;

		/**底部固定层 window 样式*/
		fixedPaneStyle: JSON;

		/**底部固定层 window*/
		fixedPane: JSON;

		/**侧滑层window*/
		slidPane: JSON;

	}
	/**
	 * `打开侧滑式布局`
	 * ========params==========
	 *
	 * `type` :string : （可选项）侧滑类型（left：左侧滑、right：右侧滑、all：左右侧滑）。安卓暂只支持left。
	 *
	 * `leftEdge` :number : （可选项）左侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 leftEdge 参数代替
	 *
	 * `rightEdge` :number : （可选项）右侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 rightEdge 参数代替
	 *
	 * `slidPaneStyle` :JSON : 侧滑层 window 样式
	 *
	 * `fixedPaneStyle` :JSON : 底部固定层 window 样式
	 *
	 * `fixedPane` :JSON : 底部固定层 window
	 *
	 * `slidPane` :JSON : 侧滑层window
	 */
	function openSlidLayout(option: api_openSlidLayout_Params): void;

	interface api_openSlidPane_Params {
		/**侧滑类型，left 或 right*/
		type: string;

	}
	/**
	 * `向左或右进行侧滑`
	 * ========params==========
	 *
	 * `type` :string : 侧滑类型，left 或 right
	 */
	function openSlidPane(option: api_openSlidPane_Params): void;

	function closeSlidPane(): void;

	function lockSlidPane(): void;

	function unlockSlidPane(): void;

	interface api_openDrawerLayout_Params {
		/**左边侧滑 window*/
		leftPane: JSON;

		/**右边侧滑 window*/
		rightPane: JSON;

		/**（可选项）是否支持在页面边缘处滑动打开drawerPane*/
		slidToOpenPane: boolean;

		/**（可选项）在打开的drawerPane页面，是否支持滑动关闭drawerPane*/
		slidToClosePane: boolean;

		/**（可选项）在打开的drawerPane页面，是否支持点击遮罩部分关闭drawerPane*/
		tapToClosePane: boolean;

	}
	/**
	 * `打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。`
	 * ========params==========
	 *
	 * `leftPane` :JSON : 左边侧滑 window
	 *
	 * `rightPane` :JSON : 右边侧滑 window
	 *
	 * `slidToOpenPane` :boolean : （可选项）是否支持在页面边缘处滑动打开drawerPane
	 *
	 * `slidToClosePane` :boolean : （可选项）在打开的drawerPane页面，是否支持滑动关闭drawerPane
	 *
	 * `tapToClosePane` :boolean : （可选项）在打开的drawerPane页面，是否支持点击遮罩部分关闭drawerPane
	 */
	function openDrawerLayout(option: api_openDrawerLayout_Params): void;

	interface api_openDrawerPane_Params {
		/**侧滑类型，left 或 right*/
		type: string;

	}
	/**
	 * `打开抽屉式侧滑Pane`
	 * ========params==========
	 *
	 * `type` :string : 侧滑类型，left 或 right
	 */
	function openDrawerPane(option: api_openDrawerPane_Params): void;

	function closeDrawerPane(): void;

	interface api_loadData_Params {
		/**（可选项）window 名称，若要跨 window ，该字段必须指定，首页的名称为 root*/
		name: string;

		/**（可选项）frame名称*/
		frameName: string;

		/**（可选项）做为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径。*/
		url: string;

		/**页面加载的数据内容，可以为html片段或者整张html文件的数据*/
		data: string;

	}
	/**
	 * `在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。`
	 * ========params==========
	 *
	 * `name` :string : （可选项）window 名称，若要跨 window ，该字段必须指定，首页的名称为 root
	 *
	 * `frameName` :string : （可选项）frame名称
	 *
	 * `url` :string : （可选项）做为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径。
	 *
	 * `data` :string : 页面加载的数据内容，可以为html片段或者整张html文件的数据
	 */
	function loadData(option: api_loadData_Params): void;

	interface api_execScript_Params {
		/**（可选项）window 名称，若要跨 window 执行脚本，该字段必须指定，首页的名称为 root*/
		name: string;

		/**（可选项）frame名称*/
		frameName: string;

		/**js代码*/
		script: string;

	}
	/**
	 * `在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。`
	 * ========params==========
	 *
	 * `name` :string : （可选项）window 名称，若要跨 window 执行脚本，该字段必须指定，首页的名称为 root
	 *
	 * `frameName` :string : （可选项）frame名称
	 *
	 * `script` :string : js代码
	 */
	function execScript(option: api_execScript_Params): void;

	interface api_setBlurEffect_Params {
		/**模糊效果风格样式，传none时表示移除模糊效果*/
		style: string;

		/**（可选项）false时表示对当前页面添加模糊效果，true时表示对整个应用窗口添加模糊效果*/
		global: boolean;

		/**（可选项）模糊区域透明度，介于0和1之间*/
		alpha: number;

		/**（可选项）模糊区域圆角半径*/
		borderRadius: number;

		/**（可选项）动画参数，设置模糊渐变效果，只支持iOS 9及以上系统*/
		animation: JSON;

		/**（可选项）模糊区域*/
		rect: JSON;

	}
	/**
	 * `对当前页面或应用设置模糊效果`
	 * ========params==========
	 *
	 * `style` :string : 模糊效果风格样式，传none时表示移除模糊效果
	 *
	 * `global` :boolean : （可选项）false时表示对当前页面添加模糊效果，true时表示对整个应用窗口添加模糊效果
	 *
	 * `alpha` :number : （可选项）模糊区域透明度，介于0和1之间
	 *
	 * `borderRadius` :number : （可选项）模糊区域圆角半径
	 *
	 * `animation` :JSON : （可选项）动画参数，设置模糊渐变效果，只支持iOS 9及以上系统
	 *
	 * `rect` :JSON : （可选项）模糊区域
	 */
	function setBlurEffect(option: api_setBlurEffect_Params): void;

	interface api_removeLaunchView_Params {
		/**（可选项）动画参数，不传时不使用动画*/
		animation: JSON;

	}
	/**
	 * `移除启动图。若 [config.xml](/APICloud/技术专题/app-config-manual) 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。`
	 * ========params==========
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时不使用动画
	 */
	function removeLaunchView(option: api_removeLaunchView_Params): void;

	function showLaunchView(): void;

	function parseTapmode(): void;

	interface api_openTabLayout_Params {
		/**（可选项）显示在顶部navigationBar上面的标题*/
		title: string;

		/**（可选项）是否隐藏顶部navigationBar导航栏，只在传了navigationBar参数时有效*/
		hideNavigationBar: boolean;

		/**（可选项）是否隐藏底部tabBar标签栏，只在传了tabBar参数时有效*/
		hideTabBar: boolean;

		/**（可选项）顶部navigationBar导航栏配置信息*/
		navigationBar: JSON;

		/**（可选项）底部tabBar标签栏配置信息，可以通过监听tabitembtn事件来处理标签栏每项的点击事件*/
		tabBar: JSON;

	}
	/**
	 * `打开tabLayout布局`
	 * ========params==========
	 *
	 * `title` :string : （可选项）显示在顶部navigationBar上面的标题
	 *
	 * `hideNavigationBar` :boolean : （可选项）是否隐藏顶部navigationBar导航栏，只在传了navigationBar参数时有效
	 *
	 * `hideTabBar` :boolean : （可选项）是否隐藏底部tabBar标签栏，只在传了tabBar参数时有效
	 *
	 * `navigationBar` :JSON : （可选项）顶部navigationBar导航栏配置信息
	 *
	 * `tabBar` :JSON : （可选项）底部tabBar标签栏配置信息，可以通过监听tabitembtn事件来处理标签栏每项的点击事件
	 */
	function openTabLayout(option: api_openTabLayout_Params): void;

	interface api_setTabLayoutAttr_Params {
		/**（可选项）显示在顶部navigationBar上面的标题*/
		title: string;

		/**（可选项）是否隐藏顶部navigationBar导航栏*/
		hideNavigationBar: boolean;

		/**（可选项）是否隐藏底部tabBar标签栏*/
		hideTabBar: boolean;

		/**（可选项）显示隐藏navigationBar、tabBar时是否有动画效果。*/
		animated: boolean;

	}
	/**
	 * `设置tabLayout属性`
	 * ========params==========
	 *
	 * `title` :string : （可选项）显示在顶部navigationBar上面的标题
	 *
	 * `hideNavigationBar` :boolean : （可选项）是否隐藏顶部navigationBar导航栏
	 *
	 * `hideTabBar` :boolean : （可选项）是否隐藏底部tabBar标签栏
	 *
	 * `animated` :boolean : （可选项）显示隐藏navigationBar、tabBar时是否有动画效果。
	 */
	function setTabLayoutAttr(option: api_setTabLayoutAttr_Params): void;

	interface api_setNavBarAttr_Params {
		/**（可选项）导航栏背景。支持颜色值和图片*/
		background: string;

		/**（可选项）导航栏底部阴影线颜色*/
		shadow: string;

		/**（可选项）导航栏标题文字颜色*/
		color: string;

		/**（可选项）导航栏标题字体大小*/
		fontSize: number;

		/**（可选项）导航栏标题文字粗细*/
		fontWeight: string;

		/**（可选项）是否隐藏默认返回按钮。可以通过监听navbackbtn或keyback事件来处理返回按钮的点击事件。*/
		hideBackButton: boolean;

		/**（可选项）导航栏左边按钮组，左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。*/
		leftButtons: Array<JSON>;

		/**（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。*/
		rightButtons: Array<JSON>;

	}
	/**
	 * `设置navigationBar属性`
	 * ========params==========
	 *
	 * `background` :string : （可选项）导航栏背景。支持颜色值和图片
	 *
	 * `shadow` :string : （可选项）导航栏底部阴影线颜色
	 *
	 * `color` :string : （可选项）导航栏标题文字颜色
	 *
	 * `fontSize` :number : （可选项）导航栏标题字体大小
	 *
	 * `fontWeight` :string : （可选项）导航栏标题文字粗细
	 *
	 * `hideBackButton` :boolean : （可选项）是否隐藏默认返回按钮。可以通过监听navbackbtn或keyback事件来处理返回按钮的点击事件。
	 *
	 * `leftButtons` :Array<JSON> : （可选项）导航栏左边按钮组，左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。
	 *
	 * `rightButtons` :Array<JSON> : （可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。
	 */
	function setNavBarAttr(option: api_setNavBarAttr_Params): void;

	interface api_setTabBarAttr_Params {
		/**（可选项）设置选中标签栏指定项*/
		index: number;

		/**（可选项）标签栏背景。支持颜色值和图片*/
		background: string;

		/**（可选项）标签栏顶部阴影线颜色*/
		shadow: string;

		/**（可选项）标签栏各项的文字颜色*/
		color: string;

		/**（可选项）标签栏各项选中状态下的文字颜色*/
		selectedColor: string;

		/**（可选项）标签栏各项文字字体大小*/
		fontSize: number;

		/**（可选项）标签栏各项文字粗细*/
		fontWeight: string;

		/**（可选项）标签栏各项文字距离底部的距离*/
		textOffset: number;

	}
	/**
	 * `设置tabBar属性`
	 * ========params==========
	 *
	 * `index` :number : （可选项）设置选中标签栏指定项
	 *
	 * `background` :string : （可选项）标签栏背景。支持颜色值和图片
	 *
	 * `shadow` :string : （可选项）标签栏顶部阴影线颜色
	 *
	 * `color` :string : （可选项）标签栏各项的文字颜色
	 *
	 * `selectedColor` :string : （可选项）标签栏各项选中状态下的文字颜色
	 *
	 * `fontSize` :number : （可选项）标签栏各项文字字体大小
	 *
	 * `fontWeight` :string : （可选项）标签栏各项文字粗细
	 *
	 * `textOffset` :number : （可选项）标签栏各项文字距离底部的距离
	 */
	function setTabBarAttr(option: api_setTabBarAttr_Params): void;

	interface api_setTabBarItemAttr_Params {
		/**要设置的指定项的索引*/
		index: number;

		/**（可选项）该项的标题文字*/
		text: string;

		/**（可选项）该项默认状态下icon图标路径。图片尺寸需要为4倍图，例如设备上面期望显示的图标尺寸为25*25，则图片实际尺寸需要为100*100*/
		iconPath: string;

		/**（可选项）该项选中状态下icon图标路径。图片尺寸需要为4倍图，例如设备上面期望显示的图标尺寸为25*25，则图片实际尺寸需要为100*100*/
		selectedIconPath: string;

		/**（可选项）该项的角标信息*/
		badge: JSON;

	}
	/**
	 * `设置tabBar指定项的属性`
	 * ========params==========
	 *
	 * `index` :number : 要设置的指定项的索引
	 *
	 * `text` :string : （可选项）该项的标题文字
	 *
	 * `iconPath` :string : （可选项）该项默认状态下icon图标路径。图片尺寸需要为4倍图，例如设备上面期望显示的图标尺寸为25*25，则图片实际尺寸需要为100*100
	 *
	 * `selectedIconPath` :string : （可选项）该项选中状态下icon图标路径。图片尺寸需要为4倍图，例如设备上面期望显示的图标尺寸为25*25，则图片实际尺寸需要为100*100
	 *
	 * `badge` :JSON : （可选项）该项的角标信息
	 */
	function setTabBarItemAttr(option: api_setTabBarItemAttr_Params): void;

	interface api_installApp_Params {
		/**目标应用的资源文件标识。Android上为apk包的本地路径，如file://xxx.apk；iOS上为应用安装包对应的plist文件地址*/
		appUri: string;

	}
	/**
	 * `安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面`
	 * ========params==========
	 *
	 * `appUri` :string : 目标应用的资源文件标识。Android上为apk包的本地路径，如file://xxx.apk；iOS上为应用安装包对应的plist文件地址
	 */
	function installApp(option: api_installApp_Params): void;

	interface api_uninstallApp_Params {
		/**要卸载的应用的包名*/
		packageName: string;

	}
	/**
	 * `卸载应用，只支持Android`
	 * ========params==========
	 *
	 * `packageName` :string : 要卸载的应用的包名
	 */
	function uninstallApp(option: api_uninstallApp_Params): void;

	interface api_openApp_Params {
		/**（可选项）传给目标应用的参数。iOS 平台会将 appParam 里面的值拼接到 iosUrl 后面，比如 iosUrl 为 http://www.baidu.com ，appParam为{"keyword":"APICloud"}，则最后传递给第三方应用的url为http://www.baidu.com?keyword=APICloud*/
		appParam: JSON;

		/**（可选项）目标应用的url（iOS平台使用），iOS下必传*/
		iosUrl: string;

		/**（可选项）目标应用的包名或 action（Android平台使用），Android下必传*/
		androidPkg: string;

		/**（可选项）指定目标应用的响应数据类型，如："text/html"（Android平台使用）*/
		mimeType: string;

		/**（可选项）指定目标应用响应的uri（Android平台使用）*/
		uri: string;

	}
	/**
	 * `打开手机上其它应用，可以传递参数`
	 * ========params==========
	 *
	 * `appParam` :JSON : （可选项）传给目标应用的参数。iOS 平台会将 appParam 里面的值拼接到 iosUrl 后面，比如 iosUrl 为 http://www.baidu.com ，appParam为{"keyword":"APICloud"}，则最后传递给第三方应用的url为http://www.baidu.com?keyword=APICloud
	 *
	 * `iosUrl` :string : （可选项）目标应用的url（iOS平台使用），iOS下必传
	 *
	 * `androidPkg` :string : （可选项）目标应用的包名或 action（Android平台使用），Android下必传
	 *
	 * `mimeType` :string : （可选项）指定目标应用的响应数据类型，如："text/html"（Android平台使用）
	 *
	 * `uri` :string : （可选项）指定目标应用响应的uri（Android平台使用）
	 */
	function openApp(option: api_openApp_Params): void;

	interface api_appInstalled_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

		/**Android 平台为应用包名，iOS 平台为应用定义的 URL Scheme。iOS 中的 URL Scheme 与包名不一样，一个应用只有一个包名，但是可以配置多个 URL Scheme*/
		appBundle: string;

	}
	/**
	 * `判断设备上面是否已安装指定应用`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 *
	 * `appBundle` :string : Android 平台为应用包名，iOS 平台为应用定义的 URL Scheme。iOS 中的 URL Scheme 与包名不一样，一个应用只有一个包名，但是可以配置多个 URL Scheme
	 */
	function appInstalled(option: api_appInstalled_Params): void;

	function rebootApp(): void;

	interface api_openWidget_Params {
		/**（可选项）widget的id*/
		id: string;

		/**（可选项）widget的根目录，该目录下面放置有config.xml等文件。通过传入此字段，可以打开放置在任意位置的widget。注意若传了id字段，此字段将被忽略*/
		path: string;

		/**（可选项）widget 参数，在新打开的 widget 里面的页面中通过 api.wgtParam 获取*/
		wgtParam: JSON;

		/**（可选项）在新打开的 widget 里面的页面中是否支持长按退出，只支持iOS。*/
		longPressToExit: boolean;

		/**（可选项）动画参数，不传时使用默认动画*/
		animation: JSON;

	}
	/**
	 * `打开 Widget，若此 widget 已经被打开，则会把其调整到最前面显示`
	 * ========params==========
	 *
	 * `id` :string : （可选项）widget的id
	 *
	 * `path` :string : （可选项）widget的根目录，该目录下面放置有config.xml等文件。通过传入此字段，可以打开放置在任意位置的widget。注意若传了id字段，此字段将被忽略
	 *
	 * `wgtParam` :JSON : （可选项）widget 参数，在新打开的 widget 里面的页面中通过 api.wgtParam 获取
	 *
	 * `longPressToExit` :boolean : （可选项）在新打开的 widget 里面的页面中是否支持长按退出，只支持iOS。
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时使用默认动画
	 */
	function openWidget(option: api_openWidget_Params): void;

	interface api_closeWidget_Params {
		/**（可选项）widget 的 ID*/
		id: string;

		/**（可选项）返回给上个 widget 的返回值*/
		retData: JSON;

		/**（可选项）是否静默退出应用，只在主 widget 中有效。当为 false 时，引擎会弹出对话框询问是否退出应用*/
		silent: boolean;

		/**（可选项）动画参数，不传时使用默认动画*/
		animation: JSON;

	}
	/**
	 * `关闭指定widget，也可以关闭应用`
	 * ========params==========
	 *
	 * `id` :string : （可选项）widget 的 ID
	 *
	 * `retData` :JSON : （可选项）返回给上个 widget 的返回值
	 *
	 * `silent` :boolean : （可选项）是否静默退出应用，只在主 widget 中有效。当为 false 时，引擎会弹出对话框询问是否退出应用
	 *
	 * `animation` :JSON : （可选项）动画参数，不传时使用默认动画
	 */
	function closeWidget(option: api_closeWidget_Params): void;

	interface api_ajax_Params {
		/**请求地址*/
		url: string;

		/**（可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。*/
		encode: boolean;

		/**（可选项）该字段用于传给cancelAjax方法来取消请求，如果传入该字段，请保证各个ajax的tag字段唯一*/
		tag: string;

		/**（可选项）异步请求方法类型*/
		method: string;

		/**（可选项）是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效*/
		cache: boolean;

		/**（可选项）超时时间，单位秒*/
		timeout: number;

		/**（可选项）返回数据类型。若该字段传json，接收到服务器返回的数据后会尝试将其转换成JSON对象，如果无法转成JSON对象，将返回数据类型错误*/
		dataType: string;

		/**（可选项）当响应头里面没有返回字符集编码时，使用此编码来解析数据*/
		charset: string;

		/**（可选项）设置请求头数据。建议里面的key使用首字母大写的形式，如 User-Agent*/
		headers: JSON;

		/**（可选项）是否实时返回上传文件进度*/
		report: boolean;

		/**（可选项）是否需要返回所有 response 信息（包括响应头、消息体、状态码），为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)*/
		returnAll: boolean;

		/**（可选项）POST 数据，method 为 get 时不传。以下字段除了 values 和 files 可以同时使用，其它参数都不能同时使用。*/
		data: JSON;

		/**（可选项）用于https请求开启双向认证的情况下，客户端配置p12安全证书设置。*/
		certificate: JSON;

		/**（可选项）设置请求安全模式。设置后，若检测到数据有安全风险时将返回“不安全的数据”错误*/
		safeMode: string;

		/**（可选项）设置代理请求服务器。*/
		proxy: JSON;

	}
	/**
	 * `跨域异步请求，支持标准HTTP协议，支持HTTPS单向/双向认证请求，支持文件上传，支持缓存。`
	 * ========params==========
	 *
	 * `url` :string : 请求地址
	 *
	 * `encode` :boolean : （可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。
	 *
	 * `tag` :string : （可选项）该字段用于传给cancelAjax方法来取消请求，如果传入该字段，请保证各个ajax的tag字段唯一
	 *
	 * `method` :string : （可选项）异步请求方法类型
	 *
	 * `cache` :boolean : （可选项）是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效
	 *
	 * `timeout` :number : （可选项）超时时间，单位秒
	 *
	 * `dataType` :string : （可选项）返回数据类型。若该字段传json，接收到服务器返回的数据后会尝试将其转换成JSON对象，如果无法转成JSON对象，将返回数据类型错误
	 *
	 * `charset` :string : （可选项）当响应头里面没有返回字符集编码时，使用此编码来解析数据
	 *
	 * `headers` :JSON : （可选项）设置请求头数据。建议里面的key使用首字母大写的形式，如 User-Agent
	 *
	 * `report` :boolean : （可选项）是否实时返回上传文件进度
	 *
	 * `returnAll` :boolean : （可选项）是否需要返回所有 response 信息（包括响应头、消息体、状态码），为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)
	 *
	 * `data` :JSON : （可选项）POST 数据，method 为 get 时不传。以下字段除了 values 和 files 可以同时使用，其它参数都不能同时使用。
	 *
	 * `certificate` :JSON : （可选项）用于https请求开启双向认证的情况下，客户端配置p12安全证书设置。
	 *
	 * `safeMode` :string : （可选项）设置请求安全模式。设置后，若检测到数据有安全风险时将返回“不安全的数据”错误
	 *
	 * `proxy` :JSON : （可选项）设置代理请求服务器。
	 */
	function ajax(option: api_ajax_Params): void;

	interface api_cancelAjax_Params {
		/**请求标识*/
		tag: string;

	}
	/**
	 * `取消异步请求`
	 * ========params==========
	 *
	 * `tag` :string : 请求标识
	 */
	function cancelAjax(option: api_cancelAjax_Params): void;

	interface api_download_Params {
		/**下载地址*/
		url: string;

		/**（可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。*/
		encode: boolean;

		/**（可选项）存储路径，不传时使用自动创建的路径*/
		savePath: string;

		/**（可选项）下载过程是否上报*/
		report: boolean;

		/**（可选项）是否使用本地缓存*/
		cache: boolean;

		/**（可选项）是否允许断点续传*/
		allowResume: boolean;

	}
	/**
	 * `下载文件`
	 * ========params==========
	 *
	 * `url` :string : 下载地址
	 *
	 * `encode` :boolean : （可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。
	 *
	 * `savePath` :string : （可选项）存储路径，不传时使用自动创建的路径
	 *
	 * `report` :boolean : （可选项）下载过程是否上报
	 *
	 * `cache` :boolean : （可选项）是否使用本地缓存
	 *
	 * `allowResume` :boolean : （可选项）是否允许断点续传
	 */
	function download(option: api_download_Params): void;

	interface api_cancelDownload_Params {
		/**下载地址*/
		url: string;

	}
	/**
	 * `取消文件下载`
	 * ========params==========
	 *
	 * `url` :string : 下载地址
	 */
	function cancelDownload(option: api_cancelDownload_Params): void;

	interface api_imageCache_Params {
		/**图片远程地址*/
		url: string;

		/**（可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。*/
		encode: boolean;

		/**（可选项）缓存策略*/
		policy: string;

		/**（可选项）使用缩略图，底层将根据当前系统及设备性能，返回最优的缩略图，有利于提高应用运行及渲染效率*/
		thumbnail: boolean;

		/**（可选项）标识信息，将在回调中返回*/
		tag: string;

	}
	/**
	 * `图片缓存`
	 * ========params==========
	 *
	 * `url` :string : 图片远程地址
	 *
	 * `encode` :boolean : （可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。
	 *
	 * `policy` :string : （可选项）缓存策略
	 *
	 * `thumbnail` :boolean : （可选项）使用缩略图，底层将根据当前系统及设备性能，返回最优的缩略图，有利于提高应用运行及渲染效率
	 *
	 * `tag` :string : （可选项）标识信息，将在回调中返回
	 */
	function imageCache(option: api_imageCache_Params): void;

	interface api_applyCertificates_Params {
		/**证书信息列表*/
		certificates: Array<JSON>;

	}
	/**
	 * `设置全局HTTPS双向认证，客户端P12证书，证书将作用于ajax网络请求，以及openWin、openFrame等加载web页面。此配置与ajax的certificate互斥，即如果ajax配置了certificate，将优先使用ajax出入的certificate。`
	 * ========params==========
	 *
	 * `certificates` :Array<JSON> : 证书信息列表
	 */
	function applyCertificates(option: api_applyCertificates_Params): void;

	interface api_readFile_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

		/**文件路径，支持绝对路径和文件路径协议如fs://、widget://等*/
		path: string;

	}
	/**
	 * `读取文本文件内容，只支持utf-8编码文本类型文件`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 *
	 * `path` :string : 文件路径，支持绝对路径和文件路径协议如fs://、widget://等
	 */
	function readFile(option: api_readFile_Params): void;

	interface api_writeFile_Params {
		/**文件路径，支持绝对路径和文件路径协议如fs://、cache://等，不支持widget://目录，该目录只读*/
		path: string;

		/**文件内容*/
		data: string;

		/**是否以追加方式写入数据，默认会清除之前文件内容*/
		append: boolean;

	}
	/**
	 * `写入内容到文本文件`
	 * ========params==========
	 *
	 * `path` :string : 文件路径，支持绝对路径和文件路径协议如fs://、cache://等，不支持widget://目录，该目录只读
	 *
	 * `data` :string : 文件内容
	 *
	 * `append` :boolean : 是否以追加方式写入数据，默认会清除之前文件内容
	 */
	function writeFile(option: api_writeFile_Params): void;

	interface api_setPrefs_Params {
		/**键*/
		key: string;

		/**值*/
		value: string;

	}
	/**
	 * `设置偏好数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :string : 值
	 */
	function setPrefs(option: api_setPrefs_Params): void;

	interface api_getPrefs_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

		/**键*/
		key: string;

	}
	/**
	 * `获取偏好设置值`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 *
	 * `key` :string : 键
	 */
	function getPrefs(option: api_getPrefs_Params): void;

	interface api_removePrefs_Params {
		/**键*/
		key: string;

	}
	/**
	 * `删除偏好设置值`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	function removePrefs(option: api_removePrefs_Params): void;

	interface api_setGlobalData_Params {
		/**键*/
		key: string;

		/**值*/
		value: string;

	}
	/**
	 * `设置全局数据，数据只存储在内存中，不会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :string : 值
	 */
	function setGlobalData(option: api_setGlobalData_Params): void;

	interface api_getGlobalData_Params {
		/**键*/
		key: string;

	}
	/**
	 * `获取全局数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	function getGlobalData(option: api_getGlobalData_Params): void;

	interface api_clearCache_Params {
		/**（可选项）清除多少天前的缓存*/
		timeThreshold: number;

	}
	/**
	 * `清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。`
	 * ========params==========
	 *
	 * `timeThreshold` :number : （可选项）清除多少天前的缓存
	 */
	function clearCache(option: api_clearCache_Params): void;

	interface api_getCacheSize_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

	}
	/**
	 * `获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 */
	function getCacheSize(option: api_getCacheSize_Params): void;

	interface api_getTotalSpace_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

	}
	/**
	 * `获取总存储空间大小`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 */
	function getTotalSpace(option: api_getTotalSpace_Params): void;

	interface api_getFreeDiskSpace_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

	}
	/**
	 * `获取剩余存储空间大小`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 */
	function getFreeDiskSpace(option: api_getFreeDiskSpace_Params): void;

	interface api_loadSecureValue_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

		/**键*/
		key: string;

	}
	/**
	 * `从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录，配置方式：`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 *
	 * `key` :string : 键
	 */
	function loadSecureValue(option: api_loadSecureValue_Params): void;

	interface api_addEventListener_Params {
		name: eventType
	}
	/**
	* 监听事件，支持系统事件和自定义事件
	*
	* @params params
	*
	* - name: string; 自定义事件或系统事件名称
	*
	* - extra: JSON; 附加字段。一些特定事件可能需要提供额外的参数
	*
	*/
	function addEventListener(params: api_addEventListener_Params, callback: (ret, err) => void): void;

	interface api_removeEventListener_Params {
		/**自定义事件或系统事件名称（详见[事件](!Event)）*/
		name: string;

	}
	/**
	 * `移除事件监听`
	 * ========params==========
	 *
	 * `name` :string : 自定义事件或系统事件名称（详见[事件](!Event)）
	 */
	function removeEventListener(option: api_removeEventListener_Params): void;

	interface api_sendEvent_Params {
		/**任意自定义事件的名称，比如：apprunning、appover等*/
		name: string;

		/**（可选项）附带的参数。在监听页面的回调里面通过 ret.value 获取。*/
		extra: string;

	}
	/**
	 * `将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。`
	 * ========params==========
	 *
	 * `name` :string : 任意自定义事件的名称，比如：apprunning、appover等
	 *
	 * `extra` :string : （可选项）附带的参数。在监听页面的回调里面通过 ret.value 获取。
	 */
	function sendEvent(option: api_sendEvent_Params): void;

	interface api_accessNative_Params {
		/**消息名称。*/
		name: string;

		/**（可选项）附带的参数。*/
		extra: JSON;

	}
	/**
	 * `使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。`
	 * ========params==========
	 *
	 * `name` :string : 消息名称。
	 *
	 * `extra` :JSON : （可选项）附带的参数。
	 */
	function accessNative(option: api_accessNative_Params): void;

	interface api_notification_Params {
		/**（可选项）伴随节奏的震动，时间数组，单位：毫秒。iOS平台震动时间为固定值；Android平台节奏为【等待-震动-等待-震动..】，例如[100, 500, 100, 500]表现效果为：等待100毫秒-震动500毫秒-等待100毫秒-震动500毫秒*/
		vibrate: Array;

		/**（可选项）提示音，默认为系统设置的提示音。Android支持传入widget协议音频文件，例如：widget://res/horse.mp3；当实现闹钟功能时，iOS只支持widget://路径协议*/
		sound: string;

		/**（可选项）设备提示灯是否闪烁*/
		light: boolean;

		/**（可选项）弹出通知到状态栏。弹出时是否震动或响铃，可通过设置vibrate，sound等字段配合实现。*/
		notify: JSON;

		/**（可选项）设置闹铃。与notify配合使用，即如果设置了闹铃，那么对应的notify将在设定的闹铃时间触发*/
		alarm: JSON;

	}
	/**
	 * `向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。`
	 * ========params==========
	 *
	 * `vibrate` :Array : （可选项）伴随节奏的震动，时间数组，单位：毫秒。iOS平台震动时间为固定值；Android平台节奏为【等待-震动-等待-震动..】，例如[100, 500, 100, 500]表现效果为：等待100毫秒-震动500毫秒-等待100毫秒-震动500毫秒
	 *
	 * `sound` :string : （可选项）提示音，默认为系统设置的提示音。Android支持传入widget协议音频文件，例如：widget://res/horse.mp3；当实现闹钟功能时，iOS只支持widget://路径协议
	 *
	 * `light` :boolean : （可选项）设备提示灯是否闪烁
	 *
	 * `notify` :JSON : （可选项）弹出通知到状态栏。弹出时是否震动或响铃，可通过设置vibrate，sound等字段配合实现。
	 *
	 * `alarm` :JSON : （可选项）设置闹铃。与notify配合使用，即如果设置了闹铃，那么对应的notify将在设定的闹铃时间触发
	 */
	function notification(option: api_notification_Params): void;

	interface api_cancelNotification_Params {
		/**（可选项）调用 notification 方法时返回的 id*/
		id: string;

	}
	/**
	 * `取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃`
	 * ========params==========
	 *
	 * `id` :string : （可选项）调用 notification 方法时返回的 id
	 */
	function cancelNotification(option: api_cancelNotification_Params): void;

	interface api_startLocation_Params {
		/**（可选项）定位精度*/
		accuracy: string;

		/**（可选项）位置更新所需最小距离（单位米）*/
		filter: number;

		/**（可选项）获取到位置信息后是否自动停止定位*/
		autoStop: boolean;

	}
	/**
	 * `调用系统自带定位功能，开始定位`
	 * ========params==========
	 *
	 * `accuracy` :string : （可选项）定位精度
	 *
	 * `filter` :number : （可选项）位置更新所需最小距离（单位米）
	 *
	 * `autoStop` :boolean : （可选项）获取到位置信息后是否自动停止定位
	 */
	function startLocation(option: api_startLocation_Params): void;

	function stopLocation(): void;

	function getLocation(): void;

	interface api_startSensor_Params {
		/**传感器类型*/
		type: string;

	}
	/**
	 * `开启传感器`
	 * ========params==========
	 *
	 * `type` :string : 传感器类型
	 */
	function startSensor(option: api_startSensor_Params): void;

	interface api_stopSensor_Params {
		/**传感器类型（详见[传感器类型](!Constant#b2)常量）*/
		type: string;

	}
	/**
	 * `停止传感器`
	 * ========params==========
	 *
	 * `type` :string : 传感器类型（详见[传感器类型](!Constant#b2)常量）
	 */
	function stopSensor(option: api_stopSensor_Params): void;

	interface api_call_Params {
		/**（可选项）打电话类型*/
		type: string;

		/**电话号码*/
		number: string;

	}
	/**
	 * `拨打电话或进行faceTime`
	 * ========params==========
	 *
	 * `type` :string : （可选项）打电话类型
	 *
	 * `number` :string : 电话号码
	 */
	function call(option: api_call_Params): void;

	interface api_sms_Params {
		/**电话号码*/
		numbers: Array;

		/**文本内容*/
		text: string;

		/**（可选项）是否后台发送，只支持Android*/
		silent: boolean;

	}
	/**
	 * `调用系统短信界面发送短信，或者后台直接发送短信`
	 * ========params==========
	 *
	 * `numbers` :Array : 电话号码
	 *
	 * `text` :string : 文本内容
	 *
	 * `silent` :boolean : （可选项）是否后台发送，只支持Android
	 */
	function sms(option: api_sms_Params): void;

	interface api_mail_Params {
		/**收件人*/
		recipients: Array;

		/**邮件主题*/
		subject: string;

		/**（可选项）邮件内容*/
		body: string;

		/**（可选项）附件地址。支持fs://协议，以及其他模块或者api返回的路径，附件必须是位于设备公共存储空间，系统邮件APP能访问到的存储。*/
		attachments: Array;

	}
	/**
	 * `发送邮件`
	 * ========params==========
	 *
	 * `recipients` :Array : 收件人
	 *
	 * `subject` :string : 邮件主题
	 *
	 * `body` :string : （可选项）邮件内容
	 *
	 * `attachments` :Array : （可选项）附件地址。支持fs://协议，以及其他模块或者api返回的路径，附件必须是位于设备公共存储空间，系统邮件APP能访问到的存储。
	 */
	function mail(option: api_mail_Params): void;

	function openContacts(): void;

	interface api_setFullScreen_Params {
		/**是否全屏*/
		fullScreen: boolean;

		/**在全屏时是否同时隐藏/显示虚拟导航栏。仅对带有虚拟导航栏的Android设备有效*/
		optNav: boolean;

		/**（可选项）状态栏显示隐藏的动画效果，只iOS有效*/
		animation: string;

	}
	/**
	 * `设置是否全屏`
	 * ========params==========
	 *
	 * `fullScreen` :boolean : 是否全屏
	 *
	 * `optNav` :boolean : 在全屏时是否同时隐藏/显示虚拟导航栏。仅对带有虚拟导航栏的Android设备有效
	 *
	 * `animation` :string : （可选项）状态栏显示隐藏的动画效果，只iOS有效
	 */
	function setFullScreen(option: api_setFullScreen_Params): void;

	interface api_setStatusBarStyle_Params {
		/**（可选项）状态栏样式，支持iOS，Android支持小米MIUI6.0及以上手机，魅族Flyme4.0及以上手机，其他Android6.0及以上手机。Android因设备厂商定制差异，频繁切换style不一定生效。*/
		style: string;

		/**（可选项）状态栏背景颜色，只 Android 5.0 及以上有效*/
		color: string;

		/**（可选项）是否有动画效果，只iOS有效*/
		animated: boolean;

	}
	/**
	 * `设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色`
	 *
	 * ========params==========
	 *
	 * `style` :string : （可选项）状态栏样式，支持iOS，Android支持小米MIUI6.0及以上手机，魅族Flyme4.0及以上手机，其他Android6.0及以上手机。Android因设备厂商定制差异，频繁切换style不一定生效。
	 *
	 * `color` :string : （可选项）状态栏背景颜色，只 Android 5.0 及以上有效
	 *
	 * `animated` :boolean : （可选项）是否有动画效果，只iOS有效
	 */
	function setStatusBarStyle(option: api_setStatusBarStyle_Params): void;

	interface api_setScreenOrientation_Params {
		/**旋转屏幕到指定方向，或根据重力感应自动旋转；当前为横屏时，若想只在横屏间根据重力切换，则可以传 auto_landscape，竖屏间切换则传 auto_portrait。*/
		orientation: string;

	}
	/**
	 * `设置屏幕旋转方向`
	 * ========params==========
	 *
	 * `orientation` :string : 旋转屏幕到指定方向，或根据重力感应自动旋转；当前为横屏时，若想只在横屏间根据重力切换，则可以传 auto_landscape，竖屏间切换则传 auto_portrait。
	 */
	function setScreenOrientation(option: api_setScreenOrientation_Params): void;

	interface api_setKeepScreenOn_Params {
		/**是否禁止屏幕休眠*/
		keepOn: boolean;

	}
	/**
	 * `设置是否禁止屏幕休眠`
	 * ========params==========
	 *
	 * `keepOn` :boolean : 是否禁止屏幕休眠
	 */
	function setKeepScreenOn(option: api_setKeepScreenOn_Params): void;

	function toLauncher(): void;

	interface api_setScreenSecure_Params {
		/**是否禁止截屏*/
		secure: boolean;

	}
	/**
	 * `设置是否禁止截屏，只支持Android`
	 * ========params==========
	 *
	 * `secure` :boolean : 是否禁止截屏
	 */
	function setScreenSecure(option: api_setScreenSecure_Params): void;

	interface api_setAppIconBadge_Params {
		/**显示在应用图标右上角的数字。为0时表示清除应用图标上显示的数字*/
		badge: number;

	}
	/**
	 * `设置应用图标右上角数字，支持所有 iOS 手机，以及部分 Android 手机，如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果`
	 * ========params==========
	 *
	 * `badge` :number : 显示在应用图标右上角的数字。为0时表示清除应用图标上显示的数字
	 */
	function setAppIconBadge(option: api_setAppIconBadge_Params): void;

	interface api_getPhoneNumber_Params {
		/**执行结果的返回方式。为false时通过callback返回，为true时直接返回。*/
		sync: boolean;

	}
	/**
	 * `获取本机电话号码，只支持 Android 部分手机`
	 * ========params==========
	 *
	 * `sync` :boolean : 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 */
	function getPhoneNumber(option: api_getPhoneNumber_Params): void;

	interface api_hasPermission_Params {
		/**权限列表。*/
		list: Array;

	}
	interface api_hasPermission_ret {
		/** 权限名，字符串类型*/
		name: string;

		/** 是否允许，如果从未请求过该权限或者用户未做出过选择时将返回false，布尔类型*/
		granted: boolean;

		/** 是否从未请求过该权限或者用户未做出过选择，只支持iOS，注意：请求notification权限时无法获取该状态，布尔类型*/
		undetermined: boolean;

	}
	/**
	 * `关于动态权限：Android系统自6.0开始，提供了同IOS系统使用体验一致的动态权限机制：对于敏感权限，如获取手机ID | IMEI，访问相册存储，定位，录音，拍照，录像等，需要在APP运行过程中动态向用户申请，用户同意后方可使用相应的功能。`
	 * ========params==========
	 *
	 * `list` :Array : 权限列表。
	 */
	function hasPermission(option: api_hasPermission_Params): Array<api_hasPermission_ret>

	interface api_requestPermission_Params {
		/**权限列表。*/
		list: Array;

		/**请求跟踪码，用于回调结果，只支持Android。*/
		code: number;

	}
	/**
	 * `向系统请求某个或多个权限。为帮助您更好的使用该接口，论坛维护了一个[示例](https://community.apicloud.com/bbs/thread-110959-1-1.html)。`
	 * ========params==========
	 *
	 * `list` :Array : 权限列表。
	 *
	 * `code` :number : 请求跟踪码，用于回调结果，只支持Android。
	 */
	function requestPermission(option: api_requestPermission_Params): void;

	function getInterfaceStyle(): void;

	interface api_setInterfaceStyle_Params {
		/**（可选项）界面风格，取值范围：light、dark*/
		style: string;

	}
	/**
	 * `设置用户界面风格，只支持iOS 13及以上系统。`
	 * ========params==========
	 *
	 * `style` :string : （可选项）界面风格，取值范围：light、dark
	 */
	function setInterfaceStyle(option: api_setInterfaceStyle_Params): void;

	interface api_alert_Params {
		/**（可选项）标题*/
		title?: string;

		/**（可选项）内容*/
		msg?: string;

		/**（可选项）按钮*/
		buttons?: Array;

	}
	/**
	 * `弹出带一个按钮的对话框，更多按钮的对话框请使用confirm方法`
	 * ========params==========
	 *
	 * `title` :string : （可选项）标题
	 *
	 * `msg` :string : （可选项）内容
	 *
	 * `buttons` :Array : （可选项）按钮
	 */
	function alert(option: api_alert_Params): void;

	interface api_confirm_Params {
		/**（可选项）标题*/
		title: string;

		/**（可选项）内容*/
		msg: string;

		/**（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮*/
		buttons: Array;

	}
	/**
	 * `弹出带两个或三个按钮的confirm对话框`
	 * ========params==========
	 *
	 * `title` :string : （可选项）标题
	 *
	 * `msg` :string : （可选项）内容
	 *
	 * `buttons` :Array : （可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮
	 */
	function confirm(option: api_confirm_Params): void;

	interface api_prompt_Params {
		/**（可选项）标题*/
		title: string;

		/**（可选项）内容*/
		msg: string;

		/**（可选项）输入框里面的默认内容*/
		text: string;

		/**（可选项）输入类型，不同输入类型弹出键盘类型不同，取值范围（text、password、number、email、url）*/
		type: string;

		/**（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮*/
		buttons: Array;

	}
	/**
	 * `弹出带两个或三个按钮和输入框的对话框`
	 * ========params==========
	 *
	 * `title` :string : （可选项）标题
	 *
	 * `msg` :string : （可选项）内容
	 *
	 * `text` :string : （可选项）输入框里面的默认内容
	 *
	 * `type` :string : （可选项）输入类型，不同输入类型弹出键盘类型不同，取值范围（text、password、number、email、url）
	 *
	 * `buttons` :Array : （可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮
	 */
	function prompt(option: api_prompt_Params): void;

	interface api_actionSheet_Params {
		/**（可选项）标题*/
		title: string;

		/**（可选项）取消按钮标题*/
		cancelTitle: string;

		/**（可选项）红色警示按钮标题，一般用于做一些删除之类操作*/
		destructiveTitle: string;

		/**（可选项）其它按钮*/
		buttons: Array;

		/**（可选项）样式设置，不传时使用默认样式*/
		style: JSON;

	}
	/**
	 * `底部弹出框`
	 * ========params==========
	 *
	 * `title` :string : （可选项）标题
	 *
	 * `cancelTitle` :string : （可选项）取消按钮标题
	 *
	 * `destructiveTitle` :string : （可选项）红色警示按钮标题，一般用于做一些删除之类操作
	 *
	 * `buttons` :Array : （可选项）其它按钮
	 *
	 * `style` :JSON : （可选项）样式设置，不传时使用默认样式
	 */
	function actionSheet(option: api_actionSheet_Params): void;

	interface api_showProgress_Params {
		/**（可选项）进度提示框风格*/
		style: string;

		/**（可选项）进度提示框动画类型*/
		animationType: string;

		/**（可选项）标题*/
		title: string;

		/**（可选项）内容*/
		text: string;

		/**（可选项）是否模态，模态时整个页面将不可交互*/
		modal: boolean;

	}
	/**
	 * `显示进度提示框`
	 * ========params==========
	 *
	 * `style` :string : （可选项）进度提示框风格
	 *
	 * `animationType` :string : （可选项）进度提示框动画类型
	 *
	 * `title` :string : （可选项）标题
	 *
	 * `text` :string : （可选项）内容
	 *
	 * `modal` :boolean : （可选项）是否模态，模态时整个页面将不可交互
	 */
	function showProgress(option: api_showProgress_Params): void;

	function hideProgress(): void;

	interface api_toast_Params {
		/**提示消息*/
		msg: string;

		/**（可选项）持续时长，单位：毫秒*/
		duration: number;

		/**（可选项）弹出位置，顶部、中间或底部*/
		location: string;

		/**（可选项）是否是全局的toast。若为false，toast将只在当前window范围可见；若为true，安卓手机上面弹出的位置将会固定在底部区域。*/
		global: boolean;

	}
	/**
	 * `弹出一个定时自动关闭的提示框`
	 * ========params==========
	 *
	 * `msg` :string : 提示消息
	 *
	 * `duration` :number : （可选项）持续时长，单位：毫秒
	 *
	 * `location` :string : （可选项）弹出位置，顶部、中间或底部
	 *
	 * `global` :boolean : （可选项）是否是全局的toast。若为false，toast将只在当前window范围可见；若为true，安卓手机上面弹出的位置将会固定在底部区域。
	 */
	function toast(option: api_toast_Params): void;

	interface api_openPicker_Params {
		/**拾取器类型*/
		type: string;

		/**（可选项）时间格式化字符串，格式yyyy-MM-dd HH:mm*/
		date: string;

		/**（可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm，只iOS有效*/
		minDate: string;

		/**（可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm，只iOS有效*/
		maxDate: string;

		/**（可选项）显示在拾取器上面的标题*/
		title: string;

		/**（可选项）iPad中显示时，箭头指向的位置，只iPad有效*/
		arrowRect: JSON;

		/**（可选项）iPad中显示时，箭头指向的方向，只iPad有效*/
		arrowDirection: string;

	}
	/**
	 * `打开时间选择器`
	 * ========params==========
	 *
	 * `type` :string : 拾取器类型
	 *
	 * `date` :string : （可选项）时间格式化字符串，格式yyyy-MM-dd HH:mm
	 *
	 * `minDate` :string : （可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm，只iOS有效
	 *
	 * `maxDate` :string : （可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm，只iOS有效
	 *
	 * `title` :string : （可选项）显示在拾取器上面的标题
	 *
	 * `arrowRect` :JSON : （可选项）iPad中显示时，箭头指向的位置，只iPad有效
	 *
	 * `arrowDirection` :string : （可选项）iPad中显示时，箭头指向的方向，只iPad有效
	 */
	function openPicker(option: api_openPicker_Params): void;

	interface api_setRefreshHeaderInfo_Params {
		/**（可选项）是否可见*/
		visible: boolean;

		/**（可选项）背景颜色*/
		bgColor: string;

		/**（可选项）进度条的颜色，defaultRefreshHeader为swipe时生效。*/
		pathColor: string;

		/**（可选项）上拉下拉时的图片地址，defaultRefreshHeader为pull时生效。*/
		loadingImg: string;

		/**（可选项）文本颜色，defaultRefreshHeader为pull时生效。*/
		textColor: string;

		/**（可选项）下拉文字描述，defaultRefreshHeader为pull时生效。*/
		textDown: string;

		/**（可选项）松开时文字描述，defaultRefreshHeader为pull时生效。*/
		textUp: string;

		/**（可选项）加载状态文字描述，defaultRefreshHeader为pull时生效。*/
		textLoading: string;

		/**（可选项）更新时间文字描述，defaultRefreshHeader为pull时生效。*/
		textTime: string;

		/**（可选项）是否显示更新时间，defaultRefreshHeader为pull时生效。*/
		showTime: boolean;

	}
	/**
	 * `显示默认下拉刷新组件，使用默认下拉刷新组件时会自动重新设置页面的弹动属性。`
	 * ========params==========
	 *
	 * `visible` :boolean : （可选项）是否可见
	 *
	 * `bgColor` :string : （可选项）背景颜色
	 *
	 * `pathColor` :string : （可选项）进度条的颜色，defaultRefreshHeader为swipe时生效。
	 *
	 * `loadingImg` :string : （可选项）上拉下拉时的图片地址，defaultRefreshHeader为pull时生效。
	 *
	 * `textColor` :string : （可选项）文本颜色，defaultRefreshHeader为pull时生效。
	 *
	 * `textDown` :string : （可选项）下拉文字描述，defaultRefreshHeader为pull时生效。
	 *
	 * `textUp` :string : （可选项）松开时文字描述，defaultRefreshHeader为pull时生效。
	 *
	 * `textLoading` :string : （可选项）加载状态文字描述，defaultRefreshHeader为pull时生效。
	 *
	 * `textTime` :string : （可选项）更新时间文字描述，defaultRefreshHeader为pull时生效。
	 *
	 * `showTime` :boolean : （可选项）是否显示更新时间，defaultRefreshHeader为pull时生效。
	 */
	function setRefreshHeaderInfo(option: api_setRefreshHeaderInfo_Params): void;

	function setCustomRefreshHeaderInfo(): void;

	function refreshHeaderLoading(): void;

	function refreshHeaderLoadDone(): void;

	interface api_showFloatBox_Params {
		/**（可选项）是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示*/
		preventDefault: boolean;

		/**（可选项）展示在悬浮框中的图片地址*/
		iconPath: string;

		/**（可选项）自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态*/
		duration: string;

	}
	/**
	 * `展示一个悬浮框，浮动在屏幕上。`
	 * ========params==========
	 *
	 * `preventDefault` :boolean : （可选项）是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示
	 *
	 * `iconPath` :string : （可选项）展示在悬浮框中的图片地址
	 *
	 * `duration` :string : （可选项）自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态
	 */
	function showFloatBox(option: api_showFloatBox_Params): void;

	interface api_setMenuItems_Params {
		/**自定义菜单项。自定义菜单项会添加到系统默认菜单项的后面。*/
		customItems: Array;

		/**（可选项）系统菜单项。如果不传该参数，则会显示系统菜单项，自定义菜单项会添加到系统菜单项后面；如果传空数组，则不显示系统菜单项；如果传了非空数组，则显示传入的系统菜单。注意：不同系统版本的系统默认菜单项可能会有所不同，会存在无法屏蔽某些系统菜单的情况。*/
		systemItems: Array;

	}
	/**
	 * `设置选择文字弹出菜单。`
	 * ========params==========
	 *
	 * `customItems` :Array : 自定义菜单项。自定义菜单项会添加到系统默认菜单项的后面。
	 *
	 * `systemItems` :Array : （可选项）系统菜单项。如果不传该参数，则会显示系统菜单项，自定义菜单项会添加到系统菜单项后面；如果传空数组，则不显示系统菜单项；如果传了非空数组，则显示传入的系统菜单。注意：不同系统版本的系统默认菜单项可能会有所不同，会存在无法屏蔽某些系统菜单的情况。
	 */
	function setMenuItems(option: api_setMenuItems_Params): void;

	interface api_getPicture_Params {
		/**（可选项）图片源类型，从相册、图片库或相机获取图片*/
		sourceType: string;

		/**（可选项）返回图片类型，jpg或png*/
		encodingType: string;

		/**（可选项）媒体类型，图片或视频*/
		mediaValue: string;

		/**（可选项）返回数据类型，指定返回图片地址或图片经过base64编码后的字符串*/
		destinationType: string;

		/**（可选项）选择前置或后置摄像头，取值范围（front、rear），只支持iOS*/
		direction: string;

		/**（可选项）是否可以选择图片后进行编辑，支持iOS及部分安卓手机*/
		allowEdit: boolean;

		/**（可选项）是否选择图片后进行预览，只支持iOS。*/
		preview: boolean;

		/**（可选项）图片质量，只针对jpg格式图片（0-100整数）*/
		quality: number;

		/**（可选项）视频质量，调用相机录制视频时该参数生效。取值范围(low、medium、high)，质量越高，录制的视频文件占用存储空间越大。*/
		videoQuality: string;

		/**（可选项）压缩后的图片宽度，图片会按比例适配此宽度*/
		targetWidth: number;

		/**（可选项）压缩后的图片高度，图片会按比例适配此高度*/
		targetHeight: number;

		/**（可选项）拍照或录制视频后是否保存到系统相册目录。注意此处仅是文件系统层面的操作，使用诸如“图库”App仍然有可能查看到。*/
		saveToPhotoAlbum: boolean;

		/**（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。*/
		groupName: string;

	}
	/**
	 * `通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。`
	 * ========params==========
	 *
	 * `sourceType` :string : （可选项）图片源类型，从相册、图片库或相机获取图片
	 *
	 * `encodingType` :string : （可选项）返回图片类型，jpg或png
	 *
	 * `mediaValue` :string : （可选项）媒体类型，图片或视频
	 *
	 * `destinationType` :string : （可选项）返回数据类型，指定返回图片地址或图片经过base64编码后的字符串
	 *
	 * `direction` :string : （可选项）选择前置或后置摄像头，取值范围（front、rear），只支持iOS
	 *
	 * `allowEdit` :boolean : （可选项）是否可以选择图片后进行编辑，支持iOS及部分安卓手机
	 *
	 * `preview` :boolean : （可选项）是否选择图片后进行预览，只支持iOS。
	 *
	 * `quality` :number : （可选项）图片质量，只针对jpg格式图片（0-100整数）
	 *
	 * `videoQuality` :string : （可选项）视频质量，调用相机录制视频时该参数生效。取值范围(low、medium、high)，质量越高，录制的视频文件占用存储空间越大。
	 *
	 * `targetWidth` :number : （可选项）压缩后的图片宽度，图片会按比例适配此宽度
	 *
	 * `targetHeight` :number : （可选项）压缩后的图片高度，图片会按比例适配此高度
	 *
	 * `saveToPhotoAlbum` :boolean : （可选项）拍照或录制视频后是否保存到系统相册目录。注意此处仅是文件系统层面的操作，使用诸如“图库”App仍然有可能查看到。
	 *
	 * `groupName` :string : （可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。
	 */
	function getPicture(option: api_getPicture_Params): void;

	interface api_saveMediaToAlbum_Params {
		/**文件路径，支持网络链接地址、fs://、widget://等扩展文件路径协议，本地文件路径必须带有扩展名*/
		path: string;

		/**（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。*/
		groupName: string;

	}
	/**
	 * `保存图片和视频到系统相册`
	 * ========params==========
	 *
	 * `path` :string : 文件路径，支持网络链接地址、fs://、widget://等扩展文件路径协议，本地文件路径必须带有扩展名
	 *
	 * `groupName` :string : （可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。
	 */
	function saveMediaToAlbum(option: api_saveMediaToAlbum_Params): void;

	interface api_startRecord_Params {
		/**（可选项）文件路径，不传时自动创建路径*/
		path: string;

	}
	/**
	 * `录制amr格式音频`
	 * ========params==========
	 *
	 * `path` :string : （可选项）文件路径，不传时自动创建路径
	 */
	function startRecord(option: api_startRecord_Params): void;

	function stopRecord(): void;

	interface api_startPlay_Params {
		/**文件路径，支持fs://、widget://等文件路径协议*/
		path: string;

	}
	/**
	 * `播放本地音频，支持amr格式`
	 * ========params==========
	 *
	 * `path` :string : 文件路径，支持fs://、widget://等文件路径协议
	 */
	function startPlay(option: api_startPlay_Params): void;

	function stopPlay(): void;

	interface api_openVideo_Params {
		/**本地文件路径（支持fs://路径协议）或者网络资源地址*/
		url: string;

	}
	/**
	 * `打开系统视频播放器`
	 * ========params==========
	 *
	 * `url` :string : 本地文件路径（支持fs://路径协议）或者网络资源地址
	 */
	function openVideo(option: api_openVideo_Params): void;

	function require(moduleName: 'mailUtils'): mailUtils;

	function require(moduleName: 'helper'): helper;

	function require(moduleName: 'phoneStatusOB'): phoneStatusOB;

	function require(moduleName: 'vpnIOS'): vpnIOS;

	function require(moduleName: 'jlLangDetect'): jlLangDetect;

	function require(moduleName: 'audioTrans'): audioTrans;

	function require(moduleName: 'fs'): fs;

	function require(moduleName: 'checknotification'): checknotification;

	function require(moduleName: 'cameraQQ'): cameraQQ;

	function require(moduleName: 'preSensor'): preSensor;

	function require(moduleName: 'keychain'): keychain;

	function require(moduleName: 'compactPicture'): compactPicture;

	function require(moduleName: 'UIImageEdit'): UIImageEdit;

	function require(moduleName: 'videoKit'): videoKit;

	function require(moduleName: 'mMarket'): mMarket;

	function require(moduleName: 'musicList'): musicList;

	function require(moduleName: 'switchLoudspeaker'): switchLoudspeaker;

	function require(moduleName: 'imagePalette'): imagePalette;

	function require(moduleName: 'appshortcut'): appshortcut;

	function require(moduleName: 'backGroundAudioPlayer'): backGroundAudioPlayer;

	function require(moduleName: 'pictureWatermark'): pictureWatermark;

	function require(moduleName: 'androidEmail'): androidEmail;

	function require(moduleName: 'recentPic'): recentPic;

	function require(moduleName: 'FNImageClip'): FNImageClip;

	function require(moduleName: 'imageCutOut'): imageCutOut;

	function require(moduleName: 'fileBrowser'): fileBrowser;

	function require(moduleName: 'cocoVideo'): cocoVideo;

	function require(moduleName: 'webToImage'): webToImage;

	function require(moduleName: 'zxycamera'): zxycamera;

	function require(moduleName: 'webCapturer'): webCapturer;

	function require(moduleName: 'wifiServer'): wifiServer;

	function require(moduleName: 'trans'): trans;

	function require(moduleName: 'netTools'): netTools;

	function require(moduleName: 'launchImage'): launchImage;

	function require(moduleName: 'phoneListener'): phoneListener;

	function require(moduleName: 'acc5Util'): acc5Util;

	function require(moduleName: 'myTimer'): myTimer;

	function require(moduleName: 'notificationUtil'): notificationUtil;

	function require(moduleName: 'vPlayer'): vPlayer;

	function require(moduleName: 'micoMqtt'): micoMqtt;

	function require(moduleName: 'ftpServer'): ftpServer;

	function require(moduleName: 'lockControler'): lockControler;

	function require(moduleName: 'zip'): zip;

	function require(moduleName: 'appManage'): appManage;

	function require(moduleName: 'wmVideoRecorder'): wmVideoRecorder;

	function require(moduleName: 'browser'): browser;

	function require(moduleName: 'videoTool'): videoTool;

	function require(moduleName: 'mp3Recorder'): mp3Recorder;

	function require(moduleName: 'widgetPlan'): widgetPlan;

	function require(moduleName: 'volume'): volume;

	function require(moduleName: 'acWebsocket'): acWebsocket;

	function require(moduleName: 'setJumpNew'): setJumpNew;

	function require(moduleName: 'mobcommonlib'): mobcommonlib;

	function require(moduleName: 'makeSharePic'): makeSharePic;

	function require(moduleName: 'tvcontrol'): tvcontrol;

	function require(moduleName: 'miniAudio'): miniAudio;

	function require(moduleName: 'ARRuler'): ARRuler;

	function require(moduleName: 'patternLock'): patternLock;

	function require(moduleName: 'soundPlayer'): soundPlayer;

	function require(moduleName: 'netSpeed'): netSpeed;

	function require(moduleName: 'easyShareImages'): easyShareImages;

	function require(moduleName: 'fileScan'): fileScan;

	function require(moduleName: 'videoMerge'): videoMerge;

	function require(moduleName: 'svideo'): svideo;

	function require(moduleName: 'bookReader'): bookReader;

	function require(moduleName: 'softInputMgr'): softInputMgr;

	function require(moduleName: 'screenLock'): screenLock;

	function require(moduleName: 'videoScreenshots'): videoScreenshots;

	function require(moduleName: 'judgeNotification'): judgeNotification;

	function require(moduleName: 'replay'): replay;

	function require(moduleName: 'm3u8Downloader'): m3u8Downloader;

	function require(moduleName: 'audioStreamer'): audioStreamer;

	function require(moduleName: 'sysPrint'): sysPrint;

	function require(moduleName: 'photoBrowser'): photoBrowser;

	function require(moduleName: 'mySqlUtils'): mySqlUtils;

	function require(moduleName: 'batteryManager'): batteryManager;

	function require(moduleName: 'myWebSocket'): myWebSocket;

	function require(moduleName: 'imageEdit'): imageEdit;

	function require(moduleName: 'screenClip'): screenClip;

	function require(moduleName: 'sortList'): sortList;

	function require(moduleName: 'iNoRobot'): iNoRobot;

	function require(moduleName: 'sapSso'): sapSso;

	function require(moduleName: 'imageOptim'): imageOptim;

	function require(moduleName: 'audioCombine'): audioCombine;

	function require(moduleName: 'touchDebugger'): touchDebugger;

	function require(moduleName: 'Apple'): Apple;

	function require(moduleName: 'photoSelect'): photoSelect;

	function require(moduleName: 'pdfViewer'): pdfViewer;

	function require(moduleName: 'imageColorParser'): imageColorParser;

	function require(moduleName: 'soundDetection'): soundDetection;

	function require(moduleName: 'uimusic'): uimusic;

	function require(moduleName: 'audioPlayer'): audioPlayer;

	function require(moduleName: 'richText'): richText;

	function require(moduleName: 'cardReader'): cardReader;

	function require(moduleName: 'thumbnailUtil'): thumbnailUtil;

	function require(moduleName: 'checkProxy'): checkProxy;

	function require(moduleName: 'playerCut'): playerCut;

	function require(moduleName: 'editorText'): editorText;

	function require(moduleName: 'touping'): touping;

	function require(moduleName: 'videoCompression'): videoCompression;

	function require(moduleName: 'mySQL'): mySQL;

	function require(moduleName: 'shootPicture'): shootPicture;

	function require(moduleName: 'mosaic'): mosaic;

	function require(moduleName: 'webSocket'): webSocket;

	function require(moduleName: 'cardcamera'): cardcamera;

	function require(moduleName: 'nativeTimer'): nativeTimer;

	function require(moduleName: 'xxtea'): xxtea;

	function require(moduleName: 'epubReader'): epubReader;

	function require(moduleName: 'LBAirDrop'): LBAirDrop;

	function require(moduleName: 'privacy'): privacy;

	function require(moduleName: 'autoStartUp'): autoStartUp;

	function require(moduleName: 'mobilePrint'): mobilePrint;

	function require(moduleName: 'pasteboard'): pasteboard;

	function require(moduleName: 'docReader'): docReader;

	function require(moduleName: 'DRMScreenShot'): DRMScreenShot;

	function require(moduleName: 'networkIndicator'): networkIndicator;

	function require(moduleName: 'audioRecorder'): audioRecorder;

	function require(moduleName: 'idfa'): idfa;

	function require(moduleName: 'alarmNotification'): alarmNotification;

	function require(moduleName: 'tutu'): tutu;

	function require(moduleName: 'FNPhotograph'): FNPhotograph;

	function require(moduleName: 'appmanager'): appmanager;

	function require(moduleName: 'alarmHelper'): alarmHelper;

	function require(moduleName: 'fileReader'): fileReader;

	function require(moduleName: 'macauPay'): macauPay;

	function require(moduleName: 'pdfTrans'): pdfTrans;

	function require(moduleName: 'iTVBox'): iTVBox;

	function require(moduleName: 'audio'): audio;

	function require(moduleName: 'takePicCutOut'): takePicCutOut;

	function require(moduleName: 'shortCut'): shortCut;

	function require(moduleName: 'weChatCamera'): weChatCamera;

	function require(moduleName: 'epub'): epub;

	function require(moduleName: 'checkpush'): checkpush;

	function require(moduleName: 'signature'): signature;

	function require(moduleName: 'kmTimer'): kmTimer;

	function require(moduleName: 'djyPrinter'): djyPrinter;

	function require(moduleName: 'selectFile'): selectFile;

	function require(moduleName: 'whjpdf'): whjpdf;

	function require(moduleName: 'codeLog'): codeLog;

	function require(moduleName: 'xpCheck'): xpCheck;

	function require(moduleName: 'inShare'): inShare;

	function require(moduleName: 'setJump'): setJump;

	function require(moduleName: 'brightness'): brightness;

	function require(moduleName: 'ScreenWake'): ScreenWake;

	function require(moduleName: 'getWebUrl'): getWebUrl;

	function require(moduleName: 'ftpRequest'): ftpRequest;

	function require(moduleName: 'drawingBoard'): drawingBoard;

	function require(moduleName: 'imageSelect'): imageSelect;

	function require(moduleName: 'm3u8CacheServer'): m3u8CacheServer;

	function require(moduleName: 'headphone'): headphone;

	function require(moduleName: 'webSocket2018'): webSocket2018;

	function require(moduleName: 'broadcastList'): broadcastList;

	function require(moduleName: 'moviePlayer'): moviePlayer;

	function require(moduleName: 'vrPlayer'): vrPlayer;

	function require(moduleName: 'monitorFilesChange'): monitorFilesChange;

	function require(moduleName: 'dlna'): dlna;

	function require(moduleName: 'playText'): playText;

	function require(moduleName: 'yyWebImage'): yyWebImage;

	function require(moduleName: 'phoneInfoMore'): phoneInfoMore;

	function require(moduleName: 'webServer'): webServer;

	function require(moduleName: 'downloadManager2'): downloadManager2;

	function require(moduleName: 'playModule'): playModule;

	function require(moduleName: 'circleMenu'): circleMenu;

	function require(moduleName: 'docInteraction'): docInteraction;

	function require(moduleName: 'appUtils'): appUtils;

	function require(moduleName: 'codeScan'): codeScan;

	function require(moduleName: 'jumpbrowser'): jumpbrowser;

	function require(moduleName: 'videoTrans'): videoTrans;

	function require(moduleName: 'zySmallVideo'): zySmallVideo;

	function require(moduleName: 'keepingAppAlive'): keepingAppAlive;

	function require(moduleName: 'androidShortcut'): androidShortcut;

	function require(moduleName: 'iconToImage'): iconToImage;

	function require(moduleName: 'photoPicker'): photoPicker;

	function require(moduleName: 'changeIcon'): changeIcon;

	function require(moduleName: 'netTime'): netTime;

	function require(moduleName: 'promotionLink'): promotionLink;

	function require(moduleName: 'arcColorPicker'): arcColorPicker;

	function require(moduleName: 'downloadManager'): downloadManager;

	function require(moduleName: 'vtingPlayer'): vtingPlayer;

	function require(moduleName: 'easyVideoCompression'): easyVideoCompression;

	function require(moduleName: 'planNotify'): planNotify;

	function require(moduleName: 'dvMonitor'): dvMonitor;

	function require(moduleName: 'audioCover'): audioCover;

	function require(moduleName: 'mobtools'): mobtools;

	function require(moduleName: 'imageCrop'): imageCrop;

	function require(moduleName: 'ACScanner'): ACScanner;

	function require(moduleName: 'videoRecorder'): videoRecorder;

	function require(moduleName: 'startupObject'): startupObject;

	function require(moduleName: 'vtb'): vtb;

	function require(moduleName: 'openAppStore'): openAppStore;

	function require(moduleName: 'dkplayer'): dkplayer;

	function require(moduleName: 'netAudio'): netAudio;

	function require(moduleName: 'scanner'): scanner;

	function require(moduleName: 'iap'): iap;

	function require(moduleName: 'shareTool'): shareTool;

	function require(moduleName: 'plateRecognize'): plateRecognize;

	function require(moduleName: 'yxsConversation'): yxsConversation;

	function require(moduleName: 'wallPaper'): wallPaper;

	function require(moduleName: 'zyPlayVideo'): zyPlayVideo;

	function require(moduleName: 'checkappexist'): checkappexist;

	function require(moduleName: 'openSet'): openSet;

	function require(moduleName: 'HmacSHA256'): HmacSHA256;

	function require(moduleName: 'internationalization'): internationalization;

	function require(moduleName: 'runBackground'): runBackground;

	function require(moduleName: 'db'): db;

	function require(moduleName: 'FNRecordMp3'): FNRecordMp3;

	function require(moduleName: 'miniVR'): miniVR;

	function require(moduleName: 'walletCards'): walletCards;

	function require(moduleName: 'chromeDebug'): chromeDebug;

	function require(moduleName: 'FNScanner'): FNScanner;

	function require(moduleName: 'oxPlayer'): oxPlayer;

	function require(moduleName: 'recMp3'): recMp3;

	function require(moduleName: 'voiceMag'): voiceMag;

	function require(moduleName: 'httpServer'): httpServer;

	function require(moduleName: 'liveAudioPlayer'): liveAudioPlayer;

	function require(moduleName: 'waterImageMark'): waterImageMark;

	function require(moduleName: 'imageTool'): imageTool;

	function require(moduleName: 'floatVideo'): floatVideo;

	function require(moduleName: 'HeartRate'): HeartRate;

	function require(moduleName: 'FNQRcreate'): FNQRcreate;

	function require(moduleName: 'exifInterface'): exifInterface;

	function require(moduleName: 'mdReader'): mdReader;

	function require(moduleName: 'officePreview'): officePreview;

	function require(moduleName: 'FNQRscan'): FNQRscan;

	function require(moduleName: 'sharePics'): sharePics;

	function require(moduleName: 'easyCamera'): easyCamera;

	function require(moduleName: 'cameraWeibo'): cameraWeibo;

	function require(moduleName: 'socketManager'): socketManager;

	function require(moduleName: 'appControl'): appControl;

	function require(moduleName: 'blurredView'): blurredView;

	function require(moduleName: 'logger'): logger;

	function require(moduleName: 'moduleTVKeyApi'): moduleTVKeyApi;

	function require(moduleName: 'mqtt'): mqtt;

	function require(moduleName: 'm3u8Download'): m3u8Download;

	function require(moduleName: 'lottie'): lottie;

	function require(moduleName: 'compressVideo'): compressVideo;

	function require(moduleName: 'weChatVideo'): weChatVideo;

	function require(moduleName: 'selectPic'): selectPic;

	function require(moduleName: 'videoPlayer'): videoPlayer;

	function require(moduleName: 'jsskeNFC'): jsskeNFC;

	function require(moduleName: 'timer'): timer;

	function require(moduleName: 'cnKeyBoard'): cnKeyBoard;

	function require(moduleName: 'appManagerPlus'): appManagerPlus;

	function require(moduleName: 'chromellqDebug'): chromellqDebug;

	function require(moduleName: 'recordVideo'): recordVideo;

	function require(moduleName: 'ytylive'): ytylive;

	function require(moduleName: 'imageBrowser'): imageBrowser;

	function require(moduleName: 'realNetwork'): realNetwork;

	function require(moduleName: 'pdfReader'): pdfReader;

	function require(moduleName: 'aemail'): aemail;

	function require(moduleName: 'customNotification'): customNotification;

	function require(moduleName: 'brightnessUtil'): brightnessUtil;

	function require(moduleName: 'imageFilter'): imageFilter;

	function require(moduleName: 'ttsModule'): ttsModule;

	function require(moduleName: 'mobilePhone'): mobilePhone;

	function require(moduleName: 'photoBrowserTodayNew'): photoBrowserTodayNew;

	function require(moduleName: 'dUserAgent'): dUserAgent;

	function require(moduleName: 'qrScanner'): qrScanner;

	function require(moduleName: 'networkAddress'): networkAddress;

	function require(moduleName: 'speedPlayer'): speedPlayer;

	function require(moduleName: 'apk'): apk;

	function require(moduleName: 'snKVStorage'): snKVStorage;

	function require(moduleName: 'photoStream'): photoStream;

	function require(moduleName: 'playRtsp'): playRtsp;

	function require(moduleName: 'moduleCrop'): moduleCrop;

	function require(moduleName: 'marketScore'): marketScore;

	function require(moduleName: 'UIPhotoViewer'): UIPhotoViewer;

	function require(moduleName: 'androidPdfReader'): androidPdfReader;

	function require(moduleName: 'shareAction'): shareAction;

	function require(moduleName: 'easyVideoPlayer'): easyVideoPlayer;

	function require(moduleName: 'systemTool'): systemTool;

	function require(moduleName: 'imageClip'): imageClip;

	function require(moduleName: 'wxShortVideo'): wxShortVideo;

	function require(moduleName: 'tools'): tools;

	function require(moduleName: 'mam'): mam;

	function require(moduleName: 'mcm'): mcm;

	function require(moduleName: 'msm'): msm;

	function require(moduleName: 'push'): push;

	function require(moduleName: 'dropDownMenu'): dropDownMenu;

	function require(moduleName: 'NVNavigationBar'): NVNavigationBar;

	function require(moduleName: 'scrollRotation'): scrollRotation;

	function require(moduleName: 'arcMenu'): arcMenu;

	function require(moduleName: 'circularMenu'): circularMenu;

	function require(moduleName: 'tuberBar'): tuberBar;

	function require(moduleName: 'sideMenu'): sideMenu;

	function require(moduleName: 'navigationMenu'): navigationMenu;

	function require(moduleName: 'navigationBar'): navigationBar;

	function require(moduleName: 'actionButton'): actionButton;

	function require(moduleName: 'tabBarMenu'): tabBarMenu;

	function require(moduleName: 'bubbleMenu'): bubbleMenu;

	function require(moduleName: 'NVTabBarAnimation'): NVTabBarAnimation;

	function require(moduleName: 'MNActionButton'): MNActionButton;

	function require(moduleName: 'MNRotationMenu'): MNRotationMenu;

	function require(moduleName: 'MNPopups'): MNPopups;

	function require(moduleName: 'stackMenu'): stackMenu;

	function require(moduleName: 'MNNavigationMenu'): MNNavigationMenu;

	function require(moduleName: 'MNStack'): MNStack;

	function require(moduleName: 'NVTabBar'): NVTabBar;

	function require(moduleName: 'pullMenu'): pullMenu;

	function require(moduleName: 'tabBar'): tabBar;

	function require(moduleName: 'columnBar'): columnBar;

	function require(moduleName: 'gesturePassword'): gesturePassword;

	function require(moduleName: 'UIPullRefreshDrop'): UIPullRefreshDrop;

	function require(moduleName: 'doubleBarChart'): doubleBarChart;

	function require(moduleName: 'UICircleSlider'): UICircleSlider;

	function require(moduleName: 'customSelector'): customSelector;

	function require(moduleName: 'photoNews_tt'): photoNews_tt;

	function require(moduleName: 'UIPullRefresh'): UIPullRefresh;

	function require(moduleName: 'suspensionWindow'): suspensionWindow;

	function require(moduleName: 'dtCarKeyBoard'): dtCarKeyBoard;

	function require(moduleName: 'miCalendar'): miCalendar;

	function require(moduleName: 'zjCartList'): zjCartList;

	function require(moduleName: 'UIListMeeting'): UIListMeeting;

	function require(moduleName: 'UIListView'): UIListView;

	function require(moduleName: 'slipList'): slipList;

	function require(moduleName: 'pbTouTiao'): pbTouTiao;

	function require(moduleName: 'compass'): compass;

	function require(moduleName: 'scrollPicture'): scrollPicture;

	function require(moduleName: 'listContact'): listContact;

	function require(moduleName: 'UIListContactsSelect'): UIListContactsSelect;

	function require(moduleName: 'UIListGroup'): UIListGroup;

	function require(moduleName: 'iosDialog4A'): iosDialog4A;

	function require(moduleName: 'UIListCard'): UIListCard;

	function require(moduleName: 'UIListInformation'): UIListInformation;

	function require(moduleName: 'UICustomPicker'): UICustomPicker;

	function require(moduleName: 'payPasswordPlus'): payPasswordPlus;

	function require(moduleName: 'slider'): slider;

	function require(moduleName: 'calendar'): calendar;

	function require(moduleName: 'UIListBook'): UIListBook;

	function require(moduleName: 'UISelector'): UISelector;

	function require(moduleName: 'addressSel'): addressSel;

	function require(moduleName: 'photoBrowserWeiBo'): photoBrowserWeiBo;

	function require(moduleName: 'pullRefreshLoop'): pullRefreshLoop;

	function require(moduleName: 'UIPullRefreshRiding'): UIPullRefreshRiding;

	function require(moduleName: 'passwordKeyboard'): passwordKeyboard;

	function require(moduleName: 'dtSelector'): dtSelector;

	function require(moduleName: 'UICityList'): UICityList;

	function require(moduleName: 'shakeView'): shakeView;

	function require(moduleName: 'photoBrowserQQ'): photoBrowserQQ;

	function require(moduleName: 'barChart'): barChart;

	function require(moduleName: 'dialogBox'): dialogBox;

	function require(moduleName: 'UIAlert'): UIAlert;

	function require(moduleName: 'kLoading'): kLoading;

	function require(moduleName: 'UISwitchButton'): UISwitchButton;

	function require(moduleName: 'UIScrollPromptView'): UIScrollPromptView;

	function require(moduleName: 'iOSDialog'): iOSDialog;

	function require(moduleName: 'UIChatUnit'): UIChatUnit;

	function require(moduleName: 'UIMultiSelector'): UIMultiSelector;

	function require(moduleName: 'button'): button;

	function require(moduleName: 'brokenLine'): brokenLine;

	function require(moduleName: 'UIPieChart'): UIPieChart;

	function require(moduleName: 'groupList'): groupList;

	function require(moduleName: 'thwartwiseBarChart'): thwartwiseBarChart;

	function require(moduleName: 'doubleSlider'): doubleSlider;

	function require(moduleName: 'UIChatBar'): UIChatBar;

	function require(moduleName: 'UIAlbumSelector'): UIAlbumSelector;

	function require(moduleName: 'UIAlbum'): UIAlbum;

	function require(moduleName: 'UIWebBrowser'): UIWebBrowser;

	function require(moduleName: 'noticeView'): noticeView;

	function require(moduleName: 'UIListSearch'): UIListSearch;

	function require(moduleName: 'keyboard'): keyboard;

	function require(moduleName: 'UIChatInput'): UIChatInput;

	function require(moduleName: 'frameTree'): frameTree;

	function require(moduleName: 'UIAlbumBrowser'): UIAlbumBrowser;

	function require(moduleName: 'circleProgress'): circleProgress;

	function require(moduleName: 'UIListContactsPlus'): UIListContactsPlus;

	function require(moduleName: 'liveUI'): liveUI;

	function require(moduleName: 'constactOperate'): constactOperate;

	function require(moduleName: 'UIChartline'): UIChartline;

	function require(moduleName: 'panorama'): panorama;

	function require(moduleName: 'UIInput'): UIInput;

	function require(moduleName: 'keyBoardMgr'): keyBoardMgr;

	function require(moduleName: 'periodSelector'): periodSelector;

	function require(moduleName: 'toastmoduleforjs'): toastmoduleforjs;

	function require(moduleName: 'kLine'): kLine;

	function require(moduleName: 'cxChatbox'): cxChatbox;

	function require(moduleName: 'inputField'): inputField;

	function require(moduleName: 'timeSelector'): timeSelector;

	function require(moduleName: 'fourStageLinkage'): fourStageLinkage;

	function require(moduleName: 'payPasswordInput'): payPasswordInput;

	function require(moduleName: 'loadingLabel'): loadingLabel;

	function require(moduleName: 'photoBrowserWeiXin'): photoBrowserWeiXin;

	function require(moduleName: 'slidingList'): slidingList;

	function require(moduleName: 'UIActionSelector'): UIActionSelector;

	function require(moduleName: 'UIBlurEffect'): UIBlurEffect;

	function require(moduleName: 'floatModule'): floatModule;

	function require(moduleName: 'zyPatternLock'): zyPatternLock;

	function require(moduleName: 'searchBar'): searchBar;

	function require(moduleName: 'UIListCheck'): UIListCheck;

	function require(moduleName: 'UIScrollPlayer'): UIScrollPlayer;

	function require(moduleName: 'UILineChart'): UILineChart;

	function require(moduleName: 'UIPartCircleProgress'): UIPartCircleProgress;

	function require(moduleName: 'hintChatBox'): hintChatBox;

	function require(moduleName: 'UIMediaScanner'): UIMediaScanner;

	function require(moduleName: 'addressView'): addressView;

	function require(moduleName: 'screenTaskUI'): screenTaskUI;

	function require(moduleName: 'beautifulPicker'): beautifulPicker;

	function require(moduleName: 'UIPullRefreshMotive'): UIPullRefreshMotive;

	function require(moduleName: 'pieChart'): pieChart;

	function require(moduleName: 'UIScrollPicture'): UIScrollPicture;

	function require(moduleName: 'UIInputBox'): UIInputBox;

	function require(moduleName: 'listViewEntity'): listViewEntity;

	function require(moduleName: 'superKeyboard'): superKeyboard;

	function require(moduleName: 'watermark'): watermark;

	function require(moduleName: 'UICoverFlowS'): UICoverFlowS;

	function require(moduleName: 'UIGraph'): UIGraph;

	function require(moduleName: 'addressBook'): addressBook;

	function require(moduleName: 'guide'): guide;

	function require(moduleName: 'videoEdit'): videoEdit;

	function require(moduleName: 'UIDatePickerTool'): UIDatePickerTool;

	function require(moduleName: 'UIButton'): UIButton;

	function require(moduleName: 'labelDragSort'): labelDragSort;

	function require(moduleName: 'handlock'): handlock;

	function require(moduleName: 'matrixLock'): matrixLock;

	function require(moduleName: 'divisionalLineChart'): divisionalLineChart;

	function require(moduleName: 'UICoverFlow'): UICoverFlow;

	function require(moduleName: 'popupMenu'): popupMenu;

	function require(moduleName: 'editDialog'): editDialog;

	function require(moduleName: 'UIDatePickerS'): UIDatePickerS;

	function require(moduleName: 'UIVividLine'): UIVividLine;

	function require(moduleName: 'gestureUnlock'): gestureUnlock;

	function require(moduleName: 'UIAdaptiveInput'): UIAdaptiveInput;

	function require(moduleName: 'UIChatTools'): UIChatTools;

	function require(moduleName: 'xinyanIDVerification'): xinyanIDVerification;

	function require(moduleName: 'citySelector'): citySelector;

	function require(moduleName: 'paymentDialog'): paymentDialog;

	function require(moduleName: 'UIListContacts'): UIListContacts;

	function require(moduleName: 'UILoading'): UILoading;

	function require(moduleName: 'UIPopupsPicker'): UIPopupsPicker;

	function require(moduleName: 'multiSelector'): multiSelector;

	function require(moduleName: 'welcomePage'): welcomePage;

	function require(moduleName: 'UISlider'): UISlider;

	function require(moduleName: 'swipeCaptcha'): swipeCaptcha;

	function require(moduleName: 'orderList'): orderList;

	function require(moduleName: 'dMultiScreen'): dMultiScreen;

	function require(moduleName: 'UILinkageSelector'): UILinkageSelector;

	function require(moduleName: 'UIListUpload'): UIListUpload;

	function require(moduleName: 'UIMediaControl'): UIMediaControl;

	function require(moduleName: 'selectList'): selectList;

	function require(moduleName: 'applause'): applause;

	function require(moduleName: 'UIPullRefreshFlash'): UIPullRefreshFlash;

	function require(moduleName: 'UIListArrow'): UIListArrow;

	function require(moduleName: 'waveProgress'): waveProgress;

	function require(moduleName: 'messageList'): messageList;

	function require(moduleName: 'UISearchBar'): UISearchBar;

	function require(moduleName: 'overviewList'): overviewList;

	function require(moduleName: 'sliderButton'): sliderButton;

	function require(moduleName: 'floatButton'): floatButton;

	function require(moduleName: 'arcProgress'): arcProgress;

	function require(moduleName: 'lineChart'): lineChart;

	function require(moduleName: 'sunmiT2Screen'): sunmiT2Screen;

	function require(moduleName: 'goodsList'): goodsList;

	function require(moduleName: 'licencePlatekeyboard'): licencePlatekeyboard;

	function require(moduleName: 'listView'): listView;

	function require(moduleName: 'fluttering'): fluttering;

	function require(moduleName: 'fillInput'): fillInput;

	function require(moduleName: 'UIListBadge'): UIListBadge;

	function require(moduleName: 'UIBarChart'): UIBarChart;

	function require(moduleName: 'imageDragSort'): imageDragSort;

	function require(moduleName: 'hikvision'): hikvision;

	function require(moduleName: 'UILinkedPicker'): UILinkedPicker;

	function require(moduleName: 'chatBox'): chatBox;

	function require(moduleName: 'UIListContactsCheck'): UIListContactsCheck;

	function require(moduleName: 'UIActionProgress'): UIActionProgress;

	function require(moduleName: 'gridSlide'): gridSlide;

	function require(moduleName: 'UIPickerView'): UIPickerView;

	function require(moduleName: 'guaidWindow'): guaidWindow;

	function require(moduleName: 'UIActionDialog'): UIActionDialog;

	function require(moduleName: 'UIPersonalCenter'): UIPersonalCenter;

	function require(moduleName: 'UIChatBox'): UIChatBox;

	function require(moduleName: 'UIAddressBook'): UIAddressBook;

	function require(moduleName: 'sphereCloud'): sphereCloud;

	function require(moduleName: 'UICalendar'): UICalendar;

	function require(moduleName: 'UIChatField'): UIChatField;

	function require(moduleName: 'UIListEdit'): UIListEdit;

	function require(moduleName: 'ruler'): ruler;

	function require(moduleName: 'keyboardView'): keyboardView;

	function require(moduleName: 'kLineChart'): kLineChart;

	function require(moduleName: 'graph'): graph;

	function require(moduleName: 'UIDatePicker'): UIDatePicker;

	function require(moduleName: 'customToast'): customToast;

	function require(moduleName: 'goodAd'): goodAd;

	function require(moduleName: 'waterBallProgress'): waterBallProgress;

	function require(moduleName: 'mwChatView'): mwChatView;

	function require(moduleName: 'coverFlow'): coverFlow;

	function require(moduleName: 'photoBrowserTouTiaoPlus'): photoBrowserTouTiaoPlus;

	function require(moduleName: 'personalCenter'): personalCenter;

	function require(moduleName: 'UIListGoods'): UIListGoods;

	function require(moduleName: 'photoBrowserTouTiao'): photoBrowserTouTiao;

	function require(moduleName: 'cityList'): cityList;

	function require(moduleName: 'moduleScanCode'): moduleScanCode;

	function require(moduleName: 'cxgBluetoothSerial'): cxgBluetoothSerial;

	function require(moduleName: 'pingModule'): pingModule;

	function require(moduleName: 'magnetometer'): magnetometer;

	function require(moduleName: 'androidTouch'): androidTouch;

	function require(moduleName: 'cvVibrate'): cvVibrate;

	function require(moduleName: 'checkproxys'): checkproxys;

	function require(moduleName: 'lockScreen'): lockScreen;

	function require(moduleName: 'accelerometer'): accelerometer;

	function require(moduleName: 'BoyFatBle'): BoyFatBle;

	function require(moduleName: 'bluetooth'): bluetooth;

	function require(moduleName: 'posScanner'): posScanner;

	function require(moduleName: 'DVContacts'): DVContacts;

	function require(moduleName: 'decibel'): decibel;

	function require(moduleName: 'rotationVector'): rotationVector;

	function require(moduleName: 'linearAcceleration'): linearAcceleration;

	function require(moduleName: 'gravitySensor'): gravitySensor;

	function require(moduleName: 'seblePrinter'): seblePrinter;

	function require(moduleName: 'lightSensitive'): lightSensitive;

	function require(moduleName: 'music'): music;

	function require(moduleName: 'zNFC'): zNFC;

	function require(moduleName: 'spputil'): spputil;

	function require(moduleName: 'callrecords'): callrecords;

	function require(moduleName: 'ipAddr'): ipAddr;

	function require(moduleName: 'telephoneInfo'): telephoneInfo;

	function require(moduleName: 'ipa'): ipa;

	function require(moduleName: 'iAd'): iAd;

	function require(moduleName: 'androidNfc'): androidNfc;

	function require(moduleName: 'multiScreen'): multiScreen;

	function require(moduleName: 'gyro'): gyro;

	function require(moduleName: 'socketServerClient'): socketServerClient;

	function require(moduleName: 'accelerometerSensor'): accelerometerSensor;

	function require(moduleName: 'simInfoImp'): simInfoImp;

	function require(moduleName: 'vibrate'): vibrate;

	function require(moduleName: 'moduleElectronicScale'): moduleElectronicScale;

	function require(moduleName: 'simpleBle'): simpleBle;

	function require(moduleName: 'calendarMemo'): calendarMemo;

	function require(moduleName: 'easyNFC'): easyNFC;

	function require(moduleName: 'contact'): contact;

	function require(moduleName: 'mobileNFC'): mobileNFC;

	function require(moduleName: 'sunmiT1Printer'): sunmiT1Printer;

	function require(moduleName: 'touchID'): touchID;

	function require(moduleName: 'fvvSerialPort'): fvvSerialPort;

	function require(moduleName: 'cilicoScan'): cilicoScan;

	function require(moduleName: 'ble2'): ble2;

	function require(moduleName: 'bleToken'): bleToken;

	function require(moduleName: 'smsrecords'): smsrecords;

	function require(moduleName: 'strongApp'): strongApp;

	function require(moduleName: 'smsListener'): smsListener;

	function require(moduleName: 'gyroscopeSensor'): gyroscopeSensor;

	function require(moduleName: 'appSettings'): appSettings;

	function require(moduleName: 'broadcast'): broadcast;

	function require(moduleName: 'torch'): torch;

	function require(moduleName: 'altimeter'): altimeter;

	function require(moduleName: 'sunmiPrinter'): sunmiPrinter;

	function require(moduleName: 'clipBoard'): clipBoard;

	function require(moduleName: 'wifiMgr'): wifiMgr;

	function require(moduleName: 'ScreenWake'): ScreenWake;

	function require(moduleName: 'spModule'): spModule;

	function require(moduleName: 'yunnex'): yunnex;

	function require(moduleName: 'wifiProxy'): wifiProxy;

	function require(moduleName: 'lightSensor'): lightSensor;

	function require(moduleName: 'gpsState'): gpsState;

	function require(moduleName: 'memoryInfo'): memoryInfo;

	function require(moduleName: 'contacts'): contacts;

	function require(moduleName: 'nfc'): nfc;

	function require(moduleName: 'mediaScanner'): mediaScanner;

	function require(moduleName: 'ble'): ble;

	function require(moduleName: 'deviceInfo'): deviceInfo;

	function require(moduleName: 'playText'): playText;

	function require(moduleName: 'xwScanner'): xwScanner;

	function require(moduleName: 'mySettingInfo'): mySettingInfo;

	function require(moduleName: 'vibration'): vibration;

	function require(moduleName: 'FNSettings'): FNSettings;

	function require(moduleName: 'moduleSMSListening'): moduleSMSListening;

	function require(moduleName: 'blePrintHaier'): blePrintHaier;

	function require(moduleName: 'aIMEI'): aIMEI;

	function require(moduleName: 'isSimulator'): isSimulator;

	function require(moduleName: 'brightness2016'): brightness2016;

	function require(moduleName: 'bgnWiFi'): bgnWiFi;

	function require(moduleName: 'cpuInfo'): cpuInfo;

	function require(moduleName: 'shareBySystem'): shareBySystem;

	function require(moduleName: 'DVTorch'): DVTorch;

	function require(moduleName: 'gps'): gps;

	function require(moduleName: 'screen'): screen;

	function require(moduleName: 'wwprint'): wwprint;

	function require(moduleName: 'wifi'): wifi;

	function require(moduleName: 'sensor'): sensor;

	function require(moduleName: 'phoneInfo'): phoneInfo;

	function require(moduleName: 'statusBar'): statusBar;

	function require(moduleName: 'smartConfigCheyw'): smartConfigCheyw;

	function require(moduleName: 'ipAddress'): ipAddress;

	function require(moduleName: 'simInfo'): simInfo;

	function require(moduleName: 'moduleBarcodeScales'): moduleBarcodeScales;

	function require(moduleName: 'mobileSignal'): mobileSignal;

	function require(moduleName: 'jpgInfoManager'): jpgInfoManager;

	function require(moduleName: 'pedometer'): pedometer;

	function require(moduleName: 'smartPeak'): smartPeak;

	function require(moduleName: 'orientationSensor'): orientationSensor;

	function require(moduleName: 'hardwareInfo'): hardwareInfo;

	function require(moduleName: 'modulePrinter'): modulePrinter;

	function require(moduleName: 'proximitySensor'): proximitySensor;

	function require(moduleName: 'compassLeveler'): compassLeveler;

	function require(moduleName: 'openApp'): openApp;

	function require(moduleName: 'cameraTool'): cameraTool;

	function require(moduleName: 'zjPrinter'): zjPrinter;

	function require(moduleName: 'moduleLabelPrinter'): moduleLabelPrinter;

	function require(moduleName: 'displayInfo'): displayInfo;

	function require(moduleName: 'sunmiV2Printer'): sunmiV2Printer;

	function require(moduleName: 'myAppInfo'): myAppInfo;

	function require(moduleName: 'connectWifi'): connectWifi;

	function require(moduleName: 'vibrateUtil'): vibrateUtil;

	function require(moduleName: 'blesdk'): blesdk;

	function require(moduleName: 'callRecord'): callRecord;

	function require(moduleName: 'moduleSMS'): moduleSMS;

	function require(moduleName: 'posPrinter'): posPrinter;

	function require(moduleName: 'myListeningInfo'): myListeningInfo;

	function require(moduleName: 'bluePrinter'): bluePrinter;

	function require(moduleName: 'mobileSensor'): mobileSensor;

	function require(moduleName: 'btsppiot'): btsppiot;

	function require(moduleName: 'printBleWifi'): printBleWifi;

	function require(moduleName: 'appVersionUpdate'): appVersionUpdate;

	function require(moduleName: 'magneticFieldSensor'): magneticFieldSensor;

	function require(moduleName: 'gpsListener'): gpsListener;

	function require(moduleName: 'toBackground'): toBackground;

	function require(moduleName: 'btmodule'): btmodule;

	function require(moduleName: 'wifiSSID'): wifiSSID;

	function require(moduleName: 'hanvonVehicleCard'): hanvonVehicleCard;

	function require(moduleName: 'mwTencentRTC'): mwTencentRTC;

	function require(moduleName: 'yunxinIM'): yunxinIM;

	function require(moduleName: 'chivoxLongman'): chivoxLongman;

	function require(moduleName: 'jdKepler'): jdKepler;

	function require(moduleName: 'SAMIDCard'): SAMIDCard;

	function require(moduleName: 'qupaiLive'): qupaiLive;

	function require(moduleName: 'aliyunPush'): aliyunPush;

	function require(moduleName: 'ajAnalytics'): ajAnalytics;

	function require(moduleName: 'sunlogin'): sunlogin;

	function require(moduleName: 'liuLiangQianBao'): liuLiangQianBao;

	function require(moduleName: 'alibaichuan'): alibaichuan;

	function require(moduleName: 'x5ac'): x5ac;

	function require(moduleName: 'vinOCR'): vinOCR;

	function require(moduleName: 'braintreeApplePay'): braintreeApplePay;

	function require(moduleName: 'superFile'): superFile;

	function require(moduleName: 'vlcPlayer'): vlcPlayer;

	function require(moduleName: 'aliBC'): aliBC;

	function require(moduleName: 'APSocial'): APSocial;

	function require(moduleName: 'acLive'): acLive;

	function require(moduleName: 'heartRateReceiver'): heartRateReceiver;

	function require(moduleName: 'tencentMTA'): tencentMTA;

	function require(moduleName: 'bTrace'): bTrace;

	function require(moduleName: 'bugout'): bugout;

	function require(moduleName: 'bPlayer'): bPlayer;

	function require(moduleName: 'geTui'): geTui;

	function require(moduleName: 'shareinstall'): shareinstall;

	function require(moduleName: 'tpush'): tpush;

	function require(moduleName: 'UIBPlayer'): UIBPlayer;

	function require(moduleName: 'miniVideoRecord'): miniVideoRecord;

	function require(moduleName: 'JGCertificate'): JGCertificate;

	function require(moduleName: 'txPlayer'): txPlayer;

	function require(moduleName: 'uzkJDopen'): uzkJDopen;

	function require(moduleName: 'UIEaseCEC'): UIEaseCEC;

	function require(moduleName: 'wxVoicePlus'): wxVoicePlus;

	function require(moduleName: 'tencentTIC'): tencentTIC;

	function require(moduleName: 'aliSmilePay'): aliSmilePay;

	function require(moduleName: 'Linkedin'): Linkedin;

	function require(moduleName: 'kf5'): kf5;

	function require(moduleName: 'faceidLive'): faceidLive;

	function require(moduleName: 'mico'): mico;

	function require(moduleName: 'dingding'): dingding;

	function require(moduleName: 'tencentPush'): tencentPush;

	function require(moduleName: 'txMarketing'): txMarketing;

	function require(moduleName: 'sendSms'): sendSms;

	function require(moduleName: 'voiceRecognizer'): voiceRecognizer;

	function require(moduleName: 'netEaseLive'): netEaseLive;

	function require(moduleName: 'openinstall'): openinstall;

	function require(moduleName: 'kf5sdk'): kf5sdk;

	function require(moduleName: 'qiniuStorage'): qiniuStorage;

	function require(moduleName: 'tencentTRTC'): tencentTRTC;

	function require(moduleName: 'alibcTrade'): alibcTrade;

	function require(moduleName: 'netEaseAVChatVideo'): netEaseAVChatVideo;

	function require(moduleName: 'hanvonCloudOcrFormulaReader'): hanvonCloudOcrFormulaReader;

	function require(moduleName: 'mobUms'): mobUms;

	function require(moduleName: 'sqlCipher'): sqlCipher;

	function require(moduleName: 'smssdk'): smssdk;

	function require(moduleName: 'rtcCore'): rtcCore;

	function require(moduleName: 'apsaraShortVideoBase'): apsaraShortVideoBase;

	function require(moduleName: 'aliPayTrade'): aliPayTrade;

	function require(moduleName: 'bgnUITencentOCR'): bgnUITencentOCR;

	function require(moduleName: 'huanxin'): huanxin;

	function require(moduleName: 'Hwork'): Hwork;

	function require(moduleName: 'oneAPMUEM'): oneAPMUEM;

	function require(moduleName: 'huanxunPay'): huanxunPay;

	function require(moduleName: 'udcreditRecognizer'): udcreditRecognizer;

	function require(moduleName: 'faceidCard'): faceidCard;

	function require(moduleName: 'alivcLivePlayer'): alivcLivePlayer;

	function require(moduleName: 'SPay'): SPay;

	function require(moduleName: 'zyGoogleAd'): zyGoogleAd;

	function require(moduleName: 'yWQGsonModule'): yWQGsonModule;

	function require(moduleName: 'leCast'): leCast;

	function require(moduleName: 'ijkplayer'): ijkplayer;

	function require(moduleName: 'kiviMakeUp'): kiviMakeUp;

	function require(moduleName: 'meiQia'): meiQia;

	function require(moduleName: 'udeskPlus'): udeskPlus;

	function require(moduleName: 'zyPangolin'): zyPangolin;

	function require(moduleName: 'brightBeacon'): brightBeacon;

	function require(moduleName: 'qn'): qn;

	function require(moduleName: 'bdObjectStorage'): bdObjectStorage;

	function require(moduleName: 'PLMediaStreaming'): PLMediaStreaming;

	function require(moduleName: 'shanYan'): shanYan;

	function require(moduleName: 'zhiChi'): zhiChi;

	function require(moduleName: 'OneSignal'): OneSignal;

	function require(moduleName: 'idCardScan'): idCardScan;

	function require(moduleName: 'ximalaya'): ximalaya;

	function require(moduleName: 'vk'): vk;

	function require(moduleName: 'tencentPlayer'): tencentPlayer;

	function require(moduleName: 'mogoAdsdomob'): mogoAdsdomob;

	function require(moduleName: 'haierCenter'): haierCenter;

	function require(moduleName: 'kkPlayer'): kkPlayer;

	function require(moduleName: 'baiduAd'): baiduAd;

	function require(moduleName: 'qCloudVODPlayer'): qCloudVODPlayer;

	function require(moduleName: 'bankCardScan'): bankCardScan;

	function require(moduleName: 'UIEasemob'): UIEasemob;

	function require(moduleName: 'weibo'): weibo;

	function require(moduleName: 'baiduAppx'): baiduAppx;

	function require(moduleName: 'moveTrack'): moveTrack;

	function require(moduleName: 'aliyunVodPlayer'): aliyunVodPlayer;

	function require(moduleName: 'facebook'): facebook;

	function require(moduleName: 'tencentAd'): tencentAd;

	function require(moduleName: 'haierFaceId'): haierFaceId;

	function require(moduleName: 'hanvonCloudBcardReader'): hanvonCloudBcardReader;

	function require(moduleName: 'uscSpeechRecognizer'): uscSpeechRecognizer;

	function require(moduleName: 'gt3geetest'): gt3geetest;

	function require(moduleName: 'jchat'): jchat;

	function require(moduleName: 'Twitter'): Twitter;

	function require(moduleName: 'QQPlus'): QQPlus;

	function require(moduleName: 'coinport'): coinport;

	function require(moduleName: 'wxPayPlus'): wxPayPlus;

	function require(moduleName: 'adsDomob'): adsDomob;

	function require(moduleName: 'lelink'): lelink;

	function require(moduleName: 'discuz'): discuz;

	function require(moduleName: 'moduleScanner'): moduleScanner;

	function require(moduleName: 'qiniuPlayer'): qiniuPlayer;

	function require(moduleName: 'moduleUHF'): moduleUHF;

	function require(moduleName: 'umengAnalytics'): umengAnalytics;

	function require(moduleName: 'baiduPanorama'): baiduPanorama;

	function require(moduleName: 'qupai'): qupai;

	function require(moduleName: 'yjyzVerifyPlus'): yjyzVerifyPlus;

	function require(moduleName: 'easeChat'): easeChat;

	function require(moduleName: 'leCloudLive'): leCloudLive;

	function require(moduleName: 'webBrowser2018'): webBrowser2018;

	function require(moduleName: 'imSiLop'): imSiLop;

	function require(moduleName: 'ydocr'): ydocr;

	function require(moduleName: 'twoBaiDuOcr'): twoBaiDuOcr;

	function require(moduleName: 'nim'): nim;

	function require(moduleName: 'DouYinPlatform'): DouYinPlatform;

	function require(moduleName: 'IFlyVoice'): IFlyVoice;

	function require(moduleName: 'navigator'): navigator;

	function require(moduleName: 'swiftpassPay'): swiftpassPay;

	function require(moduleName: 'faceUnity'): faceUnity;

	function require(moduleName: 'hwOBS'): hwOBS;

	function require(moduleName: 'gensee'): gensee;

	function require(moduleName: 'duiBa'): duiBa;

	function require(moduleName: 'MobileArk'): MobileArk;

	function require(moduleName: 'wxVoice'): wxVoice;

	function require(moduleName: 'baiduSpeechAAR'): baiduSpeechAAR;

	function require(moduleName: 'apibase'): apibase;

	function require(moduleName: 'bgnTencentOCR'): bgnTencentOCR;

	function require(moduleName: 'soundGeneralRecongnitionSdk'): soundGeneralRecongnitionSdk;

	function require(moduleName: 'tencentVodPlayer'): tencentVodPlayer;

	function require(moduleName: 'uscVoiceRecognizer'): uscVoiceRecognizer;

	function require(moduleName: 'zyBaiduFace'): zyBaiduFace;

	function require(moduleName: 'UIBdFace'): UIBdFace;

	function require(moduleName: 'hanvonCloudNumberReader'): hanvonCloudNumberReader;

	function require(moduleName: 'braintreePay'): braintreePay;

	function require(moduleName: 'cloudwise'): cloudwise;

	function require(moduleName: 'tencentIm'): tencentIm;

	function require(moduleName: 'baiduCloud'): baiduCloud;

	function require(moduleName: 'leBoCast'): leBoCast;

	function require(moduleName: 'taobao'): taobao;

	function require(moduleName: 'duibaSales'): duibaSales;

	function require(moduleName: 'chivox'): chivox;

	function require(moduleName: 'ajpushGooglePlay'): ajpushGooglePlay;

	function require(moduleName: 'aliPush'): aliPush;

	function require(moduleName: 'umpush'): umpush;

	function require(moduleName: 'AliMobileAnalytics'): AliMobileAnalytics;

	function require(moduleName: 'ajAuth'): ajAuth;

	function require(moduleName: 'moxiesdk'): moxiesdk;

	function require(moduleName: 'weiXin'): weiXin;

	function require(moduleName: 'aliyunLive'): aliyunLive;

	function require(moduleName: 'iflyAd'): iflyAd;

	function require(moduleName: 'appsflyerSDK'): appsflyerSDK;

	function require(moduleName: 'UIAlivcLivePlayer'): UIAlivcLivePlayer;

	function require(moduleName: 'baiduNavigation'): baiduNavigation;

	function require(moduleName: 'googlePay'): googlePay;

	function require(moduleName: 'gizWifiSDK'): gizWifiSDK;

	function require(moduleName: 'ffPlayer'): ffPlayer;

	function require(moduleName: 'modulebaidumtj'): modulebaidumtj;

	function require(moduleName: 'IFlyFace'): IFlyFace;

	function require(moduleName: 'acXimalaya'): acXimalaya;

	function require(moduleName: 'gtest'): gtest;

	function require(moduleName: 'cardReader'): cardReader;

	function require(moduleName: 'UIPLPlayer'): UIPLPlayer;

	function require(moduleName: 'maketionCardReader'): maketionCardReader;

	function require(moduleName: 'youkuPlayer'): youkuPlayer;

	function require(moduleName: 'aliYunVoice'): aliYunVoice;

	function require(moduleName: 'netEaseAVChat'): netEaseAVChat;

	function require(moduleName: 'csOpenApi'): csOpenApi;

	function require(moduleName: 'camera360'): camera360;

	function require(moduleName: 'aliShortVideo'): aliShortVideo;

	function require(moduleName: 'chanceAd'): chanceAd;

	function require(moduleName: 'zhiChiSobot'): zhiChiSobot;

	function require(moduleName: 'speedataUHF'): speedataUHF;

	function require(moduleName: 'iflytekvoiceads'): iflytekvoiceads;

	function require(moduleName: 'aliTrade'): aliTrade;

	function require(moduleName: 'bgnMobSMS'): bgnMobSMS;

	function require(moduleName: 'tencentCloudMta'): tencentCloudMta;

	function require(moduleName: 'systemshare'): systemshare;

	function require(moduleName: 'aliShortVideoAPI'): aliShortVideoAPI;

	function require(moduleName: 'HMTAgent'): HMTAgent;

	function require(moduleName: 'zhugeio'): zhugeio;

	function require(moduleName: 'ccwork'): ccwork;

	function require(moduleName: 'bdMTJ'): bdMTJ;

	function require(moduleName: 'xGprinterPlus'): xGprinterPlus;

	function require(moduleName: 'sinaWeiBo'): sinaWeiBo;

	function require(moduleName: 'yzxVerification'): yzxVerification;

	function require(moduleName: 'oxePlayer'): oxePlayer;

	function require(moduleName: 'ipaynowScanner'): ipaynowScanner;

	function require(moduleName: 'kuaixuePlayer'): kuaixuePlayer;

	function require(moduleName: 'mobShare'): mobShare;

	function require(moduleName: 'tingyun'): tingyun;

	function require(moduleName: 'vcloudPlay'): vcloudPlay;

	function require(moduleName: 'mobLink'): mobLink;

	function require(moduleName: 'wxPay'): wxPay;

	function require(moduleName: 'wx'): wx;

	function require(moduleName: 'busScan'): busScan;

	function require(moduleName: 'ICBCPay'): ICBCPay;

	function require(moduleName: 'myALiAPIInfo'): myALiAPIInfo;

	function require(moduleName: 'gAnalytics'): gAnalytics;

	function require(moduleName: 'ottPay'): ottPay;

	function require(moduleName: 'baiduSpeechRecognizer'): baiduSpeechRecognizer;

	function require(moduleName: 'pushRtmpOrVideoPlay'): pushRtmpOrVideoPlay;

	function require(moduleName: 'XYLink'): XYLink;

	function require(moduleName: 'constructionPay'): constructionPay;

	function require(moduleName: 'bcapplepay'): bcapplepay;

	function require(moduleName: 'aliphone'): aliphone;

	function require(moduleName: 'upYun'): upYun;

	function require(moduleName: 'baiduMap'): baiduMap;

	function require(moduleName: 'aMapNavigation'): aMapNavigation;

	function require(moduleName: 'txCameraRecord'): txCameraRecord;

	function require(moduleName: 'baiduOCR'): baiduOCR;

	function require(moduleName: 'ciaYi'): ciaYi;

	function require(moduleName: 'indoorLocation'): indoorLocation;

	function require(moduleName: 'aliPhoneAuth'): aliPhoneAuth;

	function require(moduleName: 'yunfan'): yunfan;

	function require(moduleName: 'quPaiModule'): quPaiModule;

	function require(moduleName: 'agoraLive'): agoraLive;

	function require(moduleName: 'rongCloudCS'): rongCloudCS;

	function require(moduleName: 'miniQuPai'): miniQuPai;

	function require(moduleName: 'adTracking'): adTracking;

	function require(moduleName: 'googleMap'): googleMap;

	function require(moduleName: 'UDYhy'): UDYhy;

	function require(moduleName: 'anyRTCModule'): anyRTCModule;

	function require(moduleName: 'XLPlayer'): XLPlayer;

	function require(moduleName: 'logCrash'): logCrash;

	function require(moduleName: 'talkFunLive'): talkFunLive;

	function require(moduleName: 'didi'): didi;

	function require(moduleName: 'ArcFace'): ArcFace;

	function require(moduleName: 'mobileMove'): mobileMove;

	function require(moduleName: 'shareMorePic'): shareMorePic;

	function require(moduleName: 'aliyunOSS'): aliyunOSS;

	function require(moduleName: 'alibaic'): alibaic;

	function require(moduleName: 'UIFaceID'): UIFaceID;

	function require(moduleName: 'wxPlus'): wxPlus;

	function require(moduleName: 'baiduTrace'): baiduTrace;

	function require(moduleName: 'szcaSDK'): szcaSDK;

	function require(moduleName: 'appsee'): appsee;

	function require(moduleName: 'udesk'): udesk;

	function require(moduleName: 'baichuan'): baichuan;

	function require(moduleName: 'wyLive'): wyLive;

	function require(moduleName: 'huaweiPush'): huaweiPush;

	function require(moduleName: 'analysysAPICloudSDK'): analysysAPICloudSDK;

	function require(moduleName: 'rcIM'): rcIM;

	function require(moduleName: 'BaiduMobAds'): BaiduMobAds;

	function require(moduleName: 'haierIM'): haierIM;

	function require(moduleName: 'tencentCos'): tencentCos;

	function require(moduleName: 'googleAdMob'): googleAdMob;

	function require(moduleName: 'takePicCutOut'): takePicCutOut;

	function require(moduleName: 'baiduFaceLive'): baiduFaceLive;

	function require(moduleName: 'aliyunStsOss'): aliyunStsOss;

	function require(moduleName: 'baiduAR'): baiduAR;

	function require(moduleName: 'swLocate'): swLocate;

	function require(moduleName: 'lingYue'): lingYue;

	function require(moduleName: 'jyVerify'): jyVerify;

	function require(moduleName: 'STFace'): STFace;

	function require(moduleName: 'speechRecognizer'): speechRecognizer;

	function require(moduleName: 'baiduLocation'): baiduLocation;

	function require(moduleName: 'uzkAlibc'): uzkAlibc;

	function require(moduleName: 'BLNetwork'): BLNetwork;

	function require(moduleName: 'TKOpen'): TKOpen;

	function require(moduleName: 'checkpush'): checkpush;

	function require(moduleName: 'rongCloudIM'): rongCloudIM;

	function require(moduleName: 'ksi'): ksi;

	function require(moduleName: 'moduleShareSMS'): moduleShareSMS;

	function require(moduleName: 'rongCloud2'): rongCloud2;

	function require(moduleName: 'mapleIM'): mapleIM;

	function require(moduleName: 'dahuatech'): dahuatech;

	function require(moduleName: 'bdTTS'): bdTTS;

	function require(moduleName: 'AliyunPlayer'): AliyunPlayer;

	function require(moduleName: 'inShare'): inShare;

	function require(moduleName: 'vivoPush'): vivoPush;

	function require(moduleName: 'ccAPI'): ccAPI;

	function require(moduleName: 'uiFaceIDPlus'): uiFaceIDPlus;

	function require(moduleName: 'tencentAds'): tencentAds;

	function require(moduleName: 'tencentYLH'): tencentYLH;

	function require(moduleName: 'aliPayHK'): aliPayHK;

	function require(moduleName: 'superID'): superID;

	function require(moduleName: 'UIPLShortVideo'): UIPLShortVideo;

	function require(moduleName: 'ccbPay'): ccbPay;

	function require(moduleName: 'xGprinter'): xGprinter;

	function require(moduleName: 'nuanceSpeechRecognizer'): nuanceSpeechRecognizer;

	function require(moduleName: 'smsVerification'): smsVerification;

	function require(moduleName: 'txLiteAV'): txLiteAV;

	function require(moduleName: 'duibaView'): duibaView;

	function require(moduleName: 'bgnArcFace'): bgnArcFace;

	function require(moduleName: 'adsYoumi'): adsYoumi;

	function require(moduleName: 'seckenModule'): seckenModule;

	function require(moduleName: 'baiduBos'): baiduBos;

	function require(moduleName: 'videoshare'): videoshare;

	function require(moduleName: 'hanvonCloudTableReader'): hanvonCloudTableReader;

	function require(moduleName: 'wawa'): wawa;

	function require(moduleName: 'haikangVideo'): haikangVideo;

	function require(moduleName: 'baiduSpeechRec'): baiduSpeechRec;

	function require(moduleName: 'zmCert'): zmCert;

	function require(moduleName: 'tyRTCLive'): tyRTCLive;

	function require(moduleName: 'dianYan'): dianYan;

	function require(moduleName: 'sunmiPrint'): sunmiPrint;

	function require(moduleName: 'xinyanOCR'): xinyanOCR;

	function require(moduleName: 'speick'): speick;

	function require(moduleName: 'upyunUpfile'): upyunUpfile;

	function require(moduleName: 'zjBluetoothPrint'): zjBluetoothPrint;

	function require(moduleName: 'uSDK'): uSDK;

	function require(moduleName: 'updatethis'): updatethis;

	function require(moduleName: 'alipayGlobal'): alipayGlobal;

	function require(moduleName: 'amapTrack'): amapTrack;

	function require(moduleName: 'qiniuKodo'): qiniuKodo;

	function require(moduleName: 'admob'): admob;

	function require(moduleName: 'vcloudLive'): vcloudLive;

	function require(moduleName: 'meChat'): meChat;

	function require(moduleName: 'jd'): jd;

	function require(moduleName: 'camhi'): camhi;

	function require(moduleName: 'acmPush'): acmPush;

	function require(moduleName: 'moblinkpro'): moblinkpro;

	function require(moduleName: 'sunmiScan'): sunmiScan;

	function require(moduleName: 'polyVideo'): polyVideo;

	function require(moduleName: 'TouchFaceID'): TouchFaceID;

	function require(moduleName: 'faceVerify'): faceVerify;

	function require(moduleName: 'sharetrace'): sharetrace;

	function require(moduleName: 'bmobPush'): bmobPush;

	function require(moduleName: 'UIRongCloud'): UIRongCloud;

	function require(moduleName: 'aMap'): aMap;

	function require(moduleName: 'talkingData'): talkingData;

	function require(moduleName: 'JGCertificateIDFA'): JGCertificateIDFA;

	function require(moduleName: 'aMapLocation'): aMapLocation;

	function require(moduleName: 'uPush'): uPush;

	function require(moduleName: 'quPai2017'): quPai2017;

	function require(moduleName: 'QCloudCOS'): QCloudCOS;

	function require(moduleName: 'googlePush'): googlePush;

	function require(moduleName: 'wxFacePay'): wxFacePay;

	function require(moduleName: 'yWQModule'): yWQModule;

	function require(moduleName: 'ySKAuth'): ySKAuth;

	function require(moduleName: 'aliyunNls'): aliyunNls;

	function require(moduleName: 'plPlayer'): plPlayer;

	function require(moduleName: 'arcFacePublic'): arcFacePublic;

	function require(moduleName: 'stripePay'): stripePay;

	function require(moduleName: 'omxVideo'): omxVideo;

	function require(moduleName: 'allinPay'): allinPay;

	function require(moduleName: 'geetestModule'): geetestModule;

	function require(moduleName: 'tencentOSS'): tencentOSS;

	function require(moduleName: 'mobVerify'): mobVerify;

	function require(moduleName: 'orcidcard'): orcidcard;

	function require(moduleName: 'aUnifyPay'): aUnifyPay;

	function require(moduleName: 'bLocation'): bLocation;

	function require(moduleName: 'txLive'): txLive;

	function require(moduleName: 'UIQiniuShortVideo'): UIQiniuShortVideo;

	function require(moduleName: 'webp'): webp;

	function require(moduleName: 'baiduIdentifyOCR'): baiduIdentifyOCR;

	function require(moduleName: 'mobPush'): mobPush;

	function require(moduleName: 'ydAuth'): ydAuth;

	function require(moduleName: 'MultipeerConnectivity'): MultipeerConnectivity;

	function require(moduleName: 'paypal'): paypal;

	function require(moduleName: 'baiduMTJ'): baiduMTJ;

	function require(moduleName: 'aMapGeoFence'): aMapGeoFence;

	function require(moduleName: 'cchelperCaiHongNoIM'): cchelperCaiHongNoIM;

	function require(moduleName: 'gotyeLiveCore'): gotyeLiveCore;

	function require(moduleName: 'googleAnalytics'): googleAnalytics;

	function require(moduleName: 'youtu'): youtu;

	function require(moduleName: 'tyRTC'): tyRTC;

	function require(moduleName: 'acc5GSJC'): acc5GSJC;

	function require(moduleName: 'BluetoothDelegate'): BluetoothDelegate;

	function require(moduleName: 'shareSDKPlus'): shareSDKPlus;

	function require(moduleName: 'leShiLive'): leShiLive;

	function require(moduleName: 'appleUnionPay'): appleUnionPay;

	function require(moduleName: 'utoVR'): utoVR;

	function require(moduleName: 'youZan2'): youZan2;

	function require(moduleName: 'huaweiObs'): huaweiObs;

	function require(moduleName: 'ajAuthNoPush'): ajAuthNoPush;

	function require(moduleName: 'cBImageRecognize'): cBImageRecognize;

	function require(moduleName: 'easyQRCodeScan'): easyQRCodeScan;

	function require(moduleName: 'esptouch'): esptouch;

	function require(moduleName: 'CPay'): CPay;

	function require(moduleName: 'jVerification'): jVerification;

	function require(moduleName: 'aliCloudOss'): aliCloudOss;

	function require(moduleName: 'videoClipsRecord'): videoClipsRecord;

	function require(moduleName: 'umengTJ'): umengTJ;

	function require(moduleName: 'baiduLogin'): baiduLogin;

	function require(moduleName: 'mgCard'): mgCard;

	function require(moduleName: 'xinyanIDVerification'): xinyanIDVerification;

	function require(moduleName: 'zyTencentAd'): zyTencentAd;

	function require(moduleName: 'mogoAds'): mogoAds;

	function require(moduleName: 'xiaoNeng'): xiaoNeng;

	function require(moduleName: 'ajSms'): ajSms;

	function require(moduleName: 'qidaIM'): qidaIM;

	function require(moduleName: 'haierUserCenter'): haierUserCenter;

	function require(moduleName: 'sangfor'): sangfor;

	function require(moduleName: 'arRtc'): arRtc;

	function require(moduleName: 'reportLocation'): reportLocation;

	function require(moduleName: 'UIBaiduOCR'): UIBaiduOCR;

	function require(moduleName: 'dataCollect'): dataCollect;

	function require(moduleName: 'umAnalytics'): umAnalytics;

	function require(moduleName: 'pushGeTui'): pushGeTui;

	function require(moduleName: 'baiduPlayer'): baiduPlayer;

	function require(moduleName: 'alivcLivePusher'): alivcLivePusher;

	function require(moduleName: 'mogoAdsBaidu'): mogoAdsBaidu;

	function require(moduleName: 'alibcthb'): alibcthb;

	function require(moduleName: 'fog2'): fog2;

	function require(moduleName: 'toutiaoAd'): toutiaoAd;

	function require(moduleName: 'txAnalysis'): txAnalysis;

	function require(moduleName: 'sensorsAnalyticsAPICloudSDK'): sensorsAnalyticsAPICloudSDK;

	function require(moduleName: 'webBrowser'): webBrowser;

	function require(moduleName: 'mobPushPlus'): mobPushPlus;

	function require(moduleName: 'aplayer'): aplayer;

	function require(moduleName: 'agoraVideo'): agoraVideo;

	function require(moduleName: 'sskCapture'): sskCapture;

	function require(moduleName: 'baiduOCRRecognizer'): baiduOCRRecognizer;

	function require(moduleName: 'zyPangolinAd'): zyPangolinAd;

	function require(moduleName: 'bdAR'): bdAR;

	function require(moduleName: 'fuQianLa'): fuQianLa;

	function require(moduleName: 'ajpush'): ajpush;

	function require(moduleName: 'snUIWeex'): snUIWeex;

	function require(moduleName: 'geeTest'): geeTest;

	function require(moduleName: 'bmLocation'): bmLocation;

	function require(moduleName: 'jdapp'): jdapp;

	function require(moduleName: 'aliPay'): aliPay;

	function require(moduleName: 'mobSharePlus'): mobSharePlus;

	function require(moduleName: 'unionPay'): unionPay;

	function require(moduleName: 'iscpClient'): iscpClient;

	function require(moduleName: 'qiniuLive'): qiniuLive;

	function require(moduleName: 'agoraRtc'): agoraRtc;

	function require(moduleName: 'acBugtags'): acBugtags;

	function require(moduleName: 'google'): google;

	function require(moduleName: 'ksisdk'): ksisdk;

	function require(moduleName: 'FaceIdDetect'): FaceIdDetect;

	function require(moduleName: 'rongCloud'): rongCloud;

	function require(moduleName: 'itppayPlus'): itppayPlus;

	function require(moduleName: 'iflyRecognition'): iflyRecognition;

	function require(moduleName: 'faceidLiveDetect'): faceidLiveDetect;

	function require(moduleName: 'txShortVideo'): txShortVideo;

	function require(moduleName: 'polyvVideo'): polyvVideo;

	function require(moduleName: 'hanvonCloudIdCardReader'): hanvonCloudIdCardReader;

	function require(moduleName: 'qiniuRTC'): qiniuRTC;

	function require(moduleName: 'tslLed'): tslLed;

	function require(moduleName: 'aliTradePlus'): aliTradePlus;

	function require(moduleName: 'scrollVideo'): scrollVideo;

	function require(moduleName: 'mgFace'): mgFace;

	function require(moduleName: 'pingpp'): pingpp;

	function require(moduleName: 'wapsAd'): wapsAd;

	function require(moduleName: 'clSDKShanYanSDKModule'): clSDKShanYanSDKModule;

	function require(moduleName: 'qiniuShortVideo'): qiniuShortVideo;

	function require(moduleName: 'adhub'): adhub;

	function require(moduleName: 'aMapLBS'): aMapLBS;

	function require(moduleName: 'txLivex'): txLivex;

	function require(moduleName: 'UIYunxinIM'): UIYunxinIM;

	function require(moduleName: 'zhuge'): zhuge;

	function require(moduleName: 'uifaceIDCard'): uifaceIDCard;

	function require(moduleName: 'falconAd'): falconAd;

	function require(moduleName: 'aMapReportLocationG'): aMapReportLocationG;

	function require(moduleName: 'flymePush'): flymePush;

	function require(moduleName: 'beecloud'): beecloud;

	function require(moduleName: 'CCShortVideo'): CCShortVideo;

	function require(moduleName: 'mapnavn'): mapnavn;

	function require(moduleName: 'bLogin'): bLogin;

	function require(moduleName: 'mogoAdsGDT'): mogoAdsGDT;

	function require(moduleName: 'tunnel'): tunnel;

	function require(moduleName: 'ISBCD'): ISBCD;

	function require(moduleName: 'agoraVoice'): agoraVoice;

	function require(moduleName: 'neteasePlayer'): neteasePlayer;

	function require(moduleName: 'jdPay'): jdPay;

	function require(moduleName: 'cchelperModule'): cchelperModule;

	function require(moduleName: 'pdBot'): pdBot;

	function require(moduleName: 'oppoPush'): oppoPush;

	function require(moduleName: 'qiniuUpfile'): qiniuUpfile;

	function require(moduleName: 'dkSDK'): dkSDK;

	function require(moduleName: 'JGsms'): JGsms;

	function require(moduleName: 'smsVerify'): smsVerify;

	function require(moduleName: 'mapleRTC'): mapleRTC;

	function require(moduleName: 'gyPrint'): gyPrint;

	function require(moduleName: 'bugTags'): bugTags;

	function require(moduleName: 'sangforvpn'): sangforvpn;

	function require(moduleName: 'bdFace'): bdFace;

	function require(moduleName: 'qq'): qq;

	function require(moduleName: 'appNestAgent'): appNestAgent;

	function require(moduleName: 'zhiChiSobotMall'): zhiChiSobotMall;

	function require(moduleName: 'bvRecognizer'): bvRecognizer;

	function require(moduleName: 'aMapNavi'): aMapNavi;

	function require(moduleName: 'aeetest'): aeetest;

	function require(moduleName: 'baiduTextReader'): baiduTextReader;

	function require(moduleName: 'bMap'): bMap;

	function require(moduleName: 'NTalker'): NTalker;

	function require(moduleName: 'ttAd'): ttAd;

	function require(moduleName: 'miniQuPaiPlus'): miniQuPaiPlus;

	function require(moduleName: 'telegram'): telegram;

	function require(moduleName: 'openIM'): openIM;

	function require(moduleName: 'IDataScan'): IDataScan;

	function require(moduleName: 'txyunPlayer'): txyunPlayer;

	function require(moduleName: 'zkFinger'): zkFinger;

	function require(moduleName: 'jpushVip'): jpushVip;

	function require(moduleName: 'lBCast'): lBCast;

	function require(moduleName: 'wxSubscribe'): wxSubscribe;

	function require(moduleName: 'iPlat4M'): iPlat4M;

	function require(moduleName: 'adView'): adView;

	function require(moduleName: 'facebookAds'): facebookAds;

	function require(moduleName: 'hkplayer'): hkplayer;

	function require(moduleName: 'UIEaseChat'): UIEaseChat;

	function require(moduleName: 'baiXing'): baiXing;

	function require(moduleName: 'aliPayPlus'): aliPayPlus;

	function require(moduleName: 'recordVideo'): recordVideo;

	function require(moduleName: 'tencentSimpleIM'): tencentSimpleIM;

	function require(moduleName: 'ytylive'): ytylive;

	function require(moduleName: 'aliPayTradePlus'): aliPayTradePlus;

	function require(moduleName: 'tinyPlayer'): tinyPlayer;

	function require(moduleName: 'facebookLogin'): facebookLogin;

	function require(moduleName: 'youZan'): youZan;

	function require(moduleName: 'xinyanFaceCheck'): xinyanFaceCheck;

	function require(moduleName: 'customshare'): customshare;

	function require(moduleName: 'ximalayaT'): ximalayaT;

	function require(moduleName: 'txBugly'): txBugly;

	function require(moduleName: 'douyin'): douyin;

	function require(moduleName: 'JMLink'): JMLink;

	function require(moduleName: 'ccVideo'): ccVideo;

	function require(moduleName: 'magicWindow'): magicWindow;

	function require(moduleName: 'leChange'): leChange;

	function require(moduleName: 'daniuPlayer'): daniuPlayer;

	function require(moduleName: 'hkIvms'): hkIvms;

	function require(moduleName: 'faceID'): faceID;

	function require(moduleName: 'tpns'): tpns;

	function require(moduleName: 'aliYunRtVoice'): aliYunRtVoice;

	function require(moduleName: 'aliPushNoUtdId'): aliPushNoUtdId;

	function require(moduleName: 'leCloudPlay'): leCloudPlay;

	function require(moduleName: 'cchelperCaiHongIM'): cchelperCaiHongIM;

	function require(moduleName: 'authorize'): authorize;

	function require(moduleName: 'SPlayer'): SPlayer;

	function require(moduleName: 'itppay'): itppay;

	function require(moduleName: 'citconPay'): citconPay;

	function require(moduleName: 'playRtsp'): playRtsp;

	function require(moduleName: 'qiyuSdk'): qiyuSdk;

	function require(moduleName: 'iDCardORC'): iDCardORC;

	function require(moduleName: 'ipaynow'): ipaynow;

	function require(moduleName: 'weiboPlus'): weiboPlus;

	function require(moduleName: 'aliOSS'): aliOSS;

	function require(moduleName: 'line'): line;

	function require(moduleName: 'meisheVideo'): meisheVideo;

	function require(moduleName: 'mitt'): mitt;

	function require(moduleName: 'pinke'): pinke;

	function require(moduleName: 'UIBdOcr'): UIBdOcr;

	function require(moduleName: 'jdFace'): jdFace;

	function require(moduleName: 'tulingapi'): tulingapi;

	function require(moduleName: 'talkFun'): talkFun;

	function require(moduleName: 'baiduFaceRec'): baiduFaceRec;

	function require(moduleName: 'aMapReportLocation'): aMapReportLocation;

	function require(moduleName: 'mipush'): mipush;

	function require(moduleName: 'cloudwiseMAgent'): cloudwiseMAgent;

	function require(moduleName: 'wxImageRecognizer'): wxImageRecognizer;

	function require(moduleName: 'detuPanorama'): detuPanorama;

	interface api_historyBack_Params {
		/**（可选项）frame 名称，若不传则表示对当前页面进行操作*/
		frameName: string;

	}
	/**
	 * `当前window或者frame的a标签历史记录后退一页`
	 * ========params==========
	 *
	 * `frameName` :string : （可选项）frame 名称，若不传则表示对当前页面进行操作
	 */
	function historyBack(option: api_historyBack_Params): void;

	interface api_historyForward_Params {
		/**（可选项）frame 名称，若不传则表示对当前页面进行操作*/
		frameName: string;

	}
	/**
	 * `当前window或者frame的a标签历史记录前进一页`
	 * ========params==========
	 *
	 * `frameName` :string : （可选项）frame 名称，若不传则表示对当前页面进行操作
	 */
	function historyForward(option: api_historyForward_Params): void;

	interface api_pageUp_Params {
		/**（可选项）是否直接滚动到最顶部*/
		top: boolean;

	}
	/**
	 * `页面向上滚动一页`
	 * ========params==========
	 *
	 * `top` :boolean : （可选项）是否直接滚动到最顶部
	 */
	function pageUp(option: api_pageUp_Params): void;

	interface api_pageDown_Params {
		/**（可选项）是否直接滚动到最底部*/
		bottom: boolean;

	}
	/**
	 * `页面向下滚动一页`
	 * ========params==========
	 *
	 * `bottom` :boolean : （可选项）是否直接滚动到最底部
	 */
	function pageDown(option: api_pageDown_Params): void;

	interface api_setFocus_Params {
		/**input标签id*/
		inputId: string;

		/**是否获取焦点*/
		focus: boolean;

	}
	/**
	 * `设置input是否获取焦点`
	 * ========params==========
	 *
	 * `inputId` :string : input标签id
	 *
	 * `focus` :boolean : 是否获取焦点
	 */
	function setFocus(option: api_setFocus_Params): void;

}

type eventType = "batterylow" | "batterystatus" | "keyback" | "keymenu" | "volumeup" | "volumedown" | "offline" | "online" | "pause" | "resume" | "scrolltobottom" | "shake" | "takescreenshot" | "appidle" | "swipedown" | "swipeleft" | "swiperight" | "swipeup" | "tap" | "longpress" | "viewappear" | "viewdisappear" | "noticeclicked" | "appintent" | "smartupdatefinish" | "launchviewclicked" | "keyboardshow" | "keyboardhide" | "safeareachanged" | "interfacestylechanged" | "navtitle" | "navbackbtn" | "navitembtn" | "tabitembtn" | "tabframe";

