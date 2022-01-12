import PageTitle from "../components/pageTitle";
import Router from "../components/router";
import Seo from "../components/Seo";

export default function CustomHook() {
  return (
    <>
      <Seo title={"React Practice"} />
      <PageTitle>REACT PRACTICE</PageTitle>
      <Router />
    </>
  );
}
