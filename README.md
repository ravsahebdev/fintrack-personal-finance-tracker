# 📊 FinTrack Pro

A responsive personal finance management application built with **HTML, CSS, and Vanilla JavaScript**.

FinTrack Pro provides a structured dashboard for tracking income and expenses, reviewing cash-flow trends, searching and filtering transactions, managing currency preferences, and maintaining separate browser-stored data for registered demo users.

---

## ✨ Features

- Browser-Based Demo Authentication
- User Registration and Login
- Persistent Session Management
- Separate Transaction Data for Each User
- Add Income and Expense Transactions
- Delete Transactions
- Real-Time Balance Calculation
- Total Income and Expense Summary
- Transaction Count Tracking
- Cash Flow Analysis Chart
- Search Transactions
- Filter by Income or Expense
- Multiple Currency Support
- Profile Settings
- Dark Mode
- Reset All Data
- Confirmation Dialogs
- Toast Notifications
- Responsive Dashboard Interface

---

## 📊 Dashboard

The dashboard provides a real-time overview of financial activity, including:

- Current Balance
- Total Income
- Total Expenses
- Total Transactions
- Cash Flow Analysis
- Complete Transaction History

All dashboard values update dynamically when transaction data changes.

---

## 🔐 Demo Authentication

FinTrack Pro includes a browser-based demonstration authentication system.

Users can:

- Create an account
- Log in with registered credentials
- Maintain an active browser session
- Access separate transaction data for each username
- Log out of the application

> **Important:** Authentication data is stored in the browser using `localStorage`. This implementation is intended for frontend demonstration purposes and should not be used as a production authentication system.

---

## 💳 Transaction Management

Users can record financial transactions with:

- Transaction Type
- Description
- Amount
- Date
- Category

Available transaction types:

- Income
- Expense

Transactions are stored locally and remain available after refreshing the browser.

---

## 🔍 Search and Filtering

FinTrack Pro provides transaction discovery tools for quickly navigating financial records.

Users can:

- Search by transaction description
- Search by category
- View all transactions
- Filter income transactions
- Filter expense transactions

---

## 📈 Cash Flow Analytics

The application uses Chart.js to visualize income and expense activity over time.

Transactions from the same date are grouped together before being displayed in the cash-flow chart.

---

## 💱 Supported Currencies

FinTrack Pro supports localized currency formatting for:

- USD — US Dollar
- INR — Indian Rupee
- EUR — Euro
- GBP — British Pound
- JPY — Japanese Yen

Currency formatting is handled using the JavaScript `Intl.NumberFormat` API.

---

## 🌙 Theme Support

The application includes Light and Dark themes.

The selected theme preference is stored locally and restored automatically when the application is reopened.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js
- Web Storage API
- Intl.NumberFormat API

---

## 🌐 Live Demo

https://ravsahebdev.github.io/fintrack-personal-finance-tracker/

---

## 💻 GitHub Repository

https://github.com/ravsahebdev/fintrack-personal-finance-tracker

---

## 📂 Project Structure

```text
fintrack-personal-finance-tracker/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 Running Locally

1. Clone the repository.
2. Open the project folder.
3. Launch `index.html` in a modern browser.
4. Register a demo account.
5. Log in and start managing transactions.

No build process or package installation is required.

---

## ⚙️ Core JavaScript Concepts

This project demonstrates practical implementation of:

- DOM Manipulation
- Event-Driven Programming
- Application State Management
- localStorage Persistence
- Session Handling
- Array Methods
- Search and Filtering
- Data Aggregation
- Dynamic Rendering
- Modal Management
- Form Validation
- International Currency Formatting
- Chart Data Processing
- Theme Persistence

---

## 🔮 Future Improvements

Potential future upgrades include:

- Production Authentication
- Backend API Integration
- Cloud Database Storage
- Edit Transaction Functionality
- Budget Planning
- Monthly and Yearly Reports
- CSV and JSON Export
- Advanced Analytics
- Recurring Transactions
- Spending Category Insights

---

## 👨‍💻 Author

**Ravsaheb Vagre**

GitHub: https://github.com/ravsahebdev

LinkedIn: https://www.linkedin.com/in/ravsaheb-vagre-47b86a35a

---

⭐ If you find FinTrack Pro useful, consider giving the repository a Star.
