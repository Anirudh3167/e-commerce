import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log('-------------------')
  // Get the data from the POST
  const data = await req.json();
  console.log(data)
  let email = data['email']
  let id = data['id']

  console.log("Data:",id,email);

  // Get the data from the DBMS
  const jsonDirectory = path.join(process.cwd(), 'DBMS');
  const fileContents = await fs.readFile(jsonDirectory + '/wishlist.json', 'utf8');
  const cartItems = JSON.parse(fileContents);
  let exists = false;

  // Delete if the record exists
  for (let i = 0; i < cartItems["records"].length; i++) {
    if ((cartItems["records"][i]['email'] === email) && (cartItems["records"][i]["id"] === id)) {
        cartItems["records"].splice(i,0);
        console.log("existing item is deleted");
        exists = true;
        break;
    }
  }

  // Add if the records doesnt exist
  if (!exists) {
    cartItems["records"].push({email,id});
  }

  // Writing the changes.
  fs.writeFile(jsonDirectory + "/wishlist.json", JSON.stringify(cartItems).replaceAll("},","},\n"), (err) => {
    if (err) {
      console.log(err);
    }
  });

  if (!exists) {
    console.log("New Item is added");
  }

  let response = new NextResponse(JSON.stringify({"message":"success"}),{status:200});
  return response;
}
