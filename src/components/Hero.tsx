import heroImage from "@/assets/hero-yarn.jpg";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Νήματα και υλικά πλεξίματος"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full mb-6 font-body">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Δωρεάν μαθήματα πλεξίματος</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Έλα να πλέξουμε
          </h1>
          
          <p className="font-display text-xl md:text-2xl text-primary font-medium mb-6">
            Είδη Ραπτικής & Νήματα
          </p>

          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Στο κατάστημά μας θα βρείτε μεγάλη ποικιλία σε νήματα, κλωστές, 
            βελόνες, υλικά για τσάντες και όλα τα απαραίτητα για τις χειροποίητες δημιουργίες σας.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground">Διεύθυνση</p>
                <p className="font-body text-sm text-muted-foreground">
                  Αχαΐας & Ηρώων Πολυτεχνείου 6<br />
                  Τ.Κ. 15344, Γέρακας
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground">Ωράριο</p>
                <p className="font-body text-sm text-muted-foreground">
                  Δευ-Παρ: 10:00-18:00<br />
                  Σάββατο: 10:00-14:00
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Επικοινωνήστε μαζί μας
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-card border border-border text-foreground px-8 py-4 rounded-lg font-body font-semibold hover:bg-muted transition-colors"
            >
              Δείτε τα προϊόντα μας
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
