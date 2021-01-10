import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

const PageStyle = styled.div`
  min-height: 100vh;
  padding-top: 2.5rem;

  @media (min-width: 1000px) {
    padding-top: 3.5rem;
  }
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
