document.addEventListener("DOMContentLoaded", function () {

    var tchat_element_id_bot = document.querySelector("script[tchat_element_id_bot]"); 
    var element_id_tchat="";
    if(tchat_element_id_bot){
        element_id_tchat = tchat_element_id_bot.getAttribute("tchat_element_id_bot"); 
    }
    if(!element_id_tchat){
        element_id_tchat = "u9sst8htz0xhrrds";
    }

    const tchat_course_id = document.querySelector("script[tchat_course_id]").getAttribute("tchat_course_id");
    const tchat_user_name = document.querySelector("script[tchat_course_id][tchat_user_name]").getAttribute("tchat_user_name");

    const src_tchat_bot = document.querySelector("script[tchat_element_id_bot][tchat_course_id]").getAttribute("src");
    const segments_tchat_bot = src_tchat_bot.split("/chatbot/")[0];

    function generateSessionId_tchat_bot() {
        let timestamp_tchat_bot = new Date().getTime(); // get current timestamp
        let random_tchat_bot = Math.floor(Math.random() * 1000000); // generate random number
        return `${timestamp_tchat_bot}-${random_tchat_bot}`; // combine timestamp and random number
    }
    if (localStorage.getItem("visitor_id_tchat_bot") === undefined || localStorage.getItem("visitor_id_tchat_bot") === "" || localStorage.getItem("visitor_id_tchat_bot") === null) {
        const unique_id_tchat_bot = localStorage.getItem("visitor_id_tchat_bot");
        localStorage.setItem("visitor_id_tchat_bot", generateSessionId_tchat_bot());
    }
    generateSessionId_tchat_bot();

    const baseUrl_tchat_bot = segments_tchat_bot + "/";
    const chatbot_question_tchat = ["Your personal tutor! Let me guide you through your course journey ?","Your personal tutor! Let me guide you through your course journey ?","Your personal tutor! Let me guide you through your course journey ?","Your personal tutor! Let me guide you through your course journey ?"];

    (async () => {
        // let htmlData_tchat_bot = "";
        let htmlData_tchat_bot = `  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css" integrity="sha512-EaaldggZt4DPKMYBa143vxXQqLq5LE29DG/0OoVenoyxDrAScYrcYcHIuxYO9YNTIQMgD8c8gIUU8FQw7WpXSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                                    <style>
                                        /* chatbox */
                                        .chatbox-shadow{
                                            position: fixed;
                                            height: 100%;
                                            width: 100%;
                                            background: rgba(0, 0, 0, 0.7);
                                            top: 0;
                                            left: 0;
                                            z-index: 999;
                                            display: none;
                                        }
                                        .toggle-chat{
                                            box-shadow: 0px 2px 4px rgba(var(--primary-rgb), 0.9);
                                            cursor: pointer;
                                            padding: 8px;
                                            min-width: 190px;
                                            background: var(--primary);
                                            border-radius: 50px;
                                            border-bottom-right-radius: 0;
                                            position: fixed;
                                            z-index: 999999;
                                            bottom: 30px;
                                            right: 30px;
                                            display: flex;
                                            align-items: center;
                                            gap: 8px;
                                            transition: 0.5s;
                                            transform-origin: bottom right;
                                            transform: scale(1);
                                        }
                                        .toggle-chat.close{
                                            transform: scale(0);
                                        }
                                        .toggle-chat .username,.toggle-chat .status,
                                        .chatbox-header .username,.chatbox-header .status{
                                            color: var(--white);
                                        }
                                        .toggle-chat .username,
                                        .chatbox-header .username{
                                            font-weight: 600;
                                            font-size: 18px;
                                        }
                                        .chatbox{
                                            background: var(--white);
                                            border-radius: 10px;
                                            border-bottom-right-radius: 0;
                                            border: 1px solid var(--white);
                                            overflow: hidden;
                                            position: fixed;
                                            width: 100%;
                                            max-width: 400px;
                                            right: 30px;
                                            bottom: 30px;
                                            height: calc(100% - 60px);
                                            max-height: 700px;
                                            transition: 0.5s;
                                            z-index: 99999;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: space-between;
                                            transform-origin: bottom right;
                                            transform: scale(0);
                                        }
                                        @media only screen and (max-width : 575px){
                                            .chatbox {
                                                right: 15px;
                                                bottom: 15px;
                                                width: calc(100% - 30px);
                                                height: calc(100% - 30px);
                                                max-height: 100%;
                                            }
                                            .toggle-chat{
                                                right: 15px;
                                                bottom: 15px;
                                                transform: scale(0.7);
                                            }
                                        }
                                        .chatbox.open{
                                            transform: scale(1);
                                        }
                                        .chatbox .chatbox-header{
                                            color: var(--white);
                                            padding: 15px 20px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;
                                            background: var(--primary);
                                            position: relative;
                                        }
                                        .chatbox .chatbox-header .left{
                                            display: flex;
                                            align-items: center;
                                            gap: 10px;
                                        }
                                        .chatbox .chatbox-header .cap-svg{
                                            position: absolute;
                                            top: 0;
                                            right: 0;
                                        }
                                        .chatbox .heading{
                                            border-bottom: 1px solid rgba(255, 255, 255, 0.10);
                                            background: rgba(255, 255, 255, 0.05);
                                            padding: 10px 30px;
                                            border-radius: 10px 10px 0 0;
                                        }
                                        .chatbox-inner{
                                            position: relative;
                                            padding: 20px;
                                            background: var(--white);
                                            height: calc(100% - 193px);
                                        }
                                        .chatbox-inner .chat-area{
                                            display: flex;
                                            overflow-y: scroll;
                                            flex-direction: column;
                                            gap: 10px;
                                            height: 100%;
                                            scrollbar-width: none;
                                            scrollbar-color: transparent transparent;
                                        }
                                        .chatbox-inner .chat-area::-webkit-scrollbar{
                                            display: none;
                                        }
                                        .chatbox-chat{
                                            width: 100%;
                                        }
                                        .chatbox-chat .text{
                                            width: fit-content;
                                            max-width: 90%;
                                            padding: 10px;
                                            display: block;
                                            text-transform: capitalize;
                                        }
                                        .chatbox-chat.reciver .text {
                                            border: 1px solid var(--border-color);
                                            border-radius: 0px 10px 10px 10px;
                                        }
                                        .chatbox-chat.sender{
                                            display: flex;
                                            justify-content: end;
                                        }
                                        .chatbox-chat.sender .text{
                                            border-radius: 10px 0px 10px 10px;
                                            background: var(--primary);
                                            color: var(--white);
                                        }
                                        .typing-box{
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            padding: 10px 20px;
                                            border-top: 1px solid var(--border-color);
                                            background: var(--white);
                                            gap: 15px;
                                        }
                                        .typing-box input{
                                            background: transparent;
                                            border: 0;
                                            outline: none;
                                            box-shadow: none;
                                            width: 100%;
                                            color: rgba(0, 0, 0, 0.50);
                                        }
                                        .typing-box .mic{
                                            cursor: pointer;
                                            position: relative;
                                            display: inline-flex;
                                        }
                                        .typing-box .mic svg path{
                                            transition: 0.5s;
                                        }
                                        .typing-box .mic:not(.disabled) svg path{
                                            fill: var(--primary);
                                            fill-opacity: 1;
                                        }
                                        .typing-box .mic::before {
                                            position: absolute;
                                            transition: 0.5s;
                                            content: '';
                                            height: 2px;
                                            width: 0;
                                            top: 50%;
                                            left: 50%;
                                            border-radius: 25px;
                                            background: rgb(127 127 127);
                                            transform: translate(-50%, -50%) rotate(-45deg);
                                        }
                                        .typing-box .mic.disabled::before {
                                            width: 26px;
                                        }
                                        .typing-box button{
                                            border: 0;
                                            outline: 0;
                                            padding: 10px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            background: var(--primary) !important;
                                            border-radius: 5px;
                                        }
                                        .chatbot-dropdown{
                                            cursor: pointer;
                                            position: inherit;
                                        }
                                        .chatbox.ask-anything {
                                            padding: 30px 20px;
                                            gap: 30px;
                                            overflow-y: auto;
                                            scrollbar-width: none;
                                            scrollbar-color: transparent transparent;
                                        }
                                        .chatbox::-webkit-scrollbar {
                                            display: none;	
                                        }
                                        .chatbox.ask-anything .chatbox-top.bg-overlay-light::after{
                                            height: calc(100% + 30px);
                                            width: calc(100% + 40px);
                                            top: -30px;
                                            left: 50%;
                                            transform: translateX(-50%);
                                            background: linear-gradient(180deg, rgba(var(--primary-rgb), 0.5), rgba(var(--primary-rgb), 0));
                                            opacity: 1;
                                        }
                                        .chatbox.ask-anything .chatbox-top{
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            flex-direction: column;
                                            gap: 20px;
                                        }
                                        .chatbox.ask-anything .chatbox-top .username{
                                            font-weight: 700;
                                            font-size: 28px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            gap: 5px;
                                            color: var(--primary);
                                        }
                                        .chatbox.ask-anything .chatbox-top p{
                                            font-size: 16px;
                                            text-align: center;
                                            color: rgba(0, 0, 0, 0.50);
                                        }
                                        .chatbox.ask-anything .chatbox-top .user-highlight{
                                            font-weight: 600;
                                            text-decoration: underline;
                                            color: var(--primary);
                                        }
                                        .chatbox.ask-anything .ask-anything .title{
                                            text-align: center;
                                            font-weight: 600;
                                            font-size: 16px;
                                            color: rgba(0, 0, 0, 0.5);
                                            margin-bottom: 15px;
                                        }
                                        .chatbox.ask-anything .ask-anything .suggestion-parent .suggestion{
                                            height: 100%;
                                            background: rgba(var(--primary-rgb),0.1);
                                            border: 1px solid rgba(var(--primary-rgb),0.2);
                                            padding: 10px;
                                            color: rgba(0, 0, 0, 0.5);
                                            margin: 0;
                                            border-radius: 5px;
                                        }
                                        .chatbox.ask-anything .ask-anything .suggestion-parent.row.d-flex-row{
                                            row-gap: 10px;
                                            margin-right: -5px;
                                            margin-left: -5px;
                                        }
                                        .chatbox.ask-anything .ask-anything .suggestion-parent.row.d-flex-row > *{
                                            padding-left: 5px;
                                            padding-right: 5px;
                                        }
                                        .chatbox.ask-anything .close-icon-main{
                                            position: absolute;
                                            top: 20px;
                                            right: 20px;
                                            z-index: 1;
                                        }
                                        .chatbot-menu{
                                            margin: 0;
                                            left: 5px;
                                            top: calc(100% + 5px);
                                            box-shadow: 0 0 2.3125rem rgba(8, 21, 66, 0.09);
                                            border: 0;
                                            padding: 10px 0;
                                        }
                                        .chatbot-menu a{
                                            color: rgba(0, 0, 0, 0.5) !important;
                                            padding: 7px 20px !important;
                                        }
                                        .right-parent,.left-parent{
                                            display: flex;
                                            align-items: center;
                                            gap: 15px;
                                        }
                                        .chatbox.ask-anything .left-parent{
                                            position: absolute;
                                            top: 20px;
                                            left: 20px;
                                            z-index: 1;
                                        }
                                        .right-parent i,.left-parent i{
                                            font-size: 18px;
                                            cursor: pointer;
                                            color: var(--white);
                                        }
                                        .chatbox.expand-chatbox-tchat{
                                            max-width:700px;
                                            max-height:1000px;
                                        }
                                        #closedMessage_tchat {
                                            display: block;
                                            background: var(--white);
                                            padding: 20px 10px;
                                            border-radius: 10px;
                                            text-align: center;
                                            display: block;
                                            position: absolute;
                                            top: 50%;
                                            z-index: 1000;
                                            left: 50%;
                                            transform: translate(-50%, -50%);
                                            width: 90%;
                                            font-size: 16px;
                                            line-height: 24px;
                                            box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.6);
                                        }
                                        .copyPopupTchat{
                                            font-size: 10px;
                                            font-weight: 600;
                                            max-width: 120px;
                                            position: relative;
                                            top: -47px;
                                            padding: 5px;
                                            background: var(--white);
                                            color: var(--primary);
                                            border-radius: 10px;
                                            text-wrap: nowrap;
                                            border: 1px solid var(--border-color);
                                            display: flex;
                                            align-items: bottom center;
                                            gap: 5px;
                                            transform-origin: center;
                                            transform: scale(0);
                                            transition: 0.4s ease;
                                            margin-bottom: -32px;
                                        }
                                        .copyPopupTchat i{
                                            font-size: 11px;
                                        }
                                        /* chatbox */
                                    </style>
                                    <div class="toggle-chat">
                                        <div class="user-image">
                                            <img src="${baseUrl_tchat_bot}assets/front_end/themefour/theme-images/chat-user-status.png" alt="image">
                                        </div>
                                        <div>
                                            <h3 class="username">Ask Rayan <?php echo $member_logged_in['name']; ?></h3>
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
                                            <img src="${baseUrl_tchat_bot}assets/front_end/themefour/theme-images/ask-anything-img.png" alt="Tutor Image">
                                            <div>
                                                <h2 class="username">Hello, ${tchat_user_name} !<img src="${baseUrl_tchat_bot}assets/front_end/themefour/theme-images/ask-anything-smile.png" alt="Image"></h2>
                                                <p><span class="user-highlight">I'm Rayan,</span> your personal tutor! Let me guide you through your course journey.</p>
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
                                                    <img src="${baseUrl_tchat_bot}assets/front_end/themefour/theme-images/chatbot-user-image.png" alt="image">
                                                </div>
                                                <div>
                                                    <h3 class="username">Rayan</h3>
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
                                    </div>`;
                            
        let copilot_tchat_bot = document.getElementById(element_id_tchat);
        copilot_tchat_bot.innerHTML += htmlData_tchat_bot;

        $(document).ready(function() {
            setTimeout(() => {
                const chatboxHeader = $('.chatbox-header');
                const chatboxInner = $('.chatbox-inner');
                const messages_tchat = $("#messages_tchat");
                const suggestion_parent_tchat = $('.suggestion-parent');
                const expand_tchat = $('.expand-tchat');
                const dexpand_tchat = $('.dexpand-tchat');
                const exit_tchat = $('.exit-tchat-msg');
                const typingBox = $('.typing-box');
                const chatboxFooter = $('.chatbox-footer');
                const chatBox = $('.chatbox');
                const toggleChat = $('.toggle-chat');
                const chatboxShadow = $('.chatbox-shadow');
                let type_tchat = "training";
                chatboxInner.css('height', `calc(100% - ${chatboxHeader.outerHeight(true) + chatboxFooter.outerHeight(true)}px)`);

                var ques_html_tchat = "";
                for (var i = 0; i < chatbot_question_tchat.length; i++) {
                    ques_html_tchat += `<div data-value-ques-tchat="${chatbot_question_tchat[i]}" id="ques_tchat_${i}" class="ques col-xs-6">
                                            <p class="suggestion">${(i+1)+') '+chatbot_question_tchat[i]}</p>
                                        </div>`;
                }
                suggestion_parent_tchat.html(ques_html_tchat);

                // let value_ques_tchat;
                // suggestion_parent_tchat.on('click', '.ques', function() {
                //     value_ques_tchat = $(this).find('.suggestion').text();
                //     console.log(value_ques_tchat);
                //     addMessage_tchat(value_ques_tchat);
                // });
                
                toggleChat.on('click', function() {
                    $(this).addClass('close');
                    // if(messages_tchat.html() == ''){
                        $('.chatbox.ask-anything').addClass('open');
                    // }else{
                    //     $('.chatbox.ask-anything').removeClass('open');
                    //     $('.chatbox:not(.ask-anything)').addClass('open');
                    // }
                    exit_tchat.hide();
                    chatboxShadow.css('display', 'block').hide().fadeIn(500);
                });

                $(document).on('click', function(e) {
                    if ($(e.target).hasClass('close-icon-main') || $(e.target).hasClass('mini-tchat') || $(e.target).hasClass('chatbox-shadow')) {
                        chatAddRemove();
                    }
                    if ($(e.target).hasClass('close-icon')) {
                        exit_tchat.show();
                    }
                    if ($(e.target).hasClass('cancel-tchat')) {
                        exit_tchat.hide();
                    }
                    if ($(e.target).hasClass('exit-tchat')) {
                        messages_tchat.html('');
                        // dexpand_tchat.hide();
                        // expand_tchat.show();
                        chatAddRemove();
                        // chatBox.removeClass('expand-chatbox-tchat');
                    }
                    if ($(e.target).hasClass('main-chatbox')) {
                        $('.chatbox.ask-anything').removeClass('open');
                        $('.chatbox:not(.ask-anything)').addClass('open');
                    }
                    if ($(e.target).hasClass('expand-tchat')) {
                        expand_tchat.hide();
                        dexpand_tchat.show();
                        chatBox.addClass('expand-chatbox-tchat');
                    }
                    if ($(e.target).hasClass('dexpand-tchat')) {
                        dexpand_tchat.hide();
                        expand_tchat.show();
                        chatBox.removeClass('expand-chatbox-tchat');
                    }
                });

                function chatAddRemove(){
                    chatBox.removeClass('open');
                    toggleChat.removeClass('close');
                    chatboxShadow.fadeOut(500, function() {
                        $(this).css('display', 'none');
                    });
                }

                const $input_tchat = $('#input_tchat');
                const $send_tchat = $('#send_tchat');
                
                $send_tchat.on('click', function() {
                    input_msg_tchat();
                });

                $input_tchat.on('keypress', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        input_msg_tchat();
                    }
                });

                function input_msg_tchat() {
                    let message_tchat = $input_tchat.val();
                    if (message_tchat.trim() !== "") {
                        $input_tchat.val('');
                        console.log(message_tchat);
                        var send_ques_id_tchat = addMessage_tchat(message_tchat);
                        sendCurlrequest_tchat(message_tchat,type_tchat,send_ques_id_tchat);
                    }
                }

                function addMessage_tchat(message_tchat) {
                    $('.chatbox.ask-anything').removeClass('open');
                    $('.chatbox:not(.ask-anything)').addClass('open');
                
                    var rn_sender_div_tchat = Math.floor(Math.random() * 100000) + 1;
                    var dId_sender_div_tchat = "sender_id_" + rn_sender_div_tchat;
                
                    var sender_div_tchat = $('<div>', {
                                                class: 'chatbox-chat sender'
                                            }).append(
                                                $('<span>', {
                                                    class: 'text'
                                                }).append(
                                                    $('<p>', {
                                                        class: 'justify-txt-sender text-justify;',
                                                        'data-id': dId_sender_div_tchat,
                                                        'data-value': message_tchat,
                                                        text: message_tchat
                                                    })
                                                )
                                            );
                
                    $('#messages_tchat').append(sender_div_tchat);
                    $('#messages_tchat').scrollTop($('#messages_tchat')[0].scrollHeight);                
                    return dId_sender_div_tchat;
                }

                function sendCurlrequest_tchat(message_tchat, type_tchat, send_ques_id_tchat) {
                    // $input_tchat.disabled = true;
                    // $send_tchat.disabled = true;
                    // appendBotMessage_tchat(message_tchat, type_tchat, send_ques_id_tchat);
                    // setTimeout(function () {
                    //     $input_tchat.disabled = false;
                    //     $send_tchat.disabled = false;
                    // });
                    const url_tchat = baseUrl_tchat_bot + "chatbot/response_tchat_mahesh.php";
                    const formData = new FormData();
                    formData.append("message", message_tchat);
                    formData.append("course_id", tchat_course_id);
                    formData.append("visitor_id", localStorage.getItem("visitor_id_tchat_bot"));
                
                    $input_tchat.disabled = true;
                    $send_tchat.disabled = true;
                
                    $.ajax({
                        url: url_tchat,
                        type: "POST",
                        data: formData,
                        dataType: 'json',
                        processData: false,
                        contentType: false, 
                        success: function(response_tchat) {
                       
                                console.log('test',response_tchat);
                                if (response_tchat && response_tchat.txt !== undefined && response_tchat.txt !== null) {
                                setTimeout(function () {
                                    appendBotMessage_tchat(response_tchat.txt, type_tchat, send_ques_id_tchat);
                                }, 1000);
                                $input_tchat.disabled = false;
                                $send_tchat.disabled = false;
                                }else{
                                    message_tchat = "Training data not found";
                                    appendBotMessage_tchat(message_tchat, type_tchat, send_ques_id_tchat);
                                }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.error("Error:", errorThrown);
                            alert(errorThrown);
                            send_tchat.disabled = false;
                            input_tchat.disabled = false;
                        }
                    });
                }
                var index_tchat = 0;
                var speed_tchat = 20;
                function typeWriter_tchat(text, displayId) {
                    if (index_tchat < text.length) {
                        $('#' + displayId).append(text.charAt(index_tchat));
                        index_tchat++;
                        $('#messages_tchat').scrollTop($('#messages_tchat')[0].scrollHeight);
                        setTimeout(function () {
                            typeWriter_tchat(text, displayId);                            
                        }, speed_tchat);
                    }
                    input_tchat.focus();
                }
                
                const messagesStore_tchat = {};
                function appendBotMessage_tchat(message_tchat, type_tchat, send_ques_id_tchat){

                    if (!$.isArray(messagesStore_tchat[send_ques_id_tchat])) {
                        messagesStore_tchat[send_ques_id_tchat] = [];
                    }
                    messagesStore_tchat[send_ques_id_tchat].push(message_tchat);

                    var bot_div_tchat = $("<div>", {
                        class: "message msg-container messages"
                    });
                    
                    var rn_bot_div_tchat = Math.floor(Math.random() * 100000) + 1;
                    var dId_bot_div_tchat = "bot_id_" + rn_bot_div_tchat;

                    let reciverContainer_tchat; 
                    let bot_div1_tchat; 

                    if (type_tchat === "regenerate") {
                        bot_div1_tchat = $('<div>', {
                            class: 'chatbox-chat reciver'
                        });
                    
                        reciverContainer_tchat = $('.reciver-text[data-id="' + send_ques_id_tchat + '"]');
                        var activeMessageEl_tchat = reciverContainer_tchat.find('.active');
                    
                        var reciverHTML_tchat = `<span class="text">
                                                    <p class="" id="${dId_bot_div_tchat}"></p>
                                                </span>'`;
                    
                        bot_div1_tchat.html(reciverHTML_tchat);
                    
                        if (activeMessageEl_tchat.length) {
                            activeMessageEl_tchat.removeClass('active').hide();
                        }
                        
                        $('#page_count_' + send_ques_id_tchat).html(messagesStore_tchat[send_ques_id_tchat].length + '/' + messagesStore_tchat[send_ques_id_tchat].length);
                    }else{
                        var reciverHTML_tchat = `<div class="reciver-text" data-id="${send_ques_id_tchat}">
                                                    <div class="chatbox-chat reciver active">
                                                        <span class="text">
                                                            <p class="" id="${dId_bot_div_tchat}"></p>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="chat-icons chat-icons-tchat d-flex" style="gap: 10px; margin-top: 5px; align-items: center;user-select: none;padding-left: 10px;">
                                                    <!--<div class="pagination" id="pagi_${send_ques_id_tchat}" data-id="${send_ques_id_tchat}" style="margin: 0;display: flex;align-items: center;gap: 5px;">
                                                        <svg style="cursor: pointer;" id="prev_${send_ques_id_tchat}" title="Previous" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.75708 6.38204C3.41528 6.72383 3.41528 7.27891 3.75708 7.62071L8.13208 11.9957C8.47388 12.3375 9.02895 12.3375 9.37075 11.9957C9.71255 11.6539 9.71255 11.0988 9.37075 10.757L5.61372 7.00001L9.36802 3.24297C9.70981 2.90118 9.70981 2.3461 9.36802 2.0043C9.02622 1.66251 8.47114 1.66251 8.12935 2.0043L3.75435 6.3793L3.75708 6.38204Z" fill="black" fill-opacity="0.3"/>
                                                        </svg> 
                                                        <span style="font-size: 14px;font-weight: 500;color: rgba(0,0,0,0.3);" id="page_count_${send_ques_id_tchat}">${messagesStore_tchat[send_ques_id_tchat].length}/${messagesStore_tchat[send_ques_id_tchat].length}</span> 
                                                        <svg style="cursor: pointer;" id="next_${send_ques_id_tchat}" title="Next" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.2431 6.38204C10.5849 6.72383 10.5849 7.27891 10.2431 7.62071L5.86807 11.9957C5.52627 12.3375 4.97119 12.3375 4.62939 11.9957C4.2876 11.6539 4.2876 11.0988 4.62939 10.757L8.38643 7.00001L4.63213 3.24297C4.29033 2.90118 4.29033 2.3461 4.63213 2.0043C4.97393 1.66251 5.529 1.66251 5.8708 2.0043L10.2458 6.3793L10.2431 6.38204Z" fill="black" fill-opacity="0.3"/>
                                                        </svg>
                                                    </div>-->
                                                    <img src="${baseUrl_tchat_bot}chatbot/speaker-icon.gif" class="stop-speak stop-speak-tchat" style="display:none; height: 14px;opacity: 0.3; cursor: pointer; width: 16px;">
                                                    <div class="speak speak-text speak-text-tchat" title="Speak" style="cursor: pointer; display: flex;align-items: center;">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.34 2.41361C14.9625 3.73111 16 5.74611 16 8.00111C16 10.2561 14.9625 12.2686 13.34 13.5886C13.0825 13.7986 12.705 13.7586 12.495 13.5011C12.285 13.2436 12.325 12.8661 12.5825 12.6561C13.9375 11.5561 14.8 9.88111 14.8 8.00111C14.8 6.12111 13.9375 4.44611 12.5825 3.34361C12.325 3.13361 12.2875 2.75611 12.495 2.49861C12.7025 2.24111 13.0825 2.20361 13.34 2.41111V2.41361ZM11.8275 4.27611C12.9075 5.15611 13.6 6.49861 13.6 8.00111C13.6 9.50361 12.9075 10.8461 11.8275 11.7261C11.57 11.9361 11.1925 11.8961 10.9825 11.6386C10.7725 11.3811 10.8125 11.0036 11.07 10.7936C11.8825 10.1336 12.4 9.12861 12.4 8.00111C12.4 6.87361 11.8825 5.86861 11.07 5.20611C10.8125 4.99611 10.775 4.61861 10.9825 4.36111C11.19 4.10361 11.57 4.06611 11.8275 4.27361V4.27611ZM10.315 6.13861C10.8525 6.57861 11.2 7.24861 11.2 8.00111C11.2 8.75361 10.8525 9.42361 10.315 9.86361C10.0575 10.0736 9.68 10.0336 9.47 9.77611C9.26 9.51861 9.3 9.14111 9.5575 8.93111C9.8275 8.71111 10 8.37611 10 8.00111C10 7.62611 9.8275 7.29111 9.5575 7.06861C9.3 6.85861 9.2625 6.48111 9.47 6.22361C9.6775 5.96611 10.0575 5.92861 10.315 6.13611V6.13861ZM7.5275 2.47111C7.815 2.60111 8 2.88611 8 3.20111V12.8011C8 13.1161 7.815 13.4011 7.5275 13.5311C7.24 13.6611 6.9025 13.6086 6.6675 13.3986L3.295 10.4011H1.6C0.7175 10.4011 0 9.68361 0 8.80111V7.20111C0 6.31861 0.7175 5.60111 1.6 5.60111H3.295L6.6675 2.60361C6.9025 2.39361 7.24 2.34361 7.5275 2.47111Z" fill="black" fill-opacity="0.3" />
                                                        </svg>
                                                    </div>
                                                    <div class="copy copy-respon copy-respon-tchat" title="Copy" style="cursor: pointer; display: flex;align-items: center;">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1023_463)">
                                                                <path d="M6.5625 0H9.95586C10.3031 0 10.6367 0.139453 10.8828 0.385547L12.7395 2.24219C12.9855 2.48828 13.125 2.82188 13.125 3.16914V9.1875C13.125 9.91211 12.5371 10.5 11.8125 10.5H6.5625C5.83789 10.5 5.25 9.91211 5.25 9.1875V1.3125C5.25 0.587891 5.83789 0 6.5625 0ZM2.1875 3.5H4.375V5.25H2.625V12.25H7.875V11.375H9.625V12.6875C9.625 13.4121 9.03711 14 8.3125 14H2.1875C1.46289 14 0.875 13.4121 0.875 12.6875V4.8125C0.875 4.08789 1.46289 3.5 2.1875 3.5Z" fill="black" fill-opacity="0.3"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1023_463">
                                                                    <rect width="14" height="14" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <!--<div class="reset re-generate re-generate-tchat" data-original-id="${send_ques_id_tchat}" style="cursor: pointer; display: flex;align-items: center;" title="Re-Generate">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1023_465)">
                                                                <path d="M2.87383 5.54053C3.08437 4.94443 3.42617 4.38389 3.90742 3.90537C5.61641 2.19639 8.38633 2.19639 10.0953 3.90537L10.5629 4.37568H9.625C9.14102 4.37568 8.75 4.7667 8.75 5.25068C8.75 5.73467 9.14102 6.12568 9.625 6.12568H12.6738H12.6848C13.1687 6.12568 13.5598 5.73467 13.5598 5.25068V2.18818C13.5598 1.7042 13.1687 1.31318 12.6848 1.31318C12.2008 1.31318 11.8098 1.7042 11.8098 2.18818V3.15068L11.3313 2.66943C8.93867 0.276855 5.06133 0.276855 2.66875 2.66943C2.00156 3.33662 1.52031 4.12139 1.225 4.96084C1.06367 5.41748 1.3043 5.91514 1.7582 6.07647C2.21211 6.23779 2.7125 5.99717 2.87383 5.54326V5.54053ZM1.06641 7.91123C0.929688 7.95225 0.798437 8.02607 0.691797 8.13545C0.582422 8.24482 0.508594 8.37607 0.470313 8.51826C0.462109 8.55107 0.453906 8.58662 0.448437 8.62217C0.440234 8.66865 0.4375 8.71514 0.4375 8.76162V11.8132C0.4375 12.2972 0.828516 12.6882 1.3125 12.6882C1.79648 12.6882 2.1875 12.2972 2.1875 11.8132V10.8534L2.66875 11.3319C5.06133 13.7218 8.93867 13.7218 11.3285 11.3319C11.9957 10.6647 12.4797 9.87998 12.775 9.04326C12.9363 8.58662 12.6957 8.08896 12.2418 7.92764C11.7879 7.76631 11.2875 8.00693 11.1262 8.46084C10.9156 9.05693 10.5738 9.61748 10.0926 10.096C8.38359 11.805 5.61367 11.805 3.90469 10.096L3.90195 10.0933L3.43438 9.62568H4.375C4.85898 9.62568 5.25 9.23467 5.25 8.75068C5.25 8.2667 4.85898 7.87568 4.375 7.87568H1.32344C1.27969 7.87568 1.23594 7.87842 1.19219 7.88389C1.14844 7.88936 1.10742 7.89756 1.06641 7.91123Z" fill="black" fill-opacity="0.3"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1023_465">
                                                                    <rect width="14" height="14" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>-->
                                                </div>
                                                <div id="copyPopup_tchat" class="copyPopupTchat">
                                                    <i class="fa fa-check-circle" aria-hidden="true"></i> Response Copied!
                                                </div>`;
                        bot_div_tchat.html(reciverHTML_tchat);
                    }
                    
                    if(reciverContainer_tchat){
                        reciverContainer_tchat.append(bot_div1_tchat);
                        index_tchat = 0;
                        typeWriter_tchat(message_tchat, dId_bot_div_tchat);
                        bot_div1_tchat.addClass('active');
                    }else{
                        $('#messages_tchat').append(bot_div_tchat);
                        $('#messages_tchat').scrollTop($('#messages_tchat')[0].scrollHeight);
                        index_tchat = 0;
                        typeWriter_tchat(message_tchat, dId_bot_div_tchat);
                    }


                    const speakText_tchat = $(".speak-text-tchat",bot_div_tchat);
                    const speakStop_tchat = $(".stop-speak-tchat",bot_div_tchat);

                    if (speakText_tchat) {
                        speakText_tchat.on("click", function() {
                            if ("speechSynthesis" in window) {
                                let working_tchat = "";
                                const activeMessageEl_tchat = $(".active",bot_div_tchat);
                                const messageToSpeak_tchat = activeMessageEl_tchat ? activeMessageEl_tchat.text() : "";
                                working_tchat = new SpeechSynthesisUtterance(messageToSpeak_tchat);

                                window.speechSynthesis.cancel();

                                working_tchat.onend = function(event) {
                                    speakText_tchat.show();
                                    speakStop_tchat.hide();
                                };

                                window.speechSynthesis.speak(working_tchat);
                                speakText_tchat.hide();
                                speakStop_tchat.show();
                            } else {
                                document.write("Browser not supported");
                            }
                        });
                    }

                    if (speakStop_tchat) {
                        speakStop_tchat.on("click", function() {
                            speakStopf_tchat();
                        });
                    }

                    function speakStopf_tchat() {
                        const activeMessageEl_tchat = $(".active",bot_div_tchat);
                        const messageToSpeak_tchat = activeMessageEl_tchat ? activeMessageEl_tchat.text() : "";
                        let working_tchat = new SpeechSynthesisUtterance(messageToSpeak_tchat);
                        window.speechSynthesis.cancel();
                        speakText_tchat.show();
                        speakStop_tchat.hide();
                    }
                    $(document).on('click', function(e) {
                        if ($(e.target).hasClass('exit-tchat')) {
                            messages_tchat.html('');
                            speakStopf_tchat();
                            // dexpand_tchat.hide();
                            // expand_tchat.show();
                            chatAddRemove();
                            // chatBox.removeClass('expand-chatbox-tchat');
                        }
                    });
                    
                    const copyIcon_tchat = $('.copy-respon-tchat',bot_div_tchat);
                    if (copyIcon_tchat) {
                        copyIcon_tchat.on('click', function() {
                            const textarea_tchat = $('<textarea>');
                            const activeMessageEl_tchat = $('.active', bot_div_tchat);
                            const messageToCopy_tchat = activeMessageEl_tchat ? activeMessageEl_tchat.text() : '';
                            textarea_tchat.val(messageToCopy_tchat.trim());
                            
                            $('body').append(textarea_tchat);
                            textarea_tchat.select();
                            document.execCommand('copy');
                            textarea_tchat.remove();

                            const tchatup_tchat = $('.copyPopupTchat',bot_div_tchat);
                            tchatup_tchat.css(
                                'transform', 'scale(1)'
                            );
                            setTimeout(function() {
                                tchatup_tchat.css(
                                    'transform', 'scale(0)'
                                );
                            }, 1000);
                        });
                    }

                    var reGenerate_tchat = $('.re-generate-tchat',bot_div_tchat);
                    
                    if (reGenerate_tchat) {
                        reGenerate_tchat.on('click', function() {
                            var originalMessageId_tchat = $(this).attr('data-original-id');
                            var originalMessageElement_tchat = $('.justify-txt-sender[data-id="' + originalMessageId_tchat + '"]');
                            var senderMessage_tchat = originalMessageElement_tchat ? originalMessageElement_tchat.attr('data-value') : '';
                            type_tchat = 'regenerate';
                            if (senderMessage_tchat) {
                                sendCurlrequest_tchat(senderMessage_tchat,type_tchat,send_ques_id_tchat);
                            }
                        });
                    }

                    

                }
                
            }, 1000);
        });
    })();
});