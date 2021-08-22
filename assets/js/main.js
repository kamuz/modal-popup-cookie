$(document).ready(function() {

    // If cookies does not set
    if ($.cookie("close-subscribe-modal") == undefined) {
        let modal = $('#subscribe-modal');
        function openModal() {
            modal.fadeIn();
        }
        window.setTimeout(openModal, 1000);
        $('.close').click(function() {
            modal.fadeOut();
        })

    }

    // Set cookie
    $(".close").click(function() {
        $.cookie('close-subscribe-modal', 'true', { expires: 36500, path: '/' });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        let modal = document.getElementById("subscribe-modal");
        console.log(event.target);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
