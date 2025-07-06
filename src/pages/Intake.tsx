import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface IntakeFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  howDidYouHear: string;
  previousDentist: string;
  currentMedications: string;
  chiefComplaint: string;
  gdprConsent: boolean;
}

const Intake = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<IntakeFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    howDidYouHear: '',
    previousDentist: '',
    currentMedications: '',
    chiefComplaint: '',
    gdprConsent: false
  });

  const handleInputChange = (field: keyof IntakeFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Consentement requis",
        description: "Vous devez accepter le traitement de vos données personnelles.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email || !formData.phone || !formData.chiefComplaint) {
      toast({
        title: "Champs obligatoires",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // Mock API call to Abundly
      const response = await fetch('https://api.abundly.io/intake-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      toast({
        title: "Demande envoyée avec succès",
        description: "Votre demande a été transmise à notre assistant IA pour analyse."
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-medical-light flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-medical-blue">Demande transmise avec succès</CardTitle>
            <CardDescription className="text-lg">
              Votre demande a été transmise. Un assistant va l'analyser et vous contacter sous peu.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => navigate('/')} 
              variant="outline"
              className="mt-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-medical-light">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl font-bold text-medical-blue mb-2">
            Formulaire de consultation
          </h1>
          <p className="text-muted-foreground">
            Remplissez ce formulaire pour commencer votre consultation avec notre assistant IA
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>
              Toutes vos informations sont traitées de manière confidentielle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date de naissance</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="howDidYouHear">Comment avez-vous entendu parler de nous ?</Label>
                <Select onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Recherche Google</SelectItem>
                    <SelectItem value="social">Réseaux sociaux</SelectItem>
                    <SelectItem value="referral">Recommandation</SelectItem>
                    <SelectItem value="ad">Publicité</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousDentist">Dentiste précédent</Label>
                <Input
                  id="previousDentist"
                  value={formData.previousDentist}
                  onChange={(e) => handleInputChange('previousDentist', e.target.value)}
                  placeholder="Nom et adresse si applicable"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentMedications">Médicaments actuels</Label>
                <Textarea
                  id="currentMedications"
                  value={formData.currentMedications}
                  onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                  placeholder="Listez tous les médicaments que vous prenez actuellement"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="chiefComplaint">Motif principal de consultation *</Label>
                <Textarea
                  id="chiefComplaint"
                  value={formData.chiefComplaint}
                  onChange={(e) => handleInputChange('chiefComplaint', e.target.value)}
                  placeholder="Décrivez votre problème dentaire ou la raison de votre visite"
                  rows={4}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="gdprConsent"
                  checked={formData.gdprConsent}
                  onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
                />
                <Label htmlFor="gdprConsent" className="text-sm leading-5">
                  J'accepte que mes données personnelles soient traitées dans le cadre de ma demande de consultation, 
                  conformément au RGPD. Ces données seront utilisées uniquement pour mon suivi médical et ne seront 
                  pas partagées avec des tiers sans mon consentement.
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-medical-blue hover:bg-medical-blue/90" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer à notre assistant IA'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Intake;