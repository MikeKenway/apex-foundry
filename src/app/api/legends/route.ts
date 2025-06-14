import { NextResponse } from 'next/server'
import legends from '@/data/legends.json'

export async function GET() {
  // Return the legends from the JSON file
  return NextResponse.json(legends)
}
