let data=  `<!DOCTYPE html>
                <html>
                    <head>
                        <tilte>Tarun Gahlot</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <style>
                            .loader-bot{
                                display:none;
                                padding: 0 0 0 10px;
                                margin-bottom: 5px;
                            }
                            .copyPopup {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 50px;
                                background: #611616;
                                padding: 0px 7px; 
                                float: left;
                                height: 30px;
                                margin-left: 0px;
                                margin-top: 5px;
                                color: #ffffff;
                                position: relative;
                                top: 85px;
                            }
                            .msg-wrapper {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 50px;
                                background: #611616;
                                padding: 0px 7px; 
                                float: left;
                                height: 30px;
                                margin-left: 0px;
                                margin-top: 5px;
                                color: #ffffff;
                                top: 0px;
                            }
                            .msg-wrapper .ball {
                                width: 2px;
                                height: 2px;
                                border-radius: 100%;
                                margin: 0 2px;
                                opacity: 0;
                                background: rgba(13, 100, 190);
                                animation: 2s msgbounce ease infinite;
                            }
                            @keyframes msgbounce {
                                50% {
                                    /* transform: translateY(5px); */
                                    opacity: 1;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div id="loader_chat" class="loader-bot">
                            <div class="msg-wrapper"   style="">
                                <div class = "loader_msg1" id="loader_msg1" >Analyzing data</div>
                                <div class = "loader_msg2" id="loader_msg2" style="display:none" >Optimizing response</div>
                                <div class = "loader_msg3" id="loader_msg3" style="display:none" >Preparing insights</div>
                                <div class="red ball" style="opacity: 0.5;"></div>
                                <div class="blue ball" style="animation-delay:0.25s; opacity: 0.7;"></div>  
                                <div class="yellow ball" style="background: #0D64BE;animation-delay:0.5s;"></div>  
                            </div>
                        </div>
                        <div class="copyPopup">
                            <i class="fa-solid fa-check"></i> Response copied to clipboard!
                        </div>
                        <div>
                            <div class="reciver-text" data-id="">
                                <div class="chatbox-chat reciver active">
                                    <span class="text" style="background-color:;color:">
                                        <p class="justify-txt" id=""></p>
                                    </span>
                                </div>
                            </div>
                            <div class="chat-icons">
                                <div class="pagination" id="pagi_" data-id="">
                                    <i class="fa-solid fa-chevron-left" id="prev_" title="Privious"></i> 
                                        <span id="page_count_">/</span> 
                                    <i class="fa-solid fa-chevron-right" id="next_" title="Next"></i>
                                </div>
                                <img src="" class="stop-speak"  style="display:none;">
                                <i class="fa-solid fa-volume-high speak-text" title="Speak"></i>
                                <!-- <i class="fa fa-stop-circle stop-speak" title="Stop" aria-hidden="true" style="display:none;"></i> -->
                                <i class="fa-solid fa-clone copy-respon" title="Copy"></i>
                                <i class="fa-solid fa-rotate re-generate" data-original-id="" title="Re-Ganerate"></i>
                            </div>
                        </div>
                        <script>
                            $(document).ready(function(){
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
                        </script>
                    </body>
                </html>`

module.exports= data;