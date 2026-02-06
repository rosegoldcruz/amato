"use client";

import { FadeImage } from "@/components/fade-image";

const products = [
  {
    id: 1,
    name: "Spaghetti No.4 — Pack of 5",
    description: "Durum wheat semolina pasta from Salerno, Italy",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.4%20Spaghetti%20-%20pack%20of%205-%20front.png",
    href: "https://www.amazon.com/dp/B0DDG5FVXP",
  },
  {
    id: 2,
    name: "Rigatoni No.18 — Pack of 5",
    description: "Authentic Italian rigatoni, perfect for hearty sauces",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-NO.18%20Rigatoni%20-%20Pack%20of%205.png",
    href: "https://www.amazon.com/dp/B0DDG5KCRB",
  },
  {
    id: 3,
    name: "Penne Rigate No.80 — Pack of 5",
    description: "Classic penne rigate, ideal for baked dishes",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.80%20Penne%20Rigate.png",
    href: "https://www.amazon.com/dp/B0DDG6FCT7",
  },
  {
    id: 4,
    name: "Fusilli No.114 — Pack of 5",
    description: "Spiral pasta that holds sauce in every twist",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.114%20Fusilli%20-%20(Pack%20of%205%2C%205lb%20total%20weight)%20-%20pasta%20di%20semola%20di%20grano%20duro%20-%20durum%20wheat%20semolina%20pasta%20macaroni%20product%20-%20Authentic%20Italain%20Pasta%20-%20PRODUCT%20OF%20ITALY.png",
    href: "https://www.amazon.com/dp/B0DM7M4NWB",
  },
  {
    id: 5,
    name: "Fettuccine No.20 — Pack of 5",
    description: "Wide ribbon pasta, perfect with creamy sauces",
    price: "$20.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.20%20Fettuccine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DDFYXLJY",
  },
  {
    id: 6,
    name: "Linguine — Pack of 5",
    description: "Flat pasta from Salerno, pairs with seafood & pesto",
    price: "$20.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Linguine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B09DRK1RHY",
  },
  {
    id: 7,
    name: "Spaghetti 10 LB Bag",
    description: "Bulk restaurant-grade spaghetti",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Spaghetti%2010%20LB%20Bag%20-%20front.png",
    href: "https://www.amazon.com/dp/B0DFL1YR5L",
  },
  {
    id: 8,
    name: "Linguine 10 LB Bag",
    description: "Bulk restaurant-grade linguine",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Linguine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DFKWRQ5V",
  },
  {
    id: 9,
    name: "Fettuccine 10 LB Bag",
    description: "Bulk restaurant-grade fettuccine",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.20%20Fettuccine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DFKPY42W",
  },
  {
    id: 10,
    name: "Penne Rigate 10 LB Bag",
    description: "Bulk restaurant-grade penne rigate",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.80%20Penne%20Rigate%2010%20LB%20Bag-back.png",
    href: "https://www.amazon.com/dp/B0DFKRKWZK",
  },
  {
    id: 11,
    name: "Hot Giardiniera 8oz",
    description: "Chicago Style spicy Italian relish",
    price: "$12.99",
    image: "/jp%20assets/Chicago%20Style%20Hot%20Giardiniera%2C%208oz.png",
    href: "https://www.amazon.com/dp/B0DJDY6MZ1",
  },
  {
    id: 12,
    name: "Hot Giardiniera 16oz",
    description: "Chicago Style spicy Italian relish",
    price: "$16.99",
    image: "/jp%20assets/Chicago-Style%20Hot%20Giardiniera-16oz.png",
    href: "https://www.amazon.com/dp/B0DJDZ5P2C",
  },
  {
    id: 13,
    name: "Mild Giardiniera 8oz",
    description: "Chicago Style mild Italian relish",
    price: "$12.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%208oz.png",
    href: "https://www.amazon.com/dp/B0DGS3S5FQ",
  },
  {
    id: 14,
    name: "Mild Giardiniera 16oz",
    description: "Chicago Style mild Italian relish",
    price: "$16.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%2016oz.png",
    href: "https://www.amazon.com/dp/B0DJDZNXFY",
  },
  {
    id: 15,
    name: "Mild Giardiniera 1 Gallon",
    description: "Foodservice-sized for Italian beef & more",
    price: "$34.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%201%20Gallon.png",
    href: "https://www.amazon.com/dp/B0DJDZPLS7",
  },
  {
    id: 16,
    name: "Mild Giardiniera — 100 Count Packets",
    description: "1.5oz individual packets, perfect for catering",
    price: "$134.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardinier-100%20Count-1.5oz%20Pouch%20Packets.png",
    href: "https://www.amazon.com/dp/B0DJF1WHJ8",
  },
  {
    id: 17,
    name: "Plain Pizza Sauce 106oz",
    description: "Chicago Style pizza sauce for authentic pies",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Plain%20Pizza%20Sauce%2C%20106oz.png",
    href: "https://www.amazon.com/dp/B0DGRZ3SNH",
  },
  {
    id: 18,
    name: "Pizza Sauce With Basil 106oz",
    description: "Chicago Style pizza sauce with fresh basil",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Pizza%20Sauce%20With%20Basil%2C%20106oz.png",
    href: "https://www.amazon.com/dp/B0DM76L3PK",
  },
  {
    id: 19,
    name: "Crushed Tomatoes 102oz",
    description: "Chicago Style crushed tomatoes for sauces",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Crushed%20Tomatoes%2C%20102oz.png",
    href: "https://www.amazon.com/dp/B0DM7BPXJ1",
  },
  {
    id: 20,
    name: "Ground Peeled Tomatoes 105oz",
    description: "Chicago Style ground peeled tomatoes",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Ground%20Peeled%20Tomatoes%2C%20105oz.png",
    href: "https://www.amazon.com/dp/B0DM79SHL2",
  },
  {
    id: 21,
    name: "Tomato Paste 111oz",
    description: "Chicago Style concentrated tomato paste",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Tomato%20Paste%2C%20111oz.png",
    href: "https://www.amazon.com/dp/B0DM7D893D",
  },
  {
    id: 22,
    name: "Tomato Puree Extra Heavy 107oz",
    description: "Chicago Style extra heavy tomato puree",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Tomato%20Puree%20Extra%20Heavy%2C%20107oz.png",
    href: "https://www.amazon.com/dp/B0DM76HRWC",
  },
  {
    id: 23,
    name: "Mushrooms Pieces & Stems 68oz",
    description: "Chicago Style canned mushrooms",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Mushrooms%20Pieces%20%26%20Stems%2C%2068oz.png",
    href: "https://www.amazon.com/dp/B0DM7DGN5T",
  },
  {
    id: 24,
    name: "Green Pepper Strips 102oz",
    description: "Chicago Style green pepper strips",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Green%20Pepper%20Strips%2C%20102oz.png",
    href: "https://www.amazon.com/dp/B0DM7FDN36",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Shop Our Products
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[75vw] snap-center"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {product.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {product.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
