import { sql } from "@/lib"

const createTable = async () => {
  try {
    await sql`
			CREATE TABLE IF NOT EXISTS information (
				id uuid PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP
			);
		`

    console.log("Tables created successfully")
  } catch (error) {
    console.log(`Error creating tables: ${error}`)
  }
}

createTable()
