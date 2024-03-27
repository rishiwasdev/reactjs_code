import "../my_css/Vid_032_style1.css";
import style from "../my_css/Vid_032_style2.module.css";

function MyApp() {
  return (
    <div>
      <h1>Style Types</h1>
      <h2 className="primary">Style Type: 1 (external/regular CSS)</h2>
      <h2 style={{ backgroundColor: "black", color: "red" }}>
        Style Type: 2 (inline CSS)
      </h2>
      <h2 className={style.success}>Style Type: 3 (modular CSS (CSS with module))</h2>
      <h2>
        Style Type: 4 (style component, not covered by tutor as it's big
        tutorial)
      </h2>
    </div>
  );
}

export default MyApp;
