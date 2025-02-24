# Pathfinder.ai : Your AI-Powered Career Coach

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Vercel Deploy](https://pathfinder-ai-ruby.vercel.app/)] **Pathfinder.ai** is a comprehensive AI-driven career coach application designed to elevate your job search and career development. Leveraging cutting-edge technologies like Next.js, Gemini AI, and Prisma, Pathfinder.ai provides a suite of tools to help you craft compelling resumes, practice for interviews, generate tailored cover letters, and stay informed about industry trends.

## Features

* **User Onboarding:** Interactive dashboards displaying in-demand skills and salary trends, updated weekly.
* **AI Resume Builder:** Generates ATS-optimized content, fully customizable to fit specific industries and skills.
* **Mock Interview Feature:** Offers role-specific questions, tracks performance, and provides AI-generated improvement tips.
* **Intelligent Cover Letter Generator:** Analyzes job descriptions to create tailored cover letters.
* **Industry Insights Dashboard:** Provides market outlook, industry growth, job demand, and top skills.
* **Responsive UI:** Built with Next.js and Shadcn UI for a clean and intuitive user experience.
* **User Authentication:** Secure user authentication with Clerk, supporting Google and email/password login.

## Technologies Used

* **Frontend:**
    * Next.js: React framework for building server-rendered applications.
    * Shadcn UI: Re-usable components built with Radix UI and Tailwind CSS.
    * Tailwind CSS: Utility-first CSS framework.
* **Backend:**
    * Prisma: ORM for database access.
    * Neon: Postgres SQL database.
    * Clerk: User authentication and management.
    * Gemini AI: For AI-powered features like resume improvement, interview questions, and cover letter generation.
* **Deployment:**
    * Vercel: Platform for deploying Next.js applications.
    * Inngest: Function management and monitoring.

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* PostgreSQL database (Neon recommended)
* Clerk account
* Google Cloud Platform account for Gemini AI access.
* Vercel account (for deployment)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shreyashdeep/Pathfinder.ai.git
    cd Pathfinder.ai
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Set up environment variables:**

    * Create a `.env.local` file in the root directory.
    * Add your environment variables, including database connection strings, Clerk API keys, and Gemini AI API keys. Example:

        ```
        DATABASE_URL="your_neon_database_url"
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        CLERK_SECRET_KEY="your_clerk_secret_key"
        GEMINI_API_KEY="your_gemini_api_key"
        ```

4.  **Run database migrations:**

    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment (Vercel)

1.  **Create a Vercel account and install the Vercel CLI.**
2.  **Link your GitHub repository to Vercel.**
3.  **Add environment variables to your Vercel project settings.**
4.  **Deploy your application using the Vercel CLI or the Vercel dashboard.**
5.  **Connect Inngest for monitoring and function management.**

## Usage

1.  **Sign up or log in using Clerk.**
2.  **Complete the user onboarding process to provide industry and skill information.**
3.  **Explore the Industry Insights Dashboard to learn about market trends.**
4.  **Use the AI Resume Builder to create and improve your resume.**
5.  **Practice for interviews with the Mock Interview Feature.**
6.  **Generate tailored cover letters with the Intelligent Cover Letter Generator.**

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

* Thanks to the Next.js, Shadcn UI, Prisma, Clerk, and Gemini AI communities for their excellent tools and resources.
* Inspired by the need for accessible and effective career development tools.

## Contact

* Your Name: Shreyash Deep
* Email: mail2shreyashdeep@gmail.com
* X : https://x.com/ShreyashDeep1
* LinkedIn : linkedin.com/in/shreyashdeep

