import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  if (method === "POST") {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  
};

export default handler;



// req (Request): Gelen isteği temsil eder. Kullanıcının hangi verileri gönderdiği, tarayıcı bilgisi gibi detaylar buradadır.
// res (Response): Sunucunun isteğe verdiği yanıtı temsil eder. Sunucudan kullanıcıya döndürülecek veriler veya durum kodları burada ayarlanır.