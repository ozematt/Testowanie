import { HttpResponse, http } from "msw";

export const dataHandlers = [
  http.get("https://www.example.com/api/products/:id", ({ params }) => {
    const { id } = params;
    if (id === "1") {
      return HttpResponse.json({
        name: "Tv",
        price: 120,
        quantity: 5,
        rating: 9,
      });
    } else {
      return HttpResponse.json({ message: "Product not found" });
    }
  }),
];
