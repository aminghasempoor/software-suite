# -------------------
# Build runner
# -------------------

FROM docker.arvancloud.ir/node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.8.0

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build


# -------------------
# Production runner
# -------------------
FROM docker.arvancloud.ir/node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
RUN npm install -g pnpm@10.8.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "start"]
