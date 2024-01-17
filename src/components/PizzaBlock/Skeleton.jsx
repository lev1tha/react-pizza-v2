import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={260}
    height={438}
    viewBox="0 0 260 438"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="5" y="256" rx="15" ry="15" width="248" height="36" />
    <rect x="7" y="444" rx="0" ry="0" width="247" height="84" />
    <rect x="10" y="306" rx="19" ry="19" width="240" height="77" />
    <rect x="15" y="396" rx="17" ry="17" width="93" height="27" />
    <rect x="137" y="394" rx="20" ry="20" width="110" height="36" />
  </ContentLoader>
);

export default Skeleton;
