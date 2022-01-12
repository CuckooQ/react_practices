import { useMemo, useState } from "react";
import * as styled from "./style";
import useApi from "../../hooks/useAPI";
import useInterval from "../../hooks/useInterval";
import useToggle from "../../hooks/useToggle";
import useUpdate from "../../hooks/useUpdate";
import usePrevious from "../../hooks/usePrevious";

function CustomHooks() {
  const { loading, data } = useApi("/api/name");
  const content = useMemo(() => {
    return !loading && data ? data.name : "loading";
  }, [loading, data]);

  const [intervalCount, setIntervalCount] = useState(0);
  useInterval(() => {
    setIntervalCount(intervalCount + 1);
  }, 1000);

  const [toggleValue, toggle] = useToggle(false);

  const [toggledCount, setToggledCount] = useState(0);
  useUpdate(() => setToggledCount(toggledCount + 1), [toggleValue]);

  const [randomValue, setRandomValue] = useState(0);
  const previousRandomValue = usePrevious(randomValue);

  return (
    <>
      <styled.Container>
        <styled.Title>useApi: </styled.Title>
        <styled.ContentBlock>{content}</styled.ContentBlock>
      </styled.Container>
      <styled.Container>
        <styled.Title>useInterval: </styled.Title>
        <styled.ContentBlock>{intervalCount}</styled.ContentBlock>
      </styled.Container>
      <styled.Container>
        <styled.Title>useToggle: </styled.Title>
        <styled.ToggleBlock>
          <styled.ToggleObject toggle={toggleValue}></styled.ToggleObject>
        </styled.ToggleBlock>
        <styled.Button onClick={() => toggle()}>토글</styled.Button>
      </styled.Container>
      <styled.Container>
        <styled.Title>useUpdate: </styled.Title>
        <styled.ContentBlock>{toggledCount}</styled.ContentBlock>
      </styled.Container>
      <styled.Container>
        <styled.Title>usePrevious: </styled.Title>
        <styled.ContentBlock>
          <span>현재 {randomValue}</span>
          <span>,</span>
          <span>이전 {previousRandomValue}</span>
        </styled.ContentBlock>
        <styled.Button
          onClick={() => setRandomValue(Math.trunc(Math.random() * 1000))}
        >
          랜덤
        </styled.Button>
      </styled.Container>
    </>
  );
}

export default CustomHooks;
