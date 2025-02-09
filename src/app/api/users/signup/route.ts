import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
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

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "user is already exist" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json(
      { message: "User is created", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
