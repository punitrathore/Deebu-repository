(function($){
    $(document).ready(function(){
        $(".clickable").live("click",function(){
            $(".togglable").toggle();
        });
    });

})(jQuery);
