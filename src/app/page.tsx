import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Search from '@/components/search'
import FeaturedGuides from '@/components/FeaturedGuides'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">Lucera 2 Knowledge Base</h1>
        <FeaturedGuides />
      </div>
    </div>
  )
} 