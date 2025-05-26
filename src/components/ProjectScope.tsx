import React, { useEffect, useState } from "react";
import {
  Book,
  Leaf,
  Bug,
  Database,
  LineChart,
  Search,
  BarChart2,
  MessageCircle,
} from "lucide-react";
import image1 from "../assets/image1p.png";
import image2p from "../assets/image2p.png";

interface ScopeItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

const scopeItems: ScopeItem[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: <Book className="h-6 w-6 text-green-600" />,
    content:
      "AGRI Frontier is an innovative platform designed to improve Sri Lankan paddy agriculture by using artificial intelligence and deep learning technologies. The platform consists of four main components: paddy disease diagnosis, real-time pest detection, paddy price forecasting, and paddy variety classification. These components work together to help farmers make better decisions, increase crop productivity, and promote sustainable farming practices.\n\nPaddy diseases and pests cause significant losses to farmers, and traditional methods for identifying and managing these problems are often slow, unreliable, and inaccessible to many small-scale farmers. AGRI Frontier addresses these challenges by using advanced AI models to quickly and accurately detect diseases and pests. It also forecasts paddy prices using a combination of machine learning techniques to help farmers plan their planting and selling strategies more effectively.\n\nIn addition, the system automates the classification of different paddy varieties, improving the accuracy and efficiency of crop management and market grading. By integrating these features into a user-friendly platform, AGRI Frontier supports sustainable agriculture, reduces environmental impacts, and helps secure the livelihoods of Sri Lankan farmers.",
  },
  {
    id: "background",
    title: "Background Literature",
    icon: <Book className="h-6 w-6 text-green-600" />,
    content:
      "Paddy farming is vital to Sri Lanka&apos;s economy and food security, but it faces many challenges from pests, diseases, and fluctuating market prices. Traditional methods for detecting diseases and pests often rely on manual inspection or expert advice, which can be slow, error-prone, and difficult to access for many farmers, especially in rural areas.\n\nRecent advances in artificial intelligence (AI) and deep learning have shown great potential in solving these problems. AI models can analyze images of paddy leaves to identify diseases quickly and accurately. For pest detection, real-time object detection algorithms like YOLO have been used to spot pests directly in the field. However, many existing systems focus only on detection without providing practical advice or easy access for small-scale farmers.\n\nPrice prediction is another important area where AI helps. Combining models like Long Short-Term Memory (LSTM) networks and Seasonal ARIMA (SARIMA) can improve forecasting by capturing both short-term changes and seasonal trends in paddy markets. Integrating weather data into these models also enhances accuracy.\n\nFinally, classifying different paddy varieties using machine learning techniques improves the management and marketing of rice crops. Techniques like deep neural networks and clustering algorithms have been applied successfully to automate this process.\n\nDespite these advances, many systems lack integration, scalability, or practical advisory features. AGRI Frontier addresses these gaps by combining disease diagnosis, pest detection, price forecasting, and paddy classification into a single platform designed for the needs of Sri Lankan farmers.",
  },
  {
    id: "methodology",
    title: "Methodology",
    icon: <Book className="h-6 w-6 text-green-600" />,
    content:
      "The AGRI Frontier platform integrates deep learning and machine learning techniques to address key challenges in paddy agriculture. For disease diagnosis, convolutional neural networks (CNN) analyze images of paddy leaves to accurately identify diseases, supported by image preprocessing and sanitization. Real-time pest detection is implemented using the YOLO algorithm, enabling fast identification directly from field images. Paddy variety classification employs clustering and neural network models on curated image datasets to automate and improve accuracy. For price forecasting, a hybrid SARIMA-LSTM model combines historical market data with weather variables to provide reliable and timely price predictions. The system is designed for scalability and usability on mobile devices to assist smallholder farmers effectively.",
  },
];
const researchGaps = [
  {
    id: "identification",
    icon: <Search className="mx-auto mb-3 h-12 w-12 text-green-700" />,
    title: "Integration of AI Models",
    description:
      "There is a lack of integrated platforms combining disease diagnosis, pest detection, price forecasting, and paddy variety classification in a seamless manner tailored for Sri Lankan farmers.",
  },
  {
    id: "severity",
    icon: <BarChart2 className="mx-auto mb-3 h-12 w-12 text-green-700" />,
    title: "Real-Time, Scalable Solutions",
    description:
      "Existing AI-based pest and disease detection methods often lack real-time processing capabilities and scalability for smallholder farms in diverse and complex field conditions.",
  },
  {
    id: "info-sharing",
    icon: <MessageCircle className="mx-auto mb-3 h-12 w-12 text-green-700" />,
    title: "Personalized Advisory Systems",
    description:
      "Most current systems focus on detection without providing personalized, actionable recommendations, limiting their practical impact on effective pest and disease management.",
  },
];

