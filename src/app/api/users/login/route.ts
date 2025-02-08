import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connect();
type UserType = {
  email: string;
  username: string;
  password: string;
};
export async function POST(reqest: NextRequest) {
  try {
    const requestBody: UserType = await reqest.json();
    const { email, username, password } = requestBody;
    console.log(requestBody, email, username, password);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Please sign up first" },
        { status: 400 }
      );
    }

    const validePassword = await bcrypt.compare(password, user.password);

    if (!validePassword) {
      return NextResponse.json(
        { error: "Please enter correct credentials" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    console.log(process.env.JWT_SECRET);

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return NextResponse.json(
      { message: "Log In Success", success: true },
      { status: 200 }
    ).cookies.set("token", token, {
      httpOnly: true
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
