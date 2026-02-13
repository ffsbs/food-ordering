import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 300,
    },
    prices: {
      type: [Number],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    extraOptions: {
      type: [
        {
          Text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models.Product && typeof mongoose.models.Product.find === "function"  
    ? mongoose.models.Product
    : mongoose.model("Product", ProductSchema);

export default ProductModel;


// ProductModel = mongoose.models.Product     ==>>  Mongoose'un kendi hafızasında (cache) zaten "Product" adında bir model tanımlı mı diye bakar.
//  && typeof mongoose.models.Product.find === "function"  ==>> Eğer "Product" adında bir model varsa, bu modelin "find" adlı bir fonksiyona sahip olup olmadığını kontrol eder. Bu, modelin gerçekten bir Mongoose modeli olup olmadığını doğrulamak içindir.
// ? mongoose.models.Product : mongoose.model("Product", ProductSchema)  ==>> Eğer "Product" adında bir model zaten tanımlanmışsa, bu modeli kullanır. Eğer tanımlanmamışsa, yeni bir model oluşturur ve "Product" adını verir. Bu sayede, aynı modelin birden fazla kez tanımlanmasının önüne geçilir ve uygulamanın performansı artırılır.