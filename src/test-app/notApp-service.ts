import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api'


@Injectable()
export class notBot {
    constructor() { }

    checkFirstFunc() {
        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(this.getToken(), { polling: true });

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
            const chatId = msg.chat.id;

            const resp = match[1]; // the captured "whatever"
            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        // Matches /love
        bot.onText(/\/love/, function onLoveText(msg) {
            const opts = {
                reply_to_message_id: msg.message_id,
                reply_markup: JSON.stringify({
                    keyboard: [
                        ['Yes, you are the bot of my life ❤'],
                        ['No, sorry there is another one...']
                    ]
                })
            };
            bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
        });


        bot.onText(/\   /, function onEditableText(msg) {
            const opts = {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Edit Text',
                                // we shall check for this value when we listen
                                // for "callback_query"
                                callback_data: 'edit'
                            }
                        ]
                    ]
                }
            };
            bot.sendMessage(msg.from.id, 'Original Text', opts);
        });

        // Handle callback queries
        bot.on('callback_query', function onCallbackQuery(callbackQuery) {
            const action = callbackQuery.data;
            const msg = callbackQuery.message;
            const opts = {
                chat_id: msg.chat.id,
                message_id: msg.message_id,
            };
            let text;

            if (action === 'edit') {
                text = 'Edited Text';
            }

            bot.editMessageText(text, opts);
        });

        // Listen for any kind of message.There are different kinds of
        // messages.
        bot.on('message', (msg) => {
            const chatId = msg.chat.id;

            // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, `Received your message`);
        });

        bot.on("polling_error", (msg) => console.log(msg));
    }

    // after delete method
    private getToken() {
        return process.env.TOKEN_BOT
    }



    newFuncTest() {
        const bot = new TelegramBot(this.getToken(), { polling: true });

    }
} 