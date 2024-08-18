import { NextRequest, NextResponse } from "next/server"

export const GET = (_, res) => {
    console.log(res.params.id)
    return NextResponse.json(
        {
            message: "Message from users from dynamic routing.",
            id: res.params.id
        },
        {
            status: 201
        }
    )
}