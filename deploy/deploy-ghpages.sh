#!/usr/bin/env sh
set -e
pnpm  build
cd dist
git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/st474ddr/myPortfolio.git main:gh-pages
cd -