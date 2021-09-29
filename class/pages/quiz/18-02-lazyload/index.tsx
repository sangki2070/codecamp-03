import LazyLoad from "react-lazyload";

export default function LazyLoadPage() {
  return (
    <>
      <div style={{ height: "1500px" }}></div>
      <LazyLoad height={200}>
        <img
          src={"/images/pizza.jpg"}
          style={{ padding: "20px", width: "500px", height: "1000px" }}
        />
      </LazyLoad>
      <div style={{ height: "1500px" }}></div>
      <LazyLoad height={200}>
        <img
          src={"/images/delete.png"}
          style={{ padding: "20px", width: "500px", height: "1000px" }}
        />
      </LazyLoad>

      {/* <LazyLoad height={200}>
        <img
          src={"/images/pizza.jpg"}
          style={{ padding: "20px", width: "500px", height: "500px" }}
        />
      </LazyLoad> */}
    </>
  );
}

// width: "500px", height: "500px",
