describe('Проверка_авторизации', function () {

    it('Правильный логин и неправильный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Клик "Войти"

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста после авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст 'Авторизация прошла успешно' виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })

     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); // Кнопка "Забыли пароль?" видна пользователю
        cy.get('#forgotEmailButton').click(); // Клик по кнопке "Забыли пароль?"

        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Выводится текст "Восстановите пароль" 
        cy.get('#forgotForm > .header').should('be.visible'); // Текст "Восстановите пароль" виден пользователю
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Крестик виден пользователю

        cy.get('#mailForgot').type('annwilb@gmail.com'); // Ввели любой email
        cy.get('#restoreEmailButton').click(); // Клик по кнопке "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Выводится текст "Успешно отправили пароль на e-mail" при автозирированной валидной почте
        cy.get('#messageHeader').should('be.visible'); // Текст "Успешно отправили пароль на e-mail" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })

     it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqast'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Клик "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Выводится текст "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible'); // Текст "Такого логина или пароля нет" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })

     it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('annwilb@gmail.com'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Выводится текст "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible'); // Текст "Такого логина или пароля нет" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })

     it('Невалидный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Выводится текст "Нужно исправить проблему валидации"
        cy.get('#messageHeader').should('be.visible'); // Текст "Нужно исправить проблему валидации" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })

     it('Приведение в логине заглавных букв к строчным', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Клик "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Выводится текст 'Авторизация прошла успешно'
        cy.get('#messageHeader').should('be.visible'); // Текст 'Авторизация прошла успешно' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })
 })