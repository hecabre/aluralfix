import { useDispatch } from "react-redux";
import {
  setSerie,
  setMovie,
  setTrending,
} from "../redux/features/tabAnimationSlice";

function AnimatedTabs() {
  const dispatch = useDispatch();

  const handleSetSerie = () => {
    dispatch(setSerie());
  };

  const handleSetMovie = () => {
    dispatch(setMovie());
  };

  const handleSetTrending = () => {
    dispatch(setTrending());
  };

  return (
    <div className="w-full max-w-md py-4 px-0 tabs-container">
      <div className="tab-container tab-container-left relative">
        <input
          type="radio"
          id="tab-1"
          name="tabs"
          className="hidden tab-1"
          defaultChecked
        />
        <input type="radio" id="tab-2" name="tabs" className="hidden tab-2" />
        <input type="radio" id="tab-3" name="tabs" className="hidden tab-3" />

        <label htmlFor="tab-1" className="tab" onClick={handleSetTrending}>
          Trending
        </label>
        <label htmlFor="tab-2" className="tab" onClick={handleSetSerie}>
          TV Series
        </label>
        <label htmlFor="tab-3" className="tab" onClick={handleSetMovie}>
          Movies
        </label>

        <div className="tab-indicator"></div>
      </div>
    </div>
  );
}

export default AnimatedTabs;
