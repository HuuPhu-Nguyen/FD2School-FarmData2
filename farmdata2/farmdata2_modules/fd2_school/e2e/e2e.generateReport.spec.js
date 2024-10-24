describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the generateReport button", () => {
        cy.get("[data-cy=table-header]").should("not.exist")
        cy.get("[data-cy=generate-report]").click()
        cy.get("[data-cy=table-header]").should("be.visible")
    }) 
  
})