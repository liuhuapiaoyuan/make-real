


// 代理opeai post请求

import { NextRequest } from "next/server";



export async function POST(req:NextRequest){
    const body = await req.json()
    const resp = await fetch(`${process.env.OPENAI_API_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(body),
    })
    const result = await resp.json()
    return Response.json(result)
}