import { Hono } from 'https://deno.land/x/hono@v3.12.8/mod.ts'
import { serveStatic } from "https://deno.land/x/hono@v3.12.8/middleware.ts";

const app = new Hono()

app.use("/static/*", serveStatic({ root: './' }))
app.get('/', serveStatic({ path: './static/demo/index.html' }))
app.get('/', (c) => c.text('You can access: /static/hello.txt'))
app.get('*', serveStatic({ path: './static/fallback.txt' }))

Deno.serve(app.fetch)
