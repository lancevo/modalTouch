$.fn.modalTouch = function(option) {
	
	if (!$(".modalBg").length) {
		$("body").prepend('<div class="modalBg" />');
	}

	var modalBg = $(".modalBg");
	var option = option || "show";

	return this.each(function(){

		var existingInstance = $.data(this, "modalTouch");

		if (existingInstance) {
			if (option === "show") {
				existingInstance.enable();
			} else if (option === "hide") {
				existingInstance.disable();
			}

			return;
		}

		var modal = $(this),
			content = modal.find(".modalContent"),
			closeAnchor = modal.find(".modalClose");

		closeAnchor.bind("touchstart click", function(e){
			disable(e);
		});      

		function enable() {
			// turn it on so it can accurately measure the size
			modal.css("visibility","hidden");
			modal.show();

			var maxHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
				offsetLeft = $(window).scrollLeft() + Math.ceil(($(window).width() - content.outerWidth()) / 2),
	        	offsetTop = $(window).scrollTop() + Math.ceil(($(window).height() - content.outerHeight()) / 2);
			
			modalBg.css("height", maxHeight +"px");
			content.css("top", offsetTop + "px").css("left",offsetLeft + "px");

			closeAnchor.css("top", offsetTop + "px").css("left", (offsetLeft + content.outerWidth()) + "px");

			modalBg.show();
			modal.css("visibility","visible");
			
			$(modalBg).bind("touchstart click", disable);
		}

		function disable(e){
			modal.hide();
			modal.css("visibility","hidden");
			modalBg.hide();
			$(modalBg).unbind("touchstart click", disable);
		}


		if (option == "show") {
			enable();
		} else if (option =="hide") {
			disable();
		}

		this.enable = enable;
		this.disable = disable;

		$.data(this, "modalTouch", this);

	}); // return
};