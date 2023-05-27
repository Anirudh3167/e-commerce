import React from 'react'
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function RegisterUser(username,email,password) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'DBMS');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  const users = JSON.parse(fileContents);

  for (let i = 0; i < users['records'].length; i++) {
      if (users['records'][i]['name'] === username) {
          let response = new NextResponse("This user already exists",{status:200});
          return response;
      }
  }

  fs.appendFile(jsonDirectory + "/users.json", JSON.stringify({username,email,password}), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
