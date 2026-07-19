import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET() {
  const count = (await redis.get<number>("click-count")) ?? 0;
  return NextResponse.json({ count });
}

export async function POST() {
  const count = await redis.incr("click-count");
  return NextResponse.json({ count });
}