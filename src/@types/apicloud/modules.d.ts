// @ts-nocheck
interface mailUtils {
	/** 设置本地账号*/ 
	setFromAddres(callback?: (ret:JSON) => void):void

	/** 发送邮件*/ 
	sendEmail(callback?: (ret:JSON) => void):void

}
interface helper {
	/** 初始化参数，将要监听的应用包名传入即可，不传默认监听所有应用。*/ 
	init():void

	/** 传入需要点击事件的控件id，窗口出现该控件时会自动点击该控件。*/ 
	click():void

	/** 传入需要长按事件的控件id，窗口出现该控件时会自动长按该控件。*/ 
	longClick():void

	/** 传入需要粘贴文本的控件id，窗口出现控件时会自动将粘贴板上的内容粘贴到该控件上。*/ 
	paste():void

}
interface phoneStatusOB {
	/** 设置电话状态监听，*/ 
	setCallListener(callback?: (ret:JSON) => void):void

	/** 取消电话状态监听*/ 
	cancleCallListener(callback?: (ret:JSON) => void):void

}
interface vpnIOS {
	/** 打开vpn代理*/ 
	vpnStart():void

	/** 打开vpn代理*/ 
	vpnStop():void

}
interface jlLangDetect {
	/**
	 * `语言检测`
	 * ========params==========
	 *
	 * `text` :string : 文本内容
	 */
	detect(params:jlLangDetect_detect_Params, callback?: (ret:JSON) => void):void

}
interface jlLangDetect_detect_Params {
	/**文本内容*/ 
	text:string,

}

interface audioTrans {
	/**
	 * `将wav音频格式转换为amr格式。`
	 * ========params==========
	 *
	 * `path` :string : mp3音频路径,支持本地路径（widget://、fs://）或绝对路径
	 */
	wavToAmr(params:audioTrans_wavToAmr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将amr音频格式转换为wav格式。`
	 * ========params==========
	 *
	 * `path` :string : amr音频路径,支持本地路径（widget://、fs://）或绝对路径
	 */
	amrToWav(params:audioTrans_amrToWav_Params, callback?: (ret:JSON) => void):void

	/** 清除音频文件本地缓存。*/ 
	clearCache():void

}
interface audioTrans_wavToAmr_Params {
	/**mp3音频路径,支持本地路径（widget://、fs://）或绝对路径*/ 
	path:string,

}

interface audioTrans_amrToWav_Params {
	/**amr音频路径,支持本地路径（widget://、fs://）或绝对路径*/ 
	path:string,

}

interface fs {
	/**
	 * `删除文件目录，**里面的所有文件将会一起被删除**`
	 * ========params==========
	 *
	 * `path` :string : 目标文件路径
	 */
	rmdir(params:fs_rmdir_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除文件目录，**里面的所有文件将会一起被删除**`
	 * ========params==========
	 *
	 * `path` :string : 目标文件路径
	 */
	rmdirSync(params:fs_rmdirSync_Params):JSON;

}
interface fs_rmdir_Params {
	/**目标文件路径*/ 
	path:string,

}

interface fs_rmdirSync_Params {
	/**目标文件路径*/ 
	path:string,

}

interface checknotification {
	/** 判断当前应用是否开启了通知权限*/ 
	check(callback?: (ret:JSON) => void):void

	/** 跳转通知设置，无参无返回*/ 
	jumpSetting():void

}
interface cameraQQ {
	/**
	 * `打开固定 UI 的相机页面`
	 * ========params==========
	 *
	 * `save` :JSON : （可选项）拍摄的图片保存信息
	 *
	 * `timer` :number : (可选项)视频录制倒计时计时器，单位为秒（s)，也可以在录制视频过程中单击停止视频录制
	 *
	 * `album` :boolean : （可选项）拍照成功后是否将所拍图片存入系统相册
	 *
	 * `animation` :boolean : （可选项）打开拍照页面时是否带有动画效果
	 *
	 * `quality` :string : （可选项）所拍照片质量
	 *
	 * `style` :JSON : （可选项）页面样式设置（仅android有效）
	 */
	open(params:cameraQQ_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消/关闭拍照页面`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）关闭拍照页面时是否带有动画效果
	 */
	cancel(params:cameraQQ_cancel_Params):void

}
interface cameraQQ_open_Params {
	/**（可选项）拍摄的图片保存信息*/ 
	save?:JSON,

	/**(可选项)视频录制倒计时计时器，单位为秒（s)，也可以在录制视频过程中单击停止视频录制*/ 
	timer?:number,

	/**（可选项）拍照成功后是否将所拍图片存入系统相册*/ 
	album?:boolean,

	/**（可选项）打开拍照页面时是否带有动画效果*/ 
	animation?:boolean,

	/**（可选项）所拍照片质量*/ 
	quality?:string,

	/**（可选项）页面样式设置（仅android有效）*/ 
	style?:JSON,

}

interface cameraQQ_cancel_Params {
	/**（可选项）关闭拍照页面时是否带有动画效果*/ 
	animation?:boolean,

}

interface preSensor {
	/** 获取所处位置大气压强*/ 
	getPressure():void

	/** 销毁获取气压,当应用不需要再获取时，需调用次方法释放内存，防止内存溢出。*/ 
	stopPressure():void

}
interface keychain {
	/**
	 * `往钥匙串添加数据`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `serviceName` :string : 服务器名（android为通过自定义模块设置的accountType固定值）
	 *
	 * `password` :string : 密码
	 *
	 * `updateExisting` :boolean : （可选项）若已存在，是否覆盖（仅iOS支持，android不可覆盖）
	 */
	add(params:keychain_add_Params, callback?: (ret:JSON) => void):void

	/**
	 * `往钥匙串删除数据`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `serviceName` :string : 服务器名（android为通过自定义模块设置的accountType固定值）
	 */
	delete(params:keychain_delete_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清空钥匙串中的某条数据（仅iOS支持）`
	 * ========params==========
	 *
	 * `serviceName` :string : 服务器名
	 */
	purge(params:keychain_purge_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询钥匙串中的数据`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `serviceName` :string : 服务器名（android为通过自定义模块设置的accountType固定值）
	 */
	check(params:keychain_check_Params, callback?: (ret:JSON) => void):void

}
interface keychain_add_Params {
	/**用户名*/ 
	username:string,

	/**服务器名（android为通过自定义模块设置的accountType固定值）*/ 
	serviceName:string,

	/**密码*/ 
	password:string,

	/**（可选项）若已存在，是否覆盖（仅iOS支持，android不可覆盖）*/ 
	updateExisting?:boolean,

}

interface keychain_delete_Params {
	/**用户名*/ 
	username:string,

	/**服务器名（android为通过自定义模块设置的accountType固定值）*/ 
	serviceName:string,

}

interface keychain_purge_Params {
	/**服务器名*/ 
	serviceName:string,

}

interface keychain_check_Params {
	/**用户名*/ 
	username:string,

	/**服务器名（android为通过自定义模块设置的accountType固定值）*/ 
	serviceName:string,

}

interface compactPicture {
}
interface UIImageEdit {
	/**
	 * `开启图片操作界面`
	 * ========params==========
	 *
	 * `path` :string : 要编辑的图片的路径，要求本地路径（fs://、widget://）
	 *
	 * `savePath` :string : 编辑完成后文件保存的路径，路径包括文件的后缀名(后缀png或者jpg)默认（fs://UIImageEdit/UIImageEdit.png）
	 *
	 * `width` :number : 编辑时画笔的宽度
	 */
	open(params:UIImageEdit_open_Params, callback?: (ret:JSON) => void):void

	/** 清除本模块产生的图片文件*/ 
	clearCache():void

}
interface UIImageEdit_open_Params {
	/**要编辑的图片的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**编辑完成后文件保存的路径，路径包括文件的后缀名(后缀png或者jpg)默认（fs://UIImageEdit/UIImageEdit.png）*/ 
	savePath:string,

	/**编辑时画笔的宽度*/ 
	width:number,

}

interface videoKit {
	/**
	 * `压缩本地视频文件`
	 * ========params==========
	 *
	 * `path` :string : 通过文件选择器获得的本地视频文件url，不可为空。
	 *
	 * `quality` :string : （可选项）视频压缩质量，取值l, m, h。其中l为low，m为medium，h为high。
	 */
	compressVideo(params:videoKit_compressVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `手动选取时间段裁剪视频`
	 * ========params==========
	 *
	 * `path` :string : 通过文件选择器获得的本地视频文件url，不可为空。
	 */
	clipVideo(params:videoKit_clipVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `任意时间点截屏`
	 * ========params==========
	 *
	 * `path` :string : 通过文件选择器获得的本地视频文件url，不可为空。
	 *
	 * `startTime` :string : （可选项）截屏时间点，数量级为秒，如0，3.5，10等，超过总长报错。
	 */
	captureScreen(params:videoKit_captureScreen_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取视频总时长`
	 * ========params==========
	 *
	 * `path` :string : 通过文件选择器获得的本地视频文件url，不可为空。
	 */
	getVideoDuration(params:videoKit_getVideoDuration_Params, callback?: (ret:JSON) => void):void

}
interface videoKit_compressVideo_Params {
	/**通过文件选择器获得的本地视频文件url，不可为空。*/ 
	path:string,

	/**（可选项）视频压缩质量，取值l, m, h。其中l为low，m为medium，h为high。*/ 
	quality?:string,

}

interface videoKit_clipVideo_Params {
	/**通过文件选择器获得的本地视频文件url，不可为空。*/ 
	path:string,

}

interface videoKit_captureScreen_Params {
	/**通过文件选择器获得的本地视频文件url，不可为空。*/ 
	path:string,

	/**（可选项）截屏时间点，数量级为秒，如0，3.5，10等，超过总长报错。*/ 
	startTime?:string,

}

interface videoKit_getVideoDuration_Params {
	/**通过文件选择器获得的本地视频文件url，不可为空。*/ 
	path:string,

}

interface mMarket {
	/**
	 * `打开安卓市场应用页`
	 * ========params==========
	 *
	 * `pkg` :string : 应用的包名
	 */
	androidScore(params:mMarket_androidScore_Params):void

	/**
	 * `打开当前应用的应用内评分`
	 * ========params==========
	 *
	 * `appid` :string : 应用id
	 */
	iosShowStar(params:mMarket_iosShowStar_Params):void

	/**
	 * `打开App Store应用评分评论页`
	 * ========params==========
	 *
	 * `appid` :string : 应用id
	 */
	iosShowComment(params:mMarket_iosShowComment_Params):void

	/**
	 * `打开App Store应用详情`
	 * ========params==========
	 *
	 * `appid` :string : 应用id
	 */
	iosShowDetail(params:mMarket_iosShowDetail_Params):void

}
interface mMarket_androidScore_Params {
	/**应用的包名*/ 
	pkg:string,

}

interface mMarket_iosShowStar_Params {
	/**应用id*/ 
	appid:string,

}

interface mMarket_iosShowComment_Params {
	/**应用id*/ 
	appid:string,

}

interface mMarket_iosShowDetail_Params {
	/**应用id*/ 
	appid:string,

}

interface musicList {
	/** 获取铃声列表*/ 
	getMusicList():void

	/**
	 * `文件夹监听（文件夹里面的文件增加还是减少）`
	 * ========params==========
	 *
	 * `soundID` :string : 铃声名称（仅android有效）
	 */
	playSound(params:musicList_playSound_Params):void

	/** 停止播放（仅android支持）*/ 
	stopSound():void

}
interface musicList_playSound_Params {
	/**铃声名称（仅android有效）*/ 
	soundID:string,

}

interface switchLoudspeaker {
	/**
	 * `听筒和扬声器切换`
	 * ========params==========
	 *
	 * `type` :string : 切换的类型
	 */
	switchType(params:switchLoudspeaker_switchType_Params):void

}
interface switchLoudspeaker_switchType_Params {
	/**切换的类型*/ 
	type:string,

}

interface imagePalette {
}
interface appshortcut {
}
interface backGroundAudioPlayer {
	/**
	 * `开启后台音频播放`
	 * ========params==========
	 *
	 * `path` :string : （必填项）音频文件路径。
	 */
	backGroundPlay(params:backGroundAudioPlayer_backGroundPlay_Params):void

	/** 停止后台音频播放*/ 
	backGroundStop():void

}
interface backGroundAudioPlayer_backGroundPlay_Params {
	/**（必填项）音频文件路径。*/ 
	path:string,

}

interface pictureWatermark {
	/**
	 * `获取原图的大小`
	 * ========params==========
	 *
	 * `path` :string : 需要添加水印的图片路径，要求本地路径（ fs://、 widget://）
	 */
	getPictureSize(params:pictureWatermark_getPictureSize_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加图片水印`
	 * ========params==========
	 *
	 * `watermark` :JSON : 水印配置
	 */
	mark(params:pictureWatermark_mark_Params, callback?: (ret:JSON) => void):void

	/** 清除本地缓存的水印图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface pictureWatermark_getPictureSize_Params {
	/**需要添加水印的图片路径，要求本地路径（ fs://、 widget://）*/ 
	path:string,

}

interface pictureWatermark_mark_Params {
	/**水印配置*/ 
	watermark:JSON,

}

interface androidEmail {
}
interface recentPic {
}
interface FNImageClip {
}
interface imageCutOut {
	/**
	 * `打开剪切预览视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）浏览器窗口的位置和大小，设置margin后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充。建议使用margin布局，可以完美适配带smartBar的手机。
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `filePath` :string : （必填项）设置需要剪切的本地图片路径(支持fs:// widget://)[备注：安卓不支持widget路径]。
	 */
	openCropView(params:imageCutOut_openCropView_Params, callback?: (ret:JSON) => void):void

	/** 隐藏预览剪切视图*/ 
	hideCropView(callback?: (ret:JSON) => void):void

	/** 显示预览剪切视图*/ 
	showCropView(callback?: (ret:JSON) => void):void

	/** 关闭预览剪切视图*/ 
	closeCropView(callback?: (ret:JSON) => void):void

	/** 剪切图片*/ 
	clipImage(callback?: (ret:JSON) => void):void

	/** 保存剪切的图片*/ 
	saveImage(callback?: (ret:JSON) => void):void

}
interface imageCutOut_openCropView_Params {
	/**（可选项）浏览器窗口的位置和大小，设置margin后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充。建议使用margin布局，可以完美适配带smartBar的手机。*/ 
	rect?:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）设置需要剪切的本地图片路径(支持fs:// widget://)[备注：安卓不支持widget路径]。*/ 
	filePath:string,

}

interface fileBrowser {
	/**
	 * `打开文件浏览器`
	 * ========params==========
	 *
	 * `confirm` :boolean : （可选项）当设置true时 点击设置按钮进入选择界面选择文件或文件夹点击确认返回路径,当为false时进入到删除界面
	 *
	 * `path` :string : （可选项）需要打开的文件的目录路径；本地（fs://）路径
	 */
	open(params:fileBrowser_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭文件浏览器*/ 
	close():void

	/** 换肤接口，调用此接口后要重新打开界面才能换肤成功（仅支持ios）*/ 
	skin():void

}
interface fileBrowser_open_Params {
	/**（可选项）当设置true时 点击设置按钮进入选择界面选择文件或文件夹点击确认返回路径,当为false时进入到删除界面*/ 
	confirm?:boolean,

	/**（可选项）需要打开的文件的目录路径；本地（fs://）路径*/ 
	path?:string,

}

interface cocoVideo {
	/**
	 * `模块初始化及参数设置接口`
	 * ========params==========
	 *
	 * `mode` :any : 设置拍摄最短有效时长，单位(秒)
	 */
	config(params:cocoVideo_config_Params, callback?: (ret:JSON) => void):void

	/**
	 * `启动拍照/拍摄`
	 * ========params==========
	 *
	 * `mode` :number : 拍照模式下，设置能从相册中选择的图片的数量
	 */
	openCamera(params:cocoVideo_openCamera_Params, callback?: (ret:JSON) => void):void

}
interface cocoVideo_config_Params {
	/**设置拍摄最短有效时长，单位(秒)*/ 
	mode:any,

}

interface cocoVideo_openCamera_Params {
	/**拍照模式下，设置能从相册中选择的图片的数量*/ 
	mode:number,

}

interface webToImage {
	/**
	 * `把模块所依附的当前 webview 转换为图片`
	 * ========params==========
	 *
	 * `save` :JSON : （可选项）转换的 图片的保存信息
	 */
	transImage(params:webToImage_transImage_Params, callback?: (ret:JSON) => void):void

	/** 当 webToImage 接口内 save 参数未传 path 值，则模块会将转换后的 图片保存在缓存目录。调用本接口，可清除本模块产生的所有图片。调用 api 对象下的 clearCache 接口会清除缓存目录下所有文件（不仅本模块产生的图片文件）。*/ 
	clearCache():void

}
interface webToImage_transImage_Params {
	/**（可选项）转换的 图片的保存信息*/ 
	save?:JSON,

}

interface zxycamera {
	/**
	 * `调用照相功能`
	 * ========params==========
	 *
	 * `albumName` :string : 创建系统相册的名字，建议使用app名字。
	 *
	 * `albumName` :string : 创建系统相册的名字，建议使用app名字。
	 *
	 * `voideLength` :string : 录制视频最长时间，单位为秒，使用整数。
	 *
	 * `albumName` :string : 创建系统相册的名字，建议使用app名字。
	 *
	 * `voideLength` :string : 录制视频最长时间，单位为秒，使用整数。
	 */
	takePictureClick(params:zxycamera_takePictureClick_Params, callback?: (ret:JSON) => void):void

	/** 视频压缩，格式转换*/ 
	compressVideo(callback?: (ret:JSON) => void):void

	/**
	 * `截取视频任意时间点静态图`
	 * ========params==========
	 *
	 * `path` :string : 处理视频的绝对路径
	 *
	 * `startTime` :number : （可选项）截屏时间点，数量级为秒，如0，3.5，10等。
	 */
	captureScreen(params:zxycamera_captureScreen_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取视频信息`
	 * ========params==========
	 *
	 * `path` :string : 处理视频的绝对路径
	 */
	getVideoInfo(params:zxycamera_getVideoInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `压缩图片`
	 * ========params==========
	 *
	 * `path` :string : 处理图片的绝对路径
	 *
	 * `compressionQuality` :string : 压缩图片比例。默认为1，取值在0到1之间。
	 */
	compressImg(params:zxycamera_compressImg_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取压缩图片信息`
	 * ========params==========
	 *
	 * `path` :string : 要获取图片信息的绝对地址
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getImageInfo(params:zxycamera_getImageInfo_Params):void

}
interface zxycamera_takePictureClick_Params {
	/**创建系统相册的名字，建议使用app名字。*/ 
	albumName:string,

	/**创建系统相册的名字，建议使用app名字。*/ 
	albumName:string,

	/**录制视频最长时间，单位为秒，使用整数。*/ 
	voideLength:string,

	/**创建系统相册的名字，建议使用app名字。*/ 
	albumName:string,

	/**录制视频最长时间，单位为秒，使用整数。*/ 
	voideLength:string,

}

interface zxycamera_captureScreen_Params {
	/**处理视频的绝对路径*/ 
	path:string,

	/**（可选项）截屏时间点，数量级为秒，如0，3.5，10等。*/ 
	startTime?:number,

}

interface zxycamera_getVideoInfo_Params {
	/**处理视频的绝对路径*/ 
	path:string,

}

interface zxycamera_compressImg_Params {
	/**处理图片的绝对路径*/ 
	path:string,

	/**压缩图片比例。默认为1，取值在0到1之间。*/ 
	compressionQuality:string,

}

interface zxycamera_getImageInfo_Params {
	/**要获取图片信息的绝对地址*/ 
	path:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface webCapturer {
	/**
	 * `将指定的网页地址，转换为png图片，并返回图片的base64内容`
	 * ========params==========
	 *
	 * `w` :any : （必选项）以怎样的宽度去装载网页（单位：px）。
	 *
	 * `h` :any : （必选项）以怎样的高度去装载网页（单位：px）。
	 *
	 * `url` :string : （必选项）网页地址。
	 *
	 * `path` :boolean : （可选项）是否返回base64内容，默认为true。
	 */
	saveWebImage(params:webCapturer_saveWebImage_Params):void

}
interface webCapturer_saveWebImage_Params {
	/**（必选项）以怎样的宽度去装载网页（单位：px）。*/ 
	w:any,

	/**（必选项）以怎样的高度去装载网页（单位：px）。*/ 
	h:any,

	/**（必选项）网页地址。*/ 
	url:string,

	/**（可选项）是否返回base64内容，默认为true。*/ 
	path?:boolean,

}

interface wifiServer {
	/**
	 * `开启服务。`
	 * ========params==========
	 *
	 * `userName` :string : 用户名 （暂仅支持Android）
	 *
	 * `password` :string : 密码 （暂仅支持Android）
	 *
	 * `path` :string : 服务器提供的网页html文件所在的目录，如：widget://wifiServer。下载 [wifiServer](/img/docImage/wifiServer/wifiServer.zip) 示例html文件。
	 *
	 * `port` :number : （可选项）端口号，不传则随机取值
	 */
	start(params:wifiServer_start_Params, callback?: (ret:JSON) => void):void

	/** 获取上传的文件的目录，及其文件列表 （Android暂不支持该方法）*/ 
	getUploadDirectory():void

}
interface wifiServer_start_Params {
	/**用户名 （暂仅支持Android）*/ 
	userName:string,

	/**密码 （暂仅支持Android）*/ 
	password:string,

	/**服务器提供的网页html文件所在的目录，如：widget://wifiServer。下载 [wifiServer](/img/docImage/wifiServer/wifiServer.zip) 示例html文件。*/ 
	path:string,

	/**（可选项）端口号，不传则随机取值*/ 
	port?:number,

}

interface trans {
}
interface netTools {
	/**
	 * `检查与某个 IP 是否联通`
	 * ========params==========
	 *
	 * `hostName` :string : 主机名
	 */
	ping(params:netTools_ping_Params, callback?: (ret:JSON) => void):void

	/** 停止 ping*/ 
	stopPing():void

	/** 获取授权状态*/ 
	getIPAddress():void

	/** 监听用户从设置内删除该App的授权事件，注意：删除后无法再次授权该App*/ 
	isVPNOn():void

	/** 监听vpn状态改变事件*/ 
	addVPNStatusChangedListener():void

	/** 监听网络状态改变事件*/ 
	addNetworkChangedListener():void

	/** 获取网络状态*/ 
	getNetworkStatus():void

}
interface netTools_ping_Params {
	/**主机名*/ 
	hostName:string,

}

interface launchImage {
	/**
	 * `获取启动图`
	 * ========params==========
	 *
	 * `isPortrait` :boolean : （可选项）是否为竖屏。
	 *
	 * `debug` :boolean : （可选项）调试模式。开启时，每次都会从底层获取启动图，方便调试；关闭时，如果有缓存，则直接返回图片地址。
	 */
	get(params:launchImage_get_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清除缓存的启动图`
	 * ========params==========
	 *
	 * `reGet` :boolean : （可选项）清除缓存后是否立即重新获取。
	 *
	 * `isPortrait` :boolean : （可选项）是否为竖屏。如果reGet为true，且APP是横屏应用，需要设置此项
	 */
	clearCache(params:launchImage_clearCache_Params, callback?: (ret:JSON) => void):void

}
interface launchImage_get_Params {
	/**（可选项）是否为竖屏。*/ 
	isPortrait?:boolean,

	/**（可选项）调试模式。开启时，每次都会从底层获取启动图，方便调试；关闭时，如果有缓存，则直接返回图片地址。*/ 
	debug?:boolean,

}

interface launchImage_clearCache_Params {
	/**（可选项）清除缓存后是否立即重新获取。*/ 
	reGet?:boolean,

	/**（可选项）是否为竖屏。如果reGet为true，且APP是横屏应用，需要设置此项*/ 
	isPortrait?:boolean,

}

interface phoneListener {
	/** 判断当前设备是否有耳机插入*/ 
	hasHeadset(callback?: (ret:JSON) => void):void

	/**
	 * `监听耳机插拔事件`
	 * ========params==========
	 *
	 * `enable` :boolean : （可选项）是否启动耳机插拔事件监听
	 */
	headphonePluggedListener(params:phoneListener_headphonePluggedListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `监听静音事件`
	 * ========params==========
	 *
	 * `enable` :boolean : （可选项）是否启动静音事件监听
	 */
	ringerModeSilentListener(params:phoneListener_ringerModeSilentListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `监听电话事件状态。注意：在 iOS 端本接口仅获取当前手机电话状态`
	 * ========params==========
	 *
	 * `enable` :boolean : （可选项）是否启动电话事件监听
	 */
	callStateListener(params:phoneListener_callStateListener_Params, callback?: (ret:JSON) => void):void

}
interface phoneListener_headphonePluggedListener_Params {
	/**（可选项）是否启动耳机插拔事件监听*/ 
	enable?:boolean,

}

interface phoneListener_ringerModeSilentListener_Params {
	/**（可选项）是否启动静音事件监听*/ 
	enable?:boolean,

}

interface phoneListener_callStateListener_Params {
	/**（可选项）是否启动电话事件监听*/ 
	enable?:boolean,

}

interface acc5Util {
	/** 获取app系统媒体音量*/ 
	getVol():void

	/** 设置媒体音量*/ 
	setVol():void

	/** 设置音频不会被静音键和锁屏键静音。适用于音频是主要功能的APP，像网易云这些音乐app，锁屏后依然可以播放。*/ 
	audioSessionPlayback():void

	/** 设置音频会被静音键和锁屏键静音。*/ 
	audioSessionSoloAmbient():void

	/** 获取屏幕亮度*/ 
	getBrightness():void

	/** 设置屏幕亮度*/ 
	setBrightness():void

}
interface myTimer {
	/**
	 * `启动定时器`
	 * ========params==========
	 *
	 * `step` :number : （可选项）执行事件间隔(秒)；
	 *
	 * `isLoop` :boolean : （可选项）是否循环执行
	 */
	startTimer(params:myTimer_startTimer_Params, callback?: (ret:JSON) => void):void

	/** 停止定时器*/ 
	stopTimer():void

}
interface myTimer_startTimer_Params {
	/**（可选项）执行事件间隔(秒)；*/ 
	step?:number,

	/**（可选项）是否循环执行*/ 
	isLoop?:boolean,

}

interface notificationUtil {
	/**
	 * `创建通知通道`
	 * ========params==========
	 *
	 * `Id` :string : 通道id
	 *
	 * `name` :string : 通道名称，创建成功后应用设置中可见
	 *
	 * `description` :string : 通道描述，创建成功后应用设置中可见
	 *
	 * `light` :boolean : （可选项）来消息跑马灯是否亮起
	 *
	 * `vibration` :Array : （可选项）来消息是否震动
	 *
	 * `sound` :string : （可选项）铃声，设置铃声消息等级最小需要为中等级
	 *
	 * `importance` :number : （可选项）消息等级
	 */
	creatChannel(params:notificationUtil_creatChannel_Params, callback?: (ret:JSON) => void):void

}
interface notificationUtil_creatChannel_Params {
	/**通道id*/ 
	Id:string,

	/**通道名称，创建成功后应用设置中可见*/ 
	name:string,

	/**通道描述，创建成功后应用设置中可见*/ 
	description:string,

	/**（可选项）来消息跑马灯是否亮起*/ 
	light?:boolean,

	/**（可选项）来消息是否震动*/ 
	vibration?:Array,

	/**（可选项）铃声，设置铃声消息等级最小需要为中等级*/ 
	sound?:string,

	/**（可选项）消息等级*/ 
	importance?:number,

}

interface vPlayer {
}
interface micoMqtt {
}
interface ftpServer {
	/** 开启ftp服务，开启成功后在电脑端文件资源管理器输入ftp://ip:端口号即可访问手机分享文件。需要开启存储权限。*/ 
	startFtp(callback?: (ret:JSON) => void):void

	/** 关闭ftp服务。*/ 
	stopFtp(callback?: (ret:JSON) => void):void

}
interface lockControler {
	/**
	 * `设置开关机时间`
	 * ========params==========
	 *
	 * `openDate` :string : 开机时间，格式yyyy-MM-dd HH:mm:ss
	 *
	 * `closeDate` :string : 关机时间，格式yyyy-MM-dd HH:mm:ss
	 */
	setPowerTime(params:lockControler_setPowerTime_Params, callback?: (ret:JSON) => void):void

	/** 取消定时开关机时间*/ 
	cancelPowerTimef(callback?: (ret:JSON) => void):void

	/**
	 * `设置系统时间`
	 * ========params==========
	 *
	 * `date` :string : 时间，格式yyyy-MM-dd HH:mm:ss
	 */
	setSysTime(params:lockControler_setSysTime_Params, callback?: (ret:JSON) => void):void

	/** 立刻关机*/ 
	powerOff(callback?: (ret:JSON) => void):void

	/** 重启板卡*/ 
	reboot(callback?: (ret:JSON) => void):void

	/** 隐藏导航栏*/ 
	hideBar(callback?: (ret:JSON) => void):void

	/** 显示导航栏*/ 
	showBar(callback?: (ret:JSON) => void):void

	/** 截屏，调用此接口系统会进行截屏，图片保存路径， /mnt/sdcard/Screenshots， 文件名按时间保存， 例如 Screenshot_2011-01-01-20-00-58.png*/ 
	screenshot(callback?: (ret:JSON) => void):void

	/**
	 * `背光灯灯管理`
	 * ========params==========
	 *
	 * `open` :boolean : 打开或关闭背光灯
	 */
	backlight(params:lockControler_backlight_Params, callback?: (ret:JSON) => void):void

	/**
	 * `恢复出厂设置`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否恢复出厂，ture/恢复出厂设置，false/取消恢复出厂
	 */
	recovery(params:lockControler_recovery_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开关锁`
	 * ========params==========
	 *
	 * `open` :boolean : 打开或关闭锁
	 */
	lockControl(params:lockControler_lockControl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `OTA升级`
	 * ========params==========
	 *
	 * `path` :string : 升级包路径，支持fs以及原生路径。
	 */
	otaupdate(params:lockControler_otaupdate_Params, callback?: (ret:JSON) => void):void

}
interface lockControler_setPowerTime_Params {
	/**开机时间，格式yyyy-MM-dd HH:mm:ss*/ 
	openDate:string,

	/**关机时间，格式yyyy-MM-dd HH:mm:ss*/ 
	closeDate:string,

}

interface lockControler_setSysTime_Params {
	/**时间，格式yyyy-MM-dd HH:mm:ss*/ 
	date:string,

}

interface lockControler_backlight_Params {
	/**打开或关闭背光灯*/ 
	open:boolean,

}

interface lockControler_recovery_Params {
	/**是否恢复出厂，ture/恢复出厂设置，false/取消恢复出厂*/ 
	enable:boolean,

}

interface lockControler_lockControl_Params {
	/**打开或关闭锁*/ 
	open:boolean,

}

interface lockControler_otaupdate_Params {
	/**升级包路径，支持fs以及原生路径。*/ 
	path:string,

}

interface zip {
}
interface appManage {
}
interface wmVideoRecorder {
	/** 调用系统相机录制视频*/ 
	recordVedios(callback?: (ret:JSON) => void):void

}
interface browser {
	/**
	 * `初始化浏览器`
	 * ========params==========
	 *
	 * `x` :number : 左上角x坐标，默认0
	 *
	 * `y` :number : 左上角y坐标，默认0
	 *
	 * `w` :number : 宽，默认屏幕宽
	 *
	 * `h` :number : 高，默认屏幕高
	 */
	init(params:browser_init_Params):void

	/** 关闭浏览器*/ 
	close():void

	/** 隐藏浏览器*/ 
	hide():void

	/** 显示浏览器*/ 
	show():void

	/**
	 * `加载网址`
	 * ========params==========
	 *
	 * `url` :string : 加载的网站地址
	 */
	loadUrl(params:browser_loadUrl_Params):void

	/** 历史记录后退一页*/ 
	historyBack():void

	/** 历史记录前进一页*/ 
	historyForward():void

	/** 是否能后退一页*/ 
	isHistoryBack(callback?: (ret:JSON) => void):void

	/** 是否能前进一页*/ 
	isHistoryForward(callback?: (ret:JSON) => void):void

	/**
	 * `插入js字符串并且执行，返回仅限字符串类型（也可返回）`
	 * ========params==========
	 *
	 * `jsStr` :string : js语句
	 */
	insertJSstr(params:browser_insertJSstr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `插入js文件，文件写法说明在测试用例的script目录下myJS.js中`
	 * ========params==========
	 *
	 * `path` :string : js文件地址（相对地址）
	 */
	insertJSFile(params:browser_insertJSFile_Params):void

	/**
	 * `执行插入js文件中的方法`
	 * ========params==========
	 *
	 * `functionName` :string : 方法名字
	 */
	executeJS(params:browser_executeJS_Params):void

	/**
	 * `监听事件`
	 * ========params==========
	 *
	 * `name` :string : 事件名称。
	 */
	addEventListener(params:browser_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface browser_init_Params {
	/**左上角x坐标，默认0*/ 
	x:number,

	/**左上角y坐标，默认0*/ 
	y:number,

	/**宽，默认屏幕宽*/ 
	w:number,

	/**高，默认屏幕高*/ 
	h:number,

}

interface browser_loadUrl_Params {
	/**加载的网站地址*/ 
	url:string,

}

interface browser_insertJSstr_Params {
	/**js语句*/ 
	jsStr:string,

}

interface browser_insertJSFile_Params {
	/**js文件地址（相对地址）*/ 
	path:string,

}

interface browser_executeJS_Params {
	/**方法名字*/ 
	functionName:string,

}

interface browser_addEventListener_Params {
	/**事件名称。*/ 
	name:string,

}

interface videoTool {
	/** 视频压缩，格式转换*/ 
	compressVideo(callback?: (ret:JSON) => void):void

	/**
	 * `截取视频任意时间点静态图`
	 * ========params==========
	 *
	 * `path` :string : 处理视频的绝对路径
	 *
	 * `startTime` :number : （可选项）截屏时间点，数量级为秒，如0，3.5，10等。
	 */
	captureScreen(params:videoTool_captureScreen_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取视频信息`
	 * ========params==========
	 *
	 * `path` :string : 处理视频的绝对路径
	 */
	getVideoInfo(params:videoTool_getVideoInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `截取视频功能`
	 * ========params==========
	 *
	 * `path` :string : 处理视频的绝对路径，路径须正确，并有此文件
	 *
	 * `rulerLabelInterval` :number : 标尺数字距离显示，默认值为5
	 *
	 * `maxLength` :number : 截取视频的最长时间，单位为秒。默认值为15
	 *
	 * `minLength` :number : 截取视频的最短时间，单位为秒。默认值为3
	 */
	interceptionVideo(params:videoTool_interceptionVideo_Params, callback?: (ret:JSON) => void):void

}
interface videoTool_captureScreen_Params {
	/**处理视频的绝对路径*/ 
	path:string,

	/**（可选项）截屏时间点，数量级为秒，如0，3.5，10等。*/ 
	startTime?:number,

}

interface videoTool_getVideoInfo_Params {
	/**处理视频的绝对路径*/ 
	path:string,

}

interface videoTool_interceptionVideo_Params {
	/**处理视频的绝对路径，路径须正确，并有此文件*/ 
	path:string,

	/**标尺数字距离显示，默认值为5*/ 
	rulerLabelInterval:number,

	/**截取视频的最长时间，单位为秒。默认值为15*/ 
	maxLength:number,

	/**截取视频的最短时间，单位为秒。默认值为3*/ 
	minLength:number,

}

interface mp3Recorder {
	/** 视频结果和声音分贝监听*/ 
	addEventListener():void

	/**
	 * `开始录音`
	 * ========params==========
	 *
	 * `channel` :number : （可选项）声道支持:1 单声道 2 立体声道。
	 *
	 * `sampleRates` :number : （可选项）采样率。(8000/44100/96000)
	 *
	 * `isDefaultToSpeaker` :boolean : （可选项）限定录制声音时是否限定扬声器进行播放音频。
	 */
	startRecord(params:mp3Recorder_startRecord_Params, callback?: (ret:JSON) => void):void

	/** 停止录音*/ 
	stopRecord(callback?: (ret:JSON) => void):void

	/**
	 * `显示线性波形图`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `isTransparent` :boolean : （可选项）背景是否透明(透明时可以穿透点击视图)。
	 */
	openVoiceLine(params:mp3Recorder_openVoiceLine_Params, callback?: (ret:JSON) => void):void

	/** 关闭线性波形图*/ 
	closeVoiceLine(callback?: (ret:JSON) => void):void

	/**
	 * `设置波形图的分贝值`
	 * ========params==========
	 *
	 * `decibel` :any : （可选项）分贝值，范围0-60
	 */
	setDecibels(params:mp3Recorder_setDecibels_Params, callback?: (ret:JSON) => void):void

	/** 暂停录音*/ 
	pauseRecord(callback?: (ret:JSON) => void):void

	/** 恢复录音*/ 
	resumeRecord(callback?: (ret:JSON) => void):void

}
interface mp3Recorder_startRecord_Params {
	/**（可选项）声道支持:1 单声道 2 立体声道。*/ 
	channel?:number,

	/**（可选项）采样率。(8000/44100/96000)*/ 
	sampleRates?:number,

	/**（可选项）限定录制声音时是否限定扬声器进行播放音频。*/ 
	isDefaultToSpeaker?:boolean,

}

interface mp3Recorder_openVoiceLine_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）背景是否透明(透明时可以穿透点击视图)。*/ 
	isTransparent?:boolean,

}

interface mp3Recorder_setDecibels_Params {
	/**（可选项）分贝值，范围0-60*/ 
	decibel?:any,

}

interface widgetPlan {
	/**
	 * `设置userId`
	 * ========params==========
	 *
	 * `userId` :string : 登陆账号userId
	 */
	setUserId(params:widgetPlan_setUserId_Params, callback?: (ret:JSON) => void):void

	/** 获取userId*/ 
	getUserId(callback?: (ret:JSON) => void):void

	/** 清除已保存UserId*/ 
	removeUserId(callback?: (ret:JSON) => void):void

}
interface widgetPlan_setUserId_Params {
	/**登陆账号userId*/ 
	userId:string,

}

interface volume {
	/** 初始化媒体音量控制器*/ 
	initVolume():void

	/** 获取当前媒体音量*/ 
	getVolume():void

	/**
	 * `设置媒体音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）0-100
	 */
	setVolume(params:volume_setVolume_Params, callback?: (ret:JSON) => void):void

	/** 扬声器与听筒切换*/ 
	setSpeakerphoneOn():void

}
interface volume_setVolume_Params {
	/**（可选项）0-100*/ 
	volume?:number,

}

interface acWebsocket {
	/**
	 * `连接websocket`
	 * ========params==========
	 *
	 * `url` :string : 连接地址
	 *
	 * `heartInterval` :number : （可选项）发送心跳包间隔
	 *
	 * `heartData` :string : （可选项）发送心跳包内容，heartInterval大于0有效
	 */
	open(params:acWebsocket_open_Params):void

	/** 断开连接websocket*/ 
	close():void

	/**
	 * `发送消息`
	 * ========params==========
	 *
	 * `content` :string : 发送的消息内容
	 */
	send(params:acWebsocket_send_Params):void

	/** 获取WebSocket连接状态*/ 
	getSocketReadyState():void

	/** 添加监听*/ 
	addEventListener():void

}
interface acWebsocket_open_Params {
	/**连接地址*/ 
	url:string,

	/**（可选项）发送心跳包间隔*/ 
	heartInterval?:number,

	/**（可选项）发送心跳包内容，heartInterval大于0有效*/ 
	heartData?:string,

}

interface acWebsocket_send_Params {
	/**发送的消息内容*/ 
	content:string,

}

interface setJumpNew {
	/** 打开对应app设置页面*/ 
	open():void

	/** 是否开启推送通知*/ 
	isUserNotificationEnable():void

}
interface mobcommonlib {
}
interface makeSharePic {
	/**
	 * `生成分享图片`
	 * ========params==========
	 *
	 * `imgUrl` :string : 要分享的图片的路径。支持本地路径和网络url,如：fs://...、cache://...、https://...
	 *
	 * `savePath` :string : （可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。
	 *
	 * `fileName` :string : （可选项）最终生成图片的文件名，如：toShare.png。
	 *
	 * `insertImage` :boolean : 是否把生成的图片插入到本地相册
	 *
	 * `qrCode` :string : 要生成的二维码内容
	 *
	 * `qrImgUrl` :string : (可选项)替换图中二维码位置(包含“长按识别二维码”部分)的图片路径。支持本地路径和网络url,如：fs://...、cache://...、https://...
	 *
	 * `erWeiMaErrorL` :string : （可选项）二维码的纠错等级 **仅Android有效**
	 *
	 * `erWeiMaWidth` :number : （可选项）Android中为创建二维码时的宽度，Ios中为创建二维码时的正方形边长。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到图片的相应位置）
	 *
	 * `erWeiMaHeight` :number : （可选项）创建二维码时的高度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到图片的相应位置） **仅Android有效**
	 *
	 * `expressType` :string : 对应生成图片的 包邮 内容。
	 *
	 * `goodTitle` :string : 对应生成图片的 商品标题 内容。
	 *
	 * `nowPriceStatus` :string : 对应生成图片的 现价描述 内容（如："现价 ：￥20000"）。
	 *
	 * `discountType` :string : 对应生成图片的 券 内容（如："券"）。
	 *
	 * `discountPrice` :string : 对应生成图片的 券减价格 内容（如："100元"）。
	 *
	 * `finalPriceType` :string : 对应生成图片的 券后价 内容（如："券后价" "抢购价"等）。
	 *
	 * `moneyUnit` :string : 对应生成图片的 券后价价格前面的￥ 内容(如："￥")。（如不需要可以设空""）
	 *
	 * `finalPrice` :string : 对应生成图片的 券后价价格 内容(如："100.0")。
	 *
	 * `isHtmlText` :boolean : 传入的商品信息内容是否是Html格式内容（如：nowPriceStatus 传："现价 ：```xml <font color='#FF0000'>￥200</font>" ```）。
	 */
	makePicture(params:makeSharePic_makePicture_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开二维码`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）二维码视图的位置。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `qrCode` :string : 要生成的二维码内容
	 *
	 * `erWeiMaErrorL` :string : （可选项）二维码的纠错等级 **仅Android有效**
	 *
	 * `erWeiMaWidth` :number : （可选项）Android中为创建二维码时的宽度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到rect区域） **仅Android有效**
	 *
	 * `erWeiMaHeight` :number : （可选项）创建二维码时的高度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到rect区域） **仅Android有效**
	 *
	 * `bgColor` :string : （可选项）二维码视图的背景颜色,支持“#+6位数的十六进制”的颜色设置（如："#ff0000"）。
	 */
	openErWeiMa(params:makeSharePic_openErWeiMa_Params):void

	/** 关闭当前打开的二维码视图*/ 
	closeErWeiMa():void

	/**
	 * `将字符串生成二维图片`
	 * ========params==========
	 *
	 * `width` :number : （可选项）二维码图片的宽度。
	 *
	 * `height` :number : （可选项）二维码图片的高度。
	 *
	 * `margin` :number : （可选项）生成图片的边框宽度 （注意ios中二维码自带4个像素的边框）。
	 *
	 * `savePath` :string : （可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。
	 *
	 * `fileName` :string : （可选项）最终生成图片的文件名，如：toShare.png。
	 *
	 * `qrCode` :string : 要生成的二维码内容
	 *
	 * `erWeiMaErrorL` :string : （可选项）二维码的纠错等级 **仅Android有效**
	 *
	 * `bgColor` :string : （可选项）生成图片的背景颜色,支持“#+6位数的十六进制”的颜色设置（如："#ff0000"）。
	 */
	createErweimaPic(params:makeSharePic_createErweimaPic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `由两张图片合成生成一张图片（可自定义上层图片位置）`
	 * ========params==========
	 *
	 * `bgPicUrl` :string : 合成图片所需的两张图片中作为**底层**图片的地址。支持本地路径和网络url,如：fs://...、cache://...、https://...
	 *
	 * `attachPicUrl` :string : 合成图片所需的两张图片中作为**上层**图片的地址。支持本地路径和网络url,如：fs://...、cache://...、https://...
	 *
	 * `insertImage` :boolean : 是否把生成的图片插入到本地相册
	 *
	 * `mainWidth` :number : （可选项）合成图片的最终宽度。
	 *
	 * `mainHeight` :number : （可选项）合成图片的最终高度。
	 *
	 * `l` :number : 上层图片相对于合成图片的 左边距（用于定位上层图片left位置）。
	 *
	 * `t` :number : 上层图片相对于合成图片的 上边距（用于定位上层图片位置）。
	 *
	 * `subWidth` :number : （需传大于0的值！）上层图片在最终合成图片中的 宽度（用于定位上层图片位置）。
	 *
	 * `subHeight` :number : 上层图片在最终合成图片中的 高度（用于定位上层图片位置）。
	 *
	 * `savePath` :string : （可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。
	 *
	 * `fileName` :string : （可选项）最终生成图片的文件名，如：toShare.png。
	 */
	composePic(params:makeSharePic_composePic_Params, callback?: (ret:JSON) => void):void

}
interface makeSharePic_makePicture_Params {
	/**要分享的图片的路径。支持本地路径和网络url,如：fs://...、cache://...、https://...*/ 
	imgUrl:string,

	/**（可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。*/ 
	savePath?:string,

	/**（可选项）最终生成图片的文件名，如：toShare.png。*/ 
	fileName?:string,

	/**是否把生成的图片插入到本地相册*/ 
	insertImage:boolean,

	/**要生成的二维码内容*/ 
	qrCode:string,

	/**(可选项)替换图中二维码位置(包含“长按识别二维码”部分)的图片路径。支持本地路径和网络url,如：fs://...、cache://...、https://...*/ 
	qrImgUrl?:string,

	/**（可选项）二维码的纠错等级 **仅Android有效***/ 
	erWeiMaErrorL?:string,

	/**（可选项）Android中为创建二维码时的宽度，Ios中为创建二维码时的正方形边长。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到图片的相应位置）*/ 
	erWeiMaWidth?:number,

	/**（可选项）创建二维码时的高度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到图片的相应位置） **仅Android有效***/ 
	erWeiMaHeight?:number,

	/**对应生成图片的 包邮 内容。*/ 
	expressType:string,

	/**对应生成图片的 商品标题 内容。*/ 
	goodTitle:string,

	/**对应生成图片的 现价描述 内容（如："现价 ：￥20000"）。*/ 
	nowPriceStatus:string,

	/**对应生成图片的 券 内容（如："券"）。*/ 
	discountType:string,

	/**对应生成图片的 券减价格 内容（如："100元"）。*/ 
	discountPrice:string,

	/**对应生成图片的 券后价 内容（如："券后价" "抢购价"等）。*/ 
	finalPriceType:string,

	/**对应生成图片的 券后价价格前面的￥ 内容(如："￥")。（如不需要可以设空""）*/ 
	moneyUnit:string,

	/**对应生成图片的 券后价价格 内容(如："100.0")。*/ 
	finalPrice:string,

	/**传入的商品信息内容是否是Html格式内容（如：nowPriceStatus 传："现价 ：```xml <font color='#FF0000'>￥200</font>" ```）。*/ 
	isHtmlText:boolean,

}

interface makeSharePic_openErWeiMa_Params {
	/**（可选项）二维码视图的位置。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed?:boolean,

	/**要生成的二维码内容*/ 
	qrCode:string,

	/**（可选项）二维码的纠错等级 **仅Android有效***/ 
	erWeiMaErrorL?:string,

	/**（可选项）Android中为创建二维码时的宽度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到rect区域） **仅Android有效***/ 
	erWeiMaWidth?:number,

	/**（可选项）创建二维码时的高度。（注意：该参数是创建二维码时设置的初始参数，最终的视图会填充到rect区域） **仅Android有效***/ 
	erWeiMaHeight?:number,

	/**（可选项）二维码视图的背景颜色,支持“#+6位数的十六进制”的颜色设置（如："#ff0000"）。*/ 
	bgColor?:string,

}

interface makeSharePic_createErweimaPic_Params {
	/**（可选项）二维码图片的宽度。*/ 
	width?:number,

	/**（可选项）二维码图片的高度。*/ 
	height?:number,

	/**（可选项）生成图片的边框宽度 （注意ios中二维码自带4个像素的边框）。*/ 
	margin?:number,

	/**（可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。*/ 
	savePath?:string,

	/**（可选项）最终生成图片的文件名，如：toShare.png。*/ 
	fileName?:string,

	/**要生成的二维码内容*/ 
	qrCode:string,

	/**（可选项）二维码的纠错等级 **仅Android有效***/ 
	erWeiMaErrorL?:string,

	/**（可选项）生成图片的背景颜色,支持“#+6位数的十六进制”的颜色设置（如："#ff0000"）。*/ 
	bgColor?:string,

}

interface makeSharePic_composePic_Params {
	/**合成图片所需的两张图片中作为**底层**图片的地址。支持本地路径和网络url,如：fs://...、cache://...、https://...*/ 
	bgPicUrl:string,

	/**合成图片所需的两张图片中作为**上层**图片的地址。支持本地路径和网络url,如：fs://...、cache://...、https://...*/ 
	attachPicUrl:string,

	/**是否把生成的图片插入到本地相册*/ 
	insertImage:boolean,

	/**（可选项）合成图片的最终宽度。*/ 
	mainWidth?:number,

	/**（可选项）合成图片的最终高度。*/ 
	mainHeight?:number,

	/**上层图片相对于合成图片的 左边距（用于定位上层图片left位置）。*/ 
	l:number,

	/**上层图片相对于合成图片的 上边距（用于定位上层图片位置）。*/ 
	t:number,

	/**（需传大于0的值！）上层图片在最终合成图片中的 宽度（用于定位上层图片位置）。*/ 
	subWidth:number,

	/**上层图片在最终合成图片中的 高度（用于定位上层图片位置）。*/ 
	subHeight:number,

	/**（可选项）最终生成图片的本地保存路径，如：cache://image、fs://image等。*/ 
	savePath?:string,

	/**（可选项）最终生成图片的文件名，如：toShare.png。*/ 
	fileName?:string,

}

interface tvcontrol {
	/**
	 * `开启电视遥控器等按键监听`
	 * ========params==========
	 *
	 * `coverBack` :boolean : （可选项）是否覆盖返回键，填true时，点击返回键将没有效果，自行在回调函数中处理。默认false时，不覆盖，也就是说回调函数返回“返回键”的keyCode值时，原先返回事件依然有效。
	 *
	 * `coverHome` :boolean : （可选项）是否覆盖主页键，填true时，点主页键将没有效果，自行在回调函数中处理。
	 *
	 * `canClick` :boolean : （可选项）页面是否可以点击。填true时，点击一下屏幕后，监听事件结束，然后，就可以点击页面按钮了。**（这个函数只是为了方便大家在手机上调试时使用，因为手机没有遥控器上下左右和确定键，只有通过屏幕点击到下一页。去电视上测试时，可以忽略这个。）**
	 *
	 * `coverOtherDefault` :boolean : （可选项）是否覆盖其他键（除了“返回键”和“主页键”以外的键，**要想增加按键是否覆盖，后期可以联系开发者添加**），填true时，点击遥控器其他键盘将没有效果，自行在回调函数中处理。
	 */
	open(params:tvcontrol_open_Params, callback?: (ret:JSON) => void):void

}
interface tvcontrol_open_Params {
	/**（可选项）是否覆盖返回键，填true时，点击返回键将没有效果，自行在回调函数中处理。默认false时，不覆盖，也就是说回调函数返回“返回键”的keyCode值时，原先返回事件依然有效。*/ 
	coverBack?:boolean,

	/**（可选项）是否覆盖主页键，填true时，点主页键将没有效果，自行在回调函数中处理。*/ 
	coverHome?:boolean,

	/**（可选项）页面是否可以点击。填true时，点击一下屏幕后，监听事件结束，然后，就可以点击页面按钮了。**（这个函数只是为了方便大家在手机上调试时使用，因为手机没有遥控器上下左右和确定键，只有通过屏幕点击到下一页。去电视上测试时，可以忽略这个。）***/ 
	canClick?:boolean,

	/**（可选项）是否覆盖其他键（除了“返回键”和“主页键”以外的键，**要想增加按键是否覆盖，后期可以联系开发者添加**），填true时，点击遥控器其他键盘将没有效果，自行在回调函数中处理。*/ 
	coverOtherDefault?:boolean,

}

interface miniAudio {
	/** 播放音效，只支持wav格式音效。*/ 
	play(callback?: (ret:JSON) => void):void

}
interface ARRuler {
	/** 判断当前设备是否支持 AR 尺子*/ 
	isSupported():void

	/**
	 * `监听尺子各种事件`
	 * ========params==========
	 *
	 * `target` :string : 监听的事件名
	 */
	addEventListener(params:ARRuler_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开摄像头`
	 * ========params==========
	 *
	 * `lineColor` :string : 测量线颜色，支持rgb、rgba、#
	 *
	 * `textColor` :string : 测量长度文本颜色，支持rgb、rgba、#
	 *
	 * `centrum` :JSON : 锚钉样式配置
	 *
	 * `crossMark` :JSON : 摄像头捕捉的画面正中间的准星样式配置
	 */
	open(params:ARRuler_open_Params, callback?: (ret:JSON) => void):void

	/** 在当前位置（准星所在的位置，画面的正中间）添加铆钉*/ 
	addAnchor(callback?: (ret:JSON) => void):void

	/** 清除铆钉及测量线*/ 
	clean():void

	/** 关闭*/ 
	close():void

	/** 隐藏*/ 
	hide():void

	/** 显示*/ 
	show():void

}
interface ARRuler_addEventListener_Params {
	/**监听的事件名*/ 
	target:string,

}

interface ARRuler_open_Params {
	/**测量线颜色，支持rgb、rgba、#*/ 
	lineColor:string,

	/**测量长度文本颜色，支持rgb、rgba、#*/ 
	textColor:string,

	/**锚钉样式配置*/ 
	centrum:JSON,

	/**摄像头捕捉的画面正中间的准星样式配置*/ 
	crossMark:JSON,

}

interface patternLock {
}
interface soundPlayer {
	/**
	 * `开始播放音效。`
	 * ========params==========
	 *
	 * `paths` :JSON : 音效文件的路径json集合，以路径作为key，每个key对应一段属性，可以同时播放多个路径文件，支持本地路径(fs://, widget://)
	 *
	 * `alert` :boolean : （可选项）播放音效时手机是否震动，暂仅支持iOS平台
	 */
	playSound(params:soundPlayer_playSound_Params):void

	/**
	 * `停止播放音效。`
	 * ========params==========
	 *
	 * `paths` :Array : 音效文件路径,支持本地路径（fs://, widget://)
	 */
	stopSound(params:soundPlayer_stopSound_Params):void

	/**
	 * `开始播放音效。`
	 * ========params==========
	 *
	 * `paths` :Array : 音效文件的路径json集合，可以同时播放多个路径文件，支持本地路径(fs://, widget://)
	 *
	 * `alert` :boolean : （可选项）播放音效时手机是否震动，暂仅支持iOS平台
	 */
	play(params:soundPlayer_play_Params):void

}
interface soundPlayer_playSound_Params {
	/**音效文件的路径json集合，以路径作为key，每个key对应一段属性，可以同时播放多个路径文件，支持本地路径(fs://, widget://)*/ 
	paths:JSON,

	/**（可选项）播放音效时手机是否震动，暂仅支持iOS平台*/ 
	alert?:boolean,

}

interface soundPlayer_stopSound_Params {
	/**音效文件路径,支持本地路径（fs://, widget://)*/ 
	paths:Array,

}

interface soundPlayer_play_Params {
	/**音效文件的路径json集合，可以同时播放多个路径文件，支持本地路径(fs://, widget://)*/ 
	paths:Array,

	/**（可选项）播放音效时手机是否震动，暂仅支持iOS平台*/ 
	alert?:boolean,

}

interface netSpeed {
	/**
	 * `获取实时网速`
	 * ========params==========
	 *
	 * `fresh` :number : （可选项）设置获取网速的时间间隔
	 */
	getnetSpeed(params:netSpeed_getnetSpeed_Params, callback?: (ret:JSON) => void):void

	/** 销毁实时网速,当应用不需要再获取网速时，需调用次方法释放内存，防止内存溢出。*/ 
	destroy():void

}
interface netSpeed_getnetSpeed_Params {
	/**（可选项）设置获取网速的时间间隔*/ 
	fresh?:number,

}

interface easyShareImages {
	/**
	 * `分享多图`
	 * ========params==========
	 *
	 * `type` :number : 分享类型：0/1/2   0本地sdcard文件路径； 1网络url； 2 base64（ps：请严格按照参数传参，否则容易出错）
	 *
	 * `title` :string : 分享的文字内容
	 *
	 * `list` :Array : 分享的图片地址或者base64数组，例如：网络地址['https://www.baidu.com/img/bd_logo1.png?where=super',	'https://www.baidu.com/img/bd_logo1.png?where=super']； android本地sdcard地址['/sdcard/1.png','/sdcard/2.png'];base64字符串由于太长，不再举例。
	 */
	sharePics(params:easyShareImages_sharePics_Params):void

}
interface easyShareImages_sharePics_Params {
	/**分享类型：0/1/2   0本地sdcard文件路径； 1网络url； 2 base64（ps：请严格按照参数传参，否则容易出错）*/ 
	type:number,

	/**分享的文字内容*/ 
	title:string,

	/**分享的图片地址或者base64数组，例如：网络地址['https://www.baidu.com/img/bd_logo1.png?where=super',	'https://www.baidu.com/img/bd_logo1.png?where=super']； android本地sdcard地址['/sdcard/1.png','/sdcard/2.png'];base64字符串由于太长，不再举例。*/ 
	list:Array,

}

interface fileScan {
	/**     打开文件扫描器*/ 
	openFileScan():void

}
interface videoMerge {
	/**
	 * `合并视频`
	 * ========params==========
	 *
	 * `videos` :Array : 合并的视频的地址组成的数组，要求本地路径（fs://、widget://。android端不支持widget://）
	 *
	 * `export` :JSON : （可选项）输出视频的配置
	 *
	 * `quality` :string : （可选项）录像视频质量（android不支持）
	 */
	merge(params:videoMerge_merge_Params, callback?: (ret:JSON) => void):void

	/** 清除本模块产生的视频文件，本接口仅当 merge -> export -> path 参数不传或传空时有效，**本接口只清除本模块产生的临时数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface videoMerge_merge_Params {
	/**合并的视频的地址组成的数组，要求本地路径（fs://、widget://。android端不支持widget://）*/ 
	videos:Array,

	/**（可选项）输出视频的配置*/ 
	export?:JSON,

	/**（可选项）录像视频质量（android不支持）*/ 
	quality?:string,

}

interface svideo {
	/** 启动svideo模块,打开摄像头，等待用户录制。*/ 
	start(callback?: (ret:JSON) => void):void

}
interface bookReader {
	/**
	 * `打开阅读器`
	 * ========params==========
	 *
	 * `x` :number : （可选项）模块视图左上角点的坐标
	 *
	 * `y` :number : （可选项）模块视图左上角点的坐标
	 *
	 * `w` :number : （可选项）模块视图的宽
	 *
	 * `h` :number : （可选项）模块视图的高
	 *
	 * `bg` :string : （可选项）阅读器的背景色，支持 rgb，rgba，img，#
	 *
	 * `animType` :string : 翻页动画效果，可为空。（保留使用）
	 *
	 * `progress` :number : （可选项）阅读器打开时的进度的百分比，取值范围 0-100
	 *
	 * `textStyle` :JSON : （可选项）阅读文本字体样式设置
	 *
	 * `filePath` :string : 阅读器数据源文件地址，支持 widget 等本地路径协议，必传
	 *
	 * `codingType` :string : （可选项）所要阅读的文本的编码格式，取值范围:gbk、utf8
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 */
	open(params:bookReader_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置阅读器的参数`
	 * ========params==========
	 *
	 * `bg` :string : （可选项）阅读器的背景色，支持 rgb，rgba，img，#
	 *
	 * `animType` :string : 翻页动画效果，可为空。（保留使用）
	 *
	 * `progress` :number : （可选项）阅读器打开时的进度百分比，取值范围 0-100
	 *
	 * `textStyle` :JSON : （可选项）阅读文本字体样式设置
	 *
	 * `filePath` :string : （可选项）阅读器数据源文件地址，支持 widget 等本地路径协议
	 */
	setValue(params:bookReader_setValue_Params, callback?: (ret:JSON) => void):void

	/** 获取屏幕亮度，iOS 平台上获取的是系统屏幕亮度，Android 平台上获取的是本 APP 内的屏幕亮度*/ 
	getBrightness(callback?: (ret:JSON) => void):void

}
interface bookReader_open_Params {
	/**（可选项）模块视图左上角点的坐标*/ 
	x?:number,

	/**（可选项）模块视图左上角点的坐标*/ 
	y?:number,

	/**（可选项）模块视图的宽*/ 
	w?:number,

	/**（可选项）模块视图的高*/ 
	h?:number,

	/**（可选项）阅读器的背景色，支持 rgb，rgba，img，#*/ 
	bg?:string,

	/**翻页动画效果，可为空。（保留使用）*/ 
	animType:string,

	/**（可选项）阅读器打开时的进度的百分比，取值范围 0-100*/ 
	progress?:number,

	/**（可选项）阅读文本字体样式设置*/ 
	textStyle?:JSON,

	/**阅读器数据源文件地址，支持 widget 等本地路径协议，必传*/ 
	filePath:string,

	/**（可选项）所要阅读的文本的编码格式，取值范围:gbk、utf8*/ 
	codingType?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

}

interface bookReader_setValue_Params {
	/**（可选项）阅读器的背景色，支持 rgb，rgba，img，#*/ 
	bg?:string,

	/**翻页动画效果，可为空。（保留使用）*/ 
	animType:string,

	/**（可选项）阅读器打开时的进度百分比，取值范围 0-100*/ 
	progress?:number,

	/**（可选项）阅读文本字体样式设置*/ 
	textStyle?:JSON,

	/**（可选项）阅读器数据源文件地址，支持 widget 等本地路径协议*/ 
	filePath?:string,

}

interface softInputMgr {
	/** 弹入和弹出键盘*/ 
	toggleKeyboard():void

}
interface screenLock {
}
interface videoScreenshots {
	/**
	 * `视频截图`
	 * ========params==========
	 *
	 * `videoUrl` :string : 视频地址，支持本地(widget://和fs://)和网络视频
	 *
	 * `time` :number : 指定位置(单位为秒)
	 *
	 * `isRotation` :boolean : （可选项）是否顺时针90°旋转
	 *
	 * `isAblum` :boolean : （可选项）是否保存相册
	 *
	 * `name` :string : （必选项）图片名
	 */
	screenshots(params:videoScreenshots_screenshots_Params, callback?: (ret:JSON) => void):void

	/** 当 screenshots 接口内 未传 path 值，则模块会将转换后的 图片保存在缓存目录。调用本接口，可清除本模块产生的所有图片。调用 api 对象下的 clearCache 接口会清除缓存目录下所有文件（不仅本模块产生的图片文件）。*/ 
	clearCache():void

}
interface videoScreenshots_screenshots_Params {
	/**视频地址，支持本地(widget://和fs://)和网络视频*/ 
	videoUrl:string,

	/**指定位置(单位为秒)*/ 
	time:number,

	/**（可选项）是否顺时针90°旋转*/ 
	isRotation?:boolean,

	/**（可选项）是否保存相册*/ 
	isAblum?:boolean,

	/**（必选项）图片名*/ 
	name:string,

}

interface judgeNotification {
	/** 打开对应设置页面*/ 
	judge():void

}
interface replay {
	/** 开始录屏（ios用户按下home键退出APP再次进入后录屏会停止并保存录屏文件到相册根目录）*/ 
	start():void

	/**
	 * `停止录屏（调用本接口停止录屏视频文件会存入相册中）`
	 * ========params==========
	 *
	 * `folderName` :any : 视频存入相册文件夹名称，创建失败视频将存入相册根路径
	 */
	stopAlbum(params:replay_stopAlbum_Params, callback?: (ret:JSON) => void):void

	/** 停止录屏（ios调用本接口停止录屏视频文件会存入沙盒并返回文件路径）*/ 
	stopShahe():void

	/** 开始录屏（调用iOS ReplayKi SDK，录屏结束后会弹出回放的预览页面，在预览中可以选择保存视频到相册中、放弃、或者分享出去，不能保存在沙盒路径中，当APP推入后台时录屏将暂停，再次进入APP后录屏恢复。注意本接口在iPhone设备上仅支持 iOS9.0 及以上版本。）*/ 
	startReplayKit():void

	/** 停止录屏（调用iOS ReplayKi Sdk，注意本接口在iPhone设备上仅支持 iOS9.0 及以上版本。）*/ 
	stopReplayKit():void

	/** 清除沙盒下路径所有视频资源,android清除录制默认路径下所有视频资源*/ 
	clearPath():void

}
interface replay_stopAlbum_Params {
	/**视频存入相册文件夹名称，创建失败视频将存入相册根路径*/ 
	folderName:any,

}

interface m3u8Downloader {
	/**
	 * `启动下载服务。`
	 * ========params==========
	 *
	 * `root` :string : （可选项）保存文件的根目录，默认为m3u8_downloader，都是在sd卡的根路径之下。
	 */
	startService(params:m3u8Downloader_startService_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询下载进度。`
	 * ========params==========
	 *
	 * `url` :string : （必填）下载m3u8的url。
	 */
	getProgress(params:m3u8Downloader_getProgress_Params, callback?: (ret:JSON) => void):void

}
interface m3u8Downloader_startService_Params {
	/**（可选项）保存文件的根目录，默认为m3u8_downloader，都是在sd卡的根路径之下。*/ 
	root?:string,

}

interface m3u8Downloader_getProgress_Params {
	/**（必填）下载m3u8的url。*/ 
	url:string,

}

interface audioStreamer {
	/**
	 * `打开音频播放器，并播放。`
	 * ========params==========
	 *
	 * `path` :string : 音频资源地址，支持本地和网络路径（fs://、widget://、http://、https:// 等）
	 */
	openPlayer(params:audioStreamer_openPlayer_Params, callback?: (ret:JSON) => void):void

	/** 暂停播放 ，如果想恢复播放可调用openPlayer继续播放(仅支持安卓这样调用)*/ 
	pause():void

	/** 恢复播放，仅支持iOS*/ 
	resume():void

	/** 停止播放*/ 
	stop():void

	/**
	 * `设置播放位置`
	 * ========params==========
	 *
	 * `time` :number : （可选项）播放位置，取值范围大于 0 不超过当前播放音频的总时长，单位为秒（s）
	 */
	seekToTime(params:audioStreamer_seekToTime_Params):void

	/**
	 * `设置是否循环播放`
	 * ========params==========
	 *
	 * `loop` :boolean : 设置是否循环播放
	 */
	setLoop(params:audioStreamer_setLoop_Params):void

	/** 获取当前播放的位置*/ 
	getCurrentTime():void

	/** 获取已缓冲的音频文件占音频文件的百分比*/ 
	getBufferingRatio():void

	/** 播放状态监听*/ 
	addEventListener():void

	/** 监听实时播放进度*/ 
	addProgressListener():void

	/** 移除实时播放进度*/ 
	removeProgressListener():void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小（0-1）
	 */
	setVolume(params:audioStreamer_setVolume_Params):void

	/** 获取音量*/ 
	getVolume():void

}
interface audioStreamer_openPlayer_Params {
	/**音频资源地址，支持本地和网络路径（fs://、widget://、http://、https:// 等）*/ 
	path:string,

}

interface audioStreamer_seekToTime_Params {
	/**（可选项）播放位置，取值范围大于 0 不超过当前播放音频的总时长，单位为秒（s）*/ 
	time?:number,

}

interface audioStreamer_setLoop_Params {
	/**设置是否循环播放*/ 
	loop:boolean,

}

interface audioStreamer_setVolume_Params {
	/**（可选项）音量大小（0-1）*/ 
	volume?:number,

}

interface sysPrint {
	/** 跳转系统打印设置页面*/ 
	toSystemPrintPage(callback?: (ret:JSON) => void):void

	/** 打印pdf*/ 
	printPdf(callback?: (ret:JSON) => void):void

	/** 打印图片*/ 
	printImg(callback?: (ret:JSON) => void):void

	/** 判断是否又打印服务*/ 
	hasPrintService(callback?: (ret:JSON) => void):void

}
interface photoBrowser {
	/**
	 * `打开图片浏览器`
	 * ========params==========
	 *
	 * `images` :Array : 要读取的图片路径组成的数组，图片路径支持 fs://、http:// 协议、base64
	 *
	 * `activeIndex` :number : （可选项）当前要显示的图片在图片路径数组中的索引
	 *
	 * `placeholderImg` :string : （可选项）当加载网络图片时显示的占位图路径，要求本地图片路径（widget://、fs://）
	 *
	 * `bgColor` :string : （可选项）图片浏览器背景色，支持 rgb、rgba、#
	 *
	 * `zoomEnabled` :boolean : （可选项）是否打开缩放手势识别功能（随手势放大缩小图片）
	 *
	 * `mode` :number : （可选项）图片的现实模式；1：为图片原本大小 2：图片宽度等比例放大到宽等于屏幕款;android不支持此参数
	 *
	 * `atime` :number : （可选项）打开动画的执行时间，传0无动画
	 */
	open(params:photoBrowser_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭图片浏览器*/ 
	close():void

	/** 隐藏图片浏览器*/ 
	hide():void

	/** 显示图片浏览器*/ 
	show():void

	/**
	 * `设置当前显示图片`
	 * ========params==========
	 *
	 * `index` :number : （可选项）当前要显示的图片在图片路径数组中的索引
	 */
	setIndex(params:photoBrowser_setIndex_Params):void

	/** 获取当前图片在图片路径数组内的索引*/ 
	getIndex():void

	/**
	 * `获取指定图片在本地的绝对路径`
	 * ========params==========
	 *
	 * `index` :number : 指定图片在图片数组中的索引
	 */
	getImage(params:photoBrowser_getImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置指定位置的图片，**若设置的是网络图片加载成功或失败会给 open 接口回调该加载事件**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）指定图片在图片数组中的索引
	 *
	 * `image` :string : 要设置的图片路径，支持本地和网络路径（fs://、http://）
	 */
	setImage(params:photoBrowser_setImage_Params):void

	/**
	 * `往已打开的图片浏览器里添加图片（拼接在最后）`
	 * ========params==========
	 *
	 * `images` :Array : 要拼接的图片路径组成的数组，图片路径支持 fs://、http:// 协议
	 */
	appendImage(params:photoBrowser_appendImage_Params):void

	/**
	 * `删除指定位置的图片`
	 * ========params==========
	 *
	 * `index` :number : （可选项）删除的指定图片在图片数组中的索引
	 */
	deleteImage(params:photoBrowser_deleteImage_Params):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface photoBrowser_open_Params {
	/**要读取的图片路径组成的数组，图片路径支持 fs://、http:// 协议、base64*/ 
	images:Array,

	/**（可选项）当前要显示的图片在图片路径数组中的索引*/ 
	activeIndex?:number,

	/**（可选项）当加载网络图片时显示的占位图路径，要求本地图片路径（widget://、fs://）*/ 
	placeholderImg?:string,

	/**（可选项）图片浏览器背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）是否打开缩放手势识别功能（随手势放大缩小图片）*/ 
	zoomEnabled?:boolean,

	/**（可选项）图片的现实模式；1：为图片原本大小 2：图片宽度等比例放大到宽等于屏幕款;android不支持此参数*/ 
	mode?:number,

	/**（可选项）打开动画的执行时间，传0无动画*/ 
	atime?:number,

}

interface photoBrowser_setIndex_Params {
	/**（可选项）当前要显示的图片在图片路径数组中的索引*/ 
	index?:number,

}

interface photoBrowser_getImage_Params {
	/**指定图片在图片数组中的索引*/ 
	index:number,

}

interface photoBrowser_setImage_Params {
	/**（可选项）指定图片在图片数组中的索引*/ 
	index?:number,

	/**要设置的图片路径，支持本地和网络路径（fs://、http://）*/ 
	image:string,

}

interface photoBrowser_appendImage_Params {
	/**要拼接的图片路径组成的数组，图片路径支持 fs://、http:// 协议*/ 
	images:Array,

}

interface photoBrowser_deleteImage_Params {
	/**（可选项）删除的指定图片在图片数组中的索引*/ 
	index?:number,

}

interface mySqlUtils {
	/** 连接数据库*/ 
	connect(callback?: (ret:JSON) => void):void

	/** 判断数据库是否连接，**本接口仅支持 iOS 端。***/ 
	isConnected(callback?: (ret:JSON) => void):void

	/** 在 iOS 端执行一段 SQL 语句（select除外），**仅支持 iOS 平台***/ 
	executeSQLString(callback?: (ret:JSON) => void):void

	/** 增加删除操作*/ 
	addOrDel(callback?: (ret:JSON) => void):void

	/** 修改数据库数据*/ 
	update(callback?: (ret:JSON) => void):void

}
interface batteryManager {
	/** 获取当前电池的充电状态*/ 
	getBatteryStatus():void

	/** 电池健康信息*/ 
	getBatteryHealthInfo():void

	/** 是否取出电池（注意：有些手机即使取出电池，只需要连接USB也可以工作，iOS 可以忽略该方法）*/ 
	isBatteryPresent():void

	/** 获取当前电池剩余电量*/ 
	getBatteryLevel():void

	/** 获取当前电池剩余电量*/ 
	getBatteryScale():void

	/** 获取当前电池的充电插线类型*/ 
	getBatteryPluggedType():void

	/** 获取当前电池的电压*/ 
	getBatteryVoltage():void

	/** 获取当前电池的电压*/ 
	getBatteryTemperature():void

	/** 电池技术*/ 
	getBatteryTechnology():void

}
interface myWebSocket {
	/**
	 * `打开连接<br>`
	 * ========params==========
	 *
	 * `url` :string : 服务端地址
	 *
	 * `pingInterval` :any : （可选项）心跳间隔，单位秒，设置大于0时起效果
	 *
	 * `pingData` :string : （可选项）心跳数据，配合pingInterval 使用
	 *
	 * `msg` :string : 发送内容
	 */
	open(params:myWebSocket_open_Params, callback?: (ret:JSON) => void):void

}
interface myWebSocket_open_Params {
	/**服务端地址*/ 
	url:string,

	/**（可选项）心跳间隔，单位秒，设置大于0时起效果*/ 
	pingInterval?:any,

	/**（可选项）心跳数据，配合pingInterval 使用*/ 
	pingData?:string,

	/**发送内容*/ 
	msg:string,

}

interface imageEdit {
	/**
	 * `添加图片`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）图片的位置及尺寸
	 *
	 * `bgColor` :string : 模块的背景颜色，支持rgb、rgba
	 *
	 * `path` :string : 要编辑的图片的路径，要求本地路径（fs://、widget://）
	 *
	 * `contentMode` :string : （可选项）图片填充模式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:imageEdit_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置画笔，用户点击某个形状（矩形框、圆形框、文本和箭头，不包括线条）时，模块会自动动态调整这个形状的边框颜色、边框粗细(如果是文字，就是文字颜色和文字字体大小)为当前画笔的样式。`
	 * ========params==========
	 *
	 * `color` :string : (可选项)画笔颜色，支持rgb、rgba、#
	 *
	 * `width` :number : (可选项)画笔粗细
	 *
	 * `type` :string : (可选项)画笔类型
	 *
	 * `size` :number : (可选项)文字的大小，仅当 type 为 text 的时候有效
	 */
	setBrush(params:imageEdit_setBrush_Params):void

	/**
	 * `添加监听事件`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件名字
	 */
	addEventListener(params:imageEdit_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `保存编辑后的图片`
	 * ========params==========
	 *
	 * `path` :string : （可选项）保存图片路径，要求本地路径（fs://），注意图片后缀名输入完整。若不传或传空，则模块默认将图片保存到临时数据文件夹下
	 *
	 * `copyToAlbum` :boolean : （可选项）是否将结果同时保存到系统相册
	 */
	save(params:imageEdit_save_Params, callback?: (ret:JSON) => void):void

	/** 清除本模块产生的图片文件，本接口仅当 save -> path 参数不传或传空时有效，**本接口只清除本模块产生的临时数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

	/**
	 * `重新设置模块位置、尺寸`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 */
	resetRect(params:imageEdit_resetRect_Params):void

}
interface imageEdit_open_Params {
	/**（可选项）图片的位置及尺寸*/ 
	rect?:JSON,

	/**模块的背景颜色，支持rgb、rgba*/ 
	bgColor:string,

	/**要编辑的图片的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**（可选项）图片填充模式*/ 
	contentMode?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface imageEdit_setBrush_Params {
	/**(可选项)画笔颜色，支持rgb、rgba、#*/ 
	color?:string,

	/**(可选项)画笔粗细*/ 
	width?:number,

	/**(可选项)画笔类型*/ 
	type?:string,

	/**(可选项)文字的大小，仅当 type 为 text 的时候有效*/ 
	size?:number,

}

interface imageEdit_addEventListener_Params {
	/**监听的事件名字*/ 
	name:string,

}

interface imageEdit_save_Params {
	/**（可选项）保存图片路径，要求本地路径（fs://），注意图片后缀名输入完整。若不传或传空，则模块默认将图片保存到临时数据文件夹下*/ 
	path?:string,

	/**（可选项）是否将结果同时保存到系统相册*/ 
	copyToAlbum?:boolean,

}

interface imageEdit_resetRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

}

interface screenClip {
	/**
	 * `打开截图功能`
	 * ========params==========
	 *
	 * `bg` :string : （可选项）背景颜色设置，支持#，rgb，rgba
	 *
	 * `cutFrame` :JSON : （可选项）截取框配置
	 *
	 * `save` :JSON : 所生成的图片保存位置
	 */
	open(params:screenClip_open_Params, callback?: (ret:JSON) => void):void

}
interface screenClip_open_Params {
	/**（可选项）背景颜色设置，支持#，rgb，rgba*/ 
	bg?:string,

	/**（可选项）截取框配置*/ 
	cutFrame?:JSON,

	/**所生成的图片保存位置*/ 
	save:JSON,

}

interface sortList {
	/**
	 * `打开索引列表`
	 * ========params==========
	 *
	 * `rect` :JSON : 索引器的frame
	 *
	 * `height` :number : 每个字母显示的高度（仅iOS支持）
	 *
	 * `bgColor` :string : 索引器背景颜色
	 *
	 * `dataArray` :Array : 数据源,名单列表
	 *
	 * `style` :JSON : null
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）（仅android支持）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动（仅android支持）
	 */
	open(params:sortList_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭索引列表*/ 
	close():void

	/** 隐藏索引列表*/ 
	hide():void

	/** 显示索引列表*/ 
	show():void

	/**
	 * `更新索引列表`
	 * ========params==========
	 *
	 * `dataArray` :Array : 数据源,名单列表
	 */
	upLoad(params:sortList_upLoad_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加数据`
	 * ========params==========
	 *
	 * `dataArray` :Array : 数据源,名单列表
	 */
	addSource(params:sortList_addSource_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除数据（仅iOS支持）`
	 * ========params==========
	 *
	 * `dataArray` :Array : 数据源,名单列表
	 */
	reduceSource(params:sortList_reduceSource_Params, callback?: (ret:JSON) => void):void

}
interface sortList_open_Params {
	/**索引器的frame*/ 
	rect:JSON,

	/**每个字母显示的高度（仅iOS支持）*/ 
	height:number,

	/**索引器背景颜色*/ 
	bgColor:string,

	/**数据源,名单列表*/ 
	dataArray:Array,

	/**null*/ 
	style:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）（仅android支持）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动（仅android支持）*/ 
	fixed?:boolean,

}

interface sortList_upLoad_Params {
	/**数据源,名单列表*/ 
	dataArray:Array,

}

interface sortList_addSource_Params {
	/**数据源,名单列表*/ 
	dataArray:Array,

}

interface sortList_reduceSource_Params {
	/**数据源,名单列表*/ 
	dataArray:Array,

}

interface iNoRobot {
}
interface sapSso {
	/** 获取token*/ 
	getToken():void

	/** 跳转到 sap 平台的 APP，仅支持 iOS 端。*/ 
	openSap():void

}
interface imageOptim {
	/**
	 * `压缩图片`
	 * ========params==========
	 *
	 * `imgPath` :string : （必填）原图片的路径,支持绝对路径和UZ路径
	 *
	 * `quality` :any : （必填）图片质量
	 *
	 * `width` :any : 设置图片的宽度,如果仅设宽度，模块将固定宽度,将高度自动进行等比例设置
	 *
	 * `height` :any : 设置图片的高度,如果仅设高度，模块将固定搞定将宽度自动进行等比例设置
	 *
	 * `destinationPath` :string : (选填)输出路径，支持绝对路径和UZ路径
	 */
	compress(params:imageOptim_compress_Params, callback?: (ret:JSON) => void):void

}
interface imageOptim_compress_Params {
	/**（必填）原图片的路径,支持绝对路径和UZ路径*/ 
	imgPath:string,

	/**（必填）图片质量*/ 
	quality:any,

	/**设置图片的宽度,如果仅设宽度，模块将固定宽度,将高度自动进行等比例设置*/ 
	width:any,

	/**设置图片的高度,如果仅设高度，模块将固定搞定将宽度自动进行等比例设置*/ 
	height:any,

	/**(选填)输出路径，支持绝对路径和UZ路径*/ 
	destinationPath:string,

}

interface audioCombine {
	/**
	 * `音频合并`
	 * ========params==========
	 *
	 * `wayPath` :string : （可选项）音频路径1;支持本地和网络路径（fs://、widget://、http://、https:// 等）
	 *
	 * `easyPath` :string : （可选项）音频路径2;支持本地和网络路径（fs://、widget://、http://、https:// 等）
	 */
	audioMerge(params:audioCombine_audioMerge_Params, callback?: (ret:JSON) => void):void

	/**
	 * `音频剪切`
	 * ========params==========
	 *
	 * `inputPath` :string : （可选项）需要剪切的音频路径;支持widget://,fs://
	 */
	audioClip(params:audioCombine_audioClip_Params, callback?: (ret:JSON) => void):void

}
interface audioCombine_audioMerge_Params {
	/**（可选项）音频路径1;支持本地和网络路径（fs://、widget://、http://、https:// 等）*/ 
	wayPath?:string,

	/**（可选项）音频路径2;支持本地和网络路径（fs://、widget://、http://、https:// 等）*/ 
	easyPath?:string,

}

interface audioCombine_audioClip_Params {
	/**（可选项）需要剪切的音频路径;支持widget://,fs://*/ 
	inputPath?:string,

}

interface touchDebugger {
}
interface Apple {
	/**
	 * `用苹果账号登录`
	 * ========params==========
	 *
	 * `requestedScopes` :Array : 范围，仅在第一次登录有效
	 */
	login(params:Apple_login_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取授权状态`
	 * ========params==========
	 *
	 * `user` :string : 用户ID
	 */
	getAuthticationState(params:Apple_getAuthticationState_Params, callback?: (ret:JSON) => void):void

	/** 监听用户从设置内删除该App的授权事件，注意：删除后无法再次授权该App*/ 
	observeAppleSignInState():void

}
interface Apple_login_Params {
	/**范围，仅在第一次登录有效*/ 
	requestedScopes:Array,

}

interface Apple_getAuthticationState_Params {
	/**用户ID*/ 
	user:string,

}

interface photoSelect {
}
interface pdfViewer {
	/** 打开pdf文档视图*/ 
	openView():void

	/** 打开pdf文档缩略图*/ 
	preView():void

	/** 打开pdf文档目录结构视图（如果pdf文档没有做目录，则会返回来失败）*/ 
	category():void

	/** 清除缓存到本地的文件，本接口只清除本模块缓存的数据，若要清除本app缓存的所有数据这调用api.clearCache*/ 
	clearCache():void

	/** 显示文档视图*/ 
	showView():void

	/** 隐藏文档视图*/ 
	hideView():void

	/** 关闭文档视图*/ 
	closeView():void

}
interface imageColorParser {
	/**
	 * `异步解析.后台解析,性能最高.`
	 * ========params==========
	 *
	 * `img` :string : 图片路径.支持 widget:// , fs:// 等本地路径.支持png、jpg等图片.
	 *
	 * `size` :JSON : 图片尺寸.不需要与图片真实尺寸一致.用于控制图片缩放级别.越小,则解析性能越高;越大,则解析的颜色值更准确.
	 */
	parse(params:imageColorParser_parse_Params, callback?: (ret:JSON) => void):void

	/**
	 * `同步解析. 频繁调用或图片过大时,可能会引起 App 卡顿.`
	 * ========params==========
	 *
	 * `img` :string : 图片路径.支持 widget:// , fs:// 等本地路径.支持png、jpg等图片.
	 *
	 * `size` :JSON : 图片尺寸.不需要与图片真实尺寸一致.用于控制图片缩放级别.越小,则解析性能越高;越大,则解析的颜色值更准确.
	 */
	parseSync(params:imageColorParser_parseSync_Params):JSON;

}
interface imageColorParser_parse_Params {
	/**图片路径.支持 widget:// , fs:// 等本地路径.支持png、jpg等图片.*/ 
	img:string,

	/**图片尺寸.不需要与图片真实尺寸一致.用于控制图片缩放级别.越小,则解析性能越高;越大,则解析的颜色值更准确.*/ 
	size:JSON,

}

interface imageColorParser_parseSync_Params {
	/**图片路径.支持 widget:// , fs:// 等本地路径.支持png、jpg等图片.*/ 
	img:string,

	/**图片尺寸.不需要与图片真实尺寸一致.用于控制图片缩放级别.越小,则解析性能越高;越大,则解析的颜色值更准确.*/ 
	size:JSON,

}

interface soundDetection {
	/** 结束分贝检测*/ 
	stop():void

	/** 设置返回间隔*/ 
	setInterval(callback?: (ret:JSON) => void):void

}
interface uimusic {
	/**
	 * `播放本地视频、网络音乐`
	 * ========params==========
	 *
	 * `musics` :Array : （必填项）模块的位置及尺寸
	 *
	 * `ttf` :string : （可选项）字体文件(仅支持widget://路径)。
	 *
	 * `downmusicBtn` :boolean : （可选项）是否显示下载按钮。
	 *
	 * `fenxiangBtn` :boolean : （可选项）是否显示分享按钮。
	 *
	 * `pinglunBtn` :boolean : （可选项）是否显示评论按钮。
	 *
	 * `nameTextSize` :any : （可选项）歌曲名称字体大小。
	 *
	 * `singerTextSize` :any : （可选项）歌曲演唱者字体大小。
	 *
	 * `isShowUi` :boolean : （可选项）是否默认打开UI界面。
	 */
	playMusic(params:uimusic_playMusic_Params, callback?: (ret:JSON) => void):void

	/** 显示播放界面*/ 
	showUI(callback?: (ret:JSON) => void):void

	/** 隐藏播放界面*/ 
	closeUI(callback?: (ret:JSON) => void):void

	/**
	 * `音乐界面按钮监听`
	 * ========params==========
	 *
	 * `name` :string : （必填项）监听事件类型>>隐藏播放器界面:closeui 评论按钮:pinglun 分享按钮:fenxiang 下载按钮:downmusic
	 */
	addEventListener(params:uimusic_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 添加播放音乐*/ 
	addMusic():void

	/**
	 * `通过数组序号播放音乐`
	 * ========params==========
	 *
	 * `index` :number : （必填项）待播放音乐信息的序号(备注：other传值时为非必填项)
	 *
	 * `other` :any : （必填项）自定义属性值，可以是自己的主键id(备注：index传值时为非必填项)
	 */
	selectMusic(params:uimusic_selectMusic_Params, callback?: (ret:JSON) => void):void

	/** 获取当前正在播放的音乐*/ 
	getCurrentPlayer(callback?: (ret:JSON) => void):void

	/** 停止正在播放的音乐，重新播放需要重新初始化播放器,执行退出应用前请执行该接口*/ 
	stopMusic(callback?: (ret:JSON) => void):void

	/** 暂停或者继续播放音乐*/ 
	musicPlayPause(callback?: (ret:JSON) => void):void

	/** 切换上一曲播放*/ 
	musicPrevious(callback?: (ret:JSON) => void):void

	/** 切换下一曲播放*/ 
	musicNext(callback?: (ret:JSON) => void):void

}
interface uimusic_playMusic_Params {
	/**（必填项）模块的位置及尺寸*/ 
	musics:Array,

	/**（可选项）字体文件(仅支持widget://路径)。*/ 
	ttf?:string,

	/**（可选项）是否显示下载按钮。*/ 
	downmusicBtn?:boolean,

	/**（可选项）是否显示分享按钮。*/ 
	fenxiangBtn?:boolean,

	/**（可选项）是否显示评论按钮。*/ 
	pinglunBtn?:boolean,

	/**（可选项）歌曲名称字体大小。*/ 
	nameTextSize?:any,

	/**（可选项）歌曲演唱者字体大小。*/ 
	singerTextSize?:any,

	/**（可选项）是否默认打开UI界面。*/ 
	isShowUi?:boolean,

}

interface uimusic_addEventListener_Params {
	/**（必填项）监听事件类型>>隐藏播放器界面:closeui 评论按钮:pinglun 分享按钮:fenxiang 下载按钮:downmusic*/ 
	name:string,

}

interface uimusic_selectMusic_Params {
	/**（必填项）待播放音乐信息的序号(备注：other传值时为非必填项)*/ 
	index:number,

	/**（必填项）自定义属性值，可以是自己的主键id(备注：index传值时为非必填项)*/ 
	other:any,

}

interface audioPlayer {
	/**
	 * `初始化音频播放器，并播放。若是网络音频资源则同时开始缓冲音频文件到本地`
	 * ========params==========
	 *
	 * `path` :string : 音频资源地址，支持本地和网络路径（fs://、widget://、http://、ipod-library:// 等）
	 *
	 * `cache` :boolean : 是否支持缓存网络资源
	 */
	initPlayer(params:audioPlayer_initPlayer_Params, callback?: (ret:JSON) => void):void

	/** 播放音频，只有当前播放器为暂停、播放完成状态时有效*/ 
	play():void

	/** 暂停播放*/ 
	pause():void

	/** 停止播放*/ 
	stop():void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小（0-1）
	 *
	 * `system` :boolean : （可选项）是否设置系统音量，若为false表示设置播放器音量，仅支持iOS端
	 */
	setVolume(params:audioPlayer_setVolume_Params):void

	/**
	 * `获取音量`
	 * ========params==========
	 *
	 * `system` :boolean : （可选项）是否获取系统音量，若为false表示获取播放器音量，仅支持iOS端
	 */
	getVolume(params:audioPlayer_getVolume_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置播放位置`
	 * ========params==========
	 *
	 * `current` :number : （可选项）播放位置，取值范围大于 0 不超过当前播放音频的总时长，单位为秒（s）
	 */
	setCurrent(params:audioPlayer_setCurrent_Params):void

	/** 获取当前播放的位置*/ 
	getCurrent():void

	/** 获取当前播放器的状态*/ 
	getState():void

	/** 获取已缓冲的音频文件占音频文件的百分比*/ 
	getBufferRatio():void

	/**
	 * `监听事件`
	 * ========params==========
	 *
	 * `name` :string : （可选项）监听的事件类型
	 */
	addEventListener(params:audioPlayer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除指定事件的监听`
	 * ========params==========
	 *
	 * `name` :string : （可选项）要移除的监听事件类型
	 */
	removeEventListener(params:audioPlayer_removeEventListener_Params):void

	/** 清除缓存到本地的音频文件，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用api.clearCache***/ 
	clearCache():void

	/** 扫描本地音频资源，在 iOS 上仅扫描系统音乐库资源*/ 
	scanAudioLibrary():void

	/**
	 * `获取本地音频文件属性（文件大小和音频时长）`
	 * ========params==========
	 *
	 * `path` :string : 音频的路径 （仅支持 fs://）
	 */
	getAttr(params:audioPlayer_getAttr_Params, callback?: (ret:JSON) => void):void

}
interface audioPlayer_initPlayer_Params {
	/**音频资源地址，支持本地和网络路径（fs://、widget://、http://、ipod-library:// 等）*/ 
	path:string,

	/**是否支持缓存网络资源*/ 
	cache:boolean,

}

interface audioPlayer_setVolume_Params {
	/**（可选项）音量大小（0-1）*/ 
	volume?:number,

	/**（可选项）是否设置系统音量，若为false表示设置播放器音量，仅支持iOS端*/ 
	system?:boolean,

}

interface audioPlayer_getVolume_Params {
	/**（可选项）是否获取系统音量，若为false表示获取播放器音量，仅支持iOS端*/ 
	system?:boolean,

}

interface audioPlayer_setCurrent_Params {
	/**（可选项）播放位置，取值范围大于 0 不超过当前播放音频的总时长，单位为秒（s）*/ 
	current?:number,

}

interface audioPlayer_addEventListener_Params {
	/**（可选项）监听的事件类型*/ 
	name?:string,

}

interface audioPlayer_removeEventListener_Params {
	/**（可选项）要移除的监听事件类型*/ 
	name?:string,

}

interface audioPlayer_getAttr_Params {
	/**音频的路径 （仅支持 fs://）*/ 
	path:string,

}

interface richText {
	/**
	 * `打开富文本编辑器`
	 * ========params==========
	 *
	 * `title` :string : （可选项）顶部显示标题。
	 *
	 * `html` :string : （可选项）显示html内容。
	 *
	 * `placeholder` :string : （可选项）当打开本模块时，如果html为空需要默认显示的提示内容。
	 */
	openTextEditor(params:richText_openTextEditor_Params, callback?: (ret:JSON) => void):void

}
interface richText_openTextEditor_Params {
	/**（可选项）顶部显示标题。*/ 
	title?:string,

	/**（可选项）显示html内容。*/ 
	html?:string,

	/**（可选项）当打开本模块时，如果html为空需要默认显示的提示内容。*/ 
	placeholder?:string,

}

interface cardReader {
}
interface thumbnailUtil {
}
interface checkProxy {
	/** 是否用了代理(异步接口)*/ 
	isProxyUsed():void

	/** 是否用了VPN(异步接口)*/ 
	isVpnUsed():void

	/** 是否用了代理(同步接口)*/ 
	isProxyUsedSync():boolean;

	/** 是否用了VPN(同步接口)*/ 
	isVpnUsedSync():boolean;

}
interface playerCut {
	/**
	 * `打开视频地址`
	 * ========params==========
	 *
	 * `path` :string : 视频的路径，仅支持本地（fs://、widget://）路径
	 */
	open(params:playerCut_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `截取视频`
	 * ========params==========
	 *
	 * `cacheDir` :string : 保存地址；
	 *
	 * `startTime` :number : （选填项）截取视频的起始时间
	 *
	 * `endTime` :number : （选填项）截取视频的结束时间
	 */
	cutVideo(params:playerCut_cutVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取截取的视频的缩略图`
	 * ========params==========
	 *
	 * `number` :number : （选填项）获取缩略图个数
	 *
	 * `cacheDir` :string : 所有缩略图的保存地址的文件名；
	 */
	getVideoThumbnail(params:playerCut_getVideoThumbnail_Params, callback?: (ret:JSON) => void):void

	/** 获取本地要被截取的视频的总长度*/ 
	getVideoTime():void

}
interface playerCut_open_Params {
	/**视频的路径，仅支持本地（fs://、widget://）路径*/ 
	path:string,

}

interface playerCut_cutVideo_Params {
	/**保存地址；*/ 
	cacheDir:string,

	/**（选填项）截取视频的起始时间*/ 
	startTime:number,

	/**（选填项）截取视频的结束时间*/ 
	endTime:number,

}

interface playerCut_getVideoThumbnail_Params {
	/**（选填项）获取缩略图个数*/ 
	number:number,

	/**所有缩略图的保存地址的文件名；*/ 
	cacheDir:string,

}

interface editorText {
	/** 打开富文本页面*/ 
	open():void

	/** 关闭富文本页面*/ 
	close():void

	/** 添加文本内容*/ 
	addText():void

	/** 添加图片，支持gif图片*/ 
	addImage():void

	/**  清除文本内容*/ 
	remove():void

}
interface touping {
	/** 搜索当前局域网内支持投屏的设备*/ 
	browse():void

	/** 传入设备序号和视频地址开始投屏*/ 
	play():void

	/** 退出投屏*/ 
	stop():void

	/** 设置播放进度*/ 
	seek():void

	/** 设置音量*/ 
	volume():void

	/** 切换视频地址*/ 
	playUrl():void

}
interface videoCompression {
	/**
	 * `压缩本地视频文件`
	 * ========params==========
	 *
	 * `path` :string : 要压缩的视频文件路径，要求本地路径（fs://a/test.mp4、自定义sd卡路径）
	 *
	 * `quality` :string : （可选项）压缩视频质量，**注意：在android端要等比压缩，比如2160p为16:9 可以压缩为16:9的720p，不能压缩为4:3的480p**
	 */
	compression(params:videoCompression_compression_Params, callback?: (ret:JSON) => void):void

	/** 获取当前压缩视频的进度*/ 
	getProgress(callback?: (ret:JSON) => void):void

	/** 停止，取消视频压缩*/ 
	cancel():void

	/** 清除本地存放的压缩的视频文件，**本接口只清除本模块压缩视频文件，调用 api.clearCache接口也会清除压缩的视频文件***/ 
	clearCache():void

}
interface videoCompression_compression_Params {
	/**要压缩的视频文件路径，要求本地路径（fs://a/test.mp4、自定义sd卡路径）*/ 
	path:string,

	/**（可选项）压缩视频质量，**注意：在android端要等比压缩，比如2160p为16:9 可以压缩为16:9的720p，不能压缩为4:3的480p***/ 
	quality?:string,

}

interface mySQL {
	/** 连接MySQL数据库。*/ 
	connect(callback?: (ret:JSON) => void):void

	/** 是否连接。*/ 
	isConnected():void

	/** 执行SQL查询。*/ 
	query(callback?: (ret:JSON) => void):void

	/** 关闭连接。*/ 
	close():void

	/** 执行SQL更新。*/ 
	update(callback?: (ret:JSON) => void):void

}
interface shootPicture {
	/** 打开自定义的拍摄界面。*/ 
	shoot(callback?: (ret:JSON) => void):void

}
interface mosaic {
	/**
	 * `添加图片`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）图片的位置及尺寸
	 *
	 * `bgColor` :string : 模块的背景颜色，支持rgb、rgba
	 *
	 * `path` :boolean : （可选项）是否是整张图片被马赛克，不需要手指涂抹
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:mosaic_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `保存编辑后的图片`
	 * ========params==========
	 *
	 * `path` :string : （可选项）保存图片路径，要求本地路径（fs://），注意图片后缀名输入完整。若不传或传空，则模块默认将图片保存到临时数据文件夹下
	 *
	 * `copyToAlbum` :boolean : （可选项）是否将结果同时保存到系统相册
	 */
	save(params:mosaic_save_Params, callback?: (ret:JSON) => void):void

	/** 清除本模块产生的图片文件，本接口仅当 save -> path 参数不传或传空时有效，**本接口只清除本模块产生的临时数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface mosaic_open_Params {
	/**（可选项）图片的位置及尺寸*/ 
	rect?:JSON,

	/**模块的背景颜色，支持rgb、rgba*/ 
	bgColor:string,

	/**（可选项）是否是整张图片被马赛克，不需要手指涂抹*/ 
	path?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface mosaic_save_Params {
	/**（可选项）保存图片路径，要求本地路径（fs://），注意图片后缀名输入完整。若不传或传空，则模块默认将图片保存到临时数据文件夹下*/ 
	path?:string,

	/**（可选项）是否将结果同时保存到系统相册*/ 
	copyToAlbum?:boolean,

}

interface webSocket {
	/** websocket消息监听，可以监听连接，断开，接收消息等事件。*/ 
	addEventListener(callback?: (ret:JSON) => void):void

	/**
	 * `连接websocket`
	 * ========params==========
	 *
	 * `url` :string : （必填项）websocket的连接地址：如：ws://192.168.1.102:8887/socket。
	 *
	 * `pingInterval` :any : (可选项）心跳间隔，单位秒，设置大于0时起效果。
	 *
	 * `pingData` :string : （可选项）心跳数据，配合pingInterval 使用。
	 *
	 * `isBtyes` :boolean : （可选项）是否用流的方式发送数据。
	 */
	open(params:webSocket_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送内容`
	 * ========params==========
	 *
	 * `data` :string : （必填项）发送的消息内容。
	 *
	 * `isBtyes` :boolean : （可选项）是否用流的方式发送数据。
	 */
	send(params:webSocket_send_Params, callback?: (ret:JSON) => void):void

	/** 关闭连接*/ 
	close(callback?: (ret:JSON) => void):void

	/** 获取连接状态*/ 
	getConnectState():void

}
interface webSocket_open_Params {
	/**（必填项）websocket的连接地址：如：ws://192.168.1.102:8887/socket。*/ 
	url:string,

	/**(可选项）心跳间隔，单位秒，设置大于0时起效果。*/ 
	pingInterval?:any,

	/**（可选项）心跳数据，配合pingInterval 使用。*/ 
	pingData?:string,

	/**（可选项）是否用流的方式发送数据。*/ 
	isBtyes?:boolean,

}

interface webSocket_send_Params {
	/**（必填项）发送的消息内容。*/ 
	data:string,

	/**（可选项）是否用流的方式发送数据。*/ 
	isBtyes?:boolean,

}

interface cardcamera {
	/** 分享文本内容*/ 
	frontIdCard():void

	/** 分享文本内容*/ 
	backIdCard():void

}
interface nativeTimer {
	/** 启动一个新的计时器。*/ 
	start():void

	/** 通过计时器ID结束1个或者多个计时器。*/ 
	stop():void

	/** 修改某个计时器的循环周期（只可修改循环计时器）*/ 
	setInterval():void

	/** 向系统声明本应用保持对CPU的占用，可提高应用在手机锁屏的情况下，timer的准确率，但会消耗更多的电量。仅支持Android系统。*/ 
	acquireCpu():void

	/** 释放本应用对CPU的占用，与acquireCpu配对使用。仅支持Android系统。*/ 
	releaseCpu():void

}
interface xxtea {
	/**
	 * `设置密钥(异步接口)`
	 * ========params==========
	 *
	 * `key` :string : （必填项）
	 */
	setKey(params:xxtea_setKey_Params, callback?: (ret:JSON) => void):void

	/**
	 * `加密(异步接口)`
	 * ========params==========
	 *
	 * `data` :string : （必填项）要加密的字符串
	 */
	encrypt(params:xxtea_encrypt_Params, callback?: (ret:JSON) => void):void

	/**
	 * `解密(异步接口)`
	 * ========params==========
	 *
	 * `data` :string : （必填项）要解密的字符串
	 */
	decrypt(params:xxtea_decrypt_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置密钥(同步接口)`
	 * ========params==========
	 *
	 * `key` :string : （必填项）
	 */
	setKeySync(params:xxtea_setKeySync_Params):boolean;

	/**
	 * `加密(同步接口)`
	 * ========params==========
	 *
	 * `data` :string : （必填项）要加密的字符串
	 */
	encryptSync(params:xxtea_encryptSync_Params):string;

	/**
	 * `解密(同步接口)`
	 * ========params==========
	 *
	 * `data` :string : （必填项）要解密的字符串
	 */
	decryptSync(params:xxtea_decryptSync_Params):string;

}
interface xxtea_setKey_Params {
	/**（必填项）*/ 
	key:string,

}

interface xxtea_encrypt_Params {
	/**（必填项）要加密的字符串*/ 
	data:string,

}

interface xxtea_decrypt_Params {
	/**（必填项）要解密的字符串*/ 
	data:string,

}

interface xxtea_setKeySync_Params {
	/**（必填项）*/ 
	key:string,

}

interface xxtea_encryptSync_Params {
	/**（必填项）要加密的字符串*/ 
	data:string,

}

interface xxtea_decryptSync_Params {
	/**（必填项）要解密的字符串*/ 
	data:string,

}

interface epubReader {
}
interface LBAirDrop {
	/** 搜索可投屏的设备*/ 
	searchList():void

	/** 停止搜索（仅android支持）*/ 
	stopBrowse():void

	/** 链接投屏设备*/ 
	connect():void

	/** 断开连接*/ 
	disConnect():void

	/** 通过pin码获取设备，成功获取后可通过connect连接*/ 
	getDeviceByPin():void

	/**
	 * `视频投屏`
	 * ========params==========
	 *
	 * `videoType` :string : 视频类型
	 *
	 * `path` :string : 视频文件的路径 （iOS暂不支持本地视频播放）
	 *
	 * `mediaType` :number : 媒体播放类型
	 *
	 * `startPosition` :number : （可选项）播放的起始位置；默认：0
	 *
	 * `loopMode` :string : 播放循环模式
	 */
	open(params:LBAirDrop_open_Params):void

	/** 暂停播放*/ 
	pause():void

	/** 恢复播放*/ 
	resumePlay():void

	/**
	 * `设置播放进度`
	 * ========params==========
	 *
	 * `playProgress` :number : 播放进度
	 */
	seekTime(params:LBAirDrop_seekTime_Params):void

	/** 退出播放*/ 
	stop():void

	/**
	 * ` 设置音量值`
	 * ========params==========
	 *
	 * `Volume` :number : 音量值，范围0 ~ 100
	 */
	setVolume(params:LBAirDrop_setVolume_Params):void

	/**  增加音量*/ 
	addVolume():void

	/**  加少音量*/ 
	reduceVolume():void

	/**
	 * `通过扫描二维码获取到的字符串获取服务`
	 * ========params==========
	 *
	 * `codeStringValue` :string : 二维码扫描获取到的字符串
	 */
	scanString(params:LBAirDrop_scanString_Params, callback?: (ret:JSON) => void):void

	/** 是否支持推送弹幕*/ 
	canSupportPushBarrage():void

	/** 是否现在可以推送弹幕（仅iOS支持）*/ 
	canCurrentPushBarrage():void

	/** 设置播控监听*/ 
	setMediaListener():void

	/**
	 * `开启镜像（仅android支持）`
	 * ========params==========
	 *
	 * `resolutionLevel` :number : （可选项）分辨率
	 *
	 * `bitRateLevel` :number : （可选项）比特率
	 *
	 * `audioEnable` :boolean : （可选项）是否开启录制声音
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	mirror(params:LBAirDrop_mirror_Params):void

	/** 关闭镜像（仅android支持）*/ 
	stopMirror():void

}
interface LBAirDrop_open_Params {
	/**视频类型*/ 
	videoType:string,

	/**视频文件的路径 （iOS暂不支持本地视频播放）*/ 
	path:string,

	/**媒体播放类型*/ 
	mediaType:number,

	/**（可选项）播放的起始位置；默认：0*/ 
	startPosition?:number,

	/**播放循环模式*/ 
	loopMode:string,

}

interface LBAirDrop_seekTime_Params {
	/**播放进度*/ 
	playProgress:number,

}

interface LBAirDrop_setVolume_Params {
	/**音量值，范围0 ~ 100*/ 
	Volume:number,

}

interface LBAirDrop_scanString_Params {
	/**二维码扫描获取到的字符串*/ 
	codeStringValue:string,

}

interface LBAirDrop_mirror_Params {
	/**（可选项）分辨率*/ 
	resolutionLevel?:number,

	/**（可选项）比特率*/ 
	bitRateLevel?:number,

	/**（可选项）是否开启录制声音*/ 
	audioEnable?:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface privacy {
	/** 判断是否有定位权限*/ 
	location(callback?: (ret:JSON) => void):void

	/** 判断是否有访问联系人权限*/ 
	contacts(callback?: (ret:JSON) => void):void

	/** 判断是否有访问日历权限*/ 
	calendars(callback?: (ret:JSON) => void):void

	/** 判断是否有访问提醒事项的权限*/ 
	reminders(callback?: (ret:JSON) => void):void

	/** 判断是否有访问相册的权限*/ 
	photos(callback?: (ret:JSON) => void):void

	/** 判断是否有访问蓝牙的权限*/ 
	bluetooth(callback?: (ret:JSON) => void):void

	/** 判断是否有访问录音器的权限*/ 
	microphone(callback?: (ret:JSON) => void):void

	/** 判断是否有访问摄像头的权限*/ 
	camera(callback?: (ret:JSON) => void):void

}
interface autoStartUp {
}
interface mobilePrint {
	/**
	 * `图片按比例缩放大小，并且保存到指定目录。`
	 * ========params==========
	 *
	 * `flipping` :string : （可选项）图片翻转，取值范围(sx:上下翻转，zy:左右翻转，all:全翻转)。
	 *
	 * `angle` :string : （可选项）图片顺时针旋转角度，取值范围(90,180,270)。
	 *
	 * `oldimgurl` :string : （必选项）缩放前的图片路径，只支持设备内部图片，不支持网络图片。
	 *
	 * `newimgurl` :string : （必选项）缩放后的图片路径，只支持设备内部图片，不支持网络图片。
	 *
	 * `width` :any : （必选项）同比例缩放后图片的宽度（像素）。
	 */
	imgZoom(params:mobilePrint_imgZoom_Params, callback?: (ret:JSON) => void):void

}
interface mobilePrint_imgZoom_Params {
	/**（可选项）图片翻转，取值范围(sx:上下翻转，zy:左右翻转，all:全翻转)。*/ 
	flipping?:string,

	/**（可选项）图片顺时针旋转角度，取值范围(90,180,270)。*/ 
	angle?:string,

	/**（必选项）缩放前的图片路径，只支持设备内部图片，不支持网络图片。*/ 
	oldimgurl:string,

	/**（必选项）缩放后的图片路径，只支持设备内部图片，不支持网络图片。*/ 
	newimgurl:string,

	/**（必选项）同比例缩放后图片的宽度（像素）。*/ 
	width:any,

}

interface pasteboard {
}
interface docReader {
	/**
	 * `打开一个文档 （注意：在Android系统上调用此接口会打开第三方APP，通过第三方app阅读文档，而非在应用内打开）`
	 * ========params==========
	 *
	 * `path` :string : 打开文档的路径，要求本地路径（ widget://，fs:// ）
	 *
	 * `autorotation` :boolean : （可选项）是否适应当前设备自动旋转屏幕方向。仅iOS平台支持
	 */
	open(params:docReader_open_Params, callback?: (ret:JSON) => void):void

	/** 监听交互事件，仅对 open 接口打开的文档阅读器有效（仅iOS支持）*/ 
	addEventListener():void

	/**
	 * `打开一个文档，仅支持 iOS 端`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `path` :string : 打开文档的路径，要求本地路径（ widget://，fs:// ）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openDocView(params:docReader_openDocView_Params, callback?: (ret:JSON) => void):void

	/** 关闭 openDocView 打开的文档预览区域，仅支持 iOS 端*/ 
	closeDocView():void

	/**  隐藏 openDocView 打开的文档预览区域，仅支持 iOS 端*/ 
	hideDocView():void

	/** 显示 openDocView 打开的文档预览区域，仅支持 iOS 端*/ 
	showDocView():void

}
interface docReader_open_Params {
	/**打开文档的路径，要求本地路径（ widget://，fs:// ）*/ 
	path:string,

	/**（可选项）是否适应当前设备自动旋转屏幕方向。仅iOS平台支持*/ 
	autorotation?:boolean,

}

interface docReader_openDocView_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**打开文档的路径，要求本地路径（ widget://，fs:// ）*/ 
	path:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface DRMScreenShot {
	/**
	 * `打开禁止截屏的区域`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）禁止截屏的区域的位置及大小
	 *
	 * `path` :string : 播放路径                      //传m3u8格式的文件路径. 注意:本地不必有m3u8文件 ; 例如:'widget://res/movie.m3u8'
	 *
	 * `imagPath` :string : 要禁止截屏的图片路径。           //传图片的路径. 注意:本地必须要有这个图片文件 ; 例如:'widget://res/image.jpg'
	 *
	 * `size` :JSON : 禁止截屏图片的尺寸
	 */
	open(params:DRMScreenShot_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭*/ 
	close():void

	/** 隐藏*/ 
	hide():void

	/** 显示*/ 
	show():void

}
interface DRMScreenShot_open_Params {
	/**（可选项）禁止截屏的区域的位置及大小*/ 
	rect?:JSON,

	/**播放路径                      //传m3u8格式的文件路径. 注意:本地不必有m3u8文件 ; 例如:'widget://res/movie.m3u8'*/ 
	path:string,

	/**要禁止截屏的图片路径。           //传图片的路径. 注意:本地必须要有这个图片文件 ; 例如:'widget://res/image.jpg'*/ 
	imagPath:string,

	/**禁止截屏图片的尺寸*/ 
	size:JSON,

}

interface networkIndicator {
	/** 显示状态栏网络加载指示器*/ 
	show():void

	/** 隐藏状态栏网络加载指示器*/ 
	hide():void

	/**
	 * `设置进度（仅支持Android）`
	 * ========params==========
	 *
	 * `progress` :number : 需要更新的进度
	 */
	setProgress(params:networkIndicator_setProgress_Params):void

}
interface networkIndicator_setProgress_Params {
	/**需要更新的进度*/ 
	progress:number,

}

interface audioRecorder {
	/**
	 * `开始录音`
	 * ========params==========
	 *
	 * `channel` :number : （可选项）声道支持
	 *
	 * `sampleRates` :number : （可选项）采样率
	 *
	 * `savePath` :string : 保存路径 （仅支持 fs://）
	 *
	 * `format` :string : （可选项）音频格式
	 */
	startRecord(params:audioRecorder_startRecord_Params, callback?: (ret:JSON) => void):void

	/** 获取当前/实时音量*/ 
	getVolume():void

	/**
	 * `添加事件监听者`
	 * ========params==========
	 *
	 * `name` :string : （可选项）要监听对象的名字。
	 */
	addEventListener(params:audioRecorder_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 恢复录音，暂仅支持iOS端*/ 
	resumeRecord():void

	/** 暂停录音，暂仅支持iOS端*/ 
	pauseRecord():void

	/** 停止录音*/ 
	stopRecord():void

	/**
	 * `获取文件属性（文件大小和音频时长）`
	 * ========params==========
	 *
	 * `path` :string : 音频的路径 （仅支持 fs://）
	 */
	getAttr(params:audioRecorder_getAttr_Params, callback?: (ret:JSON) => void):void

}
interface audioRecorder_startRecord_Params {
	/**（可选项）声道支持*/ 
	channel?:number,

	/**（可选项）采样率*/ 
	sampleRates?:number,

	/**保存路径 （仅支持 fs://）*/ 
	savePath:string,

	/**（可选项）音频格式*/ 
	format?:string,

}

interface audioRecorder_addEventListener_Params {
	/**（可选项）要监听对象的名字。*/ 
	name?:string,

}

interface audioRecorder_getAttr_Params {
	/**音频的路径 （仅支持 fs://）*/ 
	path:string,

}

interface idfa {
}
interface alarmNotification {
}
interface tutu {
	/** 初始化tutu*/ 
	init():void

	/** 打开相机*/ 
	openCamera():void

	/** 编辑图片(单图编辑)*/ 
	editPicture():void

	/** 多图编辑*/ 
	multiPictureEdit():void

	/** 裁剪 + 滤镜组件*/ 
	editAndCutPicture():void

	/** 头像编辑*/ 
	editAvatar():void

	/** 裁剪+滤镜+贴纸组件*/ 
	editAdvanced():void

	/** 打开相册*/ 
	openAlbum():void

	/**
	 * `打开多选相册`
	 * ========params==========
	 *
	 * `autoDismissWhenCompelted` :boolean : (可选项) 是否在组件执行完成后自动关闭组件;
	 *
	 * `ret` :JSON : 编辑图片的返回对象
	 */
	openMultiAlbum(params:tutu_openMultiAlbum_Params):void

	/** 编辑图片直接可以进到指定功能*/ 
	editPictureSpecifiedFunction():void

}
interface tutu_openMultiAlbum_Params {
	/**(可选项) 是否在组件执行完成后自动关闭组件;*/ 
	autoDismissWhenCompelted?:boolean,

	/**编辑图片的返回对象*/ 
	ret:JSON,

}

interface FNPhotograph {
	/**
	 * `打开固定 UI 的相机页面`
	 * ========params==========
	 *
	 * `path` :string : （可选项）图片保存路径，要求本地路径（fs://）
	 *
	 * `album` :boolean : （可选项）拍照成功后是否将所拍图片存入系统相册
	 *
	 * `quality` :string : （可选项）所拍照片质量 **（该参数已弃用，建议使用 qualityValue）**
	 *
	 * `qualityValue` :number : （可选项）所拍照片质量
	 *
	 * `attachedWindow` :boolean : 是否依附在window上
	 *
	 * `usePreview` :boolean : 是否在拍照完后显示预览页面（暂仅支持 android）
	 *
	 * `useAdvanceFeature` :boolean : 是否打开高级属性特性（暂仅支持android）
	 *
	 * `pictureSize` :any : 照片分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）
	 *
	 * `previewSize` :any : 相机预览分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）
	 *
	 * `isShowAlbum` :boolean : 是否显示进入相册按钮
	 */
	open(params:FNPhotograph_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开纯相机页面`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `orientation` :string : （可选项）设置摄像头朝向
	 *
	 * `isStatusBarHidden` :boolean : （可选项）是否隐藏状态栏 **仅支持iOS**
	 *
	 * `useFrontCamera` :boolean : 是否使用前置摄像头；
	 *
	 * `useAdvanceFeature` :boolean : 是否打开高级属性特性（暂仅支持android）
	 *
	 * `pictureSize` :any : 照片分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openCameraView(params:FNPhotograph_openCameraView_Params, callback?: (ret:JSON) => void):void

	/**
	 * `拍照 （注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `quality` :string : （可选项）所拍照片质量  **（该参数已弃用，建议使用 qualityValue）**
	 *
	 * `qualityValue` :number : （可选项）所拍照片质量
	 *
	 * `path` :string : （可选项）图片保存路径，要求本地路径（fs://）。Androd 上若不传，则无法保存到相册。
	 *
	 * `album` :boolean : （可选项）拍照成功后是否将所拍图片存入系统相册
	 *
	 * `isRotation` :boolean : （可选项）是否开启图片自动旋转适配方向功能 **仅支持iOS**
	 */
	takePhoto(params:FNPhotograph_takePhoto_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设拍摄区域的大小和位置,（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）重设模块的位置及尺寸
	 */
	setRect(params:FNPhotograph_setRect_Params):void

	/** 获取相机当前缩放数值（注意此方法与openCameraView配合使用）*/ 
	getZoom():void

	/**
	 * `设置视图大小，若为 2 则表示远视图被放大一倍（注意此方法与openCameraView配合使用。另外，设置视图的放大倍数不能超过视图的最大放大倍数，如果超过最大放大倍数，按最大放大倍数来处理）`
	 * ========params==========
	 *
	 * `zoom` :number : （可选项）设置的焦距大小（视图被放大的倍数），取值范围：大于 1.0
	 */
	setZoom(params:FNPhotograph_setZoom_Params):void

	/** 获取相机支持的最大放大倍率（注意此方法与openCameraView配合使用）*/ 
	getMaxZoom():void

	/**
	 * `设置闪关灯，在 iOS 平台上，前置摄像头打开时不支持操作闪光灯（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `flashlight` :string : （可选项）闪光灯类型
	 */
	setFlashlight(params:FNPhotograph_setFlashlight_Params):void

	/** 获取当前占用的摄像头（注意此方法与openCameraView配合使用）*/ 
	getCamera():void

	/**
	 * `设置前置/后置摄像头（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `camera` :string : （可选项）摄像头
	 */
	setCamera(params:FNPhotograph_setCamera_Params):void

	/**
	 * `设置当前相机对焦模式，配合 setFocusRegion 接口使用（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `focusMode` :string : （可选项）对焦模式
	 */
	setFocusMode(params:FNPhotograph_setFocusMode_Params):void

	/**
	 * `设置当前相机对焦区域，需要跟 setFocusMode 接口同时使用（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `region` :JSON : （可选项）焦点坐标（在录像区域内的坐标，原点在该区域左上角，往右为x轴，下为y轴）
	 */
	setFocusRegion(params:FNPhotograph_setFocusRegion_Params):void

	/**
	 * `设置当前相机对焦提示框（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `box` :string : （可选项）对焦提示框样式配置，该提示框是一个空心的正方形框。当调用setFocusRegion接口时，如果 animation 参数为 true，该提示框的显示与隐藏会有动画。
	 *
	 * `icon` :string : （可选项）自定义的提示框图标路径，要求本地路径（支持fs://、widget://协议），图标大小为：80*80
	 *
	 * `autoHide` :number : （可选项）设置对焦提示框自动隐藏时间，当为 -1 时，不自动隐藏，需调用 hideFocusBox 接口手动隐藏
	 *
	 * `animation` :boolean : （可选项）设置对焦提示框显示和隐藏时是否使用动画
	 */
	setFocusBox(params:FNPhotograph_setFocusBox_Params):void

	/** 隐藏对焦提示框（注意此方法与openCameraView配合使用）*/ 
	hideFocusBox():void

	/**
	 * `事件监听（注意此方法与openCameraView配合使用）`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:FNPhotograph_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 关闭相机界面（注意此方法与openCameraView配合使用）*/ 
	closeCameraView():void

	/** 在android系统中，有些相机图片在网页中显示的时候会被旋转，此方法可以获取图片被旋转的角度(未被旋转返回0)，可以使用js将图片旋转解决此问题*/ 
	getRotateDegree():void

	/** 获取支持的相机预览分辨率（暂仅支持android）*/ 
	getSupportPreviewSize():void

	/** 获取支持的拍照后图片的分辨率（暂仅支持android）*/ 
	getSupportPictureSize():void

	/** 关闭相机界面(此接口关闭定制UI的相机页面)*/ 
	close():void

}
interface FNPhotograph_open_Params {
	/**（可选项）图片保存路径，要求本地路径（fs://）*/ 
	path?:string,

	/**（可选项）拍照成功后是否将所拍图片存入系统相册*/ 
	album?:boolean,

	/**（可选项）所拍照片质量 **（该参数已弃用，建议使用 qualityValue）***/ 
	quality?:string,

	/**（可选项）所拍照片质量*/ 
	qualityValue?:number,

	/**是否依附在window上*/ 
	attachedWindow:boolean,

	/**是否在拍照完后显示预览页面（暂仅支持 android）*/ 
	usePreview:boolean,

	/**是否打开高级属性特性（暂仅支持android）*/ 
	useAdvanceFeature:boolean,

	/**照片分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）*/ 
	pictureSize:any,

	/**相机预览分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）*/ 
	previewSize:any,

	/**是否显示进入相册按钮*/ 
	isShowAlbum:boolean,

}

interface FNPhotograph_openCameraView_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）设置摄像头朝向*/ 
	orientation?:string,

	/**（可选项）是否隐藏状态栏 **仅支持iOS***/ 
	isStatusBarHidden?:boolean,

	/**是否使用前置摄像头；*/ 
	useFrontCamera:boolean,

	/**是否打开高级属性特性（暂仅支持android）*/ 
	useAdvanceFeature:boolean,

	/**照片分辨率设置（暂仅支持android）（注意：只有useAdvanceFeature为true时该参数有效，并且该参数不能为空）*/ 
	pictureSize:any,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface FNPhotograph_takePhoto_Params {
	/**（可选项）所拍照片质量  **（该参数已弃用，建议使用 qualityValue）***/ 
	quality?:string,

	/**（可选项）所拍照片质量*/ 
	qualityValue?:number,

	/**（可选项）图片保存路径，要求本地路径（fs://）。Androd 上若不传，则无法保存到相册。*/ 
	path?:string,

	/**（可选项）拍照成功后是否将所拍图片存入系统相册*/ 
	album?:boolean,

	/**（可选项）是否开启图片自动旋转适配方向功能 **仅支持iOS***/ 
	isRotation?:boolean,

}

interface FNPhotograph_setRect_Params {
	/**（可选项）重设模块的位置及尺寸*/ 
	rect?:JSON,

}

interface FNPhotograph_setZoom_Params {
	/**（可选项）设置的焦距大小（视图被放大的倍数），取值范围：大于 1.0*/ 
	zoom?:number,

}

interface FNPhotograph_setFlashlight_Params {
	/**（可选项）闪光灯类型*/ 
	flashlight?:string,

}

interface FNPhotograph_setCamera_Params {
	/**（可选项）摄像头*/ 
	camera?:string,

}

interface FNPhotograph_setFocusMode_Params {
	/**（可选项）对焦模式*/ 
	focusMode?:string,

}

interface FNPhotograph_setFocusRegion_Params {
	/**（可选项）焦点坐标（在录像区域内的坐标，原点在该区域左上角，往右为x轴，下为y轴）*/ 
	region?:JSON,

}

interface FNPhotograph_setFocusBox_Params {
	/**（可选项）对焦提示框样式配置，该提示框是一个空心的正方形框。当调用setFocusRegion接口时，如果 animation 参数为 true，该提示框的显示与隐藏会有动画。*/ 
	box?:string,

	/**（可选项）自定义的提示框图标路径，要求本地路径（支持fs://、widget://协议），图标大小为：80*80*/ 
	icon?:string,

	/**（可选项）设置对焦提示框自动隐藏时间，当为 -1 时，不自动隐藏，需调用 hideFocusBox 接口手动隐藏*/ 
	autoHide?:number,

	/**（可选项）设置对焦提示框显示和隐藏时是否使用动画*/ 
	animation?:boolean,

}

interface FNPhotograph_addEventListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface appmanager {
	/** 获取手机设备信息:*/ 
	getmobileinfo():void

	/** 根据包名获取 APP 的签名:*/ 
	getappsign():void

}
interface alarmHelper {
	/**
	 * `设置闹铃`
	 * ========params==========
	 *
	 * `notice` :JSON : （可选项）弹出通知到状态栏。弹出时是否震动或响铃
	 *
	 * `alarm` :JSON : 设置闹铃
	 */
	set(params:alarmHelper_set_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消闹铃`
	 * ========params==========
	 *
	 * `id` :number : 闹钟id
	 */
	cancel(params:alarmHelper_cancel_Params, callback?: (ret:JSON) => void):void

}
interface alarmHelper_set_Params {
	/**（可选项）弹出通知到状态栏。弹出时是否震动或响铃*/ 
	notice?:JSON,

	/**设置闹铃*/ 
	alarm:JSON,

}

interface alarmHelper_cancel_Params {
	/**闹钟id*/ 
	id:number,

}

interface fileReader {
	/**
	 * `以 window 的形式打开 Files`
	 * ========params==========
	 *
	 * `types` :Array : （可选项）打开文件的类型，详情参考[苹果官方文档](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259)
	 */
	open(params:fileReader_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加事件监听`
	 * ========params==========
	 *
	 * `target` :string : （可选项）所要监听的事件
	 */
	addEventListener(params:fileReader_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface fileReader_open_Params {
	/**（可选项）打开文件的类型，详情参考[苹果官方文档](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259)*/ 
	types?:Array,

}

interface fileReader_addEventListener_Params {
	/**（可选项）所要监听的事件*/ 
	target?:string,

}

interface macauPay {
	/** 切换使用环境*/ 
	changeEnvironment(callback?: (ret:JSON) => void):void

	/** 澳门支付*/ 
	macauPay(callback?: (ret:JSON) => void):void

	/** 支付宝支付*/ 
	aliPay(callback?: (ret:JSON) => void):void

}
interface pdfTrans {
	/**
	 * `把模块所依附的当前 webview 转换为一个 pdf 文件`
	 * ========params==========
	 *
	 * `save` :JSON : （可选项）转换的 pdf 文件的保存信息
	 */
	trans(params:pdfTrans_trans_Params, callback?: (ret:JSON) => void):void

}
interface pdfTrans_trans_Params {
	/**（可选项）转换的 pdf 文件的保存信息*/ 
	save?:JSON,

}

interface iTVBox {
	/**
	 * `置入云端服务器地址`
	 * ========params==========
	 *
	 * `ServerURL` :string : （必填项）填写您云端服务器地址，不带http&https的地址（例：app.haleyryan.cn/moduleitvbox）。
	 */
	setServerURL(params:iTVBox_setServerURL_Params, callback?: (ret:JSON) => void):void

	/** 发送给云端指令（注意云端接收脚本名为SendMsg）*/ 
	sendMsg(callback?: (ret:JSON) => void):void

	/** 接收来自云端指令代码（注意云端接收脚本名为DownMsg）*/ 
	downMsg(callback?: (ret:JSON) => void):void

}
interface iTVBox_setServerURL_Params {
	/**（必填项）填写您云端服务器地址，不带http&https的地址（例：app.haleyryan.cn/moduleitvbox）。*/ 
	ServerURL:string,

}

interface audio {
	/** 播放网络音频时，清除本地缓存*/ 
	expungeCache():void

}
interface takePicCutOut {
	/**
	 * `打开身份证裁剪界面`
	 * ========params==========
	 *
	 * `isCardFront` :boolean : （可选项）身份证正面还是背面。(true:正面 false:背面)
	 *
	 * `isAlbumImport` :boolean : （可选项）是否显示导入图片按钮。(true:显示 false:不显示)
	 */
	openIDCardCut(params:takePicCutOut_openIDCardCut_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开卡片裁剪界面`
	 * ========params==========
	 *
	 * `isAlbumImport` :boolean : （可选项）是否显示导入图片按钮。(true:显示 false:不显示)
	 */
	openCardCut(params:takePicCutOut_openCardCut_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开自定义裁剪界面`
	 * ========params==========
	 *
	 * `isAlbumImport` :boolean : （可选项）是否显示导入图片按钮。(true:显示 false:不显示)
	 */
	openCustomCut(params:takePicCutOut_openCustomCut_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开护照裁剪界面`
	 * ========params==========
	 *
	 * `isAlbumImport` :boolean : （可选项）是否显示导入图片按钮。(true:显示 false:不显示)
	 */
	openPassportCut(params:takePicCutOut_openPassportCut_Params, callback?: (ret:JSON) => void):void

}
interface takePicCutOut_openIDCardCut_Params {
	/**（可选项）身份证正面还是背面。(true:正面 false:背面)*/ 
	isCardFront?:boolean,

	/**（可选项）是否显示导入图片按钮。(true:显示 false:不显示)*/ 
	isAlbumImport?:boolean,

}

interface takePicCutOut_openCardCut_Params {
	/**（可选项）是否显示导入图片按钮。(true:显示 false:不显示)*/ 
	isAlbumImport?:boolean,

}

interface takePicCutOut_openCustomCut_Params {
	/**（可选项）是否显示导入图片按钮。(true:显示 false:不显示)*/ 
	isAlbumImport?:boolean,

}

interface takePicCutOut_openPassportCut_Params {
	/**（可选项）是否显示导入图片按钮。(true:显示 false:不显示)*/ 
	isAlbumImport?:boolean,

}

interface shortCut {
	/** 为当前app添加快捷方式*/ 
	showLaunch():void

}
interface weChatCamera {
	/**
	 * `录制视频`
	 * ========params==========
	 *
	 * `minDuration` :number : （必填项）允许拍摄的最小时长；
	 *
	 * `maxDuration` :number : （必填项）允许拍摄的最大时长，时长越大，产生的视频文件越大；
	 *
	 * `isBackCamera` :boolean : （可选项）是否默认后置摄像头: true 后置摄像头 false 前置摄像头
	 *
	 * `isOpenCapture` :boolean : （可选项）是否开启单点拍照功能: true 打开 false 关闭
	 *
	 * `isOpenRecord` :boolean : （可选项）是否开启长按录像功能: true 打开 false 关闭
	 *
	 * `videoTimeShort` :string : （可选项）录制视频时长太短提示文字。
	 *
	 * `videoRecodeFail` :string : （可选项）视频录制失败提示文字。
	 *
	 * `videoPreviewFail` :string : （可选项）录像预览失败提示文字。
	 *
	 * `videoSettingFail` :string : （可选项）录像设置失败提示文字。
	 *
	 * `videoDialogClose` :string : （可选项）关闭提示文字。
	 *
	 * `videoProcessing` :string : （可选项）视频处理中提示文字。
	 */
	record(params:weChatCamera_record_Params, callback?: (ret:JSON) => void):void

	/** 获取视频存放文件夹大小*/ 
	getCacheSize(callback?: (ret:JSON) => void):void

	/** 清除存放视频文件夹所有视频*/ 
	clearCache(callback?: (ret:JSON) => void):void

}
interface weChatCamera_record_Params {
	/**（必填项）允许拍摄的最小时长；*/ 
	minDuration:number,

	/**（必填项）允许拍摄的最大时长，时长越大，产生的视频文件越大；*/ 
	maxDuration:number,

	/**（可选项）是否默认后置摄像头: true 后置摄像头 false 前置摄像头*/ 
	isBackCamera?:boolean,

	/**（可选项）是否开启单点拍照功能: true 打开 false 关闭*/ 
	isOpenCapture?:boolean,

	/**（可选项）是否开启长按录像功能: true 打开 false 关闭*/ 
	isOpenRecord?:boolean,

	/**（可选项）录制视频时长太短提示文字。*/ 
	videoTimeShort?:string,

	/**（可选项）视频录制失败提示文字。*/ 
	videoRecodeFail?:string,

	/**（可选项）录像预览失败提示文字。*/ 
	videoPreviewFail?:string,

	/**（可选项）录像设置失败提示文字。*/ 
	videoSettingFail?:string,

	/**（可选项）关闭提示文字。*/ 
	videoDialogClose?:string,

	/**（可选项）视频处理中提示文字。*/ 
	videoProcessing?:string,

}

interface epub {
	/**
	 * `打开阅读器`
	 * ========params==========
	 *
	 * `path` :string : epub文件路径，支持fs,widget
	 *
	 * `bookId` :string : 文件存入本地的唯一标识，不同文件标识应为唯一，不同文件不可重复传入
	 *
	 * `currentChapter` :number : （可选项）打开书籍的章节数
	 *
	 * `bg` :string : （可选项）阅读器的背景，支持颜色（rgb，rgba，#）和图片（支持fs,widget）
	 *
	 * `textColor` :string : （可选项）阅读器显示文字颜色
	 *
	 * `textSize` :number : （可选项）阅读器显示文字字体大小
	 */
	open(params:epub_open_Params, callback?: (ret:JSON) => void):void

	/** 添加监听*/ 
	addEventListener():void

	/** 移除添加监听*/ 
	removeEventListener():void

	/**
	 * `设置阅读器的参数`
	 * ========params==========
	 *
	 * `bg` :string : （可选项）阅读器的背景色，支持颜色（rgb，rgba，#）和图片（支持fs,widget）
	 *
	 * `currentChapter` :number : （可选项）打开的章节数
	 *
	 * `textColor` :string : （可选项）文字颜色
	 *
	 * `textSize` :number : （可选项）文字字体大小。重新设置字体大小后，会重新分页，触发分页的事件
	 */
	setValue(params:epub_setValue_Params):void

	/**
	 * `打开指定章节`
	 * ========params==========
	 *
	 * `currentChapter` :number : （可选项）打开的章节数
	 */
	openChapter(params:epub_openChapter_Params):void

	/** 获取当前屏幕亮度值*/ 
	getBrightness():void

	/**
	 * `设置屏幕亮度`
	 * ========params==========
	 *
	 * `brightness` :number : 设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度**
	 */
	setBrightness(params:epub_setBrightness_Params):void

	/**
	 * `根据进度跳转对应章节`
	 * ========params==========
	 *
	 * `progress` :number : 进度值（0-100），可为小数
	 */
	resetWithProgress(params:epub_resetWithProgress_Params):void

	/** 获取全部本地书籍*/ 
	getAllbooks():void

	/**
	 * `删除一本书籍`
	 * ========params==========
	 *
	 * `bookId` :any : 书记唯一标识符
	 */
	deleteBookWithBook(params:epub_deleteBookWithBook_Params):void

	/**
	 * ` 设置夜间模式`
	 * ========params==========
	 *
	 * `isNightMode` :boolean : 是否开启夜间模式
	 */
	setNightMode(params:epub_setNightMode_Params):void

	/** 关闭阅读器*/ 
	close():void

}
interface epub_open_Params {
	/**epub文件路径，支持fs,widget*/ 
	path:string,

	/**文件存入本地的唯一标识，不同文件标识应为唯一，不同文件不可重复传入*/ 
	bookId:string,

	/**（可选项）打开书籍的章节数*/ 
	currentChapter?:number,

	/**（可选项）阅读器的背景，支持颜色（rgb，rgba，#）和图片（支持fs,widget）*/ 
	bg?:string,

	/**（可选项）阅读器显示文字颜色*/ 
	textColor?:string,

	/**（可选项）阅读器显示文字字体大小*/ 
	textSize?:number,

}

interface epub_setValue_Params {
	/**（可选项）阅读器的背景色，支持颜色（rgb，rgba，#）和图片（支持fs,widget）*/ 
	bg?:string,

	/**（可选项）打开的章节数*/ 
	currentChapter?:number,

	/**（可选项）文字颜色*/ 
	textColor?:string,

	/**（可选项）文字字体大小。重新设置字体大小后，会重新分页，触发分页的事件*/ 
	textSize?:number,

}

interface epub_openChapter_Params {
	/**（可选项）打开的章节数*/ 
	currentChapter?:number,

}

interface epub_setBrightness_Params {
	/**设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度***/ 
	brightness:number,

}

interface epub_resetWithProgress_Params {
	/**进度值（0-100），可为小数*/ 
	progress:number,

}

interface epub_deleteBookWithBook_Params {
	/**书记唯一标识符*/ 
	bookId:any,

}

interface epub_setNightMode_Params {
	/**是否开启夜间模式*/ 
	isNightMode:boolean,

}

interface checkpush {
}
interface signature {
	/**
	 * `将字符串进行 AES 加密（加密模式和填充模式分别为：CBC/PKCS7Padding；初始iv为：{0xA,1,0xB,5,4,0xF,7,9,0x17,3,1,6,8,0xC,0xD,91}，加密等级位数：aes-256-cbc）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 */
	aes(params:signature_aes_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 AES 解密（加密模式和填充模式分别为：CBC/PKCS7Padding；初始iv为：{0xA,1,0xB,5,4,0xF,7,9,0x17,3,1,6,8,0xC,0xD,91}，加密等级位数：aes-256-cbc）`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : aes 解密算法使用的 key
	 */
	aesDecode(params:signature_aesDecode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取rsa密钥对, **此接口仅支持 Android 平台**`
	 * ========params==========
	 *
	 * `keyLength` :number : 秘钥长度（512~2048）
	 *
	 * `ret` :JSON : null
	 */
	rsaKeyPair(params:signature_rsaKeyPair_Params):void

	/**
	 * `rsa加密`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `publicKey` :string : 加密所需公钥，**注意：在android平台上直接传 encoded（字符串），在 iOS 平台上需传公钥文件（.der 格式）的地址路径（仅支持本地路径fs://、widget://）**
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	rsa(params:signature_rsa_Params):void

	/**
	 * `rsa解密`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `privateKey` :string : 解密所需私钥，**注意：在android平台上直接传私钥 encoded（字符串），在 iOS 平台上需传私钥文件（.p12 格式）的地址路径（仅支持本地路径fs://、widget://）**
	 *
	 * `password` :string : 使用 openssl 命令生成密钥对时所输入的私钥文件提取密码 **仅 iOS 平台需要**
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	rsaDecode(params:signature_rsaDecode_Params):void

	/**
	 * `将字符串进行 AES 加密（加密模式和填充模式分别为：ECB/PKCS7Padding；数据块：256位；字符集：utf8）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 *
	 * `encoding` :number : 输出字符串的编码；0：base64，1：hex
	 */
	aesECB(params:signature_aesECB_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 AES 解密（加密模式和填充模式分别为：ECB/PKCS7Padding；数据块：256位；字符集：utf8）`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : aes 解密算法使用的 key
	 *
	 * `encoding` :number : 输入字符串的编码；本接口会先对要解密的内容进行一次此字段传入类型解码，需要和aesECB或aesECBSync接口传入一致；0：base64，1：hex
	 */
	aesDecodeECB(params:signature_aesDecodeECB_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 DES 加密（加密模式和填充模式分别为：ECB/PKCS5Padding）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : des 加密算法使用的 key
	 */
	desECB(params:signature_desECB_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 DES 解密（加密模式和填充模式分别为：ECB/PKCS5Padding）`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : des 解密算法使用的 key
	 */
	desDecodeECB(params:signature_desDecodeECB_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 AES 加密（加密模式和填充模式分别为：CBC/PKCS7Padding；加密等级位数：aes-128-cbc）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 *
	 * `iv` :string : aes 加密算法使用的偏移量
	 */
	aesCBC(params:signature_aesCBC_Params, callback?: (ret:JSON) => void):void

	/** 将字符串进行 AES 解密（加密模式和填充模式分别为：CBC/PKCS7Padding；加密等级位数：aes-128-cbc）*/ 
	aesDecodeCBC():void

	/**
	 * `将文件进行 AES 加密解密（填充模式为：PKCS7Padding；加密等级位数：aes-256-cbc`
	 * ========params==========
	 *
	 * `action` :string : 指明加密解密功能
	 *
	 * `path` :string : 要加密/解密的文件地址，要求本地路径（fs://）
	 *
	 * `key` :string : aes 加密/解密算法使用的 key
	 *
	 * `iv` :string : aes 加密/解密算法使用的 iv
	 *
	 * `savePath` :string : （可选项）加密/解密后的文件保存路径，要求本地路径（fs://），
	 */
	aesFile(params:signature_aesFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串进行 AES 加密（本加密过程为同步），加密模式和填充模式分别为：CBC/PKCS7Padding；初始iv为：{0xA,1,0xB,5,4,0xF,7,9,0x17,3,1,6,8,0xC,0xD,91}；加密等级位数：aes-256-cbc`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 *
	 * `value` :string : 加密后的字符串
	 */
	aesSync(params:signature_aesSync_Params):void

	/**
	 * `将字符串进行 AES 解密（本解密过程为同步），加密模式和填充模式分别为：CBC/PKCS7Padding；初始iv为：{0xA,1,0xB,5,4,0xF,7,9,0x17,3,1,6,8,0xC,0xD,91}；加密等级位数：aes-256-cbc`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : aes 解密算法使用的 key
	 *
	 * `value` :string : 解密后的字符串
	 */
	aesDecodeSync(params:signature_aesDecodeSync_Params):void

	/**
	 * `获取rsa密钥对（同步），**此接口仅支持 Android 平台**`
	 * ========params==========
	 *
	 * `keyLength` :number : 秘钥长度（512~2048）
	 *
	 * `ret` :JSON : null
	 */
	rsaKeyPairSync(params:signature_rsaKeyPairSync_Params):void

	/**
	 * `rsa加密 （本加密为同步）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `publicKey` :string : 加密所需公钥，**注意：在android平台上直接传 encoded（字符串），在 iOS 平台上需传公钥文件（.der 格式）的地址路径（仅支持本地路径fs://、widget://）**
	 *
	 * `value` :string : 加密后的字符串
	 */
	rsaSync(params:signature_rsaSync_Params):void

	/**
	 * `rsa解密 (同步)`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `privateKey` :string : 解密所需私钥，**注意：在android平台上直接传私钥 encoded（字符串），在 iOS 平台上需传私钥文件（.p12 格式）的地址路径（仅支持本地路径fs://、widget://）**
	 *
	 * `password` :string : 使用 openssl 命令生成密钥对时所输入的私钥文件提取密码 **仅 iOS 平台需要**
	 *
	 * `value` :string : 加密后的字符串
	 */
	rsaDecodeSync(params:signature_rsaDecodeSync_Params):void

	/**
	 * `将字符串进行 AES 加密（本加密过程为同步），加密模式和填充模式分别为：ECB/PKCS7Padding；数据块：256位；字符集：utf8`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 *
	 * `encoding` :number : 输出字符串的编码；0：base64，1：hex
	 *
	 * `value` :string : 加密后的字符串
	 */
	aesECBSync(params:signature_aesECBSync_Params):void

	/**
	 * `将字符串进行 AES 解密（本解密过程为同步），加密模式和填充模式分别为：WCB/PKCS7Padding；数据块：256位；字符集：utf8`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : aes 解密算法使用的 key
	 *
	 * `encoding` :number : 输入字符串的编码；本接口会先对要解密的内容进行一次此字段传入类型解码，需要和aesECB或aesECBSync接口传入一致；0：base64，1：hex
	 *
	 * `value` :string : 解密后的字符串
	 */
	aesDecodeECBSync(params:signature_aesDecodeECBSync_Params):void

	/**
	 * `将字符串进行 DES 加密（本加密过程为同步），加密模式和填充模式分别为：ECB/PKCS5Padding`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : des 加密算法使用的 key
	 *
	 * `value` :string : 加密后的字符串
	 */
	desECBSync(params:signature_desECBSync_Params):void

	/**
	 * `将字符串进行 DES 解密（本解密过程为同步），加密模式和填充模式分别为：ECB/PKCS5Padding`
	 * ========params==========
	 *
	 * `data` :string : 要解密的字符串
	 *
	 * `key` :string : des 解密算法使用的 key
	 *
	 * `value` :string : 解密后的字符串
	 */
	desDecodeECBSync(params:signature_desDecodeECBSync_Params):void

	/**
	 * `将字符串进行 AES 加密（加密模式和填充模式分别为：CBC/PKCS7Padding；加密等级位数：aes-128-cbc）`
	 * ========params==========
	 *
	 * `data` :string : 要加密的字符串
	 *
	 * `key` :string : aes 加密算法使用的 key
	 *
	 * `iv` :string : aes 加密算法使用的偏移量
	 *
	 * `value` :string : 加密后的字符串
	 */
	aesCBCSync(params:signature_aesCBCSync_Params):void

	/** 将字符串进行 AES 解密（加密模式和填充模式分别为：CBC/PKCS7Padding；加密等级位数：aes-128-cbc）*/ 
	aesDecodeCBCSync():void

	/**
	 * `将文件进行 AES 加密解密（填充模式为：PKCS7Padding；加密等级位数：aes-256-cbc`
	 * ========params==========
	 *
	 * `action` :string : 指明加密解密功能
	 *
	 * `path` :string : 要加密/解密的文件地址，要求本地路径（fs://）
	 *
	 * `key` :string : aes 加密/解密算法使用的 key
	 *
	 * `iv` :string : aes 加密/解密算法使用的 iv
	 *
	 * `savePath` :string : （可选项）加密/解密后的文件保存路径，要求本地路径（fs://），
	 *
	 * `value` :string : AES 加密/解密后的文件绝对路径
	 */
	aesFileSync(params:signature_aesFileSync_Params):void

}
interface signature_aes_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

}

interface signature_aesDecode_Params {
	/**要解密的字符串*/ 
	data:string,

	/**aes 解密算法使用的 key*/ 
	key:string,

}

interface signature_rsaKeyPair_Params {
	/**秘钥长度（512~2048）*/ 
	keyLength:number,

	/**null*/ 
	ret:JSON,

}

interface signature_rsa_Params {
	/**要加密的字符串*/ 
	data:string,

	/**加密所需公钥，**注意：在android平台上直接传 encoded（字符串），在 iOS 平台上需传公钥文件（.der 格式）的地址路径（仅支持本地路径fs://、widget://）***/ 
	publicKey:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface signature_rsaDecode_Params {
	/**要解密的字符串*/ 
	data:string,

	/**解密所需私钥，**注意：在android平台上直接传私钥 encoded（字符串），在 iOS 平台上需传私钥文件（.p12 格式）的地址路径（仅支持本地路径fs://、widget://）***/ 
	privateKey:string,

	/**使用 openssl 命令生成密钥对时所输入的私钥文件提取密码 **仅 iOS 平台需要***/ 
	password:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface signature_aesECB_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

	/**输出字符串的编码；0：base64，1：hex*/ 
	encoding:number,

}

interface signature_aesDecodeECB_Params {
	/**要解密的字符串*/ 
	data:string,

	/**aes 解密算法使用的 key*/ 
	key:string,

	/**输入字符串的编码；本接口会先对要解密的内容进行一次此字段传入类型解码，需要和aesECB或aesECBSync接口传入一致；0：base64，1：hex*/ 
	encoding:number,

}

interface signature_desECB_Params {
	/**要加密的字符串*/ 
	data:string,

	/**des 加密算法使用的 key*/ 
	key:string,

}

interface signature_desDecodeECB_Params {
	/**要解密的字符串*/ 
	data:string,

	/**des 解密算法使用的 key*/ 
	key:string,

}

interface signature_aesCBC_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

	/**aes 加密算法使用的偏移量*/ 
	iv:string,

}

interface signature_aesFile_Params {
	/**指明加密解密功能*/ 
	action:string,

	/**要加密/解密的文件地址，要求本地路径（fs://）*/ 
	path:string,

	/**aes 加密/解密算法使用的 key*/ 
	key:string,

	/**aes 加密/解密算法使用的 iv*/ 
	iv:string,

	/**（可选项）加密/解密后的文件保存路径，要求本地路径（fs://），*/ 
	savePath?:string,

}

interface signature_aesSync_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_aesDecodeSync_Params {
	/**要解密的字符串*/ 
	data:string,

	/**aes 解密算法使用的 key*/ 
	key:string,

	/**解密后的字符串*/ 
	value:string,

}

interface signature_rsaKeyPairSync_Params {
	/**秘钥长度（512~2048）*/ 
	keyLength:number,

	/**null*/ 
	ret:JSON,

}

interface signature_rsaSync_Params {
	/**要加密的字符串*/ 
	data:string,

	/**加密所需公钥，**注意：在android平台上直接传 encoded（字符串），在 iOS 平台上需传公钥文件（.der 格式）的地址路径（仅支持本地路径fs://、widget://）***/ 
	publicKey:string,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_rsaDecodeSync_Params {
	/**要解密的字符串*/ 
	data:string,

	/**解密所需私钥，**注意：在android平台上直接传私钥 encoded（字符串），在 iOS 平台上需传私钥文件（.p12 格式）的地址路径（仅支持本地路径fs://、widget://）***/ 
	privateKey:string,

	/**使用 openssl 命令生成密钥对时所输入的私钥文件提取密码 **仅 iOS 平台需要***/ 
	password:string,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_aesECBSync_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

	/**输出字符串的编码；0：base64，1：hex*/ 
	encoding:number,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_aesDecodeECBSync_Params {
	/**要解密的字符串*/ 
	data:string,

	/**aes 解密算法使用的 key*/ 
	key:string,

	/**输入字符串的编码；本接口会先对要解密的内容进行一次此字段传入类型解码，需要和aesECB或aesECBSync接口传入一致；0：base64，1：hex*/ 
	encoding:number,

	/**解密后的字符串*/ 
	value:string,

}

interface signature_desECBSync_Params {
	/**要加密的字符串*/ 
	data:string,

	/**des 加密算法使用的 key*/ 
	key:string,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_desDecodeECBSync_Params {
	/**要解密的字符串*/ 
	data:string,

	/**des 解密算法使用的 key*/ 
	key:string,

	/**解密后的字符串*/ 
	value:string,

}

interface signature_aesCBCSync_Params {
	/**要加密的字符串*/ 
	data:string,

	/**aes 加密算法使用的 key*/ 
	key:string,

	/**aes 加密算法使用的偏移量*/ 
	iv:string,

	/**加密后的字符串*/ 
	value:string,

}

interface signature_aesFileSync_Params {
	/**指明加密解密功能*/ 
	action:string,

	/**要加密/解密的文件地址，要求本地路径（fs://）*/ 
	path:string,

	/**aes 加密/解密算法使用的 key*/ 
	key:string,

	/**aes 加密/解密算法使用的 iv*/ 
	iv:string,

	/**（可选项）加密/解密后的文件保存路径，要求本地路径（fs://），*/ 
	savePath?:string,

	/**AES 加密/解密后的文件绝对路径*/ 
	value:string,

}

interface kmTimer {
	/**
	 * `启动定时器`
	 * ========params==========
	 *
	 * `event` :string : 允许自定义事件
	 *
	 * `delay` :any : 延迟执行时间（秒）
	 *
	 * `interval` :any : 循环执行间隔（秒），仅crycle=true有效
	 *
	 * `crycle` :boolean : 是否循环执行
	 */
	start(params:kmTimer_start_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改循环执行时间间隔`
	 * ========params==========
	 *
	 * `event` :string : 允许自定义事件
	 *
	 * `interval` :any : 循环执行间隔（秒），仅crycle=true有效
	 */
	setInterval(params:kmTimer_setInterval_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭定时器`
	 * ========params==========
	 *
	 * `event` :string : 允许自定义事件。
	 */
	stop(params:kmTimer_stop_Params, callback?: (ret:JSON) => void):void

}
interface kmTimer_start_Params {
	/**允许自定义事件*/ 
	event:string,

	/**延迟执行时间（秒）*/ 
	delay:any,

	/**循环执行间隔（秒），仅crycle=true有效*/ 
	interval:any,

	/**是否循环执行*/ 
	crycle:boolean,

}

interface kmTimer_setInterval_Params {
	/**允许自定义事件*/ 
	event:string,

	/**循环执行间隔（秒），仅crycle=true有效*/ 
	interval:any,

}

interface kmTimer_stop_Params {
	/**允许自定义事件。*/ 
	event:string,

}

interface djyPrinter {
}
interface selectFile {
	/** 打开文件选择器*/ 
	open(callback?: (ret:JSON) => void):void

}
interface whjpdf {
	/** 打开pdf预览操作界面*/ 
	startActivity():void

}
interface codeLog {
	/** 创建指定类别的日志，并写入日志内容*/ 
	writeLog(callback?: (ret:JSON) => void):void

	/**
	 * `查询日志列表，可以指定类别和时段等筛选条件。时段条件要精确到秒，查询时段为多天时，可以只传入日期。如查询2017年4月10日一天的，类别为info的日志，指定的筛选条件为：`
	 * ========params==========
	 *
	 * `tag` :string : （可选项）日志类别名称
	 *
	 * `startTime` :string : （可选项） 开始时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd
	 *
	 * `endTime` :string : （可选项） 结束时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd
	 */
	getLogList(params:codeLog_getLogList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `批量删除指定时间段，指定类型日志。时段条件要精确到秒，查询时段为多天时，可以只传入日期。注意：删除后无法恢复，操作需谨慎。`
	 * ========params==========
	 *
	 * `tag` :string : （可选项）日志类型名称
	 *
	 * `startTime` :string : （可选项）开始时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd
	 *
	 * `endTime` :string : （可选项）结束时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd
	 */
	deleteLogs(params:codeLog_deleteLogs_Params, callback?: (ret:JSON) => void):void

}
interface codeLog_getLogList_Params {
	/**（可选项）日志类别名称*/ 
	tag?:string,

	/**（可选项） 开始时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd*/ 
	startTime?:string,

	/**（可选项） 结束时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd*/ 
	endTime?:string,

}

interface codeLog_deleteLogs_Params {
	/**（可选项）日志类型名称*/ 
	tag?:string,

	/**（可选项）开始时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd*/ 
	startTime?:string,

	/**（可选项）结束时间，日期格式为 yyyy-MM-dd HH:mm:ss或者yyyy-MM-dd*/ 
	endTime?:string,

}

interface xpCheck {
	/** 检查本机是否装了xposed框架。*/ 
	check():void

}
interface inShare {
	/**
	 * `分享多张图片到其他应用（要求用户有安装该应用并且已登录账户，才可分享成功）`
	 * ========params==========
	 *
	 * `imgPaths` :string : 要分享的图片的路径由“,”(逗号)分隔组成的字符串；要求本地路径,相对路径如：fs://、cache://，绝对路径如：var/mobile/Containers/Data/Application/...
	 *
	 * `sendPattern` :string : （可选项）分享打开其他应用的模式
	 *
	 * `app` :string : （可选项）模块提供了几个常用的分享应用。若本参数不为空则模块忽略 packageName 和 activityName 参数。
	 *
	 * `packageName` :string : （app 参数为空时 必需）分享应用的 包名（android）/bundleId（ios）。
	 *
	 * `activityName` :string : （可选项）指定分享到应用的具体页面，比如 分享到"QQ好友"。当 sendPattern 参数为“ONLY”,而 app 参数为空时 必需传该参数。**仅Android有效**
	 *
	 * `description` :string : （可选项）对分享的描述，只在个别情况下有效，比如：分享图片到“微信朋友圈”时。
	 *
	 * `dialogTitle` :string : （可选项）设置分享选择列表的标题，当sendPattern 不为“ONLY”时有用，若不设置该参数 则用户在“始终”和“仅此一次”的方式中选择始终分享应用后，再次分享时将直接分享到上次已经选择的应用。**仅Android有效，且部分机型不支持**（如 华为Honor 6A）
	 *
	 * `forResult` :boolean : （可选项）是否采用startActivityForResult的方式打开其他应用（采用该方式打开分享完成后会在回调的ret 中返回resultCode值）。**仅Android有效**
	 *
	 * `imgSetType` :any : （可选项）用于设置图片的添加方式。**仅ios有效**
	 *
	 * `needDecodePath` :boolean : （可选项）是否将图片路径转换为绝对路径，当所传 imgPaths 参数为类似“fs://cache/xx.png”的相对路径时，须设置为true。**仅ios有效**
	 */
	shareImgsTo(params:inShare_shareImgsTo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `主要用于分享文本内容到其他应用（要求用户有安装该应用并且已登录账户，才可分享成功）`
	 * ========params==========
	 *
	 * `content` :string : 要分享的文本内容。
	 *
	 * `urlScheme` :string : （可选项）当 sendPattern 参数为“ONLY” 时，ios 通过urlScheme去打开应用（只是打开应用 不做分享操作，可以事先将分享内容复制到系统剪切板让用户自己粘贴）。**仅ios有效**
	 *
	 * `sendPattern` :string : （可选项）分享打开其他应用的模式
	 *
	 * `app` :string : （可选项）模块提供了几个常用的分享应用。若本参数不为空则模块忽略 packageName activityName 和 urlScheme参数。
	 *
	 * `packageName` :string : （app 参数为空时 必需）分享应用的 包名（android）/bundleId（ios）。
	 *
	 * `activityName` :string : （可选项）指定分享到应用的具体页面，比如 分享到"QQ好友"。当 sendPattern 参数为“ONLY”,而 app 参数为空时 必需传该参数。**仅Android有效**
	 *
	 * `dialogTitle` :string : （可选项）设置分享选择列表的标题，当sendPattern 不为“ONLY”时有用，若不设置该参数 则用户在“始终”和“仅此一次”的方式中选择始终分享应用后，再次分享时将直接分享到上次已经选择的应用。**仅Android有效，且部分机型不支持**（如 华为Honor 6A）
	 *
	 * `forResult` :boolean : （可选项）是否采用startActivityForResult的方式打开其他应用（采用该方式打开分享完成后会在回调的ret 中返回resultCode值）。**仅Android有效**
	 */
	shareTextTo(params:inShare_shareTextTo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `用于**Android**手机中获取当前已安装的支持多图/文本分享的应用信息（包名/支持分享类型的页面类路径）`
	 * ========params==========
	 *
	 * `type` :string : 支持类型
	 */
	getSupportedApp(params:inShare_getSupportedApp_Params, callback?: (ret:JSON) => void):void

}
interface inShare_shareImgsTo_Params {
	/**要分享的图片的路径由“,”(逗号)分隔组成的字符串；要求本地路径,相对路径如：fs://、cache://，绝对路径如：var/mobile/Containers/Data/Application/...*/ 
	imgPaths:string,

	/**（可选项）分享打开其他应用的模式*/ 
	sendPattern?:string,

	/**（可选项）模块提供了几个常用的分享应用。若本参数不为空则模块忽略 packageName 和 activityName 参数。*/ 
	app?:string,

	/**（app 参数为空时 必需）分享应用的 包名（android）/bundleId（ios）。*/ 
	packageName:string,

	/**（可选项）指定分享到应用的具体页面，比如 分享到"QQ好友"。当 sendPattern 参数为“ONLY”,而 app 参数为空时 必需传该参数。**仅Android有效***/ 
	activityName?:string,

	/**（可选项）对分享的描述，只在个别情况下有效，比如：分享图片到“微信朋友圈”时。*/ 
	description?:string,

	/**（可选项）设置分享选择列表的标题，当sendPattern 不为“ONLY”时有用，若不设置该参数 则用户在“始终”和“仅此一次”的方式中选择始终分享应用后，再次分享时将直接分享到上次已经选择的应用。**仅Android有效，且部分机型不支持**（如 华为Honor 6A）*/ 
	dialogTitle?:string,

	/**（可选项）是否采用startActivityForResult的方式打开其他应用（采用该方式打开分享完成后会在回调的ret 中返回resultCode值）。**仅Android有效***/ 
	forResult?:boolean,

	/**（可选项）用于设置图片的添加方式。**仅ios有效***/ 
	imgSetType?:any,

	/**（可选项）是否将图片路径转换为绝对路径，当所传 imgPaths 参数为类似“fs://cache/xx.png”的相对路径时，须设置为true。**仅ios有效***/ 
	needDecodePath?:boolean,

}

interface inShare_shareTextTo_Params {
	/**要分享的文本内容。*/ 
	content:string,

	/**（可选项）当 sendPattern 参数为“ONLY” 时，ios 通过urlScheme去打开应用（只是打开应用 不做分享操作，可以事先将分享内容复制到系统剪切板让用户自己粘贴）。**仅ios有效***/ 
	urlScheme?:string,

	/**（可选项）分享打开其他应用的模式*/ 
	sendPattern?:string,

	/**（可选项）模块提供了几个常用的分享应用。若本参数不为空则模块忽略 packageName activityName 和 urlScheme参数。*/ 
	app?:string,

	/**（app 参数为空时 必需）分享应用的 包名（android）/bundleId（ios）。*/ 
	packageName:string,

	/**（可选项）指定分享到应用的具体页面，比如 分享到"QQ好友"。当 sendPattern 参数为“ONLY”,而 app 参数为空时 必需传该参数。**仅Android有效***/ 
	activityName?:string,

	/**（可选项）设置分享选择列表的标题，当sendPattern 不为“ONLY”时有用，若不设置该参数 则用户在“始终”和“仅此一次”的方式中选择始终分享应用后，再次分享时将直接分享到上次已经选择的应用。**仅Android有效，且部分机型不支持**（如 华为Honor 6A）*/ 
	dialogTitle?:string,

	/**（可选项）是否采用startActivityForResult的方式打开其他应用（采用该方式打开分享完成后会在回调的ret 中返回resultCode值）。**仅Android有效***/ 
	forResult?:boolean,

}

interface inShare_getSupportedApp_Params {
	/**支持类型*/ 
	type:string,

}

interface setJump {
	/** 打开对应设置页面*/ 
	open():void

	/** 是否开启推送通知*/ 
	isUserNotificationEnable():void

}
interface brightness {
}
interface ScreenWake {
	/** 唤醒点亮屏幕。*/ 
	addScreenWake():void

}
interface getWebUrl {
	/** 获取当前页链接的Url和标题Title*/ 
	addListener(callback?: (ret:JSON) => void):void

}
interface ftpRequest {
	/** 获取制定路径的目录*/ 
	getCatalog(callback?: (ret:JSON) => void):void

	/** 获取制定路径的目录*/ 
	download(callback?: (ret:JSON) => void):void

	/** 上传文件*/ 
	upload(callback?: (ret:JSON) => void):void

	/** 创建目录，仅支持创建文件夹*/ 
	createFolder(callback?: (ret:JSON) => void):void

	/** 删除目录文件*/ 
	destoryResource(callback?: (ret:JSON) => void):void

}
interface drawingBoard {
	/**
	 * `打开签名画板`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）签名画板的位置及尺寸
	 *
	 * `styles` :JSON : 画板画笔样式配置
	 *
	 * `fixedOn` :string : （可选项）签名画板添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:drawingBoard_open_Params):void

	/**
	 * `保存签名画板截图，**截图大小（宽高：w、h）同 open 时传入的 rect 大小（宽高：w、h）**`
	 * ========params==========
	 *
	 * `savePath` :string : 保存图片路径，要求本地路径（fs://），**iOS 平台不支持 widget 路径**
	 *
	 * `copyToAlbum` :boolean : （可选项）是否将结果同时保存到系统相册
	 *
	 * `overlay` :boolean : （可选项）保存图片时，是否将背景一起保存
	 */
	save(params:drawingBoard_save_Params, callback?: (ret:JSON) => void):void

	/** 关闭签名画板*/ 
	close():void

	/** 隐藏签名画板*/ 
	hide():void

	/** 显示已隐藏的签名画板*/ 
	show():void

	/** 撤销最新画出的笔画线条*/ 
	revoke():void

	/** 恢复刚撤销的笔画线条*/ 
	restore():void

	/** 清空画板上的所有笔画线条*/ 
	clear():void

	/**
	 * `重设画笔样式`
	 * ========params==========
	 *
	 * `color` :string : （可选项）画笔颜色，支持#、rgb、rgba
	 *
	 * `width` :number : 画笔粗细
	 */
	resetBrush(params:drawingBoard_resetBrush_Params):void

}
interface drawingBoard_open_Params {
	/**（可选项）签名画板的位置及尺寸*/ 
	rect?:JSON,

	/**画板画笔样式配置*/ 
	styles:JSON,

	/**（可选项）签名画板添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface drawingBoard_save_Params {
	/**保存图片路径，要求本地路径（fs://），**iOS 平台不支持 widget 路径***/ 
	savePath:string,

	/**（可选项）是否将结果同时保存到系统相册*/ 
	copyToAlbum?:boolean,

	/**（可选项）保存图片时，是否将背景一起保存*/ 
	overlay?:boolean,

}

interface drawingBoard_resetBrush_Params {
	/**（可选项）画笔颜色，支持#、rgb、rgba*/ 
	color?:string,

	/**画笔粗细*/ 
	width:number,

}

interface imageSelect {
}
interface m3u8CacheServer {
	/** m3u8视频下载进度监听事件*/ 
	addEventListener():void

	/**
	 * `开始下载`
	 * ========params==========
	 *
	 * `url` :string : （必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。
	 */
	start(params:m3u8CacheServer_start_Params, callback?: (ret:JSON) => void):void

	/**
	 * `暂停下载`
	 * ========params==========
	 *
	 * `url` :string : （必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。
	 */
	pause(params:m3u8CacheServer_pause_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否下载完成`
	 * ========params==========
	 *
	 * `url` :string : （必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。
	 */
	isDownloadFinish(params:m3u8CacheServer_isDownloadFinish_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取缓存大小`
	 * ========params==========
	 *
	 * `url` :string : （可选项）M3U8下载地址，不传该值则获取所有m3u8缓存的大小。
	 */
	getCacheSize(params:m3u8CacheServer_getCacheSize_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清除缓存文件`
	 * ========params==========
	 *
	 * `url` :string : （可选项）M3U8下载地址，不传该值则清除所有m3u8缓存。
	 */
	clearCache(params:m3u8CacheServer_clearCache_Params, callback?: (ret:JSON) => void):void

	/** 开启本地服务(可以多次执行，需要在合适的时机执行，保证服务不会挂掉)*/ 
	startServer(callback?: (ret:JSON) => void):void

}
interface m3u8CacheServer_start_Params {
	/**（必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。*/ 
	url:string,

}

interface m3u8CacheServer_pause_Params {
	/**（必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。*/ 
	url:string,

}

interface m3u8CacheServer_isDownloadFinish_Params {
	/**（必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。*/ 
	url:string,

}

interface m3u8CacheServer_getCacheSize_Params {
	/**（可选项）M3U8下载地址，不传该值则获取所有m3u8缓存的大小。*/ 
	url?:string,

}

interface m3u8CacheServer_clearCache_Params {
	/**（可选项）M3U8下载地址，不传该值则清除所有m3u8缓存。*/ 
	url?:string,

}

interface headphone {
	/** 设置耳机插拔事件监听者*/ 
	addHeadphonePluggedListener(callback?: (ret:JSON) => void):void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小，取值范围：0-1
	 *
	 * `type` :string : （可选项）音量类型 （**在 iOS 平台本参数无效**）
	 */
	setVolume(params:headphone_setVolume_Params):void

	/**
	 * `获取当前音量`
	 * ========params==========
	 *
	 * `type` :string : （可选项）音量类型 （**在 iOS 平台本参数无效**）
	 */
	getVolume(params:headphone_getVolume_Params, callback?: (ret:JSON) => void):void

}
interface headphone_setVolume_Params {
	/**（可选项）音量大小，取值范围：0-1*/ 
	volume?:number,

	/**（可选项）音量类型 （**在 iOS 平台本参数无效**）*/ 
	type?:string,

}

interface headphone_getVolume_Params {
	/**（可选项）音量类型 （**在 iOS 平台本参数无效**）*/ 
	type?:string,

}

interface webSocket2018 {
	/** 监听事件，收消息也是在这里处理。*/ 
	addEventListener():void

	/**
	 * `连接服务器。`
	 * ========params==========
	 *
	 * `url` :string : （必填）后台webSocket服务器地址。
	 */
	open(params:webSocket2018_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送消息`
	 * ========params==========
	 *
	 * `msg` :string : （必填）发送信息。
	 */
	send(params:webSocket2018_send_Params):void

	/** 连接服务器。*/ 
	close():void

}
interface webSocket2018_open_Params {
	/**（必填）后台webSocket服务器地址。*/ 
	url:string,

}

interface webSocket2018_send_Params {
	/**（必填）发送信息。*/ 
	msg:string,

}

interface broadcastList {
	/** 打开支持录屏直播的 App 列表页面*/ 
	open():void

}
interface moviePlayer {
	/**
	 * `打开一个自带界面的视频播放器，本播放器为全屏横屏显示，支持屏幕随设备自动旋转。用户单击播放器时，会弹出 foot 和 head 导航条，再次单击则关闭之。`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `texts` :JSON : （可选项）聊天输入框模块可配置的文本
	 *
	 * `centerPlayBtn` :JSON : （可选项）视频未播放或者视频暂停时在视频播放器中间显示（不传不显示）
	 *
	 * `styles` :JSON : （可选项）模块的样式设置
	 *
	 * `path` :string : （可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget**
	 *
	 * `showBack` :boolean : （可选项）竖屏时是否显示返回按钮 同时支持竖屏是否显示顶部导航条
	 *
	 * `isShowControlView` :boolean : （可选项）是否显示工具条
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `scalingMode` :string : （可选项）视频播放时的拉伸方式  **仅支持iOS**
	 *
	 * `autorotation` :boolean : （可选项）视频播放页面是否支持自动旋转（横竖屏），若为 false 则手动点击右下角按钮旋转
	 *
	 * `useGestureControl` :boolean : （可选项）视频播放页面是否使用手势控制 (亮度，声音，快进快退) **注意:iOS如果此参数为false,则不能拖动进度条，
	 *
	 * `seekBarDragable` :boolean : （可选项） 播放进度条是否可以拖动
	 *
	 * `videoDirection` :string : （可选项）视频方向 ，前端开发者若要使用竖屏视频竖屏全屏播放，可传入portrait实现需求，类似抖音
	 *
	 * `isShowStatusBar` :boolean : （可选项）footer和header在视频打开时是否显示
	 *
	 * `tabLayoutUse` :boolean : （可选项）是否是在tabLayout中使用，如在tabLayout中使用全屏后不可在播放控件上添加任何其他控件，不推荐在tabLayout中使用（仅android支持）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:moviePlayer_open_Params, callback?: (ret:JSON) => void):void

	/** 显示视频播放视图*/ 
	show():void

	/** 隐藏视频播放视图*/ 
	hide():void

	/** 关闭播放器*/ 
	close():void

	/** 暂停播放器*/ 
	pause():void

	/** 播放*/ 
	play():void

	/** 重新播放指定播放地址*/ 
	replay():void

	/** 判断当前是否为全屏*/ 
	isFullscreen():void

	/** 判断当前播放状态*/ 
	isPlaying():void

	/** 播放器监听事件*/ 
	addEventListener():void

	/** 该方法需要在点击back按键是调用，back键监听事件需要前端处理*/ 
	onBack():void

	/** footer和header是否显示*/ 
	setShowOrHideControlView():void

	/** 该方法用于app退入后台后调用（通过监听pause事件，仅支持Android）*/ 
	onPause():void

	/** 该方法用于从后台恢复时调用（通过监听resume事件，仅支持Android）*/ 
	onResume():void

	/** 获取当前播放位置该方法需要在视频准备结束后调用*/ 
	getCurrentPosition():void

	/** 获取播放总时长（仅支持Android）该方法需要在视频准备结束后调用*/ 
	getDuration():void

	/** 跳转到指定播放位置*/ 
	seekTo():void

	/**
	 * `视频截图`
	 * ========params==========
	 *
	 * `time` :number : 指定位置(单位为秒)
	 *
	 * `isAblum` :boolean : （可选项）是否保存相册
	 *
	 * `name` :boolean : （必选项）图片名
	 *
	 * `ret` :JSON : null
	 */
	videoCapture(params:moviePlayer_videoCapture_Params):void

	/**
	 * `设置CustomButton的隐藏与显示`
	 * ========params==========
	 *
	 * `isShow` :boolean : 是否显示
	 *
	 * `array` :Array : 需要显示或隐藏的按钮编号的数组
	 */
	setCustomButtons(params:moviePlayer_setCustomButtons_Params):void

	/**
	 * `设置进度条是否能拖动`
	 * ========params==========
	 *
	 * `seekBarDragable` :boolean : 进度条能否拖动
	 */
	setSeekBarDragable(params:moviePlayer_setSeekBarDragable_Params):void

}
interface moviePlayer_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）聊天输入框模块可配置的文本*/ 
	texts?:JSON,

	/**（可选项）视频未播放或者视频暂停时在视频播放器中间显示（不传不显示）*/ 
	centerPlayBtn?:JSON,

	/**（可选项）模块的样式设置*/ 
	styles?:JSON,

	/**（可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget***/ 
	path?:string,

	/**（可选项）竖屏时是否显示返回按钮 同时支持竖屏是否显示顶部导航条*/ 
	showBack?:boolean,

	/**（可选项）是否显示工具条*/ 
	isShowControlView?:boolean,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）视频播放时的拉伸方式  **仅支持iOS***/ 
	scalingMode?:string,

	/**（可选项）视频播放页面是否支持自动旋转（横竖屏），若为 false 则手动点击右下角按钮旋转*/ 
	autorotation?:boolean,

	/**（可选项）视频播放页面是否使用手势控制 (亮度，声音，快进快退) **注意:iOS如果此参数为false,则不能拖动进度条，*/ 
	useGestureControl?:boolean,

	/**（可选项） 播放进度条是否可以拖动*/ 
	seekBarDragable?:boolean,

	/**（可选项）视频方向 ，前端开发者若要使用竖屏视频竖屏全屏播放，可传入portrait实现需求，类似抖音*/ 
	videoDirection?:string,

	/**（可选项）footer和header在视频打开时是否显示*/ 
	isShowStatusBar?:boolean,

	/**（可选项）是否是在tabLayout中使用，如在tabLayout中使用全屏后不可在播放控件上添加任何其他控件，不推荐在tabLayout中使用（仅android支持）*/ 
	tabLayoutUse?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface moviePlayer_videoCapture_Params {
	/**指定位置(单位为秒)*/ 
	time:number,

	/**（可选项）是否保存相册*/ 
	isAblum?:boolean,

	/**（必选项）图片名*/ 
	name:boolean,

	/**null*/ 
	ret:JSON,

}

interface moviePlayer_setCustomButtons_Params {
	/**是否显示*/ 
	isShow:boolean,

	/**需要显示或隐藏的按钮编号的数组*/ 
	array:Array,

}

interface moviePlayer_setSeekBarDragable_Params {
	/**进度条能否拖动*/ 
	seekBarDragable:boolean,

}

interface vrPlayer {
	/** 监听手机不支持某互动类型（运动｜触摸｜运动&触摸）*/ 
	addEventListener(callback?: (ret:JSON) => void):void

	/**
	 * `播放vr视频`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `url` :string : （必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、http:// (暂仅支持mp4，请开发者自行控制)
	 *
	 * `interactive` :number : （可选项）设置视频的互动类型（0：运动 1：触摸 2：运动&触摸）
	 *
	 * `display` :number : （可选项）设置视频显示类型（0：正常 1：双镜头）
	 *
	 * `projection` :number : （可选项）设置视频投影类型（0：球体 1：圆顶180 2：圆顶230 3：圆顶向上180 4：圆顶向上230 5：立体 6:平面铺满 7:平面剪裁 8:平面全铺）
	 */
	openVrPlayer(params:vrPlayer_openVrPlayer_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频的互动`
	 * ========params==========
	 *
	 * `interactive` :number : （可选项）设置视频的互动类型（0：运动 1：触摸 2：运动&触摸）
	 */
	switchInteractive(params:vrPlayer_switchInteractive_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频的显示模式`
	 * ========params==========
	 *
	 * `display` :number : （可选项）设置视频显示类型（0：正常 1：双镜头）
	 */
	switchDisplay(params:vrPlayer_switchDisplay_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频的影像模式`
	 * ========params==========
	 *
	 * `projection` :number : （可选项）设置视频投影类型（0：球体 1：圆顶180 2：圆顶230 3：圆顶向上180 4：圆顶向上230 5：立体 6:平面铺满 7:平面剪裁 8:平面全铺）
	 */
	switchProjection(params:vrPlayer_switchProjection_Params, callback?: (ret:JSON) => void):void

	/** 关闭*/ 
	closeVrPlayer(callback?: (ret:JSON) => void):void

	/** 获取视频的时长*/ 
	getDuration(callback?: (ret:JSON) => void):void

	/** 获取已经播放的时长*/ 
	getCurrentPosition(callback?: (ret:JSON) => void):void

	/**
	 * `设置播放进度位置(请根据视频最大时长进行参数控制传入)`
	 * ========params==========
	 *
	 * `process` :number : （必填项）设置视频需要播放的时长
	 */
	seekTo(params:vrPlayer_seekTo_Params):void

}
interface vrPlayer_openVrPlayer_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、http:// (暂仅支持mp4，请开发者自行控制)*/ 
	url:string,

	/**（可选项）设置视频的互动类型（0：运动 1：触摸 2：运动&触摸）*/ 
	interactive?:number,

	/**（可选项）设置视频显示类型（0：正常 1：双镜头）*/ 
	display?:number,

	/**（可选项）设置视频投影类型（0：球体 1：圆顶180 2：圆顶230 3：圆顶向上180 4：圆顶向上230 5：立体 6:平面铺满 7:平面剪裁 8:平面全铺）*/ 
	projection?:number,

}

interface vrPlayer_switchInteractive_Params {
	/**（可选项）设置视频的互动类型（0：运动 1：触摸 2：运动&触摸）*/ 
	interactive?:number,

}

interface vrPlayer_switchDisplay_Params {
	/**（可选项）设置视频显示类型（0：正常 1：双镜头）*/ 
	display?:number,

}

interface vrPlayer_switchProjection_Params {
	/**（可选项）设置视频投影类型（0：球体 1：圆顶180 2：圆顶230 3：圆顶向上180 4：圆顶向上230 5：立体 6:平面铺满 7:平面剪裁 8:平面全铺）*/ 
	projection?:number,

}

interface vrPlayer_seekTo_Params {
	/**（必填项）设置视频需要播放的时长*/ 
	process:number,

}

interface monitorFilesChange {
	/**
	 * `文件监听（文件里面内容改变的监听）`
	 * ========params==========
	 *
	 * `path` :string : 监听的文件的路径；支持fs://
	 */
	fileListener(params:monitorFilesChange_fileListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `文件夹监听（文件夹里面的文件增加还是减少）（仅iOS支持）`
	 * ========params==========
	 *
	 * `path` :string : 监听的文件夹的路径；支持fs://
	 */
	folderListener(params:monitorFilesChange_folderListener_Params, callback?: (ret:JSON) => void):void

	/** 取消监听（仅android支持）*/ 
	stopListener():void

}
interface monitorFilesChange_fileListener_Params {
	/**监听的文件的路径；支持fs://*/ 
	path:string,

}

interface monitorFilesChange_folderListener_Params {
	/**监听的文件夹的路径；支持fs://*/ 
	path:string,

}

interface dlna {
	/** 搜索设备*/ 
	startSearch():void

	/**
	 * `开始投屏`
	 * ========params==========
	 *
	 * `xh` :number : （必填项）设备序号(扫描设备返回结果序号)。
	 *
	 * `url` :string : （必填项）需要播放视频的视频地址(仅支持http协议的mp4类型视频，请开发者自行控制传入值)。
	 */
	startDLNA(params:dlna_startDLNA_Params, callback?: (ret:JSON) => void):void

	/** 退出投屏*/ 
	stopDLNA(callback?: (ret:JSON) => void):void

	/** 暂停播放*/ 
	pause(callback?: (ret:JSON) => void):void

	/** 开始播放*/ 
	play(callback?: (ret:JSON) => void):void

	/**
	 * `设置进度`
	 * ========params==========
	 *
	 * `process` :number : （必填项）需要跳转的进度值(单位是秒)。
	 */
	seek(params:dlna_seek_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （必填项）设置视频音量(0-100)。
	 */
	volume(params:dlna_volume_Params, callback?: (ret:JSON) => void):void

	/**
	 * `切换视频地址`
	 * ========params==========
	 *
	 * `url` :string : （必填项）需要播放视频的视频地址(仅支持http协议的mp4类型视频，请开发者自行控制传入值)。
	 */
	playUrl(params:dlna_playUrl_Params, callback?: (ret:JSON) => void):void

}
interface dlna_startDLNA_Params {
	/**（必填项）设备序号(扫描设备返回结果序号)。*/ 
	xh:number,

	/**（必填项）需要播放视频的视频地址(仅支持http协议的mp4类型视频，请开发者自行控制传入值)。*/ 
	url:string,

}

interface dlna_seek_Params {
	/**（必填项）需要跳转的进度值(单位是秒)。*/ 
	process:number,

}

interface dlna_volume_Params {
	/**（必填项）设置视频音量(0-100)。*/ 
	volume:number,

}

interface dlna_playUrl_Params {
	/**（必填项）需要播放视频的视频地址(仅支持http协议的mp4类型视频，请开发者自行控制传入值)。*/ 
	url:string,

}

interface playText {
	/**
	 * `播放文本`
	 * ========params==========
	 *
	 * `text` :string : 语音播放内容文本。
	 *
	 * `rate` :number : 播放速率
	 */
	play(params:playText_play_Params):void

	/** 继续播放文本*/ 
	continuePlay():void

	/** 停止播放*/ 
	stopPlay():void

	/** 暂停播放文本*/ 
	pausePlay():void

	/** 获取播放状态*/ 
	playState(callback?: (ret:JSON) => void):void

	/**
	 * `监听事件`
	 * ========params==========
	 *
	 * `name` :string : 事件名称。
	 */
	addEventListener(params:playText_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface playText_play_Params {
	/**语音播放内容文本。*/ 
	text:string,

	/**播放速率*/ 
	rate:number,

}

interface playText_addEventListener_Params {
	/**事件名称。*/ 
	name:string,

}

interface yyWebImage {
	/**
	 * `渐进式加载图片`
	 * ========params==========
	 *
	 * `rect` :string : （必填项）视频资源地址，支持http://
	 */
	openWebP(params:yyWebImage_openWebP_Params):void

	/**
	 * `普通URL加载图片`
	 * ========params==========
	 *
	 * `rect` :string : （必填项）视频资源地址，支持http:// 和本地路径
	 */
	openPictureWithURL(params:yyWebImage_openPictureWithURL_Params):void

	/** 渐进式加载图片*/ 
	closePicture():void

	/** 图片是否打开*/ 
	isOpen(callback?: (ret:JSON) => void):void

}
interface yyWebImage_openWebP_Params {
	/**（必填项）视频资源地址，支持http://*/ 
	rect:string,

}

interface yyWebImage_openPictureWithURL_Params {
	/**（必填项）视频资源地址，支持http:// 和本地路径*/ 
	rect:string,

}

interface phoneInfoMore {
	/** 获取手机基本信息*/ 
	getBaseInfo(callback?: (ret:JSON) => void):void

	/** 获取手机MAC地址(新)*/ 
	getMacAddressNew(callback?: (ret:JSON) => void):void

	/** 判断是否是模拟器*/ 
	isEmulator(callback?: (ret:JSON) => void):void

}
interface webServer {
	/**
	 * `开启服务。`
	 * ========params==========
	 *
	 * `serverDirectory` :string : 供其他设备访问操作的目录，如：fs://
	 *
	 * `allowedFileExtensions` :Array : （可选项）允许操作的文件后缀名，如["doc","docx","xls","xlsx","txt","pdf"]。若不传表示所有文件
	 *
	 * `title` :string : 标题
	 *
	 * `footer` :string : 脚标
	 *
	 * `prologue` :string : 序
	 */
	start(params:webServer_start_Params, callback?: (ret:JSON) => void):void

	/** 停止服务*/ 
	stop():void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `target` :string : 事件名称
	 */
	addEventListener(params:webServer_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface webServer_start_Params {
	/**供其他设备访问操作的目录，如：fs://*/ 
	serverDirectory:string,

	/**（可选项）允许操作的文件后缀名，如["doc","docx","xls","xlsx","txt","pdf"]。若不传表示所有文件*/ 
	allowedFileExtensions?:Array,

	/**标题*/ 
	title:string,

	/**脚标*/ 
	footer:string,

	/**序*/ 
	prologue:string,

}

interface webServer_addEventListener_Params {
	/**事件名称*/ 
	target:string,

}

interface downloadManager2 {
	/** 下载。*/ 
	download(callback?: (ret:JSON) => void):void

}
interface playModule {
	/**
	 * `初始化视频播放配置`
	 * ========params==========
	 *
	 * `ttf` :string : （可选项）设置标题显示文字字体文件路径，仅支持widget://
	 *
	 * `logo` :string : （可选项）右上角设置logo(图片类型：png)；支持fs://,widget://
	 *
	 * `background` :string : （可选项）视频播放前的图片显示(图片类型：jpg,png,gif)；支持fs://,widget://
	 *
	 * `FullScreenViewIsFont` :boolean : （可选项）全屏view是否显示最上层,true:是|false:否，仅ios有效（为fasle时可通过openframe自定义按钮在播放器上层；注意，未开启沉侵式的App请不要设置该参数。）
	 *
	 * `isShowBottomBtn` :boolean : （可选项）全屏时是否隐藏手机底部虚拟键，仅Android有效。
	 *
	 * `isMultiWindow` :boolean : （可选项）是否开启多窗口模式(true 开启 false 不开启)。
	 *
	 * `loading` :string : （可选项）加载中的gif动画图片接口(图片类型：gif)；支持fs://,widget://
	 *
	 * `logoLeftTop` :string : （可选项）左上角设置logo(图片类型：png)；支持fs://,widget://
	 *
	 * `logoLeftBottom` :string : （可选项）左下角设置logo(图片类型：png)；支持fs://,widget://
	 *
	 * `logoRightBottom` :string : （可选项）右下角设置logo(图片类型：png)；支持fs://,widget://
	 *
	 * `placeholderText` :string : （可选项）发送弹幕输入框默认提示内容。
	 *
	 * `isShowLock` :boolean : （可选项）全屏下是否显示锁屏按钮(true 显示 false 不显示)。
	 */
	init(params:playModule_init_Params):void

	/**
	 * `播放本地视频、网络视频、rtmp直播流等`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `url` :string : （必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、rtmp://、http://
	 *
	 * `title` :string : （可选项）不填时标题默认显示url地址
	 *
	 * `defaultBtn` :boolean : （可选项）设置本次播放是否显示默认自带的播放控制按钮
	 *
	 * `enableFull` :boolean : （可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。
	 *
	 * `enableFullAutoClose` :boolean : （可选项）默认全屏时播放时，返回按钮和退出全屏点击时是否关闭播放器(true:关闭 false:不关闭)
	 *
	 * `isTopView` :boolean : （可选项）是否显示顶部标题栏
	 *
	 * `isFullBtn` :boolean : （可选项）小窗口是否显示进入全屏按钮
	 *
	 * `isBackBtn` :boolean : （可选项）小窗口是否显示返回按钮
	 *
	 * `scalingMode` :boolean : （可选项）视频播放显示铺满模式（1:无缩放, 2:适应大小模式, 3:充满可视范围，可能会被裁剪, 4:缩放到充满视图）
	 *
	 * `fullscreenMode` :string : （可选项）设置全屏按钮控制全屏显示模式是横屏还是竖屏 竖屏:PORTRAIT ; 横屏:LANDSCAPE
	 *
	 * `isShowProcessView` :boolean : （可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动默认为false】
	 *
	 * `isShowTimeLable` :boolean : （可选项）是否显示播放时间 (显示:true ; 不显示:false)
	 *
	 * `isLive` :boolean : （可选项）是否直播视频源 （直播：true；点播：false）
	 *
	 * `isSmallOpenGesture` :boolean : （可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）
	 *
	 * `isOpenGesture` :boolean : （可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）
	 *
	 * `process` :number : （必填项）设置视频需要播放的时长
	 *
	 * `isAutoPlay` :boolean : （可选项）是否自动播放 (自动播放:true ; 不自动播放:false)
	 *
	 * `isPlayMusic` :boolean : （可选项）是否仅播放音频 (仅播放音频:true ; 视频播放:false)
	 *
	 * `isLoop` :boolean : （可选项）是否循环播放 (循环播放:true ; 禁止循环播放:false)
	 *
	 * `urlDatas` :Array : （可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。
	 *
	 * `isSmallShowQxd` :boolean : （可选项）是否窗口时显示清晰度选择按钮 (数组内容大于1条记录，清晰度切换按钮才会显示；显示:true ; 不显示:false)
	 *
	 * `isMute` :boolean : （可选项）是否静音播放 (开启静音:true ; 关闭静音:false)
	 *
	 * `isShowDanmu` :boolean : （可选项）是否开启弹幕功能 (开启:true ; 不开启:false)
	 *
	 * `isLocalCache` :boolean : （可选项）是否本地缓存视频,音频;直播类不能缓存,开发者自行控制;(备注:缓存文件在cache://文件目录下,如果直播乱开启改参数会导致播放异常). (开启:true ; 不开启:false)
	 *
	 * `isShowFenxiang` :boolean : （可选项）全屏是否显示分享按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowMore` :boolean : （可选项）全屏是否显示更多按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowTouping` :boolean : （可选项）全屏是否显示投屏按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowXuanji` :boolean : （可选项）是否显示选集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowNext` :boolean : （可选项）是否显示下一集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowPre` :boolean : （可选项）是否显示上一集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallImmerse` :boolean : （可选项）窗口播放顶部控制栏是否沉侵式 (显示:true ; 隐藏:false)
	 *
	 * `isLongShowBackBtn` :boolean : （可选项）窗口模式下是否长时间显示返回按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowFenxiang` :boolean : （可选项）窗口是否显示分享按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowMore` :boolean : （可选项）窗口是否显示更多按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowTouping` :boolean : （可选项）窗口是否显示投屏按钮 (显示:true ; 隐藏:false)
	 *
	 * `isOpenDanmu` :boolean : （可选项）是否打开弹幕功能 (打开:true ; 关闭:false)
	 *
	 * `singlePageModule` :boolean : （可选项）是否打开单页面播放模式。（当设置为true时，本页面播放器的接口只能在当前页面调用，不能跨页面；同时本页面开启多窗口模式无效）
	 *
	 * `isShowNetworkSpeed` :boolean : （可选项）是否在缓冲的时候显示网速
	 */
	play(params:playModule_play_Params, callback?: (ret:JSON) => void):void

	/**
	 * `同一个页面，已经调用play接口后，切换视频地址时调用（前提条件，同一界面已经调用过play接口）。`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `url` :string : （必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、rtmp://、http://
	 *
	 * `title` :string : （可选项）不填时标题默认显示url播放文件名
	 *
	 * `defaultBtn` :boolean : （可选项）设置本次播放是否显示默认自带的播放控制按钮
	 *
	 * `isLive` :boolean : （可选项）是否直播视频源 （直播：true；点播：false）
	 *
	 * `isSmallOpenGesture` :boolean : （可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）
	 *
	 * `isOpenGesture` :boolean : （可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）
	 *
	 * `process` :number : （必填项）设置视频需要播放的时长
	 *
	 * `isAutoPlay` :boolean : （可选项）是否自动播放 (自动播放:true ; 不自动播放:false)
	 *
	 * `isLoop` :boolean : （可选项）是否循环播放 (循环播放:true ; 禁止循环播放:false)
	 *
	 * `isShowProcessView` :boolean : （可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动默认为false】
	 *
	 * `isShowTimeLable` :boolean : （可选项）是否显示播放时间 (显示:true ; 不显示:false)
	 *
	 * `urlDatas` :Array : （可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。
	 *
	 * `isSmallShowQxd` :boolean : （可选项）是否窗口时显示清晰度选择按钮 (数组内容大于1条记录，清晰度切换按钮才会显示；显示:true ; 不显示:false)
	 *
	 * `isMute` :boolean : （可选项）是否静音播放 (开启静音:true ; 关闭静音:false)
	 *
	 * `isShowDanmu` :boolean : （可选项）是否开启弹幕功能 (开启:true ; 不开启:false)
	 *
	 * `isLocalCache` :boolean : （可选项）是否本地缓存视频,音频;直播类不能缓存,开发者自行控制;(备注:缓存文件在cache://文件目录下,如果直播乱开启改参数会导致播放异常). (开启:true ; 不开启:false)
	 *
	 * `isShowFenxiang` :boolean : （可选项）全屏是否显示分享按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowMore` :boolean : （可选项）全屏是否显示更多按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowTouping` :boolean : （可选项）全屏是否显示投屏按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowXuanji` :boolean : （可选项）是否显示选集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowNext` :boolean : （可选项）是否显示下一集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isShowPre` :boolean : （可选项）是否显示上一集按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallImmerse` :boolean : （可选项）窗口播放顶部控制栏是否沉侵式 (显示:true ; 隐藏:false)
	 *
	 * `isLongShowBackBtn` :boolean : （可选项）窗口模式下是否长时间显示返回按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowFenxiang` :boolean : （可选项）窗口是否显示分享按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowMore` :boolean : （可选项）窗口是否显示更多按钮 (显示:true ; 隐藏:false)
	 *
	 * `isSmallShowTouping` :boolean : （可选项）窗口是否显示投屏按钮 (显示:true ; 隐藏:false)
	 *
	 * `isOpenDanmu` :boolean : （可选项）是否打开弹幕功能 (打开:true ; 关闭:false)
	 *
	 * `isShowNetworkSpeed` :boolean : （可选项）是否在缓冲的时候显示网速
	 */
	playUrl(params:playModule_playUrl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `暂停播放`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	pause(params:playModule_pause_Params, callback?: (ret:JSON) => void):void

	/**
	 * `暂停后开始播放`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	start(params:playModule_start_Params, callback?: (ret:JSON) => void):void

	/**
	 * `停止播放`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	stop(params:playModule_stop_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取视频的时长`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	getDuration(params:playModule_getDuration_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取已经播放的时长`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	getCurrentPosition(params:playModule_getCurrentPosition_Params, callback?: (ret:JSON) => void):void

	/**
	 * `全屏播放`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	full(params:playModule_full_Params, callback?: (ret:JSON) => void):void

	/**
	 * `退出全屏`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	unfull(params:playModule_unfull_Params, callback?: (ret:JSON) => void):void

	/**
	 * `视频播放完监听事件`
	 * ========params==========
	 *
	 * `name` :string : 监听事件名称,可以设置的播放界面监听类型有：playEnd(播放结束),playError(播放异常),pause(暂停),play(播放),backBtn(小窗口返回按钮),full(进入全屏按钮),unfull(退出全屏按钮),click(视频区域点击监听),bufferingStart(缓冲开始),bufferingEnd(缓冲结束), onPrepared(视频准备完成),onChangeQxd(清晰度改变), fenxiangClick(分析按钮), moreClick(更多按钮), toupingClick(投屏按钮), xuanjiClick(选集按钮), nextClick(下一集按钮), preClick(上一级按钮), sendDanmuMessage(发送弹幕输入框发送内容),danmuClick(弹幕开关按钮点击)
	 */
	addEventListener(params:playModule_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取是否全屏播放状态`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	isFullScreen(params:playModule_isFullScreen_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置播放进度位置(请根据视频最大时长进行参数控制传入)`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `process` :number : （必填项）设置视频需要播放的时长
	 */
	seekTo(params:playModule_seekTo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置播音量`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `volume` :number : （必填项）0-100
	 */
	setVolume(params:playModule_setVolume_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏播放器`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	hidePlayer(params:playModule_hidePlayer_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示播放器`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	showPlayer(params:playModule_showPlayer_Params, callback?: (ret:JSON) => void):void

	/**
	 * `倍速播放`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `speed` :number : （必填项）设置视频播放倍速(取值范围 0.1-1.9)
	 */
	setSpeed(params:playModule_setSpeed_Params, callback?: (ret:JSON) => void):void

	/** 清除页面所有打开的播放器接口(执行该接口后，返回index会归零)*/ 
	cleanPlayers():void

	/**
	 * `更新清晰度选择列表地址(必须和play或者playUrl接口传的数组长度一致)。`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `urlDatas` :Array : （可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。
	 */
	updateUrlDatas(params:playModule_updateUrlDatas_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送一条弹幕信息`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `text` :string : （必填项）弹幕文字内容
	 *
	 * `color` :string : （可选项）弹幕文字显示颜色代码
	 */
	sendDanmu(params:playModule_sendDanmu_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送多条弹幕信息。`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `isLoop` :boolean : （可选项）天际的全部数据是否循环播放(循环:true，不循环:false)
	 *
	 * `data` :Array : （必填项）多条弹幕信息记录。
	 */
	sendDanmuList(params:playModule_sendDanmuList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取音轨数量。`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	getAudioTrack(params:playModule_getAudioTrack_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置音轨(原音|伴音)[仅对多音轨有效]`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `trackId` :number : （可选项）音轨序号(双音轨>1:原音 2伴音)
	 */
	setAudioTrack(params:playModule_setAudioTrack_Params, callback?: (ret:JSON) => void):void

	/**
	 * `静音开关切换`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 *
	 * `isMute` :boolean : （可选项）是否静音(开启静音:true 关闭静音:false)
	 */
	setMute(params:playModule_setMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `截图`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放器序号
	 */
	takeSnapshot(params:playModule_takeSnapshot_Params, callback?: (ret:JSON) => void):void

}
interface playModule_init_Params {
	/**（可选项）设置标题显示文字字体文件路径，仅支持widget://*/ 
	ttf?:string,

	/**（可选项）右上角设置logo(图片类型：png)；支持fs://,widget://*/ 
	logo?:string,

	/**（可选项）视频播放前的图片显示(图片类型：jpg,png,gif)；支持fs://,widget://*/ 
	background?:string,

	/**（可选项）全屏view是否显示最上层,true:是|false:否，仅ios有效（为fasle时可通过openframe自定义按钮在播放器上层；注意，未开启沉侵式的App请不要设置该参数。）*/ 
	FullScreenViewIsFont?:boolean,

	/**（可选项）全屏时是否隐藏手机底部虚拟键，仅Android有效。*/ 
	isShowBottomBtn?:boolean,

	/**（可选项）是否开启多窗口模式(true 开启 false 不开启)。*/ 
	isMultiWindow?:boolean,

	/**（可选项）加载中的gif动画图片接口(图片类型：gif)；支持fs://,widget://*/ 
	loading?:string,

	/**（可选项）左上角设置logo(图片类型：png)；支持fs://,widget://*/ 
	logoLeftTop?:string,

	/**（可选项）左下角设置logo(图片类型：png)；支持fs://,widget://*/ 
	logoLeftBottom?:string,

	/**（可选项）右下角设置logo(图片类型：png)；支持fs://,widget://*/ 
	logoRightBottom?:string,

	/**（可选项）发送弹幕输入框默认提示内容。*/ 
	placeholderText?:string,

	/**（可选项）全屏下是否显示锁屏按钮(true 显示 false 不显示)。*/ 
	isShowLock?:boolean,

}

interface playModule_play_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、rtmp://、http://*/ 
	url:string,

	/**（可选项）不填时标题默认显示url地址*/ 
	title?:string,

	/**（可选项）设置本次播放是否显示默认自带的播放控制按钮*/ 
	defaultBtn?:boolean,

	/**（可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。*/ 
	enableFull?:boolean,

	/**（可选项）默认全屏时播放时，返回按钮和退出全屏点击时是否关闭播放器(true:关闭 false:不关闭)*/ 
	enableFullAutoClose?:boolean,

	/**（可选项）是否显示顶部标题栏*/ 
	isTopView?:boolean,

	/**（可选项）小窗口是否显示进入全屏按钮*/ 
	isFullBtn?:boolean,

	/**（可选项）小窗口是否显示返回按钮*/ 
	isBackBtn?:boolean,

	/**（可选项）视频播放显示铺满模式（1:无缩放, 2:适应大小模式, 3:充满可视范围，可能会被裁剪, 4:缩放到充满视图）*/ 
	scalingMode?:boolean,

	/**（可选项）设置全屏按钮控制全屏显示模式是横屏还是竖屏 竖屏:PORTRAIT ; 横屏:LANDSCAPE*/ 
	fullscreenMode?:string,

	/**（可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动默认为false】*/ 
	isShowProcessView?:boolean,

	/**（可选项）是否显示播放时间 (显示:true ; 不显示:false)*/ 
	isShowTimeLable?:boolean,

	/**（可选项）是否直播视频源 （直播：true；点播：false）*/ 
	isLive?:boolean,

	/**（可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）*/ 
	isSmallOpenGesture?:boolean,

	/**（可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）*/ 
	isOpenGesture?:boolean,

	/**（必填项）设置视频需要播放的时长*/ 
	process:number,

	/**（可选项）是否自动播放 (自动播放:true ; 不自动播放:false)*/ 
	isAutoPlay?:boolean,

	/**（可选项）是否仅播放音频 (仅播放音频:true ; 视频播放:false)*/ 
	isPlayMusic?:boolean,

	/**（可选项）是否循环播放 (循环播放:true ; 禁止循环播放:false)*/ 
	isLoop?:boolean,

	/**（可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。*/ 
	urlDatas?:Array,

	/**（可选项）是否窗口时显示清晰度选择按钮 (数组内容大于1条记录，清晰度切换按钮才会显示；显示:true ; 不显示:false)*/ 
	isSmallShowQxd?:boolean,

	/**（可选项）是否静音播放 (开启静音:true ; 关闭静音:false)*/ 
	isMute?:boolean,

	/**（可选项）是否开启弹幕功能 (开启:true ; 不开启:false)*/ 
	isShowDanmu?:boolean,

	/**（可选项）是否本地缓存视频,音频;直播类不能缓存,开发者自行控制;(备注:缓存文件在cache://文件目录下,如果直播乱开启改参数会导致播放异常). (开启:true ; 不开启:false)*/ 
	isLocalCache?:boolean,

	/**（可选项）全屏是否显示分享按钮 (显示:true ; 隐藏:false)*/ 
	isShowFenxiang?:boolean,

	/**（可选项）全屏是否显示更多按钮 (显示:true ; 隐藏:false)*/ 
	isShowMore?:boolean,

	/**（可选项）全屏是否显示投屏按钮 (显示:true ; 隐藏:false)*/ 
	isShowTouping?:boolean,

	/**（可选项）是否显示选集按钮 (显示:true ; 隐藏:false)*/ 
	isShowXuanji?:boolean,

	/**（可选项）是否显示下一集按钮 (显示:true ; 隐藏:false)*/ 
	isShowNext?:boolean,

	/**（可选项）是否显示上一集按钮 (显示:true ; 隐藏:false)*/ 
	isShowPre?:boolean,

	/**（可选项）窗口播放顶部控制栏是否沉侵式 (显示:true ; 隐藏:false)*/ 
	isSmallImmerse?:boolean,

	/**（可选项）窗口模式下是否长时间显示返回按钮 (显示:true ; 隐藏:false)*/ 
	isLongShowBackBtn?:boolean,

	/**（可选项）窗口是否显示分享按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowFenxiang?:boolean,

	/**（可选项）窗口是否显示更多按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowMore?:boolean,

	/**（可选项）窗口是否显示投屏按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowTouping?:boolean,

	/**（可选项）是否打开弹幕功能 (打开:true ; 关闭:false)*/ 
	isOpenDanmu?:boolean,

	/**（可选项）是否打开单页面播放模式。（当设置为true时，本页面播放器的接口只能在当前页面调用，不能跨页面；同时本页面开启多窗口模式无效）*/ 
	singlePageModule?:boolean,

	/**（可选项）是否在缓冲的时候显示网速*/ 
	isShowNetworkSpeed?:boolean,

}

interface playModule_playUrl_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（必填项）视频资源地址，支持fs://、widget://(在 android 平台上不支持 widget)、rtmp://、http://*/ 
	url:string,

	/**（可选项）不填时标题默认显示url播放文件名*/ 
	title?:string,

	/**（可选项）设置本次播放是否显示默认自带的播放控制按钮*/ 
	defaultBtn?:boolean,

	/**（可选项）是否直播视频源 （直播：true；点播：false）*/ 
	isLive?:boolean,

	/**（可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）*/ 
	isSmallOpenGesture?:boolean,

	/**（可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）*/ 
	isOpenGesture?:boolean,

	/**（必填项）设置视频需要播放的时长*/ 
	process:number,

	/**（可选项）是否自动播放 (自动播放:true ; 不自动播放:false)*/ 
	isAutoPlay?:boolean,

	/**（可选项）是否循环播放 (循环播放:true ; 禁止循环播放:false)*/ 
	isLoop?:boolean,

	/**（可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动默认为false】*/ 
	isShowProcessView?:boolean,

	/**（可选项）是否显示播放时间 (显示:true ; 不显示:false)*/ 
	isShowTimeLable?:boolean,

	/**（可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。*/ 
	urlDatas?:Array,

	/**（可选项）是否窗口时显示清晰度选择按钮 (数组内容大于1条记录，清晰度切换按钮才会显示；显示:true ; 不显示:false)*/ 
	isSmallShowQxd?:boolean,

	/**（可选项）是否静音播放 (开启静音:true ; 关闭静音:false)*/ 
	isMute?:boolean,

	/**（可选项）是否开启弹幕功能 (开启:true ; 不开启:false)*/ 
	isShowDanmu?:boolean,

	/**（可选项）是否本地缓存视频,音频;直播类不能缓存,开发者自行控制;(备注:缓存文件在cache://文件目录下,如果直播乱开启改参数会导致播放异常). (开启:true ; 不开启:false)*/ 
	isLocalCache?:boolean,

	/**（可选项）全屏是否显示分享按钮 (显示:true ; 隐藏:false)*/ 
	isShowFenxiang?:boolean,

	/**（可选项）全屏是否显示更多按钮 (显示:true ; 隐藏:false)*/ 
	isShowMore?:boolean,

	/**（可选项）全屏是否显示投屏按钮 (显示:true ; 隐藏:false)*/ 
	isShowTouping?:boolean,

	/**（可选项）是否显示选集按钮 (显示:true ; 隐藏:false)*/ 
	isShowXuanji?:boolean,

	/**（可选项）是否显示下一集按钮 (显示:true ; 隐藏:false)*/ 
	isShowNext?:boolean,

	/**（可选项）是否显示上一集按钮 (显示:true ; 隐藏:false)*/ 
	isShowPre?:boolean,

	/**（可选项）窗口播放顶部控制栏是否沉侵式 (显示:true ; 隐藏:false)*/ 
	isSmallImmerse?:boolean,

	/**（可选项）窗口模式下是否长时间显示返回按钮 (显示:true ; 隐藏:false)*/ 
	isLongShowBackBtn?:boolean,

	/**（可选项）窗口是否显示分享按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowFenxiang?:boolean,

	/**（可选项）窗口是否显示更多按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowMore?:boolean,

	/**（可选项）窗口是否显示投屏按钮 (显示:true ; 隐藏:false)*/ 
	isSmallShowTouping?:boolean,

	/**（可选项）是否打开弹幕功能 (打开:true ; 关闭:false)*/ 
	isOpenDanmu?:boolean,

	/**（可选项）是否在缓冲的时候显示网速*/ 
	isShowNetworkSpeed?:boolean,

}

interface playModule_pause_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_start_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_stop_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_getDuration_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_getCurrentPosition_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_full_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_unfull_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_addEventListener_Params {
	/**监听事件名称,可以设置的播放界面监听类型有：playEnd(播放结束),playError(播放异常),pause(暂停),play(播放),backBtn(小窗口返回按钮),full(进入全屏按钮),unfull(退出全屏按钮),click(视频区域点击监听),bufferingStart(缓冲开始),bufferingEnd(缓冲结束), onPrepared(视频准备完成),onChangeQxd(清晰度改变), fenxiangClick(分析按钮), moreClick(更多按钮), toupingClick(投屏按钮), xuanjiClick(选集按钮), nextClick(下一集按钮), preClick(上一级按钮), sendDanmuMessage(发送弹幕输入框发送内容),danmuClick(弹幕开关按钮点击)*/ 
	name:string,

}

interface playModule_isFullScreen_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_seekTo_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（必填项）设置视频需要播放的时长*/ 
	process:number,

}

interface playModule_setVolume_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（必填项）0-100*/ 
	volume:number,

}

interface playModule_hidePlayer_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_showPlayer_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_setSpeed_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（必填项）设置视频播放倍速(取值范围 0.1-1.9)*/ 
	speed:number,

}

interface playModule_updateUrlDatas_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（可选项）清晰度按钮的自定义(数组内容大于1条记录，清晰度切换按钮才会显示，不支持直播链接的组装切换，不能和url接口参数同时存在)。*/ 
	urlDatas?:Array,

}

interface playModule_sendDanmu_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（必填项）弹幕文字内容*/ 
	text:string,

	/**（可选项）弹幕文字显示颜色代码*/ 
	color?:string,

}

interface playModule_sendDanmuList_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（可选项）天际的全部数据是否循环播放(循环:true，不循环:false)*/ 
	isLoop?:boolean,

	/**（必填项）多条弹幕信息记录。*/ 
	data:Array,

}

interface playModule_getAudioTrack_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface playModule_setAudioTrack_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（可选项）音轨序号(双音轨>1:原音 2伴音)*/ 
	trackId?:number,

}

interface playModule_setMute_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

	/**（可选项）是否静音(开启静音:true 关闭静音:false)*/ 
	isMute?:boolean,

}

interface playModule_takeSnapshot_Params {
	/**（可选项）播放器序号*/ 
	index?:number,

}

interface circleMenu {
}
interface docInteraction {
}
interface appUtils {
	/** 调取页面到前台*/ 
	bringAppToFront(callback?: (ret:JSON) => void):void

	/** 关闭页面管理者。*/ 
	stopPageManager(callback?: (ret:JSON) => void):void

	/** 开机启动,设置为开机自动启动需要手机授权开机自动启动权限。*/ 
	openStart(callback?: (ret:JSON) => void):void

	/** 获取手机应用*/ 
	getApps(callback?: (ret:JSON) => void):void

	/** 应用退到后台*/ 
	moveAppToBack(callback?: (ret:JSON) => void):void

	/** 获取状态栏高度*/ 
	getStateViewHeight(callback?: (ret:JSON) => void):void

	/** 获取底部虚拟按键高度*/ 
	getBottomViewHeight(callback?: (ret:JSON) => void):void

	/** 跳转应用市场评价*/ 
	toEvaluate(callback?: (ret:JSON) => void):void

	/** 获取已安装的应用市场*/ 
	getInstallAppStores(callback?: (ret:JSON) => void):void

	/** 创建快捷方式*/ 
	addShortcut(callback?: (ret:JSON) => void):void

	/** 添加悬浮框*/ 
	addFloadWindow(callback?: (ret:JSON) => void):void

	/** 移除悬浮框*/ 
	removeFloadWindow(callback?: (ret:JSON) => void):void

	/** 检测悬浮框权限，权限未开启则只能在应用内显示*/ 
	checkFloadPermission(callback?: (ret:JSON) => void):void

	/** 添加gps开关监听*/ 
	setGpsListener(callback?: (ret:JSON) => void):void

	/** 获取gps状态*/ 
	getGpsStatus(callback?: (ret:JSON) => void):void

	/** 检查通知权限*/ 
	checkNotificationPermission(callback?: (ret:JSON) => void):void

	/** 跳转应用详情页面，可进行权限设置*/ 
	gotoAppDetail(callback?: (ret:JSON) => void):void

	/** 跳转系统设置页面*/ 
	gotoSysSetPage(callback?: (ret:JSON) => void):void

	/** 获取设备信息*/ 
	getDeviceInfo(callback?: (ret:JSON) => void):void

	/** 获取设备信号*/ 
	getDeviceDbm(callback?: (ret:JSON) => void):void

	/** 获取屏幕宽高*/ 
	getScreenSize(callback?: (ret:JSON) => void):void

	/** 获取sim卡信息*/ 
	getSimInfo(callback?: (ret:JSON) => void):void

	/** 判断是否为系统应用*/ 
	isSystemApp(callback?: (ret:JSON) => void):void

	/** 获取应用签名*/ 
	getSignature(callback?: (ret:JSON) => void):void

	/** 设置壁纸*/ 
	setWallpaper(callback?: (ret:JSON) => void):void

	/** 安装应用包*/ 
	installApk():void

	/** 卸载应用*/ 
	unInstallApk():void

}
interface codeScan {
	/** 二维码,条形码扫描*/ 
	scan(callback?: (ret:JSON) => void):void

	/** 获取条形码base64图片*/ 
	getBarCode(callback?: (ret:JSON) => void):void

	/** 获取二维码base64图片*/ 
	getQRCode(callback?: (ret:JSON) => void):void

}
interface jumpbrowser {
}
interface videoTrans {
	/** 获取进度。*/ 
	progress():void

	/** 取消。*/ 
	cancel():void

	/** 清除mp4视频文件本地缓存。*/ 
	clearCache():void

}
interface zySmallVideo {
}
interface keepingAppAlive {
	/** 尽量保活进程不被杀死的方法。*/ 
	startKeepAlive(callback?: (ret:JSON) => void):void

	/** 设置闹钟的时间*/ 
	setAlarm(callback?: (ret:JSON) => void):void

	/** 获取所有的闹钟*/ 
	getAlarm():void

	/**
	 * `移除闹钟`
	 * ========params==========
	 *
	 * `alarmList` :Array : (可选项)需要移除的闹钟的数据；如果无此项，删除所有的闹钟
	 */
	removeAlarm(params:keepingAppAlive_removeAlarm_Params, callback?: (ret:JSON) => void):void

}
interface keepingAppAlive_removeAlarm_Params {
	/**(可选项)需要移除的闹钟的数据；如果无此项，删除所有的闹钟*/ 
	alarmList?:Array,

}

interface androidShortcut {
	/**
	 * `创建快捷方式`
	 * ========params==========
	 *
	 * `name` :string : 快捷方式名称
	 */
	createShortcut(params:androidShortcut_createShortcut_Params, callback?: (ret:JSON) => void):void

}
interface androidShortcut_createShortcut_Params {
	/**快捷方式名称*/ 
	name:string,

}

interface iconToImage {
	/**
	 * `执行转换并保存`
	 * ========params==========
	 *
	 * `fontFile` :string : 字体文件路径，支持ttf格式，相对路径格式，如"../../css/iconfont.ttf"
	 *
	 * `upFile` :string : 更新描述文件保存路径，图片不需要每次都去转换保存，只有发生了变化才更新，绝对路径格式，如"box://image/iconToImageUp.json"
	 *
	 * `fontList` :Array : iconfont图片数组,如没有请写 fontList:[],
	 *
	 * `svgList` :Array : svg图片数组,如没有请写 svgList:[],
	 */
	go(params:iconToImage_go_Params, callback?: (ret:JSON) => void):void

}
interface iconToImage_go_Params {
	/**字体文件路径，支持ttf格式，相对路径格式，如"../../css/iconfont.ttf"*/ 
	fontFile:string,

	/**更新描述文件保存路径，图片不需要每次都去转换保存，只有发生了变化才更新，绝对路径格式，如"box://image/iconToImageUp.json"*/ 
	upFile:string,

	/**iconfont图片数组,如没有请写 fontList:[],*/ 
	fontList:Array,

	/**svg图片数组,如没有请写 svgList:[],*/ 
	svgList:Array,

}

interface photoPicker {
	/** 打开添加相册界面*/ 
	addPhoto(callback?: (ret:JSON) => void):void

	/**
	 * `删除选取的相册的相册或视频`
	 * ========params==========
	 *
	 * `name` :string : 从相册中选取内容的名字。
	 */
	delectPhoto(params:photoPicker_delectPhoto_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取选取相册或视频的名字和地址`
	 * ========params==========
	 *
	 * `name` :string : 
	 */
	selectInfo(params:photoPicker_selectInfo_Params, callback?: (ret:JSON) => void):void

}
interface photoPicker_delectPhoto_Params {
	/**从相册中选取内容的名字。*/ 
	name:string,

}

interface photoPicker_selectInfo_Params {
	/***/ 
	name:string,

}

interface changeIcon {
}
interface netTime {
	/** 同步获取时间(时间戳)。如果无网络，返回的是0*/ 
	getTime():void

}
interface promotionLink {
	/** 读取apk中的渠道字符串，前提是开发者已在服务器中用上文方法将字符串写入apk，此时本接口将返回写入apk的字符串，否则本接口将返回"null"。*/ 
	getChannelStr():void

}
interface arcColorPicker {
}
interface downloadManager {
}
interface vtingPlayer {
	/**
	 * `播放网络音频，支持m3u8纯音频播放`
	 * ========params==========
	 *
	 * `url` :string : 音频资源地址
	 */
	play(params:vtingPlayer_play_Params, callback?: (ret:JSON) => void):void

	/** 暂停播放*/ 
	pause():void

	/** 停止播放*/ 
	stop():void

	/**
	 * `设置播放位置`
	 * ========params==========
	 *
	 * `progress` :number : 播放位置百分比，取值范围：0-100
	 */
	setProgress(params:vtingPlayer_setProgress_Params):void

	/**
	 * `设置当前播放内容锁屏显示信息`
	 * ========params==========
	 *
	 * `title` :string : （可选项）显示标题。
	 *
	 * `artist` :string : （可选项）显示作者。
	 *
	 * `zhuanji` :string : （可选项）显示专辑名。
	 */
	nowPlaying(params:vtingPlayer_nowPlaying_Params):void

}
interface vtingPlayer_play_Params {
	/**音频资源地址*/ 
	url:string,

}

interface vtingPlayer_setProgress_Params {
	/**播放位置百分比，取值范围：0-100*/ 
	progress:number,

}

interface vtingPlayer_nowPlaying_Params {
	/**（可选项）显示标题。*/ 
	title?:string,

	/**（可选项）显示作者。*/ 
	artist?:string,

	/**（可选项）显示专辑名。*/ 
	zhuanji?:string,

}

interface easyVideoCompression {
	/**
	 * `传入视频压缩倍数及压缩动画显隐参数`
	 * ========params==========
	 *
	 * `cpRatio` :null : null
	 */
	easyCompression(params:easyVideoCompression_easyCompression_Params, callback?: (ret:JSON) => void):void

	/** 无需传值及返回值*/ 
	easyClearCache():void

}
interface easyVideoCompression_easyCompression_Params {
	/**null*/ 
	cpRatio:null,

}

interface planNotify {
	/** 打开自定义通知*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭自定义通知*/ 
	close(callback?: (ret:JSON) => void):void

	/**
	 * `计划提醒通知`
	 * ========params==========
	 *
	 * `notifyId` :number : 通知id，可根据此id关闭通知。id相同仅显示最后一个通知，id不同分别展示
	 *
	 * `localId` :string : 本地行程id
	 *
	 * `tripId` :string : 行程id
	 *
	 * `title` :string : 计划title
	 *
	 * `content` :string : 计划内容
	 *
	 * `extra` :string : （可选项）附加内容
	 */
	planRemind(params:planNotify_planRemind_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消提醒`
	 * ========params==========
	 *
	 * `notifyId` :number : 通知id，planRemind 接口中返回notifyId
	 */
	cancleRemind(params:planNotify_cancleRemind_Params, callback?: (ret:JSON) => void):void

	/** 设置计划提醒通知中【将此事项标记已完成】点击监听*/ 
	setFinishPlanListener(callback?: (ret:JSON) => void):void

	/** 取消计划提醒通知中【将此事项标记已完成】点击监听*/ 
	cancleFinishPlanListener(callback?: (ret:JSON) => void):void

}
interface planNotify_planRemind_Params {
	/**通知id，可根据此id关闭通知。id相同仅显示最后一个通知，id不同分别展示*/ 
	notifyId:number,

	/**本地行程id*/ 
	localId:string,

	/**行程id*/ 
	tripId:string,

	/**计划title*/ 
	title:string,

	/**计划内容*/ 
	content:string,

	/**（可选项）附加内容*/ 
	extra?:string,

}

interface planNotify_cancleRemind_Params {
	/**通知id，planRemind 接口中返回notifyId*/ 
	notifyId:number,

}

interface dvMonitor {
	/** 注册设备监听事件*/ 
	addListener():void

	/** 移除设备监听*/ 
	removeListener():void

}
interface audioCover {
}
interface mobtools {
}
interface imageCrop {
}
interface ACScanner {
	/**
	 * `打开扫描控件`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象**
	 *
	 * `scanAnim` :JSON : （可选项）扫描动画配置
	 *
	 * `scanType` :number : （可选项）扫描码类型
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），endSound为true时有效**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `scanInterval` :number : （可选项）连续扫描间隔；单位：秒
	 *
	 * `scanStill` :boolean : （可选项）是否连续扫描；
	 *
	 * `isDrawQRCodeRect` :boolean : (可选项) 是否开启二维码自动对焦
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openScan(params:ACScanner_openScan_Params, callback?: (ret:JSON) => void):void

	/** 关闭扫描控件*/ 
	closeScan(callback?: (ret:JSON) => void):void

	/** 显示控件，打开以后有效*/ 
	show(callback?: (ret:JSON) => void):void

	/** 隐藏控件，打开以后有效*/ 
	hide(callback?: (ret:JSON) => void):void

	/** 开关灯*/ 
	flash(callback?: (ret:JSON) => void):void

	/** 生成二维码*/ 
	encodeQR(callback?: (ret:JSON) => void):void

	/** 解码二维码*/ 
	decodeQR(callback?: (ret:JSON) => void):void

}
interface ACScanner_openScan_Params {
	/**（可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象***/ 
	rect?:JSON,

	/**（可选项）扫描动画配置*/ 
	scanAnim?:JSON,

	/**（可选项）扫描码类型*/ 
	scanType?:number,

	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），endSound为true时有效**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）连续扫描间隔；单位：秒*/ 
	scanInterval?:number,

	/**（可选项）是否连续扫描；*/ 
	scanStill?:boolean,

	/**(可选项) 是否开启二维码自动对焦*/ 
	isDrawQRCodeRect?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface videoRecorder {
	/**
	 * `打开录像机`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `size` :JSON : （可选项）录制的视频大小。暂仅支持iOS
	 *
	 * `fps` :number : （可选项）帧率，暂仅支持iOS平台
	 *
	 * `quality` :string : （可选项）录像视频质量
	 *
	 * `orientation` :string : （可选项）录制的视频的方向
	 *
	 * `saveToAlbum` :boolean : （可选项）录制的视频是否自动保存到系统相册（系统媒体库）
	 *
	 * `save` :JSON : （可选项）录制的视频保存信息配置
	 *
	 * `camera` :string : （可选项）摄像头
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:videoRecorder_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置摄像头方向，请在调用 start 接口之前调用`
	 * ========params==========
	 *
	 * `target` :string : （可选项）设置方向的对象
	 *
	 * `orientation` :string : （可选项）录制的视频的方向
	 */
	setOrientation(params:videoRecorder_setOrientation_Params):void

	/**
	 * `开始录像`
	 * ========params==========
	 *
	 * `timer` :number : （可选项）视频录制倒计时计时器，单位为秒（s)，亦可通过 stop 接口停止录像
	 *
	 * `save` :JSON : （可选项）录制的视频保存信息配置，若本参数不传，则以open 接口内的 save参数为准
	 *
	 * `audioUrl` :string : （可选项）视频背景音乐地址，支持widget、fs
	 *
	 * `isMute` :boolean : （可选项）是否静音录制
	 */
	start(params:videoRecorder_start_Params):void

	/** 停止录像*/ 
	stop():void

	/** 关闭录像机*/ 
	close():void

	/** 显示已隐藏的录像机*/ 
	show():void

	/** 隐藏录像机，并没有从内存里清除*/ 
	hide():void

	/**
	 * `重设拍摄区域的大小和位置`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）重设模块的位置及尺寸
	 */
	setRect(params:videoRecorder_setRect_Params):void

	/** 获取录像机当前缩放数值*/ 
	getZoom():void

	/**
	 * `设置视图大小，若为 2 则表示远视图被放大一倍`
	 * ========params==========
	 *
	 * `zoom` :number : （可选项）设置的焦距大小（视图被放大的倍数），取值范围：大于 1.0
	 */
	setZoom(params:videoRecorder_setZoom_Params):void

	/** 获取当前闪关灯状态*/ 
	getFlashlight():void

	/**
	 * `设置闪关灯，在 iOS 平台上，前置摄像头打开时不支持操作闪光灯`
	 * ========params==========
	 *
	 * `flashlight` :string : （可选项）闪光灯类型
	 */
	setFlashlight(params:videoRecorder_setFlashlight_Params):void

	/** 获取当前占用的摄像头*/ 
	getCamera():void

	/**
	 * `设置前置/后置摄像头`
	 * ========params==========
	 *
	 * `camera` :string : （可选项）摄像头
	 *
	 * `animation` :boolean : （可选项）切换摄像头时是否带动画效果，本参数暂仅支持iOS平台
	 */
	setCamera(params:videoRecorder_setCamera_Params):void

	/**
	 * `设置当前录像机对焦模式，配合 setFocusRegion 接口使用`
	 * ========params==========
	 *
	 * `focusMode` :string : （可选项）对焦模式
	 */
	setFocusMode(params:videoRecorder_setFocusMode_Params):void

	/**
	 * `设置当前录像机对焦区域，需要跟 setFocusMode 接口同时使用。`
	 * ========params==========
	 *
	 * `region` :JSON : （可选项）焦点坐标（在录像区域内的坐标，原点在该区域左上角，往右为x轴，下为y轴）
	 */
	setFocusRegion(params:videoRecorder_setFocusRegion_Params):void

	/**
	 * `设置当前录像机对焦提示框样式`
	 * ========params==========
	 *
	 * `box` :string : （可选项）对焦提示框样式配置，该提示框是一个空心的正方形框。当调用setFocusRegion接口时，如果 animation 参数为 true，该提示框的显示与隐藏会有动画。
	 *
	 * `icon` :string : （可选项）自定义的提示框图标路径，要求本地路径（支持fs://、widget://协议），图标大小为：80*80
	 *
	 * `autoHide` :number : （可选项）设置对焦提示框自动隐藏时间，当为 -1 时，不自动隐藏，需调用 hideFocusBox 接口手动隐藏
	 *
	 * `animation` :boolean : （可选项）设置对焦提示框显示和隐藏时是否使用动画
	 */
	setFocusBox(params:videoRecorder_setFocusBox_Params):void

	/** 隐藏对焦提示框*/ 
	hideFocusBox():void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:videoRecorder_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 开始录像后的监听，此接口只适用于android；*/ 
	startCallback():void

	/**
	 * `拍照`
	 * ========params==========
	 *
	 * `album` :boolean : （可选项）照片是否保存到相册，需要申请相关权限
	 *
	 * `path` :string : （可选项）拍照保存地址，需要写明后缀名jpg，如：fs://abc.jpg
	 *
	 * `quality` :any : （可选项）照片质量，取值 0-1.0
	 */
	takePhoto(params:videoRecorder_takePhoto_Params, callback?: (ret:JSON) => void):void

	/**
	 * `对录制视频截图，本接口暂仅支持iOS端`
	 * ========params==========
	 *
	 * `album` :boolean : （可选项）照片是否保存到相册，需要申请相关权限
	 *
	 * `path` :string : （可选项）拍照保存地址，需要写明后缀名jpg，如：fs://abc.jpg
	 */
	videoShot(params:videoRecorder_videoShot_Params, callback?: (ret:JSON) => void):void

	/** 获取当前设备方向*/ 
	getDeviceOrientation():void

	/**
	 * `视频音频合成`
	 * ========params==========
	 *
	 * `videoUrl` :string : （可选项）视频路径，支持widget、fs
	 *
	 * `audioUrl` :string : （可选项）视频背景音乐地址，支持widget、fs
	 */
	compose(params:videoRecorder_compose_Params, callback?: (ret:JSON) => void):void

}
interface videoRecorder_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）录制的视频大小。暂仅支持iOS*/ 
	size?:JSON,

	/**（可选项）帧率，暂仅支持iOS平台*/ 
	fps?:number,

	/**（可选项）录像视频质量*/ 
	quality?:string,

	/**（可选项）录制的视频的方向*/ 
	orientation?:string,

	/**（可选项）录制的视频是否自动保存到系统相册（系统媒体库）*/ 
	saveToAlbum?:boolean,

	/**（可选项）录制的视频保存信息配置*/ 
	save?:JSON,

	/**（可选项）摄像头*/ 
	camera?:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface videoRecorder_setOrientation_Params {
	/**（可选项）设置方向的对象*/ 
	target?:string,

	/**（可选项）录制的视频的方向*/ 
	orientation?:string,

}

interface videoRecorder_start_Params {
	/**（可选项）视频录制倒计时计时器，单位为秒（s)，亦可通过 stop 接口停止录像*/ 
	timer?:number,

	/**（可选项）录制的视频保存信息配置，若本参数不传，则以open 接口内的 save参数为准*/ 
	save?:JSON,

	/**（可选项）视频背景音乐地址，支持widget、fs*/ 
	audioUrl?:string,

	/**（可选项）是否静音录制*/ 
	isMute?:boolean,

}

interface videoRecorder_setRect_Params {
	/**（可选项）重设模块的位置及尺寸*/ 
	rect?:JSON,

}

interface videoRecorder_setZoom_Params {
	/**（可选项）设置的焦距大小（视图被放大的倍数），取值范围：大于 1.0*/ 
	zoom?:number,

}

interface videoRecorder_setFlashlight_Params {
	/**（可选项）闪光灯类型*/ 
	flashlight?:string,

}

interface videoRecorder_setCamera_Params {
	/**（可选项）摄像头*/ 
	camera?:string,

	/**（可选项）切换摄像头时是否带动画效果，本参数暂仅支持iOS平台*/ 
	animation?:boolean,

}

interface videoRecorder_setFocusMode_Params {
	/**（可选项）对焦模式*/ 
	focusMode?:string,

}

interface videoRecorder_setFocusRegion_Params {
	/**（可选项）焦点坐标（在录像区域内的坐标，原点在该区域左上角，往右为x轴，下为y轴）*/ 
	region?:JSON,

}

interface videoRecorder_setFocusBox_Params {
	/**（可选项）对焦提示框样式配置，该提示框是一个空心的正方形框。当调用setFocusRegion接口时，如果 animation 参数为 true，该提示框的显示与隐藏会有动画。*/ 
	box?:string,

	/**（可选项）自定义的提示框图标路径，要求本地路径（支持fs://、widget://协议），图标大小为：80*80*/ 
	icon?:string,

	/**（可选项）设置对焦提示框自动隐藏时间，当为 -1 时，不自动隐藏，需调用 hideFocusBox 接口手动隐藏*/ 
	autoHide?:number,

	/**（可选项）设置对焦提示框显示和隐藏时是否使用动画*/ 
	animation?:boolean,

}

interface videoRecorder_addEventListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface videoRecorder_takePhoto_Params {
	/**（可选项）照片是否保存到相册，需要申请相关权限*/ 
	album?:boolean,

	/**（可选项）拍照保存地址，需要写明后缀名jpg，如：fs://abc.jpg*/ 
	path?:string,

	/**（可选项）照片质量，取值 0-1.0*/ 
	quality?:any,

}

interface videoRecorder_videoShot_Params {
	/**（可选项）照片是否保存到相册，需要申请相关权限*/ 
	album?:boolean,

	/**（可选项）拍照保存地址，需要写明后缀名jpg，如：fs://abc.jpg*/ 
	path?:string,

}

interface videoRecorder_compose_Params {
	/**（可选项）视频路径，支持widget、fs*/ 
	videoUrl?:string,

	/**（可选项）视频背景音乐地址，支持widget、fs*/ 
	audioUrl?:string,

}

interface startupObject {
	/** 获取手机卡运营商信息、网络信息和信号强度信息*/ 
	startup(callback?: (ret:JSON) => void):void

}
interface vtb {
	/** 获取视频首帧封面*/ 
	getFirstImage(callback?: (ret:JSON) => void):void

	/** 视频生成gif动画*/ 
	getGif():void

}
interface openAppStore {
	/**
	 * `在app内打开应用`
	 * ========params==========
	 *
	 * `appID` :string : 应用的唯一标示（可在iTunes上查看）
	 */
	inApp(params:openAppStore_inApp_Params):void

	/**
	 * `在AppStore里面打开应用`
	 * ========params==========
	 *
	 * `appID` :string : 应用的唯一标示（可在iTunes上查看）
	 */
	appStore(params:openAppStore_appStore_Params):void

}
interface openAppStore_inApp_Params {
	/**应用的唯一标示（可在iTunes上查看）*/ 
	appID:string,

}

interface openAppStore_appStore_Params {
	/**应用的唯一标示（可在iTunes上查看）*/ 
	appID:string,

}

interface dkplayer {
	/**
	 * `打开播放器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `coverImg` :string : （可选项）播放器的封面
	 *
	 * `url` :string : 播放地址
	 *
	 * `title` :string : （可选项）播放器的标题
	 *
	 * `autoPlay` :boolean : （可选项）是否自动播放视频
	 *
	 * `enableFull` :boolean : （可选项）是否全屏播放
	 *
	 * `isLive` :boolean : （可选项）是否是直播
	 *
	 * `animation` :boolean : （可选项）打开播放器是否使用动画
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:dkplayer_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置播放地址`
	 * ========params==========
	 *
	 * `url` :string : 播放地址
	 *
	 * `title` :string : 播放标题，默认为url地址
	 *
	 * `autoPlay` :boolean : （可选项）是否自动播放视频
	 */
	setUrl(params:dkplayer_setUrl_Params):void

	/** 开始播放*/ 
	start():void

}
interface dkplayer_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）播放器的封面*/ 
	coverImg?:string,

	/**播放地址*/ 
	url:string,

	/**（可选项）播放器的标题*/ 
	title?:string,

	/**（可选项）是否自动播放视频*/ 
	autoPlay?:boolean,

	/**（可选项）是否全屏播放*/ 
	enableFull?:boolean,

	/**（可选项）是否是直播*/ 
	isLive?:boolean,

	/**（可选项）打开播放器是否使用动画*/ 
	animation?:boolean,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface dkplayer_setUrl_Params {
	/**播放地址*/ 
	url:string,

	/**播放标题，默认为url地址*/ 
	title:string,

	/**（可选项）是否自动播放视频*/ 
	autoPlay?:boolean,

}

interface netAudio {
	/** 播放网络音频时，清除本地缓存*/ 
	expungeCache():void

}
interface scanner {
}
interface iap {
}
interface shareTool {
}
interface plateRecognize {
	/**
	 * `打开离线车牌识别页面`
	 * ========params==========
	 *
	 * `rect` :JSON : (可选项）播放器的位置及长宽
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:plateRecognize_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭离线车牌识别页面*/ 
	close():void

	/** 隐藏离线车牌识别页面*/ 
	hide():void

	/** 显示离线车牌识别页面*/ 
	show():void

}
interface plateRecognize_open_Params {
	/**(可选项）播放器的位置及长宽*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface yxsConversation {
	/**
	 * `导航栏隐藏显示控制`
	 * ========params==========
	 *
	 * `show` :boolean : （可选项）是否显示导航栏
	 */
	navibarShow(params:yxsConversation_navibarShow_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置开机时间`
	 * ========params==========
	 *
	 * `date` :string : 开机时间，格式yyyy-MM-dd HH:mm:ss
	 */
	setPowerOn(params:yxsConversation_setPowerOn_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置关机时间`
	 * ========params==========
	 *
	 * `date` :string : 关机时间，格式yyyy-MM-dd HH:mm:ss
	 */
	setPowerOff(params:yxsConversation_setPowerOff_Params, callback?: (ret:JSON) => void):void

	/** 取消开机时间*/ 
	cancelPowerOn(callback?: (ret:JSON) => void):void

	/** 取消关机时间*/ 
	cancelPowerOff(callback?: (ret:JSON) => void):void

	/**
	 * `设置系统时间`
	 * ========params==========
	 *
	 * `date` :string : 时间，格式yyyy-MM-dd HH:mm:ss
	 */
	setSysTime(params:yxsConversation_setSysTime_Params, callback?: (ret:JSON) => void):void

	/** 截屏，调用此接口系统会进行截屏，并将照片存放到内置SD卡根目录下/Screenshots文件夹中*/ 
	screenshot(callback?: (ret:JSON) => void):void

	/**
	 * `补光灯管理`
	 * ========params==========
	 *
	 * `open` :boolean : 打开或关闭补光灯
	 */
	flashControl(params:yxsConversation_flashControl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开关锁`
	 * ========params==========
	 *
	 * `open` :boolean : 打开或关闭锁
	 */
	lockControl(params:yxsConversation_lockControl_Params, callback?: (ret:JSON) => void):void

}
interface yxsConversation_navibarShow_Params {
	/**（可选项）是否显示导航栏*/ 
	show?:boolean,

}

interface yxsConversation_setPowerOn_Params {
	/**开机时间，格式yyyy-MM-dd HH:mm:ss*/ 
	date:string,

}

interface yxsConversation_setPowerOff_Params {
	/**关机时间，格式yyyy-MM-dd HH:mm:ss*/ 
	date:string,

}

interface yxsConversation_setSysTime_Params {
	/**时间，格式yyyy-MM-dd HH:mm:ss*/ 
	date:string,

}

interface yxsConversation_flashControl_Params {
	/**打开或关闭补光灯*/ 
	open:boolean,

}

interface yxsConversation_lockControl_Params {
	/**打开或关闭锁*/ 
	open:boolean,

}

interface wallPaper {
}
interface zyPlayVideo {
}
interface checkappexist {
	/** 检测当前手机是否安装某个软件*/ 
	checkAppExist():void

}
interface openSet {
	/**
	 * `打开系统设置页面`
	 * ========params==========
	 *
	 * `id` :any : （必填）要打开的设置页面编号
	 */
	open(params:openSet_open_Params):void

}
interface openSet_open_Params {
	/**（必填）要打开的设置页面编号*/ 
	id:any,

}

interface HmacSHA256 {
}
interface internationalization {
}
interface runBackground {
}
interface db {
	/**
	 * `获取指定目录下的子文件`
	 * ========params==========
	 *
	 * `directory` :string : （可选项）目录路径，不传时使用 db 模块的默认路径。支持 fs://、widget://等协议（如fs://user.db）
	 */
	subfile(params:db_subfile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开数据库，若数据库不存在则创建数据库。`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `path` :string : （可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）
	 */
	openDatabase(params:db_openDatabase_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭数据库`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 */
	closeDatabase(params:db_closeDatabase_Params, callback?: (ret:JSON) => void):void

	/**
	 * `执行事务操作语句`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `operation` :string : 事务操作类型，取值范围如下：
	 */
	transaction(params:db_transaction_Params, callback?: (ret:JSON) => void):void

	/**
	 * `执行 sql`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `sql` :string : sql 语句
	 */
	executeSql(params:db_executeSql_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询sql`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `sql` :string : sql语句
	 */
	selectSql(params:db_selectSql_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取指定目录下的子文件`
	 * ========params==========
	 *
	 * `directory` :string : （可选项）目录路径，不传时使用 db 模块的默认路径。支持 fs://、widget://等协议（如fs://user.db）
	 */
	subfileSync(params:db_subfileSync_Params):JSON;

	/**
	 * `打开数据库，若数据库不存在则创建数据库（同步接口）。`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `path` :string : （可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）
	 */
	openDatabaseSync(params:db_openDatabaseSync_Params):JSON;

	/**
	 * `关闭数据库（同步接口）`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 */
	closeDatabaseSync(params:db_closeDatabaseSync_Params):JSON;

	/**
	 * `执行事务操作语句（同步接口）`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `operation` :string : 事务操作类型，取值范围如下：
	 */
	transactionSync(params:db_transactionSync_Params):JSON;

	/**
	 * `执行 sql（同步接口）`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `sql` :string : sql 语句
	 */
	executeSqlSync(params:db_executeSqlSync_Params):JSON;

	/**
	 * `查询 sql（同步接口）`
	 * ========params==========
	 *
	 * `name` :string : 数据库名称
	 *
	 * `sql` :string : sql语句
	 */
	selectSqlSync(params:db_selectSqlSync_Params):JSON;

}
interface db_subfile_Params {
	/**（可选项）目录路径，不传时使用 db 模块的默认路径。支持 fs://、widget://等协议（如fs://user.db）*/ 
	directory?:string,

}

interface db_openDatabase_Params {
	/**数据库名称*/ 
	name:string,

	/**（可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）*/ 
	path?:string,

}

interface db_closeDatabase_Params {
	/**数据库名称*/ 
	name:string,

}

interface db_transaction_Params {
	/**数据库名称*/ 
	name:string,

	/**事务操作类型，取值范围如下：*/ 
	operation:string,

}

interface db_executeSql_Params {
	/**数据库名称*/ 
	name:string,

	/**sql 语句*/ 
	sql:string,

}

interface db_selectSql_Params {
	/**数据库名称*/ 
	name:string,

	/**sql语句*/ 
	sql:string,

}

interface db_subfileSync_Params {
	/**（可选项）目录路径，不传时使用 db 模块的默认路径。支持 fs://、widget://等协议（如fs://user.db）*/ 
	directory?:string,

}

interface db_openDatabaseSync_Params {
	/**数据库名称*/ 
	name:string,

	/**（可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）*/ 
	path?:string,

}

interface db_closeDatabaseSync_Params {
	/**数据库名称*/ 
	name:string,

}

interface db_transactionSync_Params {
	/**数据库名称*/ 
	name:string,

	/**事务操作类型，取值范围如下：*/ 
	operation:string,

}

interface db_executeSqlSync_Params {
	/**数据库名称*/ 
	name:string,

	/**sql 语句*/ 
	sql:string,

}

interface db_selectSqlSync_Params {
	/**数据库名称*/ 
	name:string,

	/**sql语句*/ 
	sql:string,

}

interface FNRecordMp3 {
	/**
	 * `初始化录音`
	 * ========params==========
	 *
	 * `path` :string : 生成的mp3路径；支持fs:// （仅支持iOS）
	 *
	 * `fileDir` :string : 存放mp3文件的路径，文件夹路径；支持fs，原生路径，例：'fs://record/' 注意结尾必须要有'/' （仅支持安卓）
	 */
	open(params:FNRecordMp3_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始录音`
	 * ========params==========
	 *
	 * `afterSecond` :number : 延时多少秒开始录音
	 */
	start(params:FNRecordMp3_start_Params, callback?: (ret:JSON) => void):void

	/**
	 * `停止录音`
	 * ========params==========
	 *
	 * `second` :number : 多少秒以内的录音不保存（仅ios支持）
	 */
	stop(params:FNRecordMp3_stop_Params, callback?: (ret:JSON) => void):void

	/** 暂停录音 （仅支持安卓）*/ 
	pause(callback?: (ret:JSON) => void):void

	/** 恢复录音/继续录音 （仅支持安卓）*/ 
	continue(callback?: (ret:JSON) => void):void

	/** 获取当前/实时音量 （仅安卓支持）*/ 
	getVolume(callback?: (ret:JSON) => void):void

	/** 添加事件监听者 （仅支持安卓）*/ 
	addEventListener(callback?: (ret:JSON) => void):void

}
interface FNRecordMp3_open_Params {
	/**生成的mp3路径；支持fs:// （仅支持iOS）*/ 
	path:string,

	/**存放mp3文件的路径，文件夹路径；支持fs，原生路径，例：'fs://record/' 注意结尾必须要有'/' （仅支持安卓）*/ 
	fileDir:string,

}

interface FNRecordMp3_start_Params {
	/**延时多少秒开始录音*/ 
	afterSecond:number,

}

interface FNRecordMp3_stop_Params {
	/**多少秒以内的录音不保存（仅ios支持）*/ 
	second:number,

}

interface miniVR {
	/**
	 * `跳转到vr视频播放。`
	 * ========params==========
	 *
	 * `url` :string : （必填）视频文件地址。仅支持m3u8在线播放。
	 *
	 * `mode` :number : （可选项）播放模式，默认是0，0是普通模式 1是单眼模式 2是双眼模式。
	 */
	openVideo(params:miniVR_openVideo_Params, callback?: (ret:JSON) => void):void

}
interface miniVR_openVideo_Params {
	/**（必填）视频文件地址。仅支持m3u8在线播放。*/ 
	url:string,

	/**（可选项）播放模式，默认是0，0是普通模式 1是单眼模式 2是双眼模式。*/ 
	mode?:number,

}

interface walletCards {
	/** 添加卡片*/ 
	add():void

}
interface chromeDebug {
}
interface FNScanner {
	/**
	 * `打开自带默认 UI 效果的二维码/条形码扫描页面，本界面相当于打开一个 window 窗口，其界面内容不支持自定义`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `verticalLineColor` :string : (可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；
	 *
	 * `landscapeLineColor` :string : (可选项) 字符串类型；横屏时扫描线的颜色,支持支持rgb、rgba、#； (android不支持，android的横竖屏是一个颜色)
	 *
	 * `hintText` :string : (可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字
	 *
	 * `albumText` :string : (可选项) 相册按钮文字
	 *
	 * `lightText` :string : (可选项) 灯光开启文字
	 *
	 * `closeText` :string : (可选项) 灯光关闭文字
	 *
	 * `isAlbum` :boolean : (可选项) 是否隐藏相册按钮
	 *
	 * `isLight` :boolean : (可选项) 是否隐藏闪光灯按钮
	 *
	 * `isPush` :boolean : (可选项) 页面跳转是否改为push，本参数仅支持iOS
	 *
	 * `font` :JSON : （可选项）文字样式
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 *
	 * `isDrawQRCodeRect` :boolean : (可选项) 是否开启二维码自动对焦
	 *
	 * `qRCodeRectWidth` :number : (可选项) 二维码自动对焦框宽度 (android不支持)
	 *
	 * `qRCodeRectColor` :any : (可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)
	 *
	 * `isGBK` :boolean : (可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数
	 *
	 * `encoding` :number : (可选项) 编码类型
	 */
	open(params:FNScanner_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开二维码/条码扫描器`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `verticalLineColor` :string : (可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；仅android有效
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 *
	 * `hintText` :string : (可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字(ios不支持)
	 *
	 * `font` :JSON : （可选项）文字样式
	 *
	 * `isAlbum` :boolean : (可选项) 是否隐藏相册按钮
	 *
	 * `isPush` :boolean : (可选项) 页面跳转是否改为push，本参数仅支持iOS
	 *
	 * `isDrawQRCodeRect` :boolean : (可选项) 是否开启二维码自动对焦
	 *
	 * `qRCodeRectWidth` :number : (可选项) 二维码自动对焦框宽度 (android不支持)
	 *
	 * `qRCodeRectColor` :any : (可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)
	 *
	 * `isLight` :boolean : (可选项) 是否隐藏闪光灯按钮
	 *
	 * `isGBK` :boolean : (可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数
	 *
	 * `encoding` :number : (可选项) 编码类型
	 */
	openScanner(params:FNScanner_openScanner_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开可自定义的二维码/条形码扫描器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象**
	 *
	 * `rectOfInterest` :JSON : （可选项）在扫码区域上的扫码识别区域，**仅在iOS平台有效**
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 *
	 * `interval` :number : （可选项）连续扫描间隔；
	 *
	 * `isDrawQRCodeRect` :boolean : (可选项) 是否开启二维码自动对焦
	 *
	 * `qRCodeRectWidth` :number : (可选项) 二维码自动对焦框宽度 (android不支持)
	 *
	 * `qRCodeRectColor` :any : (可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)
	 *
	 * `isGBK` :boolean : (可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数
	 *
	 * `encoding` :number : (可选项) 编码类型
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openView(params:FNScanner_openView_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设可自定义的二维码/条形码扫描器的大小和位置`
	 * ========params==========
	 *
	 * `x` :number : （可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `w` :number : （可选项）模块的宽度
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setFrame(params:FNScanner_setFrame_Params):void

	/** 关闭自定义大小的二维码/条码扫描器*/ 
	closeView():void

	/**
	 * `二维码/条形码图片解码`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用  wav 格式的短音频文件**
	 *
	 * `path` :string : （可选项）要识别的图片路径，要求本地路径（fs://、widget://），**若不传则打开系统相册**
	 */
	decodeImg(params:FNScanner_decodeImg_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串生成二维码/条形码图片`
	 * ========params==========
	 *
	 * `type` :string : （可选项）生成图片的类型，默认值：'qr_image'
	 *
	 * `content` :string : 所要生成的二维码/条形码字符串，**当 type 为 bar_image 时，该值只能为数字字符串**
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 */
	encodeImg(params:FNScanner_encodeImg_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开/关闭闪光灯（在Android上，已打开扫码视图时有效）`
	 * ========params==========
	 *
	 * `status` :string : （可选项）打开/关闭闪光灯，默认值：'off'
	 */
	switchLight(params:FNScanner_switchLight_Params):void

	/** 通知当前本模块app进入回到前台。此时模块会进行一些资源的恢复操作，防止照相机回来之后黑屏*/ 
	onResume():void

	/** 通知当前本模块app进入后台。此时模块会进行一些资源的暂停存储操作，防止照相机回来之后黑屏*/ 
	onPause():void

}
interface FNScanner_open_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**(可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；*/ 
	verticalLineColor?:string,

	/**(可选项) 字符串类型；横屏时扫描线的颜色,支持支持rgb、rgba、#； (android不支持，android的横竖屏是一个颜色)*/ 
	landscapeLineColor?:string,

	/**(可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字*/ 
	hintText?:string,

	/**(可选项) 相册按钮文字*/ 
	albumText?:string,

	/**(可选项) 灯光开启文字*/ 
	lightText?:string,

	/**(可选项) 灯光关闭文字*/ 
	closeText?:string,

	/**(可选项) 是否隐藏相册按钮*/ 
	isAlbum?:boolean,

	/**(可选项) 是否隐藏闪光灯按钮*/ 
	isLight?:boolean,

	/**(可选项) 页面跳转是否改为push，本参数仅支持iOS*/ 
	isPush?:boolean,

	/**（可选项）文字样式*/ 
	font?:JSON,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

	/**(可选项) 是否开启二维码自动对焦*/ 
	isDrawQRCodeRect?:boolean,

	/**(可选项) 二维码自动对焦框宽度 (android不支持)*/ 
	qRCodeRectWidth?:number,

	/**(可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)*/ 
	qRCodeRectColor?:any,

	/**(可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数*/ 
	isGBK?:boolean,

	/**(可选项) 编码类型*/ 
	encoding?:number,

}

interface FNScanner_openScanner_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**(可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；仅android有效*/ 
	verticalLineColor?:string,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

	/**(可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字(ios不支持)*/ 
	hintText?:string,

	/**（可选项）文字样式*/ 
	font?:JSON,

	/**(可选项) 是否隐藏相册按钮*/ 
	isAlbum?:boolean,

	/**(可选项) 页面跳转是否改为push，本参数仅支持iOS*/ 
	isPush?:boolean,

	/**(可选项) 是否开启二维码自动对焦*/ 
	isDrawQRCodeRect?:boolean,

	/**(可选项) 二维码自动对焦框宽度 (android不支持)*/ 
	qRCodeRectWidth?:number,

	/**(可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)*/ 
	qRCodeRectColor?:any,

	/**(可选项) 是否隐藏闪光灯按钮*/ 
	isLight?:boolean,

	/**(可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数*/ 
	isGBK?:boolean,

	/**(可选项) 编码类型*/ 
	encoding?:number,

}

interface FNScanner_openView_Params {
	/**（可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象***/ 
	rect?:JSON,

	/**（可选项）在扫码区域上的扫码识别区域，**仅在iOS平台有效***/ 
	rectOfInterest?:JSON,

	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

	/**（可选项）连续扫描间隔；*/ 
	interval?:number,

	/**(可选项) 是否开启二维码自动对焦*/ 
	isDrawQRCodeRect?:boolean,

	/**(可选项) 二维码自动对焦框宽度 (android不支持)*/ 
	qRCodeRectWidth?:number,

	/**(可选项) 二维码自动对焦框颜色，支持 rgb、rgba、#； (android不支持)*/ 
	qRCodeRectColor?:any,

	/**(可选项) 是否GBK编码，如出现中文乱码，可能是用GBK编码带中文的数据生成二维码导致，此时就需要设置为true，此参数仅支持iOS，此参数在1.1.9（包含）版本以后弃用，请使用encoding参数*/ 
	isGBK?:boolean,

	/**(可选项) 编码类型*/ 
	encoding?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface FNScanner_setFrame_Params {
	/**（可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x?:number,

	/**（可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y?:number,

	/**（可选项）模块的宽度*/ 
	w?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface FNScanner_decodeImg_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用  wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）要识别的图片路径，要求本地路径（fs://、widget://），**若不传则打开系统相册***/ 
	path?:string,

}

interface FNScanner_encodeImg_Params {
	/**（可选项）生成图片的类型，默认值：'qr_image'*/ 
	type?:string,

	/**所要生成的二维码/条形码字符串，**当 type 为 bar_image 时，该值只能为数字字符串***/ 
	content:string,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

}

interface FNScanner_switchLight_Params {
	/**（可选项）打开/关闭闪光灯，默认值：'off'*/ 
	status?:string,

}

interface oxPlayer {
	/** 监听统一接口 取消原来的api.addEventListener*/ 
	addEventListener():void

	/** 指定区域显示播放器,点播，可分集播放*/ 
	fixdPlay():void

	/** 指定区域显示播放器,直播*/ 
	fixzPlay():void

	/** 是否全屏*/ 
	isFull():void

	/** 退出全屏*/ 
	exitFullScreen():void

	/** 进入全屏*/ 
	enterFullScreen():void

	/** 是否锁屏  fixdPlay fixePlay 有效*/ 
	isLock():void

	/** 添加 弹幕*/ 
	addDanmaku():void

	/** vip页面*/ 
	showVipView():void

	/** 退出vip页面*/ 
	hideVipView():void

	/** 搜索投屏设备*/ 
	startDlnaSearch():void

	/** 推送投屏视频*/ 
	startDlnaPush():void

	/** 停止投屏*/ 
	stopDlnaPush():void

	/** 更新一条记录*/ 
	updateDataAtIndex():void

	/** 更新所有记录*/ 
	updateAll():void

	/** m3u8下载开始*/ 
	hlsStartDownload():void

	/** m3u8停止下载*/ 
	hlsStopDownload():void

	/** m3u8移除缓存*/ 
	hlsRemoveDownload():void

	/** 全屏点播,仿抖音 可上下滑动切换视频*/ 
	dbPlay():void

	/** 全屏直播,仿抖音*/ 
	zbPlay():void

	/** dbPlay接口播放最后一个视频时 追加 数据*/ 
	addDataAfter():void

	/** dbPlay下拉刷新时更新 数据*/ 
	addDataBefore():void

	/** 当前视频动态 添加控件 调用dbPlay  zbPlay时此接口生效*/ 
	addStyle():void

	/** 当前视频 动态更新组件 样式 调用dbPlay  zbPlay时此接口生效*/ 
	updateStyles():void

	/** 当前视频 动态更新视频用户信息 比如 评论数 分享数 等 更新 调用dbPlay  zbPlay时此接口生效*/ 
	updateUserInfo():void

	/** dbPlay停止上下拉刷新*/ 
	stopFresh():void

	/** 控制红包*/ 
	hongbaoAction():void

	/** 设置红包进度 code ==16 返回小视频播放进度 可调用此方法*/ 
	setHBProgress():void

	/** 添加控件 dbPlay  zbPlay不随屏滚动控件 fixdPlay fixzPlay 动态添加控件*/ 
	addComponent():void

	/** 动态更新组件 dbPlay  zbPlay不随屏滚动控件 fixdPlay fixzPlay 动态添加控件*/ 
	updateComponent():void

	/** 播放下一条记录*/ 
	next():void

	/** 播放上一条记录*/ 
	prev():void

	/** 播放索引视频*/ 
	playIndex():void

	/** 开始播放*/ 
	start():void

	/** 停止播放*/ 
	pause():void

	/** 重新播放*/ 
	replay():void

	/** 视频时长*/ 
	duration():void

	/** 指定位置播放*/ 
	seekTo():void

	/** 播放位置*/ 
	position():void

	/** 截屏*/ 
	screenShot():void

	/** 移除播放器*/ 
	remove():void

	/** 显示播放器*/ 
	showPlay():void

	/** 隐藏播放器*/ 
	hidePlay():void

	/** 设置音量*/ 
	setVolume():void

	/** 设置倍速*/ 
	setSpeed():void

	/** 清理缓存*/ 
	clearCache():void

}
interface recMp3 {
	/** 开始录音*/ 
	start():void

}
interface voiceMag {
}
interface httpServer {
	/**
	 * `开启HTTP服务，开启指定端口，指定手机文件路径为根目录供网页访问。`
	 * ========params==========
	 *
	 * `www` :any : （必填项）开启服务的真实文件路径。
	 *
	 * `port` :number : 开启服务的端口号，默认：2633；取值范围0到65535
	 */
	start(params:httpServer_start_Params, callback?: (ret:JSON) => void):void

	/** 关闭HTTP服务。*/ 
	stop(callback?: (ret:JSON) => void):void

	/** 异步获取IP。*/ 
	getIp(callback?: (ret:JSON) => void):void

	/** 网页请求后的监听接口。网页被加载或者POST或者GET请求后，监听接口收到数据，并对数据开始处理保存响应等操作，最后可以用response或者responseSync接口作出当次请求的响应。*/ 
	addEventListener(callback?: (ret:JSON) => void):void

	/**
	 * `异步请求响应接口（addEventListener收到带参数监听，就会进入30秒等待响应，如果不写响应代码，则该请求30秒后回调页面400）`
	 * ========params==========
	 *
	 * `sid` :any : （必填项）
	 *
	 * `data` :any : （必填项）
	 */
	response(params:httpServer_response_Params, callback?: (ret:JSON) => void):void

	/** 同步获取IP；*/ 
	ipSync():void

	/** 同步获取端口；*/ 
	portSync():void

	/** 同步获取当前提供访问的真实文件路径；*/ 
	wwwSync():void

	/** 同步获取当前服务的开启状态；*/ 
	runSync():void

	/**
	 * `同步请求响应接口（addEventListener收到带参数监听，就会进入30秒等待响应，如果不写响应代码，则该请求30秒后回调页面400）;`
	 * ========params==========
	 *
	 * `sid` :any : （必填项）
	 *
	 * `data` :any : （必填项）
	 */
	responseSync(params:httpServer_responseSync_Params):void

}
interface httpServer_start_Params {
	/**（必填项）开启服务的真实文件路径。*/ 
	www:any,

	/**开启服务的端口号，默认：2633；取值范围0到65535*/ 
	port:number,

}

interface httpServer_response_Params {
	/**（必填项）*/ 
	sid:any,

	/**（必填项）*/ 
	data:any,

}

interface httpServer_responseSync_Params {
	/**（必填项）*/ 
	sid:any,

	/**（必填项）*/ 
	data:any,

}

interface liveAudioPlayer {
	/**
	 * `播放网络音频，支持m3u8纯音频播放`
	 * ========params==========
	 *
	 * `url` :string : 音频资源地址。
	 */
	play(params:liveAudioPlayer_play_Params, callback?: (ret:JSON) => void):void

	/** 停止播放*/ 
	stop():void

}
interface liveAudioPlayer_play_Params {
	/**音频资源地址。*/ 
	url:string,

}

interface waterImageMark {
}
interface imageTool {
}
interface floatVideo {
	/** 是否有显示悬浮窗口的权限。（同步方法）返回true有权限，返回false没有权限。*/ 
	hasPermission():void

	/**
	 * `打开安卓"设置"(Settings)界面`
	 * ========params==========
	 *
	 * `pkg` :string : （可选项）APP的包名，比如com.apicloud.app.book，大多数情况下都是设置自己APP的包名，所以不必带这个参数，用默认的就好。
	 */
	openSettings(params:floatVideo_openSettings_Params):void

	/**
	 * `设置悬浮窗口属性。`
	 * ========params==========
	 *
	 * `x` :number : （可选项）x坐标。
	 *
	 * `y` :number : （可选项）y坐标。
	 *
	 * `w` :number : （可选项）窗口宽度。
	 *
	 * `h` :number : （可选项）窗口高度。
	 *
	 * `url` :string : （必填）播放视频的url,支持网络和本地，支持m3u8。
	 *
	 * `currentPosition` :number : （可选项）从这个位置开始播。（毫秒）
	 *
	 * `clickBack` :boolean : （可选项）是否开启点击返回到App。（个人建议关闭，有时候只是想移动窗口，却被误判为点击事件了。）
	 */
	setWinAttr(params:floatVideo_setWinAttr_Params, callback?: (ret:JSON) => void):void

	/** 显示窗口。（显示之前至少调用一次setWinAttr来设置参数）*/ 
	show():void

	/** 隐藏窗口。*/ 
	hide():void

	/** 获取视频播放位置。（同步方法）*/ 
	getCurrentPosition():void

}
interface floatVideo_openSettings_Params {
	/**（可选项）APP的包名，比如com.apicloud.app.book，大多数情况下都是设置自己APP的包名，所以不必带这个参数，用默认的就好。*/ 
	pkg?:string,

}

interface floatVideo_setWinAttr_Params {
	/**（可选项）x坐标。*/ 
	x?:number,

	/**（可选项）y坐标。*/ 
	y?:number,

	/**（可选项）窗口宽度。*/ 
	w?:number,

	/**（可选项）窗口高度。*/ 
	h?:number,

	/**（必填）播放视频的url,支持网络和本地，支持m3u8。*/ 
	url:string,

	/**（可选项）从这个位置开始播。（毫秒）*/ 
	currentPosition?:number,

	/**（可选项）是否开启点击返回到App。（个人建议关闭，有时候只是想移动窗口，却被误判为点击事件了。）*/ 
	clickBack?:boolean,

}

interface HeartRate {
	/**
	 * `开始获取心率值`
	 * ========params==========
	 *
	 * `rect` :JSON : 画面展示尺寸 （仅支持安卓）
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	open(params:HeartRate_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭心率获取（仅android支持）*/ 
	close(callback?: (ret:JSON) => void):void

}
interface HeartRate_open_Params {
	/**画面展示尺寸 （仅支持安卓）*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface FNQRcreate {
	/**
	 * `二维码/条形码图片解码`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用  wav 格式的短音频文件**
	 *
	 * `path` :string : （可选项）要识别的图片路径，要求本地路径（fs://、widget://），**若不传则打开系统相册**
	 */
	decodeImg(params:FNQRcreate_decodeImg_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将字符串生成二维码/条形码图片`
	 * ========params==========
	 *
	 * `type` :string : （可选项）生成图片的类型，默认值：'qr_image'
	 *
	 * `content` :string : 所要生成的二维码/条形码字符串，**当 type 为 bar_image 时，该值只能为数字字符串**
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 */
	encodeImg(params:FNQRcreate_encodeImg_Params, callback?: (ret:JSON) => void):void

}
interface FNQRcreate_decodeImg_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用  wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）要识别的图片路径，要求本地路径（fs://、widget://），**若不传则打开系统相册***/ 
	path?:string,

}

interface FNQRcreate_encodeImg_Params {
	/**（可选项）生成图片的类型，默认值：'qr_image'*/ 
	type?:string,

	/**所要生成的二维码/条形码字符串，**当 type 为 bar_image 时，该值只能为数字字符串***/ 
	content:string,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

}

interface exifInterface {
	/**
	 * `设置图片的经纬度属性`
	 * ========params==========
	 *
	 * `picPath` :string : （必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;[安卓支持fs://])。
	 *
	 * `latitude` :number : （可选项）经度。
	 *
	 * `longitude` :number : （可选项）纬度。
	 */
	setExifInfo(params:exifInterface_setExifInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取图片的属性`
	 * ========params==========
	 *
	 * `picPath` :string : （必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;安卓支持fs://)。
	 */
	getExifInfo(params:exifInterface_getExifInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `旋转图片`
	 * ========params==========
	 *
	 * `picPath` :string : （必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;安卓支持fs://)。
	 *
	 * `degrees` :number : （可选项）需要旋转图片的角度。(取值范围 90,180,270)。
	 */
	setDegreeExif(params:exifInterface_setDegreeExif_Params, callback?: (ret:JSON) => void):void

}
interface exifInterface_setExifInfo_Params {
	/**（必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;[安卓支持fs://])。*/ 
	picPath:string,

	/**（可选项）经度。*/ 
	latitude?:number,

	/**（可选项）纬度。*/ 
	longitude?:number,

}

interface exifInterface_getExifInfo_Params {
	/**（必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;安卓支持fs://)。*/ 
	picPath:string,

}

interface exifInterface_setDegreeExif_Params {
	/**（必填项）图片的路径，仅支持jpeg,jgp文件格式(ios支持fs://,widget://;安卓支持fs://)。*/ 
	picPath:string,

	/**（可选项）需要旋转图片的角度。(取值范围 90,180,270)。*/ 
	degrees?:number,

}

interface mdReader {
}
interface officePreview {
	/** 打开文档预览*/ 
	open():void

	/** 显示浏览器*/ 
	show():void

}
interface FNQRscan {
	/**
	 * `打开自带默认 UI 效果的二维码/条形码扫描页面，本界面相当于打开一个 window 窗口，其界面内容不支持自定义`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `verticalLineColor` :string : (可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；
	 *
	 * `landscapeLineColor` :string : (可选项) 字符串类型；横屏时扫描线的颜色,支持支持rgb、rgba、#； (android不支持，android的横竖屏是一个颜色)
	 *
	 * `hintText` :string : (可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字
	 *
	 * `albumText` :string : (可选项) 相册按钮文字
	 *
	 * `lightText` :string : (可选项) 灯光开启文字
	 *
	 * `closeText` :string : (可选项) 灯光关闭文字
	 *
	 * `isAlbum` :boolean : (可选项) 是否隐藏相册按钮
	 *
	 * `font` :JSON : （可选项）文字样式
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 */
	open(params:FNQRscan_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开二维码/条码扫描器`
	 * ========params==========
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `verticalLineColor` :string : (可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；仅android有效
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 *
	 * `hintText` :string : (可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字(ios不支持)
	 *
	 * `font` :JSON : （可选项）文字样式
	 *
	 * `isAlbum` :boolean : (可选项) 是否隐藏相册按钮
	 */
	openScanner(params:FNQRscan_openScanner_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开可自定义的二维码/条形码扫描器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象**
	 *
	 * `rectOfInterest` :JSON : （可选项）在扫码区域上的扫码识别区域，**仅在iOS平台有效**
	 *
	 * `sound` :string : （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件**
	 *
	 * `autorotation` :boolean : （可选项）扫描页面是否自动旋转（横竖屏）
	 *
	 * `saveToAlbum` :boolean : （可选项）扫描的二维码/条形码图片是否自动保存到相册
	 *
	 * `saveImg` :JSON : （可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存
	 *
	 * `interval` :number : （可选项）连续扫描间隔；android不支持此参数
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openView(params:FNQRscan_openView_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设可自定义的二维码/条形码扫描器的大小和位置`
	 * ========params==========
	 *
	 * `x` :number : （可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `w` :number : （可选项）模块的宽度
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setFrame(params:FNQRscan_setFrame_Params):void

	/** 关闭自定义大小的二维码/条码扫描器*/ 
	closeView():void

	/**
	 * `打开/关闭闪光灯（在Android上，已打开扫码视图时有效）`
	 * ========params==========
	 *
	 * `status` :string : （可选项）打开/关闭闪光灯，默认值：'off'
	 */
	switchLight(params:FNQRscan_switchLight_Params):void

	/** 通知当前本模块app进入回到前台。此时模块会进行一些资源的恢复操作，防止照相机回来之后黑屏*/ 
	onResume():void

	/** 通知当前本模块app进入后台。此时模块会进行一些资源的暂停存储操作，防止照相机回来之后黑屏*/ 
	onPause():void

}
interface FNQRscan_open_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**(可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；*/ 
	verticalLineColor?:string,

	/**(可选项) 字符串类型；横屏时扫描线的颜色,支持支持rgb、rgba、#； (android不支持，android的横竖屏是一个颜色)*/ 
	landscapeLineColor?:string,

	/**(可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字*/ 
	hintText?:string,

	/**(可选项) 相册按钮文字*/ 
	albumText?:string,

	/**(可选项) 灯光开启文字*/ 
	lightText?:string,

	/**(可选项) 灯光关闭文字*/ 
	closeText?:string,

	/**(可选项) 是否隐藏相册按钮*/ 
	isAlbum?:boolean,

	/**（可选项）文字样式*/ 
	font?:JSON,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

}

interface FNQRscan_openScanner_Params {
	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**(可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；仅android有效*/ 
	verticalLineColor?:string,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

	/**(可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字(ios不支持)*/ 
	hintText?:string,

	/**（可选项）文字样式*/ 
	font?:JSON,

	/**(可选项) 是否隐藏相册按钮*/ 
	isAlbum?:boolean,

}

interface FNQRscan_openView_Params {
	/**（可选项）扫描器的位置及尺寸，**在安卓平台宽高比须跟屏幕宽高比一致，否则摄像头可视区域的图像可能出现少许变形；w和h属性最好使用api.winWidth和api.winHeight,这样不会导致变形，也不会出现手机必须要在一定的距离上才能扫描出来的现象***/ 
	rect?:JSON,

	/**（可选项）在扫码区域上的扫码识别区域，**仅在iOS平台有效***/ 
	rectOfInterest?:JSON,

	/**（可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），**为保证兼容性，推荐使用 wav 格式的短音频文件***/ 
	sound?:string,

	/**（可选项）扫描页面是否自动旋转（横竖屏）*/ 
	autorotation?:boolean,

	/**（可选项）扫描的二维码/条形码图片是否自动保存到相册*/ 
	saveToAlbum?:boolean,

	/**（可选项）扫描的二维码/条形码图片保存所需要的参数，若不传则不保存*/ 
	saveImg?:JSON,

	/**（可选项）连续扫描间隔；android不支持此参数*/ 
	interval?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface FNQRscan_setFrame_Params {
	/**（可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x?:number,

	/**（可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y?:number,

	/**（可选项）模块的宽度*/ 
	w?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface FNQRscan_switchLight_Params {
	/**（可选项）打开/关闭闪光灯，默认值：'off'*/ 
	status?:string,

}

interface sharePics {
	/** 分享图片数组以及文字*/ 
	shareToTimeLine():void

}
interface easyCamera {
	/** 调用系统相机拍照或者录制视频*/ 
	openCamera(callback?: (ret:JSON) => void):void

}
interface cameraWeibo {
	/**
	 * `打开固定 UI 的相机页面`
	 * ========params==========
	 *
	 * `save` :JSON : （可选项）拍摄的图片、视频保存信息
	 *
	 * `album` :boolean : （可选项）拍照成功后是否将所拍结果存入系统相册
	 *
	 * `quality` :string : （可选项）拍摄质量
	 */
	open(params:cameraWeibo_open_Params, callback?: (ret:JSON) => void):void

	/** 取消/关闭拍照页面*/ 
	cancel():void

}
interface cameraWeibo_open_Params {
	/**（可选项）拍摄的图片、视频保存信息*/ 
	save?:JSON,

	/**（可选项）拍照成功后是否将所拍结果存入系统相册*/ 
	album?:boolean,

	/**（可选项）拍摄质量*/ 
	quality?:string,

}

interface socketManager {
}
interface appControl {
}
interface blurredView {
}
interface logger {
}
interface moduleTVKeyApi {
	/** 创建并使用模块接口*/ 
	onstart():void

}
interface mqtt {
	/**     建立MQTT连接*/ 
	startmqtt():void

	/**     断开MQTT连接*/ 
	stopmqtt():void

	/**     发送指令*/ 
	publish():void

	/**     增加订阅的通道*/ 
	subscribe():void

	/**     移除订阅的通道*/ 
	unsubscribe():void

}
interface m3u8Download {
	/**
	 * `m3u8视频下载监听事件`
	 * ========params==========
	 *
	 * `videoId` :string : （可选项）视频ID，当不传某一个唯一的视频ID时，该监听会返回所有视频下载信息，当设置具体的视频ID时，只返回设置的视频ID的下载信息。
	 */
	addEventListener(params:m3u8Download_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始下载`
	 * ========params==========
	 *
	 * `videoId` :string : （必填项）视频唯一的ID。
	 *
	 * `url` :string : （必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。
	 */
	start(params:m3u8Download_start_Params, callback?: (ret:JSON) => void):void

	/**
	 * `暂停下载`
	 * ========params==========
	 *
	 * `videoId` :string : （必填项）视频唯一的ID。
	 */
	pause(params:m3u8Download_pause_Params, callback?: (ret:JSON) => void):void

	/**
	 * `恢复下载`
	 * ========params==========
	 *
	 * `videoId` :string : （必填项）视频唯一的ID。
	 */
	resume(params:m3u8Download_resume_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否下载完成`
	 * ========params==========
	 *
	 * `videoId` :string : （必填项）视频唯一的ID。
	 */
	isDownloadFinish(params:m3u8Download_isDownloadFinish_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取缓存大小`
	 * ========params==========
	 *
	 * `videoId` :string : （可选项）视频唯一的ID,不填则获取模块所有缓存视频文件夹大小。
	 */
	getCacheSize(params:m3u8Download_getCacheSize_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清除缓存文件`
	 * ========params==========
	 *
	 * `videoId` :string : （可选项）视频唯一的ID,不填则清除模块所有缓存视频文件夹大小。
	 */
	clearCache(params:m3u8Download_clearCache_Params, callback?: (ret:JSON) => void):void

}
interface m3u8Download_addEventListener_Params {
	/**（可选项）视频ID，当不传某一个唯一的视频ID时，该监听会返回所有视频下载信息，当设置具体的视频ID时，只返回设置的视频ID的下载信息。*/ 
	videoId?:string,

}

interface m3u8Download_start_Params {
	/**（必填项）视频唯一的ID。*/ 
	videoId:string,

	/**（必填项）M3U8下载地址，该地址必须为可解析的地址。不能是直播地址，请开发者自行控制。*/ 
	url:string,

}

interface m3u8Download_pause_Params {
	/**（必填项）视频唯一的ID。*/ 
	videoId:string,

}

interface m3u8Download_resume_Params {
	/**（必填项）视频唯一的ID。*/ 
	videoId:string,

}

interface m3u8Download_isDownloadFinish_Params {
	/**（必填项）视频唯一的ID。*/ 
	videoId:string,

}

interface m3u8Download_getCacheSize_Params {
	/**（可选项）视频唯一的ID,不填则获取模块所有缓存视频文件夹大小。*/ 
	videoId?:string,

}

interface m3u8Download_clearCache_Params {
	/**（可选项）视频唯一的ID,不填则清除模块所有缓存视频文件夹大小。*/ 
	videoId?:string,

}

interface lottie {
	/** 展示AE动画*/ 
	loadAnim(callback?: (ret:JSON) => void):void

	/** 重新加载动画*/ 
	reloadAnim(callback?: (ret:JSON) => void):void

	/** 隐藏*/ 
	hide(callback?: (ret:JSON) => void):void

	/** 显示*/ 
	show(callback?: (ret:JSON) => void):void

	/** 移除*/ 
	remove(callback?: (ret:JSON) => void):void

}
interface compressVideo {
	/** 选取本地视频。注意:对于iOS，在选取视频确定时，系统会自带出现正在压缩提示，此处系统并未真正进行压缩，如需要压缩请使用compressVideo方法。对于Android，该方法会调用系统自带文件管理器进行选择文件，开发者可根据用户选择完成后返回的文件路径自行判断选择的文件是否是视频文件。*/ 
	selectVideo(callback?: (ret:JSON) => void):void

	/**
	 * `传入视频路径压缩视频`
	 * ========params==========
	 *
	 * `path` :string : (必填)需要压缩的视频文件路径，该参数可传入调用selectVideo方法返回的视频文件路径(path)，或可传入开发者自行获取到的的视频文件路径。
	 *
	 * `quality` :string : (可选项)对压缩视频的质量要求，取值:l、m、h , 其中 l 为最差画质，m 为中度画质，h 为略高画质
	 */
	compressVideo(params:compressVideo_compressVideo_Params, callback?: (ret:JSON) => void):void

}
interface compressVideo_compressVideo_Params {
	/**(必填)需要压缩的视频文件路径，该参数可传入调用selectVideo方法返回的视频文件路径(path)，或可传入开发者自行获取到的的视频文件路径。*/ 
	path:string,

	/**(可选项)对压缩视频的质量要求，取值:l、m、h , 其中 l 为最差画质，m 为中度画质，h 为略高画质*/ 
	quality?:string,

}

interface weChatVideo {
	/** 打开视频录制界面*/ 
	open():void

	/** 清除视频的缓存*/ 
	clearCache():void

}
interface selectPic {
	/**
	 * `showPics使用此方法调用相机或相册的选择`
	 * ========params==========
	 *
	 * `maxNum` :number : （必填项） 设置个数需要大于0
	 */
	showPics(params:selectPic_showPics_Params, callback?: (ret:JSON) => void):void

}
interface selectPic_showPics_Params {
	/**（必填项） 设置个数需要大于0*/ 
	maxNum:number,

}

interface videoPlayer {
	/**
	 * `打开一个自带界面的视频播放器，本播放器为全屏横屏显示，支持屏幕随设备自动旋转。用户单击播放器时，会弹出 foot 和 head 导航条，再次单击则关闭之。**仅 setPath 接口对本接口打开的播放器有效**`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）聊天输入框模块可配置的文本
	 *
	 * `styles` :JSON : （可选项）模块的样式设置
	 *
	 * `lockBtn` :JSON : 锁屏按钮配置
	 *
	 * `path` :string : （可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget**
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `coverImg` :string : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `autorotation` :boolean : （可选项）视频播放页面是否支持自动旋转（横竖屏），若为 false 则手动点击右下角按钮旋转
	 *
	 * `audio` :string : （可选项）缩放模式 **该参数仅支持iOS**
	 *
	 * `seekBarDragable` :boolean : （可选项） 播放进度条是否可以拖动
	 *
	 * `hideStatusBar` :boolean : （可选项） 是否隐藏状态栏（该参数仅支持android）
	 *
	 * `isFull` :boolean : （可选项）是否全屏
	 */
	play(params:videoPlayer_play_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开一个视频播放器（类似一个frame）`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `bg` :string : （可选项）字符串类型；视频背景颜色，支持#、rgb、rgba (在切换视屏为了防止闪屏,请根据自己的视频调节颜色)
	 *
	 * `path` :string : （可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget**
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `scalingMode` :string : （可选项）缩放模式 **该参数仅支持ios**
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `loop` :boolean : （可选项）是否循环播放  **该参数仅支持ios**
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:videoPlayer_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置音/视频的文件路径，**对 open 和 play 打开的视频播放器有效。**`
	 * ========params==========
	 *
	 * `path` :string : 文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget**
	 *
	 * `bg` :string : （可选项）字符串类型；视频背景颜色，支持#、rgb、rgba (在切换视屏为了防止闪屏,请根据自己的视频调节颜色)
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `title` :string : （可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效
	 */
	setPath(params:videoPlayer_setPath_Params, callback?: (ret:JSON) => void):void

	/** 开始播放，**只对 open 和 openPlay 接口打开的视频播放器有效***/ 
	start():void

	/** 暂停播放，**只对 open 和 openPlay 接口打开的视频播放器有效***/ 
	pause():void

	/** 停止播放，**仅对 open 打开的视频播放器有效***/ 
	stop():void

	/** 关闭播放器 ，**对 open、openPlay、play 打开的视频播放器均有效***/ 
	close():void

	/** 显示视频播放视图，**仅对 open 和 openPlay 打开的视频播放器有效***/ 
	show():void

	/** 隐藏视频播放视图，**仅对 open 和 openPlay 打开的视频播放器有效***/ 
	hide():void

	/** 全屏播放（横屏模式），**仅对open打开的播放器有效***/ 
	fullScreen():void

	/** 取消全屏播放，**仅对open打开的播放器有效***/ 
	cancelFullScreen():void

	/**
	 * `快进，**仅对open打开的播放器有效**`
	 * ========params==========
	 *
	 * `seconds` :number : 快进的秒数
	 */
	forward(params:videoPlayer_forward_Params):void

	/**
	 * `快退，**仅对open打开的播放器有效**`
	 * ========params==========
	 *
	 * `seconds` :number : 快退的秒数
	 */
	rewind(params:videoPlayer_rewind_Params):void

	/**
	 * `跳转，**仅对open打开的播放器有效**`
	 * ========params==========
	 *
	 * `seconds` :number : 跳转到音视频播放的秒数
	 */
	seekTo(params:videoPlayer_seekTo_Params):void

	/**
	 * `设置屏幕亮度，**对open、openPlay、play打开的播放器有效**`
	 * ========params==========
	 *
	 * `brightness` :number : （可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度**
	 */
	setBrightness(params:videoPlayer_setBrightness_Params):void

	/** 获取当前屏幕亮度值，**对open、openPlay、play打开的播放器有效***/ 
	getBrightness(callback?: (ret:JSON) => void):void

	/**
	 * `设置音量，**对open、openPlay、play打开的播放器有效**`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小，取值范围：0-1
	 */
	setVolume(params:videoPlayer_setVolume_Params):void

	/** 获取当前播放音量，**对open、openPlay、play打开的播放器有效***/ 
	getVolume(callback?: (ret:JSON) => void):void

	/** 添加动作监听(当全屏或者fixed为true且页面不能被左右滑动时有效)，**对open打开的播放器有效***/ 
	addEventListener(callback?: (ret:JSON) => void):void

	/**
	 * `移除动作监听，**对open打开的播放器有效**`
	 * ========params==========
	 *
	 * `name` :string : （可选项）所要移除的监听的动作名称
	 */
	removeEventListener(params:videoPlayer_removeEventListener_Params):void

	/**
	 * `设置视频播放器位置、尺寸，以及是否全屏，**对open打开的播放器有效**`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fullscreen` :boolean : （可选项）模块的位置及尺寸是否全屏（true不显示状态栏，false显示状态栏）
	 */
	setRect(params:videoPlayer_setRect_Params):void

	/** 该方法需要在监听到物理按键时调用（只对 openPlay 接口打开的播放器有效，暂仅支持 android）*/ 
	onBack():void

	/** 判断当前窗口是否全屏（只对 openPlay 接口打开的播放器有效）*/ 
	isFullscreen():void

	/** 该方法需要在 pause 事件中调用（只对 openPlay 接口打开的播放器有效，仅支持android）*/ 
	onPause():void

	/** 该方法需要在resume事件中调用（只对 openPlay 接口打开的播放器有效，仅支持android）*/ 
	onResume():void

	/** 判断自定义按钮是否被选中 **注意:只对openPlay接口打开的播放器有效***/ 
	customBtnIsSelected(callback?: (ret:JSON) => void):void

	/**
	 * `设置自定义按钮被选中 **注意:只对openPlay接口打开的播放器有效**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）用户自定义按钮的点击index，从右到左排列
	 */
	setCustomBtnSelected(params:videoPlayer_setCustomBtnSelected_Params):void

	/**
	 * `设置自定义按钮被取消 **只对openPlay接口打开的播放器有效**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）用户自定义按钮的点击index，从右到左排列
	 */
	setCustomBtnCancelSelected(params:videoPlayer_setCustomBtnCancelSelected_Params):void

	/**
	 * `设置自定义按钮是否隐藏 **只对 openPlay 接口打开的播放器有效**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）用户自定义按钮的点击index，从右到左排列
	 *
	 * `visible` :boolean : 是否显示
	 */
	setCustomBtnVisible(params:videoPlayer_setCustomBtnVisible_Params):void

	/**
	 * `获取指定视频的制定时刻的截图`
	 * ========params==========
	 *
	 * `videoUrl` :string : 视频地址，支持本地(widget://和fs:// android仅支持fs://)和网络视频
	 *
	 * `time` :number : 指定位置(单位为秒)
	 *
	 * `isAblum` :boolean : （可选项）是否保存相册
	 *
	 * `name` :boolean : （必选项）图片名
	 *
	 * `ret` :JSON : null
	 */
	videoCapture(params:videoPlayer_videoCapture_Params):void

}
interface videoPlayer_play_Params {
	/**（可选项）聊天输入框模块可配置的文本*/ 
	texts?:JSON,

	/**（可选项）模块的样式设置*/ 
	styles?:JSON,

	/**锁屏按钮配置*/ 
	lockBtn:JSON,

	/**（可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget***/ 
	path?:string,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:string,

	/**（可选项）视频播放页面是否支持自动旋转（横竖屏），若为 false 则手动点击右下角按钮旋转*/ 
	autorotation?:boolean,

	/**（可选项）缩放模式 **该参数仅支持iOS***/ 
	audio?:string,

	/**（可选项） 播放进度条是否可以拖动*/ 
	seekBarDragable?:boolean,

	/**（可选项） 是否隐藏状态栏（该参数仅支持android）*/ 
	hideStatusBar?:boolean,

	/**（可选项）是否全屏*/ 
	isFull?:boolean,

}

interface videoPlayer_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）字符串类型；视频背景颜色，支持#、rgb、rgba (在切换视屏为了防止闪屏,请根据自己的视频调节颜色)*/ 
	bg?:string,

	/**（可选项）文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget***/ 
	path?:string,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）缩放模式 **该参数仅支持ios***/ 
	scalingMode?:string,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）是否循环播放  **该参数仅支持ios***/ 
	loop?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface videoPlayer_setPath_Params {
	/**文档的路径，支持网络和本地（fs://）路径，**在 android 平台上不支持 widget***/ 
	path:string,

	/**（可选项）字符串类型；视频背景颜色，支持#、rgb、rgba (在切换视屏为了防止闪屏,请根据自己的视频调节颜色)*/ 
	bg?:string,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效*/ 
	title?:string,

}

interface videoPlayer_forward_Params {
	/**快进的秒数*/ 
	seconds:number,

}

interface videoPlayer_rewind_Params {
	/**快退的秒数*/ 
	seconds:number,

}

interface videoPlayer_seekTo_Params {
	/**跳转到音视频播放的秒数*/ 
	seconds:number,

}

interface videoPlayer_setBrightness_Params {
	/**（可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度***/ 
	brightness?:number,

}

interface videoPlayer_setVolume_Params {
	/**（可选项）音量大小，取值范围：0-1*/ 
	volume?:number,

}

interface videoPlayer_removeEventListener_Params {
	/**（可选项）所要移除的监听的动作名称*/ 
	name?:string,

}

interface videoPlayer_setRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块的位置及尺寸是否全屏（true不显示状态栏，false显示状态栏）*/ 
	fullscreen?:boolean,

}

interface videoPlayer_setCustomBtnSelected_Params {
	/**（可选项）用户自定义按钮的点击index，从右到左排列*/ 
	index?:number,

}

interface videoPlayer_setCustomBtnCancelSelected_Params {
	/**（可选项）用户自定义按钮的点击index，从右到左排列*/ 
	index?:number,

}

interface videoPlayer_setCustomBtnVisible_Params {
	/**（可选项）用户自定义按钮的点击index，从右到左排列*/ 
	index?:number,

	/**是否显示*/ 
	visible:boolean,

}

interface videoPlayer_videoCapture_Params {
	/**视频地址，支持本地(widget://和fs:// android仅支持fs://)和网络视频*/ 
	videoUrl:string,

	/**指定位置(单位为秒)*/ 
	time:number,

	/**（可选项）是否保存相册*/ 
	isAblum?:boolean,

	/**（必选项）图片名*/ 
	name:boolean,

	/**null*/ 
	ret:JSON,

}

interface jsskeNFC {
	/** 判断nfc是否开启*/ 
	isOpen(callback?: (ret:JSON) => void):void

	/** 初始化nfc工具*/ 
	init(callback?: (ret:JSON) => void):void

	/** 读取一次身份证信息*/ 
	findIDCard(callback?: (ret:JSON) => void):void

	/** 打开设备nfc设置页面*/ 
	toNfcSetting(callback?: (ret:JSON) => void):void

	/** 停止识别*/ 
	endFind(callback?: (ret:JSON) => void):void

}
interface timer {
	/**
	 * `开启计时器。开启计时器后，如果开启循坏(isLoop设为true)，模块会在delay毫秒后回调callback，以后会间隔period毫秒回调callback，如果关闭循坏(isLoop设为false)，模块只会在delay毫秒后回调callback一次，之后不再会回调。开发者可将要定时执行的js代码放到callback函数中执行。`
	 * ========params==========
	 *
	 * `delay` :any : 延时执行回调的时间，单位毫秒.
	 *
	 * `isLoop` :boolean : 是否循环执行回调.开启计时器后，如果开启循坏(isLoop设为true)，模块会在delay毫秒后回调callback，以后会间隔period毫秒回调callback，如果关闭循坏(isLoop设为false)，模块只会在delay毫秒后回调callback一次，之后不再会回调。开发者可将要定时执行的js代码放到callback函数中执行。
	 *
	 * `period` :any : 间隔执行回调的时间，单位毫秒。只有在isLoop为true时有效.
	 */
	startTimer(params:timer_startTimer_Params, callback?: (ret:JSON) => void):void

	/** 停止计时器，startTimer和stopTimer应一 一对应，调用startTimer后应在适当地方调用stopTimer停止计时器。*/ 
	stopTimer():void

}
interface timer_startTimer_Params {
	/**延时执行回调的时间，单位毫秒.*/ 
	delay:any,

	/**是否循环执行回调.开启计时器后，如果开启循坏(isLoop设为true)，模块会在delay毫秒后回调callback，以后会间隔period毫秒回调callback，如果关闭循坏(isLoop设为false)，模块只会在delay毫秒后回调callback一次，之后不再会回调。开发者可将要定时执行的js代码放到callback函数中执行。*/ 
	isLoop:boolean,

	/**间隔执行回调的时间，单位毫秒。只有在isLoop为true时有效.*/ 
	period:any,

}

interface cnKeyBoard {
	/** 在页面上添加车牌专用输入框，弹出专用键盘。*/ 
	openKeyboard(callback?: (ret:JSON) => void):void

}
interface appManagerPlus {
	/** 获取Android手机上所有应用的信息，包括应用图标、名字、包名、版本号等。获取到的应用图标保存在本地，可通过fs路径或Android原生路径获取图标。img标签用Android原生路径显示图片的方法：img标签的src属性设置为： "file://"+ Android原生路径。见示例代码。该接口为耗时接口，开发者调用该接口后可做等待提示，增加用户体验。*/ 
	getInstalledApplications(callback?: (ret:JSON) => void):void

	/** 打开系统安装应用(apk)界面*/ 
	installApp(callback?: (ret:JSON) => void):void

	/** 静默安装应用，手机需要Root且调用该方法后应用请求获取root权限(弹框方式弹出)，用户同意获取root权限后方可进行静默安装。*/ 
	installSilent(callback?: (ret:JSON) => void):void

	/** 打开系统卸载应用界面*/ 
	unInstallApp(callback?: (ret:JSON) => void):void

	/** 静默卸载应用，手机需要Root且调用该方法后应用请求获取root权限(弹框方式弹出)，用户同意获取root权限后方可进行静默卸载。*/ 
	unInstallSilent(callback?: (ret:JSON) => void):void

	/** 判断应用是否已经安装到手机上，可根据包名或或者应用名称判断，但应用名判断可能不准确，因为Android上允许有多个同名的应用(但他们的包名不会相同)，而包名是应用在手机上的唯一标识，所以用包名判断绝对准确，建议用包名。该方法为耗时方法。*/ 
	isInstalled(callback?: (ret:JSON) => void):void

	/** 判断应用是否是系统应用。*/ 
	isSystemApp(callback?: (ret:JSON) => void):void

	/** 获取应用的缓存大小、数据大小、应用本身大小。类似在手机设置中的应用管理中的“应用详情”页中的信息。该方法为耗时方法。*/ 
	getAppSize(callback?: (ret:JSON) => void):void

	/** 打开指定应用的默认页面，类似用户从桌面直接点击应用图标打开应用。调用该方法前需判断传入的应用是否已经安装(调用isInstalled方法)*/ 
	jumpToApp(callback?: (ret:JSON) => void):void

	/** 监听Android上应用的安装卸载，包括其他应用的安装、卸载、升级，本接口不能监听自身的安装、卸载和升级。如要监听自身的升级可参考本模块的isVersionChanged接口。本接口监听后立即返回，当有其他应用安装、卸载、升级时再次触发回调。开发者可在应用安装后启动应用，或者进行其他操作。注意：本应用(调用该接口的应用)还在运行时才能监听到应用的安装卸载，如果本应用被系统杀掉或刚开机未启动，则不能监听到应用的安装卸载*/ 
	registerAppReceiver():void

	/** 用于判断是否已经升级到新版本，本接口根据Android应用的版本号(versionCode)是否增大来判断，对应于云编译上编译正式版本的Android version code 。所以热更新如果没有改变版本号，该接口会返回false状态。注意：该接口要在新版本(已经升级的版本)中调用才有效，且要求旧版本也调用过该接口，开发者可在应用启动时调用该接口判断是否版本已经升级，如果是 可以给用户弹出“升级成功”的提示，增加用户体验。*/ 
	isVersionChanged():void

}
interface chromellqDebug {
}
interface recordVideo {
}
interface ytylive {
	/** 开始视频推流，video_url为推地址url，video_name为推流实例名称，如果使用第三方推流服务，则推流地址跟推流实例名称需要到第三方平台获取，如果自建直播服务器，则使用自建服务器的推流地址跟实例名称。*/ 
	startVideo(callback?: (ret:JSON) => void):void

}
interface imageBrowser {
}
interface realNetwork {
}
interface pdfReader {
	/**
	 * `打开一个 pdf 格式的文档`
	 * ========params==========
	 *
	 * `path` :string : 文档的路径，支持 widget://、fs://、http:// 等本地和网络协议
	 *
	 * `hidden` :JSON : 界面元素的隐藏显示属性配置，仅支持 iOS 平台
	 *
	 * `androidHidden` :JSON : （可选项）界面元素的隐藏显示属性配置，仅支持 Android 平台
	 *
	 * `backBtn` :JSON : （可选项）返回按钮配置，若不传，则显示默认按钮
	 *
	 * `showLoading` :boolean : （可选项）未成功打开文件之前是否显示加载提示框
	 *
	 * `index` :number : （可选项）打开指定页的页码，从1开始
	 */
	open(params:pdfReader_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开pdf文档视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `path` :string : 文档的路径，支持 widget://、fs://、http:// 等本地和网络协议
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `showLoading` :boolean : （可选项）未成功打开文件之前是否显示加载提示框
	 *
	 * `index` :number : （可选项）打开指定页的页码，从1开始
	 */
	openView(params:pdfReader_openView_Params, callback?: (ret:JSON) => void):void

	/** 隐藏文档视图*/ 
	hideView():void

	/** 显示文档视图*/ 
	showView():void

	/** 关闭文档视图*/ 
	closeView():void

	/** 清除缓存到本地的文件，**本接口只清除本模块缓存的数据，若要清除本app缓存的所有数据这调用api.clearCache***/ 
	clearCache():void

	/**
	 * `打开pdf文档视图，调用此接口为长图显示`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `path` :string : 文档的路径，支持 widget://、fs://、http:// 等本地和网络协议
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `showLoading` :boolean : （可选项）未成功打开文件之前是否显示加载提示框
	 */
	openPdfView(params:pdfReader_openPdfView_Params, callback?: (ret:JSON) => void):void

	/** 关闭长图pdf试图*/ 
	closePdfView():void

}
interface pdfReader_open_Params {
	/**文档的路径，支持 widget://、fs://、http:// 等本地和网络协议*/ 
	path:string,

	/**界面元素的隐藏显示属性配置，仅支持 iOS 平台*/ 
	hidden:JSON,

	/**（可选项）界面元素的隐藏显示属性配置，仅支持 Android 平台*/ 
	androidHidden?:JSON,

	/**（可选项）返回按钮配置，若不传，则显示默认按钮*/ 
	backBtn?:JSON,

	/**（可选项）未成功打开文件之前是否显示加载提示框*/ 
	showLoading?:boolean,

	/**（可选项）打开指定页的页码，从1开始*/ 
	index?:number,

}

interface pdfReader_openView_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**文档的路径，支持 widget://、fs://、http:// 等本地和网络协议*/ 
	path:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）未成功打开文件之前是否显示加载提示框*/ 
	showLoading?:boolean,

	/**（可选项）打开指定页的页码，从1开始*/ 
	index?:number,

}

interface pdfReader_openPdfView_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**文档的路径，支持 widget://、fs://、http:// 等本地和网络协议*/ 
	path:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）未成功打开文件之前是否显示加载提示框*/ 
	showLoading?:boolean,

}

interface aemail {
	/** 类型：字符串*/ 
	sendEmail():void

}
interface customNotification {
	/** 发送一条通知*/ 
	sendNotification():void

	/** 更新通知*/ 
	updateNotification():void

}
interface brightnessUtil {
}
interface imageFilter {
	/**
	 * `打开图片过滤器`
	 * ========params==========
	 *
	 * `imgPath` :string : 原图片路径，支持fs，widget等本地协议
	 */
	open(params:imageFilter_open_Params):void

	/**
	 * `设置图片滤镜效果`
	 * ========params==========
	 *
	 * `type` :string : （可选项）要设置的图片滤镜效果，详情参考[滤镜效果](!Constant)
	 *
	 * `value` :number : （可选项）要设置的图片滤镜效果程度，取值范围1-100
	 *
	 * `id` :number : 要操作的图片的id
	 */
	filter(params:imageFilter_filter_Params, callback?: (ret:JSON) => void):void

	/**
	 * `保存最终处理结果`
	 * ========params==========
	 *
	 * `album` :boolean : （可选项）是否保存到系统相册
	 *
	 * `imgPath` :string : （可选项）保存的图片路径，若路径不存在文件夹则创建此目录
	 *
	 * `imgName` :string : （可选项）保存的图片名字，支持png和jpg格式，若不指定格式，则默认png
	 *
	 * `id` :number : 要操作的图片的id
	 */
	save(params:imageFilter_save_Params, callback?: (ret:JSON) => void):void

	/**
	 * `图片压缩处理`
	 * ========params==========
	 *
	 * `img` :string : 要压缩图片的路径，支持widget、fs等本地路径
	 *
	 * `isClarityimg` :boolean : (可选项) 图片背景是否透明 仅支持iOS
	 *
	 * `quality` :number : （可选项）压缩程度，取值范围：0-1,当isClarityimg参数为false时有效
	 *
	 * `scale` :number : （可选项）压缩后的图片缩放比例，取值范围大于0，
	 *
	 * `size` :any : （可选项）压缩后的图片的大小
	 *
	 * `save` :any : （可选项）压缩后的图片保存位置
	 */
	compress(params:imageFilter_compress_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取指定路径下的图片信息`
	 * ========params==========
	 *
	 * `path` :string : 目标图片的路径，支持fs等本地路径
	 */
	getAttr(params:imageFilter_getAttr_Params, callback?: (ret:JSON) => void):void

}
interface imageFilter_open_Params {
	/**原图片路径，支持fs，widget等本地协议*/ 
	imgPath:string,

}

interface imageFilter_filter_Params {
	/**（可选项）要设置的图片滤镜效果，详情参考[滤镜效果](!Constant)*/ 
	type?:string,

	/**（可选项）要设置的图片滤镜效果程度，取值范围1-100*/ 
	value?:number,

	/**要操作的图片的id*/ 
	id:number,

}

interface imageFilter_save_Params {
	/**（可选项）是否保存到系统相册*/ 
	album?:boolean,

	/**（可选项）保存的图片路径，若路径不存在文件夹则创建此目录*/ 
	imgPath?:string,

	/**（可选项）保存的图片名字，支持png和jpg格式，若不指定格式，则默认png*/ 
	imgName?:string,

	/**要操作的图片的id*/ 
	id:number,

}

interface imageFilter_compress_Params {
	/**要压缩图片的路径，支持widget、fs等本地路径*/ 
	img:string,

	/**(可选项) 图片背景是否透明 仅支持iOS*/ 
	isClarityimg?:boolean,

	/**（可选项）压缩程度，取值范围：0-1,当isClarityimg参数为false时有效*/ 
	quality?:number,

	/**（可选项）压缩后的图片缩放比例，取值范围大于0，*/ 
	scale?:number,

	/**（可选项）压缩后的图片的大小*/ 
	size?:any,

	/**（可选项）压缩后的图片保存位置*/ 
	save?:any,

}

interface imageFilter_getAttr_Params {
	/**目标图片的路径，支持fs等本地路径*/ 
	path:string,

}

interface ttsModule {
}
interface mobilePhone {
}
interface photoBrowserTodayNew {
	/**
	 * `打开图片浏览器。`
	 * ========params==========
	 *
	 * `images` :Array<JSON> : （必填项）要显示的图片url数组,图片数量应大于等于1。支持 fs://、widget://、http://、https://格式
	 *
	 * `texts` :Array<JSON> : （可选项）要显示的图片描述字符串数组，images和texts一 一对应，即images中的第一个元素对应texts中的第一个元素，以此类推。字符串数量应等于图片数量，如大于图片数量，则模块从左往右选取数量等于图片数量的那些字符串，如小于图片数量，则剩下的描述字符串模块会自动用空字符串("")补全。参数visibility中的textArea为true时，该字段才有效。
	 *
	 * `frame` :string : 必填项，要将该模块添加到哪个frame显示，一般本模块需要全屏显示（除去手机状态栏，即除去手机顶部的状态栏，其他区域都用来显示本模块），所以frame的区域建议为除去手机顶部状态栏的其他区域。沉浸式模式下，建议将状态栏的背景色设置成黑色(#000000)，以便与本模块的背景色保持一致。
	 *
	 * `visibility` :JSON : （可选项）用于设置功能按钮是否显示，当input为2时，此时点击伪输入框弹出真正的评论输入框，要想图片不跟随键盘上移，则在config.xml中配置如下参数：<br/><preference name="softInputMode" value="pan"/>
	 *
	 * `textHeight` :JSON : （可选项）用于设置文字描述区域高度所占的百分比，公式如下：<br/>
	 *
	 * `start` :any : （可选项）用于设置从第几张图片开始显示，默认1，该值从1计数，而不是0。
	 *
	 * `count` :any : （可选项）用于设置评论按钮上的红色评论数量，默认0，>0时显示红色数量, <=0时不显示红色数量; 大于999时显示"999+"
	 *
	 * `status` :boolean : （可选项）用于设置是否收藏，默认false不收藏。
	 *
	 * `publisher` :string : （可选项）用于设置发布人头像，为空或不传时头像不显示，支持 fs://、widget://、http://、https://格式
	 *
	 * `virtualInputHint` :string : （可选项）用于设置伪输入框的提示文字，默认"写评论..."；参数visibility中的input为1或2时，该字段才有效。
	 *
	 * `realInputHint` :string : （可选项）用于设置可输入评论内容的输入框的提示文字，默认"优质评论将会被优先展示"；参数visibility中的input为2时，该字段才有效。
	 */
	open(params:photoBrowserTodayNew_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置评论数量。应在调用open方法后调用该方法`
	 * ========params==========
	 *
	 * `count` :any : （可选项）用于设置评论按钮上的红色评论数量，默认0，>0时显示红色数量, <=0时不显示红色数量; 大于999时显示"999+"
	 */
	setCommentCount(params:photoBrowserTodayNew_setCommentCount_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置收藏状态。应在调用open方法后调用该方法`
	 * ========params==========
	 *
	 * `status` :boolean : （可选项）用于设置收藏状态，默认false不收藏。
	 */
	setFavorite(params:photoBrowserTodayNew_setFavorite_Params, callback?: (ret:JSON) => void):void

	/** 清除缓存到本地的网络图片，本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache。清除缓存后保存图片会失败，所以开发者要在适当的时候清除缓存或不清除缓存。*/ 
	clearCache():void

	/** 关闭图片浏览器，open和close应一 一对应，调用open后应在适当时候调用close。*/ 
	close():void

}
interface photoBrowserTodayNew_open_Params {
	/**（必填项）要显示的图片url数组,图片数量应大于等于1。支持 fs://、widget://、http://、https://格式*/ 
	images:Array<JSON>,

	/**（可选项）要显示的图片描述字符串数组，images和texts一 一对应，即images中的第一个元素对应texts中的第一个元素，以此类推。字符串数量应等于图片数量，如大于图片数量，则模块从左往右选取数量等于图片数量的那些字符串，如小于图片数量，则剩下的描述字符串模块会自动用空字符串("")补全。参数visibility中的textArea为true时，该字段才有效。*/ 
	texts?:Array<JSON>,

	/**必填项，要将该模块添加到哪个frame显示，一般本模块需要全屏显示（除去手机状态栏，即除去手机顶部的状态栏，其他区域都用来显示本模块），所以frame的区域建议为除去手机顶部状态栏的其他区域。沉浸式模式下，建议将状态栏的背景色设置成黑色(#000000)，以便与本模块的背景色保持一致。*/ 
	frame:string,

	/**（可选项）用于设置功能按钮是否显示，当input为2时，此时点击伪输入框弹出真正的评论输入框，要想图片不跟随键盘上移，则在config.xml中配置如下参数：<br/><preference name="softInputMode" value="pan"/>*/ 
	visibility?:JSON,

	/**（可选项）用于设置文字描述区域高度所占的百分比，公式如下：<br/>*/ 
	textHeight?:JSON,

	/**（可选项）用于设置从第几张图片开始显示，默认1，该值从1计数，而不是0。*/ 
	start?:any,

	/**（可选项）用于设置评论按钮上的红色评论数量，默认0，>0时显示红色数量, <=0时不显示红色数量; 大于999时显示"999+"*/ 
	count?:any,

	/**（可选项）用于设置是否收藏，默认false不收藏。*/ 
	status?:boolean,

	/**（可选项）用于设置发布人头像，为空或不传时头像不显示，支持 fs://、widget://、http://、https://格式*/ 
	publisher?:string,

	/**（可选项）用于设置伪输入框的提示文字，默认"写评论..."；参数visibility中的input为1或2时，该字段才有效。*/ 
	virtualInputHint?:string,

	/**（可选项）用于设置可输入评论内容的输入框的提示文字，默认"优质评论将会被优先展示"；参数visibility中的input为2时，该字段才有效。*/ 
	realInputHint?:string,

}

interface photoBrowserTodayNew_setCommentCount_Params {
	/**（可选项）用于设置评论按钮上的红色评论数量，默认0，>0时显示红色数量, <=0时不显示红色数量; 大于999时显示"999+"*/ 
	count?:any,

}

interface photoBrowserTodayNew_setFavorite_Params {
	/**（可选项）用于设置收藏状态，默认false不收藏。*/ 
	status?:boolean,

}

interface dUserAgent {
}
interface qrScanner {
	/** 打开二维码扫描器*/ 
	openScanner():void

	/**
	 * `将字符串生成二维码图片`
	 * ========params==========
	 *
	 * `content` :string : 所要生成的二维码字符串
	 */
	encodeImg(params:qrScanner_encodeImg_Params, callback?: (ret:JSON) => void):void

}
interface qrScanner_encodeImg_Params {
	/**所要生成的二维码字符串*/ 
	content:string,

}

interface networkAddress {
	/** 获取手机网络ip*/ 
	get():void

	/** 判断网络是否连接*/ 
	isNetConnected():void

	/** 获取连接的网络类型*/ 
	getNetworkType():void

	/** 添加网速监听*/ 
	netWorkSpeedListener():void

	/** 停止网速监听*/ 
	stopNetWorkSpeedListener():void

}
interface speedPlayer {
	/** 打开一个直播或点播*/ 
	open():void

	/** 关闭播放器并释放内存*/ 
	close():void

	/** 继续播放*/ 
	resume():void

	/** 设置视频地址及标题，开始播放位置*/ 
	setPath():void

	/**
	 * `设置视频区域大小。`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）视频区域的位置及尺寸
	 */
	setRect(params:speedPlayer_setRect_Params):void

	/** 重播*/ 
	replay():void

	/**
	 * `设置视频播放位置`
	 * ========params==========
	 *
	 * `pos` :any : （可选项）视频播放开始位置，单位：秒。
	 */
	seek(params:speedPlayer_seek_Params):void

	/** 获取视频播放的位置*/ 
	getCurrent():void

	/** 获取视频总时长*/ 
	getDuration():void

	/** 设置视频播放倍数*/ 
	setRate():void

	/** 获取视频播放的倍速*/ 
	getRate():void

	/** 全屏显示*/ 
	fullscreen():void

	/** 取消全屏显示*/ 
	cancelFullscreen():void

	/** 获取音量*/ 
	getVol():void

	/** 设置音量*/ 
	setVol():void

	/** 获取亮度*/ 
	getBrightness():void

	/** 设置亮度*/ 
	setBrightness():void

	/** 继续播放*/ 
	start():void

}
interface speedPlayer_setRect_Params {
	/**（可选项）视频区域的位置及尺寸*/ 
	rect?:JSON,

}

interface speedPlayer_seek_Params {
	/**（可选项）视频播放开始位置，单位：秒。*/ 
	pos?:any,

}

interface apk {
	/** 获取apk的包名。*/ 
	getPackageName():void

	/** 获取apk的签名。*/ 
	getSign():void

	/** 获取当前手机的API版本（Android API 版本号）。比如23，（对应Android 6.0）*/ 
	getVersion():void

}
interface snKVStorage {
	/**
	 * `设置字符串数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :string : 值
	 */
	setString(params:snKVStorage_setString_Params):void

	/**
	 * `设置整型数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :any : 值
	 */
	setInt(params:snKVStorage_setInt_Params):void

	/**
	 * `设置浮点型数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :any : 值
	 */
	setDouble(params:snKVStorage_setDouble_Params):void

	/**
	 * `设置布尔数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :boolean : 值
	 */
	setBool(params:snKVStorage_setBool_Params):void

	/**
	 * `设置对象数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :JSON : 值
	 */
	setObject(params:snKVStorage_setObject_Params):void

	/**
	 * `设置数组数据，数据会存储到本地文件系统。`
	 * ========params==========
	 *
	 * `key` :string : 键
	 *
	 * `value` :Array<JSON> : 值
	 */
	setArray(params:snKVStorage_setArray_Params):void

	/**
	 * `获取字符串数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getString(params:snKVStorage_getString_Params):void

	/**
	 * `获取整型数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getInt(params:snKVStorage_getInt_Params):void

	/**
	 * `获取浮点型数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getDouble(params:snKVStorage_getDouble_Params):void

	/**
	 * `获取布尔数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getBool(params:snKVStorage_getBool_Params):void

	/**
	 * `设置对象数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getObject(params:snKVStorage_getObject_Params):void

	/**
	 * `获取数组数据`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	getArray(params:snKVStorage_getArray_Params):void

	/**
	 * `检查是否有kv`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	has(params:snKVStorage_has_Params):void

	/**
	 * `删除单个kv`
	 * ========params==========
	 *
	 * `key` :string : 键
	 */
	removeKey(params:snKVStorage_removeKey_Params):void

	/**
	 * `删除多个kv`
	 * ========params==========
	 *
	 * `keys` :string : 键
	 */
	removeKeys(params:snKVStorage_removeKeys_Params):void

	/** 清除kv*/ 
	clear():void

}
interface snKVStorage_setString_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:string,

}

interface snKVStorage_setInt_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:any,

}

interface snKVStorage_setDouble_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:any,

}

interface snKVStorage_setBool_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:boolean,

}

interface snKVStorage_setObject_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:JSON,

}

interface snKVStorage_setArray_Params {
	/**键*/ 
	key:string,

	/**值*/ 
	value:Array<JSON>,

}

interface snKVStorage_getString_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_getInt_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_getDouble_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_getBool_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_getObject_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_getArray_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_has_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_removeKey_Params {
	/**键*/ 
	key:string,

}

interface snKVStorage_removeKeys_Params {
	/**键*/ 
	keys:string,

}

interface photoStream {
	/**
	 * `打开照片墙页面`
	 * ========params==========
	 *
	 * `close` :string : 是否显示关闭按钮
	 *
	 * `bgColor` :string : 背景色
	 *
	 * `butTextColor` :string : 关闭按钮字体颜色
	 *
	 * `butPressColor` :string : 关闭按钮按下字体颜色
	 *
	 * `files` :Array : 照片墙中的图片数组，支持jpg与png格式的的图片，如果未构造图片数组，则默认图片显示
	 */
	openPSV(params:photoStream_openPSV_Params):void

}
interface photoStream_openPSV_Params {
	/**是否显示关闭按钮*/ 
	close:string,

	/**背景色*/ 
	bgColor:string,

	/**关闭按钮字体颜色*/ 
	butTextColor:string,

	/**关闭按钮按下字体颜色*/ 
	butPressColor:string,

	/**照片墙中的图片数组，支持jpg与png格式的的图片，如果未构造图片数组，则默认图片显示*/ 
	files:Array,

}

interface playRtsp {
	/**
	 * `初始化设置`
	 * ========params==========
	 *
	 * `doubleClick` :boolean : （可选项）是否双机视频播放界面进行横屏切换。
	 *
	 * `isLocked` :boolean : （可选项）是否锁住屏幕，锁住屏幕后，执行全屏和退出全屏接口会无效。
	 */
	init(params:playRtsp_init_Params, callback?: (ret:JSON) => void):void

	/**
	 * `播放rtsp://格式直播流`
	 * ========params==========
	 *
	 * `x` :number : （必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；
	 *
	 * `y` :number : （必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0
	 *
	 * `w` :number : （可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度
	 *
	 * `h` :number : （可选项）模块的高度；默认：所属的 Window 或 Frame 的高度
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `url` :string : （必填项）视频资源地址，仅支持rtsp://
	 *
	 * `options` :Array : （可选项）vlc配置
	 */
	play(params:playRtsp_play_Params, callback?: (ret:JSON) => void):void

	/** 暂停播放*/ 
	pause():void

	/** 暂停后开始播放*/ 
	start():void

	/** 停止播放*/ 
	stop():void

	/** 获取是否全屏播放状态*/ 
	isFullScreen(callback?: (ret:JSON) => void):void

	/** 全屏播放*/ 
	full():void

	/** 退出全屏*/ 
	unfull():void

	/**
	 * `设置音量大小（1、ios设置的是系统音量，请退出播放后，将音量进行恢复操作。2、安卓设置的是视频音量，和安卓系统的本身音量大小有关。）`
	 * ========params==========
	 *
	 * `volume` :number : （必填项）设置音量(0-100)
	 */
	setVolume(params:playRtsp_setVolume_Params):void

	/**
	 * `切换视频播放地址`
	 * ========params==========
	 *
	 * `url` :string : （必填项）视频资源地址，仅支持rtsp://
	 */
	playUrl(params:playRtsp_playUrl_Params, callback?: (ret:JSON) => void):void

	/** 截图*/ 
	saveSnap(callback?: (ret:JSON) => void):void

}
interface playRtsp_init_Params {
	/**（可选项）是否双机视频播放界面进行横屏切换。*/ 
	doubleClick?:boolean,

	/**（可选项）是否锁住屏幕，锁住屏幕后，执行全屏和退出全屏接口会无效。*/ 
	isLocked?:boolean,

}

interface playRtsp_play_Params {
	/**（必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；*/ 
	x:number,

	/**（必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0*/ 
	y:number,

	/**（可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度*/ 
	w?:number,

	/**（可选项）模块的高度；默认：所属的 Window 或 Frame 的高度*/ 
	h?:number,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）视频资源地址，仅支持rtsp://*/ 
	url:string,

	/**（可选项）vlc配置*/ 
	options?:Array,

}

interface playRtsp_setVolume_Params {
	/**（必填项）设置音量(0-100)*/ 
	volume:number,

}

interface playRtsp_playUrl_Params {
	/**（必填项）视频资源地址，仅支持rtsp://*/ 
	url:string,

}

interface moduleCrop {
}
interface marketScore {
}
interface UIPhotoViewer {
	/**
	 * `打开图片浏览器`
	 * ========params==========
	 *
	 * `images` :Array : 要读取的图片路径组成的数组，图片路径支持 fs://、http:// 协议
	 *
	 * `activeIndex` :number : （可选项）当前要显示的图片在图片路径数组中的索引
	 *
	 * `placeholderImg` :string : （可选项）当加载网络图片时显示的占位图路径，要求本地图片路径（widget://、fs://）
	 *
	 * `bgColor` :string : （可选项）图片浏览器背景色，支持 rgb、rgba、#
	 *
	 * `zoomEnabled` :boolean : （可选项）是否打开缩放手势识别功能（随手势放大缩小图片）
	 *
	 * `mode` :number : （可选项）图片的现实模式；1：为图片原本大小 2：图片宽度等比例放大到宽等于屏幕款;android不支持此参数
	 *
	 * `gestureClose` :boolean : （可选项）手势关闭，上划或下划关闭控件
	 *
	 * `atime` :number : （可选项）打开关闭动画的执行时间，传0无动画
	 */
	open(params:UIPhotoViewer_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭图片浏览器*/ 
	close():void

	/** 隐藏图片浏览器*/ 
	hide():void

	/** 显示图片浏览器*/ 
	show():void

	/**
	 * `设置当前显示图片`
	 * ========params==========
	 *
	 * `index` :number : （可选项）当前要显示的图片在图片路径数组中的索引
	 */
	setIndex(params:UIPhotoViewer_setIndex_Params):void

	/** 获取当前图片在图片路径数组内的索引*/ 
	getIndex():void

	/**
	 * `获取指定图片在本地的绝对路径`
	 * ========params==========
	 *
	 * `index` :number : 指定图片在图片数组中的索引
	 */
	getImage(params:UIPhotoViewer_getImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置指定位置的图片，**若设置的是网络图片加载成功或失败会给 open 接口回调该加载事件**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）指定图片在图片数组中的索引
	 *
	 * `image` :string : 要设置的图片路径，支持本地和网络路径（fs://、http://）
	 */
	setImage(params:UIPhotoViewer_setImage_Params):void

	/**
	 * `往已打开的图片浏览器里添加图片（拼接在最后）`
	 * ========params==========
	 *
	 * `images` :Array : 要拼接的图片路径组成的数组，图片路径支持 fs://、http:// 协议
	 */
	appendImage(params:UIPhotoViewer_appendImage_Params):void

	/**
	 * `删除指定位置的图片`
	 * ========params==========
	 *
	 * `index` :number : （可选项）删除的指定图片在图片数组中的索引
	 */
	deleteImage(params:UIPhotoViewer_deleteImage_Params):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface UIPhotoViewer_open_Params {
	/**要读取的图片路径组成的数组，图片路径支持 fs://、http:// 协议*/ 
	images:Array,

	/**（可选项）当前要显示的图片在图片路径数组中的索引*/ 
	activeIndex?:number,

	/**（可选项）当加载网络图片时显示的占位图路径，要求本地图片路径（widget://、fs://）*/ 
	placeholderImg?:string,

	/**（可选项）图片浏览器背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）是否打开缩放手势识别功能（随手势放大缩小图片）*/ 
	zoomEnabled?:boolean,

	/**（可选项）图片的现实模式；1：为图片原本大小 2：图片宽度等比例放大到宽等于屏幕款;android不支持此参数*/ 
	mode?:number,

	/**（可选项）手势关闭，上划或下划关闭控件*/ 
	gestureClose?:boolean,

	/**（可选项）打开关闭动画的执行时间，传0无动画*/ 
	atime?:number,

}

interface UIPhotoViewer_setIndex_Params {
	/**（可选项）当前要显示的图片在图片路径数组中的索引*/ 
	index?:number,

}

interface UIPhotoViewer_getImage_Params {
	/**指定图片在图片数组中的索引*/ 
	index:number,

}

interface UIPhotoViewer_setImage_Params {
	/**（可选项）指定图片在图片数组中的索引*/ 
	index?:number,

	/**要设置的图片路径，支持本地和网络路径（fs://、http://）*/ 
	image:string,

}

interface UIPhotoViewer_appendImage_Params {
	/**要拼接的图片路径组成的数组，图片路径支持 fs://、http:// 协议*/ 
	images:Array,

}

interface UIPhotoViewer_deleteImage_Params {
	/**（可选项）删除的指定图片在图片数组中的索引*/ 
	index?:number,

}

interface androidPdfReader {
	/**
	 * `打开一个 pdf 格式的文档`
	 * ========params==========
	 *
	 * `path` :string : 文档的路径，支持 fs://、http:// 等本地和网络协议
	 */
	open(params:androidPdfReader_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开pdf文档视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `path` :string : 文档的路径，支持 fs://、http:// 等本地和网络协议, 暂不支持（widget://）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openView(params:androidPdfReader_openView_Params, callback?: (ret:JSON) => void):void

	/** 隐藏文档视图*/ 
	hideView():void

	/** 显示文档视图*/ 
	showView():void

	/** 关闭文档视图*/ 
	closeView():void

	/** 清除缓存到本地的文件，**本接口只清除本模块缓存的数据，若要清除本app缓存的所有数据这调用api.clearCache***/ 
	clearCache():void

}
interface androidPdfReader_open_Params {
	/**文档的路径，支持 fs://、http:// 等本地和网络协议*/ 
	path:string,

}

interface androidPdfReader_openView_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**文档的路径，支持 fs://、http:// 等本地和网络协议, 暂不支持（widget://）*/ 
	path:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface shareAction {
	/**
	 * `打开分享对话框`
	 * ========params==========
	 *
	 * `text` :string : （可选项）要分享的文本信息，**在iOS端，当type为image时，本参数会被忽略**
	 *
	 * `type` :string : （可选项）分享文件的类型（iOS系统微信不支持纯文字的分享）
	 *
	 * `path` :string : （可选项）要分享的路径，若是‘file’或‘audio’类型，要求本地路径（fs://、widget://），若是url类型，需要有效的网址。若 images 不为空则模块忽略本参数。**Android 平台不支持 widget:// 路径**
	 *
	 * `images` :Array : （可选项）分享的图片路径组成的数组，仅当 type 为 image 时有效；要求本地路径（fs://、widget://）。若本参数不为空则模块忽略 path 参数。**android 仅支持fs://路径**
	 *
	 * `thumbnail` :string : （可选项）分享时的缩略图；要求本地路径（fs://、widget://）。若不传则不显示。**仅支持 iOS 平台**
	 *
	 * `arrowRect` :JSON : （可选项）iPad中显示时，箭头指向的位置，只iPad有效
	 *
	 * `arrowDirection` :string : （可选项）iPad中显示时，箭头指向的方向，只iPad有效
	 *
	 * `contentSize` :JSON : （可选项）iPad中显示时，对话框大小，只iPad有效，iOS不支持
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	share(params:shareAction_share_Params):void

	/** 分享文本到系统分享控件（通过系统分享控件分享到目标APP）*/ 
	shareText():void

	/**
	 * `打开分享对话框，分享图片到目标 APP **android多图片分享（即images参数）功能，会在android 7.0+ 并且在编译版本（targetVersion）为26时会出现一些兼容性问题，推荐使用share接口分享图片**`
	 * ========params==========
	 *
	 * `images` :Array : 要分享图片的路径组成的数组，要求本地路径（widget://、fs://）**Android 平台不支持 widget://**
	 *
	 * `text` :string : （可选项）要分享的文本信息，**仅支持 android 端**
	 *
	 * `iPad` :JSON : （可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式
	 */
	shareImage(params:shareAction_shareImage_Params):void

	/**
	 * `打开分享对话框，分享文件`
	 * ========params==========
	 *
	 * `path` :string : 要分享的文件路径，要求本地路径（fs://、widget://），**Android 平台不支持 widget:// 路径**
	 *
	 * `text` :string : （可选项）要分享的文本信息**仅支持 android 端**
	 *
	 * `iPad` :JSON : （可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式
	 */
	shareFile(params:shareAction_shareFile_Params):void

	/**
	 * `打开分享对话框，分享音频文件`
	 * ========params==========
	 *
	 * `path` :string : 要分享的音频路径，要求本地路径（fs://、widget://），**Android 平台不支持 widget:// 路径**
	 *
	 * `text` :string : （可选项）要分享的文本信息**仅支持 android 端**
	 *
	 * `iPad` :JSON : （可选项）iPad 上分享控件的样式配置
	 */
	shareAudio(params:shareAction_shareAudio_Params):void

	/**
	 * `打开分享对话框，分享Url`
	 * ========params==========
	 *
	 * `url` :string : 要分享的有效网址
	 *
	 * `text` :string : （可选项）要分享的文本信息
	 *
	 * `thumbnail` :string : （可选项）分享时的缩略图；要求本地路径（fs://、widget://）。若不传则不显示。**仅支持 iOS 平台**
	 *
	 * `iPad` :JSON : （可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式
	 */
	shareUrl(params:shareAction_shareUrl_Params):void

	/**
	 * `获取所有支持分享的app的信息 **（注意：该方法仅支持android）**`
	 * ========params==========
	 *
	 * `type` :string : （可选项）支持分享的类型
	 *
	 * `ret` :JSON : null
	 */
	getSupportSharedAppInfos(params:shareAction_getSupportSharedAppInfos_Params):void

}
interface shareAction_share_Params {
	/**（可选项）要分享的文本信息，**在iOS端，当type为image时，本参数会被忽略***/ 
	text?:string,

	/**（可选项）分享文件的类型（iOS系统微信不支持纯文字的分享）*/ 
	type?:string,

	/**（可选项）要分享的路径，若是‘file’或‘audio’类型，要求本地路径（fs://、widget://），若是url类型，需要有效的网址。若 images 不为空则模块忽略本参数。**Android 平台不支持 widget:// 路径***/ 
	path?:string,

	/**（可选项）分享的图片路径组成的数组，仅当 type 为 image 时有效；要求本地路径（fs://、widget://）。若本参数不为空则模块忽略 path 参数。**android 仅支持fs://路径***/ 
	images?:Array,

	/**（可选项）分享时的缩略图；要求本地路径（fs://、widget://）。若不传则不显示。**仅支持 iOS 平台***/ 
	thumbnail?:string,

	/**（可选项）iPad中显示时，箭头指向的位置，只iPad有效*/ 
	arrowRect?:JSON,

	/**（可选项）iPad中显示时，箭头指向的方向，只iPad有效*/ 
	arrowDirection?:string,

	/**（可选项）iPad中显示时，对话框大小，只iPad有效，iOS不支持*/ 
	contentSize?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface shareAction_shareImage_Params {
	/**要分享图片的路径组成的数组，要求本地路径（widget://、fs://）**Android 平台不支持 widget://***/ 
	images:Array,

	/**（可选项）要分享的文本信息，**仅支持 android 端***/ 
	text?:string,

	/**（可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式*/ 
	iPad?:JSON,

}

interface shareAction_shareFile_Params {
	/**要分享的文件路径，要求本地路径（fs://、widget://），**Android 平台不支持 widget:// 路径***/ 
	path:string,

	/**（可选项）要分享的文本信息**仅支持 android 端***/ 
	text?:string,

	/**（可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式*/ 
	iPad?:JSON,

}

interface shareAction_shareAudio_Params {
	/**要分享的音频路径，要求本地路径（fs://、widget://），**Android 平台不支持 widget:// 路径***/ 
	path:string,

	/**（可选项）要分享的文本信息**仅支持 android 端***/ 
	text?:string,

	/**（可选项）iPad 上分享控件的样式配置*/ 
	iPad?:JSON,

}

interface shareAction_shareUrl_Params {
	/**要分享的有效网址*/ 
	url:string,

	/**（可选项）要分享的文本信息*/ 
	text?:string,

	/**（可选项）分享时的缩略图；要求本地路径（fs://、widget://）。若不传则不显示。**仅支持 iOS 平台***/ 
	thumbnail?:string,

	/**（可选项）iPad 上分享控件的样式配置，若不传则在iPad上显示默认样式*/ 
	iPad?:JSON,

}

interface shareAction_getSupportSharedAppInfos_Params {
	/**（可选项）支持分享的类型*/ 
	type?:string,

	/**null*/ 
	ret:JSON,

}

interface easyVideoPlayer {
}
interface systemTool {
	/** 获取系统字体*/ 
	getSystemFont():void

	/** 获取系统的CPU*/ 
	getCPU():void

	/** 获取系统的内存*/ 
	getMemory():void

	/** 获取系统的密码*/ 
	passCode():void

}
interface imageClip {
}
interface wxShortVideo {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `album` :boolean : 是否保存到相册（仅iOS支持）
	 *
	 * `save` :JSON : 文件保存配置
	 *
	 * `maxTime` :number : （可选项）最大录制时间（s）（仅android支持）
	 *
	 * `minTime` :number : （可选项）最小录制时间（s）（仅android支持）
	 */
	open(params:wxShortVideo_open_Params, callback?: (ret:JSON) => void):void

}
interface wxShortVideo_open_Params {
	/**是否保存到相册（仅iOS支持）*/ 
	album:boolean,

	/**文件保存配置*/ 
	save:JSON,

	/**（可选项）最大录制时间（s）（仅android支持）*/ 
	maxTime?:number,

	/**（可选项）最小录制时间（s）（仅android支持）*/ 
	minTime?:number,

}

interface tools {
	/**
	 * `分享内容`
	 * ========params==========
	 *
	 * `to` :string : （必须）分享的目标平台
	 *
	 * `picurl` :Array : （必须）[图片1,图片2,图片3....]  微信朋友圈,好友,QQ空间,QQ好友最多9张 (微博只能1张图)
	 *
	 * `content` :boolean : （可选项,在IOS上才有效） 在IOS 11及以上没有办法直接绕过系统分享对框,必须将此处设为true 就先调用系统对话框来让用户选择分享到哪个用户,如选择微信,再调用微信的专用分享页去选择分享到朋友圈或是好友 (微博,QQ也都一样,这个是系统限制)
	 */
	share(params:tools_share_Params, callback?: (ret:JSON) => void):void

}
interface tools_share_Params {
	/**（必须）分享的目标平台*/ 
	to:string,

	/**（必须）[图片1,图片2,图片3....]  微信朋友圈,好友,QQ空间,QQ好友最多9张 (微博只能1张图)*/ 
	picurl:Array,

	/**（可选项,在IOS上才有效） 在IOS 11及以上没有办法直接绕过系统分享对框,必须将此处设为true 就先调用系统对话框来让用户选择分享到哪个用户,如选择微信,再调用微信的专用分享页去选择分享到朋友圈或是好友 (微博,QQ也都一样,这个是系统限制)*/ 
	content?:boolean,

}

interface mam {
}
interface mcm {
}
interface msm {
	/** 获取认证信息*/ 
	getAuthInfo(callback?: (ret:JSON) => void):void

	/**
	 * `证书申请`
	 * ========params==========
	 *
	 * `email` :string : 邮箱，不能为空
	 *
	 * `name` :string : 姓名
	 *
	 * `group` :string : 分组
	 *
	 * `description` :string : 申请说明
	 *
	 * `photo` :string : 证件照
	 */
	certApply(params:msm_certApply_Params, callback?: (ret:JSON) => void):void

	/**
	 * `认证码验证`
	 * ========params==========
	 *
	 * `authCode` :string : 认证码，不能为空
	 */
	certVerify(params:msm_certVerify_Params, callback?: (ret:JSON) => void):void

	/**
	 * `登录`
	 * ========params==========
	 *
	 * `userName` :string : 用户名，不能为空
	 *
	 * `password` :string : 密码，不能为空
	 */
	login(params:msm_login_Params, callback?: (ret:JSON) => void):void

}
interface msm_certApply_Params {
	/**邮箱，不能为空*/ 
	email:string,

	/**姓名*/ 
	name:string,

	/**分组*/ 
	group:string,

	/**申请说明*/ 
	description:string,

	/**证件照*/ 
	photo:string,

}

interface msm_certVerify_Params {
	/**认证码，不能为空*/ 
	authCode:string,

}

interface msm_login_Params {
	/**用户名，不能为空*/ 
	userName:string,

	/**密码，不能为空*/ 
	password:string,

}

interface push {
}
interface dropDownMenu {
	/**
	 * `打开菜单`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `data` :Array : （必填项）模块九宫格按钮图标和名称
	 *
	 * `textUnselectedColor` :boolean : （可选项）设置默认字体颜色代码
	 *
	 * `textSelectedColor` :string : （可选项）设置选中字体颜色代码
	 *
	 * `dropDownCheckedColor` :string : （可选项）设置列表选中后右侧颜色代码(仅iOS有效)
	 *
	 * `dropDownChecked` :string : （可选项）设置列表选中后右侧图标资源路径(支持fs:// widget://)（仅Android有效）
	 *
	 * `dropDownSelectedIcon` :string : （可选项）设置顶部列表选中后图标资源路径(支持fs:// widget://)
	 *
	 * `dropDownUnselectedIcon` :string : （可选项）设置顶部列表未选中图标资源路径(支持fs:// widget://)
	 */
	openMenu(params:dropDownMenu_openMenu_Params, callback?: (ret:JSON) => void):void

	/** 隐藏菜单*/ 
	hideMenu(callback?: (ret:JSON) => void):void

	/** 显示菜单*/ 
	showMenu():void

	/** 关闭菜单*/ 
	closeMenu(callback?: (ret:JSON) => void):void

}
interface dropDownMenu_openMenu_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）模块九宫格按钮图标和名称*/ 
	data:Array,

	/**（可选项）设置默认字体颜色代码*/ 
	textUnselectedColor?:boolean,

	/**（可选项）设置选中字体颜色代码*/ 
	textSelectedColor?:string,

	/**（可选项）设置列表选中后右侧颜色代码(仅iOS有效)*/ 
	dropDownCheckedColor?:string,

	/**（可选项）设置列表选中后右侧图标资源路径(支持fs:// widget://)（仅Android有效）*/ 
	dropDownChecked?:string,

	/**（可选项）设置顶部列表选中后图标资源路径(支持fs:// widget://)*/ 
	dropDownSelectedIcon?:string,

	/**（可选项）设置顶部列表未选中图标资源路径(支持fs:// widget://)*/ 
	dropDownUnselectedIcon?:string,

}

interface NVNavigationBar {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : 模块样式配置
	 *
	 * `items` :Array<JSON> : 按钮项数据
	 *
	 * `selectedIndex` :number : （可选项）被选中的导航项的下标，不传表示不选中任何 item
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 *
	 * `id` :string : 导航条的id
	 */
	open(params:NVNavigationBar_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 */
	close(params:NVNavigationBar_close_Params):void

	/**
	 * `隐藏`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `animation` :boolean : （可选项）显示是否添加动画（淡入淡出的动画）
	 *
	 * `orientation` :string : （可选项）动画的方向(top，bottom，left，right)
	 */
	hide(params:NVNavigationBar_hide_Params):void

	/**
	 * `显示`
	 * ========params==========
	 *
	 * `id` :null : null
	 *
	 * `animation` :boolean : （可选项）显示是否添加动画（淡入淡出的动画）
	 *
	 * `orientation` :string : （可选项）动画的方向(top，bottom，left，right)
	 */
	show(params:NVNavigationBar_show_Params):void

	/**
	 * `设置选中项`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `index` :number : 被选中的导航项的下标
	 *
	 * `selected` :boolean : 选中/取消选中
	 */
	setSelected(params:NVNavigationBar_setSelected_Params, callback?: (ret:JSON) => void):void

	/**
	 * `插入子项`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `index` :number : 插入的导航项的下标
	 *
	 * `item` :JSON : 按钮项数据
	 */
	insertItem(params:NVNavigationBar_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除子项`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `index` :number : 要删除的导航项的下标
	 */
	deleteItem(params:NVNavigationBar_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新子项`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `index` :number : 更新的导航项的下标
	 *
	 * `item` :JSON : 按钮项数据
	 */
	updateItem(params:NVNavigationBar_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新所有子项`
	 * ========params==========
	 *
	 * `id` :string : 导航条的id
	 *
	 * `items` :Array<JSON> : 按钮项数据
	 */
	update(params:NVNavigationBar_update_Params, callback?: (ret:JSON) => void):void

}
interface NVNavigationBar_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**模块样式配置*/ 
	styles:JSON,

	/**按钮项数据*/ 
	items:Array<JSON>,

	/**（可选项）被选中的导航项的下标，不传表示不选中任何 item*/ 
	selectedIndex?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed:boolean,

	/**导航条的id*/ 
	id:string,

}

interface NVNavigationBar_close_Params {
	/**导航条的id*/ 
	id:string,

}

interface NVNavigationBar_hide_Params {
	/**导航条的id*/ 
	id:string,

	/**（可选项）显示是否添加动画（淡入淡出的动画）*/ 
	animation?:boolean,

	/**（可选项）动画的方向(top，bottom，left，right)*/ 
	orientation?:string,

}

interface NVNavigationBar_show_Params {
	/**null*/ 
	id:null,

	/**（可选项）显示是否添加动画（淡入淡出的动画）*/ 
	animation?:boolean,

	/**（可选项）动画的方向(top，bottom，left，right)*/ 
	orientation?:string,

}

interface NVNavigationBar_setSelected_Params {
	/**导航条的id*/ 
	id:string,

	/**被选中的导航项的下标*/ 
	index:number,

	/**选中/取消选中*/ 
	selected:boolean,

}

interface NVNavigationBar_insertItem_Params {
	/**导航条的id*/ 
	id:string,

	/**插入的导航项的下标*/ 
	index:number,

	/**按钮项数据*/ 
	item:JSON,

}

interface NVNavigationBar_deleteItem_Params {
	/**导航条的id*/ 
	id:string,

	/**要删除的导航项的下标*/ 
	index:number,

}

interface NVNavigationBar_updateItem_Params {
	/**导航条的id*/ 
	id:string,

	/**更新的导航项的下标*/ 
	index:number,

	/**按钮项数据*/ 
	item:JSON,

}

interface NVNavigationBar_update_Params {
	/**导航条的id*/ 
	id:string,

	/**按钮项数据*/ 
	items:Array<JSON>,

}

interface scrollRotation {
}
interface arcMenu {
	/**
	 * `控件显示在最上层（仅android支持）`
	 * ========params==========
	 *
	 * `id` :number : 要操作的控件id
	 */
	bringToFront(params:arcMenu_bringToFront_Params):void

}
interface arcMenu_bringToFront_Params {
	/**要操作的控件id*/ 
	id:number,

}

interface circularMenu {
}
interface tuberBar {
}
interface sideMenu {
	/**
	 * `隐藏菜单`
	 * ========params==========
	 *
	 * `id` :number : 要操作的菜单的id，不可为空
	 */
	hidden(params:sideMenu_hidden_Params):void

	/** 显示菜单*/ 
	show():void

	/** 关闭菜单*/ 
	close():void

}
interface sideMenu_hidden_Params {
	/**要操作的菜单的id，不可为空*/ 
	id:number,

}

interface navigationMenu {
}
interface navigationBar {
}
interface actionButton {
}
interface tabBarMenu {
}
interface bubbleMenu {
	/**
	 * `打开菜单`
	 * ========params==========
	 *
	 * `style` :JSON : （可选项）气泡样式设置
	 *
	 * `centerX` :number : （可选项）气泡菜单箭头点的坐标
	 *
	 * `centerY` :number : （可选项）气泡菜单箭头点的坐标
	 *
	 * `btnArray` :Array : 按钮的信息组成的数组
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:bubbleMenu_open_Params, callback?: (ret:JSON) => void):void

	/** 隐藏菜单，只是隐藏，还在内存里没有清除*/ 
	hide():void

	/** 显示菜单*/ 
	show():void

	/** 关闭菜单，意味着从内存里清除*/ 
	close():void

}
interface bubbleMenu_open_Params {
	/**（可选项）气泡样式设置*/ 
	style?:JSON,

	/**（可选项）气泡菜单箭头点的坐标*/ 
	centerX?:number,

	/**（可选项）气泡菜单箭头点的坐标*/ 
	centerY?:number,

	/**按钮的信息组成的数组*/ 
	btnArray:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface NVTabBarAnimation {
	/**
	 * `打开模块并显示`
	 * ========params==========
	 *
	 * `styles` :JSON : 模块样式配置
	 *
	 * `items` :Array : 导航条子项配置，子项条数不能超过 5
	 *
	 * `selectedIndex` :number : （可选项）默认值为选中状态的按钮的索引，若不传则默认无选中项
	 */
	open(params:NVTabBarAnimation_open_Params, callback?: (ret:JSON) => void):void

	/** 隐藏模块（并没有从内存清除）*/ 
	hide():void

	/** 显示已隐藏的模块*/ 
	show():void

	/** 关闭模块，并从内存里清除*/ 
	close():void

	/**
	 * `设置按钮右上角的徽章`
	 * ========params==========
	 *
	 * `index` :number : null
	 *
	 * `badge` :string : null
	 */
	setBadge(params:NVTabBarAnimation_setBadge_Params):void

	/**
	 * `设置按钮 item 的属性`
	 * ========params==========
	 *
	 * `index` :number : （可选项）要设置的子项的索引
	 *
	 * `selected` :boolean : （可选项）要设置的子项按钮的选中状态，true：选中状态|false：非选中状态
	 *
	 * `icon` :JSON : （可选项）要设置的子项按钮的 icon 静态图标，若不传则显示原值
	 *
	 * `animationIcons` :JSON : （可选项）要设置的子项按钮的 icon 动态图标，若不传则显示原值
	 *
	 * `title` :JSON : （可选项）子项标题设置，若不传则显示原值
	 */
	setItemAttr(params:NVTabBarAnimation_setItemAttr_Params):void

	/** 将已经打开的模块置为最上层显示*/ 
	bringToFront():void

}
interface NVTabBarAnimation_open_Params {
	/**模块样式配置*/ 
	styles:JSON,

	/**导航条子项配置，子项条数不能超过 5*/ 
	items:Array,

	/**（可选项）默认值为选中状态的按钮的索引，若不传则默认无选中项*/ 
	selectedIndex?:number,

}

interface NVTabBarAnimation_setBadge_Params {
	/**null*/ 
	index:number,

	/**null*/ 
	badge:string,

}

interface NVTabBarAnimation_setItemAttr_Params {
	/**（可选项）要设置的子项的索引*/ 
	index?:number,

	/**（可选项）要设置的子项按钮的选中状态，true：选中状态|false：非选中状态*/ 
	selected?:boolean,

	/**（可选项）要设置的子项按钮的 icon 静态图标，若不传则显示原值*/ 
	icon?:JSON,

	/**（可选项）要设置的子项按钮的 icon 动态图标，若不传则显示原值*/ 
	animationIcons?:JSON,

	/**（可选项）子项标题设置，若不传则显示原值*/ 
	title?:JSON,

}

interface MNActionButton {
}
interface MNRotationMenu {
	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本app缓存的所有数据这调用api.clearCache***/ 
	clearCache():void

}
interface MNPopups {
}
interface stackMenu {
}
interface MNNavigationMenu {
}
interface MNStack {
}
interface NVTabBar {
	/**
	 * `打开模块并显示`
	 * ========params==========
	 *
	 * `styles` :JSON : 模块样式配置
	 *
	 * `items` :Array : 导航条子项配置，子项条数不能超过 5
	 *
	 * `cursorInOptions` :JSON : 选中项的游标(如当前激活状态的item底部显示5pt高度的色块) 若不传，该字段无效
	 *
	 * `selectedIndex` :number : （可选项）默认值为选中状态的按钮的索引，若不传则默认无选中项
	 *
	 * `enableDoubleClick` :boolean : 使能双击事件，默认：false
	 *
	 * `enableLongPressClick` :boolean : 是否使用长按事件，默认：false
	 */
	open(params:NVTabBar_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏模块（并没有从内存清除）`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）显示是否添加动画（淡入淡出的动画）
	 */
	hide(params:NVTabBar_hide_Params):void

	/**
	 * `显示已隐藏的模块`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）显示是否添加动画（淡入淡出的动画）
	 */
	show(params:NVTabBar_show_Params):void

	/** 关闭模块，并从内存里清除*/ 
	close():void

	/**
	 * `设置按钮右上角的徽章`
	 * ========params==========
	 *
	 * `index` :number : null
	 *
	 * `badge` :string : null
	 *
	 * `horizentalPadding` :string : null
	 */
	setBadge(params:NVTabBar_setBadge_Params):void

	/**
	 * `设置按钮的选中状态`
	 * ========params==========
	 *
	 * `index` :number : （可选项）要设置的子项的索引
	 *
	 * `selected` :boolean : （可选项）要设置的子项按钮的状态
	 *
	 * `icons` :Array : （可选项）设置子按钮的多图联播效果（gif图效果），若不传本参数则默认显示open接口内配置的图片
	 *
	 * `interval` :number : （可选项）动画帧之间的时间间隔（单位:毫秒 ms）
	 *
	 * `animatedRepetitions` :number : （可选项）设置动画重复次数（android仅支持循环一次和无线循环，即该参数只对1和0有效）
	 */
	setSelect(params:NVTabBar_setSelect_Params):void

	/** 将已经打开的模块置为最上层显示*/ 
	bringToFront():void

}
interface NVTabBar_open_Params {
	/**模块样式配置*/ 
	styles:JSON,

	/**导航条子项配置，子项条数不能超过 5*/ 
	items:Array,

	/**选中项的游标(如当前激活状态的item底部显示5pt高度的色块) 若不传，该字段无效*/ 
	cursorInOptions:JSON,

	/**（可选项）默认值为选中状态的按钮的索引，若不传则默认无选中项*/ 
	selectedIndex?:number,

	/**使能双击事件，默认：false*/ 
	enableDoubleClick:boolean,

	/**是否使用长按事件，默认：false*/ 
	enableLongPressClick:boolean,

}

interface NVTabBar_hide_Params {
	/**（可选项）显示是否添加动画（淡入淡出的动画）*/ 
	animation?:boolean,

}

interface NVTabBar_show_Params {
	/**（可选项）显示是否添加动画（淡入淡出的动画）*/ 
	animation?:boolean,

}

interface NVTabBar_setBadge_Params {
	/**null*/ 
	index:number,

	/**null*/ 
	badge:string,

	/**null*/ 
	horizentalPadding:string,

}

interface NVTabBar_setSelect_Params {
	/**（可选项）要设置的子项的索引*/ 
	index?:number,

	/**（可选项）要设置的子项按钮的状态*/ 
	selected?:boolean,

	/**（可选项）设置子按钮的多图联播效果（gif图效果），若不传本参数则默认显示open接口内配置的图片*/ 
	icons?:Array,

	/**（可选项）动画帧之间的时间间隔（单位:毫秒 ms）*/ 
	interval?:number,

	/**（可选项）设置动画重复次数（android仅支持循环一次和无线循环，即该参数只对1和0有效）*/ 
	animatedRepetitions?:number,

}

interface pullMenu {
}
interface tabBar {
}
interface columnBar {
	/**
	 * `打开栏目导航`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）浏览器窗口的位置和大小，设置margin后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充。建议使用margin布局，可以完美适配带smartBar的手机。
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `allData` :Array : （必填项）导航条上所有选择项的集合;(数组内菜单名建议2-4个字为最佳效果)
	 *
	 * `showData` :Array : （必填项）导航条上显示的选择项的集合(数组内菜单名建议2-4个字为最佳效果)
	 *
	 * `maxShow` :any : （可选项）导航条上最多显示的选择项的个数.
	 *
	 * `isExpand` :any : （可选项）是否支持可扩展的功能,(0:不开启扩展，1:开启扩展).
	 *
	 * `showedLable` :boolean : （可选项）扩展栏目的已展示栏目标题
	 *
	 * `addLable` :boolean : （可选项）扩展栏目的可添加栏目标题
	 */
	open(params:columnBar_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置当前选中项`
	 * ========params==========
	 *
	 * `index` :any : （可选项）当前选中项的序号值。（备注：改值需要通过open接口返回的shows数组位置索引进行控制）。
	 */
	setCurrentItem(params:columnBar_setCurrentItem_Params, callback?: (ret:JSON) => void):void

	/** 隐藏导航菜单*/ 
	hide(callback?: (ret:JSON) => void):void

	/** 显示导航菜单*/ 
	show(callback?: (ret:JSON) => void):void

	/** 监听栏目item被点击*/ 
	onItemClick():void

	/** 监听栏目显示数据发生变化*/ 
	onDataChange():void

	/** 在扩展界面添加item时超过open设置的最大值数时回调*/ 
	outNumberMax():void

	/** 关闭导航菜单*/ 
	close(callback?: (ret:JSON) => void):void

}
interface columnBar_open_Params {
	/**（可选项）浏览器窗口的位置和大小，设置margin后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充。建议使用margin布局，可以完美适配带smartBar的手机。*/ 
	rect?:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）导航条上所有选择项的集合;(数组内菜单名建议2-4个字为最佳效果)*/ 
	allData:Array,

	/**（必填项）导航条上显示的选择项的集合(数组内菜单名建议2-4个字为最佳效果)*/ 
	showData:Array,

	/**（可选项）导航条上最多显示的选择项的个数.*/ 
	maxShow?:any,

	/**（可选项）是否支持可扩展的功能,(0:不开启扩展，1:开启扩展).*/ 
	isExpand?:any,

	/**（可选项）扩展栏目的已展示栏目标题*/ 
	showedLable?:boolean,

	/**（可选项）扩展栏目的可添加栏目标题*/ 
	addLable?:boolean,

}

interface columnBar_setCurrentItem_Params {
	/**（可选项）当前选中项的序号值。（备注：改值需要通过open接口返回的shows数组位置索引进行控制）。*/ 
	index?:any,

}

interface gesturePassword {
	/** 打开模块，此模块为任意绘制，开发时按照需求进行调用，本接口只返回用户输入的密码*/ 
	open(callback?: (ret:JSON) => void):void

	/**
	 * `打开设置密码界面，根据要求进行相应提示。`
	 * ========params==========
	 *
	 * `rect` :JSON : 模块的位置及尺寸
	 *
	 * `bgColor` :string : （必须项）模块背景颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `color` :string : （必须项）元素触摸下的颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `unTouchColor` :string : （必须项）元素常态下的颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `saveInLocal` :number : 是否本机存储密码
	 *
	 * `pointDistance` :number : 每个触点元素之间的间隔
	 *
	 * `columns` :number : 每行（列）显示几个触摸圈元素
	 *
	 * `minLength` :number : 密码组成的元素最小数量
	 *
	 * `fixedOn` :string : 模块依附于当前 window
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 */
	openSetPassword(params:gesturePassword_openSetPassword_Params, callback?: (ret:JSON) => void):void

	/**
	 * `验证密码，可以验证之前保存在本地密码，也可以验证指定密码。`
	 * ========params==========
	 *
	 * `rect` :JSON : 模块的位置及尺寸
	 *
	 * `bgColor` :string : （必须项）模块背景颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `color` :string : （必须项）元素触摸下的颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `unTouchColor` :string : （必须项）元素常态下的颜色，支持十六进制颜色系，如：#FFFFFF
	 *
	 * `pointDistance` :number : 每个触点元素之间的间隔
	 *
	 * `columns` :number : 每行（列）显示几个触摸圈元素
	 *
	 * `mode` :number : 1表示和本机保存的密码进行匹对，2表示和指定的密码匹对
	 *
	 * `comparePassword` :string : 指定匹对的密码
	 *
	 * `fixedOn` :string : 模块依附于当前 window
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 */
	openCheckPassword(params:gesturePassword_openCheckPassword_Params, callback?: (ret:JSON) => void):void

	/** 关闭模块，并且释放。*/ 
	close(callback?: (ret:JSON) => void):void

	/**
	 * `设置当前输入密码的所有元素的颜色。`
	 * ========params==========
	 *
	 * `color` :string : （必须项）元素以及指引线颜色，支持十六进制颜色系，如：#FFFFFF
	 */
	setTempColor(params:gesturePassword_setTempColor_Params, callback?: (ret:JSON) => void):void

	/** 本机是否已经设置了密码。*/ 
	isSettedPassword(callback?: (ret:JSON) => void):void

	/** 清空本地存储的密码。*/ 
	clearLocalPwd(callback?: (ret:JSON) => void):void

}
interface gesturePassword_openSetPassword_Params {
	/**模块的位置及尺寸*/ 
	rect:JSON,

	/**（必须项）模块背景颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	bgColor:string,

	/**（必须项）元素触摸下的颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	color:string,

	/**（必须项）元素常态下的颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	unTouchColor:string,

	/**是否本机存储密码*/ 
	saveInLocal:number,

	/**每个触点元素之间的间隔*/ 
	pointDistance:number,

	/**每行（列）显示几个触摸圈元素*/ 
	columns:number,

	/**密码组成的元素最小数量*/ 
	minLength:number,

	/**模块依附于当前 window*/ 
	fixedOn:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

}

interface gesturePassword_openCheckPassword_Params {
	/**模块的位置及尺寸*/ 
	rect:JSON,

	/**（必须项）模块背景颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	bgColor:string,

	/**（必须项）元素触摸下的颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	color:string,

	/**（必须项）元素常态下的颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	unTouchColor:string,

	/**每个触点元素之间的间隔*/ 
	pointDistance:number,

	/**每行（列）显示几个触摸圈元素*/ 
	columns:number,

	/**1表示和本机保存的密码进行匹对，2表示和指定的密码匹对*/ 
	mode:number,

	/**指定匹对的密码*/ 
	comparePassword:string,

	/**模块依附于当前 window*/ 
	fixedOn:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

}

interface gesturePassword_setTempColor_Params {
	/**（必须项）元素以及指引线颜色，支持十六进制颜色系，如：#FFFFFF*/ 
	color:string,

}

interface UIPullRefreshDrop {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户手势下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface doubleBarChart {
	/**
	 * `打开柱状图视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `yAxis` :JSON : 双柱状图的 Y 轴配置
	 *
	 * `data` :Array : 双柱状图关键结点的数据
	 *
	 * `styles` :any : （可选项）模块视图内元素样式配置
	 *
	 * `showData` :boolean : （可选项）是否显示每条柱子上的数据（数据样式通y轴标注字体样式）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:doubleBarChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重新加载数据`
	 * ========params==========
	 *
	 * `id` :number : 要刷新的模块的 id
	 *
	 * `type` :string : 更新数据的方式
	 *
	 * `data` :Array : 双柱状图关键结点的数据
	 */
	reloadData(params:doubleBarChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭柱状图（从内存里清除）`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的模块的 id
	 */
	close(params:doubleBarChart_close_Params):void

	/**
	 * `隐藏柱状图视图，并未从内存里清除，可调用 show 接口显示该视图`
	 * ========params==========
	 *
	 * `id` :number : 要隐藏的模块的 id
	 */
	hide(params:doubleBarChart_hide_Params):void

	/**
	 * `显示已隐藏的柱状图视图`
	 * ========params==========
	 *
	 * `id` :number : 要显示的模块的 id
	 */
	show(params:doubleBarChart_show_Params):void

	/**
	 * `滚动到指定索引的条目，`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 *
	 * `index` :number : （可选项）指定的条目的索引，不可大于总条目数减去每屏显示个数，从0开始
	 *
	 * `animation` :boolean : （可选项）滚动时是否带有动画效果
	 */
	scrollTo(params:doubleBarChart_scrollTo_Params):void

}
interface doubleBarChart_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**双柱状图的 Y 轴配置*/ 
	yAxis:JSON,

	/**双柱状图关键结点的数据*/ 
	data:Array,

	/**（可选项）模块视图内元素样式配置*/ 
	styles?:any,

	/**（可选项）是否显示每条柱子上的数据（数据样式通y轴标注字体样式）*/ 
	showData?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface doubleBarChart_reloadData_Params {
	/**要刷新的模块的 id*/ 
	id:number,

	/**更新数据的方式*/ 
	type:string,

	/**双柱状图关键结点的数据*/ 
	data:Array,

}

interface doubleBarChart_close_Params {
	/**要关闭的模块的 id*/ 
	id:number,

}

interface doubleBarChart_hide_Params {
	/**要隐藏的模块的 id*/ 
	id:number,

}

interface doubleBarChart_show_Params {
	/**要显示的模块的 id*/ 
	id:number,

}

interface doubleBarChart_scrollTo_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

	/**（可选项）指定的条目的索引，不可大于总条目数减去每屏显示个数，从0开始*/ 
	index?:number,

	/**（可选项）滚动时是否带有动画效果*/ 
	animation?:boolean,

}

interface UICircleSlider {
	/**
	 * `打开 UICircleSlider`
	 * ========params==========
	 *
	 * `position` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块的样式配置
	 *
	 * `anticlockwise` :boolean : （可选项）是否为逆时针
	 *
	 * `anchorLowestPoint` :boolean : （可选项）铆点（起点、对照点）是否为最低点（六点钟位置），否则为最高点（十二点钟位置）
	 *
	 * `startAngle` :number : （可选项）弧形选择器起点针对铆点的角度，配合
	 *
	 * `duringAngle` :number : （可选项）弧形选择器大小（起点到终点的角度）
	 *
	 * `value` :number : （可选项）默认值
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UICircleSlider_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭模块*/ 
	close():void

	/** 显示模块*/ 
	show():void

	/** 隐藏模块*/ 
	hide():void

	/** 获取 UICircleSlider 的值*/ 
	getValue():void

	/**
	 * `设置 UICircleSlider 的值`
	 * ========params==========
	 *
	 * `value` :number : 要设置的值，
	 */
	setValue(params:UICircleSlider_setValue_Params):void

	/**
	 * `设置轨道的颜色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的颜色，支持rgb、rgba、#
	 */
	setTrackColor(params:UICircleSlider_setTrackColor_Params):void

	/**
	 * `设置划过的轨道的颜色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的颜色，支持rgb、rgba、#
	 */
	setTintColor(params:UICircleSlider_setTintColor_Params):void

	/**
	 * `设置滑块的颜色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的颜色，支持rgb、rgba、#
	 */
	setThumbColor(params:UICircleSlider_setThumbColor_Params):void

	/**
	 * `设置轨道的颜色`
	 * ========params==========
	 *
	 * `img` :string : 要设置的滑块图片路径，要求本地路径（widget://、fs://）
	 */
	setThumbImg(params:UICircleSlider_setThumbImg_Params):void

	/**
	 * `打开 UICircleSlider`
	 * ========params==========
	 *
	 * `name` :string : （可选项）监听事件名称
	 */
	addEventListener(params:UICircleSlider_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface UICircleSlider_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	position?:JSON,

	/**（可选项）模块的样式配置*/ 
	styles?:JSON,

	/**（可选项）是否为逆时针*/ 
	anticlockwise?:boolean,

	/**（可选项）铆点（起点、对照点）是否为最低点（六点钟位置），否则为最高点（十二点钟位置）*/ 
	anchorLowestPoint?:boolean,

	/**（可选项）弧形选择器起点针对铆点的角度，配合*/ 
	startAngle?:number,

	/**（可选项）弧形选择器大小（起点到终点的角度）*/ 
	duringAngle?:number,

	/**（可选项）默认值*/ 
	value?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UICircleSlider_setValue_Params {
	/**要设置的值，*/ 
	value:number,

}

interface UICircleSlider_setTrackColor_Params {
	/**要设置的颜色，支持rgb、rgba、#*/ 
	color:string,

}

interface UICircleSlider_setTintColor_Params {
	/**要设置的颜色，支持rgb、rgba、#*/ 
	color:string,

}

interface UICircleSlider_setThumbColor_Params {
	/**要设置的颜色，支持rgb、rgba、#*/ 
	color:string,

}

interface UICircleSlider_setThumbImg_Params {
	/**要设置的滑块图片路径，要求本地路径（widget://、fs://）*/ 
	img:string,

}

interface UICircleSlider_addEventListener_Params {
	/**（可选项）监听事件名称*/ 
	name?:string,

}

interface customSelector {
}
interface photoNews_tt {
	/** 关闭模块*/ 
	close():void

	/** 关闭模块*/ 
	clearCache():void

}
interface UIPullRefresh {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface suspensionWindow {
	/** 初始化*/ 
	init():void

	/** - 类型：JSON对象*/ 
	getAppOps():void

	/** 创建一个悬浮窗口*/ 
	createWindow(callback?: (ret:JSON) => void):void

	/** 显示悬浮窗*/ 
	show():void

	/** 更新悬浮窗*/ 
	updateWindow():void

}
interface dtCarKeyBoard {
	/**
	 * `打开 dtCarKeyBoard 模块，该模块依附于keywindow之上，打开后，点击键盘上方空白处，会隐藏键盘。`
	 * ========params==========
	 *
	 * `defaultPlate` :string : （可选项）默认车牌号码，长度在0-8之间，否则不生效，如果长度等于8，则是新能源车牌号
	 *
	 * `defaultIndex` :any : （可选项）键盘输入的初始位置索引，该数据范围：新能源在0-7之间，否则在0-6之间，该范围以外的数将会被强制更改为0
	 *
	 * `isEnergy` :boolean : （可选项）是否输入新能源车牌号
	 *
	 * `showInput` :boolean : （可选项）是否在键盘上显示输入栏，输入栏可以动态切换新能源
	 *
	 * `tintColor` :string : （可选项）键盘上的输入栏的相对色调，如果showInput=false，则不生效
	 *
	 * `autoHide` :boolean : （可选项）车牌号输入完成后，是否自动检测车牌号的正确性，如果车牌合法，则自动隐藏键盘
	 */
	open(params:dtCarKeyBoard_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭键盘*/ 
	close():void

	/** 显示键盘*/ 
	show():void

	/** 隐藏键盘*/ 
	hide():void

}
interface dtCarKeyBoard_open_Params {
	/**（可选项）默认车牌号码，长度在0-8之间，否则不生效，如果长度等于8，则是新能源车牌号*/ 
	defaultPlate?:string,

	/**（可选项）键盘输入的初始位置索引，该数据范围：新能源在0-7之间，否则在0-6之间，该范围以外的数将会被强制更改为0*/ 
	defaultIndex?:any,

	/**（可选项）是否输入新能源车牌号*/ 
	isEnergy?:boolean,

	/**（可选项）是否在键盘上显示输入栏，输入栏可以动态切换新能源*/ 
	showInput?:boolean,

	/**（可选项）键盘上的输入栏的相对色调，如果showInput=false，则不生效*/ 
	tintColor?:string,

	/**（可选项）车牌号输入完成后，是否自动检测车牌号的正确性，如果车牌合法，则自动隐藏键盘*/ 
	autoHide?:boolean,

}

interface miCalendar {
	/**
	 * `打开日历`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `currentDateTitle` :JSON : (可选项)当前日期的位置和尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `specialDate` :Array : （可选项）需要标记的特殊假期数组
	 *
	 * `isLunarCalendar` :boolean : （可选项）是否显示农历
	 *
	 * `scrollEnabled` :boolean : （可选项）是否允许左右滑动切换
	 *
	 * `isToday` :boolean : （可选项）日期选中后，设备当前日期样式是否消失，设置为true后，日期选中后，设备当前日期样式消失，选中设备当前日期后，样式显示为选中日期样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:miCalendar_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置特殊日期`
	 * ========params==========
	 *
	 * `specialDates` :Array : 需要标记的特殊假期数组，格式为：yyyy-MM-dd
	 */
	setSpecialDates(params:miCalendar_setSpecialDates_Params):void

	/**
	 * `取消已设置的特殊假期状态`
	 * ========params==========
	 *
	 * `specialDates` :Array : 需要取消的特殊假期组成的数组，格式为：yyyy-MM-dd
	 */
	cancelSpecialDates(params:miCalendar_cancelSpecialDates_Params):void

	/** 关闭日历*/ 
	close():void

	/** 显示日历*/ 
	show():void

	/** 隐藏日历*/ 
	hide():void

	/** 显示下个月*/ 
	nextMonth():void

	/** 显示上个月*/ 
	prevMonth():void

	/**
	 * `设置选中日期(可通过此接口实现翻页效果)`
	 * ========params==========
	 *
	 * `date` :string : （可选项）选中日期，格式为：yyyy-MM-dd
	 *
	 * `ignoreSelected` :boolean : （可选项）选中日期是否忽略选中日期样式（open -> styles -> date -> selectedColor、selectedBg）
	 */
	setDate(params:miCalendar_setDate_Params, callback?: (ret:JSON) => void):void

}
interface miCalendar_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**(可选项)当前日期的位置和尺寸*/ 
	currentDateTitle?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）需要标记的特殊假期数组*/ 
	specialDate?:Array,

	/**（可选项）是否显示农历*/ 
	isLunarCalendar?:boolean,

	/**（可选项）是否允许左右滑动切换*/ 
	scrollEnabled?:boolean,

	/**（可选项）日期选中后，设备当前日期样式是否消失，设置为true后，日期选中后，设备当前日期样式消失，选中设备当前日期后，样式显示为选中日期样式*/ 
	isToday?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface miCalendar_setSpecialDates_Params {
	/**需要标记的特殊假期数组，格式为：yyyy-MM-dd*/ 
	specialDates:Array,

}

interface miCalendar_cancelSpecialDates_Params {
	/**需要取消的特殊假期组成的数组，格式为：yyyy-MM-dd*/ 
	specialDates:Array,

}

interface miCalendar_setDate_Params {
	/**（可选项）选中日期，格式为：yyyy-MM-dd*/ 
	date?:string,

	/**（可选项）选中日期是否忽略选中日期样式（open -> styles -> date -> selectedColor、selectedBg）*/ 
	ignoreSelected?:boolean,

}

interface zjCartList {
	/**
	 * `打开并初始化 zjCartList 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:zjCartList_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭购物车列表模块*/ 
	close():void

	/** 显示购物车列表模块*/ 
	show():void

	/** 隐藏购物车列表模块*/ 
	hide():void

	/**
	 * `选中商品`
	 * ========params==========
	 *
	 * `item` :Array : （可选项）选中商品，如果不传递此参数则默认选中全部商品
	 */
	selectItem(params:zjCartList_selectItem_Params, callback?: (ret:JSON) => void):void

	/** 获取已选中的商品数据*/ 
	getSelectedItem():void

	/**
	 * `取消选中商品`
	 * ========params==========
	 *
	 * `item` :Array : （可选项）要取消选中的商品ID，如果不传递此参数则默认取消选中全部商品
	 */
	cancelSelectItem(params:zjCartList_cancelSelectItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据，刷新数据后之前的选中状态会被清空，需要重新设置选中`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:zjCartList_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshHeader(params:zjCartList_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

}
interface zjCartList_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源*/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface zjCartList_selectItem_Params {
	/**（可选项）选中商品，如果不传递此参数则默认选中全部商品*/ 
	item?:Array,

}

interface zjCartList_cancelSelectItem_Params {
	/**（可选项）要取消选中的商品ID，如果不传递此参数则默认取消选中全部商品*/ 
	item?:Array,

}

interface zjCartList_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface zjCartList_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListMeeting {
	/**
	 * `打开 UIListMeeting 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以在本参数内自定义添加唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，按钮从右往左排列。**注意：配置列表每项的通用按钮，用此参数；若配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块每项的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListMeeting_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设 UIListMeeting 模块的位置和大小（rect）`
	 * ========params==========
	 *
	 * `id` :number : (可选项) 要重设的模块的 id,当id不传的时候就重设当前打开的模块。
	 *
	 * `rect` :JSON : 要重设的模块的位置及尺寸
	 */
	resetRect(params:UIListMeeting_resetRect_Params):void

	/**
	 * `关闭数据列表模块`
	 * ========params==========
	 *
	 * `id` :number : (可选项)要关闭的模块的 id ,当id不传的时候就关闭当前打开的模块。
	 */
	close(params:UIListMeeting_close_Params):void

	/**
	 * `显示 UIListMeeting 模块`
	 * ========params==========
	 *
	 * `id` :number : (可选项)要显示的模块的 id ,当id不传的时候就显示当前打开的模块。
	 */
	show(params:UIListMeeting_show_Params):void

	/**
	 * `隐藏 UIListMeeting 模块`
	 * ========params==========
	 *
	 * `id` :number : (可选项)要隐藏的模块的 id ,当id不传的时候就隐藏当前打开的模块。
	 */
	hide(params:UIListMeeting_hide_Params):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)列表项对应的模块的 id ,当id不传的时候就设置当前打开的模块。
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListMeeting_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)列表项的索引对应的模块的 id ,当id不传的时候就设置当前打开的模块。
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListMeeting_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `id` :number : (可选项)列表项侧滑露出的按钮组的模块的 id,当id不传的时候就设置当前打开的模块。
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListMeeting_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)要刷新列表的模块的 id,当id不传的时候就刷新当前打开的模块。
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListMeeting_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)索引删除某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListMeeting_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)根据索引更新某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListMeeting_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `id` :number : (可选项)根据索引更新某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListMeeting_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListMeeting_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount(callback?: (ret:JSON) => void):void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `id` :number : (可选项)要下拉刷新的模块的 id,当id不传的时候就设置当前打开的模块。
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshHeader(params:UIListMeeting_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListMeeting_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

}
interface UIListMeeting_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以在本参数内自定义添加唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，按钮从右往左排列。**注意：配置列表每项的通用按钮，用此参数；若配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块每项的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListMeeting_resetRect_Params {
	/**(可选项) 要重设的模块的 id,当id不传的时候就重设当前打开的模块。*/ 
	id?:number,

	/**要重设的模块的位置及尺寸*/ 
	rect:JSON,

}

interface UIListMeeting_close_Params {
	/**(可选项)要关闭的模块的 id ,当id不传的时候就关闭当前打开的模块。*/ 
	id?:number,

}

interface UIListMeeting_show_Params {
	/**(可选项)要显示的模块的 id ,当id不传的时候就显示当前打开的模块。*/ 
	id?:number,

}

interface UIListMeeting_hide_Params {
	/**(可选项)要隐藏的模块的 id ,当id不传的时候就隐藏当前打开的模块。*/ 
	id?:number,

}

interface UIListMeeting_getIndex_Params {
	/**(可选项)列表项对应的模块的 id ,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListMeeting_getDataByIndex_Params {
	/**(可选项)列表项的索引对应的模块的 id ,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListMeeting_setSwipeBtns_Params {
	/**(可选项)列表项侧滑露出的按钮组的模块的 id,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListMeeting_reloadData_Params {
	/**(可选项)要刷新列表的模块的 id,当id不传的时候就刷新当前打开的模块。*/ 
	id?:number,

	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListMeeting_deleteItem_Params {
	/**(可选项)索引删除某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListMeeting_updateItem_Params {
	/**(可选项)根据索引更新某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListMeeting_insertItem_Params {
	/**(可选项)根据索引更新某一条列表的模块的 id,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListMeeting_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListMeeting_setRefreshHeader_Params {
	/**(可选项)要下拉刷新的模块的 id,当id不传的时候就设置当前打开的模块。*/ 
	id?:number,

	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListMeeting_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListView {
	/**
	 * `打开 UIListView 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListView_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListView 模块*/ 
	show():void

	/** 隐藏 UIListView 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:UIListView_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListView_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListView_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListView_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListView_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListView_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListView_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListView_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListView_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshHeader(params:UIListView_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListView_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

}
interface UIListView_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListView_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface UIListView_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListView_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListView_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListView_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListView_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListView_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListView_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListView_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListView_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListView_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface slipList {
}
interface pbTouTiao {
	/**
	 * `打开图文信息模块`
	 * ========params==========
	 *
	 * `hidden` :JSON : 界面元素的隐藏显示属性配置
	 *
	 * `textStyles` :JSON : 图片描述样式配置
	 */
	open(params:pbTouTiao_open_Params, callback?: (ret:JSON) => void):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface pbTouTiao_open_Params {
	/**界面元素的隐藏显示属性配置*/ 
	hidden:JSON,

	/**图片描述样式配置*/ 
	textStyles:JSON,

}

interface compass {
	/**
	 * `打开控件`
	 * ========params==========
	 *
	 * `rect` :JSON : 控件位置
	 *
	 * `bgStyle` :JSON : （可选项）背景相关设置
	 *
	 * `angleTextStyle` :JSON : （可选项）外环角度文字设置，不设置则不显示
	 *
	 * `scaleStyle` :JSON : （可选项）刻度相关设置，不设置则不显示
	 *
	 * `nsStyle` :JSON : （可选项）南北相关设置，不设置则不显示
	 *
	 * `directionStyle` :JSON : （可选项）方向箭头设置，此方向固定指向北，不设置则不显示
	 *
	 * `pointStyle` :JSON : （可选项）与正前方角度指针，与正前方固定角度，不设置则不显示
	 *
	 * `centerTextStyle` :JSON : （可选项）中心加角度数显示，不设置则不显示
	 *
	 * `autoChange` :boolean : （可选项）是否自动跟随方向改变改变
	 *
	 * `interval` :boolean : （可选项）刷新频率，当autoChange为true时有效 单位ms
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）
	 */
	open(params:compass_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始获取方向传感器数据，可单独调用`
	 * ========params==========
	 *
	 * `autoChange` :boolean : （可选项）如果有控件是否跟随数据同步
	 *
	 * `interval` :boolean : （可选项）控件刷新频率（非返回频率），当autoChange为true时有效 单位ms
	 */
	startSensor(params:compass_startSensor_Params, callback?: (ret:JSON) => void):void

	/** 停止传感器*/ 
	stopSensor(callback?: (ret:JSON) => void):void

	/**
	 * `控件设置方向，可配合autoChange为false时使用`
	 * ========params==========
	 *
	 * `angle` :number : （可选项）方向
	 */
	setDirectionAngle(params:compass_setDirectionAngle_Params):void

	/**
	 * `设置指针角度，需要已经支持指针显示`
	 * ========params==========
	 *
	 * `angle` :number : 指针角度
	 */
	setPointAngle(params:compass_setPointAngle_Params):void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/** 关闭*/ 
	close():void

}
interface compass_open_Params {
	/**控件位置*/ 
	rect:JSON,

	/**（可选项）背景相关设置*/ 
	bgStyle?:JSON,

	/**（可选项）外环角度文字设置，不设置则不显示*/ 
	angleTextStyle?:JSON,

	/**（可选项）刻度相关设置，不设置则不显示*/ 
	scaleStyle?:JSON,

	/**（可选项）南北相关设置，不设置则不显示*/ 
	nsStyle?:JSON,

	/**（可选项）方向箭头设置，此方向固定指向北，不设置则不显示*/ 
	directionStyle?:JSON,

	/**（可选项）与正前方角度指针，与正前方固定角度，不设置则不显示*/ 
	pointStyle?:JSON,

	/**（可选项）中心加角度数显示，不设置则不显示*/ 
	centerTextStyle?:JSON,

	/**（可选项）是否自动跟随方向改变改变*/ 
	autoChange?:boolean,

	/**（可选项）刷新频率，当autoChange为true时有效 单位ms*/ 
	interval?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）*/ 
	fixed?:boolean,

}

interface compass_startSensor_Params {
	/**（可选项）如果有控件是否跟随数据同步*/ 
	autoChange?:boolean,

	/**（可选项）控件刷新频率（非返回频率），当autoChange为true时有效 单位ms*/ 
	interval?:boolean,

}

interface compass_setDirectionAngle_Params {
	/**（可选项）方向*/ 
	angle?:number,

}

interface compass_setPointAngle_Params {
	/**指针角度*/ 
	angle:number,

}

interface scrollPicture {
}
interface listContact {
}
interface UIListContactsSelect {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `specialGroupTitle` :string : （可选项）特殊分组标题
	 *
	 * `categarys` :Array : 类别数据
	 *
	 * `singleSelect` :boolean : 是否支持单选 （只有在选择模式下有效，即showListSelect({selected:true})）
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组
	 *
	 * `styles` :JSON : （可选项）模块头部的样式
	 *
	 * `alphabeticalIndexStyles` :JSON : （可选项）右侧索引点击时中心显示的样式
	 *
	 * `backgroundColor` :boolean : （可选项）默认选中的人员是否禁用
	 *
	 * `bounces` :boolean : （可选项）是否弹动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListContactsSelect_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListContactsSelect_reloadData_Params):void

	/** 是否显示搜索输入框*/ 
	setInputBarVisible():void

	/** 是否显示类别面板*/ 
	setCategaryPanelVisible():void

	/** 是否切入选择模式（列表右侧出现选择框）*/ 
	showListSelect():void

}
interface UIListContactsSelect_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）特殊分组标题*/ 
	specialGroupTitle?:string,

	/**类别数据*/ 
	categarys:Array,

	/**是否支持单选 （只有在选择模式下有效，即showListSelect({selected:true})）*/ 
	singleSelect:boolean,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）列表项向左滑动露出的按钮组*/ 
	rightBtns?:Array,

	/**（可选项）模块头部的样式*/ 
	styles?:JSON,

	/**（可选项）右侧索引点击时中心显示的样式*/ 
	alphabeticalIndexStyles?:JSON,

	/**（可选项）默认选中的人员是否禁用*/ 
	backgroundColor?:boolean,

	/**（可选项）是否弹动*/ 
	bounces?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListContactsSelect_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface UIListGroup {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListGroup_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListGroup_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListGroup_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListGroup_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListGroup_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListGroup_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :Array : 列表的数据源
	 */
	insertItem(params:UIListGroup_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListGroup_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `style` :JSON : 下拉刷新的样式配置
	 */
	setRefreshHeader(params:UIListGroup_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 */
	setRefreshFooter(params:UIListGroup_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

	/** 停止上拉加载*/ 
	stopRefresh():void

}
interface UIListGroup_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组*/ 
	rightBtns?:Array,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListGroup_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListGroup_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListGroup_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListGroup_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListGroup_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListGroup_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:Array,

}

interface UIListGroup_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListGroup_setRefreshHeader_Params {
	/**下拉刷新的样式配置*/ 
	style:JSON,

}

interface UIListGroup_setRefreshFooter_Params {
	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

}

interface iosDialog4A {
	/**
	 * `弹出alert对话框`
	 * ========params==========
	 *
	 * `title` :string : 弹窗标题
	 *
	 * `msg` :string : 弹窗显示的内容
	 *
	 * `btnText` :string : 按钮上的文字
	 */
	alert(params:iosDialog4A_alert_Params, callback?: (ret:JSON) => void):void

	/**
	 * `confirm确认对话框`
	 * ========params==========
	 *
	 * `title` :string : 弹窗标题
	 *
	 * `msg` :string : 弹窗显示的内容
	 *
	 * `rigthBtnText` :string : 右边按钮文字
	 *
	 * `leftBtnText` :string : 左边按钮文字
	 */
	confirm(params:iosDialog4A_confirm_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出带有输入框的dialog`
	 * ========params==========
	 *
	 * `title` :string : 弹窗标题
	 *
	 * `rigthBtnText` :string : 右边按钮文字
	 *
	 * `leftBtnText` :string : 左边按钮文字
	 *
	 * `inputType` :string : 输入文字的类型
	 */
	prompt(params:iosDialog4A_prompt_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出actionsheet选择器`
	 * ========params==========
	 *
	 * `title` :string : actionsheet标题
	 *
	 * `cancel` :string : 最下面取消按钮文字
	 *
	 * `titleSize` :number : title文字大小
	 *
	 * `cancelSize` :number : cancel文字大小
	 *
	 * `buttons` :Array : 按钮
	 */
	actionsheet(params:iosDialog4A_actionsheet_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出三级联动选择器`
	 * ========params==========
	 *
	 * `title` :string : 选择器的title
	 *
	 * `datas` :Array : 选择器数据（可选）
	 *
	 * `level` :any : 第三项的默认选中位置（可选）
	 */
	picker(params:iosDialog4A_picker_Params, callback?: (ret:JSON) => void):void

}
interface iosDialog4A_alert_Params {
	/**弹窗标题*/ 
	title:string,

	/**弹窗显示的内容*/ 
	msg:string,

	/**按钮上的文字*/ 
	btnText:string,

}

interface iosDialog4A_confirm_Params {
	/**弹窗标题*/ 
	title:string,

	/**弹窗显示的内容*/ 
	msg:string,

	/**右边按钮文字*/ 
	rigthBtnText:string,

	/**左边按钮文字*/ 
	leftBtnText:string,

}

interface iosDialog4A_prompt_Params {
	/**弹窗标题*/ 
	title:string,

	/**右边按钮文字*/ 
	rigthBtnText:string,

	/**左边按钮文字*/ 
	leftBtnText:string,

	/**输入文字的类型*/ 
	inputType:string,

}

interface iosDialog4A_actionsheet_Params {
	/**actionsheet标题*/ 
	title:string,

	/**最下面取消按钮文字*/ 
	cancel:string,

	/**title文字大小*/ 
	titleSize:number,

	/**cancel文字大小*/ 
	cancelSize:number,

	/**按钮*/ 
	buttons:Array,

}

interface iosDialog4A_picker_Params {
	/**选择器的title*/ 
	title:string,

	/**选择器数据（可选）*/ 
	datas?:Array,

	/**第三项的默认选中位置（可选）*/ 
	level?:any,

}

interface UIListCard {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `styles` :JSON : （可选项）列表样式设置
	 *
	 * `indicator` :boolean : （可选项）是否显示字母索引
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListCard_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListCard_reloadData_Params):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListCard_appendData_Params, callback?: (ret:JSON) => void):void

}
interface UIListCard_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）列表样式设置*/ 
	styles?:JSON,

	/**（可选项）是否显示字母索引*/ 
	indicator?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListCard_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface UIListCard_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListInformation {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `styles` :JSON : （可选项）模块头部的样式
	 *
	 * `rightButtonInfo` :any : （可选项）列表右边按钮相关设置，设置后点击将会弹出扇形页面，不传将不会弹出
	 *
	 * `backgroundColor` :string : （可选项）模块背景色
	 *
	 * `bounces` :boolean : （可选项）是否弹动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListInformation_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListInformation_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListInformation_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :Array : （可选项）列表的数据源
	 */
	reloadData(params:UIListInformation_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListInformation_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `contacts` :JSON : 列表的数据源
	 */
	updateItem(params:UIListInformation_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `contacts` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListInformation_appendData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 */
	setRefreshHeader(params:UIListInformation_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 */
	setRefreshFooter(params:UIListInformation_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

	/** 设置列表模式*/ 
	setListMode():void

	/** 获取列表模式*/ 
	getListMode():void

	/**
	 * `排序`
	 * ========params==========
	 *
	 * `sort` :number : （可选项）排序；0:正序,1:倒序
	 */
	sort(params:UIListInformation_sort_Params):void

	/**
	 * `恢复取消排序`
	 * ========params==========
	 *
	 * `isSort` :boolean : （可选项）是否排序
	 */
	cancelOrder(params:UIListInformation_cancelOrder_Params):void

	/** 关闭菜单(前端在push到下一个页面时，需要调用此接口)*/ 
	closeMenu():void

	/**
	 * `设置列表项样式`
	 * ========params==========
	 *
	 * `of` :number : （可选项）设置哪一项
	 *
	 * `styles` :JSON : （可选项）列表项样式
	 */
	setStyle(params:UIListInformation_setStyle_Params):void

	/** 取消设置列表项样式*/ 
	cancelStyle():void

}
interface UIListInformation_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）模块头部的样式*/ 
	styles?:JSON,

	/**（可选项）列表右边按钮相关设置，设置后点击将会弹出扇形页面，不传将不会弹出*/ 
	rightButtonInfo?:any,

	/**（可选项）模块背景色*/ 
	backgroundColor?:string,

	/**（可选项）是否弹动*/ 
	bounces?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListInformation_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListInformation_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListInformation_reloadData_Params {
	/**（可选项）列表的数据源*/ 
	contacts?:Array,

}

interface UIListInformation_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListInformation_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	contacts:JSON,

}

interface UIListInformation_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	contacts:Array,

}

interface UIListInformation_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

}

interface UIListInformation_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

}

interface UIListInformation_sort_Params {
	/**（可选项）排序；0:正序,1:倒序*/ 
	sort?:number,

}

interface UIListInformation_cancelOrder_Params {
	/**（可选项）是否排序*/ 
	isSort?:boolean,

}

interface UIListInformation_setStyle_Params {
	/**（可选项）设置哪一项*/ 
	of?:number,

	/**（可选项）列表项样式*/ 
	styles?:JSON,

}

interface UICustomPicker {
	/**
	 * `打开自定义选择器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `data` :JSON : 自定义选择器的标签和内容取值范围；若数组长度大于1，则显示多个选择器实例，彼此仍是一个整体，各个实例宽度 = 模块整体宽度（w）/ 实例个数
	 *
	 * `disableSelect` :JSON : （可选项）设置不可选项，与 data 对应，若不传则不设置不可选项
	 *
	 * `rows` :number : （可选项）滚动内容时可见的内容行数，只接受大于1的奇整数。
	 *
	 * `autoHide` :boolean : （可选项）选中内容时，上下选项是否自动隐藏
	 *
	 * `loop` :boolean : （可选项）是否循环滚动。如果内容的取值范围的个数小于rows参数的值，那么无论loop设置为true或是false，均不可循环滚动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UICustomPicker_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭自定义选择器`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	close(params:UICustomPicker_close_Params):void

	/**
	 * `显示自定义选择器`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	show(params:UICustomPicker_show_Params):void

	/**
	 * `隐藏自定义选择器`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	hide(params:UICustomPicker_hide_Params):void

	/**
	 * `设置自定义选择器当前选中的内容`
	 * ========params==========
	 *
	 * `id` :number : 模块 id，用于区分多个模块实例
	 *
	 * `data` :Array : 设置选择器选中项的内容组成的数组，数组某一项为空或不传，表示不改变对应列的值
	 */
	setValue(params:UICustomPicker_setValue_Params):void

	/**
	 * `刷新数据源`
	 * ========params==========
	 *
	 * `id` :number : 制定刷新的模块id
	 *
	 * `data` :JSON : 刷新自定义选择器的标签和内容；本数组长度必须和 open 接口内 data 参数数组长度一致，传空则表示不刷新该元素对应的列。如：[{*****},'',{*******}]，表示不刷新第二列选择器
	 */
	refreshData(params:UICustomPicker_refreshData_Params):void

}
interface UICustomPicker_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**自定义选择器的标签和内容取值范围；若数组长度大于1，则显示多个选择器实例，彼此仍是一个整体，各个实例宽度 = 模块整体宽度（w）/ 实例个数*/ 
	data:JSON,

	/**（可选项）设置不可选项，与 data 对应，若不传则不设置不可选项*/ 
	disableSelect?:JSON,

	/**（可选项）滚动内容时可见的内容行数，只接受大于1的奇整数。*/ 
	rows?:number,

	/**（可选项）选中内容时，上下选项是否自动隐藏*/ 
	autoHide?:boolean,

	/**（可选项）是否循环滚动。如果内容的取值范围的个数小于rows参数的值，那么无论loop设置为true或是false，均不可循环滚动*/ 
	loop?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UICustomPicker_close_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UICustomPicker_show_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UICustomPicker_hide_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UICustomPicker_setValue_Params {
	/**模块 id，用于区分多个模块实例*/ 
	id:number,

	/**设置选择器选中项的内容组成的数组，数组某一项为空或不传，表示不改变对应列的值*/ 
	data:Array,

}

interface UICustomPicker_refreshData_Params {
	/**制定刷新的模块id*/ 
	id:number,

	/**刷新自定义选择器的标签和内容；本数组长度必须和 open 接口内 data 参数数组长度一致，传空则表示不刷新该元素对应的列。如：[{*****},'',{*******}]，表示不刷新第二列选择器*/ 
	data:JSON,

}

interface payPasswordPlus {
	/**
	 * `打开密码输入框`
	 * ========params==========
	 *
	 * `title` :string : （可选项）默认标题。
	 *
	 * `isTwoValidation` :string : （可选项）标题2 (isTwoValidation:true有效)。
	 *
	 * `textColor` :string : （可选项）标题颜色。
	 *
	 * `textSize` :number : （可选项）标题字体大小。
	 *
	 * `isOpenShuffle` :boolean : （可选项）是否开启打乱数字的位置(开启:true,关闭:false)。
	 *
	 * `isShowClose` :boolean : （可选项）是否显示关闭按钮(显示:true,不显示:false)。
	 */
	showInput(params:payPasswordPlus_showInput_Params, callback?: (ret:JSON) => void):void

}
interface payPasswordPlus_showInput_Params {
	/**（可选项）默认标题。*/ 
	title?:string,

	/**（可选项）标题2 (isTwoValidation:true有效)。*/ 
	isTwoValidation?:string,

	/**（可选项）标题颜色。*/ 
	textColor?:string,

	/**（可选项）标题字体大小。*/ 
	textSize?:number,

	/**（可选项）是否开启打乱数字的位置(开启:true,关闭:false)。*/ 
	isOpenShuffle?:boolean,

	/**（可选项）是否显示关闭按钮(显示:true,不显示:false)。*/ 
	isShowClose?:boolean,

}

interface slider {
}
interface calendar {
}
interface UIListBook {
	/**
	 * `打开 UIListBook 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `rightButtonInfo` :any : （可选项）列表右边按钮相关设置，设置后点击将会弹出扇形页面，不传将不会弹出
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListBook_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListBook 模块*/ 
	show():void

	/** 隐藏 UIListBook 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:UIListBook_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据（此接口仅支持iOS）`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListBook_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListBook_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListBook_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListBook_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListBook_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListBook_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListBook_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 */
	setRefreshHeader(params:UIListBook_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）（仅ios支持）松开提示文字
	 *
	 * `loadingText` :string : （可选项）（仅ios支持）提示文字
	 */
	setRefreshFooter(params:UIListBook_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

	/**
	 * `排序`
	 * ========params==========
	 *
	 * `sort` :number : （可选项）排序；0:正序,1:倒序
	 */
	sort(params:UIListBook_sort_Params):void

	/**
	 * `恢复取消排序`
	 * ========params==========
	 *
	 * `isSort` :boolean : （可选项）是否排序
	 */
	cancelOrder(params:UIListBook_cancelOrder_Params):void

	/** 关闭右边弹窗（跳转其他页面时需调用此接口关闭弹窗，此接口仅支持iOS）*/ 
	closeMenu():void

	/**
	 * `设置列表项样式（分组时间不可同时设置）`
	 * ========params==========
	 *
	 * `of` :number : （可选项）设置哪一项
	 *
	 * `styles` :JSON : （可选项）列表项样式
	 */
	setStyle(params:UIListBook_setStyle_Params):void

	/** 取消设置列表项样式*/ 
	cancelStyle():void

}
interface UIListBook_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）列表右边按钮相关设置，设置后点击将会弹出扇形页面，不传将不会弹出*/ 
	rightButtonInfo?:any,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListBook_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface UIListBook_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListBook_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListBook_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListBook_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListBook_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListBook_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListBook_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListBook_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

}

interface UIListBook_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）（仅ios支持）松开提示文字*/ 
	textDown?:string,

	/**（可选项）（仅ios支持）提示文字*/ 
	loadingText?:string,

}

interface UIListBook_sort_Params {
	/**（可选项）排序；0:正序,1:倒序*/ 
	sort?:number,

}

interface UIListBook_cancelOrder_Params {
	/**（可选项）是否排序*/ 
	isSort?:boolean,

}

interface UIListBook_setStyle_Params {
	/**（可选项）设置哪一项*/ 
	of?:number,

	/**（可选项）列表项样式*/ 
	styles?:JSON,

}

interface UISelector {
}
interface addressSel {
	/**
	 * `input方法将view添加到页面中`
	 * ========params==========
	 *
	 * `x` :any : 以左上角为原点 x轴偏移量。
	 *
	 * `y` :any : 以左上角为原点 y轴偏移量。
	 *
	 * `w` :any : view 宽度 。
	 *
	 * `h` :any : view 高度 。
	 *
	 * `type` :any : 类型
	 */
	input(params:addressSel_input_Params, callback?: (ret:JSON) => void):void

	/** 隐藏view，已调用input情况下可调用此方法隐藏*/ 
	hide():void

	/** 显示隐藏的view，调用input，hide 的情况下将原view对象重新显示，节省内存，无需重新创建*/ 
	show():void

	/** 在不使用此view的情况下销毁释放内存*/ 
	destroy():void

	/** type为多级的情况下调用此方法一级一级返回，当返回到省级的时候返回返回值继续操作；例：type=2时用户点击省级选择进入市级选择，点击android回退键或者头部返回键调用该方法返回省级，再点击返回返回值back=true，在回调中继续操作。*/ 
	back():void

}
interface addressSel_input_Params {
	/**以左上角为原点 x轴偏移量。*/ 
	x:any,

	/**以左上角为原点 y轴偏移量。*/ 
	y:any,

	/**view 宽度 。*/ 
	w:any,

	/**view 高度 。*/ 
	h:any,

	/**类型*/ 
	type:any,

}

interface photoBrowserWeiBo {
	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface pullRefreshLoop {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface UIPullRefreshRiding {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface passwordKeyboard {
	/**
	 * `数字字母键盘（仅iOS支持）`
	 * ========params==========
	 *
	 * `rect` :JSON : 键盘尺寸
	 *
	 * `bgColor` :string : (可选项)；键盘背景颜色
	 *
	 * `dataNumber` :number : (可选项)；允许输入框输入密码的位数
	 *
	 * `style` :JSON : （可选项）键盘按钮设置
	 */
	openDigitalLetter(params:passwordKeyboard_openDigitalLetter_Params, callback?: (ret:JSON) => void):void

	/** 关闭数字字母键盘（仅iOS支持）*/ 
	closeDigitalLetter():void

	/**
	 * `数字键盘`
	 * ========params==========
	 *
	 * `rect` :JSON : 键盘尺寸（仅iOS支持）
	 *
	 * `bgColor` :string : 键盘背景颜色
	 *
	 * `style` :JSON : （可选项）键盘按钮设置（仅iOS支持）
	 */
	openDigital(params:passwordKeyboard_openDigital_Params, callback?: (ret:JSON) => void):void

	/** 关闭数字键盘*/ 
	closeDigital():void

	/**
	 * `打开数字符号键盘（仅iOS支持）`
	 * ========params==========
	 *
	 * `rect` :JSON : 键盘尺寸
	 *
	 * `bgColor` :string : 键盘背景颜色
	 *
	 * `style` :JSON : （可选项）键盘按钮设置
	 */
	openDigitalSymbol(params:passwordKeyboard_openDigitalSymbol_Params, callback?: (ret:JSON) => void):void

	/** 关闭数字符号键盘（仅iOS支持）*/ 
	closeDigitalSymbol():void

}
interface passwordKeyboard_openDigitalLetter_Params {
	/**键盘尺寸*/ 
	rect:JSON,

	/**(可选项)；键盘背景颜色*/ 
	bgColor?:string,

	/**(可选项)；允许输入框输入密码的位数*/ 
	dataNumber?:number,

	/**（可选项）键盘按钮设置*/ 
	style?:JSON,

}

interface passwordKeyboard_openDigital_Params {
	/**键盘尺寸（仅iOS支持）*/ 
	rect:JSON,

	/**键盘背景颜色*/ 
	bgColor:string,

	/**（可选项）键盘按钮设置（仅iOS支持）*/ 
	style?:JSON,

}

interface passwordKeyboard_openDigitalSymbol_Params {
	/**键盘尺寸*/ 
	rect:JSON,

	/**键盘背景颜色*/ 
	bgColor:string,

	/**（可选项）键盘按钮设置*/ 
	style?:JSON,

}

interface dtSelector {
	/**
	 * `打开 dtSelector 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `arrowImage` :string : （可选项）每个选择器右边的箭头图片，要求本地路径（fs://、widget://），支持png，jpg格式的图片
	 *
	 * `arrowSelectImage` :string : （可选项）每个选择器右边的箭头被选中的图片，需对arrowImage设置后才有效，要求本地路径（fs://、widget://），支持png，jpg格式的图片
	 *
	 * `itemCount` :number : （可选值）下拉选择器项的数量
	 *
	 * `cover` :boolean : （可选项）下拉的列表是否覆盖在整个选择器的下方
	 *
	 * `datas` :Array : 数据源，多层次数据结构，可无限添加层级，设置itemCount层数即可
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动），如果被其他视图遮挡，请将此值设置为true
	 */
	open(params:dtSelector_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示dtSelector模块*/ 
	show():void

	/** ##示例代码*/ 
	hide():void

	/**
	 * `加载新的数据`
	 * ========params==========
	 *
	 * `datas` :Array : 数据源，多层次数据结构，可无限添加层级，设置itemCount层数即可
	 */
	reloadDatas(params:dtSelector_reloadDatas_Params):void

}
interface dtSelector_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）每个选择器右边的箭头图片，要求本地路径（fs://、widget://），支持png，jpg格式的图片*/ 
	arrowImage?:string,

	/**（可选项）每个选择器右边的箭头被选中的图片，需对arrowImage设置后才有效，要求本地路径（fs://、widget://），支持png，jpg格式的图片*/ 
	arrowSelectImage?:string,

	/**（可选值）下拉选择器项的数量*/ 
	itemCount?:number,

	/**（可选项）下拉的列表是否覆盖在整个选择器的下方*/ 
	cover?:boolean,

	/**数据源，多层次数据结构，可无限添加层级，设置itemCount层数即可*/ 
	datas:Array,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动），如果被其他视图遮挡，请将此值设置为true*/ 
	fixed?:boolean,

}

interface dtSelector_reloadDatas_Params {
	/**数据源，多层次数据结构，可无限添加层级，设置itemCount层数即可*/ 
	datas:Array,

}

interface UICityList {
	/**
	 * `打开城市列表模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `topCitys` :Array : （可选项）热门城市数据源，若本参数不为空，则忽略 resource中的 topCitys。若不传或传空，则模块会自动读取 resource 中的 topCitys 数据
	 *
	 * `resource` :string : 城市列表的数据源文件路径（支持 https、http、widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。
	 */
	open(params:UICityList_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭城市列表*/ 
	close():void

	/** 显示城市列表*/ 
	show():void

	/** 隐藏城市列表*/ 
	hide():void

}
interface UICityList_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）热门城市数据源，若本参数不为空，则忽略 resource中的 topCitys。若不传或传空，则模块会自动读取 resource 中的 topCitys 数据*/ 
	topCitys?:Array,

	/**城市列表的数据源文件路径（支持 https、http、widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。*/ 
	resource:string,

}

interface shakeView {
}
interface photoBrowserQQ {
	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface barChart {
}
interface dialogBox {
	/**
	 * `弹出 alert 样式的对话框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）alert 对话框模块可配置的文本
	 *
	 * `styles` :JSON : alert 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	alert(params:dialogBox_alert_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 sendMessage 样式的对话框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）sendMessage 对话框模块可配置的文本
	 *
	 * `styles` :JSON : sendMessage 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	sendMessage(params:dialogBox_sendMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 scene 样式的对话框`
	 * ========params==========
	 *
	 * `rect` :JSON : scene 对话框的尺寸配置, 上下左右居中对齐
	 *
	 * `texts` :JSON : （可选项）scene对话框模块可配置的文本
	 *
	 * `styles` :JSON : scene 对话框样式设置
	 *
	 * `optionDatas` :Array : （可选项）场景事件选项数据源，若为空则不显示
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	scene(params:dialogBox_scene_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 evaluation 样式的对话框`
	 * ========params==========
	 *
	 * `styles` :JSON : evaluation 对话框样式配置
	 *
	 * `texts` :JSON : （可选项）evaluation 对话框模块可配置的文本
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	evaluation(params:dialogBox_evaluation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 raffle 样式的对话框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）raffle 对话框模块可配置的文本
	 *
	 * `styles` :string : raffle 对话框样式设置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	raffle(params:dialogBox_raffle_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 taskPlan 样式的对话框`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）taskPlan 对话框的宽度配置
	 *
	 * `texts` :JSON : （可选项）taskPlan 对话框模块可配置的文本
	 *
	 * `styles` :JSON : taskPlan 对话框样式设置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	taskPlan(params:dialogBox_taskPlan_Params, callback?: (ret:JSON) => void):void

	/** 弹出 receipt 样式的对话框*/ 
	receipt():void

	/** 弹出 tips 样式的对话框*/ 
	tips():void

	/** 弹出 discount 样式的对话框*/ 
	discount():void

	/**
	 * `弹出 share 样式的对话框`
	 * ========params==========
	 *
	 * `rect` :JSON : 对话框的宽高设置
	 *
	 * `items` :Array<JSON> : 对话框数据
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 *
	 * `ret` :JSON : null
	 */
	share(params:dialogBox_share_Params):void

	/**
	 * `弹出 actionMenu 样式的对话框`
	 * ========params==========
	 *
	 * `rect` :JSON : 对话框的宽高设置
	 *
	 * `texts` :JSON : （可选项）取消按钮的文本设置
	 *
	 * `items` :Array<JSON> : 对话框内子按钮配置，多出屏幕的按钮可左右拖动查看，按钮和标题所占区域在弹框区域上下居中显示
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `isCuttingLine` :boolean : (可选项)是否显示分割线
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 *
	 * `ret` :JSON : null
	 */
	actionMenu(params:dialogBox_actionMenu_Params):void

	/**
	 * `打开一个带输入框的弹出框`
	 * ========params==========
	 *
	 * `keyboardType` :string : （可选项）输入框获取焦点时，弹出的键盘类型；
	 *
	 * `texts` :JSON : （可选项）input 对话框模块可配置的文本
	 *
	 * `styles` :JSON : input 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	input(params:dialogBox_input_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 amount 样式的对话框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）amount 对话框模块可配置的文本
	 *
	 * `styles` :JSON : sendMessage 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 *
	 * `decimal` :boolean : （可选项）是否支持小数输入，若为true，则弹出可输入小数的键盘，用户点击'+'或'-'当前数字增减步幅为当前数字的最小单位，如当前值为1.1，则点击'+'或'-'会增加减少0.1，当前值为1.11，则随之增减0.01
	 */
	amount(params:dialogBox_amount_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 list 样式的对话框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）amount 对话框模块可配置的文本
	 *
	 * `listTitles` :Array : 对话框内的列表每条 title 文本字符串组成的数组，超出该列表显示区域的可上下拖动查看
	 *
	 * `styles` :JSON : list 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	list(params:dialogBox_list_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开一个可加载 web 页面的弹框`
	 * ========params==========
	 *
	 * `texts` :JSON : （可选项）input 对话框模块可配置的文本
	 *
	 * `path` :string : 要加载的页面地址 支持(http:// widget://)
	 *
	 * `styles` :JSON : input 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 */
	webView(params:dialogBox_webView_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开一个警告对话框`
	 * ========params==========
	 *
	 * `msg` :JSON : （可选项）popupAlert 对话框模块可配置的文本
	 *
	 * `styles` :JSON : popupAlert 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 */
	popupAlert(params:dialogBox_popupAlert_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开一个确认对话框`
	 * ========params==========
	 *
	 * `msg` :JSON : （可选项）confirm 对话框模块可配置的文本
	 *
	 * `styles` :JSON : confirm 对话框样式配置
	 *
	 * `tapClose` :boolean : 是否可以取消（点击遮罩，android系统点击回退是否取消对话框）
	 */
	confirm(params:dialogBox_confirm_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭弹出的对话框`
	 * ========params==========
	 *
	 * `dialogName` :string : 上面所列各种对话框的样式名(接口)
	 */
	close(params:dialogBox_close_Params):void

	/**
	 * `打开一个带输入框的弹出框`
	 * ========params==========
	 *
	 * `keyboardType` :string : （可选项）输入框获取焦点时，弹出的键盘类型；
	 *
	 * `texts` :JSON : （可选项）input 对话框模块可配置的文本
	 *
	 * `styles` :JSON : input 对话框样式配置
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 */
	inputbox(params:dialogBox_inputbox_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出 multiLineMenu 样式的对话框，与actionMenu对话框功能一致，区别在于该对话框支持多行`
	 * ========params==========
	 *
	 * `rect` :JSON : 对话框的宽高设置
	 *
	 * `texts` :JSON : （可选项）取消按钮的文本设置
	 *
	 * `items` :Array<JSON> : 对话框内子按钮配置，多出屏幕的按钮可左右拖动查看，按钮和标题所占区域在弹框区域上下居中显示
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `isCuttingLine` :boolean : (可选项)是否显示分割线
	 *
	 * `tapClose` :boolean : （可选项）是否点击遮罩层关闭该对话框
	 *
	 * `animation` :boolean : 是否再打开或关闭对话框时使用动画
	 *
	 * `ret` :JSON : null
	 */
	multiLineMenu(params:dialogBox_multiLineMenu_Params):void

}
interface dialogBox_alert_Params {
	/**（可选项）alert 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**alert 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_sendMessage_Params {
	/**（可选项）sendMessage 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**sendMessage 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_scene_Params {
	/**scene 对话框的尺寸配置, 上下左右居中对齐*/ 
	rect:JSON,

	/**（可选项）scene对话框模块可配置的文本*/ 
	texts?:JSON,

	/**scene 对话框样式设置*/ 
	styles:JSON,

	/**（可选项）场景事件选项数据源，若为空则不显示*/ 
	optionDatas?:Array,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_evaluation_Params {
	/**evaluation 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）evaluation 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_raffle_Params {
	/**（可选项）raffle 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**raffle 对话框样式设置*/ 
	styles:string,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_taskPlan_Params {
	/**（可选项）taskPlan 对话框的宽度配置*/ 
	rect?:JSON,

	/**（可选项）taskPlan 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**taskPlan 对话框样式设置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_share_Params {
	/**对话框的宽高设置*/ 
	rect:JSON,

	/**对话框数据*/ 
	items:Array<JSON>,

	/**对话框样式设置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

	/**null*/ 
	ret:JSON,

}

interface dialogBox_actionMenu_Params {
	/**对话框的宽高设置*/ 
	rect:JSON,

	/**（可选项）取消按钮的文本设置*/ 
	texts?:JSON,

	/**对话框内子按钮配置，多出屏幕的按钮可左右拖动查看，按钮和标题所占区域在弹框区域上下居中显示*/ 
	items:Array<JSON>,

	/**对话框样式设置*/ 
	styles:JSON,

	/**(可选项)是否显示分割线*/ 
	isCuttingLine?:boolean,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

	/**null*/ 
	ret:JSON,

}

interface dialogBox_input_Params {
	/**（可选项）输入框获取焦点时，弹出的键盘类型；*/ 
	keyboardType?:string,

	/**（可选项）input 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**input 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_amount_Params {
	/**（可选项）amount 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**sendMessage 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

	/**（可选项）是否支持小数输入，若为true，则弹出可输入小数的键盘，用户点击'+'或'-'当前数字增减步幅为当前数字的最小单位，如当前值为1.1，则点击'+'或'-'会增加减少0.1，当前值为1.11，则随之增减0.01*/ 
	decimal?:boolean,

}

interface dialogBox_list_Params {
	/**（可选项）amount 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**对话框内的列表每条 title 文本字符串组成的数组，超出该列表显示区域的可上下拖动查看*/ 
	listTitles:Array,

	/**list 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_webView_Params {
	/**（可选项）input 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**要加载的页面地址 支持(http:// widget://)*/ 
	path:string,

	/**input 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

}

interface dialogBox_popupAlert_Params {
	/**（可选项）popupAlert 对话框模块可配置的文本*/ 
	msg?:JSON,

	/**popupAlert 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

}

interface dialogBox_confirm_Params {
	/**（可选项）confirm 对话框模块可配置的文本*/ 
	msg?:JSON,

	/**confirm 对话框样式配置*/ 
	styles:JSON,

	/**是否可以取消（点击遮罩，android系统点击回退是否取消对话框）*/ 
	tapClose:boolean,

}

interface dialogBox_close_Params {
	/**上面所列各种对话框的样式名(接口)*/ 
	dialogName:string,

}

interface dialogBox_inputbox_Params {
	/**（可选项）输入框获取焦点时，弹出的键盘类型；*/ 
	keyboardType?:string,

	/**（可选项）input 对话框模块可配置的文本*/ 
	texts?:JSON,

	/**input 对话框样式配置*/ 
	styles:JSON,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

}

interface dialogBox_multiLineMenu_Params {
	/**对话框的宽高设置*/ 
	rect:JSON,

	/**（可选项）取消按钮的文本设置*/ 
	texts?:JSON,

	/**对话框内子按钮配置，多出屏幕的按钮可左右拖动查看，按钮和标题所占区域在弹框区域上下居中显示*/ 
	items:Array<JSON>,

	/**对话框样式设置*/ 
	styles:JSON,

	/**(可选项)是否显示分割线*/ 
	isCuttingLine?:boolean,

	/**（可选项）是否点击遮罩层关闭该对话框*/ 
	tapClose?:boolean,

	/**是否再打开或关闭对话框时使用动画*/ 
	animation:boolean,

	/**null*/ 
	ret:JSON,

}

interface UIAlert {
	/** 邀请对话框*/ 
	invite(callback?: (ret:JSON) => void):void

	/**
	 * `在屏幕中间显示一个提示图片`
	 * ========params==========
	 *
	 * `imagePath` :string : 图片路径（支持widget:// fs://）
	 *
	 * `imageW` :number : 图片宽度
	 *
	 * `imageH` :number : 图片高度
	 *
	 * `mask` :string : 遮罩颜色
	 */
	popImage(params:UIAlert_popImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `列表选择对话框`
	 * ========params==========
	 *
	 * `title` :string : 列表标题
	 *
	 * `datas` :JSON : 列表数据
	 *
	 * `styles` :JSON : 对话框样式
	 *
	 * `mask` :string : 对话框遮罩颜色
	 *
	 * `selectedIndex` :number : 默认选中项
	 */
	selectedList(params:UIAlert_selectedList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `提示对话框`
	 * ========params==========
	 *
	 * `imagePath` :string : 图片路径（支持widget:// fs://）
	 *
	 * `content` :string : 提示内容
	 *
	 * `btnTitle` :string : 底部按钮标题
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `mask` :string : 对话框遮罩颜色
	 */
	showTips(params:UIAlert_showTips_Params, callback?: (ret:JSON) => void):void

	/**
	 * `price对话框`
	 * ========params==========
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `mask` :string : 对话框遮罩颜色
	 */
	price(params:UIAlert_price_Params, callback?: (ret:JSON) => void):void

	/**
	 * `提示对话框`
	 * ========params==========
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `mask` :string : 对话框遮罩颜色
	 */
	hint(params:UIAlert_hint_Params, callback?: (ret:JSON) => void):void

	/**
	 * `支付成功对话框`
	 * ========params==========
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `mask` :string : 对话框遮罩颜色
	 */
	paySuccess(params:UIAlert_paySuccess_Params, callback?: (ret:JSON) => void):void

	/**
	 * `支付对话框`
	 * ========params==========
	 *
	 * `styles` :JSON : 对话框样式设置
	 *
	 * `payItems` :Array<JSON> : 付款项
	 *
	 * `mask` :string : 对话框遮罩颜色
	 */
	payDialog(params:UIAlert_payDialog_Params, callback?: (ret:JSON) => void):void

	/** 关闭对话框*/ 
	close():void

}
interface UIAlert_popImage_Params {
	/**图片路径（支持widget:// fs://）*/ 
	imagePath:string,

	/**图片宽度*/ 
	imageW:number,

	/**图片高度*/ 
	imageH:number,

	/**遮罩颜色*/ 
	mask:string,

}

interface UIAlert_selectedList_Params {
	/**列表标题*/ 
	title:string,

	/**列表数据*/ 
	datas:JSON,

	/**对话框样式*/ 
	styles:JSON,

	/**对话框遮罩颜色*/ 
	mask:string,

	/**默认选中项*/ 
	selectedIndex:number,

}

interface UIAlert_showTips_Params {
	/**图片路径（支持widget:// fs://）*/ 
	imagePath:string,

	/**提示内容*/ 
	content:string,

	/**底部按钮标题*/ 
	btnTitle:string,

	/**对话框样式设置*/ 
	styles:JSON,

	/**对话框遮罩颜色*/ 
	mask:string,

}

interface UIAlert_price_Params {
	/**对话框样式设置*/ 
	styles:JSON,

	/**对话框遮罩颜色*/ 
	mask:string,

}

interface UIAlert_hint_Params {
	/**对话框样式设置*/ 
	styles:JSON,

	/**对话框遮罩颜色*/ 
	mask:string,

}

interface UIAlert_paySuccess_Params {
	/**对话框样式设置*/ 
	styles:JSON,

	/**对话框遮罩颜色*/ 
	mask:string,

}

interface UIAlert_payDialog_Params {
	/**对话框样式设置*/ 
	styles:JSON,

	/**付款项*/ 
	payItems:Array<JSON>,

	/**对话框遮罩颜色*/ 
	mask:string,

}

interface kLoading {
	/**
	 * `显示加载框`
	 * ========params==========
	 *
	 * `type` :any : （必选项）加载的效果，值的范围0-22，超过的默认为0，效果参照模块效果图
	 *
	 * `size` :any : （可选项） 加载框的大小
	 *
	 * `color` :string : （可选项）加载效果的颜色，值为6位数的颜色，例如 #ffffff
	 */
	show(params:kLoading_show_Params):void

	/** 关闭加载框*/ 
	hide():void

	/** 当需要更改加载的类型时，可以先调用destory来销毁之前的动画类型*/ 
	destory():void

}
interface kLoading_show_Params {
	/**（必选项）加载的效果，值的范围0-22，超过的默认为0，效果参照模块效果图*/ 
	type:any,

	/**（可选项） 加载框的大小*/ 
	size?:any,

	/**（可选项）加载效果的颜色，值为6位数的颜色，例如 #ffffff*/ 
	color?:string,

}

interface UISwitchButton {
	/**
	 * `打开按钮`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 *
	 * `state` :boolean : 开关状态
	 *
	 * `rect` :JSON : 按钮的宽高及位置设置
	 *
	 * `styles` :JSON : 按钮样式的设计
	 *
	 * `fixed` :boolean : 是否将按钮固定到窗口或frame上，是否跟随窗口上下滚动，可为空
	 *
	 * `fixedOn` :string : （可选项）按钮固定到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UISwitchButton_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏按钮`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 */
	hide(params:UISwitchButton_hide_Params):void

	/**
	 * `显示按钮`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 */
	show(params:UISwitchButton_show_Params):void

	/**
	 * `打开`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 */
	turnOn(params:UISwitchButton_turnOn_Params):void

	/** 关闭*/ 
	turnOff():void

	/**
	 * `获取按钮的开关状态`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 */
	getState(params:UISwitchButton_getState_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭按钮`
	 * ========params==========
	 *
	 * `id` :string : 按钮的id
	 */
	close(params:UISwitchButton_close_Params):void

}
interface UISwitchButton_open_Params {
	/**按钮的id*/ 
	id:string,

	/**开关状态*/ 
	state:boolean,

	/**按钮的宽高及位置设置*/ 
	rect:JSON,

	/**按钮样式的设计*/ 
	styles:JSON,

	/**是否将按钮固定到窗口或frame上，是否跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**（可选项）按钮固定到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UISwitchButton_hide_Params {
	/**按钮的id*/ 
	id:string,

}

interface UISwitchButton_show_Params {
	/**按钮的id*/ 
	id:string,

}

interface UISwitchButton_turnOn_Params {
	/**按钮的id*/ 
	id:string,

}

interface UISwitchButton_getState_Params {
	/**按钮的id*/ 
	id:string,

}

interface UISwitchButton_close_Params {
	/**按钮的id*/ 
	id:string,

}

interface UIScrollPromptView {
	/**
	 * `打开模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :JSON : 模块的图片路径数组，及说明文字数组
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `placeholderImg` :string : （可选项）网络图片未加载完毕时，模块显示的占位图片，要求本地路径（fs://、widget://）
	 *
	 * `contentMode` :string : （可选项）图片填充模式
	 *
	 * `interval` :number : （可选项）图片轮换时间间隔，单位是秒（s）
	 *
	 * `auto` :boolean : （可选项）图片是否自动播放
	 *
	 * `loop` :boolean : （可选项）图片是否循环播放
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIScrollPromptView_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭模块*/ 
	close():void

	/** 显示模块*/ 
	show():void

	/** 隐藏模块*/ 
	hide():void

	/**
	 * `指定当前项`
	 * ========params==========
	 *
	 * `index` :number : （可选项）索引值
	 */
	setCurrentIndex(params:UIScrollPromptView_setCurrentIndex_Params):void

	/**
	 * `更新模块数据`
	 * ========params==========
	 *
	 * `data` :JSON : 模块的图片路径数组，及说明文字数组
	 */
	reloadData(params:UIScrollPromptView_reloadData_Params):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件名称，取值范围：'scroll'（图片滚动事件）
	 */
	addEventListener(params:UIScrollPromptView_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除 app 缓存的所有数据则调用api.clearCache***/ 
	clearCache():void

}
interface UIScrollPromptView_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**模块的图片路径数组，及说明文字数组*/ 
	data:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）网络图片未加载完毕时，模块显示的占位图片，要求本地路径（fs://、widget://）*/ 
	placeholderImg?:string,

	/**（可选项）图片填充模式*/ 
	contentMode?:string,

	/**（可选项）图片轮换时间间隔，单位是秒（s）*/ 
	interval?:number,

	/**（可选项）图片是否自动播放*/ 
	auto?:boolean,

	/**（可选项）图片是否循环播放*/ 
	loop?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIScrollPromptView_setCurrentIndex_Params {
	/**（可选项）索引值*/ 
	index?:number,

}

interface UIScrollPromptView_reloadData_Params {
	/**模块的图片路径数组，及说明文字数组*/ 
	data:JSON,

}

interface UIScrollPromptView_addEventListener_Params {
	/**监听的事件名称，取值范围：'scroll'（图片滚动事件）*/ 
	name:string,

}

interface iOSDialog {
	/**
	 * `类似iOS的底部弹出列表选择`
	 * ========params==========
	 *
	 * `title` :string : 底部弹出框的标题
	 *
	 * `items` :Array : 每个列表项的标题
	 */
	actionSheetDialog(params:iOSDialog_actionSheetDialog_Params, callback?: (ret:JSON) => void):void

	/**
	 * `类似iOS的弹出框，可选择显示一个或者两个按钮`
	 * ========params==========
	 *
	 * `title` :string : (可选)弹出框的标题
	 *
	 * `msg` :string : 弹出框显示的文字
	 *
	 * `positive` :string : （可选）确定按钮的标题
	 *
	 * `negative` :string : （可选）取消按钮的标题
	 */
	alertDialog(params:iOSDialog_alertDialog_Params, callback?: (ret:JSON) => void):void

}
interface iOSDialog_actionSheetDialog_Params {
	/**底部弹出框的标题*/ 
	title:string,

	/**每个列表项的标题*/ 
	items:Array,

}

interface iOSDialog_alertDialog_Params {
	/**(可选)弹出框的标题*/ 
	title?:string,

	/**弹出框显示的文字*/ 
	msg:string,

	/**（可选）确定按钮的标题*/ 
	positive?:string,

	/**（可选）取消按钮的标题*/ 
	negative?:string,

}

interface UIChatUnit {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 录音面板监听*/ 
	recordPanelListener():void

	/** 点击选择收礼人监听  **注意:仅在isGroupChat为true的情况下有效***/ 
	giftsToolListener():void

	/**
	 * `设置礼物数据`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）附加功能面板按钮样式配置
	 *
	 * `buttons` :Array : 附加功能面板按钮信息集合，可分页显示
	 */
	setGiftDatas(params:UIChatUnit_setGiftDatas_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新礼物信息（在群聊情况下选择群成员返回后可使用该方法更新头像及昵称）`
	 * ========params==========
	 *
	 * `avaterPath` :string : （可选项）送礼人的头像(支持 widget:// & fs://)
	 *
	 * `nickText` :string : （可选项）收礼人的昵称
	 */
	updateGiftInfo(params:UIChatUnit_updateGiftInfo_Params):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/** 收起录音面板*/ 
	hideRecordPanel():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatUnit_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatUnit_insertValue_Params):void

	/**
	 * `添加输入框相关事件的监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	chatBoxListener(params:UIChatUnit_chatBoxListener_Params, callback?: (ret:JSON) => void):void

	/** 清空输入框文本*/ 
	clearText():void

	/** 重置模块*/ 
	reset():void

	/** 显示礼物面板*/ 
	showGiftPanel():void

	/** 显示录音面板*/ 
	showRecordPanel():void

	/** 获取当前可见的panel*/ 
	getCurrentVisiblePanel():void

	/** 设置所有按钮可用/不可用*/ 
	setEnableAllBtns():void

}
interface UIChatUnit_setGiftDatas_Params {
	/**（可选项）附加功能面板按钮样式配置*/ 
	styles?:JSON,

	/**附加功能面板按钮信息集合，可分页显示*/ 
	buttons:Array,

}

interface UIChatUnit_updateGiftInfo_Params {
	/**（可选项）送礼人的头像(支持 widget:// & fs://)*/ 
	avaterPath?:string,

	/**（可选项）收礼人的昵称*/ 
	nickText?:string,

}

interface UIChatUnit_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatUnit_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatUnit_chatBoxListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface UIMultiSelector {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `text` :JSON : （可选项）模块相应文字设置
	 *
	 * `max` :number : （可选项）最多允许同时选中的项数；当值为 0 时可选中所有项，若本字段值大于0则全选项不显示；当值为其它时，选择超过 max 的选项，选项选择无效且回调 ret-> eventType 返回 “overflow”
	 *
	 * `singleSelection` :boolean : （可选项）是否为单选框；参数值为 true 时，忽略参数 max，模块呈 “单选项” 模式状态，即选择第二项将自动取消前一项的已选中状态
	 *
	 * `styles` :JSON : （可选项）模块的样式设置
	 *
	 * `animation` :boolean : （可选项）打开关闭时是否显示滑入滑出动画
	 *
	 * `maskClose` :boolean : （可选项）用户点击遮罩层（选择器以外的区域）时，是否关闭选择器
	 *
	 * `items` :Array<JSON> : 选择器的数据
	 */
	open(params:UIMultiSelector_open_Params, callback?: (ret:JSON) => void):void

	/** 显示已隐藏的选择器*/ 
	show():void

	/** 隐藏选择器（并未从内存清除）*/ 
	hide():void

	/** 关闭选择器（从内存清除）*/ 
	close():void

}
interface UIMultiSelector_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块相应文字设置*/ 
	text?:JSON,

	/**（可选项）最多允许同时选中的项数；当值为 0 时可选中所有项，若本字段值大于0则全选项不显示；当值为其它时，选择超过 max 的选项，选项选择无效且回调 ret-> eventType 返回 “overflow”*/ 
	max?:number,

	/**（可选项）是否为单选框；参数值为 true 时，忽略参数 max，模块呈 “单选项” 模式状态，即选择第二项将自动取消前一项的已选中状态*/ 
	singleSelection?:boolean,

	/**（可选项）模块的样式设置*/ 
	styles?:JSON,

	/**（可选项）打开关闭时是否显示滑入滑出动画*/ 
	animation?:boolean,

	/**（可选项）用户点击遮罩层（选择器以外的区域）时，是否关闭选择器*/ 
	maskClose?:boolean,

	/**选择器的数据*/ 
	items:Array<JSON>,

}

interface button {
}
interface brokenLine {
}
interface UIPieChart {
	/**
	 * `**注意:请保证 所有数值加起来不为0 否则无实际意义 **`
	 * ========params==========
	 *
	 * `x` :number : （可选项）圆心坐标
	 *
	 * `y` :number : （可选项）圆心坐标
	 *
	 * `radius` :number : （可选项）圆半径
	 *
	 * `type` :string : （可选项）饼图样式
	 *
	 * `isAnimated` :boolean : （可选项）是否带动画
	 *
	 * `center` :JSON : （可选项）饼形图中间标题样式设置(仅圆环样式下有效)
	 *
	 * `elements` :Array : 模块字典对象组成的数组
	 *
	 * `fixedOn` :string : （可选项）添加到哪个frame，与fixed一起使用
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIPieChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新展示数据`
	 * ========params==========
	 *
	 * `id` :number : 操作的视图的id
	 *
	 * `elements` :Array : 模块字典对象组成的数组
	 */
	reloadData(params:UIPieChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/** 重设模块视图的位置大小*/ 
	setFrame():void

	/**
	 * `关闭饼图`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的饼图的id
	 */
	close(params:UIPieChart_close_Params):void

	/**
	 * `隐藏饼图`
	 * ========params==========
	 *
	 * `id` :number : 要隐藏的饼图的id
	 */
	hide(params:UIPieChart_hide_Params):void

	/**
	 * `显示已隐藏的饼形图`
	 * ========params==========
	 *
	 * `id` :number : 要显示的饼图的id
	 */
	show(params:UIPieChart_show_Params):void

}
interface UIPieChart_open_Params {
	/**（可选项）圆心坐标*/ 
	x?:number,

	/**（可选项）圆心坐标*/ 
	y?:number,

	/**（可选项）圆半径*/ 
	radius?:number,

	/**（可选项）饼图样式*/ 
	type?:string,

	/**（可选项）是否带动画*/ 
	isAnimated?:boolean,

	/**（可选项）饼形图中间标题样式设置(仅圆环样式下有效)*/ 
	center?:JSON,

	/**模块字典对象组成的数组*/ 
	elements:Array,

	/**（可选项）添加到哪个frame，与fixed一起使用*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIPieChart_reloadData_Params {
	/**操作的视图的id*/ 
	id:number,

	/**模块字典对象组成的数组*/ 
	elements:Array,

}

interface UIPieChart_close_Params {
	/**要关闭的饼图的id*/ 
	id:number,

}

interface UIPieChart_hide_Params {
	/**要隐藏的饼图的id*/ 
	id:number,

}

interface UIPieChart_show_Params {
	/**要显示的饼图的id*/ 
	id:number,

}

interface groupList {
}
interface thwartwiseBarChart {
	/**
	 * `打开横排柱状图模块，当数据条数超过当前显示区域时，可上下滑动查看`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 横排柱形图关键结点的数据，数据排列方式为从下而上
	 *
	 * `styles` :any : （可选项）模块视图内元素样式设置
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:thwartwiseBarChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重新加载数据，当数据条数超过当前显示区域时，可上下滑动查看`
	 * ========params==========
	 *
	 * `id` :number : 要刷新数据的模块的 id
	 *
	 * `data` :Array : 横排柱形图关键结点的数据，数据排列方式为从下而上
	 */
	reloadData(params:thwartwiseBarChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭柱状图，并从内存里清除`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的模块的 id
	 */
	close(params:thwartwiseBarChart_close_Params):void

	/**
	 * `隐藏柱状图视图，并没有从内存里清除，可调用 show 接口显示`
	 * ========params==========
	 *
	 * `id` :number : 要隐藏的模块的 id
	 */
	hide(params:thwartwiseBarChart_hide_Params):void

	/**
	 * `显示已隐藏的柱状图视图`
	 * ========params==========
	 *
	 * `id` :number : 要显示的模块的 id
	 */
	show(params:thwartwiseBarChart_show_Params):void

}
interface thwartwiseBarChart_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**横排柱形图关键结点的数据，数据排列方式为从下而上*/ 
	data:Array,

	/**（可选项）模块视图内元素样式设置*/ 
	styles?:any,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface thwartwiseBarChart_reloadData_Params {
	/**要刷新数据的模块的 id*/ 
	id:number,

	/**横排柱形图关键结点的数据，数据排列方式为从下而上*/ 
	data:Array,

}

interface thwartwiseBarChart_close_Params {
	/**要关闭的模块的 id*/ 
	id:number,

}

interface thwartwiseBarChart_hide_Params {
	/**要隐藏的模块的 id*/ 
	id:number,

}

interface thwartwiseBarChart_show_Params {
	/**要显示的模块的 id*/ 
	id:number,

}

interface doubleSlider {
	/**
	 * `打开doubleSlider`
	 * ========params==========
	 *
	 * `orientation` :string : （可选项）滑动控件的朝向：vertical | horizontal
	 *
	 * `animation` :boolean : （可选项）当值发生改变时，如 click 事件，是否为滑块的移动显示动画
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸(底部滑杆)
	 *
	 * `bubble` :JSON : 提示气泡设置
	 *
	 * `handler` :JSON : 滑块设置
	 *
	 * `bar` :JSON : 滑动条设置
	 *
	 * `value` :JSON : 滑动控件的值设置
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 *
	 * `frequency` :string : （可选项）滑动时回调函数触发的频率
	 */
	open(params:doubleSlider_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置doubleSlider的值`
	 * ========params==========
	 *
	 * `id` :number : 指定滑动控件的唯一标识，当 open 成功后返回
	 *
	 * `value` :JSON : 要设置的值
	 */
	setValue(params:doubleSlider_setValue_Params):void

	/**
	 * `锁定doubleSlider的值`
	 * ========params==========
	 *
	 * `id` :string : 指定滑动控件的唯一标识，当 open 成功后返回
	 *
	 * `lock` :boolean : （可选项）是否锁定指定模块
	 */
	lock(params:doubleSlider_lock_Params):void

	/**
	 * `关闭doubleSlider`
	 * ========params==========
	 *
	 * `id` :string : 指定滑动控件的唯一标识，当 open 成功后返回
	 */
	close(params:doubleSlider_close_Params):void

	/** 显示双向滑动条*/ 
	show():void

	/** 隐藏双向滑动条*/ 
	hide():void

	/** 若滑动选择器配置显示了气泡，通过调用此接口可自定义气泡显示内容，此时模块会忽略选择器的气泡显示的当前值（open -> bubble 配置显示的内容-------prefix + 当前值 + suffix）。*/ 
	setBubble():void

}
interface doubleSlider_open_Params {
	/**（可选项）滑动控件的朝向：vertical | horizontal*/ 
	orientation?:string,

	/**（可选项）当值发生改变时，如 click 事件，是否为滑块的移动显示动画*/ 
	animation?:boolean,

	/**（可选项）模块的位置及尺寸(底部滑杆)*/ 
	rect?:JSON,

	/**提示气泡设置*/ 
	bubble:JSON,

	/**滑块设置*/ 
	handler:JSON,

	/**滑动条设置*/ 
	bar:JSON,

	/**滑动控件的值设置*/ 
	value:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

	/**（可选项）滑动时回调函数触发的频率*/ 
	frequency?:string,

}

interface doubleSlider_setValue_Params {
	/**指定滑动控件的唯一标识，当 open 成功后返回*/ 
	id:number,

	/**要设置的值*/ 
	value:JSON,

}

interface doubleSlider_lock_Params {
	/**指定滑动控件的唯一标识，当 open 成功后返回*/ 
	id:string,

	/**（可选项）是否锁定指定模块*/ 
	lock?:boolean,

}

interface doubleSlider_close_Params {
	/**指定滑动控件的唯一标识，当 open 成功后返回*/ 
	id:string,

}

interface UIChatBar {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/**
	 * `弹出自定义、附加功能面板`
	 * ========params==========
	 *
	 * `target` :string : 操作的面板类型，取值范围如下：
	 */
	popupBoard(params:UIChatBar_popupBoard_Params):void

	/** 收起自定义、附加功能面板*/ 
	closeBoard():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatBar_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatBar_insertValue_Params):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `target` :string : 事件的目标对象
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:UIChatBar_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设聊天输入框的占位提示文本`
	 * ========params==========
	 *
	 * `placeholder` :string : （可选项）占位提示文本，若不传或传空则表示清空占位提示内容
	 */
	setPlaceholder(params:UIChatBar_setPlaceholder_Params):void

	/**
	 * `重新加载（刷新）附加功能面板，**open时必须添加附加功能按钮及其面板参数**`
	 * ========params==========
	 *
	 * `extras` :JSON : （可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传
	 */
	reloadExtraBoard(params:UIChatBar_reloadExtraBoard_Params):void

}
interface UIChatBar_popupBoard_Params {
	/**操作的面板类型，取值范围如下：*/ 
	target:string,

}

interface UIChatBar_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatBar_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatBar_addEventListener_Params {
	/**事件的目标对象*/ 
	target:string,

	/**监听的事件类型*/ 
	name:string,

}

interface UIChatBar_setPlaceholder_Params {
	/**（可选项）占位提示文本，若不传或传空则表示清空占位提示内容*/ 
	placeholder?:string,

}

interface UIChatBar_reloadExtraBoard_Params {
	/**（可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传*/ 
	extras?:JSON,

}

interface UIAlbumSelector {
	/** 判断当前 App 访问系统相册权限*/ 
	authorizationStatus():void

	/**
	 * `打开多媒体资源选择器，打开后会全屏显示`
	 * ========params==========
	 *
	 * `maxAlert` :JSON : （可选项）超出设置的最大选取数时的提示
	 *
	 * `type` :string : （可选项）显示图片或视频
	 *
	 * `selectedAll` :boolean : （可选项）当type为all时，视频和图片能不能同时选中，仅当type为all时本参数有意义。若为false则非首选资源类型元素上置有遮罩层变为不可选状态（仅iOS支持）
	 *
	 * `selectedNumber` :boolean : （可选项）照片选中状态是否显示数字，设置为true后注意selected（选中图标）不建议使用模块默认图片（仅iOS支持）
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 */
	open(params:UIAlbumSelector_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `扫描系统多媒体资源，可以通过 Web 代码自定义多选界面。`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'
	 *
	 * `count` :number : （可选项）每次返回的资源数量，剩余资源可用 fetch 接口遍历（仅iOS支持，android返回所有资源）
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android获取系统缩略图）
	 */
	scan(params:UIAlbumSelector_scan_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取系统多媒体资源的分组`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'
	 *
	 * `thumbnail` :JSON : （可选项）返回的分组的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android获取系统缩略图）
	 */
	scanGroups(params:UIAlbumSelector_scanGroups_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据分组id，扫描系统多媒体资源。（android根据分组name返回）`
	 * ========params==========
	 *
	 * `groupId` :string : 分组id（仅iOS支持）
	 *
	 * `groupName` :string : 分组名称（仅android支持）
	 *
	 * `type` :string : 分组类型；默认：'all'
	 *
	 * `count` :number : （可选项）每次返回的资源数量，剩余资源可用 fetchGroup 接口遍历（仅iOS支持，android返回全部资源）
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android返回系统缩略图）
	 */
	scanByGroupId(params:UIAlbumSelector_scanByGroupId_Params, callback?: (ret:JSON) => void):void

	/**
	 * `视频路径转化（仅iOS支持）`
	 * ========params==========
	 *
	 * `path` :string : 要转换的视频路径
	 */
	transVideoPath(params:UIAlbumSelector_transVideoPath_Params, callback?: (ret:JSON) => void):void

	/** 清除本模块缓存到沙盒的图片、视频，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface UIAlbumSelector_open_Params {
	/**（可选项）超出设置的最大选取数时的提示*/ 
	maxAlert?:JSON,

	/**（可选项）显示图片或视频*/ 
	type?:string,

	/**（可选项）当type为all时，视频和图片能不能同时选中，仅当type为all时本参数有意义。若为false则非首选资源类型元素上置有遮罩层变为不可选状态（仅iOS支持）*/ 
	selectedAll?:boolean,

	/**（可选项）照片选中状态是否显示数字，设置为true后注意selected（选中图标）不建议使用模块默认图片（仅iOS支持）*/ 
	selectedNumber?:boolean,

	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

}

interface UIAlbumSelector_scan_Params {
	/**返回的资源种类；默认：'all'*/ 
	type:string,

	/**（可选项）每次返回的资源数量，剩余资源可用 fetch 接口遍历（仅iOS支持，android返回所有资源）*/ 
	count?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android获取系统缩略图）*/ 
	thumbnail?:JSON,

}

interface UIAlbumSelector_scanGroups_Params {
	/**返回的资源种类；默认：'all'*/ 
	type:string,

	/**（可选项）返回的分组的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android获取系统缩略图）*/ 
	thumbnail?:JSON,

}

interface UIAlbumSelector_scanByGroupId_Params {
	/**分组id（仅iOS支持）*/ 
	groupId:string,

	/**分组名称（仅android支持）*/ 
	groupName:string,

	/**分组类型；默认：'all'*/ 
	type:string,

	/**（可选项）每次返回的资源数量，剩余资源可用 fetchGroup 接口遍历（仅iOS支持，android返回全部资源）*/ 
	count?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口 clearCache()。（仅iOS支持，android返回系统缩略图）*/ 
	thumbnail?:JSON,

}

interface UIAlbumSelector_transVideoPath_Params {
	/**要转换的视频路径*/ 
	path:string,

}

interface UIAlbum {
	/**
	 * `打开图片资源选择器，打开后会全屏显示`
	 * ========params==========
	 *
	 * `max` :number : （可选项）最多选择几张图片
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 */
	open(params:UIAlbum_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭图片资源选择器*/ 
	close():void

	/**
	 * `将相册图片地址转换为可以直接使用的本地路径地址（临时文件夹的绝对路径），**相册图片会被拷贝到临时文件夹，调用 api.clearCache 接口可清除该临时图片文件**`
	 * ========params==========
	 *
	 * `path` :string : 要转换的图片路径（在相册库的绝对路径）
	 */
	transPath(params:UIAlbum_transPath_Params, callback?: (ret:JSON) => void):void

	/** 请求相册权限*/ 
	requestAlbumPermissions():void

}
interface UIAlbum_open_Params {
	/**（可选项）最多选择几张图片*/ 
	max?:number,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

}

interface UIAlbum_transPath_Params {
	/**要转换的图片路径（在相册库的绝对路径）*/ 
	path:string,

}

interface UIWebBrowser {
	/**
	 * `打开模块`
	 * ========params==========
	 *
	 * `path` :string : 打开的页面所加载的 html 文件路径，支持本地、网络协议（http://、fs://、widget://）
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `button` :JSON : （可选项）模块上的控制按钮配置，本参数可不传，若不传则不显示控制按钮
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIWebBrowser_open_Params, callback?: (ret:JSON) => void):void

	/** 隐藏模块*/ 
	hide():void

	/** 显示已隐藏的模块*/ 
	show():void

	/** 关闭模块*/ 
	close():void

	/**
	 * `重设模块的 rect`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `animation` :boolean : （可选项）重设 rect 时，是否带动画效果
	 */
	setRect(params:UIWebBrowser_setRect_Params):void

	/** 设置按钮选中/取消状态*/ 
	setSelected():void

}
interface UIWebBrowser_open_Params {
	/**打开的页面所加载的 html 文件路径，支持本地、网络协议（http://、fs://、widget://）*/ 
	path:string,

	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块上的控制按钮配置，本参数可不传，若不传则不显示控制按钮*/ 
	button?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIWebBrowser_setRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）重设 rect 时，是否带动画效果*/ 
	animation?:boolean,

}

interface noticeView {
	/**
	 * `打开notiveView轮播公告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `style` :JSON : （可选项）模块的样式
	 *
	 * `icon` :JSON : （可选项）模块左侧图片样式
	 *
	 * `message` :JSON : （可选项）模块轮播公告内容文字样式
	 *
	 * `line` :JSON : （可选项）模块内分割线样式
	 *
	 * `right` :JSON : （可选项）模块右侧文字按钮样式
	 *
	 * `data` :JSON : （可选项）轮播公告的数据源
	 *
	 * `Interval` :number : （可选项）模块公告的轮播频率；单位：s
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:noticeView_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :JSON : （可选项）公告的数据源
	 */
	appendData(params:noticeView_appendData_Params):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :JSON : （可选项）公告的数据源
	 */
	reloadData(params:noticeView_reloadData_Params):void

}
interface noticeView_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块的样式*/ 
	style?:JSON,

	/**（可选项）模块左侧图片样式*/ 
	icon?:JSON,

	/**（可选项）模块轮播公告内容文字样式*/ 
	message?:JSON,

	/**（可选项）模块内分割线样式*/ 
	line?:JSON,

	/**（可选项）模块右侧文字按钮样式*/ 
	right?:JSON,

	/**（可选项）轮播公告的数据源*/ 
	data?:JSON,

	/**（可选项）模块公告的轮播频率；单位：s*/ 
	Interval?:number,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface noticeView_appendData_Params {
	/**（可选项）公告的数据源*/ 
	data?:JSON,

}

interface noticeView_reloadData_Params {
	/**（可选项）公告的数据源*/ 
	data?:JSON,

}

interface UIListSearch {
	/**
	 * `打开列表模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `label` :JSON : （可选项）底部标签配置，若不传则不显示底部标签。此参数即将废弃，用labels参数替代，若传了labels参数，label参数将被忽略。
	 *
	 * `labels` :Array<JSON> : （可选项）底部标签配置，若不传则不显示底部标签。
	 *
	 * `labelEnabled` :boolean : （可选项）底部标签是否可以点击交互，若设置为能点击，点击后会回调label的索引及内容。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListSearch_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块，从内存里清除*/ 
	close():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/** 隐藏列表模块，并未从内存里清除*/ 
	hide():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `label` :JSON : （可选项）底部标签配置，若不传则不显示底部标签。此参数即将废弃，用labels参数替代，若传了labels参数，label参数将被忽略。
	 *
	 * `labels` :Array<JSON> : （可选项）底部标签配置，若不传则不显示底部标签。
	 */
	reloadData(params:UIListSearch_reloadData_Params):void

}
interface UIListSearch_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）底部标签配置，若不传则不显示底部标签。此参数即将废弃，用labels参数替代，若传了labels参数，label参数将被忽略。*/ 
	label?:JSON,

	/**（可选项）底部标签配置，若不传则不显示底部标签。*/ 
	labels?:Array<JSON>,

	/**（可选项）底部标签是否可以点击交互，若设置为能点击，点击后会回调label的索引及内容。*/ 
	labelEnabled?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListSearch_reloadData_Params {
	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）底部标签配置，若不传则不显示底部标签。此参数即将废弃，用labels参数替代，若传了labels参数，label参数将被忽略。*/ 
	label?:JSON,

	/**（可选项）底部标签配置，若不传则不显示底部标签。*/ 
	labels?:Array<JSON>,

}

interface keyboard {
	/**
	 * `打开自定义的数字键盘界面。键盘的默认高度为203。位置的设置请自己进行处理。`
	 * ========params==========
	 *
	 * `x` :number : （必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `dotLable` :string : （可选项）自定义数字键盘dot显示文本
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	openKeyboard(params:keyboard_openKeyboard_Params, callback?: (ret:JSON) => void):void

	/** 隐藏数字键盘*/ 
	hiddenKeyboard(callback?: (ret:JSON) => void):void

	/** 显示被隐藏的数字键盘*/ 
	showKeyboard(callback?: (ret:JSON) => void):void

	/** 关闭打开的数字键盘*/ 
	closeKeyboard(callback?: (ret:JSON) => void):void

	/**
	 * `打开自定义的文本编辑框，(注意：目前暂时只支持从文本最后删除和插入，不支持文本中进行插入和删除)。`
	 * ========params==========
	 *
	 * `x` :number : （必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `w` :number : （可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度
	 *
	 * `h` :number : （可选项）模块的高度；默认：所属的 Window 或 Frame 的高度
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `message` :string : （可选项）默认要显示的文本消息内容。
	 *
	 * `placeholder` :string : （可选项）当内容为空时显示的文本提示内容。
	 */
	openEditText(params:keyboard_openEditText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开自定义的26位字母键盘界面。键盘的默认高度为203。位置的设置请自己进行处理。`
	 * ========params==========
	 *
	 * `x` :number : （必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :string : （可选项）alt键按切换后左下角显示文字
	 *
	 * `returnLabel` :string : （可选项）右下角键按显示文字
	 *
	 * `spaceLabel` :string : （可选项）空格键按钮显示文字
	 *
	 * `charDefault` :Array : （必须项）默认显示在键盘上的信息，长度必须位26，可为小写26字母
	 *
	 * `charShift` :Array : （必须项）点击shift按钮切换在键盘上的信息，长度必须位26，可为大写26字母
	 *
	 * `charAlt` :Array : （必须项）点击alt按钮切换在键盘上的信息，长度必须位26，可为数字和特殊符号集合
	 */
	openCustomKeyboard(params:keyboard_openCustomKeyboard_Params, callback?: (ret:JSON) => void):void

	/** 隐藏字母键盘*/ 
	hiddenCustomKeyboard(callback?: (ret:JSON) => void):void

	/** 显示被隐藏的字母键盘*/ 
	showCustomKeyboard(callback?: (ret:JSON) => void):void

	/** 关闭打开的字母键盘*/ 
	closeCustomKeyboard(callback?: (ret:JSON) => void):void

}
interface keyboard_openKeyboard_Params {
	/**（必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x:number,

	/**（必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y:number,

	/**（可选项）自定义数字键盘dot显示文本*/ 
	dotLable?:string,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface keyboard_openEditText_Params {
	/**（必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x:number,

	/**（必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y:number,

	/**（可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度*/ 
	w?:number,

	/**（可选项）模块的高度；默认：所属的 Window 或 Frame 的高度*/ 
	h?:number,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）默认要显示的文本消息内容。*/ 
	message?:string,

	/**（可选项）当内容为空时显示的文本提示内容。*/ 
	placeholder?:string,

}

interface keyboard_openCustomKeyboard_Params {
	/**（必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x:number,

	/**（必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y:number,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）alt键按切换后左下角显示文字*/ 
	fixed?:string,

	/**（可选项）右下角键按显示文字*/ 
	returnLabel?:string,

	/**（可选项）空格键按钮显示文字*/ 
	spaceLabel?:string,

	/**（必须项）默认显示在键盘上的信息，长度必须位26，可为小写26字母*/ 
	charDefault:Array,

	/**（必须项）点击shift按钮切换在键盘上的信息，长度必须位26，可为大写26字母*/ 
	charShift:Array,

	/**（必须项）点击alt按钮切换在键盘上的信息，长度必须位26，可为数字和特殊符号集合*/ 
	charAlt:Array,

}

interface UIChatInput {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/**
	 * `弹出表情、附加功能面板`
	 * ========params==========
	 *
	 * `target` :string : 操作的面板类型，取值范围如下：
	 */
	popupBoard(params:UIChatInput_popupBoard_Params):void

	/** 收起表情、附加功能面板*/ 
	closeBoard():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatInput_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatInput_insertValue_Params):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `target` :string : 事件的目标对象
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:UIChatInput_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设聊天输入框的占位提示文本`
	 * ========params==========
	 *
	 * `placeholder` :string : （可选项）占位提示文本，若不传或传空则表示清空占位提示内容
	 */
	setPlaceholder(params:UIChatInput_setPlaceholder_Params):void

	/**
	 * `重新加载（刷新）附加功能面板，**open时必须添加附加功能按钮及其面板参数**`
	 * ========params==========
	 *
	 * `extras` :JSON : （可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传
	 */
	reloadExtraBoard(params:UIChatInput_reloadExtraBoard_Params):void

	/**
	 * `切换输入区域`
	 * ========params==========
	 *
	 * `type` :string : 输入区域类型
	 */
	switchInputArea(params:UIChatInput_switchInputArea_Params):void

	/** 设置切换（输入框/录音按钮）按钮的图标*/ 
	setSwitchBtnIcon():void

}
interface UIChatInput_popupBoard_Params {
	/**操作的面板类型，取值范围如下：*/ 
	target:string,

}

interface UIChatInput_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatInput_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatInput_addEventListener_Params {
	/**事件的目标对象*/ 
	target:string,

	/**监听的事件类型*/ 
	name:string,

}

interface UIChatInput_setPlaceholder_Params {
	/**（可选项）占位提示文本，若不传或传空则表示清空占位提示内容*/ 
	placeholder?:string,

}

interface UIChatInput_reloadExtraBoard_Params {
	/**（可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传*/ 
	extras?:JSON,

}

interface UIChatInput_switchInputArea_Params {
	/**输入区域类型*/ 
	type:string,

}

interface frameTree {
	/**
	 * `打开 frame 并加入树管理`
	 * ========params==========
	 *
	 * `name` :string : frame 名字
	 *
	 * `url` :string : 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小
	 *
	 * `fixedOn` :string : （可选项）父节点frame，如果不写或者""就是win，这样打开的frame就在第1层。想在当前frame打开子frame，可传递api.frameName
	 *
	 * `offsetX` :number : （可选项）绑定相对于父节点的x坐标，添加此参数将忽略rect中的x值
	 *
	 * `offsetY` :number : （可选项）绑定相对于父节点的y坐标，添加此参数将忽略rect中的y值
	 *
	 * `preload` :boolean : （可选项）是否预加载，true会在同层级的底层打开，不会影响前面的frame，如果同层级还没有frame，那么即使true也会看到的
	 */
	openFrame(params:frameTree_openFrame_Params):void

	/**
	 * `关闭 frame 并关闭所有子 frame`
	 * ========params==========
	 *
	 * `name` :string : frame 名字
	 */
	closeFrame(params:frameTree_closeFrame_Params):void

	/**
	 * `在同层中移动显示顺序，子frame也会相应变动`
	 * ========params==========
	 *
	 * `from` :string : 待调整显示顺序的 frame 名字
	 *
	 * `to` :string : （可选项）frame 名字，不传时调整 from 对应 frame 到本层级的最高层，否则调整 from 对应 frame 到此 frame 前面，特殊参数"~frameTreeMin~"，调整 from 对应 frame 到本层级的最低层
	 */
	FrameTo(params:frameTree_FrameTo_Params):void

	/**
	 * `设置 frame 属性，没写的参数和api.setFrameAttr一样,参见[//docs.apicloud.com/Client-API/api#41](//docs.apicloud.com/Client-API/api#41)`
	 * ========params==========
	 *
	 * `name` :string : frame 名字
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小
	 *
	 * `offsetX` :number : （可选项）绑定相对于父节点的x坐标，添加此参数将忽略rect中的x值
	 *
	 * `offsetY` :number : （可选项）绑定相对于父节点的y坐标，添加此参数将忽略rect中的y值
	 */
	setFrameAttr(params:frameTree_setFrameAttr_Params):void

	/**
	 * `设置 frame 的xy是否绑定到父节点，通过本模块openFrame的 frame 是默认绑定的`
	 * ========params==========
	 *
	 * `name` :string : 待调整绑定的 frame 名字
	 *
	 * `bindX` :boolean : （可选项）是否绑定到父节点的x坐标，如true父节点的x变动时 name 对应 frame 的x也会相应变动，反之则反
	 *
	 * `bindY` :boolean : （可选项）是否绑定到父节点的y坐标，如true父节点的y变动时 name 对应 frame 的y也会相应变动，反之则反
	 *
	 * `x` :number : （可选项）name 对应 frame 的x相对于窗口的坐标改变，这个只是修正了对象内部值，不会立即有所变化，而且也不影响子 frame ，这个只是用来配合frameTree.setFrameAttr时用
	 *
	 * `y` :number : （可选项）name 对应 frame 的y相对于窗口的坐标改变，这个只是修正了对象内部值，不会立即有所变化，而且也不影响子 frame ，这个只是用来配合frameTree.setFrameAttr时用
	 */
	setFrameBind(params:frameTree_setFrameBind_Params):void

	/** 刷新树层级显示，一般不用调用这个函数，如果发现显示层次混乱了就调用一下。*/ 
	update():void

}
interface frameTree_openFrame_Params {
	/**frame 名字*/ 
	name:string,

	/**页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址*/ 
	url:string,

	/**（可选项）frame 的位置和大小*/ 
	rect?:JSON,

	/**（可选项）父节点frame，如果不写或者""就是win，这样打开的frame就在第1层。想在当前frame打开子frame，可传递api.frameName*/ 
	fixedOn?:string,

	/**（可选项）绑定相对于父节点的x坐标，添加此参数将忽略rect中的x值*/ 
	offsetX?:number,

	/**（可选项）绑定相对于父节点的y坐标，添加此参数将忽略rect中的y值*/ 
	offsetY?:number,

	/**（可选项）是否预加载，true会在同层级的底层打开，不会影响前面的frame，如果同层级还没有frame，那么即使true也会看到的*/ 
	preload?:boolean,

}

interface frameTree_closeFrame_Params {
	/**frame 名字*/ 
	name:string,

}

interface frameTree_FrameTo_Params {
	/**待调整显示顺序的 frame 名字*/ 
	from:string,

	/**（可选项）frame 名字，不传时调整 from 对应 frame 到本层级的最高层，否则调整 from 对应 frame 到此 frame 前面，特殊参数"~frameTreeMin~"，调整 from 对应 frame 到本层级的最低层*/ 
	to?:string,

}

interface frameTree_setFrameAttr_Params {
	/**frame 名字*/ 
	name:string,

	/**（可选项）frame 的位置和大小*/ 
	rect?:JSON,

	/**（可选项）绑定相对于父节点的x坐标，添加此参数将忽略rect中的x值*/ 
	offsetX?:number,

	/**（可选项）绑定相对于父节点的y坐标，添加此参数将忽略rect中的y值*/ 
	offsetY?:number,

}

interface frameTree_setFrameBind_Params {
	/**待调整绑定的 frame 名字*/ 
	name:string,

	/**（可选项）是否绑定到父节点的x坐标，如true父节点的x变动时 name 对应 frame 的x也会相应变动，反之则反*/ 
	bindX?:boolean,

	/**（可选项）是否绑定到父节点的y坐标，如true父节点的y变动时 name 对应 frame 的y也会相应变动，反之则反*/ 
	bindY?:boolean,

	/**（可选项）name 对应 frame 的x相对于窗口的坐标改变，这个只是修正了对象内部值，不会立即有所变化，而且也不影响子 frame ，这个只是用来配合frameTree.setFrameAttr时用*/ 
	x?:number,

	/**（可选项）name 对应 frame 的y相对于窗口的坐标改变，这个只是修正了对象内部值，不会立即有所变化，而且也不影响子 frame ，这个只是用来配合frameTree.setFrameAttr时用*/ 
	y?:number,

}

interface UIAlbumBrowser {
	/**
	 * `打开多媒体资源选择器，打开后会全屏显示`
	 * ========params==========
	 *
	 * `max` :number : （可选项）最多选择几张图片
	 *
	 * `type` :string : （可选项）显示图片或显示图片和视频
	 *
	 * `isOpenPreview` :boolean : （可选项）显是否打开预览界面
	 *
	 * `classify` :boolean : （可选项）是否将图片分类显示，为 true 时，会首先跳转到相册分类列表页面，false时打开第一个分组的详情。(仅对iOS有效)
	 *
	 * `selectedAll` :boolean : （可选项）当type为all时，视频和图片能不能同时选中，参考微信，仅当type为all时本参数有意义
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `rotation` :boolean : 屏幕是否旋转（横屏），为 true 时可以横竖屏旋转，false 时禁止横屏
	 *
	 * `alertTitle` :string : （可选项）超过设置的选中图片的数量时的提示框内容
	 *
	 * `alertBtnTitle` :string : （可选项）超过设置的选中图片的数量时的提示框按钮名称（仅iOS支持）
	 *
	 * `videoTimeFilter` :number : （可选项）视频时间长度超过此参数,禁止选取
	 */
	open(params:UIAlbumBrowser_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开图片选择器，打开后会全屏显示`
	 * ========params==========
	 *
	 * `max` :number : （可选项）最多选择几张图片
	 *
	 * `showCamera` :boolean : 是否显示相机
	 *
	 * `selectedPaths` :Array : （可选项）默认选中图片的路径组成的数组 (需传入path参数，用相机拍照后需传入assetPath参数)
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `isSystemCamera` :boolean : （可选项）拍照时是否调用系统相机
	 *
	 * `animation` :boolean : （可选项）点击下一步按钮时是否有动画
	 */
	imagePicker(params:UIAlbumBrowser_imagePicker_Params, callback?: (ret:JSON) => void):void

	/** 针对imagePicker接口关闭*/ 
	closePicker():void

	/** 请求相册权限*/ 
	requestAlbumPermissions():void

	/**
	 * `扫描系统多媒体资源，可以通过 Web 代码自定义多选界面。**注意：页面展示的图片建议使用缩略图，一次显示的图片不宜过多（1至2屏）**`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'
	 *
	 * `count` :number : （可选项）每次返回的资源数量，剩余资源可用 fetch 接口遍历
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。
	 */
	scan(params:UIAlbumBrowser_scan_Params, callback?: (ret:JSON) => void):void

	/** 获取指定数量的多媒体资源，没有更多资源则返回空数组，**必须配合 scan 接口的 count 参数一起使用**。*/ 
	fetch():void

	/**
	 * `扫描系统多媒体资源的分组，可以通过 Web 代码自定义多选界面。`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'(iOS不支持)
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。
	 */
	scanGroups(params:UIAlbumBrowser_scanGroups_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据分组id，扫描系统多媒体资源，可以通过 Web 代码自定义多选界面。**注意：页面展示的图片建议使用缩略图，一次显示的图片不宜过多（1至2屏）**`
	 * ========params==========
	 *
	 * `groupId` :string : 分组id；
	 *
	 * `type` :string : 分组类型；默认：'all'
	 *
	 * `count` :number : （可选项）每次返回的资源数量，剩余资源可用 fetchGroup 接口遍历
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。
	 */
	scanByGroupId(params:UIAlbumBrowser_scanByGroupId_Params, callback?: (ret:JSON) => void):void

	/** 从分组中获取指定数量的多媒体资源，没有更多资源则返回空数组，**必须配合 scanByGroupId 接口的 count 参数一起使用**。*/ 
	fetchGroup():void

	/**
	 * `将相册图片地址转换为可以直接使用的本地路径地址（临时文件夹的绝对路径），**相册图片会被拷贝到临时文件夹，调用 api.clearCache 接口可清除该临时图片文件**`
	 * ========params==========
	 *
	 * `path` :string : 要转换的图片路径（在相册库的绝对路径）
	 *
	 * `quality` :string : 视频质量（android此参数为图片的quality，不支持视频）(iOS不支持)
	 *
	 * `scale` :number : 图片质量  (iOS不支持)
	 */
	transPath(params:UIAlbumBrowser_transPath_Params, callback?: (ret:JSON) => void):void

	/**
	 * `视频路径转化，**直接获取的路径需经本接口转换后才能使用（播放、上传等）**`
	 * ========params==========
	 *
	 * `path` :string : 要转换的视频路径（在相册库的绝对路径）
	 *
	 * `isSave` :boolean : 是否保存在沙盒 （仅支持iOS）
	 */
	transVideoPath(params:UIAlbumBrowser_transVideoPath_Params, callback?: (ret:JSON) => void):void

	/**
	 * `iOS在scan接口里面可以获取到时长.所以可以不用管.`
	 * ========params==========
	 *
	 * `path` :string : 视频资源路径（在相册库的绝对路径,另外支持 fs:// widget://路径）
	 */
	getVideoDuration(params:UIAlbumBrowser_getVideoDuration_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以 frame 形式打开一个图片预览区域`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `groupId` :string : (可选项)要打开的相册分组 ID
	 *
	 * `selectedPaths` :Array : （可选项）图片预览区域默认选中图片的路径组成的数组
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openGroup(params:UIAlbumBrowser_openGroup_Params, callback?: (ret:JSON) => void):void

	/** 关闭打开的相册分组预览区域*/ 
	closeGroup():void

	/**
	 * `通过分组ID改变预览区域显示的分组图片`
	 * ========params==========
	 *
	 * `groupId` :string : 要改变的相册分组 ID
	 *
	 * `selectedPaths` :Array : （可选项）图片预览区域默认选中图片的路径组成的数组
	 */
	changeGroup(params:UIAlbumBrowser_changeGroup_Params):void

	/**
	 * `以 frame 形式打开一个图片预览区域`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `groupId` :string : (可选项)要打开的相册分组 ID
	 *
	 * `max` :number : （可选项）最多选择几张图片，超过max则用户点击选中按钮只返回eventType为max的事件回调，不会执行选中操作（点击的图片还是未选中状态）
	 *
	 * `type` :string : （可选项）显示图片或显示图片和视频
	 *
	 * `styles` :JSON : 
	 *
	 * `videoPreview` :boolean : （可选项）选中视频资源时，是否进入预览页面，若为false则直接callback相关信息
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openAlbum(params:UIAlbumBrowser_openAlbum_Params, callback?: (ret:JSON) => void):void

	/** 关闭 openAlbum 打开的相册预览区域*/ 
	closeAlbum():void

	/**
	 * `批量将相册图片地址转换为可以直接使用的本地路径地址（临时文件夹的绝对路径），**相册图片会被拷贝到临时文件夹，调用 api.clearCache 接口可清除该临时图片文件**`
	 * ========params==========
	 *
	 * `path` :Array : 要转换的图片路径（在相册库的绝对路径）
	 */
	batchTransPath(params:UIAlbumBrowser_batchTransPath_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取图片信息`
	 * ========params==========
	 *
	 * `imagePath` :string : 图片路径支持fs://,widget://;
	 */
	getImgInfo(params:UIAlbumBrowser_getImgInfo_Params, callback?: (ret:JSON) => void):void

}
interface UIAlbumBrowser_open_Params {
	/**（可选项）最多选择几张图片*/ 
	max?:number,

	/**（可选项）显示图片或显示图片和视频*/ 
	type?:string,

	/**（可选项）显是否打开预览界面*/ 
	isOpenPreview?:boolean,

	/**（可选项）是否将图片分类显示，为 true 时，会首先跳转到相册分类列表页面，false时打开第一个分组的详情。(仅对iOS有效)*/ 
	classify?:boolean,

	/**（可选项）当type为all时，视频和图片能不能同时选中，参考微信，仅当type为all时本参数有意义*/ 
	selectedAll?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**屏幕是否旋转（横屏），为 true 时可以横竖屏旋转，false 时禁止横屏*/ 
	rotation:boolean,

	/**（可选项）超过设置的选中图片的数量时的提示框内容*/ 
	alertTitle?:string,

	/**（可选项）超过设置的选中图片的数量时的提示框按钮名称（仅iOS支持）*/ 
	alertBtnTitle?:string,

	/**（可选项）视频时间长度超过此参数,禁止选取*/ 
	videoTimeFilter?:number,

}

interface UIAlbumBrowser_imagePicker_Params {
	/**（可选项）最多选择几张图片*/ 
	max?:number,

	/**是否显示相机*/ 
	showCamera:boolean,

	/**（可选项）默认选中图片的路径组成的数组 (需传入path参数，用相机拍照后需传入assetPath参数)*/ 
	selectedPaths?:Array,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）拍照时是否调用系统相机*/ 
	isSystemCamera?:boolean,

	/**（可选项）点击下一步按钮时是否有动画*/ 
	animation?:boolean,

}

interface UIAlbumBrowser_scan_Params {
	/**返回的资源种类；默认：'all'*/ 
	type:string,

	/**（可选项）每次返回的资源数量，剩余资源可用 fetch 接口遍历*/ 
	count?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。*/ 
	thumbnail?:JSON,

}

interface UIAlbumBrowser_scanGroups_Params {
	/**返回的资源种类；默认：'all'(iOS不支持)*/ 
	type:string,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。*/ 
	thumbnail?:JSON,

}

interface UIAlbumBrowser_scanByGroupId_Params {
	/**分组id；*/ 
	groupId:string,

	/**分组类型；默认：'all'*/ 
	type:string,

	/**（可选项）每次返回的资源数量，剩余资源可用 fetchGroup 接口遍历*/ 
	count?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。*/ 
	thumbnail?:JSON,

}

interface UIAlbumBrowser_transPath_Params {
	/**要转换的图片路径（在相册库的绝对路径）*/ 
	path:string,

	/**视频质量（android此参数为图片的quality，不支持视频）(iOS不支持)*/ 
	quality:string,

	/**图片质量  (iOS不支持)*/ 
	scale:number,

}

interface UIAlbumBrowser_transVideoPath_Params {
	/**要转换的视频路径（在相册库的绝对路径）*/ 
	path:string,

	/**是否保存在沙盒 （仅支持iOS）*/ 
	isSave:boolean,

}

interface UIAlbumBrowser_getVideoDuration_Params {
	/**视频资源路径（在相册库的绝对路径,另外支持 fs:// widget://路径）*/ 
	path:string,

}

interface UIAlbumBrowser_openGroup_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**(可选项)要打开的相册分组 ID*/ 
	groupId?:string,

	/**（可选项）图片预览区域默认选中图片的路径组成的数组*/ 
	selectedPaths?:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIAlbumBrowser_changeGroup_Params {
	/**要改变的相册分组 ID*/ 
	groupId:string,

	/**（可选项）图片预览区域默认选中图片的路径组成的数组*/ 
	selectedPaths?:Array,

}

interface UIAlbumBrowser_openAlbum_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**(可选项)要打开的相册分组 ID*/ 
	groupId?:string,

	/**（可选项）最多选择几张图片，超过max则用户点击选中按钮只返回eventType为max的事件回调，不会执行选中操作（点击的图片还是未选中状态）*/ 
	max?:number,

	/**（可选项）显示图片或显示图片和视频*/ 
	type?:string,

	/***/ 
	styles:JSON,

	/**（可选项）选中视频资源时，是否进入预览页面，若为false则直接callback相关信息*/ 
	videoPreview?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIAlbumBrowser_batchTransPath_Params {
	/**要转换的图片路径（在相册库的绝对路径）*/ 
	path:Array,

}

interface UIAlbumBrowser_getImgInfo_Params {
	/**图片路径支持fs://,widget://;*/ 
	imagePath:string,

}

interface circleProgress {
	/** 显示圆形进度条窗口*/ 
	open():void

	/** 关闭圆形进度条窗口*/ 
	close():void

	/** 设置进度条进度。*/ 
	setProgress():void

	/** 显示圆形进度条窗口*/ 
	show():void

	/** 隐藏圆形进度条窗口*/ 
	hide():void

}
interface UIListContactsPlus {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组
	 *
	 * `styles` :JSON : （可选项）模块头部的样式
	 *
	 * `alphabeticalIndexStyles` :JSON : （可选项）右侧索引点击时中心显示的样式
	 *
	 * `backgroundColor` :string : （可选项）模块背景色
	 *
	 * `bounces` :boolean : （可选项）是否弹动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListContactsPlus_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListContactsPlus_reloadData_Params):void

}
interface UIListContactsPlus_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）列表项向左滑动露出的按钮组*/ 
	rightBtns?:Array,

	/**（可选项）模块头部的样式*/ 
	styles?:JSON,

	/**（可选项）右侧索引点击时中心显示的样式*/ 
	alphabeticalIndexStyles?:JSON,

	/**（可选项）模块背景色*/ 
	backgroundColor?:string,

	/**（可选项）是否弹动*/ 
	bounces?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListContactsPlus_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface liveUI {
	/**
	 * `打开直播UI界面`
	 * ========params==========
	 *
	 * `uid` :string : （必填项）主播用户id
	 *
	 * `name` :string : （可选项）主播名称
	 *
	 * `roomName` :string : （可选项）直播房间名称
	 *
	 * `headpic` :string : （可选项）主播用户的头像地址（图片不存在时有默认头像，请用圆形图片），支持http:// fs://、widget:// 协议。
	 *
	 * `starpic` :string : （可选项）主播等级图标（图片不存在时有默认等级图标，请用圆形图片），支持http:// fs://、widget:// 协议。
	 *
	 * `isDanmu` :boolean : （可选项）是否开启弹幕。(true:开启弹幕 false:关闭弹幕)
	 *
	 * `isShowGuanZhuBtn` :boolean : （可选项）是否显示关注按钮 。
	 *
	 * `memberCounts` :number : （可选项）观看人数 。
	 *
	 * `userList` :Array : （必填项）观众用户列表
	 *
	 * `messageList` :Array : （必填项）用户消息列表
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	openLiveUI(params:liveUI_openLiveUI_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加观众用户加入接口`
	 * ========params==========
	 *
	 * `uid` :string : （必填项）用户id
	 *
	 * `nickname` :string : （必填项）用户名称
	 *
	 * `headpic` :string : （可选项）用户头像（图片不存在时有默认头像，请用圆形图片），支持http:// fs:// widget://
	 *
	 * `starpic` :string : （可选项）用户等级图片（图片不存在时有默认等级图片，请用圆形图片），支持http:// fs:// widget://
	 *
	 * `isJoinView` :boolean : （可选项）是否隐藏登场消息框
	 *
	 * `backgroundPic` :string : （可选项）登场消息框背景图片（图片不存在时有默认背景图片），支持http:// fs:// widget://
	 *
	 * `startnum` :number : （可选项）用户等级
	 *
	 * `nicknameColor` :string : （可选项）用户名称字体颜色
	 *
	 * `message` :string : （可选项）登场消息内容
	 *
	 * `messageColor` :string : （可选项）登场消息内容字体颜色
	 */
	addUserInfo(params:liveUI_addUserInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `批量添加观众用户加入接口`
	 * ========params==========
	 *
	 * `userList` :Array : （必填项）加入观众用户列表
	 */
	addUserInfoList(params:liveUI_addUserInfoList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `仅设置显示置观众人数，和观众列表纪录数无关`
	 * ========params==========
	 *
	 * `memberCounts` :number : （必填项）观看人数。
	 */
	setMemberCounts(params:liveUI_setMemberCounts_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否显示关注按钮`
	 * ========params==========
	 *
	 * `isShowGuanZhuBtn` :boolean : （可选项）是否显示关注按钮。
	 */
	isShowGuanZhuBtn(params:liveUI_isShowGuanZhuBtn_Params, callback?: (ret:JSON) => void):void

	/**
	 * `观看用户退出`
	 * ========params==========
	 *
	 * `uid` :string : （可选项）用户id。
	 */
	delUserInfo(params:liveUI_delUserInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送弹幕消息`
	 * ========params==========
	 *
	 * `nickname` :string : （必填项）用户名称
	 *
	 * `nicknameColor` :string : （可选项）用户名称字体颜色
	 *
	 * `headpic` :string : （可选项）用户头像（图片不存在时有有默认头像，请用圆形图片），支持http:// fs:// widget://
	 *
	 * `starpic` :string : （可选项）等级图标(图片不存在时有默认等级图标，请用圆形图片)，支持http:// fs:// widget://
	 *
	 * `message` :string : （必填项）弹幕消息内容
	 *
	 * `messageColor` :string : （可选项）弹幕消息内容字体颜色
	 */
	showDanmu(params:liveUI_showDanmu_Params, callback?: (ret:JSON) => void):void

	/**
	 * `消息列表显示消息信息`
	 * ========params==========
	 *
	 * `uid` :string : （必填项）用户id
	 *
	 * `startnum` :number : （可选项）用户等级
	 *
	 * `nickname` :string : （必填项）用户名称
	 *
	 * `nicknameColor` :string : （可选项）用户名称字体颜色
	 *
	 * `message` :string : （必填项）发送消息内容
	 *
	 * `messageColor` :string : （可选项）发送消息内容字体颜色
	 */
	showMessage(params:liveUI_showMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `批量添加消息列表显示消息信息`
	 * ========params==========
	 *
	 * `messageList` :Array : （必填项）用户消息列表
	 */
	showMessageList(params:liveUI_showMessageList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示直播系统消息`
	 * ========params==========
	 *
	 * `title` :string : （必填项）用户名称
	 *
	 * `titleColor` :string : （可选项）用户名称字体颜色
	 *
	 * `message` :string : （必填项）系统消息内容
	 *
	 * `messageColor` :string : （可选项）系统消息内容字体颜色
	 */
	showSystemMessage(params:liveUI_showSystemMessage_Params, callback?: (ret:JSON) => void):void

	/** 清空消息列表*/ 
	clearMessage(callback?: (ret:JSON) => void):void

	/** 隐藏直播ui*/ 
	hiddenLiveUI(callback?: (ret:JSON) => void):void

	/** 显示直播ui*/ 
	showLiveUI(callback?: (ret:JSON) => void):void

	/** 关闭直播ui*/ 
	closeLiveUI(callback?: (ret:JSON) => void):void

}
interface liveUI_openLiveUI_Params {
	/**（必填项）主播用户id*/ 
	uid:string,

	/**（可选项）主播名称*/ 
	name?:string,

	/**（可选项）直播房间名称*/ 
	roomName?:string,

	/**（可选项）主播用户的头像地址（图片不存在时有默认头像，请用圆形图片），支持http:// fs://、widget:// 协议。*/ 
	headpic?:string,

	/**（可选项）主播等级图标（图片不存在时有默认等级图标，请用圆形图片），支持http:// fs://、widget:// 协议。*/ 
	starpic?:string,

	/**（可选项）是否开启弹幕。(true:开启弹幕 false:关闭弹幕)*/ 
	isDanmu?:boolean,

	/**（可选项）是否显示关注按钮 。*/ 
	isShowGuanZhuBtn?:boolean,

	/**（可选项）观看人数 。*/ 
	memberCounts?:number,

	/**（必填项）观众用户列表*/ 
	userList:Array,

	/**（必填项）用户消息列表*/ 
	messageList:Array,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface liveUI_addUserInfo_Params {
	/**（必填项）用户id*/ 
	uid:string,

	/**（必填项）用户名称*/ 
	nickname:string,

	/**（可选项）用户头像（图片不存在时有默认头像，请用圆形图片），支持http:// fs:// widget://*/ 
	headpic?:string,

	/**（可选项）用户等级图片（图片不存在时有默认等级图片，请用圆形图片），支持http:// fs:// widget://*/ 
	starpic?:string,

	/**（可选项）是否隐藏登场消息框*/ 
	isJoinView?:boolean,

	/**（可选项）登场消息框背景图片（图片不存在时有默认背景图片），支持http:// fs:// widget://*/ 
	backgroundPic?:string,

	/**（可选项）用户等级*/ 
	startnum?:number,

	/**（可选项）用户名称字体颜色*/ 
	nicknameColor?:string,

	/**（可选项）登场消息内容*/ 
	message?:string,

	/**（可选项）登场消息内容字体颜色*/ 
	messageColor?:string,

}

interface liveUI_addUserInfoList_Params {
	/**（必填项）加入观众用户列表*/ 
	userList:Array,

}

interface liveUI_setMemberCounts_Params {
	/**（必填项）观看人数。*/ 
	memberCounts:number,

}

interface liveUI_isShowGuanZhuBtn_Params {
	/**（可选项）是否显示关注按钮。*/ 
	isShowGuanZhuBtn?:boolean,

}

interface liveUI_delUserInfo_Params {
	/**（可选项）用户id。*/ 
	uid?:string,

}

interface liveUI_showDanmu_Params {
	/**（必填项）用户名称*/ 
	nickname:string,

	/**（可选项）用户名称字体颜色*/ 
	nicknameColor?:string,

	/**（可选项）用户头像（图片不存在时有有默认头像，请用圆形图片），支持http:// fs:// widget://*/ 
	headpic?:string,

	/**（可选项）等级图标(图片不存在时有默认等级图标，请用圆形图片)，支持http:// fs:// widget://*/ 
	starpic?:string,

	/**（必填项）弹幕消息内容*/ 
	message:string,

	/**（可选项）弹幕消息内容字体颜色*/ 
	messageColor?:string,

}

interface liveUI_showMessage_Params {
	/**（必填项）用户id*/ 
	uid:string,

	/**（可选项）用户等级*/ 
	startnum?:number,

	/**（必填项）用户名称*/ 
	nickname:string,

	/**（可选项）用户名称字体颜色*/ 
	nicknameColor?:string,

	/**（必填项）发送消息内容*/ 
	message:string,

	/**（可选项）发送消息内容字体颜色*/ 
	messageColor?:string,

}

interface liveUI_showMessageList_Params {
	/**（必填项）用户消息列表*/ 
	messageList:Array,

}

interface liveUI_showSystemMessage_Params {
	/**（必填项）用户名称*/ 
	title:string,

	/**（可选项）用户名称字体颜色*/ 
	titleColor?:string,

	/**（必填项）系统消息内容*/ 
	message:string,

	/**（可选项）系统消息内容字体颜色*/ 
	messageColor?:string,

}

interface constactOperate {
	/**
	 * `input方法将view添加到页面中`
	 * ========params==========
	 *
	 * `x` :any : 以左上角为原点 x轴偏移量。
	 *
	 * `y` :any : 以左上角为原点 y轴偏移量。
	 *
	 * `w` :any : view 宽度 。
	 *
	 * `h` :any : view 高度 。
	 *
	 * `type` :any : 类型 1、单选 2、多选
	 *
	 * `notice` :string : 用户禁用权限或无联系人提示语 。
	 */
	input(params:constactOperate_input_Params, callback?: (ret:JSON) => void):void

	/** 隐藏view，已调用input情况下可调用此方法隐藏*/ 
	hide():void

	/** 显示隐藏的view，调用input，hide 的情况下将原view对象重新显示，节省内存，无需重新创建*/ 
	show():void

	/** 在不使用此联系人view的情况下销毁释放内存*/ 
	destroy():void

	/** input type=2的情况下多选返回多个联系人的数据*/ 
	getSelect():void

}
interface constactOperate_input_Params {
	/**以左上角为原点 x轴偏移量。*/ 
	x:any,

	/**以左上角为原点 y轴偏移量。*/ 
	y:any,

	/**view 宽度 。*/ 
	w:any,

	/**view 高度 。*/ 
	h:any,

	/**类型 1、单选 2、多选*/ 
	type:any,

	/**用户禁用权限或无联系人提示语 。*/ 
	notice:string,

}

interface UIChartline {
	/** 打开曲线图*/ 
	open():void

	/** 关闭曲线图窗口*/ 
	close():void

	/** 刷新曲线数据。*/ 
	reloadData():void

	/** 显示曲线图窗口*/ 
	show():void

	/** 隐藏曲线图窗口*/ 
	hide():void

}
interface panorama {
	/**
	 * `打开全景展示视图`
	 * ========params==========
	 *
	 * `x` :number : （可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `y` :number : （可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）
	 *
	 * `w` :number : （可选项）模块的宽度
	 *
	 * `h` :number : （可选项）模块的高度
	 *
	 * `imgPath` :string : 要展示的 360 度全景图片的路径
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:panorama_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开全景展示视图，**本接口暂仅支持 iOS 平台**`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `imgPaths` :Array : 要展示的全景图片的路径组成的数组，图片顺序为：前后左右上下
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）
	 */
	openCubic(params:panorama_openCubic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭全景展示视图`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的视图的id
	 */
	close(params:panorama_close_Params):void

	/**
	 * `隐藏全景展示视图。隐藏视图，并没有从内存里清除`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的视图的id
	 */
	hide(params:panorama_hide_Params):void

	/**
	 * `显示全景展示视图，显示已隐藏的视图`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的视图的 id
	 */
	show(params:panorama_show_Params):void

}
interface panorama_open_Params {
	/**（可选项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）*/ 
	x?:number,

	/**（可选项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）*/ 
	y?:number,

	/**（可选项）模块的宽度*/ 
	w?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

	/**要展示的 360 度全景图片的路径*/ 
	imgPath:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface panorama_openCubic_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**要展示的全景图片的路径组成的数组，图片顺序为：前后左右上下*/ 
	imgPaths:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）*/ 
	fixed?:boolean,

}

interface panorama_close_Params {
	/**要关闭的视图的id*/ 
	id:number,

}

interface panorama_hide_Params {
	/**要关闭的视图的id*/ 
	id:number,

}

interface panorama_show_Params {
	/**要关闭的视图的 id*/ 
	id:number,

}

interface UIInput {
	/**
	 * `打开输入框，**注意：调用 open 接口的元素，不能加 tapmode 属性**`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `maxRows` :number : （可选项）支持显示最大行数，文本内容超过此行数时，上下滚动显示。是否支持换行，传大于1的数时表示支持，**注意：取值大于1（多行显示时），不触发 search 事件回调**
	 *
	 * `maxStringLength` :number : （可选项）输入框允许输入的最大字符串长度
	 *
	 * `autoFocus` :boolean : （可选项）打开时是否弹出键盘
	 *
	 * `placeholder` :string : （可选项）输入框的占位提示文本
	 *
	 * `keyboardType` :string : （可选项）输入框获取焦点时，弹出的键盘类型；
	 *
	 * `alignment` :string : （可选项）文本对齐方式
	 *
	 * `isCenterVertical` :boolean : 输入文本是否上下居中
	 *
	 * `inputType` :string : (可选项) 判断输入框输入的是密码还是文字
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIInput_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设输入框的位置`
	 * ========params==========
	 *
	 * `id` :number : 需要设置的输入框id
	 *
	 * `position` :JSON : （可选项）模块的位置
	 */
	resetPosition(params:UIInput_resetPosition_Params):void

	/** 关闭输入框*/ 
	close():void

	/** 显示输入框*/ 
	show():void

	/** 隐藏输入框*/ 
	hide():void

	/**
	 * `获取或设置输入框的内容`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `msg` :string : （可选项）输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIInput_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `index` :number : （可选项）插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIInput_insertValue_Params):void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:UIInput_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取当前光标所在位置`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 */
	getSelectedRange(params:UIInput_getSelectedRange_Params, callback?: (ret:JSON) => void):void

}
interface UIInput_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）支持显示最大行数，文本内容超过此行数时，上下滚动显示。是否支持换行，传大于1的数时表示支持，**注意：取值大于1（多行显示时），不触发 search 事件回调***/ 
	maxRows?:number,

	/**（可选项）输入框允许输入的最大字符串长度*/ 
	maxStringLength?:number,

	/**（可选项）打开时是否弹出键盘*/ 
	autoFocus?:boolean,

	/**（可选项）输入框的占位提示文本*/ 
	placeholder?:string,

	/**（可选项）输入框获取焦点时，弹出的键盘类型；*/ 
	keyboardType?:string,

	/**（可选项）文本对齐方式*/ 
	alignment?:string,

	/**输入文本是否上下居中*/ 
	isCenterVertical:boolean,

	/**(可选项) 判断输入框输入的是密码还是文字*/ 
	inputType?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIInput_resetPosition_Params {
	/**需要设置的输入框id*/ 
	id:number,

	/**（可选项）模块的位置*/ 
	position?:JSON,

}

interface UIInput_value_Params {
	/**输入框id*/ 
	id:number,

	/**（可选项）输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIInput_insertValue_Params {
	/**输入框id*/ 
	id:number,

	/**（可选项）插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIInput_addEventListener_Params {
	/**输入框id*/ 
	id:number,

	/**监听的事件类型*/ 
	name:string,

}

interface UIInput_getSelectedRange_Params {
	/**输入框id*/ 
	id:number,

}

interface keyBoardMgr {
	/** 隐藏键盘。*/ 
	hideKeyBoard():void

	/** 针对某个输入框显示键盘，使某个输入框能够输入文字。需要调用该方法后，再用js使input获取焦点(因为弹出键盘需要一段时间，所以input获取焦点需要用setTimeout延时执行，如示例代码所示)，进而使input能够输入文字。对于安卓手机，弹出键盘后点击键盘以外的区域，部分手机能够关闭键盘，而部分手机不能关闭键盘(此时可通过键盘自带关闭按钮关闭)；对于苹果手机，弹出键盘后点击键盘以外的区域，都能够关闭键盘。*/ 
	showKeyBoard():void

	/** 添加监听键盘弹出隐藏事件。添加监听后，该模块会异步回调onKeyBoardChanged方法，onKeyBoardChanged方法由开发者自行实现。详见onKeyBoardChanged方法说明。不使用该监听事件后开发者应调用removeKBListener方法移除监听事件。*/ 
	addKBListener():void

	/** 移除监听键盘弹出隐藏事件。调用addKBListener方法后开发者应在适当时候调用removeKBListener方法移除监听事件。*/ 
	removeKBListener():void

	/** 监听input输入框的内容变化，该方法为纯js实现，可以当做拓展本模块的功能。*/ 
	onTextChanged():void

}
interface periodSelector {
}
interface toastmoduleforjs {
	/**
	 * `显示Success类型消息`
	 * ========params==========
	 *
	 * `msg` :string : 显示的消息内容
	 *
	 * `duration` :number : （可选项）显示的时间长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。
	 */
	showSuccessMsg(params:toastmoduleforjs_showSuccessMsg_Params):void

	/**
	 * `显示Error类型消息`
	 * ========params==========
	 *
	 * `msg` :string : 显示的消息内容
	 *
	 * `duration` :number : （可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。
	 */
	showErrorMsg(params:toastmoduleforjs_showErrorMsg_Params):void

	/**
	 * `显示Info类型消息`
	 * ========params==========
	 *
	 * `msg` :string : 显示的消息内容
	 *
	 * `duration` :number : （可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。
	 */
	showInfoMsg(params:toastmoduleforjs_showInfoMsg_Params):void

	/**
	 * `显示Warning类型消息`
	 * ========params==========
	 *
	 * `msg` :string : 显示的消息内容
	 *
	 * `duration` :number : （可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。
	 */
	showWarningMsg(params:toastmoduleforjs_showWarningMsg_Params):void

	/**
	 * `显示Normal类型消息`
	 * ========params==========
	 *
	 * `msg` :string : 显示的消息内容
	 *
	 * `duration` :number : （可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。
	 */
	showNormalMsg(params:toastmoduleforjs_showNormalMsg_Params):void

}
interface toastmoduleforjs_showSuccessMsg_Params {
	/**显示的消息内容*/ 
	msg:string,

	/**（可选项）显示的时间长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。*/ 
	duration?:number,

}

interface toastmoduleforjs_showErrorMsg_Params {
	/**显示的消息内容*/ 
	msg:string,

	/**（可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。*/ 
	duration?:number,

}

interface toastmoduleforjs_showInfoMsg_Params {
	/**显示的消息内容*/ 
	msg:string,

	/**（可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。*/ 
	duration?:number,

}

interface toastmoduleforjs_showWarningMsg_Params {
	/**显示的消息内容*/ 
	msg:string,

	/**（可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。*/ 
	duration?:number,

}

interface toastmoduleforjs_showNormalMsg_Params {
	/**显示的消息内容*/ 
	msg:string,

	/**（可选项）Toast显示时间的长短。可选值为0和1，0代表显示时间较短，1代表显示时间较长，默认值为0。*/ 
	duration?:number,

}

interface kLine {
	/**
	 * `显示K线模块`
	 * ========params==========
	 *
	 * `x` :any : （可选项）数字类型；模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；默认：0。
	 *
	 * `y` :any : （可选项）数字类型；模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0。
	 *
	 * `w` :any : （可选项）数字类型；模块的宽度；默认：所属的 Window 或 Frame 的宽度。
	 *
	 * `h` :any : （可选项）数字类型；模块的高度；默认：所属的 Window 或 Frame 的高度。
	 *
	 * `option` :JSON : null
	 */
	open(params:kLine_open_Params):void

	/**
	 * `设置option`
	 * ========params==========
	 *
	 * `option` :JSON : 内部字段定义，参考open的option参数描述
	 */
	setOption(params:kLine_setOption_Params):void

	/**
	 * `设置k线数据源`
	 * ========params==========
	 *
	 * `datas` :Array : k线数据数组，时间新的数据必须是排在前面。
	 */
	setDatas(params:kLine_setDatas_Params):void

	/**
	 * `更新currentPrice stopProfit stopLoss或者追加k线新数据，如当前是1分钟k线，您可能过了1分钟，会从数据库拉下来1个k线数据（1分钟一条数据），需要把这个数据追加到k线当中`
	 * ========params==========
	 *
	 * `currentPrice` :string : （可选项）currentPrice的值。
	 *
	 * `stopLoss` :string : （可选项）stopLoss的值。
	 *
	 * `stopProfit` :string : （可选项）stopProfit的值。
	 *
	 * `datas` :Array : （可选项）追加新的K线数据。
	 */
	setPrice(params:kLine_setPrice_Params):void

	/** 关闭K线模块*/ 
	close(callback?: (ret:JSON) => void):void

	/** 获取当前K线模块的图像，调用此方法前，必须调用open或者setOption方法，设置了模块的option，并且调用setDatas设置了数据源*/ 
	getImage(callback?: (ret:JSON) => void):void

	/** 显示K线模块（如果当前隐藏了）*/ 
	show(callback?: (ret:JSON) => void):void

	/** 隐藏K线模块*/ 
	hide(callback?: (ret:JSON) => void):void

}
interface kLine_open_Params {
	/**（可选项）数字类型；模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；默认：0。*/ 
	x?:any,

	/**（可选项）数字类型；模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0。*/ 
	y?:any,

	/**（可选项）数字类型；模块的宽度；默认：所属的 Window 或 Frame 的宽度。*/ 
	w?:any,

	/**（可选项）数字类型；模块的高度；默认：所属的 Window 或 Frame 的高度。*/ 
	h?:any,

	/**null*/ 
	option:JSON,

}

interface kLine_setOption_Params {
	/**内部字段定义，参考open的option参数描述*/ 
	option:JSON,

}

interface kLine_setDatas_Params {
	/**k线数据数组，时间新的数据必须是排在前面。*/ 
	datas:Array,

}

interface kLine_setPrice_Params {
	/**（可选项）currentPrice的值。*/ 
	currentPrice?:string,

	/**（可选项）stopLoss的值。*/ 
	stopLoss?:string,

	/**（可选项）stopProfit的值。*/ 
	stopProfit?:string,

	/**（可选项）追加新的K线数据。*/ 
	datas?:Array,

}

interface cxChatbox {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 表情面板上附件按钮点击事件的监听，**仅当 open 接口内 tools->face 参数有值时，本接口有效***/ 
	faceListener(callback?: (ret:JSON) => void):void

	/** 选择图片相关功能事件的监听，**仅当 open 接口内 tools->image 参数有值时，本接口有效***/ 
	imageListener(callback?: (ret:JSON) => void):void

	/** @相关功能事件的监听，**仅当 open 接口内 tools->at 参数有值时，本接口有效***/ 
	atListener(callback?: (ret:JSON) => void):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/** 弹出键盘（仅iOS支持）*/ 
	popupKeyboard():void

	/** 收起键盘（仅iOS支持）*/ 
	closeKeyboard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:cxChatbox_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:cxChatbox_insertValue_Params):void

	/** 清空输入框文本*/ 
	clearText():void

}
interface cxChatbox_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface cxChatbox_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface inputField {
}
interface timeSelector {
}
interface fourStageLinkage {
}
interface payPasswordInput {
	/** 打开密码输入框*/ 
	showInput(callback?: (ret:JSON) => void):void

}
interface loadingLabel {
}
interface photoBrowserWeiXin {
	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface slidingList {
}
interface UIActionSelector {
}
interface UIBlurEffect {
	/**
	 * `添加一个模块视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `alpha` :number : （可选项）透明度
	 *
	 * `type` :string : （可选项）模糊类型
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）
	 */
	open(params:UIBlurEffect_open_Params):void

	/** 关闭模块视图*/ 
	close():void

	/** 显示模块视图*/ 
	show():void

	/** 隐藏模块视图*/ 
	hide():void

}
interface UIBlurEffect_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）透明度*/ 
	alpha?:number,

	/**（可选项）模糊类型*/ 
	type?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动）*/ 
	fixed?:boolean,

}

interface floatModule {
	/** 打开悬浮窗口*/ 
	openFloat():void

	/** 隐藏悬浮窗口*/ 
	hide():void

	/** 显示悬浮窗口*/ 
	show():void

	/** 关闭悬浮窗口*/ 
	close():void

	/** 改变播放状态*/ 
	changeState():void

}
interface zyPatternLock {
}
interface searchBar {
}
interface UIListCheck {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `isRadio` :boolean : （可选项）是否是单选 **注意:该参数在contacts里面的selected都为false时有效**
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListCheck_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListCheck_reloadData_Params):void

	/**
	 * `设置选中的联系人`
	 * ========params==========
	 *
	 * `selected` :boolean : （可选项）设置/取消选中状态
	 *
	 * `contacts` :Array : 要设置为选中状态的联系人id组成的数组
	 */
	setSelected(params:UIListCheck_setSelected_Params):void

	/** 获取所有当前选中的联系人信息，**同步接口***/ 
	getSelectedSync():JSON;

}
interface UIListCheck_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）是否是单选 **注意:该参数在contacts里面的selected都为false时有效***/ 
	isRadio?:boolean,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListCheck_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface UIListCheck_setSelected_Params {
	/**（可选项）设置/取消选中状态*/ 
	selected?:boolean,

	/**要设置为选中状态的联系人id组成的数组*/ 
	contacts:Array,

}

interface UIScrollPlayer {
	/**
	 * `打开播放器`
	 * ========params==========
	 *
	 * `rect` :JSON : 模块的位置及尺寸
	 *
	 * `videos` :Array<JSON> : 视频列表
	 *
	 * `buttons` :Array<JSON> : （可选项）悬浮在视频上方按钮，videos中item中不设置buttons则按此参数展示
	 *
	 * `index` :number : （可选项）页面打开时默认播放视频的下标
	 *
	 * `autoPlay` :boolean : （可选项）视频是否自动播放，设置为false后所有视频都不自动播放
	 *
	 * `scalingMode` :number : （可选项）视频填充方式
	 *
	 * `imgScaleType` :number : （可选项）封面图填充方式
	 *
	 * `isLooping` :boolean : （可选项）是否循环播放
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	open(params:UIScrollPlayer_open_Params, callback?: (ret:JSON) => void):void

	/** 隐藏播放器*/ 
	hide():void

	/** 显示播放器*/ 
	show():void

	/** 关闭播放器*/ 
	close():void

	/**
	 * `添加视频`
	 * ========params==========
	 *
	 * `videos` :Array<JSON> : 视频列表
	 */
	add(params:UIScrollPlayer_add_Params):void

	/** 暂停当前视频播放*/ 
	pause():void

	/** 暂停后播放视频（iOS此接口只支持暂停后播放视频，若open接口设置autoPlay为fasle或者视频停止后开始播放调用startPlay接口）*/ 
	play():void

	/**
	 * `播放视频`
	 * ========params==========
	 *
	 * `index` :number : （可选项）播放视频下标
	 */
	startPlay(params:UIScrollPlayer_startPlay_Params):void

	/** 滑动播放器监听*/ 
	addEventListener():void

	/** 添加视频悬浮按钮监听事件*/ 
	addButtonsListener():void

}
interface UIScrollPlayer_open_Params {
	/**模块的位置及尺寸*/ 
	rect:JSON,

	/**视频列表*/ 
	videos:Array<JSON>,

	/**（可选项）悬浮在视频上方按钮，videos中item中不设置buttons则按此参数展示*/ 
	buttons?:Array<JSON>,

	/**（可选项）页面打开时默认播放视频的下标*/ 
	index?:number,

	/**（可选项）视频是否自动播放，设置为false后所有视频都不自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）视频填充方式*/ 
	scalingMode?:number,

	/**（可选项）封面图填充方式*/ 
	imgScaleType?:number,

	/**（可选项）是否循环播放*/ 
	isLooping?:boolean,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface UIScrollPlayer_add_Params {
	/**视频列表*/ 
	videos:Array<JSON>,

}

interface UIScrollPlayer_startPlay_Params {
	/**（可选项）播放视频下标*/ 
	index?:number,

}

interface UILineChart {
}
interface UIPartCircleProgress {
	/** 显示圆形进度条窗口*/ 
	open():void

	/** 关闭圆形进度条窗口*/ 
	close():void

	/** 设置进度条进度。*/ 
	setProgress():void

	/** 设置进度条中显示内容*/ 
	setTitles():void

	/** 设置进度条进度监听*/ 
	setProgressListener():void

	/** 显示圆形进度条窗口*/ 
	show():void

	/** 隐藏圆形进度条窗口*/ 
	hide():void

	/** 给标题添加点击事件*/ 
	addClickListenner():void

}
interface hintChatBox {
}
interface UIMediaScanner {
	/**
	 * `打开多媒体资源选择器，打开后会全屏显示`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'
	 *
	 * `column` :number : （可选项）图片显示的列数，须大于1
	 *
	 * `classify` :boolean : （可选项）是否将图片分类显示（为 true 时，会首先跳转到相册分类列表页面）
	 *
	 * `max` :number : （可选项）最多选择几张图片
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `texts` :JSON : （可选项）模块各部分的文字内容
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `scrollToBottom` :JSON : （可选项）打开媒体资源界面后间隔一段时间开始自动滚动到底部设置
	 *
	 * `exchange` :boolean : 是否交换‘确定’和‘取消’按钮的位置（默认‘取消’按钮在右边，‘确定’按钮在左边）
	 *
	 * `rotation` :boolean : 屏幕是否旋转（横屏），为 true 时可以横竖屏旋转，false 时禁止横屏
	 *
	 * `showPreview` :boolean : 是否支持返回预览事件
	 *
	 * `showBrowser` :boolean : 是否支持打开已选图片预览效果
	 */
	open(params:UIMediaScanner_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `扫描系统多媒体资源，可以通过 Web 代码自定义多选界面。**注意：页面展示的图片建议使用缩略图，一次显示的图片不宜过多（1至2屏）**`
	 * ========params==========
	 *
	 * `type` :string : 返回的资源种类；默认：'all'
	 *
	 * `count` :number : （可选项）每次返回的资源数量；
	 *
	 * `sort` :JSON : （可选项）图片排序方式
	 *
	 * `thumbnail` :JSON : （可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。
	 *
	 * `showGroup` :boolean : （可选项）是否返回图片所在分组名，本参数对 android 平台无效
	 */
	scan(params:UIMediaScanner_scan_Params, callback?: (ret:JSON) => void):void

	/** 获取指定数量的多媒体资源，没有更多资源则返回空数组，**必须配合 scan 接口的 count 参数一起使用**。*/ 
	fetch():void

	/**
	 * `将系统相册媒体资源地址转换为可以直接使用的本地路径地址（临时文件夹的绝对路径），**媒体资源会被拷贝到临时文件夹，调用 api.clearCache 接口可清除该临时图片文件**`
	 * ========params==========
	 *
	 * `path` :string : （可选项）返回数据类型，指定返回图片地址或图片经过 base64 编码后的字符串
	 *
	 * `scale` :JSON : （可选项）从本地相册拷贝图片到缓存目录时对图片的压缩处理，若不传则取内部字段中的默认值
	 */
	transPath(params:UIMediaScanner_transPath_Params, callback?: (ret:JSON) => void):void

	/**
	 * `- 类型：字符串`
	 * ========params==========
	 *
	 * `path` :string : 视频资源路径（在相册库的绝对路径,另外支持 fs:// widget://路径）
	 */
	getVideoDuration(params:UIMediaScanner_getVideoDuration_Params, callback?: (ret:JSON) => void):void

}
interface UIMediaScanner_open_Params {
	/**返回的资源种类；默认：'all'*/ 
	type:string,

	/**（可选项）图片显示的列数，须大于1*/ 
	column?:number,

	/**（可选项）是否将图片分类显示（为 true 时，会首先跳转到相册分类列表页面）*/ 
	classify?:boolean,

	/**（可选项）最多选择几张图片*/ 
	max?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）模块各部分的文字内容*/ 
	texts?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）打开媒体资源界面后间隔一段时间开始自动滚动到底部设置*/ 
	scrollToBottom?:JSON,

	/**是否交换‘确定’和‘取消’按钮的位置（默认‘取消’按钮在右边，‘确定’按钮在左边）*/ 
	exchange:boolean,

	/**屏幕是否旋转（横屏），为 true 时可以横竖屏旋转，false 时禁止横屏*/ 
	rotation:boolean,

	/**是否支持返回预览事件*/ 
	showPreview:boolean,

	/**是否支持打开已选图片预览效果*/ 
	showBrowser:boolean,

}

interface UIMediaScanner_scan_Params {
	/**返回的资源种类；默认：'all'*/ 
	type:string,

	/**（可选项）每次返回的资源数量；*/ 
	count?:number,

	/**（可选项）图片排序方式*/ 
	sort?:JSON,

	/**（可选项）返回的缩略图配置，**建议本图片不要设置过大** 若已有缩略图，则使用已有的缩略图。若要重新生成缩略图，可先调用清除缓存接口api.clearCache()。*/ 
	thumbnail?:JSON,

	/**（可选项）是否返回图片所在分组名，本参数对 android 平台无效*/ 
	showGroup?:boolean,

}

interface UIMediaScanner_transPath_Params {
	/**（可选项）返回数据类型，指定返回图片地址或图片经过 base64 编码后的字符串*/ 
	path?:string,

	/**（可选项）从本地相册拷贝图片到缓存目录时对图片的压缩处理，若不传则取内部字段中的默认值*/ 
	scale?:JSON,

}

interface UIMediaScanner_getVideoDuration_Params {
	/**视频资源路径（在相册库的绝对路径,另外支持 fs:// widget://路径）*/ 
	path:string,

}

interface addressView {
	/** 打开模块初始化操作，可以自定义初始化省市区数据。调用show接口显示界面。*/ 
	open():void

	/** 打开选择界面*/ 
	show(callback?: (ret:JSON) => void):void

}
interface screenTaskUI {
	/**
	 * `开启锁屏显示，刷新ui数据。（需要手动打开应用【锁屏显示】权限）`
	 * ========params==========
	 *
	 * `already` :number : （可选项）已完成巡点（进度条分子）
	 *
	 * `total` :number : （可选项）总巡点（进度条分母）
	 *
	 * `alreadyTextSize` :number : （可选项）进度条分子文字大小（包括"/"）
	 *
	 * `totalTextSize` :number : （可选项）进度条分母文字大小
	 *
	 * `defaultCirleColor` :string : （可选项）进度条背景色,支持rgb,rgba
	 *
	 * `alreadyCircleColor` :string : （可选项）进度条进度颜色,支持rgb,rgba
	 *
	 * `topText ` :string : （可选项）应巡点文本（包括 ’应巡点：‘）
	 *
	 * `bottomText` :string : （可选项）距离文本（包括 ’距离：‘）
	 *
	 * `topTextColor` :string : （可选项）应巡点文本颜色,支持rgb,rgba
	 *
	 * `bottomTextColor` :string : （可选项）距离文本颜色,支持rgb,rgba
	 *
	 * `topTextSize` :string : （可选项）应巡点文本大小
	 *
	 * `bottomTextSize` :string : （可选项）距离文本大小
	 */
	start(params:screenTaskUI_start_Params, callback?: (ret:JSON) => void):void

	/** 关闭锁屏界面*/ 
	close():void

}
interface screenTaskUI_start_Params {
	/**（可选项）已完成巡点（进度条分子）*/ 
	already?:number,

	/**（可选项）总巡点（进度条分母）*/ 
	total?:number,

	/**（可选项）进度条分子文字大小（包括"/"）*/ 
	alreadyTextSize?:number,

	/**（可选项）进度条分母文字大小*/ 
	totalTextSize?:number,

	/**（可选项）进度条背景色,支持rgb,rgba*/ 
	defaultCirleColor?:string,

	/**（可选项）进度条进度颜色,支持rgb,rgba*/ 
	alreadyCircleColor?:string,

	/**（可选项）应巡点文本（包括 ’应巡点：‘）*/ 
	topText ?:string,

	/**（可选项）距离文本（包括 ’距离：‘）*/ 
	bottomText?:string,

	/**（可选项）应巡点文本颜色,支持rgb,rgba*/ 
	topTextColor?:string,

	/**（可选项）距离文本颜色,支持rgb,rgba*/ 
	bottomTextColor?:string,

	/**（可选项）应巡点文本大小*/ 
	topTextSize?:string,

	/**（可选项）距离文本大小*/ 
	bottomTextSize?:string,

}

interface beautifulPicker {
	/** 打开日期对话框*/ 
	date():void

}
interface UIPullRefreshMotive {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface pieChart {
	/**
	 * `**注意:请保证 所有数值加起来不为0 否则无实际意义 **`
	 * ========params==========
	 *
	 * `x` :number : （可选项）圆心坐标
	 *
	 * `y` :number : （可选项）圆心坐标
	 *
	 * `radius` :number : （可选项）圆半径
	 *
	 * `center` :JSON : （可选项）饼形图中间标题样式设置
	 *
	 * `elements` :Array : 模块字典对象组成的数组
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:pieChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新展示数据`
	 * ========params==========
	 *
	 * `id` :number : 操作的视图的id
	 *
	 * `elements` :Array : 模块字典对象组成的数组
	 */
	reloadData(params:pieChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设模块视图的位置大小`
	 * ========params==========
	 *
	 * `id` :number : 操作的视图的id
	 *
	 * `x` :number : （可选项）圆心坐标
	 *
	 * `y` :number : （可选项）圆心坐标
	 *
	 * `radius` :number : （可选项）圆半径
	 *
	 * `anim` :boolean : （可选项）改变模块视图大小时是否添加变化过程的动画
	 */
	setFrame(params:pieChart_setFrame_Params):void

	/**
	 * `关闭饼图`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的饼图的id
	 */
	close(params:pieChart_close_Params):void

	/**
	 * `隐藏饼图`
	 * ========params==========
	 *
	 * `id` :number : 要隐藏的饼图的id
	 */
	hide(params:pieChart_hide_Params):void

	/**
	 * `显示已隐藏的饼形图`
	 * ========params==========
	 *
	 * `id` :number : 要显示的饼图的id
	 */
	show(params:pieChart_show_Params):void

}
interface pieChart_open_Params {
	/**（可选项）圆心坐标*/ 
	x?:number,

	/**（可选项）圆心坐标*/ 
	y?:number,

	/**（可选项）圆半径*/ 
	radius?:number,

	/**（可选项）饼形图中间标题样式设置*/ 
	center?:JSON,

	/**模块字典对象组成的数组*/ 
	elements:Array,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface pieChart_reloadData_Params {
	/**操作的视图的id*/ 
	id:number,

	/**模块字典对象组成的数组*/ 
	elements:Array,

}

interface pieChart_setFrame_Params {
	/**操作的视图的id*/ 
	id:number,

	/**（可选项）圆心坐标*/ 
	x?:number,

	/**（可选项）圆心坐标*/ 
	y?:number,

	/**（可选项）圆半径*/ 
	radius?:number,

	/**（可选项）改变模块视图大小时是否添加变化过程的动画*/ 
	anim?:boolean,

}

interface pieChart_close_Params {
	/**要关闭的饼图的id*/ 
	id:number,

}

interface pieChart_hide_Params {
	/**要隐藏的饼图的id*/ 
	id:number,

}

interface pieChart_show_Params {
	/**要显示的饼图的id*/ 
	id:number,

}

interface UIScrollPicture {
	/**
	 * `打开模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :JSON : 模块的图片路径数组，及说明文字数组
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `placeholderImg` :string : （可选项）网络图片未加载完毕时，模块显示的占位图片，要求本地路径（fs://、widget://）
	 *
	 * `contentMode` :string : （可选项）图片填充模式
	 *
	 * `cornerRadius` :number : （可选项）图片的圆角半径
	 *
	 * `scrollerCorner` :number : （可选项）滑动视图的圆角半径
	 *
	 * `interval` :number : （可选项）图片轮换时间间隔，单位是秒（s）
	 *
	 * `auto` :boolean : （可选项）图片是否自动播放
	 *
	 * `loop` :boolean : （可选项）图片是否循环播放
	 *
	 * `touchWait` :boolean : （可选项）触摸停止自动播放
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIScrollPicture_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭模块*/ 
	close():void

	/** 显示模块*/ 
	show():void

	/** 隐藏模块*/ 
	hide():void

	/**
	 * `指定当前项`
	 * ========params==========
	 *
	 * `index` :number : （可选项）索引值
	 */
	setCurrentIndex(params:UIScrollPicture_setCurrentIndex_Params):void

	/**
	 * `更新模块数据`
	 * ========params==========
	 *
	 * `data` :JSON : 模块的图片路径数组，及说明文字数组
	 */
	reloadData(params:UIScrollPicture_reloadData_Params):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件名称，取值范围：'scroll'（图片滚动事件）
	 */
	addEventListener(params:UIScrollPicture_addEventListener_Params, callback?: (ret:JSON) => void):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface UIScrollPicture_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**模块的图片路径数组，及说明文字数组*/ 
	data:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）网络图片未加载完毕时，模块显示的占位图片，要求本地路径（fs://、widget://）*/ 
	placeholderImg?:string,

	/**（可选项）图片填充模式*/ 
	contentMode?:string,

	/**（可选项）图片的圆角半径*/ 
	cornerRadius?:number,

	/**（可选项）滑动视图的圆角半径*/ 
	scrollerCorner?:number,

	/**（可选项）图片轮换时间间隔，单位是秒（s）*/ 
	interval?:number,

	/**（可选项）图片是否自动播放*/ 
	auto?:boolean,

	/**（可选项）图片是否循环播放*/ 
	loop?:boolean,

	/**（可选项）触摸停止自动播放*/ 
	touchWait?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIScrollPicture_setCurrentIndex_Params {
	/**（可选项）索引值*/ 
	index?:number,

}

interface UIScrollPicture_reloadData_Params {
	/**模块的图片路径数组，及说明文字数组*/ 
	data:JSON,

}

interface UIScrollPicture_addEventListener_Params {
	/**监听的事件名称，取值范围：'scroll'（图片滚动事件）*/ 
	name:string,

}

interface UIInputBox {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/** 弹出表情*/ 
	popupBoard():void

	/** 收起表情*/ 
	closeBoard():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIInputBox_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIInputBox_insertValue_Params):void

	/** 事件监听 （输入区域，输入框及两侧按钮区域）*/ 
	addEventListener():void

	/**
	 * `重设聊天输入框的占位提示文本`
	 * ========params==========
	 *
	 * `placeholder` :string : （可选项）占位提示文本，若不传或传空则表示清空占位提示内容
	 */
	setPlaceholder(params:UIInputBox_setPlaceholder_Params):void

}
interface UIInputBox_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIInputBox_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIInputBox_setPlaceholder_Params {
	/**（可选项）占位提示文本，若不传或传空则表示清空占位提示内容*/ 
	placeholder?:string,

}

interface listViewEntity {
	/**
	 * `打开 listViewEntity 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:listViewEntity_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 listViewEntity 模块*/ 
	show():void

	/** 隐藏 listViewEntity 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:listViewEntity_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:listViewEntity_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:listViewEntity_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:listViewEntity_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:listViewEntity_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:listViewEntity_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:listViewEntity_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:listViewEntity_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:listViewEntity_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshHeader(params:listViewEntity_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:listViewEntity_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

}
interface listViewEntity_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface listViewEntity_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface listViewEntity_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface listViewEntity_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface listViewEntity_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface listViewEntity_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface listViewEntity_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface listViewEntity_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface listViewEntity_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface listViewEntity_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface listViewEntity_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface listViewEntity_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface superKeyboard {
	/** 打开模块。*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭键盘。*/ 
	close(callback?: (ret:JSON) => void):void

	/** 获取模块宽度。*/ 
	getWidth(callback?: (ret:JSON) => void):void

}
interface watermark {
	/** 添加水印，此接口仅添加一个水印*/ 
	addWatermark():void

	/** 添加水印,此接口会将水印铺满整页，此接口建议rotate为-45。且此接口iOS与android样式有一定差距 如不符合要求建议使用addWatermark自行铺满。*/ 
	addAllPageWatermark():void

	/** 移除水印*/ 
	removeWatermark():void

}
interface UICoverFlowS {
	/**
	 * `打开 UICoverFlowS`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : 图片流的整体样式设置
	 *
	 * `index` :number : （可选项）初始选中的图片索引值，从 0 开始
	 *
	 * `reflect` :boolean : （可选项）图片是否显示倒影
	 *
	 * `isOpenAutoScroll` :boolean : （可选项）轮播图是否开启无限自动轮播
	 *
	 * `autoTime` :number : （可选项）自动轮播间隔时间（秒）
	 *
	 * `images` :Array<JSON> : 为图片流指定数据
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 */
	open(params:UICoverFlowS_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `滚动到指定条目`
	 * ========params==========
	 *
	 * `index` :number : 滚动的指定位置索引
	 *
	 * `id` :number : 轮播图对应id
	 */
	setIndex(params:UICoverFlowS_setIndex_Params):void

	/** 关闭 UICoverFlowS*/ 
	close():void

	/** 隐藏显示的 coverFlow*/ 
	hide():void

	/** 显示已隐藏的 UICoverFlowS*/ 
	show():void

}
interface UICoverFlowS_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**图片流的整体样式设置*/ 
	styles:JSON,

	/**（可选项）初始选中的图片索引值，从 0 开始*/ 
	index?:number,

	/**（可选项）图片是否显示倒影*/ 
	reflect?:boolean,

	/**（可选项）轮播图是否开启无限自动轮播*/ 
	isOpenAutoScroll?:boolean,

	/**（可选项）自动轮播间隔时间（秒）*/ 
	autoTime?:number,

	/**为图片流指定数据*/ 
	images:Array<JSON>,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

}

interface UICoverFlowS_setIndex_Params {
	/**滚动的指定位置索引*/ 
	index:number,

	/**轮播图对应id*/ 
	id:number,

}

interface UIGraph {
	/**
	 * `打开贝塞尔曲线模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `yAxis` :JSON : 曲线图的y轴信息
	 *
	 * `data` :Array : 曲线关键结点的数据
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `showNode` :boolean : （可选项）是否默认显示结点
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIGraph_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭曲线图模块`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	close(params:UIGraph_close_Params):void

	/**
	 * `显示曲线图模块`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	show(params:UIGraph_show_Params):void

	/**
	 * `隐藏曲线图模块`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	hide(params:UIGraph_hide_Params):void

	/**
	 * `更新曲线图的数据`
	 * ========params==========
	 *
	 * `id` :number : 模块 id，用于区分多个模块实例
	 *
	 * `xScale` :number : 曲线x轴缩放比例
	 *
	 * `type` :string : 更新数据的方式
	 *
	 * `data` :Array : 要更新的数据
	 */
	reloadData(params:UIGraph_reloadData_Params):void

}
interface UIGraph_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**曲线图的y轴信息*/ 
	yAxis:JSON,

	/**曲线关键结点的数据*/ 
	data:Array,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）是否默认显示结点*/ 
	showNode?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIGraph_close_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIGraph_show_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIGraph_hide_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIGraph_reloadData_Params {
	/**模块 id，用于区分多个模块实例*/ 
	id:number,

	/**曲线x轴缩放比例*/ 
	xScale:number,

	/**更新数据的方式*/ 
	type:string,

	/**要更新的数据*/ 
	data:Array,

}

interface addressBook {
	/**
	 * `打开文档预览`
	 * ========params==========
	 *
	 * `data` :JSON : 组织架构数据
	 */
	open(params:addressBook_open_Params, callback?: (ret:JSON) => void):void

}
interface addressBook_open_Params {
	/**组织架构数据*/ 
	data:JSON,

}

interface guide {
	/**
	 * `打开图片导航`
	 * ========params==========
	 *
	 * `imgs` :string : （可选项）当前页面分页控件数图片地址（widget:// fs:// 相对路径都是支持），尺寸图片建议30 × 30。
	 *
	 * `btnColor` :string : （可选项）关闭按钮背景颜色(00FFFF)。
	 *
	 * `btnLabel` :string : （可选项）关闭按钮文字,默认马上体验。
	 *
	 * `btnW` :number : （可选项）关闭按钮宽，默认120。
	 *
	 * `btnH` :number : （可选项）关闭按钮文字高，默认33。
	 *
	 * `time` :string : （可选项）导航页消失的时间，以秒为单位。
	 *
	 * `hideStatusBar` :boolean : （可选）是否隐藏状态栏，默认值为true(隐藏状态栏)
	 */
	openGuidePage(params:guide_openGuidePage_Params):void

	/**
	 * `打开视频导航`
	 * ========params==========
	 *
	 * `path` :string : 导航视频本地地址（widget:// fs:// 相对路径都是支持）。
	 *
	 * `time` :string : （可选项）导航页消失的时间。
	 *
	 * `hideStatusBar` :boolean : （可选）是否隐藏状态栏，默认值为true(隐藏状态栏)
	 */
	openGuideVideo(params:guide_openGuideVideo_Params):void

	/**
	 * `打开循环视频导航`
	 * ========params==========
	 *
	 * `path` :string : 导航视频本地地址（widget:// fs:// 相对路径都是支持）。
	 *
	 * `borderColor` :string : 进入按钮边缘颜色，默认值是#FFFFFF（白色）。
	 *
	 * `titleColor` :string : 进入按钮字体颜色，默认值是#FFFFFF（白色）。
	 *
	 * `title` :string : 进入按钮文字，默认值字符串为 进入应用。
	 *
	 * `hideStatusBar` :boolean : （可选）是否隐藏状态栏，默认值为true(隐藏状态栏)
	 */
	openGuideRepeatVideo(params:guide_openGuideRepeatVideo_Params):void

}
interface guide_openGuidePage_Params {
	/**（可选项）当前页面分页控件数图片地址（widget:// fs:// 相对路径都是支持），尺寸图片建议30 × 30。*/ 
	imgs?:string,

	/**（可选项）关闭按钮背景颜色(00FFFF)。*/ 
	btnColor?:string,

	/**（可选项）关闭按钮文字,默认马上体验。*/ 
	btnLabel?:string,

	/**（可选项）关闭按钮宽，默认120。*/ 
	btnW?:number,

	/**（可选项）关闭按钮文字高，默认33。*/ 
	btnH?:number,

	/**（可选项）导航页消失的时间，以秒为单位。*/ 
	time?:string,

	/**（可选）是否隐藏状态栏，默认值为true(隐藏状态栏)*/ 
	hideStatusBar?:boolean,

}

interface guide_openGuideVideo_Params {
	/**导航视频本地地址（widget:// fs:// 相对路径都是支持）。*/ 
	path:string,

	/**（可选项）导航页消失的时间。*/ 
	time?:string,

	/**（可选）是否隐藏状态栏，默认值为true(隐藏状态栏)*/ 
	hideStatusBar?:boolean,

}

interface guide_openGuideRepeatVideo_Params {
	/**导航视频本地地址（widget:// fs:// 相对路径都是支持）。*/ 
	path:string,

	/**进入按钮边缘颜色，默认值是#FFFFFF（白色）。*/ 
	borderColor:string,

	/**进入按钮字体颜色，默认值是#FFFFFF（白色）。*/ 
	titleColor:string,

	/**进入按钮文字，默认值字符串为 进入应用。*/ 
	title:string,

	/**（可选）是否隐藏状态栏，默认值为true(隐藏状态栏)*/ 
	hideStatusBar?:boolean,

}

interface videoEdit {
	/**
	 * `打开视频剪辑页面`
	 * ========params==========
	 *
	 * `path` :string : 剪辑的视频本地路径,支持fs://，widget://
	 *
	 * `maxEditTime` :number : 最大编辑时间，单位秒
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `ret` :any : null
	 */
	open(params:videoEdit_open_Params):void

	/** 关闭视频剪辑页面*/ 
	close():void

}
interface videoEdit_open_Params {
	/**剪辑的视频本地路径,支持fs://，widget://*/ 
	path:string,

	/**最大编辑时间，单位秒*/ 
	maxEditTime:number,

	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**null*/ 
	ret:any,

}

interface UIDatePickerTool {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `rowHeight` :number : （可选项）设置选择器的行高
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 */
	open(params:UIDatePickerTool_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭选择器*/ 
	close():void

	/** 隐藏选择器*/ 
	hide():void

	/** 显示已隐藏的选择器*/ 
	show():void

}
interface UIDatePickerTool_open_Params {
	/**（可选项）设置选择器的行高*/ 
	rowHeight?:number,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

}

interface UIButton {
	/**
	 * `使按钮在视图最顶层显示`
	 * ========params==========
	 *
	 * `id ` :number : 操作按钮模块的 id
	 */
	bringToFront(params:UIButton_bringToFront_Params):void

}
interface UIButton_bringToFront_Params {
	/**操作按钮模块的 id*/ 
	id :number,

}

interface labelDragSort {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `labelArray` :Array : 所有标签文字数组
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 */
	open(params:labelDragSort_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `再次添加标签`
	 * ========params==========
	 *
	 * `labelArray` :Array : 所有标签文字数组
	 */
	addLabel(params:labelDragSort_addLabel_Params, callback?: (ret:JSON) => void):void

	/** 开始编辑*/ 
	startEdit():void

	/** 关闭*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/** 编辑完成*/ 
	finishEdit(callback?: (ret:JSON) => void):void

	/** 删除标签*/ 
	deleteLabel(callback?: (ret:JSON) => void):void

}
interface labelDragSort_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**所有标签文字数组*/ 
	labelArray:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

}

interface labelDragSort_addLabel_Params {
	/**所有标签文字数组*/ 
	labelArray:Array,

}

interface handlock {
	/**
	 * `设置手势密码`
	 * ========params==========
	 *
	 * `titleName` :string : （可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。
	 */
	set(params:handlock_set_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改手势密码，先验证原密码，后设置新密码`
	 * ========params==========
	 *
	 * `titleName` :string : （可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。
	 *
	 * `handPassword` :string : 已设置的密码，例如：1,2,3,4,5,6。
	 */
	modify(params:handlock_modify_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消手势密码`
	 * ========params==========
	 *
	 * `titleName` :string : （可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。
	 *
	 * `handPassword` :string : 已设置的密码，例如：1,2,3,4,5,6。
	 */
	cancel(params:handlock_cancel_Params, callback?: (ret:JSON) => void):void

	/**
	 * `解锁手势密码`
	 * ========params==========
	 *
	 * `titleName` :string : （可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。
	 *
	 * `handPassword` :string : 已设置的密码，例如：1,2,3,4,5,6。
	 */
	unlock(params:handlock_unlock_Params, callback?: (ret:JSON) => void):void

}
interface handlock_set_Params {
	/**（可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。*/ 
	titleName?:string,

}

interface handlock_modify_Params {
	/**（可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。*/ 
	titleName?:string,

	/**已设置的密码，例如：1,2,3,4,5,6。*/ 
	handPassword:string,

}

interface handlock_cancel_Params {
	/**（可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。*/ 
	titleName?:string,

	/**已设置的密码，例如：1,2,3,4,5,6。*/ 
	handPassword:string,

}

interface handlock_unlock_Params {
	/**（可选项）默认为空,为空时没有标题栏，目前不支持设置标题栏颜色，如颜色不适用建议隐藏标题栏。*/ 
	titleName?:string,

	/**已设置的密码，例如：1,2,3,4,5,6。*/ 
	handPassword:string,

}

interface matrixLock {
}
interface divisionalLineChart {
	/**
	 * `打开折线图视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `bg` :string : （可选项）模块背景色，支持rgb、rgba、#
	 *
	 * `coordinate` :JSON : （可选项）折线图的坐标系配置
	 *
	 * `shadow` :Array : （可选项）阴影内容样式配置信息组成的数组
	 *
	 * `data` :Array : 折线的数据信息
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 */
	open(params:divisionalLineChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新指定 id 的折线数据`
	 * ========params==========
	 *
	 * `id` :number : 要刷新的模块的 id
	 *
	 * `type` :string : 更新数据的方式
	 *
	 * `data` :Array : 折线的数据信息
	 */
	reloadData(params:divisionalLineChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新阴影区域`
	 * ========params==========
	 *
	 * `id` :number : 要更新阴影的模块的 id
	 *
	 * `shadow` :Array : （可选项）阴影内容样式配置信息
	 */
	updateShadow(params:divisionalLineChart_updateShadow_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭折线图视图，并从内存里清除`
	 * ========params==========
	 *
	 * `id` :number : 要关闭的模块的 id
	 */
	close(params:divisionalLineChart_close_Params, callback?: (ret:JSON) => void):void

	/** 隐藏折线图视图，并未从内存清除，可调用 show 接口显示该模块*/ 
	hide():void

	/** 显示已隐藏的折线图模块*/ 
	show():void

}
interface divisionalLineChart_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块背景色，支持rgb、rgba、#*/ 
	bg?:string,

	/**（可选项）折线图的坐标系配置*/ 
	coordinate?:JSON,

	/**（可选项）阴影内容样式配置信息组成的数组*/ 
	shadow?:Array,

	/**折线的数据信息*/ 
	data:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

}

interface divisionalLineChart_reloadData_Params {
	/**要刷新的模块的 id*/ 
	id:number,

	/**更新数据的方式*/ 
	type:string,

	/**折线的数据信息*/ 
	data:Array,

}

interface divisionalLineChart_updateShadow_Params {
	/**要更新阴影的模块的 id*/ 
	id:number,

	/**（可选项）阴影内容样式配置信息*/ 
	shadow?:Array,

}

interface divisionalLineChart_close_Params {
	/**要关闭的模块的 id*/ 
	id:number,

}

interface UICoverFlow {
	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本app缓存的所有数据这调用api.clearCache***/ 
	clearCache():void

}
interface popupMenu {
}
interface editDialog {
	/**
	 * `打开编辑框`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `fontSize` :number : （可选项）字体大小。(建议16-18)
	 *
	 * `fontColor` :string : （可选项）字体颜色。
	 *
	 * `inputType` :number : （可选项）键盘类型 (0:正常|1:数字|2:email|3:url|4:密码)。
	 *
	 * `inputHint` :string : （可选项）提示文字。
	 *
	 * `defaultText` :string : （可选项）默认显示文字。
	 *
	 * `maxNum` :number : （可选项）最大字数(如果为0,或者缺省长度无限制,并且不回调onNum事件方法)。
	 */
	openEditText(params:editDialog_openEditText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏编辑框`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 */
	hideEditText(params:editDialog_hideEditText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示编辑框`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 */
	showEditText(params:editDialog_showEditText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭编辑框`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 */
	closeEditText(params:editDialog_closeEditText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 *
	 * `data` :number : （必填项）需要插入到编辑框的数据。
	 */
	insertData(params:editDialog_insertData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清除所有数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 */
	cleanAll(params:editDialog_cleanAll_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取编辑输入框内所有数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）需要操作的编辑框序号。
	 */
	getContent(params:editDialog_getContent_Params, callback?: (ret:JSON) => void):void

}
interface editDialog_openEditText_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）字体大小。(建议16-18)*/ 
	fontSize?:number,

	/**（可选项）字体颜色。*/ 
	fontColor?:string,

	/**（可选项）键盘类型 (0:正常|1:数字|2:email|3:url|4:密码)。*/ 
	inputType?:number,

	/**（可选项）提示文字。*/ 
	inputHint?:string,

	/**（可选项）默认显示文字。*/ 
	defaultText?:string,

	/**（可选项）最大字数(如果为0,或者缺省长度无限制,并且不回调onNum事件方法)。*/ 
	maxNum?:number,

}

interface editDialog_hideEditText_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

}

interface editDialog_showEditText_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

}

interface editDialog_closeEditText_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

}

interface editDialog_insertData_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

	/**（必填项）需要插入到编辑框的数据。*/ 
	data:number,

}

interface editDialog_cleanAll_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

}

interface editDialog_getContent_Params {
	/**（可选项）需要操作的编辑框序号。*/ 
	index?:number,

}

interface UIDatePickerS {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `rowHeight` :number : （可选项）设置选择器的行高
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIDatePickerS_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭选择器*/ 
	close():void

	/** 隐藏选择器*/ 
	hide():void

	/** 显示已隐藏的选择器*/ 
	show():void

}
interface UIDatePickerS_open_Params {
	/**（可选项）设置选择器的行高*/ 
	rowHeight?:number,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIVividLine {
	/**
	 * `打开折线图视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）折线图样式配置
	 *
	 * `datas` :Array : 折线的数据信息
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 */
	open(params:UIVividLine_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新折线数据`
	 * ========params==========
	 *
	 * `id` :number : 操作视图的 id
	 *
	 * `datas` :Array : 折线的数据信息
	 */
	reloadData(params:UIVividLine_reloadData_Params):void

	/**
	 * `往现有数据拼接新数据`
	 * ========params==========
	 *
	 * `id` :number : 操作视图的 id
	 *
	 * `datas` :Array : 折线的数据信息
	 *
	 * `orientation` :string : （可选项）拼接数据的方向，取值范围：right，left
	 */
	appendData(params:UIVividLine_appendData_Params):void

	/**
	 * `关闭折线图视图，并从内存里清空`
	 * ========params==========
	 *
	 * `id` :number : 操作视图的 id
	 */
	close(params:UIVividLine_close_Params):void

	/**
	 * `隐藏折线图视图，并没有从内存里清空`
	 * ========params==========
	 *
	 * `id` :number : 操作视图的 id
	 */
	hide(params:UIVividLine_hide_Params):void

	/**
	 * `显示已隐藏的折线图视图`
	 * ========params==========
	 *
	 * `id` :number : 操作视图的 id
	 */
	show(params:UIVividLine_show_Params):void

}
interface UIVividLine_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）折线图样式配置*/ 
	styles?:JSON,

	/**折线的数据信息*/ 
	datas:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

}

interface UIVividLine_reloadData_Params {
	/**操作视图的 id*/ 
	id:number,

	/**折线的数据信息*/ 
	datas:Array,

}

interface UIVividLine_appendData_Params {
	/**操作视图的 id*/ 
	id:number,

	/**折线的数据信息*/ 
	datas:Array,

	/**（可选项）拼接数据的方向，取值范围：right，left*/ 
	orientation?:string,

}

interface UIVividLine_close_Params {
	/**操作视图的 id*/ 
	id:number,

}

interface UIVividLine_hide_Params {
	/**操作视图的 id*/ 
	id:number,

}

interface UIVividLine_show_Params {
	/**操作视图的 id*/ 
	id:number,

}

interface gestureUnlock {
	/**
	 * `打开手势解锁/设置页面`
	 * ========params==========
	 *
	 * `rect` :JSON : (可选项）手势解锁/设置页面的位置及长宽
	 *
	 * `password` :string : （可选项）用户设置的手势密码，手势解锁时必须设置此参数
	 *
	 * `type` :string : （可选项）页面类型
	 *
	 * `showArrowDirection` :boolean : （可选项）是否显示指示手势划过的方向箭头
	 *
	 * `styles` :JSON : （可选项）手势解锁/设置页面样式设置
	 *
	 * `fixedOn` :string : （可选项）添加到哪个frame，与fixed一起使用
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:gestureUnlock_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭手势解锁/设置页面*/ 
	close():void

	/** 隐藏手势解锁/设置页面*/ 
	hide():void

	/** 显示已隐藏的手势解锁/设置页面*/ 
	show():void

}
interface gestureUnlock_open_Params {
	/**(可选项）手势解锁/设置页面的位置及长宽*/ 
	rect?:JSON,

	/**（可选项）用户设置的手势密码，手势解锁时必须设置此参数*/ 
	password?:string,

	/**（可选项）页面类型*/ 
	type?:string,

	/**（可选项）是否显示指示手势划过的方向箭头*/ 
	showArrowDirection?:boolean,

	/**（可选项）手势解锁/设置页面样式设置*/ 
	styles?:JSON,

	/**（可选项）添加到哪个frame，与fixed一起使用*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIAdaptiveInput {
	/** 打开输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:UIAdaptiveInput_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭指定输入框`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	close(params:UIAdaptiveInput_close_Params):void

	/**
	 * `显示输入框`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	show(params:UIAdaptiveInput_show_Params):void

	/**
	 * `隐藏输入框，并没有从内存里清除`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	hide(params:UIAdaptiveInput_hide_Params):void

	/**
	 * `弹出键盘`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	becomeFirstResponder(params:UIAdaptiveInput_becomeFirstResponder_Params):void

	/**
	 * `隐藏键盘`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	resignFirstResponder(params:UIAdaptiveInput_resignFirstResponder_Params):void

	/**
	 * `设置输入框内的文字`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 *
	 * `value` :string : （可选项）要设置的输入框内的文字内容
	 */
	setValue(params:UIAdaptiveInput_setValue_Params):void

	/**
	 * `获取当前输入框内的文字`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 */
	getValue(params:UIAdaptiveInput_getValue_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向当前输入框内指定位置插入字符串`
	 * ========params==========
	 *
	 * `id` :string : 所操作模块的 ID
	 *
	 * `index` :number : （可选项）插入当前输入框内字符串的位置
	 *
	 * `value` :string : （可选项）要设置的输入框内的文字内容
	 */
	insertValue(params:UIAdaptiveInput_insertValue_Params):void

}
interface UIAdaptiveInput_addEventListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface UIAdaptiveInput_close_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_show_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_hide_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_becomeFirstResponder_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_resignFirstResponder_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_setValue_Params {
	/**所操作模块的 ID*/ 
	id:string,

	/**（可选项）要设置的输入框内的文字内容*/ 
	value?:string,

}

interface UIAdaptiveInput_getValue_Params {
	/**所操作模块的 ID*/ 
	id:string,

}

interface UIAdaptiveInput_insertValue_Params {
	/**所操作模块的 ID*/ 
	id:string,

	/**（可选项）插入当前输入框内字符串的位置*/ 
	index?:number,

	/**（可选项）要设置的输入框内的文字内容*/ 
	value?:string,

}

interface UIChatTools {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/**
	 * `设置附加功能按钮，**仅当 open 接口内 tools->append 参数有值时，本接口有效**`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）附加功能面板按钮样式配置
	 *
	 * `buttons` :Array : 附加功能面板按钮信息集合，可分页显示
	 */
	setAppendButton(params:UIChatTools_setAppendButton_Params, callback?: (ret:JSON) => void):void

	/**
	 * `表情面板相关功能事件的监听，**仅当 open 接口内 tools->face 参数有值时，本接口有效**`
	 * ========params==========
	 *
	 * `name` :string : 事件的目标对象
	 */
	faceListener(params:UIChatTools_faceListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加表情包，**仅当 open 接口内 tools->face 参数有值时，本接口有效**`
	 * ========params==========
	 *
	 * `path` :string : 表情包文件夹路径，表情包格式规范要求同 open 内附加表情包格式规范一致
	 */
	addFace(params:UIChatTools_addFace_Params, callback?: (ret:JSON) => void):void

	/** 选择图片相关功能事件的监听，**仅当 open 接口内 tools->image 参数有值时，本接口有效***/ 
	imageListener(callback?: (ret:JSON) => void):void

	/** 用户点击工具栏内某个按钮事件的监听*/ 
	toolsListener():void

	/** 录音相关功能事件的监听，**仅当 open 接口内 tools->recorder 参数有值时，本接口有效***/ 
	recorderListener(callback?: (ret:JSON) => void):void

	/** 开始录音后开启录音计时器，使录音页面计时器开始计时。**本接口仅能在 recorderListener 监听 target 为 talkback/record，name 为 press/start 时的监听回调函数内调用***/ 
	startTimer():void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `弹出表情、附加功能面板`
	 * ========params==========
	 *
	 * `target` :string : 操作的面板类型，取值范围如下：
	 */
	popupBoard(params:UIChatTools_popupBoard_Params):void

	/** 收起表情、附加功能面板*/ 
	closeBoard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatTools_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatTools_insertValue_Params):void

	/**
	 * `添加输入框相关事件的监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	chatBoxListener(params:UIChatTools_chatBoxListener_Params, callback?: (ret:JSON) => void):void

	/** 清空输入框文本*/ 
	clearText():void

	/** 取消录音*/ 
	cancelRecord():void

}
interface UIChatTools_setAppendButton_Params {
	/**（可选项）附加功能面板按钮样式配置*/ 
	styles?:JSON,

	/**附加功能面板按钮信息集合，可分页显示*/ 
	buttons:Array,

}

interface UIChatTools_faceListener_Params {
	/**事件的目标对象*/ 
	name:string,

}

interface UIChatTools_addFace_Params {
	/**表情包文件夹路径，表情包格式规范要求同 open 内附加表情包格式规范一致*/ 
	path:string,

}

interface UIChatTools_popupBoard_Params {
	/**操作的面板类型，取值范围如下：*/ 
	target:string,

}

interface UIChatTools_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatTools_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatTools_chatBoxListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface xinyanIDVerification {
}
interface citySelector {
	/**
	 * `打开城市选择器`
	 * ========params==========
	 *
	 * `y` :number : （可选项）选择器视图上边缘距离所依附窗口顶部的距离
	 *
	 * `height` :number : （可选项）选择器的高度，小于244无效
	 *
	 * `titleHeight` :number : （可选项）标题栏高度
	 *
	 * `cancelImg` :string : （可选项）取消按钮的背景图片的路径，要求本地路径（fs、widget）
	 *
	 * `enterImg` :string : （可选项）确定按钮的背景图片的路径（本地），要求本地路径（fs、widget）
	 *
	 * `titleImg` :string : （可选项）选择器顶端导航条背景图片的路径（本地），要求本地路径（fs、widget）
	 *
	 * `bgImg` :string : （可选项）选择器背景图片的路径（本地），要求本地路径（fs、widget）
	 *
	 * `fontColor` :string : （可选项）选择器字体颜色
	 *
	 * `selectedColor` :string : （可选项）选中字体颜色
	 *
	 * `anim` :boolean : （可选项）是否添加弹出动画
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:citySelector_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏选择器`
	 * ========params==========
	 *
	 * `anim` :boolean : （可选项）是否添加动画
	 */
	hide(params:citySelector_hide_Params):void

	/** 显示选择器，从屏幕外移动到屏幕内*/ 
	show():void

	/** 关闭选择器，意味着从内存里清除*/ 
	close():void

}
interface citySelector_open_Params {
	/**（可选项）选择器视图上边缘距离所依附窗口顶部的距离*/ 
	y?:number,

	/**（可选项）选择器的高度，小于244无效*/ 
	height?:number,

	/**（可选项）标题栏高度*/ 
	titleHeight?:number,

	/**（可选项）取消按钮的背景图片的路径，要求本地路径（fs、widget）*/ 
	cancelImg?:string,

	/**（可选项）确定按钮的背景图片的路径（本地），要求本地路径（fs、widget）*/ 
	enterImg?:string,

	/**（可选项）选择器顶端导航条背景图片的路径（本地），要求本地路径（fs、widget）*/ 
	titleImg?:string,

	/**（可选项）选择器背景图片的路径（本地），要求本地路径（fs、widget）*/ 
	bgImg?:string,

	/**（可选项）选择器字体颜色*/ 
	fontColor?:string,

	/**（可选项）选中字体颜色*/ 
	selectedColor?:string,

	/**（可选项）是否添加弹出动画*/ 
	anim?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface citySelector_hide_Params {
	/**（可选项）是否添加动画*/ 
	anim?:boolean,

}

interface paymentDialog {
	/**
	 * `打开输入框`
	 * ========params==========
	 *
	 * `style` :null : null
	 */
	show(params:paymentDialog_show_Params, callback?: (ret:JSON) => void):void

}
interface paymentDialog_show_Params {
	/**null*/ 
	style:null,

}

interface UIListContacts {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `headHidden` :boolean : （可选项）是否隐藏头像和名字后面的职务标签（position）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListContacts_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListContacts_reloadData_Params):void

}
interface UIListContacts_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）是否隐藏头像和名字后面的职务标签（position）*/ 
	headHidden?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListContacts_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface UILoading {
	/** 打开 flower 样式的加载提示框。此样式接口封装了一种常见的“旋转菊花”型加载提示框，开发者只需自定义此加载提示框的位置及尺寸即可。同一个页面可打开多个该样式加载提示框，用 id 区分。*/ 
	flower():void

	/** 打开关键帧样式的加载提示框。该样式的加载提示框以播放一组关键帧图片的形式来呈现加载过程，该图片数组可通过 content 参数配置。*/ 
	keyFrame():void

	/**
	 * `关闭打开的加载提示框`
	 * ========params==========
	 *
	 * `id` :number : 关闭 flower 接口打开的 id 号对应加载提示框
	 *
	 * `isGradual` :boolean : （可选项）是否渐变消失 ；（仅支持iOS）
	 */
	closeFlower(params:UILoading_closeFlower_Params):void

	/**
	 * `关闭打开的加载提示框`
	 * ========params==========
	 *
	 * `isGradual` :boolean : （可选项）是否渐变消失 ；（仅支持iOS）
	 */
	closeKeyFrame(params:UILoading_closeKeyFrame_Params):void

}
interface UILoading_closeFlower_Params {
	/**关闭 flower 接口打开的 id 号对应加载提示框*/ 
	id:number,

	/**（可选项）是否渐变消失 ；（仅支持iOS）*/ 
	isGradual?:boolean,

}

interface UILoading_closeKeyFrame_Params {
	/**（可选项）是否渐变消失 ；（仅支持iOS）*/ 
	isGradual?:boolean,

}

interface UIPopupsPicker {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸(底部滑杆)
	 *
	 * `resource` :string : 城市列表的数据源文件路径（支持widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。
	 */
	open(params:UIPopupsPicker_open_Params, callback?: (ret:JSON) => void):void

	/** 隐藏选择器*/ 
	hide():void

	/** 显示选择器*/ 
	show():void

	/** 关闭选择器*/ 
	close():void

}
interface UIPopupsPicker_open_Params {
	/**（可选项）模块的位置及尺寸(底部滑杆)*/ 
	rect?:JSON,

	/**城市列表的数据源文件路径（支持widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。*/ 
	resource:string,

}

interface multiSelector {
}
interface welcomePage {
	/**
	 * `打开welcomePage`
	 * ========params==========
	 *
	 * `isFullscreen` :boolean : （可选项）是否全屏(全屏不显示状态栏)
	 *
	 * `AnimationType` :string : （可选项）动画类型  'Default'  默认, 'DepthPage'  深入浅出, 'Cube'  立方体, 'Rotate'  旋转,'Accordion'  左右折叠, 'InRightUp'   右上角进入, 'InRightDown'  右下角进入, 'ZoomOutPage'  淡入淡出。
	 *
	 * `imgs` :Array : 导航图片（支持 widget:// fs://  不支持相对路径）。
	 *
	 * `setting` :JSON : （可选项）导航页相关设置。
	 */
	openWelcomePage(params:welcomePage_openWelcomePage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重新设置是否打开导航页`
	 * ========params==========
	 *
	 * `setWelcome` :boolean : （必选项）false 表示设置启动页为未打开状态  true 反之
	 */
	setWelcome(params:welcomePage_setWelcome_Params, callback?: (ret:JSON) => void):void

}
interface welcomePage_openWelcomePage_Params {
	/**（可选项）是否全屏(全屏不显示状态栏)*/ 
	isFullscreen?:boolean,

	/**（可选项）动画类型  'Default'  默认, 'DepthPage'  深入浅出, 'Cube'  立方体, 'Rotate'  旋转,'Accordion'  左右折叠, 'InRightUp'   右上角进入, 'InRightDown'  右下角进入, 'ZoomOutPage'  淡入淡出。*/ 
	AnimationType?:string,

	/**导航图片（支持 widget:// fs://  不支持相对路径）。*/ 
	imgs:Array,

	/**（可选项）导航页相关设置。*/ 
	setting?:JSON,

}

interface welcomePage_setWelcome_Params {
	/**（必选项）false 表示设置启动页为未打开状态  true 反之*/ 
	setWelcome:boolean,

}

interface UISlider {
}
interface swipeCaptcha {
	/**
	 * `打开模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : 模块样式设置
	 *
	 * `imgPath` :string : 背景图片（支持 widget:// & fs:// & https:// 协议路径）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 */
	open(params:swipeCaptcha_open_Params, callback?: (ret:JSON) => void):void

	/** 重新验证*/ 
	reset():void

	/** 关闭模块*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

}
interface swipeCaptcha_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**模块样式设置*/ 
	styles:JSON,

	/**背景图片（支持 widget:// & fs:// & https:// 协议路径）*/ 
	imgPath:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

}

interface orderList {
}
interface dMultiScreen {
}
interface UILinkageSelector {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸)
	 *
	 * `resource` :string : 城市列表的数据源文件路径（支持widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。
	 */
	open(params:UILinkageSelector_open_Params):void

	/** 确定事件*/ 
	confirm():void

	/** 隐藏选择器*/ 
	hide():void

	/** 显示选择器*/ 
	show():void

	/** 关闭选择器*/ 
	close():void

}
interface UILinkageSelector_open_Params {
	/**（可选项）模块的位置及尺寸)*/ 
	rect?:JSON,

	/**城市列表的数据源文件路径（支持widget、fs 路径协议），数据源文件必须为`.json`文件。城市的JSON数据会在callback时按原格式返回。若为 json 文件则必须是标准的 [json格式](http://www.bejson.com)，否则会报错。*/ 
	resource:string,

}

interface UIListUpload {
	/**
	 * `打开 UIListUpLoad 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListUpload_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新header文本`
	 * ========params==========
	 *
	 * `text` :string : 需要更新的文本
	 */
	updateHeaderText(params:UIListUpload_updateHeaderText_Params):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListView 模块*/ 
	show():void

	/** 隐藏 UIListView 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:UIListUpload_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListUpload_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListUpload_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListUpload_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListUpload_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListUpload_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListUpload_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListUpload_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListUpload_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `style` :JSON : 下拉刷新的样式配置
	 */
	setRefreshHeader(params:UIListUpload_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListUpload_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

	/** 停止刷新(仅Android有效)*/ 
	stopRefresh():void

}
interface UIListUpload_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListUpload_updateHeaderText_Params {
	/**需要更新的文本*/ 
	text:string,

}

interface UIListUpload_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface UIListUpload_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListUpload_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListUpload_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListUpload_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListUpload_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListUpload_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListUpload_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListUpload_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListUpload_setRefreshHeader_Params {
	/**下拉刷新的样式配置*/ 
	style:JSON,

}

interface UIListUpload_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIMediaControl {
	/**
	 * `打开媒体控制控件`
	 * ========params==========
	 *
	 * `rect` :JSON : 预览控件位置
	 *
	 * `bgClolor` :string : 视图的背景颜色 ；（仅支持iOS）
	 *
	 * `leftBtnRect` :JSON : 上一曲按钮的位置和大小 ；（仅支持iOS）
	 *
	 * `rightBtnRect` :JSON : 下一曲按钮的位置和大小 ；（仅支持iOS）
	 *
	 * `playBtnRect` :JSON : 播放按钮的位置和大小 ；（仅支持iOS）
	 *
	 * `playBtnStatus` :boolean : 播放按钮的状态播放还是暂停 ；（仅支持iOS）
	 *
	 * `closeBtnRect` :JSON : 关闭按钮的位置和大小 ；（仅支持iOS）
	 *
	 * `leftBtnImagePath` :string : 上一曲按钮的背景图片路径；支持widget://和fs:// ；（仅支持iOS）
	 *
	 * `rightBtnImagePath` :string : 下一曲按钮的背景图片路径；支持widget://和fs:// ；（仅支持iOS）
	 *
	 * `playBtnImagePath` :string : 播放按钮（播放状态）的背景图片路径；支持widget://和fs:// ；（仅支持iOS）
	 *
	 * `pauseBtnImagePath` :string : 播放按钮（暂停状态）的背景图片路径；支持widget://和fs:// ；（仅支持iOS）
	 *
	 * `closeBtnImagePath` :string : 关闭的背景图片路径；支持widget://和fs:// ；（仅支持iOS）
	 *
	 * `slider` :JSON : 滑块参数设置 ；（仅支持iOS）
	 *
	 * `leftTimeLab` :JSON : 左边时间  ；（仅支持iOS）
	 *
	 * `rightTimeLab` :JSON : 右边时间 ；（仅支持iOS）
	 *
	 * `currentProgress` :number : （可选项）当前进度（秒）
	 *
	 * `total` :number : 总时长（秒）
	 *
	 * `isDrag` :boolean : 是否可以拖拽 ；（仅支持iOS）
	 *
	 * `bubleSize` :number : （可选项）滑块大小（仅android支持）
	 */
	openView(params:UIMediaControl_openView_Params, callback?: (ret:JSON) => void):void

	/** 关闭媒体控制控件*/ 
	closeView(callback?: (ret:JSON) => void):void

	/**
	 * `更换播放状态`
	 * ========params==========
	 *
	 * `state` :string : 要切换为的状态
	 */
	changePlayState(params:UIMediaControl_changePlayState_Params):void

	/**
	 * `更换播放进度`
	 * ========params==========
	 *
	 * `currentProgress` :number : （可选项）当前进度（秒）
	 *
	 * `total` :number : （可选项）总时长（秒）
	 */
	updateProgress(params:UIMediaControl_updateProgress_Params):void

}
interface UIMediaControl_openView_Params {
	/**预览控件位置*/ 
	rect:JSON,

	/**视图的背景颜色 ；（仅支持iOS）*/ 
	bgClolor:string,

	/**上一曲按钮的位置和大小 ；（仅支持iOS）*/ 
	leftBtnRect:JSON,

	/**下一曲按钮的位置和大小 ；（仅支持iOS）*/ 
	rightBtnRect:JSON,

	/**播放按钮的位置和大小 ；（仅支持iOS）*/ 
	playBtnRect:JSON,

	/**播放按钮的状态播放还是暂停 ；（仅支持iOS）*/ 
	playBtnStatus:boolean,

	/**关闭按钮的位置和大小 ；（仅支持iOS）*/ 
	closeBtnRect:JSON,

	/**上一曲按钮的背景图片路径；支持widget://和fs:// ；（仅支持iOS）*/ 
	leftBtnImagePath:string,

	/**下一曲按钮的背景图片路径；支持widget://和fs:// ；（仅支持iOS）*/ 
	rightBtnImagePath:string,

	/**播放按钮（播放状态）的背景图片路径；支持widget://和fs:// ；（仅支持iOS）*/ 
	playBtnImagePath:string,

	/**播放按钮（暂停状态）的背景图片路径；支持widget://和fs:// ；（仅支持iOS）*/ 
	pauseBtnImagePath:string,

	/**关闭的背景图片路径；支持widget://和fs:// ；（仅支持iOS）*/ 
	closeBtnImagePath:string,

	/**滑块参数设置 ；（仅支持iOS）*/ 
	slider:JSON,

	/**左边时间  ；（仅支持iOS）*/ 
	leftTimeLab:JSON,

	/**右边时间 ；（仅支持iOS）*/ 
	rightTimeLab:JSON,

	/**（可选项）当前进度（秒）*/ 
	currentProgress?:number,

	/**总时长（秒）*/ 
	total:number,

	/**是否可以拖拽 ；（仅支持iOS）*/ 
	isDrag:boolean,

	/**（可选项）滑块大小（仅android支持）*/ 
	bubleSize?:number,

}

interface UIMediaControl_changePlayState_Params {
	/**要切换为的状态*/ 
	state:string,

}

interface UIMediaControl_updateProgress_Params {
	/**（可选项）当前进度（秒）*/ 
	currentProgress?:number,

	/**（可选项）总时长（秒）*/ 
	total?:number,

}

interface selectList {
}
interface applause {
	/**
	 * `显示鼓掌动画按钮`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）鼓掌按钮的位置及尺寸
	 *
	 * `placeholderImg` :string : （必填项）鼓掌按钮图片路径（支持 fs://、widget://）。
	 *
	 * `iamges` :Array : （必填项）鼓掌后飘动的图形图片路径（支持 fs://、widget://）。
	 *
	 * `isShowNum` :boolean : （可选项）是否显示鼓掌的数量。
	 *
	 * `applauseNum` :number : （可选项）鼓掌的起始数。
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	showAppLause(params:applause_showAppLause_Params, callback?: (ret:JSON) => void):void

	/** 点击鼓掌动画按钮*/ 
	clickAppLause(callback?: (ret:JSON) => void):void

}
interface applause_showAppLause_Params {
	/**（必填项）鼓掌按钮的位置及尺寸*/ 
	rect:JSON,

	/**（必填项）鼓掌按钮图片路径（支持 fs://、widget://）。*/ 
	placeholderImg:string,

	/**（必填项）鼓掌后飘动的图形图片路径（支持 fs://、widget://）。*/ 
	iamges:Array,

	/**（可选项）是否显示鼓掌的数量。*/ 
	isShowNum?:boolean,

	/**（可选项）鼓掌的起始数。*/ 
	applauseNum?:number,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface UIPullRefreshFlash {
	/** 配置下拉刷新样式*/ 
	setCustomRefreshHeaderInfo():void

	/** 手动开始下拉刷新的加载状态，**下拉刷新状态亦可通过用户下拉到阈值自动触发***/ 
	refreshHeaderLoading():void

	/** 手动停止下拉刷新的加载状态*/ 
	refreshHeaderLoadDone():void

}
interface UIListArrow {
	/**
	 * `打开 UIListArrow 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，**android 平台暂不支持，且默认false**
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListArrow_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListBadge 模块*/ 
	show():void

	/** 隐藏 UIListBadge 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:UIListArrow_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListArrow_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListArrow_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListArrow_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListArrow_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListArrow_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListArrow_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListArrow_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListArrow_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `style` :JSON : 下拉刷新的样式配置
	 */
	setRefreshHeader(params:UIListArrow_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListArrow_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

}
interface UIListArrow_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，**android 平台暂不支持，且默认false***/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListArrow_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface UIListArrow_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListArrow_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListArrow_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListArrow_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListArrow_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListArrow_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListArrow_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListArrow_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListArrow_setRefreshHeader_Params {
	/**下拉刷新的样式配置*/ 
	style:JSON,

}

interface UIListArrow_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface waveProgress {
	/**
	 * `显示波纹进度UI`
	 * ========params==========
	 *
	 * `fixedOn` :string : 将视图添加到指定的frame上面,非必填
	 *
	 * `fixed` :string : 提供fixed参数，控制视图是否随着frame内容的移动而跟着移动,非必填
	 *
	 * `r` :number : 半径,非必填
	 *
	 * `centerX` :number : 圆心X轴坐标,非必填
	 *
	 * `centerY` :number : 圆心Y轴坐标,非必填
	 *
	 * `speed` :any : 波纹流动速度,浮点型，非必填
	 *
	 * `progress` :number : 波纹进度值，非必填
	 *
	 * `firstFillColor` :string : 前填充色
	 *
	 * `secondFillColor` :string : 海浪波纹填充色
	 */
	showWave(params:waveProgress_showWave_Params):void

	/** 关闭波型UI*/ 
	closeWave():void

	/** 显示已隐藏的波型UI*/ 
	show():void

	/** 隐藏波型UI*/ 
	hide():void

	/**
	 * `设置波型UI进度值`
	 * ========params==========
	 *
	 * `progress` :number : 波纹进度值，非必填
	 */
	setProgress(params:waveProgress_setProgress_Params):void

}
interface waveProgress_showWave_Params {
	/**将视图添加到指定的frame上面,非必填*/ 
	fixedOn:string,

	/**提供fixed参数，控制视图是否随着frame内容的移动而跟着移动,非必填*/ 
	fixed:string,

	/**半径,非必填*/ 
	r:number,

	/**圆心X轴坐标,非必填*/ 
	centerX:number,

	/**圆心Y轴坐标,非必填*/ 
	centerY:number,

	/**波纹流动速度,浮点型，非必填*/ 
	speed:any,

	/**波纹进度值，非必填*/ 
	progress:number,

	/**前填充色*/ 
	firstFillColor:string,

	/**海浪波纹填充色*/ 
	secondFillColor:string,

}

interface waveProgress_setProgress_Params {
	/**波纹进度值，非必填*/ 
	progress:number,

}

interface messageList {
}
interface UISearchBar {
	/**
	 * `打开搜索页面`
	 * ========params==========
	 *
	 * `placeholder` :string : （可选项）搜索框的占位提示文本
	 *
	 * `historyCount` :number : （可选项）历史记录条数
	 *
	 * `dataBase` :string : （可选项）历史记录存储库名，以区分同一个 app 多个不同页面的数据
	 *
	 * `showRecordBtn` :boolean : （可选项）是否显示录音按钮
	 *
	 * `texts` :JSON : （可选项）模块各部分的文本
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 */
	open(params:UISearchBar_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭搜索页面*/ 
	close():void

	/**
	 * `设置搜索框的文字`
	 * ========params==========
	 *
	 * `text` :string : （可选项）搜索框内的文字，若不传或传空则清空搜索框内容
	 */
	setText(params:UISearchBar_setText_Params):void

	/** 清空当前搜索历史记录*/ 
	clearHistory():void

}
interface UISearchBar_open_Params {
	/**（可选项）搜索框的占位提示文本*/ 
	placeholder?:string,

	/**（可选项）历史记录条数*/ 
	historyCount?:number,

	/**（可选项）历史记录存储库名，以区分同一个 app 多个不同页面的数据*/ 
	dataBase?:string,

	/**（可选项）是否显示录音按钮*/ 
	showRecordBtn?:boolean,

	/**（可选项）模块各部分的文本*/ 
	texts?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

}

interface UISearchBar_setText_Params {
	/**（可选项）搜索框内的文字，若不传或传空则清空搜索框内容*/ 
	text?:string,

}

interface overviewList {
}
interface sliderButton {
	/** 监听滑动到右边的事件*/ 
	addEventListener():void

	/**
	 * `打开滑动按钮`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `labelText` :string : （可选项）滑块上的文字。
	 *
	 * `labelFontSize` :number : （可选项）滑块上的文字字体大小。
	 *
	 * `labelTextColor` :string : （可选项）滑块上的文字颜色。
	 *
	 * `borderColor` :string : （可选项）滑块边框颜色。
	 *
	 * `dotColor` :string : （可选项）滑块上面的圆形按钮颜色。
	 *
	 * `skateColor` :string : （可选项）滑块按钮背景色。
	 */
	openSlideBtn(params:sliderButton_openSlideBtn_Params, callback?: (ret:JSON) => void):void

	/** 隐藏滑动按钮*/ 
	hideSlideBtn(callback?: (ret:JSON) => void):void

	/** 显示滑块按钮*/ 
	showSlideBtn(callback?: (ret:JSON) => void):void

	/** 关闭滑块按钮*/ 
	closeSlideBtn(callback?: (ret:JSON) => void):void

}
interface sliderButton_openSlideBtn_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）滑块上的文字。*/ 
	labelText?:string,

	/**（可选项）滑块上的文字字体大小。*/ 
	labelFontSize?:number,

	/**（可选项）滑块上的文字颜色。*/ 
	labelTextColor?:string,

	/**（可选项）滑块边框颜色。*/ 
	borderColor?:string,

	/**（可选项）滑块上面的圆形按钮颜色。*/ 
	dotColor?:string,

	/**（可选项）滑块按钮背景色。*/ 
	skateColor?:string,

}

interface floatButton {
	/** 悬浮按钮点击事件监听*/ 
	setOnClickListener():void

	/**
	 * `打开悬浮按钮`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `lineColor` :string : 悬浮按钮边框颜色(如：#ff00ff)
	 *
	 * `btnPic` :string : （可选项）悬浮按钮图标。支持fs:// widget://(支持png,jpg,gif,[备注：安卓设置gif动图时lineColor会失效])
	 */
	openButton(params:floatButton_openButton_Params, callback?: (ret:JSON) => void):void

	/** 隐藏悬浮按钮*/ 
	hidenButton():void

	/** 显示悬浮按钮*/ 
	showButton():void

	/** 关闭悬浮按钮*/ 
	closeButton():void

	/**
	 * `修改悬浮按钮图片`
	 * ========params==========
	 *
	 * `btnPic` :string : （可选项）悬浮按钮图标。支持fs:// widget://(支持png,jpg,gif,[备注：安卓设置gif动图时lineColor会失效])
	 */
	updateButtonPic(params:floatButton_updateButtonPic_Params, callback?: (ret:JSON) => void):void

	/** 开启旋转动画*/ 
	startAnimation():void

	/** 停止旋转动画*/ 
	stopAnimation():void

	/** 开启移动*/ 
	startMove():void

	/** 停止移动*/ 
	stopMove():void

	/** 停止移动*/ 
	stopMove():void

}
interface floatButton_openButton_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**悬浮按钮边框颜色(如：#ff00ff)*/ 
	lineColor:string,

	/**（可选项）悬浮按钮图标。支持fs:// widget://(支持png,jpg,gif,[备注：安卓设置gif动图时lineColor会失效])*/ 
	btnPic?:string,

}

interface floatButton_updateButtonPic_Params {
	/**（可选项）悬浮按钮图标。支持fs:// widget://(支持png,jpg,gif,[备注：安卓设置gif动图时lineColor会失效])*/ 
	btnPic?:string,

}

interface arcProgress {
}
interface lineChart {
}
interface sunmiT2Screen {
	/** 初始化副屏*/ 
	screenInit(callback?: (ret:JSON) => void):void

	/** 显示欢迎*/ 
	showWelcome(callback?: (ret:JSON) => void):void

	/**
	 * `显示文本`
	 * ========params==========
	 *
	 * `title` :null : null
	 *
	 * `content` :string : （必填项）显示数据
	 */
	showText(params:sunmiT2Screen_showText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示清单`
	 * ========params==========
	 *
	 * `json` :JSON : （必填项）显示数据
	 */
	showMenu(params:sunmiT2Screen_showMenu_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示图片`
	 * ========params==========
	 *
	 * `img` :string : （必填项）显示数据
	 */
	showImg(params:sunmiT2Screen_showImg_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示轮播图片`
	 * ========params==========
	 *
	 * `imgs` :Array : （必填项）显示数据
	 */
	showImgs(params:sunmiT2Screen_showImgs_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示单个视频`
	 * ========params==========
	 *
	 * `PathVideo` :string : （必填项）显示数据
	 */
	showVideo(params:sunmiT2Screen_showVideo_Params, callback?: (ret:JSON) => void):void

	/** 显示轮播视频*/ 
	showVideos(callback?: (ret:JSON) => void):void

	/**
	 * `显示单个图片清单`
	 * ========params==========
	 *
	 * `json` :null : null
	 *
	 * `img` :string : （必填项）显示数据
	 */
	imageLists(params:sunmiT2Screen_imageLists_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示单个视频清单`
	 * ========params==========
	 *
	 * `json` :null : null
	 *
	 * `video` :string : （必填项）显示数据
	 */
	videoLists(params:sunmiT2Screen_videoLists_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示轮播图清单`
	 * ========params==========
	 *
	 * `json` :null : null
	 *
	 * `imgs` :Array : （必填项）显示数据
	 */
	imagesLists(params:sunmiT2Screen_imagesLists_Params, callback?: (ret:JSON) => void):void

	/** 显示轮播视频清单*/ 
	videosLists(callback?: (ret:JSON) => void):void

	/** 退出副屏*/ 
	exitScreen(callback?: (ret:JSON) => void):void

	/** 清除缓存*/ 
	cachefile(callback?: (ret:JSON) => void):void

}
interface sunmiT2Screen_showText_Params {
	/**null*/ 
	title:null,

	/**（必填项）显示数据*/ 
	content:string,

}

interface sunmiT2Screen_showMenu_Params {
	/**（必填项）显示数据*/ 
	json:JSON,

}

interface sunmiT2Screen_showImg_Params {
	/**（必填项）显示数据*/ 
	img:string,

}

interface sunmiT2Screen_showImgs_Params {
	/**（必填项）显示数据*/ 
	imgs:Array,

}

interface sunmiT2Screen_showVideo_Params {
	/**（必填项）显示数据*/ 
	PathVideo:string,

}

interface sunmiT2Screen_imageLists_Params {
	/**null*/ 
	json:null,

	/**（必填项）显示数据*/ 
	img:string,

}

interface sunmiT2Screen_videoLists_Params {
	/**null*/ 
	json:null,

	/**（必填项）显示数据*/ 
	video:string,

}

interface sunmiT2Screen_imagesLists_Params {
	/**null*/ 
	json:null,

	/**（必填项）显示数据*/ 
	imgs:Array,

}

interface goodsList {
}
interface licencePlatekeyboard {
	/** 打开*/ 
	open():void

	/** 关闭*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/** 更换键盘类型*/ 
	changeType():void

}
interface listView {
}
interface fluttering {
	/**
	 * `配置飘动动画`
	 * ========params==========
	 *
	 * `original` :JSON : 图标飘动动画的起点位置坐标
	 *
	 * `terminal` :JSON : 图标飘动动画的终点位置坐标
	 *
	 * `duration` :number : （可选项）飘屏动画的持续时间，单位：秒（s）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	config(params:fluttering_config_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始飘动（飘动的动画路径随机产生）`
	 * ========params==========
	 *
	 * `size` :number : （可选项）本次飘动的图标的大小
	 *
	 * `path` :string : （可选项）本次飘动图片的路径，支持本地路径（fs://、widget://）
	 */
	flutter(params:fluttering_flutter_Params):void

}
interface fluttering_config_Params {
	/**图标飘动动画的起点位置坐标*/ 
	original:JSON,

	/**图标飘动动画的终点位置坐标*/ 
	terminal:JSON,

	/**（可选项）飘屏动画的持续时间，单位：秒（s）*/ 
	duration?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface fluttering_flutter_Params {
	/**（可选项）本次飘动的图标的大小*/ 
	size?:number,

	/**（可选项）本次飘动图片的路径，支持本地路径（fs://、widget://）*/ 
	path?:string,

}

interface fillInput {
	/**
	 * `打开输入框，**注意：调用 open 接口的元素，不能加 tapmode 属性**`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `passwordOrCode` :any : （可选项）自动填充密码或者验证码
	 *
	 * `maxRows` :number : （可选项）支持显示最大行数，文本内容超过此行数时，上下滚动显示。是否支持换行，传大于1的数时表示支持，**注意：取值大于1（多行显示时），不触发 search 事件回调**
	 *
	 * `maxStringLength` :number : （可选项）输入框允许输入的最大字符串长度
	 *
	 * `autoFocus` :boolean : （可选项）打开时是否弹出键盘
	 *
	 * `placeholder` :string : （可选项）输入框的占位提示文本
	 *
	 * `keyboardType` :string : （可选项）输入框获取焦点时，弹出的键盘类型；
	 *
	 * `alignment` :string : （可选项）文本对齐方式
	 *
	 * `isCenterVertical` :boolean : 输入文本是否上下居中
	 *
	 * `inputType` :string : (可选项) 判断输入框输入的是密码还是文字
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:fillInput_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设输入框的位置`
	 * ========params==========
	 *
	 * `id` :number : 需要设置的输入框id
	 *
	 * `position` :JSON : （可选项）模块的位置
	 */
	resetPosition(params:fillInput_resetPosition_Params):void

	/** 关闭输入框*/ 
	close():void

	/** 显示输入框*/ 
	show():void

	/** 隐藏输入框*/ 
	hide():void

	/**
	 * `获取或设置输入框的内容`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `msg` :string : （可选项）输入框的内容，若不传则返回输入框的值
	 */
	value(params:fillInput_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `index` :number : （可选项）插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:fillInput_insertValue_Params):void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:fillInput_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取当前光标所在位置`
	 * ========params==========
	 *
	 * `id` :number : 输入框id
	 */
	getSelectedRange(params:fillInput_getSelectedRange_Params, callback?: (ret:JSON) => void):void

}
interface fillInput_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）自动填充密码或者验证码*/ 
	passwordOrCode?:any,

	/**（可选项）支持显示最大行数，文本内容超过此行数时，上下滚动显示。是否支持换行，传大于1的数时表示支持，**注意：取值大于1（多行显示时），不触发 search 事件回调***/ 
	maxRows?:number,

	/**（可选项）输入框允许输入的最大字符串长度*/ 
	maxStringLength?:number,

	/**（可选项）打开时是否弹出键盘*/ 
	autoFocus?:boolean,

	/**（可选项）输入框的占位提示文本*/ 
	placeholder?:string,

	/**（可选项）输入框获取焦点时，弹出的键盘类型；*/ 
	keyboardType?:string,

	/**（可选项）文本对齐方式*/ 
	alignment?:string,

	/**输入文本是否上下居中*/ 
	isCenterVertical:boolean,

	/**(可选项) 判断输入框输入的是密码还是文字*/ 
	inputType?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface fillInput_resetPosition_Params {
	/**需要设置的输入框id*/ 
	id:number,

	/**（可选项）模块的位置*/ 
	position?:JSON,

}

interface fillInput_value_Params {
	/**输入框id*/ 
	id:number,

	/**（可选项）输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface fillInput_insertValue_Params {
	/**输入框id*/ 
	id:number,

	/**（可选项）插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface fillInput_addEventListener_Params {
	/**输入框id*/ 
	id:number,

	/**监听的事件类型*/ 
	name:string,

}

interface fillInput_getSelectedRange_Params {
	/**输入框id*/ 
	id:number,

}

interface UIListBadge {
	/**
	 * `打开 UIListBadge 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，**android 平台暂不支持，且默认false**
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListBadge_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListBadge 模块*/ 
	show():void

	/** 隐藏 UIListBadge 模块*/ 
	hide():void

	/**
	 * `设置列表的纵坐标和高度`
	 * ========params==========
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 */
	setAttr(params:UIListBadge_setAttr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListBadge_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListBadge_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListBadge_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListBadge_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListBadge_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListBadge_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListBadge_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListBadge_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `style` :JSON : 下拉刷新的样式配置
	 */
	setRefreshHeader(params:UIListBadge_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListBadge_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

}
interface UIListBadge_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，**android 平台暂不支持，且默认false***/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListBadge_setAttr_Params {
	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

}

interface UIListBadge_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListBadge_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListBadge_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListBadge_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListBadge_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListBadge_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListBadge_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListBadge_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListBadge_setRefreshHeader_Params {
	/**下拉刷新的样式配置*/ 
	style:JSON,

}

interface UIListBadge_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIBarChart {
	/**
	 * `打开柱状图视图`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `yAxis` :JSON : 柱状图的y轴信息
	 *
	 * `data` :Array : 柱状图关键结点的数据
	 *
	 * `text` :JSON : （可选项）X、Y轴说明文字配置
	 *
	 * `styles` :any : （可选项）模块视图内元素样式设置
	 *
	 * `showData` :boolean : （可选项）点击柱状图，是否显示该条目数据
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIBarChart_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重新加载数据`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 *
	 * `type` :string : 更新数据的方式
	 *
	 * `data` :Array : 要更新的数据
	 */
	reloadData(params:UIBarChart_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭柱状图`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	close(params:UIBarChart_close_Params):void

	/**
	 * `隐藏柱状图视图`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	hide(params:UIBarChart_hide_Params):void

	/**
	 * `显示已隐藏的柱状图视图`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 */
	show(params:UIBarChart_show_Params):void

	/**
	 * `滚动到指定索引的条目，`
	 * ========params==========
	 *
	 * `id` :number : 模块的 id，用于区分模块的多个实例
	 *
	 * `index` :number : （可选项）指定的条目的索引，不可大于总条目数减去每屏显示个数，从0开始
	 *
	 * `animation` :boolean : （可选项）滚动时是否带有动画效果
	 */
	scrollTo(params:UIBarChart_scrollTo_Params):void

}
interface UIBarChart_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**柱状图的y轴信息*/ 
	yAxis:JSON,

	/**柱状图关键结点的数据*/ 
	data:Array,

	/**（可选项）X、Y轴说明文字配置*/ 
	text?:JSON,

	/**（可选项）模块视图内元素样式设置*/ 
	styles?:any,

	/**（可选项）点击柱状图，是否显示该条目数据*/ 
	showData?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIBarChart_reloadData_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

	/**更新数据的方式*/ 
	type:string,

	/**要更新的数据*/ 
	data:Array,

}

interface UIBarChart_close_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIBarChart_hide_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIBarChart_show_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

}

interface UIBarChart_scrollTo_Params {
	/**模块的 id，用于区分模块的多个实例*/ 
	id:number,

	/**（可选项）指定的条目的索引，不可大于总条目数减去每屏显示个数，从0开始*/ 
	index?:number,

	/**（可选项）滚动时是否带有动画效果*/ 
	animation?:boolean,

}

interface imageDragSort {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `imgArray` :Array : 所有图片路径组成的数组,图片路径是本地路径,支持fs://、widget://
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动
	 */
	open(params:imageDragSort_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `再次添加图片`
	 * ========params==========
	 *
	 * `imgArray` :Array : 所有图片路径组成的数组,图片路径是本地路径,支持fs://、widget://(所有图片的数量不要超过30张)
	 */
	addImage(params:imageDragSort_addImage_Params, callback?: (ret:JSON) => void):void

	/** 开始编辑*/ 
	startEdit():void

	/** 关闭*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/** 取消编辑状态*/ 
	cancleEditState(callback?: (ret:JSON) => void):void

}
interface imageDragSort_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**所有图片路径组成的数组,图片路径是本地路径,支持fs://、widget://*/ 
	imgArray:Array,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上，不跟随窗口上下滚动*/ 
	fixed?:boolean,

}

interface imageDragSort_addImage_Params {
	/**所有图片路径组成的数组,图片路径是本地路径,支持fs://、widget://(所有图片的数量不要超过30张)*/ 
	imgArray:Array,

}

interface hikvision {
	/** 打开实时监控*/ 
	open():void

	/** 二维码扫描*/ 
	qrCode():void

	/** 开始播放实时监控画面*/ 
	start():void

	/** 暂停播放实时监控画面*/ 
	pause():void

	/** 关闭实时监控*/ 
	close():void

	/** 显示实时监控界面*/ 
	show():void

	/** 隐藏实时监控界面*/ 
	hide():void

	/** 停止播放实时监控画面*/ 
	stop():void

}
interface UILinkedPicker {
}
interface chatBox {
}
interface UIListContactsCheck {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `styles` :JSON : （可选项）模块头部的样式
	 *
	 * `backgroundColor` :string : （可选项）模块背景色
	 *
	 * `bounces` :boolean : （可选项）是否弹动
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIListContactsCheck_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :JSON : 列表数据源
	 */
	reloadData(params:UIListContactsCheck_reloadData_Params):void

}
interface UIListContactsCheck_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）模块头部的样式*/ 
	styles?:JSON,

	/**（可选项）模块背景色*/ 
	backgroundColor?:string,

	/**（可选项）是否弹动*/ 
	bounces?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIListContactsCheck_reloadData_Params {
	/**列表数据源*/ 
	contacts:JSON,

}

interface UIActionProgress {
	/**
	 * `弹出进度条展示区域`
	 * ========params==========
	 *
	 * `maskBg` :string : （可选项）遮罩层配置，若不传则无遮罩层；支持rgb、rgba、#，如rgba(0,0,0,0.4)
	 *
	 * `styles` :JSON : （可选项）弹出进度条样式配置
	 *
	 * `data` :JSON : 进度条区域的数据配置
	 */
	open(params:UIActionProgress_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置数据`
	 * ========params==========
	 *
	 * `data` :JSON : 进度条区域的数据配置
	 */
	setData(params:UIActionProgress_setData_Params):void

	/** 关闭模块*/ 
	close():void

	/** 隐藏模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的模块*/ 
	show():void

	/** 获取当前进度条的值*/ 
	getValue():void

}
interface UIActionProgress_open_Params {
	/**（可选项）遮罩层配置，若不传则无遮罩层；支持rgb、rgba、#，如rgba(0,0,0,0.4)*/ 
	maskBg?:string,

	/**（可选项）弹出进度条样式配置*/ 
	styles?:JSON,

	/**进度条区域的数据配置*/ 
	data:JSON,

}

interface UIActionProgress_setData_Params {
	/**进度条区域的数据配置*/ 
	data:JSON,

}

interface gridSlide {
	/**
	 * `打开九宫格菜单`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `background` :string : 页面背景色(如：#ff00ff)
	 *
	 * `rows` :number : （可选项）九宫格需要展示的行数。
	 *
	 * `cols` :number : （可选项）九宫格需要展示的列数。
	 *
	 * `isShowDot` :boolean : （可选项）是否显示底部dot圆点按钮
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `data` :Array : （必填项）模块九宫格按钮图标和名称
	 *
	 * `defaultIcon` :string : （可选项）设置icon图标不存在是的默认图片(支持fs:// widget://)。
	 */
	openMenu(params:gridSlide_openMenu_Params, callback?: (ret:JSON) => void):void

	/** 隐藏菜单*/ 
	hideMenu(callback?: (ret:JSON) => void):void

	/** 显示菜单*/ 
	showMenu():void

	/** 关闭菜单*/ 
	closeMenu(callback?: (ret:JSON) => void):void

}
interface gridSlide_openMenu_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**页面背景色(如：#ff00ff)*/ 
	background:string,

	/**（可选项）九宫格需要展示的行数。*/ 
	rows?:number,

	/**（可选项）九宫格需要展示的列数。*/ 
	cols?:number,

	/**（可选项）是否显示底部dot圆点按钮*/ 
	isShowDot?:boolean,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（必填项）模块九宫格按钮图标和名称*/ 
	data:Array,

	/**（可选项）设置icon图标不存在是的默认图片(支持fs:// widget://)。*/ 
	defaultIcon?:string,

}

interface UIPickerView {
	/**
	 * `打开选择器模块`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；（仅ios支持）
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 *
	 * `checked` :Array : 默认当前选中数据的 ID 组成的数组，如：['001','001','001',]
	 *
	 * `datas` :Array : 模块数据源，可以是 `json` 文件的路径，也可以把数据源直接传给模块
	 *
	 * `cyclic` :boolean : （可选项）是否可循环滑动
	 */
	open(params:UIPickerView_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更改当前模块的数据源`
	 * ========params==========
	 *
	 * `datas` :Array : 模块数据源，可以是 `json` 文件的路径，也可以把数据源直接传给模块
	 */
	changeData(params:UIPickerView_changeData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭模块（从内存里清除）`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	close(params:UIPickerView_close_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示已隐藏的模块`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	show(params:UIPickerView_show_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏模块`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	hide(params:UIPickerView_hide_Params, callback?: (ret:JSON) => void):void

	/** 获取当前选中项的数据*/ 
	getChecked():void

	/**
	 * `设置选中项`
	 * ========params==========
	 *
	 * `checked` :Array : 设置选中项的 ID 组成的数组，如：['001','001','001']
	 */
	setChecked(params:UIPickerView_setChecked_Params, callback?: (ret:JSON) => void):void

}
interface UIPickerView_open_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；（仅ios支持）*/ 
	mask?:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

	/**默认当前选中数据的 ID 组成的数组，如：['001','001','001',]*/ 
	checked:Array,

	/**模块数据源，可以是 `json` 文件的路径，也可以把数据源直接传给模块*/ 
	datas:Array,

	/**（可选项）是否可循环滑动*/ 
	cyclic?:boolean,

}

interface UIPickerView_changeData_Params {
	/**模块数据源，可以是 `json` 文件的路径，也可以把数据源直接传给模块*/ 
	datas:Array,

}

interface UIPickerView_close_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIPickerView_show_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIPickerView_hide_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIPickerView_setChecked_Params {
	/**设置选中项的 ID 组成的数组，如：['001','001','001']*/ 
	checked:Array,

}

interface guaidWindow {
}
interface UIActionDialog {
	/**
	 * `打开日期选择器`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；
	 *
	 * `selected` :string : 默认当前选中日期，如：2019-5-28
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 */
	datePicker(params:UIActionDialog_datePicker_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开支付选择器`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 */
	goPay(params:UIActionDialog_goPay_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开支付选择器`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `datas` :Array : 选择项数据源
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；
	 *
	 * `selected` :string : 默认当前选中项的下标
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 */
	pay(params:UIActionDialog_pay_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开支付选择器`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `datas` :Array : 选择项数据源
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 */
	payBy(params:UIActionDialog_payBy_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开支付选择器`
	 * ========params==========
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式配置
	 *
	 * `datas` :Array : 选择项数据源
	 *
	 * `mask` :string : （可选项）上部遮罩层配置，支持rgb、rgba、#；
	 *
	 * `index` :string : 默认当前选中项的下标
	 *
	 * `animation` :boolean : （可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）
	 */
	payFor(params:UIActionDialog_payFor_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示已隐藏的模块 **仅支持ios**`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	show(params:UIActionDialog_show_Params):void

	/**
	 * `隐藏对话框 **仅支持ios**`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	hide(params:UIActionDialog_hide_Params):void

	/**
	 * `关闭模块（从内存里清除）`
	 * ========params==========
	 *
	 * `animation` :boolean : （可选项）是否带动画效果（300毫秒）
	 */
	close(params:UIActionDialog_close_Params):void

}
interface UIActionDialog_datePicker_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；*/ 
	mask?:string,

	/**默认当前选中日期，如：2019-5-28*/ 
	selected:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_goPay_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；*/ 
	mask?:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_pay_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**选择项数据源*/ 
	datas:Array,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；*/ 
	mask?:string,

	/**默认当前选中项的下标*/ 
	selected:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_payBy_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**选择项数据源*/ 
	datas:Array,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；*/ 
	mask?:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_payFor_Params {
	/**（可选项）模块各部分的样式配置*/ 
	styles?:JSON,

	/**选择项数据源*/ 
	datas:Array,

	/**（可选项）上部遮罩层配置，支持rgb、rgba、#；*/ 
	mask?:string,

	/**默认当前选中项的下标*/ 
	index:string,

	/**（可选项）打开/关闭（显示/隐藏）时是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_show_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_hide_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIActionDialog_close_Params {
	/**（可选项）是否带动画效果（300毫秒）*/ 
	animation?:boolean,

}

interface UIPersonalCenter {
	/**
	 * `打开个人中心`
	 * ========params==========
	 *
	 * `y ` :number : （可选项）个人中心视图上边距屏幕位置
	 *
	 * `h ` :number : （可选项）视图的高，不可小于230
	 *
	 * `data` :JSON : 模块数据配置
	 *
	 * `styles` :JSON : 模块样式配置
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIPersonalCenter_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新个人中心显示数据`
	 * ========params==========
	 *
	 * `data` :JSON : 模块数据配置
	 */
	updateValue(params:UIPersonalCenter_updateValue_Params):void

	/** 关闭个人中心*/ 
	close():void

	/** 获取选中按钮*/ 
	getSelect():void

	/**
	 * `设置选中按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）底部菜单按钮选中项的索引
	 */
	setSelect(params:UIPersonalCenter_setSelect_Params):void

	/** 显示个人中心*/ 
	show():void

	/** 隐藏个人中心*/ 
	hide():void

}
interface UIPersonalCenter_open_Params {
	/**（可选项）个人中心视图上边距屏幕位置*/ 
	y ?:number,

	/**（可选项）视图的高，不可小于230*/ 
	h ?:number,

	/**模块数据配置*/ 
	data:JSON,

	/**模块样式配置*/ 
	styles:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UIPersonalCenter_updateValue_Params {
	/**模块数据配置*/ 
	data:JSON,

}

interface UIPersonalCenter_setSelect_Params {
	/**（可选项）底部菜单按钮选中项的索引*/ 
	index?:number,

}

interface UIChatBox {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/**
	 * `弹出表情、附加功能面板`
	 * ========params==========
	 *
	 * `target` :string : 操作的面板类型，取值范围如下：
	 */
	popupBoard(params:UIChatBox_popupBoard_Params):void

	/** 收起表情、附加功能面板*/ 
	closeBoard():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatBox_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatBox_insertValue_Params):void

	/**
	 * `事件监听`
	 * ========params==========
	 *
	 * `target` :string : 事件的目标对象
	 *
	 * `name` :string : 监听的事件类型
	 */
	addEventListener(params:UIChatBox_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重设聊天输入框的占位提示文本`
	 * ========params==========
	 *
	 * `placeholder` :string : （可选项）占位提示文本，若不传或传空则表示清空占位提示内容
	 */
	setPlaceholder(params:UIChatBox_setPlaceholder_Params):void

	/**
	 * `重新加载（刷新）附加功能面板，**open时必须添加附加功能按钮及其面板参数**`
	 * ========params==========
	 *
	 * `extras` :JSON : （可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传
	 */
	reloadExtraBoard(params:UIChatBox_reloadExtraBoard_Params):void

	/** 取消录音*/ 
	cancelRecord():void

	/**
	 * `这只面板的背景颜色`
	 * ========params==========
	 *
	 * `color` :string : 面板背景色
	 */
	setInputBarBgColor(params:UIChatBox_setInputBarBgColor_Params):void

}
interface UIChatBox_popupBoard_Params {
	/**操作的面板类型，取值范围如下：*/ 
	target:string,

}

interface UIChatBox_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatBox_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatBox_addEventListener_Params {
	/**事件的目标对象*/ 
	target:string,

	/**监听的事件类型*/ 
	name:string,

}

interface UIChatBox_setPlaceholder_Params {
	/**（可选项）占位提示文本，若不传或传空则表示清空占位提示内容*/ 
	placeholder?:string,

}

interface UIChatBox_reloadExtraBoard_Params {
	/**（可选项）点击附加功能按钮，打开的附加功能面板的按钮样式，配合 extrasBtn 一起使用，若 extrasBtn 参数内 normalImg 属性不传则此参数可不传*/ 
	extras?:JSON,

}

interface UIChatBox_setInputBarBgColor_Params {
	/**面板背景色*/ 
	color:string,

}

interface UIAddressBook {
	/**
	 * `打开列表`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `bgColor` :JSON : 背景颜色
	 *
	 * `contacts` :Array : 列表数据源
	 *
	 * `checkBox` :boolean : （可选项）是否显示复选框
	 *
	 * `singleCheck` :boolean : （可选项）是否显示为单选
	 *
	 * `bounces` :boolean : （可选项）列表是否有弹动效果
	 *
	 * `coverInfo` :boolean : （可选项）是否遮盖部分信息，该状态时，遮盖姓，以及联系方式第三位以后，最多四位			字符
	 *
	 * `manage` :boolean : （可选项）是否为成员管理，当为成员管理状态时，群主标志位于姓名之后，userType参		数为1时，在更多按钮前显示未进群标志
	 *
	 * `moreIcon` :string : （可选项）更多按钮图标地址，仅支持本地路径（fs://和widget://）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 */
	open(params:UIAddressBook_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭列表模块*/ 
	close():void

	/** 隐藏列表模块，并没有从内存里清除*/ 
	hide():void

	/** 显示已隐藏的列表模块*/ 
	show():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `contacts` :Array : 列表数据源
	 */
	reloadData(params:UIAddressBook_reloadData_Params):void

	/**
	 * `设置选中的联系人`
	 * ========params==========
	 *
	 * `selected` :boolean : （可选项）设置/取消选中状态
	 *
	 * `contacts` :Array : 要设置为选中状态的联系人id组成的数组
	 */
	setSelected(params:UIAddressBook_setSelected_Params):void

	/** 获取所有当前选中的联系人信息，**同步接口***/ 
	getSelectedSync():JSON;

	/**
	 * `设置列表尺寸`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `animation` :boolean : （可选项）改变 rect 时，是否带动画效果，暂仅支持 iOS 平台
	 */
	setRect(params:UIAddressBook_setRect_Params):void

}
interface UIAddressBook_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**背景颜色*/ 
	bgColor:JSON,

	/**列表数据源*/ 
	contacts:Array,

	/**（可选项）是否显示复选框*/ 
	checkBox?:boolean,

	/**（可选项）是否显示为单选*/ 
	singleCheck?:boolean,

	/**（可选项）列表是否有弹动效果*/ 
	bounces?:boolean,

	/**（可选项）是否遮盖部分信息，该状态时，遮盖姓，以及联系方式第三位以后，最多四位			字符*/ 
	coverInfo?:boolean,

	/**（可选项）是否为成员管理，当为成员管理状态时，群主标志位于姓名之后，userType参		数为1时，在更多按钮前显示未进群标志*/ 
	manage?:boolean,

	/**（可选项）更多按钮图标地址，仅支持本地路径（fs://和widget://）*/ 
	moreIcon?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

}

interface UIAddressBook_reloadData_Params {
	/**列表数据源*/ 
	contacts:Array,

}

interface UIAddressBook_setSelected_Params {
	/**（可选项）设置/取消选中状态*/ 
	selected?:boolean,

	/**要设置为选中状态的联系人id组成的数组*/ 
	contacts:Array,

}

interface UIAddressBook_setRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）改变 rect 时，是否带动画效果，暂仅支持 iOS 平台*/ 
	animation?:boolean,

}

interface sphereCloud {
	/**
	 * `打开标签控件`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）样式配置
	 *
	 * `data` :Array<JSON> : 显示的数据元素及样式组成的数组
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:sphereCloud_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新整个数据源`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 *
	 * `data` :Array<JSON> : 显示的数据元素及样式组成的数组
	 */
	update(params:sphereCloud_update_Params):void

	/**
	 * `刷新指定item`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 *
	 * `item` :JSON : 显示的数据元素及样式组成的数组
	 */
	updateItem(params:sphereCloud_updateItem_Params):void

	/**
	 * `关闭模块`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 */
	close(params:sphereCloud_close_Params, callback?: (ret:JSON) => void):void

	/**
	 * `监听模块相关事件`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 *
	 * `target` :string : （可选项）监听的事件类型
	 */
	addEventListener(params:sphereCloud_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏模块视图`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 */
	hide(params:sphereCloud_hide_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示模块视图`
	 * ========params==========
	 *
	 * `id` :string : 控件 ID，open 接口成功打开后返回
	 */
	show(params:sphereCloud_show_Params, callback?: (ret:JSON) => void):void

}
interface sphereCloud_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）样式配置*/ 
	styles?:JSON,

	/**显示的数据元素及样式组成的数组*/ 
	data:Array<JSON>,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface sphereCloud_update_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

	/**显示的数据元素及样式组成的数组*/ 
	data:Array<JSON>,

}

interface sphereCloud_updateItem_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

	/**显示的数据元素及样式组成的数组*/ 
	item:JSON,

}

interface sphereCloud_close_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

}

interface sphereCloud_addEventListener_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

	/**（可选项）监听的事件类型*/ 
	target?:string,

}

interface sphereCloud_hide_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

}

interface sphereCloud_show_Params {
	/**控件 ID，open 接口成功打开后返回*/ 
	id:string,

}

interface UICalendar {
	/**
	 * `打开日历`
	 * ========params==========
	 *
	 * `multipleSelect` :boolean : （可选项）是否可以多选日期
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `specialDate` :Array : （可选项）需要标记的特殊日期数组
	 *
	 * `switchMode` :string : （可选项）月份的切换方式
	 *
	 * `isBefore` :boolean : （可选项）今天以前的日期是否置灰不可选
	 *
	 * `isAfter` :boolean : （可选项）今天以后的日期是否置灰不可选
	 *
	 * `showTodayStyle` :boolean : （可选项）当天日期是否使用特殊格式显示（仅android有效）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UICalendar_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置特殊日期`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 *
	 * `specialDates` :Array : 需要标记的特殊日期数组，格式为：yyyy-MM-dd
	 */
	setSpecialDates(params:UICalendar_setSpecialDates_Params):void

	/**
	 * `取消已设置的特殊日期状态`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 *
	 * `specialDates` :Array : 需要取消的特殊日期组成的数组，格式为：yyyy-MM-dd
	 */
	cancelSpecialDates(params:UICalendar_cancelSpecialDates_Params):void

	/**
	 * `关闭日历`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	close(params:UICalendar_close_Params):void

	/**
	 * `显示日历`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	show(params:UICalendar_show_Params):void

	/**
	 * `隐藏日历`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	hide(params:UICalendar_hide_Params):void

	/**
	 * `显示下个月`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	nextMonth(params:UICalendar_nextMonth_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示上个月`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	prevMonth(params:UICalendar_prevMonth_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示下一年`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	nextYear(params:UICalendar_nextYear_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示上一年`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 */
	prevYear(params:UICalendar_prevYear_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置选中日期（不支持日期多选模式）`
	 * ========params==========
	 *
	 * `id` :number : 日历视图id
	 *
	 * `date` :string : （可选项）选中日期，格式为：yyyy-MM-dd
	 *
	 * `ignoreSelected` :boolean : （可选项）选中日期是否忽略选中日期样式（open -> styles -> date -> selectedColor、selectedBg）
	 */
	setDate(params:UICalendar_setDate_Params, callback?: (ret:JSON) => void):void

	/**
	 * `翻到指定的页`
	 * ========params==========
	 *
	 * `date` :string : 选中日期，格式为：yyyy-MM
	 */
	turnPage(params:UICalendar_turnPage_Params):void

}
interface UICalendar_open_Params {
	/**（可选项）是否可以多选日期*/ 
	multipleSelect?:boolean,

	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）需要标记的特殊日期数组*/ 
	specialDate?:Array,

	/**（可选项）月份的切换方式*/ 
	switchMode?:string,

	/**（可选项）今天以前的日期是否置灰不可选*/ 
	isBefore?:boolean,

	/**（可选项）今天以后的日期是否置灰不可选*/ 
	isAfter?:boolean,

	/**（可选项）当天日期是否使用特殊格式显示（仅android有效）*/ 
	showTodayStyle?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface UICalendar_setSpecialDates_Params {
	/**日历视图id*/ 
	id:number,

	/**需要标记的特殊日期数组，格式为：yyyy-MM-dd*/ 
	specialDates:Array,

}

interface UICalendar_cancelSpecialDates_Params {
	/**日历视图id*/ 
	id:number,

	/**需要取消的特殊日期组成的数组，格式为：yyyy-MM-dd*/ 
	specialDates:Array,

}

interface UICalendar_close_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_show_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_hide_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_nextMonth_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_prevMonth_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_nextYear_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_prevYear_Params {
	/**日历视图id*/ 
	id:number,

}

interface UICalendar_setDate_Params {
	/**日历视图id*/ 
	id:number,

	/**（可选项）选中日期，格式为：yyyy-MM-dd*/ 
	date?:string,

	/**（可选项）选中日期是否忽略选中日期样式（open -> styles -> date -> selectedColor、selectedBg）*/ 
	ignoreSelected?:boolean,

}

interface UICalendar_turnPage_Params {
	/**选中日期，格式为：yyyy-MM*/ 
	date:string,

}

interface UIChatField {
	/** 打开聊天输入框*/ 
	open(callback?: (ret:JSON) => void):void

	/** 设置工具条监听事件*/ 
	setToolbarListener():void

	/**
	 * `更新礼物信息（在群聊情况下选择群成员返回后可使用该方法更新头像及昵称）`
	 * ========params==========
	 *
	 * `avaterPath` :string : （可选项）送礼人的头像(支持 widget:// & fs://)
	 *
	 * `nickText` :string : （可选项）收礼人的昵称
	 */
	updateGiftInfo(params:UIChatField_updateGiftInfo_Params):void

	/** 关闭聊天输入框*/ 
	close():void

	/** 显示聊天输入框*/ 
	show():void

	/** 隐藏聊天输入框*/ 
	hide():void

	/** 弹出键盘*/ 
	popupKeyboard():void

	/** 收起键盘*/ 
	closeKeyboard():void

	/** 收起录音面板*/ 
	hideRecordPanel():void

	/**
	 * `获取或设置聊天输入框的内容`
	 * ========params==========
	 *
	 * `msg` :string : （可选项）聊天输入框的内容，若不传则返回输入框的值
	 */
	value(params:UIChatField_value_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向聊天输入框的指定位置插入内容`
	 * ========params==========
	 *
	 * `index` :number : （可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。**
	 *
	 * `msg` :string : （可选项）要插入的内容
	 */
	insertValue(params:UIChatField_insertValue_Params):void

	/**
	 * `添加输入框相关事件的监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件类型
	 */
	chatBoxListener(params:UIChatField_chatBoxListener_Params, callback?: (ret:JSON) => void):void

	/** 清空输入框文本*/ 
	clearText():void

	/** 重置模块*/ 
	reset():void

	/** 显示礼物面板*/ 
	showGiftPanel():void

	/** 获取当前可见的panel*/ 
	getCurrentVisiblePanel():void

	/** 设置所有按钮可用/不可用*/ 
	setEnableAllBtns():void

}
interface UIChatField_updateGiftInfo_Params {
	/**（可选项）送礼人的头像(支持 widget:// & fs://)*/ 
	avaterPath?:string,

	/**（可选项）收礼人的昵称*/ 
	nickText?:string,

}

interface UIChatField_value_Params {
	/**（可选项）聊天输入框的内容，若不传则返回输入框的值*/ 
	msg?:string,

}

interface UIChatField_insertValue_Params {
	/**（可选项）待插入内容的起始位置。**注意：中文，全角符号均占一个字符长度；索引从0开始，0表示插入到最前面，1表示插入到第一个字符后面，2表示插入到第二个字符后面，以此类推。***/ 
	index?:number,

	/**（可选项）要插入的内容*/ 
	msg?:string,

}

interface UIChatField_chatBoxListener_Params {
	/**监听的事件类型*/ 
	name:string,

}

interface UIListEdit {
	/**
	 * `打开 UIListEdit 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `topData` :JSON : （可选项）列表顶部的数据源
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数**
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListEdit_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListEdit 模块*/ 
	show():void

	/** 隐藏 UIListEdit 模块*/ 
	hide():void

	/** 隐藏顶部分组的内容*/ 
	cancelTopData():void

	/**
	 * `重新设置列表顶部分组数据`
	 * ========params==========
	 *
	 * `topData` :JSON : （可选项）列表顶部的数据源
	 */
	resetTopData(params:UIListEdit_resetTopData_Params):void

	/**
	 * `重新设置列表项向左滑动露出的按钮组（如果有顶部分组，则不包含这一部分）`
	 * ========params==========
	 *
	 * `rightBtns` :Array : （可选项）列表项向左滑动露出的按钮组
	 */
	resetRightBtn(params:UIListEdit_resetRightBtn_Params):void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:UIListEdit_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:UIListEdit_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置侧滑显示出来的按钮`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 *
	 * `btns` :Array : （可选项）列表项侧滑露出的按钮组
	 */
	setSwipeBtns(params:UIListEdit_setSwipeBtns_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:UIListEdit_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:UIListEdit_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListEdit_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListEdit_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:UIListEdit_appendData_Params, callback?: (ret:JSON) => void):void

	/** 获取当前列表的总数据量*/ 
	getCount():void

	/** 设置列表模式*/ 
	setListMode():void

	/** 获取列表模式*/ 
	getListMode():void

	/** 获取选中的项的索引*/ 
	getSelectedIndexs():void

	/**
	 * `设置下拉刷新，**通过 reloadData 收起下拉刷新组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）下拉刷新区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textDown` :string : （可选项）下拉提示文字
	 *
	 * `textUp` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshHeader(params:UIListEdit_setRefreshHeader_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置上拉加载，**通过 appendData 收起上拉加载组件**`
	 * ========params==========
	 *
	 * `loadingImg` :string : 上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）
	 *
	 * `bgColor` :string : （可选项）上拉加载区域的背景色，支持 rgb、rgba、#
	 *
	 * `textColor` :string : （可选项）提示文字颜色，支持 rgb、rgba、#
	 *
	 * `textUp` :string : （可选项）上拉提示文字
	 *
	 * `textDown` :string : （可选项）松开提示文字
	 *
	 * `loadingText` :string : （可选项）提示文字
	 *
	 * `lastUpdateText` :string : （可选项）提示文字
	 *
	 * `showTime` :boolean : （可选项）是否显示刷新时间
	 */
	setRefreshFooter(params:UIListEdit_setRefreshFooter_Params, callback?: (ret:JSON) => void):void

	/**
	 * `重新设置列表位置大小及样式`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 */
	reset(params:UIListEdit_reset_Params):void

	/** 全选*/ 
	allSelected():void

	/** 取消全选全选*/ 
	cancleSelected():void

}
interface UIListEdit_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）列表顶部的数据源*/ 
	topData?:JSON,

	/**（可选项）列表项向左滑动露出的按钮组，**建议：配置列表每项的通用按钮，用此参数；配置某一项的特定按钮，可在 `data` 数组的指定项传入 `rightBtns` 参数***/ 
	rightBtns?:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListEdit_resetTopData_Params {
	/**（可选项）列表顶部的数据源*/ 
	topData?:JSON,

}

interface UIListEdit_resetRightBtn_Params {
	/**（可选项）列表项向左滑动露出的按钮组*/ 
	rightBtns?:Array,

}

interface UIListEdit_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface UIListEdit_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface UIListEdit_setSwipeBtns_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

	/**（可选项）列表项侧滑露出的按钮组*/ 
	btns?:Array,

}

interface UIListEdit_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface UIListEdit_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface UIListEdit_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListEdit_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListEdit_appendData_Params {
	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface UIListEdit_setRefreshHeader_Params {
	/**下拉刷新时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）下拉刷新区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）下拉提示文字*/ 
	textDown?:string,

	/**（可选项）松开提示文字*/ 
	textUp?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListEdit_setRefreshFooter_Params {
	/**上拉加载时显示的小箭头图标的本地路径，要求本地路径（fs://、widget://）*/ 
	loadingImg:string,

	/**（可选项）上拉加载区域的背景色，支持 rgb、rgba、#*/ 
	bgColor?:string,

	/**（可选项）提示文字颜色，支持 rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）上拉提示文字*/ 
	textUp?:string,

	/**（可选项）松开提示文字*/ 
	textDown?:string,

	/**（可选项）提示文字*/ 
	loadingText?:string,

	/**（可选项）提示文字*/ 
	lastUpdateText?:string,

	/**（可选项）是否显示刷新时间*/ 
	showTime?:boolean,

}

interface UIListEdit_reset_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

}

interface ruler {
	/**
	 * `打开尺子`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `rulerCount` :number : （可选项）尺子的总刻度
	 *
	 * `currentValue` :number : （可选项）尺子的当前刻度值
	 */
	openRuler(params:ruler_openRuler_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏尺子`
	 * ========params==========
	 *
	 * `index` :number : （可选项）刻度尺视图序号
	 */
	hideRuler(params:ruler_hideRuler_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示尺子`
	 * ========params==========
	 *
	 * `index` :number : （可选项）刻度尺视图序号
	 */
	showRuler(params:ruler_showRuler_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭尺子`
	 * ========params==========
	 *
	 * `index` :number : （可选项）刻度尺视图序号
	 */
	closeRuler(params:ruler_closeRuler_Params, callback?: (ret:JSON) => void):void

}
interface ruler_openRuler_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**（可选项）尺子的总刻度*/ 
	rulerCount?:number,

	/**（可选项）尺子的当前刻度值*/ 
	currentValue?:number,

}

interface ruler_hideRuler_Params {
	/**（可选项）刻度尺视图序号*/ 
	index?:number,

}

interface ruler_showRuler_Params {
	/**（可选项）刻度尺视图序号*/ 
	index?:number,

}

interface ruler_closeRuler_Params {
	/**（可选项）刻度尺视图序号*/ 
	index?:number,

}

interface keyboardView {
	/**
	 * `设置键盘顶部按钮监听事件`
	 * ========params==========
	 *
	 * `height` :number : （可选项）键盘顶部按钮布局高度。
	 *
	 * `backgroundColor` :string : （可选项）顶部布局背景颜色代码。
	 *
	 * `lineColor` :string : （可选项）顶部横线颜色代码。
	 *
	 * `data` :Array : （必填项）顶部按钮id和图标
	 */
	addKeyboardListener(params:keyboardView_addKeyboardListener_Params, callback?: (ret:JSON) => void):void

	/** 移除键盘顶部按钮监听事件*/ 
	removeKeyboardListener(callback?: (ret:JSON) => void):void

}
interface keyboardView_addKeyboardListener_Params {
	/**（可选项）键盘顶部按钮布局高度。*/ 
	height?:number,

	/**（可选项）顶部布局背景颜色代码。*/ 
	backgroundColor?:string,

	/**（可选项）顶部横线颜色代码。*/ 
	lineColor?:string,

	/**（必填项）顶部按钮id和图标*/ 
	data:Array,

}

interface kLineChart {
	/** 在指定位置创建一个自定义的View，用于绘制K线图，默认打开loading状态*/ 
	createView(callback?: (ret:JSON) => void):void

	/** 添加数据*/ 
	addFooterData():void

	/** 确认数据加载完成，取消loading状态。在addFooterData调用后调用此方法。*/ 
	loadComplete():void

	/** 确认数据加载完成，取消loading状态。在addFooterData调用后调用此方法。*/ 
	loadEnd():void

}
interface graph {
}
interface UIDatePicker {
	/**
	 * `打开选择器`
	 * ========params==========
	 *
	 * `type` :string : 选择器类型
	 *
	 * `date` :string : （可选项）设置当前时间，格式yyyy-MM-dd HH:mm:ss
	 *
	 * `minDate` :string : （可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm:ss
	 *
	 * `maxDate` :string : （可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm:ss
	 *
	 * `title` :string : （可选项）显示在选择器上面的标题；
	 *
	 * `titleStyle` :null : null
	 *
	 * `titleImage` :string : （可选项）显示在选择器上面的标题图片，支持widget://，fs://；与title互斥，只能存在一个
	 *
	 * `rowHeight` :number : （可选项）设置选择器的行高
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `cyclic` :boolean : （可选项）是否可循环滑动
	 *
	 * `hideIndicator` :boolean : （可选项）是否隐藏单位（年月日时分秒）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:UIDatePicker_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭选择器*/ 
	close():void

	/** 隐藏选择器*/ 
	hide():void

	/** 显示已隐藏的选择器*/ 
	show():void

}
interface UIDatePicker_open_Params {
	/**选择器类型*/ 
	type:string,

	/**（可选项）设置当前时间，格式yyyy-MM-dd HH:mm:ss*/ 
	date?:string,

	/**（可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm:ss*/ 
	minDate?:string,

	/**（可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm:ss*/ 
	maxDate?:string,

	/**（可选项）显示在选择器上面的标题；*/ 
	title?:string,

	/**null*/ 
	titleStyle:null,

	/**（可选项）显示在选择器上面的标题图片，支持widget://，fs://；与title互斥，只能存在一个*/ 
	titleImage?:string,

	/**（可选项）设置选择器的行高*/ 
	rowHeight?:number,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）是否可循环滑动*/ 
	cyclic?:boolean,

	/**（可选项）是否隐藏单位（年月日时分秒）*/ 
	hideIndicator?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface customToast {
}
interface goodAd {
	/** 启动页广告*/ 
	launch(callback?: (ret:JSON) => void):void

	/** 广告展示窗*/ 
	dialog():void

}
interface waterBallProgress {
	/**
	 * `打开进度指示器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块位置和大小配置，若不传则取内部字段默认值
	 *
	 * `ball` :JSON : （可选项）中间水球样式配置，若不传则取内部字段默认值
	 *
	 * `annulus` :JSON : （可选项）外部环形样式配置，若不传则不显示外部环形
	 *
	 * `labels` :Array : （可选项）加载指示器上的提示文字配置，若不传则不显示，本参数为一个数组，可配置显示多个提示文字
	 *
	 * `progress` :number : （可选项）当前的进度，取值范围：0-100
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 */
	open(params:waterBallProgress_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭模块*/ 
	close():void

	/** 隐藏已经打开并显示的模块，并未从内存里清除*/ 
	hide():void

	/** 显示已隐藏的模块*/ 
	show():void

	/**
	 * `设置进度值及提示文字`
	 * ========params==========
	 *
	 * `progress` :number : （可选项）设置的值
	 *
	 * `labels` :Array : （可选项）加载指示器上的提示文字更新，若不传则不显示，本参数为一个数组，可配置显示多个提示文字，起顺序与 open 接口内的 labels 一一对应，若为空则保持原值不变
	 */
	setProgress(params:waterBallProgress_setProgress_Params):void

}
interface waterBallProgress_open_Params {
	/**（可选项）模块位置和大小配置，若不传则取内部字段默认值*/ 
	rect?:JSON,

	/**（可选项）中间水球样式配置，若不传则取内部字段默认值*/ 
	ball?:JSON,

	/**（可选项）外部环形样式配置，若不传则不显示外部环形*/ 
	annulus?:JSON,

	/**（可选项）加载指示器上的提示文字配置，若不传则不显示，本参数为一个数组，可配置显示多个提示文字*/ 
	labels?:Array,

	/**（可选项）当前的进度，取值范围：0-100*/ 
	progress?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

}

interface waterBallProgress_setProgress_Params {
	/**（可选项）设置的值*/ 
	progress?:number,

	/**（可选项）加载指示器上的提示文字更新，若不传则不显示，本参数为一个数组，可配置显示多个提示文字，起顺序与 open 接口内的 labels 一一对应，若为空则保持原值不变*/ 
	labels?:Array,

}

interface mwChatView {
	/**
	 * `打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用**
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式。 **注：BubbleImage 为必传项且所指路径不能为空**
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:mwChatView_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/**
	 * `根据开发者自定义的唯一标识（open 接口的 data 参数中自定义的唯一标识）查找列表项对应的数据`
	 * ========params==========
	 *
	 * `key` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key
	 *
	 * `value` :string : 调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value
	 */
	getIndex(params:mwChatView_getIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据列表项的索引获取对应的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）列表项的索引
	 */
	getDataByIndex(params:mwChatView_getDataByIndex_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件**
	 */
	reloadData(params:mwChatView_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引删除某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 */
	deleteItem(params:mwChatView_deleteItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:mwChatView_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据  注:**当index为0时顶部填充数据**`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `animation` :boolean : （可选项）是否展示动画
	 *
	 * `data` :Array<JSON> : 列表的数据源
	 */
	insertItem(params:mwChatView_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `forceScrollToBottom` :boolean : （可选项）true 强制滚动到底部，false，如果列表已经在最底部会继续滚动，如果列表在其他位置则不滚动
	 *
	 * `data` :Array : 列表的数据源，**若不传或传空，仅收起上拉加载组件**
	 */
	appendData(params:mwChatView_appendData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `滚动到对应索引位置`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `y` :number : （可选项）模块的纵坐标
	 *
	 * `h` :number : （可选项）模块的高度
	 *
	 * `marginBottom` :number : （可选项）模块底部间距
	 */
	scrollToIndex(params:mwChatView_scrollToIndex_Params, callback?: (ret:JSON) => void):void

}
interface mwChatView_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，**开发者可以自定义唯一的键值对信息（如：uid: '1001'），供 getIndex 使用***/ 
	data:Array,

	/**（可选项）模块各部分的样式。 **注：BubbleImage 为必传项且所指路径不能为空***/ 
	styles?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface mwChatView_getIndex_Params {
	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 key*/ 
	key:string,

	/**调用 open 接口时，data 参数传入的开发者自定义的唯一标识的 value*/ 
	value:string,

}

interface mwChatView_getDataByIndex_Params {
	/**（可选项）列表项的索引*/ 
	index?:number,

}

interface mwChatView_reloadData_Params {
	/**（可选项）列表的数据源，**若不传或传空，仅收起下拉刷新组件***/ 
	data?:Array,

}

interface mwChatView_deleteItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

}

interface mwChatView_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface mwChatView_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**（可选项）是否展示动画*/ 
	animation?:boolean,

	/**列表的数据源*/ 
	data:Array<JSON>,

}

interface mwChatView_appendData_Params {
	/**（可选项）true 强制滚动到底部，false，如果列表已经在最底部会继续滚动，如果列表在其他位置则不滚动*/ 
	forceScrollToBottom?:boolean,

	/**列表的数据源，**若不传或传空，仅收起上拉加载组件***/ 
	data:Array,

}

interface mwChatView_scrollToIndex_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**（可选项）模块的纵坐标*/ 
	y?:number,

	/**（可选项）模块的高度*/ 
	h?:number,

	/**（可选项）模块底部间距*/ 
	marginBottom?:number,

}

interface coverFlow {
}
interface photoBrowserTouTiaoPlus {
	/**
	 * `打开图文信息模块`
	 * ========params==========
	 *
	 * `hidden` :JSON : （可选项）界面元素的隐藏显示属性配置，默认值见内部字段
	 *
	 * `textStyles` :JSON : （可选项）图片描述样式配置，若不传则描述文字按照1.0.0方式显示
	 */
	open(params:photoBrowserTouTiaoPlus_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置模块数据`
	 * ========params==========
	 *
	 * `images` :Array : 图片路径数组数据，支持 fs://，以及网络路径 http://，https://
	 *
	 * `texts` :Array : （可选项）描述数据
	 *
	 * `publisher` :string : （可选项）发布者按钮图标，位于头部右侧从右数第二个按钮。支持 widget://、fs://、http://、https:// 路径格式的图片。
	 *
	 * `comment` :number : （可选项）评论角标数值，值为 0 时角标无效
	 *
	 * `favorite` :boolean : （可选项）收藏状态，值为 true 时显示 active 指定的图标。
	 */
	setData(params:photoBrowserTouTiaoPlus_setData_Params):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

}
interface photoBrowserTouTiaoPlus_open_Params {
	/**（可选项）界面元素的隐藏显示属性配置，默认值见内部字段*/ 
	hidden?:JSON,

	/**（可选项）图片描述样式配置，若不传则描述文字按照1.0.0方式显示*/ 
	textStyles?:JSON,

}

interface photoBrowserTouTiaoPlus_setData_Params {
	/**图片路径数组数据，支持 fs://，以及网络路径 http://，https://*/ 
	images:Array,

	/**（可选项）描述数据*/ 
	texts?:Array,

	/**（可选项）发布者按钮图标，位于头部右侧从右数第二个按钮。支持 widget://、fs://、http://、https:// 路径格式的图片。*/ 
	publisher?:string,

	/**（可选项）评论角标数值，值为 0 时角标无效*/ 
	comment?:number,

	/**（可选项）收藏状态，值为 true 时显示 active 指定的图标。*/ 
	favorite?:boolean,

}

interface personalCenter {
	/**
	 * `打开个人中心`
	 * ========params==========
	 *
	 * `y ` :number : （可选项）个人中心视图上边距屏幕位置
	 *
	 * `h ` :number : （可选项）视图的高，不可小于220
	 *
	 * `imgPath` :string : 头像图片的路径（如果为网络路径,图片会被缓存到本地），支持http，https，widget，file，fs协议
	 *
	 * `placeholderImg` :string : （可选项）头像占位图片的路径，支持仅widget，file，fs本地协议
	 *
	 * `userName ` :string : （可选项）用户名
	 *
	 * `userNameSize ` :number : （可选项）用户名字体大小
	 *
	 * `userColor` :string : （可选项）用户名和积分字体颜色
	 *
	 * `subTitle ` :string : （可选项）用户名下边的小标题
	 *
	 * `subTitleSize ` :string : （可选项）用户名下边的小标题字体大小
	 *
	 * `subTitleColor` :string : （可选项）用户名下边的小标题字体颜色
	 *
	 * `showLeftBtn` :boolean : （可选项）是否显示左上交修改按钮
	 *
	 * `showRightBtn` :boolean : （可选项）是否显示右上角设置按钮
	 *
	 * `buttonTitle` :JSON : （可选项）顶部两边按钮的标题文字，当 showLeftBtn、showRightBtn 为 true 时本参数有效
	 *
	 * `modButton` :JSON : （可选项）修改按钮参数
	 *
	 * `btnArray` :Array : （可选项）下边按钮的参数信息
	 *
	 * `clearBtn` :boolean : （可选项）是否将个人中心下边按钮清除
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:personalCenter_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `刷新个人中心显示数据`
	 * ========params==========
	 *
	 * `userName ` :string : （可选项）用户名
	 *
	 * `subTile ` :string : (可选项)用户名下的小标题
	 *
	 * `imgPath` :string : (可选项)头像地址，若为不传则不刷新
	 *
	 * `btnArray` :Array : （可选项）下边按钮显示的数据，不传则不刷新
	 */
	updateValue(params:personalCenter_updateValue_Params):void

	/** 关闭个人中心*/ 
	close():void

	/** 设置选中按钮*/ 
	setSelect():void

	/** 显示个人中心*/ 
	show():void

	/** 隐藏个人中心*/ 
	hide():void

}
interface personalCenter_open_Params {
	/**（可选项）个人中心视图上边距屏幕位置*/ 
	y ?:number,

	/**（可选项）视图的高，不可小于220*/ 
	h ?:number,

	/**头像图片的路径（如果为网络路径,图片会被缓存到本地），支持http，https，widget，file，fs协议*/ 
	imgPath:string,

	/**（可选项）头像占位图片的路径，支持仅widget，file，fs本地协议*/ 
	placeholderImg?:string,

	/**（可选项）用户名*/ 
	userName ?:string,

	/**（可选项）用户名字体大小*/ 
	userNameSize ?:number,

	/**（可选项）用户名和积分字体颜色*/ 
	userColor?:string,

	/**（可选项）用户名下边的小标题*/ 
	subTitle ?:string,

	/**（可选项）用户名下边的小标题字体大小*/ 
	subTitleSize ?:string,

	/**（可选项）用户名下边的小标题字体颜色*/ 
	subTitleColor?:string,

	/**（可选项）是否显示左上交修改按钮*/ 
	showLeftBtn?:boolean,

	/**（可选项）是否显示右上角设置按钮*/ 
	showRightBtn?:boolean,

	/**（可选项）顶部两边按钮的标题文字，当 showLeftBtn、showRightBtn 为 true 时本参数有效*/ 
	buttonTitle?:JSON,

	/**（可选项）修改按钮参数*/ 
	modButton?:JSON,

	/**（可选项）下边按钮的参数信息*/ 
	btnArray?:Array,

	/**（可选项）是否将个人中心下边按钮清除*/ 
	clearBtn?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface personalCenter_updateValue_Params {
	/**（可选项）用户名*/ 
	userName ?:string,

	/**(可选项)用户名下的小标题*/ 
	subTile ?:string,

	/**(可选项)头像地址，若为不传则不刷新*/ 
	imgPath?:string,

	/**（可选项）下边按钮显示的数据，不传则不刷新*/ 
	btnArray?:Array,

}

interface UIListGoods {
	/**
	 * `打开 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `data` :Array : 列表的数据源，
	 *
	 * `bounces` :boolean : （可选项）是否开启弹动，android 平台不支持本参数
	 *
	 * `styles` :JSON : （可选项）模块各部分的样式
	 *
	 * `backgroundColor` :string : （可选项）模块的背景色，支持 rgb，rgba，#
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `showScrollBar` :boolean : （可选项）是否显示滚动条
	 */
	open(params:UIListGoods_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭数据列表模块*/ 
	close():void

	/** 显示 UIListView 模块*/ 
	show():void

	/** 隐藏 UIListView 模块*/ 
	hide():void

	/**
	 * `刷新列表数据`
	 * ========params==========
	 *
	 * `data` :Array : （可选项）列表的数据源
	 */
	reloadData(params:UIListGoods_reloadData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引更新某一条列表的数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	updateItem(params:UIListGoods_updateItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据索引向某一条列表插入数据`
	 * ========params==========
	 *
	 * `index` :number : （可选项）数据列表的索引
	 *
	 * `data` :JSON : 列表的数据源
	 */
	insertItem(params:UIListGoods_insertItem_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向列表末端追加数据`
	 * ========params==========
	 *
	 * `data` :Array : 列表的数据源
	 */
	appendData(params:UIListGoods_appendData_Params, callback?: (ret:JSON) => void):void

}
interface UIListGoods_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**列表的数据源，*/ 
	data:Array,

	/**（可选项）是否开启弹动，android 平台不支持本参数*/ 
	bounces?:boolean,

	/**（可选项）模块各部分的样式*/ 
	styles?:JSON,

	/**（可选项）模块的背景色，支持 rgb，rgba，#*/ 
	backgroundColor?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否显示滚动条*/ 
	showScrollBar?:boolean,

}

interface UIListGoods_reloadData_Params {
	/**（可选项）列表的数据源*/ 
	data?:Array,

}

interface UIListGoods_updateItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListGoods_insertItem_Params {
	/**（可选项）数据列表的索引*/ 
	index?:number,

	/**列表的数据源*/ 
	data:JSON,

}

interface UIListGoods_appendData_Params {
	/**列表的数据源*/ 
	data:Array,

}

interface photoBrowserTouTiao {
	/**
	 * `打开图文信息模块`
	 * ========params==========
	 *
	 * `hidden` :JSON : （可选项）界面元素的隐藏显示属性配置，默认值见内部字段
	 *
	 * `textStyles` :JSON : （可选项）图片描述样式配置，若不传则描述文字按照1.0.0方式显示
	 */
	open(params:photoBrowserTouTiao_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置模块数据`
	 * ========params==========
	 *
	 * `images` :Array : 图片路径数组数据，支持 fs://，以及网络路径 http://，https://
	 *
	 * `texts` :Array : （可选项）描述数据
	 *
	 * `publisher` :string : （可选项）发布者按钮图标，位于头部右侧从右数第二个按钮。支持 widget://、fs://、http://、https:// 路径格式的图片。
	 *
	 * `comment` :number : （可选项）评论角标数值，值为 0 时角标无效
	 *
	 * `favorite` :boolean : （可选项）收藏状态，值为 true 时显示 active 指定的图标。
	 */
	setData(params:photoBrowserTouTiao_setData_Params):void

	/** 清除缓存到本地的网络图片，**本接口只清除本模块缓存的数据，若要清除本 app 缓存的所有数据则调用 api.clearCache***/ 
	clearCache():void

	/** 刷新界面接口，本接口仅支持 ios 平台*/ 
	refreshUI():void

}
interface photoBrowserTouTiao_open_Params {
	/**（可选项）界面元素的隐藏显示属性配置，默认值见内部字段*/ 
	hidden?:JSON,

	/**（可选项）图片描述样式配置，若不传则描述文字按照1.0.0方式显示*/ 
	textStyles?:JSON,

}

interface photoBrowserTouTiao_setData_Params {
	/**图片路径数组数据，支持 fs://，以及网络路径 http://，https://*/ 
	images:Array,

	/**（可选项）描述数据*/ 
	texts?:Array,

	/**（可选项）发布者按钮图标，位于头部右侧从右数第二个按钮。支持 widget://、fs://、http://、https:// 路径格式的图片。*/ 
	publisher?:string,

	/**（可选项）评论角标数值，值为 0 时角标无效*/ 
	comment?:number,

	/**（可选项）收藏状态，值为 true 时显示 active 指定的图标。*/ 
	favorite?:boolean,

}

interface cityList {
}
interface moduleScanCode {
	/** 绑定一个服务*/ 
	bindScannerService(callback?: (ret:JSON) => void):void

	/** 注册一个广播用来接收扫描到的条码值*/ 
	registerReceiver(callback?: (ret:JSON) => void):void

	/** 开启手持的红外线扫描头*/ 
	startScanner(callback?: (ret:JSON) => void):void

	/** 关闭手持的红外线扫描头*/ 
	stopScanner(callback?: (ret:JSON) => void):void

}
interface cxgBluetoothSerial {
	/** 获取当前的蓝牙状态*/ 
	isEnabledBluetooth(callback?: (ret:JSON) => void):void

	/** 打开蓝牙*/ 
	openBluetooth(callback?: (ret:JSON) => void):void

	/** 关闭蓝牙*/ 
	closeBluetooth(callback?: (ret:JSON) => void):void

	/** 监听蓝牙的状态变化， 多次返回*/ 
	listenBluetoothStatus(callback?: (ret:JSON) => void):void

	/** 获取已经配对的设备*/ 
	bondedDevices(callback?: (ret:JSON) => void):void

	/** 是否正在搜索设备*/ 
	isScanning(callback?: (ret:JSON) => void):void

	/** 扫描周边设备*/ 
	scan(callback?: (ret:JSON) => void):void

	/** 停止扫描周边设备*/ 
	stopScan(callback?: (ret:JSON) => void):void

	/**
	 * `连接到设备`
	 * ========params==========
	 *
	 * `address` :string : 蓝牙设备的地址
	 */
	connect(params:cxgBluetoothSerial_connect_Params, callback?: (ret:JSON) => void):void

	/** 断开连接*/ 
	disconnect(callback?: (ret:JSON) => void):void

	/** 获取已经连接的设备*/ 
	connectedDevice(callback?: (ret:JSON) => void):void

	/**
	 * `发送数据`
	 * ========params==========
	 *
	 * `data` :string : 需要发送的字符串
	 */
	sendData(params:cxgBluetoothSerial_sendData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `读取数据，多次返回`
	 * ========params==========
	 *
	 * `bufferSize` :number : 数据读取 buffer 的大小, 一般无需设置
	 */
	readData(params:cxgBluetoothSerial_readData_Params, callback?: (ret:JSON) => void):void

}
interface cxgBluetoothSerial_connect_Params {
	/**蓝牙设备的地址*/ 
	address:string,

}

interface cxgBluetoothSerial_sendData_Params {
	/**需要发送的字符串*/ 
	data:string,

}

interface cxgBluetoothSerial_readData_Params {
	/**数据读取 buffer 的大小, 一般无需设置*/ 
	bufferSize:number,

}

interface pingModule {
}
interface magnetometer {
	/** 检查设备是否有磁力感应*/ 
	checkUp(callback?: (ret:JSON) => void):void

	/**
	 * `打开磁力感应`
	 * ========params==========
	 *
	 * `time` :string : （必选）采集信息间隔时间，以秒为单位。
	 */
	startListener(params:magnetometer_startListener_Params, callback?: (ret:JSON) => void):void

	/** 关闭磁力感应*/ 
	stopListener():void

}
interface magnetometer_startListener_Params {
	/**（必选）采集信息间隔时间，以秒为单位。*/ 
	time:string,

}

interface androidTouch {
	/** 开始指纹识别*/ 
	touch():void

	/** 取消指纹识别*/ 
	touchCancel():void

}
interface cvVibrate {
	/** Peek振动*/ 
	Peek(callback?: (ret:JSON) => void):void

	/** Pop振动*/ 
	Pop(callback?: (ret:JSON) => void):void

	/** 三次连续振动*/ 
	Three(callback?: (ret:JSON) => void):void

	/** 长振动*/ 
	Long(callback?: (ret:JSON) => void):void

	/**
	 * `自定义时长振动模式（**仅安卓支持自定义时长振动，IOS是支持自定义时间间歇振动**）`
	 * ========params==========
	 *
	 * `time` :number : （必填项）振动的总时长，到时间后停止振动。
	 */
	Custom(params:cvVibrate_Custom_Params, callback?: (ret:JSON) => void):void

	/** 停止振动*/ 
	stopVibrate(callback?: (ret:JSON) => void):void

	/**
	 * `根据系统SoundID选择播放手机铃声（系统设置静音时不播放铃声）`
	 * ========params==========
	 *
	 * `SoundID` :number : （必填项）系统铃声id。
	 *
	 * `time` :number : （必填项）铃声播放振动的总时长，到时间后停止振动。
	 *
	 * `duration` :number : （选填项）铃声循环间隔，调节循环次数。（time存在时必填项）
	 */
	ringTone(params:cvVibrate_ringTone_Params, callback?: (ret:JSON) => void):void

}
interface cvVibrate_Custom_Params {
	/**（必填项）振动的总时长，到时间后停止振动。*/ 
	time:number,

}

interface cvVibrate_ringTone_Params {
	/**（必填项）系统铃声id。*/ 
	SoundID:number,

	/**（必填项）铃声播放振动的总时长，到时间后停止振动。*/ 
	time:number,

	/**（选填项）铃声循环间隔，调节循环次数。（time存在时必填项）*/ 
	duration:number,

}

interface checkproxys {
}
interface lockScreen {
	/** 打开屏幕自动锁屏*/ 
	autoLockScreen(callback?: (ret:JSON) => void):void

	/** 关闭屏幕自动锁屏*/ 
	unlockScreen(callback?: (ret:JSON) => void):void

}
interface accelerometer {
	/** 检查设备是否有加速度传感器*/ 
	checkUp(callback?: (ret:JSON) => void):void

	/**
	 * `打开加速度传感器`
	 * ========params==========
	 *
	 * `time` :string : （必选）采集信息间隔时间，以秒为单位。
	 */
	startListener(params:accelerometer_startListener_Params, callback?: (ret:JSON) => void):void

	/** 关闭加速度传感器*/ 
	stopListener():void

}
interface accelerometer_startListener_Params {
	/**（必选）采集信息间隔时间，以秒为单位。*/ 
	time:string,

}

interface BoyFatBle {
	/** 初始化蓝牙4.0管理器*/ 
	initBle():void

	/**
	 * `开始搜索蓝牙4.0设备，当扫描到相应设备后,会自动停止扫描,未扫描到设备若要停止、调用 stopScan 接口`
	 * ========params==========
	 *
	 * `deviceName` :string : (必传)需要扫描的设备名字
	 */
	scan(params:BoyFatBle_scan_Params, callback?: (ret:JSON) => void):void

	/** 判断是否正在扫描*/ 
	isScanning():void

	/** 停止搜索附近的蓝牙设备*/ 
	stopScan():void

	/**
	 * `获取临时体重,获取锁定体重,获取impedance值`
	 * ========params==========
	 *
	 * `scanRecord` :string : 广播数据包数据    **注意:iOS无需此参数**
	 *
	 * `type` :number : 取值为1 或者是2,分别代表TYPE_W62 =1  TYPE_59 =2
	 */
	handleScanRecord(params:BoyFatBle_handleScanRecord_Params, callback?: (ret:JSON) => void):void

	/**
	 * `返回获取数据`
	 * ========params==========
	 *
	 * `Weight` :number : 体重单位kg
	 *
	 * `Height` :number : 身高单位cm
	 *
	 * `age` :number : 年龄
	 *
	 * `gender` :number : 0 女 1男
	 *
	 * `impedance` :number : impedance
	 */
	invokeLoease(params:BoyFatBle_invokeLoease_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改称重单位`
	 * ========params==========
	 *
	 * `unit` :number : 称重单位
	 */
	sentCommandToWeightScaleUnit(params:BoyFatBle_sentCommandToWeightScaleUnit_Params, callback?: (ret:JSON) => void):void

}
interface BoyFatBle_scan_Params {
	/**(必传)需要扫描的设备名字*/ 
	deviceName:string,

}

interface BoyFatBle_handleScanRecord_Params {
	/**广播数据包数据    **注意:iOS无需此参数***/ 
	scanRecord:string,

	/**取值为1 或者是2,分别代表TYPE_W62 =1  TYPE_59 =2*/ 
	type:number,

}

interface BoyFatBle_invokeLoease_Params {
	/**体重单位kg*/ 
	Weight:number,

	/**身高单位cm*/ 
	Height:number,

	/**年龄*/ 
	age:number,

	/**0 女 1男*/ 
	gender:number,

	/**impedance*/ 
	impedance:number,

}

interface BoyFatBle_sentCommandToWeightScaleUnit_Params {
	/**称重单位*/ 
	unit:number,

}

interface bluetooth {
}
interface posScanner {
	/** 开始监听扫描枪*/ 
	startListenKeyboardScan():void

	/** 停止扫描枪的监听*/ 
	stopListenKeyboardScan():void

}
interface DVContacts {
	/** 打开系统通讯录界面，选择单个联系人，返回已选的联系人信息*/ 
	openContactsUI():void

	/** 获取所有联系人*/ 
	allContacts():void

	/**
	 * `向通讯录添加一个联系人，所有参数不可同时为空。添加`
	 * ========params==========
	 *
	 * `image` :string : （可选项）联系人头像，支持widget://、fs://
	 *
	 * `lastName` :string : （可选项）联系人姓氏
	 *
	 * `firstName` :string : （可选项）联系人名字
	 *
	 * `middleName` :string : （可选项）联系人中间名
	 *
	 * `prefix` :string : （可选项）联系人名称前缀
	 *
	 * `suffix` :string : （可选项）联系人名称后缀
	 *
	 * `company` :string : （可选项）联系人公司
	 *
	 * `title` :string : （可选项）联系人职位
	 *
	 * `phones` :Array : （可选项）联系人电话组成的数组
	 *
	 * `address` :Array : （可选项）联系人地址
	 *
	 * `url` :Array : （可选项）URL
	 *
	 * `emails` :Array : （可选项）邮箱
	 *
	 * `dates` :Array : （可选项）日期
	 *
	 * `contactRelation` :Array : （可选项）关联人
	 *
	 * `socialProfiles` :Array : （可选项）社交资料
	 *
	 * `instantMessageAddresses` :Array : （可选项）即时信息
	 *
	 * `note` :string : （可选项）联系人备注
	 */
	add(params:DVContacts_add_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从通讯录删除一个或多个联系人`
	 * ========params==========
	 *
	 * `ids` :Array : 联系人的 id 组成的数组，若传入的 id 不存在，则忽略此id
	 */
	delete(params:DVContacts_delete_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 id 更新通讯录的联系人信息`
	 * ========params==========
	 *
	 * `id` :string : 联系人的id
	 *
	 * `image` :string : （可选项）联系人头像，支持widget://、fs://
	 *
	 * `lastName` :string : （可选项）联系人姓氏
	 *
	 * `firstName` :string : （可选项）联系人名字
	 *
	 * `middleName` :string : （可选项）联系人中间名
	 *
	 * `prefix` :string : （可选项）联系人名称前缀
	 *
	 * `suffix` :string : （可选项）联系人名称后缀
	 *
	 * `company` :string : （可选项）联系人公司
	 *
	 * `title` :string : （可选项）联系人职位
	 *
	 * `phones` :Array : （可选项）联系人电话组成的数组
	 *
	 * `address` :Array : （可选项）联系人地址
	 *
	 * `url` :Array : （可选项）URL
	 *
	 * `emails` :Array : （可选项）邮箱
	 *
	 * `dates` :Array : （可选项）日期
	 *
	 * `contactRelation` :Array : （可选项）关联人【仅ios支持】
	 *
	 * `socialProfiles` :Array : （可选项）社交资料【仅ios支持】
	 *
	 * `instantMessageAddresses` :Array : （可选项）即时信息
	 *
	 * `note` :string : （可选项）联系人备注
	 */
	update(params:DVContacts_update_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据联系人 id 查找联系人`
	 * ========params==========
	 *
	 * `ids` :Array : 联系人 id 组成的数组，若 id 不存在则不处理
	 */
	query(params:DVContacts_query_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据关键字从通讯录查找联系人`
	 * ========params==========
	 *
	 * `keyword` :string : 要查询的关键字 **注意：仅搜索 lastName 和 firstName 包含的关键字**
	 */
	queryByKeyword(params:DVContacts_queryByKeyword_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建分组`
	 * ========params==========
	 *
	 * `groupName` :string : 分组名
	 */
	createGroup(params:DVContacts_createGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除分组，只删除分组，不删除其中的联系人`
	 * ========params==========
	 *
	 * `groupId` :any : 分组 id
	 */
	deleteGroup(params:DVContacts_deleteGroup_Params, callback?: (ret:JSON) => void):void

	/** 获取所有分组信息*/ 
	queryGroups(callback?: (ret:JSON) => void):void

	/**
	 * `根据分组 id 查找联系人`
	 * ========params==========
	 *
	 * `groupId` :number : （可选项）要查找的分组 id
	 */
	queryByGroupId(params:DVContacts_queryByGroupId_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 id 移动联系人至指定分组`
	 * ========params==========
	 *
	 * `id` :any : 联系人 id
	 *
	 * `groupId` :any : 联系人的分组 id；若分组不存在则不移动分组
	 */
	move(params:DVContacts_move_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 id 从指定分组删除`
	 * ========params==========
	 *
	 * `id` :any : 联系人 id
	 *
	 * `groupId` :any : 联系人的分组 id；若分组不存在则不从分组删除
	 */
	deleteFromGroup(params:DVContacts_deleteFromGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据页码查找指定数量的联系人`
	 * ========params==========
	 *
	 * `count` :number : （可选项）每页联系人的数量，若不传则返回全部联系人，**不建议不传本参数**
	 *
	 * `pageIndex` :number : （可选项）联系人的分页索引
	 */
	queryByPage(params:DVContacts_queryByPage_Params, callback?: (ret:JSON) => void):void

}
interface DVContacts_add_Params {
	/**（可选项）联系人头像，支持widget://、fs://*/ 
	image?:string,

	/**（可选项）联系人姓氏*/ 
	lastName?:string,

	/**（可选项）联系人名字*/ 
	firstName?:string,

	/**（可选项）联系人中间名*/ 
	middleName?:string,

	/**（可选项）联系人名称前缀*/ 
	prefix?:string,

	/**（可选项）联系人名称后缀*/ 
	suffix?:string,

	/**（可选项）联系人公司*/ 
	company?:string,

	/**（可选项）联系人职位*/ 
	title?:string,

	/**（可选项）联系人电话组成的数组*/ 
	phones?:Array,

	/**（可选项）联系人地址*/ 
	address?:Array,

	/**（可选项）URL*/ 
	url?:Array,

	/**（可选项）邮箱*/ 
	emails?:Array,

	/**（可选项）日期*/ 
	dates?:Array,

	/**（可选项）关联人*/ 
	contactRelation?:Array,

	/**（可选项）社交资料*/ 
	socialProfiles?:Array,

	/**（可选项）即时信息*/ 
	instantMessageAddresses?:Array,

	/**（可选项）联系人备注*/ 
	note?:string,

}

interface DVContacts_delete_Params {
	/**联系人的 id 组成的数组，若传入的 id 不存在，则忽略此id*/ 
	ids:Array,

}

interface DVContacts_update_Params {
	/**联系人的id*/ 
	id:string,

	/**（可选项）联系人头像，支持widget://、fs://*/ 
	image?:string,

	/**（可选项）联系人姓氏*/ 
	lastName?:string,

	/**（可选项）联系人名字*/ 
	firstName?:string,

	/**（可选项）联系人中间名*/ 
	middleName?:string,

	/**（可选项）联系人名称前缀*/ 
	prefix?:string,

	/**（可选项）联系人名称后缀*/ 
	suffix?:string,

	/**（可选项）联系人公司*/ 
	company?:string,

	/**（可选项）联系人职位*/ 
	title?:string,

	/**（可选项）联系人电话组成的数组*/ 
	phones?:Array,

	/**（可选项）联系人地址*/ 
	address?:Array,

	/**（可选项）URL*/ 
	url?:Array,

	/**（可选项）邮箱*/ 
	emails?:Array,

	/**（可选项）日期*/ 
	dates?:Array,

	/**（可选项）关联人【仅ios支持】*/ 
	contactRelation?:Array,

	/**（可选项）社交资料【仅ios支持】*/ 
	socialProfiles?:Array,

	/**（可选项）即时信息*/ 
	instantMessageAddresses?:Array,

	/**（可选项）联系人备注*/ 
	note?:string,

}

interface DVContacts_query_Params {
	/**联系人 id 组成的数组，若 id 不存在则不处理*/ 
	ids:Array,

}

interface DVContacts_queryByKeyword_Params {
	/**要查询的关键字 **注意：仅搜索 lastName 和 firstName 包含的关键字***/ 
	keyword:string,

}

interface DVContacts_createGroup_Params {
	/**分组名*/ 
	groupName:string,

}

interface DVContacts_deleteGroup_Params {
	/**分组 id*/ 
	groupId:any,

}

interface DVContacts_queryByGroupId_Params {
	/**（可选项）要查找的分组 id*/ 
	groupId?:number,

}

interface DVContacts_move_Params {
	/**联系人 id*/ 
	id:any,

	/**联系人的分组 id；若分组不存在则不移动分组*/ 
	groupId:any,

}

interface DVContacts_deleteFromGroup_Params {
	/**联系人 id*/ 
	id:any,

	/**联系人的分组 id；若分组不存在则不从分组删除*/ 
	groupId:any,

}

interface DVContacts_queryByPage_Params {
	/**（可选项）每页联系人的数量，若不传则返回全部联系人，**不建议不传本参数***/ 
	count?:number,

	/**（可选项）联系人的分页索引*/ 
	pageIndex?:number,

}

interface decibel {
	/**
	 * `获取周围环境的分贝值（dB）。`
	 * ========params==========
	 *
	 * `repeat` :boolean : （选填）是否持续地返回分贝值。默认是false,只返回一次结果。
	 *
	 * `interval` :number : （选填）repeat为true才有效，返回的时间间隔，单位毫秒ms
	 */
	getDecibel(params:decibel_getDecibel_Params, callback?: (ret:JSON) => void):void

	/** 停止返回分贝值，只有设repeat为true，才有必要调这个停止。*/ 
	stop():void

}
interface decibel_getDecibel_Params {
	/**（选填）是否持续地返回分贝值。默认是false,只返回一次结果。*/ 
	repeat:boolean,

	/**（选填）repeat为true才有效，返回的时间间隔，单位毫秒ms*/ 
	interval:number,

}

interface rotationVector {
}
interface linearAcceleration {
}
interface gravitySensor {
}
interface seblePrinter {
	/** 搜索小票打印机蓝牙接口*/ 
	init():void

	/**
	 * `连接小票打印机接口`
	 * ========params==========
	 *
	 * `id` :number : 默认值为0，填写init接口返回的id。
	 */
	connect(params:seblePrinter_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以html网络文件形式打印小票`
	 * ========params==========
	 *
	 * `url` :string : 打印小票的html文件的网络地址。
	 *
	 * `alignment` :number : 对齐方式
	 *
	 * `maxWidth` :number : 最大宽度
	 */
	print(params:seblePrinter_print_Params, callback?: (ret:JSON) => void):void

	/** 以html本地文件形式打印小票接口*/ 
	printLocal():void

	/**
	 * `以字符串形式打印小票接口`
	 * ========params==========
	 *
	 * `printString` :Array : 打印小票的数据。里面为字典类型。
	 */
	printString(params:seblePrinter_printString_Params, callback?: (ret:JSON) => void):void

}
interface seblePrinter_connect_Params {
	/**默认值为0，填写init接口返回的id。*/ 
	id:number,

}

interface seblePrinter_print_Params {
	/**打印小票的html文件的网络地址。*/ 
	url:string,

	/**对齐方式*/ 
	alignment:number,

	/**最大宽度*/ 
	maxWidth:number,

}

interface seblePrinter_printString_Params {
	/**打印小票的数据。里面为字典类型。*/ 
	printString:Array,

}

interface lightSensitive {
	/** 开始检测光感*/ 
	start():void

	/** 结束检测光感*/ 
	end():void

}
interface music {
	/**
	 * `扫描 Music 内的音频文件`
	 * ========params==========
	 *
	 * `thumbnail` :JSON : 返回的缩略图(若不存在则返回空)大小，若不传本参数则不返回缩略图，注意返回缩略图会降低读取速度
	 *
	 * `iCloud` :boolean : 是否包含 iCloud 音乐
	 */
	scanMusic(params:music_scanMusic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将音乐库的音频文件拷贝到沙盒`
	 * ========params==========
	 *
	 * `url` :string : 音乐库音频文件路径，如：ipod-library://item/item.mp3?id=4559289265963493915
	 *
	 * `savePath` :string : （可选项）保存路径，要求本地路径（fs://），如：fs://music/m1.mp3
	 */
	copyToSandbox(params:music_copyToSandbox_Params, callback?: (ret:JSON) => void):void

	/** 取消音乐库的音频文件拷贝到沙盒*/ 
	cancelCopyToSandbox(callback?: (ret:JSON) => void):void

	/**
	 * `清空缓存`
	 * ========params==========
	 *
	 * `url` :string : 清空的缓存的目标
	 */
	cleanCach(params:music_cleanCach_Params, callback?: (ret:JSON) => void):void

	/**
	 * `弹出系统自带选择音频页面`
	 * ========params==========
	 *
	 * `multiple` :string : 是否多选
	 *
	 * `showsCloudItems` :string : 是否显示云端资源
	 *
	 * `thumbnail` :JSON : 返回的缩略图(若不存在则返回空)大小，若不传本参数则不返回缩略图，注意返回缩略图会降低读取速度
	 */
	presentMusic(params:music_presentMusic_Params, callback?: (ret:JSON) => void):void

}
interface music_scanMusic_Params {
	/**返回的缩略图(若不存在则返回空)大小，若不传本参数则不返回缩略图，注意返回缩略图会降低读取速度*/ 
	thumbnail:JSON,

	/**是否包含 iCloud 音乐*/ 
	iCloud:boolean,

}

interface music_copyToSandbox_Params {
	/**音乐库音频文件路径，如：ipod-library://item/item.mp3?id=4559289265963493915*/ 
	url:string,

	/**（可选项）保存路径，要求本地路径（fs://），如：fs://music/m1.mp3*/ 
	savePath?:string,

}

interface music_cleanCach_Params {
	/**清空的缓存的目标*/ 
	url:string,

}

interface music_presentMusic_Params {
	/**是否多选*/ 
	multiple:string,

	/**是否显示云端资源*/ 
	showsCloudItems:string,

	/**返回的缩略图(若不存在则返回空)大小，若不传本参数则不返回缩略图，注意返回缩略图会降低读取速度*/ 
	thumbnail:JSON,

}

interface zNFC {
	/**
	 * `读取NDEF格式的NFC标签`
	 * ========params==========
	 *
	 * `style` :JSON : （可选项）模块各部分的样式,不传递本参数则选用模块默认UI布局方案
	 */
	readNDEF(params:zNFC_readNDEF_Params, callback?: (ret:JSON) => void):void

	/**
	 * `写入数据至NDEF格式的NFC标签`
	 * ========params==========
	 *
	 * `style` :JSON : （可选项）模块各部分的样式,不传递本参数则选用模块默认UI布局方案
	 *
	 * `data` :string : （可选项）要写入的数据【 如：'这是一条测试数据'】，不传将写入空字符串（空字符串可以达到清空内容的功能）
	 */
	writeNDEF(params:zNFC_writeNDEF_Params, callback?: (ret:JSON) => void):void

}
interface zNFC_readNDEF_Params {
	/**（可选项）模块各部分的样式,不传递本参数则选用模块默认UI布局方案*/ 
	style?:JSON,

}

interface zNFC_writeNDEF_Params {
	/**（可选项）模块各部分的样式,不传递本参数则选用模块默认UI布局方案*/ 
	style?:JSON,

	/**（可选项）要写入的数据【 如：'这是一条测试数据'】，不传将写入空字符串（空字符串可以达到清空内容的功能）*/ 
	data?:string,

}

interface spputil {
	/** 初始化*/ 
	init(callback?: (ret:JSON) => void):void

	/** 扫描附近蓝牙设备，会自动停止*/ 
	scan():void

	/** 是否在扫描*/ 
	isScanning():void

	/** 停止扫描*/ 
	stopScan():void

	/**
	 * `连接指定外围设备`
	 * ========params==========
	 *
	 * `address` :string : 要连接的外围设备的 MAC地址。
	 */
	connect(params:spputil_connect_Params, callback?: (ret:JSON) => void):void

	/** 断开连接*/ 
	disconnect(callback?: (ret:JSON) => void):void

	/** 设备是否连接*/ 
	isConnected(callback?: (ret:JSON) => void):void

	/**
	 * `发送数据`
	 * ========params==========
	 *
	 * `sendData` :string : 发送的数据。
	 *
	 * `isHex` :boolean : 是否是HEX数据
	 */
	send(params:spputil_send_Params, callback?: (ret:JSON) => void):void

	/**
	 * `接收数据`
	 * ========params==========
	 *
	 * `isHex` :boolean : 是否是HEX数据
	 */
	receive(params:spputil_receive_Params, callback?: (ret:JSON) => void):void

}
interface spputil_connect_Params {
	/**要连接的外围设备的 MAC地址。*/ 
	address:string,

}

interface spputil_send_Params {
	/**发送的数据。*/ 
	sendData:string,

	/**是否是HEX数据*/ 
	isHex:boolean,

}

interface spputil_receive_Params {
	/**是否是HEX数据*/ 
	isHex:boolean,

}

interface callrecords {
}
interface ipAddr {
	/** 获取ip地址*/ 
	getIp():void

}
interface telephoneInfo {
	/** 得到手机通讯所有相关信息*/ 
	getTelephoneInfos(callback?: (ret:JSON) => void):void

	/** 得到设备信息*/ 
	getDeviceInfo(callback?: (ret:JSON) => void):void

	/** 得到SIM卡信息*/ 
	getSimInfo(callback?: (ret:JSON) => void):void

	/** 得到网络信息*/ 
	getNetworkInfo(callback?: (ret:JSON) => void):void

	/** 得到电话相关状态信息*/ 
	getPhoneStateInfo(callback?: (ret:JSON) => void):void

}
interface ipa {
	/** 获取BundleID。*/ 
	getBundleID():void

	/** 获取BundleVersion。(就是APICloud云编译时IOS version code里面填的值。测试版因为不用填，默认是正式版上一次打包保留下的值，正式版打包就正对应你当时填的值。)*/ 
	getBundleVersion():void

	/** 获取app的完整信息。*/ 
	getAppInfo():void

}
interface iAd {
	/** 判断用户是否限制广告追踪*/ 
	adTrackingEnable():void

	/**
	 * `获取 IDFA`
	 * ========params==========
	 *
	 * `lowerCase` :boolean : （可选项）是否返回小写
	 */
	getIDFA(params:iAd_getIDFA_Params, callback?: (ret:JSON) => void):void

}
interface iAd_getIDFA_Params {
	/**（可选项）是否返回小写*/ 
	lowerCase?:boolean,

}

interface androidNfc {
}
interface multiScreen {
	/** 打开模块，在指定的显示器上显示网页和轮播图片*/ 
	open(callback?: (ret:JSON) => void):void

	/**
	 * `在指定的显示器的上显示内容`
	 * ========params==========
	 *
	 * `screenIndex` :number : 屏幕序号，主屏幕序号为0，其他屏幕序号依次递增。 双屏机器的副屏序号一般为1。
	 */
	show(params:multiScreen_show_Params, callback?: (ret:JSON) => void):void

	/**
	 * `隐藏指定显示器上显示的页面`
	 * ========params==========
	 *
	 * `screenIndex` :number : 屏幕序号，主屏幕序号为0，其他屏幕序号依次递增。 双屏机器的副屏序号一般为1。
	 */
	hide(params:multiScreen_hide_Params, callback?: (ret:JSON) => void):void

	/** 获取当前设备所有显示器的信息列表，返回的数组项的序号即为显示器序号。*/ 
	getScreenList(callback?: (ret:JSON) => void):void

	/**
	 * `调用指定显示器上显示的HTML中的js函数`
	 * ========params==========
	 *
	 * `screenIndex` :number : （可选项）屏幕序号，默认值为-1，表示最后一个屏幕，即双屏机器的副屏。
	 *
	 * `name` :string : 要调用的 js 函数名字
	 *
	 * `param` :JSON : （可选项）传递给要调用的 js 函数的参数
	 */
	invokeJsFunc(params:multiScreen_invokeJsFunc_Params, callback?: (ret:JSON) => void):void

}
interface multiScreen_show_Params {
	/**屏幕序号，主屏幕序号为0，其他屏幕序号依次递增。 双屏机器的副屏序号一般为1。*/ 
	screenIndex:number,

}

interface multiScreen_hide_Params {
	/**屏幕序号，主屏幕序号为0，其他屏幕序号依次递增。 双屏机器的副屏序号一般为1。*/ 
	screenIndex:number,

}

interface multiScreen_invokeJsFunc_Params {
	/**（可选项）屏幕序号，默认值为-1，表示最后一个屏幕，即双屏机器的副屏。*/ 
	screenIndex?:number,

	/**要调用的 js 函数名字*/ 
	name:string,

	/**（可选项）传递给要调用的 js 函数的参数*/ 
	param?:JSON,

}

interface gyro {
	/** 检查设备是否有陀螺仪*/ 
	checkUp(callback?: (ret:JSON) => void):void

	/**
	 * `打开重力感应`
	 * ========params==========
	 *
	 * `time` :string : （必选）采集信息间隔时间，以秒为单位。
	 */
	startListener(params:gyro_startListener_Params, callback?: (ret:JSON) => void):void

	/** 关闭重力感应*/ 
	stopListener():void

}
interface gyro_startListener_Params {
	/**（必选）采集信息间隔时间，以秒为单位。*/ 
	time:string,

}

interface socketServerClient {
	/**
	 * `开启服务`
	 * ========params==========
	 *
	 * `charset` :string : (可选)编码格式
	 *
	 * `port` :number : 端口号
	 *
	 * `heart` :JSON : 心跳设置
	 *
	 * `send` :JSON : (可选)发送包设置
	 *
	 * `receive` :JSON : (可选)接收包设置
	 *
	 * `single` :boolean : 以单例模式打开服务
	 */
	startServer(params:socketServerClient_startServer_Params, callback?: (ret:JSON) => void):void

	/** 停止服务*/ 
	stopServer():void

	/**
	 * `发送消息`
	 * ========params==========
	 *
	 * `id` :number : 客户端id
	 *
	 * `data` :string : 发送消息的数据
	 *
	 * `single` :boolean : 单例模式下操作
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	sendMessage(params:socketServerClient_sendMessage_Params):void

	/**
	 * `获取接收ip、端口号`
	 * ========params==========
	 *
	 * `single` :boolean : 单例模式下操作
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getAddress(params:socketServerClient_getAddress_Params):void

	/**
	 * `开启文件服务，返回链接地址，可通过返回地址下载文件`
	 * ========params==========
	 *
	 * `filePath` :string : 文件目录 支持fs目录以及绝对路径
	 *
	 * `port` :number : （可选）端口号
	 *
	 * `single` :boolean : 以单例模式开启服务
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	startHttpFileServer(params:socketServerClient_startHttpFileServer_Params):void

	/**
	 * `停止文件服务，关闭后不可通过http下载此设备文件`
	 * ========params==========
	 *
	 * `single` :boolean : 单例模式下操作
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	stopHttpFileServer(params:socketServerClient_stopHttpFileServer_Params):void

}
interface socketServerClient_startServer_Params {
	/**(可选)编码格式*/ 
	charset?:string,

	/**端口号*/ 
	port:number,

	/**心跳设置*/ 
	heart:JSON,

	/**(可选)发送包设置*/ 
	send?:JSON,

	/**(可选)接收包设置*/ 
	receive?:JSON,

	/**以单例模式打开服务*/ 
	single:boolean,

}

interface socketServerClient_sendMessage_Params {
	/**客户端id*/ 
	id:number,

	/**发送消息的数据*/ 
	data:string,

	/**单例模式下操作*/ 
	single:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface socketServerClient_getAddress_Params {
	/**单例模式下操作*/ 
	single:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface socketServerClient_startHttpFileServer_Params {
	/**文件目录 支持fs目录以及绝对路径*/ 
	filePath:string,

	/**（可选）端口号*/ 
	port?:number,

	/**以单例模式开启服务*/ 
	single:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface socketServerClient_stopHttpFileServer_Params {
	/**单例模式下操作*/ 
	single:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface accelerometerSensor {
}
interface simInfoImp {
	/**   获取当前手机号码*/ 
	getPhoneNumber():void

}
interface vibrate {
	/** Peek振动*/ 
	vibratePeek():void

	/** Pop振动*/ 
	vibratePop():void

	/** 三次连续振动*/ 
	vibrateThree():void

	/**
	 * `自定义时长振动模式`
	 * ========params==========
	 *
	 * `time` :number : （必填项）振动的总时长，到时间后停止振动。
	 */
	vibrateCustom(params:vibrate_vibrateCustom_Params, callback?: (ret:JSON) => void):void

	/** 停止振动*/ 
	stopVibrate():void

}
interface vibrate_vibrateCustom_Params {
	/**（必填项）振动的总时长，到时间后停止振动。*/ 
	time:number,

}

interface moduleElectronicScale {
	/** 开启通讯秤连接*/ 
	openSerialPort(callback?: (ret:JSON) => void):void

	/** 开启和通信秤通信*/ 
	startCommunication():void

	/** 获取计重商品的重量值*/ 
	getValues(callback?: (ret:JSON) => void):void

}
interface simpleBle {
	/** ios系统需要调用此方法初始化，android则不需要*/ 
	init():void

	/** 判断当前设备是否支持蓝牙功能*/ 
	isSupport():void

	/** 打开蓝牙*/ 
	open():void

	/** 关闭蓝牙*/ 
	close():void

	/** 判断蓝牙开关状态*/ 
	isOpen():void

	/** 打开蓝牙设置界面*/ 
	openBleSetting():void

	/** 蓝牙开关状态监听 **此接口只需要调用一次，后面状态改变回调会调用***/ 
	setStateListener():void

}
interface calendarMemo {
	/** 判断是否有访问提醒事项的权限*/ 
	remindersAuth(callback?: (ret:JSON) => void):void

}
interface easyNFC {
	/** 检测设备是否支持NFC*/ 
	isSupported():void

	/** 开始读NFC标签，等待NFC标签靠近手机，靠近手机后自动开始读取，读取信息完成后异步返回结果*/ 
	startRead(callback?: (ret:JSON) => void):void

	/**
	 * `开始写NFC标签，等待NFC标签靠近手机，靠近手机后自动开始写入，写入数据完成后异步返回结果`
	 * ========params==========
	 *
	 * `text` :string : 要写入NFC标签的文本，如“你好，NFC！”
	 */
	startWrite(params:easyNFC_startWrite_Params, callback?: (ret:JSON) => void):void

	/** 停止所有读写操作。调用该方法后，由startRead和startWrite初始的读写都将被停止，不再等待NFC标签靠近手机*/ 
	stop():void

}
interface easyNFC_startWrite_Params {
	/**要写入NFC标签的文本，如“你好，NFC！”*/ 
	text:string,

}

interface contact {
}
interface mobileNFC {
	/** 当前设备是否支持 NFC 功能*/ 
	available():void

	/** 添加识别结果的监听*/ 
	addEventListener():void

	/**
	 * `开始识别`
	 * ========params==========
	 *
	 * `title` :string : （可选项）验证弹框的提示语
	 *
	 * `multiple` :boolean : （可选项）是否支持多次自动识别
	 */
	begin(params:mobileNFC_begin_Params):void

	/** 停止识别*/ 
	invalidate():void

}
interface mobileNFC_begin_Params {
	/**（可选项）验证弹框的提示语*/ 
	title?:string,

	/**（可选项）是否支持多次自动识别*/ 
	multiple?:boolean,

}

interface sunmiT1Printer {
	/** 开启打印服务*/ 
	startService(callback?: (ret:JSON) => void):void

	/** 初始化打印机*/ 
	printerInit(callback?: (ret:JSON) => void):void

	/** 打印机自检*/ 
	printerSelfChecking(callback?: (ret:JSON) => void):void

	/**
	 * `设置打印数据并打印`
	 * ========params==========
	 *
	 * `data` :JSON : （必填项）打印数据
	 */
	printData(params:sunmiT1Printer_printData_Params, callback?: (ret:JSON) => void):void

	/** 走纸*/ 
	lineWrap(callback?: (ret:JSON) => void):void

	/** 停止打印服务*/ 
	stopService(callback?: (ret:JSON) => void):void

	/** 打开钱箱*/ 
	openMoney(callback?: (ret:JSON) => void):void

	/** 切纸*/ 
	cutPaper(callback?: (ret:JSON) => void):void

	/** 打开钱箱次数*/ 
	openMoneyCount(callback?: (ret:JSON) => void):void

	/** 获取USB设备信息*/ 
	openUSB(callback?: (ret:JSON) => void):void

	/** 获取品牌名*/ 
	openBrand(callback?: (ret:JSON) => void):void

	/** 注册广播(监听硬件拔插)*/ 
	openFilter(callback?: (ret:JSON) => void):void

	/** 解除广播*/ 
	closeFilter(callback?: (ret:JSON) => void):void

	/** 获取USB类型(支持同步和异步返回)*/ 
	Usb(callback?: (ret:JSON) => void):void

}
interface sunmiT1Printer_printData_Params {
	/**（必填项）打印数据*/ 
	data:JSON,

}

interface touchID {
	/** 当前设备是否支持指纹识别功能*/ 
	isValid():void

	/** 取消认证*/ 
	cancelVerify():void

	/** 弹出验证界面，验证用户指纹(android无UI界面)*/ 
	verify(callback?: (ret:JSON) => void):void

}
interface fvvSerialPort {
	/** 获取设备列表 - 异步*/ 
	getAllDeviceList():void

	/** 获取设备列表 - 同步*/ 
	getAllDeviceListSync():void

	/** 获取所有设备路径 - 异步*/ 
	getAllDevicePath():void

	/** 获取设备路径 - 同步*/ 
	getAllDevicePathSync():void

	/** 设置串口波特率，可不设置，默认9600*/ 
	setBaudRate():void

	/** 设置串口停止位，可不设置*/ 
	setStopBits():void

	/** 设置串口数据位，可不设置*/ 
	setDataBits():void

	/** 设置串口校验，可不设置*/ 
	setParity():void

	/** 设置串口流控，可不设置*/ 
	setFlowCon():void

	/** 打开串口*/ 
	open():void

	/** 关闭串口*/ 
	close():void

	/** 获取串口打开状态*/ 
	isOpen():void

	/** 发送消息*/ 
	send():void

	/** 设置接收消息类型*/ 
	setReceiveType():void

	/** 设置发送消息类型*/ 
	setSendType():void

}
interface cilicoScan {
	/** 扫码得到结果*/ 
	scan(callback?: (ret:JSON) => void):void

}
interface ble2 {
	/** 蓝牙是否可用，建议使用蓝牙其他功能前检查蓝牙可用性*/ 
	isBleEnable():void

	/** 打开蓝牙，当isBleEnable回调false时，可调用该接口打开蓝牙*/ 
	openBle():void

	/** 扫描附近蓝牙设备，扫描到相应蓝牙设备才可以进行connect等操作*/ 
	startScanBle(callback?: (ret:JSON) => void):void

	/** 停止扫描蓝牙设备*/ 
	stopScanBle():void

	/**
	 * `连接蓝牙设备，进行读写操作前调用该接口`
	 * ========params==========
	 *
	 * `name` :string : 要连接的蓝牙设备名称，来自startScanBle接口回调中的name参数
	 */
	connect(params:ble2_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `读取蓝牙设备数据`
	 * ========params==========
	 *
	 * `name` :string : 要读取蓝牙设备名称，要与已连接的蓝牙设备名称相同
	 */
	read(params:ble2_read_Params, callback?: (ret:JSON) => void):void

	/** 停止读取数据*/ 
	stopRead():void

	/**
	 * `向蓝牙设备写入数据，调用该接口之前，要先调用过read接口`
	 * ========params==========
	 *
	 * `name` :string : 要写入的蓝牙设备名称，要与已连接的蓝牙设备名称相同
	 *
	 * `write` :string : 要写入的数据
	 */
	write(params:ble2_write_Params):void

}
interface ble2_connect_Params {
	/**要连接的蓝牙设备名称，来自startScanBle接口回调中的name参数*/ 
	name:string,

}

interface ble2_read_Params {
	/**要读取蓝牙设备名称，要与已连接的蓝牙设备名称相同*/ 
	name:string,

}

interface ble2_write_Params {
	/**要写入的蓝牙设备名称，要与已连接的蓝牙设备名称相同*/ 
	name:string,

	/**要写入的数据*/ 
	write:string,

}

interface bleToken {
	/** 扫描蓝牙设备*/ 
	scan():void

	/**
	 * `连接蓝牙设备`
	 * ========params==========
	 *
	 * `deviceName` :string : 要连接的蓝牙设备名称
	 *
	 * `auth` :string : 要连接的蓝牙设备的授权码，默认为12345678
	 */
	connect(params:bleToken_connect_Params, callback?: (ret:JSON) => void):void

	/** 断开蓝牙设备连接*/ 
	disConnect():void

	/** 枚举应用*/ 
	enumApps():void

	/**
	 * `获取应用，进行以下操作前要先获取到应用`
	 * ========params==========
	 *
	 * `appName` :string : 应用名称
	 */
	getApp(params:bleToken_getApp_Params, callback?: (ret:JSON) => void):void

	/**
	 * `登录`
	 * ========params==========
	 *
	 * `password` :string : 登录密码
	 */
	login(params:bleToken_login_Params, callback?: (ret:JSON) => void):void

	/** 注销登录*/ 
	logout():void

	/** 创建容器，名称根据SDK的随机数接口生成一个32位的随机数（转换成16进制字符串）*/ 
	createContainer():void

	/**
	 * `生成密钥对，RSA加密模式`
	 * ========params==========
	 *
	 * `containerName` :string : 容器名称
	 */
	genKeyPair(params:bleToken_genKeyPair_Params, callback?: (ret:JSON) => void):void

	/** 枚举容器*/ 
	getContainers():void

	/**
	 * `导出公钥`
	 * ========params==========
	 *
	 * `containerName` :string : 容器名称
	 */
	exportPublicKeyBlob(params:bleToken_exportPublicKeyBlob_Params, callback?: (ret:JSON) => void):void

	/**
	 * `签名`
	 * ========params==========
	 *
	 * `containerName` :string : 容器名称
	 *
	 * `data` :string : 要签名的数据
	 */
	signatures(params:bleToken_signatures_Params, callback?: (ret:JSON) => void):void

	/** 获取蓝牙设备信息*/ 
	getDeviceInfo():void

}
interface bleToken_connect_Params {
	/**要连接的蓝牙设备名称*/ 
	deviceName:string,

	/**要连接的蓝牙设备的授权码，默认为12345678*/ 
	auth:string,

}

interface bleToken_getApp_Params {
	/**应用名称*/ 
	appName:string,

}

interface bleToken_login_Params {
	/**登录密码*/ 
	password:string,

}

interface bleToken_genKeyPair_Params {
	/**容器名称*/ 
	containerName:string,

}

interface bleToken_exportPublicKeyBlob_Params {
	/**容器名称*/ 
	containerName:string,

}

interface bleToken_signatures_Params {
	/**容器名称*/ 
	containerName:string,

	/**要签名的数据*/ 
	data:string,

}

interface smsrecords {
}
interface strongApp {
	/** 开启保活机制*/ 
	start(callback?: (ret:JSON) => void):void

}
interface smsListener {
	/** 注册短信监听*/ 
	registerSmsListener():void

	/** 注销短信监听*/ 
	unRegisterSmsListener():void

}
interface gyroscopeSensor {
}
interface appSettings {
	/** 检查 APP 是否开启了通知权限。（iPhone4s上没有允许通知的按钮，所以检测是否打开了通知权限一直是打开状态。）*/ 
	checkNotification():void

	/**
	 * `打开 APP 的设置页面`
	 * ========params==========
	 *
	 * `type` :string : **<span style="color:#FF0000;">由于 iOS7 及以下版本不支持打开 APP 的设置页面，而只能打开系统的设置页面，故此参数用来指定 iOS7 及以下版本打开哪一项系统设置页，默认打开系统通知中心设置页。 iOS8 及以上版本不受此参数影响。</span>**
	 */
	open(params:appSettings_open_Params, callback?: (ret:JSON) => void):void

}
interface appSettings_open_Params {
	/****<span style="color:#FF0000;">由于 iOS7 及以下版本不支持打开 APP 的设置页面，而只能打开系统的设置页面，故此参数用来指定 iOS7 及以下版本打开哪一项系统设置页，默认打开系统通知中心设置页。 iOS8 及以上版本不受此参数影响。</span>***/ 
	type:string,

}

interface broadcast {
	/**
	 * `发送广播`
	 * ========params==========
	 *
	 * `data` :JSON : 要发送的内容
	 *
	 * `target` :string : （可选）要发送给应用的包名
	 */
	send(params:broadcast_send_Params, callback?: (ret:JSON) => void):void

}
interface broadcast_send_Params {
	/**要发送的内容*/ 
	data:JSON,

	/**（可选）要发送给应用的包名*/ 
	target?:string,

}

interface torch {
	/** 打开手机筒*/ 
	openTorch():void

	/** 关闭手机筒*/ 
	closeTorch():void

}
interface altimeter {
	/** 判断当前设备是否支持气压计*/ 
	isSupported():void

	/** 开始获取海拔、气压值*/ 
	startRelativeAltitudeUpdates():void

}
interface sunmiPrinter {
	/** 开启打印服务*/ 
	startService(callback?: (ret:JSON) => void):void

	/** 初始化打印机*/ 
	printerInit(callback?: (ret:JSON) => void):void

	/** 打印机自检*/ 
	printerSelfChecking(callback?: (ret:JSON) => void):void

	/**
	 * `设置打印数据`
	 * ========params==========
	 *
	 * `data` :Array : （必输项）打印数据。
	 */
	printData(params:sunmiPrinter_printData_Params, callback?: (ret:JSON) => void):void

	/** 走纸行数*/ 
	lineWrap(callback?: (ret:JSON) => void):void

	/** 停止打印服务*/ 
	stopService(callback?: (ret:JSON) => void):void

	/** 双屏通信监听*/ 
	DSKernelListener():void

	/** 检查连接*/ 
	checkConnection():void

	/**
	 * `显示图片文件到副屏(多文件或者单文件,描述信息)`
	 * ========params==========
	 *
	 * `message` :string : （可选项）描述信息。
	 *
	 * `data` :Array : （必输项）这个是要显示的图片的本地路径信息。(支持：fs://)。
	 */
	sendDSKernelFile(params:sunmiPrinter_sendDSKernelFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示文字到副屏(标题，内容，二维码)`
	 * ========params==========
	 *
	 * `title` :string : （可选项）标题。
	 *
	 * `content` :string : （可选项）内容。
	 *
	 * `QRCodeImage` :string : （可选项）二维码图片文件路径(支持：fs://)。
	 */
	sendDSKernelText(params:sunmiPrinter_sendDSKernelText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `全屏结算清单（14寸屏）`
	 * ========params==========
	 *
	 * `data` :Array : （必填项）清单内容(具体字段请参考商米接口文档)。
	 */
	sendBalanceList(params:sunmiPrinter_sendBalanceList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `全屏含图片结算清单（14寸屏）`
	 * ========params==========
	 *
	 * `pics` :Array : （必填项）图片内容(支持fs://)。
	 */
	sendPicAndBalanceList(params:sunmiPrinter_sendPicAndBalanceList_Params, callback?: (ret:JSON) => void):void

}
interface sunmiPrinter_printData_Params {
	/**（必输项）打印数据。*/ 
	data:Array,

}

interface sunmiPrinter_sendDSKernelFile_Params {
	/**（可选项）描述信息。*/ 
	message?:string,

	/**（必输项）这个是要显示的图片的本地路径信息。(支持：fs://)。*/ 
	data:Array,

}

interface sunmiPrinter_sendDSKernelText_Params {
	/**（可选项）标题。*/ 
	title?:string,

	/**（可选项）内容。*/ 
	content?:string,

	/**（可选项）二维码图片文件路径(支持：fs://)。*/ 
	QRCodeImage?:string,

}

interface sunmiPrinter_sendBalanceList_Params {
	/**（必填项）清单内容(具体字段请参考商米接口文档)。*/ 
	data:Array,

}

interface sunmiPrinter_sendPicAndBalanceList_Params {
	/**（必填项）图片内容(支持fs://)。*/ 
	pics:Array,

}

interface clipBoard {
}
interface wifiMgr {
	/** 获取当前已连接的wifi的信息，由于ios的安全机制，ios只能获取ssid、bssid和ipAddr。对于Android 9.0及以上的版本，要想能够获取ssid(ssid就是wifi名字)必须进行以下2步操作。第一：必须打开手机的gps，目前手机只能手动打开gps，开发者可用代码打开手机设置中gps开关的界面引导用户打开gps，有关打开gps的功能请参考模块store中的gps模块。第二：在apicloud的"云编译"界面编译时注意给app设置"位置"权限(在"平台"两个字右边的安卓小机器人图片所在的方框内可以设置 位置权限)。Android9.0及以上除了ssid外的其他信息不需要打开gps就能获取。*/ 
	getCurWifiInfo():void

	/** 获取wifi开关当前状态*/ 
	getWifiState():void

	/** 打开wifi开关*/ 
	openWifi():void

	/** 关闭wifi*/ 
	closeWifi():void

	/** 打开手机自带“设置”界面*/ 
	toWifiSettingView():void

	/** 扫描获取附近的wifi列表，开发者可自行定时扫描获取，如间隔1秒扫描一次。*/ 
	scanWifis():void

	/** 获取已配置wifi列表。*/ 
	getConfiguredNetworks():void

	/** 连接指定的wifi。如果要连接的wifi是已配置过的(已保存有密码且密码正确，getConfiguredNetworks方法可获取)，则只需传入ssid，不需传入pwd和capabilities；如果要连接的wifi是没配置过的无密码保护类型的wifi，则只需传入ssid和capabilities，不需传入pwd。*/ 
	connect(callback?: (ret:JSON) => void):void

	/** 断开当前连接的wifi。*/ 
	disConnect():void

	/** 清除指定的wifi网络(清除密码)，要清除的wifi必须是已配置过的(getConfiguredNetworks方法可获取的)。当Android系统版本小于6.0时，该方法可以无条件(无条件是指相对于系统版本大于等于6.0的系统)清除指定的wifi网络(同样是已配置过的wifi);当Android系统版本大于等于6.0时，根据Google在Android6.0上的变动(官方文档说明https://developer.android.com/about/versions/marshmallow/android-6.0-changes.html#behavior-network，如下文)， Android6.0及以上版本不能清除由非本应用创建的wifi连接，即本应用可以调用该方法清除由connect方法创建的wifi连接，由其他应用或用户在系统wifi设置界面手动连接的wifi，调用该方法都不能清除成功。*/ 
	removeNetwork(callback?: (ret:JSON) => void):void

	/** 禁用指定的wifi网络，要禁用的wifi必须是已配置过的(getConfiguredNetworks方法可获取)。*/ 
	disableNetwork(callback?: (ret:JSON) => void):void

	/** 获取指定wifi的密码，手机需要Root且调用该方法后应用请求获取root权限(弹框方式弹出)，用户同意获取root权限后方可获取密码。*/ 
	getWifiPassword(callback?: (ret:JSON) => void):void

	/** 获取当前网络类型，可用于判断当前手机网络是wifi还是手机流量。*/ 
	getConnectionType():void

	/** 监听wifi开关状态。调用该方法立即返回是否监听成功，即立即回调callback(ret)方法，当wifi开关状态变化时会回调onWifiStateChanged(state)方法，开发者需要自己实现onWifiStateChanged(state)方法。该方法需与removeWifiStateListener方法成对出现，在适当的时候移除监听，即有添加就有移除。*/ 
	addWifiStateListener():void

	/** 移除wifi开关状态的监听。调用addWifiStateListener方法后，需在适当的时候移除监听，即有添加就有移除。*/ 
	removeWifiStateListener():void

	/** 监听网络状态。调用该方法立即返回是否监听成功，即立即回调callback(ret)方法，当网络状态变化时会回调onNetChanged(state)方法，开发者需要自己实现onNetChanged(state)方法。该方法需与removeNetChangedListener方法成对出现，在适当的时候移除监听，即有添加就有移除。*/ 
	addNetChangedListener():void

	/** 移除网络状态的监听。调用addNetChangedListener方法后，需在适当的时候移除监听，即有添加就有移除。*/ 
	removeNetChangedListener():void

}
interface ScreenWake {
	/** 唤醒点亮屏幕。*/ 
	addScreenWake():void

}
interface spModule {
}
interface yunnex {
	/**
	 * `调用打印`
	 * ========params==========
	 *
	 * `content` :Array<JSON> : （必选项）按照从上到下打印次序，逐行插入打印数组
	 */
	openPrinter(params:yunnex_openPrinter_Params, callback?: (ret:JSON) => void):void

}
interface yunnex_openPrinter_Params {
	/**（必选项）按照从上到下打印次序，逐行插入打印数组*/ 
	content:Array<JSON>,

}

interface wifiProxy {
	/**
	 * `设置wifi代理`
	 * ========params==========
	 *
	 * `host` :string : （必填）代理服务器ip地址。
	 *
	 * `port` :number : （必填）代理服务器端口。
	 */
	setWifiProxy(params:wifiProxy_setWifiProxy_Params, callback?: (ret:JSON) => void):void

	/** 移除wifi代理设置*/ 
	removeWifiProxy():void

}
interface wifiProxy_setWifiProxy_Params {
	/**（必填）代理服务器ip地址。*/ 
	host:string,

	/**（必填）代理服务器端口。*/ 
	port:number,

}

interface lightSensor {
}
interface gpsState {
}
interface memoryInfo {
	/** 得到android的总内存大小信息*/ 
	getMemoryInfo(callback?: (ret:JSON) => void):void

	/** 得到手机RAM信息*/ 
	getRamInfo(callback?: (ret:JSON) => void):void

	/** 得到手机ROM信息*/ 
	getRomInfo(callback?: (ret:JSON) => void):void

	/** 得到手机SDCard信息*/ 
	getSdCardInfo(callback?: (ret:JSON) => void):void

}
interface contacts {
	/** 打开系统通讯录界面，选择单个联系人，返回已选的联系人信息*/ 
	select(callback?: (ret:JSON) => void):void

	/**
	 * `向通讯录添加一个联系人，所有参数不可同时为空。`
	 * ========params==========
	 *
	 * `groupId` :number : （可选项）分组 id，若不传则表示未分组
	 *
	 * `lastName` :string : （可选项）联系人姓氏
	 *
	 * `firstName` :string : （可选项）联系人名字
	 *
	 * `middleName` :string : （可选项）联系人中间名
	 *
	 * `prefix` :string : （可选项）联系人名称前缀
	 *
	 * `suffix` :string : （可选项）联系人名称后缀
	 *
	 * `phones` :Array : （可选项）联系人电话组成的数组
	 *
	 * `email` :string : （可选项）联系人邮箱
	 *
	 * `company` :string : （可选项）联系人公司
	 *
	 * `title` :string : （可选项）联系人职位
	 *
	 * `address` :JSON : （可选项）联系人地址
	 *
	 * `note` :string : （可选项）联系人备注
	 */
	add(params:contacts_add_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从通讯录删除一个或多个联系人`
	 * ========params==========
	 *
	 * `ids` :Array : 联系人的 id 组成的数组，若传入的 id 不存在，则忽略此id
	 */
	delete(params:contacts_delete_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 id 更新通讯录的联系人信息`
	 * ========params==========
	 *
	 * `id` :number : 联系人 id
	 *
	 * `lastName` :string : （可选项）联系人的姓氏
	 *
	 * `firstName` :string : （可选项）联系人名字
	 *
	 * `middleName` :string : （可选项）联系人中间名
	 *
	 * `prefix` :string : （可选项）联系人名称前缀
	 *
	 * `suffix` :string : （可选项）联系人名称后缀
	 *
	 * `phones` :Array : （可选项）联系人电话组成的数组，**注意：若本参数不为空，则重置已存在的所有电话及其标签**
	 *
	 * `email` :string : （可选项）联系人邮箱
	 *
	 * `company` :string : （可选项）联系人公司
	 *
	 * `title` :string : （可选项）联系人职位
	 *
	 * `address` :JSON : （可选项）联系人地址
	 *
	 * `note` :string : （可选项）联系人备注
	 */
	update(params:contacts_update_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 id 移动联系人至指定分组`
	 * ========params==========
	 *
	 * `id` :number : 联系人 id
	 *
	 * `groupId` :number : 联系人的分组 id；若分组不存在则不移动分组
	 */
	move(params:contacts_move_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据联系人 id 查找联系人`
	 * ========params==========
	 *
	 * `ids` :Array : 联系人 id 组成的数组，若 id 不存在则不处理
	 */
	query(params:contacts_query_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据关键字从通讯录查找联系人`
	 * ========params==========
	 *
	 * `keyword` :string : 要查询的关键字 **注意：仅搜索 lastName 和 firstName 包含的关键字**
	 */
	queryByKeyword(params:contacts_queryByKeyword_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据页码查找指定数量的联系人`
	 * ========params==========
	 *
	 * `count` :number : （可选项）每页联系人的数量，若不传则返回全部联系人，**不建议不传本参数**
	 *
	 * `pageIndex` :number : （可选项）联系人的分页索引
	 *
	 * `isSort` :number : （可选项）是否排序返回
	 */
	queryByPage(params:contacts_queryByPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建分组`
	 * ========params==========
	 *
	 * `groupName` :string : 分组名
	 */
	createGroup(params:contacts_createGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除分组，只删除分组，不删除其中的联系人`
	 * ========params==========
	 *
	 * `groupId` :number : 分组 id
	 */
	deleteGroup(params:contacts_deleteGroup_Params, callback?: (ret:JSON) => void):void

	/** 获取所有分组信息*/ 
	queryGroups(callback?: (ret:JSON) => void):void

	/**
	 * `根据分组 id 查找联系人`
	 * ========params==========
	 *
	 * `groupId` :number : （可选项）要查找的分组 id
	 */
	queryByGroupId(params:contacts_queryByGroupId_Params, callback?: (ret:JSON) => void):void

	/** **注意:该接口仅适用于 iOS9 以上系统，iOS9 以下及 android 系统请使用 queryByPage 接口***/ 
	allContacts(callback?: (ret:JSON) => void):void

}
interface contacts_add_Params {
	/**（可选项）分组 id，若不传则表示未分组*/ 
	groupId?:number,

	/**（可选项）联系人姓氏*/ 
	lastName?:string,

	/**（可选项）联系人名字*/ 
	firstName?:string,

	/**（可选项）联系人中间名*/ 
	middleName?:string,

	/**（可选项）联系人名称前缀*/ 
	prefix?:string,

	/**（可选项）联系人名称后缀*/ 
	suffix?:string,

	/**（可选项）联系人电话组成的数组*/ 
	phones?:Array,

	/**（可选项）联系人邮箱*/ 
	email?:string,

	/**（可选项）联系人公司*/ 
	company?:string,

	/**（可选项）联系人职位*/ 
	title?:string,

	/**（可选项）联系人地址*/ 
	address?:JSON,

	/**（可选项）联系人备注*/ 
	note?:string,

}

interface contacts_delete_Params {
	/**联系人的 id 组成的数组，若传入的 id 不存在，则忽略此id*/ 
	ids:Array,

}

interface contacts_update_Params {
	/**联系人 id*/ 
	id:number,

	/**（可选项）联系人的姓氏*/ 
	lastName?:string,

	/**（可选项）联系人名字*/ 
	firstName?:string,

	/**（可选项）联系人中间名*/ 
	middleName?:string,

	/**（可选项）联系人名称前缀*/ 
	prefix?:string,

	/**（可选项）联系人名称后缀*/ 
	suffix?:string,

	/**（可选项）联系人电话组成的数组，**注意：若本参数不为空，则重置已存在的所有电话及其标签***/ 
	phones?:Array,

	/**（可选项）联系人邮箱*/ 
	email?:string,

	/**（可选项）联系人公司*/ 
	company?:string,

	/**（可选项）联系人职位*/ 
	title?:string,

	/**（可选项）联系人地址*/ 
	address?:JSON,

	/**（可选项）联系人备注*/ 
	note?:string,

}

interface contacts_move_Params {
	/**联系人 id*/ 
	id:number,

	/**联系人的分组 id；若分组不存在则不移动分组*/ 
	groupId:number,

}

interface contacts_query_Params {
	/**联系人 id 组成的数组，若 id 不存在则不处理*/ 
	ids:Array,

}

interface contacts_queryByKeyword_Params {
	/**要查询的关键字 **注意：仅搜索 lastName 和 firstName 包含的关键字***/ 
	keyword:string,

}

interface contacts_queryByPage_Params {
	/**（可选项）每页联系人的数量，若不传则返回全部联系人，**不建议不传本参数***/ 
	count?:number,

	/**（可选项）联系人的分页索引*/ 
	pageIndex?:number,

	/**（可选项）是否排序返回*/ 
	isSort?:number,

}

interface contacts_createGroup_Params {
	/**分组名*/ 
	groupName:string,

}

interface contacts_deleteGroup_Params {
	/**分组 id*/ 
	groupId:number,

}

interface contacts_queryByGroupId_Params {
	/**（可选项）要查找的分组 id*/ 
	groupId?:number,

}

interface nfc {
	/** 判断设备是否支持NFC(iOS请在初始化之前进行验证)*/ 
	readingAvailable(callback?: (ret:JSON) => void):void

	/** 识别结果监听(Android模式设置此参数可以达到整个App内拦截，不会弹出手机类其他应用)*/ 
	addEventListener():void

	/** 移除NFC数据监听*/ 
	removeEventListener():void

	/**
	 * `配置读写标签界面UI元素（不执行本接口则选用模块默认UI布局方案）`
	 * ========params==========
	 *
	 * `isDebug` :boolean : 开启调试模式时，不支持nfc的手机可以打开界面看UI效果。
	 *
	 * `backgroundColor` :string : 页面背景色
	 *
	 * `title` :JSON : 顶部标题样式配置
	 *
	 * `center` :JSON : 页面中间提示内容样式配置
	 */
	initPageConfig(params:nfc_initPageConfig_Params, callback?: (ret:JSON) => void):void

	/**
	 * `写NFC标签文本数据`
	 * ========params==========
	 *
	 * `data` :string : （必填项）要写入NFC的字符串内容。
	 */
	writeText(params:nfc_writeText_Params, callback?: (ret:JSON) => void):void

	/** 读NFC标签文本数据*/ 
	readText(callback?: (ret:JSON) => void):void

	/**
	 * `开始扫描`
	 * ========params==========
	 *
	 * `alertMessage` :string : （可选项）识别时提示信息内容。
	 *
	 * `isOnlyFirst` :boolean : （可选项）是否仅解析一次 (单次:true 多次:false)[设置为true时，请参考监听返回错误代码204对逻辑进行处理]。
	 *
	 * `isParseContent` :boolean : （可选项）是否自动解析结果 (解析:true 不解析:false)。
	 */
	startSession(params:nfc_startSession_Params, callback?: (ret:JSON) => void):void

	/** 结束扫描*/ 
	endSession(callback?: (ret:JSON) => void):void

}
interface nfc_initPageConfig_Params {
	/**开启调试模式时，不支持nfc的手机可以打开界面看UI效果。*/ 
	isDebug:boolean,

	/**页面背景色*/ 
	backgroundColor:string,

	/**顶部标题样式配置*/ 
	title:JSON,

	/**页面中间提示内容样式配置*/ 
	center:JSON,

}

interface nfc_writeText_Params {
	/**（必填项）要写入NFC的字符串内容。*/ 
	data:string,

}

interface nfc_startSession_Params {
	/**（可选项）识别时提示信息内容。*/ 
	alertMessage?:string,

	/**（可选项）是否仅解析一次 (单次:true 多次:false)[设置为true时，请参考监听返回错误代码204对逻辑进行处理]。*/ 
	isOnlyFirst?:boolean,

	/**（可选项）是否自动解析结果 (解析:true 不解析:false)。*/ 
	isParseContent?:boolean,

}

interface mediaScanner {
}
interface ble {
	/** 判断是否有访问蓝牙的权限*/ 
	sysAuth(callback?: (ret:JSON) => void):void

	/** 初始化蓝牙4.0管理器*/ 
	initManager():void

	/**
	 * `开始搜索蓝牙4.0设备，模块内部会不断的扫描更新附近的蓝牙4.0设备信息，可通过 getPeripheral 接口来获取扫描到的设备信息。若要停止扫描则调用 stopScan 接口`
	 * ========params==========
	 *
	 * `serviceUUIDs` :Array : （可选项）要扫描的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组，若不传则扫描附近的所有支持蓝牙4.0的设备
	 *
	 * `clean` :boolean : （可选项）扫描前是否清空已搜索到的记录在本地的外围设备信息
	 */
	scan(params:ble_scan_Params, callback?: (ret:JSON) => void):void

	/** 获取当前扫描到的所有外围设备信息*/ 
	getPeripheral():void

	/**
	 * `获取当前扫描到的所有外围设备的 rssi`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 要获取rssi值的外围设备的 UUID
	 */
	getPeripheralRssi(params:ble_getPeripheralRssi_Params, callback?: (ret:JSON) => void):void

	/** 判断是否正在扫描*/ 
	isScanning():void

	/** 停止搜索附近的蓝牙设备*/ 
	stopScan():void

	/**
	 * `连接指定外围设备。iOS端无超时判断，android端默认有30秒超时判断`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 要连接的外围设备的 UUID
	 */
	connect(params:ble_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `断开与指定外围设备的连接`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 要断开连接的外围设备的 UUID
	 */
	disconnect(params:ble_disconnect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断与指定外围设备是否为连接状态`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定外围设备的 UUID
	 */
	isConnected(params:ble_isConnected_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据 UUID 找到所有匹配的蓝牙外围设备信息**Android 平台暂不支持本接口**`
	 * ========params==========
	 *
	 * `peripheralUUIDs` :string : 指定的蓝牙外围设备的 UUID 组成的数组
	 */
	retrievePeripheral(params:ble_retrievePeripheral_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的服务，找到当前系统处于连接状态的蓝牙中包含这个服务的所有蓝牙外围设备信息**Andaroid 平台暂不支持本接口**`
	 * ========params==========
	 *
	 * `serviceUUIDs` :Array : 指定的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组
	 */
	retrieveConnectedPeripheral(params:ble_retrieveConnectedPeripheral_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 获取该外围设备的所有服务`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 */
	discoverService(params:ble_discoverService_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 获取该外围设备的所有特征（Characteristic）`
	 * ========params==========
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 */
	discoverCharacteristics(params:ble_discoverCharacteristics_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 获取该外围设备的所有描述符（Descriptor）`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 */
	discoverDescriptorsForCharacteristic(params:ble_discoverDescriptorsForCharacteristic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 监听数据回发`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 */
	setNotify(params:ble_setNotify_Params, callback?: (ret:JSON) => void):void

	/** 停止监听数据。调用setNotify接口后开始监听数据，不需要继续监听时调用disconnect断开链接，在iOS 平台上还需要调用此接口来停止监听。*/ 
	stopNotify():void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 读取数据`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 */
	readValueForCharacteristic(params:ble_readValueForCharacteristic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 及其描述符获取数据`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 *
	 * `descriptorUUID` :string : 指定的描述符的 UUID
	 */
	readValueForDescriptor(params:ble_readValueForDescriptor_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 写数据`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 *
	 * `value` :string : 要写入的数据 ，十六进制的字符串
	 *
	 * `writeType` :string : （可选项）写入数据时的类型
	 */
	writeValueForCharacteristic(params:ble_writeValueForCharacteristic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 及其描述符发送数据`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 *
	 * `descriptorUUID` :string : 指定的描述符的 UUID
	 *
	 * `value` :string : 要发送的数据，十六进制的字符串
	 */
	writeValueForDescriptor(params:ble_writeValueForDescriptor_Params, callback?: (ret:JSON) => void):void

	/**
	 * `连接多台外围设备`
	 * ========params==========
	 *
	 * `peripheralUUIDs` :Array : 要连接的外围设备的 UUID 字符串组成的数组
	 */
	connectPeripherals(params:ble_connectPeripherals_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据指定的外围设备 UUID 及其服务 UUID 和特征 UUID 监听数据`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 指定的蓝牙外围设备的 UUID
	 *
	 * `serviceUUID` :string : 指定的服务的 UUID
	 *
	 * `characteristicUUID` :string : 指定的特征的 UUID
	 */
	setSimpleNotify(params:ble_setSimpleNotify_Params, callback?: (ret:JSON) => void):void

	/** 获取模块当前缓存的所监听蓝牙设备的所有数据*/ 
	getAllSimpleNotifyData():void

	/** 清空模块当前缓存的所监听蓝牙设备的所有数据*/ 
	clearAllSimpleNotifyData():void

	/** 清空已搜索到的记录在本地的外围设备信息。建议在没有连接的情况下调用，否则与外围设备相关的一系列接口均会失效*/ 
	clean():void

	/** 打开蓝牙*/ 
	openBluetooth():void

}
interface ble_scan_Params {
	/**（可选项）要扫描的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组，若不传则扫描附近的所有支持蓝牙4.0的设备*/ 
	serviceUUIDs?:Array,

	/**（可选项）扫描前是否清空已搜索到的记录在本地的外围设备信息*/ 
	clean?:boolean,

}

interface ble_getPeripheralRssi_Params {
	/**要获取rssi值的外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_connect_Params {
	/**要连接的外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_disconnect_Params {
	/**要断开连接的外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_isConnected_Params {
	/**指定外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_retrievePeripheral_Params {
	/**指定的蓝牙外围设备的 UUID 组成的数组*/ 
	peripheralUUIDs:string,

}

interface ble_retrieveConnectedPeripheral_Params {
	/**指定的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组*/ 
	serviceUUIDs:Array,

}

interface ble_discoverService_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_discoverCharacteristics_Params {
	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface ble_discoverDescriptorsForCharacteristic_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

}

interface ble_setNotify_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

}

interface ble_readValueForCharacteristic_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

}

interface ble_readValueForDescriptor_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

	/**指定的描述符的 UUID*/ 
	descriptorUUID:string,

}

interface ble_writeValueForCharacteristic_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

	/**要写入的数据 ，十六进制的字符串*/ 
	value:string,

	/**（可选项）写入数据时的类型*/ 
	writeType?:string,

}

interface ble_writeValueForDescriptor_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

	/**指定的描述符的 UUID*/ 
	descriptorUUID:string,

	/**要发送的数据，十六进制的字符串*/ 
	value:string,

}

interface ble_connectPeripherals_Params {
	/**要连接的外围设备的 UUID 字符串组成的数组*/ 
	peripheralUUIDs:Array,

}

interface ble_setSimpleNotify_Params {
	/**指定的蓝牙外围设备的 UUID*/ 
	peripheralUUID:string,

	/**指定的服务的 UUID*/ 
	serviceUUID:string,

	/**指定的特征的 UUID*/ 
	characteristicUUID:string,

}

interface deviceInfo {
	/** 得到系统版本*/ 
	getRelease(callback?: (ret:JSON) => void):void

	/** 得到设备品牌*/ 
	getBrand(callback?: (ret:JSON) => void):void

	/** 得到手机型号*/ 
	getModel(callback?: (ret:JSON) => void):void

	/** 得到设备版本号*/ 
	getId(callback?: (ret:JSON) => void):void

	/** 得到设备显示版本包*/ 
	getDisplay(callback?: (ret:JSON) => void):void

	/** 得到产品名称*/ 
	getProduct(callback?: (ret:JSON) => void):void

	/** 得到设备制造商*/ 
	getManufacturer(callback?: (ret:JSON) => void):void

	/** 得到设备驱动名称*/ 
	getDevice(callback?: (ret:JSON) => void):void

	/** 得到设备硬件名称*/ 
	getHardware(callback?: (ret:JSON) => void):void

	/** 得到设备唯一标识*/ 
	getFingerprint(callback?: (ret:JSON) => void):void

	/** 得到串口序列号*/ 
	getSerial(callback?: (ret:JSON) => void):void

	/** 得到设备版本类型*/ 
	getType(callback?: (ret:JSON) => void):void

	/** 得到设备标签*/ 
	getTags(callback?: (ret:JSON) => void):void

	/** 得到设备主机地址*/ 
	getHost(callback?: (ret:JSON) => void):void

	/** 得到设备用户名*/ 
	getUser(callback?: (ret:JSON) => void):void

	/** 得到固件开发版本代号*/ 
	getCodename(callback?: (ret:JSON) => void):void

	/** 得到源码控制版本号*/ 
	getIncremental(callback?: (ret:JSON) => void):void

	/** 得到设备基板名称*/ 
	getBoard(callback?: (ret:JSON) => void):void

	/** 得到设备引导程序版本号*/ 
	getBootloader(callback?: (ret:JSON) => void):void

	/** 得到Build时间*/ 
	getTime(callback?: (ret:JSON) => void):void

	/** 得到系统的API级别*/ 
	getSdkInt(callback?: (ret:JSON) => void):void

}
interface playText {
	/**
	 * `播放文本`
	 * ========params==========
	 *
	 * `text` :string : 语音播放内容文本。
	 *
	 * `rate` :number : 播放速率
	 */
	play(params:playText_play_Params):void

	/** 继续播放文本*/ 
	continuePlay():void

	/** 停止播放*/ 
	stopPlay():void

	/** 暂停播放文本*/ 
	pausePlay():void

	/** 获取播放状态*/ 
	playState(callback?: (ret:JSON) => void):void

	/**
	 * `监听事件`
	 * ========params==========
	 *
	 * `name` :string : 事件名称。
	 */
	addEventListener(params:playText_addEventListener_Params, callback?: (ret:JSON) => void):void

}
interface playText_play_Params {
	/**语音播放内容文本。*/ 
	text:string,

	/**播放速率*/ 
	rate:number,

}

interface playText_addEventListener_Params {
	/**事件名称。*/ 
	name:string,

}

interface xwScanner {
	/** 打开自带UI扫码功能*/ 
	openScanner(callback?: (ret:JSON) => void):void

}
interface mySettingInfo {
	/**
	 * `启动系统常用的设置页面的接口`
	 * ========params==========
	 *
	 * `index` :number : （可选项）要获取的应用类型，值大于14的只有Android有效
	 */
	settingInt(params:mySettingInfo_settingInt_Params):void

}
interface mySettingInfo_settingInt_Params {
	/**（可选项）要获取的应用类型，值大于14的只有Android有效*/ 
	index?:number,

}

interface vibration {
	/**
	 * `振动`
	 * ========params==========
	 *
	 * `time` :number : 数字的单位是毫秒，表示振动的时间
	 */
	vibrate(params:vibration_vibrate_Params, callback?: (ret:JSON) => void):void

	/**
	 * `连续振动`
	 * ========params==========
	 *
	 * `time` :Array : 数字的单位是毫秒，表示打开或关闭振动器的一系列时间长度
	 *
	 * `times` :number : 重复模式的索引
	 */
	vibrates(params:vibration_vibrates_Params, callback?: (ret:JSON) => void):void

	/** 取消振动*/ 
	cancel():void

}
interface vibration_vibrate_Params {
	/**数字的单位是毫秒，表示振动的时间*/ 
	time:number,

}

interface vibration_vibrates_Params {
	/**数字的单位是毫秒，表示打开或关闭振动器的一系列时间长度*/ 
	time:Array,

	/**重复模式的索引*/ 
	times:number,

}

interface FNSettings {
	/**
	 * `设置屏幕旋转模式`
	 * ========params==========
	 *
	 * `mode` :string : （可选项）屏幕旋转模式
	 */
	setScreenRotationMode(params:FNSettings_setScreenRotationMode_Params):void

	/** 获取屏幕旋转模式*/ 
	getScreenRotationMode():void

	/**
	 * `设置屏幕亮度模式`
	 * ========params==========
	 *
	 * `mode` :string : （可选项）屏幕亮度模式
	 */
	setScreenBrightnessMode(params:FNSettings_setScreenBrightnessMode_Params):void

	/** 获取屏幕亮度模式*/ 
	getScreenBrightnessMode():void

}
interface FNSettings_setScreenRotationMode_Params {
	/**（可选项）屏幕旋转模式*/ 
	mode?:string,

}

interface FNSettings_setScreenBrightnessMode_Params {
	/**（可选项）屏幕亮度模式*/ 
	mode?:string,

}

interface moduleSMSListening {
	/** 获取所有联系人方法。返回json数组数据。*/ 
	getCon():void

	/** 查询历史短信，返回json数组。*/ 
	getMsg():void

	/** 启动短信监听程序，启动后新收到的短信回自动获取并返回。获取短信后自动停止监听，如需要再次监听需要再次调用此方法。如一只为收到短信，则系统会自动回收，无需手动关闭监听程序。备注：由于目前手机具有短信验证码保护功能，可导致无法获取新收到的短信验证码*/ 
	startListening():void

}
interface blePrintHaier {
	/** 初始化蓝牙4.0管理器*/ 
	initManager():void

	/**
	 * `开始搜索蓝牙4.0设备，模块内部会不断的扫描更新附近的蓝牙4.0设备信息，可通过 getPeripheral 接口来获取扫描到的设备信息。若要停止扫描则调用 stopScan 接口`
	 * ========params==========
	 *
	 * `serviceUUIDs` :Array : （可选项）要扫描的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组，若不传则扫描附近的所有支持蓝牙4.0的设备
	 *
	 * `clean` :boolean : （可选项）扫描前是否清空已搜索到的记录在本地的外围设备信息
	 */
	scan(params:blePrintHaier_scan_Params, callback?: (ret:JSON) => void):void

	/** 获取当前扫描到的所有外围设备信息*/ 
	getPeripheral():void

	/** 判断是否正在扫描*/ 
	isScanning():void

	/**
	 * `连接指定外围设备。iOS端无超时判断，android端默认有30秒超时判断`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 要连接的外围设备的 UUID
	 */
	connect(params:blePrintHaier_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `断开与指定外围设备的连接`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 要断开连接的外围设备的 UUID
	 */
	disconnect(params:blePrintHaier_disconnect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断与指定外围设备是否为连接状态`
	 * ========params==========
	 *
	 * `peripheralUUID` :string : 描述：指定外围设备的 UUID。
	 */
	isConnected(params:blePrintHaier_isConnected_Params, callback?: (ret:JSON) => void):void

}
interface blePrintHaier_scan_Params {
	/**（可选项）要扫描的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组，若不传则扫描附近的所有支持蓝牙4.0的设备*/ 
	serviceUUIDs?:Array,

	/**（可选项）扫描前是否清空已搜索到的记录在本地的外围设备信息*/ 
	clean?:boolean,

}

interface blePrintHaier_connect_Params {
	/**要连接的外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface blePrintHaier_disconnect_Params {
	/**要断开连接的外围设备的 UUID*/ 
	peripheralUUID:string,

}

interface blePrintHaier_isConnected_Params {
	/**描述：指定外围设备的 UUID。*/ 
	peripheralUUID:string,

}

interface aIMEI {
	/** 获取IMEI。*/ 
	getIMEI():void

	/** 是否有权限。*/ 
	hasPermission():void

}
interface isSimulator {
	/** 判断当前设备是否是虚拟设备*/ 
	isSimulator():void

}
interface brightness2016 {
	/**
	 * `设置系统屏幕亮度。`
	 * ========params==========
	 *
	 * `brightness` :number : 表示亮度，取值范围：0--255 暗->亮
	 */
	setBrightness(params:brightness2016_setBrightness_Params):void

	/** 获取系统屏幕亮度。*/ 
	getBrightness(callback?: (ret:JSON) => void):void

	/**
	 * `设置当前App屏幕亮度。`
	 * ========params==========
	 *
	 * `brightness` :number : 表示亮度，取值范围：0--255 暗->亮
	 */
	setAppBrightness(params:brightness2016_setAppBrightness_Params):void

}
interface brightness2016_setBrightness_Params {
	/**表示亮度，取值范围：0--255 暗->亮*/ 
	brightness:number,

}

interface brightness2016_setAppBrightness_Params {
	/**表示亮度，取值范围：0--255 暗->亮*/ 
	brightness:number,

}

interface bgnWiFi {
	/**
	 * `添加一个WiFi网络`
	 * ========params==========
	 *
	 * `ssid` :string : （必填项）网络SSID值。
	 *
	 * `password` :string : （可选项）密码。
	 *
	 * `type` :string : （可选项）网络类型值。选项范围【WEP、PSK、EAP】
	 */
	addNetwork(params:bgnWiFi_addNetwork_Params, callback?: (ret:JSON) => void):void

	/**
	 * `连接一个WiFi网络`
	 * ========params==========
	 *
	 * `ssid` :string : （必填项）网络SSID值。
	 */
	connect(params:bgnWiFi_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `断开当前WiFi网络连接`
	 * ========params==========
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	disconnect(params:bgnWiFi_disconnect_Params):void

	/** 返回当前保存的所有wifi网络的密码，**该功需要具有root权限***/ 
	getPassword(callback?: (ret:JSON) => void):void

	/** 获取当前连接wifi网络的信息*/ 
	getWifiInfo(callback?: (ret:JSON) => void):void

	/**
	 * `判断当前wifi是否连接成功的`
	 * ========params==========
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	isConnected(params:bgnWiFi_isConnected_Params):void

	/**
	 * `获取WiFi打开状态`
	 * ========params==========
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	isWifiEnabled(params:bgnWiFi_isWifiEnabled_Params):void

	/**
	 * `删除指定wifi网络`
	 * ========params==========
	 *
	 * `ssid` :string : （必填项）网络SSID值。
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	removeNetwork(params:bgnWiFi_removeNetwork_Params):void

	/**
	 * `设置WiFi状态 enabled为true表示打开WiFi,false表示关闭WiFi`
	 * ========params==========
	 *
	 * `enabled` :boolean : （必填项）true||false。
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	setWifiEnabled(params:bgnWiFi_setWifiEnabled_Params):void

	/**
	 * `开始扫描附近WiFi热点`
	 * ========params==========
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	startScan(params:bgnWiFi_startScan_Params):void

}
interface bgnWiFi_addNetwork_Params {
	/**（必填项）网络SSID值。*/ 
	ssid:string,

	/**（可选项）密码。*/ 
	password?:string,

	/**（可选项）网络类型值。选项范围【WEP、PSK、EAP】*/ 
	type?:string,

}

interface bgnWiFi_connect_Params {
	/**（必填项）网络SSID值。*/ 
	ssid:string,

}

interface bgnWiFi_disconnect_Params {
	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface bgnWiFi_isConnected_Params {
	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface bgnWiFi_isWifiEnabled_Params {
	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface bgnWiFi_removeNetwork_Params {
	/**（必填项）网络SSID值。*/ 
	ssid:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface bgnWiFi_setWifiEnabled_Params {
	/**（必填项）true||false。*/ 
	enabled:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface bgnWiFi_startScan_Params {
	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface cpuInfo {
	/** 得到CPU汇总信息*/ 
	getCpuInfo(callback?: (ret:JSON) => void):void

	/** 得到CPU最大频率（KHZ）*/ 
	getCpuMaxFreq(callback?: (ret:JSON) => void):void

	/** 得到CPU最小频率（KHZ）*/ 
	getMinFreq(callback?: (ret:JSON) => void):void

	/** 得到CPU当前频率（KHZ）*/ 
	getCurrentFreq(callback?: (ret:JSON) => void):void

}
interface shareBySystem {
	/**
	 * `分享文本或链接`
	 * ========params==========
	 *
	 * `text` :string : （必填项）需要分享的文本或链接
	 *
	 * `paths` :string : ： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址
	 *
	 * `filename` :string : ： （可选项）若path地址为远程地址，可通过此参数设置文件的别名，注意：别名并不会更改远程网络文件的文件后缀
	 *
	 * `path` :string : ： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址
	 *
	 * `filename` :string : ： （可选项）若path地址为远程地址，可通过此参数设置文件的别名，注意：别名并不会更改远程网络文件的文件后缀
	 *
	 * `path` :string : ： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址
	 */
	openShareText(params:shareBySystem_openShareText_Params, callback?: (ret:JSON) => void):void

}
interface shareBySystem_openShareText_Params {
	/**（必填项）需要分享的文本或链接*/ 
	text:string,

	/**： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址*/ 
	paths:string,

	/**： （可选项）若path地址为远程地址，可通过此参数设置文件的别名，注意：别名并不会更改远程网络文件的文件后缀*/ 
	filename?:string,

	/**： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址*/ 
	path:string,

	/**： （可选项）若path地址为远程地址，可通过此参数设置文件的别名，注意：别名并不会更改远程网络文件的文件后缀*/ 
	filename?:string,

	/**： （必填项）需要分享的图片,支持widget://,fs://,cache://协议及远程图片地址*/ 
	path:string,

}

interface DVTorch {
	/** 切换闪光灯开关*/ 
	toggle():void

	/** 打开闪光灯*/ 
	open():void

	/** 关闭闪光灯*/ 
	close():void

}
interface gps {
	/** 获取定位服务开关状态。在Android上定位服务分3种，1、同时使用网络和GPS定位；2、仅使用GPS定位；3、仅使用网络定位。在iOS的设置界面上设置定位服务时只有一个开关，即打开和关闭定位服务。所以该接口的返回值需要把iOS和Android两个平台分开处理，请开发者注意。*/ 
	getGpsState():void

	/** 打开系统自带的gps设置界面，用户可在此界面打开或关闭gps*/ 
	openGpsSettingView():void

}
interface screen {
	/** 安卓端禁止截屏、录屏；ios端监听截屏和录屏，回调自行处理。*/ 
	banRecord():void

	/** 安卓端恢复截屏和录屏功能；IOS端移除录屏和截屏监听。*/ 
	close():void

}
interface wwprint {
	/**
	 * `打印默认标签模板。`
	 * ========params==========
	 *
	 * `msg` :string : 按照文档描述传入对应的xml，即可完成默认打印。
	 */
	printDefault(params:wwprint_printDefault_Params, callback?: (ret:JSON) => void):void

	/** 关闭连接。断开与打印机的连接。参数无，回调无。*/ 
	close():void

	/**
	 * `创建一张标签模板。`
	 * ========params==========
	 *
	 * `width` :any : 标签的宽度 数值类型 计算方式：标签的实际宽度（毫米）*8
	 *
	 * `height` :any : 标签的高度 数值类型：计算方式上同
	 *
	 * `angle` :any : 旋转角度。
	 */
	createPrintLabel(params:wwprint_createPrintLabel_Params, callback?: (ret:JSON) => void):void

	/**
	 * `往创建的标签上面添加元素。可以是文字，二维码，条码，线条，图片。`
	 * ========params==========
	 *
	 * `content` :string : 打印内容 类型是String （文字，二维码，条码，图片的base64编码）
	 *
	 * `positionX` :any : 在标签上面的X坐标
	 *
	 * `positionY` :any : 在标签上面的y坐标
	 *
	 * `width` :any : 所占标签的宽度 单位为象素
	 *
	 * `height` :any : 所占标签的高度  单位为象素
	 *
	 * `fountSize` :any : 文字类型时候的字体大小
	 *
	 * `degrees` :any : 元素旋转角度。
	 *
	 * `contentType` :string : 指定内容的类型  详情见补充说明。
	 */
	addPrintLabel(params:wwprint_addPrintLabel_Params, callback?: (ret:JSON) => void):void

	/** 提交一张创建的标签。此方法无参数，回调可以不加。只有在创建完成之后提交才有效，否则会回调模板为创建，如果没有设置回调，将不会有任何返回信息。*/ 
	submitLabel(callback?: (ret:JSON) => void):void

	/** 自定义方法打印。无参数，不需要状态可以不设置回调。只有在设置蓝牙连接对象和自定义模板创建并提交之后才有用。*/ 
	print():void

	/**
	 * `设置蓝牙连接对象。如果不需要返回结果，可以不用设置回调方法。`
	 * ========params==========
	 *
	 * `name` :null : null
	 */
	setBluetoothDevice(params:wwprint_setBluetoothDevice_Params, callback?: (ret:JSON) => void):void

	/** 获取搜索到的蓝牙设备。多个设备以“，”分割。无参数。*/ 
	getBluetoothDeviceList(callback?: (ret:JSON) => void):void

	/** 无参数。主要是清理之前创建的标签模板。如果不调用，则之前创建的标签将会被保存，直到该对象消失。*/ 
	clean(callback?: (ret:JSON) => void):void

}
interface wwprint_printDefault_Params {
	/**按照文档描述传入对应的xml，即可完成默认打印。*/ 
	msg:string,

}

interface wwprint_createPrintLabel_Params {
	/**标签的宽度 数值类型 计算方式：标签的实际宽度（毫米）*8*/ 
	width:any,

	/**标签的高度 数值类型：计算方式上同*/ 
	height:any,

	/**旋转角度。*/ 
	angle:any,

}

interface wwprint_addPrintLabel_Params {
	/**打印内容 类型是String （文字，二维码，条码，图片的base64编码）*/ 
	content:string,

	/**在标签上面的X坐标*/ 
	positionX:any,

	/**在标签上面的y坐标*/ 
	positionY:any,

	/**所占标签的宽度 单位为象素*/ 
	width:any,

	/**所占标签的高度  单位为象素*/ 
	height:any,

	/**文字类型时候的字体大小*/ 
	fountSize:any,

	/**元素旋转角度。*/ 
	degrees:any,

	/**指定内容的类型  详情见补充说明。*/ 
	contentType:string,

}

interface wwprint_setBluetoothDevice_Params {
	/**null*/ 
	name:null,

}

interface wifi {
	/**
	 * `扫描连接wifi`
	 * ========params==========
	 *
	 * `ssid` :string : （可选项）wifi名称，填写此参数将自动连接此wifi
	 *
	 * `password` :string : （可选项）自动连接wifi的密码
	 *
	 * `label` :string : （可选项）自动连接wifi的副标题
	 */
	scanWifi(params:wifi_scanWifi_Params, callback?: (ret:JSON) => void):void

}
interface wifi_scanWifi_Params {
	/**（可选项）wifi名称，填写此参数将自动连接此wifi*/ 
	ssid?:string,

	/**（可选项）自动连接wifi的密码*/ 
	password?:string,

	/**（可选项）自动连接wifi的副标题*/ 
	label?:string,

}

interface sensor {
	/** 得到单个传感器信息*/ 
	getInfo():void

	/** 得到所有安卓手机支持的传感器信息*/ 
	getInfos(callback?: (ret:JSON) => void):void

}
interface phoneInfo {
}
interface statusBar {
	/** 获取当前设备的状态栏高度*/ 
	getStatusBarHeight(callback?: (ret:JSON) => void):void

}
interface smartConfigCheyw {
	/** 得到Ssid、Bssid的值*/ 
	getSsid():void

	/**
	 * `开始配置网络`
	 * ========params==========
	 *
	 * `ssid` :string : ssid的值
	 *
	 * `password` :string : wifi密码
	 *
	 * `Bssid` :string : Bssid的值
	 */
	startConfirm(params:smartConfigCheyw_startConfirm_Params, callback?: (ret:JSON) => void):void

	/**
	 * `配置成功之后发送指令`
	 * ========params==========
	 *
	 * `ip` :string : （可选项）ip地址
	 *
	 * `port` :string : （可选项）端口
	 *
	 * `sendStr` :string : 根据硬件要求传参数,发送的命令。
	 */
	sendCommand(params:smartConfigCheyw_sendCommand_Params, callback?: (ret:JSON) => void):void

}
interface smartConfigCheyw_startConfirm_Params {
	/**ssid的值*/ 
	ssid:string,

	/**wifi密码*/ 
	password:string,

	/**Bssid的值*/ 
	Bssid:string,

}

interface smartConfigCheyw_sendCommand_Params {
	/**（可选项）ip地址*/ 
	ip?:string,

	/**（可选项）端口*/ 
	port?:string,

	/**根据硬件要求传参数,发送的命令。*/ 
	sendStr:string,

}

interface ipAddress {
	/**
	 * `获取ip地址`
	 * ========params==========
	 *
	 * `isNetIp` :boolean : （可选项）是否获取ipv6的地址，(默认false，获取ipv4地址。仅ios有效)
	 */
	getIp(params:ipAddress_getIp_Params, callback?: (ret:JSON) => void):void

}
interface ipAddress_getIp_Params {
	/**（可选项）是否获取ipv6的地址，(默认false，获取ipv4地址。仅ios有效)*/ 
	isNetIp?:boolean,

}

interface simInfo {
}
interface moduleBarcodeScales {
	/**
	 * `初始化条码秤`
	 * ========params==========
	 *
	 * `scalseIp` :null : null
	 *
	 * `port` :string : （必填项）显示数据
	 */
	initBarcodeScales(params:moduleBarcodeScales_initBarcodeScales_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送PLU格式.txt文本`
	 * ========params==========
	 *
	 * `textPath` :string : （必填项）显示数据
	 */
	sendDatas(params:moduleBarcodeScales_sendDatas_Params, callback?: (ret:JSON) => void):void

	/** 断开条码秤连接*/ 
	disconnect(callback?: (ret:JSON) => void):void

}
interface moduleBarcodeScales_initBarcodeScales_Params {
	/**null*/ 
	scalseIp:null,

	/**（必填项）显示数据*/ 
	port:string,

}

interface moduleBarcodeScales_sendDatas_Params {
	/**（必填项）显示数据*/ 
	textPath:string,

}

interface mobileSignal {
	/** 获取手机卡运营商信息、网络信息和信号强度信息*/ 
	getSignal(callback?: (ret:JSON) => void):void

}
interface jpgInfoManager {
	/**
	 * `获取图片信息`
	 * ========params==========
	 *
	 * `imagePath` :string : 图片路径支持fs://,widget://;
	 */
	getImgInfo(params:jpgInfoManager_getImgInfo_Params, callback?: (ret:JSON) => void):void

}
interface jpgInfoManager_getImgInfo_Params {
	/**图片路径支持fs://,widget://;*/ 
	imagePath:string,

}

interface pedometer {
	/**  开始计步*/ 
	startCount():void

	/** 停止计步*/ 
	stopCount():void

	/** 获取当前统计的步数*****/ 
	getSteps():void

	/**
	 * `获取步数`
	 * ========params==========
	 *
	 * `startTime` :string : 开始日期
	 *
	 * `endTime` :string : 结束日期（结束日期和开始日期之间的差值不得超过三天，如果超过三天，按三天来算。）
	 *
	 * `count` :number : （可选项）获取最近数据的数量，默认为0,0代表最多数量.
	 *
	 * `remove` :boolean : （可选项）是否移除人为添加的步行数据
	 */
	getStepCount(params:pedometer_getStepCount_Params, callback?: (ret:JSON) => void):void

}
interface pedometer_getStepCount_Params {
	/**开始日期*/ 
	startTime:string,

	/**结束日期（结束日期和开始日期之间的差值不得超过三天，如果超过三天，按三天来算。）*/ 
	endTime:string,

	/**（可选项）获取最近数据的数量，默认为0,0代表最多数量.*/ 
	count?:number,

	/**（可选项）是否移除人为添加的步行数据*/ 
	remove?:boolean,

}

interface smartPeak {
	/**  检查Service是否运行*/ 
	isServiceRunning():void

	/** 开启扫描服务*/ 
	startScanService():void

	/** 停止扫描服务*/ 
	stopScanService():void

	/** 开始扫描*/ 
	startScan():void

	/** 停止扫描*/ 
	stopScan():void

	/** 注册获取条码数据的广播接收者;*/ 
	registerGetBarCodeDataListener():void

	/** 注销条码获取广播*/ 
	unRegisterGetBarCodeDataListener():void

}
interface orientationSensor {
}
interface hardwareInfo {
	/** 获取设备所有网卡的IP和MAC地址列表*/ 
	getIpMacAddrList(callback?: (ret:JSON) => void):void

	/** 获取当前设备cpu使用率，cpu核心数，cpu最大速度，cpu最小速度，app内存占用大小*/ 
	getPerformanceInfo(callback?: (ret:JSON) => void):void

	/**
	 * `根据传入参数的不同获得的字符串格式响应改变，默认为小写并且没有横线。`
	 * ========params==========
	 *
	 * `lower` :any : 默认GUID为小写，如果传入false则为大写
	 *
	 * `line` :any : 默认GUID中包含横线，如果传入false则无横线
	 */
	generateGuid(params:hardwareInfo_generateGuid_Params, callback?: (ret:JSON) => void):void

	/**
	 * `doPingTest主要是用来检测当前设备和指定的IP或者域名之间是否畅通，类似我们在windows常用的ping命令，异步回调函数可以获得ping的反馈信息。`
	 * ========params==========
	 *
	 * `host` :string : IP地址字符串。
	 */
	doPingTest(params:hardwareInfo_doPingTest_Params, callback?: (ret:JSON) => void):void

	/** clearAppCache可以清空当前app缓存。*/ 
	clearAppCache():void

	/** clearAppData可以清空当前app数据（app会强制退出）。*/ 
	clearAppData():void

}
interface hardwareInfo_generateGuid_Params {
	/**默认GUID为小写，如果传入false则为大写*/ 
	lower:any,

	/**默认GUID中包含横线，如果传入false则无横线*/ 
	line:any,

}

interface hardwareInfo_doPingTest_Params {
	/**IP地址字符串。*/ 
	host:string,

}

interface modulePrinter {
	/** 获取小票机USB动态权限*/ 
	requestPermission(callback?: (ret:JSON) => void):void

	/**
	 * `初始化小票打印机`
	 * ========params==========
	 *
	 * `type` :null : null
	 *
	 * `isinstruction` :null : null
	 *
	 * `isbox` :null : null
	 *
	 * `mPrinterIp` :null : null
	 *
	 * `port` :string : （必填项）显示数据
	 */
	initPrint(params:modulePrinter_initPrint_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打印小票`
	 * ========params==========
	 *
	 * `data` :JSON : （必填项）显示数据
	 */
	printData(params:modulePrinter_printData_Params, callback?: (ret:JSON) => void):void

	/** 使用小票机打开钱箱需要先调用获取权限接口然后初始化再打开钱箱*/ 
	openCashBox(callback?: (ret:JSON) => void):void

}
interface modulePrinter_initPrint_Params {
	/**null*/ 
	type:null,

	/**null*/ 
	isinstruction:null,

	/**null*/ 
	isbox:null,

	/**null*/ 
	mPrinterIp:null,

	/**（必填项）显示数据*/ 
	port:string,

}

interface modulePrinter_printData_Params {
	/**（必填项）显示数据*/ 
	data:JSON,

}

interface proximitySensor {
}
interface compassLeveler {
	/** 打开指南针水平仪页面*/ 
	openCL():void

}
interface openApp {
	/**
	 * `判断当前设备是否安装微信客户端`
	 * ========params==========
	 *
	 * `package` :string : （必填项）Android应用的包名
	 *
	 * `url` :string : （可选项）Android应用对于的下面网页地址
	 */
	openAppMarket(params:openApp_openAppMarket_Params, callback?: (ret:JSON) => void):void

}
interface openApp_openAppMarket_Params {
	/**（必填项）Android应用的包名*/ 
	package:string,

	/**（可选项）Android应用对于的下面网页地址*/ 
	url?:string,

}

interface cameraTool {
}
interface zjPrinter {
}
interface moduleLabelPrinter {
	/** 获取打印机设备权限*/ 
	requestPermission(callback?: (ret:JSON) => void):void

	/** 获取打印机设备信息*/ 
	printerUsb(callback?: (ret:JSON) => void):void

	/** 初始化*/ 
	initPrint(callback?: (ret:JSON) => void):void

	/**
	 * `打印标签`
	 * ========params==========
	 *
	 * `data` :JSON : （必填项）打印数据
	 */
	printerLabel(params:moduleLabelPrinter_printerLabel_Params, callback?: (ret:JSON) => void):void

	/** 断开蓝牙连接*/ 
	disconnect(callback?: (ret:JSON) => void):void

	/** 扫描蓝牙设备*/ 
	ScanBluetooth(callback?: (ret:JSON) => void):void

}
interface moduleLabelPrinter_printerLabel_Params {
	/**（必填项）打印数据*/ 
	data:JSON,

}

interface displayInfo {
	/** 得到逻辑密度*/ 
	getDensity(callback?: (ret:JSON) => void):void

	/** 得到屏幕密度*/ 
	getDensityDpi(callback?: (ret:JSON) => void):void

	/** 得到绝对高度*/ 
	getHeightPixels(callback?: (ret:JSON) => void):void

	/** 得到比例因子*/ 
	getScaledDensity(callback?: (ret:JSON) => void):void

	/** 得到绝对宽度*/ 
	getWidthPixels(callback?: (ret:JSON) => void):void

	/** 得到X尺寸屏幕每英寸的确切物理像素*/ 
	getXdpi(callback?: (ret:JSON) => void):void

	/** 得到Y尺寸屏幕每英寸的确切物理像素*/ 
	getYdpi(callback?: (ret:JSON) => void):void

}
interface sunmiV2Printer {
	/** 开启打印服务*/ 
	startService(callback?: (ret:JSON) => void):void

	/** 停止打印服务*/ 
	stopService(callback?: (ret:JSON) => void):void

	/**
	 * `打印文字`
	 * ========params==========
	 *
	 * `text` :string : 要打印文字
	 *
	 * `size` :any : 字体大小
	 *
	 * `size` :any : 字体大小
	 *
	 * `isBole` :boolean : 粗体
	 *
	 * `isUnderLine` :boolean : 下划线
	 */
	printText(params:sunmiV2Printer_printText_Params, callback?: (ret:JSON) => void):void

	/** 打印数据*/ 
	printData(callback?: (ret:JSON) => void):void

	/**
	 * `走纸`
	 * ========params==========
	 *
	 * `n` :any : 走纸行数
	 */
	lineWrap(params:sunmiV2Printer_lineWrap_Params, callback?: (ret:JSON) => void):void

}
interface sunmiV2Printer_printText_Params {
	/**要打印文字*/ 
	text:string,

	/**字体大小*/ 
	size:any,

	/**字体大小*/ 
	size:any,

	/**粗体*/ 
	isBole:boolean,

	/**下划线*/ 
	isUnderLine:boolean,

}

interface sunmiV2Printer_lineWrap_Params {
	/**走纸行数*/ 
	n:any,

}

interface myAppInfo {
	/**
	 * `读取手机应用基本信息的接口`
	 * ========params==========
	 *
	 * `isSys` :number : （可选项）要获取的应用类型
	 */
	getAppInfo(params:myAppInfo_getAppInfo_Params, callback?: (ret:JSON) => void):void

}
interface myAppInfo_getAppInfo_Params {
	/**（可选项）要获取的应用类型*/ 
	isSys?:number,

}

interface connectWifi {
}
interface vibrateUtil {
	/** 普通短震，ios中为 3D Touch 中 Peek 震动触感*/ 
	shortPeek():void

	/** 普通短震，ios中为3D Touch 按压弹出触感*/ 
	shortPop():void

	/** 连续震动三次*/ 
	threable():void

	/** 长震动*/ 
	longVibrate():void

	/** 多次间隔震动*/ 
	intervalVibrate():void

	/** 终止震动*/ 
	vibrateCancle():void

}
interface blesdk {
	/** 开始扫描周围的蓝牙设备,并返回扫描到的设备卡号*/ 
	startScan(callback?: (ret:JSON) => void):void

}
interface callRecord {
	/** 获取通话记录*/ 
	openCallRecord(callback?: (ret:JSON) => void):void

}
interface moduleSMS {
}
interface posPrinter {
	/**
	 * `获取蓝牙打印机列表`
	 * ========params==========
	 *
	 * `status` :string : （可选项）表示要获取绑定的设备还是搜索周边所有蓝牙设备
	 */
	getBluetoothPrinters(params:posPrinter_getBluetoothPrinters_Params, callback?: (ret:JSON) => void):void

	/**
	 * `绑定蓝牙打印机`
	 * ========params==========
	 *
	 * `address` :string : （必填项）蓝牙打印机 MAC 地址
	 *
	 * `pin` :string : （可选项）绑定蓝牙设备时需要输入的pin码
	 */
	createBondToPrinter(params:posPrinter_createBondToPrinter_Params, callback?: (ret:JSON) => void):void

	/** 获取USB打印机列表*/ 
	getUsbPrinters(callback?: (ret:JSON) => void):void

	/**
	 * `将指定的蓝牙打印机解除绑定`
	 * ========params==========
	 *
	 * `address` :string : （必填项）要解除绑定的蓝牙打印机 MAC 地址
	 */
	removeBondToPrinter(params:posPrinter_removeBondToPrinter_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将打印内容发送到指定地址的打印机（蓝牙打印机为MAC地址，网口打印机为IP地址），支持多机打印`
	 * ========params==========
	 *
	 * `taskList` :Array<JSON> : （必填项）打印机、打印内容、重复打印次数组成的JSON对象数组
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	printOnSpecifiedPrinters(params:posPrinter_printOnSpecifiedPrinters_Params):void

	/**
	 * `将打印内容发送到指定地址的打印机（蓝牙打印机为MAC地址，网口打印机为IP地址），支持多机打印`
	 * ========params==========
	 *
	 * `taskList` :Array<JSON> : （必填项）打印机、打印内容、重复打印次数组成的JSON对象数组
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	print(params:posPrinter_print_Params):void

	/**
	 * `向指定打印机发送 ESC/POS 指令（不了解ESC/POS指令慎用）`
	 * ========params==========
	 *
	 * `printerAddr` :string : （必填项）蓝牙打印机地址（可通过getBluetoothPrinters获取）、IP打印机地址、USB打印机地址（可通过getUsbPrinters获取）
	 *
	 * `decCmd` :Array<JSON> : （必填项）以十进制数字组成的 ESC/POS 指令数组
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	sendEscCommandToPrinter(params:posPrinter_sendEscCommandToPrinter_Params):void

	/**
	 * `获取打印机状态(usb打印机此命令无效)`
	 * ========params==========
	 *
	 * `printerAddr` :string : （必填项）打印机Mac地址或IP地址
	 */
	getPrinterStatus(params:posPrinter_getPrinterStatus_Params, callback?: (ret:JSON) => void):void

}
interface posPrinter_getBluetoothPrinters_Params {
	/**（可选项）表示要获取绑定的设备还是搜索周边所有蓝牙设备*/ 
	status?:string,

}

interface posPrinter_createBondToPrinter_Params {
	/**（必填项）蓝牙打印机 MAC 地址*/ 
	address:string,

	/**（可选项）绑定蓝牙设备时需要输入的pin码*/ 
	pin?:string,

}

interface posPrinter_removeBondToPrinter_Params {
	/**（必填项）要解除绑定的蓝牙打印机 MAC 地址*/ 
	address:string,

}

interface posPrinter_printOnSpecifiedPrinters_Params {
	/**（必填项）打印机、打印内容、重复打印次数组成的JSON对象数组*/ 
	taskList:Array<JSON>,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface posPrinter_print_Params {
	/**（必填项）打印机、打印内容、重复打印次数组成的JSON对象数组*/ 
	taskList:Array<JSON>,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface posPrinter_sendEscCommandToPrinter_Params {
	/**（必填项）蓝牙打印机地址（可通过getBluetoothPrinters获取）、IP打印机地址、USB打印机地址（可通过getUsbPrinters获取）*/ 
	printerAddr:string,

	/**（必填项）以十进制数字组成的 ESC/POS 指令数组*/ 
	decCmd:Array<JSON>,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface posPrinter_getPrinterStatus_Params {
	/**（必填项）打印机Mac地址或IP地址*/ 
	printerAddr:string,

}

interface myListeningInfo {
	/** 启动监听*/ 
	start():void

}
interface bluePrinter {
	/** 扫描小票打印机蓝牙*/ 
	scan():void

	/**
	 * `连接小票打印机`
	 * ========params==========
	 *
	 * `id` :any : scan接口返回的id
	 */
	connect(params:bluePrinter_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加单行标题`
	 * ========params==========
	 *
	 * `string` :any : 标题内容
	 *
	 * `alignment` :number : 文字对齐方式
	 *
	 * `font` :number : 字号
	 */
	appendTitle(params:bluePrinter_appendTitle_Params):void

	/**
	 * `添加单行信息(左标题，右实际值)`
	 * ========params==========
	 *
	 * `title` :any : 标题
	 *
	 * `value` :any : 实际值
	 *
	 * `offset` :number : 实际值偏移量
	 *
	 * `font` :number : 字号
	 */
	appendText(params:bluePrinter_appendText_Params):void

	/**
	 * `添加单行信息(三列，例如：名称、数量、单价)`
	 * ========params==========
	 *
	 * `left` :any : 左标题
	 *
	 * `middle` :any : 中间标题
	 *
	 * `right` :any : 右标题
	 */
	appendTextThree(params:bluePrinter_appendTextThree_Params):void

	/**
	 * `添加条形码`
	 * ========params==========
	 *
	 * `string` :any : 条形码信息
	 *
	 * `alignment` :number : 文字对齐方式
	 *
	 * `maxWidth` :number : 最大宽度
	 */
	appendBarCode(params:bluePrinter_appendBarCode_Params):void

	/**
	 * `添加二维码`
	 * ========params==========
	 *
	 * `string` :any : 二维码信息
	 *
	 * `alignment` :number : 文字对齐方式
	 *
	 * `size` :number : 二维码大小，取值范围 1 <= size <= 16
	 */
	appendQRCode(params:bluePrinter_appendQRCode_Params):void

	/**
	 * `添加底部信息`
	 * ========params==========
	 *
	 * `string` :any : 底部信息
	 */
	appendFooter(params:bluePrinter_appendFooter_Params):void

	/** 添加一条分割线*/ 
	appendSeperatorLine():void

	/** 清除所有添加打印信息*/ 
	appendCleare():void

	/** 以字符串形式打印小票*/ 
	printString(callback?: (ret:JSON) => void):void

	/**
	 * `以html本地文件形式打印小票**1.0.3版本（含）遗弃该接口**`
	 * ========params==========
	 *
	 * `path` :string : html本地地址（支持fs、widget）。
	 *
	 * `alignment` :number : 对齐方式
	 *
	 * `maxWidth` :number : 最大宽度
	 */
	printHtml(params:bluePrinter_printHtml_Params, callback?: (ret:JSON) => void):void

}
interface bluePrinter_connect_Params {
	/**scan接口返回的id*/ 
	id:any,

}

interface bluePrinter_appendTitle_Params {
	/**标题内容*/ 
	string:any,

	/**文字对齐方式*/ 
	alignment:number,

	/**字号*/ 
	font:number,

}

interface bluePrinter_appendText_Params {
	/**标题*/ 
	title:any,

	/**实际值*/ 
	value:any,

	/**实际值偏移量*/ 
	offset:number,

	/**字号*/ 
	font:number,

}

interface bluePrinter_appendTextThree_Params {
	/**左标题*/ 
	left:any,

	/**中间标题*/ 
	middle:any,

	/**右标题*/ 
	right:any,

}

interface bluePrinter_appendBarCode_Params {
	/**条形码信息*/ 
	string:any,

	/**文字对齐方式*/ 
	alignment:number,

	/**最大宽度*/ 
	maxWidth:number,

}

interface bluePrinter_appendQRCode_Params {
	/**二维码信息*/ 
	string:any,

	/**文字对齐方式*/ 
	alignment:number,

	/**二维码大小，取值范围 1 <= size <= 16*/ 
	size:number,

}

interface bluePrinter_appendFooter_Params {
	/**底部信息*/ 
	string:any,

}

interface bluePrinter_printHtml_Params {
	/**html本地地址（支持fs、widget）。*/ 
	path:string,

	/**对齐方式*/ 
	alignment:number,

	/**最大宽度*/ 
	maxWidth:number,

}

interface mobileSensor {
	/** 手机加速度传感器，持续返回结果。*/ 
	getAccelerometer(callback?: (ret:JSON) => void):void

}
interface btsppiot {
}
interface printBleWifi {
	/** 初始化蓝牙*/ 
	initBlue(callback?: (ret:JSON) => void):void

	/** 蓝牙是否打开*/ 
	isOpen(callback?: (ret:JSON) => void):void

	/** 蓝牙配对历史*/ 
	hostoryBlue(callback?: (ret:JSON) => void):void

	/** 扫描蓝牙*/ 
	scanBlue(callback?: (ret:JSON) => void):void

	/** 连接蓝牙设备*/ 
	connectBlue():void

	/** 关闭扫描*/ 
	disscanBlue():void

	/** 判断WIFI打印机是否连接成功*/ 
	isWifiConnect(callback?: (ret:JSON) => void):void

	/** 连接wifi打印机*/ 
	openWifiPrint():void

	/** 添加单行标题*/ 
	appendTitle():void

	/** 加单行信息(左标题，右实际值)*/ 
	appendText():void

	/** 添加单行信息(三列，例如：名称、数量、单价)*/ 
	appendTextTree():void

	/** 添加条形码*/ 
	appendBarCode():void

	/** 添加二维码*/ 
	appendQRCode():void

	/** 添加底部信息*/ 
	appendFooter():void

	/** 添加一条分割线*/ 
	appendSeperatorLine(callback?: (ret:JSON) => void):void

	/** 清除所有添加打印信息*/ 
	appendClear(callback?: (ret:JSON) => void):void

	/** 添加图片*/ 
	appendImage():void

	/** 打印小票*/ 
	print(callback?: (ret:JSON) => void):void

	/** 打印当前页*/ 
	printCurrentPage(callback?: (ret:JSON) => void):void

	/** 获取条形码base64图片*/ 
	getBarCode(callback?: (ret:JSON) => void):void

	/** 获取二维码base64图片*/ 
	getQRCode(callback?: (ret:JSON) => void):void

}
interface appVersionUpdate {
}
interface magneticFieldSensor {
}
interface gpsListener {
	/**
	 * `查询监听GPS开关状态`
	 * ========params==========
	 *
	 * `addGpsChange` :boolean : （可选项）是否持续监听GPS状态；默认true
	 */
	addGpsListener(params:gpsListener_addGpsListener_Params, callback?: (ret:JSON) => void):void

	/** 移除GPS状态监听*/ 
	removeGpsListener():void

	/** 打开GPS设置页面*/ 
	openGpsSetting():void

}
interface gpsListener_addGpsListener_Params {
	/**（可选项）是否持续监听GPS状态；默认true*/ 
	addGpsChange?:boolean,

}

interface toBackground {
	/** Android App一键进入后台运行，进入后台后用户可通过任务栏重新进入界面，且保留应用原来的界面。*/ 
	runBackground():void

}
interface btmodule {
}
interface wifiSSID {
	/** 获取当前设备连接的WIFI的SSID*/ 
	getSsid(callback?: (ret:JSON) => void):void

}
interface hanvonVehicleCard {
	/**
	 * `对行驶证图片进行识别。`
	 * ========params==========
	 *
	 * `path` :string : 源图片路径，支持fs://、widget://等文件路径协议。
	 *
	 * `cropped` :boolean : （可选）切图版：true； 普通版：false。
	 *
	 * `https` :boolean : （可选）https：true； http：false。
	 *
	 * `cropPath` :boolean : （可选）在cropped为true时才有效。为true返回切割图路径和切割图经base64编码的字符串，为false只返回切割图经base64编码的字符串
	 */
	vehiclecardImage(params:hanvonVehicleCard_vehiclecardImage_Params, callback?: (ret:JSON) => void):void

	/** 清除保存的切割图。*/ 
	clearCache():void

}
interface hanvonVehicleCard_vehiclecardImage_Params {
	/**源图片路径，支持fs://、widget://等文件路径协议。*/ 
	path:string,

	/**（可选）切图版：true； 普通版：false。*/ 
	cropped?:boolean,

	/**（可选）https：true； http：false。*/ 
	https?:boolean,

	/**（可选）在cropped为true时才有效。为true返回切割图路径和切割图经base64编码的字符串，为false只返回切割图经base64编码的字符串*/ 
	cropPath?:boolean,

}

interface mwTencentRTC {
	/** 手动注册*/ 
	registerApp(callback?: (ret:JSON) => void):void

	/**
	 * `登录`
	 * ========params==========
	 *
	 * `userName` :string : 用户名
	 *
	 * `userSig` :string : 签名
	 */
	loginRTC(params:mwTencentRTC_loginRTC_Params, callback?: (ret:JSON) => void):void

	/**
	 * `加入房间 roomID 不存在时会自动创建房间`
	 * ========params==========
	 *
	 * `roomID` :string : 房间id
	 *
	 * `privateMapKey` :string : 房间加密的key
	 *
	 * `role` :string : 角色
	 */
	joinRoom(params:mwTencentRTC_joinRoom_Params, callback?: (ret:JSON) => void):void

	/**
	 * `退出房间`
	 * ========params==========
	 *
	 * `roomID` :string : 房间id
	 *
	 * `privateMapKey` :string : 房间加密的key
	 *
	 * `role` :string : 角色
	 */
	quitRoom(params:mwTencentRTC_quitRoom_Params, callback?: (ret:JSON) => void):void

}
interface mwTencentRTC_loginRTC_Params {
	/**用户名*/ 
	userName:string,

	/**签名*/ 
	userSig:string,

}

interface mwTencentRTC_joinRoom_Params {
	/**房间id*/ 
	roomID:string,

	/**房间加密的key*/ 
	privateMapKey:string,

	/**角色*/ 
	role:string,

}

interface mwTencentRTC_quitRoom_Params {
	/**房间id*/ 
	roomID:string,

	/**房间加密的key*/ 
	privateMapKey:string,

	/**角色*/ 
	role:string,

}

interface yunxinIM {
	/** 登陆*/ 
	login(callback?: (ret:JSON) => void):void

	/** 自动登陆，启动APP如果已经保存了用户帐号和令牌,建议使用这个登录方式*/ 
	autoLogin():void

	/** 退出登陆*/ 
	logout(callback?: (ret:JSON) => void):void

	/** 当前登录状态*/ 
	isLogined(callback?: (ret:JSON) => void):void

	/** 获取当前登录帐号，当前登录帐号,如果没有登录成功,这个地方会返回空字符串''（仅iOS支持）*/ 
	currentAccount():void

	/** 账号相关监听*/ 
	addAccountListen(callback?: (ret:JSON) => void):void

	/** 移除账号相关监听（仅android支持）*/ 
	removeAccountListen():void

	/**
	 * `踢其他客户端下线（仅 android支持）`
	 * ========params==========
	 *
	 * `client` :number : 要踢下线的客户端
	 */
	kickOtherClient(params:yunxinIM_kickOtherClient_Params, callback?: (ret:JSON) => void):void

	/** 从本地获取用户资料*/ 
	localUserInfo(callback?: (ret:JSON) => void):void

	/** 是否打开本地数据（仅android支持）*/ 
	openLocalCache(callback?: (ret:JSON) => void):void

	/** 从云信服务器批量获取用户资料，需要将用户信息交给云信托管，此接口才有效。调用此接口，不会触发 onUserInfoChanged 回调，该接口会将获取到的用户信息缓存在本地，所以需要避免此接口的滥调，导致存储过多无用数据到本地而撑爆缓存：如在聊天室请求请求每个聊天室用户数据将造成缓存过大而影响程序性能，本接口一次最多支持 150 个用户信息获取*/ 
	fetchUserInfos(callback?: (ret:JSON) => void):void

	/** 修改自己的用户资料*/ 
	updateMyUserInfo(callback?: (ret:JSON) => void):void

	/** 上传头像*/ 
	upload(callback?: (ret:JSON) => void):void

	/** 文件资源下载*/ 
	download(callback?: (ret:JSON) => void):void

	/** 取消上传/下载任务*/ 
	cancelTask():void

	/**
	 * `发送文本消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `text` :string : 发送的消息
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendText(params:yunxinIM_sendText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送图片消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `path` :string : 要发送的图片的路径，要求本地路径（fs://、widget://）（android仅支持fs路径）
	 *
	 * `displayName` :string : （可选项）文件展示名
	 *
	 * `compressQuality` :number : （可选项）压缩参数，可传入0.0-1.0的值，如果传入非法参数，则按照 0.5 进行压缩（仅iOS支持）
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendImage(params:yunxinIM_sendImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送语音消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `path` :string : 要发送的语音的路径，要求本地路径（fs://、widget://）（android仅支持fs路径）
	 *
	 * `duration` :number : （可选项）语音时长，毫秒为单位
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendVoice(params:yunxinIM_sendVoice_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送视频消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `path` :string : 要发送的视频的路径，要求本地路径（fs://、widget://）
	 *
	 * `displayName` :string : 视频展示名
	 *
	 * `duration` :number : （可选项）视频时长，毫秒为单位
	 *
	 * `width` :number : 视频宽度（仅android支持）
	 *
	 * `height` :number : 视频高度（仅android支持）
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendVideo(params:yunxinIM_sendVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送文件消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `path` :string : 要发送的文件的路径，要求本地路径（fs://、widget://）
	 *
	 * `displayName` :string : 文件显示名
	 *
	 * `extension` :string : 文件拓展名（仅iOS支持）
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendFile(params:yunxinIM_sendFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送位置消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `address` :string : 要发送的地址
	 *
	 * `latitude` :number : 纬度
	 *
	 * `longitude` :number : 经度
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendLocation(params:yunxinIM_sendLocation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送提示消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `text` :string : 要发送的消息（仅iOS支持）
	 *
	 * `from` :string : （可选项）消息来源
	 *
	 * `ext` :JSON : （可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	sendTip(params:yunxinIM_sendTip_Params, callback?: (ret:JSON) => void):void

	/**
	 * `消息取消发送，只能取消正在发送中的消息（如大文件发送），通常配合异步发送消息接口，接口返回值成功时消息的状态为发送失败状态（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageId` :string : 消息Id
	 */
	cancelSendingMessage(params:yunxinIM_cancelSendingMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `消息重发（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageId` :string : 消息Id
	 */
	resendMessage(params:yunxinIM_resendMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `消息转发，除了通知消息之外，其他类型消息均支持转发给其他会话，`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `toSessionId` :string : 转发到ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `toChatType` :number : （可选项）转发到的会话类型
	 *
	 * `messageId` :string : 消息Id，
	 *
	 * `reSend` :boolean : （可选项）如果失败后是否重发（仅android支持）
	 */
	forwardMessage(params:yunxinIM_forwardMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `消息撤回，允许用户撤回一定时间内发送过的消息，允许撤回时长默认2分钟，可在网易云信控制台配置`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageId` :string : 消息Id
	 */
	revokeMessage(params:yunxinIM_revokeMessage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `单聊消息已读回执，在会话界面中调用发送已读回执的接口并传入当前会话的最后一条消息，即表示这之前的消息本方都已读`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageId` :string : 当前会话的最后一条消息Id
	 */
	sendMessageReceipt(params:yunxinIM_sendMessageReceipt_Params, callback?: (ret:JSON) => void):void

	/**
	 * `群聊消息已读回执，群消息已读回执功能，需要联系商务顾问申请开通后才能使用。同时，使用该功能时需要将群成员控制在100人以内。需要config配置teamReceiptEnabled为true（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageIds` :Array : 条消息Id数组
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageIds` :Array : 条消息Id数组
	 */
	sendTeamMessageReceipts(params:yunxinIM_sendTeamMessageReceipts_Params, callback?: (ret:JSON) => void):void

	/**
	 * `群聊消息已读回执，群消息已读回执功能，需要联系商务顾问申请开通后才能使用。同时，使用该功能时需要将群成员控制在100人以内。需要config配置teamReceiptEnabled为true（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageIds` :Array : 条消息Id数组
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageIds` :Array : 条消息Id数组
	 */
	sendTeamMessageReceipts(params:yunxinIM_sendTeamMessageReceipts_Params, callback?: (ret:JSON) => void):void

	/** 消息相关监听*/ 
	addMessageListen():void

	/** 获取所有最近会话*/ 
	allRecentSessions():void

	/**
	 * `创建最近会话`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID（仅iOS支持）
	 *
	 * `messageId` :string : 当前会话的最后一条消息Id
	 *
	 * `chatType` :number : （可选项）会话类型（仅iOS支持）
	 */
	creatRecentSession(params:yunxinIM_creatRecentSession_Params):void

	/**
	 * `删除最近会话`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID（如果不通知观察者 android端需要未allRecentSessions接口最近一次返回数据中会话 ID）
	 *
	 * `sessionType` :number : 会话类型；0：P2P，1：Team，2：ChatRoom，3：Ysf，5：SUPER_TEAM（android端通知观察者时需要）
	 *
	 * `notifyOb` :boolean : （可选项）是否通知观察者（仅android支持）
	 */
	deleteRecentSession(params:yunxinIM_deleteRecentSession_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新最近会话的本地扩展（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 */
	updateRecentLocalExt(params:yunxinIM_updateRecentLocalExt_Params, callback?: (ret:JSON) => void):void

	/** 获取会话未读消息数*/ 
	allUnreadCount():void

	/**
	 * `设置一个会话里所有消息置为已读（仅iOS支持）`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 */
	markAllMessagesReadInSession(params:yunxinIM_markAllMessagesReadInSession_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除服务器端最近会话`
	 * ========params==========
	 *
	 * `sessions` :Array : 会话列表
	 */
	deleteRemoteSessions(params:yunxinIM_deleteRemoteSessions_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从本地db读取一个会话里某条消息之前的若干条的消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `messageId` :string : 消息Id（android端此消息必须为上次获取结果中消息或pullMessageHistory接口上次获取结果中id，
	 *
	 * `direction` :string : （可选项）查询方向（仅android支持）
	 *
	 * `limit` :number : （可选项）查询条数（仅android支持）
	 *
	 * `asc` :boolean : （可选项）是否已time为排序字段（仅android支持）
	 */
	messagesInSession(params:yunxinIM_messagesInSession_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从服务器拉取消息历史记录。该接口查询方向为从后往前。（仅android支持）`
	 * ========params==========
	 *
	 * `messageId` :string : （可选项）从这条消息往前获取（此消息必须为上次获取的消息id）
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `limit` :number : （可选项）获取多少条消息，最大值为100
	 *
	 * `persist` :boolean : （可选项）获取的漫游消息记录，是否保存到本地消息数据库
	 *
	 * `persistClear` :boolean : （可选项）是否保存清除记录之前的消息到本地数据库
	 */
	pullMessageHistory(params:yunxinIM_pullMessageHistory_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据消息Id获取消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID（仅iOS支持）
	 *
	 * `chatType` :number : （可选项）会话类型（仅IOS支持）
	 *
	 * `messageIds` :Array : 消息Id数组
	 */
	messagesInSessionWithMessageIds(params:yunxinIM_messagesInSessionWithMessageIds_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除某条消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID（仅iOS支持）
	 *
	 * `chatType` :number : （可选项）会话类型（仅iOS支持）
	 *
	 * `messageId` :string : 消息Id
	 */
	deleteMessage(params:yunxinIM_deleteMessage_Params):void

	/**
	 * `删除某个会话的所有消息`
	 * ========params==========
	 *
	 * `sessionId` :string : 会话ID
	 *
	 * `chatType` :number : （可选项）会话类型
	 *
	 * `removeSession` :boolean : （可选项）是否移除对应最近会话，设置为 true 时将同时删除最近会话信息（仅iOS支持）
	 *
	 * `removeTable` :boolean : （可选项）是否删除消息表，默认情况下云信采用标记的方式进行消息删除，如果设置为 true，将一并移除对应的消息表，进而减少消息表数量，加快 I/O（仅iOS支持）
	 */
	deleteAllmessagesInSession(params:yunxinIM_deleteAllmessagesInSession_Params):void

	/**
	 * `删除所有会话消息（仅iOS支持）`
	 * ========params==========
	 *
	 * `removeSession` :boolean : （可选项）是否移除对应最近会话，设置为 true 时将同时删除最近会话信息
	 *
	 * `removeTable` :boolean : （可选项）是否删除消息表，默认情况下云信采用标记的方式进行消息删除，如果设置为 true，将一并移除对应的消息表，进而减少消息表数量，加快 I/O
	 */
	deleteAllMessages(params:yunxinIM_deleteAllMessages_Params):void

	/** 会话相关监听*/ 
	addSessionListen(callback?: (ret:JSON) => void):void

	/** 移除会话相关监听（仅android支持）*/ 
	removeSessionListen():void

	/** 获取好友列表*/ 
	myFriends():void

	/**
	 * `处理好友关系`
	 * ========params==========
	 *
	 * `userId` :string : 目标用户ID
	 *
	 * `operation` :number : （可选项）操作类型
	 *
	 * `message` :string : 附言
	 */
	requestFriend(params:yunxinIM_requestFriend_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除好友`
	 * ========params==========
	 *
	 * `userId` :string : 好友Id
	 *
	 * `removeAlias` :boolean : （可选项）是否同时删除备注
	 */
	deleteFriend(params:yunxinIM_deleteFriend_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断是否是我的好友`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 */
	isMyFriend(params:yunxinIM_isMyFriend_Params, callback?: (ret:JSON) => void):void

	/** 获取黑名单中的用户列表*/ 
	myBlackList():void

	/**
	 * `添加用户到黑名单`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 */
	addToBlackList(params:yunxinIM_addToBlackList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将用户从黑名单移除`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 */
	removeFromBlackList(params:yunxinIM_removeFromBlackList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断用户是否已被拉黑`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 */
	isUserInBlackList(params:yunxinIM_isUserInBlackList_Params, callback?: (ret:JSON) => void):void

	/** 获取免打扰列表*/ 
	myMuteUserList():void

	/**
	 * `设置免打扰`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 *
	 * `isNotify` :boolean : （可选项）是否免打扰
	 */
	setMute(params:yunxinIM_setMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断是否免打扰`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 */
	isMute(params:yunxinIM_isMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `用户检索（仅iOS支持）`
	 * ========params==========
	 *
	 * `searchContent` :string : 搜索文本
	 *
	 * `ignoreingCase` :boolean : （可选项）忽略大小写
	 *
	 * `searchRange` :number : （可选项）搜索文本的搜索范围
	 *
	 * `searchContentOption` :number : （可选项）搜索文本的搜索范围
	 */
	searchUser(params:yunxinIM_searchUser_Params, callback?: (ret:JSON) => void):void

	/** 好友相关监听*/ 
	addFriendListen(callback?: (ret:JSON) => void):void

	/** 移除好友相关监听（仅iOS支持）*/ 
	removeFriendListen():void

	/**
	 * `通过用户id获取用户信息（仅android支持）`
	 * ========params==========
	 *
	 * `userIds` :Array : 用户id数组
	 */
	getUserInfoList(params:yunxinIM_getUserInfoList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取本地存储的系统通知（本接口配合limit参数采取分页获取）`
	 * ========params==========
	 *
	 * `limit` :number : 最大获取数
	 *
	 * `offset` :number : 数据库查询偏移量（仅android支持）
	 */
	fetchSystemNotifications(params:yunxinIM_fetchSystemNotifications_Params, callback?: (ret:JSON) => void):void

	/** 获取未读系统消息数*/ 
	allNotificationsUnreadCount():void

	/** 标记所有系统消息为已读*/ 
	markAllNotificationsAsRead():void

	/** 删除所有系统消息*/ 
	deleteAllNotifications():void

	/** 通知相关监听*/ 
	addNotificationListen(callback?: (ret:JSON) => void):void

	/** 移除通知相关监听（仅android支持）*/ 
	removeNotificationListen():void

	/**
	 * `创建群组`
	 * ========params==========
	 *
	 * `users` :Array : 用户ID列表
	 *
	 * `option` :JSON : 创建群选项
	 */
	createTeam(params:yunxinIM_createTeam_Params, callback?: (ret:JSON) => void):void

	/** 从本地获取所有群组*/ 
	allMyTeams():void

	/**
	 * `解散群组`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	dismissTeam(params:yunxinIM_dismissTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `申请加入群组`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `message` :string : （可选项）申请消息
	 */
	applyToTeam(params:yunxinIM_applyToTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通过申请(仅限高级群)`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `userId` :string : 申请的用户 ID
	 */
	passApplyToTeam(params:yunxinIM_passApplyToTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `拒绝申请(仅限高级群)`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `userId` :string : 申请的用户 ID
	 *
	 * `reason` :string : （可选项）拒绝理由
	 */
	rejectApplyToTeam(params:yunxinIM_rejectApplyToTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `邀请加入群组`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `users` :Array : 用户ID列表
	 *
	 * `postscript` :string : （可选项）邀请附言
	 *
	 * `attach` :string : （可选项）扩展消息
	 */
	invitationToTeam(params:yunxinIM_invitationToTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `接受入群邀请(仅限高级群)`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `invitorId` :string : 邀请者 ID
	 */
	acceptInviteWithTeam(params:yunxinIM_acceptInviteWithTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `拒绝入群邀请(仅限高级群)`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `invitorId` :string : 邀请者 ID
	 *
	 * `reason` :string : （可选项）拒绝原因
	 */
	rejectInviteWithTeam(params:yunxinIM_rejectInviteWithTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从群组内移除成员`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `users` :string : 需要移除的用户ID列表
	 */
	kickUsersFromTeam(params:yunxinIM_kickUsersFromTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `退出群组`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	quitTeam(params:yunxinIM_quitTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取群组成员，绝大多数情况这个请求都是从本地读取缓存并同步返回，但是由于群成员信息量较大， SDK 采取的是登录后延迟拉取的策略，考虑到用户网络等问题, SDK 有可能没有及时缓存群成员信息,那么这个请求将是个带网络请求的异步操作(增量请求)。 同时这个接口会去请求本地没有缓存的群用户的资料信息，但不会触发 onUserInfoChanged 回调`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	fetchTeamMembers(params:yunxinIM_fetchTeamMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取单个群成员信息，返回本地缓存的群成员信息，如果本地没有相应数据则返回空`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `userId` :string : 用户ID
	 */
	teamMember(params:yunxinIM_teamMember_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新成员群昵称`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `userId` :string : 群成员ID
	 *
	 * `newNick` :string : 新的群成员昵称
	 */
	updateUserNick(params:yunxinIM_updateUserNick_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据群组ID判断是否是我所在的群`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	isMyTeam(params:yunxinIM_isMyTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移交群主`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `newOwnerId` :string : 新群主ID
	 *
	 * `isLeave` :boolean : （可选项）是否同时离开群组
	 */
	transferManagerWithTeam(params:yunxinIM_transferManagerWithTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加管理员`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `users` :Array : 需要添加为管理员的用户ID列表
	 */
	addManagersToTeam(params:yunxinIM_addManagersToTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除管理员`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `users` :Array : 需要添加为管理员的用户ID列表
	 */
	removeManagersFromTeam(params:yunxinIM_removeManagersFromTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `禁言指定成员`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `userId` :string : 用户ID
	 *
	 * `isMute` :boolean : （可选项）是否禁言
	 */
	muteUserFromTeam(params:yunxinIM_muteUserFromTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `禁言全体普通成员`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `isMute` :boolean : （可选项）是否禁言
	 */
	muteAllFromTeam(params:yunxinIM_muteAllFromTeam_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取群内被禁言的成员列表，绝大多数情况这个请求都是从本地读取缓存并同步返回，但是由于群成员信息量较大， SDK 采取的是登录后延迟拉取的策略，考虑到用户网络等问题, SDK 有可能没有及时缓存群成员信息,那么这个请求将是个带网络请求的异步操作(增量请求)。同时这个接口会去请求本地没有缓存的群用户的资料信息，但不会触发 onUserInfoChanged 回调`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	fetchTeamMutedMembers(params:yunxinIM_fetchTeamMutedMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组名称`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `teamName` :string : 群组名称
	 */
	updateTeamName(params:yunxinIM_updateTeamName_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组头像`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `teamAvatarUrl` :string : 群组头像 Url
	 */
	updateTeamAvatar(params:yunxinIM_updateTeamAvatar_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群介绍`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `intro` :string : 群介绍
	 */
	updateTeamIntro(params:yunxinIM_updateTeamIntro_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群公告`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `announcement` :string : 群公告
	 */
	updateTeamAnnouncement(params:yunxinIM_updateTeamAnnouncement_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组验证方式`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `joinMode` :number : 验证方式
	 */
	updateTeamJoinMode(params:yunxinIM_updateTeamJoinMode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组被邀请人验证方式`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `beInviteMode` :number : 邀请方式
	 */
	updateTeamBeInviteMode(params:yunxinIM_updateTeamBeInviteMode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组邀请他人方式`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `inviteMode` :number : 邀请方式
	 */
	updateTeamInviteMode(params:yunxinIM_updateTeamInviteMode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更改群组更新信息的权限`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `infoMode` :number : 群信息修改权限
	 */
	updateTeamUpdateInfoMode(params:yunxinIM_updateTeamUpdateInfoMode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更改群组更新自定义字段的权限`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `clientCustomMode` :number : 修改谁有权限更新群组自定义字段
	 */
	updateTeamUpdateClientCustomMode(params:yunxinIM_updateTeamUpdateClientCustomMode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群自定义信息`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `customInfo` :string : 群自定义信息
	 */
	updateTeamCustomInfo(params:yunxinIM_updateTeamCustomInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改群通知状态`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 *
	 * `notifyState` :number : 群通知状态
	 */
	updateTeamNotifyState(params:yunxinIM_updateTeamNotifyState_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询群通知状态`
	 * ========params==========
	 *
	 * `teamId` :string : 群组ID
	 */
	fetchTeamNotifyState(params:yunxinIM_fetchTeamNotifyState_Params, callback?: (ret:JSON) => void):void

	/** 群组相关监听*/ 
	addTeamListen(callback?: (ret:JSON) => void):void

	/** 移除群组相关监听（仅android支持）*/ 
	removeTeamListen():void

}
interface yunxinIM_kickOtherClient_Params {
	/**要踢下线的客户端*/ 
	client:number,

}

interface yunxinIM_sendText_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**发送的消息*/ 
	text:string,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendImage_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的图片的路径，要求本地路径（fs://、widget://）（android仅支持fs路径）*/ 
	path:string,

	/**（可选项）文件展示名*/ 
	displayName?:string,

	/**（可选项）压缩参数，可传入0.0-1.0的值，如果传入非法参数，则按照 0.5 进行压缩（仅iOS支持）*/ 
	compressQuality?:number,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendVoice_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的语音的路径，要求本地路径（fs://、widget://）（android仅支持fs路径）*/ 
	path:string,

	/**（可选项）语音时长，毫秒为单位*/ 
	duration?:number,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendVideo_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的视频的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**视频展示名*/ 
	displayName:string,

	/**（可选项）视频时长，毫秒为单位*/ 
	duration?:number,

	/**视频宽度（仅android支持）*/ 
	width:number,

	/**视频高度（仅android支持）*/ 
	height:number,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendFile_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的文件的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**文件显示名*/ 
	displayName:string,

	/**文件拓展名（仅iOS支持）*/ 
	extension:string,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendLocation_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的地址*/ 
	address:string,

	/**纬度*/ 
	latitude:number,

	/**经度*/ 
	longitude:number,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_sendTip_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**要发送的消息（仅iOS支持）*/ 
	text:string,

	/**（可选项）消息来源*/ 
	from?:string,

	/**（可选项）扩展信息，需要保证可以转换为 JSON，长度限制 1K*/ 
	ext?:JSON,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_cancelSendingMessage_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**消息Id*/ 
	messageId:string,

}

interface yunxinIM_resendMessage_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**消息Id*/ 
	messageId:string,

}

interface yunxinIM_forwardMessage_Params {
	/**会话ID*/ 
	sessionId:string,

	/**转发到ID*/ 
	toSessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**（可选项）转发到的会话类型*/ 
	toChatType?:number,

	/**消息Id，*/ 
	messageId:string,

	/**（可选项）如果失败后是否重发（仅android支持）*/ 
	reSend?:boolean,

}

interface yunxinIM_revokeMessage_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**消息Id*/ 
	messageId:string,

}

interface yunxinIM_sendMessageReceipt_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**当前会话的最后一条消息Id*/ 
	messageId:string,

}

interface yunxinIM_sendTeamMessageReceipts_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**条消息Id数组*/ 
	messageIds:Array,

	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**条消息Id数组*/ 
	messageIds:Array,

}

interface yunxinIM_sendTeamMessageReceipts_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**条消息Id数组*/ 
	messageIds:Array,

	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**条消息Id数组*/ 
	messageIds:Array,

}

interface yunxinIM_creatRecentSession_Params {
	/**会话ID（仅iOS支持）*/ 
	sessionId:string,

	/**当前会话的最后一条消息Id*/ 
	messageId:string,

	/**（可选项）会话类型（仅iOS支持）*/ 
	chatType?:number,

}

interface yunxinIM_deleteRecentSession_Params {
	/**会话ID（如果不通知观察者 android端需要未allRecentSessions接口最近一次返回数据中会话 ID）*/ 
	sessionId:string,

	/**会话类型；0：P2P，1：Team，2：ChatRoom，3：Ysf，5：SUPER_TEAM（android端通知观察者时需要）*/ 
	sessionType:number,

	/**（可选项）是否通知观察者（仅android支持）*/ 
	notifyOb?:boolean,

}

interface yunxinIM_updateRecentLocalExt_Params {
	/**会话ID*/ 
	sessionId:string,

}

interface yunxinIM_markAllMessagesReadInSession_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

}

interface yunxinIM_deleteRemoteSessions_Params {
	/**会话列表*/ 
	sessions:Array,

}

interface yunxinIM_messagesInSession_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**消息Id（android端此消息必须为上次获取结果中消息或pullMessageHistory接口上次获取结果中id，*/ 
	messageId:string,

	/**（可选项）查询方向（仅android支持）*/ 
	direction?:string,

	/**（可选项）查询条数（仅android支持）*/ 
	limit?:number,

	/**（可选项）是否已time为排序字段（仅android支持）*/ 
	asc?:boolean,

}

interface yunxinIM_pullMessageHistory_Params {
	/**（可选项）从这条消息往前获取（此消息必须为上次获取的消息id）*/ 
	messageId?:string,

	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**（可选项）获取多少条消息，最大值为100*/ 
	limit?:number,

	/**（可选项）获取的漫游消息记录，是否保存到本地消息数据库*/ 
	persist?:boolean,

	/**（可选项）是否保存清除记录之前的消息到本地数据库*/ 
	persistClear?:boolean,

}

interface yunxinIM_messagesInSessionWithMessageIds_Params {
	/**会话ID（仅iOS支持）*/ 
	sessionId:string,

	/**（可选项）会话类型（仅IOS支持）*/ 
	chatType?:number,

	/**消息Id数组*/ 
	messageIds:Array,

}

interface yunxinIM_deleteMessage_Params {
	/**会话ID（仅iOS支持）*/ 
	sessionId:string,

	/**（可选项）会话类型（仅iOS支持）*/ 
	chatType?:number,

	/**消息Id*/ 
	messageId:string,

}

interface yunxinIM_deleteAllmessagesInSession_Params {
	/**会话ID*/ 
	sessionId:string,

	/**（可选项）会话类型*/ 
	chatType?:number,

	/**（可选项）是否移除对应最近会话，设置为 true 时将同时删除最近会话信息（仅iOS支持）*/ 
	removeSession?:boolean,

	/**（可选项）是否删除消息表，默认情况下云信采用标记的方式进行消息删除，如果设置为 true，将一并移除对应的消息表，进而减少消息表数量，加快 I/O（仅iOS支持）*/ 
	removeTable?:boolean,

}

interface yunxinIM_deleteAllMessages_Params {
	/**（可选项）是否移除对应最近会话，设置为 true 时将同时删除最近会话信息*/ 
	removeSession?:boolean,

	/**（可选项）是否删除消息表，默认情况下云信采用标记的方式进行消息删除，如果设置为 true，将一并移除对应的消息表，进而减少消息表数量，加快 I/O*/ 
	removeTable?:boolean,

}

interface yunxinIM_requestFriend_Params {
	/**目标用户ID*/ 
	userId:string,

	/**（可选项）操作类型*/ 
	operation?:number,

	/**附言*/ 
	message:string,

}

interface yunxinIM_deleteFriend_Params {
	/**好友Id*/ 
	userId:string,

	/**（可选项）是否同时删除备注*/ 
	removeAlias?:boolean,

}

interface yunxinIM_isMyFriend_Params {
	/**用户Id*/ 
	userId:string,

}

interface yunxinIM_addToBlackList_Params {
	/**用户Id*/ 
	userId:string,

}

interface yunxinIM_removeFromBlackList_Params {
	/**用户Id*/ 
	userId:string,

}

interface yunxinIM_isUserInBlackList_Params {
	/**用户Id*/ 
	userId:string,

}

interface yunxinIM_setMute_Params {
	/**用户Id*/ 
	userId:string,

	/**（可选项）是否免打扰*/ 
	isNotify?:boolean,

}

interface yunxinIM_isMute_Params {
	/**用户Id*/ 
	userId:string,

}

interface yunxinIM_searchUser_Params {
	/**搜索文本*/ 
	searchContent:string,

	/**（可选项）忽略大小写*/ 
	ignoreingCase?:boolean,

	/**（可选项）搜索文本的搜索范围*/ 
	searchRange?:number,

	/**（可选项）搜索文本的搜索范围*/ 
	searchContentOption?:number,

}

interface yunxinIM_getUserInfoList_Params {
	/**用户id数组*/ 
	userIds:Array,

}

interface yunxinIM_fetchSystemNotifications_Params {
	/**最大获取数*/ 
	limit:number,

	/**数据库查询偏移量（仅android支持）*/ 
	offset:number,

}

interface yunxinIM_createTeam_Params {
	/**用户ID列表*/ 
	users:Array,

	/**创建群选项*/ 
	option:JSON,

}

interface yunxinIM_dismissTeam_Params {
	/**群组ID*/ 
	teamId:string,

}

interface yunxinIM_applyToTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**（可选项）申请消息*/ 
	message?:string,

}

interface yunxinIM_passApplyToTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**申请的用户 ID*/ 
	userId:string,

}

interface yunxinIM_rejectApplyToTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**申请的用户 ID*/ 
	userId:string,

	/**（可选项）拒绝理由*/ 
	reason?:string,

}

interface yunxinIM_invitationToTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**用户ID列表*/ 
	users:Array,

	/**（可选项）邀请附言*/ 
	postscript?:string,

	/**（可选项）扩展消息*/ 
	attach?:string,

}

interface yunxinIM_acceptInviteWithTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**邀请者 ID*/ 
	invitorId:string,

}

interface yunxinIM_rejectInviteWithTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**邀请者 ID*/ 
	invitorId:string,

	/**（可选项）拒绝原因*/ 
	reason?:string,

}

interface yunxinIM_kickUsersFromTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**需要移除的用户ID列表*/ 
	users:string,

}

interface yunxinIM_quitTeam_Params {
	/**群组ID*/ 
	teamId:string,

}

interface yunxinIM_fetchTeamMembers_Params {
	/**群组ID*/ 
	teamId:string,

}

interface yunxinIM_teamMember_Params {
	/**群组ID*/ 
	teamId:string,

	/**用户ID*/ 
	userId:string,

}

interface yunxinIM_updateUserNick_Params {
	/**群组ID*/ 
	teamId:string,

	/**群成员ID*/ 
	userId:string,

	/**新的群成员昵称*/ 
	newNick:string,

}

interface yunxinIM_isMyTeam_Params {
	/**群组ID*/ 
	teamId:string,

}

interface yunxinIM_transferManagerWithTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**新群主ID*/ 
	newOwnerId:string,

	/**（可选项）是否同时离开群组*/ 
	isLeave?:boolean,

}

interface yunxinIM_addManagersToTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**需要添加为管理员的用户ID列表*/ 
	users:Array,

}

interface yunxinIM_removeManagersFromTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**需要添加为管理员的用户ID列表*/ 
	users:Array,

}

interface yunxinIM_muteUserFromTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**用户ID*/ 
	userId:string,

	/**（可选项）是否禁言*/ 
	isMute?:boolean,

}

interface yunxinIM_muteAllFromTeam_Params {
	/**群组ID*/ 
	teamId:string,

	/**（可选项）是否禁言*/ 
	isMute?:boolean,

}

interface yunxinIM_fetchTeamMutedMembers_Params {
	/**群组ID*/ 
	teamId:string,

}

interface yunxinIM_updateTeamName_Params {
	/**群组ID*/ 
	teamId:string,

	/**群组名称*/ 
	teamName:string,

}

interface yunxinIM_updateTeamAvatar_Params {
	/**群组ID*/ 
	teamId:string,

	/**群组头像 Url*/ 
	teamAvatarUrl:string,

}

interface yunxinIM_updateTeamIntro_Params {
	/**群组ID*/ 
	teamId:string,

	/**群介绍*/ 
	intro:string,

}

interface yunxinIM_updateTeamAnnouncement_Params {
	/**群组ID*/ 
	teamId:string,

	/**群公告*/ 
	announcement:string,

}

interface yunxinIM_updateTeamJoinMode_Params {
	/**群组ID*/ 
	teamId:string,

	/**验证方式*/ 
	joinMode:number,

}

interface yunxinIM_updateTeamBeInviteMode_Params {
	/**群组ID*/ 
	teamId:string,

	/**邀请方式*/ 
	beInviteMode:number,

}

interface yunxinIM_updateTeamInviteMode_Params {
	/**群组ID*/ 
	teamId:string,

	/**邀请方式*/ 
	inviteMode:number,

}

interface yunxinIM_updateTeamUpdateInfoMode_Params {
	/**群组ID*/ 
	teamId:string,

	/**群信息修改权限*/ 
	infoMode:number,

}

interface yunxinIM_updateTeamUpdateClientCustomMode_Params {
	/**群组ID*/ 
	teamId:string,

	/**修改谁有权限更新群组自定义字段*/ 
	clientCustomMode:number,

}

interface yunxinIM_updateTeamCustomInfo_Params {
	/**群组ID*/ 
	teamId:string,

	/**群自定义信息*/ 
	customInfo:string,

}

interface yunxinIM_updateTeamNotifyState_Params {
	/**群组ID*/ 
	teamId:string,

	/**群通知状态*/ 
	notifyState:number,

}

interface yunxinIM_fetchTeamNotifyState_Params {
	/**群组ID*/ 
	teamId:string,

}

interface chivoxLongman {
	/**  初始化引擎*/ 
	initEngine():void

	/** 销毁引擎*/ 
	destroyEngine():void

	/** 开始录音*/ 
	startRecord():void

	/** 停止录音*/ 
	stopRecord():void

}
interface jdKepler {
	/** 初始化sdk。 此接口仅支持Android。*/ 
	init():void

	/** 登录授权*/ 
	login():void

	/** 取消授权*/ 
	cancelAuth():void

	/**
	 * `通过URL打开任意商品页面`
	 * ========params==========
	 *
	 * `url` :string : （可选项）页面url
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openPage(params:jdKepler_openPage_Params):void

	/**
	 * `通过SKU打开Kepler单品页`
	 * ========params==========
	 *
	 * `sku` :string : 商品SKU
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openDetail(params:jdKepler_openDetail_Params):void

	/**
	 * `打开订单列表`
	 * ========params==========
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openOrderList(params:jdKepler_openOrderList_Params):void

	/**
	 * `打开导航页`
	 * ========params==========
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openNav(params:jdKepler_openNav_Params):void

	/**
	 * `根据搜索关键字打开搜索结果页`
	 * ========params==========
	 *
	 * `searchKey` :string : 搜索关键字
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openSearch(params:jdKepler_openSearch_Params):void

	/**
	 * `打开购物车界面`
	 * ========params==========
	 *
	 * `jumpType` :any : （可选项）跳转类型 1代表present 2代表push
	 */
	openShoppingCart(params:jdKepler_openShoppingCart_Params):void

	/**
	 * `添加到购物车`
	 * ========params==========
	 *
	 * `sku` :string : 商品sku
	 *
	 * `num` :string : （可选项）商品数量
	 */
	addToCart(params:jdKepler_addToCart_Params, callback?: (ret:JSON) => void):void

}
interface jdKepler_openPage_Params {
	/**（可选项）页面url*/ 
	url?:string,

	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_openDetail_Params {
	/**商品SKU*/ 
	sku:string,

	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_openOrderList_Params {
	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_openNav_Params {
	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_openSearch_Params {
	/**搜索关键字*/ 
	searchKey:string,

	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_openShoppingCart_Params {
	/**（可选项）跳转类型 1代表present 2代表push*/ 
	jumpType?:any,

}

interface jdKepler_addToCart_Params {
	/**商品sku*/ 
	sku:string,

	/**（可选项）商品数量*/ 
	num?:string,

}

interface SAMIDCard {
	/** 获取扫描模块状态*/ 
	getSAMStatus(callback?: (ret:JSON) => void):void

	/** 获取模块编码SAMID即安全模块编号*/ 
	getSAMID(callback?: (ret:JSON) => void):void

	/** 读取一次身份证信息*/ 
	findIDCard(callback?: (ret:JSON) => void):void

	/** 一直读取身份信息，直到读取到身份证*/ 
	findIDCardKeep(callback?: (ret:JSON) => void):void

	/** 停止一直读取身份信息*/ 
	stopFindIDCardKeep(callback?: (ret:JSON) => void):void

}
interface qupaiLive {
	/**
	 * `初始化sdk`
	 * ========params==========
	 *
	 * `appKey` :string : （必输项）申请的appKey，通过开发控制台上注册得到，进入「控制台」，点击进入应用管理中我的应用选项可查看。
	 *
	 * `appsecret` :string : （必输项）申请的appsecret，通过开发控制台上注册得到，进入「控制台」，点击进入应用管理中我的应用选项可查看。
	 *
	 * `space` :string : （必输项）存储目录 建议使用uid cid之类的信息，space是发布推流为每一个用户设置的一个流名，同时也作为直播回放的空间名称，建议设置为用户的uuid（最大支持32位，如获取的uuid大于32位请自行处理）。例如：A用户的uuid是110001，在paas平台的空间中为A用户生成一个110001的文件夹存放A用户上传的内容。。
	 */
	init(params:qupaiLive_init_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建直播`
	 * ========params==========
	 *
	 * `domain` :any : （必填项）获取趣拍平台上的“访问域名”；
	 */
	createLive(params:qupaiLive_createLive_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始直播`
	 * ========params==========
	 *
	 * `x` :number : （必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；
	 *
	 * `y` :number : （必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0
	 *
	 * `w` :number : （可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度
	 *
	 * `h` :number : （可选项）模块的高度；默认：所属的 Window 或 Frame 的高度
	 *
	 * `watermask` :string : （可选项）水印图片路径，仅支持widget://
	 *
	 * `maxBitrate` :number : （可选项）最大码率 （单位：bps）
	 *
	 * `bestBitrate` :number : （可选项）最优码率 （单位：bps）
	 *
	 * `minBitrate` :number : （可选项）最小码率 （单位：bps）
	 *
	 * `audioBitrate` :number : （可选项）音频码率（建议设置为32000)
	 *
	 * `cameraFront` :boolean : （可选项）设置前置摄像头或后置摄像头
	 *
	 * `videoResolution` :number : （可选项）分辨率(仅Android有效) 取值范围:240 360 480 540 720 1080
	 *
	 * `videoWidth` :number : （可选项）分辨率宽(仅iOS专用)；
	 *
	 * `videoHeight` :number : （可选项）分辨率高(仅iOS专用)；
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	startLive(params:qupaiLive_startLive_Params, callback?: (ret:JSON) => void):void

	/** 美颜开关*/ 
	skin():void

	/** 闪光灯开关*/ 
	flash():void

	/** 切换摄像头*/ 
	camera():void

	/** 断开直播链接*/ 
	disconnect():void

	/** 关闭直播*/ 
	stop():void

}
interface qupaiLive_init_Params {
	/**（必输项）申请的appKey，通过开发控制台上注册得到，进入「控制台」，点击进入应用管理中我的应用选项可查看。*/ 
	appKey:string,

	/**（必输项）申请的appsecret，通过开发控制台上注册得到，进入「控制台」，点击进入应用管理中我的应用选项可查看。*/ 
	appsecret:string,

	/**（必输项）存储目录 建议使用uid cid之类的信息，space是发布推流为每一个用户设置的一个流名，同时也作为直播回放的空间名称，建议设置为用户的uuid（最大支持32位，如获取的uuid大于32位请自行处理）。例如：A用户的uuid是110001，在paas平台的空间中为A用户生成一个110001的文件夹存放A用户上传的内容。。*/ 
	space:string,

}

interface qupaiLive_createLive_Params {
	/**（必填项）获取趣拍平台上的“访问域名”；*/ 
	domain:any,

}

interface qupaiLive_startLive_Params {
	/**（必填项）模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；*/ 
	x:number,

	/**（必填项）模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认：0*/ 
	y:number,

	/**（可选项）模块的宽度；默认：所属的 Window 或 Frame 的宽度*/ 
	w?:number,

	/**（可选项）模块的高度；默认：所属的 Window 或 Frame 的高度*/ 
	h?:number,

	/**（可选项）水印图片路径，仅支持widget://*/ 
	watermask?:string,

	/**（可选项）最大码率 （单位：bps）*/ 
	maxBitrate?:number,

	/**（可选项）最优码率 （单位：bps）*/ 
	bestBitrate?:number,

	/**（可选项）最小码率 （单位：bps）*/ 
	minBitrate?:number,

	/**（可选项）音频码率（建议设置为32000)*/ 
	audioBitrate?:number,

	/**（可选项）设置前置摄像头或后置摄像头*/ 
	cameraFront?:boolean,

	/**（可选项）分辨率(仅Android有效) 取值范围:240 360 480 540 720 1080*/ 
	videoResolution?:number,

	/**（可选项）分辨率宽(仅iOS专用)；*/ 
	videoWidth?:number,

	/**（可选项）分辨率高(仅iOS专用)；*/ 
	videoHeight?:number,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface aliyunPush {
	/** 启动信息统计*/ 
	onAppStart():void

	/** 打开推送通道 **全量推送场景下，打开推送通道存在2-3小时延迟。其他场景实时生效***/ 
	turnOnPushChannel():void

	/** 关闭推送通道 **全量推送场景下，关闭推送通道存在2-3小时延迟。其他场景实时生效***/ 
	turnOffPushChannel():void

	/**
	 * `设置通知声音`
	 * ========params==========
	 *
	 * `soundPath` :string : 声音文件路径（仅支持fs:// & android系统本地路径）
	 */
	setNotificationSoundFilePath(params:aliyunPush_setNotificationSoundFilePath_Params):void

	/**
	 * `设置通知声音`
	 * ========params==========
	 *
	 * `startHour` :number : 免打扰的起始时间（小时）
	 *
	 * `startMinute` :number : 免打扰的起始时间（分钟）
	 *
	 * `endHour` :number : 免打扰的结束时间（小时）
	 *
	 * `endMinute` :number : 免打扰的结束时间（分钟）
	 */
	setDoNotDisturb(params:aliyunPush_setDoNotDisturb_Params, callback?: (ret:JSON) => void):void

	/** 清空所有通知*/ 
	clearNotifications():void

	/** 关闭免打扰模式*/ 
	closeDoNotDisturbMode():void

	/** 将设备与电话号绑定 **为提高信息的到达率和实效性，扩展推送的使用场景，我们推出了推送与短信的融合通知模式。开发者可以设置在一定时间内，如果用户未收到或未点击推送，通过短信补发通知用户，具体方案可参考：[推送短信融合](https://help.aliyun.com/document_detail/57008.html?spm=a2c4g.11186623.2.86.68aa2055470BjB)***/ 
	bindPhoneNumber():void

	/** 解除当前设备与电话号的绑定关系*/ 
	unbindPhoneNumber():void

	/** 获取设备ID*/ 
	getDeviceId():void

	/**
	 * `将应用内账号和推送通道相关联，可以实现按账号的定点消息推送；设备只能绑定一个账号，同一账号可以绑定到多个设备；同一设备更换绑定账号时无需进行解绑，重新调用绑定账号接口即可覆盖生效；若业务场景需要先解绑后绑定，在解绑账号成功回调中进行绑定绑定操作，以此保证执行的顺序性；账户名设置支持64字节。`
	 * ========params==========
	 *
	 * `account` :string : 绑定账号名
	 */
	bindAccount(params:aliyunPush_bindAccount_Params, callback?: (ret:JSON) => void):void

	/** 将应用内账号和推送通道取消关联。*/ 
	unbindAccount():void

	/**
	 * `绑定标签到指定目标；支持向设备、账号和别名绑定标签，绑定类型由参数target指定；绑定标签在10分钟内生效；App最多支持绑定1万个标签【请谨慎使用，避免标签绑定达到上限】，单个标签最大支持128字符。`
	 * ========params==========
	 *
	 * `target` :number : 目标类型
	 *
	 * `tags` :Array : 标签
	 *
	 * `alias` :string : 别名（仅当target = 3时生效）
	 */
	bindTag(params:aliyunPush_bindTag_Params, callback?: (ret:JSON) => void):void

	/**
	 * `解绑指定目标标签；支持解绑设备、账号和别名标签，解绑类型由参数target指定；解绑标签在10分钟内生效；解绑标签不等同于删除标签，目前不支持标签的删除。`
	 * ========params==========
	 *
	 * `target` :number : 目标类型
	 *
	 * `tags` :Array : 标签
	 *
	 * `alias` :string : 别名（仅当target = 3时生效）
	 */
	unbindTag(params:aliyunPush_unbindTag_Params, callback?: (ret:JSON) => void):void

	/** 查询目标绑定标签，当前仅支持查询设备标签；查询结果可从callback的data中获取；标签绑定成功且生效（10分钟内）后即可查询。*/ 
	listTags():void

	/**
	 * `设备添加别名；单个设备最多添加128个别名，且同一别名最多添加到128个设备；别名支持128字节。`
	 * ========params==========
	 *
	 * `alias` :string : 别名
	 */
	addAlias(params:aliyunPush_addAlias_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除设备别名；支持删除指定别名和删除全部别名（alias为nil or length = 0）。`
	 * ========params==========
	 *
	 * `alias` :string : 别名
	 */
	removeAlias(params:aliyunPush_removeAlias_Params, callback?: (ret:JSON) => void):void

	/** 查询设备别名；查询结果可从callback的data中获取。*/ 
	listAliases():void

	/** 获取设备deviceToken*/ 
	deviceToken():void

	/**
	 * `同步角标数到服务端`
	 * ========params==========
	 *
	 * `badgeNum` :string : 角标数，取值范围[0,99999]
	 */
	syncBadgeNum(params:aliyunPush_syncBadgeNum_Params, callback?: (ret:JSON) => void):void

	/** 监听消息或通知事件*/ 
	addEventlistener():void

}
interface aliyunPush_setNotificationSoundFilePath_Params {
	/**声音文件路径（仅支持fs:// & android系统本地路径）*/ 
	soundPath:string,

}

interface aliyunPush_setDoNotDisturb_Params {
	/**免打扰的起始时间（小时）*/ 
	startHour:number,

	/**免打扰的起始时间（分钟）*/ 
	startMinute:number,

	/**免打扰的结束时间（小时）*/ 
	endHour:number,

	/**免打扰的结束时间（分钟）*/ 
	endMinute:number,

}

interface aliyunPush_bindAccount_Params {
	/**绑定账号名*/ 
	account:string,

}

interface aliyunPush_bindTag_Params {
	/**目标类型*/ 
	target:number,

	/**标签*/ 
	tags:Array,

	/**别名（仅当target = 3时生效）*/ 
	alias:string,

}

interface aliyunPush_unbindTag_Params {
	/**目标类型*/ 
	target:number,

	/**标签*/ 
	tags:Array,

	/**别名（仅当target = 3时生效）*/ 
	alias:string,

}

interface aliyunPush_addAlias_Params {
	/**别名*/ 
	alias:string,

}

interface aliyunPush_removeAlias_Params {
	/**别名*/ 
	alias:string,

}

interface aliyunPush_syncBadgeNum_Params {
	/**角标数，取值范围[0,99999]*/ 
	badgeNum:string,

}

interface ajAnalytics {
	/** 初始化sdk并配置必要参数*/ 
	init():void

	/** 记录自定义事件*/ 
	onEvent():void

}
interface sunlogin {
	/**
	 * `登录服务器。`
	 * ========params==========
	 *
	 * `appId` :number : （必填）注册向日葵分配的appId。
	 *
	 * `appKey` :string : （必填）注册向日葵分配的appKey。
	 */
	login(params:sunlogin_login_Params, callback?: (ret:JSON) => void):void

	/** 创建会话。(如果控制端断开了连接，就要重用调用这个方法，产生新的会话才能重新连接上。)*/ 
	createSession():void

	/** 关闭会话。*/ 
	closeSession():void

	/** 退出登录。*/ 
	logout():void

	/** 监听服务状态变化。*/ 
	setListener():void

}
interface sunlogin_login_Params {
	/**（必填）注册向日葵分配的appId。*/ 
	appId:number,

	/**（必填）注册向日葵分配的appKey。*/ 
	appKey:string,

}

interface liuLiangQianBao {
	/**
	 * `打开流量钱包`
	 * ========params==========
	 *
	 * `customId` :string : 在流量钱包申请到的开发者 id
	 *
	 * `appId` :string : 在流量钱包申请到的 appid
	 *
	 * `appSecret` :string : 在流量钱包申请到的 secret
	 *
	 * `requestKey` :string : 在流量钱包申请到的请求密钥
	 *
	 * `skinType` :string : （可选项）皮肤类型
	 */
	open(params:liuLiangQianBao_open_Params):void

}
interface liuLiangQianBao_open_Params {
	/**在流量钱包申请到的开发者 id*/ 
	customId:string,

	/**在流量钱包申请到的 appid*/ 
	appId:string,

	/**在流量钱包申请到的 secret*/ 
	appSecret:string,

	/**在流量钱包申请到的请求密钥*/ 
	requestKey:string,

	/**（可选项）皮肤类型*/ 
	skinType?:string,

}

interface alibaichuan {
	/**     初始化模块信息，打开页面require完成就去执行*/ 
	initTaeSDK():void

	/**     打开手淘授权登陆*/ 
	showLogin():void

	/**     获取已经登陆的用户的相关信息*/ 
	getUserInfo():void

	/**     退出登陆*/ 
	logout():void

	/**
	 * `    通过itemid打开宝贝，以下是正常使用，如果需要使用高佣转链功能，请参考[问题集锦](http://community.apicloud.com/bbs/forum.php?mod=viewthread&tid=59901&extra=)`
	 * ========params==========
	 *
	 * `clientType` :string : 表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端
	 *
	 * `backUrl` :string : 小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")
	 *
	 * `nativeOpenFailedMode` :string : 目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。
	 *
	 * `pid` :string : [获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)
	 *
	 * `itemid` :string : 宝贝的id，itemid为打开宝贝详情后，看到浏览器里有id一项，如"https://item.taobao.com/item.htm?id=45535180986",这里的id就是itemid
	 *
	 * `ret` :any : null
	 *
	 * `err` :any : null
	 */
	showTaokeItemById(params:alibaichuan_showTaokeItemById_Params):void

	/**
	 * `    通过URL打开宝贝详情，此方法主要以url的自带佣金为准，当然也可传入高佣转链的隐藏参数，[传送门](http://community.apicloud.com/bbs/forum.php?mod=viewthread&tid=59901&extra=)`
	 * ========params==========
	 *
	 * `url` :string : 商品URL地址, 或者优惠券地址
	 *
	 * `clientType` :string : 表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端
	 *
	 * `backUrl` :string : 小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")
	 *
	 * `nativeOpenFailedMode` :string : 目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。
	 *
	 * `pid` :string : [获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)
	 *
	 * `ret` :any : null
	 *
	 * `err` :any : null
	 */
	showDetailByURL(params:alibaichuan_showDetailByURL_Params):void

	/**     打开我的购物车*/ 
	openMyCart():void

	/**
	 * `    打开我的订单`
	 * ========params==========
	 *
	 * `status` :number : 默认跳转页面, 0：全部；1：待付款；2：待发货；3：待收货；4：待评价。 若传入的不是这几个数字，则跳转到“全部”页面且“allOrder”失效
	 *
	 * `isAllOrder` :boolean : true：显示全部订单，建议填true，不管status传什么都填true
	 *
	 * `clientType` :string : 表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端
	 *
	 * `backUrl` :string : 小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")
	 *
	 * `nativeOpenFailedMode` :string : 目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。
	 *
	 * `pid` :string : [获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)
	 *
	 * `pageType` :string : 此功能阿里暂未支持，待支持后可以在这里传人pageType：如商品详情“detail”，购物车“cart”，具体看官方的更新：2-(2)-b [传送门](https://baichuan.taobao.com/docs/doc.htm?spm=a3c0d.7629140.0.0.67e6be48UBr2Br&treeId=129&articleId=118122&docType=1)
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	myOrdersPage(params:alibaichuan_myOrdersPage_Params):void

	/**
	 * `    打开商家店铺`
	 * ========params==========
	 *
	 * `shopid` :string : 商家店铺ID
	 *
	 * `clientType` :string : 表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端
	 *
	 * `backUrl` :string : 小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")
	 *
	 * `nativeOpenFailedMode` :string : 目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。
	 *
	 * `pid` :string : [获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)
	 *
	 * `sellerId` :string : 卖家ID，淘宝联盟-联盟产品-单品店铺推广-店铺推广里的user_number_id：如“https://handuyishe.tmall.com/shop/view_shop.htm?user_number_id=263817957&ali_trackid=2%3Amm_112712463_17294774_66324446%3A1568700525_248_1572113213”
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	openShopPage(params:alibaichuan_openShopPage_Params):void

	/**
	 * `    设置渠道信息（如果有特殊渠道专享价，需要设置，默认不要使用），初始化完成后调用才能生效`
	 * ========params==========
	 *
	 * `typeName` :string : 渠道类型（默认为：0）
	 *
	 * `channelName` :string : 渠道名称（默认为空：""）
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	setChannel(params:alibaichuan_setChannel_Params):void

	/**
	 * `    设置isv版本，提供isvcode全局接口，设置isv的版本 ，默认1.0.0，初始化完成后调用才能生效`
	 * ========params==========
	 *
	 * `isvVersion` :string : isvVersion (默认1.0.0)
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	setISVVersion(params:alibaichuan_setISVVersion_Params):void

	/**
	 * `    设置是否使用同步淘客打点。true：使用淘客同步打点；false：关闭同步打点，使用异步打点；注意：初始化完成后调用才能生效.`
	 * ========params==========
	 *
	 * `isSyncForTaoke` :boolean : 设置是否使用同步淘客打点。true：使用淘客同步打点；false：关闭同步打点，使用异步打点；
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	setSyncForTaoke(params:alibaichuan_setSyncForTaoke_Params):void

}
interface alibaichuan_showTaokeItemById_Params {
	/**表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端*/ 
	clientType:string,

	/**小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")*/ 
	backUrl:string,

	/**目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。*/ 
	nativeOpenFailedMode:string,

	/**[获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)*/ 
	pid:string,

	/**宝贝的id，itemid为打开宝贝详情后，看到浏览器里有id一项，如"https://item.taobao.com/item.htm?id=45535180986",这里的id就是itemid*/ 
	itemid:string,

	/**null*/ 
	ret:any,

	/**null*/ 
	err:any,

}

interface alibaichuan_showDetailByURL_Params {
	/**商品URL地址, 或者优惠券地址*/ 
	url:string,

	/**表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端*/ 
	clientType:string,

	/**小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")*/ 
	backUrl:string,

	/**目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。*/ 
	nativeOpenFailedMode:string,

	/**[获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)*/ 
	pid:string,

	/**null*/ 
	ret:any,

	/**null*/ 
	err:any,

}

interface alibaichuan_myOrdersPage_Params {
	/**默认跳转页面, 0：全部；1：待付款；2：待发货；3：待收货；4：待评价。 若传入的不是这几个数字，则跳转到“全部”页面且“allOrder”失效*/ 
	status:number,

	/**true：显示全部订单，建议填true，不管status传什么都填true*/ 
	isAllOrder:boolean,

	/**表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端*/ 
	clientType:string,

	/**小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")*/ 
	backUrl:string,

	/**目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。*/ 
	nativeOpenFailedMode:string,

	/**[获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)*/ 
	pid:string,

	/**此功能阿里暂未支持，待支持后可以在这里传人pageType：如商品详情“detail”，购物车“cart”，具体看官方的更新：2-(2)-b [传送门](https://baichuan.taobao.com/docs/doc.htm?spm=a3c0d.7629140.0.0.67e6be48UBr2Br&treeId=129&articleId=118122&docType=1)*/ 
	pageType:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface alibaichuan_openShopPage_Params {
	/**商家店铺ID*/ 
	shopid:string,

	/**表示唤端类型：taobao---唤起淘宝客户端；tmall---唤起天猫客户端*/ 
	clientType:string,

	/**小把手，唤端返回的scheme，(如果不传默认将不展示小把手；如果想展示小把手，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://")*/ 
	backUrl:string,

	/**目前原阿里系页面需要拉回手机淘宝、未安装手机淘宝，默认会跳转到对应的应用下载页。媒体可以根据需要自定义唤起手淘的失败处理方式，目前提供“降级H5应用內打开” 和 “跳转应用下载页”。注：降级H5应用內打开，由于安全策略升级，暂不支持完成整个电商交易流程，请悉知。*/ 
	nativeOpenFailedMode:string,

	/**[获取pid](https://baichuan.bbs.taobao.com/detail.html?spm=a3c0d.7998981.0.0.536e2f45hTCymq&postId=7927184)*/ 
	pid:string,

	/**卖家ID，淘宝联盟-联盟产品-单品店铺推广-店铺推广里的user_number_id：如“https://handuyishe.tmall.com/shop/view_shop.htm?user_number_id=263817957&ali_trackid=2%3Amm_112712463_17294774_66324446%3A1568700525_248_1572113213”*/ 
	sellerId:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface alibaichuan_setChannel_Params {
	/**渠道类型（默认为：0）*/ 
	typeName:string,

	/**渠道名称（默认为空：""）*/ 
	channelName:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface alibaichuan_setISVVersion_Params {
	/**isvVersion (默认1.0.0)*/ 
	isvVersion:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface alibaichuan_setSyncForTaoke_Params {
	/**设置是否使用同步淘客打点。true：使用淘客同步打点；false：关闭同步打点，使用异步打点；*/ 
	isSyncForTaoke:boolean,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface x5ac {
	/**
	 * `首先需要初始化远端主机IP，通过传入远端主机IP，以便后续与该主机进行通信。`
	 * ========params==========
	 *
	 * `targetIP` :string : 远端主机IP
	 */
	connect(params:x5ac_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `校验动态密码是否正确。`
	 * ========params==========
	 *
	 * `checkSecret` :string : 输入密码
	 */
	checkDynamicSecret(params:x5ac_checkDynamicSecret_Params, callback?: (ret:JSON) => void):void

	/** 通知A模块进入待机状态。*/ 
	notifyToWait():void

	/**
	 * `人脸识别是否成功，需通知A模块。`
	 * ========params==========
	 *
	 * `success` :boolean : 需通知A模块。
	 */
	recognizeFace(params:x5ac_recognizeFace_Params, callback?: (ret:JSON) => void):void

	/**
	 * `可视通话开门，需传入相应的token给A模块验证。`
	 * ========params==========
	 *
	 * `token` :string : 传入token
	 */
	videoCallToOpen(params:x5ac_videoCallToOpen_Params, callback?: (ret:JSON) => void):void

	/** 释放资源*/ 
	release():void

	/** 设置开门结果的监听器：*/ 
	listenOpenStatus():void

	/** 通联微信支付接口*/ 
	listenKeyValue():void

}
interface x5ac_connect_Params {
	/**远端主机IP*/ 
	targetIP:string,

}

interface x5ac_checkDynamicSecret_Params {
	/**输入密码*/ 
	checkSecret:string,

}

interface x5ac_recognizeFace_Params {
	/**需通知A模块。*/ 
	success:boolean,

}

interface x5ac_videoCallToOpen_Params {
	/**传入token*/ 
	token:string,

}

interface vinOCR {
	/**
	 * `开启识别控件`
	 * ========params==========
	 *
	 * `devcode` :string : 授权开发码
	 *
	 * `currentType` :number : （可选项）识别类型
	 */
	openView(params:vinOCR_openView_Params, callback?: (ret:JSON) => void):void

	/** 关闭识别控件*/ 
	closeView():void

}
interface vinOCR_openView_Params {
	/**授权开发码*/ 
	devcode:string,

	/**（可选项）识别类型*/ 
	currentType?:number,

}

interface braintreeApplePay {
	/** 判断手机是否支持 Apple Pay 功能*/ 
	isSupportPayments():void

	/** 判断手机是否已加载有可用的支付卡片*/ 
	canMakePayments():void

	/** 跳转到钱包设置添加银行卡、信用卡*/ 
	addCard():void

	/**
	 * `初始化`
	 * ========params==========
	 *
	 * `token` :string : 从服务器获取的token
	 */
	initWithToken(params:braintreeApplePay_initWithToken_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发起支付请求`
	 * ========params==========
	 *
	 * `countryCode` :string : The merchant's ISO country code.
	 *
	 * `currencyCode` :string : Currency code for this payment.
	 *
	 * `merchantIdentifier` :string : Identifies the merchant, as previously agreed with Apple.  Must match one of the merchant identifiers in the application's entitlement.
	 *
	 * `items` :Array : 商品列表
	 */
	paymentRequest(params:braintreeApplePay_paymentRequest_Params, callback?: (ret:JSON) => void):void

	/** 获取 nonce 监听，成功获取 nonce 后开始发到服务器端扣款*/ 
	didAuthorizePaymentListener(callback?: (ret:JSON) => void):void

	/** 监听完成事件*/ 
	didFinishListener():void

	/**
	 * `设置苹果支付状态`
	 * ========params==========
	 *
	 * `status` :string : 支付状态
	 */
	setApplePayStatus(params:braintreeApplePay_setApplePayStatus_Params):void

}
interface braintreeApplePay_initWithToken_Params {
	/**从服务器获取的token*/ 
	token:string,

}

interface braintreeApplePay_paymentRequest_Params {
	/**The merchant's ISO country code.*/ 
	countryCode:string,

	/**Currency code for this payment.*/ 
	currencyCode:string,

	/**Identifies the merchant, as previously agreed with Apple.  Must match one of the merchant identifiers in the application's entitlement.*/ 
	merchantIdentifier:string,

	/**商品列表*/ 
	items:Array,

}

interface braintreeApplePay_setApplePayStatus_Params {
	/**支付状态*/ 
	status:string,

}

interface superFile {
	/**
	 * `打开文件`
	 * ========params==========
	 *
	 * `path` :string : (必选项) 文件路径 android支持fs或者绝对路径
	 */
	open(params:superFile_open_Params):void

	/** 打开文件*/ 
	openView():void

	/** 隐藏窗口*/ 
	hide():void

	/** 显示窗口*/ 
	show():void

	/** 关闭窗口*/ 
	close():void

}
interface superFile_open_Params {
	/**(必选项) 文件路径 android支持fs或者绝对路径*/ 
	path:string,

}

interface vlcPlayer {
	/**
	 * `打开播放器界面`
	 * ========params==========
	 *
	 * `rect` :JSON : (可选项）播放器的位置及长宽
	 *
	 * `texts` :JSON : （可选项）顶部标题文字
	 *
	 * `styles` :JSON : （可选项）模块的样式设置
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://，widget://）
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `isAutorotate` :boolean : （可选项）是否支持自动转屏；为false isFullBtn自动为false
	 *
	 * `isShowProcessView` :boolean : （可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动 默认为false】
	 *
	 * `isShowTimeLable` :boolean : （可选项）是否显示播放时间 (显示:true ; 不显示:false)备注:直播流自动 默认为false】
	 *
	 * `isLive` :boolean : （可选项）是否直播视频源 （直播：true；点播：false）
	 *
	 * `enableFull` :boolean : （可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。
	 *
	 * `isFullBtn` :boolean : （可选项）小窗口是否显示进入全屏按钮
	 *
	 * `isBackBtn` :boolean : （可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）
	 *
	 * `isOpenGesture` :boolean : （可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启 - ：false）
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `audio` :boolean : （可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg
	 */
	open(params:vlcPlayer_open_Params):void

	/**
	 * `设置视频的文件路径`
	 * ========params==========
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://，widget://）
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `title` :string : （可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效
	 *
	 * `audio` :boolean : （可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg
	 */
	setPath(params:vlcPlayer_setPath_Params):void

	/** 重新播放*/ 
	replay():void

	/** 开始播放*/ 
	play():void

	/** 暂停播放*/ 
	pause():void

	/** 关闭播放器*/ 
	close():void

	/** 显示视频播放视图*/ 
	show():void

	/** 隐藏视频播放视图*/ 
	hide():void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `name` :string : （可选项）所要监听的动作名称
	 */
	addEventListener(params:vlcPlayer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除动作监听`
	 * ========params==========
	 *
	 * `name` :string : （可选项）所要移除的监听的动作名称
	 */
	removeEventListener(params:vlcPlayer_removeEventListener_Params):void

	/** 全屏播放（横屏模式）*/ 
	fullScreen():void

	/** 取消全屏播放*/ 
	cancelFullScreen():void

	/**
	 * `快进`
	 * ========params==========
	 *
	 * `seconds` :number : 快进的秒数
	 */
	forward(params:vlcPlayer_forward_Params):void

	/**
	 * `快退`
	 * ========params==========
	 *
	 * `seconds` :number : 快退的秒数
	 */
	rewind(params:vlcPlayer_rewind_Params):void

	/**
	 * `跳转`
	 * ========params==========
	 *
	 * `seconds` :number : 跳转到音视频播放的秒数
	 */
	seekTo(params:vlcPlayer_seekTo_Params):void

	/**
	 * `设置屏幕亮度`
	 * ========params==========
	 *
	 * `brightness` :number : （可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度**
	 */
	setBrightness(params:vlcPlayer_setBrightness_Params):void

	/** 获取当前屏幕亮度值*/ 
	getBrightness():void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小，取值范围：0-1
	 */
	setVolume(params:vlcPlayer_setVolume_Params):void

	/** 获取当前播放音量*/ 
	getVolume():void

	/** 获取视频的时长*/ 
	getDuration():void

	/** 获取已经播放的时长*/ 
	getCurrentPosition():void

	/** 获取是否全屏播放状态*/ 
	isFullScreen():void

}
interface vlcPlayer_open_Params {
	/**(可选项）播放器的位置及长宽*/ 
	rect?:JSON,

	/**（可选项）顶部标题文字*/ 
	texts?:JSON,

	/**（可选项）模块的样式设置*/ 
	styles?:JSON,

	/**视频资源地址,支持网络和本地路径（fs://，widget://）*/ 
	path:string,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）是否支持自动转屏；为false isFullBtn自动为false*/ 
	isAutorotate?:boolean,

	/**（可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动 默认为false】*/ 
	isShowProcessView?:boolean,

	/**（可选项）是否显示播放时间 (显示:true ; 不显示:false)备注:直播流自动 默认为false】*/ 
	isShowTimeLable?:boolean,

	/**（可选项）是否直播视频源 （直播：true；点播：false）*/ 
	isLive?:boolean,

	/**（可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。*/ 
	enableFull?:boolean,

	/**（可选项）小窗口是否显示进入全屏按钮*/ 
	isFullBtn?:boolean,

	/**（可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false）*/ 
	isBackBtn?:boolean,

	/**（可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启 - ：false）*/ 
	isOpenGesture?:boolean,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg*/ 
	audio?:boolean,

}

interface vlcPlayer_setPath_Params {
	/**视频资源地址,支持网络和本地路径（fs://，widget://）*/ 
	path:string,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效*/ 
	title?:string,

	/**（可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg*/ 
	audio?:boolean,

}

interface vlcPlayer_addEventListener_Params {
	/**（可选项）所要监听的动作名称*/ 
	name?:string,

}

interface vlcPlayer_removeEventListener_Params {
	/**（可选项）所要移除的监听的动作名称*/ 
	name?:string,

}

interface vlcPlayer_forward_Params {
	/**快进的秒数*/ 
	seconds:number,

}

interface vlcPlayer_rewind_Params {
	/**快退的秒数*/ 
	seconds:number,

}

interface vlcPlayer_seekTo_Params {
	/**跳转到音视频播放的秒数*/ 
	seconds:number,

}

interface vlcPlayer_setBrightness_Params {
	/**（可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度***/ 
	brightness?:number,

}

interface vlcPlayer_setVolume_Params {
	/**（可选项）音量大小，取值范围：0-1*/ 
	volume?:number,

}

interface aliBC {
	/** 初始化SDK（调用优先级最高,只需要调用一次）*/ 
	asyncInit(callback?: (ret:JSON) => void):void

	/**
	 * `设置SDK 淘客打点策略（sdk默认采用淘客同步打点）`
	 * ========params==========
	 *
	 * `isSyncForTaoke` :boolean : （可选项）设置是否使用同步淘客打点。true:使用淘客同步打点；false:关闭同步打点,使用异步打点。
	 */
	setSyncForTaoke(params:aliBC_setSyncForTaoke_Params, callback?: (ret:JSON) => void):void

	/** 开启接口免授权模式*/ 
	setIsAuthVip():void

	/**
	 * `设置App标识字段,可用于区分使用本SDK的具体三方App`
	 * ========params==========
	 *
	 * `code` :string : null
	 *
	 * `ret` :JSON : 返回值  **仅Android有返回**
	 */
	setIsvCode(params:aliBC_setIsvCode_Params):void

	/**
	 * `设置三方App版本,可用于标识App版本`
	 * ========params==========
	 *
	 * `version` :string : null
	 */
	setIsvVersion(params:aliBC_setIsvVersion_Params):void

	/**
	 * `设置三方App名字,可用于标识App名字（**仅iOS有效**）`
	 * ========params==========
	 *
	 * `name` :string : null
	 */
	setIsvAppName(params:aliBC_setIsvAppName_Params):void

	/**
	 * `设置淘客全局参数`
	 * ========params==========
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : (可选项)adzoneId参数不为空时需要此参数，
	 */
	setTaokeParams(params:aliBC_setTaokeParams_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置渠道信息（如果有渠道专享价,需要设置）`
	 * ========params==========
	 *
	 * `typeName` :string : （可选项）设置渠道类型
	 *
	 * `channelName` :string : （可选项）设置渠道名称
	 */
	setChannel(params:aliBC_setChannel_Params):void

	/** 授权登录*/ 
	showLogin(callback?: (ret:JSON) => void):void

	/** 注销*/ 
	logout(callback?: (ret:JSON) => void):void

	/** 获取用户信息*/ 
	getUserInfo(callback?: (ret:JSON) => void):void

	/**
	 * `打开淘宝商品详情页（**注意：现在百川强制跳转手淘，如果没跳手淘而是打开的H5页面 则不能成功购买和加入购物车**）`
	 * ========params==========
	 *
	 * `itemId` :string : 商品id。支持itemId和openItemId的商品（如:37196464781L,AAHd5d-HAAeGwJedwSnHktBI）,必填,不允许为null
	 *
	 * `openType` :string : (可选项)打开页面的方式
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : (可选项)adzoneId参数不为空时需要此参数，
	 *
	 * `backUrl` :string : 用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)**
	 *
	 * `degradeUrl` :string : 降级url，如果唤端失败且设置了降级url，则加载该url
	 *
	 * `failModeType` :string : 用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效**
	 *
	 * `trackParams` :JSON : (可选项)自定义参数（暂时没发现啥用，但百川有就保留了）
	 */
	showDetailPage(params:aliBC_showDetailPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开淘宝加入购物车页面(**该接口暂未开放**)`
	 * ========params==========
	 *
	 * `code` :string : 打开页面的控制参数
	 */
	showAddCartPage(params:aliBC_showAddCartPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开我的订单页面(**该接口暂未开放**)`
	 * ========params==========
	 *
	 * `code` :string : 打开页面的控制参数
	 *
	 * `orderStatus` :any : 默认跳转页面。0:全部；1:待付款；2:待发货；3:待收货；4:待评价
	 *
	 * `allOrder` :boolean : false 进行订单分域（只展示通过当前app下单的订单）,true 显示所有订单
	 */
	showMyOrders(params:aliBC_showMyOrders_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开我的购物车（**该接口暂不稳定，请注意测试；如不能打开可以使用showPageByUrl 传url为https://market.m.taobao.com/app/dinamic/h5-tb-cart-old/index.html实现**）`
	 * ========params==========
	 *
	 * `openType` :string : (可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : (可选项)adzoneId参数不为空时需要此参数，
	 *
	 * `backUrl` :string : 用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)**
	 *
	 * `degradeUrl` :string : 降级url，如果唤端失败且设置了降级url，则加载该url
	 *
	 * `failModeType` :string : 用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效**
	 *
	 * `trackParams` :JSON : (可选项)自定义参数（暂时没发现啥用，但百川有就保留了）
	 */
	showMyCarts(params:aliBC_showMyCarts_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开淘宝店铺页面`
	 * ========params==========
	 *
	 * `shopId` :string : 店铺id,支持明文id
	 *
	 * `openType` :string : (可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : 需要在extraParams中显式传入sellerId，否则同步打点转链失败，
	 *
	 * `backUrl` :string : 用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)**
	 *
	 * `degradeUrl` :string : 降级url，如果唤端失败且设置了降级url，则加载该url
	 *
	 * `failModeType` :string : 用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效**
	 *
	 * `trackParams` :JSON : (可选项)自定义参数（暂时没发现啥用，但百川有就保留了）
	 */
	showShopPage(params:aliBC_showShopPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开url展示页面。(**注意 打开淘系地址会跳转手淘，具体页面打开逻辑需要自己多测试！！！**)`
	 * ========params==========
	 *
	 * `url` :string : url
	 *
	 * `openType` :string : (可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : (可选项)adzoneId参数不为空时需要此参数，
	 *
	 * `backUrl` :string : 用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)**
	 *
	 * `degradeUrl` :string : 降级url，如果唤端失败且设置了降级url，则加载该url
	 *
	 * `failModeType` :string : 用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效**
	 *
	 * `trackParams` :JSON : (可选项)自定义参数（暂时没发现啥用，但百川有就保留了）
	 */
	showPageByUrl(params:aliBC_showPageByUrl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式,打开url展示页面。(**注意 打开淘系地址会跳转手淘，具体页面打开逻辑需要自己多测试！！！**)`
	 * ========params==========
	 *
	 * `url` :string : url
	 *
	 * `hookUrl` :string : 要拦截的url （当页面中跳转的链接包含hookUrl字段时 进行拦截,如:ios下传"tbopen://"可以阻止目前的二合一页面跳转手淘）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame,传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上,不跟随窗口上下滚动,可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称,可与addJsToPage配合使用。
	 *
	 * `openType` :string : (可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）
	 *
	 * `pid` :string : 淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `extraParams` :JSON : (可选项)adzoneId参数不为空时需要此参数，
	 *
	 * `backUrl` :string : 用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)**
	 *
	 * `degradeUrl` :string : 降级url，如果唤端失败且设置了降级url，则加载该url
	 *
	 * `failModeType` :string : 用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑
	 */
	showPageByUrlWeb(params:aliBC_showPageByUrlWeb_Params, callback?: (ret:JSON) => void):void

	/** 监听页面加载完成后返回页面的title和url。*/ 
	addPageFinListener(callback?: (ret:JSON) => void):void

	/** 对页面shouldStartLoadWithRequest时进行监听,返回页面的title和跳转的url。*/ 
	addLoadingListener(callback?: (ret:JSON) => void):void

	/**
	 * `在当前打开的淘宝页面加载完成后注入一段js脚本到H5页面。`
	 * ========params==========
	 *
	 * `javaScript` :string : javaScript脚本
	 *
	 * `appointUrl` :string : (可选项)指定Js脚本注入到的页面
	 *
	 * `delay` :any : (可选项)延时执行js脚本的时间,单位为 s（秒）
	 *
	 * `once` :boolean : (可选项)回调成功一次后是否清除对Javascript函数的引用,便于内存回收。通常为false。
	 */
	addJsToPage(params:aliBC_addJsToPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除页面加载完成的监听和js脚本`
	 * ========params==========
	 *
	 * `name` :string : (可选项) 移除的类型,javaScript脚本/PageFinListener/loadingListener。
	 */
	removeJsListener(params:aliBC_removeJsListener_Params):void

	/** 控制当前外部的webview回退*/ 
	webGoBack():void

	/** 从视图中移除当前通过showxxxWeb打开的百川页面。*/ 
	removeWeb():void

	/**
	 * `设置要拦截的url。(**当使用外部webview方式打开百川页面时 有效**)`
	 * ========params==========
	 *
	 * `hookUrl` :string : 要拦截的url （当页面跳转的链接包含hookUrl字段时 进行拦截,**若 不传/为空 则清除已有拦截**）
	 */
	setHookUrl(params:aliBC_setHookUrl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取配置文件config.xml中的feature配置参数（**同步返回**）`
	 * ========params==========
	 *
	 * `featureName` :string : feature的name字段
	 *
	 * `paramName` :string : 对应param的name字段
	 */
	getFeature(params:aliBC_getFeature_Params):void

}
interface aliBC_setSyncForTaoke_Params {
	/**（可选项）设置是否使用同步淘客打点。true:使用淘客同步打点；false:关闭同步打点,使用异步打点。*/ 
	isSyncForTaoke?:boolean,

}

interface aliBC_setIsvCode_Params {
	/**null*/ 
	code:string,

	/**返回值  **仅Android有返回***/ 
	ret:JSON,

}

interface aliBC_setIsvVersion_Params {
	/**null*/ 
	version:string,

}

interface aliBC_setIsvAppName_Params {
	/**null*/ 
	name:string,

}

interface aliBC_setTaokeParams_Params {
	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**(可选项)adzoneId参数不为空时需要此参数，*/ 
	extraParams?:JSON,

}

interface aliBC_setChannel_Params {
	/**（可选项）设置渠道类型*/ 
	typeName?:string,

	/**（可选项）设置渠道名称*/ 
	channelName?:string,

}

interface aliBC_showDetailPage_Params {
	/**商品id。支持itemId和openItemId的商品（如:37196464781L,AAHd5d-HAAeGwJedwSnHktBI）,必填,不允许为null*/ 
	itemId:string,

	/**(可选项)打开页面的方式*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）*/ 
	linkKey?:string,

	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**(可选项)adzoneId参数不为空时需要此参数，*/ 
	extraParams?:JSON,

	/**用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)***/ 
	backUrl:string,

	/**降级url，如果唤端失败且设置了降级url，则加载该url*/ 
	degradeUrl:string,

	/**用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑*/ 
	failModeType:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效***/ 
	pageClose?:boolean,

	/**(可选项)自定义参数（暂时没发现啥用，但百川有就保留了）*/ 
	trackParams?:JSON,

}

interface aliBC_showAddCartPage_Params {
	/**打开页面的控制参数*/ 
	code:string,

}

interface aliBC_showMyOrders_Params {
	/**打开页面的控制参数*/ 
	code:string,

	/**默认跳转页面。0:全部；1:待付款；2:待发货；3:待收货；4:待评价*/ 
	orderStatus:any,

	/**false 进行订单分域（只展示通过当前app下单的订单）,true 显示所有订单*/ 
	allOrder:boolean,

}

interface aliBC_showMyCarts_Params {
	/**(可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）*/ 
	linkKey?:string,

	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**(可选项)adzoneId参数不为空时需要此参数，*/ 
	extraParams?:JSON,

	/**用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)***/ 
	backUrl:string,

	/**降级url，如果唤端失败且设置了降级url，则加载该url*/ 
	degradeUrl:string,

	/**用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑*/ 
	failModeType:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效***/ 
	pageClose?:boolean,

	/**(可选项)自定义参数（暂时没发现啥用，但百川有就保留了）*/ 
	trackParams?:JSON,

}

interface aliBC_showShopPage_Params {
	/**店铺id,支持明文id*/ 
	shopId:string,

	/**(可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）*/ 
	linkKey?:string,

	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**需要在extraParams中显式传入sellerId，否则同步打点转链失败，*/ 
	extraParams:JSON,

	/**用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)***/ 
	backUrl:string,

	/**降级url，如果唤端失败且设置了降级url，则加载该url*/ 
	degradeUrl:string,

	/**用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑*/ 
	failModeType:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效***/ 
	pageClose?:boolean,

	/**(可选项)自定义参数（暂时没发现啥用，但百川有就保留了）*/ 
	trackParams?:JSON,

}

interface aliBC_showPageByUrl_Params {
	/**url*/ 
	url:string,

	/**(可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）*/ 
	linkKey?:string,

	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**(可选项)adzoneId参数不为空时需要此参数，*/ 
	extraParams?:JSON,

	/**用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)***/ 
	backUrl:string,

	/**降级url，如果唤端失败且设置了降级url，则加载该url*/ 
	degradeUrl:string,

	/**用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑*/ 
	failModeType:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。true:关闭,false:不关闭。**仅在Android H5页面生效***/ 
	pageClose?:boolean,

	/**(可选项)自定义参数（暂时没发现啥用，但百川有就保留了）*/ 
	trackParams?:JSON,

}

interface aliBC_showPageByUrlWeb_Params {
	/**url*/ 
	url:string,

	/**要拦截的url （当页面中跳转的链接包含hookUrl字段时 进行拦截,如:ios下传"tbopen://"可以阻止目前的二合一页面跳转手淘）*/ 
	hookUrl:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame,传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上,不跟随窗口上下滚动,可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称,可与addJsToPage配合使用。*/ 
	jsObjectName?:string,

	/**(可选项)打开页面的方式:拉起手淘/天猫 和 h5打开页面,默认值:h5*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时,设置拉起手淘or天猫。（不传则走百川默认设置,建议传值）*/ 
	linkKey?:string,

	/**淘客pid,获取流程参考:[http://baichuan.taobao.com/portal/doc?articleId=220](http://baichuan.taobao.com/portal/doc?articleId=220)*/ 
	pid:string,

	/**(可选项)淘宝联盟adzoneId。**高佣转链/跨店结算 功能所需**, 如果走adzoneId的方式分佣打点，需要在extraParams中显式传入taokeAppkey，否则打点失败。[功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	adzoneId?:string,

	/**(可选项)adzoneId参数不为空时需要此参数，*/ 
	extraParams?:JSON,

	/**用于打开手淘时的 “返回（小把手）” 的点击返回，目前**ios传空字符串，android传config.xml文件中配置的urlScheme(即tbopen+appkey)***/ 
	backUrl:string,

	/**降级url，如果唤端失败且设置了降级url，则加载该url*/ 
	degradeUrl:string,

	/**用于控制没安装手淘或者没检测到手淘的时候的打开页面逻辑*/ 
	failModeType:string,

}

interface aliBC_addJsToPage_Params {
	/**javaScript脚本*/ 
	javaScript:string,

	/**(可选项)指定Js脚本注入到的页面*/ 
	appointUrl?:string,

	/**(可选项)延时执行js脚本的时间,单位为 s（秒）*/ 
	delay?:any,

	/**(可选项)回调成功一次后是否清除对Javascript函数的引用,便于内存回收。通常为false。*/ 
	once?:boolean,

}

interface aliBC_removeJsListener_Params {
	/**(可选项) 移除的类型,javaScript脚本/PageFinListener/loadingListener。*/ 
	name?:string,

}

interface aliBC_setHookUrl_Params {
	/**要拦截的url （当页面跳转的链接包含hookUrl字段时 进行拦截,**若 不传/为空 则清除已有拦截**）*/ 
	hookUrl:string,

}

interface aliBC_getFeature_Params {
	/**feature的name字段*/ 
	featureName:string,

	/**对应param的name字段*/ 
	paramName:string,

}

interface APSocial {
	/** 判断当前设备是否安装支付宝客户端*/ 
	isAPAppInstalled(callback?: (ret:JSON) => void):void

	/** 判断当前支付宝客户端是否支持分享到朋友圈*/ 
	isAPAppSupportShareTimeLine(callback?: (ret:JSON) => void):void

	/**
	 * `分享文本内容`
	 * ========params==========
	 *
	 * `text` :string : 分享的文本
	 */
	shareText(params:APSocial_shareText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享照片`
	 * ========params==========
	 *
	 * `title` :string : 分享的照片标题
	 *
	 * `description` :string : 分享的照片描述
	 *
	 * `thumb` :string : 分享的照片的缩略图路径，支持fs://、widget://、http://
	 *
	 * `imageUrl` :string : 分享的照片路径，支持fs://、widget://、http://
	 */
	sharePhoto(params:APSocial_sharePhoto_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享网页`
	 * ========params==========
	 *
	 * `title` :string : 分享的网页标题
	 *
	 * `description` :string : 分享的网页描述
	 *
	 * `thumb` :string : 分享的网页的缩略图路径，支持fs://、widget://、http://
	 *
	 * `url` :string : 分享的网页地址
	 */
	shareWeb(params:APSocial_shareWeb_Params, callback?: (ret:JSON) => void):void

}
interface APSocial_shareText_Params {
	/**分享的文本*/ 
	text:string,

}

interface APSocial_sharePhoto_Params {
	/**分享的照片标题*/ 
	title:string,

	/**分享的照片描述*/ 
	description:string,

	/**分享的照片的缩略图路径，支持fs://、widget://、http://*/ 
	thumb:string,

	/**分享的照片路径，支持fs://、widget://、http://*/ 
	imageUrl:string,

}

interface APSocial_shareWeb_Params {
	/**分享的网页标题*/ 
	title:string,

	/**分享的网页描述*/ 
	description:string,

	/**分享的网页的缩略图路径，支持fs://、widget://、http://*/ 
	thumb:string,

	/**分享的网页地址*/ 
	url:string,

}

interface acLive {
	/**
	 * `打开摄像头采集页面`
	 * ========params==========
	 *
	 * `camera` :number : （可选）设备摄像头选择
	 *
	 * `rect` :JSON : 采集画面的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	open(params:acLive_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭录像采集页面*/ 
	close():void

	/**
	 * `开始推流`
	 * ========params==========
	 *
	 * `url` :any : 推流地址
	 */
	start(params:acLive_start_Params, callback?: (ret:JSON) => void):void

	/** 结束推流*/ 
	end():void

	/** 切换摄像头*/ 
	switchCamera():void

	/** 开启关闭美颜*/ 
	beautyFace():void

}
interface acLive_open_Params {
	/**（可选）设备摄像头选择*/ 
	camera?:number,

	/**采集画面的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface acLive_start_Params {
	/**推流地址*/ 
	url:any,

}

interface heartRateReceiver {
	/**
	 * `开启监听`
	 * ========params==========
	 *
	 * `port` :number : （可选项）本地端口号
	 *
	 * `HubIDs` :Array : 要监听的hub的集合
	 */
	startMonitor(params:heartRateReceiver_startMonitor_Params, callback?: (ret:JSON) => void):void

	/** 停止监听*/ 
	stopMonitor():void

	/** 进入打卡模式*/ 
	startDKMode():void

	/** 退出打卡模式*/ 
	stopDKMode():void

	/**
	 * `设置白名单`
	 * ========params==========
	 *
	 * `deviceIds` :Array : 设备ID数组
	 */
	setWhiteList(params:heartRateReceiver_setWhiteList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `控制手表心率测量`
	 * ========params==========
	 *
	 * `mode` :number : 控制指令，数字类型
	 *
	 * `hubId` :string : （可选项）如果传了hubId，那么向该hubId发送指令，否则向所有的hubId发送指令。字符串类型
	 */
	heartRate(params:heartRateReceiver_heartRate_Params, callback?: (ret:JSON) => void):void

	/** 设置心跳包监听*/ 
	setHubHeartBeatCallback():void

	/** 监听所有hub关闭*/ 
	setHubOffStatusNotifyCallback():void

	/** 监听所有手表关闭*/ 
	setWatchOffStatusNotifyCallback():void

}
interface heartRateReceiver_startMonitor_Params {
	/**（可选项）本地端口号*/ 
	port?:number,

	/**要监听的hub的集合*/ 
	HubIDs:Array,

}

interface heartRateReceiver_setWhiteList_Params {
	/**设备ID数组*/ 
	deviceIds:Array,

}

interface heartRateReceiver_heartRate_Params {
	/**控制指令，数字类型*/ 
	mode:number,

	/**（可选项）如果传了hubId，那么向该hubId发送指令，否则向所有的hubId发送指令。字符串类型*/ 
	hubId?:string,

}

interface tencentMTA {
}
interface bTrace {
	/**
	 * `初始化轨迹`
	 * ========params==========
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `entityName` :string : 终端实体的名称，采集的轨迹将算在该 entity 名下
	 *
	 * `keepAlive` :boolean : （可选项）是否保活 **仅支持 ios 平台**
	 *
	 * `isNeedObjectStorage` :boolean : 是否需要对象存储 **仅支持 Android 平台**
	 */
	initTrace(params:bTrace_initTrace_Params, callback?: (ret:JSON) => void):void

	/** 设置定位和回传周期*/ 
	setInterval():void

	/**
	 * `开启轨迹服务`
	 * ========params==========
	 *
	 * `accuracy` :string : （可选项）定位精度
	 *
	 * `filter` :number : （可选项）位置更新所需的最小距离（单位米）
	 */
	startTrace(params:bTrace_startTrace_Params, callback?: (ret:JSON) => void):void

	/** 开启采集数据*/ 
	startGather():void

	/** 停止轨迹服务*/ 
	stopTrace():void

	/** 停止数据采集*/ 
	stopGather():void

	/**
	 * `查询历史轨迹`
	 * ========params==========
	 *
	 * `tag` :number : 请求tag
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `entityName` :string : 终端实体的名称，采集的轨迹将算在该 entity 名下
	 *
	 * `startTime` :number : 开始时间戳（单位：秒）
	 *
	 * `endTime` :number : 结束时间戳（单位：秒）
	 *
	 * `pageSize` :number : 分页大小
	 *
	 * `pageIndex` :number : 分页索引
	 *
	 * `processOption` :JSON : 纠偏设置
	 *
	 * `coordType` :string : 坐标类型 **注意:仅支持iOS**
	 */
	queryHistoryTrack(params:bTrace_queryHistoryTrack_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建圆形围栏（客户端只支持圆形围栏）`
	 * ========params==========
	 *
	 * `tag` :number : 请求tag
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `entityName` :string : 终端实体的名称，采集的轨迹将算在该 entity 名下 **仅支持 Android 平台**
	 *
	 * `monitoredCenter` :string : 监控对象
	 *
	 * `type` :string : 围栏类型
	 *
	 * `centerLatitude` :number : 中心点纬度
	 *
	 * `centerLongitude` :number : 中心点经度
	 *
	 * `radius` :number : 半径
	 *
	 * `denoise` :number : 去噪精度
	 *
	 * `fenceName` :number : 围栏名称
	 *
	 * `coordType` :string : 坐标类型
	 */
	createCircleFence(params:bTrace_createCircleFence_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建多边形围栏（客户端只支持圆形围栏）`
	 * ========params==========
	 *
	 * `tag` :number : 请求tag
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `fenceName` :number : 围栏名称
	 *
	 * `entityName` :string : 终端实体的名称，采集的轨迹将算在该 entity 名下
	 *
	 * `monitoredCenter` :string : 监控对象
	 *
	 * `vertexes` :Array<JSON> : 多边形顶点数组
	 *
	 * `denoise` :number : 去噪精度
	 *
	 * `coordType` :string : 坐标类型
	 */
	createPolygonFence(params:bTrace_createPolygonFence_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询缓存轨迹`
	 * ========params==========
	 *
	 * `entityName` :string : 实体名称  **仅支持 Android 平台**
	 *
	 * `entityNames` :string : entity名称组成的数组  **仅支持 iOS 平台**
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `tag` :number : 请求tag
	 */
	queryCacheTrackRequest(params:bTrace_queryCacheTrackRequest_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询轨迹里程`
	 * ========params==========
	 *
	 * `entityName` :string : 实体名称
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `tag` :number : 请求tag
	 *
	 * `startTime` :number : 开始时间戳
	 *
	 * `endTime` :number : 结束时间戳
	 *
	 * `transportMode` :string : 交通方式
	 *
	 * `ret` :JSON : null
	 */
	queryDistance(params:bTrace_queryDistance_Params):void

	/**
	 * `查询报警信息`
	 * ========params==========
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID， 在 iOS 平台上会忽略本参数
	 *
	 * `tag` :number : 请求tag
	 *
	 * `startTime` :number : 开始时间戳
	 *
	 * `endTime` :number : 结束时间戳
	 *
	 * `monitoredPerson` :string : 被监控的对象
	 *
	 * `coordType` :string : 坐标类型   **仅支持安卓平台**
	 *
	 * `fenceIds` :Array<JSON> : 实体数组
	 *
	 * `ret` :JSON : null
	 */
	queryFenceHistoryAlarmInfo(params:bTrace_queryFenceHistoryAlarmInfo_Params):void

	/**
	 * `删除围栏`
	 * ========params==========
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID，在 iOS 平台上会忽略本参数
	 *
	 * `tag` :number : 请求tag
	 *
	 * `type` :string : 围栏类型 **仅支持 Android 平台**
	 *
	 * `monitoredPerson` :string : 被监控的对象
	 *
	 * `fenceIds` :Array<JSON> : 实体数组
	 *
	 * `ret` :JSON : null
	 */
	deleteFence(params:bTrace_deleteFence_Params):void

	/**
	 * `检索符合过滤条件的Entity终端实体`
	 * ========params==========
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务的ID
	 *
	 * `entityNames` :string : entity标识,可以是多个，不同标识之间用逗号隔开
	 *
	 * `columnKey` :string : （可选项）检索条件（格式为 : "key1=value1,key2=value2,....."）
	 *
	 * `activeTime` :number : （可选项）UNIX时间戳，查询在此时间之后有定位信息上传的entity（loc_time>=activeTime）如查询2016-8-21 00:00:00之后仍活跃的entity，此字段设置为1471708800
	 *
	 * `pageSize` :number : 分页大小
	 *
	 * `pageIndex` :number : （可选项）分页索引
	 *
	 * `returnType` :number : （可选项）返回结果的类型
	 */
	queryRTTrack(params:bTrace_queryRTTrack_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加Entity`
	 * ========params==========
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `entityName` :string : entity名称，作为其唯一标识
	 *
	 * `entityDES` :string : entity的可读性描述
	 *
	 * `columnKey` :string : 属性名称（格式 : "key1=value1,key2=value2......."）
	 */
	addEntity(params:bTrace_addEntity_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询实时状态，查询被监控对象和客户端地理围栏的位置关系`
	 * ========params==========
	 *
	 * `tag` :number : 请求tag
	 *
	 * `serviceId` :number : 开发者创建的鹰眼服务ID
	 *
	 * `fenceId` :number : 要查询的围栏ID
	 *
	 * `monitoredPersons` :string : 监控对象列表（多个entityName，以英文逗号"," 分割），ios平台仅读取第一个
	 *
	 * `type` :string : 围栏类型
	 */
	queryMonitoredStatus(params:bTrace_queryMonitoredStatus_Params, callback?: (ret:JSON) => void):void

}
interface bTrace_initTrace_Params {
	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**终端实体的名称，采集的轨迹将算在该 entity 名下*/ 
	entityName:string,

	/**（可选项）是否保活 **仅支持 ios 平台***/ 
	keepAlive?:boolean,

	/**是否需要对象存储 **仅支持 Android 平台***/ 
	isNeedObjectStorage:boolean,

}

interface bTrace_startTrace_Params {
	/**（可选项）定位精度*/ 
	accuracy?:string,

	/**（可选项）位置更新所需的最小距离（单位米）*/ 
	filter?:number,

}

interface bTrace_queryHistoryTrack_Params {
	/**请求tag*/ 
	tag:number,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**终端实体的名称，采集的轨迹将算在该 entity 名下*/ 
	entityName:string,

	/**开始时间戳（单位：秒）*/ 
	startTime:number,

	/**结束时间戳（单位：秒）*/ 
	endTime:number,

	/**分页大小*/ 
	pageSize:number,

	/**分页索引*/ 
	pageIndex:number,

	/**纠偏设置*/ 
	processOption:JSON,

	/**坐标类型 **注意:仅支持iOS***/ 
	coordType:string,

}

interface bTrace_createCircleFence_Params {
	/**请求tag*/ 
	tag:number,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**终端实体的名称，采集的轨迹将算在该 entity 名下 **仅支持 Android 平台***/ 
	entityName:string,

	/**监控对象*/ 
	monitoredCenter:string,

	/**围栏类型*/ 
	type:string,

	/**中心点纬度*/ 
	centerLatitude:number,

	/**中心点经度*/ 
	centerLongitude:number,

	/**半径*/ 
	radius:number,

	/**去噪精度*/ 
	denoise:number,

	/**围栏名称*/ 
	fenceName:number,

	/**坐标类型*/ 
	coordType:string,

}

interface bTrace_createPolygonFence_Params {
	/**请求tag*/ 
	tag:number,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**围栏名称*/ 
	fenceName:number,

	/**终端实体的名称，采集的轨迹将算在该 entity 名下*/ 
	entityName:string,

	/**监控对象*/ 
	monitoredCenter:string,

	/**多边形顶点数组*/ 
	vertexes:Array<JSON>,

	/**去噪精度*/ 
	denoise:number,

	/**坐标类型*/ 
	coordType:string,

}

interface bTrace_queryCacheTrackRequest_Params {
	/**实体名称  **仅支持 Android 平台***/ 
	entityName:string,

	/**entity名称组成的数组  **仅支持 iOS 平台***/ 
	entityNames:string,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**请求tag*/ 
	tag:number,

}

interface bTrace_queryDistance_Params {
	/**实体名称*/ 
	entityName:string,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**请求tag*/ 
	tag:number,

	/**开始时间戳*/ 
	startTime:number,

	/**结束时间戳*/ 
	endTime:number,

	/**交通方式*/ 
	transportMode:string,

	/**null*/ 
	ret:JSON,

}

interface bTrace_queryFenceHistoryAlarmInfo_Params {
	/**开发者创建的鹰眼服务ID， 在 iOS 平台上会忽略本参数*/ 
	serviceId:number,

	/**请求tag*/ 
	tag:number,

	/**开始时间戳*/ 
	startTime:number,

	/**结束时间戳*/ 
	endTime:number,

	/**被监控的对象*/ 
	monitoredPerson:string,

	/**坐标类型   **仅支持安卓平台***/ 
	coordType:string,

	/**实体数组*/ 
	fenceIds:Array<JSON>,

	/**null*/ 
	ret:JSON,

}

interface bTrace_deleteFence_Params {
	/**开发者创建的鹰眼服务ID，在 iOS 平台上会忽略本参数*/ 
	serviceId:number,

	/**请求tag*/ 
	tag:number,

	/**围栏类型 **仅支持 Android 平台***/ 
	type:string,

	/**被监控的对象*/ 
	monitoredPerson:string,

	/**实体数组*/ 
	fenceIds:Array<JSON>,

	/**null*/ 
	ret:JSON,

}

interface bTrace_queryRTTrack_Params {
	/**开发者创建的鹰眼服务的ID*/ 
	serviceId:number,

	/**entity标识,可以是多个，不同标识之间用逗号隔开*/ 
	entityNames:string,

	/**（可选项）检索条件（格式为 : "key1=value1,key2=value2,....."）*/ 
	columnKey?:string,

	/**（可选项）UNIX时间戳，查询在此时间之后有定位信息上传的entity（loc_time>=activeTime）如查询2016-8-21 00:00:00之后仍活跃的entity，此字段设置为1471708800*/ 
	activeTime?:number,

	/**分页大小*/ 
	pageSize:number,

	/**（可选项）分页索引*/ 
	pageIndex?:number,

	/**（可选项）返回结果的类型*/ 
	returnType?:number,

}

interface bTrace_addEntity_Params {
	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**entity名称，作为其唯一标识*/ 
	entityName:string,

	/**entity的可读性描述*/ 
	entityDES:string,

	/**属性名称（格式 : "key1=value1,key2=value2......."）*/ 
	columnKey:string,

}

interface bTrace_queryMonitoredStatus_Params {
	/**请求tag*/ 
	tag:number,

	/**开发者创建的鹰眼服务ID*/ 
	serviceId:number,

	/**要查询的围栏ID*/ 
	fenceId:number,

	/**监控对象列表（多个entityName，以英文逗号"," 分割），ios平台仅读取第一个*/ 
	monitoredPersons:string,

	/**围栏类型*/ 
	type:string,

}

interface bugout {
	/** **上报异常的方法，（异常会在下次启动时，自动上报至当前app_Key的项目中）***/ 
	reportCustomizedException():void

}
interface bPlayer {
	/**
	 * `本接口进行视频播放器初始化相关工作，可设置是否自动播放`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）播放器的位置及尺寸
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://）
	 *
	 * `autoPlay` :boolean : （可选项）是否自动播放。如果设置为true，播放器完成视频初始化后会自动播放视频；如果设置为false，播放器完成视频初始化后，需要开发者主动调用play方法来播放视频
	 *
	 * `enableLooping` :boolean : （可选项）设置App进入后台后，再次打开时播放器的状态是否为暂停播放
	 *
	 * `initialPlaybackTime` :number : （可选项）视频开始播放的时刻，单位秒
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:bPlayer_open_Params, callback?: (ret:JSON) => void):void

	/** 当在open方法设置非自动播放，或是暂停之后，调用本方法进行播放*/ 
	play():void

	/** 暂停播放*/ 
	pause():void

	/** 停止播放*/ 
	stop():void

	/**
	 * `重置，使播放器回到初始状态。需在stop调用之后再调用reset，reset调用之后可以重新指定播放地址`
	 * ========params==========
	 *
	 * `clearCanvasWhenReset` :boolean : （可选项）在reset时是否清除画布内容（指上次播放视频的画面内容）
	 */
	reset(params:bPlayer_reset_Params):void

	/**
	 * `重新播放指定播放地址。调用replay前，需要先调用stop停止当前视频的播放，再调用reset，reset播放器到初始状态`
	 * ========params==========
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://）
	 *
	 * `autoPlay` :boolean : （可选项）是否自动播放。如果设置为true，播放器完成视频初始化后会自动播放视频；如果设置为false，播放器完成视频初始化后，需要开发者主动调用play方法来播放视频
	 *
	 * `enableLooping` :boolean : （可选项）设置是否循环播放
	 *
	 * `pauseInBackground` :boolean : （可选项）设置App进入后台后，再次打开时播放器的状态是否为暂停播放
	 *
	 * `initialPlaybackTime` :number : （可选项）视频开始播放的时刻，单位秒
	 */
	replay(params:bPlayer_replay_Params, callback?: (ret:JSON) => void):void

	/** 显示视频播放视图*/ 
	show():void

	/** 隐藏视频播放视图，不会改变播放器播放状态*/ 
	hide():void

	/** 关闭播放器*/ 
	close():void

	/**
	 * `快速定位播放位置`
	 * ========params==========
	 *
	 * `currentPlaybackTime` :number : （可选项）播放位置，单位秒
	 */
	seek(params:bPlayer_seek_Params):void

	/** 获取视频的总时长、视频播放到的时刻、视频的可播放长度。调用info前，需要先调用open*/ 
	info():void

	/** 获取多码率列表。如果返回数组中元素个数小于2，表示不是一个多码率HLS视频*/ 
	getSupportedBitrates():void

	/** 获取当前码率索引*/ 
	bitrateIndex():void

	/**
	 * `设置当前码率索引`
	 * ========params==========
	 *
	 * `bitrateIndex` :number : 码率索引
	 */
	setBitrateIndex(params:bPlayer_setBitrateIndex_Params):void

	/**
	 * `视频显示的缩放模式`
	 * ========params==========
	 *
	 * `scalingMode` :string : (可选项)缩放模式
	 */
	scalingMode(params:bPlayer_scalingMode_Params):void

	/** 视频的原始分辨率大小。调用naturalSize前需要先调用open*/ 
	naturalSize():void

	/**
	 * `设置视频播放速率`
	 * ========params==========
	 *
	 * `playbackRate` :number : (可选项)播放速率
	 */
	playbackRate(params:bPlayer_playbackRate_Params):void

	/** 网络视频下载速度*/ 
	downloadSpeed():void

	/**
	 * `快进`
	 * ========params==========
	 *
	 * `seconds` :number : (可选项)快进的秒数
	 */
	forward(params:bPlayer_forward_Params):void

	/**
	 * `快退`
	 * ========params==========
	 *
	 * `seconds` :number : (可选项)快退的秒数
	 */
	rewind(params:bPlayer_rewind_Params):void

	/** 截图，对当前帧进行截图*/ 
	thumbnailImageAtCurrentTime():void

	/** 清除截图缓存*/ 
	clearCache():void

	/** 全屏*/ 
	full():void

	/** 取消全屏*/ 
	cancelFull():void

	/** 是否全屏状态*/ 
	isFull():void

	/**
	 * `设置视频播放器位置、尺寸`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）播放器的位置及尺寸
	 */
	setRect(params:bPlayer_setRect_Params):void

	/**
	 * `- 类型：JSON 对象`
	 * ========params==========
	 *
	 * `origin` :JSON : （可选项）水印图片位置
	 *
	 * `path` :string : 用于设置水印的图片路径，要求本地路径（widget://、fs://）
	 */
	setWatermark(params:bPlayer_setWatermark_Params):void

	/**
	 * `添加事件监听(手势只有当全屏时有效)`
	 * ========params==========
	 *
	 * `name` :Array : （可选项）所要监听的事件名称集合
	 */
	addEventListener(params:bPlayer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加进度监听，可指定播放进度或缓冲进度`
	 * ========params==========
	 *
	 * `name` :string : （可选项）监听的事件类型
	 */
	addProgressListener(params:bPlayer_addProgressListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除进度监听，可指定播放进度或缓冲进度`
	 * ========params==========
	 *
	 * `name` :string : （可选项）监听的事件类型
	 */
	removeProgressListener(params:bPlayer_removeProgressListener_Params):void

	/** 进入后台的调用方法*/ 
	enterBackground():void

	/** 从后台进入前台调用的方法;*/ 
	enterForeground():void

}
interface bPlayer_open_Params {
	/**（可选项）播放器的位置及尺寸*/ 
	rect?:JSON,

	/**视频资源地址,支持网络和本地路径（fs://）*/ 
	path:string,

	/**（可选项）是否自动播放。如果设置为true，播放器完成视频初始化后会自动播放视频；如果设置为false，播放器完成视频初始化后，需要开发者主动调用play方法来播放视频*/ 
	autoPlay?:boolean,

	/**（可选项）设置App进入后台后，再次打开时播放器的状态是否为暂停播放*/ 
	enableLooping?:boolean,

	/**（可选项）视频开始播放的时刻，单位秒*/ 
	initialPlaybackTime?:number,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface bPlayer_reset_Params {
	/**（可选项）在reset时是否清除画布内容（指上次播放视频的画面内容）*/ 
	clearCanvasWhenReset?:boolean,

}

interface bPlayer_replay_Params {
	/**视频资源地址,支持网络和本地路径（fs://）*/ 
	path:string,

	/**（可选项）是否自动播放。如果设置为true，播放器完成视频初始化后会自动播放视频；如果设置为false，播放器完成视频初始化后，需要开发者主动调用play方法来播放视频*/ 
	autoPlay?:boolean,

	/**（可选项）设置是否循环播放*/ 
	enableLooping?:boolean,

	/**（可选项）设置App进入后台后，再次打开时播放器的状态是否为暂停播放*/ 
	pauseInBackground?:boolean,

	/**（可选项）视频开始播放的时刻，单位秒*/ 
	initialPlaybackTime?:number,

}

interface bPlayer_seek_Params {
	/**（可选项）播放位置，单位秒*/ 
	currentPlaybackTime?:number,

}

interface bPlayer_setBitrateIndex_Params {
	/**码率索引*/ 
	bitrateIndex:number,

}

interface bPlayer_scalingMode_Params {
	/**(可选项)缩放模式*/ 
	scalingMode?:string,

}

interface bPlayer_playbackRate_Params {
	/**(可选项)播放速率*/ 
	playbackRate?:number,

}

interface bPlayer_forward_Params {
	/**(可选项)快进的秒数*/ 
	seconds?:number,

}

interface bPlayer_rewind_Params {
	/**(可选项)快退的秒数*/ 
	seconds?:number,

}

interface bPlayer_setRect_Params {
	/**（可选项）播放器的位置及尺寸*/ 
	rect?:JSON,

}

interface bPlayer_setWatermark_Params {
	/**（可选项）水印图片位置*/ 
	origin?:JSON,

	/**用于设置水印的图片路径，要求本地路径（widget://、fs://）*/ 
	path:string,

}

interface bPlayer_addEventListener_Params {
	/**（可选项）所要监听的事件名称集合*/ 
	name?:Array,

}

interface bPlayer_addProgressListener_Params {
	/**（可选项）监听的事件类型*/ 
	name?:string,

}

interface bPlayer_removeProgressListener_Params {
	/**（可选项）监听的事件类型*/ 
	name?:string,

}

interface geTui {
}
interface shareinstall {
}
interface tpush {
	/** 初始化（仅Android有效）*/ 
	init():void

	/** 接收消息*/ 
	setListener():void

	/**
	 * `给应用设置标签`
	 * ========params==========
	 *
	 * `tagValue` :string : 给应用添加标签，推送时候选择标签 1对多
	 */
	setTag(params:tpush_setTag_Params):void

	/**
	 * `给应用设置别名`
	 * ========params==========
	 *
	 * `alias` :string : (可选项)给应用设置别名  1对1
	 */
	setAlias(params:tpush_setAlias_Params):void

}
interface tpush_setTag_Params {
	/**给应用添加标签，推送时候选择标签 1对多*/ 
	tagValue:string,

}

interface tpush_setAlias_Params {
	/**(可选项)给应用设置别名  1对1*/ 
	alias?:string,

}

interface UIBPlayer {
	/**
	 * `打开播放器界面`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）播放器的位置及尺寸
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget)
	 *
	 * `autoPlay` :boolean : （可选项）是否自动播放
	 *
	 * `enableLooping` :boolean : （可选项）设置是否循环播放
	 *
	 * `pauseInBackground` :boolean : （可选项）设置App进入后台后，播放器的状态是否为暂停播放(android不支持此参数，可以通过引擎的接口监听APP处于前后台，调用play和pause接口)
	 *
	 * `coverImg` :string : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `videoScalingMode` :string : （可选项）视频的缩放模式 (ios不支持)
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `styles` :JSON : 播放器的样式设置
	 */
	open(params:UIBPlayer_open_Params):void

	/** 显示播放器*/ 
	show():void

	/** 隐藏播放器*/ 
	hide():void

	/** 关闭播放器*/ 
	close():void

	/**
	 * `重新播放指定播放地址。`
	 * ========params==========
	 *
	 * `path` :string : （可选项）视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget)
	 *
	 * `title` :string : （可选项）顶部标题文字
	 */
	replay(params:UIBPlayer_replay_Params):void

	/**
	 * `设置footer和header显示或隐藏`
	 * ========params==========
	 *
	 * `name` :string : （可选项）设置footer还是header显示或隐藏
	 *
	 * `show` :boolean : （可选项）是否显示
	 */
	controlViewShow(params:UIBPlayer_controlViewShow_Params):void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件的名字
	 */
	addEventListener(params:UIBPlayer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除监听`
	 * ========params==========
	 *
	 * `name` :string : 移除监听的事件的名字
	 */
	removeEventListener(params:UIBPlayer_removeEventListener_Params):void

	/** 播放*/ 
	play():void

	/** 暂停*/ 
	pause():void

	/** 全屏播放（横屏模式）*/ 
	fullScreen():void

	/** 取消全屏播放*/ 
	cancelFullScreen():void

}
interface UIBPlayer_open_Params {
	/**（可选项）播放器的位置及尺寸*/ 
	rect?:JSON,

	/**视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget)*/ 
	path:string,

	/**（可选项）是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）设置是否循环播放*/ 
	enableLooping?:boolean,

	/**（可选项）设置App进入后台后，播放器的状态是否为暂停播放(android不支持此参数，可以通过引擎的接口监听APP处于前后台，调用play和pause接口)*/ 
	pauseInBackground?:boolean,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:string,

	/**（可选项）视频的缩放模式 (ios不支持)*/ 
	videoScalingMode?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**播放器的样式设置*/ 
	styles:JSON,

}

interface UIBPlayer_replay_Params {
	/**（可选项）视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget)*/ 
	path?:string,

	/**（可选项）顶部标题文字*/ 
	title?:string,

}

interface UIBPlayer_controlViewShow_Params {
	/**（可选项）设置footer还是header显示或隐藏*/ 
	name?:string,

	/**（可选项）是否显示*/ 
	show?:boolean,

}

interface UIBPlayer_addEventListener_Params {
	/**监听的事件的名字*/ 
	name:string,

}

interface UIBPlayer_removeEventListener_Params {
	/**移除监听的事件的名字*/ 
	name:string,

}

interface miniVideoRecord {
}
interface JGCertificate {
	/**
	 * `初始化`
	 * ========params==========
	 *
	 * `key` :string : appkey
	 */
	init(params:JGCertificate_init_Params, callback?: (ret:JSON) => void):void

	/** 判断网络环境是否支持*/ 
	checkVerifyEnable():void

	/** 获取认证token*/ 
	getToken():void

	/** 登录预取号*/ 
	preLogin():void

	/** 清除预取号缓存*/ 
	clearPreLoginCache():void

	/**
	 * `请求授权一键登录`
	 * ========params==========
	 *
	 * `type` :number : 一键登录页面类型
	 */
	getAuthorization(params:JGCertificate_getAuthorization_Params, callback?: (ret:JSON) => void):void

	/** 取消、返回*/ 
	dismissLoginController():void

}
interface JGCertificate_init_Params {
	/**appkey*/ 
	key:string,

}

interface JGCertificate_getAuthorization_Params {
	/**一键登录页面类型*/ 
	type:number,

}

interface txPlayer {
	/** 打开一个直播或点播*/ 
	open():void

	/** 关闭播放器并释放内存*/ 
	close():void

	/** 继续播放*/ 
	resume():void

	/** 设置视频地址及标题，开始播放位置*/ 
	setPath():void

	/**
	 * `设置视频区域大小。`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）视频区域的位置及尺寸
	 */
	setRect(params:txPlayer_setRect_Params):void

	/** 重播*/ 
	replay():void

	/**
	 * `设置视频播放位置`
	 * ========params==========
	 *
	 * `pos` :any : （可选项）视频播放开始位置，单位：秒。
	 */
	seek(params:txPlayer_seek_Params):void

	/** 获取视频播放的位置*/ 
	getCurrent():void

	/** 获取视频总时长*/ 
	getDuration():void

	/** 设置视频播放倍数*/ 
	setRate():void

	/** 获取视频播放的倍速*/ 
	getRate():void

	/** 全屏显示*/ 
	fullscreen():void

	/** 取消全屏显示*/ 
	cancelFullscreen():void

	/** 获取音量*/ 
	getVol():void

	/** 设置音量*/ 
	setVol():void

	/** 获取亮度*/ 
	getBrightness():void

	/** 设置亮度*/ 
	setBrightness():void

	/** 设置是否在后台播放*/ 
	pauseInBackground():void

}
interface txPlayer_setRect_Params {
	/**（可选项）视频区域的位置及尺寸*/ 
	rect?:JSON,

}

interface txPlayer_seek_Params {
	/**（可选项）视频播放开始位置，单位：秒。*/ 
	pos?:any,

}

interface uzkJDopen {
	/** 京东联盟SDK模块初始化（使用模块前务必进行一次初始化操作，该方法可以写在入口文件index.html页面）*/ 
	init(callback?: (ret:JSON) => void):void

	/** 拉起京东客户端打开任意链接（必须为京东系域名链接无法打开）*/ 
	openurl(callback?: (ret:JSON) => void):void

}
interface UIEaseCEC {
	/**
	 * `- 类型：字符串`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `password` :string : 密码
	 */
	easeRegister(params:UIEaseCEC_easeRegister_Params, callback?: (ret:JSON) => void):void

	/**
	 * `登录接口`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `password` :string : 密码
	 */
	login(params:UIEaseCEC_login_Params, callback?: (ret:JSON) => void):void

	/** 添加网络监听，可以显示当前是否连接服务器*/ 
	addConnectionListener():void

	/**
	 * `根据IM服务号创建并打开聊天页面`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `projectId` :string : 留言的Project ID
	 *
	 * `navigationBar` :JSON : 导航条样式配置
	 *
	 * `avatar` :JSON : 头像样式配置
	 *
	 * `nickname` :JSON : （可选项）各成员昵称信息，以username为key，昵称为value的JSON对象
	 *
	 * `Info` :JSON : （可选项）商品信息；进入聊天页面后会主动生成此商品信息
	 */
	chat(params:UIEaseCEC_chat_Params):void

	/**
	 * `发送文本消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `text` :string : 发送的消息
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendText(params:UIEaseCEC_sendText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送图片消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `path` :string : 要发送的图片的路径，要求本地路径（fs://、widget://）
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendImage(params:UIEaseCEC_sendImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送位置消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `address` :string : 要发送的地址
	 *
	 * `latitude` :number : 纬度
	 *
	 * `longitude` :number : 经度
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendLocation(params:UIEaseCEC_sendLocation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送声音消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `path` :string : 要发送的音频的路径，要求本地路径（fs://、widget://）
	 *
	 * `length` :number : 录音时间(秒)
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendVoice(params:UIEaseCEC_sendVoice_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送透传消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `action` :string : 命令命令内容
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendControl(params:UIEaseCEC_sendControl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送访客信息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `info` :JSON : 访客信息
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendVisitorInfo(params:UIEaseCEC_sendVisitorInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送轨迹消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `info` :JSON : 商品信息
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendVisitorTrack(params:UIEaseCEC_sendVisitorTrack_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送订单消息`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `info` :JSON : 商品信息
	 *
	 * `agentInfo` :string : （可选项）指定某个客服账号，客服账号为客服的登录邮箱地址
	 *
	 * `queueInfo` :string : （可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可
	 *
	 * `ext` :JSON : （可选项）扩展信息
	 */
	sendOrder(params:UIEaseCEC_sendOrder_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从数据库中获取消息，获取到的消息是startMsgId之前或者之后的pagesize条消息；（仅ios支持）`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `startMsgId` :string : (可选项）消息id，如果不写此项，从数据库中读取最新的记录
	 *
	 * `count` :number : (可选项) 获取条数
	 *
	 * `direction` :number : (可选项) 搜索方向;0：向上搜索，1：向下搜索
	 */
	loadMessageFromDB(params:UIEaseCEC_loadMessageFromDB_Params, callback?: (ret:JSON) => void):void

	/** 获取所有会话*/ 
	loadConversastions():void

	/**
	 * `删除一条会话`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `isMessage` :boolean : （可选项）是否删除相关的消息
	 */
	deleteConversation(params:UIEaseCEC_deleteConversation_Params):void

	/**
	 * `删除消息记录`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 *
	 * `messageId` :string : （可选项）消息id，不传则删除全部聊天记录
	 */
	deleteMessage(params:UIEaseCEC_deleteMessage_Params):void

	/**
	 * `获取会话未读消息数`
	 * ========params==========
	 *
	 * `conversationId` :string : IM服务号
	 */
	getMessagesCount(params:UIEaseCEC_getMessagesCount_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置推送全局属性`
	 * ========params==========
	 *
	 * `displayName` :string : （可选项）推送消息显示的昵称，不传则不设置
	 *
	 * `displayStyle` :string : （可选项）推送消息显示的类型
	 *
	 * `noDisturbStatus` :string : （可选项）消息推送的免打扰设置
	 *
	 * `noDisturbingStartH` :number : （可选项）消息推送免打扰开始时间，小时，暂时只支持整点（小时），不传则不设置
	 *
	 * `noDisturbingEndH` :number : （可选项）消息推送免打扰结束时间，小时，暂时只支持整点（小时），不传则不设置
	 */
	setPushOption(params:UIEaseCEC_setPushOption_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置推送昵称`
	 * ========params==========
	 *
	 * `nickname` :string : 推送消息显示的昵称
	 */
	setApnsNickname(params:UIEaseCEC_setApnsNickname_Params, callback?: (ret:JSON) => void):void

}
interface UIEaseCEC_easeRegister_Params {
	/**用户名*/ 
	username:string,

	/**密码*/ 
	password:string,

}

interface UIEaseCEC_login_Params {
	/**用户名*/ 
	username:string,

	/**密码*/ 
	password:string,

}

interface UIEaseCEC_chat_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**留言的Project ID*/ 
	projectId:string,

	/**导航条样式配置*/ 
	navigationBar:JSON,

	/**头像样式配置*/ 
	avatar:JSON,

	/**（可选项）各成员昵称信息，以username为key，昵称为value的JSON对象*/ 
	nickname?:JSON,

	/**（可选项）商品信息；进入聊天页面后会主动生成此商品信息*/ 
	Info?:JSON,

}

interface UIEaseCEC_sendText_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**发送的消息*/ 
	text:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendImage_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**要发送的图片的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendLocation_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**要发送的地址*/ 
	address:string,

	/**纬度*/ 
	latitude:number,

	/**经度*/ 
	longitude:number,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendVoice_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**要发送的音频的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**录音时间(秒)*/ 
	length:number,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendControl_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**命令命令内容*/ 
	action:string,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendVisitorInfo_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**访客信息*/ 
	info:JSON,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendVisitorTrack_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**商品信息*/ 
	info:JSON,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_sendOrder_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**商品信息*/ 
	info:JSON,

	/**（可选项）指定某个客服账号，客服账号为客服的登录邮箱地址*/ 
	agentInfo?:string,

	/**（可选项）指定某个技能组，技能组名称须和客服系统设置的技能组名称完全一致，中英文均可*/ 
	queueInfo?:string,

	/**（可选项）扩展信息*/ 
	ext?:JSON,

}

interface UIEaseCEC_loadMessageFromDB_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**(可选项）消息id，如果不写此项，从数据库中读取最新的记录*/ 
	startMsgId?:string,

	/**(可选项) 获取条数*/ 
	count?:number,

	/**(可选项) 搜索方向;0：向上搜索，1：向下搜索*/ 
	direction?:number,

}

interface UIEaseCEC_deleteConversation_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**（可选项）是否删除相关的消息*/ 
	isMessage?:boolean,

}

interface UIEaseCEC_deleteMessage_Params {
	/**IM服务号*/ 
	conversationId:string,

	/**（可选项）消息id，不传则删除全部聊天记录*/ 
	messageId?:string,

}

interface UIEaseCEC_getMessagesCount_Params {
	/**IM服务号*/ 
	conversationId:string,

}

interface UIEaseCEC_setPushOption_Params {
	/**（可选项）推送消息显示的昵称，不传则不设置*/ 
	displayName?:string,

	/**（可选项）推送消息显示的类型*/ 
	displayStyle?:string,

	/**（可选项）消息推送的免打扰设置*/ 
	noDisturbStatus?:string,

	/**（可选项）消息推送免打扰开始时间，小时，暂时只支持整点（小时），不传则不设置*/ 
	noDisturbingStartH?:number,

	/**（可选项）消息推送免打扰结束时间，小时，暂时只支持整点（小时），不传则不设置*/ 
	noDisturbingEndH?:number,

}

interface UIEaseCEC_setApnsNickname_Params {
	/**推送消息显示的昵称*/ 
	nickname:string,

}

interface wxVoicePlus {
	/**
	 * `配置语音识别时的参数`
	 * ========params==========
	 *
	 * `appId` :string : 微信开放平台分配给移动应用的AppID。
	 *
	 * `resultType` :any : （可选项）设置识别类型，0无标点，1有标点
	 *
	 * `silTime` :any : （可选项）静音检查时间。开始录音，并检测到有语音产生后，超过此时间没有声音，则自动完成本次录音，单位：秒（s）。本参数仅对非连续性识别（通过startSpeechRecognizer接口开启的语音识别）有效。
	 *
	 * `cont` :boolean : （可选项）设置是否使用流式方式返回识别结果。由于SDK限制，本参数暂仅支持android端。iOS端连续性识别时只支持流式返回识别结果，非连续性识别时只支持非流式返回识别结果。
	 */
	speechRecognizerConfiguration(params:wxVoicePlus_speechRecognizerConfiguration_Params):void

	/** 开始非连续性语音识别。当长时间静默时（默认设置为：开始5秒仍没有说话，或者说话后1.5秒）录音会停止。*/ 
	startSpeechRecognizer():void

	/** 结束非连续性识别的语音采集。*/ 
	finishSpeechRecognizer():void

	/** 取消/停止非连续性识别。调用本接口后会完全中断本次识别。*/ 
	cancelSpeechRecognizer():void

	/** 开始连续性语音识别。*/ 
	startContinusRecognizer():void

	/** 停止连续性语音识别的语音采集。*/ 
	finishContinusRecognizer():void

	/** 添加语音识别音量监听*/ 
	addRecognizeVolumListener():void

	/** 移除语音识别音量监听*/ 
	removeRecognizeVolumListener():void

	/**
	 * `语音合成配置。`
	 * ========params==========
	 *
	 * `appId` :string : 微信开放平台分配给移动应用的AppID
	 *
	 * `volumn` :any : （可选项）音量范围0-2
	 */
	speechSynthesizerConfiguration(params:wxVoicePlus_speechSynthesizerConfiguration_Params):void

	/**
	 * `开始语音合成。`
	 * ========params==========
	 *
	 * `text` :string : 需要合成的文本
	 */
	startSpeechSynthesizer(params:wxVoicePlus_startSpeechSynthesizer_Params, callback?: (ret:JSON) => void):void

	/** 取消语音合成，若已经合成完成在播放阶段，则也会停止播放合成后的语音*/ 
	cancelSpeechSynthesizer():void

}
interface wxVoicePlus_speechRecognizerConfiguration_Params {
	/**微信开放平台分配给移动应用的AppID。*/ 
	appId:string,

	/**（可选项）设置识别类型，0无标点，1有标点*/ 
	resultType?:any,

	/**（可选项）静音检查时间。开始录音，并检测到有语音产生后，超过此时间没有声音，则自动完成本次录音，单位：秒（s）。本参数仅对非连续性识别（通过startSpeechRecognizer接口开启的语音识别）有效。*/ 
	silTime?:any,

	/**（可选项）设置是否使用流式方式返回识别结果。由于SDK限制，本参数暂仅支持android端。iOS端连续性识别时只支持流式返回识别结果，非连续性识别时只支持非流式返回识别结果。*/ 
	cont?:boolean,

}

interface wxVoicePlus_speechSynthesizerConfiguration_Params {
	/**微信开放平台分配给移动应用的AppID*/ 
	appId:string,

	/**（可选项）音量范围0-2*/ 
	volumn?:any,

}

interface wxVoicePlus_startSpeechSynthesizer_Params {
	/**需要合成的文本*/ 
	text:string,

}

interface tencentTIC {
	/**
	 * `创建白板控制器`
	 * ========params==========
	 *
	 * `sdkAppId` :number : 应用标识，腾讯[腾讯互动白板控制台](https://console.cloud.tencent.com/tiw/app)获取
	 *
	 * `userId` :string : 用户标识
	 *
	 * `userSig` :string : 签名
	 *
	 * `roomId` :string : 课堂ID
	 *
	 * `ratio` :string : （可选项）默认白板宽高比，可传格式如“4:3”、“16:9”的字符串
	 *
	 * `drawEnable` :boolean : （可选项）是否允许涂鸦
	 *
	 * `globalBgColor` :string : （可选项）全局背景色，支持rgb、rgba、#
	 *
	 * `toolType` :number : （可选项）白板工具
	 *
	 * `brushColor` :string : （可选项）画笔颜色，支持rgb、rgba、#
	 *
	 * `brushThin` :number : （可选项）画笔粗细
	 *
	 * `textColor` :string : （可选项）文本颜色，支持rgb、rgba、#
	 *
	 * `textSize` :number : （可选项）文本粗细
	 *
	 * `textStyle` :number : （可选项）文本样式
	 *
	 * `timSync` :boolean : （可选项）是否使用腾讯云IMSDK进行实时数据同步
	 *
	 * `dataSyncEnable` :boolean : （可选项）是否启用数据同步，禁用后将导致本地白板操作不会被同步给远端
	 *
	 * `preloadDepth` :number : （可选项）图片预加载深度，默认值5，表示预加载当前页前后5页的图片
	 *
	 * `smoothLevel` :number : （可选项）平滑系数，范围[0，1]
	 *
	 * `boardContentFitMode` :number : （可选项）白板内容自适应模式
	 */
	createBoard(params:tencentTIC_createBoard_Params):void

	/**
	 * `白板窗口获取及显示`
	 * ========params==========
	 *
	 * `rect` :JSON : (可选项）白板窗口位置及长宽
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	openBoardRenderView(params:tencentTIC_openBoardRenderView_Params):void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `name` :string : 监听事件名字（仅iOS支持）
	 */
	addBoardListener(params:tencentTIC_addBoardListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加白板同步数据，该接口用于多个白板间的数据同步，使用内置IM作为信令通道时，不需要调用该接口`
	 * ========params==========
	 *
	 * `data` :string : 接收到的房间内其他人发送的同步数据
	 */
	addSyncData(params:tencentTIC_addSyncData_Params):void

	/**
	 * `设置白板是否开启数据同步，关闭数据同步，本地的所有白板操作不会同步到远端和服务器`
	 * ========params==========
	 *
	 * `enable` :boolean : （可选项）是否开启
	 */
	setDataSyncEnable(params:tencentTIC_setDataSyncEnable_Params):void

	/** 获取白板是否开启数据同步*/ 
	isDataSyncEnable():void

	/** 重置白板，调用该接口后将会删除所有的白板页和文件*/ 
	reset():void

	/** 获取版本号*/ 
	getVersion():void

	/**
	 * `设置白板是否允许涂鸦`
	 * ========params==========
	 *
	 * `enable` :boolean : （可选项）是否允许涂鸦，true 表示白板可以涂鸦，false 表示白板不能涂鸦，白板创建后默认为允许涂鸦状态
	 */
	setDrawEnable(params:tencentTIC_setDrawEnable_Params):void

	/** 获取白板是否允许涂鸦*/ 
	isDrawEnable():void

	/**
	 * `设置白板默认背景色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的默认背景色，支持rgb、rgba、#
	 */
	setGlobalBackgroundColor(params:tencentTIC_setGlobalBackgroundColor_Params):void

	/** 获取白板默认背景色*/ 
	getGlobalBackgroundColor():void

	/**
	 * `设置当前白板页的背景色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的背景色，支持rgb、rgba、#
	 */
	setBackgroundColor(params:tencentTIC_setBackgroundColor_Params):void

	/** 获取当前白板页的背景色*/ 
	getBackgroundColor():void

	/**
	 * `设置当前白板页的背景图片，当URL是一个有效的本地文件地址时，该文件会被自动上传到COS,该接口与setBackgroundH5接口互斥`
	 * ========params==========
	 *
	 * `url` :string : 要设置的背景图片URL，支持widget、fs（android仅支持fs）
	 *
	 * `mode` :number : （可选项）要使用的图片填充对齐模式，当以宽度基准等比例放大，则居左和居右同居中对齐效果一致；当以高度基准等比例放大，则居顶和居底同居中对齐效果一致
	 */
	setBackgroundImage(params:tencentTIC_setBackgroundImage_Params):void

	/**
	 * `设置要使用的白板工具`
	 * ========params==========
	 *
	 * `toolType` :number : （可选项）白板工具
	 */
	setToolType(params:tencentTIC_setToolType_Params):void

	/** 获取正在使用的白板工具*/ 
	getToolType():void

	/**
	 * `设置画笔颜色，画笔颜色用于所有涂鸦绘制`
	 * ========params==========
	 *
	 * `color` :string : 要设置的画笔颜色，支持rgb、rgba、#
	 */
	setBrushColor(params:tencentTIC_setBrushColor_Params):void

	/** 获取画笔颜色*/ 
	getBrushColor():void

	/**
	 * `设置画笔粗细，画笔粗细用于所有涂鸦绘制，实际像素值取值(thin * 白板的高度 / 10000)px，如果结果小于1px，则涂鸦的线条会比较虚`
	 * ========params==========
	 *
	 * `thin` :number : 要设置的画笔粗细
	 */
	setBrushThin(params:tencentTIC_setBrushThin_Params):void

	/** 获取画笔粗细*/ 
	getBrushThin():void

	/**
	 * `设置文本颜色`
	 * ========params==========
	 *
	 * `color` :string : 要设置的文本颜色，支持rgb、rgba、#
	 */
	setTextColor(params:tencentTIC_setTextColor_Params):void

	/** 获取文本颜色*/ 
	getTextColor():void

	/**
	 * `设置文本样式`
	 * ========params==========
	 *
	 * `style` :number : （可选项）要设置的文本样式
	 */
	setTextStyle(params:tencentTIC_setTextStyle_Params):void

	/** 获取文本样式*/ 
	getTextStyle():void

	/**
	 * `设置文本大小，实际像素值取值(size * 白板的高度 / 10000)px`
	 * ========params==========
	 *
	 * `size` :number : 要设置的文本大小
	 */
	setTextSize(params:tencentTIC_setTextSize_Params):void

	/** 获取文本大小*/ 
	getTextSize():void

	/**
	 * `设置椭圆绘制模式`
	 * ========params==========
	 *
	 * `mode` :number : （可选项）椭圆绘制模式
	 */
	setOvalDrawMode(params:tencentTIC_setOvalDrawMode_Params):void

	/** 获取椭圆绘制模式*/ 
	getOvalDrawMode():void

	/** 撤销当前白板页上一次动作*/ 
	undo():void

	/** 重做当前白板页上一次撤销*/ 
	redo():void

	/** 清除涂鸦，同时清空背景色以及背景图片*/ 
	clear():void

	/** 清除涂鸦*/ 
	clearDraws():void

	/**
	 * `增加一页白板，白板页会被添加到当前文件`
	 * ========params==========
	 *
	 * `url` :any : （可选项）要使用的背景图片URL，为空表示不指定背景图片，支持widget、fs
	 */
	addBoardWithBackgroundImage(params:tencentTIC_addBoardWithBackgroundImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除一页白板`
	 * ========params==========
	 *
	 * `boardId` :string : （可选项）要删除的白板ID，为空表示删除当前页
	 */
	deleteBoard(params:tencentTIC_deleteBoard_Params):void

	/** 上一步，每个Step对应PPT的一个动画效果，若当前没有已展示的动画效果，则该接口调用会导致向前翻页*/ 
	prevStep():void

	/** 下一步，每个Step对应PPT的一个动画效果，若当前没有未展示的动画效果，则该接口调用会导致向后翻页*/ 
	nextStep():void

	/**
	 * `向前翻页，若当前白板页为当前文件的第一页，则该接口调用无效`
	 * ========params==========
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 */
	preBoard(params:tencentTIC_preBoard_Params):void

	/**
	 * `向后翻页，若当前白板页为当前文件的最后一页，则该接口调用无效`
	 * ========params==========
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 */
	nextBoard(params:tencentTIC_nextBoard_Params):void

	/**
	 * `跳转到指定白板页，允许跳转到任意文件的白板页`
	 * ========params==========
	 *
	 * `boardId` :string : 要跳转到的白板页ID
	 */
	gotoBoard(params:tencentTIC_gotoBoard_Params):void

	/**
	 * `向前翻页，若当前白板页为当前文件的第一页，则该接口调用无效`
	 * ========params==========
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 */
	preBoard(params:tencentTIC_preBoard_Params):void

	/**
	 * `向后翻页，若当前白板页为当前文件的最后一页，则该接口调用无效`
	 * ========params==========
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 */
	nextBoard(params:tencentTIC_nextBoard_Params):void

	/**
	 * `跳转到指定白板页，允许跳转到任意文件的白板页`
	 * ========params==========
	 *
	 * `boardId` :string : 要跳转到的白板页ID
	 *
	 * `resetStep` :boolean : （可选项）是否重置白板步数
	 */
	gotoBoardWithBoardId(params:tencentTIC_gotoBoardWithBoardId_Params):void

	/** 获取当前白板页ID*/ 
	getCurrentBoard():void

	/** 获取所有文件的白板列表*/ 
	getBoardList():void

	/**
	 * `设置当前白板页宽高比`
	 * ========params==========
	 *
	 * `ratio` :string : 要设置的白板宽高比，格式如"4:3" "16:9"
	 */
	setBoardRatio(params:tencentTIC_setBoardRatio_Params):void

	/** 获取当前白板页宽高比*/ 
	getBoardRatio():void

	/**
	 * `设置当前白板页缩放比例`
	 * ========params==========
	 *
	 * `scale` :number : 要设置的白板缩放比例，支持范围: [100，300]，实际缩放比为: scale/100
	 */
	setBoardScale(params:tencentTIC_setBoardScale_Params):void

	/** 获取当前白板页缩放比例*/ 
	getBoardScale():void

	/**
	 * `设置白板内容自适应模式，设置自适应模式后会影响所有后续白板内容操作`
	 * ========params==========
	 *
	 * `mode` :number : （可选项）要设置的白板内容自适应模式
	 */
	setBoardContentFitMode(params:tencentTIC_setBoardContentFitMode_Params):void

	/** 获取白板内容自适应模式*/ 
	getBoardContentFitMode():void

	/**
	 * `发起文件转码请求，支持 PPT、PDF、Word文件转码，PPT文档默认转为H5动画，能够还原PPT原有动画效果，其它文档转码为静态图片，PPT动画转码耗时约1秒/页，所有文档的静态转码耗时约0.5秒/页`
	 * ========params==========
	 *
	 * `path` :string : 要转码的文件路径，编码格式为UTF8，支持fs、widget
	 *
	 * `config` :JSON : （可选项）转码参数
	 */
	applyFileTranscode(params:tencentTIC_applyFileTranscode_Params):void

	/**
	 * `主动查询文件转码进度，该接口仅用于特殊业务场景下主动查询文件转码进度`
	 * ========params==========
	 *
	 * `taskId` :string : 转码任务taskId
	 */
	getFileTranscodeProgress(params:tencentTIC_getFileTranscodeProgress_Params):void

	/**
	 * `添加转码文件`
	 * ========params==========
	 *
	 * `config` :JSON : （可选项）转码参数
	 */
	addTranscodeFile(params:tencentTIC_addTranscodeFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除文件，文件ID为空时表示当前文件，默认文件无法删除`
	 * ========params==========
	 *
	 * `fileId` :string : （可选项）要删除的文件ID
	 */
	deleteFile(params:tencentTIC_deleteFile_Params):void

	/**
	 * `切换文件，文件ID为必填项，为空将导致文件切换失败`
	 * ========params==========
	 *
	 * `fileId` :string : 要切换到的文件ID
	 */
	switchFile(params:tencentTIC_switchFile_Params):void

	/**
	 * `跳转到文件指定白班指定步，只在首次加载文件时有效，跳转到非当前文件的指定白板指定步`
	 * ========params==========
	 *
	 * `fileId` :string : 文件ID
	 *
	 * `boardId` :string : 白板ID
	 *
	 * `stepIndex` :number : 步数索引
	 */
	switchFileBoardIdStepIndex(params:tencentTIC_switchFileBoardIdStepIndex_Params):void

	/** 获取当前文件ID*/ 
	getCurrentFile():void

	/** 获取白板中上传的所有文件的文件信息列表*/ 
	getFileInfoList():void

	/**
	 * `获取指定文件id的文件信息`
	 * ========params==========
	 *
	 * `fileId` :string : 文件ID
	 */
	getFileInfo(params:tencentTIC_getFileInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取指定文件id的文件信息`
	 * ========params==========
	 *
	 * `fileId` :string : 文件ID
	 */
	getFileBoardList(params:tencentTIC_getFileBoardList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清空指定文件的所有白板涂鸦`
	 * ========params==========
	 *
	 * `fileId` :string : 文件ID
	 */
	clearFileDraws(params:tencentTIC_clearFileDraws_Params):void

	/**
	 * `获取指定文件的缩略图，不支持默认文件（fileId=#DEFAULT），用户在调用rest api请求转码时，需要带上 "thumbnail_resolution" 参数，开启缩略图功能，否则返回的缩略图url无效`
	 * ========params==========
	 *
	 * `fileId` :string : 文件ID
	 */
	getThumbnailImages(params:tencentTIC_getThumbnailImages_Params, callback?: (ret:JSON) => void):void

	/** 获取同步时间*/ 
	getSyncTime():void

	/**
	 * `同步远程时间`
	 * ========params==========
	 *
	 * `userId` :string : 用户Id
	 *
	 * `timestamp` :number : 毫秒级时间戳
	 */
	syncRemoteTime(params:tencentTIC_syncRemoteTime_Params):void

}
interface tencentTIC_createBoard_Params {
	/**应用标识，腾讯[腾讯互动白板控制台](https://console.cloud.tencent.com/tiw/app)获取*/ 
	sdkAppId:number,

	/**用户标识*/ 
	userId:string,

	/**签名*/ 
	userSig:string,

	/**课堂ID*/ 
	roomId:string,

	/**（可选项）默认白板宽高比，可传格式如“4:3”、“16:9”的字符串*/ 
	ratio?:string,

	/**（可选项）是否允许涂鸦*/ 
	drawEnable?:boolean,

	/**（可选项）全局背景色，支持rgb、rgba、#*/ 
	globalBgColor?:string,

	/**（可选项）白板工具*/ 
	toolType?:number,

	/**（可选项）画笔颜色，支持rgb、rgba、#*/ 
	brushColor?:string,

	/**（可选项）画笔粗细*/ 
	brushThin?:number,

	/**（可选项）文本颜色，支持rgb、rgba、#*/ 
	textColor?:string,

	/**（可选项）文本粗细*/ 
	textSize?:number,

	/**（可选项）文本样式*/ 
	textStyle?:number,

	/**（可选项）是否使用腾讯云IMSDK进行实时数据同步*/ 
	timSync?:boolean,

	/**（可选项）是否启用数据同步，禁用后将导致本地白板操作不会被同步给远端*/ 
	dataSyncEnable?:boolean,

	/**（可选项）图片预加载深度，默认值5，表示预加载当前页前后5页的图片*/ 
	preloadDepth?:number,

	/**（可选项）平滑系数，范围[0，1]*/ 
	smoothLevel?:number,

	/**（可选项）白板内容自适应模式*/ 
	boardContentFitMode?:number,

}

interface tencentTIC_openBoardRenderView_Params {
	/**(可选项）白板窗口位置及长宽*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface tencentTIC_addBoardListener_Params {
	/**监听事件名字（仅iOS支持）*/ 
	name:string,

}

interface tencentTIC_addSyncData_Params {
	/**接收到的房间内其他人发送的同步数据*/ 
	data:string,

}

interface tencentTIC_setDataSyncEnable_Params {
	/**（可选项）是否开启*/ 
	enable?:boolean,

}

interface tencentTIC_setDrawEnable_Params {
	/**（可选项）是否允许涂鸦，true 表示白板可以涂鸦，false 表示白板不能涂鸦，白板创建后默认为允许涂鸦状态*/ 
	enable?:boolean,

}

interface tencentTIC_setGlobalBackgroundColor_Params {
	/**要设置的默认背景色，支持rgb、rgba、#*/ 
	color:string,

}

interface tencentTIC_setBackgroundColor_Params {
	/**要设置的背景色，支持rgb、rgba、#*/ 
	color:string,

}

interface tencentTIC_setBackgroundImage_Params {
	/**要设置的背景图片URL，支持widget、fs（android仅支持fs）*/ 
	url:string,

	/**（可选项）要使用的图片填充对齐模式，当以宽度基准等比例放大，则居左和居右同居中对齐效果一致；当以高度基准等比例放大，则居顶和居底同居中对齐效果一致*/ 
	mode?:number,

}

interface tencentTIC_setToolType_Params {
	/**（可选项）白板工具*/ 
	toolType?:number,

}

interface tencentTIC_setBrushColor_Params {
	/**要设置的画笔颜色，支持rgb、rgba、#*/ 
	color:string,

}

interface tencentTIC_setBrushThin_Params {
	/**要设置的画笔粗细*/ 
	thin:number,

}

interface tencentTIC_setTextColor_Params {
	/**要设置的文本颜色，支持rgb、rgba、#*/ 
	color:string,

}

interface tencentTIC_setTextStyle_Params {
	/**（可选项）要设置的文本样式*/ 
	style?:number,

}

interface tencentTIC_setTextSize_Params {
	/**要设置的文本大小*/ 
	size:number,

}

interface tencentTIC_setOvalDrawMode_Params {
	/**（可选项）椭圆绘制模式*/ 
	mode?:number,

}

interface tencentTIC_addBoardWithBackgroundImage_Params {
	/**（可选项）要使用的背景图片URL，为空表示不指定背景图片，支持widget、fs*/ 
	url?:any,

}

interface tencentTIC_deleteBoard_Params {
	/**（可选项）要删除的白板ID，为空表示删除当前页*/ 
	boardId?:string,

}

interface tencentTIC_preBoard_Params {
	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

}

interface tencentTIC_nextBoard_Params {
	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

}

interface tencentTIC_gotoBoard_Params {
	/**要跳转到的白板页ID*/ 
	boardId:string,

}

interface tencentTIC_preBoard_Params {
	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

}

interface tencentTIC_nextBoard_Params {
	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

}

interface tencentTIC_gotoBoardWithBoardId_Params {
	/**要跳转到的白板页ID*/ 
	boardId:string,

	/**（可选项）是否重置白板步数*/ 
	resetStep?:boolean,

}

interface tencentTIC_setBoardRatio_Params {
	/**要设置的白板宽高比，格式如"4:3" "16:9"*/ 
	ratio:string,

}

interface tencentTIC_setBoardScale_Params {
	/**要设置的白板缩放比例，支持范围: [100，300]，实际缩放比为: scale/100*/ 
	scale:number,

}

interface tencentTIC_setBoardContentFitMode_Params {
	/**（可选项）要设置的白板内容自适应模式*/ 
	mode?:number,

}

interface tencentTIC_applyFileTranscode_Params {
	/**要转码的文件路径，编码格式为UTF8，支持fs、widget*/ 
	path:string,

	/**（可选项）转码参数*/ 
	config?:JSON,

}

interface tencentTIC_getFileTranscodeProgress_Params {
	/**转码任务taskId*/ 
	taskId:string,

}

interface tencentTIC_addTranscodeFile_Params {
	/**（可选项）转码参数*/ 
	config?:JSON,

}

interface tencentTIC_deleteFile_Params {
	/**（可选项）要删除的文件ID*/ 
	fileId?:string,

}

interface tencentTIC_switchFile_Params {
	/**要切换到的文件ID*/ 
	fileId:string,

}

interface tencentTIC_switchFileBoardIdStepIndex_Params {
	/**文件ID*/ 
	fileId:string,

	/**白板ID*/ 
	boardId:string,

	/**步数索引*/ 
	stepIndex:number,

}

interface tencentTIC_getFileInfo_Params {
	/**文件ID*/ 
	fileId:string,

}

interface tencentTIC_getFileBoardList_Params {
	/**文件ID*/ 
	fileId:string,

}

interface tencentTIC_clearFileDraws_Params {
	/**文件ID*/ 
	fileId:string,

}

interface tencentTIC_getThumbnailImages_Params {
	/**文件ID*/ 
	fileId:string,

}

interface tencentTIC_syncRemoteTime_Params {
	/**用户Id*/ 
	userId:string,

	/**毫秒级时间戳*/ 
	timestamp:number,

}

interface aliSmilePay {
	/** 采集刷脸所需的设备信息并完成刷脸的准备工作。如果返回成功结果，则请求商户服务端调用支付宝开放平台的人脸初始化接口。*/ 
	zolozGetMetaInfo():void

	/** 唤起人脸识别。如果认证成功，将返回一个ftoken。该ftoken用于后续查询被认证用户的信息*/ 
	zolozVerify():void

}
interface Linkedin {
	/**
	 * `获取客户端授权`
	 * ========params==========
	 *
	 * `state` :string : 由您选择且不易被猜中的唯一字符串值。 用于阻止跨站请求伪造攻击
	 *
	 * `scope` :any : 由网址编码组成且限定长度的会员权限列表，表示应用代表用户请求的权限。如果您在调用中未指定范围，我们将使用您在应用配置中定义的默认会员权限
	 */
	auth(params:Linkedin_auth_Params, callback?: (ret:JSON) => void):void

	/** 第三方登录*/ 
	login(callback?: (ret:JSON) => void):void

	/** 获取邮箱以及URN  （仅android支持）*/ 
	getEmailAndURN(callback?: (ret:JSON) => void):void

	/**
	 * `分享`
	 * ========params==========
	 *
	 * `shareUrl` :string : 分享地址（POST）
	 *
	 * `request` :JSON : 分享请求文本,详情参考[LinkedIn分享文档](https://docs.microsoft.com/zh-cn/linkedin/consumer/integrations/self-serve/share-on-linkedin)
	 */
	share(params:Linkedin_share_Params, callback?: (ret:JSON) => void):void

}
interface Linkedin_auth_Params {
	/**由您选择且不易被猜中的唯一字符串值。 用于阻止跨站请求伪造攻击*/ 
	state:string,

	/**由网址编码组成且限定长度的会员权限列表，表示应用代表用户请求的权限。如果您在调用中未指定范围，我们将使用您在应用配置中定义的默认会员权限*/ 
	scope:any,

}

interface Linkedin_share_Params {
	/**分享地址（POST）*/ 
	shareUrl:string,

	/**分享请求文本,详情参考[LinkedIn分享文档](https://docs.microsoft.com/zh-cn/linkedin/consumer/integrations/self-serve/share-on-linkedin)*/ 
	request:JSON,

}

interface kf5 {
}
interface faceidLive {
	/** SDK网络授权*/ 
	netAuth(callback?: (ret:JSON) => void):void

	/**
	 * `开始人脸识别，获取人脸识别结果信息；配合API接口[文档](https://faceid.com/pages/documents/4173286)完成人脸识别检测。`
	 * ========params==========
	 *
	 * `imgtype` :string : 扫描身份证成功后获取照片的形式
	 */
	liveinfo(params:faceidLive_liveinfo_Params, callback?: (ret:JSON) => void):void

	/** 获取IOS测试包的Bundle Identifier*/ 
	bundleIdentifier(callback?: (ret:JSON) => void):void

}
interface faceidLive_liveinfo_Params {
	/**扫描身份证成功后获取照片的形式*/ 
	imgtype:string,

}

interface mico {
}
interface dingding {
	/** 判断当前设备是否安装钉钉客户端*/ 
	isInstalled():void

	/**
	 * `分享文本内容`
	 * ========params==========
	 *
	 * `appId` :string : （必选项）从钉钉开放平台获取的 appid。
	 *
	 * `text` :string : 分享的文本
	 */
	shareText(params:dingding_shareText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享图片内容`
	 * ========params==========
	 *
	 * `appId` :string : （必选项）从钉钉开放平台获取的 appid。
	 *
	 * `contentUrl` :string : 分享图片的 url 地址（支持 fs://、widget:// 和网络路径）(android不支持widget)
	 */
	shareImage(params:dingding_shareImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享网页`
	 * ========params==========
	 *
	 * `appId` :string : （必选项）从钉钉开放平台获取的 appid。
	 *
	 * `title` :string : （可选项）分享网页的标题
	 *
	 * `description` :string : （可选项）分享网页的描述。
	 *
	 * `thumurl` :string : （可选项）分享网页的缩略图地址，要求本地路径（fs://、widget://和网络路径）(android不支持widget)
	 *
	 * `url` :string : 分享网页的 url 地址。
	 */
	shareWebpage(params:dingding_shareWebpage_Params, callback?: (ret:JSON) => void):void

	/** 是否支持三方登陆*/ 
	isSupportAuth(callback?: (ret:JSON) => void):void

	/**
	 * `三方登陆`
	 * ========params==========
	 *
	 * `appId` :string : 从钉钉开放平台获取的 appid。；此参数iOS不用传（此参数在初始化是已经在config中配置了）
	 *
	 * `state` :string : (可选)用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验；此参数iOS不用传
	 */
	auth(params:dingding_auth_Params, callback?: (ret:JSON) => void):void

}
interface dingding_shareText_Params {
	/**（必选项）从钉钉开放平台获取的 appid。*/ 
	appId:string,

	/**分享的文本*/ 
	text:string,

}

interface dingding_shareImage_Params {
	/**（必选项）从钉钉开放平台获取的 appid。*/ 
	appId:string,

	/**分享图片的 url 地址（支持 fs://、widget:// 和网络路径）(android不支持widget)*/ 
	contentUrl:string,

}

interface dingding_shareWebpage_Params {
	/**（必选项）从钉钉开放平台获取的 appid。*/ 
	appId:string,

	/**（可选项）分享网页的标题*/ 
	title?:string,

	/**（可选项）分享网页的描述。*/ 
	description?:string,

	/**（可选项）分享网页的缩略图地址，要求本地路径（fs://、widget://和网络路径）(android不支持widget)*/ 
	thumurl?:string,

	/**分享网页的 url 地址。*/ 
	url:string,

}

interface dingding_auth_Params {
	/**从钉钉开放平台获取的 appid。；此参数iOS不用传（此参数在初始化是已经在config中配置了）*/ 
	appId:string,

	/**(可选)用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验；此参数iOS不用传*/ 
	state?:string,

}

interface tencentPush {
}
interface txMarketing {
}
interface sendSms {
}
interface voiceRecognizer {
	/** 创建科大讯飞引擎*/ 
	createUtility(callback?: (ret:JSON) => void):void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件的名字
	 *
	 * `realTime` :boolean : （可选项）当 name 为 recognizeResult 时，是否实时返回识别结果
	 */
	addEventListener(params:voiceRecognizer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除已添加的监听`
	 * ========params==========
	 *
	 * `name` :string : 监听的事件的名字
	 */
	removeEventListener(params:voiceRecognizer_removeEventListener_Params):void

	/**
	 * `语音识别参数配置`
	 * ========params==========
	 *
	 * `config` :JSON : 识别语音时的参数配置
	 */
	recognizeConfig(params:voiceRecognizer_recognizeConfig_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始语音识别，注意：同时只能进行一路会话，这次会话没有结束不能进行下一路会话，否则会报错。若有需要多次回话， 请通过 addEventListener 接口监听 onError ，在该回调事件内请求下一路回话。`
	 * ========params==========
	 *
	 * `audioFileName` :string : （可选项）录制的音频文件保存名字（如123.pcm,一定要加后缀名），结束后文件笛子（绝对路径）会在 addEventListener 监听recognizeResult 回调函数里获取；若不传则不保存
	 */
	recognizeStart(params:voiceRecognizer_recognizeStart_Params, callback?: (ret:JSON) => void):void

	/** 停止录音，调用此函数会停止录音，并开始进行语音识别。*/ 
	recognizeStop():void

	/** 取消本次会话。*/ 
	recognizeCancel():void

	/** 语音识别是否正在录音*/ 
	recogizeListening():void

	/**
	 * `音频文件的写入`
	 * ========params==========
	 *
	 * `filePath` :string : 需要识别的语音文件的路径
	 */
	fileIdentify(params:voiceRecognizer_fileIdentify_Params, callback?: (ret:JSON) => void):void

	/**
	 * `语音朗读配置`
	 * ========params==========
	 *
	 * `config` :JSON : 识别语音时的参数配置
	 */
	readConfig(params:voiceRecognizer_readConfig_Params, callback?: (ret:JSON) => void):void

	/** 开始合成(播放)， 调用此函数进行合成，如果发生错误会回调错误 addEventListener `readComplete`，合成的文本的最大的字节数为1k*/ 
	startRead():void

	/**
	 * `开始合成(不播放)， 调用此函数进行合成，如果发生错误会回调错误 addEventListener  `readComplete`，合成的文本的最大的字节数为1k`
	 * ========params==========
	 *
	 * `audioFileName` :string : （可选项）录制的音频文件保存名字（如123.pcm,一定要加后缀名），结束后文件笛子（绝对路径）会在 addEventListener 监听  回调函数里获取；若不传则不保存;(android会默认生成一个文件并保存，默认生成的文件格式为wav)
	 *
	 * `readString` :string : 要朗读的字符串，最大的字节数为1k
	 */
	startSynthesize(params:voiceRecognizer_startSynthesize_Params):void

	/** 暂停播放之后，合成不会暂停，仍会继续，如果发生错误则会回调错误addEventListener  `readComplete`，*/ 
	pauseRead():void

	/** 恢复播放*/ 
	resumeRead():void

	/** 停止播放*/ 
	stopRead():void

	/** 识别正在语音识别录音*/ 
	isReading():void

	/**
	 * `语音唤醒配置`
	 * ========params==========
	 *
	 * `continue` :boolean : （可选项）设置唤醒服务周期，true：表示唤醒成功后继续录音，并保持唤醒状态；fals：表示唤醒成功后停止录音
	 *
	 * `threshold` :string : 唤醒门限值，格式如下默认值，0:表示第一个唤醒词，-20表示对应的门限值。1：表示第二个唤醒词，-20表示对应的门限值
	 */
	wakeupConfig(params:voiceRecognizer_wakeupConfig_Params, callback?: (ret:JSON) => void):void

	/** 语音唤醒开始*/ 
	wakeupStart():void

	/** 语音唤醒停止，注意与cancel的区别，紧紧停止服务，并不释放资源*/ 
	wakeupStop():void

	/** 语音唤醒取消*/ 
	wakeupCancel():void

	/** 语音唤醒是否正在录音*/ 
	wakeupIsListening():void

	/**
	 * `添加音量大小指示器，`
	 * ========params==========
	 *
	 * `center` :JSON : （可选项）音量指示器锚点坐标
	 *
	 * `alphas` :Array : （可选项）单条指示器每个指示条的透明度组成的数组。本数组顺序同 orientation 指示的方向。
	 *
	 * `gradientColors` :Array : （可选项）单条指示器每个指示条的顶部和底部色值配置组成的数组，模块会将两色值渐变处理，渐变色分界点是从上往下30%的位置。本数组顺序同 orientation 指示的方向。
	 *
	 * `orientation` :string : （可选项）指示波传递方向
	 *
	 * `target` :string : （可选项）指示器对象
	 *
	 * `bg` :string : （可选项）录音标识的背景色，支持 rgb，rgba，#
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `ret` :JSON : null
	 */
	addHUD(params:voiceRecognizer_addHUD_Params):void

	/**
	 * `隐藏音量指示器`
	 * ========params==========
	 *
	 * `id` :string : （可选项）操作的模块对象 id，若不传则隐藏所有已打开的模块对象
	 */
	hideHUD(params:voiceRecognizer_hideHUD_Params):void

	/** 显示音量大小指示器*/ 
	showHUD():void

	/**
	 * `关闭音量指示器`
	 * ========params==========
	 *
	 * `id` :string : （可选项）操作的模块对象 id，若不传则关闭所有已打开的模块对象
	 */
	closeHUD(params:voiceRecognizer_closeHUD_Params):void

}
interface voiceRecognizer_addEventListener_Params {
	/**监听的事件的名字*/ 
	name:string,

	/**（可选项）当 name 为 recognizeResult 时，是否实时返回识别结果*/ 
	realTime?:boolean,

}

interface voiceRecognizer_removeEventListener_Params {
	/**监听的事件的名字*/ 
	name:string,

}

interface voiceRecognizer_recognizeConfig_Params {
	/**识别语音时的参数配置*/ 
	config:JSON,

}

interface voiceRecognizer_recognizeStart_Params {
	/**（可选项）录制的音频文件保存名字（如123.pcm,一定要加后缀名），结束后文件笛子（绝对路径）会在 addEventListener 监听recognizeResult 回调函数里获取；若不传则不保存*/ 
	audioFileName?:string,

}

interface voiceRecognizer_fileIdentify_Params {
	/**需要识别的语音文件的路径*/ 
	filePath:string,

}

interface voiceRecognizer_readConfig_Params {
	/**识别语音时的参数配置*/ 
	config:JSON,

}

interface voiceRecognizer_startSynthesize_Params {
	/**（可选项）录制的音频文件保存名字（如123.pcm,一定要加后缀名），结束后文件笛子（绝对路径）会在 addEventListener 监听  回调函数里获取；若不传则不保存;(android会默认生成一个文件并保存，默认生成的文件格式为wav)*/ 
	audioFileName?:string,

	/**要朗读的字符串，最大的字节数为1k*/ 
	readString:string,

}

interface voiceRecognizer_wakeupConfig_Params {
	/**（可选项）设置唤醒服务周期，true：表示唤醒成功后继续录音，并保持唤醒状态；fals：表示唤醒成功后停止录音*/ 
	continue?:boolean,

	/**唤醒门限值，格式如下默认值，0:表示第一个唤醒词，-20表示对应的门限值。1：表示第二个唤醒词，-20表示对应的门限值*/ 
	threshold:string,

}

interface voiceRecognizer_addHUD_Params {
	/**（可选项）音量指示器锚点坐标*/ 
	center?:JSON,

	/**（可选项）单条指示器每个指示条的透明度组成的数组。本数组顺序同 orientation 指示的方向。*/ 
	alphas?:Array,

	/**（可选项）单条指示器每个指示条的顶部和底部色值配置组成的数组，模块会将两色值渐变处理，渐变色分界点是从上往下30%的位置。本数组顺序同 orientation 指示的方向。*/ 
	gradientColors?:Array,

	/**（可选项）指示波传递方向*/ 
	orientation?:string,

	/**（可选项）指示器对象*/ 
	target?:string,

	/**（可选项）录音标识的背景色，支持 rgb，rgba，#*/ 
	bg?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**null*/ 
	ret:JSON,

}

interface voiceRecognizer_hideHUD_Params {
	/**（可选项）操作的模块对象 id，若不传则隐藏所有已打开的模块对象*/ 
	id?:string,

}

interface voiceRecognizer_closeHUD_Params {
	/**（可选项）操作的模块对象 id，若不传则关闭所有已打开的模块对象*/ 
	id?:string,

}

interface netEaseLive {
	/**
	 * `初始化默认推流引擎`
	 * ========params==========
	 *
	 * `url` :string : 直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID
	 */
	defaultStream(params:netEaseLive_defaultStream_Params):void

	/**
	 * `直播推流引擎初始化，不仅设置直播推流的地址，同时提供直播中视频相关参数设置`
	 * ========params==========
	 *
	 * `url` :string : 直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID
	 *
	 * `videoParaCtx` :JSON : （可选项）直播推流视频参数配置
	 */
	videoParaCtxStream(params:netEaseLive_videoParaCtxStream_Params):void

	/**
	 * `初始化直播推流引擎，不仅设置直播推流地址，同时提供直播中所有可配置参数设置`
	 * ========params==========
	 *
	 * `url` :string : 直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID
	 *
	 * `paraCtx` :JSON : （可选项）直播推流视频参数配置
	 */
	initStream(params:netEaseLive_initStream_Params):void

	/** 反初始化：释放直播推流所占系统资源*/ 
	unInitLiveStream():void

	/**
	 * `设置推流url`
	 * ========params==========
	 *
	 * `url` :string : 直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID
	 */
	setPushUrl(params:netEaseLive_setPushUrl_Params):void

	/**
	 * `设置视频关键参数`
	 * ========params==========
	 *
	 * `quality` :string : （可选项）直播视频流质量
	 *
	 * `bitrate` :number : （可选项）推流码率 default 会按照分辨率设置，取值范围：
	 *
	 * `fps` :number : （可选项）采集帧率，取值范围：
	 *
	 * `orientation` :string : （可选项）摄像头采集方向
	 */
	setVideoParameters(params:netEaseLive_setVideoParameters_Params):void

	/** 准备开始推流接口*/ 
	startLiveStream(callback?: (ret:JSON) => void):void

	/** 重启开始视频推流，需要先启动推流startLiveStream，开启音视频推流，才可以中断视频推流，重启视频推流*/ 
	resumeVideoLiveStream():void

	/** 中断视频推流，需要先启动推流startLiveStream，开启音视频推流，才可以中断视频推流，重启视频推流*/ 
	pauseVideoLiveStream():void

	/** 重启音频推流，需要先启动推流startLiveStream，开启音视频推流，才可以中断音频推流，重启音频推流。*/ 
	resumeAudioLiveStream():void

	/** 中断音频推流，需要先启动推流startLiveStream，开启音视频推流，才可以中断音频推流，重启音频推流。*/ 
	pauseAudioLiveStream():void

	/** 监听推流*/ 
	addStreamListener():void

	/** 结束推流*/ 
	stopLiveStream(callback?: (ret:JSON) => void):void

	/**
	 * `开启预览窗口（相当于 open 一个 frame）`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	startVideoPreview(params:netEaseLive_startVideoPreview_Params):void

	/** 暂停视频预览，如果正在直播，则同时关闭视频预览以及视频推流*/ 
	pauseVideoPreview():void

	/** 继续视频预览，如果正在直播，则开始视频推流*/ 
	resumeVideoPreview():void

	/**
	 * `本地录制部分（目前仅支持flv），开始录制并保存本地文件`
	 * ========params==========
	 *
	 * `recordFileName` :string : 本地录制的文件路径，要求本地路径（支持widget://、fs://）
	 */
	startRecord(params:netEaseLive_startRecord_Params, callback?: (ret:JSON) => void):void

	/** 停止本地录制*/ 
	stopRecord():void

	/**
	 * `开始播放混音文件`
	 * ========params==========
	 *
	 * `musicPath` :string : 音频文件地址/文件名，要求本地路径（支持widget://、fs://）
	 *
	 * `enableLoop` :boolean : （可选项）当前音频文件是否单曲循环
	 */
	startPlayMusic(params:netEaseLive_startPlayMusic_Params, callback?: (ret:JSON) => void):void

	/** 结束播放混音文件，释放播放文件*/ 
	stopPlayMusic():void

	/** 继续播放混音文件*/ 
	resumePlayMusic():void

	/** 中断播放混音文件*/ 
	pausePlayMusic():void

	/**
	 * `设置混音强度`
	 * ========params==========
	 *
	 * `value` :number : （可选项）混音强度范围【1-10】
	 */
	setMixIntensity(params:netEaseLive_setMixIntensity_Params):void

	/**
	 * `设置美颜`
	 * ========params==========
	 *
	 * `type` :string : （可选项）美颜类型
	 */
	setFilter(params:netEaseLive_setFilter_Params):void

	/**
	 * `设置磨皮滤镜强度`
	 * ========params==========
	 *
	 * `value` :number : 滤镜强度
	 */
	setSmoothFilterIntensity(params:netEaseLive_setSmoothFilterIntensity_Params):void

	/**
	 * `设置对比度滤镜强度`
	 * ========params==========
	 *
	 * `value` :number : 滤镜强度
	 */
	setContrastFilterIntensity(params:netEaseLive_setContrastFilterIntensity_Params):void

	/** 切换前后摄像头，任意时刻的前后摄像头切换功能*/ 
	switchCamera():void

	/**
	 * `如果已经通过 cameraFlash （videoParaCtxStream initStream接口内的参数）开启了摄像头闪关灯功能，你可以在任意时刻实时打开或关闭摄像头闪关灯。`
	 * ========params==========
	 *
	 * `flash` :boolean : （可选项）闪光灯开关
	 */
	switchFlash(params:netEaseLive_switchFlash_Params):void

	/** 获取当前摄像头的拉伸值*/ 
	getZoomScale():void

	/** 获取摄像头最大拉伸值*/ 
	getMaxZoomScale():void

	/**
	 * `如果已经通过 zoom （videoParaCtxStream initStream接口内的参数）开启了摄像头 zoom 功能，你可以在任意时刻实时改变最大 zoom 拉伸值 和 实时 zoom 拉伸值。`
	 * ========params==========
	 *
	 * `zoomScale` :number : 摄像头拉伸值
	 */
	setZoomScale(params:netEaseLive_setZoomScale_Params):void

	/**
	 * `添加水印`
	 * ========params==========
	 *
	 * `image` :string : 水印图片地址，要求本地路径（fs://、widget://）
	 *
	 * `rect` :JSON : （可选项）水印图片的在预览视频区域的位置及尺寸
	 *
	 * `location` :string : （可选项）水印图片在预览视频区域的的位置
	 */
	addWaterMark(params:netEaseLive_addWaterMark_Params):void

	/**
	 * `关闭本地预览静态水印`
	 * ========params==========
	 *
	 * `close` :boolean : 是否关闭
	 */
	closePreviewWaterMark(params:netEaseLive_closePreviewWaterMark_Params):void

	/**
	 * `关闭本地预览动态水印`
	 * ========params==========
	 *
	 * `close` :boolean : 是否关闭
	 */
	closePreviewDynamicWaterMark(params:netEaseLive_closePreviewDynamicWaterMark_Params):void

	/** 清除水印*/ 
	cleanWaterMark():void

	/** 直播统计信息监听*/ 
	addStatisticInfoListener():void

	/** 获取当前视频截图*/ 
	getFrameImage():void

	/**
	 * `设置trace 的level，loglevl trace 信息的级别`
	 * ========params==========
	 *
	 * `logLevel` :string : 信息的级别
	 */
	setTraceLevel(params:netEaseLive_setTraceLevel_Params):void

	/**
	 * `设置是否输出 log 到文件`
	 * ========params==========
	 *
	 * `isToFile` :boolean : 是否输出 log 文件
	 */
	isLogToFile(params:netEaseLive_isLogToFile_Params):void

	/** 获取当前sdk的版本号*/ 
	getSDKVersionID():void

	/**
	 * `测速之前设置测速次数和上传数据大小`
	 * ========params==========
	 *
	 * `count` :number : （可选项）测速次数，测速之后，取平均值返回结果
	 *
	 * `capacity` :number : （可选项）上传数据大小(仅限于文件上传类型,经测试，NTS2不能超过500k（含500k)),单位是字节，500k＝500*1024，控制最大不超过10M
	 */
	setSpeedCacl(params:netEaseLive_setSpeedCacl_Params):void

	/**
	 * `开始测速`
	 * ========params==========
	 *
	 * `url` :string : 测速地址
	 */
	startSpeedCalc(params:netEaseLive_startSpeedCalc_Params, callback?: (ret:JSON) => void):void

	/**  结束测速*/ 
	stopSpeedCalc():void

}
interface netEaseLive_defaultStream_Params {
	/**直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID*/ 
	url:string,

}

interface netEaseLive_videoParaCtxStream_Params {
	/**直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID*/ 
	url:string,

	/**（可选项）直播推流视频参数配置*/ 
	videoParaCtx?:JSON,

}

interface netEaseLive_initStream_Params {
	/**直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID*/ 
	url:string,

	/**（可选项）直播推流视频参数配置*/ 
	paraCtx?:JSON,

}

interface netEaseLive_setPushUrl_Params {
	/**直播推流地址，直播推流地址由 [网易视频云](https://vcloud.163.com) 注册用户通过调用服务端api产生，或者从官网管理平台手动创建频道获得，格式如：rtmp://pxxxx.live.126.net/live/channelID*/ 
	url:string,

}

interface netEaseLive_setVideoParameters_Params {
	/**（可选项）直播视频流质量*/ 
	quality?:string,

	/**（可选项）推流码率 default 会按照分辨率设置，取值范围：*/ 
	bitrate?:number,

	/**（可选项）采集帧率，取值范围：*/ 
	fps?:number,

	/**（可选项）摄像头采集方向*/ 
	orientation?:string,

}

interface netEaseLive_startVideoPreview_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface netEaseLive_startRecord_Params {
	/**本地录制的文件路径，要求本地路径（支持widget://、fs://）*/ 
	recordFileName:string,

}

interface netEaseLive_startPlayMusic_Params {
	/**音频文件地址/文件名，要求本地路径（支持widget://、fs://）*/ 
	musicPath:string,

	/**（可选项）当前音频文件是否单曲循环*/ 
	enableLoop?:boolean,

}

interface netEaseLive_setMixIntensity_Params {
	/**（可选项）混音强度范围【1-10】*/ 
	value?:number,

}

interface netEaseLive_setFilter_Params {
	/**（可选项）美颜类型*/ 
	type?:string,

}

interface netEaseLive_setSmoothFilterIntensity_Params {
	/**滤镜强度*/ 
	value:number,

}

interface netEaseLive_setContrastFilterIntensity_Params {
	/**滤镜强度*/ 
	value:number,

}

interface netEaseLive_switchFlash_Params {
	/**（可选项）闪光灯开关*/ 
	flash?:boolean,

}

interface netEaseLive_setZoomScale_Params {
	/**摄像头拉伸值*/ 
	zoomScale:number,

}

interface netEaseLive_addWaterMark_Params {
	/**水印图片地址，要求本地路径（fs://、widget://）*/ 
	image:string,

	/**（可选项）水印图片的在预览视频区域的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）水印图片在预览视频区域的的位置*/ 
	location?:string,

}

interface netEaseLive_closePreviewWaterMark_Params {
	/**是否关闭*/ 
	close:boolean,

}

interface netEaseLive_closePreviewDynamicWaterMark_Params {
	/**是否关闭*/ 
	close:boolean,

}

interface netEaseLive_setTraceLevel_Params {
	/**信息的级别*/ 
	logLevel:string,

}

interface netEaseLive_isLogToFile_Params {
	/**是否输出 log 文件*/ 
	isToFile:boolean,

}

interface netEaseLive_setSpeedCacl_Params {
	/**（可选项）测速次数，测速之后，取平均值返回结果*/ 
	count?:number,

	/**（可选项）上传数据大小(仅限于文件上传类型,经测试，NTS2不能超过500k（含500k)),单位是字节，500k＝500*1024，控制最大不超过10M*/ 
	capacity?:number,

}

interface netEaseLive_startSpeedCalc_Params {
	/**测速地址*/ 
	url:string,

}

interface openinstall {
	/** ## 示例代码*/ 
	init():void

	/** 在拉起APP时，获取由web网页中传递过来的参数*/ 
	getWakeup(callback?: (ret:JSON) => void):void

	/**
	 * `获取由web网页中传递过来的安装参数`
	 * ========params==========
	 *
	 * `timeout` :null : null
	 */
	getInstall(params:openinstall_getInstall_Params, callback?: (ret:JSON) => void):void

	/** 上报注册量*/ 
	reportRegister():void

	/**
	 * `效果点统计`
	 * ========params==========
	 *
	 * `effectId` :string : 效果点ID
	 *
	 * `effectValue` :number : 效果点值，货币以分为单位
	 */
	reportEffectPoint(params:openinstall_reportEffectPoint_Params):void

}
interface openinstall_getInstall_Params {
	/**null*/ 
	timeout:null,

}

interface openinstall_reportEffectPoint_Params {
	/**效果点ID*/ 
	effectId:string,

	/**效果点值，货币以分为单位*/ 
	effectValue:number,

}

interface kf5sdk {
}
interface qiniuStorage {
	/**
	 * `配置文件上传参数（此方法必须调用）`
	 * ========params==========
	 *
	 * `mimeType` :string : （可选项）为上传文件设置一个自定义的 MIME 类型，如果为空，那么服务端自动检测文件的 MIME 类型
	 *
	 * `checkCrc` :boolean : （可选项）为 false 时，服务端不会校验 crc32 值，checkCrc 为 YES 时，服务端会计算上传文件的 crc32 值，然后与用户提供的 crc32 参数值比较确认文件的完整性，如果校验失败会返回 406 错误。
	 *
	 * `params` :JSON : （可选项）用户自定义参数，必须以 x: 开头，这些参数可以作为变量用于 upToken 的 callbackBody、returnBody、asyncOps 参数中
	 *
	 * `zone` :string : 支持区域
	 */
	configUploader(params:qiniuStorage_configUploader_Params):void

	/**
	 * `开始上传文件`
	 * ========params==========
	 *
	 * `token` :string : 从服务器端 SDK 获取的 token
	 *
	 * `path` :string : 上传的文件（图片、视频等）的路径，要求本地路径（fs://、widget:// **注意：Android暂不支持widget://**）
	 *
	 * `key` :string : （可选项）上传到云存储的key（文件名），不传时表示是由七牛生成
	 */
	start(params:qiniuStorage_start_Params):void

	/** 停止、取消上传文件*/ 
	cancel():void

	/** 添加上传进度的监听*/ 
	addEventListener():void

}
interface qiniuStorage_configUploader_Params {
	/**（可选项）为上传文件设置一个自定义的 MIME 类型，如果为空，那么服务端自动检测文件的 MIME 类型*/ 
	mimeType?:string,

	/**（可选项）为 false 时，服务端不会校验 crc32 值，checkCrc 为 YES 时，服务端会计算上传文件的 crc32 值，然后与用户提供的 crc32 参数值比较确认文件的完整性，如果校验失败会返回 406 错误。*/ 
	checkCrc?:boolean,

	/**（可选项）用户自定义参数，必须以 x: 开头，这些参数可以作为变量用于 upToken 的 callbackBody、returnBody、asyncOps 参数中*/ 
	params?:JSON,

	/**支持区域*/ 
	zone:string,

}

interface qiniuStorage_start_Params {
	/**从服务器端 SDK 获取的 token*/ 
	token:string,

	/**上传的文件（图片、视频等）的路径，要求本地路径（fs://、widget:// **注意：Android暂不支持widget://**）*/ 
	path:string,

	/**（可选项）上传到云存储的key（文件名），不传时表示是由七牛生成*/ 
	key?:string,

}

interface tencentTRTC {
	/**
	 * `进入房间`
	 * ========params==========
	 *
	 * `appId` :number : 腾讯云 SDKAppId，进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav ) 创建应用，即可看到 SDKAppId
	 *
	 * `userId` :string : 当前用户的 userId，相当于用户名
	 *
	 * `roomId` :string : 房间号码 ，在同一个房间里的用户（userId）可以彼此看到对方并进行视频通话
	 *
	 * `userSig` :string : 用户签名 ，当前 userId 对应的验证签名，相当于使用云服务的登录密码，[如何计算userSig](https://cloud.tencent.com/document/product/647/17275)
	 *
	 * `privateMapKey` :string : （可选项）房间签名 ，当您希望某个房间只能让特定的 userId 进入时，需要使用 privateMapKey 进行权限保护。仅建议有高级别安全需求的客户使用，更多详情请参见 [进房权限保护](https://cloud.tencent.com/document/product/647/32240)
	 *
	 * `scene` :number : （可选项）应用场景
	 */
	enterRoom(params:tencentTRTC_enterRoom_Params):void

	/** 添加监听*/ 
	setTRTCListener(callback?: (ret:JSON) => void):void

	/** 退出房间*/ 
	exitRoom():void

	/** 开启本地语音*/ 
	startLocalAudio():void

	/** 关闭本地语音*/ 
	stopLocalAudio():void

	/**
	 * `开启本地画面采集`
	 * ========params==========
	 *
	 * `rect` :any : 画面预览控件位置
	 *
	 * `isFrontCamera` :boolean : （可选项）是否开启前置摄像头
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	startLocalPreview(params:tencentTRTC_startLocalPreview_Params):void

	/** 停止本地画面采集*/ 
	stopLocalPreview():void

	/** 切换摄像头*/ 
	switchCamera():void

	/**
	 * `暂停/恢复推送本地的视频数据`
	 * ========params==========
	 *
	 * `mute` :boolean : （可选项）是否暂停，true:暂停，false:恢复
	 */
	muteLocalVideo(params:tencentTRTC_muteLocalVideo_Params):void

	/**
	 * `暂停/恢复推送本地的音频数据`
	 * ========params==========
	 *
	 * `mute` :boolean : （可选项）是否暂停，true:暂停，false:恢复
	 */
	muteLocalAudio(params:tencentTRTC_muteLocalAudio_Params):void

	/**
	 * `开始显示用户userId的视频画面`
	 * ========params==========
	 *
	 * `rect` :any : 画面预览控件位置
	 *
	 * `remoteUid` :string : 远程用户userId
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	startRemoteView(params:tencentTRTC_startRemoteView_Params):void

	/**
	 * `停止显示用户userId的视频画面`
	 * ========params==========
	 *
	 * `remoteUid` :string : 远程用户userId
	 */
	stopRemoteView(params:tencentTRTC_stopRemoteView_Params):void

	/** 停止显示所有远端视频画面，同时不再拉取远端用户的视频数据流*/ 
	stopAllRemoteView():void

	/**
	 * `暂停/恢复接收指定的远端视频流。`
	 * ========params==========
	 *
	 * `remoteUid` :string : 远程用户userId
	 *
	 * `mute` :boolean : 是否暂停接收
	 */
	muteRemoteVideoStream(params:tencentTRTC_muteRemoteVideoStream_Params):void

	/**
	 * `暂停/恢复接收所有远端视频流。`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否暂停接收
	 */
	muteAllRemoteVideoStreams(params:tencentTRTC_muteAllRemoteVideoStreams_Params):void

	/**
	 * `暂停/恢复接收指定的远端音频流。`
	 * ========params==========
	 *
	 * `remoteUid` :string : 远程用户userId
	 *
	 * `mute` :boolean : 是否暂停接收
	 */
	muteRemoteAudio(params:tencentTRTC_muteRemoteAudio_Params):void

	/**
	 * `暂停/恢复接收所有远端音频流。`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否暂停接收
	 */
	muteAllRemoteAudio(params:tencentTRTC_muteAllRemoteAudio_Params):void

	/**
	 * `设置本地图像的顺时针旋转角度`
	 * ========params==========
	 *
	 * `rotation` :number : 旋转角度
	 */
	setLocalViewRotation(params:tencentTRTC_setLocalViewRotation_Params):void

	/**
	 * `设置远端图像的顺时针旋转角度`
	 * ========params==========
	 *
	 * `remoteUid` :string : 远程用户userId
	 *
	 * `rotation` :number : 旋转角度
	 */
	setRemoteViewRotation(params:tencentTRTC_setRemoteViewRotation_Params):void

	/**
	 * `设置视频编码输出的画面方向，即设置远端用户观看到的和服务器录制的画面方向`
	 * ========params==========
	 *
	 * `rotation` :number : 旋转角度
	 */
	setVideoEncoderRotation(params:tencentTRTC_setVideoEncoderRotation_Params):void

	/**
	 * `设置本地摄像头预览画面的镜像模式`
	 * ========params==========
	 *
	 * `type` :number : 镜像模式
	 */
	setLocalViewMirror(params:tencentTRTC_setLocalViewMirror_Params):void

	/**
	 * `设置编码器输出的画面镜像模式`
	 * ========params==========
	 *
	 * `mirror` :boolean : （可选项）是否镜像
	 */
	setVideoEncoderMirror(params:tencentTRTC_setVideoEncoderMirror_Params):void

	/**
	 * `设置重力感应的适应模式`
	 * ========params==========
	 *
	 * `mode` :number : （可选项）重力感应模式
	 */
	setGSensorMode(params:tencentTRTC_setGSensorMode_Params):void

	/**
	 * `视频画面截图`
	 * ========params==========
	 *
	 * `remoteUid` :string : 远程用户userId，iOS端不传此参数表示截取本地视频画面
	 *
	 * `streamType` :number : （可选项）视频流类型
	 */
	snapshotVideo(params:tencentTRTC_snapshotVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置 SDK 采集音量`
	 * ========params==========
	 *
	 * `volume` :number : 音量大小
	 */
	setAudioCaptureVolume(params:tencentTRTC_setAudioCaptureVolume_Params):void

	/** 获取 SDK 采集音量*/ 
	getAudioCaptureVolume(callback?: (ret:JSON) => void):void

	/**
	 * `设置 SDK 播放音量`
	 * ========params==========
	 *
	 * `volume` :number : 音量大小
	 */
	setAudioPlayoutVolume(params:tencentTRTC_setAudioPlayoutVolume_Params):void

	/** 获取 SDK 播放音量*/ 
	getAudioPlayoutVolume(callback?: (ret:JSON) => void):void

	/**
	 * `开启耳返`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启耳返,开启后会在耳机里听到自己的声音,仅带耳机时有效
	 */
	enableAudioEarMonitoring(params:tencentTRTC_enableAudioEarMonitoring_Params):void

	/** 查询当前摄像头是否支持缩放*/ 
	isCameraZoomSupported(callback?: (ret:JSON) => void):void

	/**
	 * `设置摄像头缩放因子（焦距）`
	 * ========params==========
	 *
	 * `distance` :number : 缩放因子
	 */
	setZoom(params:tencentTRTC_setZoom_Params):void

	/** 查询是否支持开启闪光灯*/ 
	isCameraTorchSupported(callback?: (ret:JSON) => void):void

	/**
	 * `开关闪光灯`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启闪光灯
	 */
	enableTorch(params:tencentTRTC_enableTorch_Params):void

	/** 是否支持设置焦点*/ 
	isCameraFocusSupport(callback?: (ret:JSON) => void):void

	/**
	 * `设置摄像头焦点`
	 * ========params==========
	 *
	 * `x` :number : 对焦位置x坐标
	 *
	 * `y` :number : 对焦位置y坐标
	 */
	setFocusPosition(params:tencentTRTC_setFocusPosition_Params):void

	/** 启动屏幕分享，iOS本接口只支持iOS 13（包含）以上系统*/ 
	startScreenCapture():void

	/** 停止屏幕采集，iOS本接口只支持iOS 13（包含）以上系统*/ 
	stopScreenCapture():void

	/** 暂停屏幕分享，iOS本接口只支持iOS 13（包含）以上系统*/ 
	pauseScreenCapture():void

	/** 恢复屏幕分享，iOS本接口只支持iOS 13（包含）以上系统*/ 
	resumeScreenCapture():void

	/**
	 * `启动播放背景音乐`
	 * ========params==========
	 *
	 * `path` :string : 音乐文件路径，支持的文件格式：aac, mp3，android支持fs路径，iOS支持widget、fs路径
	 */
	playBGM(params:tencentTRTC_playBGM_Params, callback?: (ret:JSON) => void):void

	/** 停止播放背景音乐。*/ 
	stopBGM():void

	/** 暂停播放背景音乐。*/ 
	pauseBGM():void

	/** 继续播放背景音乐*/ 
	resumeBGM():void

	/**
	 * `设置 BGM 播放进度。`
	 * ========params==========
	 *
	 * `pos` :number : 进度，（豪秒）
	 */
	setBGMPosition(params:tencentTRTC_setBGMPosition_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置背景音乐播放音量的大小。`
	 * ========params==========
	 *
	 * `volume` :number : 音量大小
	 */
	setBGMVolume(params:tencentTRTC_setBGMVolume_Params):void

	/**
	 * `设置背景音乐本地播放音量的大小。`
	 * ========params==========
	 *
	 * `volume` :number : 音量大小
	 */
	setBGMPlayoutVolume(params:tencentTRTC_setBGMPlayoutVolume_Params):void

	/**
	 * `设置背景音乐远端播放音量的大小。`
	 * ========params==========
	 *
	 * `volume` :number : 音量大小
	 */
	setBGMPublishVolume(params:tencentTRTC_setBGMPublishVolume_Params):void

	/**
	 * `设置变声类型`
	 * ========params==========
	 *
	 * `type` :number : 变声类型
	 */
	setVoiceChangerType(params:tencentTRTC_setVoiceChangerType_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置本地图像的渲染模式`
	 * ========params==========
	 *
	 * `type` :number : 变声类型
	 */
	setLocalViewFillMode(params:tencentTRTC_setLocalViewFillMode_Params):void

	/**
	 * `设置远端图像的渲染模式`
	 * ========params==========
	 *
	 * `remoteUid` :string : 用户 ID
	 *
	 * `type` :number : 变声类型
	 */
	setRemoteViewFillMode(params:tencentTRTC_setRemoteViewFillMode_Params):void

	/**
	 * `设置视频编码器相关参数，，、该设置决定了远端用户看到的画面质量（同时也是云端录制出的视频文件的画面质量）`
	 * ========params==========
	 *
	 * `videoResolution` :number : 视频分辨率，此处仅定义横屏分辨率，如需使用竖屏分辨率（例如360 × 640），需要同时指定 resMode 为 1（竖屏分辨率）。1920_1080（114）分辨率仅支持iOS
	 *
	 * `resMode` :number : 分辨率模式
	 *
	 * `videoFps` :number : 视频采集帧率
	 *
	 * `videoBitrate` :number : 目标视频码率，SDK 会按照目标码率进行编码，只有在网络不佳的情况下才会主动降低视频码率
	 *
	 * `enableAdjustRes` :boolean : 是否允许 SDK 动态调整分辨率，开启后会对云端录制产生影响
	 */
	setVideoEncoderParam(params:tencentTRTC_setVideoEncoderParam_Params):void

}
interface tencentTRTC_enterRoom_Params {
	/**腾讯云 SDKAppId，进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav ) 创建应用，即可看到 SDKAppId*/ 
	appId:number,

	/**当前用户的 userId，相当于用户名*/ 
	userId:string,

	/**房间号码 ，在同一个房间里的用户（userId）可以彼此看到对方并进行视频通话*/ 
	roomId:string,

	/**用户签名 ，当前 userId 对应的验证签名，相当于使用云服务的登录密码，[如何计算userSig](https://cloud.tencent.com/document/product/647/17275)*/ 
	userSig:string,

	/**（可选项）房间签名 ，当您希望某个房间只能让特定的 userId 进入时，需要使用 privateMapKey 进行权限保护。仅建议有高级别安全需求的客户使用，更多详情请参见 [进房权限保护](https://cloud.tencent.com/document/product/647/32240)*/ 
	privateMapKey?:string,

	/**（可选项）应用场景*/ 
	scene?:number,

}

interface tencentTRTC_startLocalPreview_Params {
	/**画面预览控件位置*/ 
	rect:any,

	/**（可选项）是否开启前置摄像头*/ 
	isFrontCamera?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface tencentTRTC_muteLocalVideo_Params {
	/**（可选项）是否暂停，true:暂停，false:恢复*/ 
	mute?:boolean,

}

interface tencentTRTC_muteLocalAudio_Params {
	/**（可选项）是否暂停，true:暂停，false:恢复*/ 
	mute?:boolean,

}

interface tencentTRTC_startRemoteView_Params {
	/**画面预览控件位置*/ 
	rect:any,

	/**远程用户userId*/ 
	remoteUid:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface tencentTRTC_stopRemoteView_Params {
	/**远程用户userId*/ 
	remoteUid:string,

}

interface tencentTRTC_muteRemoteVideoStream_Params {
	/**远程用户userId*/ 
	remoteUid:string,

	/**是否暂停接收*/ 
	mute:boolean,

}

interface tencentTRTC_muteAllRemoteVideoStreams_Params {
	/**是否暂停接收*/ 
	mute:boolean,

}

interface tencentTRTC_muteRemoteAudio_Params {
	/**远程用户userId*/ 
	remoteUid:string,

	/**是否暂停接收*/ 
	mute:boolean,

}

interface tencentTRTC_muteAllRemoteAudio_Params {
	/**是否暂停接收*/ 
	mute:boolean,

}

interface tencentTRTC_setLocalViewRotation_Params {
	/**旋转角度*/ 
	rotation:number,

}

interface tencentTRTC_setRemoteViewRotation_Params {
	/**远程用户userId*/ 
	remoteUid:string,

	/**旋转角度*/ 
	rotation:number,

}

interface tencentTRTC_setVideoEncoderRotation_Params {
	/**旋转角度*/ 
	rotation:number,

}

interface tencentTRTC_setLocalViewMirror_Params {
	/**镜像模式*/ 
	type:number,

}

interface tencentTRTC_setVideoEncoderMirror_Params {
	/**（可选项）是否镜像*/ 
	mirror?:boolean,

}

interface tencentTRTC_setGSensorMode_Params {
	/**（可选项）重力感应模式*/ 
	mode?:number,

}

interface tencentTRTC_snapshotVideo_Params {
	/**远程用户userId，iOS端不传此参数表示截取本地视频画面*/ 
	remoteUid:string,

	/**（可选项）视频流类型*/ 
	streamType?:number,

}

interface tencentTRTC_setAudioCaptureVolume_Params {
	/**音量大小*/ 
	volume:number,

}

interface tencentTRTC_setAudioPlayoutVolume_Params {
	/**音量大小*/ 
	volume:number,

}

interface tencentTRTC_enableAudioEarMonitoring_Params {
	/**是否开启耳返,开启后会在耳机里听到自己的声音,仅带耳机时有效*/ 
	enable:boolean,

}

interface tencentTRTC_setZoom_Params {
	/**缩放因子*/ 
	distance:number,

}

interface tencentTRTC_enableTorch_Params {
	/**是否开启闪光灯*/ 
	enable:boolean,

}

interface tencentTRTC_setFocusPosition_Params {
	/**对焦位置x坐标*/ 
	x:number,

	/**对焦位置y坐标*/ 
	y:number,

}

interface tencentTRTC_playBGM_Params {
	/**音乐文件路径，支持的文件格式：aac, mp3，android支持fs路径，iOS支持widget、fs路径*/ 
	path:string,

}

interface tencentTRTC_setBGMPosition_Params {
	/**进度，（豪秒）*/ 
	pos:number,

}

interface tencentTRTC_setBGMVolume_Params {
	/**音量大小*/ 
	volume:number,

}

interface tencentTRTC_setBGMPlayoutVolume_Params {
	/**音量大小*/ 
	volume:number,

}

interface tencentTRTC_setBGMPublishVolume_Params {
	/**音量大小*/ 
	volume:number,

}

interface tencentTRTC_setVoiceChangerType_Params {
	/**变声类型*/ 
	type:number,

}

interface tencentTRTC_setLocalViewFillMode_Params {
	/**变声类型*/ 
	type:number,

}

interface tencentTRTC_setRemoteViewFillMode_Params {
	/**用户 ID*/ 
	remoteUid:string,

	/**变声类型*/ 
	type:number,

}

interface tencentTRTC_setVideoEncoderParam_Params {
	/**视频分辨率，此处仅定义横屏分辨率，如需使用竖屏分辨率（例如360 × 640），需要同时指定 resMode 为 1（竖屏分辨率）。1920_1080（114）分辨率仅支持iOS*/ 
	videoResolution:number,

	/**分辨率模式*/ 
	resMode:number,

	/**视频采集帧率*/ 
	videoFps:number,

	/**目标视频码率，SDK 会按照目标码率进行编码，只有在网络不佳的情况下才会主动降低视频码率*/ 
	videoBitrate:number,

	/**是否允许 SDK 动态调整分辨率，开启后会对云端录制产生影响*/ 
	enableAdjustRes:boolean,

}

interface alibcTrade {
	/** 初始化*/ 
	initSDK(callback?: (ret:JSON) => void):void

	/**
	 * `设置是否对淘客使用同步打点`
	 * ========params==========
	 *
	 * `isSync` :boolean : （可选项）是否对淘客使用同步打点
	 */
	setIsSyncForTaoke(params:alibcTrade_setIsSyncForTaoke_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置淘客全局参数`
	 * ========params==========
	 *
	 * `pid` :string : 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `taokeAppkey` :string : (可选项) 淘宝联盟后台的APPKEY字段。 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId
	 */
	setTaokeParams(params:alibcTrade_setTaokeParams_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置渠道信息，渠道专享价专用。`
	 * ========params==========
	 *
	 * `type` :string : （可选项）设置渠道类型
	 *
	 * `name` :string : （可选项）设置渠道名称
	 */
	setChannel(params:alibcTrade_setChannel_Params):void

	/** 授权登录*/ 
	showLogin(callback?: (ret:JSON) => void):void

	/** 退出登录*/ 
	logout(callback?: (ret:JSON) => void):void

	/** 获取用户信息*/ 
	getUserInfo(callback?: (ret:JSON) => void):void

	/** 监听页面加载完成后返回页面的title和url。*/ 
	addPageFinishListener():void

	/** 对页面加载时进行监听，返回页面的title和跳转的url。*/ 
	addLoadingListener(callback?: (ret:JSON) => void):void

	/** 控制当前外部的webview回退，**此接口 iOS 端已废弃***/ 
	webGoBack():void

	/**
	 * `打开淘宝商品详情页`
	 * ========params==========
	 *
	 * `itemId` :string : (必填项)商品真实ID或者混淆(open)ID。
	 *
	 * `openType` :string : (可选项)打开页面的方式
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。
	 *
	 * `taokeAppkey` :string : (可选项) 淘宝联盟后台的APPKEY字段。**新版本SDK新增 高佣转链/跨店结算 功能所需**， 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 并且openType设置为'native' [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showDetailPage(params:alibcTrade_showDetailPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview打开淘宝商品详情页，**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `itemId` :string : (必选项)商品id。
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称 **ios不支持**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 */
	showDetailPageWeb(params:alibcTrade_showDetailPageWeb_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开淘宝加入购物车页面`
	 * ========params==========
	 *
	 * `itemId` :string : (必选项)商品id。
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showAddCartPage(params:alibcTrade_showAddCartPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式，打开淘宝加入购物车页面，**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `itemId` :string : (必选项)商品id。
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称。**iOS不支持**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 */
	showAddCartPageWeb(params:alibcTrade_showAddCartPageWeb_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开我的订单页面`
	 * ========params==========
	 *
	 * `orderType` :any : 默认跳转页面。
	 *
	 * `isAllOrder` :boolean : 是否显示所有订单
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `openType` :string : (可选项)打开页面的方式：拉起手淘/天猫 和 h5打开页面，默认值：h5
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showMyOrders(params:alibcTrade_showMyOrders_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式，打开我的订单页面，**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `orderType` :any : 默认跳转页面。
	 *
	 * `isAllOrder` :boolean : 是否显示所有订单
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称 **iOS不支持**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 */
	showMyOrdersWeb(params:alibcTrade_showMyOrdersWeb_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开我的购物车`
	 * ========params==========
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `openType` :string : (可选项)打开页面的方式
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showMyCarts(params:alibcTrade_showMyCarts_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式，打开我的购物车，**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称。**ios不支持**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 */
	showMyCartsWeb(params:alibcTrade_showMyCartsWeb_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开淘宝店铺页面`
	 * ========params==========
	 *
	 * `shopId` :string : 店铺id，支持明文id
	 *
	 * `openType` :string : (可选项)打开页面的方式
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showShopPage(params:alibcTrade_showShopPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式，打开淘宝店铺页面，**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `shopId` :string : 店铺id，支持明文id
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称。**ios不支持**
	 *
	 * `url` :string : （可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）
	 *
	 * `pageCode` :string : （可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode
	 */
	showShopPageWeb(params:alibcTrade_showShopPageWeb_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开url指定页面`
	 * ========params==========
	 *
	 * `url` :string : url
	 *
	 * `openType` :string : (可选项)打开页面的方式
	 *
	 * `linkKey` :string : (可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `taokeAppkey` :string : (可选项) 淘宝联盟后台的APPKEY字段。**新版本SDK新增 高佣转链/跨店结算 功能所需**， 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 并且openType设置为'native' [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)
	 *
	 * `adzoneId` :string : (可选项)淘宝联盟adzoneId
	 *
	 * `pageClose` :boolean : (可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效**
	 *
	 * `backScheme` :string : (可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。
	 */
	showPageByUrl(params:alibcTrade_showPageByUrl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `使用外部webview方式，打开url指定页面。**此接口 iOS 端已废弃**`
	 * ========params==========
	 *
	 * `url` :string : url
	 *
	 * `pid` :string : (可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）
	 *
	 * `rect` :JSON : （可选项）frame 的位置和大小。
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : 是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
	 *
	 * `jsObjectName` :string : (可选项) 注入到h5页面的全局window属性对象名称。**iOS不支持**
	 */
	showPageByUrlWeb(params:alibcTrade_showPageByUrlWeb_Params, callback?: (ret:JSON) => void):void

	/** 移除WebView，**此接口 iOS 端已废弃***/ 
	removeWeb():void

}
interface alibcTrade_setIsSyncForTaoke_Params {
	/**（可选项）是否对淘客使用同步打点*/ 
	isSync?:boolean,

}

interface alibcTrade_setTaokeParams_Params {
	/**淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid:string,

	/**(可选项) 淘宝联盟后台的APPKEY字段。 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	taokeAppkey?:string,

	/**(可选项)淘宝联盟adzoneId*/ 
	adzoneId?:string,

}

interface alibcTrade_setChannel_Params {
	/**（可选项）设置渠道类型*/ 
	type?:string,

	/**（可选项）设置渠道名称*/ 
	name?:string,

}

interface alibcTrade_showDetailPage_Params {
	/**(必填项)商品真实ID或者混淆(open)ID。*/ 
	itemId:string,

	/**(可选项)打开页面的方式*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。*/ 
	linkKey?:string,

	/**(可选项) 淘宝联盟后台的APPKEY字段。**新版本SDK新增 高佣转链/跨店结算 功能所需**， 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 并且openType设置为'native' [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	taokeAppkey?:string,

	/**(可选项)淘宝联盟adzoneId*/ 
	adzoneId?:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showDetailPageWeb_Params {
	/**(必选项)商品id。*/ 
	itemId:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称 **ios不支持***/ 
	jsObjectName?:string,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

}

interface alibcTrade_showAddCartPage_Params {
	/**(必选项)商品id。*/ 
	itemId:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showAddCartPageWeb_Params {
	/**(必选项)商品id。*/ 
	itemId:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称。**iOS不支持***/ 
	jsObjectName?:string,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

}

interface alibcTrade_showMyOrders_Params {
	/**默认跳转页面。*/ 
	orderType:any,

	/**是否显示所有订单*/ 
	isAllOrder:boolean,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项)打开页面的方式：拉起手淘/天猫 和 h5打开页面，默认值：h5*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。*/ 
	linkKey?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showMyOrdersWeb_Params {
	/**默认跳转页面。*/ 
	orderType:any,

	/**是否显示所有订单*/ 
	isAllOrder:boolean,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称 **iOS不支持***/ 
	jsObjectName?:string,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

}

interface alibcTrade_showMyCarts_Params {
	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项)打开页面的方式*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。*/ 
	linkKey?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showMyCartsWeb_Params {
	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称。**ios不支持***/ 
	jsObjectName?:string,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

}

interface alibcTrade_showShopPage_Params {
	/**店铺id，支持明文id*/ 
	shopId:string,

	/**(可选项)打开页面的方式*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。*/ 
	linkKey?:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showShopPageWeb_Params {
	/**店铺id，支持明文id*/ 
	shopId:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称。**ios不支持***/ 
	jsObjectName?:string,

	/**（可选项）使用 openUrl 方式直接打开非官方code覆盖的链接时想要打开的 url（可以打开非openByBizCode所覆盖的url）*/ 
	url?:string,

	/**（可选项）使用openByCode方式直接打开官方code覆盖的页面， 后台申请的官方页面pageCode，目前支持“detail” “cart”.后续会开放更多的pageCode*/ 
	pageCode?:string,

}

interface alibcTrade_showPageByUrl_Params {
	/**url*/ 
	url:string,

	/**(可选项)打开页面的方式*/ 
	openType?:string,

	/**(可选项)当打开页面的方式（openType）为native时，设置拉起手淘or天猫。*/ 
	linkKey?:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**(可选项) 淘宝联盟后台的APPKEY字段。**新版本SDK新增 高佣转链/跨店结算 功能所需**， 如果需要高分佣能力，务必传入adzoneId和taokeAppkey 参数 并且openType设置为'native' [功能介绍](http://baichuan.taobao.com/support/announcementDetail.htm?spm=0.0.0.0.VkfdrC&id=25274)*/ 
	taokeAppkey?:string,

	/**(可选项)淘宝联盟adzoneId*/ 
	adzoneId?:string,

	/**(可选项) 购买商品支付成功后是否关闭淘宝页面。**仅Android有效***/ 
	pageClose?:boolean,

	/**(可选项) 唤端返回的scheme，可以自己传入自定义的scheme，或者传入百川提供的默认scheme："alisdk://"。*/ 
	backScheme?:string,

}

interface alibcTrade_showPageByUrlWeb_Params {
	/**url*/ 
	url:string,

	/**(可选项) 淘客 pid （需登录阿里妈妈，实名认证后可获取 pid）*/ 
	pid?:string,

	/**（可选项）frame 的位置和大小。*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空*/ 
	fixed:boolean,

	/**(可选项) 注入到h5页面的全局window属性对象名称。**iOS不支持***/ 
	jsObjectName?:string,

}

interface netEaseAVChatVideo {
	/** 初始化音视频引擎*/ 
	init():void

	/**
	 * `登录`
	 * ========params==========
	 *
	 * `account` :string : 账号
	 *
	 * `password` :string : 用户密码。
	 */
	login(params:netEaseAVChatVideo_login_Params, callback?: (ret:JSON) => void):void

	/** 登出*/ 
	logout(callback?: (ret:JSON) => void):void

	/**
	 * `主叫发起通话(现在只支持传入一个被叫)`
	 * ========params==========
	 *
	 * `account` :string : 账号
	 *
	 * `type` :string : 对话类型
	 */
	startCall(params:netEaseAVChatVideo_startCall_Params, callback?: (ret:JSON) => void):void

	/**
	 * `接通对话`
	 * ========params==========
	 *
	 * `chatId` :string : 对话id，从addComingCallingListener接口中获取
	 */
	accept(params:netEaseAVChatVideo_accept_Params, callback?: (ret:JSON) => void):void

	/**
	 * `挂断对话`
	 * ========params==========
	 *
	 * `chatId` :string : 对话id
	 */
	hangUp(params:netEaseAVChatVideo_hangUp_Params, callback?: (ret:JSON) => void):void

	/**
	 * `加入多人会议`
	 * ========params==========
	 *
	 * `name` :string : 会议名称
	 *
	 * `ext` :string : 用于在会议的创建和加入之间传递额外信息, 仅在创建会议时设置有效
	 *
	 * `type` :string : 对话类型
	 *
	 * `actor` :boolean : 以发言者的角色加入, 非发言者 (观众)不发送音视频数据
	 */
	joinMeeting(params:netEaseAVChatVideo_joinMeeting_Params, callback?: (ret:JSON) => void):void

	/** 离开会议*/ 
	leaveMeeting():void

	/**
	 * `改变自己在会议中的角色`
	 * ========params==========
	 *
	 * `actor` :boolean : 以发言者的角色加入, 非发言者 (观众)不发送音视频数据
	 */
	setMeetingRole(params:netEaseAVChatVideo_setMeetingRole_Params, callback?: (ret:JSON) => void):void

	/**
	 * `指定某用户设置是否对其静音`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否静音, 静音后将听不到该用户的声音
	 *
	 * `uid` :string : 用户 uid
	 */
	setAudioMute(params:netEaseAVChatVideo_setAudioMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `指定某用户设置是否接收其视频`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否拒绝视频, 拒绝后将没有该用户视频数据回调
	 *
	 * `uid` :string : 用户 uid
	 */
	setVideoMute(params:netEaseAVChatVideo_setVideoMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置禁止发送视频`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否禁止发送视频
	 */
	setVideoSendMute(params:netEaseAVChatVideo_setVideoSendMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始视频采集`
	 * ========params==========
	 *
	 * `quality` :number : 网络通话视频质量
	 *
	 * `format` :number : 视频采集格式
	 *
	 * `backCamera` :boolean : 使用后置摄像头开始视频
	 *
	 * `cameraOn` :boolean : 初始打开摄像头
	 *
	 * `orientation` :string : 视频采集方向。 该设置会改变采集到的视频画面的角度，主要用于支持互动直播时的横屏直播： 主播以各种角度手持设备直播， 并设置为该角度的 '视频采集方向'， 拉流播放器就可以以正常的角度观看直播。
	 *
	 * `rate` :string : 视频帧率
	 *
	 * `manualFocus` :boolean : 设置默认的手动对焦框
	 *
	 * `videoProcess` :boolean : 设视频前处理开关 默认是 YES 打开前处理
	 */
	startVideoCapture(params:netEaseAVChatVideo_startVideoCapture_Params, callback?: (ret:JSON) => void):void

	/** 停止视频采集*/ 
	stopVideoCapture():void

	/**
	 * `动态设置视频采集方向`
	 * ========params==========
	 *
	 * `orientation` :string : 视频采集方向。 该设置会改变采集到的视频画面的角度，主要用于支持互动直播时的横屏直播： 主播以各种角度手持设备直播， 并设置为该角度的 '视频采集方向'， 拉流播放器就可以以正常的角度观看直播。
	 */
	setVideoCaptureOrientation(params:netEaseAVChatVideo_setVideoCaptureOrientation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `动态设置摄像头关闭`
	 * ========params==========
	 *
	 * `cameraDisable` :boolean : 是否关闭
	 */
	setCameraDisable(params:netEaseAVChatVideo_setCameraDisable_Params, callback?: (ret:JSON) => void):void

	/**
	 * `动态切换前后摄像头`
	 * ========params==========
	 *
	 * `cameraType` :string : 选择的摄像头（仅ios支持，android不支持指定摄像头）
	 */
	switchCamera(params:netEaseAVChatVideo_switchCamera_Params):void

	/**
	 * `动态开关闪光灯`
	 * ========params==========
	 *
	 * `cameraFlash` :boolean : 动态开关闪光灯
	 */
	setCameraFlash(params:netEaseAVChatVideo_setCameraFlash_Params):void

	/**
	 * `动态调节摄像头焦距，对画面进行放大缩小`
	 * ========params==========
	 *
	 * `scale` :number : 放大倍数
	 */
	changeLensPosition(params:netEaseAVChatVideo_changeLensPosition_Params):void

	/** 通过以下接口来获取摄像头最大放大倍数*/ 
	getMaxZoomScale(callback?: (ret:JSON) => void):void

	/**
	 * ` 设置对焦模式`
	 * ========params==========
	 *
	 * `mode` :string : 对焦模式
	 */
	setFocusMode(params:netEaseAVChatVideo_setFocusMode_Params):void

	/** 当切换为手动对焦后，使用以下接口来传入对焦点，进行对焦*/ 
	changeNMCVideoPreViewManualFocusPoint():void

	/**
	 * `设置静音`
	 * ========params==========
	 *
	 * `mute` :boolean : 设置是否静音
	 */
	setMute(params:netEaseAVChatVideo_setMute_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置扬声器`
	 * ========params==========
	 *
	 * `useSpeaker` :boolean : 设置是否开启扬声器
	 */
	setSpeaker(params:netEaseAVChatVideo_setSpeaker_Params, callback?: (ret:JSON) => void):void

	/**
	 * `切换网络通话类型`
	 * ========params==========
	 *
	 * `type` :string : 通话类型
	 */
	switchType(params:netEaseAVChatVideo_switchType_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频最大编码码率`
	 * ========params==========
	 *
	 * `bitrate` :number : 最大编码码率 (bps)
	 */
	setVideoMaxEncodeBitrate(params:netEaseAVChatVideo_setVideoMaxEncodeBitrate_Params, callback?: (ret:JSON) => void):void

	/**
	 * `切换视频编码器`
	 * ========params==========
	 *
	 * `codec` :number : 视频编码器
	 */
	switchVideoEncoder(params:netEaseAVChatVideo_switchVideoEncoder_Params, callback?: (ret:JSON) => void):void

	/**
	 * `切换视频解码器`
	 * ========params==========
	 *
	 * `codec` :number : 视频编码器
	 */
	switchVideoDecoder(params:netEaseAVChatVideo_switchVideoDecoder_Params, callback?: (ret:JSON) => void):void

	/**
	 * `切换网络通话视频质量`
	 * ========params==========
	 *
	 * `quality` :number : 视频编码器
	 */
	switchVideoQuality(params:netEaseAVChatVideo_switchVideoQuality_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始录制(只有通话连接建立以后才允许开始录制)`
	 * ========params==========
	 *
	 * `filePath` :string : (可选项)录制文件路径, SDK不负责创建目录, 请确保文件路径的合法性,
	 *
	 * `videoBitrate` :string : (可选项)录制文件视频码率设置, 可以不指定, 由SDK自己选择合适的码率
	 *
	 * `userId` :string : 录制用户对象的id
	 */
	startRecording(params:netEaseAVChatVideo_startRecording_Params, callback?: (ret:JSON) => void):void

	/**
	 * ` 开始通话录音. 录制通话中所有参与者的声音, 包含混音任务播放的声音, 录制成 aac 或者 wav 文件`
	 * ========params==========
	 *
	 * `filePath` :string : (可选项)录制文件路径, 不包含文件类型后缀. 包含文件类型后缀的完整文件路径可以在开始录制以后通过currentAudioRecordingFilePath 查询(SDK不负责创建目录, 请确保文件路径的合法性, 也可以传入 nil, 由 SDK 自己选择文件路径)
	 */
	startAudioRecording(params:netEaseAVChatVideo_startAudioRecording_Params, callback?: (ret:JSON) => void):void

	/**  结束通话录音*/ 
	stopAudioRecording():void

	/**  获取当前通话录音文件路径*/ 
	currentAudioRecordingFilePath(callback?: (ret:JSON) => void):void

	/**
	 * `对视频美颜`
	 * ========params==========
	 *
	 * `type` :string : (可选项)滤镜类型
	 */
	selectBeautifyType(params:netEaseAVChatVideo_selectBeautifyType_Params):void

	/**
	 * `设置磨皮滤镜强度,支持自然 粉嫩 怀旧 黑白模式`
	 * ========params==========
	 *
	 * `value` :string : (可选项)磨皮滤镜强度
	 */
	setSmoothFilterIntensity(params:netEaseAVChatVideo_setSmoothFilterIntensity_Params):void

	/**
	 * ` 设置对比度滤镜强度,支持自然 粉嫩 怀旧 黑白模式`
	 * ========params==========
	 *
	 * `value` :string : (可选项)对比度滤镜强度
	 */
	setContrastFilterIntensity(params:netEaseAVChatVideo_setContrastFilterIntensity_Params):void

	/**
	 * `设置预览镜像`
	 * ========params==========
	 *
	 * `isMirrorOn` :boolean : (可选项)是否开启预览镜像
	 */
	setPreViewMirror(params:netEaseAVChatVideo_setPreViewMirror_Params):void

	/**
	 * `设置编码镜像`
	 * ========params==========
	 *
	 * `isMirrorOn` :boolean : (可选项) 是否开启编码镜像
	 *
	 * `isMirrorOn` :boolean : (可选项) 是否开启编码镜像
	 */
	setCodeMirror(params:netEaseAVChatVideo_setCodeMirror_Params):void

	/**
	 * `添加水印`
	 * ========params==========
	 *
	 * `imgPath` :string : (可选项) 水印图片
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 */
	addWaterMark(params:netEaseAVChatVideo_addWaterMark_Params):void

	/**
	 * `设置编码镜像`
	 * ========params==========
	 *
	 * `imgArray` :Array : (可选项) 动态图像数组
	 *
	 * `count` :number : (可选项)播放速度的快慢:count代表count帧显示同一张图
	 *
	 * `looped` :boolean : (可选项)是否循环，不循环就显示一次
	 *
	 * `location` :string : (可选项)位置
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 */
	addDynamicWaterMarks(params:netEaseAVChatVideo_addDynamicWaterMarks_Params):void

	/** 清除水印*/ 
	cleanWaterMark():void

	/**
	 * `设置编码镜像`
	 * ========params==========
	 *
	 * `isMirrorOn` :boolean : (可选项) 是否开启编码镜像
	 *
	 * `isMirrorOn` :boolean : (可选项) 是否开启编码镜像
	 */
	setCodeMirror(params:netEaseAVChatVideo_setCodeMirror_Params):void

	/**
	 * `设置引擎是否开启，（enable为true，登录后，开启通话前调用；enable为false，通话结束时调用）`
	 * ========params==========
	 *
	 * `enable` :boolean : 设置引擎是否开启
	 */
	setRtc(params:netEaseAVChatVideo_setRtc_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置本地预览窗口`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	setLocalVideoRender(params:netEaseAVChatVideo_setLocalVideoRender_Params):void

	/**
	 * `设置远程预览窗口`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	setRemoteVideoRender(params:netEaseAVChatVideo_setRemoteVideoRender_Params):void

	/**
	 * `开始本地预览`
	 * ========params==========
	 *
	 * `zFront` :boolean : （可选项）预览是否在窗口最上层
	 */
	startLocalVideoRender(params:netEaseAVChatVideo_startLocalVideoRender_Params):void

	/**
	 * `开始远程预览`
	 * ========params==========
	 *
	 * `account` :string : 远程用户id
	 *
	 * `zFront` :boolean : （可选项）预览是否在窗口最上层
	 */
	startRemoteVideoRender(params:netEaseAVChatVideo_startRemoteVideoRender_Params):void

	/** 关闭本地预览*/ 
	closeLocalVideo():void

	/** 显示本地预览*/ 
	showLocalVideo():void

	/** 隐藏本地预览*/ 
	hideLocalVideo():void

	/** 关闭远程预览*/ 
	closeRemoteVideo():void

	/** 显示远程预览*/ 
	showRemoteVideo():void

	/** 隐藏远程预览*/ 
	hideRemoteVideo():void

	/**
	 * `设置初始化参数（setRtc，启动引擎后调用）`
	 * ========params==========
	 *
	 * `autoCallProximity` :boolean : 语音通话时使用, 距离感应是否自动黑屏
	 *
	 * `defaultFrontCamera` :boolean : 默认是否使用前置摄像头
	 *
	 * `videoQuality` :number : 视频质量调整, 最高建议使用480P
	 */
	setParams(params:netEaseAVChatVideo_setParams_Params):void

	/**
	 * `设置是否开启视频（setParams之后，如果当前为视频对话进行调用，且enable为true；挂断后调用该接口，且enable为false）`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启视频
	 */
	setVideo(params:netEaseAVChatVideo_setVideo_Params):void

	/**
	 * `设置是否开启预览（setVideo之后，如果当前为视频对话进行调用，且enable为true；挂断前调用该接口，且enable为false）`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启预览
	 */
	setPreview(params:netEaseAVChatVideo_setPreview_Params):void

	/**
	 * `是否开启监听该帐号其他端回应`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	addOnlineAckListener(params:netEaseAVChatVideo_addOnlineAckListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否开启挂断监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	hangUpListener(params:netEaseAVChatVideo_hangUpListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否开启监听被叫方回应`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	calleeAckListener(params:netEaseAVChatVideo_calleeAckListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `音视频切换控制`
	 * ========params==========
	 *
	 * `chatId` :string : 对话id
	 *
	 * `command` :string : 命令
	 */
	sendControlCommand(params:netEaseAVChatVideo_sendControlCommand_Params, callback?: (ret:JSON) => void):void

	/**
	 * `监听通话控制通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onControlListener(params:netEaseAVChatVideo_onControlListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `主叫收到被叫响应通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onResponseListener(params:netEaseAVChatVideo_onResponseListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通话建立成功通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onCallEstablishedListener(params:netEaseAVChatVideo_onCallEstablishedListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通话断开通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onCallDisconnectedListener(params:netEaseAVChatVideo_onCallDisconnectedListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `当前通话网络状况通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onNetStatusListener(params:netEaseAVChatVideo_onNetStatusListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否开启监听被叫方回应`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	calleeAckListener(params:netEaseAVChatVideo_calleeAckListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `是否开启监听该帐号其他端回应`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	addOnlineAckListener(params:netEaseAVChatVideo_addOnlineAckListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `服务器录制信息监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	speakingUsersListener(params:netEaseAVChatVideo_speakingUsersListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `摄像头方向切换完成监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	cameraSwitchListener(params:netEaseAVChatVideo_cameraSwitchListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清晰度切换完成后，SDK 通过以下回调通知应用`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	qualitySwitchListener(params:netEaseAVChatVideo_qualitySwitchListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `服务器录制信息监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	myVolumeListener(params:netEaseAVChatVideo_myVolumeListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `本地录制成功开始监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	recordStartedListener(params:netEaseAVChatVideo_recordStartedListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `本地录制成功结束监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	recordStoppedListener(params:netEaseAVChatVideo_recordStoppedListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `本地录制发生了错误监听`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	recordErrorListener(params:netEaseAVChatVideo_recordErrorListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `用户加入会议通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	joinMeetingListener(params:netEaseAVChatVideo_joinMeetingListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `会议发生了错误`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	meetingErrorListener(params:netEaseAVChatVideo_meetingErrorListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `用户离开会议通知`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	leaveMeetingListener(params:netEaseAVChatVideo_leaveMeetingListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除点对点历史消息`
	 * ========params==========
	 *
	 * `account` :string : 用户账号
	 *
	 * `sessionType` :number : 聊天类型
	 *
	 * `deleteRoam` :boolean : (可选项)是否删除漫游消息
	 */
	clearServerHistory(params:netEaseAVChatVideo_clearServerHistory_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除好友同时删除备注信息`
	 * ========params==========
	 *
	 * `account` :string : 好友账号
	 *
	 * `deleteAlias` :boolean : （可选项）删除备注信息
	 */
	deleteFriend(params:netEaseAVChatVideo_deleteFriend_Params, callback?: (ret:JSON) => void):void

	/**
	 * `主叫发起实时会话请求`
	 * ========params==========
	 *
	 * `callees` :Array : 被叫帐号列表, 当前版本只支持一个被叫
	 */
	requestRTS(params:netEaseAVChatVideo_requestRTS_Params, callback?: (ret:JSON) => void):void

	/**
	 * `被叫响应实时会话请求`
	 * ========params==========
	 *
	 * `sessionID` :string : 实时会话ID
	 *
	 * `accept` :boolean : 是否接听
	 */
	responseRTS(params:netEaseAVChatVideo_responseRTS_Params, callback?: (ret:JSON) => void):void

	/**
	 * ` 挂断实时会话`
	 * ========params==========
	 *
	 * `sessionID` :string : 实时会话ID
	 */
	terminateRTS(params:netEaseAVChatVideo_terminateRTS_Params):void

	/**
	 * `从指定通道发送数据`
	 * ========params==========
	 *
	 * `data` :string : 需要发送的实时会话数据, 数据长度不允许超过50KB, 推荐不超过4KB; 发送数据的周期建议控制在50ms以上
	 *
	 * `sessionID` :string : 实时会话ID
	 *
	 * `userID` :string : 发送数据目标用户名, nil表示广播给所有用户
	 *
	 * `service` :string : 实时会话服务类型
	 */
	sendRTSData(params:netEaseAVChatVideo_sendRTSData_Params, callback?: (ret:JSON) => void):void

	/**
	 * ` 发送实时会话控制指令`
	 * ========params==========
	 *
	 * `controlInfo` :string : 控制信息, 自定义实现
	 *
	 * `sessionID` :string : 实时会话ID
	 */
	sendRTSControl(params:netEaseAVChatVideo_sendRTSControl_Params):void

	/**
	 * `设置当前实时会话静音模式`
	 * ========params==========
	 *
	 * `mute` :boolean : 是否开启静音
	 */
	rtsSetMute(params:netEaseAVChatVideo_rtsSetMute_Params):void

	/**
	 * `设置当前实时会话扬声器模式`
	 * ========params==========
	 *
	 * `useSpeaker` :boolean : 是否开启扬声器
	 */
	rtsSetSpeaker(params:netEaseAVChatVideo_rtsSetSpeaker_Params):void

	/** 添加实时会话委托*/ 
	addDelegate():void

	/** 移除实时会话委托*/ 
	removeDelegate():void

	/**
	 * `被叫收到实时会话请求`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSRequestListener(params:netEaseAVChatVideo_onRTSRequestListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `被叫收到实时会话请求`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSResponseListener(params:netEaseAVChatVideo_onRTSResponseListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `对方结束实时会话`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSTerminateListener(params:netEaseAVChatVideo_onRTSTerminateListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * ` 这通呼入的实时会话请求已经被该帐号其他端处理`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSResponsedByOtherListener(params:netEaseAVChatVideo_onRTSResponsedByOtherListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `实时会话状态反馈`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSListener(params:netEaseAVChatVideo_onRTSListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `实时会话状态反馈`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSReceiveListener(params:netEaseAVChatVideo_onRTSReceiveListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `收到实时会话控制信息`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSControlListener(params:netEaseAVChatVideo_onRTSControlListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `实时会话录制信息`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSRecordingInfoListener(params:netEaseAVChatVideo_onRTSRecordingInfoListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `语音网络状态`
	 * ========params==========
	 *
	 * `enable` :boolean : 是否开启监听
	 */
	onRTSAudioNetStatusListener(params:netEaseAVChatVideo_onRTSAudioNetStatusListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `预订多人实时会话`
	 * ========params==========
	 *
	 * `name` :string : 实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)
	 *
	 * `ext` :string : 扩展信息 (用于在会话的创建和加入之间传递额外信息, 仅在创建会话时设置有效)
	 */
	reserveConference(params:netEaseAVChatVideo_reserveConference_Params, callback?: (ret:JSON) => void):void

	/** 预订结果监听*/ 
	onReserveConferenceListener():void

	/**
	 * `加入多人会话`
	 * ========params==========
	 *
	 * `name` :string : 实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)
	 *
	 * `serverRecording` :boolean : 服务器录制开关
	 */
	joinConference(params:netEaseAVChatVideo_joinConference_Params, callback?: (ret:JSON) => void):void

	/**
	 * `离开多人实时会话(当所有加入的人都离开了某会话以后，该会话对应的名称才可以被重复预订)`
	 * ========params==========
	 *
	 * `name` :string : 实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)
	 *
	 * `serverRecording` :boolean : 服务器录制开关
	 */
	leaveConference(params:netEaseAVChatVideo_leaveConference_Params, callback?: (ret:JSON) => void):void

	/** 加入结果监听*/ 
	onJoinConferenceListener():void

	/**
	 * `发送多人会话数据`
	 * ========params==========
	 *
	 * `data` :any : 字段是需要发送的数据。数据长度不允许超过50KB，推荐不超过4KB，发送数据的周期建议控制在50ms以上
	 *
	 * `uid` :any : 字段是发送的目标，如果需要广播发送，请把该字段留空
	 */
	sendRTSDataConference(params:netEaseAVChatVideo_sendRTSDataConference_Params, callback?: (ret:JSON) => void):void

	/** 异常离开多人实时会话通知*/ 
	onLeftConferenceListener(callback?: (ret:JSON) => void):void

	/** 用户加入多人实时会话通知*/ 
	onUserJoinedListener(callback?: (ret:JSON) => void):void

	/** 用户离开多人实时会话通知*/ 
	onUserLeftListener(callback?: (ret:JSON) => void):void

	/** 用户离开多人实时会话通知*/ 
	onUserLeftListener(callback?: (ret:JSON) => void):void

	/**
	 * `拉取文档转码信息列表(在 PC 端提交文档转码任务后，该用户可以通过该接口获取自己的转码文档列表。)`
	 * ========params==========
	 *
	 * `lastDocId` :string : 最后一个文档的锚点，不包括此文档。填 nil 会从最新提交的转码文档开始往前查询
	 *
	 * `limit` :number : 是拉取文档的最大个数，每次拉取的个数不能超过 30
	 */
	fetchMyDocsInfo(params:netEaseAVChatVideo_fetchMyDocsInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询文档转码信息`
	 * ========params==========
	 *
	 * `docId` :string : 文档 id
	 */
	inquireDocInfo(params:netEaseAVChatVideo_inquireDocInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除云端的转码文档`
	 * ========params==========
	 *
	 * `docId` :string : 文档id
	 */
	deleteDoc(params:netEaseAVChatVideo_deleteDoc_Params, callback?: (ret:JSON) => void):void

}
interface netEaseAVChatVideo_login_Params {
	/**账号*/ 
	account:string,

	/**用户密码。*/ 
	password:string,

}

interface netEaseAVChatVideo_startCall_Params {
	/**账号*/ 
	account:string,

	/**对话类型*/ 
	type:string,

}

interface netEaseAVChatVideo_accept_Params {
	/**对话id，从addComingCallingListener接口中获取*/ 
	chatId:string,

}

interface netEaseAVChatVideo_hangUp_Params {
	/**对话id*/ 
	chatId:string,

}

interface netEaseAVChatVideo_joinMeeting_Params {
	/**会议名称*/ 
	name:string,

	/**用于在会议的创建和加入之间传递额外信息, 仅在创建会议时设置有效*/ 
	ext:string,

	/**对话类型*/ 
	type:string,

	/**以发言者的角色加入, 非发言者 (观众)不发送音视频数据*/ 
	actor:boolean,

}

interface netEaseAVChatVideo_setMeetingRole_Params {
	/**以发言者的角色加入, 非发言者 (观众)不发送音视频数据*/ 
	actor:boolean,

}

interface netEaseAVChatVideo_setAudioMute_Params {
	/**是否静音, 静音后将听不到该用户的声音*/ 
	mute:boolean,

	/**用户 uid*/ 
	uid:string,

}

interface netEaseAVChatVideo_setVideoMute_Params {
	/**是否拒绝视频, 拒绝后将没有该用户视频数据回调*/ 
	mute:boolean,

	/**用户 uid*/ 
	uid:string,

}

interface netEaseAVChatVideo_setVideoSendMute_Params {
	/**是否禁止发送视频*/ 
	mute:boolean,

}

interface netEaseAVChatVideo_startVideoCapture_Params {
	/**网络通话视频质量*/ 
	quality:number,

	/**视频采集格式*/ 
	format:number,

	/**使用后置摄像头开始视频*/ 
	backCamera:boolean,

	/**初始打开摄像头*/ 
	cameraOn:boolean,

	/**视频采集方向。 该设置会改变采集到的视频画面的角度，主要用于支持互动直播时的横屏直播： 主播以各种角度手持设备直播， 并设置为该角度的 '视频采集方向'， 拉流播放器就可以以正常的角度观看直播。*/ 
	orientation:string,

	/**视频帧率*/ 
	rate:string,

	/**设置默认的手动对焦框*/ 
	manualFocus:boolean,

	/**设视频前处理开关 默认是 YES 打开前处理*/ 
	videoProcess:boolean,

}

interface netEaseAVChatVideo_setVideoCaptureOrientation_Params {
	/**视频采集方向。 该设置会改变采集到的视频画面的角度，主要用于支持互动直播时的横屏直播： 主播以各种角度手持设备直播， 并设置为该角度的 '视频采集方向'， 拉流播放器就可以以正常的角度观看直播。*/ 
	orientation:string,

}

interface netEaseAVChatVideo_setCameraDisable_Params {
	/**是否关闭*/ 
	cameraDisable:boolean,

}

interface netEaseAVChatVideo_switchCamera_Params {
	/**选择的摄像头（仅ios支持，android不支持指定摄像头）*/ 
	cameraType:string,

}

interface netEaseAVChatVideo_setCameraFlash_Params {
	/**动态开关闪光灯*/ 
	cameraFlash:boolean,

}

interface netEaseAVChatVideo_changeLensPosition_Params {
	/**放大倍数*/ 
	scale:number,

}

interface netEaseAVChatVideo_setFocusMode_Params {
	/**对焦模式*/ 
	mode:string,

}

interface netEaseAVChatVideo_setMute_Params {
	/**设置是否静音*/ 
	mute:boolean,

}

interface netEaseAVChatVideo_setSpeaker_Params {
	/**设置是否开启扬声器*/ 
	useSpeaker:boolean,

}

interface netEaseAVChatVideo_switchType_Params {
	/**通话类型*/ 
	type:string,

}

interface netEaseAVChatVideo_setVideoMaxEncodeBitrate_Params {
	/**最大编码码率 (bps)*/ 
	bitrate:number,

}

interface netEaseAVChatVideo_switchVideoEncoder_Params {
	/**视频编码器*/ 
	codec:number,

}

interface netEaseAVChatVideo_switchVideoDecoder_Params {
	/**视频编码器*/ 
	codec:number,

}

interface netEaseAVChatVideo_switchVideoQuality_Params {
	/**视频编码器*/ 
	quality:number,

}

interface netEaseAVChatVideo_startRecording_Params {
	/**(可选项)录制文件路径, SDK不负责创建目录, 请确保文件路径的合法性,*/ 
	filePath?:string,

	/**(可选项)录制文件视频码率设置, 可以不指定, 由SDK自己选择合适的码率*/ 
	videoBitrate?:string,

	/**录制用户对象的id*/ 
	userId:string,

}

interface netEaseAVChatVideo_startAudioRecording_Params {
	/**(可选项)录制文件路径, 不包含文件类型后缀. 包含文件类型后缀的完整文件路径可以在开始录制以后通过currentAudioRecordingFilePath 查询(SDK不负责创建目录, 请确保文件路径的合法性, 也可以传入 nil, 由 SDK 自己选择文件路径)*/ 
	filePath?:string,

}

interface netEaseAVChatVideo_selectBeautifyType_Params {
	/**(可选项)滤镜类型*/ 
	type?:string,

}

interface netEaseAVChatVideo_setSmoothFilterIntensity_Params {
	/**(可选项)磨皮滤镜强度*/ 
	value?:string,

}

interface netEaseAVChatVideo_setContrastFilterIntensity_Params {
	/**(可选项)对比度滤镜强度*/ 
	value?:string,

}

interface netEaseAVChatVideo_setPreViewMirror_Params {
	/**(可选项)是否开启预览镜像*/ 
	isMirrorOn?:boolean,

}

interface netEaseAVChatVideo_setCodeMirror_Params {
	/**(可选项) 是否开启编码镜像*/ 
	isMirrorOn?:boolean,

	/**(可选项) 是否开启编码镜像*/ 
	isMirrorOn?:boolean,

}

interface netEaseAVChatVideo_addWaterMark_Params {
	/**(可选项) 水印图片*/ 
	imgPath?:string,

	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

}

interface netEaseAVChatVideo_addDynamicWaterMarks_Params {
	/**(可选项) 动态图像数组*/ 
	imgArray?:Array,

	/**(可选项)播放速度的快慢:count代表count帧显示同一张图*/ 
	count?:number,

	/**(可选项)是否循环，不循环就显示一次*/ 
	looped?:boolean,

	/**(可选项)位置*/ 
	location?:string,

	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

}

interface netEaseAVChatVideo_setCodeMirror_Params {
	/**(可选项) 是否开启编码镜像*/ 
	isMirrorOn?:boolean,

	/**(可选项) 是否开启编码镜像*/ 
	isMirrorOn?:boolean,

}

interface netEaseAVChatVideo_setRtc_Params {
	/**设置引擎是否开启*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_setLocalVideoRender_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface netEaseAVChatVideo_setRemoteVideoRender_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface netEaseAVChatVideo_startLocalVideoRender_Params {
	/**（可选项）预览是否在窗口最上层*/ 
	zFront?:boolean,

}

interface netEaseAVChatVideo_startRemoteVideoRender_Params {
	/**远程用户id*/ 
	account:string,

	/**（可选项）预览是否在窗口最上层*/ 
	zFront?:boolean,

}

interface netEaseAVChatVideo_setParams_Params {
	/**语音通话时使用, 距离感应是否自动黑屏*/ 
	autoCallProximity:boolean,

	/**默认是否使用前置摄像头*/ 
	defaultFrontCamera:boolean,

	/**视频质量调整, 最高建议使用480P*/ 
	videoQuality:number,

}

interface netEaseAVChatVideo_setVideo_Params {
	/**是否开启视频*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_setPreview_Params {
	/**是否开启预览*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_addOnlineAckListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_hangUpListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_calleeAckListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_sendControlCommand_Params {
	/**对话id*/ 
	chatId:string,

	/**命令*/ 
	command:string,

}

interface netEaseAVChatVideo_onControlListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onResponseListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onCallEstablishedListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onCallDisconnectedListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onNetStatusListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_calleeAckListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_addOnlineAckListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_speakingUsersListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_cameraSwitchListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_qualitySwitchListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_myVolumeListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_recordStartedListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_recordStoppedListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_recordErrorListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_joinMeetingListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_meetingErrorListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_leaveMeetingListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_clearServerHistory_Params {
	/**用户账号*/ 
	account:string,

	/**聊天类型*/ 
	sessionType:number,

	/**(可选项)是否删除漫游消息*/ 
	deleteRoam?:boolean,

}

interface netEaseAVChatVideo_deleteFriend_Params {
	/**好友账号*/ 
	account:string,

	/**（可选项）删除备注信息*/ 
	deleteAlias?:boolean,

}

interface netEaseAVChatVideo_requestRTS_Params {
	/**被叫帐号列表, 当前版本只支持一个被叫*/ 
	callees:Array,

}

interface netEaseAVChatVideo_responseRTS_Params {
	/**实时会话ID*/ 
	sessionID:string,

	/**是否接听*/ 
	accept:boolean,

}

interface netEaseAVChatVideo_terminateRTS_Params {
	/**实时会话ID*/ 
	sessionID:string,

}

interface netEaseAVChatVideo_sendRTSData_Params {
	/**需要发送的实时会话数据, 数据长度不允许超过50KB, 推荐不超过4KB; 发送数据的周期建议控制在50ms以上*/ 
	data:string,

	/**实时会话ID*/ 
	sessionID:string,

	/**发送数据目标用户名, nil表示广播给所有用户*/ 
	userID:string,

	/**实时会话服务类型*/ 
	service:string,

}

interface netEaseAVChatVideo_sendRTSControl_Params {
	/**控制信息, 自定义实现*/ 
	controlInfo:string,

	/**实时会话ID*/ 
	sessionID:string,

}

interface netEaseAVChatVideo_rtsSetMute_Params {
	/**是否开启静音*/ 
	mute:boolean,

}

interface netEaseAVChatVideo_rtsSetSpeaker_Params {
	/**是否开启扬声器*/ 
	useSpeaker:boolean,

}

interface netEaseAVChatVideo_onRTSRequestListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSResponseListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSTerminateListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSResponsedByOtherListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSReceiveListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSControlListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSRecordingInfoListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_onRTSAudioNetStatusListener_Params {
	/**是否开启监听*/ 
	enable:boolean,

}

interface netEaseAVChatVideo_reserveConference_Params {
	/**实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)*/ 
	name:string,

	/**扩展信息 (用于在会话的创建和加入之间传递额外信息, 仅在创建会话时设置有效)*/ 
	ext:string,

}

interface netEaseAVChatVideo_joinConference_Params {
	/**实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)*/ 
	name:string,

	/**服务器录制开关*/ 
	serverRecording:boolean,

}

interface netEaseAVChatVideo_leaveConference_Params {
	/**实时会话名称(相同的实时会话名称, 只在会话使用完以后才可以重复使用, 开发者需要保证不会出现重复预订某会话名称而不使用的情况)*/ 
	name:string,

	/**服务器录制开关*/ 
	serverRecording:boolean,

}

interface netEaseAVChatVideo_sendRTSDataConference_Params {
	/**字段是需要发送的数据。数据长度不允许超过50KB，推荐不超过4KB，发送数据的周期建议控制在50ms以上*/ 
	data:any,

	/**字段是发送的目标，如果需要广播发送，请把该字段留空*/ 
	uid:any,

}

interface netEaseAVChatVideo_fetchMyDocsInfo_Params {
	/**最后一个文档的锚点，不包括此文档。填 nil 会从最新提交的转码文档开始往前查询*/ 
	lastDocId:string,

	/**是拉取文档的最大个数，每次拉取的个数不能超过 30*/ 
	limit:number,

}

interface netEaseAVChatVideo_inquireDocInfo_Params {
	/**文档 id*/ 
	docId:string,

}

interface netEaseAVChatVideo_deleteDoc_Params {
	/**文档id*/ 
	docId:string,

}

interface hanvonCloudOcrFormulaReader {
	/**
	 * `识别题目`
	 * ========params==========
	 *
	 * `androidkey` :string : 在汉王云官网申请的android key
	 *
	 * `picpath` :string : 题目图片的存放路径
	 */
	recognitionOcrFormula(params:hanvonCloudOcrFormulaReader_recognitionOcrFormula_Params, callback?: (ret:JSON) => void):void

}
interface hanvonCloudOcrFormulaReader_recognitionOcrFormula_Params {
	/**在汉王云官网申请的android key*/ 
	androidkey:string,

	/**题目图片的存放路径*/ 
	picpath:string,

}

interface mobUms {
	/**
	 * `初始化`
	 * ========params==========
	 *
	 * `appkey` :string : 从 mob 平台申请的 AppKey
	 *
	 * `appsecret` :string : 从 mob 平台申请的 AppSecret
	 *
	 * `platform` :Array : 各社交平台key，目前支持 微信、QQ、新浪微博、FaceBook，如果不打算支持某第三方平台可忽略数组中的一组值
	 */
	init(params:mobUms_init_Params):void

	/** 打开我的资料页面*/ 
	showProfilePage():void

	/** 打开最近登录列表页*/ 
	showRecommendationPage():void

	/**
	 * `以手机号码登录，需要先手机注册`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 *
	 * `password` :string : 密码
	 */
	loginWithPhoneNumber(params:mobUms_loginWithPhoneNumber_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以社交账号码登录，没有登录过将建立新用户`
	 * ========params==========
	 *
	 * `Social` :string : 社交平台，支持四种
	 */
	loginWithSocialAccount(params:mobUms_loginWithSocialAccount_Params, callback?: (ret:JSON) => void):void

	/**
	 * `请求用于注册的短信验证码`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 */
	sendVerifyCodeForRegitser(params:mobUms_sendVerifyCodeForRegitser_Params, callback?: (ret:JSON) => void):void

	/**
	 * `请求用于重置密码的短信验证码，注意不要和前面函数搞混了`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 */
	sendVerifyCodeForResetPassword(params:mobUms_sendVerifyCodeForResetPassword_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以电话号码执行注册，各字段限制请登录后在 管理控制台->UMSSDK->字段管理 中查看，如不写某个字段请忽略`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 *
	 * `vcode` :string : 手机验证码
	 *
	 * `password` :string : 密码
	 *
	 * `nickname` :string : 昵称
	 *
	 * `avatarId` :string : 头像id，这个id是通过uploadAvatar函数返回的id
	 *
	 * `gender` :string : 性别
	 *
	 * `birthday` :string : 生日，字符串格式 "2000-01-10"
	 *
	 * `age` :number : 年龄
	 *
	 * `constellation` :string : 星座
	 *
	 * `zodiac` :string : 生肖
	 *
	 * `signature` :string : 签名
	 *
	 * `email` :string : 电子邮箱
	 *
	 * `address` :string : 地址
	 *
	 * `zipCode` :number : 邮政编码
	 *
	 * `resume` :string : 简介
	 *
	 * `customize` :JSON : 自定义字段，目前支持两种数据类型，字符串和数字，其他数据类型因SDK支持不好，就没有集成，如果想保存其他数据类型请转换成字符串或数字。注意自定义字段不能通过 getFieldUser 函数查找，如果有自定义数据查找的需求可以用默认字段替代，然后再建立一个对应的自定义字段。默认字段就是个名字并不一定只能保存相应数据，保存其他数据也是可以的，只要数据类型是匹配的就行
	 */
	registerWithPhoneNumber(params:mobUms_registerWithPhoneNumber_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以电话号码执行重置密码，注意：如果用第三方平台注册，再绑定手机号，这样就不能更改手机登录的密码了`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 *
	 * `vcode` :string : 手机验证码
	 *
	 * `password` :string : 密码
	 */
	resetPasswordWithPhoneNumber(params:mobUms_resetPasswordWithPhoneNumber_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新用户资料`
	 * ========params==========
	 *
	 * `nickname` :string : 昵称
	 *
	 * `avatarId` :string : 头像id，这个id是通过uploadAvatar函数返回的id
	 *
	 * `gender` :string : 性别
	 *
	 * `birthday` :string : 生日，字符串格式 "2000-01-10"
	 *
	 * `age` :number : 年龄
	 *
	 * `constellation` :string : 星座
	 *
	 * `zodiac` :string : 生肖
	 *
	 * `signature` :string : 签名
	 *
	 * `email` :string : 电子邮箱
	 *
	 * `address` :string : 地址
	 *
	 * `zipCode` :number : 邮政编码
	 *
	 * `resume` :string : 简介
	 *
	 * `customize` :JSON : 自定义字段，目前支持两种数据类型，字符串和数字，其他数据类型因SDK支持不好，就没有集成，如果想保存其他数据类型请转换成字符串或数字。
	 */
	updateUserInfo(params:mobUms_updateUserInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `上传头像`
	 * ========params==========
	 *
	 * `path` :string : 路径，绝对路径格式，如"fs://image/avatar.png"，好像这里不能使用widgett://协议，请各位开发者在实际中确认一下
	 */
	uploadAvatar(params:mobUms_uploadAvatar_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改密码`
	 * ========params==========
	 *
	 * `newPassword` :string : 新密码
	 *
	 * `oldPassword` :string : 旧密码
	 */
	changePassword(params:mobUms_changePassword_Params, callback?: (ret:JSON) => void):void

	/** 注销*/ 
	logout():void

	/**
	 * `将电话号码绑定为一种登录方式`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 *
	 * `vcode` :string : 手机验证码
	 *
	 * `password` :string : 密码
	 */
	bindPhone(params:mobUms_bindPhone_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将指定社交平台绑定为一种登录方式`
	 * ========params==========
	 *
	 * `Social` :string : 社交平台，支持四种
	 */
	bindSocialAccount(params:mobUms_bindSocialAccount_Params, callback?: (ret:JSON) => void):void

	/** 获取登录用户token，同步函数*/ 
	getLoginUserToken():void

	/** 获取登录用户userId，同步函数*/ 
	getLoginUserId():void

	/** 是否已绑定手机号*/ 
	isBindPhone():void

	/** 获取当前登录用户信息*/ 
	getLoginUser():void

	/**
	 * `关注某个用户`
	 * ========params==========
	 *
	 * `id` :string : 用户id，优先使用
	 *
	 * `phone` :string : 手机号码，如果有id将忽略
	 */
	followUser(params:mobUms_followUser_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消关注`
	 * ========params==========
	 *
	 * `id` :string : 用户id，优先使用
	 *
	 * `phone` :string : 手机号码，如果有id将忽略
	 */
	stopFollow(params:mobUms_stopFollow_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除粉丝，目前SDK删不掉，所以该函数无效，写上来做保留`
	 * ========params==========
	 *
	 * `id` :string : 用户id，优先使用
	 *
	 * `phone` :string : 手机号码，如果有id将忽略
	 */
	deleteFans(params:mobUms_deleteFans_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断一个人是否我的关注`
	 * ========params==========
	 *
	 * `id` :string : 用户id，优先使用
	 *
	 * `phone` :string : 手机号码，如果有id将忽略
	 */
	isMyFollowing(params:mobUms_isMyFollowing_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断一个人是否我的粉丝`
	 * ========params==========
	 *
	 * `id` :string : 用户id，优先使用
	 *
	 * `phone` :string : 手机号码，如果有id将忽略
	 */
	isMyFans(params:mobUms_isMyFans_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通过字段值查找一个用户信息，如果用第三方平台注册，再绑定手机号，通过手机号查找是找不到的，目前SDK是这样，所以最好用手机注册，之后绑定第三方就没有此问题`
	 * ========params==========
	 *
	 * `field` :string : 等查找字段名，只支持默认字段的部分，如："头像id","性别","生日","星座","生肖"，等不支持
	 *
	 * `value` :any : 等查找字段值，等于该值
	 */
	getFieldUser(params:mobUms_getFieldUser_Params, callback?: (ret:JSON) => void):void

	/** 获取关注列表，只返回用户id数组，注意该函数可能数据量较大*/ 
	getFollowingsId():void

	/** 返回粉丝列表，只返回用户id数组，注意该函数可能数据量较大*/ 
	getFansId():void

	/**
	 * `请求获取短信验证码`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 */
	getVerificationCode(params:mobUms_getVerificationCode_Params, callback?: (ret:JSON) => void):void

	/**
	 * `验证短信验证码`
	 * ========params==========
	 *
	 * `country` :string : 国家代码，如：中国对应86
	 *
	 * `phone` :string : 手机号码
	 *
	 * `code` :string : 手机验证码，注意这个参数和前面验证码参数 vcode 不同
	 */
	submitVerificationCode(params:mobUms_submitVerificationCode_Params, callback?: (ret:JSON) => void):void

}
interface mobUms_init_Params {
	/**从 mob 平台申请的 AppKey*/ 
	appkey:string,

	/**从 mob 平台申请的 AppSecret*/ 
	appsecret:string,

	/**各社交平台key，目前支持 微信、QQ、新浪微博、FaceBook，如果不打算支持某第三方平台可忽略数组中的一组值*/ 
	platform:Array,

}

interface mobUms_loginWithPhoneNumber_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

	/**密码*/ 
	password:string,

}

interface mobUms_loginWithSocialAccount_Params {
	/**社交平台，支持四种*/ 
	Social:string,

}

interface mobUms_sendVerifyCodeForRegitser_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

}

interface mobUms_sendVerifyCodeForResetPassword_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

}

interface mobUms_registerWithPhoneNumber_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

	/**手机验证码*/ 
	vcode:string,

	/**密码*/ 
	password:string,

	/**昵称*/ 
	nickname:string,

	/**头像id，这个id是通过uploadAvatar函数返回的id*/ 
	avatarId:string,

	/**性别*/ 
	gender:string,

	/**生日，字符串格式 "2000-01-10"*/ 
	birthday:string,

	/**年龄*/ 
	age:number,

	/**星座*/ 
	constellation:string,

	/**生肖*/ 
	zodiac:string,

	/**签名*/ 
	signature:string,

	/**电子邮箱*/ 
	email:string,

	/**地址*/ 
	address:string,

	/**邮政编码*/ 
	zipCode:number,

	/**简介*/ 
	resume:string,

	/**自定义字段，目前支持两种数据类型，字符串和数字，其他数据类型因SDK支持不好，就没有集成，如果想保存其他数据类型请转换成字符串或数字。注意自定义字段不能通过 getFieldUser 函数查找，如果有自定义数据查找的需求可以用默认字段替代，然后再建立一个对应的自定义字段。默认字段就是个名字并不一定只能保存相应数据，保存其他数据也是可以的，只要数据类型是匹配的就行*/ 
	customize:JSON,

}

interface mobUms_resetPasswordWithPhoneNumber_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

	/**手机验证码*/ 
	vcode:string,

	/**密码*/ 
	password:string,

}

interface mobUms_updateUserInfo_Params {
	/**昵称*/ 
	nickname:string,

	/**头像id，这个id是通过uploadAvatar函数返回的id*/ 
	avatarId:string,

	/**性别*/ 
	gender:string,

	/**生日，字符串格式 "2000-01-10"*/ 
	birthday:string,

	/**年龄*/ 
	age:number,

	/**星座*/ 
	constellation:string,

	/**生肖*/ 
	zodiac:string,

	/**签名*/ 
	signature:string,

	/**电子邮箱*/ 
	email:string,

	/**地址*/ 
	address:string,

	/**邮政编码*/ 
	zipCode:number,

	/**简介*/ 
	resume:string,

	/**自定义字段，目前支持两种数据类型，字符串和数字，其他数据类型因SDK支持不好，就没有集成，如果想保存其他数据类型请转换成字符串或数字。*/ 
	customize:JSON,

}

interface mobUms_uploadAvatar_Params {
	/**路径，绝对路径格式，如"fs://image/avatar.png"，好像这里不能使用widgett://协议，请各位开发者在实际中确认一下*/ 
	path:string,

}

interface mobUms_changePassword_Params {
	/**新密码*/ 
	newPassword:string,

	/**旧密码*/ 
	oldPassword:string,

}

interface mobUms_bindPhone_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

	/**手机验证码*/ 
	vcode:string,

	/**密码*/ 
	password:string,

}

interface mobUms_bindSocialAccount_Params {
	/**社交平台，支持四种*/ 
	Social:string,

}

interface mobUms_followUser_Params {
	/**用户id，优先使用*/ 
	id:string,

	/**手机号码，如果有id将忽略*/ 
	phone:string,

}

interface mobUms_stopFollow_Params {
	/**用户id，优先使用*/ 
	id:string,

	/**手机号码，如果有id将忽略*/ 
	phone:string,

}

interface mobUms_deleteFans_Params {
	/**用户id，优先使用*/ 
	id:string,

	/**手机号码，如果有id将忽略*/ 
	phone:string,

}

interface mobUms_isMyFollowing_Params {
	/**用户id，优先使用*/ 
	id:string,

	/**手机号码，如果有id将忽略*/ 
	phone:string,

}

interface mobUms_isMyFans_Params {
	/**用户id，优先使用*/ 
	id:string,

	/**手机号码，如果有id将忽略*/ 
	phone:string,

}

interface mobUms_getFieldUser_Params {
	/**等查找字段名，只支持默认字段的部分，如："头像id","性别","生日","星座","生肖"，等不支持*/ 
	field:string,

	/**等查找字段值，等于该值*/ 
	value:any,

}

interface mobUms_getVerificationCode_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

}

interface mobUms_submitVerificationCode_Params {
	/**国家代码，如：中国对应86*/ 
	country:string,

	/**手机号码*/ 
	phone:string,

	/**手机验证码，注意这个参数和前面验证码参数 vcode 不同*/ 
	code:string,

}

interface sqlCipher {
	/**
	 * `打开数据库，若数据库不存在则创建数据库。`
	 * ========params==========
	 *
	 * `name` :string : 数据库别名
	 *
	 * `path` :string : （可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）
	 *
	 * `passWord` :string : 数据库密码
	 */
	openDatabase(params:sqlCipher_openDatabase_Params, callback?: (ret:JSON) => void):void

	/**
	 * `关闭数据库`
	 * ========params==========
	 *
	 * `name` :string : 数据库别名
	 */
	closeDatabase(params:sqlCipher_closeDatabase_Params, callback?: (ret:JSON) => void):void

	/**
	 * `执行事务操作语句`
	 * ========params==========
	 *
	 * `name` :string : 数据库别名
	 *
	 * `operation` :string : 事务操作类型，取值范围如下：
	 */
	transaction(params:sqlCipher_transaction_Params, callback?: (ret:JSON) => void):void

	/**
	 * `执行 sql`
	 * ========params==========
	 *
	 * `name` :string : 数据库别名
	 *
	 * `sql` :string : sql 语句
	 */
	executeSql(params:sqlCipher_executeSql_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查询sql`
	 * ========params==========
	 *
	 * `name` :string : 数据库别名
	 *
	 * `sql` :string : sql语句
	 */
	selectSql(params:sqlCipher_selectSql_Params, callback?: (ret:JSON) => void):void

}
interface sqlCipher_openDatabase_Params {
	/**数据库别名*/ 
	name:string,

	/**（可选项）数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db）*/ 
	path?:string,

	/**数据库密码*/ 
	passWord:string,

}

interface sqlCipher_closeDatabase_Params {
	/**数据库别名*/ 
	name:string,

}

interface sqlCipher_transaction_Params {
	/**数据库别名*/ 
	name:string,

	/**事务操作类型，取值范围如下：*/ 
	operation:string,

}

interface sqlCipher_executeSql_Params {
	/**数据库别名*/ 
	name:string,

	/**sql 语句*/ 
	sql:string,

}

interface sqlCipher_selectSql_Params {
	/**数据库别名*/ 
	name:string,

	/**sql语句*/ 
	sql:string,

}

interface smssdk {
}
interface rtcCore {
}
interface apsaraShortVideoBase {
	/** 打开视频录制页面*/ 
	openRecordView(callback?: (ret:JSON) => void):void

	/** 打开视频编辑页面*/ 
	openEditorView(callback?: (ret:JSON) => void):void

}
interface aliPayTrade {
	/**
	 * `支付宝授权登录，**参数及其回调详细说明参考 [App支付宝登录授权SDK调用方法](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.GRGqgT&treeId=218&articleId=105325&docType=1)**`
	 * ========params==========
	 *
	 * `appId` :string : 支付宝分配给开发者的应用ID
	 *
	 * `targetId` :string : 商户标识该次用户授权请求的ID，该值在商户端应保持唯一
	 *
	 * `partner` :string : （可选项）签约的支付宝账号对应的支付宝唯一用户号，以2088开头的16位纯数字组成，若不传则模块从 `key.xml` 文件读取该参数
	 *
	 * `rsaPriKey` :string : （可选项）商户私钥，若不传则模块从 `key.xml` 文件读取该参数
	 */
	auth(params:aliPayTrade_auth_Params, callback?: (ret:JSON) => void):void

}
interface aliPayTrade_auth_Params {
	/**支付宝分配给开发者的应用ID*/ 
	appId:string,

	/**商户标识该次用户授权请求的ID，该值在商户端应保持唯一*/ 
	targetId:string,

	/**（可选项）签约的支付宝账号对应的支付宝唯一用户号，以2088开头的16位纯数字组成，若不传则模块从 `key.xml` 文件读取该参数*/ 
	partner?:string,

	/**（可选项）商户私钥，若不传则模块从 `key.xml` 文件读取该参数*/ 
	rsaPriKey?:string,

}

interface bgnUITencentOCR {
	/**
	 * `名片OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 */
	bc(params:bgnUITencentOCR_bc_Params, callback?: (ret:JSON) => void):void

	/**
	 * `营业执照OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 */
	bizlicense(params:bgnUITencentOCR_bizlicense_Params, callback?: (ret:JSON) => void):void

	/**
	 * `银行卡OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 */
	creditcard(params:bgnUITencentOCR_creditcard_Params, callback?: (ret:JSON) => void):void

	/**
	 * `行驶证驾驶证OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 *
	 * `type` :any : （必填项）识别类型，0-行驶证识别，1-驾驶证识别。
	 */
	driverlicense(params:bgnUITencentOCR_driverlicense_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通用OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 */
	general(params:bgnUITencentOCR_general_Params, callback?: (ret:JSON) => void):void

	/**
	 * `手写体OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据。
	 */
	handwriting(params:bgnUITencentOCR_handwriting_Params, callback?: (ret:JSON) => void):void

	/**
	 * `银行卡OCR解析`
	 * ========params==========
	 *
	 * `image` :any : （必填项）身份证图片类型，0-正面，1-反面。
	 */
	idcard(params:bgnUITencentOCR_idcard_Params, callback?: (ret:JSON) => void):void

	/**
	 * `车牌OCR解析`
	 * ========params==========
	 *
	 * `image` :string : （必填项）base64格式图片数据或者图片url地址。
	 */
	plate(params:bgnUITencentOCR_plate_Params, callback?: (ret:JSON) => void):void

	/**
	 * `打开摄像头获取实时视频预览`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:bgnUITencentOCR_open_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开始识别证照，调用该方法前需要先成功调用open方法`
	 * ========params==========
	 *
	 * `mode` :string : （必填项）要识别的证照类型，可选项目如下：
	 *
	 * `timeout` :any : （可选项）识别超时时长（单位秒）
	 *
	 * `type` :any : （可选项）当识别证照类型是身份证时（0表示正面，1表示反面）
	 */
	startScan(params:bgnUITencentOCR_startScan_Params, callback?: (ret:JSON) => void):void

	/** 关闭摄像头预览*/ 
	close():void

	/** 显示摄像头预览*/ 
	show():void

	/** 隐藏摄像头预览*/ 
	hide():void

}
interface bgnUITencentOCR_bc_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

}

interface bgnUITencentOCR_bizlicense_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

}

interface bgnUITencentOCR_creditcard_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

}

interface bgnUITencentOCR_driverlicense_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

	/**（必填项）识别类型，0-行驶证识别，1-驾驶证识别。*/ 
	type:any,

}

interface bgnUITencentOCR_general_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

}

interface bgnUITencentOCR_handwriting_Params {
	/**（必填项）base64格式图片数据。*/ 
	image:string,

}

interface bgnUITencentOCR_idcard_Params {
	/**（必填项）身份证图片类型，0-正面，1-反面。*/ 
	image:any,

}

interface bgnUITencentOCR_plate_Params {
	/**（必填项）base64格式图片数据或者图片url地址。*/ 
	image:string,

}

interface bgnUITencentOCR_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface bgnUITencentOCR_startScan_Params {
	/**（必填项）要识别的证照类型，可选项目如下：*/ 
	mode?:string,

	/**（可选项）识别超时时长（单位秒）*/ 
	timeout?:any,

	/**（可选项）当识别证照类型是身份证时（0表示正面，1表示反面）*/ 
	type?:any,

}

interface huanxin {
}
interface Hwork {
	/**
	 * `登录`
	 * ========params==========
	 *
	 * `userName` :string : 用户工号
	 */
	login(params:Hwork_login_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据用户名获取该人在 ihaier 中的 Token 和 userid`
	 * ========params==========
	 *
	 * `userName` :string : 用户工号
	 */
	getTokenByUserName(params:Hwork_getTokenByUserName_Params, callback?: (ret:JSON) => void):void

	/**
	 * `创建聊天会话(调用该接口则直接创建群组会话，进入聊天界面，否则直接进入消息列表界面)`
	 * ========params==========
	 *
	 * `userNames` :Array : （可选项）用户工号数组
	 *
	 * `flag` :number : （可选项）标记是客户端还是员工端
	 *
	 * `share` :JSON : （可选项）分享的内容，若不传本参数表示不分享
	 */
	creatChat(params:Hwork_creatChat_Params):void

	/** 监听退出事件*/ 
	exitChatListener():void

}
interface Hwork_login_Params {
	/**用户工号*/ 
	userName:string,

}

interface Hwork_getTokenByUserName_Params {
	/**用户工号*/ 
	userName:string,

}

interface Hwork_creatChat_Params {
	/**（可选项）用户工号数组*/ 
	userNames?:Array,

	/**（可选项）标记是客户端还是员工端*/ 
	flag?:number,

	/**（可选项）分享的内容，若不传本参数表示不分享*/ 
	share?:JSON,

}

interface oneAPMUEM {
}
interface huanxunPay {
	/**
	 * `普通充值,还款充值`
	 * ========params==========
	 *
	 * `operationType` :string : 操作类型
	 *
	 * `merchantID` :string : 商户存管交易账号
	 *
	 * `depositType` :string : 充值类型(1、普通充值 2、还款充值)
	 *
	 * `sign` :string : 签名(MD5(operationType+merchantID+request+系统证书(MD5))
	 *
	 * `request` :string : 整体报文需要使用3DES加密处理
	 */
	recharge(params:huanxunPay_recharge_Params, callback?: (ret:JSON) => void):void

}
interface huanxunPay_recharge_Params {
	/**操作类型*/ 
	operationType:string,

	/**商户存管交易账号*/ 
	merchantID:string,

	/**充值类型(1、普通充值 2、还款充值)*/ 
	depositType:string,

	/**签名(MD5(operationType+merchantID+request+系统证书(MD5))*/ 
	sign:string,

	/**整体报文需要使用3DES加密处理*/ 
	request:string,

}

interface udcreditRecognizer {
	/**
	 * `简版人脸身份认证`
	 * ========params==========
	 *
	 * `authKey` :string : 签名
	 *
	 * `outOrderId` :string : 商户外部订单号
	 *
	 * `partnerOrderId` :string : 关联订单号
	 *
	 * `userId` :string : 商户中的用户唯一Id
	 *
	 * `notificationUrl` :string : 异步通知地址
	 *
	 * `orderInfo` :string : 商户认证信息
	 *
	 * `chooseImagePath` :string : 拍照对比照片，从相册中选择
	 *
	 * `noRandom` :boolean : 默认为 false（三组随机动作）如果设定为 true 只有一个眨眼动作
	 *
	 * `telephoneNumber` :string : 用户手机号
	 *
	 * `bankNumber` :string : 银行卡号
	 *
	 * `showInfo` :boolean : 是否显示身份证ocr信息,确认信息页面
	 *
	 * `closeRemindVoice` :boolean : 活体的语音提示是否关闭
	 *
	 * `takedBySelf` :boolean : OCR手动上传功能
	 *
	 * `extInfo` :string : 作为备用的业务字段（预留字段）
	 *
	 * `identityNumber` :string : 身份证号码(若不传入身份证号码，则会弹出输入框)
	 *
	 * `UserName` :string : 用户姓名，必须是中文和间隔圆点((若不传入姓名，则会弹出输入框))
	 */
	simpleFaceAuthentication(params:udcreditRecognizer_simpleFaceAuthentication_Params, callback?: (ret:JSON) => void):void

}
interface udcreditRecognizer_simpleFaceAuthentication_Params {
	/**签名*/ 
	authKey:string,

	/**商户外部订单号*/ 
	outOrderId:string,

	/**关联订单号*/ 
	partnerOrderId:string,

	/**商户中的用户唯一Id*/ 
	userId:string,

	/**异步通知地址*/ 
	notificationUrl:string,

	/**商户认证信息*/ 
	orderInfo:string,

	/**拍照对比照片，从相册中选择*/ 
	chooseImagePath:string,

	/**默认为 false（三组随机动作）如果设定为 true 只有一个眨眼动作*/ 
	noRandom:boolean,

	/**用户手机号*/ 
	telephoneNumber:string,

	/**银行卡号*/ 
	bankNumber:string,

	/**是否显示身份证ocr信息,确认信息页面*/ 
	showInfo:boolean,

	/**活体的语音提示是否关闭*/ 
	closeRemindVoice:boolean,

	/**OCR手动上传功能*/ 
	takedBySelf:boolean,

	/**作为备用的业务字段（预留字段）*/ 
	extInfo:string,

	/**身份证号码(若不传入身份证号码，则会弹出输入框)*/ 
	identityNumber:string,

	/**用户姓名，必须是中文和间隔圆点((若不传入姓名，则会弹出输入框))*/ 
	UserName:string,

}

interface faceidCard {
	/** SDK网络授权*/ 
	netAuth(callback?: (ret:JSON) => void):void

	/**
	 * `扫描身份证获取身份证照片信息`
	 * ========params==========
	 *
	 * `side` :number : 身份证正反面
	 *
	 * `imgtype` :string : 扫描身份证成功后获取照片的形式
	 */
	cardinfo(params:faceidCard_cardinfo_Params, callback?: (ret:JSON) => void):void

	/** 获取IOS测试包的Bundle Identifier*/ 
	bundleIdentifier(callback?: (ret:JSON) => void):void

}
interface faceidCard_cardinfo_Params {
	/**身份证正反面*/ 
	side:number,

	/**扫描身份证成功后获取照片的形式*/ 
	imgtype:string,

}

interface alivcLivePlayer {
	/**
	 * `初始化播放器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）预览窗口的位置及大小
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 *
	 * `url` :string : 播放url
	 *
	 * `url` :string : 播放url
	 *
	 * `position` :number : 播放的指定位置
	 *
	 * `rect` :JSON : （可选项）预览窗口的位置及大小
	 *
	 * `time` :number : 网络超时时间
	 *
	 * `isCirclePlay` :boolean : 是否循环播放
	 *
	 * `speed` :number : 倍速
	 *
	 * `path` :string : 截图保存路径（如果路径无效会保存失败）只支持fs://等本地路径
	 *
	 * `rotate` :number : 画面旋转角度
	 *
	 * `mode` :string : 画面镜像模式
	 *
	 * `volume` :number : 音量
	 *
	 * `isMute` :boolean : 是否静音
	 *
	 * `brightness` :number : 屏幕亮度
	 *
	 * `scalingMode` :string : 显示模式
	 */
	initPlayer(params:alivcLivePlayer_initPlayer_Params, callback?: (ret:JSON) => void):void

}
interface alivcLivePlayer_initPlayer_Params {
	/**（可选项）预览窗口的位置及大小*/ 
	rect?:JSON,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

	/**播放url*/ 
	url:string,

	/**播放url*/ 
	url:string,

	/**播放的指定位置*/ 
	position:number,

	/**（可选项）预览窗口的位置及大小*/ 
	rect?:JSON,

	/**网络超时时间*/ 
	time:number,

	/**是否循环播放*/ 
	isCirclePlay:boolean,

	/**倍速*/ 
	speed:number,

	/**截图保存路径（如果路径无效会保存失败）只支持fs://等本地路径*/ 
	path:string,

	/**画面旋转角度*/ 
	rotate:number,

	/**画面镜像模式*/ 
	mode:string,

	/**音量*/ 
	volume:number,

	/**是否静音*/ 
	isMute:boolean,

	/**屏幕亮度*/ 
	brightness:number,

	/**显示模式*/ 
	scalingMode:string,

}

interface SPay {
	/** 判断当前设备是否安装微信客户端*/ 
	isInstalled(callback?: (ret:JSON) => void):void

	/**
	 * `配置微信支付的appid`
	 * ========params==========
	 *
	 * `appId` :string : 微信支付的appid
	 */
	config(params:SPay_config_Params):void

	/**
	 * `调起微信支付`
	 * ========params==========
	 *
	 * `amount` :number : 支付的金额精确到分，整数类型
	 *
	 * `token` :string : 支支付授权码
	 *
	 * `service` :string : 支付类型（如pay.weixin.app）
	 */
	wxPay(params:SPay_wxPay_Params, callback?: (ret:JSON) => void):void

}
interface SPay_config_Params {
	/**微信支付的appid*/ 
	appId:string,

}

interface SPay_wxPay_Params {
	/**支付的金额精确到分，整数类型*/ 
	amount:number,

	/**支支付授权码*/ 
	token:string,

	/**支付类型（如pay.weixin.app）*/ 
	service:string,

}

interface zyGoogleAd {
}
interface yWQGsonModule {
	/** 获取一个通过Gson库生成的json字符串*/ 
	getGson():string;

}
interface leCast {
	/** //模块初始化方法，必须在所有方法调用前调用*/ 
	initLeCast():void

	/** 搜索附近的接收端设备*/ 
	browse(callback?: (ret:JSON) => void):void

	/** 停止搜索附近的接收端设备*/ 
	stopBrowse():void

	/**
	 * `通过ip连接接收端设备`
	 * ========params==========
	 *
	 * `serviceInfoIp` :string : 传入ip。
	 */
	connect(params:leCast_connect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通过二维码连接接收端设备`
	 * ========params==========
	 *
	 * `qrCode` :string : （必填项）从二维码扫描出来的字符串，开发者可用apicloud上任意一个扫描二维码的模块扫描二维码，将扫描结果传入该字段。
	 */
	QRconnect(params:leCast_QRconnect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `通过pin码连接`
	 * ========params==========
	 *
	 * `pinCode` :string : 必填项，pin码是乐播的概念，为9位字符串。
	 */
	pinConnect(params:leCast_pinConnect_Params, callback?: (ret:JSON) => void):void

	/**
	 * `断开连接`
	 * ========params==========
	 *
	 * `serviceInfoIp` :string : 必填项，连接时用的ip。
	 */
	disConnect(params:leCast_disConnect_Params, callback?: (ret:JSON) => void):void

	/** 获取已经连接的设备*/ 
	getConnectLelinkServiceInfos(callback?: (ret:JSON) => void):void

	/** 开始镜像，该方法为耗时方法(需要一定时间才能回调)，调用该方法前必须先连接设备*/ 
	startMirror(callback?: (ret:JSON) => void):void

	/** 结束镜像*/ 
	stopMirror(callback?: (ret:JSON) => void):void

	/** 播放媒体，该方法为耗时方法(需要一定时间才能回调)*/ 
	play(callback?: (ret:JSON) => void):void

	/** 暂停播放媒体，返回值参考play方法*/ 
	pause(callback?: (ret:JSON) => void):void

	/** 停止播放媒体，返回值参考play方法*/ 
	stop():void

	/** 播放进度控制，进度，数字型，单位为秒*/ 
	seekTo():void

	/** 增加音量*/ 
	addVolume(callback?: (ret:JSON) => void):void

	/** 减少音量*/ 
	subVolume(callback?: (ret:JSON) => void):void

	/** 是否支持弹幕*/ 
	isSupportDanmuku(callback?: (ret:JSON) => void):void

	/** 设置广告监听*/ 
	setInteractiveAdListener(callback?: (ret:JSON) => void):void

	/** 广告播放上报*/ 
	onInteractiveAdShow(callback?: (ret:JSON) => void):void

	/** 广告播放完成上报*/ 
	onInteractiveAdClosed(callback?: (ret:JSON) => void):void

}
interface leCast_connect_Params {
	/**传入ip。*/ 
	serviceInfoIp:string,

}

interface leCast_QRconnect_Params {
	/**（必填项）从二维码扫描出来的字符串，开发者可用apicloud上任意一个扫描二维码的模块扫描二维码，将扫描结果传入该字段。*/ 
	qrCode:string,

}

interface leCast_pinConnect_Params {
	/**必填项，pin码是乐播的概念，为9位字符串。*/ 
	pinCode:string,

}

interface leCast_disConnect_Params {
	/**必填项，连接时用的ip。*/ 
	serviceInfoIp:string,

}

interface ijkplayer {
	/**
	 * `打开播放器界面`
	 * ========params==========
	 *
	 * `rect` :JSON : (可选项）播放器的位置及长宽
	 *
	 * `texts` :JSON : （可选项）顶部标题文字
	 *
	 * `styles` :JSON : （可选项）模块的样式设置
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget) 支持RTMP、RTSP、HTTP流媒体协议
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `isAutorotate` :boolean : （可选项）是否支持自动转屏
	 *
	 * `isShowProcessView` :boolean : （可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动 默认为false】
	 *
	 * `isShowTimeLable` :boolean : （可选项）是否显示播放时间 (显示:true ; 不显示:false)备注:直播流自动 默认为false】
	 *
	 * `isLive` :boolean : （可选项）是否直播视频源 （直播：true；点播：false）
	 *
	 * `enableFull` :boolean : （可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。
	 *
	 * `isFullBtn` :boolean : （可选项）小窗口是否显示进入全屏按钮
	 *
	 * `isBackBtn` :boolean : （可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false)
	 *
	 * `isOpenGesture` :boolean : （可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启 - ：false）
	 *
	 * `movieScaling` :string : （可选项）缩放模式
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:ijkplayer_open_Params):void

	/**
	 * `设置视频的文件路径`
	 * ========params==========
	 *
	 * `path` :string : 视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget) 支持RTMP、RTSP、HTTP流媒体协议
	 *
	 * `coverImg` :boolean : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `title` :string : （可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效
	 */
	setPath(params:ijkplayer_setPath_Params):void

	/** 重新播放*/ 
	replay():void

	/** 开始播放*/ 
	play():void

	/** 暂停播放*/ 
	pause():void

	/** 关闭播放器*/ 
	close():void

	/** 显示视频播放视图*/ 
	show():void

	/** 隐藏视频播放视图*/ 
	hide():void

	/**
	 * `添加监听`
	 * ========params==========
	 *
	 * `name` :string : （可选项）所要监听的动作名称
	 */
	addEventListener(params:ijkplayer_addEventListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除动作监听`
	 * ========params==========
	 *
	 * `name` :string : （可选项）所要移除的监听的动作名称
	 */
	removeEventListener(params:ijkplayer_removeEventListener_Params):void

	/** 全屏播放（横屏模式）*/ 
	fullScreen():void

	/** 取消全屏播放*/ 
	cancelFullScreen():void

	/**
	 * `快进`
	 * ========params==========
	 *
	 * `seconds` :number : 快进的秒数
	 */
	forward(params:ijkplayer_forward_Params):void

	/**
	 * `快退`
	 * ========params==========
	 *
	 * `seconds` :number : 快退的秒数
	 */
	rewind(params:ijkplayer_rewind_Params):void

	/**
	 * `跳转`
	 * ========params==========
	 *
	 * `seconds` :number : 跳转到音视频播放的秒数
	 */
	seekTo(params:ijkplayer_seekTo_Params):void

	/**
	 * `设置屏幕亮度`
	 * ========params==========
	 *
	 * `brightness` :number : （可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度**
	 */
	setBrightness(params:ijkplayer_setBrightness_Params):void

	/** 获取当前屏幕亮度值*/ 
	getBrightness():void

	/**
	 * `设置音量`
	 * ========params==========
	 *
	 * `volume` :number : （可选项）音量大小，取值范围：0-1
	 */
	setVolume(params:ijkplayer_setVolume_Params):void

	/** 获取当前播放音量*/ 
	getVolume():void

	/** 获取视频的时长*/ 
	getDuration():void

	/** 获取已经播放的时长*/ 
	getCurrentPosition():void

	/** 获取是否全屏播放状态*/ 
	isFullScreen():void

	/**
	 * `设置播放速度`
	 * ========params==========
	 *
	 * `speed` :number : 音量大小，设置视频播放倍速 取值范围：0.5-1.9
	 */
	setSpeed(params:ijkplayer_setSpeed_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置顶部底部导航条是否隐藏`
	 * ========params==========
	 *
	 * `head` :boolean : （可选项）设置播放器顶部导航条是否隐藏
	 *
	 * `foot` :boolean : （可选项）设置播放器底部导航条是否隐藏
	 */
	setHeadFoot(params:ijkplayer_setHeadFoot_Params):void

	/** 截屏*/ 
	screenCapture():void

}
interface ijkplayer_open_Params {
	/**(可选项）播放器的位置及长宽*/ 
	rect?:JSON,

	/**（可选项）顶部标题文字*/ 
	texts?:JSON,

	/**（可选项）模块的样式设置*/ 
	styles?:JSON,

	/**视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget) 支持RTMP、RTSP、HTTP流媒体协议*/ 
	path:string,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）是否支持自动转屏*/ 
	isAutorotate?:boolean,

	/**（可选项）是否显示进度条 (显示:true ; 不显示:false)【备注:直播流自动 默认为false】*/ 
	isShowProcessView?:boolean,

	/**（可选项）是否显示播放时间 (显示:true ; 不显示:false)备注:直播流自动 默认为false】*/ 
	isShowTimeLable?:boolean,

	/**（可选项）是否直播视频源 （直播：true；点播：false）*/ 
	isLive?:boolean,

	/**（可选项）本次播放视频是否全屏播放，当为true时将直接全屏播放视频，x,y,w,h,fixedOn,fixed值不会生效。*/ 
	enableFull?:boolean,

	/**（可选项）小窗口是否显示进入全屏按钮*/ 
	isFullBtn?:boolean,

	/**（可选项）窗口播放时是否开启手势控制音量，亮度和进度 （开启：true；不开启：false)*/ 
	isBackBtn?:boolean,

	/**（可选项）全屏时是否开启手势控制音量，亮度和进度 （开启：true；不开启 - ：false）*/ 
	isOpenGesture?:boolean,

	/**（可选项）缩放模式*/ 
	movieScaling?:string,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface ijkplayer_setPath_Params {
	/**视频资源地址,支持网络和本地路径（fs://，widget://）(android不支持widget) 支持RTMP、RTSP、HTTP流媒体协议*/ 
	path:string,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:boolean,

	/**（可选项）当设置 play 接口打开的视频时，本参数表示设置该视频的标题，本参数仅对 play 接口有效*/ 
	title?:string,

}

interface ijkplayer_addEventListener_Params {
	/**（可选项）所要监听的动作名称*/ 
	name?:string,

}

interface ijkplayer_removeEventListener_Params {
	/**（可选项）所要移除的监听的动作名称*/ 
	name?:string,

}

interface ijkplayer_forward_Params {
	/**快进的秒数*/ 
	seconds:number,

}

interface ijkplayer_rewind_Params {
	/**快退的秒数*/ 
	seconds:number,

}

interface ijkplayer_seekTo_Params {
	/**跳转到音视频播放的秒数*/ 
	seconds:number,

}

interface ijkplayer_setBrightness_Params {
	/**（可选项）设置的屏幕的亮度，取值范围：0-100，**在 iOS 平台上设置的是系统屏幕亮度。Android 平台上设置的本应用内的屏幕亮度***/ 
	brightness?:number,

}

interface ijkplayer_setVolume_Params {
	/**（可选项）音量大小，取值范围：0-1*/ 
	volume?:number,

}

interface ijkplayer_setSpeed_Params {
	/**音量大小，设置视频播放倍速 取值范围：0.5-1.9*/ 
	speed:number,

}

interface ijkplayer_setHeadFoot_Params {
	/**（可选项）设置播放器顶部导航条是否隐藏*/ 
	head?:boolean,

	/**（可选项）设置播放器底部导航条是否隐藏*/ 
	foot?:boolean,

}

interface kiviMakeUp {
	/**
	 * `以view的形式打开`
	 * ========params==========
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 *
	 * `ret` :JSON : null
	 */
	openView(params:kiviMakeUp_openView_Params):void

	/** 显示（注意该方法与openView对应）*/ 
	showView():void

	/** 隐藏 （注意该方法与openView对应）*/ 
	hideView():void

	/** 关闭视图*/ 
	closeView():void

	/**
	 * `切换摄像头`
	 * ========params==========
	 *
	 * `resolution` :number : （可选项）切换前后摄像头与分辨率
	 */
	switchCamera(params:kiviMakeUp_switchCamera_Params):void

	/**
	 * `重新设置视图位置大小`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 */
	setRect(params:kiviMakeUp_setRect_Params):void

	/** 加载美妆*/ 
	loadMakeUp():void

	/** 拍照*/ 
	captureScreen(callback?: (ret:JSON) => void):void

	/** 对比妆容*/ 
	comparedMakeUp():void

	/** 妆容透明度调整*/ 
	makeUpOpacity():void

	/** 粉底调整（滤镜）*/ 
	foundation():void

	/** 粉底强度调整（滤镜），仅仅调整强度，滤镜使用默认的或上一个下载加载的*/ 
	foundationOpacity():void

	/** 美颜接口（iOS掉用此接口必须先掉用switchBeautify接口打开美颜功能，否者设置不会生效）*/ 
	beautifyOpacity():void

	/** 需要在window中监听pause事件调用 不调用该接口会导致app从后台切回前台时导致UnityPlayer画面卡住（该接口仅支持android）， iOS会自动监听退到后台事件并暂停unity*/ 
	onPause():void

	/** 需要在window中监听resume事件调用 不调用该接口会导致app从后台切回前台时导致UnityPlayer画面卡住（该接口仅支持android），iOS会自动监听进入前台事件并恢复unity*/ 
	onResume():void

	/** 打开或关闭滤镜*/ 
	switchFilter():void

	/** 打开或关闭美颜*/ 
	switchBeautify():void

	/** 添加监听*/ 
	addListener():void

}
interface kiviMakeUp_openView_Params {
	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

	/**null*/ 
	ret:JSON,

}

interface kiviMakeUp_switchCamera_Params {
	/**（可选项）切换前后摄像头与分辨率*/ 
	resolution?:number,

}

interface kiviMakeUp_setRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

}

interface meiQia {
	/**
	 * `初始化美洽`
	 * ========params==========
	 *
	 * `appkey` :string : 注册美洽后，从美洽后台获得的 appkey
	 *
	 * `callback` :any : 初始化成功将返回顾客ID（ClientId），初始化失败将返回错误描述
	 */
	initMeiQia(params:meiQia_initMeiQia_Params):void

	/**
	 * `设置美洽聊天界面的标题栏中文字的颜色`
	 * ========params==========
	 *
	 * `color` :string : `#FFFFFF`格式的HTML颜色
	 */
	setTitleColor(params:meiQia_setTitleColor_Params):void

	/**
	 * `设置美洽聊天界面的标题栏背景颜色`
	 * ========params==========
	 *
	 * `color` :string : `#FFFFFF`格式的HTML颜色
	 */
	setTitleBarColor(params:meiQia_setTitleBarColor_Params):void

	/**
	 * `弹出美洽聊天界面`
	 * ========params==========
	 *
	 * `showAvatar` :boolean : 是否显示用户头像
	 *
	 * `showTitle` :boolean : 是否显示title
	 *
	 * `enableSendVoice` :boolean : 聊天页面是否显示发送语音按钮
	 *
	 * `enableSendImage` :boolean : 聊天页面是否显示发送图片按钮
	 *
	 * `enableSendEmoji` :boolean : 聊天页面是否显示发送表情按钮
	 *
	 * `enableCamera` :boolean : 聊天页面是否显示拍照按钮
	 *
	 * `updateClientInfo` :boolean : 是否更新用户信息，如果为true，在设置过用户信息后可以重新将setClientInfo接口设置的用户信息更新到美洽服务端
	 */
	show(params:meiQia_show_Params):void

	/**
	 * `指定分配客服与客服组`
	 * ========params==========
	 *
	 * `agentId` :string : 在美洽系统中客服对应的ID
	 *
	 * `agentGroup` :string : 在美洽系统中客服组对应的ID
	 *
	 * `scheduleRule` :string : 
	 */
	setScheduledAgentOrAgentGroup(params:meiQia_setScheduledAgentOrAgentGroup_Params):void

	/** 效果图：*/ 
	setClientInfo():void

	/**
	 * `设置美洽顾客的 id 后，该id对应的顾客将会上线。设置后可实现消息漫游。`
	 * ========params==========
	 *
	 * `id` :string : 美洽的ClientID。会在成功初始化美洽后返回
	 */
	setLoginMQClientId(params:meiQia_setLoginMQClientId_Params):void

	/**
	 * `使用该接口，可让美洽绑定开发者的用户系统和美洽的顾客系统。`
	 * ========params==========
	 *
	 * `id` :string : 开发者自定义的用户ID。尽量避免使用\、<、>、?、@等符号作为ID
	 */
	setLoginCustomizedId(params:meiQia_setLoginCustomizedId_Params):void

	/** 使用该接口，用于自定义聊天界面中右上角的按钮。*/ 
	setNavRightButton():void

	/** 使用该接口获取未读消息的数目*/ 
	getUnreadMessageCount():void

	/**
	 * `设置预发送消息，该消息将会在用户上线之后自动发送给客服，可以用于标记客户当前正在浏览的内容等客服需要了解的信息。`
	 * ========params==========
	 *
	 * `message` :string : 发送的消息内容
	 */
	setPreSendTextMessage(params:meiQia_setPreSendTextMessage_Params):void

	/** 添加消息监听*/ 
	addMessageListener():void

	/** 取消消息监听*/ 
	cancelMessageListener():void

	/** 设置顾客离线*/ 
	setClientOffline():void

	/** 获取最近一条消息，调用此接口前需要初始化*/ 
	getLastMessage():void

	/** 添加聊天页面相关监听*/ 
	addChatViewListener():void

	/**
	 * `配置会话页面的相关设置`
	 * ========params==========
	 *
	 * `backConfig` :JSON : back键的相关设置
	 */
	configChat(params:meiQia_configChat_Params):void

	/** 删除本地数据库所有聊天记录*/ 
	deleteAllMessage():void

	/** 设置上线，需要setLoginCustomizedId或setLoginMQClientId接口已设置客户端id后调用，上线成功后消息走回调。*/ 
	setClientOnline():void

}
interface meiQia_initMeiQia_Params {
	/**注册美洽后，从美洽后台获得的 appkey*/ 
	appkey:string,

	/**初始化成功将返回顾客ID（ClientId），初始化失败将返回错误描述*/ 
	callback:any,

}

interface meiQia_setTitleColor_Params {
	/**`#FFFFFF`格式的HTML颜色*/ 
	color:string,

}

interface meiQia_setTitleBarColor_Params {
	/**`#FFFFFF`格式的HTML颜色*/ 
	color:string,

}

interface meiQia_show_Params {
	/**是否显示用户头像*/ 
	showAvatar:boolean,

	/**是否显示title*/ 
	showTitle:boolean,

	/**聊天页面是否显示发送语音按钮*/ 
	enableSendVoice:boolean,

	/**聊天页面是否显示发送图片按钮*/ 
	enableSendImage:boolean,

	/**聊天页面是否显示发送表情按钮*/ 
	enableSendEmoji:boolean,

	/**聊天页面是否显示拍照按钮*/ 
	enableCamera:boolean,

	/**是否更新用户信息，如果为true，在设置过用户信息后可以重新将setClientInfo接口设置的用户信息更新到美洽服务端*/ 
	updateClientInfo:boolean,

}

interface meiQia_setScheduledAgentOrAgentGroup_Params {
	/**在美洽系统中客服对应的ID*/ 
	agentId:string,

	/**在美洽系统中客服组对应的ID*/ 
	agentGroup:string,

	/***/ 
	scheduleRule:string,

}

interface meiQia_setLoginMQClientId_Params {
	/**美洽的ClientID。会在成功初始化美洽后返回*/ 
	id:string,

}

interface meiQia_setLoginCustomizedId_Params {
	/**开发者自定义的用户ID。尽量避免使用\、<、>、?、@等符号作为ID*/ 
	id:string,

}

interface meiQia_setPreSendTextMessage_Params {
	/**发送的消息内容*/ 
	message:string,

}

interface meiQia_configChat_Params {
	/**back键的相关设置*/ 
	backConfig:JSON,

}

interface udeskPlus {
}
interface zyPangolin {
}
interface brightBeacon {
	/**
	 * `注册并验证开发者appKey，申请地址：[智石开放平台](http://open.brtbeacon.com)`
	 * ========params==========
	 *
	 * `key` :string : （可选项）从智石开放平台（http://open.brtbeacon.com）获取的 appkey，若不传则无法配置加密brightBeacon设备相关操作。
	 */
	registerAppKey(params:brightBeacon_registerAppKey_Params, callback?: (ret:JSON) => void):void

	/**
	 * `扫描iBeacon或brightBeacon蓝牙设备`
	 * ========params==========
	 *
	 * `uuids` :Array : 注意Android使用蓝牙，IOS扫描iBeacon都需要请求蓝牙定位权限（非GPS）；另IOS在留空或不传该参数时，无法获得扫描设备的UUID参数，但能获取电量等参数，并支持连接、配置设备（由于IOS对iBeacon扫描和蓝牙扫描的严格区分导致）
	 */
	startRanging(params:brightBeacon_startRanging_Params, callback?: (ret:JSON) => void):void

	/** 停止扫描iBeacon、brightBeacon*/ 
	stopRanging():void

	/** 设备区域后台监听，如需支持后台回调检测，请在apiReady之后立即初始化callback通道，保证启动后区域回调成功，{params}可留空*/ 
	startMonitoring(callback?: (ret:JSON) => void):void

	/** 停止监听*/ 
	stopMonitoring():void

	/** 获取当前监听中的区域*/ 
	monitorRegions():void

	/** 区域是否处于监听中，identifier和uuid_major_minor组合任选传入*/ 
	isMonitorRegion():void

	/**
	 * `显示消息到通知栏`
	 * ========params==========
	 *
	 * `msg` :string : 通知栏消息内容
	 *
	 * `action` :string : 通知栏操作字段
	 *
	 * `useInfo` :string : 自定义传输参数
	 */
	sendLocalNotification(params:brightBeacon_sendLocalNotification_Params, callback?: (ret:JSON) => void):void

	/**
	 * `广播iBeacon，仅支持前台`
	 * ========params==========
	 *
	 * `uuid` :string : 广播设备uuid
	 *
	 * `major` :string : 设备主值
	 *
	 * `minor` :string : 设备次值
	 */
	startAdvertising(params:brightBeacon_startAdvertising_Params, callback?: (ret:JSON) => void):void

	/** 停止模拟设备信号*/ 
	stopAdvertising():void

	/** 断开连接设备*/ 
	disconnectBeacon():void

	/** 设备是否处于连接中*/ 
	isBeaconConnected(callback?: (ret:JSON) => void):void

	/** 连接成功后可用，写入设备广播数据、方式、配置设备发射频率、功率等*/ 
	writeBeaconValues():void

	/** 连接成功后可用，通过命令模式写入设备参数，基本参数修改效果同writeBeaconValues，并支持自定义扩展硬件的命令发送。<br/>*/ 
	sendBeaconValue(callback?: (ret:JSON) => void):void

	/** 检测设备固件版本*/ 
	checkBeaconFirmwareUpdate(callback?: (ret:JSON) => void):void

	/** 更新设备固件*/ 
	updateBeaconFirmwareWithProgress(callback?: (ret:JSON) => void):void

	/** 重置设备参数，默认值：*/ 
	resetBeacon(callback?: (ret:JSON) => void):void

}
interface brightBeacon_registerAppKey_Params {
	/**（可选项）从智石开放平台（http://open.brtbeacon.com）获取的 appkey，若不传则无法配置加密brightBeacon设备相关操作。*/ 
	key?:string,

}

interface brightBeacon_startRanging_Params {
	/**注意Android使用蓝牙，IOS扫描iBeacon都需要请求蓝牙定位权限（非GPS）；另IOS在留空或不传该参数时，无法获得扫描设备的UUID参数，但能获取电量等参数，并支持连接、配置设备（由于IOS对iBeacon扫描和蓝牙扫描的严格区分导致）*/ 
	uuids:Array,

}

interface brightBeacon_sendLocalNotification_Params {
	/**通知栏消息内容*/ 
	msg:string,

	/**通知栏操作字段*/ 
	action:string,

	/**自定义传输参数*/ 
	useInfo:string,

}

interface brightBeacon_startAdvertising_Params {
	/**广播设备uuid*/ 
	uuid:string,

	/**设备主值*/ 
	major:string,

	/**设备次值*/ 
	minor:string,

}

interface qn {
	/**
	 * `上传文件`
	 * ========params==========
	 *
	 * `file` :string : 本地文件路径  fs://
	 *
	 * `key` :string : 保存的文件名
	 *
	 * `token` :string : 从服务端获取的上传token
	 */
	start(params:qn_start_Params, callback?: (ret:JSON) => void):void

}
interface qn_start_Params {
	/**本地文件路径  fs://*/ 
	file:string,

	/**保存的文件名*/ 
	key:string,

	/**从服务端获取的上传token*/ 
	token:string,

}

interface bdObjectStorage {
	/**
	 * `新建一个Bucket。Bucket是BOS上的命名空间，相当于数据的容器，可以存储若干数据实体（Object）。在上传数据前，必须先创建一个Bucket。`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名；北京区域：http://bj.bcebos.com，广州区域
	 *
	 * `bucketName` :string : Bucket名称
	 */
	creatBucket(params:bdObjectStorage_creatBucket_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取Bucket列表。`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 */
	getBuckets(params:bdObjectStorage_getBuckets_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断Bucket是否存在`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 */
	doesBucketExist(params:bdObjectStorage_doesBucketExist_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除已存在Bucket`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 */
	deleteBucket(params:bdObjectStorage_deleteBucket_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置Bucket的访问权限`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `permission` :string : 权限类别
	 */
	setBucketAcl(params:bdObjectStorage_setBucketAcl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置指定用户对Bucket的访问权限`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : 用户Id
	 *
	 * `permission` :string : 权限
	 */
	setUserBucketAcl(params:bdObjectStorage_setUserBucketAcl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以文件形式上传Object`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 上传的Objectkey
	 *
	 * `filePath` :string : 文件路径；支持widget、fs格式
	 *
	 * `metaData` :Array<JSON> : (可选)自定义元数据	，BOS支持用户自定义元数据来对Object进行描述
	 */
	uploadFile(params:bdObjectStorage_uploadFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `以字符串形式上传Object`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 上传的Objectkey
	 *
	 * `strData` :string : 需要上传的字符串
	 *
	 * `metaData` :Array<JSON> : (可选)自定义元数据	，BOS支持用户自定义元数据来对Object进行描述
	 */
	uploadStr(params:bdObjectStorage_uploadStr_Params, callback?: (ret:JSON) => void):void

	/**
	 * `CopyObject接口用于将一个已经存在的Object拷贝到另外一个Object，拷贝过程中会对源Object的Etag或修改状态进行判断，根据判断结果决定是否执行拷贝。`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `srcBucket` :string : 源Object 的Bucket名称
	 *
	 * `srcKey` :string : 源Object 的 Key
	 *
	 * `destBucket` :string : 新Object 的Bucket名称
	 *
	 * `destKey` :string : 新Object  Key
	 *
	 * `checkETag` :JSON : (可选)判断源Object是否有修改决定是否拷贝，与checkETag二选一
	 *
	 * `metaData` :Array<JSON> : (可选)自定义元数据	，新Object的自定义数据
	 */
	copyObject(params:bdObjectStorage_copyObject_Params, callback?: (ret:JSON) => void):void

	/**
	 * `查看Bucket中Object列表。`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : 源Object 的Bucket名称
	 */
	getObjsFromBucket(params:bdObjectStorage_getObjsFromBucket_Params, callback?: (ret:JSON) => void):void

	/**
	 * `扩展查询,通过设置参数来筛选Object`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : 源Object 的Bucket名称
	 *
	 * `MaxKeys` :number : 设定此次返回Object的最大个数，不可超过1000。（可选）
	 *
	 * `Prefix` :string : 设定objectKey的前缀，前缀是指objectKey包含并以Prefix的值作为开始。通常与Delimiter配合在查询模拟文件夹中使用。（可选）
	 *
	 * `Delimiter` :string : 是一个分隔符，用来对objectKey进行分层。通常与Prefix配合在查询模拟文件夹中使用。从Prefix开始到第一次出现Delimiter字符之间的objectKey称为：CommonPrefixes。（可选）
	 *
	 * `Marker` :string : 是一个字符串，用来设定返回结果的起始位置。设定Marker值之后，返回的Object会从Marker值之后按字母排序开始返回。（可选）
	 */
	getFiletrateObjects(params:bdObjectStorage_getFiletrateObjects_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取Object`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : 查询Object的key
	 */
	getObject(params:bdObjectStorage_getObject_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取Object中的一部分`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 查询Object的key
	 *
	 * `startPosition` :number : 从第几个字节开始截取
	 *
	 * `endPosition` :number : 截取到第几个字节
	 */
	getObjectPart(params:bdObjectStorage_getObjectPart_Params, callback?: (ret:JSON) => void):void

	/**
	 * `下载Object到指定路径`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 查询Object的key
	 *
	 * `savePath` :string : 保存地址 支持fs路径 不支持widget路径
	 */
	downloadObject(params:bdObjectStorage_downloadObject_Params, callback?: (ret:JSON) => void):void

	/**
	 * `只获取ObjectMetadata`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 查询Object的key
	 */
	getObjectMetaData(params:bdObjectStorage_getObjectMetaData_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取Object的URL`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 查询Object的key
	 *
	 * `keepTime` :number : 指定的URL有效时长（s）如果要设置为永久不失效的时间，可以设置为 -1，不可设置为其他负数。
	 */
	getObjectUrl(params:bdObjectStorage_getObjectUrl_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除Object`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 查询Object的key
	 */
	deleteObject(params:bdObjectStorage_deleteObject_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分块上传`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 上传的Objectkey
	 *
	 * `filePath` :string : 文件路径；支持widget\fs路径；
	 *
	 * `partSize` :number : 每块大小；不得小于5Mb
	 */
	multipartUpload(params:bdObjectStorage_multipartUpload_Params, callback?: (ret:JSON) => void):void

	/**
	 * `取消分块上传`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 *
	 * `objectKey` :string : 上传的Objectkey
	 *
	 * `uploadId` :string : 分块上传uploadId
	 */
	cancleMultipartUpload(params:bdObjectStorage_cancleMultipartUpload_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取未完成的分块上传`
	 * ========params==========
	 *
	 * `point` :string : Bucket所在区域域名
	 *
	 * `bucketName` :string : Bucket名称
	 */
	getUnUploadMultiparts(params:bdObjectStorage_getUnUploadMultiparts_Params, callback?: (ret:JSON) => void):void

	/** 获取所有已上传的分块信息*/ 
	getUploadMultiparts():void

}
interface bdObjectStorage_creatBucket_Params {
	/**Bucket所在区域域名；北京区域：http://bj.bcebos.com，广州区域*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

}

interface bdObjectStorage_getBuckets_Params {
	/**Bucket所在区域域名*/ 
	point:string,

}

interface bdObjectStorage_doesBucketExist_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

}

interface bdObjectStorage_deleteBucket_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

}

interface bdObjectStorage_setBucketAcl_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**权限类别*/ 
	permission:string,

}

interface bdObjectStorage_setUserBucketAcl_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**用户Id*/ 
	bucketName:string,

	/**权限*/ 
	permission:string,

}

interface bdObjectStorage_uploadFile_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**上传的Objectkey*/ 
	objectKey:string,

	/**文件路径；支持widget、fs格式*/ 
	filePath:string,

	/**(可选)自定义元数据	，BOS支持用户自定义元数据来对Object进行描述*/ 
	metaData?:Array<JSON>,

}

interface bdObjectStorage_uploadStr_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**上传的Objectkey*/ 
	objectKey:string,

	/**需要上传的字符串*/ 
	strData:string,

	/**(可选)自定义元数据	，BOS支持用户自定义元数据来对Object进行描述*/ 
	metaData?:Array<JSON>,

}

interface bdObjectStorage_copyObject_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**源Object 的Bucket名称*/ 
	srcBucket:string,

	/**源Object 的 Key*/ 
	srcKey:string,

	/**新Object 的Bucket名称*/ 
	destBucket:string,

	/**新Object  Key*/ 
	destKey:string,

	/**(可选)判断源Object是否有修改决定是否拷贝，与checkETag二选一*/ 
	checkETag?:JSON,

	/**(可选)自定义元数据	，新Object的自定义数据*/ 
	metaData?:Array<JSON>,

}

interface bdObjectStorage_getObjsFromBucket_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**源Object 的Bucket名称*/ 
	bucketName:string,

}

interface bdObjectStorage_getFiletrateObjects_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**源Object 的Bucket名称*/ 
	bucketName:string,

	/**设定此次返回Object的最大个数，不可超过1000。（可选）*/ 
	MaxKeys?:number,

	/**设定objectKey的前缀，前缀是指objectKey包含并以Prefix的值作为开始。通常与Delimiter配合在查询模拟文件夹中使用。（可选）*/ 
	Prefix?:string,

	/**是一个分隔符，用来对objectKey进行分层。通常与Prefix配合在查询模拟文件夹中使用。从Prefix开始到第一次出现Delimiter字符之间的objectKey称为：CommonPrefixes。（可选）*/ 
	Delimiter?:string,

	/**是一个字符串，用来设定返回结果的起始位置。设定Marker值之后，返回的Object会从Marker值之后按字母排序开始返回。（可选）*/ 
	Marker?:string,

}

interface bdObjectStorage_getObject_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**查询Object的key*/ 
	bucketName:string,

}

interface bdObjectStorage_getObjectPart_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**查询Object的key*/ 
	objectKey:string,

	/**从第几个字节开始截取*/ 
	startPosition:number,

	/**截取到第几个字节*/ 
	endPosition:number,

}

interface bdObjectStorage_downloadObject_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**查询Object的key*/ 
	objectKey:string,

	/**保存地址 支持fs路径 不支持widget路径*/ 
	savePath:string,

}

interface bdObjectStorage_getObjectMetaData_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**查询Object的key*/ 
	objectKey:string,

}

interface bdObjectStorage_getObjectUrl_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**查询Object的key*/ 
	objectKey:string,

	/**指定的URL有效时长（s）如果要设置为永久不失效的时间，可以设置为 -1，不可设置为其他负数。*/ 
	keepTime:number,

}

interface bdObjectStorage_deleteObject_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**查询Object的key*/ 
	objectKey:string,

}

interface bdObjectStorage_multipartUpload_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**上传的Objectkey*/ 
	objectKey:string,

	/**文件路径；支持widget\fs路径；*/ 
	filePath:string,

	/**每块大小；不得小于5Mb*/ 
	partSize:number,

}

interface bdObjectStorage_cancleMultipartUpload_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

	/**上传的Objectkey*/ 
	objectKey:string,

	/**分块上传uploadId*/ 
	uploadId:string,

}

interface bdObjectStorage_getUnUploadMultiparts_Params {
	/**Bucket所在区域域名*/ 
	point:string,

	/**Bucket名称*/ 
	bucketName:string,

}

interface PLMediaStreaming {
	/** 是否初始化成功*/ 
	isInited():void

	/** 当前设备是否支持设置录音音量 **注意：该方法仅支持ios***/ 
	inputgainEnable():void

	/** 设置麦克风音量大小，取值范围：0-1 **注意：该方法仅支持ios***/ 
	setInputgain():void

	/** 获取麦克风音量大小，取值范围：0-1 **注意：该方法仅支持ios***/ 
	getInputgain():void

	/** 切换前后摄像头*/ 
	toggleCamera():void

	/** 开始推流*/ 
	startStream():void

	/** 停止推流*/ 
	stopStream():void

	/** 销毁推流，释放资源*/ 
	destroyStream():void

	/** 打开闪光灯*/ 
	turnLightOn():void

	/** 关闭闪光灯*/ 
	turnLightOff():void

	/** 初始化美颜插件*/ 
	initPlugin(callback?: (ret:JSON) => void):void

	/** 打开相机预览页面*/ 
	open(callback?: (ret:JSON) => void):void

	/** 关闭预览视图*/ 
	close():void

	/** 开始推流*/ 
	startStream():void

	/** 停止推流*/ 
	stopStream():void

	/** 设置特效组合，目前仅支持美颜、美型两种特效的任意叠加*/ 
	setComposeNodes():void

	/** 设置 composer 类型特效（美颜、美妆）是否可以与贴纸特效叠加*/ 
	setComposerMode():void

	/** 更新某个特效的强度*/ 
	updateComposeNode():void

	/** 更新某个特效的强度*/ 
	updateIntensity():void

	/** 获得已经开启的特效节点*/ 
	getComposeNodes():void

	/** 恢复特效设置*/ 
	recoverStatus():void

	/** 释放特效资源*/ 
	destroyEffectSDK():void

	/** 获取支持的滤镜列表*/ 
	getFilterList():void

	/** 获取支持的贴纸列表*/ 
	getStickerList():void

	/** 获取支持的美型列表*/ 
	getShapeList():void

	/** 获取支持的美妆类型列表*/ 
	getMakeUpList():void

	/** 获取支持的美妆效果集合*/ 
	getMakeUpOptionItems():void

	/** 获取支持的美体列表*/ 
	getBodyList():void

	/** 更新 compose 类型特效列表*/ 
	updateComposeList():void

	/** 更新滤镜列表*/ 
	updateFilterList():void

	/** 更新动态贴纸列表*/ 
	updateStickerList():void

	/** 更新全部特效列表*/ 
	updateAllList():void

	/** 判断是否正在使用特效*/ 
	isUsingEffect():void

	/** 检测 SDK 是否已经初始化完毕*/ 
	isEffectSDKInited():void

}
interface shanYan {
	/** 调起一键登录授权页面*/ 
	init():void

}
interface zhiChi {
	/** 启动智齿客服*/ 
	startZhiChi():void

}
interface OneSignal {
	/** 如果您的系统为用户分配了唯一的标识符，则可能还必须记住他们的OneSignal Player ID。 为了使事情变得容易，OneSignal现在允许您为用户设置external_user_id。 只需调用此方法，传入自定义用户ID（作为字符串），从现在开始发送推送通知时，就可以使用include_external_user_ids代替include_player_ids。*/ 
	setExternalUserId(callback?: (ret:JSON) => void):void

	/** 如果您的用户注销了您的应用程序，并且您希望将其自定义用户ID与他们的OneSignal用户ID从系统中取消关联，则需要调用此方法*/ 
	removeExternalUserId():void

	/** 查看当前设备记录中的标签*/ 
	getTags():void

	/**
	 * `将单个数据标签添加到当前设备记录`
	 * ========params==========
	 *
	 * `key` :string : key
	 *
	 * `value` :string : value
	 */
	sendTag(params:OneSignal_sendTag_Params):void

	/**
	 * `将多个数据标签添加到当前设备记录`
	 * ========params==========
	 *
	 * `jsonString` :string : 多个数据标签的json对象
	 */
	sendTags(params:OneSignal_sendTags_Params):void

	/**
	 * `从当前设备记录中删除标签`
	 * ========params==========
	 *
	 * `key` :string : key
	 */
	deleteTag(params:OneSignal_deleteTag_Params):void

	/**
	 * `从当前设备记录中删除标签`
	 * ========params==========
	 *
	 * `keys` :Array : 标签数组
	 */
	deleteTags(params:OneSignal_deleteTags_Params):void

	/**
	 * `禁用或启用SDK位置收集`
	 * ========params==========
	 *
	 * `isShared` :boolean : （可选项）是否禁用
	 */
	setLocationShared(params:OneSignal_setLocationShared_Params):void

	/**
	 * `发送或安排对OneSignal Player ID的通知`
	 * ========params==========
	 *
	 * `notification` :any : 通知内容
	 */
	postNotification(params:OneSignal_postNotification_Params, callback?: (ret:JSON) => void):void

	/**
	 * `根据一组键删除触发器列表，如果满足其触发条件，则可能显示应用内消息`
	 * ========params==========
	 *
	 * `key` :string : key
	 */
	removeTriggerForKey(params:OneSignal_removeTriggerForKey_Params):void

	/**
	 * `设置用户的电子邮件。 为电子邮件地址创建一个新的用户记录。 如果要使用emai更新推送用户记录，请使用sendTag`
	 * ========params==========
	 *
	 * `email` :string : email
	 */
	setEmail(params:OneSignal_setEmail_Params):void

	/** 注销用户以断开与设备的电子邮件关联*/ 
	logoutEmail():void

	/** 消息监听*/ 
	addMessageListener():void

	/** 邮件监听*/ 
	addEmailListener():void

}
interface OneSignal_sendTag_Params {
	/**key*/ 
	key:string,

	/**value*/ 
	value:string,

}

interface OneSignal_sendTags_Params {
	/**多个数据标签的json对象*/ 
	jsonString:string,

}

interface OneSignal_deleteTag_Params {
	/**key*/ 
	key:string,

}

interface OneSignal_deleteTags_Params {
	/**标签数组*/ 
	keys:Array,

}

interface OneSignal_setLocationShared_Params {
	/**（可选项）是否禁用*/ 
	isShared?:boolean,

}

interface OneSignal_postNotification_Params {
	/**通知内容*/ 
	notification:any,

}

interface OneSignal_removeTriggerForKey_Params {
	/**key*/ 
	key:string,

}

interface OneSignal_setEmail_Params {
	/**email*/ 
	email:string,

}

interface idCardScan {
	/** 身份证正面扫描*/ 
	front():void

	/** 身份证背面扫描*/ 
	back():void

}
interface ximalaya {
	/**
	 * `初始化模块信息，打开页面require完成就应该去执行`
	 * ========params==========
	 *
	 * `appkey` :string : 只有iOS需要传这个参数，android的是放在自定义模块里的配置文件中的，参考<a href="https://github.com/bringmehome/ximalaya" target="_blank">GitHub接入教程</a>
	 *
	 * `appsecret` :string : 喜马拉雅开发平台申请我的应用时候得到的appsecret，<a href="http://open.ximalaya.com/apps" target="_blank">喜马拉雅我的应用</a>
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	initXmly(params:ximalaya_initXmly_Params):void

	/** 获取喜马拉雅的内容分类*/ 
	getCategories():void

	/**
	 * `通过关键字搜索声音`
	 * ========params==========
	 *
	 * `keyword` :string : 搜索关键词
	 *
	 * `categoryid` :number : 分类ID，不填或者为0检索全库
	 *
	 * `page` :number : 返回第几页，必须大于等于1，不填默认为1
	 *
	 * `pagesize` :number : 返回的每页的条数
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getSearchedTracks(params:ximalaya_getSearchedTracks_Params):void

	/** 获取专辑标签或者声音标签*/ 
	getTags():void

	/**
	 * `根据分类和标签获取热门声音列表`
	 * ========params==========
	 *
	 * `categoryid` :string : 分类ID，指定分类
	 *
	 * `tagname` :string : 分类下对应声音标签，不填则为热门分类
	 *
	 * `page` :number : 返回第几页，必须大于等于1，不填默认为1
	 *
	 * `pagesize` :number : 返回的每页的条数
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getHotTracks(params:ximalaya_getHotTracks_Params):void

	/**
	 * `根据分类和标签获取某个分类某个标签下的专辑列表(最火/最新/最多播放)`
	 * ========params==========
	 *
	 * `categoryid` :number : 分类ID，指定分类，为0时表示热门分类
	 *
	 * `tagname` :string : 分类下对应声音标签，不填则为热门分类
	 *
	 * `calcdimension` :number : 计算维度，现支持最火（1），最新（2），经典或播放最多（3）
	 *
	 * `page` :number : 返回第几页，必须大于等于1，不填默认为1
	 *
	 * `pagesize` :number : 返回的每页的条数
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getAlbumlist(params:ximalaya_getAlbumlist_Params):void

	/**
	 * `专辑浏览，根据专辑ID获取专辑下的声音列表`
	 * ========params==========
	 *
	 * `albumid` :number : 专辑ID
	 *
	 * `sort` :string : asc-正序或desc-倒序，默认为asc-正序
	 *
	 * `page` :number : 返回第几页，必须大于等于1，不填默认为1
	 *
	 * `pagesize` :number : 返回的每页的条数
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getTracks(params:ximalaya_getTracks_Params):void

	/** 获取直播省市列表*/ 
	getProvinces():void

	/**
	 * `获取直播电台列表`
	 * ========params==========
	 *
	 * `radiotype` :number : 电台类型：1-国家台，2-省市台，3-网络台
	 *
	 * `provincecode` :number : 省份代码，radio_type为2时不能为空
	 *
	 * `page` :number : 返回第几页，必须大于等于1，不填默认为1
	 *
	 * `pagesize` :number : 返回的每页的条数
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	getRadios(params:ximalaya_getRadios_Params):void

	/** 初始化播放器*/ 
	XmPlayerInit():void

	/**
	 * `使用播放器播放音乐电台(且只能播放电台的声音)`
	 * ========params==========
	 *
	 * `index` :number : getRadios方法会获取一个电台列表，比如上面的[getRadios](#getRadios)方法获取了两个电台(上海Love Radio、上海交通广播电台)，想播放第一个，那么index值传0， 想播放第二个index值传1
	 *
	 * `ret` :JSON : null
	 *
	 * `err` :JSON : null
	 */
	XmPlayerPlay(params:ximalaya_XmPlayerPlay_Params):void

	/**     暂停播放*/ 
	XmPlayerPause():void

	/** 停止播放*/ 
	XmPlayerStop():void

}
interface ximalaya_initXmly_Params {
	/**只有iOS需要传这个参数，android的是放在自定义模块里的配置文件中的，参考<a href="https://github.com/bringmehome/ximalaya" target="_blank">GitHub接入教程</a>*/ 
	appkey:string,

	/**喜马拉雅开发平台申请我的应用时候得到的appsecret，<a href="http://open.ximalaya.com/apps" target="_blank">喜马拉雅我的应用</a>*/ 
	appsecret:string,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_getSearchedTracks_Params {
	/**搜索关键词*/ 
	keyword:string,

	/**分类ID，不填或者为0检索全库*/ 
	categoryid:number,

	/**返回第几页，必须大于等于1，不填默认为1*/ 
	page:number,

	/**返回的每页的条数*/ 
	pagesize:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_getHotTracks_Params {
	/**分类ID，指定分类*/ 
	categoryid:string,

	/**分类下对应声音标签，不填则为热门分类*/ 
	tagname:string,

	/**返回第几页，必须大于等于1，不填默认为1*/ 
	page:number,

	/**返回的每页的条数*/ 
	pagesize:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_getAlbumlist_Params {
	/**分类ID，指定分类，为0时表示热门分类*/ 
	categoryid:number,

	/**分类下对应声音标签，不填则为热门分类*/ 
	tagname:string,

	/**计算维度，现支持最火（1），最新（2），经典或播放最多（3）*/ 
	calcdimension:number,

	/**返回第几页，必须大于等于1，不填默认为1*/ 
	page:number,

	/**返回的每页的条数*/ 
	pagesize:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_getTracks_Params {
	/**专辑ID*/ 
	albumid:number,

	/**asc-正序或desc-倒序，默认为asc-正序*/ 
	sort:string,

	/**返回第几页，必须大于等于1，不填默认为1*/ 
	page:number,

	/**返回的每页的条数*/ 
	pagesize:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_getRadios_Params {
	/**电台类型：1-国家台，2-省市台，3-网络台*/ 
	radiotype:number,

	/**省份代码，radio_type为2时不能为空*/ 
	provincecode:number,

	/**返回第几页，必须大于等于1，不填默认为1*/ 
	page:number,

	/**返回的每页的条数*/ 
	pagesize:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface ximalaya_XmPlayerPlay_Params {
	/**getRadios方法会获取一个电台列表，比如上面的[getRadios](#getRadios)方法获取了两个电台(上海Love Radio、上海交通广播电台)，想播放第一个，那么index值传0， 想播放第二个index值传1*/ 
	index:number,

	/**null*/ 
	ret:JSON,

	/**null*/ 
	err:JSON,

}

interface vk {
	/** vk初始化*/ 
	init(callback?: (ret:JSON) => void):void

	/** vk登陆*/ 
	login(callback?: (ret:JSON) => void):void

	/** vk分享*/ 
	share(callback?: (ret:JSON) => void):void

	/** 是否已登陆（*/ 
	isLoggedIn(callback?: (ret:JSON) => void):void

	/** 获取finger（仅android支持）*/ 
	getFinger(callback?: (ret:JSON) => void):void

	/** token过期监听（仅android支持）*/ 
	tokenExpiredListener(callback?: (ret:JSON) => void):void

}
interface tencentPlayer {
	/**
	 * `打开一个视频播放器`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	open(params:tencentPlayer_open_Params, callback?: (ret:JSON) => void):void

	/** 开始播放*/ 
	play():void

	/** 暂停播放*/ 
	pause():void

	/** 恢复已暂停的播放*/ 
	resume():void

	/** 停止播放*/ 
	stop():void

	/** 关闭播放器*/ 
	close():void

	/** 显示视频播放视图*/ 
	show():void

	/** 隐藏视频播放视图*/ 
	hide():void

	/**
	 * `跳转到指定播放位置`
	 * ========params==========
	 *
	 * `seconds` :number : 跳转到音视频播放的秒数，取值范围：大于0，小于视频总长度
	 */
	seekTo(params:tencentPlayer_seekTo_Params):void

	/**
	 * `设置视频播放器位置、尺寸，以及是否全屏`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `animation` :boolean : （可选项）改变播放器大小时是否带动画效果
	 *
	 * `fullscreen` :boolean : （可选项）模块的位置及尺寸是否全屏（不显示状态栏）
	 */
	setRect(params:tencentPlayer_setRect_Params):void

	/** 获取当前播放时间*/ 
	getCurrent():void

	/** 获取视频总时长，单位为妙（s）*/ 
	getDuration():void

	/** 清除视频缓存，仅支持 iOS 平台（android平台无缓存）*/ 
	clearCache():void

}
interface tencentPlayer_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface tencentPlayer_seekTo_Params {
	/**跳转到音视频播放的秒数，取值范围：大于0，小于视频总长度*/ 
	seconds:number,

}

interface tencentPlayer_setRect_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（可选项）改变播放器大小时是否带动画效果*/ 
	animation?:boolean,

	/**（可选项）模块的位置及尺寸是否全屏（不显示状态栏）*/ 
	fullscreen?:boolean,

}

interface mogoAdsdomob {
}
interface haierCenter {
	/** OAuth2.0登录。*/ 
	authorization(callback?: (ret:JSON) => void):void

	/** 清除缓存的图形验证码图片。*/ 
	clearCache():void

}
interface kkPlayer {
	/**
	 * `打开 kkPlayer 模块`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `url` :string : （必选项）视频的路径，支持网络和本地（widget://、fs://）路径，支持（http，https, hls, rtmp, rtsp）等流协议
	 *
	 * `title` :string : （可选项）视频标题，用来显示在顶部栏
	 *
	 * `autoPlay` :boolean : （可选项）打开时是否自动播放
	 *
	 * `autoRotate` :boolean : （可选项）是否允许通过旋转来进行全屏切换
	 *
	 * `userControl` :boolean : （可选项）是否使用默认的控制层，如果不使用，所有手势均会失效
	 *
	 * `seekTime` :number : （可选项）视频播放开始的位置
	 *
	 * `audio` :boolean : （可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg
	 *
	 * `coverImg` :string : （可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动），如果被其他视图遮挡，请将此值设置为true
	 */
	open(params:kkPlayer_open_Params, callback?: (ret:JSON) => void):void

	/** 关闭播放器*/ 
	close():void

	/** 显示播放器并继续播放*/ 
	show():void

	/** 隐藏播放器并暂停播放*/ 
	hide():void

	/** 暂停播放*/ 
	pause():void

	/** 恢复播放并显示播放器，如果播放完成，则重新开始播放*/ 
	resume():void

	/**
	 * `切换新的视频文件进行播放`
	 * ========params==========
	 *
	 * `url` :string : （必选项）视频的路径，支持网络和本地（widget://、fs://）路径，网络视频支持（http，https, hls, rtmp, rtsp）等协议
	 *
	 * `title` :string : （可选项）视频标题，用来显示在顶部栏
	 *
	 * `seekTime` :number : （可选项）视频播放开始的位置
	 *
	 * `audio` :boolean : （可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg
	 */
	replay(params:kkPlayer_replay_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取视频文件的总时长`
	 * ========params==========
	 *
	 * `url` :string : （可选项）视频的路径，支持网络和本地（widget://、fs://）路径，如果url不传，则获取的是当前播放的视频的总时长
	 */
	getDuration(params:kkPlayer_getDuration_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置静音模式`
	 * ========params==========
	 *
	 * `state` :boolean : （可选项）true为静音，false为取消静音
	 */
	mute(params:kkPlayer_mute_Params):void

	/**
	 * `设置循环播放模式`
	 * ========params==========
	 *
	 * `state` :boolean : （可选项）true为循环播放，false为取消循环播放
	 */
	loop(params:kkPlayer_loop_Params):void

	/**
	 * `默认控件上面的按钮设置，仅在open参数中userControl设置为true时候有效`
	 * ========params==========
	 *
	 * `showBack` :boolean : （可选项）是否显示返回按钮
	 *
	 * `showDownload` :boolean : （可选项）是否显示下载按钮
	 *
	 * `showFullScreen` :boolean : （可选项）是否显示全屏按钮
	 *
	 * `allowPanVolume` :boolean : （可选项）是否允许手势滑动调节视频音量
	 */
	configControl(params:kkPlayer_configControl_Params):void

	/** 判断当前是否为全屏模式*/ 
	isFullScreen():void

	/**
	 * `设置全屏播放模式`
	 * ========params==========
	 *
	 * `state` :boolean : （可选项）true为全屏播放，false为取消全屏播放
	 */
	fullScreen(params:kkPlayer_fullScreen_Params):void

	/** 判断是否正在播放*/ 
	isPlaying():void

	/**
	 * `快进`
	 * ========params==========
	 *
	 * `seconds` :number : （可选项）快进的时长，单位：秒
	 */
	fastForward(params:kkPlayer_fastForward_Params):void

	/**
	 * `快退`
	 * ========params==========
	 *
	 * `seconds` :number : （可选项）快退的时长，单位：秒
	 */
	fastBackward(params:kkPlayer_fastBackward_Params):void

	/**
	 * `跳到指定的时间进行播放`
	 * ========params==========
	 *
	 * `seconds` :number : （可选项）从该指定的时间开始播放，单位：秒
	 */
	seekTo(params:kkPlayer_seekTo_Params):void

	/** 添加监听播放器中各种事件*/ 
	addEventListener():void

	/** 移除事件监听*/ 
	removeEventListener():void

	/**
	 * `设置播放速度`
	 * ========params==========
	 *
	 * `speed` :number : （可选项）播放的速度，取值范围(0.5~2.0)
	 */
	playSpeed(params:kkPlayer_playSpeed_Params):void

	/**
	 * `旋转视频`
	 * ========params==========
	 *
	 * `degress` :number : （可选项）逆时针旋转角度，取值为（0，90，180，270）, 其他数值不进行旋转
	 */
	rotate(params:kkPlayer_rotate_Params):void

	/**
	 * `画面填充模式`
	 * ========params==========
	 *
	 * `mode` :string : （可选项）填充模式
	 */
	contentMode(params:kkPlayer_contentMode_Params):void

	/** 截屏并保存到相册，编译时请开启 <font color='red'>**读取照片**</font> 权限，否则会导致闪退*/ 
	shotScreen():void

}
interface kkPlayer_open_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**（必选项）视频的路径，支持网络和本地（widget://、fs://）路径，支持（http，https, hls, rtmp, rtsp）等流协议*/ 
	url:string,

	/**（可选项）视频标题，用来显示在顶部栏*/ 
	title?:string,

	/**（可选项）打开时是否自动播放*/ 
	autoPlay?:boolean,

	/**（可选项）是否允许通过旋转来进行全屏切换*/ 
	autoRotate?:boolean,

	/**（可选项）是否使用默认的控制层，如果不使用，所有手势均会失效*/ 
	userControl?:boolean,

	/**（可选项）视频播放开始的位置*/ 
	seekTime?:number,

	/**（可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg*/ 
	audio?:boolean,

	/**（可选项）封面图路径，播放器打开尚未播放时的封面图，要求本地路径（widget://、fs://）*/ 
	coverImg?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）是否将模块视图固定到窗口上（不跟随窗口上下滚动），如果被其他视图遮挡，请将此值设置为true*/ 
	fixed?:boolean,

}

interface kkPlayer_replay_Params {
	/**（必选项）视频的路径，支持网络和本地（widget://、fs://）路径，网络视频支持（http，https, hls, rtmp, rtsp）等协议*/ 
	url:string,

	/**（可选项）视频标题，用来显示在顶部栏*/ 
	title?:string,

	/**（可选项）视频播放开始的位置*/ 
	seekTime?:number,

	/**（可选项）播放的资源是否是音频文件，若是则开始播放后不移除封面图 coverImg*/ 
	audio?:boolean,

}

interface kkPlayer_getDuration_Params {
	/**（可选项）视频的路径，支持网络和本地（widget://、fs://）路径，如果url不传，则获取的是当前播放的视频的总时长*/ 
	url?:string,

}

interface kkPlayer_mute_Params {
	/**（可选项）true为静音，false为取消静音*/ 
	state?:boolean,

}

interface kkPlayer_loop_Params {
	/**（可选项）true为循环播放，false为取消循环播放*/ 
	state?:boolean,

}

interface kkPlayer_configControl_Params {
	/**（可选项）是否显示返回按钮*/ 
	showBack?:boolean,

	/**（可选项）是否显示下载按钮*/ 
	showDownload?:boolean,

	/**（可选项）是否显示全屏按钮*/ 
	showFullScreen?:boolean,

	/**（可选项）是否允许手势滑动调节视频音量*/ 
	allowPanVolume?:boolean,

}

interface kkPlayer_fullScreen_Params {
	/**（可选项）true为全屏播放，false为取消全屏播放*/ 
	state?:boolean,

}

interface kkPlayer_fastForward_Params {
	/**（可选项）快进的时长，单位：秒*/ 
	seconds?:number,

}

interface kkPlayer_fastBackward_Params {
	/**（可选项）快退的时长，单位：秒*/ 
	seconds?:number,

}

interface kkPlayer_seekTo_Params {
	/**（可选项）从该指定的时间开始播放，单位：秒*/ 
	seconds?:number,

}

interface kkPlayer_playSpeed_Params {
	/**（可选项）播放的速度，取值范围(0.5~2.0)*/ 
	speed?:number,

}

interface kkPlayer_rotate_Params {
	/**（可选项）逆时针旋转角度，取值为（0，90，180，270）, 其他数值不进行旋转*/ 
	degress?:number,

}

interface kkPlayer_contentMode_Params {
	/**（可选项）填充模式*/ 
	mode?:string,

}

interface baiduAd {
	/**
	 * `显示横幅广告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	showAd(params:baiduAd_showAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭横幅广告*/ 
	closeAd():void

	/**
	 * `显示视频贴片广告（仅iOS支持）`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	showPrerollAd(params:baiduAd_showPrerollAd_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示开屏广告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `canClick` :boolean : 是否允许点击，默认true
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	showSplashAd(params:baiduAd_showSplashAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭开屏广告*/ 
	removeSplashAd():void

	/**
	 * `显示插屏广告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸（仅iOS支持）
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `type` :string : 广告类型，默认pauseVideo
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）（仅iOS支持）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动（仅iOS支持）
	 */
	showInterstitialAd(params:baiduAd_showInterstitialAd_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示信息流广告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `type` :string : 类型
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	showNativeAd(params:baiduAd_showNativeAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭信息流广告*/ 
	closeNativeAd():void

	/**
	 * `显示内容联盟广告`
	 * ========params==========
	 *
	 * `rect` :JSON : （可选项）模块的位置及尺寸
	 *
	 * `appId` :string : 应用id
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `channelId` :string : 频道id
	 *
	 * `fixedOn` :string : （可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	showCpuInfoAd(params:baiduAd_showCpuInfoAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭内容联盟广告*/ 
	closeCpuInfoAd():void

	/**
	 * `显示激励视频广告`
	 * ========params==========
	 *
	 * `adId` :string : 广告代码位id
	 */
	showRewardVideo(params:baiduAd_showRewardVideo_Params, callback?: (ret:JSON) => void):void

}
interface baiduAd_showAd_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**广告代码位id*/ 
	adId:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAd_showPrerollAd_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**广告代码位id*/ 
	adId:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAd_showSplashAd_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**广告代码位id*/ 
	adId:string,

	/**是否允许点击，默认true*/ 
	canClick:boolean,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAd_showInterstitialAd_Params {
	/**（可选项）模块的位置及尺寸（仅iOS支持）*/ 
	rect?:JSON,

	/**广告代码位id*/ 
	adId:string,

	/**广告类型，默认pauseVideo*/ 
	type:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）（仅iOS支持）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动（仅iOS支持）*/ 
	fixed?:boolean,

}

interface baiduAd_showNativeAd_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**广告代码位id*/ 
	adId:string,

	/**类型*/ 
	type:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAd_showCpuInfoAd_Params {
	/**（可选项）模块的位置及尺寸*/ 
	rect?:JSON,

	/**应用id*/ 
	appId:string,

	/**广告代码位id*/ 
	adId:string,

	/**频道id*/ 
	channelId:string,

	/**（可选项）模块添加到指定 frame 的名字（只指 frame，传 window 无效）*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAd_showRewardVideo_Params {
	/**广告代码位id*/ 
	adId:string,

}

interface qCloudVODPlayer {
	/**
	 * `打开新窗口全屏播放视频`
	 * ========params==========
	 *
	 * `videoUrl` :string : 视频链接。必传。视频链接可通过腾讯云后台查看，查看腾讯云视频链接步骤【视频管理-点击某个视频-视频发布-显示源地址】。或者可调用腾讯云相关API查询。由于腾讯云只支持转码为MP4与HLS格式，此处调用请尽量使用这两种格式。
	 */
	playInNewWin(params:qCloudVODPlayer_playInNewWin_Params):void

	/**
	 * `指定播放器的位置和大小，播放视频`
	 * ========params==========
	 *
	 * `x` :number : 播放器在x轴上的放置位置，从屏幕左上角为计为0开始
	 *
	 * `y` :number : 播放器在y轴上的放置位置，从屏幕左上角为计为0开始
	 *
	 * `w` :number : 播放器宽度
	 *
	 * `h` :number : 播放器高度
	 *
	 * `videoUrl` :string : 视频链接。必传。视频链接可通过腾讯云后台查看，查看腾讯云视频链接步骤【视频管理-点击某个视频-视频发布-显示源地址】。或者可调用腾讯云相关API查询。由于腾讯云只支持转码为MP4与HLS格式，此处调用请尽量使用这两种格式。
	 */
	playInCurWin(params:qCloudVODPlayer_playInCurWin_Params):void

}
interface qCloudVODPlayer_playInNewWin_Params {
	/**视频链接。必传。视频链接可通过腾讯云后台查看，查看腾讯云视频链接步骤【视频管理-点击某个视频-视频发布-显示源地址】。或者可调用腾讯云相关API查询。由于腾讯云只支持转码为MP4与HLS格式，此处调用请尽量使用这两种格式。*/ 
	videoUrl:string,

}

interface qCloudVODPlayer_playInCurWin_Params {
	/**播放器在x轴上的放置位置，从屏幕左上角为计为0开始*/ 
	x:number,

	/**播放器在y轴上的放置位置，从屏幕左上角为计为0开始*/ 
	y:number,

	/**播放器宽度*/ 
	w:number,

	/**播放器高度*/ 
	h:number,

	/**视频链接。必传。视频链接可通过腾讯云后台查看，查看腾讯云视频链接步骤【视频管理-点击某个视频-视频发布-显示源地址】。或者可调用腾讯云相关API查询。由于腾讯云只支持转码为MP4与HLS格式，此处调用请尽量使用这两种格式。*/ 
	videoUrl:string,

}

interface bankCardScan {
	/** 身份证正面扫描*/ 
	scan():void

}
interface UIEasemob {
	/**
	 * `注册接口`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `password` :string : 密码
	 */
	easeRegister(params:UIEasemob_easeRegister_Params, callback?: (ret:JSON) => void):void

	/**
	 * `登录接口`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `password` :string : 密码
	 *
	 * `autoLogin` :boolean : 是否开启自动登录（仅支持ios）
	 */
	login(params:UIEasemob_login_Params, callback?: (ret:JSON) => void):void

	/** 连接服务器的状态变化事件的监听*/ 
	addConnectionListener():void

	/** 账号异常事件的监听*/ 
	addAccountListener():void

	/** 设置单聊音视频通话状态的监听*/ 
	addCallStateListener():void

	/** 添加单聊语音和视频通话结束监听*/ 
	addCallEndListener():void

	/**
	 * `创建群聊并打开群聊界面，同时添加邀请群聊成员（仅android支持）`
	 * ========params==========
	 *
	 * `type` :string : （可选项）群聊类型
	 *
	 * `userList` :Array : 群聊成员username组成的数组，如：['huanxinUser2','huanxinUser3']
	 *
	 * `bg` :string : （可选项）音视频通话界面背景，支持rgb、rgba、#、img（要求本地路径，如：widget://、fs://）
	 *
	 * `avatar` :JSON : 头像信息，以username为key，头像图片地址（要求本地路径：widget://、fs://）为value的JSON对象
	 *
	 * `createrNickname` :string : （可选项）群聊创建者昵称，若不传或传空则显示creater（用户id）
	 */
	groupChat(params:UIEasemob_groupChat_Params):void

	/**
	 * `发起音视频群聊（仅iOS支持）`
	 * ========params==========
	 *
	 * `groupId` :string : 群组的ID
	 *
	 * `type` :number : （可选项）群聊类型
	 *
	 * `inviteType` :number : （可选项）邀请类型
	 *
	 * `chatType` :number : （可选项）聊天类型
	 */
	makeGroupCall(params:UIEasemob_makeGroupCall_Params):void

	/**
	 * `当收到群聊音视频通话邀请的时候，调用本接口唤起音视频聊天页面（仅iOS支持，android自动弹出）`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话 id
	 *
	 * `chatType` :string : （可选项）会话类型
	 *
	 * `messageId` :string : 消息 id
	 */
	joinGroupCall(params:UIEasemob_joinGroupCall_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发起音视频单聊`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话对方的用户id
	 *
	 * `type` :string : （可选项）群聊类型
	 *
	 * `recordOnServer` :boolean : （可选项）是否在服务器端录制该通话
	 *
	 * `mergeStream` :boolean : （可选项）服务器端录制时是否合并流
	 */
	makeCall(params:UIEasemob_makeCall_Params):void

	/** 暂停音视频单聊*/ 
	pauseCall():void

	/** 恢复音视频单聊*/ 
	resumeCall():void

	/** 挂断音视频单聊*/ 
	closeCall():void

	/**
	 * `根据会话 ID 和类型创建并打开聊天页面`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话对方的用户名. 如果是群聊, 则是群组的id
	 *
	 * `chatType` :string : （可选项）发送回执消息的会话类型
	 */
	chat(params:UIEasemob_chat_Params):void

	/** 关闭会话页面*/ 
	closeConversation():void

	/** 聊天页面内头像点击事件监听*/ 
	addAvatarListener():void

	/**
	 * `打开聊天列表页面`
	 * ========params==========
	 *
	 * `navigationTitle` :JSON : 导航条样式配置
	 */
	chatList(params:UIEasemob_chatList_Params):void

	/** 刷新聊天列表*/ 
	refreshChatList():void

	/**
	 * `打开联系人列表页面`
	 * ========params==========
	 *
	 * `navigationTitle` :JSON : 导航条样式配置
	 */
	contactsList(params:UIEasemob_contactsList_Params):void

	/** 刷新联系人列表*/ 
	refreshContactsList():void

	/**
	 * `环信相关配置`
	 * ========params==========
	 *
	 * `navigationStyle` :JSON : 导航条样式配置
	 *
	 * `navigationTitle` :JSON : 导航条样式配置
	 *
	 * `avatar` :JSON : （可选项）头像信息，以username为key，头像图片地址（支持：widget://、fs://、网络路径）为value的JSON对象
	 *
	 * `nickname` :JSON : （可选项）各联系人昵称信息，以username为key，昵称为value的JSON对象
	 *
	 * `msgNotify` :boolean : app处于后台时，有新消息时是否在通知栏提醒(注:此参数不影响第三方的其他推送)(仅在android端有效)
	 *
	 * `msgVoice` :boolean : (可选项) 有新消息后，是否有声音提醒(仅在android端有效)
	 *
	 * `msgVibrate` :boolean : (可选项) 有新消息后，是否有震动提醒(仅在android端有效)
	 *
	 * `hideLocation` :boolean : （可选项）是否隐藏聊天页面面板上位置发送按钮
	 */
	configureChat(params:UIEasemob_configureChat_Params):void

	/**
	 * `设置语音/视频通话界面免提按钮是否可用`
	 * ========params==========
	 *
	 * `enable` :boolean : (可选项)免提按钮是否可用
	 */
	setHandsFreeEnable(params:UIEasemob_setHandsFreeEnable_Params):void

	/**
	 * `创建群组`
	 * ========params==========
	 *
	 * `name` :string : 群组名
	 *
	 * `description` :string : 群组描述
	 *
	 * `message` :string : 邀请消息
	 *
	 * `userCount` :number : （可选项）群组容纳的人数，群组的最大成员数(3 - 2000)
	 *
	 * `invitees` :Array : 群组成员（不包括创建者自己）
	 *
	 * `style` :string : 群组类型
	 *
	 * `IsInviteNeedConfirm` :boolean : （可选项）邀请群成员时，是否需要发送邀请通知.若false，被邀请的人自动加入群组
	 */
	createGroup(params:UIEasemob_createGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `解散群组 ，需要owner/admin权限`
	 * ========params==========
	 *
	 * `id` :string : 群组 id
	 */
	destroyGroup(params:UIEasemob_destroyGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取制定 id 的群组信息 ，需要owner/admin权限`
	 * ========params==========
	 *
	 * `id` :string : 群组 id
	 */
	getGroupInfo(params:UIEasemob_getGroupInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加好友`
	 * ========params==========
	 *
	 * `name` :string : 要添加的用户
	 *
	 * `message` :string : 邀请消息
	 */
	addContact(params:UIEasemob_addContact_Params, callback?: (ret:JSON) => void):void

	/** 添加好友状态监听*/ 
	addContactListener():void

	/**
	 * `设置是否自动同意好友申请`
	 * ========params==========
	 *
	 * `isAutoAcceptFriendInvitation` :boolean : 是否自动同意好友申请
	 */
	setAutoAcceptFriendInvitation(params:UIEasemob_setAutoAcceptFriendInvitation_Params):void

	/**
	 * `同意加好友的申请`
	 * ========params==========
	 *
	 * `name` :string : 申请者
	 */
	approveFriendRequest(params:UIEasemob_approveFriendRequest_Params, callback?: (ret:JSON) => void):void

	/**
	 * `拒绝加好友的申请`
	 * ========params==========
	 *
	 * `name` :string : 申请者
	 */
	declineFriendRequest(params:UIEasemob_declineFriendRequest_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除好友`
	 * ========params==========
	 *
	 * `name` :string : 要删除的好友
	 *
	 * `isDeleteConversation` :boolean : （可选项）是否删除会话
	 */
	deleteContact(params:UIEasemob_deleteContact_Params, callback?: (ret:JSON) => void):void

	/**
	 * `邀请单人或多人进入群组, (注：android如果是群主加人可以调用此接口)`
	 * ========params==========
	 *
	 * `names` :Array : 要邀请的用户名列表
	 *
	 * `groupId` :string : 群组id
	 *
	 * `message` :string : （可选项）欢迎信息（仅支持ios）
	 */
	addMembersToGroup(params:UIEasemob_addMembersToGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `私有群里，如果开放了群成员邀请，群成员邀请调用该接口邀请成员`
	 * ========params==========
	 *
	 * `names` :Array : 要邀请的用户名列表
	 *
	 * `groupId` :string : 群组id
	 *
	 * `message` :string : （可选项）欢迎信息
	 */
	inviteUser(params:UIEasemob_inviteUser_Params, callback?: (ret:JSON) => void):void

	/**
	 * `把单人或多人移出群组`
	 * ========params==========
	 *
	 * `names` :Array : 要移除的用户名列表(注：android不支持一次删除多个人，即如果数组的长度大于1，只会删除第一个)
	 *
	 * `groupId` :string : 群组id
	 */
	removeMembersFromGroup(params:UIEasemob_removeMembersFromGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改群组群名称`
	 * ========params==========
	 *
	 * `groupName` :string : 要修改的名称
	 *
	 * `groupId` :string : 群组id
	 */
	changeGroupSubject(params:UIEasemob_changeGroupSubject_Params, callback?: (ret:JSON) => void):void

	/**
	 * `用户主动退出群组`
	 * ========params==========
	 *
	 * `groupId` :string : 群组id
	 */
	leaveGroup(params:UIEasemob_leaveGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `加入一个公开群组`
	 * ========params==========
	 *
	 * `groupId` :string : 群组id
	 */
	joinPublicGroup(params:UIEasemob_joinPublicGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `申请加入一个需批准的公开群组`
	 * ========params==========
	 *
	 * `groupId` :string : 群组id
	 *
	 * `aMessage` :string : (可选项)请求加入的信息
	 */
	requestToJoinPublicGroup(params:UIEasemob_requestToJoinPublicGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `批准入群申请`
	 * ========params==========
	 *
	 * `groupId` :string : 所申请的群组ID
	 *
	 * `username` :string : 申请人
	 */
	approveJoinGroupRequest(params:UIEasemob_approveJoinGroupRequest_Params, callback?: (ret:JSON) => void):void

	/**
	 * `拒绝入群申请`
	 * ========params==========
	 *
	 * `groupId` :string : 被拒绝的群组ID
	 *
	 * `username` :string : 申请人
	 *
	 * `reason` :string : 拒绝理由
	 */
	declineJoinGroupRequest(params:UIEasemob_declineJoinGroupRequest_Params, callback?: (ret:JSON) => void):void

	/**
	 * `接受入群邀请`
	 * ========params==========
	 *
	 * `groupId` :string : 接受的群组ID
	 *
	 * `username` :string : 邀请者
	 */
	acceptInvitationFromGroup(params:UIEasemob_acceptInvitationFromGroup_Params, callback?: (ret:JSON) => void):void

	/** 群组状态监听*/ 
	addGroupListener():void

	/**
	 * `将一组成员禁言，需要Owner / Admin权限`
	 * ========params==========
	 *
	 * `muteMembers` :Array : 要禁言的成员列表
	 *
	 * `muteMilliseconds` :number : 禁言时长，单位秒(android注意：目前muteMilliseconds参数不起作用，暂时只支持永久禁言和解除禁言两种操作, muteMilliseconds建议输入12*30*24*60*60)
	 *
	 * `groupId` :any : 群组ID
	 */
	muteMembers(params:UIEasemob_muteMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将一组成员解除禁言，需要Owner / Admin权限`
	 * ========params==========
	 *
	 * `muteMembers` :Array : 要解除禁言的成员列表
	 *
	 * `groupId` :any : 群组ID
	 */
	unmuteMembers(params:UIEasemob_unmuteMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `新建/获取一个会话`
	 * ========params==========
	 *
	 * `conversationId` :string : （可选项）会话的id，若创建时可不传此参数
	 *
	 * `type` :string : （可选项）会话类型
	 *
	 * `ifCreate` :boolean : （可选项） 如果会话不存在是否创建会话
	 */
	getConversation(params:UIEasemob_getConversation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除会话`
	 * ========params==========
	 *
	 * `conversationId` :string : 要删除的会话的id
	 *
	 * `isDeleteMessages` :boolean : （可选项） 是否删除会话中的消息
	 */
	deleteConversation(params:UIEasemob_deleteConversation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除一组会话`
	 * ========params==========
	 *
	 * `conversationIds` :Array : 要删除的会话的id 组成的数组
	 *
	 * `isDeleteMessages` :boolean : （可选项） 是否删除会话中的消息
	 */
	deleteConversations(params:UIEasemob_deleteConversations_Params, callback?: (ret:JSON) => void):void

	/** 获取所有会话，如果内存中不存在会从DB中加载*/ 
	getAllConversations(callback?: (ret:JSON) => void):void

	/**
	 * `根据会话id 及其类型，获取指定消息 ID 的消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要获取信息的会话的 id
	 *
	 * `type` :string : （可选项）会话类型
	 *
	 * `messageId` :string : 指定的消息的 ID
	 */
	loadMessageWithId(params:UIEasemob_loadMessageWithId_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送文本消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `text` :string : 发送的消息
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}
	 */
	sendText(params:UIEasemob_sendText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送图片消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `path` :string : 要发送的图片的路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `displayName` :string : 附件显示名（不包含路径）（仅支持ios）
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendImage(params:UIEasemob_sendImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送位置消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `address` :string : 要发送的地址
	 *
	 * `latitude` :number : 纬度
	 *
	 * `longitude` :number : 经度
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendLocation(params:UIEasemob_sendLocation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送声音消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `path` :string : 要发送的音频的路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `displayName` :string : 附件显示名（不包含路径）（仅iOS支持）
	 *
	 * `length` :number : 录音时间(秒)
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendVoice(params:UIEasemob_sendVoice_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送视频消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `path` :string : 要发送的视频的路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `displayName` :string : 附件显示名（不包含路径）（仅iOS支持）
	 *
	 * `length` :number : 视频时间长度(秒)
	 *
	 * `thumbPath` :string : 视频预览图路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendVideo(params:UIEasemob_sendVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送文件消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `path` :string : 要发送的文件的路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `displayName` :string : 附件显示名（不包含路径）（仅iOS支持）
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendFile(params:UIEasemob_sendFile_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送命令消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `action` :string : 要发送的命令
	 *
	 * `from` :string : （可选项）发送方
	 *
	 * `to` :string : 接收方
	 *
	 * `ext` :JSON : 扩展信息
	 */
	sendCmd(params:UIEasemob_sendCmd_Params, callback?: (ret:JSON) => void):void

	/**
	 * `下载缩略图（图片消息的缩略图或视频消息的第一帧图片），`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅iOS支持）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型（仅iOS支持）
	 *
	 * `messageId` :string : 要下载的信息的 id
	 */
	downloadMessageThumbnail(params:UIEasemob_downloadMessageThumbnail_Params, callback?: (ret:JSON) => void):void

	/**
	 * `下载消息附件（语音，视频，图片原图，文件），`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅iOS支持）
	 *
	 * `chatType` :string : （可选项）发送消息的会话类型（仅iOS支持）
	 *
	 * `messageId` :string : 要下载的信息的 id
	 */
	downloadMessageAttachments(params:UIEasemob_downloadMessageAttachments_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发送消息已读回执`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送回执消息的会话的 id
	 *
	 * `chatType` :string : （可选项）发送回执消息的会话类型
	 *
	 * `messageId` :string : 要发送回执的信息的 id
	 */
	sendMessageReadAck(params:UIEasemob_sendMessageReadAck_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加消息相关事件监听`
	 * ========params==========
	 *
	 * `name` :string : 要监听的消息相关事件名称
	 */
	addMessageListener(params:UIEasemob_addMessageListener_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移除消息相关事件监听`
	 * ========params==========
	 *
	 * `name` :string : 要移除的消息相关事件名称
	 */
	removeMessageListener(params:UIEasemob_removeMessageListener_Params):void

	/**
	 * `从数据库中获取消息，获取到的消息是startMsgId之前的pagesize条消息；`
	 * ========params==========
	 *
	 * `conversationId` :string : （必选项）会话的id，若创建时可不传此参数
	 *
	 * `type` :string : （可选项）会话类型
	 *
	 * `startMsgId` :string : (可选项）消息id，如果不写此项，从数据库中读取最新的记录
	 *
	 * `pagesize` :number : (可选项) 获取startMsgId之前的消息数
	 */
	loadMessageFromDB(params:UIEasemob_loadMessageFromDB_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将会话指定消息置为已读`
	 * ========params==========
	 *
	 * `conversationId` :string : 要设置的会话的 id
	 *
	 * `type` :string : （可选项）会话类型
	 *
	 * `messageId` :string : 要设置为已读的信息的 id
	 */
	markMessageAsRead(params:UIEasemob_markMessageAsRead_Params, callback?: (ret:JSON) => void):void

	/**
	 * `将会话所有消息置为已读`
	 * ========params==========
	 *
	 * `conversationId` :string : 要设置的会话的 id
	 *
	 * `type` :string : （可选项）会话类型
	 */
	markAllMessagesAsRead(params:UIEasemob_markAllMessagesAsRead_Params, callback?: (ret:JSON) => void):void

	/**
	 * `从服务器获取指定会话的历史消息；此接口需要开通环信增值服务，未开通不会返回数据`
	 * ========params==========
	 *
	 * `conversationId` :string : （必选项）会话的id，若创建时可不传此参数
	 *
	 * `type` :string : （可选项）会话类型
	 *
	 * `startMsgId` :string : 参考起始消息的ID
	 *
	 * `pagesize` :number : (可选项) 获取startMsgId之前的消息数
	 */
	fetchHistoryMessagesFromServer(params:UIEasemob_fetchHistoryMessagesFromServer_Params, callback?: (ret:JSON) => void):void

	/**
	 * `开启关闭本地通知`
	 * ========params==========
	 *
	 * `enable` :string : （可选项）是否开启本地通知
	 *
	 * `title` :string : （可选项）本地推送提示语
	 */
	setLocalNotification(params:UIEasemob_setLocalNotification_Params):void

	/**
	 * `设置推送全局属性`
	 * ========params==========
	 *
	 * `displayName` :string : （可选项）推送消息显示的昵称，不传则不设置
	 *
	 * `displayStyle` :string : （可选项）推送消息显示的类型
	 *
	 * `noDisturbStatus` :string : （可选项）消息推送的免打扰设置
	 *
	 * `noDisturbingStartH` :number : （可选项）消息推送免打扰开始时间，小时，暂时只支持整点（小时），不传则不设置
	 *
	 * `noDisturbingEndH` :number : （可选项）消息推送免打扰结束时间，小时，暂时只支持整点（小时），不传则不设置
	 */
	setPushOption(params:UIEasemob_setPushOption_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置推送昵称`
	 * ========params==========
	 *
	 * `nickname` :string : 推送消息显示的昵称
	 */
	setApnsNickname(params:UIEasemob_setApnsNickname_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置群组忽略推送`
	 * ========params==========
	 *
	 * `groupId` :string : 群组id
	 */
	ignoreGroupPush(params:UIEasemob_ignoreGroupPush_Params, callback?: (ret:JSON) => void):void

	/**
	 * `批量设置忽略推送的群组`
	 * ========params==========
	 *
	 * `groupIds` :Array : 群组id组成的数组
	 */
	ignoreGroupsPush(params:UIEasemob_ignoreGroupsPush_Params, callback?: (ret:JSON) => void):void

	/** 获取忽略推送消息的群组id*/ 
	getAllIgnoredGroupIds():void

}
interface UIEasemob_easeRegister_Params {
	/**用户名*/ 
	username:string,

	/**密码*/ 
	password:string,

}

interface UIEasemob_login_Params {
	/**用户名*/ 
	username:string,

	/**密码*/ 
	password:string,

	/**是否开启自动登录（仅支持ios）*/ 
	autoLogin:boolean,

}

interface UIEasemob_groupChat_Params {
	/**（可选项）群聊类型*/ 
	type?:string,

	/**群聊成员username组成的数组，如：['huanxinUser2','huanxinUser3']*/ 
	userList:Array,

	/**（可选项）音视频通话界面背景，支持rgb、rgba、#、img（要求本地路径，如：widget://、fs://）*/ 
	bg?:string,

	/**头像信息，以username为key，头像图片地址（要求本地路径：widget://、fs://）为value的JSON对象*/ 
	avatar:JSON,

	/**（可选项）群聊创建者昵称，若不传或传空则显示creater（用户id）*/ 
	createrNickname?:string,

}

interface UIEasemob_makeGroupCall_Params {
	/**群组的ID*/ 
	groupId:string,

	/**（可选项）群聊类型*/ 
	type?:number,

	/**（可选项）邀请类型*/ 
	inviteType?:number,

	/**（可选项）聊天类型*/ 
	chatType?:number,

}

interface UIEasemob_joinGroupCall_Params {
	/**会话 id*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	chatType?:string,

	/**消息 id*/ 
	messageId:string,

}

interface UIEasemob_makeCall_Params {
	/**会话对方的用户id*/ 
	conversationId:string,

	/**（可选项）群聊类型*/ 
	type?:string,

	/**（可选项）是否在服务器端录制该通话*/ 
	recordOnServer?:boolean,

	/**（可选项）服务器端录制时是否合并流*/ 
	mergeStream?:boolean,

}

interface UIEasemob_chat_Params {
	/**会话对方的用户名. 如果是群聊, 则是群组的id*/ 
	conversationId:string,

	/**（可选项）发送回执消息的会话类型*/ 
	chatType?:string,

}

interface UIEasemob_chatList_Params {
	/**导航条样式配置*/ 
	navigationTitle:JSON,

}

interface UIEasemob_contactsList_Params {
	/**导航条样式配置*/ 
	navigationTitle:JSON,

}

interface UIEasemob_configureChat_Params {
	/**导航条样式配置*/ 
	navigationStyle:JSON,

	/**导航条样式配置*/ 
	navigationTitle:JSON,

	/**（可选项）头像信息，以username为key，头像图片地址（支持：widget://、fs://、网络路径）为value的JSON对象*/ 
	avatar?:JSON,

	/**（可选项）各联系人昵称信息，以username为key，昵称为value的JSON对象*/ 
	nickname?:JSON,

	/**app处于后台时，有新消息时是否在通知栏提醒(注:此参数不影响第三方的其他推送)(仅在android端有效)*/ 
	msgNotify:boolean,

	/**(可选项) 有新消息后，是否有声音提醒(仅在android端有效)*/ 
	msgVoice?:boolean,

	/**(可选项) 有新消息后，是否有震动提醒(仅在android端有效)*/ 
	msgVibrate?:boolean,

	/**（可选项）是否隐藏聊天页面面板上位置发送按钮*/ 
	hideLocation?:boolean,

}

interface UIEasemob_setHandsFreeEnable_Params {
	/**(可选项)免提按钮是否可用*/ 
	enable?:boolean,

}

interface UIEasemob_createGroup_Params {
	/**群组名*/ 
	name:string,

	/**群组描述*/ 
	description:string,

	/**邀请消息*/ 
	message:string,

	/**（可选项）群组容纳的人数，群组的最大成员数(3 - 2000)*/ 
	userCount?:number,

	/**群组成员（不包括创建者自己）*/ 
	invitees:Array,

	/**群组类型*/ 
	style:string,

	/**（可选项）邀请群成员时，是否需要发送邀请通知.若false，被邀请的人自动加入群组*/ 
	IsInviteNeedConfirm?:boolean,

}

interface UIEasemob_destroyGroup_Params {
	/**群组 id*/ 
	id:string,

}

interface UIEasemob_getGroupInfo_Params {
	/**群组 id*/ 
	id:string,

}

interface UIEasemob_addContact_Params {
	/**要添加的用户*/ 
	name:string,

	/**邀请消息*/ 
	message:string,

}

interface UIEasemob_setAutoAcceptFriendInvitation_Params {
	/**是否自动同意好友申请*/ 
	isAutoAcceptFriendInvitation:boolean,

}

interface UIEasemob_approveFriendRequest_Params {
	/**申请者*/ 
	name:string,

}

interface UIEasemob_declineFriendRequest_Params {
	/**申请者*/ 
	name:string,

}

interface UIEasemob_deleteContact_Params {
	/**要删除的好友*/ 
	name:string,

	/**（可选项）是否删除会话*/ 
	isDeleteConversation?:boolean,

}

interface UIEasemob_addMembersToGroup_Params {
	/**要邀请的用户名列表*/ 
	names:Array,

	/**群组id*/ 
	groupId:string,

	/**（可选项）欢迎信息（仅支持ios）*/ 
	message?:string,

}

interface UIEasemob_inviteUser_Params {
	/**要邀请的用户名列表*/ 
	names:Array,

	/**群组id*/ 
	groupId:string,

	/**（可选项）欢迎信息*/ 
	message?:string,

}

interface UIEasemob_removeMembersFromGroup_Params {
	/**要移除的用户名列表(注：android不支持一次删除多个人，即如果数组的长度大于1，只会删除第一个)*/ 
	names:Array,

	/**群组id*/ 
	groupId:string,

}

interface UIEasemob_changeGroupSubject_Params {
	/**要修改的名称*/ 
	groupName:string,

	/**群组id*/ 
	groupId:string,

}

interface UIEasemob_leaveGroup_Params {
	/**群组id*/ 
	groupId:string,

}

interface UIEasemob_joinPublicGroup_Params {
	/**群组id*/ 
	groupId:string,

}

interface UIEasemob_requestToJoinPublicGroup_Params {
	/**群组id*/ 
	groupId:string,

	/**(可选项)请求加入的信息*/ 
	aMessage?:string,

}

interface UIEasemob_approveJoinGroupRequest_Params {
	/**所申请的群组ID*/ 
	groupId:string,

	/**申请人*/ 
	username:string,

}

interface UIEasemob_declineJoinGroupRequest_Params {
	/**被拒绝的群组ID*/ 
	groupId:string,

	/**申请人*/ 
	username:string,

	/**拒绝理由*/ 
	reason:string,

}

interface UIEasemob_acceptInvitationFromGroup_Params {
	/**接受的群组ID*/ 
	groupId:string,

	/**邀请者*/ 
	username:string,

}

interface UIEasemob_muteMembers_Params {
	/**要禁言的成员列表*/ 
	muteMembers:Array,

	/**禁言时长，单位秒(android注意：目前muteMilliseconds参数不起作用，暂时只支持永久禁言和解除禁言两种操作, muteMilliseconds建议输入12*30*24*60*60)*/ 
	muteMilliseconds:number,

	/**群组ID*/ 
	groupId:any,

}

interface UIEasemob_unmuteMembers_Params {
	/**要解除禁言的成员列表*/ 
	muteMembers:Array,

	/**群组ID*/ 
	groupId:any,

}

interface UIEasemob_getConversation_Params {
	/**（可选项）会话的id，若创建时可不传此参数*/ 
	conversationId?:string,

	/**（可选项）会话类型*/ 
	type?:string,

	/**（可选项） 如果会话不存在是否创建会话*/ 
	ifCreate?:boolean,

}

interface UIEasemob_deleteConversation_Params {
	/**要删除的会话的id*/ 
	conversationId:string,

	/**（可选项） 是否删除会话中的消息*/ 
	isDeleteMessages?:boolean,

}

interface UIEasemob_deleteConversations_Params {
	/**要删除的会话的id 组成的数组*/ 
	conversationIds:Array,

	/**（可选项） 是否删除会话中的消息*/ 
	isDeleteMessages?:boolean,

}

interface UIEasemob_loadMessageWithId_Params {
	/**要获取信息的会话的 id*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	type?:string,

	/**指定的消息的 ID*/ 
	messageId:string,

}

interface UIEasemob_sendText_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**发送的消息*/ 
	text:string,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}*/ 
	ext:JSON,

}

interface UIEasemob_sendImage_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的图片的路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	path:string,

	/**附件显示名（不包含路径）（仅支持ios）*/ 
	displayName:string,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_sendLocation_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的地址*/ 
	address:string,

	/**纬度*/ 
	latitude:number,

	/**经度*/ 
	longitude:number,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_sendVoice_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的音频的路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	path:string,

	/**附件显示名（不包含路径）（仅iOS支持）*/ 
	displayName:string,

	/**录音时间(秒)*/ 
	length:number,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_sendVideo_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的视频的路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	path:string,

	/**附件显示名（不包含路径）（仅iOS支持）*/ 
	displayName:string,

	/**视频时间长度(秒)*/ 
	length:number,

	/**视频预览图路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	thumbPath:string,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_sendFile_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的文件的路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	path:string,

	/**附件显示名（不包含路径）（仅iOS支持）*/ 
	displayName:string,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_sendCmd_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**要发送的命令*/ 
	action:string,

	/**（可选项）发送方*/ 
	from?:string,

	/**接收方*/ 
	to:string,

	/**扩展信息*/ 
	ext:JSON,

}

interface UIEasemob_downloadMessageThumbnail_Params {
	/**要发送消息的会话的 id（仅iOS支持）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型（仅iOS支持）*/ 
	chatType?:string,

	/**要下载的信息的 id*/ 
	messageId:string,

}

interface UIEasemob_downloadMessageAttachments_Params {
	/**要发送消息的会话的 id（仅iOS支持）*/ 
	conversationId:string,

	/**（可选项）发送消息的会话类型（仅iOS支持）*/ 
	chatType?:string,

	/**要下载的信息的 id*/ 
	messageId:string,

}

interface UIEasemob_sendMessageReadAck_Params {
	/**要发送回执消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）发送回执消息的会话类型*/ 
	chatType?:string,

	/**要发送回执的信息的 id*/ 
	messageId:string,

}

interface UIEasemob_addMessageListener_Params {
	/**要监听的消息相关事件名称*/ 
	name:string,

}

interface UIEasemob_removeMessageListener_Params {
	/**要移除的消息相关事件名称*/ 
	name:string,

}

interface UIEasemob_loadMessageFromDB_Params {
	/**（必选项）会话的id，若创建时可不传此参数*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	type?:string,

	/**(可选项）消息id，如果不写此项，从数据库中读取最新的记录*/ 
	startMsgId?:string,

	/**(可选项) 获取startMsgId之前的消息数*/ 
	pagesize?:number,

}

interface UIEasemob_markMessageAsRead_Params {
	/**要设置的会话的 id*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	type?:string,

	/**要设置为已读的信息的 id*/ 
	messageId:string,

}

interface UIEasemob_markAllMessagesAsRead_Params {
	/**要设置的会话的 id*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	type?:string,

}

interface UIEasemob_fetchHistoryMessagesFromServer_Params {
	/**（必选项）会话的id，若创建时可不传此参数*/ 
	conversationId:string,

	/**（可选项）会话类型*/ 
	type?:string,

	/**参考起始消息的ID*/ 
	startMsgId:string,

	/**(可选项) 获取startMsgId之前的消息数*/ 
	pagesize?:number,

}

interface UIEasemob_setLocalNotification_Params {
	/**（可选项）是否开启本地通知*/ 
	enable?:string,

	/**（可选项）本地推送提示语*/ 
	title?:string,

}

interface UIEasemob_setPushOption_Params {
	/**（可选项）推送消息显示的昵称，不传则不设置*/ 
	displayName?:string,

	/**（可选项）推送消息显示的类型*/ 
	displayStyle?:string,

	/**（可选项）消息推送的免打扰设置*/ 
	noDisturbStatus?:string,

	/**（可选项）消息推送免打扰开始时间，小时，暂时只支持整点（小时），不传则不设置*/ 
	noDisturbingStartH?:number,

	/**（可选项）消息推送免打扰结束时间，小时，暂时只支持整点（小时），不传则不设置*/ 
	noDisturbingEndH?:number,

}

interface UIEasemob_setApnsNickname_Params {
	/**推送消息显示的昵称*/ 
	nickname:string,

}

interface UIEasemob_ignoreGroupPush_Params {
	/**群组id*/ 
	groupId:string,

}

interface UIEasemob_ignoreGroupsPush_Params {
	/**群组id组成的数组*/ 
	groupIds:Array,

}

interface weibo {
	/**
	 * `分享文本内容`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取
	 *
	 * `text` :string : 分享的文本，**长度小于140个汉字**
	 */
	shareText(params:weibo_shareText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享图片内容`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取
	 *
	 * `text` :string : （可选项）分享的文本，**长度小于140个汉字**
	 *
	 * `imageUrl` :string : 分享的图片路径，要求本地路径（fs://、widget://），**大小不能超过10M**
	 */
	shareImage(params:weibo_shareImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享网络音频资源`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取
	 *
	 * `text` :string : （可选项）分享的文本，**长度小于140个汉字**
	 *
	 * `title` :string : 分享网络音频的标题，**不能为空且长度小于1k**
	 *
	 * `description` :string : （可选项）分享网络音频的描述，**长度小于1k**
	 *
	 * `thumb` :string : 分享网络音频的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k**
	 *
	 * `contentUrl` :string : 分享网络音频的 url 地址，**不能为空且长度不能超过255**
	 */
	shareMusic(params:weibo_shareMusic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享网络视频资源`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取
	 *
	 * `text` :string : （可选项）分享的文本，**长度小于140个汉字**
	 *
	 * `title` :string : 分享网络视频的标题，**不能为空且长度小于1k**
	 *
	 * `description` :string : （可选项）分享网络视频的描述，**长度小于1k**
	 *
	 * `thumb` :string : 分享网络视频的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k**
	 *
	 * `contentUrl` :string : 分享网络视频的 url 地址，**不能为空且长度不能超过255**
	 */
	shareVideo(params:weibo_shareVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享网页`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取
	 *
	 * `text` :string : （可选项）分享的文本，**长度小于140个汉字**
	 *
	 * `title` :string : 分享网页的标题，**不能为空且长度小于1k**
	 *
	 * `description` :string : （可选项）分享网页的描述，**长度小于1k**
	 *
	 * `thumb` :string : 分享网页的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k**
	 *
	 * `contentUrl` :string : 分享网页的 url 地址，**不能为空且长度不能超过255**
	 */
	shareWebPage(params:weibo_shareWebPage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `授权登录（**用于实现第三方登录**）`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪微博开放平台申请的 App Key，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取，不传或传入错误的 apiKey，则无法打开新浪微博进行登录。
	 *
	 * `registUrl` :string : （可选项）在新浪微博开放平台创建应用时（应用信息 -> 高级信息 -> 授权设置）自定义填写的回调 url，若为空则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取
	 */
	auth(params:weibo_auth_Params, callback?: (ret:JSON) => void):void

	/** 取消授权，退出登录状态*/ 
	cancelAuth(callback?: (ret:JSON) => void):void

	/**
	 * `获取用户账户信息，**调用本接口前，需要先调用  auth 接口授权**`
	 * ========params==========
	 *
	 * `token` :string : （可选项）登录账号获取的token值
	 *
	 * `userId` :string : （可选项）登录账号获取的 userId
	 */
	getUserInfo(params:weibo_getUserInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `判断是否已安装新浪微博客户端`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从新浪微博开放平台申请的 App Key，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取，不传或传入错误的 apiKey，则无法判断是否已安装新浪微博客户端。
	 */
	isInstalled(params:weibo_isInstalled_Params, callback?: (ret:JSON) => void):void

}
interface weibo_shareText_Params {
	/**（可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取*/ 
	apiKey?:string,

	/**分享的文本，**长度小于140个汉字***/ 
	text:string,

}

interface weibo_shareImage_Params {
	/**（可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取*/ 
	apiKey?:string,

	/**（可选项）分享的文本，**长度小于140个汉字***/ 
	text?:string,

	/**分享的图片路径，要求本地路径（fs://、widget://），**大小不能超过10M***/ 
	imageUrl:string,

}

interface weibo_shareMusic_Params {
	/**（可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取*/ 
	apiKey?:string,

	/**（可选项）分享的文本，**长度小于140个汉字***/ 
	text?:string,

	/**分享网络音频的标题，**不能为空且长度小于1k***/ 
	title:string,

	/**（可选项）分享网络音频的描述，**长度小于1k***/ 
	description?:string,

	/**分享网络音频的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k***/ 
	thumb:string,

	/**分享网络音频的 url 地址，**不能为空且长度不能超过255***/ 
	contentUrl:string,

}

interface weibo_shareVideo_Params {
	/**（可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取*/ 
	apiKey?:string,

	/**（可选项）分享的文本，**长度小于140个汉字***/ 
	text?:string,

	/**分享网络视频的标题，**不能为空且长度小于1k***/ 
	title:string,

	/**（可选项）分享网络视频的描述，**长度小于1k***/ 
	description?:string,

	/**分享网络视频的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k***/ 
	thumb:string,

	/**分享网络视频的 url 地址，**不能为空且长度不能超过255***/ 
	contentUrl:string,

}

interface weibo_shareWebPage_Params {
	/**（可选项）从新浪开放平台申请的 App Key ，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 文件读取*/ 
	apiKey?:string,

	/**（可选项）分享的文本，**长度小于140个汉字***/ 
	text?:string,

	/**分享网页的标题，**不能为空且长度小于1k***/ 
	title:string,

	/**（可选项）分享网页的描述，**长度小于1k***/ 
	description?:string,

	/**分享网页的缩略图地址，要求本地路径（fs://、widget://），**大小小于32k***/ 
	thumb:string,

	/**分享网页的 url 地址，**不能为空且长度不能超过255***/ 
	contentUrl:string,

}

interface weibo_auth_Params {
	/**（可选项）从新浪微博开放平台申请的 App Key，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取，不传或传入错误的 apiKey，则无法打开新浪微博进行登录。*/ 
	apiKey?:string,

	/**（可选项）在新浪微博开放平台创建应用时（应用信息 -> 高级信息 -> 授权设置）自定义填写的回调 url，若为空则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取*/ 
	registUrl?:string,

}

interface weibo_getUserInfo_Params {
	/**（可选项）登录账号获取的token值*/ 
	token?:string,

	/**（可选项）登录账号获取的 userId*/ 
	userId?:string,

}

interface weibo_isInstalled_Params {
	/**（可选项）从新浪微博开放平台申请的 App Key，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取，不传或传入错误的 apiKey，则无法判断是否已安装新浪微博客户端。*/ 
	apiKey?:string,

}

interface baiduAppx {
	/**
	 * `显示横幅广告`
	 * ========params==========
	 *
	 * `appKey` :string : （必填项）百度开发者平台申请的appkey。
	 *
	 * `bannerAdId` :string : （必填项）广告联盟申请的横幅广告id。
	 *
	 * `rect` :JSON : （必填项）模块的位置及尺寸
	 *
	 * `fixedOn` :string : （可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window
	 *
	 * `fixed` :boolean : （（可选项）模块是否随所属 Window 或 Frame 滚动
	 */
	startBanner(params:baiduAppx_startBanner_Params, callback?: (ret:JSON) => void):void

	/** 移除横幅广告*/ 
	removeBanner(callback?: (ret:JSON) => void):void

	/**
	 * `加载插屏广告`
	 * ========params==========
	 *
	 * `appKey` :string : （必填项）百度开发者平台申请的appkey。
	 *
	 * `interstitialAdId` :string : （必填项）广告联盟申请的插屏广告id。
	 */
	loadInterstitial(params:baiduAppx_loadInterstitial_Params, callback?: (ret:JSON) => void):void

	/** 显示插屏广告*/ 
	showInterstitial(callback?: (ret:JSON) => void):void

}
interface baiduAppx_startBanner_Params {
	/**（必填项）百度开发者平台申请的appkey。*/ 
	appKey:string,

	/**（必填项）广告联盟申请的横幅广告id。*/ 
	bannerAdId:string,

	/**（必填项）模块的位置及尺寸*/ 
	rect:JSON,

	/**（可选项）模块所属 Frame 的名字，若不传则模块归属于当前 Window*/ 
	fixedOn?:string,

	/**（（可选项）模块是否随所属 Window 或 Frame 滚动*/ 
	fixed?:boolean,

}

interface baiduAppx_loadInterstitial_Params {
	/**（必填项）百度开发者平台申请的appkey。*/ 
	appKey:string,

	/**（必填项）广告联盟申请的插屏广告id。*/ 
	interstitialAdId:string,

}

interface moveTrack {
	/**
	 * `开启定位服务，定时上报用户定位信息。`
	 * ========params==========
	 *
	 * `url` :string : （必填）上报服务器的请求地址。
	 *
	 * `dataType` :string : （可选项）post数据的格式，json表示以json字符串作为body提交，后台需要解析body获取数据，格式灵活，移动开发最爱。key-value是以标准的form（表单）格式提交，默认是json。
	 *
	 * `coorType` :string : （可选项）gcj02=国测局经纬度坐标系, bd09=百度墨卡托坐标系, bd09ll=百度经纬度坐标系, 默认是bd09ll, 建议不传值用默认的就好。
	 *
	 * `headers` :JSON : （可选项）自定义上传header数据格式，根必须是对象{}, 不能是数组[], 一层键值对。{"key":"value","key2":"value2"}。可以通过这个参数上传数据到apicloud云 ->
	 *
	 * `data` :JSON : （可选项）自定义上传数据格式，根必须是对象{}, 不能是数组[], 如果dataType=key-value, 则只支持一级对象(不支持对象套对象)，dataType=json没有这个限制。
	 *
	 * `openGPS` :boolean : （可选项）是否开启GPS, 默认为true。(仅安卓有效)
	 *
	 * `scanSpan` :number : （可选项）上报的时间间隔，单位为毫秒(ms)，默认为3000ms。(仅安卓有效)
	 *
	 * `distanceFilter` :number : （可选项）上报的最小距离，单位米(m)，默认为1米,就是移动距离超过1米就提交一次。(仅iOS有效)
	 *
	 * `isNeedAddress` :boolean : （可选项）是否需要地址信息，默认为false。
	 *
	 * `prodName` :string : （可选项）产品名称，默认为apicloud，可以修改为自己APP的名称。(仅安卓有效)
	 *
	 * `prefix` :string : （可选项）字段名的前辍。
	 */
	startLocation(params:moveTrack_startLocation_Params, callback?: (ret:JSON) => void):void

	/** 关闭定时上报定位信息的服务。*/ 
	stopLocation():void

}
interface moveTrack_startLocation_Params {
	/**（必填）上报服务器的请求地址。*/ 
	url:string,

	/**（可选项）post数据的格式，json表示以json字符串作为body提交，后台需要解析body获取数据，格式灵活，移动开发最爱。key-value是以标准的form（表单）格式提交，默认是json。*/ 
	dataType?:string,

	/**（可选项）gcj02=国测局经纬度坐标系, bd09=百度墨卡托坐标系, bd09ll=百度经纬度坐标系, 默认是bd09ll, 建议不传值用默认的就好。*/ 
	coorType?:string,

	/**（可选项）自定义上传header数据格式，根必须是对象{}, 不能是数组[], 一层键值对。{"key":"value","key2":"value2"}。可以通过这个参数上传数据到apicloud云 ->*/ 
	headers?:JSON,

	/**（可选项）自定义上传数据格式，根必须是对象{}, 不能是数组[], 如果dataType=key-value, 则只支持一级对象(不支持对象套对象)，dataType=json没有这个限制。*/ 
	data?:JSON,

	/**（可选项）是否开启GPS, 默认为true。(仅安卓有效)*/ 
	openGPS?:boolean,

	/**（可选项）上报的时间间隔，单位为毫秒(ms)，默认为3000ms。(仅安卓有效)*/ 
	scanSpan?:number,

	/**（可选项）上报的最小距离，单位米(m)，默认为1米,就是移动距离超过1米就提交一次。(仅iOS有效)*/ 
	distanceFilter?:number,

	/**（可选项）是否需要地址信息，默认为false。*/ 
	isNeedAddress?:boolean,

	/**（可选项）产品名称，默认为apicloud，可以修改为自己APP的名称。(仅安卓有效)*/ 
	prodName?:string,

	/**（可选项）字段名的前辍。*/ 
	prefix?:string,

}

interface aliyunVodPlayer {
	/** 初始化播放器*/ 
	initPlayer():void

	/** 打开定制播放器（sts、playAuth、url这三种播放方式只需选取一种，播放器首先尝试以sts的方式播放，如果没有传sts参数，播放器就以playAuth，如果playAuth也没有传参，就以url方式进行播放）*/ 
	openCustomPlayer():void

	/** 关闭自定义播放器*/ 
	closeCustomPlayer():void

	/** 点击返回键时调用此方法*/ 
	onBack():void

	/** 打开悬浮窗口（注意Android需要打开悬浮窗权限，否则会出现异常）*/ 
	openFloatWindow():void

	/**
	 * `准备播放 （sts、playAuth、url这三种播放方式只需选取一种，播放器首先尝试以sts的方式播放，如果没有传sts参数，播放器就以playAuth，如果playAuth也没有传参，就以url方式进行播放）`
	 * ========params==========
	 *
	 * `sts` :JSON : 使用vid+STS方式播放
	 *
	 * `playAuth` :JSON : 使用playAuth方式播放
	 *
	 * `url` :string : 播放url
	 */
	prepareToPlay(params:aliyunVodPlayer_prepareToPlay_Params):void

	/** 开始播放*/ 
	start():void

	/** 显示*/ 
	show():void

	/** 隐藏*/ 
	hide():void

	/** 关闭*/ 
	close():void

	/** 停止播放*/ 
	stop():void

	/** 暂停播放*/ 
	pause():void

	/** 恢复播放*/ 
	resume():void

	/** 重播，播放上一次的url*/ 
	replay():void

	/**
	 * `跳转到指定时间点播放(在播放器状态firstFrame之后才能调用此函数)`
	 * ========params==========
	 *
	 * `position` :number : 播放的指定位置
	 *
	 * `ret` :JSON : 返回值
	 */
	seekToTime(params:aliyunVodPlayer_seekToTime_Params):void

	/**
	 * `循环播放设置`
	 * ========params==========
	 *
	 * `isCirclePlay` :boolean : 是否循环播放
	 */
	setCirclePlay(params:aliyunVodPlayer_setCirclePlay_Params):void

	/** 获取当前播放位置*/ 
	getCurrentPosition():void

	/** 获取视频长度*/ 
	getDuration():void

	/**
	 * `倍数播放支持0.5~2倍的设置，支持音频变速不变调`
	 * ========params==========
	 *
	 * `speed` :number : 倍速
	 */
	setPlaySpeed(params:aliyunVodPlayer_setPlaySpeed_Params):void

	/**
	 * `清晰度切换`
	 * ========params==========
	 *
	 * `quality` :string : 清晰度
	 */
	quality(params:aliyunVodPlayer_quality_Params):void

	/**
	 * `截图`
	 * ========params==========
	 *
	 * `path` :string : 截图保存路径（如果路径无效会保存失败）只支持fs://等本地路径
	 */
	snapShot(params:aliyunVodPlayer_snapShot_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频画面旋转角度，支持0°，90°，180°，270°设置，默认0°，角度按顺时针方向计算`
	 * ========params==========
	 *
	 * `rotate` :number : 画面旋转角度
	 */
	setRenderRotate(params:aliyunVodPlayer_setRenderRotate_Params):void

	/**
	 * `支持设置画面镜像，包括水平镜像和垂直镜像。默认为无镜像`
	 * ========params==========
	 *
	 * `mode` :string : 画面镜像模式
	 */
	setRenderMirrorMode(params:aliyunVodPlayer_setRenderMirrorMode_Params):void

	/**
	 * `音量设置`
	 * ========params==========
	 *
	 * `volume` :number : 音量
	 */
	setVolume(params:aliyunVodPlayer_setVolume_Params):void

	/**
	 * `静音设置`
	 * ========params==========
	 *
	 * `isMute` :boolean : 是否静音
	 */
	setMuteMode(params:aliyunVodPlayer_setMuteMode_Params):void

	/**
	 * `设置屏幕亮度`
	 * ========params==========
	 *
	 * `brightness` :number : 屏幕亮度
	 */
	setScreenBrightness(params:aliyunVodPlayer_setScreenBrightness_Params):void

	/**
	 * `设置显示模式`
	 * ========params==========
	 *
	 * `scalingMode` :string : 显示模式
	 */
	setDisplayMode(params:aliyunVodPlayer_setDisplayMode_Params):void

	/** 添加播放器监听事件*/ 
	addEventListener():void

	/** 异常监听 （错误码及错误信息请参考阿里云 [官方文档](https://help.aliyun.com/document_detail/61908.html?spm=5176.doc51992.2.41.DRtsJB#h2--6)）*/ 
	setOnErrorListener():void

	/** **注意:由于SDK限制,下载文件路径暂时仅支持一级目录如:(fs://)***/ 
	initDownloader():void

	/** **注意: 对于iOS而言，authInfo可以是过期的值,然后会回调错误的参数，这时,开始下载的接口必须传最新的authInfo,否则会下载失败***/ 
	prepareDownload():void

	/** 开始下载*/ 
	startDownload():void

	/** 停止下载*/ 
	stopDownload():void

	/** 删除下载*/ 
	removeDownload():void

	/** 获取下载列表*/ 
	getDownloadList():void

	/** 获取未下载完成任务列表*/ 
	getUnfinishedDownloadList():void

	/** 是否锁屏*/ 
	isScreenLock():void

	/** 打开弹幕开关*/ 
	openBarrageSwitch():void

	/** 关闭弹幕开关*/ 
	closeBarrageSwitch():void

	/** 打开设置面板（音量，亮度面板）*/ 
	openSettingPanel():void

	/** 关闭设置面板（音量，亮度面板）*/ 
	closeSettingPanel():void

	/** 解锁屏幕*/ 
	unlockScreen():void

	/** 锁定屏幕*/ 
	lockScreen():void

	/** 设置媒体控制器隐藏与否 此处可以隐藏显示进度条*/ 
	setMediaControllerVisible():void

	/** 媒体控制器是否隐藏*/ 
	getMediaControllerVisibility():void

	/** 设置播放器为全屏*/ 
	fullScreen():void

	/** 退出全屏*/ 
	unfullScreen():void

	/** 设置全屏按钮的可见性*/ 
	setFullscreenBtnVisible():void

	/** 设置返回按钮图片*/ 
	setBackBtnImage():void

	/** 设置播放器界面的触摸监听*/ 
	addTouchListener(callback?: (ret:JSON) => void):void

}
interface aliyunVodPlayer_prepareToPlay_Params {
	/**使用vid+STS方式播放*/ 
	sts:JSON,

	/**使用playAuth方式播放*/ 
	playAuth:JSON,

	/**播放url*/ 
	url:string,

}

interface aliyunVodPlayer_seekToTime_Params {
	/**播放的指定位置*/ 
	position:number,

	/**返回值*/ 
	ret:JSON,

}

interface aliyunVodPlayer_setCirclePlay_Params {
	/**是否循环播放*/ 
	isCirclePlay:boolean,

}

interface aliyunVodPlayer_setPlaySpeed_Params {
	/**倍速*/ 
	speed:number,

}

interface aliyunVodPlayer_quality_Params {
	/**清晰度*/ 
	quality:string,

}

interface aliyunVodPlayer_snapShot_Params {
	/**截图保存路径（如果路径无效会保存失败）只支持fs://等本地路径*/ 
	path:string,

}

interface aliyunVodPlayer_setRenderRotate_Params {
	/**画面旋转角度*/ 
	rotate:number,

}

interface aliyunVodPlayer_setRenderMirrorMode_Params {
	/**画面镜像模式*/ 
	mode:string,

}

interface aliyunVodPlayer_setVolume_Params {
	/**音量*/ 
	volume:number,

}

interface aliyunVodPlayer_setMuteMode_Params {
	/**是否静音*/ 
	isMute:boolean,

}

interface aliyunVodPlayer_setScreenBrightness_Params {
	/**屏幕亮度*/ 
	brightness:number,

}

interface aliyunVodPlayer_setDisplayMode_Params {
	/**显示模式*/ 
	scalingMode:string,

}

interface facebook {
	/** 判断当前设备是否安装facebook客户端*/ 
	isInstalled(callback?: (ret:JSON) => void):void

	/**
	 * `Facebook 登录授权`
	 * ========params==========
	 *
	 * `appId` :string : （可选项）开发者在 facebook 开放平台申请的应用 ID，若不传则模块从当前 widget 包内的 config.xml 文件内读取，若 config.xml 文件内未配置则模块报错
	 *
	 * `permissions` :Array<JSON> : （可选项）向用户申请访问 facebook 的权限，如：(public_profile,email,user_birthday,user_likes)，取值范围参考[权限参考文件](https://developers.facebook.com/docs/facebook-login/permissions/)
	 */
	login(params:facebook_login_Params, callback?: (ret:JSON) => void):void

	/** 应用登出，模块会清空当前 app 内保存的 token 等信息*/ 
	logout():void

	/**
	 * `获取用户信息`
	 * ========params==========
	 *
	 * `parameters` :JSON : （可选项）请求权限，不传则取默认值。
	 */
	getUserInfo(params:facebook_getUserInfo_Params, callback?: (ret:JSON) => void):void

	/** 获取当前 app 内的 token*/ 
	getCurrentToken():void

	/** 刷新当前 app 内的 token*/ 
	refreshToken():void

	/**
	 * `向 facebook 分享链接`
	 * ========params==========
	 *
	 * `url` :string : 要分享的链接
	 *
	 * `imgUrl` :string : （可选项）在帖子中显示的缩略图的网址，**本参数在iOS端已废弃**
	 *
	 * `description` :string : （可选项）内容的描述，通常为 2-4 个句子，**本参数在iOS端已废弃**
	 *
	 * `title` :string : （可选项）表示链接中的内容的标题，**本参数在iOS端已废弃**
	 *
	 * `quote` :string : （可选项）引用
	 */
	shareLinked(params:facebook_shareLinked_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向 facebook 分享本地图片，照片大小必须小于 12MB`
	 * ========params==========
	 *
	 * `path` :string : 要分享的图片地址
	 *
	 * `caption` :string : 图片的标题
	 */
	shareImage(params:facebook_shareImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向 facebook 分享本地视频，视频大小必须小于 12MB`
	 * ========params==========
	 *
	 * `image` :JSON : 分享的视频的预览图信息
	 *
	 * `url` :string : 要分享的视频地址，注意：在 iOS 平台上必须是系统相册路径（UIMediaScanner获取的视频地址路径，不可用transPath转换）
	 */
	shareVideo(params:facebook_shareVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `向 facebook 分享多媒体`
	 * ========params==========
	 *
	 * `images` :Array<JSON> : 分享的图片信息组成的数组
	 *
	 * `videoUrls` :Array<JSON> : 要分享的视频地址组成的数组，注意：在 iOS 平台上必须是系统相册路径（UIMediaScanner获取的视频地址路径，不可用transPath转换）
	 */
	shareMedia(params:facebook_shareMedia_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加自定义事件，用于统计分析事件`
	 * ========params==========
	 *
	 * `eventName` :string : (必选项)事件名称
	 */
	addEvent(params:facebook_addEvent_Params):void

}
interface facebook_login_Params {
	/**（可选项）开发者在 facebook 开放平台申请的应用 ID，若不传则模块从当前 widget 包内的 config.xml 文件内读取，若 config.xml 文件内未配置则模块报错*/ 
	appId?:string,

	/**（可选项）向用户申请访问 facebook 的权限，如：(public_profile,email,user_birthday,user_likes)，取值范围参考[权限参考文件](https://developers.facebook.com/docs/facebook-login/permissions/)*/ 
	permissions?:Array<JSON>,

}

interface facebook_getUserInfo_Params {
	/**（可选项）请求权限，不传则取默认值。*/ 
	parameters?:JSON,

}

interface facebook_shareLinked_Params {
	/**要分享的链接*/ 
	url:string,

	/**（可选项）在帖子中显示的缩略图的网址，**本参数在iOS端已废弃***/ 
	imgUrl?:string,

	/**（可选项）内容的描述，通常为 2-4 个句子，**本参数在iOS端已废弃***/ 
	description?:string,

	/**（可选项）表示链接中的内容的标题，**本参数在iOS端已废弃***/ 
	title?:string,

	/**（可选项）引用*/ 
	quote?:string,

}

interface facebook_shareImage_Params {
	/**要分享的图片地址*/ 
	path:string,

	/**图片的标题*/ 
	caption:string,

}

interface facebook_shareVideo_Params {
	/**分享的视频的预览图信息*/ 
	image:JSON,

	/**要分享的视频地址，注意：在 iOS 平台上必须是系统相册路径（UIMediaScanner获取的视频地址路径，不可用transPath转换）*/ 
	url:string,

}

interface facebook_shareMedia_Params {
	/**分享的图片信息组成的数组*/ 
	images:Array<JSON>,

	/**要分享的视频地址组成的数组，注意：在 iOS 平台上必须是系统相册路径（UIMediaScanner获取的视频地址路径，不可用transPath转换）*/ 
	videoUrls:Array<JSON>,

}

interface facebook_addEvent_Params {
	/**(必选项)事件名称*/ 
	eventName:string,

}

interface tencentAd {
	/**
	 * `显示开屏广告`
	 * ========params==========
	 *
	 * `adId` :string : 广告代码位id
	 */
	showSplashAd(params:tencentAd_showSplashAd_Params, callback?: (ret:JSON) => void):void

	/**
	 * `显示横幅广告`
	 * ========params==========
	 *
	 * `adId` :string : 广告代码位id
	 *
	 * `rect ` :JSON : 位置及尺寸
	 */
	showBannerAd(params:tencentAd_showBannerAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭已打开的横幅广告*/ 
	closeBannerAd(callback?: (ret:JSON) => void):void

	/**
	 * `显示插屏广告`
	 * ========params==========
	 *
	 * `adId` :string : 广告代码位id
	 */
	showInsertAd(params:tencentAd_showInsertAd_Params, callback?: (ret:JSON) => void):void

	/** 关闭插屏广告*/ 
	closeInsertAd(callback?: (ret:JSON) => void):void

	/**
	 * `显示激励视频`
	 * ========params==========
	 *
	 * `adId` :string : 广告代码位id
	 */
	showRewardVideoAd(params:tencentAd_showRewardVideoAd_Params, callback?: (ret:JSON) => void):void

}
interface tencentAd_showSplashAd_Params {
	/**广告代码位id*/ 
	adId:string,

}

interface tencentAd_showBannerAd_Params {
	/**广告代码位id*/ 
	adId:string,

	/**位置及尺寸*/ 
	rect :JSON,

}

interface tencentAd_showInsertAd_Params {
	/**广告代码位id*/ 
	adId:string,

}

interface tencentAd_showRewardVideoAd_Params {
	/**广告代码位id*/ 
	adId:string,

}

interface haierFaceId {
	/** SDK网络授权*/ 
	auth(callback?: (ret:JSON) => void):void

}
interface hanvonCloudBcardReader {
	/**
	 * `识别名片`
	 * ========params==========
	 *
	 * `androidkey` :string : 在汉王云官网申请的android key
	 *
	 * `iOSkey` :string : 在汉王云官网申请的iOS key
	 *
	 * `lang` :string : （可选项）名片是语言，可为auto（多语言带坐标）、chns（中文简体）、chnt（中文繁体）、en（英文）
	 *
	 * `picpath` :string : 名片的存放路径，要求本地路径（fs://）
	 */
	recognitionBcard(params:hanvonCloudBcardReader_recognitionBcard_Params, callback?: (ret:JSON) => void):void

}
interface hanvonCloudBcardReader_recognitionBcard_Params {
	/**在汉王云官网申请的android key*/ 
	androidkey:string,

	/**在汉王云官网申请的iOS key*/ 
	iOSkey:string,

	/**（可选项）名片是语言，可为auto（多语言带坐标）、chns（中文简体）、chnt（中文繁体）、en（英文）*/ 
	lang?:string,

	/**名片的存放路径，要求本地路径（fs://）*/ 
	picpath:string,

}

interface uscSpeechRecognizer {
}
interface gt3geetest {
}
interface jchat {
	/**
	 * `注册`
	 * ========params==========
	 *
	 * `username` :string : 用户名用户名. 长度 4~128 位.
	 *
	 * `password` :string : 密码，长度 4~128 位
	 *
	 * `userInfo` :JSON : （可选项）用户个人信息；详情参考附录：用户个人信息
	 */
	register(params:jchat_register_Params, callback?: (ret:JSON) => void):void

	/**
	 * `登录接口`
	 * ========params==========
	 *
	 * `username` :string : 用户名
	 *
	 * `password` :string : 密码
	 */
	login(params:jchat_login_Params, callback?: (ret:JSON) => void):void

	/** 退出登录*/ 
	logout(callback?: (ret:JSON) => void):void

	/**
	 * `批量获取用户信息（仅IOS支持）`
	 * ========params==========
	 *
	 * `usernames` :Array : 用户名集合
	 */
	getUserInfos(params:jchat_getUserInfos_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取用户信息（仅Android支持）`
	 * ========params==========
	 *
	 * `userName` :string : 用户名
	 *
	 * `appKey` :string : 指定的appKey
	 */
	getUserInfo(params:jchat_getUserInfo_Params, callback?: (ret:JSON) => void):void

	/** 获取已登陆用户信息*/ 
	getMyInfo():void

	/**
	 * `更新用户信息`
	 * ========params==========
	 *
	 * `userInfo` :JSON : 用户个人信息；详情参考附录：用户个人信息
	 *
	 * `updateType` :string : （可选项）（仅android支持）更新哪个字段
	 */
	updateMyInfo(params:jchat_updateMyInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新密码`
	 * ========params==========
	 *
	 * `newPassword` :any : 用户新的密码
	 *
	 * `oldPassword` :any : 用户旧的密码
	 */
	updatePassword(params:jchat_updatePassword_Params, callback?: (ret:JSON) => void):void

	/** 更改头像（仅android支持）*/ 
	updateAvatar(callback?: (ret:JSON) => void):void

	/** 获取头像缩略图（仅ios支持）*/ 
	getThumbAvatar(callback?: (ret:JSON) => void):void

	/** 获取头像大图（仅ios支持）*/ 
	getLargeAvatar(callback?: (ret:JSON) => void):void

	/**
	 * `获取用户展示名，展示优先级：备注名(noteName) -> 昵称(nickname) -> 用户名(username)（仅ios支持）`
	 * ========params==========
	 *
	 * `uid` :number : （可选项）用户的本地uid，不传获取自己的展示名
	 */
	getDisplayName(params:jchat_getDisplayName_Params, callback?: (ret:JSON) => void):void

	/**
	 * `改好友的备注名`
	 * ========params==========
	 *
	 * `noteName` :any : 备注名
	 *
	 * `uid` :number : 好友的本地uid
	 */
	updateNoteName(params:jchat_updateNoteName_Params, callback?: (ret:JSON) => void):void

	/**
	 * `修改好友的备注信息`
	 * ========params==========
	 *
	 * `noteText` :any : 备注信息
	 *
	 * `uid` :number : 好友的本地uid
	 */
	updateNoteText(params:jchat_updateNoteText_Params, callback?: (ret:JSON) => void):void

	/** 账号事件的监听*/ 
	addAccountListener():void

	/**
	 * `发送文本消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `text` :string : 发送的消息
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数
	 */
	sendText(params:jchat_sendText_Params):void

	/**
	 * `发送图片消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `path` :string : 要发送的图片的路径，要求本地路径（fs://、widget://）
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数
	 */
	sendImage(params:jchat_sendImage_Params):void

	/**
	 * `发送位置消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `address` :string : 详细地址信息
	 *
	 * `latitude` :number : 纬度
	 *
	 * `longitude` :number : 经度
	 *
	 * `scale` :number : 缩放比例
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数
	 */
	sendLocation(params:jchat_sendLocation_Params):void

	/**
	 * `发送声音消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `path` :string : 要发送的音频的路径，要求本地路径（fs://、widget://）
	 *
	 * `length` :number : 录音时间(秒)
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数
	 */
	sendVoice(params:jchat_sendVoice_Params):void

	/**
	 * `发送视频消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `path` :string : 要发送的视频的路径，要求本地路径（fs://、widget://）
	 *
	 * `length` :number : 录视频时间长度(秒)
	 *
	 * `thumbPath` :string : 视频预览图路径，要求本地路径（fs://、widget://）
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （仅ios有效）扩展信息
	 */
	sendVideo(params:jchat_sendVideo_Params):void

	/**
	 * `发送文件消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `path` :string : 要发送的文件的路径，要求本地路径（fs://、widget://）(android只支持fs)
	 *
	 * `fileName` :string : 文件名字
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `ext` :JSON : （可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数
	 */
	sendFile(params:jchat_sendFile_Params):void

	/**
	 * `发送自定义消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 要发送消息的会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要发送消息的会话类型
	 *
	 * `userName` :string : 好友username，单聊会话时有效（仅android有效）
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息
	 *
	 * `text` :string : 用于展示在会话列表, 文本地简要描述这条消息（仅ios支持）
	 *
	 * `customDict` :any : 自定义消息内容
	 *
	 * `ext` :JSON : 扩展信息（仅ios支持）
	 */
	sendCustomContent(params:jchat_sendCustomContent_Params):void

	/**
	 * `发送@消息（只支持群组）`
	 * ========params==========
	 *
	 * `androidId` :number : 群组id，android端在发送群组消息时有效（仅android有效）
	 *
	 * `gid` :string : 群组ID（仅ios有效）
	 *
	 * `atList` :Array : （可选项）要@的人的数组，不填写@所有人
	 *
	 * `text` :string : 消息内容
	 *
	 * `ext` :JSON : 扩展信息（仅ios支持）
	 */
	sendAtMessage(params:jchat_sendAtMessage_Params):void

	/**
	 * `消息转发(只能转发消息状态为 SendSucceed 和 ReceiveSucceed 的消息，只支持单聊)`
	 * ========params==========
	 *
	 * `conversationId` :string : 要转发消息的会话的 id
	 *
	 * `uid` :number : 转发的接收用户的本地uid
	 *
	 * `messageId` :string : 本地消息ID
	 *
	 * `androidMessageId` :number : 被转发的本地消息id（android有效）
	 *
	 * `fromUserName` :string : 需要转发信息的好友username，单聊会话时需要，与fromAndroidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `fromAndroidId` :number : 需要转发信息的群组会话id，端在发送群组消息时需要，与fromUserName必须存在一个，同时存在时fromUserName优先级高（仅android有效）
	 *
	 * `fromUserAppKey` :string : （可选项）被转发信息所在聊天的appkey,不传则默认是本应用（仅android有效）
	 *
	 * `toUserName` :string : 转发目标好友username，单聊会话时需要，与toAndroidId必须存在一个，同时存在时此参数优先级高（仅android有效）
	 *
	 * `toAndroidId` :number : 目标群组会话id，端在发送群组消息时需要，与toUserName必须存在一个，同时存在时toUserName优先级高（仅android有效）
	 *
	 * `toUserAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息（仅android有效）
	 */
	forwardMessage(params:jchat_forwardMessage_Params):void

	/**
	 * `消息撤回（可撤回3分钟内的消息）`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（仅ios有效）
	 *
	 * `messageId` :string : 本地消息ID(仅ios有效)
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `androidMessageId` :number : 本地消息id（android有效）
	 *
	 * `userName` :string : 信息的好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 *
	 * `userAppKey` :string : （可选项）信息所在聊天的appkey,不传则默认是本应用（仅android有效）
	 */
	retractMessage(params:jchat_retractMessage_Params, callback?: (ret:JSON) => void):void

	/** 添加消息相关监听*/ 
	addMessageListener(callback?: (ret:JSON) => void):void

	/**
	 * `下载附件(仅ios支持)`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id
	 *
	 * `messageId` :string : 本地消息ID
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `attachmentType` :string : （可选项）附件类型
	 */
	downloadAttachment(params:jchat_downloadAttachment_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取会话`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（仅ios有效）
	 *
	 * `chatType` :string : （可选项）消息的会话类型
	 *
	 * `userName` :string : 信息的好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 *
	 * `userAppKey` :string : （可选项）信息所在聊天的appkey,不传则默认是本应用（仅android有效）
	 */
	getConversation(params:jchat_getConversation_Params, callback?: (ret:JSON) => void):void

	/** 获取会话列表*/ 
	getAllConversations(callback?: (ret:JSON) => void):void

	/**
	 * `创建会话`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于创建跨应用单聊会话
	 *
	 * `userName` :string : 好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 */
	createConversation(params:jchat_createConversation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除会话`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话
	 *
	 * `userName` :string : 好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 */
	deleteConversation(params:jchat_deleteConversation_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取所有消息记录`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（仅ios支持）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `offset	` :number : （可选项）开始的位置（填写-1代表从最初开始）
	 *
	 * `limit	` :number : （可选项）获取的数量（填写-1代表不限）
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话
	 *
	 * `userName` :string : 好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 */
	getAllMessages(params:jchat_getAllMessages_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除全部消息`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话（仅android有效）
	 *
	 * `userName` :string : 好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 */
	deleteAllMessages(params:jchat_deleteAllMessages_Params, callback?: (ret:JSON) => void):void

	/**
	 * `清除会话未读数`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话（仅android有效）
	 *
	 * `userName` :string : 好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）
	 *
	 * `androidId` :number : 信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）
	 */
	clearUnreadCount(params:jchat_clearUnreadCount_Params):void

	/** 所有会话的未读消息的总数*/ 
	getAllUnreadCount():void

	/**
	 * `从服务器端刷新会话信息（仅ios支持）`
	 * ========params==========
	 *
	 * `conversationId` :string : 会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）
	 *
	 * `chatType` :string : （可选项）要转发消息的会话类型
	 */
	refreshTargetInfoFromServer(params:jchat_refreshTargetInfoFromServer_Params, callback?: (ret:JSON) => void):void

	/** 添加会话相关监听*/ 
	addConversationListener():void

	/**
	 * `创建群组`
	 * ========params==========
	 *
	 * `groupInfo` :JSON : null
	 *
	 * `invitees` :Array : 群组成员
	 *
	 * `userAppKey` :string : （可选项）群组成员所在应用appkey,不传则默认是本应用，（仅android有效）
	 */
	createGroup(params:jchat_createGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `更新群组信息`
	 * ========params==========
	 *
	 * `groupInfo` :JSON : null
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 */
	updateGroupInfo(params:jchat_updateGroupInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取群组信息`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 */
	getGroupInfo(params:jchat_getGroupInfo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加群组成员`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 *
	 * `usernameArray` :Array : 用户名数组
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于添加群组跨应用成员
	 *
	 * `reason` :string : （可选项）邀请原因
	 */
	addMembers(params:jchat_addMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除群组成员`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id(仅ios有效)
	 *
	 * `usernameArray` :Array : 用户名数组
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于删除群组跨应用成员
	 */
	removeMembers(params:jchat_removeMembers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `申请入群`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id(仅ios有效)
	 *
	 * `reason` :string : （可选项）申请原因
	 */
	applyJoinGroupWithGid(params:jchat_applyJoinGroupWithGid_Params, callback?: (ret:JSON) => void):void

	/**
	 * `管理员审批入群申请`
	 * ========params==========
	 *
	 * `userName` :string : 申请入群组用户的username，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 *
	 * `eventId` :string : 入取申请事件的 id（仅ios有效）
	 *
	 * `androidEventId` :number : 入取申请事件的 id（仅android有效）
	 *
	 * `joinUser` :number : 入群的用户的uid（仅ios有效）
	 *
	 * `applyUser` :number : 发起申请的的用户的uid，如果是主动申请入群则和 member 是相同的（仅ios有效）
	 *
	 * `isAgree` :boolean : （可选项）是否同意申请
	 *
	 * `appkey` :string : 被同意入群者的appKey（仅android支持）
	 *
	 * `reason` :string : （可选项）拒绝理由
	 */
	applyJoinGroup(params:jchat_applyJoinGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `移交群主`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 *
	 * `username` :string : 新群主用户名
	 *
	 * `appkey` :string : （可选项）新群主用户 AppKey，不填则默认为本应用 AppKey
	 */
	transferGroupOwner(params:jchat_transferGroupOwner_Params, callback?: (ret:JSON) => void):void

	/**
	 * `群成员禁言设置`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 *
	 * `isSilence` :boolean : （可选项）是否禁言
	 *
	 * `username` :string : 带设置的用户的 username
	 *
	 * `appkey` :string : （可选项）新群主用户 AppKey，不填则默认为本应用 AppKey
	 */
	setGroupMemberSilence(params:jchat_setGroupMemberSilence_Params, callback?: (ret:JSON) => void):void

	/**
	 * `获取禁言列表`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 */
	getGroupSilenceMembers(params:jchat_getGroupSilenceMembers_Params, callback?: (ret:JSON) => void):void

	/** 获取我的群组列表*/ 
	getMyGroupArray(callback?: (ret:JSON) => void):void

	/**
	 * `获取群组成员列表`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 */
	getMemberInfoList(params:jchat_getMemberInfoList_Params, callback?: (ret:JSON) => void):void

	/**
	 * `退出群组`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 */
	leaveGroup(params:jchat_leaveGroup_Params, callback?: (ret:JSON) => void):void

	/**
	 * `解散群组`
	 * ========params==========
	 *
	 * `androidId` :number : 信息的群组会话id，（仅android有效）
	 *
	 * `gid` :string : 群组 id（仅ios有效）
	 */
	destroyGroup(params:jchat_destroyGroup_Params, callback?: (ret:JSON) => void):void

	/** 获取已加入的聊天室*/ 
	getChatRoomList():void

	/**
	 * `加入聊天室`
	 * ========params==========
	 *
	 * `androidRoomId` :number : 聊天室 id(仅android有效)
	 *
	 * `roomId` :string : 聊天室 id（仅ios有效）
	 */
	enterChatRoom(params:jchat_enterChatRoom_Params, callback?: (ret:JSON) => void):void

	/**
	 * `退出聊天室`
	 * ========params==========
	 *
	 * `androidRoomId` :number : 聊天室 id(仅android有效)
	 *
	 * `roomId` :string : 聊天室 id（仅ios有效）
	 */
	leaveChatRoom(params:jchat_leaveChatRoom_Params, callback?: (ret:JSON) => void):void

	/** 添加群组相关监听*/ 
	addGroupListener():void

	/** 获取好友列表*/ 
	getFriendList():void

	/**
	 * `删除好友`
	 * ========params==========
	 *
	 * `name` :string : （可选项）对方所在应用appkey,不传则默认是本应用
	 */
	removeFriend(params:jchat_removeFriend_Params, callback?: (ret:JSON) => void):void

	/**
	 * `添加黑名单`
	 * ========params==========
	 *
	 * `names` :Array : 黑名单数组
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于跨应用添加黑名单
	 */
	addUsersToBlacklist(params:jchat_addUsersToBlacklist_Params, callback?: (ret:JSON) => void):void

	/**
	 * `删除黑名单`
	 * ========params==========
	 *
	 * `names` :Array : 黑名单数组
	 *
	 * `userAppKey` :string : （可选项）对方所在应用appkey,不传则默认是本应用，用于跨应用删除黑名单
	 */
	delUsersFromBlacklist(params:jchat_delUsersFromBlacklist_Params, callback?: (ret:JSON) => void):void

	/** 添加好友相关监听（加好友、删除好友、好友更新等事件）*/ 
	addFriendListener():void

	/** 添加消息撤回事件监听*/ 
	addMessageRetractListener():void

	/** 添加消息回执状态变更事件监听*/ 
	addMessageReceiptListener():void

	/** 添加消息透传事件监听*/ 
	addMessageTransparentListener():void

	/**
	 * `设置角标(到服务器)（仅ios支持）`
	 * ========params==========
	 *
	 * `count` :number : （可选项）角标值
	 */
	setBadge(params:jchat_setBadge_Params, callback?: (ret:JSON) => void):void

	/** 重置角标(到服务器)（仅ios支持）*/ 
	resetBadge():void

	/** 初始化音视频聊天*/ 
	initCall(callback?: (ret:JSON) => void):void

	/** 设置音视频监听*/ 
	addCallListener():void

	/**
	 * `发起音视频聊天`
	 * ========params==========
	 *
	 * `usernames` :Array : 邀请的用户列表
	 *
	 * `type` :number : （可选项）聊天类型
	 */
	makeCall(params:jchat_makeCall_Params, callback?: (ret:JSON) => void):void

	/** 接听音视频聊天*/ 
	acceptCall(callback?: (ret:JSON) => void):void

	/** 拒绝音视频聊天(仅android支持)*/ 
	refuseCall(callback?: (ret:JSON) => void):void

	/** 挂断音视频聊天*/ 
	hangupCall(callback?: (ret:JSON) => void):void

	/**
	 * `邀请用户加入当前通话`
	 * ========params==========
	 *
	 * `usernames` :Array : 邀请的用户列表
	 */
	inviteUsers(params:jchat_inviteUsers_Params, callback?: (ret:JSON) => void):void

	/**
	 * `设置视频通话中某个用户的显示 View（仅ios支持）`
	 * ========params==========
	 *
	 * `uid` :number : （可选项）用户的uid
	 *
	 * `rect` :string : (可选项）view坐标
	 *
	 * `fixedOn` :string : （可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)
	 *
	 * `fixed` :boolean : （可选项）模块是否随所属 window 或 frame 滚动
	 */
	setVideoView(params:jchat_setVideoView_Params, callback?: (ret:JSON) => void):void

	/** 设置扬声器状态（只在视频或语音通话连接建立之后调用有效）*/ 
	setSpeakerEnabled():void

	/**
	 * `设置视频流状态（该方法不影响本地视频流获取，没有禁用摄像头，只是暂停发送本地视频流，只在视频通话连接建立之后调用有效。）`
	 * ========params==========
	 *
	 * `isMuted` :boolean : （可选项）开启/关闭，音频通话默:false，视频通话默认: true
	 */
	setVideoStreamEnabled(params:jchat_setVideoStreamEnabled_Params, callback?: (ret:JSON) => void):void

	/** 切换摄像头*/ 
	switchCameraMode():void

}
interface jchat_register_Params {
	/**用户名用户名. 长度 4~128 位.*/ 
	username:string,

	/**密码，长度 4~128 位*/ 
	password:string,

	/**（可选项）用户个人信息；详情参考附录：用户个人信息*/ 
	userInfo?:JSON,

}

interface jchat_login_Params {
	/**用户名*/ 
	username:string,

	/**密码*/ 
	password:string,

}

interface jchat_getUserInfos_Params {
	/**用户名集合*/ 
	usernames:Array,

}

interface jchat_getUserInfo_Params {
	/**用户名*/ 
	userName:string,

	/**指定的appKey*/ 
	appKey:string,

}

interface jchat_updateMyInfo_Params {
	/**用户个人信息；详情参考附录：用户个人信息*/ 
	userInfo:JSON,

	/**（可选项）（仅android支持）更新哪个字段*/ 
	updateType?:string,

}

interface jchat_updatePassword_Params {
	/**用户新的密码*/ 
	newPassword:any,

	/**用户旧的密码*/ 
	oldPassword:any,

}

interface jchat_getDisplayName_Params {
	/**（可选项）用户的本地uid，不传获取自己的展示名*/ 
	uid?:number,

}

interface jchat_updateNoteName_Params {
	/**备注名*/ 
	noteName:any,

	/**好友的本地uid*/ 
	uid:number,

}

interface jchat_updateNoteText_Params {
	/**备注信息*/ 
	noteText:any,

	/**好友的本地uid*/ 
	uid:number,

}

interface jchat_sendText_Params {
	/**要发送消息的会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**发送的消息*/ 
	text:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数*/ 
	ext?:JSON,

}

interface jchat_sendImage_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**要发送的图片的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数*/ 
	ext?:JSON,

}

interface jchat_sendLocation_Params {
	/**要发送消息的会话的 id*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**详细地址信息*/ 
	address:string,

	/**纬度*/ 
	latitude:number,

	/**经度*/ 
	longitude:number,

	/**缩放比例*/ 
	scale:number,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数*/ 
	ext?:JSON,

}

interface jchat_sendVoice_Params {
	/**要发送消息的会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**要发送的音频的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**录音时间(秒)*/ 
	length:number,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数*/ 
	ext?:JSON,

}

interface jchat_sendVideo_Params {
	/**要发送消息的会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**要发送的视频的路径，要求本地路径（fs://、widget://）*/ 
	path:string,

	/**录视频时间长度(秒)*/ 
	length:number,

	/**视频预览图路径，要求本地路径（fs://、widget://）*/ 
	thumbPath:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（仅ios有效）扩展信息*/ 
	ext:JSON,

}

interface jchat_sendFile_Params {
	/**要发送消息的会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**要发送的文件的路径，要求本地路径（fs://、widget://）(android只支持fs)*/ 
	path:string,

	/**文件名字*/ 
	fileName:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**（可选项）（仅ios支持）扩展信息，自定义推送扩展，如：{"em_apns_ext":{"extern":"自定义推送扩展"}}，跨应用单聊消息不支持此参数*/ 
	ext?:JSON,

}

interface jchat_sendCustomContent_Params {
	/**要发送消息的会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要发送消息的会话类型*/ 
	chatType?:string,

	/**好友username，单聊会话时有效（仅android有效）*/ 
	userName:string,

	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息*/ 
	userAppKey?:string,

	/**用于展示在会话列表, 文本地简要描述这条消息（仅ios支持）*/ 
	text:string,

	/**自定义消息内容*/ 
	customDict:any,

	/**扩展信息（仅ios支持）*/ 
	ext:JSON,

}

interface jchat_sendAtMessage_Params {
	/**群组id，android端在发送群组消息时有效（仅android有效）*/ 
	androidId:number,

	/**群组ID（仅ios有效）*/ 
	gid:string,

	/**（可选项）要@的人的数组，不填写@所有人*/ 
	atList?:Array,

	/**消息内容*/ 
	text:string,

	/**扩展信息（仅ios支持）*/ 
	ext:JSON,

}

interface jchat_forwardMessage_Params {
	/**要转发消息的会话的 id*/ 
	conversationId:string,

	/**转发的接收用户的本地uid*/ 
	uid:number,

	/**本地消息ID*/ 
	messageId:string,

	/**被转发的本地消息id（android有效）*/ 
	androidMessageId:number,

	/**需要转发信息的好友username，单聊会话时需要，与fromAndroidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	fromUserName:string,

	/**需要转发信息的群组会话id，端在发送群组消息时需要，与fromUserName必须存在一个，同时存在时fromUserName优先级高（仅android有效）*/ 
	fromAndroidId:number,

	/**（可选项）被转发信息所在聊天的appkey,不传则默认是本应用（仅android有效）*/ 
	fromUserAppKey?:string,

	/**转发目标好友username，单聊会话时需要，与toAndroidId必须存在一个，同时存在时此参数优先级高（仅android有效）*/ 
	toUserName:string,

	/**目标群组会话id，端在发送群组消息时需要，与toUserName必须存在一个，同时存在时toUserName优先级高（仅android有效）*/ 
	toAndroidId:number,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于发送跨应用单聊消息（仅android有效）*/ 
	toUserAppKey?:string,

}

interface jchat_retractMessage_Params {
	/**会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**本地消息ID(仅ios有效)*/ 
	messageId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**本地消息id（android有效）*/ 
	androidMessageId:number,

	/**信息的好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

	/**（可选项）信息所在聊天的appkey,不传则默认是本应用（仅android有效）*/ 
	userAppKey?:string,

}

interface jchat_downloadAttachment_Params {
	/**会话的 id*/ 
	conversationId:string,

	/**本地消息ID*/ 
	messageId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）附件类型*/ 
	attachmentType?:string,

}

interface jchat_getConversation_Params {
	/**会话的 id（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）消息的会话类型*/ 
	chatType?:string,

	/**信息的好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

	/**（可选项）信息所在聊天的appkey,不传则默认是本应用（仅android有效）*/ 
	userAppKey?:string,

}

interface jchat_createConversation_Params {
	/**会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于创建跨应用单聊会话*/ 
	userAppKey?:string,

	/**好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

}

interface jchat_deleteConversation_Params {
	/**会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话*/ 
	userAppKey?:string,

	/**好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

}

interface jchat_getAllMessages_Params {
	/**会话的 id（仅ios支持）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）开始的位置（填写-1代表从最初开始）*/ 
	offset	?:number,

	/**（可选项）获取的数量（填写-1代表不限）*/ 
	limit	?:number,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话*/ 
	userAppKey?:string,

	/**好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

}

interface jchat_deleteAllMessages_Params {
	/**会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话（仅android有效）*/ 
	userAppKey?:string,

	/**好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

}

interface jchat_clearUnreadCount_Params {
	/**会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）（仅ios有效）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于删除跨应用单聊会话（仅android有效）*/ 
	userAppKey?:string,

	/**好友username，单聊会话时需要，与androidId参数必须存在一个，同时存在此参数优先级高（仅android有效）*/ 
	userName:string,

	/**信息的群组会话id，群组消息时需要，与userName必须存在一个，同时存在时userName优先级高（仅android有效）*/ 
	androidId:number,

}

interface jchat_refreshTargetInfoFromServer_Params {
	/**会话的 id（单聊对象 username、群聊群组ID。由创建群组时返回、聊天室 ID）*/ 
	conversationId:string,

	/**（可选项）要转发消息的会话类型*/ 
	chatType?:string,

}

interface jchat_createGroup_Params {
	/**null*/ 
	groupInfo:JSON,

	/**群组成员*/ 
	invitees:Array,

	/**（可选项）群组成员所在应用appkey,不传则默认是本应用，（仅android有效）*/ 
	userAppKey?:string,

}

interface jchat_updateGroupInfo_Params {
	/**null*/ 
	groupInfo:JSON,

	/**群组 id（仅ios有效）*/ 
	gid:string,

	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

}

interface jchat_getGroupInfo_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

}

interface jchat_addMembers_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

	/**用户名数组*/ 
	usernameArray:Array,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于添加群组跨应用成员*/ 
	userAppKey?:string,

	/**（可选项）邀请原因*/ 
	reason?:string,

}

interface jchat_removeMembers_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id(仅ios有效)*/ 
	gid:string,

	/**用户名数组*/ 
	usernameArray:Array,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于删除群组跨应用成员*/ 
	userAppKey?:string,

}

interface jchat_applyJoinGroupWithGid_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id(仅ios有效)*/ 
	gid:string,

	/**（可选项）申请原因*/ 
	reason?:string,

}

interface jchat_applyJoinGroup_Params {
	/**申请入群组用户的username，（仅android有效）*/ 
	userName:string,

	/**群组 id（仅ios有效）*/ 
	gid:string,

	/**入取申请事件的 id（仅ios有效）*/ 
	eventId:string,

	/**入取申请事件的 id（仅android有效）*/ 
	androidEventId:number,

	/**入群的用户的uid（仅ios有效）*/ 
	joinUser:number,

	/**发起申请的的用户的uid，如果是主动申请入群则和 member 是相同的（仅ios有效）*/ 
	applyUser:number,

	/**（可选项）是否同意申请*/ 
	isAgree?:boolean,

	/**被同意入群者的appKey（仅android支持）*/ 
	appkey:string,

	/**（可选项）拒绝理由*/ 
	reason?:string,

}

interface jchat_transferGroupOwner_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

	/**新群主用户名*/ 
	username:string,

	/**（可选项）新群主用户 AppKey，不填则默认为本应用 AppKey*/ 
	appkey?:string,

}

interface jchat_setGroupMemberSilence_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

	/**（可选项）是否禁言*/ 
	isSilence?:boolean,

	/**带设置的用户的 username*/ 
	username:string,

	/**（可选项）新群主用户 AppKey，不填则默认为本应用 AppKey*/ 
	appkey?:string,

}

interface jchat_getGroupSilenceMembers_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

}

interface jchat_getMemberInfoList_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

}

interface jchat_leaveGroup_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

}

interface jchat_destroyGroup_Params {
	/**信息的群组会话id，（仅android有效）*/ 
	androidId:number,

	/**群组 id（仅ios有效）*/ 
	gid:string,

}

interface jchat_enterChatRoom_Params {
	/**聊天室 id(仅android有效)*/ 
	androidRoomId:number,

	/**聊天室 id（仅ios有效）*/ 
	roomId:string,

}

interface jchat_leaveChatRoom_Params {
	/**聊天室 id(仅android有效)*/ 
	androidRoomId:number,

	/**聊天室 id（仅ios有效）*/ 
	roomId:string,

}

interface jchat_removeFriend_Params {
	/**（可选项）对方所在应用appkey,不传则默认是本应用*/ 
	name?:string,

}

interface jchat_addUsersToBlacklist_Params {
	/**黑名单数组*/ 
	names:Array,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于跨应用添加黑名单*/ 
	userAppKey?:string,

}

interface jchat_delUsersFromBlacklist_Params {
	/**黑名单数组*/ 
	names:Array,

	/**（可选项）对方所在应用appkey,不传则默认是本应用，用于跨应用删除黑名单*/ 
	userAppKey?:string,

}

interface jchat_setBadge_Params {
	/**（可选项）角标值*/ 
	count?:number,

}

interface jchat_makeCall_Params {
	/**邀请的用户列表*/ 
	usernames:Array,

	/**（可选项）聊天类型*/ 
	type?:number,

}

interface jchat_inviteUsers_Params {
	/**邀请的用户列表*/ 
	usernames:Array,

}

interface jchat_setVideoView_Params {
	/**（可选项）用户的uid*/ 
	uid?:number,

	/**(可选项）view坐标*/ 
	rect?:string,

	/**（可选项）模块视图添加到指定 frame 的名字（ios：只指 frame，传 window 无效）(android可以是frame或者Window，但是在全屏的时候，需要挂在Window上或者frame是全屏)*/ 
	fixedOn?:string,

	/**（可选项）模块是否随所属 window 或 frame 滚动*/ 
	fixed?:boolean,

}

interface jchat_setVideoStreamEnabled_Params {
	/**（可选项）开启/关闭，音频通话默:false，视频通话默认: true*/ 
	isMuted?:boolean,

}

interface Twitter {
	/** 登录授权*/ 
	login(callback?: (ret:JSON) => void):void

	/** 登出*/ 
	logout():void

	/**
	 * `分享图文内容，android可分享视频`
	 * ========params==========
	 *
	 * `title` :string : （可选项）分享的文本，标题
	 *
	 * `image` :string : （可选项）分享的图片，要求本地路径（widget://、fs://）
	 *
	 * `url` :string : （可选项）分享的 url
	 */
	share(params:Twitter_share_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享图文，可轻量编辑（仅android支持）`
	 * ========params==========
	 *
	 * `title` :string : （可选项）分享的文本，标题
	 *
	 * `image` :string : （可选项）分享的图片，要求本地路径（widget://、fs://）
	 *
	 * `hashtags` :string : （可选项）预填充的hashtags
	 *
	 * `darkTheme` :boolean : （可选项）是否使用黑色主题
	 */
	shareWithEdit(params:Twitter_shareWithEdit_Params, callback?: (ret:JSON) => void):void

}
interface Twitter_share_Params {
	/**（可选项）分享的文本，标题*/ 
	title?:string,

	/**（可选项）分享的图片，要求本地路径（widget://、fs://）*/ 
	image?:string,

	/**（可选项）分享的 url*/ 
	url?:string,

}

interface Twitter_shareWithEdit_Params {
	/**（可选项）分享的文本，标题*/ 
	title?:string,

	/**（可选项）分享的图片，要求本地路径（widget://、fs://）*/ 
	image?:string,

	/**（可选项）预填充的hashtags*/ 
	hashtags?:string,

	/**（可选项）是否使用黑色主题*/ 
	darkTheme?:boolean,

}

interface QQPlus {
	/** 判断当前设备是否安装了 QQ 客户端*/ 
	installed():void

	/** 登陆qq*/ 
	login(callback?: (ret:JSON) => void):void

	/** 登出qq*/ 
	logout(callback?: (ret:JSON) => void):void

	/** 获取用户信息*/ 
	getUserInfo(callback?: (ret:JSON) => void):void

	/**
	 * `分享纯文本到手机 QQ（空间、群聊、讨论组、好友），**在 android 平台上此接口无回调，在 iOS 平台分享成功无回调**`
	 * ========params==========
	 *
	 * `text` :string : 要分享的文本
	 */
	shareText(params:QQPlus_shareText_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享单张本地图片到 QQ 空间或 QQ 好友、讨论组、群聊`
	 * ========params==========
	 *
	 * `type` :string : （可选项）分享内容到好友或空间
	 *
	 * `imgPath` :string : 要分享的图片路径，要求本地路径（widget://、fs://）
	 *
	 * `title` :string : （可选项）要分享的图片标题，本参数仅支持 iOS 平台
	 *
	 * `description` :string : （可选项）要分享的图片描述，本参数仅支持 iOS 平台
	 */
	shareImage(params:QQPlus_shareImage_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享新闻到 QQ 空间或 QQ 好友、讨论组、群聊`
	 * ========params==========
	 *
	 * `url` :string : 要分享的新闻链接地址
	 *
	 * `title` :string : 要分享的新闻标题
	 *
	 * `description` :string : 要分享的新闻描述(分享到空间无效)
	 *
	 * `imgUrl` :string : 要分享的新闻缩略图的url（网络/本地资源图片）Android平台只支持网络图片
	 *
	 * `type` :string : 分享内容到好友或空间
	 */
	shareNews(params:QQPlus_shareNews_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享音乐到QQ 空间或 QQ 好友、讨论组、群聊`
	 * ========params==========
	 *
	 * `audioUrl` :string : 要分享的音乐链接地址
	 *
	 * `targetUrl` :string : 点击跳转的网页地址，iOS 平台暂不支持本参数
	 *
	 * `title` :string : （可选项）要分享的标题
	 *
	 * `description` :string : （可选项）要分享的描述
	 *
	 * `imgUrl` :string : 要分享的音乐缩略图url（网络/本地资源图片）
	 *
	 * `type` :string : 分享内容到好友或空间
	 */
	shareMusic(params:QQPlus_shareMusic_Params, callback?: (ret:JSON) => void):void

	/**
	 * `分享本地视频到 QQ 空间`
	 * ========params==========
	 *
	 * `videoUrl` :string : 要分享的本地视频地址，在 android 平台上要求本地路径（widget://、fs://）。在 iOS 平台上要求系统相册内视频地址，可用 UIMediaScanner 模块获取（无需调用transPath接口转换）
	 */
	shareVideo(params:QQPlus_shareVideo_Params, callback?: (ret:JSON) => void):void

	/**
	 * `发表说说到 QQ 空间`
	 * ========params==========
	 *
	 * `summary` :string : （可选项）分享的说说的内容，注：当 imgUrls 有值时，summary 参数无效
	 *
	 * `imgUrls` :Array : （可选项）要分享的本地图片地址数组，要求本地路径（widget://、fs://），当本参数为空时，表示发表纯文本说说
	 */
	shareMood(params:QQPlus_shareMood_Params, callback?: (ret:JSON) => void):void

}
interface QQPlus_shareText_Params {
	/**要分享的文本*/ 
	text:string,

}

interface QQPlus_shareImage_Params {
	/**（可选项）分享内容到好友或空间*/ 
	type?:string,

	/**要分享的图片路径，要求本地路径（widget://、fs://）*/ 
	imgPath:string,

	/**（可选项）要分享的图片标题，本参数仅支持 iOS 平台*/ 
	title?:string,

	/**（可选项）要分享的图片描述，本参数仅支持 iOS 平台*/ 
	description?:string,

}

interface QQPlus_shareNews_Params {
	/**要分享的新闻链接地址*/ 
	url:string,

	/**要分享的新闻标题*/ 
	title:string,

	/**要分享的新闻描述(分享到空间无效)*/ 
	description:string,

	/**要分享的新闻缩略图的url（网络/本地资源图片）Android平台只支持网络图片*/ 
	imgUrl:string,

	/**分享内容到好友或空间*/ 
	type:string,

}

interface QQPlus_shareMusic_Params {
	/**要分享的音乐链接地址*/ 
	audioUrl:string,

	/**点击跳转的网页地址，iOS 平台暂不支持本参数*/ 
	targetUrl:string,

	/**（可选项）要分享的标题*/ 
	title?:string,

	/**（可选项）要分享的描述*/ 
	description?:string,

	/**要分享的音乐缩略图url（网络/本地资源图片）*/ 
	imgUrl:string,

	/**分享内容到好友或空间*/ 
	type:string,

}

interface QQPlus_shareVideo_Params {
	/**要分享的本地视频地址，在 android 平台上要求本地路径（widget://、fs://）。在 iOS 平台上要求系统相册内视频地址，可用 UIMediaScanner 模块获取（无需调用transPath接口转换）*/ 
	videoUrl:string,

}

interface QQPlus_shareMood_Params {
	/**（可选项）分享的说说的内容，注：当 imgUrls 有值时，summary 参数无效*/ 
	summary?:string,

	/**（可选项）要分享的本地图片地址数组，要求本地路径（widget://、fs://），当本参数为空时，表示发表纯文本说说*/ 
	imgUrls?:Array,

}

interface coinport {
}
interface wxPayPlus {
	/**
	 * `获取预支付订单号（适用于支付方案一）`
	 * ========params==========
	 *
	 * `info` :string : 订单信息（详见[统一下单-请求参数](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)）签名后的字符串。具体方法见微信支付[安全规范-签名算法](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2&index=2) 。**注意：微信官方建议本过程在服务器端执行**
	 */
	getOrderId(params:wxPayPlus_getOrderId_Params, callback?: (ret:JSON) => void):void

	/**
	 * `支付订单（适用于支付方案一）`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从微信开放平台获取的 appid，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取。
	 *
	 * `orderId` :string : getOrderId 获取的订单号 （prepay_id）
	 *
	 * `mchId` :string : 商家和微信合作的 id 号，审核通过后微信服务器会发送到商家邮箱
	 *
	 * `nonceStr` :string : 随机字符串，防重发
	 *
	 * `timeStamp` :string : 时间戳，防重发
	 *
	 * `package` :string : （可选项）扩展字段，暂填写固定值Sign=WXPay
	 *
	 * `sign` :string : 商家根据微信开放平台文档对数据做的签名，详见：[安全规范-签名算法](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)
	 */
	payOrder(params:wxPayPlus_payOrder_Params, callback?: (ret:JSON) => void):void

	/**
	 * `配置模块内部处理签名时需要的参数（适用于支付方案二）`
	 * ========params==========
	 *
	 * `apiKey` :string : （可选项）从微信开放平台获取的 appid，若不传则从当前 widget 的 [config.xml](/APICloud/技术专题/app-config-manual) 中读取。
	 *
	 * `mchId` :string : （可选项）商家和微信合作的 id 号，审核通过后微信服务器会发送到商家邮箱，若不传或者传空则从 `key.xml` 中读取
	 *
	 * `partnerKey` :string : （可选项）商户 API 密钥，务必同在商户平台->账户设置->API安全里填写的密钥保持一致，此密钥是根据微信对商户密钥的规范自己生成的，若不传或者传空则从 `key.xml` 中读取
	 *
	 * `notifyUrl` :string : （可选项）支付结果回调页面，若不传或者传空则从 `key.xml` 中读取
	 */
	config(params:wxPayPlus_config_Params, callback?: (ret:JSON) => void):void

	/**
	 * `支付订单（适用于支付方案二）`
	 * ========params==========
	 *
	 * `description` :string : 商品或支付订单简要描述
	 *
	 * `totalFee` :string : 订单总金额，只能为整数，单位：分（￥）
	 *
	 * `tradeNo` :string : 商户系统内部的订单号，32个字符以内，可包含字母，其他说明见[商户订单号](https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=4_2)
	 *
	 * `spbillCreateIP` :string : （可选项）APP 和网页支付提交用户端 IP，Native 支付填调用微信支付 API 的机器 IP
	 *
	 * `deviceInfo` :string : （可选项）终端设备号（门店号或收银设备 ID），注意：PC 网页或公众号内支付请传 "WEB"
	 *
	 * `detail` :string : （可选项）商品名称明细列表
	 *
	 * `attach` :string : （可选项）附加数据，在查询 API 和支付通知中原样返回，该字段主要用于商户携带订单的自定义数据
	 *
	 * `feeType` :string : （可选项）符合 ISO 4217标准的三位字母代码，其他值列表详见[货币类型](https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=4_2)
	 *
	 * `timeStart` :string : （可选项）订单生成时间，格式为 yyyyMMddHHmmss，如2009年12月25日9点10分10秒表示为20091225091010。其他详见[时间规则](https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=4_2)
	 *
	 * `timeExpire` :string : （可选项）订单失效时间，格式为 yyyyMMddHHmmss，如2009年12月27日9点10分10秒表示为20091227091010。其他详见[时间规则](https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=4_2)。**注意：最短失效时间间隔必须大于5分钟**
	 *
	 * `goodsTag` :string : （可选项）商品标记，代金券或立减优惠功能的参数，说明详见[代金券或立减优惠](https://pay.weixin.qq.com/wiki/doc/api/sp_coupon.php?chapter=12_1)
	 *
	 * `productId` :string : （可选项）trade_type=NATIVE ，此 id 为二维码中包含的商品 ID，商户自行定义，详见[商户平台开发者文档](https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1)
	 *
	 * `openId` :string : （可选项）trade_type=JSAPI ，用户在商户 appid 下的唯一标识。下单前需要调用[【网页授权获取用户信息】](http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html)接口获取到用户的 Openid
	 */

}
	info:string,

}





