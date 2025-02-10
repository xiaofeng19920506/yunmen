import { NextRequest, NextResponse } from "next/server";
export function getServerSideProps(req: NextRequest, res: NextResponse) {
    return {props: {token: req.cookies}}
}
