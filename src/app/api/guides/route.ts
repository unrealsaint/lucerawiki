import { NextResponse } from 'next/server'
import { GUIDES } from '@/data/guides'

export async function GET() {
  try {
    console.log('API: Received request for guides')
    
    if (!GUIDES || !Array.isArray(GUIDES)) {
      console.error('API: GUIDES is not properly defined')
      return NextResponse.json(
        { error: 'Guides data is not properly configured' },
        { status: 500 }
      )
    }

    console.log(`API: Found ${GUIDES.length} guides`)
    
    // Add some basic metadata to each guide
    const guidesWithMetadata = GUIDES.map(guide => ({
      ...guide,
      views: Math.floor(Math.random() * 1000),
      comments: [],
      ratings: [],
      averageRating: 0
    }))

    return NextResponse.json(guidesWithMetadata)
  } catch (error) {
    console.error('API: Error fetching guides:', error)
    return NextResponse.json(
      { error: 'Failed to fetch guides' },
      { status: 500 }
    )
  }
} 