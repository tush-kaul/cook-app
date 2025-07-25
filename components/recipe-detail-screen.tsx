"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Bookmark, Clock, Flame, Heart, Share } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface RecipeDetailScreenProps {
  onBack: () => void
}

export function RecipeDetailScreen({ onBack }: RecipeDetailScreenProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [checkedIngredients, setCheckedIngredients] = useState<boolean[]>([false, false, false, false])

  const ingredients = [
    { name: "Chicken breast", amount: "1 lb" },
    { name: "Yogurt", amount: "1/2 cup" },
    { name: "Tomato sauce", amount: "1 cup" },
    { name: "Heavy cream", amount: "1/2 cup" },
  ]

  const steps = [
    "Marinate chicken pieces in yogurt and spices for 30 minutes",
    "Grill chicken until golden brown and cooked through",
    "Prepare tomato-based curry sauce with cream and spices",
    "Add grilled chicken to the sauce and simmer for 10 minutes",
  ]

  const toggleIngredient = (index: number) => {
    const newChecked = [...checkedIngredients]
    newChecked[index] = !newChecked[index]
    setCheckedIngredients(newChecked)
  }

  return (
    <div className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-64">
        <Image
          src="/placeholder.svg?height=256&width=400"
          alt="Spicy Chicken Tikka Masala"
          width={400}
          height={256}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Back Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-black/50 text-white hover:bg-black/70"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${isLiked ? "bg-red-500 text-white" : "bg-black/50 text-white"} hover:bg-red-600`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${isBookmarked ? "bg-blue-500 text-white" : "bg-black/50 text-white"} hover:bg-blue-600`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 text-white hover:bg-black/70">
            <Share className="h-5 w-5" />
          </Button>
        </div>

        {/* Recipe Info Overlay */}
        <div className="absolute bottom-4 left-4 space-y-2">
          <h1 className="text-2xl font-bold text-white">Spicy Chicken Tikka Masala</h1>
          <p className="text-gray-200 text-sm">A creamy and flavorful Indian curry with tender chicken pieces</p>
          <div className="flex items-center space-x-4 text-sm text-gray-200">
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>42</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>35 min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="h-4 w-4 text-red-500" />
              <span>Hot</span>
            </div>
            <Badge variant="outline" className="border-yellow-500 text-yellow-400">
              Medium
            </Badge>
            <span>450 cal</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Author Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gray-600">J</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white">Jenna Cook</h3>
                  <p className="text-sm text-gray-400">@jenna_cooks</p>
                </div>
              </div>
              <Button
                variant={isFollowing ? "outline" : "default"}
                size="sm"
                className={isFollowing ? "border-emerald-500 text-emerald-400" : "bg-emerald-500 hover:bg-emerald-600"}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">4 Items</h2>
            <span className="text-sm text-emerald-400">
              {checkedIngredients.filter(Boolean).length === ingredients.length
                ? "All items ready!"
                : `${checkedIngredients.filter(Boolean).length} missing items`}
            </span>
          </div>
          <div className="grid gap-3">
            {ingredients.map((ingredient, index) => (
              <Card
                key={index}
                className={`border-2 transition-colors ${
                  checkedIngredients[index] ? "bg-emerald-900/30 border-emerald-500" : "bg-gray-800 border-gray-700"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={checkedIngredients[index]}
                      onCheckedChange={() => toggleIngredient(index)}
                      className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                    />
                    <div className="flex-1">
                      <span className={`font-medium ${checkedIngredients[index] ? "text-emerald-400" : "text-white"}`}>
                        {ingredient.name}
                      </span>
                      <p className="text-sm text-gray-400">{ingredient.amount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cooking Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Cooking Steps</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-white leading-relaxed">{step}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
