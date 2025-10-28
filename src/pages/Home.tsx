const Home = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#f5f5f5] flex flex-col">
      <div className="container mx-auto px-4 w-full">
        <div className="w-full py-8">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            🌺 Bienvenue
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cette plateforme du <strong>Consortium Ikolo-Vina</strong>, un regroupement dynamique...
          </p>
          <p className="text-green-700 font-semibold text-lg mt-4">
            🌱 Ensemble, nous faisons pousser les idées qui changent la vie.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow-md hover:bg-green-700 transition mt-8"
          >
            👉 Découvrir nos membres et nos initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
