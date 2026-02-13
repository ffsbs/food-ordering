import { serialize } from "cookie";

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {                                       // POST = Veri Göndermek / Oluşturmak ,,,,,,,,,  // Admin girişi için POST isteği     
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,                                              // Çerezin 1 saat boyunca geçerli olmasını sağlar.
          sameSite: "strict",                                           // Çerezin sadece senin siten üzerinden gönderilmesini sağlar.
          path: "/",
        })
      );
      res.status(200).json({ message: "Success" });
    } else {
      res.status(400).json({ message: "Wrong Credentials" });
    }
  }

  if (method === "PUT") {                                   // PUT = Veri Güncellemek VEYA Değiştirmek ,,,,,,,,,  // Admin çıkışı için PUT isteği
    res.setHeader(
      "Set-Cookie",
      serialize("token", process.env.ADMIN_TOKEN, {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Success" });
  }
};

export default handler;