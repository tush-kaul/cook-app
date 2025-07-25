"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function PostSnapScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [steps, setSteps] = useState("")
  const [ingredients, setIngredients] = useState("")

  const handleImageUpload = () => {
    // Simulate image upload
    setSelectedImage("/placeholder.svg?height=200&width=300")
  }

  const importFromAI = () => {
    // Simulate AI import
    setSteps(
      "1. Heat oil in a pan\n2. Add spices and cook for 1 minute\n3. Add main ingredients\n4. Cook until done\n5. Serve hot",
    )
    setIngredients(
      "2 tbsp oil\n1 tsp cumin seeds\n1 onion, chopped\n2 tomatoes, diced\nSalt to taste\nFresh herbs for garnish",
    )
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Post a Snap</h1>
      </div>

      {/* Image Upload */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          {!selectedImage ? (
            <div
              className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-gray-500 transition-colors"
              onClick={handleImageUpload}
            >
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Upload a photo</h3>
              <p className="text-gray-400">Tap here to select an image</p>
            </div>
          ) : (
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Recipe photo"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                Change
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recipe Details */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4 space-y-4">
          <h3 className="text-lg font-medium text-white">Recipe Details</h3>
          <Input
            placeholder="Recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </CardContent>
      </Card>

      {/* Recipe Steps */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Recipe Steps</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={importFromAI}
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white bg-transparent"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Import Steps & Ingredients from AI
            </Button>
          </div>
          <Textarea
            placeholder="Steps will appear here after generation..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={6}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </CardContent>
      </Card>

      {/* Ingredients */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4 space-y-4">
          <h3 className="text-lg font-medium text-white">Ingredients:</h3>
          <Textarea
            placeholder="Ingredients will appear here after generation..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </CardContent>
      </Card>

      {/* Snap It Button */}
      <Button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 text-lg"
        disabled={!selectedImage || !title}
      >
        📸 SNAP IT!
      </Button>
    </div>
  )
}
