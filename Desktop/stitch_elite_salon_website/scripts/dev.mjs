import { createServer } from "vite";

const pathValue = process.env.Path || process.env.PATH;

for (const key of Object.keys(process.env)) {
  if (key.toLowerCase() === "path") {
    delete process.env[key];
  }
}

process.env.Path = pathValue;

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const server = await createServer({
  server: {
    host: getArg("--host", "127.0.0.1"),
    port: Number(getArg("--port", "5173")),
  },
});

await server.listen();
server.printUrls();
