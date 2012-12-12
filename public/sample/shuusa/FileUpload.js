    var uploadFiles = function () {
    	var form = document.getElementById('fileForm');
        var fd = new FormData(form);
        // XHR で送信
        $.ajax({
            url: "/apply/file/upload",
            type: "POST",
            data: fd,
            processData: false,
            contentType: false
        });
    };

//    // ファイル選択フォームからの入力
//    $("#form").bind("change", function () {
//        // 選択されたファイル情報を取得
//        var files = this.files;
//
//        // アップロード処理
//        uploadFiles(files);
//    });

//    // ドラッグドロップからの入力
//    $("#target").bind("drop", function (e) {
//        // ドラッグされたファイル情報を取得
//        var files = e.originalEvent.dataTransfer.files;
//
//        // アップロード処理
//        uploadFiles(files);
//    })
//    .bind("dragenter", function () {
//        // false を返してデフォルトの処理を実行しないようにする
//        return false;
//    })
//    .bind("dragover", function () {
//        // false を返してデフォルトの処理を実行しないようにする
//        return false;
//    });
