import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import { tarotExperienceCards } from '../data/tarotCards';

interface TarotExperienceProps {
  onBookClick: () => void;
}

export const TarotExperience: React.FC<TarotExperienceProps> = ({ onBookClick }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const activeCard = tarotExperienceCards.find((c) => c.id === selectedCardId);

  const handleCardClick = (id: string) => {
    // If clicking the currently selected/flipped card -> flip it back
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };

  const handleReset = () => {
    setSelectedCardId(null);
  };

  return (
    <section id="tarot-experience" className="py-16 sm:py-24 relative overflow-hidden bg-grain">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Interactive Divination</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Choose what calls you.
          </h2>

          <p className="text-xs sm:text-base text-brandLightText font-light max-w-md">
            Take a deep breath. Focus on what currently sits in your heart, then tap any card to unveil its guidance.
          </p>
        </div>

        {/* 3 Face-Down Tarot Cards — Single Row on Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 max-w-4xl mx-auto perspective-1000">
          {tarotExperienceCards.map((card, idx) => {
            const isFlipped = selectedCardId === card.id;
            const isAnotherSelected = selectedCardId !== null && !isFlipped;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`cursor-pointer transition-all duration-500 ${
                  isAnotherSelected ? 'opacity-40 scale-95' : 'hover:scale-[1.02]'
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                {/* 3D Flip Container */}
                <div
                  className={`relative w-full aspect-[9/16] sm:aspect-[9/15] rounded-2xl sm:rounded-3xl transform-style-preserve-3d transition-transform duration-700 shadow-lg sm:shadow-xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* CARD BACK (Face-Down: Image is not showing initially) */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl p-2 sm:p-5 bg-gradient-to-b from-[#FAF6F0] to-[#EFE5F5] border sm:border-2 border-secondaryPurple/50 shadow-md sm:shadow-2xl flex flex-col justify-between overflow-hidden">
                    {/* Intricate Inner Ornamental Border */}
                    <div className="w-full h-full rounded-xl sm:rounded-2xl border border-secondaryPurple/40 p-1.5 sm:p-4 flex flex-col justify-between items-center relative">
                      <div className="flex justify-between w-full text-secondaryPurple text-[9px] sm:text-xs">
                        <span>✦</span>
                        <span>☾</span>
                        <span>✦</span>
                      </div>

                      {/* Center Sacred Geometry Medallion */}
                      <div className="flex flex-col items-center space-y-1 sm:space-y-3">
                        <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full border border-secondaryPurple/60 flex items-center justify-center bg-white/40 shadow-inner group">
                          <span className="font-editorial text-xs sm:text-2xl text-mutedPurple font-semibold">
                            {idx === 0 ? 'Card 1' : idx === 1 ? 'Card 2' : 'Card 3'}
                          </span>
                        </div>
                        <span className="text-[7px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] uppercase text-brandLightText font-mono">
                          Tarot
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="inline-block px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-lightLavender/70 text-[7px] sm:text-[10px] font-semibold tracking-wider sm:tracking-widest uppercase text-brandText whitespace-nowrap">
                          Reveal ✦
                        </span>
                      </div>

                      <div className="flex justify-between w-full text-secondaryPurple text-[9px] sm:text-xs">
                        <span>✦</span>
                        <span>☾</span>
                        <span>✦</span>
                      </div>
                    </div>
                  </div>

                  {/* CARD FRONT (Revealed on Tap: Shows the Full Card Image & Name Below) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-softCream border sm:border-2 border-mutedPurple/60 shadow-md sm:shadow-2xl flex flex-col justify-between overflow-hidden">
                    
                    {/* Full Tarot Card Image */}
                    <div className="relative w-full flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-warmBeige border border-secondaryPurple/25 shadow-inner">
                      <img
                        src={card.cardImage}
                        alt={card.name}
                        className="w-full h-full object-cover object-top filter contrast-[1.03]"
                      />
                    </div>

                    {/* Below Card Image: Name & Roman Numeral */}
                    <div className="pt-1.5 pb-0.5 sm:pt-2 sm:pb-0.5 text-center shrink-0">
                      <p className="font-editorial text-[9.5px] sm:text-sm md:text-base text-brandText font-semibold leading-tight truncate">
                        {card.name}
                      </p>
                      <span className="text-[7px] sm:text-[9.5px] uppercase tracking-wider text-mutedPurple font-medium block truncate">
                        {card.cardIndexLabel} • {card.romanNumeral}
                      </span>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Below the Cards: Write the Card Name and Description */}
        <AnimatePresence>
          {activeCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="mt-8 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-secondaryPurple/50 max-w-2xl mx-auto text-center space-y-4 sm:space-y-5 shadow-xl"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mutedPurple">
                <span>✦</span>
                <span>{activeCard.cardIndexLabel} Revealed • {activeCard.romanNumeral}</span>
                <span>✦</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-editorial text-2xl sm:text-4xl text-brandText font-normal">
                  {activeCard.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-mutedPurple">
                  {activeCard.archetype} • {activeCard.element}
                </p>
              </div>

              {/* Main Card Description */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 border border-secondaryPurple/25 shadow-inner">
                <p className="font-editorial italic text-base sm:text-xl text-brandText leading-relaxed">
                  "{activeCard.reflection}"
                </p>
              </div>

              {/* Sacred Action Guidance */}
              {activeCard.actionGuidance && (
                <p className="text-xs sm:text-sm text-brandLightText leading-relaxed max-w-lg mx-auto">
                  <strong className="text-brandText font-semibold">Guidance: </strong>
                  {activeCard.actionGuidance}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-mutedPurple hover:bg-[#9677a5] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book a Tarot Session</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-warmBeige hover:bg-lightLavender text-xs font-semibold tracking-wider uppercase text-brandText transition-all border border-secondaryPurple/40 shadow-xs hover:shadow-md active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-mutedPurple" />
                  <span>Choose Another Card</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gentle hint when no card is selected */}
        {!activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 sm:mt-10 text-center"
          >
            <p className="text-xs text-brandLightText tracking-wide flex items-center justify-center gap-2">
              <span className="text-mutedPurple">✦</span>
              <span>Tap any card to reveal its image and read its sacred guidance below.</span>
              <span className="text-mutedPurple">✦</span>
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};
