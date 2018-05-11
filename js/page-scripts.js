//Mobile Navigation Show/Hide Function
$(".navControl").click(function(){
    $("#menu-main-nav").slideToggle("fast","swing");
    return false;
});

//Mobile Navigation Second Tier Show/Hide Function
$(document).ready(function(){
    $("#menu-main-nav li ul").parent().addClass('open');
    $("#menu-main-nav li.open").append('<a class="expand" href="#">+</a>');
    return false;
});

$(document).on('click','li a.expand',function() {
    $(this).prev().slideToggle("fast","swing");
    return false;
});

//Search Button Show/Hide Function
$(document).ready(function(){
    $(".searchEnable").click(function(){
        $("form.searchSite").animate({width: 'toggle'},"fast", "swing");
        $(".searchEnable span.enabled").slideToggle("fast","swing");
        $(".searchEnable span.disabled").slideToggle("fast","swing");
        return false;
    });
});

//Show/Hide Quote Button Function
$(document).ready(function(){
    $(".quoteBtn, .closeBtn").click(function(){
        $("nav form.quote").slideToggle("fast","swing");
        return false;
    });
});

//Image Dimension Check: Porttrait VS Landscape Function
$(document).ready(function(){
    $("img").each(function(){
        var img = $(this);

        if (img.outerHeight() > img.outerWidth()){
            img.addClass('portrait');
            img.removeClass('landscape');
        } else {
            img.addClass('landscape');
            img.removeClass('portrait');
        }
    });
});

//Checking if FeaturedImg is Empty
$(document).ready(function (){
    if($('div.featuredImg').is(':empty')) {
        $('div.featuredImg').css('display','none');
        $('.inside #mainContainer #mainContent').css({'padding-top':'40px'});
    }
});

//Same Height Enabling for MainContent & Sidebar
$(document).ready(function (){
    if($('#mainContent + aside','aside + #mainContent')) {
        $('#mainContent + aside','aside + #mainContent').addClass('same');
    }
});

//Container Height Detection Based on Row Function
$(document).ready(function(){
    equalheight = function(container){

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function() {
        var width = $(window).width(); 	//Detect the document window's width

        if(width > 767) {
            equalheight('.same');
        }
    });


    $(window).resize(function(){
        var width = $(window).width(); 	//Detect the document window's width

        if(width > 767) {
            equalheight('#gallery .imgDetails');
        }
    });
});

//Fix z-index youtube video embedding
$(document).ready(function (){
    $('iframe').each(function(){
        var url = $(this).attr("src");

        $(this).attr('src', url + (url.indexOf('?') > -1 ? '&' : '?') + 'wmode=transparent');
    });
});