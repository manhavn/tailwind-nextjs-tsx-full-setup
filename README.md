## Getting Started

```bash
 git clone https://github.com/manhavn/tailwind-nextjs-tsx-full-setup.git
 cd tailwind-nextjs-tsx-full-setup

 # install library
 npm install
 yarn install

 # development
 npm run dev
 yarn dev

 # production
 npm build && npm start
 yarn build && yarn start
 
 # build docker image & test
 # sudo dockerd &
 ./docker-build-images.sh
 docker stop nextjs-tailwind-test
 
 # run server k8s
 ./k8s-run-server.sh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api](http://localhost:3000/api). This endpoint can be edited in `pages/api/index.tsx`
