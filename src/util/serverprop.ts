import { NextRequest } from "next/server";
export function getServerSideProps(req: NextRequest) {
  return { props: { token: req.cookies } };
}
