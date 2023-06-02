import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET(req) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'DBMS');
    //Read the json data file data.json
    let fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');

    let response = new NextResponse(fileContents,{status:200});
    return response;
  }