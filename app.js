let data= {
    x:10,
    y:22,
    a:function(){
        return `<!DOCTYPE html>
                <html>
                    <head>
                        <title>Tarun Gahlot</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <link rel="stylesheet" href="/css/my_style.css" />
                        <script src="/js/my_script_js.js"></script>
                    </head>
                    <body>
                        <!-- Chat Box HTML Start -->
                        <div class="toggle-chat">
                            <div class="user-image">
                                <img src="/images/tarun.jpg" alt="image">
                            </div>
                            <div>
                                <h3 class="username">Ask Tarun</h3>
                                <p class="status">Online</p>
                            </div>
                        </div>
                        <div class="chatbox-shadow"></div>                                    
                        <div class="chatbox ask-anything">
                            <div class="left-parent">
                                <i class="fa fa-expand expand-tchat"></i>
                                <i class="fa fa-compress dexpand-tchat" style="display:none"></i>
                            </div>
                            <div class="close-icon-main" style="cursor: pointer;">
                                <svg style="pointer-events: none;" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path style="pointer-events: none;" d="M17.2361 3.23613C17.9197 2.55254 17.9197 1.44238 17.2361 0.758789C16.5525 0.0751953 15.4424 0.0751953 14.7588 0.758789L9.0002 6.52285L3.23613 0.764258C2.55254 0.080664 1.44238 0.080664 0.758789 0.764258C0.0751953 1.44785 0.0751953 2.55801 0.758789 3.2416L6.52285 9.0002L0.764258 14.7643C0.0806642 15.4479 0.0806642 16.558 0.764258 17.2416C1.44785 17.9252 2.55801 17.9252 3.2416 17.2416L9.0002 11.4775L14.7643 17.2361C15.4479 17.9197 16.558 17.9197 17.2416 17.2361C17.9252 16.5525 17.9252 15.4424 17.2416 14.7588L11.4775 9.0002L17.2361 3.23613Z" fill="white" />
                                </svg>
                            </div>
                            <!-- Top Section -->
                            <div class="chatbox-top bg-overlay-light">
                                <img src="/images/tarun.jpg" alt="Tutor Image">
                                <div>
                                    <h2 class="username">Hello, Mr. Gahlot !<img src="/images/ask-anything-smile.png" style="width:29px;height:29px;" alt="Image"></h2>
                                    <p><span class="user-highlight">I'm Tarun,</span> your personal tutor! Let me guide you through your course journey.</p>
                                </div>
                                <a class="btn btn-primary btn-with-arrow main-chatbox" id="main-chatbox">Start Conversation</a>
                            </div>

                            <!-- Ask Anything Section -->
                            <div class="ask-anything">
                                <h3 class="title">Ask Anything</h3>
                                <!--<div class="suggestion-parent row d-flex-row">
                                    <div class="col-xs-6">
                                        <p class="suggestion">Your personal tutor! Let me guide you through your course journey ?</p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="suggestion">Your personal tutor! Let me guide you through your course journey ?</p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="suggestion">Your personal tutor! Let me guide you through your course journey ?</p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p class="suggestion">Your personal tutor! Let me guide you through your course journey ?</p>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                        <div class="chatbox">
                            <div class="chatbox-header">
                                <div class="left">
                                    <div class="user-image">
                                        <img src="/images/tarun.jpg" alt="image">
                                    </div>
                                    <div>
                                        <h3 class="username">Tarun</h3>
                                        <p class="status">Your Personal Tutor</p>
                                    </div>
                                </div>
                                <div class="right-parent">
                                    <i class="fa fa-expand expand-tchat" ></i>
                                    <i class="fa fa-compress dexpand-tchat"style="display:none"></i>
                                    <i class="fa fa-minus mini-tchat"></i>
                                    <div class="right close-icon" style="cursor: pointer;">
                                        <svg style="pointer-events: none;" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path style="pointer-events: none;" d="M17.2361 3.23613C17.9197 2.55254 17.9197 1.44238 17.2361 0.758789C16.5525 0.0751953 15.4424 0.0751953 14.7588 0.758789L9.0002 6.52285L3.23613 0.764258C2.55254 0.080664 1.44238 0.080664 0.758789 0.764258C0.0751953 1.44785 0.0751953 2.55801 0.758789 3.2416L6.52285 9.0002L0.764258 14.7643C0.0806642 15.4479 0.0806642 16.558 0.764258 17.2416C1.44785 17.9252 2.55801 17.9252 3.2416 17.2416L9.0002 11.4775L14.7643 17.2361C15.4479 17.9197 16.558 17.9197 17.2416 17.2361C17.9252 16.5525 17.9252 15.4424 17.2416 14.7588L11.4775 9.0002L17.2361 3.23613Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="cap-svg" style="pointer-events: none;">
                                    <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1023_438)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.2721 59.7414L106.48 38.3568C110.928 35.935 113.698 31.2655 113.698 26.2003C113.698 21.1351 110.928 16.4656 106.48 14.0439L67.2721 -7.34077C60.7744 -10.8864 52.9234 -10.8864 46.4257 -7.34077L7.2179 14.0439C2.77003 16.4656 0 21.1351 0 26.2003C0 31.2655 2.77003 35.935 7.2179 38.3568L46.4257 59.7414C52.9234 63.287 60.7744 63.287 67.2721 59.7414Z" fill="white" fill-opacity="0.2" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1016 51.6758V64.1172C15.1016 69.6414 18.3939 74.6433 23.467 76.8276L51.3652 88.8654C54.8633 90.377 58.8363 90.377 62.3345 88.8654C68.6185 86.1587 82.7852 80.0409 90.2326 76.8276C95.3057 74.6433 98.5981 69.6414 98.5981 64.1172V51.6758L71.064 66.6893C62.2 71.525 51.4997 71.525 42.6356 66.6893L15.1016 51.6758Z" fill="white" fill-opacity="0.2" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1023_438">
                                                <rect width="81" height="80" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div class="exit-tchat-msg" id="closedMessage_tchat">
                                <p>Thank you for chatting with us today! If you have any more questions, feel free to reach out. Have a wonderful day!</p><br><br>
                                <button type="submit" class="btn btn-primary exit-tchat">Exit Chat</button>
                                <button type="reset" class="btn btn-primary cancel-tchat">Cancel</button>
                            </div>
                            <div class="chatbox-inner">
                                <div class="chat-area" id="messages_tchat"></div>
                            </div>
                            <div class="chatbox-footer" style="text-align: center;">
                                <button class="btn reset mb5px" id="start-over-tchat" style="display :none !important;">
                                    <i class="fa fa-repeat"></i>
                                    Start Over
                                </button>
                                <form action="">
                                    <div class="typing-box">
                                        <!--<input id="voice-output" type="text" name="keyword" placeholder="Type a Message...">-->
                                        <input id="input_tchat" type="text" name="keyword" autocomplete="off" placeholder="Type a Message..." >
                                        <!--<span class="mic disabled">
                                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.25 3.75V10C3.25 12.0703 4.92969 13.75 7 13.75C9.07031 13.75 10.75 12.0703 10.75 10H7.625C7.28125 10 7 9.71875 7 9.375C7 9.03125 7.28125 8.75 7.625 8.75H10.75V7.5H7.625C7.28125 7.5 7 7.21875 7 6.875C7 6.53125 7.28125 6.25 7.625 6.25H10.75V5H7.625C7.28125 5 7 4.71875 7 4.375C7 4.03125 7.28125 3.75 7.625 3.75H10.75C10.75 1.67969 9.07031 0 7 0C4.92969 0 3.25 1.67969 3.25 3.75ZM12 9.375V10C12 12.7617 9.76172 15 7 15C4.23828 15 2 12.7617 2 10V8.4375C2 7.91797 1.58203 7.5 1.0625 7.5C0.542969 7.5 0.125 7.91797 0.125 8.4375V10C0.125 13.4805 2.71094 16.3555 6.0625 16.8125V18.125H4.1875C3.66797 18.125 3.25 18.543 3.25 19.0625C3.25 19.582 3.66797 20 4.1875 20H7H9.8125C10.332 20 10.75 19.582 10.75 19.0625C10.75 18.543 10.332 18.125 9.8125 18.125H7.9375V16.8125C11.2891 16.3555 13.875 13.4805 13.875 10V8.4375C13.875 7.91797 13.457 7.5 12.9375 7.5C12.418 7.5 12 7.91797 12 8.4375V9.375Z" fill="black" fill-opacity="0.5" />
                                            </svg>
                                        </span>-->
                                        <button type="button" id="send_tchat">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1023_472)">
                                                    <path d="M19.4574 0.218899C19.852 0.492337 20.059 0.964993 19.9848 1.43765L17.4848 17.6876C17.4262 18.0666 17.1957 18.3986 16.8598 18.5861C16.5238 18.7736 16.1215 18.797 15.766 18.6486L11.0942 16.7072L8.41838 19.6017C8.07072 19.9806 7.52384 20.1056 7.04338 19.9181C6.56291 19.7306 6.25041 19.2658 6.25041 18.7501V15.4845C6.25041 15.3283 6.309 15.1798 6.41447 15.0666L12.9613 7.92202C13.1879 7.67593 13.1801 7.29702 12.9457 7.06265C12.7113 6.82827 12.3324 6.81265 12.0863 7.03531L4.14103 14.0939L0.691813 12.3673C0.277751 12.1603 0.0121256 11.7462 0.000406857 11.2853C-0.0113119 10.8244 0.230876 10.3947 0.629313 10.1642L18.1293 0.164212C18.5473 -0.0740694 19.0629 -0.0506319 19.4574 0.218899Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1023_472">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Chat Box HTML End -->
                        <!-- My Chat Box HTML Start -->
                        <!--<div class="main-class">
                            <div class="msg-box" data-id="">
                                <div class="message msg-container-reciver messages">
                                    <div class="reciver-text" data-id="" style="left: -6px;">
                                        <div class="chatbox-chat reciver active">
                                            <span class="text">
                                                <p class="justify-txt" id="">Hello! How can i assist you.</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="message msg-container-sender messages">
                                    <div class="chatbox-chat sender active">
                                        <span class="text">
                                            <p class="justify-txt" id="">Hello! How can i assist you.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="message msg-container-reciver messages">
                                    <div id="loader_chat" class="loader-bot">
                                        <div class="msg-wrapper">
                                            <div class ="loader_msg1" id="loader_msg1" >Analyzing data</div>
                                            <div class ="loader_msg2" id="loader_msg2" style="display:none" >Optimizing response</div>
                                            <div class ="loader_msg3" id="loader_msg3" style="display:none" >Preparing insights</div>
                                            <div class="red ball" style="opacity: 0.5;"></div>
                                            <div class="blue ball" style="animation-delay:0.25s; opacity: 0.7;"></div>  
                                            <div class="yellow ball" style="background: #0D64BE;animation-delay:0.5s;"></div>  
                                        </div>
                                    </div>
                                    <div class="reciver-text" data-id="">
                                        <div class="chatbox-chat reciver active">
                                            <span class="text">
                                                <p class="justify-txt" id="">Hello! How can i assist you.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="chat-icons">
                                        <div class="paginations" id="pagi_" data-id="">
                                            <i class="fa-solid fa-chevron-left" id="prev_" title="Privious"></i> 
                                                <span id="page_count_">/</span> 
                                            <i class="fa-solid fa-chevron-right" id="next_" title="Next"></i>
                                        </div>
                                        <img src="" class="stop-speak"  style="display:none;">
                                        <i class="fa-solid fa-volume-high speak-text" title="Speak"></i>
                                        <i class="fa fa-stop-circle stop-speak" title="Stop" aria-hidden="true" style="display:none;"></i>
                                        <i class="fa-solid fa-clone copy-respon" title="Copy"></i>
                                        <i class="fa-solid fa-rotate re-generate" data-original-id="" title="Re-Ganerate"></i>
                                    </div>
                                    <div class="copyPopup">
                                        <i class="fa-solid fa-check"></i>Response copied to clipboard!
                                    </div>
                                </div>
                                <div class="message msg-container-sender messages">
                                    <div class="chatbox-chat sender active">
                                        <span class="text">
                                            <p class="justify-txt" id="">Hello! How can i assist you.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="message msg-container-reciver messages">
                                    <div id="loader_chat" class="loader-bot">
                                        <div class="msg-wrapper">
                                            <div class ="loader_msg1" id="loader_msg1" >Analyzing data</div>
                                            <div class ="loader_msg2" id="loader_msg2" style="display:none" >Optimizing response</div>
                                            <div class ="loader_msg3" id="loader_msg3" style="display:none" >Preparing insights</div>
                                            <div class="red ball" style="opacity: 0.5;"></div>
                                            <div class="blue ball" style="animation-delay:0.25s; opacity: 0.7;"></div>  
                                            <div class="yellow ball" style="background: #0D64BE;animation-delay:0.5s;"></div>  
                                        </div>
                                    </div>
                                    <div class="reciver-text" data-id="">
                                        <div class="chatbox-chat reciver active">
                                            <span class="text">
                                                <p class="justify-txt" id="">Hello! How can i assist you.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="chat-icons">
                                        <div class="paginations" id="pagi_" data-id="">
                                            <i class="fa-solid fa-chevron-left" id="prev_" title="Privious"></i> 
                                                <span id="page_count_">/</span> 
                                            <i class="fa-solid fa-chevron-right" id="next_" title="Next"></i>
                                        </div>
                                        <img src="" class="stop-speak"  style="display:none;">
                                        <i class="fa-solid fa-volume-high speak-text" title="Speak"></i>
                                        <i class="fa fa-stop-circle stop-speak" title="Stop" aria-hidden="true" style="display:none;"></i>
                                        <i class="fa-solid fa-clone copy-respon" title="Copy"></i>
                                        <i class="fa-solid fa-rotate re-generate" data-original-id="" title="Re-Ganerate"></i>
                                    </div>
                                    <div class="copyPopup">
                                        <i class="fa-solid fa-check"></i>Response copied to clipboard!
                                    </div>
                                </div>
                            </div>
                        </div>-->
                        <!-- My Chat Box HTML End -->
                    </body>
                </html>`;
    }
}

module.exports= data;