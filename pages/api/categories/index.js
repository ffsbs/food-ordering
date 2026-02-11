import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();                                                    // // MongoDB'ye bağlanmak için dbConnect fonksiyonunu çağırıyoruz.
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  if (method === "POST") {
    try {
      const newCategory = await Category.create(req.body);           // Veriyi kaydetmek için Category modelinin create metodunu kullanarak yeni bir kategori oluşturuyoruz. req.body, istemciden gönderilen veriyi içerir.
      res.status(200).json(newCategory);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  
};

export default handler;



// req (Request): Gelen isteği temsil eder. Kullanıcının hangi verileri gönderdiği, tarayıcı bilgisi gibi detaylar buradadır.
// res (Response): Sunucunun isteğe verdiği yanıtı temsil eder. Sunucudan kullanıcıya döndürülecek veriler veya durum kodları burada ayarlanır.