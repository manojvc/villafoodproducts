(function () {
    var elements = 'abbr article aside audio canvas datalist details figcaption figure footer header main mark meter nav output progress section summary time video'.split(' ');
    for (var i = 0; i < elements.length; i++) {
        document.createElement(elements[i]);
    }
})();