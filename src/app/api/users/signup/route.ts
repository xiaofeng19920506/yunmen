import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

type UserType = {
  email: string;
  username: string;
  password: string;
};
connect();

export async function POST(reqest: NextRequest) {
  try {
    const requestBody: UserType = await reqest.json();
    const { email, username, password } = requestBody;
    console.log(requestBody, email, username, password);

    const user = await User.findOne({ email });
    console.log(user);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
