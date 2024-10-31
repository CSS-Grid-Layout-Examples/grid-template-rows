/* app imports */
import "./css/style.scss";
import FixedThreeByThreeGrid from "./fixed-three-by-three-rows";
import FlexibleThreeByThreeLayout from "./flexible-three-by-three-layout";
import AutoFillColumnsAutoRows from "./auto-fill-columns-auto-rows";
import ResponsiveRowsWithFrUnits from "./responsive-rows-with-fr-units";

function AppOutlet(): JSX.Element {
  return (
    <>
      <FixedThreeByThreeGrid />
      <FlexibleThreeByThreeLayout />
      <AutoFillColumnsAutoRows />
      <ResponsiveRowsWithFrUnits />
    </>
  );
}

/* exports */
export default AppOutlet;
