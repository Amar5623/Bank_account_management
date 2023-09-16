class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    }

    withdraw(amount) {
        try {
            if (amount <= 0) {
                throw new Error("Invalid amount");
            }
            if (amount > this.balance) {
                throw new Error("Insufficient funds");
            }
            this.balance -= amount;
            return true;
        } catch (error) {
            throw error;
        } finally {
            // Log the action or perform cleanup if needed
        }
    }

    checkBalance() {
        return this.balance;
    }
}

const account = new BankAccount('Amar Tiwari', 'Savings');
const accountHolderElement = document.getElementById('account-holder');
const accountTypeElement = document.getElementById('account-type');
const balanceElement = document.getElementById('balance');
const actionSelect = document.getElementById('action');
const amountInput = document.getElementById('amount');
const resultParagraph = document.getElementById('result');

// Update account information
accountHolderElement.textContent = account.accountHolder;
accountTypeElement.textContent = account.accountType;
balanceElement.textContent = account.balance;

// Add event listener for the perform action button
document.getElementById('performAction').addEventListener('click', () => {
    const selectedAction = actionSelect.value;
    const enteredAmount = parseFloat(amountInput.value);

    try {
        switch (selectedAction) {
            case 'deposit':
                if (account.deposit(enteredAmount)) {
                    resultParagraph.textContent = `Deposited $${enteredAmount}`;
                } else {
                    throw new Error('Invalid amount');
                }
                break;
            case 'withdraw':
                if (account.withdraw(enteredAmount)) {
                    resultParagraph.textContent = `Withdrawn $${enteredAmount}`;
                } else {
                    throw new Error('Invalid amount or insufficient funds');
                }
                break;
            case 'checkBalance':
                const balance = account.checkBalance();
                resultParagraph.textContent = `Balance: $${balance}`;
                break;
            default:
                throw new Error('Invalid action');
        }

        // Update the displayed balance
        balanceElement.textContent = account.balance;
    } catch (error) {
        resultParagraph.textContent = error.message;
    }
});
