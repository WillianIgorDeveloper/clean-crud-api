import { sql } from "@/lib"

const redButton = async () => {
  try {
    await sql`
      DROP TABLE IF EXISTS information;
    `

    console.log("🟢 Tables deleted successfully!")
  } catch (error) {
    console.log(`🔴 Error deleting tables! => ${error}`)
  }
}

redButton()
