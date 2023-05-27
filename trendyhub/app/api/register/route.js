import React from 'react'
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function POST(req) {
    // Getting the user details.
    const data = await req.json();
    const username = data['username'];
    const email = data['email'];
    const password = data['password'];

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'DBMS');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  const users = JSON.parse(fileContents);

  for (let i = 0; i < users['records'].length; i++) {
      if (users['records'][i]['name'] === username) {
          let response = new NextResponse(JSON.stringify({message: "User already exists"}),{status:200});
          return response;
      }
  }

  users['records'].push({username,email,password});
  fs.writeFile(jsonDirectory + "/users.json", JSON.stringify(users).replaceAll("},","},\n"), (err) => {
    if (err) {
      console.log(err);
    }
  });

  let response = new NextResponse(JSON.stringify({message: "Success"}),{status:200});
  return response;
}
