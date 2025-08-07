import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Eye, ExternalLink } from 'lucide-react';

interface SimplePDFPreviewProps {
  title: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
  icon: 'book' | 'guide';
}

export function SimplePDFPreview({ title, description, pdfUrl, coverImage, icon }: SimplePDFPreviewProps) {
  const IconComponent = icon === 'book' ? BookOpen : FileText;

  const handleViewPDF = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconComponent className="text-2xl text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          
          <div className="flex items-center justify-center mb-4 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-full">
            <Eye className="mr-2 w-4 h-4" />
            Clique para ver a prévia
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-inner p-4 mb-4 group-hover:shadow-lg transition-shadow">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={coverImage} 
              alt={`Capa do ${title}`}
              className="w-full h-auto max-h-80 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleViewPDF}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Ver Prévia Completa
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              ✨ Conteúdo completo disponível após a compra
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}