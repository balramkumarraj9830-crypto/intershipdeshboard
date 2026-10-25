$(document).ready(function() {
    // Sidebar Open on Toggle Click
    $('#sidebar-toggle').on('click', function(e) {
        e.stopPropagation();
        $('#sidebar').removeClass('-translate-x-full');
        if ($('#sidebar-overlay').length === 0) {
            $('body').append('<div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity"></div>');
        } else {
            $('#sidebar-overlay').removeClass('hidden');
        }
    });

    // Sidebar Close on Close Button Click
    $('#sidebar-close').on('click', function() {
        $('#sidebar').addClass('-translate-x-full');
        $('#sidebar-overlay').addClass('hidden');
    });

    // Close Sidebar when clicking on Overlay backdrop
    $(document).on('click', '#sidebar-overlay', function() {
        $('#sidebar').addClass('-translate-x-full');
        $(this).addClass('hidden');
    });

    // Auto close sidebar on mobile/tablet when clicking any navigation link
    $('#sidebar nav a').on('click', function() {
        if ($(window).width() < 1024) {
            $('#sidebar').addClass('-translate-x-full');
            $('#sidebar-overlay').addClass('hidden');
        }
    });
});