import { ProductController } from "@/controllers/product-controllers";
import { Router } from "express";

const productRoutes = Router();
const productController = new ProductController();
productRoutes.get("/products", productController.index);
productRoutes.post("/products", productController.create);

export { productRoutes };
