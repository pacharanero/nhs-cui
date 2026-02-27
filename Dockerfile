FROM node:22-bookworm-slim

WORKDIR /app

# Keep npm cache in container layer path for faster repeated installs.
ENV npm_config_cache=/tmp/.npm

EXPOSE 4321

CMD ["bash", "-lc", "npm install && npm run dev -- --host 0.0.0.0 --port 4321"]
