const { test, expect } = require('@playwright/test');

const testCases = [
  {
    "id": 1,
    "name": "Test Case 1",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Draft project brief",
  },
  {
    "id": 2,
    "name": "Test Case 2",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Schedule kickoff meeting",
  },
  {
    "id": 3,
    "name": "Test Case 3",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Share timeline with teammates",
  },
  {
    "id": 4,
    "name": "Test Case 4",
    "leftNav": "Work Requests",
    "column": "New Requests",
    "card_title": "[Example] Laptop setup for new hire",
  },
  {
    "id": 5,
    "name": "Test Case 5",
    "leftNav": "Work Requests",
    "column": "In Progress",
    "card_title": "[Example] Password not working",
  },
  {
    "id": 6,
    "name": "Test Case 6",
    "leftNav": "Work Requests",
    "column": "Completed",
    "card_title": "[Example] New keycard for Daniela V",
  }
];

test.describe('Asana Data-Driven Tests', () => {
  testCases.forEach((data) => {
    test(`Test Case ID: ${data.id}`, async ({ page }) => {
      await test.step('Login to Asana', async () => {
        // Login to Asana
        await page.goto("https://app.asana.com/-/login");
        await page.getByRole("textbox", {name: "e"}).fill("ben+pose@workwithloop.com");
        await page.locator(".LoginEmailForm-continueButton").click();
        await page.getByRole("textbox", {name: "p"}).fill('Password123');
        await page.locator(".LoginPasswordForm-loginButton").click();
        console.log("\nSuccessfully logged in with email and password.")
      });
      await test.step('Navigate to the project page', async () => {
        // Navigate to the project page
        await page.getByRole("link", {name: `${data.leftNav}`}).nth(1).click();
        console.log("\nSuccesfully arrived at Project page.")
      });

      await test.step('Verify the card is within the right column', async () => {
        // Verify the card is within the right column
        const columnTitle = await page.getByText(`${data.column}`);
        const columnElement = await page.locator(".BoardBody-column").filter({ has: columnTitle}).innerText();
        const verifyIfCardIsPresent = await columnElement.includes(`${data.card_title}`)
        console.log(`\nIs card element '${data.card_title}' in column '${data.column}'?: ${verifyIfCardIsPresent}`)
    });
  });
});
});
