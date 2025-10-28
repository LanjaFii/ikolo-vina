import ikVn from "../assets/images/consortium.png"
import fond1 from "../assets/photos/felana.jpeg"
import fond2 from "../assets/photos/holy.jpg"


const About = () => {
  return (
    <section id="about" className="bg-[#F5F5F5] py-12 text-gray-700 font-['Raleway']">
      <div className="container mx-auto px-4">
        {/* SECTION 1 — QUI SOMMES-NOUS */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="flex justify-center md:w-4/12">
            <img
              src={ikVn}
              alt="avatar"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-md"
            />
          </div>

          {/* Description */}
          <div className="md:w-8/12">
            <h1 className="text-3xl font-bold text-gray-700 mb-4 uppercase">
              Qui sommes-nous ?
            </h1>

            <p className="mb-3">
              Nous sommes un groupe de jeunes consultantes et consultants multisectoriels,
              réunis après <strong>15 à 20 années d’expériences</strong> respectives dans différents secteurs.
              De cette expertise et de cette vision commune est née une PME agile et engagée :
              <b className="text-gray-700 italic"> VINA CONSULTING</b>.
            </p>

            <p className="mb-3">
              Nos interventions se concentrent principalement sur les domaines suivants :
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>BTP & infrastructures</li>
              <li>Tourisme</li>
              <li>Communication</li>
              <li>Développement durable</li>
              <li>Ingénierie</li>
              <li>Audit informatique</li>
            </ul>

            <p className="mb-3">
              Nous proposons un accompagnement sur mesure, reposant sur l’expertise d’un ou plusieurs
              consultants, choisis selon la nature du projet et les besoins spécifiques du client.
            </p>

            <p className="mb-3">
              Chaque mission est soutenue par une équipe de techniciens et d’opérateurs qualifiés,
              avec un engagement fort envers la qualité, le respect des délais et la confiance.
            </p>

            <p className="font-semibold text-gray-700">
              Notre priorité : l’efficacité, la pertinence… et la confiance.
            </p>
          </div>
        </div>

        {/* SECTION 2 — COLLABORATEURS */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            COLLABORATEURS :
          </h2>

          <p className="mb-4">
            <b className="underline">+ Consultants chefs de projets</b> :
            experts dans les domaines du tourisme, de l’événementiel professionnel, de la
            phytothérapie, de l’architecture, du marketing & communication, du développement durable,
            du BTP et de l’environnement.
          </p>

          <p className="mb-4">
            <b className="underline">+ Une équipe pluridisciplinaire</b> composée de jeunes talents
            passionnés et créatifs, unis par une même vision.
          </p>

          <p className="mb-6">
            Ensemble, nous portons des projets innovants, responsables et adaptés aux réalités
            de Madagascar.
          </p>

          <blockquote className="text-center italic text-gray-700 text-lg font-semibold mb-2">
            “Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite.”
          </blockquote>
          <p className="text-right font-medium text-lg mb-8">— Henry Ford</p>
        </div>

        {/* SECTION 3 — MEMBRES */}
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
          QUELQUES-UNS D'ENTRE NOUS...
        </h2>

        {/* Collaborateur 1 */}
        <div className="flex flex-col md:flex-row items-stretch bg-[#F5F5F5] shadow-md rounded-lg overflow-hidden mb-8 border border-[#00c092] hover:scale-[1.02] transition-transform">
          <img
            src={fond1}
            alt="RAMAHANDRISON Felana Anna"
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-6 md:w-2/3">
            <h4 className="text-gray-700 font-bold text-lg mb-2">
              RAMAHANDRISON Felana Anna
            </h4>
            <p className="italic mb-2">Fondatrice & co-gérante de <b>VINA CONSULTING</b></p>
            <p className="mb-2">
              Avec plus de 15 ans d’expérience, elle accompagne des projets dans le tourisme,
              le développement durable et la communication.
            </p>
            <p>
              Elle allie adaptabilité, rigueur et engagement pour un entrepreneuriat
              responsable et à impact.
            </p>
          </div>
        </div>

        {/* Collaborateur 2 */}
        <div className="flex flex-col md:flex-row-reverse items-stretch bg-[#F5F5F5] shadow-md rounded-lg overflow-hidden mb-8 border border-[#00c092] hover:scale-[1.02] transition-transform">
          <img
            src={fond2}
            alt="RAKOTOMALALA NOROHARILIVA Holy"
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-6 md:w-2/3 text-left">
            <h4 className="text-gray-700 font-bold text-lg mb-2">
              RAKOTOMALALA NOROHARILIVA Holy
            </h4>
            <p className="italic mb-2">Consultante ingénieure Phytochimiste</p>
            <p className="mb-2">
              Spécialisée dans la valorisation de la biodiversité malgache,
              elle développe des produits de bien-être à base de plantes locales.
            </p>
            <p>
              Son expertise scientifique et son engagement durable contribuent à promouvoir
              le capital naturel de Madagascar.
            </p>
          </div>
        </div>

        {/* SECTION 4 — VALEURS */}
        <div className="mt-10 bg-[#f5f5f5] shadow-sm rounded-md p-8 text-center md:text-left">
          <p className="font-semibold text-lg mb-2 text-gray-700">
            Innover avec sens. Construire durablement. Agir ensemble...
          </p>
          <p>
            Mais <i>la manière dont on les incarne</i> dans chaque projet...
            <b> ça, il faut le voir pour y croire.</b>
          </p>
          <p className="italic mt-2 text-gray-700">
            👉 Envie de comprendre ce qui fait vraiment la différence ?
          </p>
        </div>

        {/* Bouton */}
        <div className="text-right mt-10">
          <a
            href="/projects"
            className="inline-block bg-[#007F5F] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#005f46] transition"
          >
            En savoir plus &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
