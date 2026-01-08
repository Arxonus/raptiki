import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Έλα να πλέξουμε
            </h3>
            <p className="font-body text-background/70 text-sm">
              Είδη ραπτικής, νήματα και υλικά πλεξίματος στον Γέρακα. 
              Δωρεάν μαθήματα πλεξίματος.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors">
                  Αρχική
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-background transition-colors">
                  Προϊόντα
                </a>
              </li>
              <li>
                <a href="#lessons" className="text-background/70 hover:text-background transition-colors">
                  Μαθήματα
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-2 font-body text-sm text-background/70">
              <li>Αχαΐας & Ηρώων Πολυτεχνείου 6</li>
              <li>Τ.Κ. 15344, Γέρακας</li>
              <li>
                <a href="tel:2155004848" className="hover:text-background transition-colors">
                  Τηλ: 215 500 4848
                </a>
              </li>
              <li>
                <a href="tel:6932247195" className="hover:text-background transition-colors">
                  Κιν: 693 224 7195
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-background/60">
            © {currentYear} Έλα να πλέξουμε - Ελένη Λύτα. Όλα τα δικαιώματα κατοχυρωμένα.
          </p>
          <p className="font-body text-sm text-background/60 flex items-center gap-1">
            Φτιαγμένο με <Heart className="w-4 h-4 text-primary inline" /> στην Ελλάδα
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
