chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		query_url = "https://music.youtube.com/search?q=";
		query_url += encodeURIComponent(selection[0]);
		chrome.tabs.create({
			"url": query_url
		});
	})
});