import React from 'react';

const cardClasses = "bg-card rounded-lg overflow-hidden";
const textClasses = "text-muted-foreground";
const headingClasses = "text-2xl font-bold text-foreground";
const gridClasses = "grid grid-cols-2 md:grid-cols-4 gap-4";

const ShowCard = ({ imageUrl, altText, title }) => {
  return (
    <div className={cardClasses}>
      <img src={imageUrl} alt={altText} className="w-full h-auto" />
      <p className={textClasses}>{title}</p>
    </div>
  );
};

const Section = ({ title, shows }) => {
  return (
    <div className="bg-background p-4">
      <h2 className={headingClasses + " mb-4"}>{title}</h2>
      <div className={gridClasses}>
        {shows.map((show, index) => (
          <ShowCard key={index} imageUrl={show.imageUrl} altText={show.altText} title={show.title} />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const latestReleases = [
    { imageUrl: "https://placehold.co/200x300", altText: "Bloody Ishq", title: "Bloody Ishq" },
    { imageUrl: "https://placehold.co/200x300", altText: "Hotstar Specials", title: "Hotstar Specials" },
    { imageUrl: "https://placehold.co/200x300", altText: "Hardly Working", title: "Hardly Working" },
    { imageUrl: "https://placehold.co/200x300", altText: "Commander Karan Saxena", title: "Commander Karan Saxena" }
  ];

  const bestInSports = [
    { imageUrl: "https://placehold.co/200x300", altText: "India in Paris Day 4", title: "India in Paris Day 4" },
    { imageUrl: "https://placehold.co/200x300", altText: "Men's Hockey Draw", title: "Men's Hockey Draw" },
    { imageUrl: "https://placehold.co/200x300", altText: "Finally I'm at Arsenal", title: "Finally I'm at Arsenal" },
    { imageUrl: "https://placehold.co/200x300", altText: "Brave SL Stun IND", title: "Brave SL Stun IND" }
  ];

  const popularShows = [
    { imageUrl: "https://placehold.co/200x300", altText: "Show 1", title: "Show 1" },
    { imageUrl: "https://placehold.co/200x300", altText: "Show 2", title: "Show 2" },
    { imageUrl: "https://placehold.co/200x300", altText: "Show 3", title: "Show 3" },
    { imageUrl: "https://placehold.co/200x300", altText: "Show 4", title: "Show 4" }
  ];

  return (
    <div>
      <Section title="Latest Releases" shows={latestReleases} />
      <Section title="Best in Sports" shows={bestInSports} />
      <Section title="Popular Shows" shows={popularShows} />
    </div>
  );
};

export default Portfolio;
