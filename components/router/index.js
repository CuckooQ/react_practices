import Link from "next/link";
import * as styled from "./style";

function Router() {
  return (
    <styled.Ul>
      <styled.Li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </styled.Li>
      <styled.Li>
        <Link href="/customhook">
          <a>CUSTOM HOOK PRACTICE</a>
        </Link>
      </styled.Li>
    </styled.Ul>
  );
}

export default Router;
