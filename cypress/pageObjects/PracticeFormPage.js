import BasePage from "./BasePage";
class PracticeFormPage extends BasePage{
    static get url(){
        return '/automation-practice-form';
    }

    static get nameInput(){
        return cy.get('#firstName');
    }

    static get lastNameInput(){
        return cy.get('#lastName');
    }

    static get email(){
        return cy.get('#userEmail');
    }

    static get gender(){ 
        return cy.get('[type="radio"]'); 
    }

    static get phoneNr(){
        return cy.get('#userNumber');
    }

    static get birth(){ 
        return cy.get ('#dateOfBirthInput'); 
    }

    static get month(){
        return cy.get('select[class="react-datepicker__month-select"]');
    }

    static get year(){
        return cy.get('select[class="react-datepicker__year-select"]');
    }

    static get date(){
        return cy.get('div:nth-child(5) > div.react-datepicker__day.react-datepicker__day--028')
    }

    static get subject(){
        return cy.get('#subjectsInput'); 
    }

    static get hobbies(){
        return cy.get('input[type="checkbox"]');
    }

    static get picture(){
        return cy.get('#uploadPicture');
    }

    static get address(){
        return cy.get('#currentAddress');
    }
    
    static get stateWrapperDivs() {
        return cy.get("#state>div>div>div");
    }
    
    static get cityWrapperDivs() {
        return cy.get("#city>div>div>div");
    }

   static get submitButton(){
        return cy.get('#submit');
   }
   
   static get closeButton(){
       return cy.get('#closeLargeModal');
   }
   
   static get validate(){
       return cy.get('table > tbody > tr');
   }
    
}
export default PracticeFormPage;