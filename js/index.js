$(function() {
	$(".site-topbar .container .topbar-cart").hover(function() {
		$(this).find(".iconfont").css("background", "url(img/images/gouwuche2_03.png)")
		$(this).find(".cart-menu").css("display", "block");
		$(this).find(".cart-mini").css("color", "#FF6702");		
	}, function() {
		$(this).find(".iconfont").css("background", "url(img/images/gouwuche_1.png)");
		$(this).find(".cart-menu").css("display", "none");
		$(this).find(".cart-mini").css("color", "#b0b0b0");		
	})
})