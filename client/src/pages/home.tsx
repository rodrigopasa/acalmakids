import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Moon, Heart, Smartphone, BookOpen, Headphones, Gift, User, Star, Shield, Check, Lock, CreditCard, QrCode, ChevronDown, Mail, Download, Undo, Eye } from "lucide-react";
import { useEffect } from "react";

// Caminhos originais dos assets mantidos conforme solicitado
import childImage from "@assets/ChatGPT Image 7 de ago. de 2025, 12_46_31_1754586753926.png";
import guiaTempoTelaImage from "@assets/54ee77c2baada501_1754587158205.png";
import contosClassicosImage from "@assets/4aa56f11d45_1754587158206.png";
import guiaTempoTelaCard from "@assets/54ee77c2baada501_1754588200414.png";
import contosClassicosCard from "@assets/4aa56f11d45_1754588200415.png";
import acalmaKidsLogo from "@assets/ChatGPT Image 7 de ago. de 2025, 14_41_31_1754588504433.png";
import audioIcon from "@assets/unnamed_1754588765007.png";


export default function Home() {
  useEffect(() => {
    // Scroll suave para links âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-h-[70px]">
          <div className="flex items-center">
            <img src={acalmaKidsLogo} alt="Acalma Kids" className="h-14 sm:h-16 w-auto" />
          </div>
          <Button asChild className="bg-gradient-to-r from-blue-400 to-orange-400 hover:from-blue-500 hover:to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            <a href="#comprar" className="flex items-center">
              <Heart className="mr-2 w-5 h-5" />
              <span className="hidden sm:inline">Comprar Agora</span>
              <span className="sm:hidden">Comprar</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {/* Seção Hero */}
        <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                  📱Seu Filho, Seja um Bebê ou uma Criança, Já Parece <span className="gradient-text">Hipnotizado Pelas Telas?</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Descubra como criar uma rotina saudável com o <strong>Guia do Tempo de Tela</strong> + <strong>10 histórias clássicas infantis em PDF</strong> + <strong>áudios narrados para dormir</strong>
                </p>
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-soft px-8 py-4">
                    <a href="#comprar" className="flex items-center justify-center">
                      <Heart className="mr-3 w-6 h-6 animate-bounce-gentle" />
                      <span className="text-base md:text-lg">QUERO AJUDAR MEU FILHO AGORA</span>
                    </a>
                  </Button>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 text-sm">
                    <div className="flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                      <Shield className="mr-2 w-5 h-5 text-green-600" />
                      ✅ Garantia de 7 dias
                    </div>
                    <div className="flex items-center justify-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold text-base">
                      <CreditCard className="mr-2 w-5 h-5 text-orange-600" />
                      � Apenas R$ 19,90 – Por tempo limitado!
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
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-3 md:p-4 rounded-2xl shadow-lg animate-bounce-gentle">
                    <div className="text-center">
                        <div className="text-lg md:text-2xl font-bold text-gray-800">R$ 19,90</div>
                        <div className="text-xs md:text-sm text-gray-700 font-medium">Por tempo limitado!</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Prévia dos PDFs */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                <span className="gradient-text">Veja uma prévia</span> do conteúdo que você vai receber
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore algumas páginas dos nossos materiais exclusivos e veja a qualidade do conteúdo que preparamos para transformar a rotina da sua família.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Card Contos Clássicos */}
              <Card className="w-full bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">10 Contos Clássicos</h3>
                    <p className="text-sm text-gray-600">Histórias atemporais para criar momentos especiais com seu filho.</p>
                  </div>
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <iframe
                      src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://dimensaonerd.com.br/wp-content/uploads/2025/08/Copia-de-Copia-de-ebook-Desafiando-o-digitalDocumento-A4.pdf"
                      className="w-full h-full border-0"
                      title="Prévia - 10 Contos Clássicos"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Card Guia do Tempo de Tela */}
              <Card className="w-full bg-gradient-to-br from-white to-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Guia do Tempo de Tela</h3>
                    <p className="text-sm text-gray-600">Estratégias práticas para uma infância equilibrada na era digital.</p>
                  </div>
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <iframe
                      src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://dimensaonerd.com.br/wp-content/uploads/2025/08/Previa-Guia-de-Tela.pdf"
                      className="w-full h-full border-0"
                      title="Prévia - Guia do Tempo de Tela"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Seção de Prévia dos Áudios */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto max-w-4xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    <span className="gradient-text">Ouça uma prévia</span> dos áudios narrados
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Histórias clássicas narradas com carinho para criar momentos especiais na hora de dormir
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                    <Card className="bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center">
                                <img src={audioIcon} alt="Ícone de áudio" className="w-16 h-16 mb-4" />
                                <h4 className="font-bold text-gray-800 mb-3">Os Três Porquinhos</h4>
                                <audio controls className="w-full">
                                    <source src="/conto01.mp3" type="audio/mpeg" />
                                    Seu navegador não suporta o elemento de áudio.
                                </audio>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center">
                                <img src={audioIcon} alt="Ícone de áudio" className="w-16 h-16 mb-4" />
                                <h4 className="font-bold text-gray-800 mb-3">Chapeuzinho Vermelho</h4>
                                <audio controls className="w-full">
                                    <source src="/conto02.mp3" type="audio/mpeg" />
                                    Seu navegador não suporta o elemento de áudio.
                                </audio>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <p className="text-sm text-gray-500 mb-8">
                    ✨ + 8 histórias completas disponíveis após a compra
                </p>

                <Button asChild className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white rounded-full font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                    <a href="#comprar">
                        <Heart className="mr-2 w-5 h-5" />
                        Quero o conteúdo completo agora!
                    </a>
                </Button>
            </div>
        </section>

        {/* Seção Problema/Solução */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-5xl text-center">
            <img
              src="/crianca-celular.jpg"
              alt="Criança preocupada olhando para o celular"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Seu filho vive no celular e tem <span className="gradient-text">dificuldade para dormir?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Você não está sozinho. Com tantas telas e estímulos, é cada vez mais difícil manter uma rotina equilibrada.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Reduzir o tempo de tela</h3>
                <p className="text-gray-600">Com equilíbrio e estratégias práticas que realmente funcionam.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Criar momentos especiais</h3>
                <p className="text-gray-600">Com histórias mágicas antes de dormir que seu filho vai amar.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-purple-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Fortalecer a conexão</h3>
                <p className="text-gray-600">Entre pais e filhos através de momentos únicos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção O que você vai receber */}
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              O que você vai <span className="text-primary-purple">receber</span>:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 text-center p-6">
                <img src={guiaTempoTelaCard} alt="Guia do Tempo de Tela" className="w-full h-48 object-contain mb-6" />
                <Smartphone className="text-3xl text-primary-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">📘 Guia do Tempo de Tela</h3>
                <p className="text-gray-600">Estratégias práticas e eficazes para uma infância equilibrada.</p>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-yellow-50 text-center p-6">
                <img src={contosClassicosCard} alt="10 Contos Clássicos" className="w-full h-48 object-contain mb-6" />
                <BookOpen className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">📖 10 Contos clássicos em PDF</h3>
                <p className="text-gray-600">Histórias atemporais para ler com seu filho.</p>
              </Card>
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 text-center p-6">
                <img src={audioIcon} alt="Áudios Narrados" className="w-full h-48 object-contain mb-6" />
                <Headphones className="text-3xl text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">🎧 10 Áudios narrados</h3>
                <p className="text-gray-600">Prontos para escutar na hora de dormir.</p>
              </Card>
            </div>
             <Card className="mt-12 bg-gradient-to-r from-yellow-100 to-green-100 p-8 text-center shadow-xl">
                <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <Gift className="mr-2 inline text-yellow-600" />
                        Bônus Exclusivo!
                    </h3>
                    <p className="text-lg text-gray-700">
                        <strong>Dicas de como contar histórias que encantam</strong> - Material complementar gratuito para você se tornar o melhor contador de histórias para seu filho!
                    </p>
                </CardContent>
            </Card>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Quem já usou, <span className="gradient-text">aprovou!</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl border-4 border-purple-200">AP</div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">Ana Paula</h4>
                                    <p className="text-sm text-gray-600">mãe do Lucas, 6 anos</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-700 italic">
                                "Depois que comecei a usar o combo, meu filho dorme muito mais rápido. Os áudios são mágicos!"
                            </blockquote>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl border-4 border-blue-200">FE</div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">Felipe</h4>
                                    <p className="text-sm text-gray-600">pai da Maria, 8 anos</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-700 italic">
                                "O guia me fez repensar o quanto o celular estava roubando momentos importantes. Mudou nossa vida!"
                            </blockquote>
                             <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Seção CTA Final */}
        <section id="comprar" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comece <span className="gradient-text animate-pulse">hoje</span> a mudar a rotina do seu filho
            </h2>
            <Card className="p-8 shadow-2xl mb-8 bg-white/80 backdrop-blur-sm">
                <div className="text-lg text-gray-500 line-through">De R$ 49,90 por</div>
                <div className="text-5xl sm:text-6xl font-bold gradient-text my-2">R$ 19,90</div>
                <p className="text-red-600 font-semibold mb-6">⏰ Por tempo limitado!</p>
                <Button asChild size="lg" className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:opacity-90 text-white rounded-full font-bold text-xl shadow-lg transition-all duration-300 py-4">
                    <a href="https://pay.hotmart.com/E101242545F?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                        <Heart className="mr-3 w-6 h-6" />
                        Quero esse combo agora!
                    </a>
                </Button>
            </Card>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
                <div className="flex items-center"><Lock className="mr-1.5 w-4 h-4 text-green-600" />Pagamento 100% seguro</div>
                <div className="flex items-center"><Download className="mr-1.5 w-4 h-4 text-blue-600" />Acesso imediato</div>
                <div className="flex items-center"><Undo className="mr-1.5 w-4 h-4 text-purple-600" />7 Dias de Garantia</div>
            </div>
          </div>
        </section>

        {/* Seção de FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Dúvidas <span className="text-primary-purple">Frequentes</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800">Como recebo os materiais?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Após a confirmação do pagamento, você receberá um e-mail com todos os arquivos para download. O acesso é imediato e os materiais ficam disponíveis para sempre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800">Os áudios funcionam em celular?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Sim! Você pode ouvir no celular, tablet, computador ou qualquer dispositivo. Os áudios estão em formato MP3, compatível com todos os aparelhos.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800">Posso pagar com PIX ou cartão?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Sim! Aceitamos PIX, cartão de crédito e boleto bancário.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800">Para que idade é indicado?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  O combo é ideal para crianças de 3 a 12 anos. As histórias são atemporais e o guia de tempo de tela serve para todas as idades dentro dessa faixa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
                    🌙 Leve agora o combo completo por <span className="text-accent-coral">R$ 19,90</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                    Transforme as noites da sua família em momentos especiais de conexão e amor
                </p>
                <Card className="p-8 md:p-12 shadow-2xl max-w-2xl mx-auto bg-white/50">
                    <CardContent className="p-0">
                        <Button asChild size="lg" className="w-full bg-accent-coral hover:bg-pink-600 text-white rounded-full font-bold text-2xl py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-6">
                            <a href="https://pay.hotmart.com/E101242545F?checkoutMode=10" target="_blank" rel="noopener noreferrer">
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
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center mb-4">
                <Moon className="text-3xl text-primary-purple mr-3" />
                <span className="text-xl font-bold">Combo Noites Felizes</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                Transformando as noites das famílias brasileiras com histórias, amor e conexão.
            </p>
            <div className="border-t border-gray-700 pt-8 mt-8 text-center">
                <p className="text-gray-400 mb-4">
                    © 2025 Combo Noites Felizes. Todos os direitos reservados.
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
�
