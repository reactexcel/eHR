import { urls, apiUrls, visitIndexRoute, urlVisited, user, signin, signinWithWhitespace, signout } from '../../index';

describe('Test policy documents', () => {
  it('policy documents list is not empty', () => {
    cy.server();
    cy.route({method:'POST',url: apiUrls.apiUrl}).as('login');
    visitIndexRoute();
    cy.get('#openLogin').click();
    urlVisited(urls.baseUrl+urls.login);
    signin(user.admin);
    // cy.request('POST', apiUrls.apiUrl).should('have.property', 'status', 200);
    // cy.wait('@login');
    urlVisited(urls.baseUrl+urls.home);
    cy.get('#policy_documents').should('be.visible');
    cy.get('#policy_documents').click();
    urlVisited(urls.baseUrl+urls.policyDocuments);
  });
  it('click on any document url will open a new tab, fire an api and status from red change to green or will be green if already green', () => {

  });
});
