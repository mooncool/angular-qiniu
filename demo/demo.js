angular
.module('athena')
.controller('MainCtrl', MainCtrl);

function MainCtrl() {
var vm = this;

// auto-complete
vm.autoCompleteList1 = autoCompleteTextItemList;
vm.autoCompleteList2 = autoCompleteTextItemList;
vm.autoCompleteList3 = autoCompleteTextItemList;
vm.selectedItem1 = vm.autoCompleteList1[0];
vm.selectedItem2 = null;
vm.selectedItem3 = null;
vm.keywords = '';

// menu-selector
vm.menuSelectorItemList = menuSelectorItemList;

// date-picker
vm.defaultDate = defaultDate;

// simple-table
vm.tableThead = tableThead;
vm.tableMessage = tableMessage;

init();

function init() {
}
}
