$(function () {

    window.addEventListener('load', () => {
        const intro = document.querySelector('._intro')
        const text1 = document.getElementById('text1')
        const text2 = document.getElementById('text2')

        setTimeout(() => {
            text1.style.opacity = '0'
            text2.style.opacity = '1'
        }, 1000)

        setTimeout(() => {
            intro.style.opacity = '0'
            intro.style.pointerEvents = 'none'
        }, 3000)
    })

    setTimeout(() => {
        intro.classList.add('hide')
    }, 2000)

    function smoothScrollTo(targetPos, duration = 300) {
        const start = window.pageYOffset
        const distance = targetPos - start
        let startTime = null

        function animation(currentTime) {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            window.scrollTo(0, start + distance * progress)
            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation)
    }

    $(function () {
        document.querySelectorAll('ul li[data-target]').forEach(li => {
            li.addEventListener('click', () => {
                const targetId = li.getAttribute('data-target')
                const targetSection = document.getElementById(targetId)
                if (targetSection) {
                    const topPos = window.pageYOffset + targetSection.getBoundingClientRect().top - 150
                    smoothScrollTo(topPos, 1200)
                }
            })
        })
    })

    document.addEventListener("DOMContentLoaded", function () {
        const scrollBoxes = document.querySelectorAll(".scroll-box")

        scrollBoxes.forEach((box) => {
            const indicator = box.querySelector(".scroll-indicator")

            // 모바일이면 처음엔 보이게
            if (window.innerWidth <= 425) {
                indicator.style.opacity = "1"
            }

            const hideIndicatorOnce = () => {
                // 조건: 모바일 + 스크롤 20px 이상
                if (window.innerWidth <= 425 && box.scrollTop > 20) {
                    indicator.style.opacity = "0"
                    // 한 번만 실행되도록 이벤트 제거
                    box.removeEventListener("scroll", hideIndicatorOnce)
                }
            }

            box.addEventListener("scroll", hideIndicatorOnce)
        })
    })


    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            const scrollBoxes = document.querySelectorAll(".scroll-box")

            scrollBoxes.forEach((box) => {
                const indicator = box.querySelector(".scroll-indicator")

                if (window.innerWidth <= 425) {
                    indicator.style.opacity = "1"
                }

                const hideIndicatorOnce = () => {
                    if (window.innerWidth <= 425 && box.scrollTop > 20) {
                        indicator.style.opacity = "0"
                        box.removeEventListener("scroll", hideIndicatorOnce)
                    }
                }

                box.addEventListener("scroll", hideIndicatorOnce)
            })
        }, 300)
    })

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 300) {
                $('.gotop').fadeIn()
            } else {
                $('.gotop').fadeOut()
            }
        })

        $('.gotop').click(function (e) {
            e.preventDefault()
            $('html,body').stop().animate({
                scrollTop: 0
            }, 800)

        })
    })

    $(function () {
        $('.tab-menu li').click(function () {
            const tabId = $(this).data('tab')

            $('.tab-menu li').removeClass('active')
            $(this).addClass('active')

            $('.tab-content').removeClass('active')
            $('#' + tabId).addClass('active')
        })
    })
})

$(function () {
    const sections = ['.main2', '.main3', '.main4', '.main5', '.main6', '.main7', '.main8']
    for (let i = 0; i < sections.length; i++) {
        $('.m' + (i + 1)).on('click', function (e) {
            e.preventDefault()
            const targetOffset = $(sections[i]).offset().top - 150
            $('html, body').animate({ scrollTop: targetOffset }, 1000)
        })
    }


    document.querySelectorAll('.scroll-box').forEach(box => {
        const indicator = box.querySelector('.scroll-indicator')

        box.addEventListener('scroll', () => {
            indicator.style.opacity = '0'
        });

        box.addEventListener('mouseleave', () => {
            indicator.style.opacity = '0'
        });

        box.addEventListener('mouseenter', () => {
            if (box.scrollTop === 0) {
                indicator.style.opacity = '1'
            }
        })
    })
})

