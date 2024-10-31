/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* components */
function AutoFillColumnsAutoRows(): JSX.Element {
  const brands = getJBIcons();
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;

  return (
    <>
      <div className="container autoFillColumnsAutoRows">
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
        </ul>
        <p className="info text-center">
          A flexible layout that adds more columns when there’s enough room, creating a grid that’s especially useful for
          responsive image galleries or card layouts. Rows automatically adjusts to fit content.
        </p>
      </div>
    </>
  );
}

/* exports */
export default AutoFillColumnsAutoRows;
