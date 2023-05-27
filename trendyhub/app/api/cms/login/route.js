import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.json();
  let username = data['username'];
  let password = data['password'];
  
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'DBMS');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/cms_user.json', 'utf8');
  const users = JSON.parse(fileContents);

  for (let i = 0; i < users['records'].length; i++) {
      if ((users['records'][i]['username'] === username) && (users['records'][i]['password'] === password)) {  
        let response = new NextResponse(JSON.stringify({message:"success"}),{status:200});
        return response;
      }
  }

  let response  = new NextResponse(JSON.stringify({message:"Not Found"}), {status: 200});
  return response;
}