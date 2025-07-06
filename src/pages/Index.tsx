import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Shield, Bot, Users } from 'lucide-react';
import heroImage from '@/assets/dental-hero.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-medical-blue">Cabinet Dentaire Santé+</h1>
                <p className="text-sm text-muted-foreground">Soins dentaires modernes</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+32 2 123 45 67</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@sante-plus.be</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/5 to-medical-green/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-medical-blue leading-tight">
                  Bienvenue chez Cabinet Dentaire Santé+
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Une prise en charge rapide et intelligente grâce à nos assistants IA
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/intake')}
                  size="lg"
                  className="bg-medical-blue hover:bg-medical-blue/90 text-lg px-8 py-6 rounded-xl"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Commencer ma consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl border-medical-blue text-medical-blue hover:bg-medical-blue/5"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-medical-green" />
                  <span>Conforme RGPD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-medical-green" />
                  <span>Réponse rapide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-medical-green" />
                  <span>Équipe experte</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Cabinet dentaire moderne" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-medical-blue">Assistant IA</p>
                    <p className="text-sm text-muted-foreground">Analyse intelligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">
              Pourquoi choisir notre cabinet ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Notre approche moderne combine expertise humaine et intelligence artificielle 
              pour vous offrir les meilleurs soins dentaires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-medical-blue mb-2">
                  Assistant IA
                </h3>
                <p className="text-muted-foreground">
                  Notre assistant IA analyse votre demande et optimise votre prise en charge 
                  pour un traitement personnalisé.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-medical-green" />
                </div>
                <h3 className="text-xl font-semibold text-medical-blue mb-2">
                  Prise en charge rapide
                </h3>
                <p className="text-muted-foreground">
                  Réduisez vos temps d'attente grâce à notre système de triage intelligent 
                  qui priorise les urgences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-medical-blue mb-2">
                  Confidentialité assurée
                </h3>
                <p className="text-muted-foreground">
                  Vos données médicales sont protégées selon les normes RGPD les plus strictes 
                  pour votre tranquillité d'esprit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="font-bold text-medical-blue">Cabinet Dentaire Santé+</span>
              </div>
              <p className="text-muted-foreground">
                Des soins dentaires modernes avec l'aide de l'intelligence artificielle 
                pour votre santé bucco-dentaire optimale.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-medical-blue mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Rue de la Santé 123, 1000 Bruxelles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+32 2 123 45 67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@sante-plus.be</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-medical-blue mb-4">Horaires</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h00 - 14h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cabinet Dentaire Santé+. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;