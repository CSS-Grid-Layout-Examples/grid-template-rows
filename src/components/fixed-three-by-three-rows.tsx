/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* components */
function FixedThreeByThreeGrid(): JSX.Element {
  const brands = getJBIcons().splice(0, 9);
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;

  return (
    <>
      <div className="container fixedThreeByThreeGrid">
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
          A fixed 3x3 grid layout, like a small "tic-tac-toe" board, which will not change based on screen size.
          Each Column and Row is 100px wide/tall.
        </p>
      </div>
    </>
  );
}

/* exports */
export default FixedThreeByThreeGrid;
