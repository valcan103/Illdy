$(function () {
    $(".nav_right > i").click(() => {
        $(".mobile_nav").stop().toggle(700).toggleClass("active");
        check_nav();
    });
});

$(function () {
    $(window).on("resize", () => {
        let width = window.innerWidth;
        check_nav();
        if (width < 1200) {
            $(".mobile").css("display", "flex");
            $(".pc_nav").css("display", "none");
        } else {
            $(".mobile").css("display", "none");
            $(".pc_nav").css("display", "flex");
            $(".mobile_nav").hide();
        }
    });
});

function check_nav() {
    let width = window.innerWidth;
    if ($(".mobile_nav").hasClass("active")) {
        if (width < 780) {
            $(".s1_container").css("height", "1000");
            $(".s1_desc_container").css("bottom", "5%");
            $(".img_container").css("height", "1000");
            $(".img_container").css("background-size", "300%");
            if (width < 400) {
                $(".img_container").css("background-size", "600%");
            }
        } else {
            $(".s1_container").css("height", "1200px");
            $(".s1_desc_container").css("bottom", "20%");
            $(".img_container").css("height", "1200px");
            $(".img_container").css("background-size", "250%");
        }
    } else {
        if (width < 780) {
            $(".s1_container").css("height", "500px");
            $(".s1_desc_container").css("bottom", "10%");
            $(".img_container").css("height", "500px");
            $(".img_container").css("background-size", "cover");
        } else {
            $(".s1_container").css("height", "900px");
            $(".s1_desc_container").css("bottom", "30%");
            $(".img_container").css("height", "900px");
            $(".img_container").css("background-size", "cover");
        }
    }
}

$(function () {
    $(".slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
    });
});

$(function () {
    let scrollY = $(document).scrollTop();
    let project_count_target = 260;
    let clients_count_target = 120;
    let coffees_count_target = 260;
    let excuted = false;

    if (
        $(window).on("scroll", () => {
            scrollY = $(document).scrollTop();
            // console.log(scrollY, $(".section7").offset().top - 1200);
            if (
                (scrollY < $(".section7").offset().top + 300 ||
                    scrollY > $(".section7").offset().top - 1000) &&
                !excuted
            ) {
                excuted = true;
                $({ count: 0 }).animate(
                    { count: project_count_target },
                    {
                        duration: 4000,
                        progress: function () {
                            let now = this.count;
                            $(".projects .count").text(Math.ceil(now));
                        },
                    },
                    "swing"
                );
                $({ count: 0 }).animate(
                    { count: clients_count_target },
                    {
                        duration: 4000,
                        progress: function () {
                            let now = this.count;
                            $(".clients .count").text(Math.ceil(now));
                        },
                    },
                    "swing"
                );
                $({ count: 0 }).animate(
                    { count: coffees_count_target },
                    {
                        duration: 4000,
                        progress: function () {
                            let now = this.count;
                            $(".coffees .count").text(Math.ceil(now));
                        },
                    },
                    "swing"
                );
            }
        })
    );
});
