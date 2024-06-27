Challenges:

During implementation of the tests using PlayWright, I found a challenge on the last step(Column Verification) because there were nested div elements in Asana.

-Spent too much time traversing parent elements of the card to confirm it was in the right column.

*Solution: 
-Instead I located the parent element of column title using the 'filter' method.

-Additionally, I used 'innerText' method once I retrieved the parent element to receive the strings of sub-titles.

-This resulted in me using 'includes' method to check whether the parent element had the 'card_title'

Recommendations: 

-I found myself using xpath and although it helped, if there is future editing of the UI, then it could break tests so it's beneficial to use Playwright features like getByRole, getByText, and locator methods.


