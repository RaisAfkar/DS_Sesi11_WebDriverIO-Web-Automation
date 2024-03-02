@digital-skola @login
Feature: Swag Labs - Login positive

  @positive
  Scenario Outline: As a standart_user, I want to login succesfully
    Given User is on the login page
    When user login with "standard_user" credentials
    Then user should see homepage