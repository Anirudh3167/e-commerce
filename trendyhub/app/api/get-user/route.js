import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req) {

  const data = req.nextUrl.searchParams;
  const username =data.get('username');

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'DBMS');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  const users = JSON.parse(fileContents);

  for (let i = 0; i < users['records'].length; i++) {
      if (users['records'][i]['name'] === username) {
          let response = new NextResponse(JSON.stringify(users['records'][i]),{status:200});
          return response;
      }
  }

  let response  = new NextResponse("Not Found", {status: 200});
  return response;
}

export async function POST(req) {
     // Check if the request is coming from the server
    // Only allow server-side access
    // Your API logic here
    const data = await req.json();
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'DBMS');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
    const users = JSON.parse(fileContents);

    for (let i = 0; i < users['records'].length; i++) {
        if (users['records'][i]['name'] === data['username']) {
            let response = new NextResponse(JSON.stringify(users['records'][i]),{status:200});
            return response;
        }
    }

    let response  = new NextResponse("Not Found", {status: 200});
    return response;
}