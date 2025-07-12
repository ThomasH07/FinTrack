# 📊 FinTrack

**FinTrack** is a cross-platform budgeting app designed to help users take control of their personal finances. Whether it’s tracking gas, groceries, entertainment, or any other expense, FinTrack offers a simple and effective way to monitor and manage spending habits.

Built with **bare-bones React Native**, **AWS Cognito** for secure user authentication, and **AWS S3** for data storage, FinTrack ensures performance, scalability, and security—right out of the box.

---

## 🚀 Features

- **User Authentication**: Sign up and log in securely with AWS Cognito.

- **(WIP) Expense Tracking**: Uses Amazon DynamoDB to log and categorize expenses into gas, groceries, entertainment, and more.

- **Cross-Platform Support**: Runs seamlessly on both Android and iOS devices (local deployment).

- **(WIP) Cloud Integration**: Uses AWS S3 for efficient, scalable storage.

---

## 🛠️ Tech Stack

| Tech         | Purpose                             |
|--------------|-------------------------------------|
| React Native | Cross-platform mobile development   |
| AWS Cognito  | User authentication and management  |
| AWS S3       | Handles files, cheap & scalable     |
| AWS DynamoDB | Expenses & Analytics                |

---

## 🧪 Getting Started

### Prerequisites

- Node.js & npm
- React Native CLI
- Android Studio / Xcode (depending on platform)
- AWS credentials configured (Cognito + S3 setup)

### Installation

```bash
git clone https://github.com/yourusername/FinTrack.git
cd FinTrack
npm install
```
### IOS
Install pod, and configure xcode tools
```bash
npx react-native run-ios
```
### Android
Configure android studio, and make sure to have a virtual device created
```bash
npx react-native run-android
```
## 📦 Roadmap

- Implement Tailwind CSS and Improve UI/UX

- Add persistent data storage with Amazon DynamoDB 

- Implement charts/visualizations of expenses

- Export expense reports

- Add budgeting goals and alerts

- Launch to App Store and Google Play