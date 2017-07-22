// This is a JavaScript file
var map;
function onLoad() {
    document.addEventListener("deviceready", initialize, false);
}

function initialize() {
    map = null;
    var mapOptions = {
        center: new google.maps.LatLng(34.9951263, 135.7640136),    //地図上で表示させる緯度経度
        zoom: 14,                                                 //地図の倍率
        disableDefaultUI : 'disable',
        disableDoubleClickZoom : 'disable',
        mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //マッピング
    var myLatlng;
    // セブン−イレブン烏丸五条店
    myLatlng = new google.maps.LatLng(34.9959072, 135.7586593);
    markToMap("Seven-Eleven KarasumaGojo", myLatlng, map);
    // セブンーイレブン 京都烏丸六条店
    myLatlng = new google.maps.LatLng(34.994046, 135.757319);
    markToMap("Seven-Eleven KarasumaRokujo", myLatlng, map);
    // セブン−イレブン京都東山五条店
    myLatlng = new google.maps.LatLng(34.9957615, 135.7684114);
    markToMap("Seven-Eleven HigashiyamaGojo", myLatlng, map);
    // セブンイレブン・京都河原町高辻
    myLatlng = new google.maps.LatLng(35.0000496, 135.7656906);
    markToMap("Seven-Eleven KawaramachiTakatuji", myLatlng, map);
    // セブンーイレブン京都烏丸高辻店
    myLatlng = new google.maps.LatLng(35.0000707, 135.7576983);
    markToMap("Seven-Eleven KawaramachiTakatuji", myLatlng, map);
    // セブンイレブン・京都東洞院七条店
    myLatlng = new google.maps.LatLng(34.988336, 135.758657);
    markToMap("Seven-Eleven KawaramachiTakatuji", myLatlng, map);

    $("#time").html("&nbsp;");
    $("#weather-text").html("&nbsp;");
    $("#weather-img").html("&nbsp;");
}

function showSpot() {
    map = null;
    var mapOptions = {
        center: new google.maps.LatLng(34.9959072, 135.7586593),    //地図上で表示させる緯度経度
        zoom: 14,                                                 //地図の倍率
        disableDefaultUI : 'disable',
        disableDoubleClickZoom : 'disable',
        mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
    };
    map = new google.maps.Map(document.getElementById("map_canvas3"), mapOptions);

    //マッピング
    var myLatlng;
    // セブン−イレブン烏丸五条店
    myLatlng = new google.maps.LatLng(34.9959072, 135.7586593);
    markToMapOne("Seven-Eleven KarasumaGojo", myLatlng, map);
}

function markToMap(name, position, map){
    var marker = new google.maps.Marker({
        position: position,
        title:name
    });
    marker.setMap(map);
    google.maps.event.addListener(marker, 'click', function() {
        $("#time").html("18:00");
        $("#weather-text").html("<img src='img/heavy-rain.png' />");
        $("#weather-img").html("Heavy rainy");
    });
}

function markToMapOne(name, position, map){
    var marker = new google.maps.Marker({
        position: position,
        title:name
    });
    marker.setMap(map);
}

function page3() {
    var options = {
        animation: 'slide', // アニメーションの種類
        onTransitionEnd: function() {
            showSpot();
        } // アニメーションが完了した際によばれるコールバック
    };
    myNavigator.pushPage("page3.html", options);
}

