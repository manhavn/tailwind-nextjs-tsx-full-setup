#!/bin/bash
cd "$(dirname "$0")"

npm run build
docker build -t manhavn/nextjs-tailwind:v12.0.7 .
docker push manhavn/nextjs-tailwind:v12.0.7
docker run --rm --name nextjs-tailwind-test -dp 3000:3000 -v /var/tmp/nextjs-tailwind/static:/nextapp/.next/static -t manhavn/nextjs-tailwind:v12.0.7
xdg-open http://localhost:3000 &
# docker stop nextjs-tailwind-test
