import React from 'react';
import { documents } from '../data/documents';
import { FileText, Download, Presentation } from 'lucide-react';

const Downloads: React.FC = () => {
  // Filter documents by type
  const docs = documents.filter(doc => doc.type === 'document');
  const presentations = documents.filter(doc => doc.type === 'presentation');

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Downloads</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        {/* Documents Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Documents</h3>
          <p className="text-center text-gray-600 mb-8">Please find all documents related to project below.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docs.map(doc => (
              <div 
                key={doc.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">{doc.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 text-center">{doc.description}</p>
                  <p className="text-gray-500 text-xs mb-4 text-center">{doc.date}</p>
                  <a 
                    href={doc.fileUrl}
                    className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Presentations Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Presentations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentations.map(presentation => (
              <div 
                key={presentation.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-orange-100">
                      <Presentation className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">{presentation.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 text-center">{presentation.description}</p>
                  <p className="text-gray-500 text-xs mb-4 text-center">{presentation.date}</p>
                  <a 
                    href={presentation.fileUrl}
                    className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;