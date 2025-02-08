import { useRouter } from "next/router";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Room {id}</h1>
      <p>Welcome to Room {id}</p>
    </div>
  );
}
