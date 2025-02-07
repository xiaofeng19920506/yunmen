import { MongoClient, Db } from "mongodb";

// Use a regular environment variable, not NEXT_PUBLIC_ for sensitive data
const uri = process.env.MONGO_CONNECTION || ""; // This should be in your .env file
const client = new MongoClient(uri);

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null; // Specify the type of cachedDb as Db

// Function to connect to MongoDB
async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!uri) {
    throw new Error("MongoDB URI is not defined");
  }

  try {
    // Connect to MongoDB if no cached connection exists
    await client.connect();
    const db = client.db("user"); // Replace with your actual DB name
    cachedClient = client;
    cachedDb = db;

    console.log("Connected to MongoDB");
    return { client, db };
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw new Error("Failed to connect to MongoDB");
  }
}

// Function to fetch data from a collection
export async function fetchData() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("user");
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}
