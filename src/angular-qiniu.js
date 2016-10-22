/**
 * @author Moon
 */
angular.module('mQiniu', [])
    .directive('qnUploader', qnUploader);

function qnUploader() {
    return {
        restrict: 'A',
        link: function(scope, element) {
        }
    };
}
