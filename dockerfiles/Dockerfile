FROM node:9.11

RUN apt-get update && apt-get install -y \
  apt-transport-https \
  ca-certificates \
  curl \
    gnupg \
  bash \
  --no-install-recommends \
  && curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update && apt-get install -y \
  google-chrome-stable \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*
