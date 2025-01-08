describe('Покупка аватара для тренера', function () {

    it('Покупка нового аватара для моего тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввести верный логин
        cy.get('#password').type('USER_PASSWORD'); // Ввести верный пароль
        cy.get('.auth__button').click(); // Клик кнопки "Войти"
        cy.get('.header__container > .header__id').click();; // Клик на кнопку профиля в шапке
        cy.get('[href="/shop"]').click(); // Клик на кнопку "Смена автара
        cy.get('.available > button').first().click(); // Клик на любой некупленный аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Ввести номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Ввести срок использования
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // Имя пользователя
        cy.get('.pay-btn').click(); // Клик по кнопке "Оплатить"
        cy.get('#cardnumber').type('56456'); // Ввести код подтверждения оплаты
        cy.get('.payment__submit-button').click(); // Клик по кнопке "Оплатить"
        cy.get('.success__image').should('be.visible'); // Картинка с галочкой видна пользователю
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // После успеной покупки появляется сообщение "Покупка прошла успешно"
        cy.get('.payment__font-for-success').should('be.visible'); // Текст "Покупка прошла успешно" виден пользователю
        cy.get('.payment__adv').click(); // Клик по кнопке "Вернуться в магазин" возвращает обратно к магазину аватаров
    })
});

