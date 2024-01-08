"use client";
import { useState, useEffect } from 'react';

const newTestamentVerses = [
  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
  "I can do all things through him who strengthens me. - Philippians 4:13",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
  "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law. - Galatians 5:22-23",
  "Trust in the LORD with all your heart and lean not on your own understanding. - Proverbs 3:5",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
  "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
  "But the Lord is faithful, and he will strengthen you and protect you from the evil one. - 2 Thessalonians 3:3",
  "And my God will meet all your needs according to the riches of his glory in Christ Jesus. - Philippians 4:19",
  "But you, man of God, flee from all this, and pursue righteousness, godliness, faith, love, endurance and gentleness. - 1 Timothy 6:11",
  "But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere. - James 3:17",
  "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ. - Romans 5:1",
  "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
  "The Lord is not slow in keeping his promise, as some understand slowness. Instead, he is patient with you, not wanting anyone to perish, but everyone to come to repentance. - 2 Peter 3:9"
];


const backgroundImages: string | any[] = [
 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/159679/bible-job-reading-christianity-159679.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/1296720/pexels-photo-1296720.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/460395/pexels-photo-460395.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/250609/pexels-photo-250609.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/4200823/pexels-photo-4200823.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/4200827/pexels-photo-4200827.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=600'
];

function getRandomItem(arr: string | any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

export default function IndexPage() {
  const [randomVerse, setRandomVerse] = useState('Cast all your anxiety on him because he cares for you. - 1 Peter 5:7');
  const [randomBackgroundImage, setRandomBackgroundImage] = useState('https://images.pexels.com/photos/8383409/pexels-photo-8383409.jpeg?auto=compress&cs=tinysrgb&w=600');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const verseInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const verse = getRandomItem(newTestamentVerses);
        setRandomVerse(verse);
        setIsTransitioning(false);
      }, 500); // Delay before changing the verse
    }, 10000); // Change verse every 30 seconds
    const imageInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const image = getRandomItem(backgroundImages);
        setRandomBackgroundImage(image);
        setIsTransitioning(false);
      }, 500); // Delay before changing the image
    }, 10000); // Change image every 30 seconds

    return () => {
      clearInterval(verseInterval);
      clearInterval(imageInterval);
    };
  }, []);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-black">
    <div
      className={`fixed top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-50'
      }`}
      style={{ backgroundImage: `url(${randomBackgroundImage})` }}
    ></div>
    
    <div
      className={`relative z-10 p-8 bg-white bg-opacity-80 max-w-md rounded-md shadow-lg transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
       <h3 className=' text-center text-xl font-bold capitalize text-black py-2 leading-5 tracking-wide'>Random nice verses!</h3>
     
      <p className="text-lg font-semibold pick">{randomVerse}</p>
    </div>
  </div>
  );
}
