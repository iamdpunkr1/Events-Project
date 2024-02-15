import React, { useEffect, useRef } from 'react';

const Sponsors = () => {
  const sponsorsContainerRef = useRef(null);

  useEffect(() => {
    const sponsorsContainer = sponsorsContainerRef.current;

    if (!sponsorsContainer) return;

    // Clone the initial set of cards
    const initialCards = Array.from(sponsorsContainer.children);
    const clonedCards = initialCards.map(card => card.cloneNode(true));

    // Append cloned cards to the container
    clonedCards.forEach(card => sponsorsContainer.appendChild(card));

    // Calculate the total width of all cards
    const totalWidth = initialCards.reduce((acc, card) => acc + card.offsetWidth, 0);

    // Animate cards to move continuously
    function animateCards() {
      // Calculate the duration based on the total width of all cards
      const duration = totalWidth / 50; // Adjust the speed as needed

      sponsorsContainer.style.animationDuration = duration + 's';
    }

    // Call animateCards function
    animateCards();

    // Clean up cloned cards when component unmounts
    return () => {
      clonedCards.forEach(card => card.remove());
    }
  }, [sponsorsContainerRef]);

  return (
    <section className='w-full'>
      <div className='py-28 '>
        <h2 className='strokeText z-10 uppercase text-7xl font-semibold text-black text-center'>Sponsors</h2>
        <p className='text-center py-4'>These are the companies that help us make this event possible.</p>
      </div>
      <ul className='flex gap-4 sponsors' ref={sponsorsContainerRef}>
        <li className='w-3/12 bg-slate-100 rounded-md p-24'>Company 1</li>
        <li className='w-3/12 bg-slate-100 rounded-md p-24'>Company 2</li>
        <li className='w-3/12 bg-slate-100 rounded-md p-24'>Company 3</li>
        <li className='w-3/12 bg-slate-100 rounded-md p-24'>Company 4</li>
      </ul>
    </section>
  );
}

export default Sponsors;
