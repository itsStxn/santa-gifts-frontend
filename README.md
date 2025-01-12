# Santa Gifts

Santa Gifts is a web application designed to recommend gifts using speech recognition and natural language processing. Built with Next.js, it leverages React components and the TanStack React Query library for efficient data fetching.

## Features

- **Voice Recording:** Capture user input through speech recognition.
- **Gift Recommendation:** Generate gift recommendations based on user input.
- **Responsive UI:** Modern design with Tailwind CSS and custom components.
- **Loading Indicators:** Show loading states with a custom loader component.
- **Error Handling:** Log and manage errors during data fetching.

## Tech Stack

- **Next.js:** Framework for server-side rendering and static site generation.
- **React:** Library for building user interfaces.
- **TypeScript:** Superset of JavaScript that adds static types.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **TanStack React Query:** Data-fetching library for managing server state.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/santa-gifts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd santa-gifts
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:3000` to view the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

### Linting

To check for linting errors, run:

```bash
npm run lint
```

## Project Structure

- **`/src`**: Contains the main source code for the application.
  - **`/components`**: React components for UI rendering.
  - **`/functions`**: Functions for handling API requests and data processing.
  - **`/icons`**: Custom icons used within the application.
  - **`/app`**: Page components and layout configuration.
  
- **`/public`**: Public assets such as images and fonts.
- **`/styles`**: Global and component-specific styles.

## License

This project is licensed under the MIT License.
