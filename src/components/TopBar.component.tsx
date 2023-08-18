import styles from "../styles/TopBar.module.css";
import NameLogo from "./NameLogo.component";

function TopBar({
  pageName,
  setMenuState,
  color,
}: {
  pageName: string;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
}) {
  return (
    <div className={styles.base}>
      <NameLogo pageName={pageName} />
      <div className={styles.toggle_cont}>
        <button
          className={styles.toggle}
          onClick={() => {
            setMenuState(true);
          }}
        >
          <div className={styles.top_line} style={{ backgroundColor: color }} />
          <div
            className={styles.middle_line}
            style={{ backgroundColor: color }}
          />
          <div
            className={styles.bottom_line}
            style={{ backgroundColor: color }}
          />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
