"use client"

import { Button } from "@/components/ui/button"
import { Home, Search, ChefHat, Camera, User } from "lucide-react"

interface BottomNavigationProps {
  activeScreen: string
  onScreenChange: (screen: string) => void
}

export function BottomNavigation({ activeScreen, onScreenChange }: BottomNavigationProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "discover", icon: Search, label: "Discover" },
    { id: "cooking", icon: ChefHat, label: "Cook" },
    { id: "post", icon: Camera, label: "Post" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray-800 border-t border-gray-700">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeScreen === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 px-3 py-2 ${
                isActive ? "text-emerald-400" : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => onScreenChange(item.id)}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-emerald-400" : ""}`} />
              <span className="text-xs">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
