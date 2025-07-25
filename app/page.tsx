"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/home-screen"
import { DiscoverScreen } from "@/components/discover-screen"
import { GetCookingScreen } from "@/components/get-cooking-screen"
import { PostSnapScreen } from "@/components/post-snap-screen"
import { RecipeDetailScreen } from "@/components/recipe-detail-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function CookingApp() {
  const [activeScreen, setActiveScreen] = useState("home")

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen onRecipeClick={() => setActiveScreen("recipe")} />
      case "discover":
        return <DiscoverScreen onRecipeClick={() => setActiveScreen("recipe")} />
      case "cooking":
        return <GetCookingScreen />
      case "post":
        return <PostSnapScreen />
      case "recipe":
        return <RecipeDetailScreen onBack={() => setActiveScreen("home")} />
      case "profile":
        return <ProfileScreen />
      default:
        return <HomeScreen onRecipeClick={() => setActiveScreen("recipe")} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-md mx-auto bg-gray-900 min-h-screen relative">
        <main className="pb-20">{renderScreen()}</main>
        <BottomNavigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      </div>
    </div>
  )
}
