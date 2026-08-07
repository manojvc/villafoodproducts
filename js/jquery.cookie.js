(function ($) {
    $.cookie = function (name, value, options) {
        if (typeof value === 'undefined') {
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            for (var i = 0; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var key = decodeURIComponent(parts.shift());
                if (key === name) {
                    return decodeURIComponent(parts.join('='));
                }
            }
            return null;
        }

        options = options || {};
        var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        if (options.expires) {
            var expires = options.expires;
            if (typeof expires === 'number') {
                var date = new Date();
                date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
                expires = date;
            }
            cookie += '; expires=' + expires.toUTCString();
        }

        cookie += '; path=' + (options.path || '/');
        if (options.secure) {
            cookie += '; secure';
        }

        document.cookie = cookie;
        return value;
    };
})(window.jQuery || window.$);