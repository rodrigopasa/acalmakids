import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Moon, Heart, Smartphone, BookOpen, Headphones, Gift, User, Star, Shield, Check, Lock, CreditCard, QrCode, ChevronDown, Mail, Download, Undo, Eye } from "lucide-react";
import { useEffect } from "react";

import childImage from "@assets/ChatGPT Image 7 de ago. de 2025, 12_46_31_1754586753926.png";
import guiaTempoTelaImage from "@assets/54ee77c2baada501_1754587158205.png";
import contosClassicosImage from "@assets/4aa56f11d45_1754587158206.png";
import guiaTempoTelaCard from "@assets/54ee77c2baada501_1754588200414.png";
import contosClassicosCard from "@assets/4aa56f11d45_1754588200415.png";
import acalmaKidsLogo from "@assets/ChatGPT Image 7 de ago. de 2025, 14_41_31_1754588504433.png";
import audioIcon from "@assets/unnamed_1754588765007.png";


export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-cream">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-purple-100">
        <div className="container mx-auto px-3 sm:px-4 py-2 md:py-3 flex justify-between items-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
          <div className="flex items-center flex-shrink-0">
            <img src={acalmaKidsLogo} alt="Acalma Kids" className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[120px] xs:max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px]" />
          </div>
          <Button asChild className="bg-gradient-to-r from-blue-400 to-orange-400 hover:from-blue-500 hover:to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-xs xs:text-sm md:text-base lg:text-lg px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 md:py-3 flex-shrink-0">
            <a href="#comprar" className="flex items-center">
              <Heart className="mr-1 md:mr-2 lg:mr-3 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
              <span className="hidden xs:inline">Comprar Agora</span>
              <span className="xs:hidden">Comprar</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-8 sm:py-12 md:py-16 px-3 sm:px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-3 sm:mb-4 md:mb-6">
                  📱O Mundo está roubando a inocência de <span className="gradient-text">nossos filhos!</span>​
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Descubra como criar uma rotina saudável com o <strong>Guia do Tempo de Tela</strong> + <strong>10 histórias clássicas infantis em PDF</strong> + <strong>áudios narrados para dormir e 50 histórinhas para fortalecer a fé e os valores</strong>
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white rounded-full font-semibold text-sm xs:text-base sm:text-lg md:text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-pulse-soft px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4">
                    <a href="#comprar" className="flex items-center justify-center">
                      <Heart className="mr-1.5 sm:mr-2 md:mr-3 animate-bounce-gentle w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      <span className="text-xs xs:text-sm sm:text-base md:text-lg">QUERO AJUDAR MEU FILHO AGORA</span>
                    </a>
                  </Button>
                  <div className="flex flex-col gap-2 sm:gap-3 items-center lg:items-start w-full">
                    <div className="flex items-center justify-center lg:justify-start text-xs xs:text-sm md:text-base text-green-700 bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-full sm:w-auto">
                      <Shield className="mr-1.5 sm:mr-2 text-green-600 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="font-medium">✅ Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start text-sm xs:text-base sm:text-lg md:text-xl text-orange-700 bg-orange-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold w-full sm:w-auto">
                      <CreditCard className="mr-1.5 sm:mr-2 text-orange-600 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="text-xs xs:text-sm sm:text-base md:text-lg">💳 Apenas R$ 19,90 – Por tempo limitado!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative animate-float order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
                <img 
                  src={childImage} 
                  alt="Criança hipnotizada pela tela do celular" 
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500"
                />
                <div className="absolute -bottom-1 xs:-bottom-2 sm:-bottom-2 md:-bottom-4 -right-1 xs:-right-2 sm:-right-2 md:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-lg animate-bounce-gentle">
                  <div className="text-center">
                    <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold text-gray-800">R$ 19,90</div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-700 font-medium">Por tempo limitado!</div>
                  </div>
                </div>
                <div className="absolute top-1 xs:top-2 sm:top-2 md:top-4 left-1 xs:left-2 sm:left-2 md:left-4 bg-green-500 text-white px-1.5 xs:px-2 sm:px-2 md:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs font-bold animate-pulse">
                  🔥 OFERTA ESPECIAL
                </div>
                <div className="absolute -top-1 -left-1 xs:-top-2 xs:-left-2 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 sm:-bottom-6 sm:-left-6 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-pink-300 rounded-full animate-pulse-soft opacity-60"></div>
                <div className="absolute -top-2 -right-3 xs:-top-4 xs:-right-6 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full animate-float opacity-70"></div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full animate-bounce-gentle opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse-soft opacity-70"></div>
        </section>

        {/* PDF Preview Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                <span className="gradient-text">Veja uma prévia</span> do conteúdo que você vai receber
              </h2>
              <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Explore algumas páginas dos nossos materiais exclusivos e veja a qualidade do conteúdo que preparamos para transformar a rotina da sua família
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* 10 Contos Clássicos */}
              <div className="animate-slide-up">
                <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <BookOpen className="text-lg sm:text-2xl text-blue-500" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">10 Contos Clássicos</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Histórias atemporais para criar momentos especiais com seu filho</p>
                      
                    </div>

                    <div className="bg-white rounded-lg shadow-inner p-3 sm:p-4 mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={contosClassicosImage} 
                          alt="Capa do 10 Contos Clássicos"
                          className="w-full h-auto max-h-60 sm:max-h-80 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                        <iframe
                          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://dimensaonerd.com.br/wp-content/uploads/2025/08/Copia-de-Copia-de-ebook-Desafiando-o-digitalDocumento-A4.pdf"
                          className="w-full h-full border-0"
                          title="Prévia - 10 Contos Clássicos"
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          ✨ Conteúdo completo disponível após a compra
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Guia do Tempo de Tela */}
              <div className="animate-slide-up">
                <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Smartphone className="text-lg sm:text-2xl text-orange-500" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Guia do Tempo de Tela</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Estratégias práticas para uma infância equilibrada na era digital</p>
                      
                    </div>

                    <div className="bg-white rounded-lg shadow-inner p-3 sm:p-4 mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={guiaTempoTelaImage} 
                          alt="Capa do Guia do Tempo de Tela"
                          className="w-full h-auto max-h-60 sm:max-h-80 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                        <iframe
                          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://dimensaonerd.com.br/wp-content/uploads/2025/08/Previa-Guia-de-Tela.pdf"
                          className="w-full h-full border-0"
                          title="Prévia - Guia do Tempo de Tela"
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          ✨ Conteúdo completo disponível após a compra
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Audio Preview Section */}
            <div className="mt-8 sm:mt-12 md:mt-16 text-center">
              <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">
                <span className="gradient-text">Ouça uma prévia</span> dos áudios narrados
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Histórias clássicas narradas com carinho para criar momentos especiais na hora de dormir
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6 sm:mb-8">
                <Card className="bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col items-center">
                      <img src={audioIcon} alt="Ícone de áudio" className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" />
                      <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Os Três Porquinhos</h4>
                      <audio controls className="w-full h-8 sm:h-10">
                        <source src="/conto01.mp3" type="audio/mpeg" />
                        Seu navegador não suporta o elemento de áudio.
                      </audio>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col items-center">
                      <img src={audioIcon} alt="Ícone de áudio" className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" />
                      <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Chapeuzinho Vermelho</h4>
                      <audio controls className="w-full h-8 sm:h-10">
                        <source src="/conto02.mp3" type="audio/mpeg" />
                        Seu navegador não suporta o elemento de áudio.
                      </audio>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
                ✨ + 8 histórias completas disponíveis após a compra
              </p>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button asChild className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white rounded-full font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                <a href="#comprar" className="flex items-center justify-center">
                  <Heart className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Quero o conteúdo completo agora!
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Solution Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <img 
                src="/crianca-celular.jpg" 
                alt="Criança preocupada olhando para o celular" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-xl sm:rounded-2xl shadow-lg mb-6 sm:mb-8 animate-float"
              />
              <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 animate-slide-up px-2">
                Seu filho vive no celular e tem <span className="gradient-text">dificuldade para dormir</span>?
              </h2>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                Você não está sozinho. Com tantas telas e estímulos, é cada vez mais difícil manter uma rotina equilibrada.
              </p>
            </div>
            
            <Card className="p-4 sm:p-6 md:p-8 shadow-2xl mb-8 sm:mb-10 md:mb-12 bg-gradient-to-br from-white to-blue-50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 font-semibold">Este combo exclusivo ajuda pais a:</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-green-200 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <Smartphone className="text-2xl sm:text-3xl md:text-4xl text-green-700 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">Reduzir o tempo de tela</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Com equilíbrio e estratégias práticas que realmente funcionam</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-blue-200 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <BookOpen className="text-2xl sm:text-3xl md:text-4xl text-blue-700 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">Criar momentos especiais</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Com histórias mágicas antes de dormir que seu filho vai amar</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-purple-200 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <Heart className="text-2xl sm:text-3xl md:text-4xl text-purple-700 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">Fortalecer a conexão</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Entre pais e filhos através de momentos únicos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="absolute top-20 right-10 w-6 h-6 bg-blue-300 rounded-full animate-bounce-gentle opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-70"></div>
        </section>

        {/* Product Showcase */}
        <section className="bg-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">
              O que você vai <span className="text-primary-purple">receber</span>:
            </h2>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] xs:text-xs font-bold rounded-bl-lg">GUIA</div>
                  <img 
                    src={guiaTempoTelaCard} 
                    alt="Criança usando tablet com moderação" 
                    className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-purple-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce-gentle">
                    <Smartphone className="text-2xl sm:text-3xl text-primary-purple" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">📘 Guia do Tempo de Tela</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Estratégias práticas e eficazes para uma infância equilibrada, com dicas testadas por especialistas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-yellow-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] xs:text-xs font-bold rounded-bl-lg">PDFs</div>
                  <img 
                    src={contosClassicosCard} 
                    alt="Livros de histórias infantis" 
                    className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce-gentle">
                    <BookOpen className="text-2xl sm:text-3xl text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">📖 10 Contos clássicos em PDF</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Histórias atemporais para ler com seu filho e criar memórias afetivas que durarão para sempre</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-pink-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] xs:text-xs font-bold rounded-bl-lg">ÁUDIO</div>
                  <img 
                    src={audioIcon} 
                    alt="Ícone de áudio para histórias narradas" 
                    className="w-full h-24 sm:h-28 md:h-32 object-contain rounded-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-pink-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce-gentle">
                    <Headphones className="text-2xl sm:text-3xl text-pink-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">🎧 10 Áudios narrados</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Prontos para escutar na hora de dormir, com narração profissional e música relaxante</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-r from-yellow-100 to-green-100 p-4 sm:p-6 md:p-8 text-center shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  <Gift className="mr-1 sm:mr-2 inline w-5 h-5 sm:w-6 sm:h-6" />
                  Bônus Exclusivo!
                </h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-700">
                  <strong>Dicas de como contar histórias que encantam</strong> - Material complementar gratuito para você se tornar o melhor contador de histórias para seu filho!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gradient-to-br from-gray-50 to-purple-50 relative">
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12 animate-slide-up">
              Quem já usou, <span className="gradient-text">aprovou</span>!
            </h2>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl border-2 sm:border-4 border-purple-200 flex-shrink-0">
                      AP
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Ana Paula</h4>
                      <p className="text-xs sm:text-sm text-gray-600">mãe do Lucas, 6 anos</p>
                      <p className="text-[10px] xs:text-xs text-purple-600 font-medium">São Paulo, SP</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-base">
                    "Depois que comecei a usar o combo, meu filho dorme muito mais rápido. Os áudios são mágicos! Agora temos uma rotina que funciona de verdade. Lucas até pede para ouvir as histórias!"
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-[10px] xs:text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl border-2 sm:border-4 border-blue-200 flex-shrink-0">
                      FE
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Felipe</h4>
                      <p className="text-xs sm:text-sm text-gray-600">pai da Maria, 8 anos</p>
                      <p className="text-[10px] xs:text-xs text-blue-600 font-medium">Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-base">
                    "O guia me fez repensar o quanto o celular estava roubando momentos importantes aqui em casa. Mudou nossa vida! A Maria agora prefere as histórias ao tablet."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-[10px] xs:text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl border-2 sm:border-4 border-green-200 flex-shrink-0">
                      CA
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Carla Santos</h4>
                      <p className="text-xs sm:text-sm text-gray-600">mãe do Pedro, 5 anos</p>
                      <p className="text-[10px] xs:text-xs text-green-600 font-medium">Belo Horizonte, MG</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-base">
                    "Incrível como as estratégias do guia funcionaram! Pedro reduziu o tempo de tela de 4 horas para apenas 1 hora por dia. E ainda consegue dormir mais cedo com os áudios relaxantes."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-[10px] xs:text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl border-2 sm:border-4 border-orange-200 flex-shrink-0">
                      RI
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Ricardo Lima</h4>
                      <p className="text-xs sm:text-sm text-gray-600">pai da Sofia, 7 anos</p>
                      <p className="text-[10px] xs:text-xs text-orange-600 font-medium">Curitiba, PR</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-base">
                    "Como pai solteiro, estava perdido com a rotina da Sofia. Este combo salvou nossas noites! Ela adora as histórias e agora temos um momento especial juntos todos os dias."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-[10px] xs:text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute top-20 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 animate-slide-up px-2">
              Comece <span className="gradient-text animate-pulse">hoje</span> a mudar a rotina do seu filho
            </h2>
            
            <Card className="p-4 sm:p-6 md:p-12 shadow-2xl mb-6 sm:mb-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white via-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                  <div className="text-center lg:text-left relative">
                    <div className="absolute -top-2 -left-2 xs:-top-4 xs:-left-4 bg-red-500 text-white text-[10px] xs:text-xs font-bold px-2 xs:px-3 py-0.5 xs:py-1 rounded-full animate-bounce">
                      60% OFF
                    </div>
                    <div className="text-sm xs:text-base sm:text-lg text-gray-500 line-through mb-1 sm:mb-2">De R$ 49,90 por</div>
                    <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-1 sm:mb-2 animate-pulse-soft">R$ 19,90</div>
                    <div className="text-red-600 font-semibold text-sm xs:text-base sm:text-lg bg-red-50 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg inline-block">
                      ⏰ Por tempo limitado!
                    </div>
                    <div className="mt-3 xs:mt-4 text-xs xs:text-sm text-gray-600">
                      💰 Economia de R$ 29,90
                    </div>
                  </div>
                  <div className="flex-1 max-w-md w-full">
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white rounded-full font-bold text-base xs:text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 mb-3 sm:mb-4 animate-bounce-gentle">
                      <a href="#comprar" className="flex items-center justify-center">
                        <Heart className="mr-2 xs:mr-3 animate-pulse w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                        <span className="text-sm xs:text-base sm:text-lg">Quero esse combo agora!</span>
                      </a>
                    </Button>
                    <div className="flex items-center justify-center mb-3 sm:mb-4 text-green-600 font-semibold text-sm xs:text-base">
                      <Check className="mr-2 w-4 h-4 xs:w-5 xs:h-5" />
                      Acesso instantâneo
                    </div>
                    <p className="text-xs xs:text-sm text-gray-500 text-center">
                      <Lock className="inline mr-1 w-3 h-3 xs:w-4 xs:h-4" />
                      Pagamento 100% seguro • Site protegido com SSL
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs xs:text-sm text-gray-700">
              <div className="flex items-center bg-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="mr-1.5 xs:mr-2 text-green-600 w-4 h-4 xs:w-5 xs:h-5" />
                <span className="font-medium">Cartão de Crédito</span>
              </div>
              <div className="flex items-center bg-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <QrCode className="mr-1.5 xs:mr-2 text-blue-600 w-4 h-4 xs:w-5 xs:h-5" />
                <span className="font-medium">PIX Instantâneo</span>
              </div>
              <div className="flex items-center bg-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="mr-1.5 xs:mr-2 text-purple-600 w-4 h-4 xs:w-5 xs:h-5" />
                <span className="font-medium">Boleto Bancário</span>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              🛡️ <span className="text-primary-purple">Garantia</span> total
            </h2>
            
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-6 md:p-8 shadow-xl">
              <CardContent className="p-0">
                <div className="max-w-2xl mx-auto">
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Se você não gostar do material por qualquer motivo, <strong>devolvemos seu dinheiro em até 7 dias</strong>. Sem perguntas, sem complicações.
                  </p>
                  <div className="flex items-center justify-center mt-4 sm:mt-6 text-green-600">
                    <Check className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 mr-2" />
                    <span className="font-semibold text-sm xs:text-base sm:text-lg">Risco zero para você!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-soft-gray">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">
              Dúvidas <span className="text-primary-purple">Frequentes</span>
            </h2>
            
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-4 xs:px-6 py-3 xs:py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 text-sm xs:text-base">
                  Como recebo os materiais?
                </AccordionTrigger>
                <AccordionContent className="px-4 xs:px-6 pb-3 xs:pb-4 text-gray-600 leading-relaxed text-sm xs:text-base">
                  Após a confirmação do pagamento, você receberá um e-mail com todos os arquivos para download. O acesso é imediato e os materiais ficam disponíveis para sempre.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-4 xs:px-6 py-3 xs:py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 text-sm xs:text-base">
                  Os áudios funcionam em celular?
                </AccordionTrigger>
                <AccordionContent className="px-4 xs:px-6 pb-3 xs:pb-4 text-gray-600 leading-relaxed text-sm xs:text-base">
                  Sim! Você pode ouvir no celular, tablet, computador ou qualquer dispositivo. Os áudios estão em formato MP3, compatível com todos os aparelhos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-4 xs:px-6 py-3 xs:py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 text-sm xs:text-base">
                  Posso pagar com PIX ou cartão?
                </AccordionTrigger>
                <AccordionContent className="px-4 xs:px-6 pb-3 xs:pb-4 text-gray-600 leading-relaxed text-sm xs:text-base">
                  Sim! Aceitamos PIX, cartão de crédito (parcelamento em até 2x) e boleto bancário.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-4 xs:px-6 py-3 xs:py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 text-sm xs:text-base">
                  Para que idade é indicado?
                </AccordionTrigger>
                <AccordionContent className="px-4 xs:px-6 pb-3 xs:pb-4 text-gray-600 leading-relaxed text-sm xs:text-base">
                  O combo é ideal para crianças de 3 a 12 anos. As histórias são atemporais e o guia de tempo de tela serve para todas as idades dentro dessa faixa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gradient-to-br from-pink-50 to-purple-50" id="comprar">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 px-2">
              🌙 Leve agora o combo completo por <span className="text-accent-coral">R$ 19,90</span>
            </h2>
            
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              Transforme as noites da sua família em momentos especiais de conexão e amor
            </p>
            
            <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
              <CardContent className="p-0">
                <Button asChild size="lg" className="w-full bg-accent-coral hover:bg-pink-600 text-white rounded-full font-bold text-base xs:text-lg sm:text-xl md:text-2xl py-4 sm:py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-6">
                  <a href="https://pay.hotmart.com/E101242545F" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Heart className="mr-2 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl">Quero transformar a rotina do meu filho!</span>
                  </a>
                </Button>
                
                <div className="flex flex-col xs:flex-row justify-center items-center gap-3 xs:gap-4 text-xs xs:text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="mr-1.5 xs:mr-2 text-green-600 w-4 h-4" />
                    Compra 100% Segura
                  </div>
                  <div className="flex items-center">
                    <Download className="mr-1.5 xs:mr-2 text-blue-600 w-4 h-4" />
                    Acesso Imediato
                  </div>
                  <div className="flex items-center">
                    <Undo className="mr-1.5 xs:mr-2 text-purple-600 w-4 h-4" />
                    7 Dias de Garantia
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-xs xs:text-sm text-gray-500 mt-6 sm:mt-8 px-2">
              ⏰ Oferta por tempo limitado. Não perca essa oportunidade de criar uma rotina mais saudável para sua família!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 sm:py-10 md:py-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3 sm:mb-4">
                <Moon className="text-2xl xs:text-3xl text-primary-purple mr-2 xs:mr-3 animate-bounce-gentle" />
                <span className="text-lg xs:text-xl font-bold">Combo Noites Felizes</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm xs:text-base">
                Transformando as noites das famílias brasileiras com histórias, amor e conexão.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-base xs:text-lg font-semibold mb-3 sm:mb-4 text-primary-purple">O que você recebe</h3>
              <ul className="space-y-2 text-gray-300 text-sm xs:text-base">
                <li className="flex items-center justify-center">
                  <Smartphone className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-purple-400" />
                  Guia do Tempo de Tela
                </li>
                <li className="flex items-center justify-center">
                  <BookOpen className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-green-400" />
                  10 Contos em PDF
                </li>
                <li className="flex items-center justify-center">
                  <Headphones className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-pink-400" />
                  10 Áudios Narrados
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-base xs:text-lg font-semibold mb-3 sm:mb-4 text-primary-purple">Garantias</h3>
              <ul className="space-y-2 text-gray-300 text-sm xs:text-base">
                <li className="flex items-center justify-center md:justify-end">
                  <Shield className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-green-400" />
                  7 dias de garantia
                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Lock className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-blue-400" />
                  Pagamento seguro
                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Download className="mr-2 w-3 h-3 xs:w-4 xs:h-4 text-yellow-400" />
                  Acesso imediato
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs xs:text-sm">
              © 2025 Combo Noites Felizes. Todos os direitos reservados.
            </p>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-4 text-xs xs:text-sm text-gray-500">
              <span>Pagamento 100% seguro</span>
              <span className="hidden xs:inline">•</span>
              <span>Suporte 24/7</span>
              <span className="hidden xs:inline">•</span>
              <span>Garantia total</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
