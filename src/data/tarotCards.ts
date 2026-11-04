export interface TarotCard {
  id: string;
  name: string;
  romanNumeral: string;
  archetype: string;
  reflection: string;
  actionGuidance: string;
  element: string;
  symbol: string;
  cardImage: string;
}

export const tarotDeck: TarotCard[] = [
  {
    id: "the-star",
    name: "The Star",
    romanNumeral: "XVII",
    archetype: "Hope, Faith & Divine Renewal",
    reflection: "Star offers hope & guidance so have faith that your luck is about to change for better",
    actionGuidance: "Trust that the universe is guiding your path. Renew your faith, as fortunate shifts and brighter opportunities are dawning.",
    element: "Air • Major Arcana",
    symbol: "★",
    cardImage: "/tarot-the-star.jpg"
  },
  {
    id: "strength",
    name: "Strength",
    romanNumeral: "VIII",
    archetype: "Inner Courage & Determination",
    reflection: "Courage, determination & patience are needed now .",
    actionGuidance: "Lead with gentle patience and steadfast conviction. Quiet inner resilience will triumph over any obstacle.",
    element: "Fire • Major Arcana",
    symbol: "∞",
    cardImage: "/tarot-strength.jpg"
  },
  {
    id: "two-of-wands",
    name: "2 of Wands",
    romanNumeral: "II",
    archetype: "Plans, Partnership & Influence",
    reflection: "2 of wands-Plans, partnership & influence",
    actionGuidance: "Look ahead with confidence. Form strategic partnerships and lay clear foundations to expand your sphere of influence.",
    element: "Fire • Wands",
    symbol: "✦",
    cardImage: "/tarot-two-of-wands.jpg"
  },
  {
    id: "the-hanged-man",
    name: "The Hanged Man",
    romanNumeral: "XII",
    archetype: "Patience, Stillness & Ambition",
    reflection: "Time may be slow, use this time to develop perspective on your work & your ambitions.",
    actionGuidance: "Embrace the pause. When progress slows down, use the space to re-align your vision and discover higher clarity on your goals.",
    element: "Water • Major Arcana",
    symbol: "☼",
    cardImage: "/tarot-the-hanged-man.jpg"
  },
  {
    id: "ace-of-swords",
    name: "Ace of Swords",
    romanNumeral: "Ace",
    archetype: "Mental Agility & Assertiveness",
    reflection: "Ace of Swords -Mental agility & assertiveness will bring success.",
    actionGuidance: "Cut through ambiguity with intellectual focus and assertive communication. Decisive clarity brings total breakthrough.",
    element: "Air • Swords",
    symbol: "🗡",
    cardImage: "/tarot-ace-of-swords.jpg"
  },
  {
    id: "six-of-pentacles",
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
    id: "five-of-wands",
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
    id: "the-sun",
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

// Alias for backwards compatibility
export const tarotExperienceCards = tarotDeck;
