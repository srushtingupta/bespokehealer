export interface TarotCard {
  id: string;
  cardIndexLabel: string;
  name: string;
  romanNumeral: string;
  archetype: string;
  reflection: string;
  actionGuidance: string;
  element: string;
  symbol: string;
  cardImage: string;
}

export const tarotExperienceCards: TarotCard[] = [
  // --- USER'S 3 PRIMARY REVEAL CARDS ---
  {
    id: "card-1-six-of-pentacles",
    cardIndexLabel: "Card 1",
    name: "Six of Pentacles",
    romanNumeral: "VI",
    archetype: "Circumstances Will Improve",
    reflection: "This card is a welcome sign that your circumstances will certainly improve.",
    actionGuidance: "Stay open to receiving blessings, help, and the harmonious balance returning to your life.",
    element: "Earth • Pentacles",
    symbol: "✦",
    cardImage: "/tarot-six-of-pentacles.jpg"
  },
  {
    id: "card-2-five-of-wands",
    cardIndexLabel: "Card 2",
    name: "5 of Wands",
    romanNumeral: "V",
    archetype: "Hold Your Position & Succeed",
    reflection: "5 of Wands — Misunderstandings abound, particularly in work matters. You are surrounded by people with strong opinions but hold your position & you will succeed.",
    actionGuidance: "Stand firm in your truth with grace. Channel chaotic competitive energy into creative triumph.",
    element: "Fire • Wands",
    symbol: "⚡",
    cardImage: "/tarot-five-of-wands.jpg"
  },
  {
    id: "card-3-the-sun",
    cardIndexLabel: "Card 3",
    name: "The Sun",
    romanNumeral: "XIX",
    archetype: "Complete Life Improvement",
    reflection: "If you have had a challenging time, the Sun shows that every aspect of your life will improve.",
    actionGuidance: "Celebrate your resilience and bask in renewed clarity, warmth, and vitality.",
    element: "Fire • Solar",
    symbol: "☼",
    cardImage: "/tarot-the-sun.jpg"
  }
];
