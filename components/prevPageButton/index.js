import { useRouter } from "next/router";
import * as styled from "./style";

function PrevPageButton() {
  const router = useRouter();

  function goToPrevPage() {
    router.back();
  }

  return <styled.Button onClick={goToPrevPage}>↶</styled.Button>;
}

export default PrevPageButton;
