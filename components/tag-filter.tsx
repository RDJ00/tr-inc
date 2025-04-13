"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface TagFilterProps {
  tags: string[]
  onFilterChange: (selectedTags: string[]) => void
}

export function TagFilter({ tags, onFilterChange }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]

    setSelectedTags(newSelectedTags)
    onFilterChange(newSelectedTags)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedTags.length === 0 ? "default" : "outline"}
        className={selectedTags.length === 0 ? "bg-[#0A1E39] text-white" : ""}
        onClick={() => {
          setSelectedTags([])
          onFilterChange([])
        }}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTags.includes(tag) ? "default" : "outline"}
          className={selectedTags.includes(tag) ? "bg-[#C79C4A] text-white" : ""}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}
