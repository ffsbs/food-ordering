import Product from "../../../models/Product";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  
};

export default handler;



