// 打开首页搜索输入框自动获取焦点 （不优雅 部分功能与CSS的:focus相同）
window.onload = function() {

	var sosu = document.getElementById('sousuoK');
	var htmlBody = document.getElementsByTagName('body')[0];

	// 页面刷新加载完毕搜索框自动获取焦点高亮
    sosu.focus();
    if ( document.activeElement.id = "sousuok" ) {
    	sosu.setAttribute("class", "srch_text searchfocus");
    }
    
    sosu.addEventListener('click', function () {
    	// 获取元素属性值 .attributes["属性名"].value
       	if ( sosu.attributes['class'].value = "srch_text" ) {
       		sosu.setAttribute("class", "srch_text searchfocus");
       	}
   	},'false')
	//点击页面任意部分取消输入框聚焦
    htmlBody.addEventListener('click', function () {
    	if ( sosu.attributes['class'].value = "srch_text searchfocus" ) {
    		sosu.setAttribute("class", "srch_text");
    	}
	},'false')
    
}