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
    id: "king-of-wands",
    name: "King of Wands",
    romanNumeral: "King",
    archetype: "Entrepreneurial Spirit & Leadership",
    reflection: "King of wands - summon your entrepreneurial spirit,make a plan & what you propose will be well received",
    actionGuidance: "Step boldly into visionary leadership. Formulate your plan and lead with passion.",
    element: "Fire • Wands",
    symbol: "⚡",
    cardImage: "/tarot-king-of-wands.jpg"
  },
  {
    id: "two-of-cups",
    name: "2 of Cups",
    romanNumeral: "II",
    archetype: "New Romance & True Commitment",
    reflection: "2 of cups - new romance coming your way with a deeper sense of commitment",
    actionGuidance: "Embrace the reciprocal love and heartfelt understanding blooming in your life.",
    element: "Water • Cups",
    symbol: "♡",
    cardImage: "/tarot-two-of-cups.jpg"
  },
  {
    id: "the-fool",
    name: "The Fool",
    romanNumeral: "0",
    archetype: "Leap of Faith & Infinite Potential",
    reflection: "The Fool - Take the leap of faith",
    actionGuidance: "Trust the beginning of a fresh journey. Step forward fearlessly with an open heart.",
    element: "Air • Major Arcana",
    symbol: "✦",
    cardImage: "/tarot-the-fool.jpg"
  },
  {
    id: "four-of-cups",
    name: "4 of Cups",
    romanNumeral: "IV",
    archetype: "Emotional Healing & Inner Clarity",
    reflection: "4 of cups - you may think you're ready for love, but there may be some past issues still to heal.",
    actionGuidance: "Allow yourself the gentleness to heal past wounds before opening up to new beginnings.",
    element: "Water • Cups",
    symbol: "☾",
    cardImage: "/tarot-four-of-cups.jpg"
  },
  {
    id: "ten-of-cups",
    name: "10 of Cups",
    romanNumeral: "X",
    archetype: "Prosperity, Joy & Contentment",
    reflection: "10 of cups - Prosperity,joy, family & contentment",
    actionGuidance: "Celebrate the love, harmony, and blessings surrounding your home and relationships.",
    element: "Water • Cups",
    symbol: "✦",
    cardImage: "/tarot-ten-of-cups.jpg"
  },
  {
    id: "the-lovers",
    name: "The Lovers",
    romanNumeral: "VI",
    archetype: "Positive Influence & True Love",
    reflection: "The person coming Into your orbit now has a positive influence & offers true love - provided you follow the guidance of your heart",
    actionGuidance: "Open your heart to genuine connection and follow your intuition with authenticity.",
    element: "Air • Major Arcana",
    symbol: "♡",
    cardImage: "/tarot-the-lovers.jpg"
  },
  {
    id: "justice",
    name: "Justice",
    romanNumeral: "XI",
    archetype: "Truth, Balance & Fairness",
    reflection: "This is a time when past errors / imbalances can be redressed.",
    actionGuidance: "Fairness and balance will prevail. Trust the karmic equilibrium aligning in your life.",
    element: "Air • Major Arcana",
    symbol: "⚖",
    cardImage: "/tarot-justice.jpg"
  },
  {
    id: "queen-of-pentacles",
    name: "Queen of Pentacles",
    romanNumeral: "Queen",
    archetype: "Good Health, Fertility & Abundance",
    reflection: "Queen of pentacles - positive card for good health, fertility & children",
    actionGuidance: "Nurture your body, home, and family with grounded warmth and abundant care.",
    element: "Earth • Pentacles",
    symbol: "✦",
    cardImage: "/tarot-queen-of-pentacles.jpg"
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
