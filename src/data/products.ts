export const WHATSAPP_NUMBER = "5511983795417";

export function getWhatsAppLink(item?: string, weight?: string, price?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (item && weight && price) {
    const msg = encodeURIComponent(
      `Olá, Maysa! Quero encomendar: ${item} (${weight}). Valor: R$${price}. Minha data/horário de retirada: ____.`
    );
    return `${base}?text=${msg}`;
  }
  return `${base}?text=${encodeURIComponent("Olá, Maysa! Gostaria de fazer uma encomenda de Páscoa.")}`;
}

export interface Product {
  name: string;
  weight: string;
  price: string;
  description: string;
  note?: string;
  flavors?: string;
  variants?: { weight: string; price: string }[];
}

export const lembrancinhas: Product[] = [
  {
    name: "Cenoura Recheada",
    weight: "150g",
    price: "35",
    description: "Chocolate em formato de cenoura recheada de ninho com brigadeiro.",
  },
  {
    name: "Mini Ovo",
    weight: "80g",
    price: "17",
    description: "Mini ovo com 2 bandas recheadas. Sabor: Brigadeiro.",
    note: "Não alteramos o sabor do recheio.",
  },
  {
    name: "Mini Ovo",
    weight: "130g",
    price: "25",
    description: "Mini ovo com 2 bandas recheadas.",
    flavors: "Brigadeiro, ninho, prestígio e ninho com nutella.",
    note: "Somente 1 opção de recheio por ovo.",
  },
  {
    name: "Casinha",
    weight: "200g",
    price: "40",
    description: "Caixa com 1 ovo de colher recheado.",
    flavors: "Brigadeiro · Brigadeiro com KitKat · Casadinho · Ninho com Nutella · Ferrero.",
    note: "Casca branca: +R$8,00 por casca.",
  },
  {
    name: "Trio de 50g",
    weight: "200g",
    price: "40",
    description: "3 mini ovos de colher (referência casca 50g).",
    note: "Tradicionais R$40 / Premium R$45. Casca branca: +R$8,00 por casca.",
  },
  {
    name: "Kit Degustação",
    weight: "200g",
    price: "45",
    description: "6 mini ovos recheados.",
    flavors: "Brigadeiro · Ninho · Prestígio · Maracujá · Kinder · Ninho com Nutella.",
  },
];

export const ovosTradicionais: Product[] = [
  {
    name: "Ao Leite",
    weight: "250g / 350g / 500g",
    price: "52",
    description: "Acompanha bombons sortidos. Adicionais (amendoim/flocos) solicitar no pedido.",
    variants: [
      { weight: "250g", price: "52" },
      { weight: "350g", price: "67" },
      { weight: "500g", price: "90" },
    ],
  },
  {
    name: "Branco",
    weight: "250g / 350g / 500g",
    price: "62",
    description: "Acompanha bombons sortidos. Adicionais (amendoim/flocos) solicitar no pedido.",
    variants: [
      { weight: "250g", price: "62" },
      { weight: "350g", price: "79" },
      { weight: "500g", price: "100" },
    ],
  },
  {
    name: "Oreo com Nutella",
    weight: "400g",
    price: "80",
    description: "Casca 250g, peso final 400g.",
  },
];

export const observacoes = [
  "Trabalhamos com chocolate NOBRE.",
  "Retiradas das 09h às 20h.",
  "Pagamentos via Pix.",
  "Encomendas pelo WhatsApp: (11) 98379-5417.",
];
