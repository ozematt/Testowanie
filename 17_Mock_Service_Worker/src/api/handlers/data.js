// handlers.js
import { http, HttpResponse } from "msw";

export const dataHandlers = [
  http.get("https://www.example.com/api/users/:id", ({ params }) => {
    const { id } = params;

    if (id === "1") {
      return HttpResponse.json({
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@example.com",
      });
    }

    return HttpResponse.error();
  }),

  http.put("https://www.example.com/api/users", async ({ request }) => {
    return HttpResponse.json(await request.json(), { status: 201 });
  }),
];
