# Connector Overview

This connector includes three applications: `customer-number-generator-app`, `email-verification-sender-app`, and `email-verification-receiver-app`. Below is an overview and the configuration options for each app.

## Applications

### 1. Customer Number Generator App

**Type:** Service App  
**Function:** Assigns a unique customer number when a new customer account is created. It includes an API Extension.

### 2. Email Verification Sender App

**Type:** Event App  
**Function:** Generates a new verification token after the customer account is created. It uses a Subscription to get notified.

### 3. Email Verification Receiver App

**Type:** Service App  
**Function:** Verifies the token after the customer opens a link embedded in an email containing the verification token.

## Configuration Options

### 1. Customer Number Generator App

The following environment variables are required for configuration:

```plaintext
CTP_REGION
CTP_PROJECT_KEY
CTP_CLIENT_ID
CTP_CLIENT_SECRET
CTP_SCOPE (optional*)
```

### 2. Email Verification Sender App

```plaintext
CTP_REGION
CTP_PROJECT_KEY
CTP_CLIENT_ID
CTP_CLIENT_SECRET
CTP_SCOPE (optional*)
```

### 3. Email Verification Receiver App

```plaintext
CTP_REGION
CTP_PROJECT_KEY
CTP_CLIENT_ID
CTP_CLIENT_SECRET
CTP_SCOPE (optional*)
```

_Note: The `CTP_SCOPE` variable is optional. If not provided, the scope assigned to the API client during API Client creation will be used._
