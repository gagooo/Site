jQuery(document).ready(function equalize_Flex_Items() {
    var asd = jQuery('.flex-content .flex-item:first').width();
    jQuery('.flex-content .flex-item:gt(3)').css('max-width', asd);
    jQuery(window).resize(function () {
        var asd = jQuery('.flex-content .flex-item:first').width();
//        console.log("Window width - " + jQuery(window).width() + ("   Document width - " + jQuery(document).width()));
        jQuery('.flex-content .flex-item:gt(3)').css('max-width', asd);
        if (jQuery(window).width() > 1057) {
            jQuery('#nav_menu').removeClass("collapseNavManu");
            jQuery('#nav_login').removeClass("collapseNavLogin");
        }
    });
});

jQuery(document).ready(function fix_Left_Menu() {
    var scrollPos = jQuery(window).scrollTop();
    if (scrollPos >= 66) {
        jQuery('#left_menu').addClass("fixed");
    } else {
        jQuery('#left_menu').removeClass("fixed");
    }
    jQuery(window).scroll(function () {
        var scrollPos1 = jQuery(window).scrollTop();
        var scrollPos2 = jQuery("#nav_text").innerHeight();
        if (scrollPos1 - scrollPos2 >= 66) {
            jQuery('#left_menu').addClass("fixed");
        } else {
            jQuery('#left_menu').removeClass("fixed");
        }
    });
});

jQuery(document).ready(function collapseMenu() {
    jQuery(".collapse-nav-login").click(function () {
        if (jQuery("#nav_menu").attr("class") !== "collapseNavManu" && jQuery('#nav_login').attr("class") !== "collapseNavLogin") {
            jQuery('#nav_menu').addClass("collapseNavManu");
            jQuery('#nav_login').addClass("collapseNavLogin");
        } else {
            jQuery('#nav_menu').removeClass("collapseNavManu");
            jQuery('#nav_login').removeClass("collapseNavLogin");
        }
    });
});

jQuery(document).ready(function open_login_blank() {
    jQuery(".sign-in").click(function () {
        jQuery("#login_blank_over").css('width', '100%');
        jQuery("#login_blank_over > *").css('opacity', '1');
    });
});

jQuery(document).ready(function close_login_blank() {
    jQuery(".closebtn").click(function () {
        jQuery("#login_blank_over").css('width', '0%');
        jQuery("#login_blank_over > *").css('opacity', '0');
    });
});

jQuery(document).ready(function open_Nav_text() {
//        console.log();
    $(".masin").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 650);
        jQuery('#nav_menu').removeClass("collapseNavManu");
        jQuery('#nav_login').removeClass("collapseNavLogin");
        if (jQuery(".masin").attr("class") !== "masin close_click") {
            jQuery(".masin").addClass("close_click");
            jQuery(".close-nav-text").show(500);
            jQuery(".about-text").show(500);
            jQuery(".questions-text").hide(500);
            jQuery(".harcer").removeClass("close_click");
            jQuery(".contact-text").hide(500);
            jQuery(".kap").removeClass("close_click");
        } else {
            jQuery(".about-text").hide(500);
            jQuery(".close-nav-text").hide(500);
            jQuery(".masin").removeClass("close_click");
        }
    });
    $(".harcer").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 650);
        jQuery('#nav_menu').removeClass("collapseNavManu");
        jQuery('#nav_login').removeClass("collapseNavLogin");
        if (jQuery(".harcer").attr("class") !== "harcer close_click") {
            jQuery(".harcer").addClass("close_click");
            jQuery(".close-nav-text").show(500);
            jQuery(".questions-text").show(500);
            jQuery(".about-text").hide(500);
            jQuery(".masin").removeClass("close_click");
            jQuery(".contact-text").hide(500);
            jQuery(".kap").removeClass("close_click");
        } else {
            jQuery(".questions-text").hide(500);
            jQuery(".close-nav-text").hide(500);
            jQuery(".harcer").removeClass("close_click");
        }
    });
    $(".kap").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 650);
        jQuery('#nav_menu').removeClass("collapseNavManu");
        jQuery('#nav_login').removeClass("collapseNavLogin");
        if (jQuery(".kap").attr("class") !== "kap close_click") {
            jQuery(".kap").addClass("close_click");
            jQuery(".close-nav-text").show(500);
            jQuery(".contact-text").show(500);
            jQuery(".questions-text").hide(500);
            jQuery(".harcer").removeClass("close_click");
            jQuery(".about-text").hide(500);
            jQuery(".masin").removeClass("close_click");
        } else {
            jQuery(".contact-text").hide(500);
            jQuery(".close-nav-text").hide(500);
            jQuery(".kap").removeClass("close_click");
        }
    });
    $(".close-nav-text").click(function () {
        jQuery(".close-nav-text").hide(500);
        jQuery(".about-text").hide(500);
        jQuery(".questions-text").hide(500);
        jQuery(".contact-text").hide(500);
        jQuery(".masin").removeClass("close_click");
        jQuery(".harcer").removeClass("close_click");
        jQuery(".kap").removeClass("close_click");
    });
    
});










