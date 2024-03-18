import React from "react";
const Header = React.lazy(() => import("MicroFrontend/Header"));

export default function App() {
  return (
    <div>
      Shell Application
      <Header title="Hey there" />
    </div>
  );
}
