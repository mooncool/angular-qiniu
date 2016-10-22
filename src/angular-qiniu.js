/**
 * @author Moon
 */
angular.module('mQiniu', [])
    .directive('qnUploader', qnUploader);

function qnUploader() {
    var token = '';

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.onchange = function() {
                angular.forEach(fileInput.files, function(file) {
                    upload(file, token, attrs.key);
                });
            }

            element.on('click', function() {
                return fileInput.click();
            });
        }
    };

    function upload(file, token, key) {
        console.debug(file, key, token);
        var formData = new FormData();
        formData.append('key', key + file.name);
        formData.append('token', token);
        formData.append('file', file);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://upload.qiniu.com/');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log('error!');
                }
            }
        }

        xhr.send(formData);
    }

    function randFileName(fileName) {
        var ext = fileName.split('.')[1];
        var randomInt = parseInt(Math.random() * 100000);

        console.debug(randomInt);
    }
}
