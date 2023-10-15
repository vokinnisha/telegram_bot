import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api'

@Injectable()
export class OnBot {
    constructor() { }
    private token = process.env.TOKEN_BOT;

    FourButton() {
        const bot = new TelegramBot(this.token, { polling: true });

        bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;

            const options = {
                reply_markup: {
                    // keyboard: [['Забронировать'], ['Калькулятор сроков', 'Персональная скидка']]
                    inline_keyboard: [
                        [{ text: 'Забронировать', callback_data: 'Забронировать' }],
                        [{ text: 'Кнопка 2', callback_data: 'data 3' }],
                        [{ text: 'Кнопка 3', callback_data: 'text 3' }]
                    ]
                }
            };
            bot.sendMessage(chatId, 'Здравствуйте! Выберите одну из опций:', options);
        });

        bot.on('message', (msg) => {
            const chatId = msg.chat.id; // ID юзера

            switch (msg.text) {
                case 'Проверить наличие':
                    bot.sendMessage(chatId, 'Функция "Проверить наличие" еще не реализована');
                    break;
                case 'Забронировать':
                    bot.sendMessage(chatId, 'Функция "Забронировать" еще не реализована');
                    break;
                case 'Калькулятор сроков':
                    bot.sendMessage(chatId, 'Функция "Калькулятор сроков" еще не реализована');
                    break;
                case 'Персональная скидка':
                    bot.sendMessage(chatId, 'Функция "Персональная скидка" еще не реализована');
                    break;
                default:
                    bot.sendMessage(chatId, 'Извините, я не понял вашу команду. Пожалуйста, выберите одну из доступных опций.');
                    break;
            }
        });
    }
}