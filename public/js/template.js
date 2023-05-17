jQuery(function () {
	//init
	init();
});

jQuery(window).on("resize", function () {
	resize();
});

function init() {
	//ajustes conforme navegador
	browser_adjusts();

	//resize para responsividade
	resize();

	//ajuste de caixas de modulos do tipo module_box
	module_box_adjust(null);

	//paginas internas:
	delaySocialItems();
}

function resize() {
	//ajustes de responsividade
	if (jQuery(document).width() < 979) {
		jQuery('#navigation h2').on("click", function () {
			if (!jQuery(this).next().is(':visible')) {
				jQuery(this).find('i').removeClass('icon-chevron-down');
				jQuery(this).find('i').addClass('icon-chevron-up');
			}
			else {
				jQuery(this).find('i').addClass('icon-chevron-down');
				jQuery(this).find('i').removeClass('icon-chevron-up');
			}
		});

		module_box_adjust('auto');
		module_box_adjust(null);
	}
	else {
		jQuery('#navigation h2').next().show();
		jQuery('#navigation-section').fadeIn();
		module_box_adjust(null);
	}
	//fim ajustes responsividade
}
// ajustes de navegador
function browser_adjusts() {
	if (navigator.appVersion.indexOf("MSIE 7.") != -1 || navigator.appVersion.indexOf("MSIE 8.") != -1 || navigator.appVersion.indexOf("MSIE 9.") != -1) {
		jQuery('#portal-searchbox .searchField').val(jQuery('#portal-searchbox .searchField').attr('title'));
		jQuery('#portal-searchbox .searchField').focus(function () {
			if (jQuery(this).val() == jQuery('#portal-searchbox .searchField').attr('title')) jQuery(this).val('');
		});
		jQuery('#portal-searchbox .searchField').blur(function () {
			if (jQuery(this).val() == '') jQuery(this).val(jQuery('#portal-searchbox .searchField').attr('title'));
		});
	}
}
// fim ajustes de navegador

//ajustes de tamanho dos itens para .module-box-01
function module_box_adjust(val) {
	jQuery('.module-box-01 .lista li').each(function (key) {
		if (val == null) {
			if (key == 0) max_height = 0;
			if (key == 0) size = jQuery(this).size();
			padding_vertical = 8;
			if (jQuery(this).height() > max_height) max_height = jQuery(this).height() + padding_vertical;
			if (key + 1 == size) jQuery('.module-box-01 .lista li').height(max_height);
		}
		else
			jQuery('.module-box-01 .lista li').height(val);
	});
}
//fim ajustes de tamanho dos itens para .module-box-01

//aparecimento de icones de redes sociais, paginas internas
function delaySocialItems() {
	if (jQuery('.btns-social-like').hasClass('hide')) {
		jQuery('.btns-social-like').each(function () {
			jQuery(this).hide();
			jQuery(this).removeClass('hide');
			jQuery(this).fadeIn(6000);
		});
	}
}
//fim aparecimento de icones de redes sociais, paginas internas

//funcao de controle de player de audio
function playAudio(element, urls, formats, basePath) {
	var audio = document.createElement("audio"),
		canPlayMP3 = (typeof audio.canPlayType === "function" && audio.canPlayType("audio/mpeg") !== "");

	if (formats.indexOf('mp3') != -1 && !canPlayMP3) {
		jQuery(element).jPlayer({
			ready: function (event) {
				jQuery(this).jPlayer("setMedia", urls);
			},
			swfPath: basePath + "js/Jplayer.swf",
			supplied: formats,
			wmode: "window",
			solution: "flash",
			smoothPlayBar: true,
			keyEnabled: true,
			oggSupport: false,
			nativeSupport: false,
			preload: "none"
		});
	}
	else {
		jQuery(element).jPlayer({
			ready: function (event) {
				jQuery(this).jPlayer("setMedia", urls);
			},
			swfPath: "js",
			supplied: formats,
			wmode: "window",
			smoothPlayBar: true,
			keyEnabled: true,
			preload: "none"
		});
	}
}
//fim funcao de controle de player de audio