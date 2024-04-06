import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Skeletal() {
  return (
    <div className="skeleton ">
      <form className="form " action="">
        <br />
        <SkeletonTheme baseColor="#fff" highlightColor="#666">
          <Skeleton
            style={{ textAlign: "center", margin: "10px 0" }}
            count={1}
          />
          <Skeleton
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              margin: "10px auto",
            }}
            count={1}
          />
        </SkeletonTheme>
        <input className="lines" />
        <input className="lines" />

        <span className="eyes "></span>

        <button className="button " type="submit"></button>
        <h4 style={{ display: "flex", margin: "30px 0" }}>
          <div>
            <SkeletonTheme baseColor="#fff" highlightColor="#666">
              <Skeleton width={300} style={{ textAlign: "center" }} count={1} />
            </SkeletonTheme>
          </div>
          <span className="reg "></span>
        </h4>
      </form>
    </div>
  );
}

export default Skeletal;
