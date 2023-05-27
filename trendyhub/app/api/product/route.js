import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET(req) {
    const data = req.nextUrl.searchParams;
    const pid = data.get('pid');

    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'DBMS');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const dbms_data = JSON.parse(fileContents);

    for(let i = 0; i < dbms_data['records'].length; i++) {
        if (dbms_data['records'][i]['id'] === pid) {
            let response = new NextResponse(JSON.stringify(dbms_data['records'][i]),{status:200});
            return response;
        }
    }

    let response = new NextResponse("Not Found",{status:200});
    return response;
  }