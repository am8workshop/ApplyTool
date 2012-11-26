var LocalStorageUtil = function(){};

//グローバル
var localStorageUtil = new LocalStorageUtil();

LocalStorageUtil.prototype.setConnectInfo = function(data){
	var sessionName= localStorage.getItem('sessionName');
	var storedData = localStorage.getItem(sessionName);
	//セッションネームがキーのデータあれば接続先情報追加、なければ新しくデータ作成。
	var setData = {};
	var key = new Date().getTime();
	if(storedData){
		storedData = JSON.parse(storedData);
		storedData[key] = data;
		setData = storedData;
	}else{
		setData[key] = data;
	}
	//ストレージにデータをセット
	localStorage.setItem(sessionName, JSON.stringify(setData));
}

LocalStorageUtil.prototype.getConnectInfo = function(key){
		var data = localStorage.getItem(key);
		return JSON.parse(data);
}
