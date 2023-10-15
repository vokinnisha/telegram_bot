
class User {

    createUser(chatId) {

        try {
            const createPerson = 'DB.USER INSERT chatId, name, работа?(нужно понимать - клиент или рабочий), телефон для связи'
            // обработка 

            //
            return
        } catch (error) {
            if (error.status) {
                throw Error('Error Message')
            }
        }
    }

    getUser(chatId) {
        const userInfo = 'DB.USER INFO CREATE  SELECT * from db.USER where "chatId" ' // Заменить на вызов настоящей бд

        if (!userInfo) {
            return this.createUser(chatId)
        }

        // Обработать юзера

    }
}