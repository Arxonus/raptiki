import { GraduationCap, Users, Clock, Star, Phone } from "lucide-react";

const Lessons = () => {
  return (
    <section id="lessons" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="font-body text-primary font-semibold text-sm uppercase tracking-wider">
              Μάθετε να πλέκετε
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Δωρεάν Μαθήματα Πλεξίματος
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Στο κατάστημά μας προσφέρουμε <strong className="text-foreground">δωρεάν μαθήματα πλεξίματος</strong> κατόπιν 
              συνεννόησης. Είτε είστε αρχάριος είτε θέλετε να βελτιώσετε τις τεχνικές σας, 
              είμαστε εδώ για να σας βοηθήσουμε!
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Για Αρχάριους</p>
                  <p className="font-body text-sm text-muted-foreground">Βασικές τεχνικές πλεξίματος</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Μικρά Γκρουπ</p>
                  <p className="font-body text-sm text-muted-foreground">Προσωπική καθοδήγηση</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Ευέλικτο Ωράριο</p>
                  <p className="font-body text-sm text-muted-foreground">Κατόπιν συνεννόησης</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Δωρεάν</p>
                  <p className="font-body text-sm text-muted-foreground">Χωρίς καμία χρέωση</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2155004848"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Κλείστε ραντεβού
              </a>
              <a
                href="tel:6932247195"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-body font-semibold hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5" />
                693 224 7195
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/40 rounded-3xl p-8 md:p-12">
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Μάθετε να πλέκετε
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    Ανακαλύψτε τη χαρά του πλεξίματος με εξατομικευμένη καθοδήγηση
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-body text-sm font-medium text-foreground">✓ Βασικές πλέξεις</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-body text-sm font-medium text-foreground">✓ Τεχνικές για τσάντες</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-body text-sm font-medium text-foreground">✓ Κέντημα & διακόσμηση</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yarn-sage/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yarn-pink/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
