export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Get engaged & build a beautiful life together 💍",
  "Sit on the beach in winter and hug each other tightly 🌊",
  "Travel together to all our dream destinations ✈️",
  "Walk in the rain holding hands and never let go 🌧️",
  "Grow old together, loving you more every single day 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
  "To my Aya, loving you is the easiest and most beautiful thing I’ve ever done.",
  "You are my safe place, my warmth, and the only person I can be truly myself with.",
  "I love the girl you are — your gentle heart, your reassuring voice, and your beautiful smile.",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 21st birthday to my forever favorite person, my heart, and my future.",
  "My dream and my greatest goal, the only right thing amidst so many mistakes… You have always been my past, my present, and my future.",
  "Always and forever, your favorite man.",
];

const ahmedGift: GiftData = {
  senderName: "judy",
  receiverName: "aya",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Aya! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "Every time I see you, you make me fall more and more in love with the sweetest, most beautiful, and most amazing girl in my world. ",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 21st Birthday, Aya!",
  birthdayWishesMessage:
    "Happy 21st birthday to my favorite person and the most beautiful girl in my life! You make my whole world brighter with your laughter, warmth, and gorgeous smile. I’m so lucky to have you, and I can’t wait to be by your side forever. Wishing you endless happiness, peace, and love. Happy birthday, Aya!",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My Aya, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;