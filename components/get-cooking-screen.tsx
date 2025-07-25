"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Mic, Plus, X, ChefHat } from "lucide-react"
import { useState } from "react"

export function GetCookingScreen() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState("")
  const [prepTime, setPrepTime] = useState("30")
  const [selectedCuisine, setSelectedCuisine] = useState("Any")
  const [isListening, setIsListening] = useState(false)

  const cuisines = ["Any", "Italian", "Indian", "Chinese", "Mexican", "Japanese", "French", "Thai", "Greek", "Korean"]

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()])
      setNewIngredient("")
    }
  }

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setTimeout(() => {
        setIngredients(["bread", "garlic paste", "2 tomatoes", "cheese slice"])
        setIsListening(false)
      }, 2000)
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center space-x-2 mb-2">
            <ChefHat className="h-8 w-8 text-emerald-500" />
            <h1 className="text-3xl font-bold text-white">Get Cooking</h1>
          </div>
          <p className="text-gray-400">Tell us what you have and we'll create magic ✨</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ingredients" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 backdrop-blur-sm h-12">
            <TabsTrigger
              value="ingredients"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white font-semibold"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white font-semibold"
            >
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="space-y-8 mt-8">
            {/* Voice Input Section */}
            <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50">
              <CardContent className="p-8 text-center space-y-6">
                <Button
                  variant="ghost"
                  size="lg"
                  className={`rounded-full h-20 w-20 transition-all duration-300 ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 scale-110 shadow-lg shadow-red-500/25"
                      : "bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg shadow-emerald-500/25"
                  }`}
                  onClick={handleVoiceInput}
                >
                  <Mic className={`h-10 w-10 ${isListening ? "text-white animate-pulse" : "text-white"}`} />
                </Button>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{isListening ? "Listening..." : "Say all you got!"}</h3>
                  <div className="bg-gray-700/50 rounded-lg p-4 max-w-sm mx-auto">
                    <p className="text-sm text-gray-300 italic">
                      "I have bread, garlic paste, 2 tomatoes and a cheese slice"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full text-sm">OR</span>
            </div>

            {/* Manual Entry */}
            <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-white text-center">Enter Manually</h3>
                <div className="flex space-x-3">
                  <Input
                    placeholder="Add ingredient (e.g., chicken breast, tomatoes...)"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addIngredient()}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                  <Button
                    onClick={addIngredient}
                    className="bg-emerald-500 hover:bg-emerald-600 h-12 px-6 rounded-xl shadow-lg"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients List */}
            {ingredients.length > 0 && (
              <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-white mb-4 text-lg">Your Ingredients ({ingredients.length})</h4>
                  <div className="grid gap-3">
                    {ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-700/50 rounded-xl p-4 hover:bg-gray-600/50 transition-colors"
                      >
                        <span className="text-white font-medium">{ingredient}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeIngredient(index)}
                          className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {ingredients.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">🥘</div>
                <p className="text-gray-400">No ingredients added yet. Start by adding some!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="preferences" className="space-y-8 mt-8">
            {/* Prep Time */}
            <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-white text-center">How much time do you have?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["15", "30", "45", "60", "90", "120"].map((time) => (
                    <Button
                      key={time}
                      variant={prepTime === time ? "default" : "outline"}
                      className={`h-12 rounded-xl font-semibold transition-all duration-200 ${
                        prepTime === time
                          ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                          : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 bg-gray-800/50"
                      }`}
                      onClick={() => setPrepTime(time)}
                    >
                      {time} min
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cuisine Preference */}
            <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-gray-700/50">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-white text-center">What cuisine are you craving?</h3>
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-3 pb-2" style={{ width: "max-content" }}>
                    {cuisines.map((cuisine) => (
                      <Badge
                        key={cuisine}
                        variant={selectedCuisine === cuisine ? "default" : "outline"}
                        className={`cursor-pointer whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          selectedCuisine === cuisine
                            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                            : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 bg-gray-800/50"
                        }`}
                        onClick={() => setSelectedCuisine(cuisine)}
                      >
                        {cuisine}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 backdrop-blur-sm border-emerald-700/50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white text-center">Your Preferences</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm">Prep Time</p>
                    <p className="text-emerald-400 font-semibold">{prepTime} minutes</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Cuisine</p>
                    <p className="text-emerald-400 font-semibold">{selectedCuisine}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Let's Cook Button */}
        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          disabled={ingredients.length === 0}
        >
          🔥 LET'S COOK!
        </Button>
      </div>
    </div>
  )
}
