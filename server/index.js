import express from "express";
import { Client } from "@notionhq/client";
import 'dotenv/config';
import cors from "cors";
  
const notionKey = process.env.NEXT_PUBLIC_NOTION_API_KEY;
const execsDB = process.env.NEXT_PUBLIC_NOTION_EXECUTIVES_DATABASE_ID;
const eventsDB = process.env.NEXT_PUBLIC_NOTION_EVENTS_DATABASE_ID;
const resourcesDB = process.env.NEXT_PUBLIC_NOTION_RESOURCES_DATABASE_ID;

const notion = new Client({ 
  auth: notionKey,
});

const app = express();
app.use(cors())
// app.use(cors({
//   origin: ["uwmun-3ga6j0koh-bkctrls-projects.vercel.app"],
//   methods: ["GET"],
//   credentials: true
// }))

app.get('/execs-data', async (req, res) => { 
  console.log(notionKey);
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: execsDB
    }); 
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    res.status(500).json({ error: error.message });  
  } 
}); 

app.get('/events-data', async (req, res) => { 
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: eventsDB
    }); 
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    res.status(500).json({ error: error.message });  
  } 
}); 

app.get('/resources-data', async (req, res) => { 
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: resourcesDB
    }); 
    const stringy = response.results.reverse().map(result => result.properties)
    res.json(stringy);
  } catch (error) {
    res.status(500).json({ error: error.message });  
  } 
}); 

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

module.exports = app;
