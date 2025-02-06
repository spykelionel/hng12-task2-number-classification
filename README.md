# HNG12 Stage 0 API

## Description

A public API that returns basic information for HNG12 Stage 0.

## Setup

### Prerequisites

- Node.js installed
- Git installed

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/spykelionel/hng12-task1-profile.git
   ```

2. Navigate to the project folder:

   ```sh
   cd hng12-api
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your email:

   ```sh
   EMAIL=your-email@example.com
   ```

5. Run the project in development mode:

   ```sh
   npm run dev
   ```

## API Endpoint

### GET /

Returns basic information about the developer.

**Response Format:**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/spykelionel/hng12-task1-profile.git"
}

```

## Deployment

The API is deployed on Render.

- **Live API URL:** `<your-deployed-url>`

## Documentation

For more details, visit the repository: [GitHub Repository](https://github.com/spykelionel/hng12-task1-profile.git)

# Related Links

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

