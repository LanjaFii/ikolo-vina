import ikVn from "../assets/images/consortium.png"
import fond1 from "../assets/photos/felana.jpeg"
import fond2 from "../assets/photos/holy.jpg"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Target, Quote } from "lucide-react"
import '@/App.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  const domains = ['BTP & infrastructures', 'Tourisme', 'Communication', 'Développement durable', 'Ingénierie', 'Audit informatique']

  return (
    <section 
      id="about" 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full px-6 max-w-6xl mx-auto">
        
        {/* SECTION 1 — QUI SOMMES-NOUS */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Avatar */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              <img
                src={ikVn}
                alt="Consortium Ikolo-Vina"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg border-8 border-white"
              />
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-7/12 space-y-6">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-special-1 mb-4 uppercase">
                Qui sommes-nous ?
              </h1>
              <div className="w-20 h-1 bg-special-2"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Nous sommes un groupe de jeunes consultantes et consultants multisectoriels,
                réunis après <strong className="text-special-1">15 à 20 années d'expériences</strong> respectives dans différents secteurs.
                De cette expertise et de cette vision commune est née une PME agile et engagée :
                <strong className="text-special-2 italic"> VINA CONSULTING</strong>.
              </p>

              <p>
                Nos interventions se concentrent principalement sur les domaines suivants :
              </p>

              {/* Grille des domaines d'expertise */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {domains.map((domaine, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200"
                  >
                    <span className="text-special-1 font-medium text-sm">{domaine}</span>
                  </div>
                ))}
              </div>

              <p>
                Nous proposons un accompagnement sur mesure, reposant sur l'expertise d'un ou plusieurs
                consultants, choisis selon la nature du projet et les besoins spécifiques du client.
              </p>

              <p>
                Chaque mission est soutenue par une équipe de techniciens et d'opérateurs qualifiés,
                avec un engagement fort envers la qualité, le respect des délais et la confiance.
              </p>

              <div className="bg-special-1 rounded-lg p-6 mt-6">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-white" />
                  <p className="text-white font-semibold text-lg">
                    Notre priorité : l'efficacité, la pertinence… et la confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 — COLLABORATEURS */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-special-1 mb-4">
              NOS COLLABORATEURS
            </h2>
            <div className="w-32 h-1 bg-special-2 mx-auto"></div>
          </div>

          <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-3 h-3 bg-special-2 rounded-full mt-2"></div>
              <p className="text-lg">
                <strong className="text-special-1">Consultants chefs de projets</strong> :
                experts dans les domaines du tourisme, de l'événementiel professionnel, de la
                phytothérapie, de l'architecture, du marketing & communication, du développement durable,
                du BTP et de l'environnement.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-3 h-3 bg-special-2 rounded-full mt-2"></div>
              <p className="text-lg">
                <strong className="text-special-1">Une équipe pluridisciplinaire</strong> composée de jeunes talents
                passionnés et créatifs, unis par une même vision.
              </p>
            </div>

            <p className="text-center text-xl font-medium mt-8 text-special-1">
              Ensemble, nous portons des projets innovants, responsables et adaptés aux réalités
              de Madagascar.
            </p>
          </div>

          {/* Citation */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <Quote className="w-12 h-12 text-special-1/30 mx-auto mb-4" />
              <blockquote className="text-2xl italic text-special-1 font-light leading-relaxed">
                "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite."
              </blockquote>
              <p className="text-gray-600 font-medium text-lg mt-6">— Henry Ford</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 — MEMBRES */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-special-1 mb-4">
              QUELQUES-UNS D'ENTRE NOUS...
            </h2>
            <div className="w-24 h-1 bg-special-2 mx-auto"></div>
          </div>

          {/* Membre 1 */}
          <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="lg:w-2/5">
              <img
                src={fond1}
                alt="RAMAHANDRISON Felana Anna"
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-special-1 mb-4">
                RAMAHANDRISON Felana Anna
              </h4>
              <p className="text-lg text-special-2 italic mb-6 font-medium">
                Fondatrice & co-gérante de <strong>VINA CONSULTING</strong>
              </p>
              <div className="space-y-3 text-gray-700">
                <p>
                  Avec plus de 15 ans d'expérience, elle accompagne des projets dans le tourisme,
                  le développement durable et la communication.
                </p>
                <p>
                  Elle allie adaptabilité, rigueur et engagement pour un entrepreneuriat
                  responsable et à impact.
                </p>
              </div>
            </div>
          </div>

          {/* Membre 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="lg:w-2/5">
              <img
                src={fond2}
                alt="RAKOTOMALALA NOROHARILIVA Holy"
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-special-1 mb-4">
                RAKOTOMALALA NOROHARILIVA Holy
              </h4>
              <p className="text-lg text-special-2 italic mb-6 font-medium">
                Consultante ingénieure Phytochimiste
              </p>
              <div className="space-y-3 text-gray-700">
                <p>
                  Spécialisée dans la valorisation de la biodiversité malgache,
                  elle développe des produits de bien-être à base de plantes locales.
                </p>
                <p>
                  Son expertise scientifique et son engagement durable contribuent à promouvoir
                  le capital naturel de Madagascar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 — VALEURS */}
        <div className="bg-special-1 rounded-2xl p-12 text-center text-white mb-12">
          <p className="text-2xl font-light mb-6">
            Innover avec sens. Construire durablement. Agir ensemble...
          </p>
          <p className="text-lg mb-4">
            Mais <em>la manière dont on les incarne</em> dans chaque projet...
            <strong> ça, il faut le voir pour y croire.</strong>
          </p>
          <p className="text-xl font-semibold mt-6">
            👉 Envie de comprendre ce qui fait vraiment la différence ?
          </p>
        </div>

        {/* Bouton d'action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-special-1 text-white text-lg font-semibold rounded-lg hover:bg-special-2 transition-all duration-300 px-12 py-6"
          >
            En savoir plus
            <span className="ml-3">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About