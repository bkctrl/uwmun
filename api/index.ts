import express from "express";
import { Client } from "@notionhq/client";
const app = express();
import 'dotenv/config';
import cors from "cors";
  
const notionKey = process.env.NEXT_PUBLIC_NOTION_API_KEY!;
const execsDB = process.env.NEXT_PUBLIC_NOTION_EXECUTIVES_DATABASE_ID!;
const eventsDB = process.env.NEXT_PUBLIC_NOTION_EVENTS_DATABASE_ID!;
const resourcesDB = process.env.NEXT_PUBLIC_NOTION_RESOURCES_DATABASE_ID!;

const notion = new Client({ 
  auth: notionKey,
});

app.use(cors());

app.get('/execs-data', async (req, res) => { 
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: execsDB
    }); 
    //@ts-ignore
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });  
  } 
}); 

app.get('/events-data', async (req, res) => { 
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: eventsDB
    }); 
    //@ts-ignore
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });  
  } 
}); 

app.get('/resources-data', async (req, res) => { 
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: resourcesDB
    }); 
    //@ts-ignore
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });  
  } 
}); 

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

export default app;
