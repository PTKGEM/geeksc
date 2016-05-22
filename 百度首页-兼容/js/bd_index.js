// 打开首页搜索输入框自动获取焦点 （不优雅 部分功能与CSS的:focus相同）
window.onload = function() {

  //兼容IE和非IE浏览器事件
  function addEvent(element, eve_type, func) {
    if (element.addEventListener) {
      element.addEventListener(eve_type, func, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + eve_type, func);
    } else {
      element["on" + eve_type] = null;
    }
  }

	var sosu = document.getElementById('sousuoK');
	var htmlBody = document.getElementsByTagName('body')[0];

	// 页面刷新加载完毕搜索框自动获取焦点高亮
    sosu.focus();
    if ( document.activeElement.id = "sousuok" ) {
    	sosu.setAttribute("class", "srch_text searchfocus");
    }
    
    addEvent(sosu, "click", sosuborclor);
    function sosuborclor() {
      // 获取元素属性值 .attributes["属性名"].value
        if ( sosu.attributes['class'].value = "srch_text" ) {
          sosu.setAttribute("class", "srch_text searchfocus");
        }
    }
	//点击页面任意部分取消输入框聚焦
    addEvent(htmlBody, "click", delsosuborclor);
    function delsosuborclor() {
      if ( sosu.attributes['class'].value = "srch_text searchfocus" ) {
        sosu.setAttribute("class", "srch_text");
      }
    }



  // "设置"响应的toolTip菜单栏鼠标移入移出效果 Start
  var osTooltip = document.getElementById('stooltip');
  var oSeting = document.getElementById('seting-item');
  
  oSeting.onmouseover = function () {
      osTooltip.style.display = 'block';
  };
  
  // oSeting.addEventListener('mouseout', function () {
  //    function fade() {
  //       osTooltip.style.display = 'none';
  //    };
  //    // 设置计时器时间，延迟toolTip消失时间
  //    var dly = setTimeout(function(){fade();}, 600);

  //    osTooltip.onmouseover = function () {
  //        // 清除计时器
  //        clearTimeout(dly);
  //        osTooltip.style.display = 'block';
  //    };
  // },'false');

  addEvent(oSeting, "mouseout", showSet);
  function showSet() {
     function fade() {
        osTooltip.style.display = 'none';
     };
     // 设置计时器时间，延迟toolTip消失时间
     var dly = setTimeout(function(){fade();}, 600);

     osTooltip.onmouseover = function () {
         // 清除计时器
         clearTimeout(dly);
         osTooltip.style.display = 'block';
     };
  }

  osTooltip.onmouseout = function () {
      osTooltip.style.display = 'none';
  };
  // "设置"响应的toolTip菜单栏鼠标移入移出效果 End

  // "更多产品"右侧边导航栏鼠标移入移出效果 Start
  var oMoreProduct = document.getElementById('more-prduct');
  var oSideBarNav = document.getElementById('sidebar-nav');
 
  /*oMoreProduct.addEventListener('mouseover', function () {
  // 获取元素属性值 .attributes["属性名"].value
      oMoreProduct.style.display = 'none';
      oSideBarNav.style.display = 'block';
  },'false')*/

  addEvent(oMoreProduct, "mouseout", showProduct);
  function showProduct() {
  // 获取元素属性值 .attributes["属性名"].value
      oMoreProduct.style.display = 'none';
      oSideBarNav.style.display = 'block';
  }

  oSideBarNav.onmouseover = function () {
      oMoreProduct.style.display = 'none';
      oSideBarNav.style.display = 'block';
  };

  oSideBarNav.onmouseout = function () {
      oSideBarNav.style.display = 'none';
      oMoreProduct.style.display = 'block';
  };
  // "更多产品"右侧边导航栏鼠标移入移出效果 End
}

