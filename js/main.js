jQuery(function() {
	var $sidebar = $('#sidebar'),
		$nav = $('.nav'),
		$main = $('.main');

	var found = true;

	var $el;

	$sidebar.find('a').click(function() {
		$('body').removeClass('nav-open');
	});

	var queryParams = window.location.search.substring(1);
	if (queryParams) {
		var pair = queryParams.split('=');
		if (decodeURIComponent(pair[0]) == 'app_token') {
			var token = decodeURIComponent(pair[1]);
			$	("span.s").each(function(){
				var text = $(this).text();
				if (text.indexOf("YOUR_APP_TOKEN") !== -1) {
					$(this).text(text.replace("YOUR_APP_TOKEN", token));
				}
			});
		}
	}


	$("section > div.code-group-start").each(function(i) {

		var $this = $(this).before("<ul class=\"languages\"></ul>"),
		$languages = $this.prev(),
		$notFirst = $this.nextUntil(":not(div.code-group)"),
		$all = $this.add($notFirst),
		$platform = $this.attr("platform");

		$all.add($languages).wrapAll("<div class=\"code-viewer\" platform=\"" + $platform + "\"></div>");

		listLanguages($all, $languages);

		$this.css('display', 'block');
		$notFirst.css('display', 'none');

		$languages.find('a').first().addClass('active');

		$languages.find('a').click(function() {
			var $this = $(this);
			var $platform = $this.parent().parent().parent().attr("platform");
			var $title = $this.text();

			$("section div.code-viewer").each(function(i) {
				if ($(this).attr("platform") == $platform) {
					var $block = $(this);
					var $languages = $block.find("ul.languages");

					$all = $block.children("div.highlighter-rouge");

					$all.css('display', 'none');
					$all.eq($this.parent().index()).css('display', 'block');
	
					$languages.find('a').removeClass('active');

					$languages.find('a').each(function() {
						if ($(this).text() == $title) {
							$(this).addClass('active');	
						}
					});
				}
			});
						
			return false;
		});

		if ($languages.children().length === 0) {
			$languages.remove();
		}

	});


	function listLanguages($el, $insert) {
		$el.each(function(i) {
			var title = $(this).attr('title');
			if (title) {
				$insert.append("<li><a href=\"#\">" + title + "</a></li>");
			}
		});
	}

	var href = $('.sidebar a').first().attr("href");

	if (href !== undefined && href.charAt(0) === "#") {
		setActiveSidebarLink();

		$(window).on("scroll", function(evt) {
			setActiveSidebarLink();
		});
	}

	function setActiveSidebarLink() {
			$('.sidebar a').removeClass('active');
				var $closest = getClosestHeader();
				$closest.addClass('active');
				document.title = $closest.text();

	}
});

function getClosestHeader() {
	var $links = $('.sidebar a'),
	top = window.scrollY,
	$last = $links.first();

	if (top < 300) {
		return $last;
	}

	if (top + window.innerHeight >= $(".main").height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
			var $anchor = $(href);

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - 300) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}
