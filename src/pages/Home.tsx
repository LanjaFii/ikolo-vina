import About from "@/pages/About"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Leaf, ExternalLink } from "lucide-react"
import { useState } from "react"
import iKl from "../assets/images/ikolo1.png" //ikolo1 et vina1 sont juste pour cette partie du page
import Vna from "../assets/images/vina1.png"
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
            
            <h1 className="text-6xl md:text-5xl font-bold text-special-1 mb-2 leading-tight">
              🌺 Bienvenue sur le site officiel du
            </h1>

            <div className="inline-flex items-center gap-2 text-special-1 px-4 py-2 rounded-full text-xl font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Consortium Ikolo-Vina
            </div>
            
            <div className="w-24 h-1 bg-special-2 mx-auto mb-8"></div>
          </div>

          {/* Contenu principal */}
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Nous incarnons l'alliance stratégique entre 
                {/* Logo VINA Consulting */}
              <a 
                href="https://vina-website-orcin.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-baseline mx-2 mt-1 hover:opacity-80 transition-opacity"
              >
                <img 
                  src={Vna} 
                  alt="VINA Consulting" 
                  className="h-20 w-auto max-w-[200px] object-contain -translate-y-1"
                />
                <ExternalLink className="w-4 h-4 ml-1 text-special-1" />
              </a>
              
              et
              
              {/* Logo IKOLO */}
              <a 
                href="https://ikolo-demo.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-baseline mx-2 hover:opacity-80 transition-opacity"
              >
                <img 
                  src={iKl} 
                  alt="IKOLO Cosmetics" 
                  className="h-14 w-auto max-w-[200px] object-contain"
                />
                <ExternalLink className="w-4 h-4 ml-1 text-special-1" />
              </a>

              Une coopération de deux expertes : <br />

                <strong className="font-semibold text-special-1">Holy</strong>, spécialiste en formulation cosmétique et valorisation de la biodiversité malgache,

              <br />et<br/>

                <strong className="font-semibold text-special-1">Felana</strong>, experte en stratégie, marketing et gestion de projets.

              <br />
              <br />

              <span>Leur alliance unique allie compétences scientifiques et techniques à une vision stratégique et organisationnelle.
              Une équipe dynamique vous est dédiée, combinant exécution, communication et logistique pour une approche sur-mesure.
              Ensemble, nous garantissons des actions concrètes et immédiates pour booster votre image et votre rentabilité.
              Confiez-nous votre projet et bénéficiez d’un accompagnement professionnel à l’impact durable.
              </span>

            </p>
            
            <div className="py-2">
              <div className="flex items-center justify-center gap-3">
                <Leaf className="w-6 h-6 text-special-2" />
                <p className="text-2xl font-semibold text-special-2 italic leading-relaxed">
                  🌱"Révélez l'essence et la performance de votre centre à travers les plantes & les savoirs durables"
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                onClick={handleDiscoverClick}
                size="lg"
                className="bg-special-1 text-white text-lg font-semibold rounded-lg hover:bg-special-2 transition-all duration-300 px-12 py-6 animate-pulse hover:animate-none cursor-pointer"
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