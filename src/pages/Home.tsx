import About from "@/pages/About"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Leaf } from "lucide-react"
import { useState } from "react"
import '@/App.css'

const Home = () => {
  const [showAbout, setShowAbout] = useState(false)

  const handleDiscoverClick = () => {
    setShowAbout(true)
    setTimeout(() => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 500) // Délai légèrement augmenté pour laisser l'animation se déclencher
  }

  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="w-full px-6">
        <div className="text-center space-y-12 py-5 max-w-6xl mx-auto">
          {/* En-tête principal */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-special-1 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Consortium Ikolo-Vina
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-special-1 mb-2 leading-tight">
              🌺 Bienvenue
            </h1>
            
            <div className="w-24 h-1 bg-special-2 mx-auto mb-8"></div>
          </div>

          {/* Contenu principal */}
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Cette plateforme du <strong className="font-semibold text-special-1">Consortium Ikolo-Vina</strong>, un regroupement dynamique de professionnels engagés pour l'innovation et le développement durable à Madagascar.
            </p>
            
            <div className="py-2">
              <div className="flex items-center justify-center gap-3">
                <Leaf className="w-6 h-6 text-special-2" />
                <p className="text-2xl font-semibold text-special-2 italic leading-relaxed">
                  🌱 Ensemble, nous faisons pousser les idées qui changent la vie.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                onClick={handleDiscoverClick}
                size="lg"
                className="bg-special-1 text-white text-lg font-semibold rounded-lg hover:bg-special-2 transition-all duration-300 px-12 py-6 animate-pulse hover:animate-none"
              >
                <Users className="w-5 h-5 mr-3" />
                Découvrir nos membres et nos initiatives
              </Button>
            </div>
          </div>
        </div>
        
        {/* Section About intégrée */}
        <div className="w-full">
          {showAbout && <About />}
        </div>
      </div>
    </section>
  )
}

export default Home