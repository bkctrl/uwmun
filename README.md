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
    
   <a href="https://uwmun.ca" target="_blank"><strong>🔗 VISIT ACTIVE WEBSITE »</strong></a>
    <br />
    <br />
  </p>
</div> 


<!-- ABOUT THE PROJECT -->
## About The Project

The UWMUN website features the integration of **Notion API**, enabling the club's administrators to effortlessly keep the site updated by **making changes to a Notion workspace**. 

This allows those without a technical background to conveniently update the club's website!

This project can also be **open-source** — if you are a future member/executive at UWMUN with a technical background, feel free to publish pull requests with new features or updates!

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
3. Populate the database with appropriate data. The database(s) you create should be in these formats:
   ![](https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-1.png?)
4. Navigate to [Integrations](https://www.notion.so/profile/integrations) and create a Notion integration. Select the database you created. Select `Internal` or `Public` as appropriate and choose a logo. The UWMUN wesbite for instance uses an internal integration. 
5. Select appropriate capabilities. Then show the Internal Integration Secret. This would be the `NEXT_PUBLIC_NOTION_API_KEY` in your `.env.local`. **Do not share this with anyone!**
<br /><br />
  ![](https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-2.png?)
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

The website automatically updates to the changes you make to the Notion document!

For instance:
<p align="center">
  <img alt="Light" src="https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-3-new.png?" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-4-new.png?" width="45%">
</p>

After making some changes:
<p align="center">
  <img alt="Light" src="https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-5-new.png?" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-6-new.png?" width="45%">
</p>



### Inviting Collaborators to Your Notion Workspace

The key functionality of this project is to make it easier for teams with non-technical members to participate in website updating. To achieve this, simply:
1. Click `Share` in the top right corner of your Notion document.
2. Select `Anyone with link at Your Notion`.
3. Select `Full access`/`Can edit`/`Can comment`/`Can view` appropriately. For instance, the President and the administrator at UWMUN have full access while other executives have an editing privilege.
4. Share the link(s) with your colleagues!
   ![](https://uwmun.s3.ca-central-1.amazonaws.com/notion-demo-7.png?)


<!-- Frontend -->
## Usage of Notion Data in `page.tsx`
Data from Notion is fetched with:
  ```ruby
  const [execData, setExecData] = useState([]);

  const API = process.env.NEXT_PUBLIC_VERCEL_SERVER;
  // const API = "http://localhost:4000"; // enable for local testing

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        const execResponse = await fetch(`${API}/execs-data`);
        const execJson = await execResponse.json();
        setExecData(execJson);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    if (execData.length === 0) {
      return;
    }
  }, []);
      ...
  ```
The components in the frontend are then `map`ped from the Notion data:
  ```ruby
  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {execData.map((exec, index) => { 
            return (
              <div key={index} data-aos="zoom-in" aos-duration="1500" className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <img src={(exec as any)["Profile Link"].url} className="mx-auto" style={{borderRadius : "50%", width : "20%", height : "20%"}}/>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">{(exec as any).Name.title[0].plain_text}</h3>
                  <p className="text-muted-foreground">{(exec as any).Position.rich_text[0].plain_text}</p>
                  <p className="text-muted-foreground">{(exec as any).Program.rich_text[0].plain_text}</p>
                </div>
              </div>
            );
          })}
    </div>
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Backend -->
## Obtaining Notion Data in `index.js`
`index.js` uses the `@notionhq/client` library to fetch data from Notion using the Notion integration key and database ID from above:
```ruby
   const notion = new Client({ 
      auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
   });
   app.get('/execs-data', async (req, res) => { 
      try {
        const response = await notion.databases.query({
          database_id: process.env.NEXT_PUBLIC_NOTION_EXECUTIVES_DATABASE_ID,
        }); 
        const data = response.results.reverse().map(result => result.properties);
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });  
      } 
    }); 
```


<!-- extra -->
## Miscellaneous

Make sure all rows and columns in the databases are filled, as empty rows/columns may cause unexpected behaviour.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
