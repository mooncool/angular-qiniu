/**
 * Demo page
 *
 * @author Moon
 */
angular
    .module('demo', ['mQiniu'])
    .controller('MainCtrl', MainCtrl);

function MainCtrl() {
    var vm = this;

    init();

    function init() {
        console.log('This is demo page.');
    }
}
