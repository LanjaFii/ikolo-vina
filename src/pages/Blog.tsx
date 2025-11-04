// src/pages/Blog.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Données des articles
const blogArticles = [
  {
    id: 1,
    title: "ITM 2025 : Madagascar, Carrefour du Tourisme Durable",
    date: "12 juin 2025",
    image: "/src/assets/blog/itm.jpg",
    category: "Tourisme Durable",
    readTime: "4 min",
    excerpt: "Lors de l'ouverture de l'International Tourism Market (ITM) 2025, le Président a réitéré l'ambition d'atteindre 1 million de touristes d'ici 2028...",
    content: `
      <p>Lors de l'ouverture de l'International Tourism Market (ITM) 2025, le Président a réitéré l'ambition d'atteindre 1 million de touristes d'ici 2028, en misant sur un tourisme éco-responsable valorisant l'artisanat et la biodiversité unique de Madagascar.</p>
      
      <p>Cette vision stratégique s'aligne parfaitement avec les valeurs portées par IKOLO-VINA, qui soutient ces initiatives à travers l'organisation d'événements hybrides combinant présence physique et retransmission digitale. Notre approche permet de maximiser la portée de ces messages importants tout en réduisant l'impact environnemental.</p>
      
      <p>Le tourisme durable représente non seulement une opportunité économique majeure pour Madagascar, mais aussi un vecteur de préservation de notre patrimoine naturel exceptionnel.</p>
      
      <p><strong>IKOLO-VINA s'engage à :</strong></p>
      <ul>
        <li>Promouvoir les destinations éco-responsables</li>
        <li>Valoriser l'artisanat local</li>
        <li>Organiser des événements à faible impact environnemental</li>
        <li>Faciliter les partenariats durables</li>
      </ul>
    `
  }
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      {/* Section Hero - Blog */}
      <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/src/assets/ikoloVina/banniere.png"
          alt="Blog Ikolo Vina - Actualités"
          className="w-full h-full object-cover absolute inset-0 blur-[1px]"
        />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4 bg-special-1/80 backdrop-blur-sm text-white border-none">
              Actualités & Insights
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Notre Blog
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
              Découvrez les dernières actualités sur le tourisme durable, les ressources naturelles, 
              la beauté, le bien-être et le développement durable à Madagascar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Articles */}
      <section className="pt-16 pb-4 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Dernières <span className="text-special-1">Actualités</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Restez informé des tendances et développements dans nos domaines d'expertise
            </p>
          </motion.div>

          {/* Grille des articles */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {blogArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => openModal(article)}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 group bg-white/70 backdrop-blur-sm h-full border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 lg:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-special-1/90 text-white border-none backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-special-1 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-special-1 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton Voir Plus */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-2 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-linear-to-r from-special-1/15 via-special-3/10 to-special-2/15 rounded-3xl p-8 lg:p-4 max-w-5xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Restez <span className="text-special-1">informé</span> de nos actualités
                </h3>
                
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles 
                  sur le tourisme durable, les ressources naturelles et le bien-être à Madagascar.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal d'article */}
      <AnimatePresence>
        {isModalOpen && selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du modal */}
              <div className="relative">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-128 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-special-1/90 text-white border-none backdrop-blur-sm">
                    {selectedArticle.category}
                  </Badge>
                </div>
              </div>

              {/* Contenu du modal */}
              <div className="p-6 lg:p-8 max-h-[calc(90vh-16rem)] overflow-y-auto">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{selectedArticle.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{selectedArticle.readTime} de lecture</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {selectedArticle.title}
                </h2>

                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button 
                    variant="outline"
                    className="border-special-1 text-white bg-red-400 hover:bg-special-1 hover:text-white"
                    onClick={closeModal}
                  >
                    Fermer
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;