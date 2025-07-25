"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, Search, Flame, Star, Users, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface DiscoverScreenProps {
  onRecipeClick: () => void
}

export function DiscoverScreen({ onRecipeClick }: DiscoverScreenProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = [
    "All",
    "Top Chefs",
    "Indian",
    "Italian",
    "Japanese",
    "Chinese",
    "Mexican",
    "French",
    "Greek",
    "Dessert",
  ]

  const topChefs = [
    {
      id: 1,
      name: "Gordon Ramsay",
      handle: "@gordonramsay",
      followers: "2.1M",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "British Cuisine",
      verified: true,
      recipes: 156,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Massimo Bottura",
      handle: "@massimo_chef",
      followers: "890K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Italian Fine Dining",
      verified: true,
      recipes: 89,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dominique Ansel",
      handle: "@dominiqueansel",
      followers: "654K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "French Pastry",
      verified: true,
      recipes: 124,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Yotam Ottolenghi",
      handle: "@ottolenghi",
      followers: "743K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Middle Eastern",
      verified: true,
      recipes: 203,
      rating: 4.7,
    },
  ]

  const recipes = [
    {
      id: 1,
      title: "Chocolate Avocado Mousse",
      author: "Sarah Chen",
      image: "/placeholder.svg?height=200&width=200",
      time: "20m",
      difficulty: "Very Easy",
      cuisine: "Dessert",
      likes: 234,
      rating: 4.6,
    },
    {
      id: 2,
      title: "Pasta al Limone with Garlic Shrimp",
      author: "Marco Rossi",
      image: "/placeholder.svg?height=200&width=200",
      time: "30m",
      difficulty: "Easy",
      cuisine: "Italian",
      likes: 189,
      rating: 4.8,
    },
    {
      id: 3,
      title: "Spicy Szechuan Mapo Tofu",
      author: "Li Wei",
      image: "/placeholder.svg?height=200&width=200",
      time: "25m",
      difficulty: "Medium",
      cuisine: "Chinese",
      likes: 156,
      rating: 4.5,
    },
    {
      id: 4,
      title: "Mediterranean Chicken Souvlaki",
      author: "Elena Papadopoulos",
      image: "/placeholder.svg?height=200&width=200",
      time: "35m",
      difficulty: "Medium",
      cuisine: "Greek",
      likes: 198,
      rating: 4.7,
    },
    {
      id: 5,
      title: "Authentic Chicken Tikka Masala",
      author: "Priya Sharma",
      image: "/placeholder.svg?height=200&width=200",
      time: "45m",
      difficulty: "Hard",
      cuisine: "Indian",
      likes: 342,
      rating: 4.9,
    },
    {
      id: 6,
      title: "French Coq au Vin",
      author: "Pierre Dubois",
      image: "/placeholder.svg?height=200&width=200",
      time: "90m",
      difficulty: "Hard",
      cuisine: "French",
      likes: 167,
      rating: 4.8,
    },
  ]

  const filteredContent =
    activeFilter === "Top Chefs"
      ? topChefs
      : activeFilter === "All"
        ? recipes
        : recipes.filter((recipe) => recipe.cuisine === activeFilter)

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-5 pt-4">
          <h1 className="text-3xl font-bold text-white">Discover New Recipes</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search recipes, chefs, cuisines..."
              className="pl-12 h-12 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Filter Chips */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 pb-2" style={{ width: "max-content" }}>
              {filters.map((filter) => (
                <Badge
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`cursor-pointer whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 bg-gray-800/50 backdrop-blur-sm"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "Top Chefs" && <Star className="h-3 w-3 mr-1" />}
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {activeFilter === "Top Chefs" ? (
          <div className="space-y-4">
            {topChefs.map((chef) => (
              <Card
                key={chef.id}
                className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300"
              >
                <CardContent className="p-5">
                  <div className="flex space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-gray-600">
                        <AvatarFallback className="bg-gray-600 text-lg font-semibold">{chef.name[0]}</AvatarFallback>
                      </Avatar>
                      {chef.verified && (
                        <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                          <Star className="h-3 w-3 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-bold text-white text-lg">{chef.name}</h3>
                        <p className="text-emerald-400 text-sm font-medium">{chef.handle}</p>
                        <p className="text-gray-400 text-sm">{chef.specialty}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{chef.followers}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{chef.recipes} recipes</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span>{chef.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredContent.map((recipe) => (
              <Card
                key={recipe.id}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={onRecipeClick}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      width={200}
                      height={150}
                      className="w-full h-36 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge
                      className={`absolute top-3 right-3 text-xs font-semibold ${
                        recipe.difficulty === "Very Easy"
                          ? "bg-green-500 hover:bg-green-600"
                          : recipe.difficulty === "Easy"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : recipe.difficulty === "Medium"
                              ? "bg-orange-500 hover:bg-orange-600"
                              : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {recipe.difficulty}
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-white text-xs">
                        <Heart className="h-3 w-3 fill-current text-red-400" />
                        <span className="font-medium">{recipe.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white text-xs">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{recipe.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2">{recipe.title}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Avatar className="h-4 w-4">
                        <AvatarFallback className="bg-gray-600 text-xs">
                          {recipe.author[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span>{recipe.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{recipe.time}</span>
                      </div>
                      {recipe.difficulty === "Medium" || recipe.difficulty === "Hard" ? (
                        <div className="flex space-x-1">
                          <Flame className="h-3 w-3 text-orange-500" />
                          <Flame className="h-3 w-3 text-orange-500" />
                          {recipe.difficulty === "Hard" && <Flame className="h-3 w-3 text-red-500" />}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
