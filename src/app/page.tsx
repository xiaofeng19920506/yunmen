import Link from "next/link";
export default async function Home() {
  return (
    <div>
      <header>
        {/* Login button in the top right */}
        <Link href="/login">Login</Link>
        <Link href="/signup">Register</Link>
      </header>

      <main>
        <h1>Welcome to Our Next.js App</h1>
        <p>
          This is the home page. Click the login button in the top-right corner
          to sign in.
        </p>
      </main>
    </div>
  );
}
