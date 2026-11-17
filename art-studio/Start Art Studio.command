#!/bin/bash
# Double-click this file in Finder to start Art Studio. Keep the window open while you paint.
cd "$(dirname "$0")"
export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
for p in /opt/homebrew/bin /usr/local/bin; do [ -x "$p/node" ] && export PATH="$p:$PATH"; done
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install it from https://nodejs.org (LTS), then double-click this file again."; read -r -p "Press Return to close." _; exit 1
fi
node art-server.js
