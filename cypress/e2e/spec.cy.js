// ELEVENTH CHANGE:
describe('App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  // TWELFTH CHANGE: from it('passes', () => {...
    
  it('Loads the app with a counter', () => {
    const counter = cy.get('h1');
    counter.should('contain', '0');
  })

  // THIRTEENTH CHANGE: to test if comments are being added:
  it('should have pre-populated comments', () => {
    const commentListItems = cy.get('#comment-list > li');
    commentListItems.should('have.length', 2);
  })

    // FOURTEENTH CHANGE:
  it('should be able to add a comennt', () => {
    cy.get('#name-input').type('John Jackson');
    cy.get('#comment-input').type('This is a test');
    cy.get('#comment-form').submit();
    const commentListItems = cy.get('#comment-list > li');
    commentListItems.should('have.length', 3);
  })
})

