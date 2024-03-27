import { useSearchParams } from "react-router-dom";

/**searchQueryParam is a hook in react-router, not in reactjs */
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("Search Param - name = ", searchParams.get("name")," city = ", searchParams.get("city"));
  const name = searchParams.get("name");
  const city = searchParams.get("city");
  const age = searchParams.get("age");

  return (
    <div style={{ backgroundColor: "beige" }}>
      <h3>React Router Hook: useSearchParams</h3>
      <hr />
      <h4>Filter Page</h4>
      <h5>Name: {name}</h5>
      <h5>City: {city}</h5>
      <h5>Age: {age}</h5>
      <button
        setSearchParams
        onClick={() => {
          setSearchParams({ age: 30 });
        }}
      >
        Set Age 30
      </button>
      <input
        type="text"
        style={{
          width: 500,
          display: "flex",
          margin: "auto",
          justifyContent: "center",
        }}
        onChange={(e) =>
          setSearchParams({ textInput: e.target.value, age: 25 })
        }
        placeholder="Enter Text, it reflects in Query Param in address bar."
      />
    </div>
  );
}

export default Filter;
