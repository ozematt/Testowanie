import { http, HttpResponse } from "msw";

export const dataHandlers = [
  http.get("https://example.com/data", () => {
    return HttpResponse.json({ data: "Testing some data send" });
  }),
];
