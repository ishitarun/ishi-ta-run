$(document).ready(function(){
    const mainClass = $('.main-class');
    const msgBox = $('.msg-box');
    const loadMsg = $('.loadMsg');

    const copyClick = $('.copy-respon',msgBox);
    const copyPopup = $('.copyPopup',loadMsg)
    copyClick.click(function(){
        copyPopup.css('transform', 'scale(1)');
        setTimeout(function() {
            copyPopup.css('transform', 'scale(0)');
        }, 1000);
    });

    const loader = $('.loader-bot');
    const re_generate = $('.re-generate');
    re_generate.click(function(){
        loader.show();
        setTimeout(()=>{
            $('.loader_msg1').hide();
            $('.loader_msg2').show();
            setTimeout(()=>{
                $('.loader_msg2').hide();
                $('.loader_msg3').show();
                setTimeout(()=>{
                    $('.loader_msg3').hide();
                    $('.loader_msg1').show();
                    setTimeout(()=>{
                        loader.hide();
                    },1000);
                },1000);
            },1000);
        },1000);
    });
});