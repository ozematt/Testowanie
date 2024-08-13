import { rest } from "msw";

export const handlers = [
  rest.get("https://www.example.com/api/products/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (id === "1") {
      return res(
        ctx.status(200),
        ctx.json({
          name: "iPhone 15 Pro Max",
          price: 1949,
          quantity: 102,
          rating: 10,
        })
      );
    } else {
      return res(ctx.status(404), ctx.json({ message: "Product not found" }));
    }
  }),
];
