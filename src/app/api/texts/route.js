// src/app/api/texts/route.js
import mysql from 'mysql2/promise';

export async function GET() {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wordpressdb',
  });

  try {
    const [rows] = await db.execute(`
      SELECT ID, post_title, post_content 
      FROM wp_posts 
      WHERE post_name = ? AND post_status = 'publish' AND post_type = 'page'
    `, ['corporate-3-landing']);

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Page not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Fetched page data:", rows[0]);

    return new Response(JSON.stringify(rows[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("MySQL error:", err);
    return new Response(
      JSON.stringify({ error: "Database error" }),
      { status: 500 }
    );
  } finally {
    await db.end();
  }
}
