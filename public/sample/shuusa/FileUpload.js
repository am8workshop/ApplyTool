    var uploadFiles = function () {
    	var form = $('#fileForm')[0];
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