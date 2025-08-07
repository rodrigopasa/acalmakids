import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Moon, Heart, Smartphone, BookOpen, Headphones, Gift, User, Star, Shield, Check, Lock, CreditCard, QrCode, ChevronDown, Mail, Download, Undo, Eye } from "lucide-react";
import { useEffect } from "react";

import childImage from "@assets/ChatGPT Image 7 de ago. de 2025, 12_46_31_1754586753926.png";
import guiaTempoTelaImage from "@assets/54ee77c2baada501_1754587158205.png";
import contosClassicosImage from "@assets/4aa56f11d45_1754587158206.png";


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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Moon className="text-2xl md:text-3xl text-primary-purple animate-bounce-gentle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-800">Combo Noites Felizes</span>
          </div>
          <Button asChild className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base px-4 md:px-6">
            <a href="#comprar">
              <Heart className="mr-1 md:mr-2 w-4 h-4" />
              <span className="hidden sm:inline">Comprar Agora</span>
              <span className="sm:hidden">Comprar</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 md:mb-6">
                  📱Seu Filho, Seja um Bebê ou uma Criança, Já Parece <span className="gradient-text">Hipnotizado Pelas Telas?</span>​
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Descubra como criar uma rotina saudável com o <strong>Guia do Tempo de Tela</strong> + <strong>10 histórias clássicas infantis em PDF</strong> + <strong>áudios narrados para dormir</strong>
                </p>
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-pulse-soft px-6 md:px-8 py-3 md:py-4">
                    <a href="#comprar" className="flex items-center justify-center">
                      <Heart className="mr-2 md:mr-3 animate-bounce-gentle w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-base md:text-lg">QUERO AJUDAR MEU FILHO AGORA</span>
                    </a>
                  </Button>
                  <div className="flex flex-col gap-2 items-center lg:items-start">
                    <div className="flex items-center justify-center lg:justify-start text-sm md:text-base text-green-700 bg-green-50 px-4 py-2 rounded-full">
                      <Shield className="mr-2 text-green-600 w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-medium">✅ Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start text-lg md:text-xl text-orange-700 bg-orange-50 px-4 py-2 rounded-full font-bold">
                      <CreditCard className="mr-2 text-orange-600 w-4 h-4 md:w-5 md:h-5" />
                      <span>💳 Apenas R$ 19,90 – Por tempo limitado!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative animate-float order-1 lg:order-2 mb-8 lg:mb-0">
                <img 
                  src={childImage} 
                  alt="Criança hipnotizada pela tela do celular" 
                  className="rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500"
                />
                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-3 md:p-4 rounded-2xl shadow-lg animate-bounce-gentle">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-gray-800">R$ 19,90</div>
                    <div className="text-xs md:text-sm text-gray-700 font-medium">Por tempo limitado!</div>
                  </div>
                </div>
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔥 OFERTA ESPECIAL
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-300 rounded-full animate-pulse-soft opacity-60"></div>
                <div className="absolute -top-4 -right-6 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-70"></div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full animate-bounce-gentle opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse-soft opacity-70"></div>
        </section>

        {/* PDF Preview Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="gradient-text">Veja uma prévia</span> do conteúdo que você vai receber
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore algumas páginas dos nossos materiais exclusivos e veja a qualidade do conteúdo que preparamos para transformar a rotina da sua família
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 10 Contos Clássicos */}
              <div className="animate-slide-up">
                <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="text-2xl text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">10 Contos Clássicos</h3>
                      <p className="text-sm text-gray-600 mb-4">Histórias atemporais para criar momentos especiais com seu filho</p>
                      
                      <div className="flex items-center justify-center mb-4 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-full">
                        <Eye className="mr-2 w-4 h-4" />
                        Clique para ver a prévia
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-inner p-4 mb-4 group-hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={contosClassicosImage} 
                          alt="Capa do 10 Contos Clássicos"
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
                      <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
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
                <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="text-2xl text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Guia do Tempo de Tela</h3>
                      <p className="text-sm text-gray-600 mb-4">Estratégias práticas para uma infância equilibrada na era digital</p>
                      
                      <div className="flex items-center justify-center mb-4 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-full">
                        <Eye className="mr-2 w-4 h-4" />
                        Clique para ver a prévia
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-inner p-4 mb-4 group-hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={guiaTempoTelaImage} 
                          alt="Capa do Guia do Tempo de Tela"
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
                      <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
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

            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <a href="#comprar">
                  <Heart className="mr-2 w-5 h-5" />
                  Quero o conteúdo completo agora!
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Solution Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="mb-12">
              <img 
                src="/crianca-celular.jpg" 
                alt="Criança preocupada olhando para o celular" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg mb-8 animate-float"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 animate-slide-up">
                Seu filho vive no celular e tem <span className="gradient-text">dificuldade para dormir</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Você não está sozinho. Com tantas telas e estímulos, é cada vez mais difícil manter uma rotina equilibrada.
              </p>
            </div>
            
            <Card className="p-6 md:p-8 shadow-2xl mb-12 bg-gradient-to-br from-white to-blue-50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">Este combo exclusivo ajuda pais a:</p>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center p-6 md:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Smartphone className="text-4xl text-green-700 group-hover:animate-bounce" size={48} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Reduzir o tempo de tela</h3>
                    <p className="text-gray-600 leading-relaxed">Com equilíbrio e estratégias práticas que realmente funcionam</p>
                  </div>
                  <div className="text-center p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <BookOpen className="text-4xl text-blue-700 group-hover:animate-bounce" size={48} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Criar momentos especiais</h3>
                    <p className="text-gray-600 leading-relaxed">Com histórias mágicas antes de dormir que seu filho vai amar</p>
                  </div>
                  <div className="text-center p-6 md:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Heart className="text-4xl text-purple-700 group-hover:animate-bounce" size={48} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Fortalecer a conexão</h3>
                    <p className="text-gray-600 leading-relaxed">Entre pais e filhos através de momentos únicos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="absolute top-20 right-10 w-6 h-6 bg-blue-300 rounded-full animate-bounce-gentle opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-70"></div>
        </section>

        {/* Product Showcase */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              O que você vai <span className="text-primary-purple">receber</span>:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">GUIA</div>
                  <img 
                    src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Criança usando tablet com moderação" 
                    className="w-full h-32 object-cover rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                    <Smartphone className="text-3xl text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📘 Guia do Tempo de Tela</h3>
                  <p className="text-gray-600 leading-relaxed">Estratégias práticas e eficazes para uma infância equilibrada, com dicas testadas por especialistas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-yellow-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">PDFs</div>
                  <img 
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Livros de histórias infantis" 
                    className="w-full h-32 object-cover rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                    <BookOpen className="text-3xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📖 10 Contos clássicos em PDF</h3>
                  <p className="text-gray-600 leading-relaxed">Histórias atemporais para ler com seu filho e criar memórias afetivas que durarão para sempre</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">ÁUDIO</div>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Criança ouvindo histórias com fones" 
                    className="w-full h-32 object-cover rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                    <Headphones className="text-3xl text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎧 10 Áudios narrados</h3>
                  <p className="text-gray-600 leading-relaxed">Prontos para escutar na hora de dormir, com narração profissional e música relaxante</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-r from-yellow-100 to-green-100 p-8 text-center shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  <Gift className="mr-2 inline" />
                  Bônus Exclusivo!
                </h3>
                <p className="text-lg text-gray-700">
                  <strong>Dicas de como contar histórias que encantam</strong> - Material complementar gratuito para você se tornar o melhor contador de histórias para seu filho!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50 relative">
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">
              Quem já usou, <span className="gradient-text">aprovou</span>!
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                      alt="Ana Paula" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-purple-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">Ana Paula</h4>
                      <p className="text-sm text-gray-600">mãe do Lucas, 6 anos</p>
                      <p className="text-xs text-purple-600 font-medium">São Paulo, SP</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4 text-base">
                    "Depois que comecei a usar o combo, meu filho dorme muito mais rápido. Os áudios são mágicos! Agora temos uma rotina que funciona de verdade. Lucas até pede para ouvir as histórias!"
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse" size={20} />
                    ))}
                  </div>
                  <p className="text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                      alt="Felipe" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">Felipe</h4>
                      <p className="text-sm text-gray-600">pai da Maria, 8 anos</p>
                      <p className="text-xs text-blue-600 font-medium">Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4 text-base">
                    "O guia me fez repensar o quanto o celular estava roubando momentos importantes aqui em casa. Mudou nossa vida! A Maria agora prefere as histórias ao tablet."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse" size={20} />
                    ))}
                  </div>
                  <p className="text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                      alt="Carla" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-green-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">Carla Santos</h4>
                      <p className="text-sm text-gray-600">mãe do Pedro, 5 anos</p>
                      <p className="text-xs text-green-600 font-medium">Belo Horizonte, MG</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4 text-base">
                    "Incrível como as estratégias do guia funcionaram! Pedro reduziu o tempo de tela de 4 horas para apenas 1 hora por dia. E ainda consegue dormir mais cedo com os áudios relaxantes."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse" size={20} />
                    ))}
                  </div>
                  <p className="text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                      alt="Ricardo" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-orange-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">Ricardo Lima</h4>
                      <p className="text-sm text-gray-600">pai da Sofia, 7 anos</p>
                      <p className="text-xs text-orange-600 font-medium">Curitiba, PR</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4 text-base">
                    "Como pai solteiro, estava perdido com a rotina da Sofia. Este combo salvou nossas noites! Ela adora as histórias e agora temos um momento especial juntos todos os dias."
                  </blockquote>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current animate-pulse" size={20} />
                    ))}
                  </div>
                  <p className="text-xs text-green-600 font-semibold">✓ Compra verificada</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute top-20 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 animate-slide-up">
              Comece <span className="gradient-text animate-pulse">hoje</span> a mudar a rotina do seu filho
            </h2>
            
            <Card className="p-6 md:p-12 shadow-2xl mb-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white via-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left relative">
                    <div className="absolute -top-4 -left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                      60% OFF
                    </div>
                    <div className="text-lg text-gray-500 line-through mb-2">De R$ 49,90 por</div>
                    <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 animate-pulse-soft">R$ 19,90</div>
                    <div className="text-red-600 font-semibold text-lg bg-red-50 px-4 py-2 rounded-lg inline-block">
                      ⏰ Por tempo limitado!
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      💰 Economia de R$ 29,90
                    </div>
                  </div>
                  <div className="flex-1 max-w-md">
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 mb-4 animate-bounce-gentle">
                      <a href="#comprar">
                        <Heart className="mr-3 animate-pulse text-2xl" />
                        Quero esse combo agora!
                      </a>
                    </Button>
                    <div className="flex items-center justify-center mb-4 text-green-600 font-semibold">
                      <Check className="mr-2" size={20} />
                      Acesso instantâneo
                    </div>
                    <p className="text-sm text-gray-500">
                      <Lock className="inline mr-1" size={16} />
                      Pagamento 100% seguro • Site protegido com SSL
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="mr-2 text-green-600" size={20} />
                <span className="font-medium">Cartão de Crédito</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <QrCode className="mr-2 text-blue-600" size={20} />
                <span className="font-medium">PIX Instantâneo</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="mr-2 text-purple-600" size={20} />
                <span className="font-medium">Boleto Bancário</span>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              🛡️ <span className="text-primary-purple">Garantia</span> total
            </h2>
            
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 p-8 shadow-xl">
              <CardContent className="p-0">
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Se você não gostar do material por qualquer motivo, <strong>devolvemos seu dinheiro em até 7 dias</strong>. Sem perguntas, sem complicações.
                  </p>
                  <div className="flex items-center justify-center mt-6 text-green-600">
                    <Check className="text-2xl mr-2" />
                    <span className="font-semibold">Risco zero para você!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-soft-gray">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Dúvidas <span className="text-primary-purple">Frequentes</span>
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50">
                  Como recebo os materiais?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Após a confirmação do pagamento, você receberá um e-mail com todos os arquivos para download. O acesso é imediato e os materiais ficam disponíveis para sempre.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50">
                  Os áudios funcionam em celular?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sim! Você pode ouvir no celular, tablet, computador ou qualquer dispositivo. Os áudios estão em formato MP3, compatível com todos os aparelhos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50">
                  Posso pagar with PIX ou cartão?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sim! Aceitamos PIX (desconto de 10%), cartão de crédito (parcelamento em até 3x sem juros) e boleto bancário.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50">
                  Para que idade é indicado?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  O combo é ideal para crianças de 3 a 12 anos. As histórias são atemporais e o guia de tempo de tela serve para todas as idades dentro dessa faixa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50" id="comprar">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              🌙 Leve agora o combo completo por <span className="text-accent-coral">R$ 19,90</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Transforme as noites da sua família em momentos especiais de conexão e amor
            </p>
            
            <Card className="p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
              <CardContent className="p-0">
                <Button asChild size="lg" className="w-full bg-accent-coral hover:bg-pink-600 text-white rounded-full font-bold text-2xl py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-6">
                  <a href="LINK_DO_CHECKOUT">
                    <Heart className="mr-2" />
                    Quero transformar a rotina do meu filho!
                  </a>
                </Button>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="mr-2 text-green-600" size={16} />
                    Compra 100% Segura
                  </div>
                  <div className="flex items-center">
                    <Download className="mr-2 text-blue-600" size={16} />
                    Acesso Imediato
                  </div>
                  <div className="flex items-center">
                    <Undo className="mr-2 text-purple-600" size={16} />
                    7 Dias de Garantia
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-gray-500 mt-8">
              ⏰ Oferta por tempo limitado. Não perca essa oportunidade de criar uma rotina mais saudável para sua família!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Moon className="text-3xl text-primary-purple mr-3 animate-bounce-gentle" />
                <span className="text-xl font-bold">Combo Noites Felizes</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transformando as noites das famílias brasileiras com histórias, amor e conexão.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-primary-purple">O que você recebe</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center">
                  <Smartphone className="mr-2 w-4 h-4 text-purple-400" />
                  Guia do Tempo de Tela
                </li>
                <li className="flex items-center justify-center">
                  <BookOpen className="mr-2 w-4 h-4 text-green-400" />
                  10 Contos em PDF
                </li>
                <li className="flex items-center justify-center">
                  <Headphones className="mr-2 w-4 h-4 text-pink-400" />
                  10 Áudios Narrados
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-primary-purple">Garantias</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center md:justify-end">
                  <Shield className="mr-2 w-4 h-4 text-green-400" />
                  7 dias de garantia
                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Lock className="mr-2 w-4 h-4 text-blue-400" />
                  Pagamento seguro
                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Download className="mr-2 w-4 h-4 text-yellow-400" />
                  Acesso imediato
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Combo Noites Felizes. Todos os direitos reservados.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span>Pagamento 100% seguro</span>
              <span>•</span>
              <span>Suporte 24/7</span>
              <span>•</span>
              <span>Garantia total</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
