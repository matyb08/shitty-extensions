chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		// query_url = "https://duckduckgo.com/?q=";
		query_url = "https://www.google.com/search?q="
		query_url += encodeURIComponent(selection[0]) + "&t=brave&ia=web";
		chrome.tabs.create({
			"url": query_url
		});
	})
});