FROM ubuntu

# Install chrome

RUN apt-get update && apt-get install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  bash \
  sudo \
  --no-install-recommends \
  && curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update && apt-get install -y \
  google-chrome-stable \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Install node

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - \
  && apt-get update \
  && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*

# update npm via npm
RUN npm install -g npm

ARG HOST_UID
ARG HOST_GID

RUN useradd --uid $HOST_UID --shell /bin/bash --create-home node \
  && echo "node:node" | chpasswd && adduser node sudo

USER node
