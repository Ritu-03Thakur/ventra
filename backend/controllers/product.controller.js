import { Product } from "./../models/product.model.js";
import productData from "../data.js";

// Upload all the product from the local folder to mongodb at once time only
const uploadProduct = async (req, res) => {
  try {
    const product = await Product.insertMany(productData);
    res.status(200).json({
      success: true,
      message: "Product uploaded successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error uploading product",
      error: error.message,
    });
  }
};



// AllProduct (for HomePage)
const allProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({
      success: true,
      message: "Product List",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error While Fetching All Products",
      error: error.message,
    });
  }
};

export { uploadProduct, allProduct };
