import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method, query: {id} } = req;

  if (method === "GET") {
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: "Kategori bulunamadı" });
      }
      res.status(200).json(category);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // PUT - Kategori güncelle
  if (method === "PUT") {
    try {
      const category = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!category) {
        return res.status(404).json({ message: "Kategori bulunamadı" });
      }
      res.status(200).json(category);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // DELETE - Kategori sil
  if (method === "DELETE") {
    try {
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return res.status(404).json({ message: "Kategori bulunamadı" });
      }
      res.status(200).json({ message: "Kategori silindi" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

};

export default handler;