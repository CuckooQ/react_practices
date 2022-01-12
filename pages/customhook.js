import CustomHooks from "../components/customHooks";
import PageTitle from "../components/pageTitle";
import Seo from "../components/Seo";

export default function CustomHook() {
  return (
    <>
      <Seo title={"Custom Hook Practice"} />
      <PageTitle>CUSTOM HOOK PRACTICE</PageTitle>
      <CustomHooks />
    </>
  );
}
