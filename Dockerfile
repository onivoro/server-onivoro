FROM node:14-alpine3.12
USER node
WORKDIR /home/node
COPY --chown=node:node . /home/node
ENV NODE_ENV=production
RUN npm ci
RUN npm build
CMD ["node", "dist/main.js"]