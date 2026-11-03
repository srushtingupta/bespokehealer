import React, { useState } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { tarotExperienceCards } from '../data/tarotCards';
import type { TarotCard } from '../data/tarotCards';

interface TarotExperienceProps {
  onBookClick: () => void;
}

export const TarotExperience: React.FC<TarotExperienceProps> = ({ onBookClick }) => {
  // 3 active cards displayed on the table (Card 1, Card 2, Card 3)
  const [slots, setSlots] = useState<TarotCard[]>(() => tarotExperienceCards.slice(0, 3));
  // Which card slot is currently flipped in place (0, 1, or 2)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  // Pointer in tarotExperienceCards for dealing the next fresh card
  const [deckPointer, setDeckPointer] = useState<number>(3);
  // Transition lock
  const [isReplacing, setIsReplacing] = useState<boolean>(false);

  // Draw the next card from the deck that is not currently visible in any other slot
  const getNextCard = (currentSlots: TarotCard[], slotIdx: number, currentPointer: number) => {
    const otherVisibleIds = new Set(
      currentSlots.filter((_, i) => i !== slotIdx).map((c) => c.id)
    );
    for (let i = 0; i < tarotExperienceCards.length; i++) {
      const candidateIndex = (currentPointer + i) % tarotExperienceCards.length;
      const candidate = tarotExperienceCards[candidateIndex];
      if (!otherVisibleIds.has(candidate.id) && candidate.id !== currentSlots[slotIdx].id) {
        return {
          nextCard: candidate,
          nextPointer: (candidateIndex + 1) % tarotExperienceCards.length,
        };
      }
    }
    // If no unused card is in reserve, keep current card
    return {
      nextCard: currentSlots[slotIdx],
      nextPointer: currentPointer,
    };
  };

  // Turn card back and swap with a fresh card from the deck pool
  const turnBackAndReplace = (slotIdx: number, onComplete?: () => void) => {
    setIsReplacing(true);
    setFlippedIndex(null);

    // Halfway through 600ms flip animation (while card is perpendicular / edge-on), swap the card
    setTimeout(() => {
      setSlots((prevSlots) => {
        const { nextCard, nextPointer } = getNextCard(prevSlots, slotIdx, deckPointer);
        setDeckPointer(nextPointer);
        const updated = [...prevSlots];
        updated[slotIdx] = nextCard;
        return updated;
      });
      setIsReplacing(false);
      if (onComplete) onComplete();
    }, 320);
  };

  const handleCardClick = (idx: number) => {
    if (isReplacing) return;

    // If clicking the card that is already flipped -> turn it back and replace it
    if (flippedIndex === idx) {
      turnBackAndReplace(idx);
      return;
    }

    // If another card is flipped -> turn it back & replace, then flip this new one
    if (flippedIndex !== null) {
      const prev = flippedIndex;
      turnBackAndReplace(prev, () => {
        setFlippedIndex(idx);
      });
      return;
    }

    // Flip this card
    setFlippedIndex(idx);
  };

  return (
    <section id="tarot-experience" className="py-16 sm:py-24 relative overflow-hidden bg-grain">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Interactive Divination</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Choose what calls you.
          </h2>

          <p className="text-xs sm:text-base text-brandLightText font-light max-w-md">
            Take a deep breath. Focus on what currently sits in your heart, then tap any card to flip it and read its guidance.
          </p>
        </div>

        {/* 3 Tarot Cards — Flip In Place (No Dialogue Box) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-6 md:gap-8 max-w-4xl mx-auto perspective-1000">
          {slots.map((card, idx) => {
            const isFlipped = flippedIndex === idx;

            return (
              <div
                key={`${card.id}-${idx}`}
                onClick={() => handleCardClick(idx)}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* 3D Flip Container */}
                <div
                  className={`relative w-full aspect-[9/16] sm:aspect-[9/15] rounded-2xl sm:rounded-3xl transform-style-preserve-3d transition-transform duration-700 shadow-md sm:shadow-xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* ================= CARD FRONT (Face-Up: Full Image + Name Below) ================= */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-softCream border sm:border-2 border-secondaryPurple/40 shadow-sm flex flex-col justify-between overflow-hidden">
                    {/* Full Tarot Card Image */}
                    <div className="relative w-full flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-warmBeige border border-secondaryPurple/25 shadow-inner">
                      <img
                        src={card.cardImage}
                        alt={card.name}
                        className="w-full h-full object-cover object-top filter contrast-[1.03]"
                      />
                      
                      {/* Tap indicator pill */}
                      <div className="absolute inset-x-0 bottom-2 flex justify-center">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[7px] sm:text-[9px] font-semibold uppercase tracking-wider text-brandText border border-secondaryPurple/30 shadow-sm">
                          Tap to Flip ✦
                        </span>
                      </div>
                    </div>

                    {/* Little bit of space below for the Name */}
                    <div className="pt-1.5 pb-0.5 sm:pt-2 sm:pb-0.5 text-center shrink-0">
                      <p className="font-editorial text-[9.5px] sm:text-sm md:text-base text-brandText font-semibold leading-tight truncate">
                        {card.name}
                      </p>
                      <span className="text-[7px] sm:text-[9.5px] uppercase tracking-wider text-mutedPurple font-medium block truncate">
                        {card.cardIndexLabel} • {card.romanNumeral}
                      </span>
                    </div>
                  </div>

                  {/* ================= CARD BACK (Flip Side: Written Description directly on the card) ================= */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl sm:rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#FAF6F0] via-[#FBF4FA] to-[#EFE5F5] border sm:border-2 border-mutedPurple/60 shadow-xl flex flex-col justify-between overflow-hidden text-center">
                    {/* Intricate Inner Ornamental Border */}
                    <div className="w-full h-full rounded-xl sm:rounded-2xl border border-secondaryPurple/40 p-2 sm:p-3.5 flex flex-col justify-between items-center relative">
                      
                      {/* Top Header: Card Index & Roman Numeral */}
                      <div className="flex justify-between items-center w-full text-secondaryPurple text-[8px] sm:text-xs">
                        <span>✦</span>
                        <span className="font-mono font-semibold tracking-wider text-mutedPurple text-[8px] sm:text-[11px]">
                          {card.cardIndexLabel} • {card.romanNumeral}
                        </span>
                        <span>✦</span>
                      </div>

                      {/* Card Title & Archetype */}
                      <div className="space-y-0.5 my-auto px-0.5">
                        <h4 className="font-editorial text-[10px] sm:text-base text-brandText font-semibold leading-tight">
                          {card.name}
                        </h4>
                        <span className="text-[6.5px] sm:text-[9px] uppercase tracking-wider text-mutedPurple font-medium block truncate">
                          {card.archetype}
                        </span>
                      </div>

                      {/* The Description Written directly on the Flip */}
                      <div className="my-auto p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/75 border border-secondaryPurple/30 shadow-inner w-full">
                        <p className="font-editorial italic text-[8px] sm:text-xs text-brandText leading-snug sm:leading-relaxed">
                          "{card.reflection}"
                        </p>
                      </div>

                      {/* Guidance text (Desktop) */}
                      {card.actionGuidance && (
                        <p className="text-[6.5px] sm:text-[10px] text-brandLightText font-light leading-tight px-1 hidden sm:block">
                          {card.actionGuidance}
                        </p>
                      )}

                      {/* Bottom Turn Back Pill */}
                      <div className="pt-1 w-full flex items-center justify-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-mutedPurple/15 text-mutedPurple hover:bg-mutedPurple hover:text-white text-[7px] sm:text-[10px] font-semibold tracking-wider uppercase transition-colors">
                          <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>Turn &amp; Replace</span>
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking CTA & Interaction Hint */}
        <div className="mt-10 sm:mt-14 text-center space-y-3">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-mutedPurple hover:bg-[#9677a5] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book a Full Tarot Session</span>
          </button>

          <p className="text-[11px] text-brandLightText">
            ✦ Tap any card to flip it and read its description. Tapping it again turns it back and replaces it with a new card from the deck.
          </p>
        </div>

      </div>
    </section>
  );
};
