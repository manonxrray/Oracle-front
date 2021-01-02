import styled from "@emotion/styled";
import { DARKPURPLE } from "../../utils/styling";

const HeaderStyle = styled.header`
  background: ${DARKPURPLE};
`;

export default function Header() {
  return (
    <HeaderStyle>
      <ul>
        <li>Accueil</li>
        <li>Tirage</li>
        <li>Galerie</li>
      </ul>
    </HeaderStyle>
  );
}
