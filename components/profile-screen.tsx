import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Heart, Settings } from "lucide-react"
import Image from "next/image"

export function ProfileScreen() {
  const userRecipes = [
    {
      id: 1,
      title: "Chocolate Avocado Mousse",
      image: "/placeholder.svg?height=120&width=120",
      likes: 24,
      time: "20m",
    },
    {
      id: 2,
      title: "Spicy Avocado Toast",
      image: "/placeholder.svg?height=120&width=120",
      likes: 18,
      time: "15m",
    },
  ]

  const likedRecipes = [
    {
      id: 1,
      title: "Pasta al Limone",
      author: "Manpreet Sahney",
      image: "/placeholder.svg?height=120&width=120",
      likes: 42,
      time: "30m",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      author: "Jenna Cook",
      image: "/placeholder.svg?height=120&width=120",
      likes: 67,
      time: "35m",
    },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <Button variant="ghost" size="icon" className="text-gray-400">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Profile Info */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center space-y-4">
          <Avatar className="h-20 w-20 mx-auto ring-4 ring-emerald-500">
            <AvatarImage src="/placeholder.svg?height=80&width=80" />
            <AvatarFallback className="bg-emerald-600 text-white text-2xl">J</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-white">John Smith</h2>
            <p className="text-gray-400">@johnsmith_cooks</p>
            <p className="text-sm text-gray-400 mt-2">
              Home chef passionate about fusion cuisine and healthy cooking 🍳✨
            </p>
          </div>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-xl font-bold text-white">127</div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">89</div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">12</div>
              <div className="text-sm text-gray-400">Recipes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="recipes" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            My Recipes
          </TabsTrigger>
          <TabsTrigger value="liked" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            Liked
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recipes" className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            {userRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors"
              >
                <CardContent className="p-0">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={120}
                    height={120}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                  <div className="p-3 space-y-2">
                    <h3 className="font-medium text-white text-sm leading-tight">{recipe.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{recipe.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{recipe.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="liked" className="space-y-4 mt-6">
          <div className="space-y-4">
            {likedRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <Image
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      width={60}
                      height={60}
                      className="w-15 h-15 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-white">{recipe.title}</h3>
                      <p className="text-sm text-gray-400">by {recipe.author}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 text-red-500 fill-current" />
                          <span>{recipe.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{recipe.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
