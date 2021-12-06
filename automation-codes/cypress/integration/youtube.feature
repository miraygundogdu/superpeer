Feature: youtube
    Scenario: youtube Case
        Given I visit to the website
        When Search for Superpeer
        And Click and open first video
        And Verify all expected results
        And Stop the video
        Then Click a random video