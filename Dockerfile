FROM node:8-alpine AS builder
LABEL maintainer="amantay.eldar@gmail.com"

WORKDIR /app
COPY . ./

RUN npm install --no-progress

# ---

FROM node:8-alpine

WORKDIR /app
COPY --from=builder app/lib ./lib

ENTRYPOINT ["node"]
CMD ["lib/server"]
