(function ($) {
    $.fn.easyResponsiveTabs = function () {
        return this.each(function () {
            var $root = $(this);
            var $lists = $root.find('.resp-tabs-list');
            var $panels = $root.find('.resp-tabs-container > div');

            if (!$panels.length) {
                return;
            }

            $panels.hide().first().show();

            $lists.find('li').each(function (index) {
                $(this).off('click.easyResponsiveTabs').on('click.easyResponsiveTabs', function (event) {
                    event.preventDefault();
                    $lists.find('li').removeClass('resp-tab-active');
                    $(this).addClass('resp-tab-active');
                    $panels.hide().eq(index).show();
                });
            });

            $lists.find('li').first().addClass('resp-tab-active');
        });
    };
})(window.jQuery || window.$);