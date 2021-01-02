import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import { MAUVE, DARKPURPLE, WHITE } from "../../utils/styling";

const PageStyle = styled.div`
  background: ${DARKPURPLE};
  color: ${WHITE};
  min-height: 100vh;
  padding-top: 2.5rem;
`;

export default function Paging({ children }) {
  return (
    <main>
      <Header />
      <PageStyle>{children}</PageStyle>
      <Footer />
    </main>
  );
}
