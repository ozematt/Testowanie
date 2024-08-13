import { HttpResponse, http } from "msw";

export const dataHandlers = [
  http.get("https://www.example.com/api/products/:id", ({ params }) => {
    const { id } = params;
    if (id === "1") {
      return HttpResponse.json({
        name: "TV",
        price: 120,
        quantity: 5,
        rating: 9,
      });
    }
    return HttpResponse.error();
  }),
];
