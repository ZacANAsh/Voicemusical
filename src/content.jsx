// Shared content for all three directions of the Voice site.
// Lives on window so each direction file can read it.

window.VOICE_CONTENT = {
  showTitle: "VOICE",
  showTitlePunct: "VOICE!",
  tagline: "A young woman refuses to trade her truth for a fairytale ending.",
  subTagline: "The Little Mermaid, turned inside out.",
  festival: {
    label: "Festival Workshop",
    venue: "AMDA Summerfest 2026",
    date: "Summer 2026 · NYC",
  },
  status: "Festival workshop production at AMDA Summerfest 2026. Recently presented in concert featuring Tony winner Bonnie Milligan and Donald Webber Jr.",
  creditsLine: "Book by Zach Adam & Eidan Lipper · Music & Lyrics by Zach Adam · Additional music by Eidan Lipper",

  synopsisShort: "In a bleak 19th-century fishing town, 18-year-old Gabi escapes the grey through her imagination — and the three classic princesses who bicker inside her head. When a world-famous fairytale contest opens its doors to men only, she sells her late mother's necklace, becomes \"Gabriel Goldwing,\" and writes her way to the Big City. The story she invents about Princess Ariella, who defies tradition to restore her people's stolen voices, becomes the engine of her own escape.",

  synopsisFull: [
    "In a bleak, 19th-century fishing town where conformity is the only currency, 18-year-old Gabi escapes the oppressive reality through her vivid imagination. She is never truly alone; she is constantly accompanied by three distinct voices in her head — imaginative manifestations of classic princesses who act as her psychological sounding board. Snowy (her impulsive id), Bee (her methodical ego), and Cindy (her cynical superego) bicker, advise, and help Gabi construct her stories.",
    "Gabi dreams of becoming a master storyteller, but her pragmatic father, Abe, pushes her to abandon her writing and marry for financial security. Unbeknownst to Gabi, his strictness is born of a dark secret: Gabi's mother, Leah, suffered from severe mental episodes and lost her grip on reality before her tragic death. Abe is terrified of Gabi's imagination, desperate to prevent his daughter from repeating her mother's fate.",
    "When the world-famous Fairycon announces a lucrative writing contest exclusively for men, Gabi's internal princesses push her to rebel. She sells her late mother's treasured necklace to buy a men's suit, disguises herself as \"Gabriel Goldwing,\" and flees to the Big City.",
    "As Gabi navigates the eccentric, fiercely competitive world of Fairycon, she pens a subversive parallel fairytale. In her story, Princess Ariella rejects an arranged marriage and flees to Corifany, only to discover a village silenced by a dark, voice-stealing Warlock.",
    "At the convention, Gabi inadvertently crosses paths with her lifelong idol, the legendary author Svans Christian Anderssen. But the \"king of fairytales\" is a cynical, neurotic fraud, haunted by his own past successes. Subverting the classic, tragic tropes of his own legacy, where heroines trade their voices for a wish, Svans offers Gabi a manipulative, modern-day deal: a life of luxury and a seat at the table as his apprentice, provided he publishes her brilliant new story under his own name.",
    "Forced to choose between guaranteed success in the shadows or risking everything for the truth, Gabi's real-world struggle merges with her fictional climax. Just as Princess Ariella sacrifices her own wish to break the Warlock's curse and restore her people's voices, Gabi bravely unmasks herself on the Fairycon stage. Rejecting the prize under a false name, she claims her true identity and her work. Her courageous stand leads to a poignant reconciliation with her father, ultimately transforming her rigid hometown into a community vibrant with hope, where her acclaimed book, \"Ariella's Wish,\" proudly sits in the window of the local bookstore.",
  ],

  themes: ["Identity & individuality", "Following your dreams", "Family & inherited trauma", "The writing process"],

  characters: [
    { name: "GABI", alt: "ARIELLA", age: "18", voice: "Mezzo-Soprano", desc: "A quirky, big-hearted small-town girl with army boots and her mother's wing necklace. Gabi dreams of becoming the next great fairytale writer and ultimately narrates both worlds of the show." },
    { name: "ABE", alt: "THE KING / TRAIN CONDUCTOR", age: "40s–50s", voice: "Baritone", desc: "Gabi's disheveled but devoted father — a practical businessman who fears for his daughter's future. In the fairytale he re-emerges as The King, equally protective yet blinded by tradition." },
    { name: "LEAH", alt: "FORTUNE TELLER / THE QUEEN", age: "40s", voice: "Mezzo", desc: "Gabi's late mother, an imaginative free spirit who teaches her child to never lose her voice. Also Earl's flamboyant Fortune Teller." },
    { name: "NAOMI", alt: "THE SAGE", age: "50s", voice: "Alto-Mezzo", desc: "Owner of The Book Nest and Gabi's fiercely supportive aunt — wise, wry, book-obsessed. Doubles as the mystical Sage who guides Ariella." },
    { name: "EARL GREY JR.", alt: "THE PRINCE / FELLOW WRITER", age: "20s", voice: "Pop-Tenor", desc: "Anxious, superstition-ridden heir and reluctant celebrity philanthropist who longs to be liked for himself. His fairytale mirror is The Prince, a vain chauvinist." },
    { name: "SVANS CHRISTIAN ANDERSSEN", alt: "THE WARLOCK / COSPLAYER / JOSEPH", age: "40s–60s", voice: "Character Bari-Tenor", desc: "The world-famous yet eccentric storyteller whom Gabi idolises. Doubles as the sinister Warlock, plus several cameo roles." },
    { name: "SNOWY", alt: "SNOW WHITE / MAID SNOWY", age: "20s", voice: "Belt-Soprano", desc: "Pretty, selfish and deliciously vain — represents Gabi's id." },
    { name: "BEE", alt: "BELLE", age: "20s", voice: "Belt-Mezzo", desc: "Methodical, nerdy planner. The princess trio's resident project manager — represents Gabi's ego." },
    { name: "CINDY", alt: "CINDERELLA", age: "20s", voice: "Alto", desc: "Permanently unimpressed. The driest wit in the room — represents Gabi's superego." },
    { name: "HANNAH", alt: "THE DRESSMAKER / VILLAGE WOMAN", age: "30s–40s", voice: "Belt-Mezzo", desc: "Gabi's frazzled childhood friend-turned-mom. The Dressmaker is Ariella's empathetic confidante." },
    { name: "JOSEPH", alt: "MAYOR / SHMOOTZ / MC / CASTLE GUARD / SILENT MAN", age: "30s–50s", voice: "Character-Baritone", desc: "Pawn-shop owner Joseph slings endless dad-jokes and anchors several comic cameos." },
  ],

  creators: [
    {
      name: "Zach Adam",
      role: "Book · Music · Lyrics",
      photo: "assets/zach.jpg",
      link: "https://zachadam.com",
      bio: "Zach Adam is a writer-composer whose musicals trace people fighting their way to being heard. He wrote book, music, and lyrics for Homebound, a chamber musical about a queer son and his estranged father trapped together by the 2020 lockdown, currently in development. He is co-writer and composer of Voice!, a fairytale-deconstructing ensemble musical under option by a Broadway-aligned producing team. Before turning to theater, Zach won the Billboard Songwriting Contest and wrote multiple Top 20 hits for artists including Martha Wash. He founded The New Theater, a Nashville nonprofit developing original musicals, in 2025.",
    },
    {
      name: "Eidan Lipper",
      role: "Co-Book · Additional Music",
      photo: "assets/eidan.jpg",
      bio: "Eidan Lipper is a writer, director, and musical theater creator, and the founder and head of Maslul, Tel Aviv's Musical Theater Academy. He has directed more than 40 musicals across Israel, London, and New York, and has developed and mentored new generations of musical theater artists.\n\nHis writing credits include Steve, currently playing at Israel's National Theatre, Habima, and Shadows, which was presented at the Little Times Square Theater in New York. Eidan's work is driven by a passion for creating original stories and expanding the possibilities of contemporary musical theater.",
    },
  ],

  // Placeholder demo tracks — real audio TBD.
  tracks: [
    { num: "01", title: "Once Upon a Voice", subtitle: "Opening Number", length: "4:12", featured: "Company" },
    { num: "02", title: "A Million Stories",   subtitle: "Gabi's I-Want",  length: "3:38", featured: "Gabi" },
    { num: "03", title: "Three Voices",         subtitle: "Princess Trio", length: "2:54", featured: "Snowy, Bee, Cindy" },
    { num: "04", title: "Gabriel Goldwing",     subtitle: "Act I Transformation", length: "3:21", featured: "Gabi & Company" },
    { num: "05", title: "Welcome to Fairycon",  subtitle: "Act I Setpiece", length: "4:47", featured: "Company" },
    { num: "06", title: "Ariella's Wish",       subtitle: "The Fairytale Within", length: "3:55", featured: "Ariella" },
    { num: "07", title: "The Warlock's Deal",   subtitle: "Act II Confrontation", length: "4:30", featured: "Svans / The Warlock" },
    { num: "08", title: "Mother's Necklace",    subtitle: "Ballad", length: "3:08", featured: "Gabi & Leah" },
    { num: "09", title: "Find Your Voice",      subtitle: "Finale", length: "5:16", featured: "Company" },
  ],

  press: [
    { quote: "Wicked meets Dear Evan Hansen, wrapped in a modern version of every Disney musical you grew up on.", source: "Composer's note" },
  ],
};
