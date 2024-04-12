/// <reference types="cypress" />
describe('flow tests', () => {
    it('тест флоу пополнения депозита', () => {
        // Зайти на страницу
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        // Кликнуть по кнопке “Customer Login”
        cy.contains("Customer Login").click();
        // В выпадающем списке выбрать один пункт
        cy.get('select').select(2)
        // Нажать кнопку Login
        cy.contains("Login").click();
        // Кликнуть по элементу Deposit
        cy.contains("Deposit").click();
        // Ввести в поле сумму и кликнуть на кнопку Deposit
        cy.get('input[type=number]').type(100)
        cy.get('button[type=submit]').contains("Deposit").click();
        // Найти на странице надпись “Deposit Successful”
        cy.get('span').contains("Deposit Successful").should('exist')
        // Выйти из сеанса (Logout)
        cy.get('button').contains("Logout").click();
    })
})
