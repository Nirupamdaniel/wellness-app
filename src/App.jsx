import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, BookOpen, Target, Calendar, Settings } from 'lucide-react'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [userProgress, setUserProgress] = useState(35)

  const navigationItems = [
    { id: 'dashboard', label: 'Home', icon: Heart },
    { id: 'journey', label: 'Journey', icon: Target },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'connect', label: 'Connect', icon: Users },
    { id: 'track', label: 'Track', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const dailyInsights = [
    {
      title: "Today's Focus",
      content: "Practice mindful breathing together for 10 minutes",
      type: "mindfulness"
    },
    {
      title: "Communication Tip",
      content: "Share one thing you appreciate about your partner today",
      type: "relationship"
    },
    {
      title: "Health Reminder",
      content: "Stay hydrated and maintain a balanced diet",
      type: "health"
    }
  ]

  const journeyMilestones = [
    { title: "Initial Assessment", completed: true },
    { title: "Stress Management Plan", completed: true },
    { title: "Communication Exercises", completed: false, current: true },
    { title: "Intimacy Building", completed: false },
    { title: "Medical Consultation Prep", completed: false }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Your Wellness Journey</h1>
        <p className="text-muted-foreground text-lg">Supporting you and your partner every step of the way</p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Your Journey Progress
          </CardTitle>
          <CardDescription>You're making great progress on your path to wellness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{userProgress}%</span>
            </div>
            <Progress value={userProgress} className="h-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Days on Journey</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary">8</div>
                <div className="text-sm text-muted-foreground">Activities Completed</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Milestones Reached</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dailyInsights.map((insight, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{insight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{insight.content}</p>
              <Badge variant="secondary" className="text-xs">
                {insight.type}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Continue your wellness journey with these recommended activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline">
              <div className="font-semibold mb-1">Daily Check-in</div>
              <div className="text-sm text-muted-foreground">Share how you're feeling today</div>
            </Button>
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline">
              <div className="font-semibold mb-1">Partner Activity</div>
              <div className="text-sm text-muted-foreground">Complete today's connection exercise</div>
            </Button>
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline">
              <div className="font-semibold mb-1">Educational Content</div>
              <div className="text-sm text-muted-foreground">Learn about stress and fertility</div>
            </Button>
            <Button className="h-auto p-4 flex flex-col items-start" variant="outline">
              <div className="font-semibold mb-1">Mindfulness Session</div>
              <div className="text-sm text-muted-foreground">5-minute guided meditation</div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderJourney = () => (
    <div className="space-y-6">
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Personalized Journey</h2>
        <p className="text-muted-foreground">Track your progress through each milestone</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Journey Milestones</CardTitle>
          <CardDescription>Complete each step at your own pace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.completed ? 'bg-primary text-primary-foreground' :
                  milestone.current ? 'bg-accent text-accent-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {milestone.completed ? '✓' : index + 1}
                </div>
                <div className="flex-1">
                  <div className={`font-medium ${milestone.current ? 'text-accent' : ''}`}>
                    {milestone.title}
                  </div>
                  {milestone.current && (
                    <div className="text-sm text-muted-foreground">Current focus</div>
                  )}
                </div>
                {milestone.current && (
                  <Button size="sm">Continue</Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return renderDashboard()
      case 'journey':
        return renderJourney()
      case 'learn':
        return (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Educational Resources</h2>
            <p className="text-muted-foreground">Coming soon - Comprehensive learning materials</p>
          </div>
        )
      case 'connect':
        return (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Partner Connection</h2>
            <p className="text-muted-foreground">Coming soon - Activities to strengthen your bond</p>
          </div>
        )
      case 'track':
        return (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Progress Tracking</h2>
            <p className="text-muted-foreground">Coming soon - Optional tracking features</p>
          </div>
        )
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Settings</h2>
            <p className="text-muted-foreground">Coming soon - Personalization options</p>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold text-foreground">Wellness Journey</span>
            </div>
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentView(item.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}

export default App

