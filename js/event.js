// events.js

const eventData = {
  tech1: {
    title: "Tech Innovators Summit",
    date: "Oct 15, 2025",
    time: "3:00 PM",
    location: "Convention Center, City",
    category: "Technology",
    image: "images/techevent1.avif",
    organizer: "ABC Tech Group",
    price: "$40",
    description: "The Tech Innovators Summit brings together the brightest minds in technology to explore the future of innovation. From AI to robotics, this event showcases the latest breakthroughs and trends in the tech world. Join us for keynote speeches, interactive panels, and networking opportunities with industry leaders. Whether you're a developer, entrepreneur, or tech enthusiast, this is the place to be. Get ready to be inspired by the minds shaping tomorrow’s technology."
  },
  seminar1: {
    title: "AI & Future Tech",
    date: "Oct 18, 2025",
    time: "2:00 PM",
    location: "Tech Hub Conference Room",
    category: "Seminar",
    image: "images/seminarevent1.avif",
    organizer: "Innovate Hub",
    price: "$35",
    description: "Dive into the evolving world of artificial intelligence and future technology in this immersive seminar. Industry experts will walk you through the latest AI research, machine learning applications, and ethical considerations. This event is ideal for professionals looking to stay ahead of the curve in the tech industry. There will be live demos, Q&A sessions, and hands-on workshops."
  },
  tech2: {
    title: "AI & Future Tech",
    date: "Oct 18, 2025",
    time: "2:00 PM",
    location: "Tech Hub Conference Room",
    category: "Technology",
    image: "images/techevent2.avif",
    organizer: "Innovate Hub",
    price: "$35",
    description: "This seminar explores the impact of artificial intelligence on everyday life and business. From automation to predictive analytics, you’ll learn how AI is shaping the future. Interactive breakout sessions will allow attendees to engage with real-world case studies and prototypes."
  },
  family1: {
    title: "Family Fun Day",
    date: "Nov 5, 2025",
    time: "11:00 AM",
    location: "Central Park, City",
    category: "Family",
    image: "images/familyevent1.avif",
    organizer: "Happy Kids Foundation",
    price: "$20",
    description: "A fun-filled day for the whole family! Enjoy food trucks, games, face painting, and live entertainment. This event is designed to bring families together for a day of joy and connection. Come early and stay for the full experience — from kids' workshops to parent-led activities."
  },
  seminar2: {
    title: "Startup Pitch Workshop",
    date: "Nov 10, 2025",
    time: "10:00 AM",
    location: "Startup Central Office",
    category: "Seminar",
    image: "images/seminarevent2.avif",
    organizer: "Startup Central",
    price: "$25",
    description: "Are you a startup founder looking to refine your pitch? This hands-on workshop offers real-time feedback from experienced investors and mentors. Learn how to craft a compelling narrative and present with confidence. Whether you're pre-launch or scaling, this is a must-attend event for early-stage entrepreneurs."
  },
  outdoor1: {
    title: "Mountain Hiking Adventure",
    date: "Nov 20, 2025",
    time: "8:00 AM",
    location: "Mountain Trailhead",
    category: "Outdoor",
    image: "images/outdoorevent1.avif",
    organizer: "Adventure Seekers",
    price: "$45",
    description: "Join Adventure Seekers for a full-day hiking experience in the scenic mountain trails. This event is perfect for nature lovers and thrill seekers. Guided tours, safety briefings, and packed lunches are included. Be sure to wear comfortable shoes and bring water!"
  },
  charity1: {
    title: "Charity Gala for Education",
    date: "Dec 1, 2025",
    time: "7:00 PM",
    location: "Grand Hall, City",
    category: "Charity",
    image: "images/charityevent1.avif",
    organizer: "Education for All",
    price: "$100",
    description: "The Charity Gala for Education is our annual fundraiser supporting underprivileged children’s access to schooling. Enjoy a night of fine dining, live music, and inspiring stories of change. All proceeds go directly to building new learning centers and providing scholarships."
  },
  music1: {
    title: "Live Jazz Night",
    date: "Nov 12, 2025",
    time: "7:00 PM",
    location: "Jazz Lounge, City",
    category: "Music",
    image: "images/musicevent1.avif",
    organizer: "Jazz Harmony Band",
    price: "$50",
    description: "Experience a magical evening of live jazz performed by the renowned Jazz Harmony Band. The night features classic jazz tunes, improvisation, and soulful melodies. This is a must for music lovers and culture seekers alike. Doors open at 6:00 PM."
  },
  art1: {
    title: "Modern Art Exhibition",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    location: "City Art Gallery",
    category: "Art",
    image: "images/art event 1.avif",
    organizer: "City Art Gallery",
    price: "$15",
    description: "This exhibition showcases the most daring and innovative works from emerging and established artists. From abstract to digital art, there’s something for every art lover. Come meet the artists, enjoy live commentary, and explore the creative process behind each piece."
  },
  virtual1: {
    title: "Remote Work Summit",
    date: "Nov 25, 2025",
    time: "9:00 AM",
    location: "Online",
    category: "Virtual",
    image: "images/virtualevent1.avif",
    organizer: "Remote Work Co.",
    price: "Free",
    description: "Join professionals from around the world for the Remote Work Summit. Learn how to optimize your home office, manage remote teams, and stay productive. Featuring top speakers from leading remote companies and interactive Q&A sessions."
  },
  sport1: {
    title: "City Marathon",
    date: "Dec 10, 2025",
    time: "8:00 AM",
    location: "City Stadium",
    category: "Sport",
    image: "images/sportevent1.avif",
    organizer: "City Sports Club",
    price: "$30",
    description: "The City Marathon is one of the most anticipated sporting events of the year. Whether you're a professional runner or a first-time participant, this race welcomes everyone. The course winds through the city and ends with a celebration at the stadium. Sign up today and join the fun!"
  },
  family2: {
    title: "Kids Science Fair",
    date: "Nov 18, 2025",
    time: "12:00 PM",
    location: "Kids Science Center",
    category: "Family",
    image: "images/familyevent2.avif",
    organizer: "Little Explorers Club",
    price: "$10",
    description: "The Kids Science Fair is a fun and educational event for children aged 5–12. From robot demonstrations to hands-on experiments, this fair encourages curiosity and creativity. Parents are welcome to join in the fun or relax at the refreshment stand."
  },
  seminar3: {
    title: "UX Design Workshop",
    date: "Nov 30, 2025",
    time: "1:00 PM",
    location: "Design Academy Hall",
    category: "Seminar",
    image: "images/seminarevent3.avif",
    organizer: "Design Academy",
    price: "$55",
    description: "This UX Design Workshop will help you master the fundamentals of user experience design. Led by expert instructors, the workshop includes real-world case studies, design thinking exercises, and feedback sessions. Bring your laptop and get ready to build your first UX portfolio!"
  },
  outdoor2: {
    title: "Camping & Nature Walk",
    date: "Dec 5, 2025",
    time: "9:00 AM",
    location: "Forest Campground",
    category: "Outdoor",
    image: "images/outdoorevent2.avif",
    organizer: "Nature Lovers Club",
    price: "$30",
    description: "Enjoy a peaceful weekend of camping and nature walks in the forest. This event is perfect for those looking to disconnect from the city and reconnect with nature. Guided walks, campfire sessions, and eco-friendly camping available for all experience levels."
  },
  charity2: {
    title: "Winter Shelter Fundraiser",
    date: "Dec 12, 2025",
    time: "6:00 PM",
    location: "Community Hall",
    category: "Charity",
    image: "images/charityevent2.avif",
    organizer: "Helping Hands",
    price: "$25",
    description: "Join Helping Hands for our annual Winter Shelter Fundraiser. This event supports the homeless population during the coldest months of the year. The night includes a dinner, live music, and a silent auction. All proceeds go toward shelter upgrades and winter supplies."
  },
  music2: {
    title: "Live Music Festival",
    date: "Nov 22, 2025",
    time: "5:00 PM",
    location: "City Amphitheater",
    category: "Music",
    image: "images/musicevent2.avif",
    organizer: "City Music Collective",
    price: "$45",
    description: "The Live Music Festival returns with an unforgettable lineup of local and international artists. From rock to soul to electronic, this is a musical celebration for all tastes. Bring your friends and enjoy a night of rhythm and energy under the stars."
  },
  art2: {
    title: "Art of Storytelling",
    date: "Nov 18, 2025",
    time: "3:00 PM",
    location: "Art Studio, City",
    category: "Art",
    image: "images/artevent2.avif",
    organizer: "Creative Arts Foundation",
    price: "$20",
    description: "This event explores the intersection of visual art and storytelling. Artists will present their work and discuss the inspiration behind each piece. Attendees will also have the chance to participate in a guided storytelling workshop."
  },
  virtual2: {
    title: "Remote Work Tips & Tricks",
    date: "Dec 2, 2025",
    time: "1:00 PM",
    location: "Online Webinar",
    category: "Virtual",
    image: "images/virtualevent2.avif",
    organizer: "Digital Nomad Hub",
    price: "Free",
    description: "A free webinar offering practical advice for remote workers. Topics include time management, setting up a home office, and staying motivated while working from home. Join from anywhere in the world and leave with actionable tips to improve your workflow."
  },
  sport2: {
    title: "City Football League",
    date: "Nov 19, 2025",
    time: "10:00 AM",
    location: "City Stadium",
    category: "Sport",
    image: "images/sports.avif",
    organizer: "City Sports Club",
    price: "Free",
    description: "The City Football League is back with more excitement than ever! Watch top local teams battle it out on the field. Cheer for your favorite squad or join the fun at the fan zone with games, food, and giveaways."
  },
  charity3: {
    title: "La Belle Charity",
    date: "Nov 19, 2025",
    time: "10:00 AM",
    location: "La Belle Hall",
    category: "Charity",
    image: "images/charityevent3.avif",
    organizer: "La Belle Foundation",
    price: "Free",
    description: "La Belle Charity supports local arts and cultural education. This event features a silent auction, live music, and guest speakers who will share inspiring stories. Join us in supporting the arts and making a difference in our community."
  },
  art3: {
    title: "Mariposa Art",
    date: "Nov 19, 2025",
    time: "10:00 AM",
    location: "Mariposa Art Center",
    category: "Art",
    image: "images/artevent3.avif",
    organizer: "Canvas Arts",
    price: "Free",
    description: "Mariposa Art is a community-driven event that showcases local talent and promotes creativity. This event is free and open to all ages. Explore the exhibits, join a live painting demo, or take a guided tour with the artists."
  },
   health1: {
    title: "Biba Donor Centre",
    date: "Sep 10, 2025",
    time: "10:00 AM",
    location: "Donor Centre, City",
    category: "Health",
    image: "images/health.avif",
    organizer: "Abi and Co",
    price: "Free",
    description: "Mariposa Art is a community-driven event that showcases local talent and promotes creativity. This event is free and open to all ages. Explore the exhibits, join a live painting demo, or take a guided tour with the artists."
  },
  health2: {
    title: "Abi Health Facility",
    date: "Nov 10, 2025",
    time: "10:00 AM",
    location: "Abi Health",
    category: "Health",
    image: "images/health.avif",
    organizer: "Abi Health",
    price: "Free",
    description: "Mariposa Art is a community-driven event that showcases local talent and promotes creativity. This event is free and open to all ages. Explore the exhibits, join a live painting demo, or take a guided tour with the artists."
}
};
