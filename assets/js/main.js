var iUp = (function () {
	var t = 0,
		d = 150,
		clean = function () {
			t = 0;
		},
		up = function (e) {
			setTimeout(function () {
				$(e).addClass("up")
			}, t);
			t += d;
		},
		down = function (e) {
			$(e).removeClass("up");
		},
		toggle = function (e) {
			setTimeout(function () {
				$(e).toggleClass("up")
			}, t);
			t += d;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	}
})();

$(document).ready(function () {

	// 获取一言数据
	fetch('https://v1.hitokoto.cn').then(function (res) {
		return res.json();
	}).then(function (e) {
		$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
	}).catch(function (err) {
		console.error(err);
	})

	
	/**
	 * 随机背景图
	 * 优先从 Bing 每日壁纸中随机选取
	 * 策略：先用 1080p 快速展示，后台预加载 UHD 后无缝替换
	 * 失败时 fallback 到 Lorem Picsum 随机图
	 */
	var $panel = $('#panel');
	var bingApi = 'https://bird.ioliu.cn/v1/?url=https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8';

	function setBackground(imgUrl) {
		$panel.css("background", "url('" + imgUrl + "') center center no-repeat #666");
		$panel.css("background-size", "cover");
	}

	function randomBing() {
		$.get(bingApi, function (result) {
			var images = result.images;
			if (images && images.length > 0) {
				var idx = Math.floor(Math.random() * images.length);
				var item = images[idx];
				// 先用 1080p 秒加载，确保页面首屏不白屏
				var fastUrl = "https://www.bing.com" + item.url;
				setBackground(fastUrl);
				// 后台预加载 UHD，加载完无缝替换
				if (item.urlbase) {
					var uhdUrl = "https://www.bing.com" + item.urlbase + "_UHD.jpg";
					var preload = new Image();
					preload.onload = function () {
						setBackground(uhdUrl);
					};
					preload.src = uhdUrl;
				}
			}
		}).fail(function () {
			// Fallback: Lorem Picsum 随机图片
			var fallback = 'https://picsum.photos/1920/1080?random=' + Date.now();
			setBackground(fallback);
		});
	}

	randomBing();
	
	$(".iUp").each(function (i, e) {
		iUp.up(e);
	});

	$(".js-avatar")[0].onload = function () {
		$(".js-avatar").addClass("show");
	}
});

$('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn');
});
