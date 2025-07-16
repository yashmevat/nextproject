import mysql from 'mysql2/promise';

export async function GET() {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wordpressdb',
  });

  const [rows] = await db.execute('SELECT post_name,guid,id FROM wp_posts');
  // console.log(rows)

  return Response.json(rows);
}
