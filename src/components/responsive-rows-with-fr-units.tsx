/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* components */
function ResponsiveRowsWithFrUnits(): JSX.Element {
  const brands = getJBIcons().splice(0, 8);
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;

  return (
    <>
      <div className="container responsiveRowsWithFrUnits">
        <ul className="list-unstyled">
          {
            brands.map((obj, index) => {
              return (
                <li key={index} className="brandItem">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                  <span className="text-center">{obj.title}</span>
                </li>
              );
            })
          }
          {
            brands.map((obj, index) => {
              return (
                <li key={index} className="brandItem">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                  <span className="text-center">{obj.title}</span>
                </li>
              );
            })
          }
        </ul>
        <p className="info text-center">
          A 4x4 CSS Grid Matix with 'Equal Width Columns' at 1fr each. However, the rows are styled at
          1fr, 1.5fr, 1.5fr and 1fr respectively.
        </p>
      </div>
    </>
  );
}

/* exports */
export default ResponsiveRowsWithFrUnits;
