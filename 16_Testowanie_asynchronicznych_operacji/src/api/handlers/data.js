import { http, HttpResponse } from "msw";

export const dataHandlers = [
  http.get("https://www.example.com/data", () => {
    return HttpResponse.json({
      data: { id: 1, name: "TV", price: 120, quantity: 5, rating: "9" },
    });
  }),
];
