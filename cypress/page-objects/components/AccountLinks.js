export default class AccountLinks {
    static clickSummary() {
      cy.get('#account_summary_tab').click()

    }

    static clickActivity() {
        cy.get('#account_activity_tab').click()
    }
    static clickTransferFunds() {
        cy.get('#transfer_funds_tab').click()
    }

    static clickpayBills() {
        cy.get('#pay_bills_tab').click()
    }

    static clickMoneyApp() {
        cy.get('#money_app_tab').click()
    }

    static clickOnlineStatements() {
        cy.get('#online_statements_tab').click()
    }

}