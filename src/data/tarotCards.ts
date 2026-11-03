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
  {
    id: "card-1-the-star",
    cardIndexLabel: "Card 1",
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
    id: "card-2-strength",
    cardIndexLabel: "Card 2",
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
    id: "card-3-two-of-wands",
    cardIndexLabel: "Card 3",
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
    id: "card-4-the-hanged-man",
    cardIndexLabel: "Card 4",
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
    id: "card-5-ace-of-swords",
    cardIndexLabel: "Card 5",
    name: "Ace of Swords",
    romanNumeral: "Ace",
    archetype: "Mental Agility & Assertiveness",
    reflection: "Ace of Swords -Mental agility & assertiveness will bring success.",
    actionGuidance: "Cut through ambiguity with intellectual focus and assertive communication. Decisive clarity brings total breakthrough.",
    element: "Air • Swords",
    symbol: "🗡",
    cardImage: "/tarot-ace-of-swords.jpg"
  }
];
