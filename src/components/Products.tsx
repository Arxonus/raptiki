import { Scissors, Palette, ShoppingBag, Gift, Heart, Sparkles } from "lucide-react";

const products = [
  {
    icon: Palette,
    title: "Νήματα & Κλωστές",
    description: "Μεγάλη ποικιλία σε νήματα, πολλά σχέδια & χρώματα, βρεφικά και παιδικά νήματα",
    items: ["Νήματα πλεξίματος", "Κλωστές κεντήματος", "Βρεφικά νήματα", "Χρωματιστά νήματα"],
  },
  {
    icon: Scissors,
    title: "Είδη Ραπτικής",
    description: "Όλα τα απαραίτητα εργαλεία και υλικά για τις ραπτικές σας ανάγκες",
    items: ["Βελόνες", "Ψαλίδια", "Ξηλωτήρια", "Μασούρια Singer", "Φόδρα & Τούλι"],
  },
  {
    icon: Heart,
    title: "Κεντήματα",
    description: "Υλικά και σχέδια για κέντημα, από αρχάριους μέχρι προχωρημένους",
    items: ["Κεντήματα σταμπωτά", "Τελάρα κεντήματος", "Υφάσματα εταμίν", "Παιδικά κεντήματα"],
  },
  {
    icon: ShoppingBag,
    title: "Υλικά για Τσάντες",
    description: "Αξεσουάρ και υλικά για χειροποίητες τσάντες",
    items: ["Αλυσίδες μεταλλικές", "Πάτοι τσάντας", "Χερούλια", "Μαγνητικά κουμπώματα"],
  },
  {
    icon: Sparkles,
    title: "Προϊόντα Prym",
    description: "Επίσημος συνεργάτης προϊόντων Prym",
    items: ["Βελόνες Prym", "Βελονάκια", "Αξεσουάρ πλεξίματος", "Θερμοκολλητικά"],
  },
  {
    icon: Gift,
    title: "Είδη Γάμου & Βάπτισης",
    description: "Υλικά για μπομπονιέρες και διακοσμητικές δημιουργίες",
    items: ["Υλικά μπομπονιέρας", "Δαντέλες", "Τρέσσες", "Διακοσμητικά"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary font-semibold text-sm uppercase tracking-wider">
            Τα προϊόντα μας
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Ό,τι χρειάζεστε για τις δημιουργίες σας
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Μεγάλη ποικιλία σε είδη ραπτικής, νήματα, κλωστές και αξεσουάρ 
            για κάθε χειροποίητη δημιουργία.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <product.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 text-sm">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="font-body text-sm text-foreground/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Products List */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Επίσης θα βρείτε
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Κουμπιά", "Λάστιχα", "Τρέσσες κουρτίνας", "Μπαλώματα", 
              "Τρουκς", "Βαφές ρούχων", "Κόλλες υφασμάτων", "Προεκτάσεις σουτιέν",
              "Μπανέλες", "Θερμοκολλητική αράχνη", "Υλικά μακραμέ", "Κρίκοι τσάντας"
            ].map((item, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground px-4 py-2 rounded-full font-body text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
