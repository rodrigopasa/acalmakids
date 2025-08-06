import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Eye, AlertCircle } from 'lucide-react';

// Configure PDF.js worker with correct version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

interface PDFPreviewProps {
  title: string;
  description: string;
  pdfUrl: string;
  maxPages: number;
  icon: 'book' | 'guide';
}

export function PDFPreview({ title, description, pdfUrl, maxPages, icon }: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(Math.min(numPages, maxPages));
    setLoading(false);
    setError('');
  }, [maxPages]);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF loading error:', error);
    setError('Erro ao carregar PDF');
    setLoading(false);
  }, []);

  const IconComponent = icon === 'book' ? BookOpen : FileText;

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconComponent className="text-2xl text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          
          <div className="flex items-center justify-center mb-4 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-full">
            <Eye className="mr-2 w-4 h-4" />
            Prévia - Primeiras {maxPages} páginas
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-inner p-4 mb-4 min-h-[320px] flex items-center justify-center">
          {loading && (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-2"></div>
              <p className="text-sm text-gray-500">Carregando PDF...</p>
            </div>
          )}
          
          {error && (
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mb-2" />
              <p className="text-sm text-red-600 mb-2">PDF não disponível para prévia</p>
              <p className="text-xs text-gray-500">Conteúdo completo disponível após a compra</p>
            </div>
          )}
          
          {!loading && !error && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading=""
              error=""
              className="flex justify-center"
              options={{
                cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
                cMapPacked: true,
              }}
            >
              <Page
                pageNumber={pageNumber}
                width={280}
                className="shadow-lg rounded-lg overflow-hidden"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading=""
                error=""
              />
            </Document>
          )}
        </div>

        {!loading && !error && numPages > 0 && (
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
              {pageNumber} de {numPages}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="flex items-center gap-1"
            >
              Próxima
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="text-center">
          <p className="text-xs text-gray-500">
            ✨ Conteúdo completo disponível após a compra
          </p>
        </div>
      </CardContent>
    </Card>
  );
}