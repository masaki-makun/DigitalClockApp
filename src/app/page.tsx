import Container from "@mui/material/Container";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@/app/pages/components/Clock/page"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <Container fixed>
      <Clock />
    </Container>
  );
}
