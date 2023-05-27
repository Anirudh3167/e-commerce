import { NextResponse } from 'next/server';
 
export async function GET(req) {
    let token = "abcsdfr";

    // Gets the previous token
    const prevtoken = req.cookies.get('token')
    if (prevtoken) {token = prevtoken['value'] + "This is changed"}
    console.log(prevtoken)

    // Response 
    let body = {
        message : 'hello'
    }

    let context = { 
        status: 200, 
        headers: {
            'Set-Cookie':`token=${token}`
        }
    }
    let response = new NextResponse(JSON.stringify(body),context);

    return response;
}
