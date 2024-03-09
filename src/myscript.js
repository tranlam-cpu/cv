

    
    // let tween=gsap.to('.ticker',{
    //     xPercent: -50,
    //     duration: 10,
    //     ease: "linear"
    // })

    tween=gsap.timeline({repeat: -1});

    tween.to('.ticker', {
        xPercent: -30,
        duration: 5,
        ease: "linear"
    })
    .to('.ticker', {
        xPercent: 0,
        duration: 5,
        ease: "linear"
    });

    
    $('.ticker-main').on('mouseover', function() {
        tween.pause();
    });
    $('.ticker-main').on('mouseout', function() {
        tween.play();
    });



    gsap.to(tween, {timeScale: 1})

    items = document.querySelectorAll('.items img');

    items.forEach((item,index)=>{
        // item.src = './img/iot' + (index + 1) +'.png'
        
        item.addEventListener('click',()=>{
            $("#popup-modal > div").html(`<img src="${item.src}" width="100%" height="100%" />`)
            $("#modal-btn").click();
        })

        item.addEventListener('mouseover', function() {
            // On mouseover, animate opacity to 1
            gsap.to(this, {opacity: 1, duration: 0.6});
        });

        item.addEventListener('mouseout', function() {
            // On mouseout, animate opacity back to 0.5
            gsap.to(this, {opacity: 0.5, duration: 0.6});
        });
    })

    tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.wrapper',
            pin:true,
            scrub: 2,
            start: "top top+50%",
            end: "50%+=500px",
        }
    })

    tl.to('.items img',{scale: 1}, 0)
    .to('.items',{scale: 1.4, rotate:0},0)
    .to('.items',{scale:0.9},0.6)

    tl2=gsap.timeline();

    tl2.from('.items img',1,{
        x: 500, 
        scale:1.4,
        stagger:0.2,
    })
    .to('.items img',2,{
        x: 0, 
        scale:1.4,
        stagger:0.2,
    })

