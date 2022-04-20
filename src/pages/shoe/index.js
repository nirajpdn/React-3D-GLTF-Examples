import React from "react";
import CanvasLayout from "../../components/CanvasLayout";
import ShoeModel from "../../components/Model/Shoes";

const ShoeRenderPage = () => {
  return (
    <CanvasLayout>
      <ShoeModel
        customColors={{
          mesh: "brown",
          stripes: "blue",
          laces: "green",
          caps: "blue",
          inner: "#888888",
          sole: "#333333",
          band: "yellow",
        }}
      />
    </CanvasLayout>
  );
};

export default ShoeRenderPage;
