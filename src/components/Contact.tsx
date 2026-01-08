import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary font-semibold text-sm uppercase tracking-wider">
            Επικοινωνία
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Ελάτε να μας γνωρίσετε
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Βρισκόμαστε στον Γέρακα και εξυπηρετούμε όλη την Ανατολική Αττική
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Διεύθυνση
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Αχαΐας & Ηρώων Πολυτεχνείου 6<br />
                    Τ.Κ. 15344, Γέρακας
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Τηλέφωνα
                  </h3>
                  <div className="space-y-1">
                    <a href="tel:2155004848" className="font-body text-muted-foreground hover:text-primary transition-colors block">
                      Τηλ: 215 500 4848
                    </a>
                    <a href="tel:6932247195" className="font-body text-muted-foreground hover:text-primary transition-colors block">
                      Κιν: 693 224 7195
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <a href="mailto:hvougiouka@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    hvougiouka@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Ωράριο Λειτουργίας
                  </h3>
                  <div className="space-y-1 font-body text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Δευτέρα - Παρασκευή</span>
                      <span className="font-medium text-foreground">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Σάββατο</span>
                      <span className="font-medium text-foreground">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Κυριακή</span>
                      <span className="text-muted-foreground">Κλειστά</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-auto">
            <div className="w-full h-full bg-card border border-border rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.2!2d23.8585!3d38.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1983d1e!2z!5e0!3m2!1sel!2sgr!4v1704700000000!5m2!1sel!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης - Έλα να πλέξουμε"
              />
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 bg-muted/50 rounded-xl p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            Περιοχές που εξυπηρετούμε
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Γέρακας", "Παλλήνη", "Γλυκά Νερά", "Κάντζα", "Παιανία", "Σπάτα", "Ανατολική Αττική"].map((area, index) => (
              <span
                key={index}
                className="bg-card border border-border text-foreground px-4 py-2 rounded-full font-body text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
