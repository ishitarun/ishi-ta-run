$(document).ready(function(){
    const mainClass = $('.main-class');
    const msgBox = $('.msg-box');
    const msgConReciver = $('.message.msg-container-reciver');
    const loadMsg = $('.load-msg');

    const copyClick = $('.copy-respon',mainClass);
    const copyPopup = $ ('.copyPopup',loadMsg);
    copyClick.click(function(){
        copyPopup.css('transform', 'scale(1)');
        setTimeout(function() {
            copyPopup.css('transform', 'scale(0)');
        }, 1000);
    });

    const reciverText = $('.reciver-text',msgConReciver);
    const loader = $('.loader-bot',msgConReciver);
    const re_generate = $('.re-generate');
    re_generate.click(function(){
        reciverText.css('transform', 'scale(0)');
        loader.css('transform', 'scale(1)');
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
                        loader.css('transform', 'scale(0)');
                        reciverText.css('transform', 'scale(1)');
                    },1000);
                },1000);
            },1000);
        },1000);
    });

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

        // var ques_html_tchat = "";
        // for (var i = 0; i < chatbot_question_tchat.length; i++) {
        //     ques_html_tchat += `<div data-value-ques-tchat="${chatbot_question_tchat[i]}" id="ques_tchat_${i}" class="ques col-xs-6">
        //                             <p class="suggestion">${(i+1)+') '+chatbot_question_tchat[i]}</p>
        //                         </div>`;
        // }
        // suggestion_parent_tchat.html(ques_html_tchat);

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
        
            var sender_div_tchat = `<div class="message msg-container msg-user">
                                        <div class="chatbox-chat sender">
                                            <span class="text">
                                                <p class="justify-txt-sender text-justify" data-id= ${dId_sender_div_tchat} data-value= ${message_tchat}>${message_tchat}</p>
                                            </span>
                                        </div>
                                        <div id="loader_chat" class="loader-bot">
                                            <div class="msg-wrapper">
                                                <div class ="loader_msg1" id="loader_msg1" >Analyzing data</div>
                                                <div class ="loader_msg2" id="loader_msg2" style="display:none" >Optimizing response</div>
                                                <div class ="loader_msg3" id="loader_msg3" style="display:none" >Preparing insights</div>
                                                <div class="red ball" style="opacity: 0.5;"></div>
                                                <div class="blue ball" style="animation-delay:0.25s; opacity: 0.7;"></div>  
                                                <div class="yellow ball" style="animation-delay:0.5s;"></div>  
                                            </div>
                                        </div>
                                    </div>`;
        
            $('#messages_tchat').append(sender_div_tchat);
            $('#messages_tchat').scrollTop($('#messages_tchat')[0].scrollHeight);                
            return dId_sender_div_tchat;
        }

        function sendCurlrequest_tchat(message_tchat, type_tchat, send_ques_id_tchat) {
            $input_tchat.disabled = true;
            $send_tchat.disabled = true;
            appendBotMessage_tchat(message_tchat, type_tchat, send_ques_id_tchat);
            setTimeout(function () {
                $input_tchat.disabled = false;
                $send_tchat.disabled = false;
            });
            // const url_tchat = baseUrl_tchat_bot + "chatbot/response_tchat_mahesh.php";
            // const formData = new FormData();
            // formData.append("message", message_tchat);
            // formData.append("course_id", tchat_course_id);
            // formData.append("visitor_id", localStorage.getItem("visitor_id_tchat_bot"));
        
            // $input_tchat.disabled = true;
            // $send_tchat.disabled = true;
        
            // $.ajax({
            //     url: url_tchat,
            //     type: "POST",
            //     data: formData,
            //     dataType: 'json',
            //     processData: false,
            //     contentType: false, 
            //     success: function(response_tchat) {
               
            //             console.log('test',response_tchat);
            //             if (response_tchat && response_tchat.txt !== undefined && response_tchat.txt !== null) {
            //             setTimeout(function () {
            //                 appendBotMessage_tchat(response_tchat.txt, type_tchat, send_ques_id_tchat);
            //             }, 1000);
            //             $input_tchat.disabled = false;
            //             $send_tchat.disabled = false;
            //             }else{
            //                 message_tchat = "Training data not found";
            //                 appendBotMessage_tchat(message_tchat, type_tchat, send_ques_id_tchat);
            //             }
            //     },
            //     error: function(jqXHR, textStatus, errorThrown) {
            //         console.error("Error:", errorThrown);
            //         alert(errorThrown);
            //         send_tchat.disabled = false;
            //         input_tchat.disabled = false;
            //     }
            // });
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
                                            <p class="" id="${dId_bot_div_tchat}">${rn_bot_div_tchat}</p>
                                        </span>`;
            
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
                                            <img src="/images/speaker-icon.gif" class="stop-speak stop-speak-tchat" style="display:none; height: 14px;opacity: 0.3; cursor: pointer; width: 16px;">
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
                                            <div class="reset re-generate re-generate-tchat" data-original-id="${send_ques_id_tchat}" style="cursor: pointer; display: flex;align-items: center;" title="Re-Generate">
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
                                            </div>
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
            const activeMSG = $('.active', bot_div_tchat);
            const loader = $('.loader-bot',bot_div_tchat);
            if (reGenerate_tchat) {
                reGenerate_tchat.on('click', function() {
                    
                    var originalMessageId_tchat = $(this).attr('data-original-id');
                    var originalMessageElement_tchat = $('.justify-txt-sender[data-id="' + originalMessageId_tchat + '"]');
                    var senderMessage_tchat = originalMessageElement_tchat ? originalMessageElement_tchat.attr('data-value') : '';
                    type_tchat = 'regenerate';
                    activeMSG.css(
                        'transform', 'scale(0)'
                    );
                    loader.css(
                        'transform', 'scale(1)'
                    );
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
                                    loader.css(
                                        'transform', 'scale(0)'
                                    );
                                    activeMSG.css(
                                        'transform', 'scale(1)'
                                    );
                                    if (senderMessage_tchat) {
                                        sendCurlrequest_tchat(senderMessage_tchat,type_tchat,send_ques_id_tchat);
                                    }
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                    
                });
            }

            

        }
        
    }, 1000);
});