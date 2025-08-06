import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Moon, Heart, Smartphone, BookOpen, Headphones, Gift, User, Star, Shield, Check, Lock, CreditCard, QrCode, ChevronDown, Mail, Download, Undo } from "lucide-react";
import { useEffect } from "react";

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
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Moon className="text-2xl text-primary-purple" />
            <span className="text-xl font-semibold text-gray-800">Combo Noites Felizes</span>
          </div>
          <Button asChild className="bg-accent-coral hover:bg-pink-600 text-white rounded-full font-medium">
            <a href="#comprar">Comprar Agora</a>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                  📱 Diminua o tempo de tela e <span className="text-primary-purple">fortaleça o vínculo</span> com seu filho
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Descubra como criar uma rotina saudável com o <strong>Guia do Tempo de Tela</strong> + <strong>10 histórias clássicas infantis em PDF</strong> + <strong>áudios narrados para dormir</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-accent-coral hover:bg-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <a href="#comprar">
                      <Heart className="mr-2" />
                      Quero ajudar meu filho agora!
                    </a>
                  </Button>
                  <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500">
                    <Shield className="mr-2" />
                    Garantia de 7 dias
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Família lendo histórias antes de dormir" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary-yellow p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">R$ 19,90</div>
                    <div className="text-sm text-gray-600">Por tempo limitado!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Solution Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Seu filho vive no celular e tem <span className="text-accent-coral">dificuldade para dormir</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Você não está sozinho. Com tantas telas e estímulos, é cada vez mais difícil manter uma rotina equilibrada.
            </p>
            
            <Card className="p-8 shadow-xl mb-12">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 mb-6 font-medium">Este combo exclusivo ajuda pais a:</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <Smartphone className="text-4xl text-green-600 mb-4 mx-auto" size={48} />
                    <h3 className="font-semibold text-gray-800 mb-2">Reduzir o tempo de tela</h3>
                    <p className="text-sm text-gray-600">Com equilíbrio e estratégias práticas</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <BookOpen className="text-4xl text-blue-600 mb-4 mx-auto" size={48} />
                    <h3 className="font-semibold text-gray-800 mb-2">Criar momentos especiais</h3>
                    <p className="text-sm text-gray-600">Com histórias antes de dormir</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <Heart className="text-4xl text-purple-600 mb-4 mx-auto" size={48} />
                    <h3 className="font-semibold text-gray-800 mb-2">Fortalecer a conexão</h3>
                    <p className="text-sm text-gray-600">Entre pais e filhos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              O que você vai <span className="text-primary-purple">receber</span>:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="text-3xl text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📘 Guia do Tempo de Tela</h3>
                  <p className="text-gray-600 leading-relaxed">Estratégias práticas e eficazes para uma infância equilibrada, com dicas testadas por especialistas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-yellow-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="text-3xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📖 10 Contos clássicos em PDF</h3>
                  <p className="text-gray-600 leading-relaxed">Histórias atemporais para ler com seu filho e criar memórias afetivas que durarão para sempre</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
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
        <section className="py-16 px-4 bg-soft-gray">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Quem já usou, <span className="text-primary-purple">aprovou</span>!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="text-primary-purple" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Ana Paula</h4>
                      <p className="text-sm text-gray-600">mãe do Lucas, 6 anos</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                    "Depois que comecei a usar o combo, meu filho dorme muito mais rápido. Os áudios são mágicos! Agora temos uma rotina que funciona de verdade."
                  </blockquote>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Felipe</h4>
                      <p className="text-sm text-gray-600">pai da Maria, 8 anos</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                    "O guia me fez repensar o quanto o celular estava roubando momentos importantes aqui em casa. Mudou nossa vida!"
                  </blockquote>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Comece <span className="text-accent-coral">hoje</span> a mudar a rotina do seu filho
            </h2>
            
            <Card className="p-8 md:p-12 shadow-2xl mb-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-left">
                    <div className="text-sm text-gray-500 line-through mb-2">De R$ 49,90 por</div>
                    <div className="text-5xl font-bold text-accent-coral mb-2">R$ 19,90</div>
                    <div className="text-red-600 font-semibold">⏰ Por tempo limitado!</div>
                  </div>
                  <div className="flex-1 max-w-md">
                    <Button asChild size="lg" className="w-full bg-accent-coral hover:bg-pink-600 text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
                      <a href="#comprar">
                        <Heart className="mr-2" />
                        Quero esse combo agora!
                      </a>
                    </Button>
                    <p className="text-sm text-gray-500">
                      <Lock className="inline mr-1" size={16} />
                      Pagamento 100% seguro • Acesso imediato após a compra
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CreditCard className="mr-2 text-green-600" size={16} />
                Cartão de Crédito
              </div>
              <div className="flex items-center">
                <QrCode className="mr-2 text-blue-600" size={16} />
                PIX
              </div>
              <div className="flex items-center">
                <CreditCard className="mr-2 text-purple-600" size={16} />
                Boleto
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
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Moon className="text-3xl text-primary-purple mr-3" />
            <span className="text-2xl font-semibold">Combo Noites Felizes</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Ajudando famílias a criar momentos especiais e rotinas saudáveis
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:contato@combonoitesfelizes.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="mr-2 inline" size={16} />
              contato@combonoitesfelizes.com
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            © 2024 Combo Noites Felizes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
