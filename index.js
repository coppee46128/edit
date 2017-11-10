//インスタンス
const electron=require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const ipcMain=electron.ipcMain;
let win;
////イベントメソッド
//初期化時
app.on("ready",function(){
	//ウィンドウオプション
	option={
		width:700,
		height:300,
	};
	//空のウィンドウ表示
	win=new BrowserWindow();
	//自前のhtmlを使う
	win.loadURL("file://" + __dirname + "/index.html");
	//開発者ツールを自動で開く
	win.webContents.openDevTools();
	//ちゃんとnullしないとアプリがバックグラウンドで生き続ける
	win.on("closed",function(){
		win = null;
	});
	
});
/////////////////////////////////////////////////////
//"ファイルを開く"をしたらウィンドウのタイトル変更
ipcMain.on("setTitle",function(event,arg){
	win.setTitle(arg);
});
///////////////////////////////////////////////////