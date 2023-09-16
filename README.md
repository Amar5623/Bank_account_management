# Bank Account Management Website

Welcome to the Bank Account Management website! This web application allows users to perform basic banking actions such as depositing, withdrawing, and checking their balance. It serves as a practical demonstration of JavaScript concepts including classes, switch statements, and try-catch-finally statements.

## Table of Contents

- [Usage Instructions](#usage-instructions)
- [Code Explanation](#code-explanation)
- [Author](#author)

## Usage Instructions

1. **Access the Website**: Visit the website at [Bank Account Management](https://yourusername.github.io/reponame/).

2. **Select an Action**: From the dropdown menu labeled "Select Action," choose one of the following actions:
   - Deposit: To add funds to your account.
   - Withdraw: To withdraw funds from your account.
   - Check Balance: To view your current account balance.

3. **Enter the Amount**: In the "Amount" input field, enter the amount you wish to deposit or withdraw. Ensure the amount is greater than zero for valid transactions.

4. **Perform the Action**: Click the "Perform Action" button to execute the selected action.

5. **View the Result**: The result of the action will be displayed below the button. If there are any errors or messages, they will be shown here.

## Code Explanation

### Bank Account Class

We have implemented a `BankAccount` class to simulate a bank account. This class has the following properties:
- `accountHolder`: The name of the account holder.
- `accountType`: The type of the account (e.g., Savings or Checking).
- `balance`: The current account balance.

The `BankAccount` class includes the following methods:
- `deposit(amount)`: Allows you to deposit a specified amount into your account. The amount must be greater than zero.
- `withdraw(amount)`: Lets you withdraw a specified amount from your account. It handles exceptions for invalid amounts and insufficient funds.
- `checkBalance()`: Returns the current account balance.

### Switch Statements

We use switch statements in the `performAction` function to route user-selected actions to the appropriate methods of the `BankAccount` class. This enables the website to process user actions effectively.

### Try-Catch-Finally

Try-catch blocks are employed in the `withdraw` and `deposit` methods to handle exceptions gracefully. If there are issues such as invalid amounts or insufficient funds, errors are caught, and informative messages are displayed to the user. The `finally` block can be used for additional actions or cleanup if needed.

## Author

This Bank Account Management website was created by Amar Tiwari. Feel free to explore the source code located in `script.js`, `styles.css`, and `index.html` to gain a deeper understanding of how these JavaScript concepts are implemented.

If you have any questions, feedback, or suggestions, please don't hesitate to get in touch. We hope you find this project informative and useful!
