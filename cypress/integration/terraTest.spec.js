describe('The TerraFormer website', () => {
	it('should have a navbar', () => {
		cy.visit('https://terra-former.firebaseapp.com/')
		cy.get('nav')
	})
	it('should navigate to the home page when the link is clicked', () => {
		cy
			.get('#app > div.page-landing > a > div')
			.click()
		cy.url().should('contain', '/home')
	})
	it('should go to the "Create Planet" area via the link', () => {
		cy
			.get('#navbarColor02 > span > ul > li:nth-child(1) > a')
			.click()
		cy.url().should('contain', '/editor')
	})
	it('should create a planet', () => {
		cy.get('#Editor > button:nth-child(4)').click()
		cy.get('#Editor > button:nth-child(11)').click().click()
		cy.get('#planetName').type('Plain-Ole-Planet')
		cy.get('#planetDescription').type('One day a program with no creativity went onto a website to create the planet that it had always dreamt of. It did so. And it was boring.')
		cy.get('#Editor > form > button').click()
	})
	it('navigate to the planet list page with the link on the modal', () => {
		cy.get('#Editor > div.modal-backdrop > div > footer > a').click()
		cy.url().should('contain', '/planet-cards')
	})
	it('should populate a card for the created planet and have the planets title in its header', () => {
		cy.get('.card-header').last().should('contain', 'Plain-Ole-Planet')
	})
})