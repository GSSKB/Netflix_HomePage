document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat Window
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // Send Message
    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            chatInput.value = '';

            // Simulate Bot Response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage('bot', botResponse);
            }, 1000);
        }
    }

    sendMessage.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    function addMessageha(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Correct function name usage
    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        const textElement = document.createElement('span');
        textElement.textContent = text;
        messageElement.appendChild(textElement);
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(input) {
        input = input.toLowerCase();

        // Greeting
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return 'Hello! Welcome to Netflix Support. How can I help you today?';
        }

        // 1. Reset Password
        else if (input.includes('reset') || input.includes('password') || input.includes('forgot') || input.includes('login')) {
            return 'You can reset your password by visiting the Forgot Password page on Netflix. Enter your email or phone number, and we will send you a link to create a new password.';
        }

        // 2. Buffering / Video Issues
        else if (input.includes('buffer') || input.includes('load') || input.includes('stuck') || input.includes('slow') || input.includes('video')) {
            return 'Buffering usually happens due to slow internet. Try restarting your Wi-Fi, closing background apps, or lowering the video quality to improve streaming speed.';
        }

        // 3. Subscription Plan / Cost
        else if (input.includes('plan') || input.includes('subscription') || input.includes('cost') || input.includes('price') || input.includes('upgrade') || input.includes('change')) {
            return 'Go to Account Settings → Change Plan, and select the plan you want. Your new plan will apply from the next billing cycle. Plans range from $6.99 to $22.99 a month.';
        }

        // 4. Downloads
        else if (input.includes('download') || input.includes('offline') || input.includes('save')) {
            return 'If the title supports downloads, you’ll see a Download button next to it. Simply tap or click to save it offline.';
        }

        // 5. Availability / Region
        else if (input.includes('available') || input.includes('region') || input.includes('missing') || input.includes('find') || input.includes('search')) {
            return 'Some titles are restricted due to licensing rights. Availability may change over time based on regional agreements.';
        }

        // 6. Profiles
        else if (input.includes('profile') || input.includes('account') || input.includes('user') || input.includes('manage')) {
            return 'Go to Manage Profiles from your homepage. You can add, edit, or delete profiles for different people in your household.';
        }

        // 7. Subtitles / Audio
        else if (input.includes('subtitle') || input.includes('audio') || input.includes('language') || input.includes('caption') || input.includes('sound')) {
            return 'While watching a video, select the Audio & Subtitles icon and choose your preferred language or subtitle option.';
        }

        // 12. Popular / Trending
        else if (input.includes('popular') || input.includes('trending') || input.includes('show') || input.includes('movie') || input.includes('watch') || input.includes('suggest') || input.includes('what')) {
            return "Here are trending titles:\n• Stranger Things\n• Money Heist\n• Wednesday\n• The Witcher\n• Squid Game";
        }

        // Cancel (kept from previous logic as it fits broad categories or specific catch)
        else if (input.includes('cancel') || input.includes('stop')) {
            return 'You can easily cancel your account online in two clicks. Go to Account > Cancel Membership.';
        }

        else {
            return "I'm sorry, I didn't quite catch that. Can you please rephrase or ask about passwords, plans, or shows?";
        }
    }
});
