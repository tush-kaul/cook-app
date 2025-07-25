"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Flame, Heart, Star } from "lucide-react"
import Image from "next/image"

interface HomeScreenProps {
  onRecipeClick: () => void
}

export function HomeScreen({ onRecipeClick }: HomeScreenProps) {
  const recommendedRecipes = [
    {
      id: 1,
      title: "Chocolate Avocado Mousse",
      image: "/placeholder.svg?height=160&width=200",
      time: "20m",
      difficulty: "Very Easy",
      tag: "Trending",
      author: "Sarah Chen",
      likes: 234,
    },
    {
      id: 2,
      title: "Pasta al Limone with Garlic Shrimp",
      image: "/placeholder.svg?height=160&width=200",
      time: "30m",
      difficulty: "Easy",
      tag: "Popular",
      author: "Marco Rossi",
      likes: 189,
    },
    {
      id: 3,
      title: "Korean Spicy Tofu Bowl",
      image: "/placeholder.svg?height=160&width=200",
      time: "25m",
      difficulty: "Easy",
      tag: "Healthy",
      author: "Kim Min-jun",
      likes: 156,
    },
    {
      id: 4,
      title: "Mediterranean Quinoa Salad",
      image: "/placeholder.svg?height=160&width=200",
      time: "15m",
      difficulty: "Very Easy",
      tag: "Quick",
      author: "Elena Papadopoulos",
      likes: 98,
    },
  ]

  const featuredChefs = [
    {
      id: 1,
      name: "Chef Marcus",
      handle: "@chef_marcus",
      followers: "12.5K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Italian Cuisine",
      verified: true,
    },
    {
      id: 2,
      name: "Aria Kim",
      handle: "@aria_kitchen",
      followers: "8.9K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Korean Fusion",
      verified: true,
    },
    {
      id: 3,
      name: "Diego Santos",
      handle: "@diego_cooks",
      followers: "6.2K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Mexican",
      verified: false,
    },
    {
      id: 4,
      name: "Priya Sharma",
      handle: "@priya_spices",
      followers: "9.1K",
      avatar: "/placeholder.svg?height=80&width=80",
      specialty: "Indian Spices",
      verified: true,
    },
  ]

  const todaysPicks = [
    {
      id: 1,
      title: "Spicy Chicken Tikka Masala",
      author: "Priya Sharma",
      image: "/placeholder.svg?height=100&width=100",
      likes: 342,
      time: "35 MIN",
      spice: "Hot",
      difficulty: "Medium",
      calories: 450,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Truffle Mushroom Risotto",
      author: "Chef Marcus",
      image: "/placeholder.svg?height=100&width=100",
      likes: 278,
      time: "40 MIN",
      spice: "Mild",
      difficulty: "Hard",
      calories: 380,
      rating: 4.9,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Hi John! 👋</h1>
            <p className="text-gray-400 text-base">Discover amazing recipes from chefs near you</p>
          </div>
          <Avatar className="h-12 w-12 ring-3 ring-emerald-500 ring-offset-2 ring-offset-gray-900">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback className="bg-emerald-600 text-white font-semibold">J</AvatarFallback>
          </Avatar>
        </div>

        {/* Recommended Recipes */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Recommended for You</h2>
            <span className="text-emerald-400 text-sm font-medium">See all</span>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 pb-4" style={{ width: "max-content" }}>
              {recommendedRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="flex-shrink-0 w-48 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={onRecipeClick}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        width={200}
                        height={160}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge
                        className={`absolute top-3 right-3 text-xs font-semibold ${
                          recipe.tag === "Trending"
                            ? "bg-red-500 hover:bg-red-600"
                            : recipe.tag === "Popular"
                              ? "bg-orange-500 hover:bg-orange-600"
                              : recipe.tag === "Healthy"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        {recipe.tag}
                      </Badge>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center space-x-2 text-white text-xs">
                          <Heart className="h-3 w-3 fill-current text-red-400" />
                          <span className="font-medium">{recipe.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2">{recipe.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{recipe.time}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs border-emerald-500 text-emerald-400 bg-emerald-500/10"
                        >
                          {recipe.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="bg-gray-600 text-xs">{recipe.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-gray-400">{recipe.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Chefs */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Featured Chefs</h2>
            <span className="text-emerald-400 text-sm font-medium">View all</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featuredChefs.map((chef) => (
              <Card
                key={chef.id}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-5 text-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16 mx-auto ring-2 ring-gray-600">
                      <AvatarImage src={chef.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gray-600 text-lg font-semibold">{chef.name[0]}</AvatarFallback>
                    </Avatar>
                    {chef.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                        <Star className="h-3 w-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{chef.name}</h3>
                    <p className="text-emerald-400 text-xs font-medium">{chef.handle}</p>
                    <p className="text-gray-400 text-xs mt-1">{chef.specialty}</p>
                    <p className="text-gray-500 text-xs mt-1">{chef.followers} followers</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Picks */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Today's Picks</h2>
            <span className="text-emerald-400 text-sm font-medium">More picks</span>
          </div>
          <div className="space-y-4">
            {todaysPicks.map((pick) => (
              <Card
                key={pick.id}
                className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300"
                onClick={onRecipeClick}
              >
                <CardContent className="p-5">
                  <div className="flex space-x-4">
                    <div className="relative">
                      <Image
                        src={pick.image || "/placeholder.svg"}
                        alt={pick.title}
                        width={100}
                        height={100}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-bold text-white text-lg leading-tight">{pick.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="bg-gray-600 text-xs">{pick.author[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-400">{pick.author}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-400">{pick.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap gap-3 text-xs">
                        <div className="flex items-center space-x-1 text-red-400">
                          <Heart className="h-3 w-3 fill-current" />
                          <span className="font-medium">{pick.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="h-3 w-3" />
                          <span>{pick.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Flame className="h-3 w-3 text-red-500" />
                          <span className="text-gray-400">{pick.spice}</span>
                        </div>
                        <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-400 bg-yellow-500/10">
                          {pick.difficulty}
                        </Badge>
                        <span className="text-gray-400">{pick.calories} cal</span>
                      </div>
                    </div>
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
