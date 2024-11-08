FROM node:alpine
RUN mkdir /nextapp
COPY .next /nextapp/.next
COPY public /nextapp/public
COPY package.json /nextapp/package.json
WORKDIR /nextapp
RUN npm i
CMD npx next start

# npm run build && docker build -t manhavn/nextjs-tailwind:v12.0.7 . && docker push manhavn/nextjs-tailwind:v12.0.7
# docker run --rm --name nextjs-tailwind-test -dp 3000:3000 -v /var/tmp/nextjs-tailwind/public:/nextapp/public -t manhavn/next-tailwind:v12.0.7
# xdg-open http://localhost:3000
# docker stop nextjs-tailwind-test
