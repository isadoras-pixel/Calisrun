"use client"

import { useState, useEffect } from "react"
import { Activity, Dumbbell, TrendingDown, Trophy, Calendar, Heart, Flame, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const motivationalQuotes = [
  "Seu corpo pode fazer qualquer coisa. É sua mente que você precisa convencer!",
  "A dor que você sente hoje será a força que você sentirá amanhã.",
  "Não pare quando estiver cansado. Pare quando terminar!",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Você está a um treino de distância de um bom humor!"
]

const calisteniaWorkouts = {
  iniciante: [
    { name: "Flexões de Joelho", reps: "3x10", calories: 30 },
    { name: "Agachamentos", reps: "3x15", calories: 45 },
    { name: "Prancha", reps: "3x30s", calories: 25 },
    { name: "Polichinelos", reps: "3x20", calories: 40 },
  ],
  intermediario: [
    { name: "Flexões Completas", reps: "4x15", calories: 60 },
    { name: "Agachamento Búlgaro", reps: "4x12", calories: 70 },
    { name: "Prancha Lateral", reps: "3x45s", calories: 35 },
    { name: "Burpees", reps: "3x10", calories: 80 },
  ],
  avancado: [
    { name: "Flexões Diamante", reps: "5x20", calories: 90 },
    { name: "Pistol Squat", reps: "4x8", calories: 100 },
    { name: "Prancha com Elevação", reps: "4x60s", calories: 50 },
    { name: "Muscle Up", reps: "3x5", calories: 120 },
  ]
}

const runningPlans = {
  iniciante: [
    { week: "Semana 1-2", plan: "Caminhada 20min + Corrida leve 5min", calories: 150 },
    { week: "Semana 3-4", plan: "Corrida leve 15min + Caminhada 5min", calories: 200 },
    { week: "Semana 5-6", plan: "Corrida moderada 20min", calories: 250 },
  ],
  intermediario: [
    { week: "Semana 1-2", plan: "Corrida 30min ritmo constante", calories: 300 },
    { week: "Semana 3-4", plan: "Intervalado: 5x(3min rápido + 2min leve)", calories: 350 },
    { week: "Semana 5-6", plan: "Corrida 40min + Tiros finais", calories: 400 },
  ],
  avancado: [
    { week: "Semana 1-2", plan: "Corrida 50min ritmo forte", calories: 500 },
    { week: "Semana 3-4", plan: "Intervalado: 8x(4min forte + 1min recuperação)", calories: 550 },
    { week: "Semana 5-6", plan: "Long Run 60min + Subidas", calories: 600 },
  ]
}

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState("")
  const [weight, setWeight] = useState("")
  const [targetWeight, setTargetWeight] = useState("")
  const [weeklyProgress, setWeeklyProgress] = useState(65)

  useEffect(() => {
    setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-xl">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Emagrecendo em Movimento
              </h1>
            </div>
            <Button variant="outline" className="gap-2">
              <Trophy className="w-4 h-4" />
              Meu Progresso
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Motivational Quote */}
        <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-500/10 to-blue-500/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-3 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-emerald-900 dark:text-emerald-100">
                  Motivação do Dia
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  {currentQuote ? `"${currentQuote}"` : "Carregando..."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-emerald-200 dark:border-emerald-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Treinos Esta Semana</p>
                  <p className="text-3xl font-bold text-emerald-600">4/5</p>
                </div>
                <Activity className="w-12 h-12 text-emerald-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Calorias Queimadas</p>
                  <p className="text-3xl font-bold text-blue-600">2.450</p>
                </div>
                <Flame className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Meta Semanal</p>
                  <p className="text-3xl font-bold text-orange-600">{weeklyProgress}%</p>
                </div>
                <Target className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="calistenia" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger value="calistenia" className="gap-2 py-3">
              <Dumbbell className="w-4 h-4" />
              <span className="hidden sm:inline">Calistenia</span>
            </TabsTrigger>
            <TabsTrigger value="corrida" className="gap-2 py-3">
              <Activity className="w-4 h-4" />
              <span className="hidden sm:inline">Corrida</span>
            </TabsTrigger>
            <TabsTrigger value="progresso" className="gap-2 py-3">
              <TrendingDown className="w-4 h-4" />
              <span className="hidden sm:inline">Progresso</span>
            </TabsTrigger>
          </TabsList>

          {/* Calistenia Tab */}
          <TabsContent value="calistenia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-emerald-600" />
                  Treinos de Calistenia
                </CardTitle>
                <CardDescription>
                  Escolha seu nível e comece a treinar sem equipamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="iniciante" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="iniciante">Iniciante</TabsTrigger>
                    <TabsTrigger value="intermediario">Intermediário</TabsTrigger>
                    <TabsTrigger value="avancado">Avançado</TabsTrigger>
                  </TabsList>

                  {Object.entries(calisteniaWorkouts).map(([level, exercises]) => (
                    <TabsContent key={level} value={level} className="space-y-3">
                      {exercises.map((exercise, idx) => (
                        <Card key={idx} className="border-l-4 border-l-emerald-500">
                          <CardContent className="pt-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg">{exercise.name}</h4>
                                <p className="text-sm text-muted-foreground">{exercise.reps}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 text-orange-600">
                                  <Flame className="w-4 h-4" />
                                  <span className="font-semibold">{exercise.calories}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">calorias</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
                        Iniciar Treino
                      </Button>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Corrida Tab */}
          <TabsContent value="corrida" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Planos de Corrida
                </CardTitle>
                <CardDescription>
                  Programas progressivos para queimar calorias correndo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="iniciante" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="iniciante">Iniciante</TabsTrigger>
                    <TabsTrigger value="intermediario">Intermediário</TabsTrigger>
                    <TabsTrigger value="avancado">Avançado</TabsTrigger>
                  </TabsList>

                  {Object.entries(runningPlans).map(([level, weeks]) => (
                    <TabsContent key={level} value={level} className="space-y-3">
                      {weeks.map((week, idx) => (
                        <Card key={idx} className="border-l-4 border-l-blue-500">
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Calendar className="w-4 h-4 text-blue-600" />
                                  <h4 className="font-semibold">{week.week}</h4>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{week.plan}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 text-orange-600">
                                  <Flame className="w-4 h-4" />
                                  <span className="font-semibold">{week.calories}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">calorias</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                        Começar Plano
                      </Button>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progresso Tab */}
          <TabsContent value="progresso" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weight Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-emerald-600" />
                    Rastreamento de Peso
                  </CardTitle>
                  <CardDescription>
                    Acompanhe sua evolução rumo à meta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso Atual (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 75"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target">Meta de Peso (kg)</Label>
                    <Input
                      id="target"
                      type="number"
                      placeholder="Ex: 70"
                      value={targetWeight}
                      onChange={(e) => setTargetWeight(e.target.value)}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">
                    Salvar Progresso
                  </Button>
                </CardContent>
              </Card>

              {/* Weekly Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-orange-600" />
                    Progresso Semanal
                  </CardTitle>
                  <CardDescription>
                    Você está indo muito bem!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Meta de Treinos</span>
                      <span className="font-semibold">4/5 dias</span>
                    </div>
                    <Progress value={80} className="h-3" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Calorias Queimadas</span>
                      <span className="font-semibold">2.450/3.000</span>
                    </div>
                    <Progress value={82} className="h-3" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso Geral</span>
                      <span className="font-semibold">{weeklyProgress}%</span>
                    </div>
                    <Progress value={weeklyProgress} className="h-3" />
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <p className="text-sm text-center font-medium text-emerald-900 dark:text-emerald-100">
                      Continue assim! Você está no caminho certo para atingir suas metas! 🎯
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
                <CardDescription>Seu histórico de treinos desta semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Hoje", activity: "Calistenia Intermediário", duration: "35 min", calories: 280 },
                    { day: "Ontem", activity: "Corrida Intervalada", duration: "40 min", calories: 350 },
                    { day: "2 dias atrás", activity: "Calistenia Avançado", duration: "45 min", calories: 320 },
                    { day: "3 dias atrás", activity: "Corrida Leve", duration: "30 min", calories: 250 },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-full">
                          {activity.activity.includes("Corrida") ? (
                            <Activity className="w-4 h-4 text-white" />
                          ) : (
                            <Dumbbell className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{activity.activity}</p>
                          <p className="text-xs text-muted-foreground">{activity.day} • {activity.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-orange-600">
                        <Flame className="w-4 h-4" />
                        <span className="font-semibold text-sm">{activity.calories}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Emagrecendo em Movimento • Seu parceiro na jornada fitness 💪
          </p>
        </div>
      </footer>
    </div>
  )
}
