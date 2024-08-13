import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://www.example.com/api/products/:id", ({ params }) => {
    const { id } = params;
    if (id === "1") {
      return HttpResponse.json({
        name: "iPhone 15 Pro Max",
        price: 1949,
        quantity: 102,
        rating: 10,
      });
    } else {
      return HttpResponse.json({ message: "Product not found" });
    }
  }),
];
