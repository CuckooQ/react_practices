import PrevPageButton from "../prevPageButton";
import * as styled from "./style";

function Layout({ children }) {
  return (
    <styled.Main>
      <PrevPageButton />
      <styled.Content>{children}</styled.Content>
    </styled.Main>
  );
}

export default Layout;
