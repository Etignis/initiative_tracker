var TENTACULUS_APP_VERSION = "1.0.0";

var oConfig = {}; // global app config data
function setConfig(prop, val) {
	if(prop && val != undefined && oConfig) {
		oConfig[prop] = val;
		localStorage.setItem("config", JSON.stringify(oConfig));
	}
}
function getConfig(prop) {
	oConfig = JSON.parse(localStorage.getItem("config")) || {};
	if(prop!=undefined) {
		return localStorage.getItem("config")? oConfig[prop] : null;
	}
	return ""; //oConfig;
}

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};

window.onload = function(){
	
	function getViewPortSize(mod) {
		var viewportwidth;
		var viewportheight;

		//Standards compliant browsers (mozilla/netscape/opera/IE7)
		if (typeof window.innerWidth != 'undefined')
		{
			viewportwidth = window.innerWidth,
			viewportheight = window.innerHeight
		}

		// IE6
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
		{
			viewportwidth = document.documentElement.clientWidth,
			viewportheight = document.documentElement.clientHeight
		}

		//Older IE
		else
		{
			viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
			viewportheight = document.getElementsByTagName('body')[0].clientHeight
		}

		if(mod=="width")
			return viewportwidth;

		return viewportwidth + "~" + viewportheight;
	}

	function showInfoWin(sText) {
		$(".mod_win_wrapper").remove();
		var bCross = "<span class='bCloseInfoWin'>×</span>";
		$("body").append("<div class='mod_win_wrapper'><div class='mod_win'>"+bCross+sText+"</div></div>");
    $("body").css("overflow-y", "hidden");
		$(".mod_win_wrapper").fadeIn();
	}
	function hideInfoWin() {
		if($(".mod_win_wrapper").length){
			$.when($(".mod_win_wrapper").fadeOut()).done(function(){
        $("body").css("overflow-y", "auto");
      });
		}
	}
	function showDBG() {
		if(!$("#dbg").length){
			$("body").append("<div id='dbg'></div>");
		}
		$("#dbg").fadeIn();
		$("body").height();
	}
	function hideDBG() {
		if($("#dbg")){
			$("#dbg").fadeOut();
		}
	}

	/// handlers

	// close Mod Win
	$("body").on("click", ".bCloseInfoWin", function() {
		$("#dbg").fadeOut();
		hideInfoWin();
    hideAddWin();
	});

	// hide DBG
	$("body").on("click", "#dbg, .mod_win_wrapper", function() {
		$("#dbg").fadeOut();
		hideInfoWin();
	});
	$("body").on("click", ".mod_win", function() {
		return false;
	});
  function getImages(sIco) {
    var aIcos = [];
    for(var i=0; i<12; i++) {
      //var n = (i<10)? "0"+i: i;
      var sSelected = (sIco=="ico_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    var sList = "<ul class='ico_list' id='sWinIco' >"+aIcos.join("")+"</ul>";
    return sList;
  }
  function showAddWin(oData, nIndex){
    showDBG();
    nIndex = (nIndex != undefined)? " data-index='"+nIndex+"'" : "";
    var sName, sInitiative, sIco;
      sName = oData? oData.name : "";
      sInitiative = oData? oData.initiative : "";
      sIco = oData? oData.ico : "";
    var sForm = "<div><input id='sWinName' placeholder='Имя' value='"+sName+"'></div>\
    <div><input id='sWinInitiative'  placeholder='Инициатива' value='"+sInitiative+"'></div>\
    <label>Изображение: </label>"+getImages(sIco);
    $(".mod_win_wrapper").remove();
		var bCross = "<span class='bCloseInfoWin'>×</span>";
    var sButton = oData?"<button class='bApplay'>Применить</button>":"<button class='bAdd'>Добавить</button>";
		$("body").append("<div class='mod_win_wrapper' "+nIndex+"><div class='mod_win'>"+bCross+sForm+"<br>"+sButton+"</div></div>");
    $("body").css("overflow-y", "hidden");
		$(".mod_win_wrapper").fadeIn();
  }
  function hideAddWin(){
    $(".mod_win_wrapper").fadeOut(400, function(){
      $(".mod_win_wrapper").remove();
    });
    hideDBG();
  }

  function getItemData(nIndex){
     if(nIndex == undefined) 
       nIndex = 0;
    var oItem = $(".place").eq(nIndex);
    var oData = {};
    oData.name = oItem.find(".name").text();
    oData.initiative = oItem.find(".initiative").text();
    oData.ico = oItem.find(".ico").attr('data-ico');
    
    return oData;
  }

  function getSelectedItemData(){
    var nIndex = 0;
    var oItem = $("#selectedOne .i_item").eq(nIndex);
    var oData = {};
    oData.name = oItem.find(".name").text();
    oData.initiative = oItem.find(".initiative").text();
    oData.ico = oItem.find(".ico").attr('data-ico');
    
    return oData;
  }
  function getItemTemplate(oData){
    if(oData){
      var sIco = oData.ico;
      var nInitiative = oData.initiative;
      var sName = oData.name;
      var oItem = "<div class='i_item'>\
          <div class='ico_bord bord_red'>\
            <div class='ico' data-ico='"+sIco+"'></div>\
            <div class='initiative'>"+nInitiative+"</div>\
          </div>\
          <div class='info'>\
            <div class='minus'>-</div>\
            <div class='name'>"+sName+"</div>\
          </div>\
        </div>";
      return oItem;
    }
  }
  function addItem(oData, nIndex){
    if(oData && oData.ico){
      if(nIndex == undefined) 
        nIndex = $("#allOnes .place").length;
      var sIco = oData.ico;
      var nInitiative = oData.initiative;
      var sName = oData.name;
      var oItem = "<li class='place' style='display: none'>"+
        getItemTemplate(oData)+
      "</li>";
      if($("#allOnes .place").length>0){
        //var nI = (nIndex-1 <0)? 0 :nIndex-1;
        if(nIndex-1 <0) {
          $("#allOnes .place").eq(0).before(oItem);
          $("#allOnes .place").eq(0).slideDown();
        } else {
          $("#allOnes .place").eq(nIndex-1).after(oItem);
          $("#allOnes .place").eq(nIndex).slideDown();
        }
      } else {
        $("#allOnes").append(oItem);
        $("#allOnes .place").last().slideDown();
      }
    }
  }
  function setItem(oData, nIndex){
    if(nIndex == undefined) 
      nIndex = $("#allOnes li").length;
    var sIco = oData.ico;
    var nInitiative = oData.initiative;
    var sName = oData.name;
    
    $(".place").eq(nIndex).find(".ico").attr('data-ico', sIco);
    $(".place").eq(nIndex).find(".initiative").text(nInitiative);
    $(".place").eq(nIndex).find(".name").text(sName);
  }
  function updateSelected(oData){
    var oDef = $.Deferred();
    var oItem = "<div class='place'>"+getItemTemplate(oData)+"</div>";
    $("#selectedOne").append(oItem);
    if($("#selectedOne").find(".place").length > 1) {
      $("#selectedOne").find(".place").eq(1).slideDown(400, function(){
        $("#selectedOne").find(".place").eq(1).css('height', 'auto');
      });
      $("#selectedOne").find(".place").eq(0).slideUp(400, function(){
        $("#selectedOne").find(".place").eq(0).remove();
        oDef.resolve();
      });
    } else {
      $("#selectedOne").find(".place").eq(0).show();
    }
    
    
    return oDef;
  }
	function chooseNext(){
    if($("#allOnes .place").length > 0){
      var oItem = $("#allOnes  .place").eq(0);
      var oData = getSelectedItemData(0);
      var oNewData = getItemData(1);
      
      var oDef1 = $.Deferred();
      var oDef2 = $.Deferred();
      // initiative rotation
      oItem.slideUp(400, function(){
        oItem.remove();
        oDef1.resolve();      
      });
      addItem(oData);
      $("#allOnes  .place").eq(-1).slideDown(400, function(){
        $("#allOnes  .place").eq(-1).css('height', 'auto');
        oDef2.resolve();  
      });
      var oDef3 = updateSelected(oNewData);
      
      $.when(oDef1, oDef2, oDef3).done(
        function() {
          saveData();
          setSeparators();
        }
      )
    }
  }
  
  function getDataFromView(){
    var oData = {};
    oData.list = [];
    //oData.list.push(getSelectedItemData(0));
    
    for(var i=0; i<$(".place").length; i++) {
      oData.list.push(getItemData(i));
    }
    
    return oData;
  }
  function saveData(){
    var oData = getDataFromView();
    setConfig("oInitiativeTrackerData", oData);
  } 
  function makeDraggable(){
    var list = document.getElementById("allOnes");
    Sortable.create(list, {
      handle: ".place",
      ghostClass: "ghost",
      dragClass: "drag",
      onEnd: onListReordered
    });
  }
  function onListReordered(){
    saveData();
    setSeparators();
  }
  
  function loadData(){
    var oData = getConfig("oInitiativeTrackerData");
    if(oData){
      oData = oData.list.filter(function(item){return (item.name)?true: false;});
      updateSelected(oData[0]);
      for(var i=0; i<oData.length-1; i++) {
          addItem(oData[1+i]);
      }
      $("#allOnes li").show();
      makeDraggable();
    }
      setSeparators();
  }
  
  function setSeparators() {
    $("#allOnes .separator").remove();
    var oSeparator = "<li class='separator'>\
      <div class='simbol'>+</div>\
    </li>";
     $("#allOnes .place").each(function(){
       $(this).after(oSeparator);
     });
     $("#allOnes").prepend(oSeparator);
  }
  
  
  $("#manageButtons").on("click", "#nextOne", function(){
    chooseNext();
  });
  $(".wrap").on("click", ".minus", function(){
    $(this).closest(".place").slideUp(400, function(){
      $(this).remove();
      setSeparators();
      saveData();
    });
  });
  
  $("#allOnes").on("click", ".separator", function(){
    var nIndex = $(this).index(".separator");
    showAddWin(null, nIndex);
  });
  
  $("body").on("click", ".ico_list_item", function(){
    $(".ico_list_item").removeClass('selected');
    $(this).addClass('selected');
  });
  $("body").on("dblclick", ".place", function(){
    var nIndex = $(this).index(".place");
    //alert(nIndex);
    var oData = getItemData(nIndex);
    showAddWin(oData, nIndex);    
  });
  
  $("body").on('click', ".bApplay", function(){
    var sName = $("#sWinName").val();
    var sInitiative = $("#sWinInitiative").val();
    var sIco = ($("#sWinIco .selected").length>0)?$("#sWinIco .selected").attr("data-ico"): "";
    var nIndex = $(".mod_win_wrapper").attr("data-index");
    
    var oData = {
      name: sName,
      initiative: sInitiative,
      ico: sIco
    };
    
    setItem(oData, nIndex);   
    $(".bCloseInfoWin").click();
    saveData();
  });
  
  $("body").on('click', ".bAdd", function(){
    var sName = $("#sWinName").val();
    var sInitiative = $("#sWinInitiative").val();
    var sIco = ($("#sWinIco .selected").length>0)?$("#sWinIco .selected").attr("data-ico"): "";
    var nIndex = $(".mod_win_wrapper").attr("data-index");
    
    var oData = {
      name: sName,
      initiative: sInitiative,
      ico: sIco
    };
    
    addItem(oData, nIndex);   
    $(".bCloseInfoWin").click();
    saveData();
  });
  
  loadData();
};
