/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* components */
function FlexibleThreeByThreeLayout(): JSX.Element {
  const brands = getJBIcons().splice(0, 6);
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;

  return (
    <>
      <div className="container flexibleThreeByThreeLayout">
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
          A grid with three responsive columns that will resize to fit the container width.
          Useful for items that should always have the same width.
        </p>
      </div>
    </>
  );
}

/* exports */
export default FlexibleThreeByThreeLayout;
