import express from "express";
import { Client } from "@notionhq/client";
import 'dotenv/config';
import cors from "cors";
import helmet from "helmet"; // Import helmet properly

const app = express();
app.use(cors());

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'"],
      "connect-src": ["'self'", "'unsafe-inline'"],
      "img-src": ["'self'", "data:"],
      "style-src-elem": ["'self'", "data:"],
      "script-src": ["'unsafe-inline'", "'self'"],
      "object-src": ["'none'"],
    },
  })
);

const notion = new Client({ 
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY, // Use environment variables
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

app.get('/events-data', async (req, res) => { 
  try {
    const response = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_EVENTS_DATABASE_ID,
    }); 
    const data = response.results.reverse().map(result => result.properties);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });  
  } 
}); 

app.get('/resources-data', async (req, res) => { 
  try {
    const response = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_RESOURCES_DATABASE_ID,
    }); 
    const data = response.results.reverse().map(result => result.properties);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });  
  } 
}); 

// Export the app (for Vercel)
export default app;