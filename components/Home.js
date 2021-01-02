import styled from "@emotion/styled";
import { MAUVE } from "../utils/styling";

const HomeStyle = styled.div`
  background: ${MAUVE};
`;

export default function HomePage() {
  return (
    <main>
      <HomeStyle />
    </main>
  );
}
