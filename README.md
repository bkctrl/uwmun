<a href=""><img src="https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge"></a>
<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/bkctrl/uwmun">
    <img src="https://uwmun.s3.ca-central-1.amazonaws.com/uwmun-logo-black.png" alt="Logo" width="130" height="130">
  </a>

<h3 align="center">UWMUN</h3>

  <p align="center">
    The University of Waterloo Model United Nations website, automated with Notion API.
<br /><br />
    
![Notion API](https://img.shields.io/badge/Notion%20API-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br />
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
    
<br />
    
   <a href="https://uwmun.ca" target="_blank"><strong>🔗 VIEW ACTIVE WEBSITE »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The UWMUN website features the integration of **Notion API**, enabling the club's administrators to effortlessly keep the site updated by **making changes to a Notion workspace**. 

This allows those without a technical background to conveniently update the club's website!

### Screenshots

<img src="https://uwmun.s3.ca-central-1.amazonaws.com/uwmun-screenshots.png">
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To set up the project locally and get a local copy up and running:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository: <br />
   ```sh
   git clone https://github.com/bkctrl/uwmun.git
   ```
2. Navigate to the project directory & install the dependencies: <br />
   ```sh
   cd uwmun && npm install
   ```
3. Install the dependencies for the backend: <br />
   ```sh
   cd server && npm install
   ```
4. Set up the environment variables. More information on each of them are given further below. Your `.env.local` file should consist of (with similar names):  <br />
   ```sh
    NEXT_PUBLIC_NOTION_API_KEY=
    NEXT_PUBLIC_NOTION_EXECUTIVES_DATABASE_ID=
    NEXT_PUBLIC_NOTION_EVENTS_DATABASE_ID=
    NEXT_PUBLIC_NOTION_RESOURCES_DATABASE_ID=
    NEXT_PUBLIC_EMAIL_API_KEY=
    NEXT_PUBLIC_EMAIL_SERVICE_ID=
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
    NEXT_PUBLIC_VERCEL_SERVER=
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- SETTING UP THE DATABASE -->
## Setting Up the Database with Notion

### Prerequisites
* A Notion account

### Database Setup 
1. Navigate to [Notion](https://notion.so) and create a document.
2. Create a new database by typing `/database`.
3. Populate the database with appropriate data. The database should look something like:
4. Navigate to [Integrations](https://www.notion.so/profile/integrations) and create a Notion integration. Select the database you created. Select `Internal` or `Public` as appropriate and choose a logo. The UWMUN wesbite for instance uses an internal integration. 
5. Select appropriate capabilities. Then show the Internal Integration Secret. This would be the `NEXT_PUBLIC_NOTION_API_KEY` in your `.env.local`. **Do not share this with anyone!**
6. Find out your database ID. This is what precedes `?v=` of the link when you open the dabase in fulll screen:
```sh
   https://www.notion.so/<database_ID>?v=<view_ID>
```
This would be the `NEXT_PUBLIC_NOTION_EXECUTIVES_DATABASE_ID` or the ID of your specific database. The UWMUN website for instance has one for the executives database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- EMAIL FUNCTION -->
## Enabling Email Submitting
There are numerous options. This project uses **EmailJS** for its email submitting functionality. 
1. Take a look at EmailJS's [Getting Started](https://www.emailjs.com/docs/) page for detailed instructions.
2. Fill in the following in your `.env.local` file:
```sh
   NEXT_PUBLIC_EMAIL_API_KEY=
   NEXT_PUBLIC_EMAIL_SERVICE_ID=
   NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONFIGURING BACKEND -->
## Configuring the Backend
You could test the backend both locally or by using a deployed API. The following is on testing locally. 
1. Uncomment the commented-out code in `src/app/page.tsx` and `server/api/index.js` for local testing.
2. Navigate to `index.js` and run the server. Assuming you are at the root directory:
```sh
   cd server/api && nodemon index.js
```
3. Open a new terminal and run the frontend. On the new terminal:
```sh
   npm run dev
```
4. Navigate to `localhost:3000` on your browser and see the project demo!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>










<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
