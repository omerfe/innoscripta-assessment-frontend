import Clock from "./Clock";
import moment from "moment";

const Header: React.FC = () => {
  const formattedDate = moment().format("dddd, D MMMM YYYY");
  return (
    <header className="w-full pt-3">
      <div className="h-12 flex items-center justify-between container">
        <h3>{formattedDate}</h3>
        <Clock />
      </div>
      {/* <div className="h-3 bg-stone-700 dark:bg-stone-300 rounded-sm container mb-6" /> */}
    </header>
  );
};

export default Header;
