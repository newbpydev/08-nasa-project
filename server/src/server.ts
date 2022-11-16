import http from "http";

import app from "./app";
import { loadPlanetsData } from "./models/planets.model";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  // @ loads planets data before starting the server
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
