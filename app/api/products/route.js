import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json(
        {
            message: "Message from product"
        },
        {
            status: 201
        }
    )
}