const objectives = [
  {
    id: "disease",
    title: "Paddy Disease Diagnosis",
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    points: [
      "Develop accurate deep learning model for disease identification",
      "Implement image sanitization for better accuracy",
      "Integrate personalized advisory system",
      "Optimize for mobile devices",
    ],
  },
  {
    id: "pest",
    title: "Real-Time Pest Detection",
    icon: <Bug className="h-8 w-8 text-red-600" />,
    points: [
      "Build YOLO-based pest detection model",
      "Train on diverse environmental conditions",
      "Design pest management information system",
      "Develop mobile app for farmers",
    ],
  },
  {
    id: "variety",
    title: "Paddy Variety Classification",
    icon: <Database className="h-8 w-8 text-blue-600" />,
    points: [
      "Collect and preprocess variety images",
      "Apply ML models for classification",
      "Implement clustering algorithms",
      "Create automated identification system",
    ],
  },
  {
    id: "price",
    title: "Price Forecasting",
    icon: <LineChart className="h-8 w-8 text-purple-600" />,
    points: [
      "Develop hybrid SARIMA-LSTM model",
      "Incorporate weather data analysis",
      "Evaluate against traditional methods",
      "Provide real-time price forecasts",
    ],
  },
];

const technologies = [
  {
    name: "React",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "Docker",
    image:
      "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    name: "Firebase",
    image:
      "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
  },
  {
    name: "Google Colab",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/2560px-Google_Colaboratory_SVG_Logo.svg.png",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  },
  {
    name: "TensorFlow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png",
  },
  {
    name: "Google Cloud",
    image:
      "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
  },
  { name: "JWT", image: "https://jwt.io/img/pic_logo.svg" },
  {
    name: "GitHub",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Azure",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
  },
];

const ProjectScope: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-aos]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project-scope" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Project Scope
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main content sections */}
        <div className="space-y-12">
          {scopeItems.map((item, index) => (
            <div
              key={item.id}
              id={`scope-${item.id}`}
              className={`bg-white rounded-lg shadow-md p-8 transition-all duration-700 transform ${
                visibleSections.includes(`scope-${item.id}`)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  {item.icon}
                </div>
                <div>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>

  {item.id !== 'methodology' && (
    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">{item.content}</p>
  )}
  <div
    data-aos="fade-up"
    data-aos-delay="150"
    className="transition-transform duration-700 ease-in-out transform mt-6"
  >

  {item.id === 'introduction' && (
    <img 
      src={image1} 
      alt="Introduction related" 
      className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto" 
    />
  )}
  </div>

  {item.id === 'methodology' && (
    <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-gray-600 leading-relaxed whitespace-pre-line text-justify">
        {item.content}
      </div>
      <div className="md:w-1/2">
        <img
          src={image2p}
          alt="Methodology related"
          className="rounded-lg shadow-md mx-auto max-w-full h-auto"
        />
      </div>
    </div>
  )}
</div>

              </div>
            </div>
          ))}
          {/* Research Gap Section */}
          <div
            id="scope-gap"
            className={`transition-all duration-700 transform ${
              visibleSections.includes("scope-gap")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Research Gap
            </h3>
            <p className="text-gray-600 text-center mb-12">
              Following areas are the research gaps found in most of the recent
              researches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {researchGaps.map(({ id, icon, title, description }) => (
                <div key={id} className="max-w-sm mx-auto text-center">
                  <div>{icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Objectives */}
          <div
            id="scope-objectives"
            className={`transition-all duration-700 transform ${
              visibleSections.includes("scope-objectives")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Research Objectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <div
                  key={objective.id}
                  className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-gray-100 mb-4">
                      {objective.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      {objective.title}
                    </h4>
                    <ul className="space-y-2 text-left">
                      {objective.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div
            id="scope-technologies"
            className={`transition-all duration-700 transform ${
              visibleSections.includes("scope-technologies")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transform transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <p className="text-sm font-medium text-gray-600">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;
