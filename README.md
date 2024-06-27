Challenges:
During implementation of the tests using PlayWright, I found a challenge on the last step(Column Verification) because there were nested div elements in Asana.

Spent too much time traversing parent elements of the card to confirm it was in the right column.

*Solution: 
Instead, I located the parent element of the column title using the 'filter' method.

Additionally, I used the 'innerText' method once I retrieved the parent element to receive the strings of sub-titles.

This resulted in me using 'includes' method to check whether the parent element had the 'card_title'

Recommendations:
Playwright’s feature use: XPath works well, but if there is future editing of the UI, then it could break tests so it's beneficial to use Playwright features like getByRole, getByText, and locator methods.

Error Handling: Implement more comprehensive error handling and logging within the tests. This can help in quickly diagnosing issues when elements are not found or when tests fail due to changes in the UI.

Test Case Updates: Regularly update the test cases and selectors in response to changes in the application's UI. This will result in maintaining the accuracy and relevance of the tests for the future.

