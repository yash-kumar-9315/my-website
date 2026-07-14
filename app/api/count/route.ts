import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

export async function GET() {
  const count = await redis.get('clicks') || 0
  return Response.json({ count })
}

export async function POST() {
  const count = await redis.incr('clicks')
  return Response.json({ count })
}