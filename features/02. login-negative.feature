@digital-skola @login
Feature: Swag Labs - Login negative

  @negative
  Scenario Outline: As a locked_out_user, I should get error message
    Given User is on the login page
    When user login with "locked_out_user" credentials
    Then user should see error "Epic sadface: Sorry, this user has been locked out."