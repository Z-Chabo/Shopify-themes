import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AddToCartButton } from "./AddToCartButton.tsx";

createRoot(document.getElementById("add-to-cart-button")!).render(
  <StrictMode>
    <AddToCartButton />
  </StrictMode>
);
