const defaultPhoto = "Eugene Torre.jpg";

const openingMovesMap = {
  "Sicilian Defense": "1. e4 c5",
  "Ruy López": "1. e4 e5 2. Nf3 Nc6 3. Bb5",
  "Ruy López Opening: Morphy Defense, Closed": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7",
  "Ruy López Opening: Morphy Defense, Exchange Variation": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6",
  "Queen's Pawn Opening": "1. d4",
  "Pirc": "1. e4 d6 2. d4 Nf6",
  "King's Indian Defense": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7",
  "King's Indian Attack": "1. Nf3 d5 2. g3",
  "Queen's Indian Defense": "1. d4 Nf6 2. c4 e6 3. Nf3 b6",
  "Slav Defense": "1. d4 d5 2. c4 c6",
  "Semi-Slav Defense": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6",
  "French Defense": "1. e4 e6",
  "French Defense: Winawer Variation": "1. e4 e6 2. d4 d5 3. Nc3 Bb4",
  "French Defense: Tarrasch Variation": "1. e4 e6 2. d4 d5 3. Nd2",
  "French Tarrasch": "1. e4 e6 2. d4 d5 3. Nd2",
  "Caro-Kann Defense": "1. e4 c6",
  "English Opening": "1. c4",
  "English, 1 c4 e5": "1. c4 e5",
  "English, 1 c4 c5": "1. c4 c5",
  "Nimzo-Indian Defense": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4",
  "Bogo-Indian Defense": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+",
  "Four Knights Game": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6",
  "Modern Benoni": "1. d4 Nf6 2. c4 c5 3. d5 e6",
  "Benko Gambit": "1. d4 Nf6 2. c4 c5 3. d5 b5",
  "Catalan Opening": "1. d4 Nf6 2. c4 e6 3. g3",
  "Scandinavian Defense": "1. e4 d5",
  "Sicilian Defense: Open, Najdorf Variation": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6",
  "Sicilian Defense: Open, Scheveningen Variation": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6",
  "Sicilian Defense: Open, Taimanov Variation": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6",
  "Sicilian Defense: Kan Variation": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6",
  "Grünfeld Defense": "1. d4 Nf6 2. c4 g6 3. Nc3 d5",
  "Giuoco Piano": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5",
  "Italian Game: Two Knights Defense": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6",
  "Queen's Gambit Declined": "1. d4 d5 2. c4 e6",
  "Uncommon Opening": "1. b3 / 1. g3 / Irregular",
  "Alekhine's Defense": "1. e4 Nf6",
  "Chigorin Defense": "1. d4 d5 2. c4 Nc6",
  "Réti Opening": "1. Nf3 d5 2. c4",
  "Dutch Defense": "1. d4 f5",
  "Robatsch Defense": "1. e4 g6 2. d4 Bg7"
};

const playerOpeningFiles = {
  "Eugene Torre": {
    white: ["Openings/Torre/White-1 Sicilian Defense.gif", "Openings/Torre/White-2 Queen's Pawn Opening.gif", "Openings/Torre/White-3 Ruy Lopez Opening.gif", "Openings/Torre/White-4 Queen's Indian Defense.gif", "Openings/Torre/White-5 French Defense.gif"],
    black: ["Openings/Torre/Black-1 Ruy Lopez Opening.gif", "Openings/Torre/Black-2 Pirc Defense.gif", "Openings/Torre/Black-3 King's Indian Defense.gif", "Openings/Torre/Black-4 Slav Defense.gif", "Openings/Torre/Black-5 Sicilian Defense.gif"]
  },
  "Rosendo Balinas Jr.": {
    white: ["Openings/Balinas/White-1 Sicilian Defense.gif", "Openings/Balinas/White-2 Ruy Lopez Opening.gif", "Openings/Balinas/White-3 French Defense.gif", "Openings/Balinas/White-4 Caro-Kann Defense.gif", "Openings/Balinas/White-5 English Opening.png"],
    black: ["Openings/Balinas/Black-1 Sicilian Defense.gif", "Openings/Balinas/Black-2 Ruy Lopez Opening.gif", "Openings/Balinas/Black-3 Queen's Indian Defense.gif", "Openings/Balinas/Black-4 English Opening - King's English Variation.gif", "Openings/Balinas/Black-5 King's Indian Attack.gif"]
  },
  "Rogelio 'Joey' Antonio Jr.": {
    white: ["Openings/Antonio/White-1 Sicilian Defense.gif", "Openings/Antonio/White-2 French Defense.gif", "Openings/Antonio/White-3 Ruy Lopez Opening.gif", "Openings/Antonio/White-4 Caro-Kann Defense.gif", "Openings/Antonio/White-5 Four Knights Game.gif"],
    black: ["Openings/Antonio/Black-1 Caro-Kann Defense.gif", "Openings/Antonio/Black-2 Queen's Pawn Opening.gif", "Openings/Antonio/Black-3 Nimzo-Indian Defense.gif", "Openings/Antonio/Black-4 Bogo-Indian Defense.gif", "Openings/Antonio/Black-5 Modern Benoni.gif"]
  },
  "Buenaventura 'Bong' Villamayor": {
    white: ["Openings/Villamayor/White-1 English Opening.png", "Openings/Villamayor/White-2 Queen's Pawn Opening.gif", "Openings/Villamayor/White-3 English Opening - Symmetrical Variation.gif", "Openings/Villamayor/White-4 Slav Defense.gif", "Openings/Villamayor/White-5 Catalan Opening - Closed.gif"],
    black: ["Openings/Villamayor/Black-1 French Defense.gif", "Openings/Villamayor/Black-2 Semi-Slav Defense.gif", "Openings/Villamayor/Black-3 French Defense - Winawer Variation.gif", "Openings/Villamayor/Black-4 French Defense - Tarrasch Variation.gif", "Openings/Villamayor/Black-5 Queen's Pawn Opening.gif"]
  },
  "Nelson Isurina Mariano II": {
    white: ["Openings/Mariano/White-1 Sicilian Defense.gif", "Openings/Mariano/White-2 Ruy Lopez Opening.gif", "Openings/Mariano/White-3 French Defense.gif", "Openings/Mariano/White-4 King's Indian Attack.gif", "Openings/Mariano/White-5 French Defense - Winawer Variation.gif"],
    black: ["Openings/Mariano/Black-1 King's Indian Defense.gif", "Openings/Mariano/Black-2 Sicilian Defense.gif", "Openings/Mariano/Black-3 Scandinavian Defense.gif", "Openings/Mariano/Black-4 English Opening.png", "Openings/Mariano/Black-5 French Defense.gif"]
  },
  "Mark Callano Paragua": {
    white: ["Openings/Paragua/White-1 Sicilian Defense.gif", "Openings/Paragua/White-2 King's Indian Attack.gif", "Openings/Paragua/White-3 Queen's Pawn Opening.gif", "Openings/Paragua/White-4 Slav Defense.gif", "Openings/Paragua/White-5 Sicilian Defense - Open, Najdorf Variation.gif"],
    black: ["Openings/Paragua/Black-1 Sicilian Defense.gif", "Openings/Paragua/Black-2 King's Indian Defense.gif", "Openings/Paragua/Black-3 Sicilian Defense - Open, Najdorf Variation.gif", "Openings/Paragua/Black-4 Slav Defense.gif", "Openings/Paragua/Black-5 Queen's Pawn Opening.gif"]
  },
  "Darwin Laylo": {
    white: ["Openings/Laylo/White-1 English Opening - King's English Variation.gif", "Openings/Laylo/White-2 English Opening.png", "Openings/Laylo/White-3 Slav Defense.gif", "Openings/Laylo/White-4 King's Indian Defense.gif", "Openings/Laylo/White-5 King's Indian Defense - Alekhine Anti-Grünfeld, Neo-Grünfeld Defense, Goglidze Attack.gif"],
    black: ["Openings/Laylo/Black-1 Scandinavian Defense.gif", "Openings/Laylo/Black-2 Semi-Slav Defense.gif", "Openings/Laylo/Black-3 King's Indian Defense - Alekhine Anti-Grünfeld, Neo-Grünfeld Defense, Goglidze Attack.gif", "Openings/Laylo/Black-4 Caro-Kann Defense.gif", "Openings/Laylo/Black-5 Sicilian Defense.gif"]
  },
  "Wesley Barbossa So": {
    white: ["Openings/So/White-1 Sicilian Defense.gif", "Openings/So/White-2 Ruy Lopez Opening.gif", "Openings/So/White-3 Giuoco Piano Game.gif", "Openings/So/White-4 Nimzo-Indian Defense.gif", "Openings/So/White-5 King's Indian Defense.gif"],
    black: ["Openings/So/Black-1 Ruy Lopez Opening.gif", "Openings/So/Black-2 Sicilian Defense.gif", "Openings/So/Black-3 Queen's Pawn Opening.gif", "Openings/So/Black-4 Giuoco Piano Game.gif", "Openings/So/Black-5 Queen's Gambit Declined.gif"]
  },
  "Jayson Gonzales": {
    white: ["Openings/Gonzales/White-1 English Opening.png", "Openings/Gonzales/White-2 Queen's Pawn Opening.gif", "Openings/Gonzales/White-3 Slav Defense.gif", "Openings/Gonzales/White-4 King's Indian Defense.gif", "Openings/Gonzales/White-5 English Opening - Symmetrical Variation.gif"],
    black: ["Openings/Gonzales/Black-1 Queen's Pawn Opening.gif", "Openings/Gonzales/Black-2 Uncommon Opening.png", "Openings/Gonzales/Black-3 Alekhine's Defense.gif", "Openings/Gonzales/Black-4 French Defense.gif", "Openings/Gonzales/Black-5 Queen's Gambit Declined - Chigorin Defense.gif"]
  },
  "John Paul Gomez": {
    white: ["Openings/Gomez/White-1 Sicilian Defense.gif", "Openings/Gomez/White-2 Ruy Lopez Opening.gif", "Openings/Gomez/White-3 Slav Defense.gif", "Openings/Gomez/White-4 King's Indian Defense - Alekhine Anti-Grünfeld, Neo-Grünfeld Defense, Goglidze Attack.gif", "Openings/Gomez/White-5 King's Indian Defense.gif"],
    black: ["Openings/Gomez/Black-1 Slav Defense.gif", "Openings/Gomez/Black-2 French Defense.gif", "Openings/Gomez/Black-3 Sicilian Defense.gif", "Openings/Gomez/Black-4 Queen's Pawn Opening.gif", "Openings/Gomez/Black-5 Ruy Lopez Opening.gif"]
  },
  "Janelle Mae Frayna": {
    white: ["Openings/Frayna/White-1 English Opening.png", "Openings/Frayna/White-2 Sicilian Defense.gif", "Openings/Frayna/White-3 King's Indian Defense.gif", "Openings/Frayna/White-4 Queen's Pawn Opening.gif", "Openings/Frayna/White-5 English Opening - King's English Variation.gif"],
    black: ["Openings/Frayna/Black-1 Caro-Kann Defense.gif", "Openings/Frayna/Black-2 King's Indian Defense - Alekhine Anti-Grünfeld, Neo-Grünfeld Defense, Goglidze Attack.gif", "Openings/Frayna/Black-3 French Defense.gif", "Openings/Frayna/Black-4 Alekhine's Defense.gif", "Openings/Frayna/Black-5 Slav Defense.gif"]
  },
  "Joseph Sánchez": {
    white: ["Openings/Sanchez/White-1 Sicilian Defense.gif", "Openings/Sanchez/White-2 Caro-Kann Defense.gif", "Openings/Sanchez/White-3 French Defense.gif", "Openings/Sanchez/White-4 Sicilian Defense - Open, Scheveningen Variation.gif", "Openings/Sanchez/White-5 Sicilian Defense - Open, Taimanov Variation.gif"],
    black: ["Openings/Sanchez/Black-1 Sicilian Defense.gif", "Openings/Sanchez/Black-2 Slav Defense.gif", "Openings/Sanchez/Black-3 Scandinavian Defense.gif", "Openings/Sanchez/Black-4 Queen's Pawn Opening.gif", "Openings/Sanchez/Black-5 English Opening - King's English Variation.gif"]
  },
  "Roland Salvador": {
    white: ["Openings/Salvador/White-1 Queen's Pawn Opening.gif", "Openings/Salvador/White-2 Queen's Gambit Declined.gif", "Openings/Salvador/White-3 King's Indian Defense.gif", "Openings/Salvador/White-4 English Opening - King's English Variation.gif", "Openings/Salvador/White-5 Semi-Slav Defense.gif"],
    black: ["Openings/Salvador/Black-1 Sicilian Defense.gif", "Openings/Salvador/Black-2 Queen's Pawn Opening.gif", "Openings/Salvador/Black-3 Caro-Kann Defense.gif", "Openings/Salvador/Black-4 Reti Opening.png", "Openings/Salvador/Black-5 English Opening.png"]
  },
  "Rogelio Barcenilla Jr.": {
    white: ["Openings/Barcenilla/White-1 English Opening.png", "Openings/Barcenilla/White-2 Sicilian Defense.gif", "Openings/Barcenilla/White-3 English Opening - King's English Variation.gif", "Openings/Barcenilla/White-4 Ruy Lopez Opening.gif", "Openings/Barcenilla/White-5 Sicilian Defense - Open, Scheveningen Variation.gif"],
    black: ["Openings/Barcenilla/Black-1 King's Indian Defense.gif", "Openings/Barcenilla/Black-2 Ruy Lopez Opening.gif", "Openings/Barcenilla/Black-3 Ruy Lopez Opening - Morphy Defense, Closed.gif", "Openings/Barcenilla/Black-4 Italian Game - Two Knights Defense.gif", "Openings/Barcenilla/Black-5 Ruy Lopez Opening - Morphy Defense, Exchange Variation.gif"]
  },
  "Julio Catalino Sadorra": {
    white: ["Openings/Sadorra/White-1 Nimzo-Indian Defense.gif", "Openings/Sadorra/White-2 Slav Defense.gif", "Openings/Sadorra/White-3 English Opening.png", "Openings/Sadorra/White-4 King's Indian Defense.gif", "Openings/Sadorra/White-5 Semi-Slav Defense.gif"],
    black: ["Openings/Sadorra/Black-1 French Defense.gif", "Openings/Sadorra/Black-2 Sicilian Defense.gif", "Openings/Sadorra/Black-3 Queen's Gambit Declined.gif", "Openings/Sadorra/Black-4 English Opening.png", "Openings/Sadorra/Black-5 French Defense - Tarrasch Variation.gif"]
  },
  "Oliver Barbosa": {
    white: ["Openings/Barbosa/White-1 Queen's Pawn Opening.gif", "Openings/Barbosa/White-2 Slav Defense.gif", "Openings/Barbosa/White-3 King's Indian Defense.gif", "Openings/Barbosa/White-4 Bogo-Indian Defense.gif", "Openings/Barbosa/White-5 Dutch Defense.gif"],
    black: ["Openings/Barbosa/Black-1 Caro-Kann Defense.gif", "Openings/Barbosa/Black-2 Slav Defense.gif", "Openings/Barbosa/Black-3 Sicilian Defense.gif", "Openings/Barbosa/Black-4 English Opening.png", "Openings/Barbosa/Black-5 Queen's Pawn Opening.gif"]
  },
  "Richard Bitoon": {
    white: ["Openings/Bitoon/White-1 Sicilian Defense.gif", "Openings/Bitoon/White-2 Caro-Kann Defense.gif", "Openings/Bitoon/White-3 English Opening.png", "Openings/Bitoon/White-4 French Defense.gif", "Openings/Bitoon/White-5 Reti Opening.png"],
    black: ["Openings/Bitoon/Black-1 Sicilian Defense.gif", "Openings/Bitoon/Black-2 Queen's Indian Defense.gif", "Openings/Bitoon/Black-3 Nimzo-Indian Defense.gif", "Openings/Bitoon/Black-4 Queen's Pawn Opening.gif", "Openings/Bitoon/Black-5 English Opening.png"]
},
"Enrico Sevillano": {
white: ["Openings/Sevillano/White-1 Sicilian Defense.gif", "Openings/Sevillano/White-2 French Defense.gif", "Openings/Sevillano/White-3 Ruy Lopez Opening.gif", "Openings/Sevillano/White-4 Caro-Kann Defense.gif", "Openings/Sevillano/White-5 Robatsch Defense.gif"],
black: ["Openings/Sevillano/Black-1 Sicilian Defense.gif", "Openings/Sevillano/Black-2 Modern Benoni.gif", "Openings/Sevillano/Black-3 French Defense.gif", "Openings/Sevillano/Black-4 Queen's Gambit Declined.gif", "Openings/Sevillano/Black-5 Queen's Pawn Opening.gif"]
},
"Daniel Quizon": {
white: ["Openings/Quizon/White-1 Ruy Lopez Opening.gif", "Openings/Quizon/White-2 Sicilian Defense.gif", "Openings/Quizon/White-3 King's Indian Attack.gif", "Openings/Quizon/White-4 French Defense.gif", "Openings/Quizon/White-5 Caro-Kann Defense.gif"],
black: ["Openings/Quizon/Black-1 Sicilian Defense.gif", "Openings/Quizon/Black-2 King's Indian Defense.gif", "Openings/Quizon/Black-3 Benko Gambit.gif", "Openings/Quizon/Black-4 Modern Benoni.gif", "Openings/Quizon/Black-5 Sicilian Defense - Kan Variation.gif"]
}
};

function mapOps(list, customFiles, fallbackPrefix) {
  return list.map(function (name, i) {
    return {
      name: name,
      moves: openingMovesMap[name] || "Standard Theory",
      image: (customFiles && customFiles[i]) ? customFiles[i] : (fallbackPrefix + (i + 1) + ".gif")
    };
  });
}

function p(photo, name, fed, active, role, peak, curr, all, ratio, white, black, info, bio, wOps, bOps) {
  const flag = fed === "SG" ? "🇸🇬 SINGAPORE" : fed === "US" ? "🇺🇸 UNITED STATES" : "🇵🇭 PHILIPPINES";
  const files = playerOpeningFiles[name] || {};
  return {
    photo: "ICONS/" + photo, bioPhoto: "ICONS/" + photo, name: name, federation: flag,
    activeSince: "Active: " + active, role: role, peakRating: peak, currentRating: curr,
    allGames: all, ratio: ratio,
    whiteWins: white.at(0), whiteLosses: white.at(1), whiteDraws: white.at(2),
    blackWins: black.at(0), blackLosses: black.at(1), blackDraws: black.at(2),
    personalInfo: info, bio: bio,
    openings: {
      white: mapOps(wOps, files.white, "white-opening-"),
      black: mapOps(bOps, files.black, "black-opening-")
    }
  };
}




const competitorData = {
  "black-rook-a8": p("Eugene Torre.jpg", "Eugene Torre", "PH", "Since 1971", "Grandmaster • FIDE ID: 5200016", "2580 (1983)", "2423", "2042", "58.45%", ["410","149","462"], ["336","252","433"],
    "November 4, 1951 • Iloilo • Mapúa University (Business Administration)",
    "Torre is the first Filipino and non-Soviet Asian Grandmaster, achieving this feat while he was 22 years old in 1974. Prior to that, he became the Philippines' third International Master in 1972. In 2021, he was inducted into the World Chess Hall of Fame, the first male Asian player to be given the honor. He is considered the strongest chess player the Philippines had produced during the 1980s and 1990s. He was also known as a friend of Bobby Fischer, the 11th World Chess Champion.\n\nHis other feats include being the first to defeat the then world champion in 1976, Anatoly Karpov, since the latter had become world champion. He was also ranked globally at no.17 in the early 1980s.\n\nTorre has played for the Philippines in 23 Chess Olympiads where he won a silver medal in the 1974 Olympiad that was held at Nice, France and secured 3 bronze medals from other Olympiads. He participated in 7 FIDE Interzonals, one of which he tied for 1st at Toluca, Mexico 1982. He also had taken part in 6 Asian Team Chess Championships where he won the gold medal 4 times and a bronze medal once. He also manned for Team Philippines for the 2002 and 2004 Asian Cities Chess Championship and led team Tagaytay to gold medal in the 14th edition. In the 16th Asian Games held at Guangzhou, China, Torre helped the Philippines finish second behind China and secured the silver medal. In 2017 and 2018, he won the 8th and 9th edition of Asian Senior Chess Championship that was held at Auckland, New Zealand and Tagaytay City, respectively.\n\nIn late 2020, Torre joined the Professional Chess Association of the Philippines, the first professional domestic chess league in the Philippines.",
    ["Sicilian Defense", "Queen's Pawn Opening", "Ruy López", "Queen's Indian Defense", "French Defense"],
    ["Ruy López", "Pirc", "King's Indian Defense", "Slav Defense", "Sicilian Defense"]),

  "black-knight-b8": p("Rosendo Balinas Jr.jpg", "Rosendo Balinas Jr.", "PH", "1964–1997", "Grandmaster • FIDE ID: None", "2440 (1978)", "2440", "375", "50.13%", ["80","60","47"], ["59","78","51"],
    "September 10, 1941 – September 24, 1998 • Manila • Jose Rizal University (Law)",
    "Rosendo Carreon Balinas Jr. was the Philippines' second chess Grandmaster and was a seven-time Philippine chess champion. He was considered the strongest Asian player during the 1960s and 1970s, before the emergence of Eugenio Torre. He achieved his International Master title in 1972 and became a Grandmaster in 1974.\n\nHe won the silver medal for the 17th Chess Olympiad that was held at Havana, Cuba. In the 1967 Meralco “Beat Bobby Fischer” match series that was held at Manila, he was also the only player to hold Bobby Fischer to a draw. Balinas was a lawyer by profession, as well as an award-winning chess writer and journalist. He also unsuccessfully ran for representative of Rizal's 1st district in the 1994 special election. He died on the 24th of September, 1998 due to liver cancer.",
    ["Sicilian Defense", "Ruy López", "French Defense", "Caro-Kann Defense", "English Opening"],
    ["Sicilian Defense", "Ruy López", "Queen's Indian Defense", "English, 1 c4 e5", "King's Indian Attack"]),

  "black-bishop-c8": p("Rogelio Antonio Jr. _ _Joey_ Antonio.jpg", "Rogelio 'Joey' Antonio Jr.", "PH", "Since 1987", "Grandmaster • FIDE ID: 5200032", "2589 (2011)", "2313", "1371", "61.63%", ["349","96","263"], ["212","146","305"],
    "February 19, 1962 • Manila • N/A",
    "Rogelio Antonio Jr., affectionately known as \"Joey\" Antonio or GM Joey Antonio, became the third Filipino Grandmaster and the first player in the Philippines' history to qualify for the FIDE World Cup in 2009. He became an International Master in 1989 and a Grandmaster in 1993.\n\nAntonio has played 10 times for the Philippines Olympiad team, mostly on board 2, 4 times in the Asian Team Chess Championship, 5 times for the Asian Cities Chess Championship, 5 times for the Asian Individual Chess Championship, and won 7 US tournaments in a row back in 2008. He was also part of the 16th Asian Games that was held at Guangzhou, China and helped the Philippines secure the silver medal. In 2020, Antonio won the 2020 Asian Seniors Chess Championship.\n\nHis known username in Chess.com is GMJoey1, which garnered attention due to the amount of time he has devoted to playing online chess, regularly playing 100 to 200 games a day.",
    ["Sicilian Defense", "French Defense", "Ruy López", "Caro-Kann Defense", "Four Knights Game"],
    ["Caro-Kann Defense", "Queen's Pawn Opening", "Nimzo-Indian Defense", "Bogo-Indian Defense", "Modern Benoni"]),

  "black-queen-d8": p("Buenaventura _Bong_ Mendieta Villamayor.jpg", "Buenaventura 'Bong' Villamayor", "SG", "Since 1986", "Grandmaster • FIDE ID: 5200393", "2560 (2001)", "2280", "585", "58.46%", ["133","56","102"], ["107","85","102"],
    "May 4, 1967 • Mauban, Quezon • N/A",
    "Buenaventura \"Bong\" Mendieta Villamayor is the fourth Filipino Grandmaster. He achieved the title of International Master in 1998 and Grandmaster in 2000. He has participated 5 times in the Olympiads, won the national championship of the Philippines back in 1998, and played at the 12th Asian Chess Championship that was held at Shenyang, China in 1999 where Team Philippines placed 4th and he won the gold medal on Board 2.\n\nSome of his other notable tournaments include winning the 2015 Singapore National Rapid Championship, the 2014 Penang International Open Championship, the 2008 Subic International Open, the 2004 Asian Cities Team Championships, the 2003 Vietnam Southeast Asian (SEA) Games, the 2003 Shell National Rapid, the 2000 Vietnam Grandmaster Circuits I and II, the 2000 Vietnam Asian Zonal Championships, the 2000 Bali Grandmaster Open, the 1996 Abu Dhabi International Open, the 1989 Manila Mayor's Cup National Open, and the 1986 World Junior Championship.\n\nIn 2017, Villamayor transferred his FIDE national federation from the Philippines to Singapore and has since continued to represent Singapore.",
    ["English Opening", "Queen's Pawn Opening", "English, 1 c4 c5", "Slav Defense", "Catalan Opening"],
    ["French Defense", "Semi-Slav Defense", "French Defense: Winawer Variation", "French Defense", "French Tarrasch"]),

  "black-king-e8": p("Nelson Isurina Mariano II.jpg", "Nelson Isurina Mariano II", "PH", "1991–2007", "Grandmaster • FIDE ID: 5200610", "2510 (1995)", "2447", "259", "56.37%", ["48","28","55"], ["45","32","51"],
    "June 28, 1974 • Manila • University of the East",
    "Nelson Isurina Mariano II, known as “Jet”, is the fifth Filipino Grandmaster and the winner of the Asian Junior Chess Championship in 1994. He began learning chess at the age of 3 under the tutelage of his father, Nelson I, his first chess coach. He also helped GM Rogelio Antonio Jr. in his match against GM Eugenio Torre in Manila, 1998.\n\nHe achieved the title of International Master at the age of 19 at the Asian Junior Chess Championship held at Shah Alam, Malaysia in 1994. He also placed 3rd in the World Junior Chess Championship held at Matinhos, Brazil, in 1994 and his performance in both tournaments was honored by Fidel V. Ramos, the 12th President of the Philippines. In 1995, he achieved his 1st GM Norm at the GM Circuit Singapore Pool. His 2nd GM Norm was earned at the 6th Dubai Open Championships and his final GM Norm was earned at the Bangkok GM Circuit event in Thailand, gaining him the title of Grandmaster in 2004.\n\nIn 2007, Mariano decided to retire from competitive chess to teach it instead. In 2008, he started his own chess school, Chesskidz LLP, and has since been imparting his knowledge in chess to children, youth, and adults around the region. He is currently the chief coach of ASEAN Chess Academy, a grandmaster school based in Singapore.",
    ["Sicilian Defense", "Ruy López", "French Defense", "King's Indian Attack", "French Defense: Winawer Variation"],
    ["King's Indian Defense", "Sicilian Defense", "Scandinavian Defense", "English Opening", "French Defense"]),

  "black-bishop-f8": p("Mark Callano Paragua.jpg", "Mark Callano Paragua", "PH", "Since 1993", "Grandmaster • FIDE ID: 5201241", "2621 (2006)", "2394", "1781", "62.07%", ["432","154","308"], ["367","215","305"],
    "March 29, 1984 • Manila • N/A",
    "Mark Callano Paragua is the sixth Filipino Grandmaster. He was the youngest Filipino master ever, at 9 years old, and became the youngest Filipino Grandmaster at 20 years old in 2005 before GM Wesley So surpassed it. He became the first Filipino to reach a 2600 FIDE Rating in September of 2005, and in 2006, he was included in the world's top 100 players with a rating of 2618.\n\nSome of his accomplishments include participating in 2 World Youth Chess Championships, 2 World Junior Championships, the 2004 World Chess Championship, 3 times in the Chess World Cup, 7 Asian Individual Chess Championships, 5 Chess Olympiads, 3 Asian Cities Chess Championships (where he led Team Tagaytay to a gold finish in the team competition), 2 Annual World Opens, and winning the 2012 Philippine Chess Championship.\n\nParagua once resided both in the city of Meycauayan and the adjacent town of Marilao in the province of Bulacan. He then became a resident of New York and coaches at the New York Chess Academy.",
    ["Sicilian Defense", "King's Indian Attack", "Queen's Pawn Opening", "Slav Defense", "Sicilian Defense: Open, Najdorf Variation"],
    ["Sicilian Defense", "King's Indian Defense", "Sicilian Defense: Open, Najdorf Variation", "Slav Defense", "Queen's Pawn Opening"]),
  
  "black-knight-g8": p("Darwin Laylo.jpg", "Darwin Laylo", "PH", "Since 1999", "Grandmaster • FIDE ID: 5201330", "2556 (2010)", "2356", "1023", "58.99%", ["226","77","215"], ["168","133","204"],
    "June 1, 1980 • Marikina • San Sebastian College (Business Management)",
    "Darwin Laylo is the seventh Filipino Grandmaster. He became an International Master in 2003, then gained two GM Norms in 2006 from the 2006 Malaysian Open and the 2006 Bad Wiessee Tournament in Germany. His final GM Norm came at the 2007 Asian Chess Championship held in Cebu, Philippines, earning him the Grandmaster title that year.\n\nHis career highlights include participating in 4 Chess Olympiads, 2 Asian Cities Chess Championships, 7 Asian Individual Chess Championships, 2 Asian Games, the 2008 Asian Club Chess Cup, and 5 HDBank International Chess Opens. He also won the 2009 Zonal Tournament held in Ho Chi Minh City and won the Philippine National Championships in 2004 and 2006.",
    ["English, 1 c4 e5", "English Opening", "Slav Defense", "King's Indian Defense", "Grünfeld Defense"],
    ["Scandinavian Defense", "Slav Defense", "Grünfeld Defense", "Caro-Kann Defense", "Sicilian Defense"]),
  
  "black-rook-h8": p("Wesley So.jpg", "Wesley Barbossa So", "US", "Since 2005", "Grandmaster • FIDE ID: 5202213", "2822 (2017)", "2771", "5438", "61.67%", ["1265","402","1068"], ["954","548","1201"],
    "October 9, 1993 • Bacoor, Cavite • Jesus Good Shepherd School; Saint Francis of Assisi College; Webster University (Finance/Accounting)",
    "Wesley Barbossa So is the eighth Filipino-American Grandmaster. He is a three-time Philippine Chess Champion, a four-time U.S. Chess Champion, and the first FIDE World Fischer Random Chess Champion, defeating Magnus Carlsen. On the March 2017 FIDE rating list, he was ranked number two in the world and had an Elo rating of 2822, making him the fifth highest-rated player in history and the 11th player to pass 2800 Elo. So became the youngest player to pass a 2600 Elo rating in October 2008, breaking the record previously held by Magnus Carlsen. He is the youngest Filipino to achieve three IM Norms in just four months, becoming an International Master in 2006, and the youngest Filipino Grandmaster at the age of 14 and the 7th youngest in history to reach the title in 2008.\n\nSo represented the Philippines until his transfer to the United States in 2014, where he won several tournaments representing the federation, including the 42nd Chess Olympiad where he secured team and individual gold medals.\n\nSome of his notable accomplishments include taking first place at the 2003 Philippine National Chess Championships at 10 years old and securing individual golds and a team silver in the ASEAN Open in 2004 and 2005. He made his first Olympiad appearance at the 37th Chess Olympiad held in Turin, Italy in 2006, and in 2007 he became the Philippine National Junior Chess Champion. In 2020, he amassed a score of 9/11, the third-best score in U.S. National Championships history, and in November 2022 he beat Hikaru Nakamura to win the first-ever Chess.com Global Championship.\n\nHe also has a [documentary](https://www.youtube.com/watch?v=a6nPdA0mxJc) about his life that was produced by Chess.com in 2025.",
    ["Sicilian Defense", "Ruy López", "Giuoco Piano", "Nimzo-Indian Defense", "King's Indian Defense"],
    ["Ruy López", "Sicilian Defense", "Queen's Pawn Opening", "Giuoco Piano", "Queen's Gambit Declined"]),

  "black-pawn-d7": p("Jayson Gonzales.jpg", "Jayson Gonzales", "PH", "Since 1995", "Grandmaster • FIDE ID: 5201080", "2524 (2008)", "2312", "493", "58.32%", ["116","47","84"], ["89","76","81"],
    "May 2, 1969 • Quezon City • N/A",
    "Jayson Gonzales is the ninth Filipino Grandmaster. He became an International Master in 2001 and a Grandmaster in 2008. Along with GM Eugene Torre, he established the Philippine Academy for Chess Excellence (PACE) in 2010.\n\nSome of his career highlights include playing for the Philippines in the 2004 and 2008 Chess Olympiads. He won the Southern California Open in 1998, tied for 4th–5th in the Philippine Chess Championship in 2001, tied for 3rd–4th in the Calvia Open in 2004, tied for 2nd–3rd in the 1st Leg ASEAN Circuit Chess Tournament in Tarakan, placed 3rd in the 88th Marshall Chess Club Championship in New York, and placed second in the 1st Subic International Open Tournament.",
    ["English Opening", "Queen's Pawn Opening", "Slav Defense", "King's Indian Defense", "English, 1 c4 c5"],
    ["Queen's Pawn Opening", "Uncommon Opening", "Alekhine's Defense", "French Defense", "Chigorin Defense"]),

  "black-pawn-e7": p("John Paul Gomez.jpg", "John Paul Gomez", "PH", "Since 2001", "Grandmaster • FIDE ID: 5201381", "2541 (2013)", "2353", "944", "59.27%", ["211","63","202"], ["140","113","215"],
    "May 23, 1986 • Biñan, Laguna • De La Salle University (Mechanical Engineering)",
    "John Paul Gomez is the tenth Filipino Grandmaster. He began playing chess when he was 3 years old and began beating older players when he was 5 years old. He also played tennis and became a top player in the ten-and-under age category, but an injury led him to switch back to chess. He became an International Master in 2007 and Grandmaster in 2009.\n\nGomez is a three-time Filipino National Junior Champion and has also won the Philippine Chess Championship. He led the chess team of De La Salle University to the UAAP men's chess championship for the 2004–2005 season, won five “Most Valuable Player” awards, and was named UAAP's “Athlete of the Year” for Season 71 (2008–2009).\n\nSome of his other accomplishments include participation in 2 World Junior Chess Championships, 8 Asian Individual Chess Championships, the 16th Asian Games, the 1st Asian Club Chess Cup, the 2018 Philippine National Games where he won a gold medal, the 2011 Southeast Asian Games where he won a silver medal for the blindfold chess competition, 2 Asian Cities Chess Championships where he led his team to a gold medal in the 18th edition, and 6 Chess Olympiads, including the 38th Chess Olympiad where he was the second-strongest Filipino just behind GM Wesley So.",
    ["Sicilian Defense", "Ruy López", "Slav Defense", "Grünfeld Defense", "King's Indian Defense"],
    ["Slav Defense", "French Defense", "Sicilian Defense", "Queen's Pawn Opening", "Ruy López"]),

  "white-pawn-d2": p("Janelle Mae Frayna.jpg", "Janelle Mae Frayna", "PH", "Since 2010", "Woman Grandmaster (WGM) • FIDE ID: 5212499", "2325 (2017)", "2286", "966", "54.55%", ["211","128","155"], ["169","164","139"],
    "May 19, 1996 • Legazpi, Albay • Divine Word College of Legazpi; Far Eastern University (Psychology)",
    "Janelle Mae Frayna is the first Filipino WGM (Woman Grandmaster), achieving the title of WFM (Woman FIDE Master) in 2013, WIM (Woman International Master) in 2014, and WGM in 2017. She is also a three-time Philippine Women's Chess Champion.\n\nFrayna started playing chess at age 11, joining the Magayon Chess Club. At the Philippine Women's National Championship, she became champion in two editions and finished first runner-up twice in other editions. She also became champion multiple times at the ASEAN Age-Group Chess Championships. After six to eight months of extensive training, she enrolled at the Philippine Academy for Chess Excellence in 2010, and in 2011 she won the Philippine National Juniors as one of the youngest winners of that tournament.\n\nShe first won over a grandmaster and an international master, both men, at the Battle of the Grandmasters tournament in July 2014, becoming the first woman to do so and qualifying for the men's division by finishing among the top six players. She later became head teacher of the Philippine Academy for Chess Excellence under her former coach GM Jayson Gonzales.",
    ["English Opening", "Sicilian Defense", "King's Indian Defense", "Queen's Pawn Opening", "English, 1 c4 e5"],
    ["Caro-Kann Defense", "Grünfeld Defense", "French Defense", "Alekhine's Defense", "Slav Defense"]),

  "white-rook-a1": p("Joseph Sánchez.jpg", "Joseph Sánchez", "PH", "Since 1983", "Grandmaster • FIDE ID: 5201233", "2544 (2011)", "2471", "749", "65.49%", ["206","72","102"], ["179","81","109"],
    "August 19, 1970 • Cebu • University of Cebu (Marine Technology)",
    "Joseph Sánchez is the eleventh Filipino Grandmaster and the first Cebuano Grandmaster. He reportedly began playing chess at the age of 13, became an International Master in 2004, and earned the Grandmaster title in 2009.\n\nThroughout his career, he has represented the Philippines internationally, including helping the national team place fourth at the Asian Team Chess Championships in Shenyang, China. He also jointly won a round-robin tournament in Milan, and on September 1, 2003, his rating peaked at 2544 Elo—making him the third highest-rated Filipino behind Wesley So and Rogelio Antonio Jr.",
    ["Sicilian Defense", "Caro-Kann Defense", "French Defense", "Sicilian Defense: Open, Scheveningen Variation", "Sicilian Defense: Open, Taimanov Variation"],
    ["Sicilian Defense", "Slav Defense", "Scandinavian Defense", "Queen's Pawn Opening", "English, 1 c4 e5"]),

  "white-knight-b1": p("Roland Salvador.jpg", "Roland Salvador", "PH", "Since 1996", "Grandmaster • FIDE ID: 5201047", "2538 (2011)", "2369", "682", "68.04%", ["195","55","91"], ["175","69","97"],
    "January 3, 1982 • Manila • University of Santo Tomas",
    "Roland Salvador is the twelfth Filipino Grandmaster. In 2007, he became an International Master, and he achieved the title of Grandmaster in 2010.\n\nCompeting extensively in European open tournaments, he played in the Bergamo International Open in July 2007, where he tied for 2nd place with Todor Todorov, Inna Gaponenko, and Viesturs Meijers. In September 2021, he tied for third place with six other players at the Imperia International Chess Festival Open A tournament, ultimately placing 5th on tiebreaks.",
    ["Queen's Pawn Opening", "Queen's Gambit Declined", "King's Indian Defense", "English, 1 c4 e5", "Semi-Slav Defense"],
    ["Sicilian Defense", "Queen's Pawn Opening", "Caro-Kann Defense", "Réti Opening", "English Opening"]),

  "white-bishop-c1": p("Rogelio Barcenilla Jr.jpg", "Rogelio Barcenilla Jr.", "PH", "Since 1987", "Grandmaster • FIDE ID: 5200059", "2518 (2009)", "2467", "469", "58.74%", ["116","44","70"], ["85","75","79"],
    "January 23, 1972 • Bacolod • San Sebastian College",
    "Rogelio Barcenilla Jr. is the thirteenth Filipino Grandmaster. He became an International Master in 1990 and earned the Grandmaster title in 2010.\n\nBarcenilla won the Asian Junior Chess Championship two times back-to-back: in 1989 held at Dubai, United Arab Emirates (UAE), and in 1990 at Kerala, India. He has also played five times for the Philippines in Chess Olympiads: the 28th Chess Olympiad (1988), 30th Chess Olympiad (1992), 32nd Chess Olympiad (1996), 42nd Chess Olympiad (2016), and the 2020 Online Chess Olympiad.",
    ["English Opening", "Sicilian Defense", "English, 1 c4 e5", "Ruy López", "Sicilian Defense: Open, Scheveningen Variation"],
    ["King's Indian Defense", "Ruy López", "Ruy López, Closed", "Italian Game: Two Knights", "Ruy López, Exchange"]),

  "white-queen-d1": p("Julio Sadorra.jpg", "Julio Catalino Sadorra", "PH", "Since 1996", "Grandmaster • FIDE ID: 5201268", "2611 (2014)", "2546", "818", "62.84%", ["215","77","123"], ["196","124","83"],
    "September 14, 1986 • Bacoor, Cavite • University of Texas at Dallas (Business Administration)",
    "Julio Catalino Sadorra is the fourteenth Filipino Grandmaster. He became an International Master in 2007 and Grandmaster in 2011. In 2009, Sadorra moved to the United States to pursue an education and attended the University of Texas at Dallas on a chess scholarship, where he was a team member that went to the Final Four twice. He has coached for the North Texas Chess Academy and UT Dallas, and was part of the UT Dallas team that won the Pan-American Intercollegiate Championship in 2010, 2011, and 2012.\n\nSome of his accomplishments include tying for 1st in the 2013 Open held at Madison, Wisconsin, winning the Continental Class Championship at Virginia in 2016, tying for first in the 9th Annual Chesapeake Open in 2017, participating thrice in the Chess Olympiads, taking part in 4 Asian Individual Chess Championships, and joining 2 PRO Chess Leagues.",
    ["Nimzo-Indian Defense", "Slav Defense", "English Opening", "King's Indian Defense", "Semi-Slav Defense"],
    ["French Defense", "Sicilian Defense", "Queen's Gambit Declined", "English Opening", "French Defense: Tarrasch Variation"]),

  "white-king-e1": p("Oliver Barbosa.jpg", "Oliver Barbosa", "PH", "Since 2002", "Grandmaster • FIDE ID: 5201640", "2596 (2012)", "2368", "999", "61.46%", ["231","81","188"], ["198","119","182"],
    "September 29, 1986 • Pasig City • University of the Philippines (Sports Science); Colegio de San Juan de Letran",
    "Oliver Barbosa is the fifteenth Filipino Grandmaster. He became an International Master in 2008 and Grandmaster in 2011, and has trained alongside GM Wesley So and GM John Paul Gomez.\n\nSome of his notable accomplishments include participation in the 43rd edition of the World Junior Chess Championship, the 2013 Tromsø, Norway Chess World Cup, the 40th Chess Olympiad, 4 Asian Individual Chess Championships, the 18th edition of the Asian Cities Chess Championship held at Tagaytay City, Cavite, 2 PRO Chess Leagues, and the 2013 and 2014 editions of the Bangkok Chess Club Open and its Blitz variant. He placed first in the 6th Kolkata Open, won the 6th Washington International 2017 at Rockville, USA, won the 4th Continental Open, won the 141st New York State Championship, and tied for 7th in the 45th Annual World Open—the highest place achieved so far by a Filipino chess player in the Annual World Open.\n\nThese days, he coaches kids at the Speyer School based in New York, USA.",
    ["Queen's Pawn Opening", "Slav Defense", "King's Indian Defense", "Bogo-Indian Defense", "Dutch Defense"],
    ["Caro-Kann Defense", "Slav Defense", "Sicilian Defense", "English Opening", "Queen's Pawn Opening"]),

  "white-bishop-f1": p("Richard Bitoon.jpg", "Richard Bitoon", "PH", "Since 1995", "Grandmaster • FIDE ID: 5201110", "2515 (2011)", "2300", "878", "56.55%", ["222","103","123"], ["140","144","146"],
    "December 14, 1975 • Cebu • Southwestern University",
    "Richard Bitoon is the sixteenth Filipino Grandmaster. He obtained the International Master title in 2003 and was awarded the Grandmaster title in 2011.\n\nSome of his notable tournaments include the ch-PHI 2015 held at Manila, the BRUNEI GM Invitational 2012 held at Bandar Seri Begawan, Brunei, the DYTM Nazrin Shah Invitational held at Kuala Lumpur, Malaysia, and the PHI-ch held at Quezon City in 1999.",
    ["Sicilian Defense", "Caro-Kann Defense", "English Opening", "French Defense", "Réti Opening"],
    ["Sicilian Defense", "Queen's Indian Defense", "Nimzo-Indian Defense", "Queen's Pawn Opening", "English Opening"]),

  "white-knight-g1": p("Enrico Sevillano.jpg", "Enrico Sevillano", "US", "Since 1997", "Grandmaster • FIDE ID: 5200156", "2537 (2012)", "2272", "1083", "65.70%", ["288","65","179"], ["256","139","156"],
    "March 17, 1968 • Cebu • Computer Science",
    "Enrico Sevillano is the seventeenth Filipino Grandmaster. He obtained the International Master title in 1985 and was awarded the Grandmaster title in 2012. Sevillano is a Filipino and American chess player who plays for the United States Chess Federation (USCF), ranking #112 among all players in the US and #72 among active players.\n\nHaving grown up in the Philippines, Sevillano won the 10th Asian Junior Chess Championship held at Manila in 1986. Some of his other notable accomplishments include participating in 2 World Junior Chess Championships, 2 Chess Olympiads for the Philippines, 2 Asian Team Chess Championships, 3 International Chess Festivals held at Las Vegas, USA, 2 Edmonton International Opens, and 2 Calgary International Chess Classics.",
    ["Sicilian Defense", "French Defense", "Ruy López", "Caro-Kann Defense", "Robatsch Defense"],
    ["Sicilian Defense", "Modern Benoni", "French Defense", "Queen's Gambit Declined", "Queen's Pawn Opening"]),

  "white-rook-h1": p("Daniel Quizon.jpg", "Daniel Quizon", "PH", "Since 2016", "Grandmaster • FIDE ID: 5217911", "2499 (2024)", "2411", "674", "62.76%", ["185","62","99"], ["140","91","97"],
    "November 10, 2004 • Rizal • San Miguel Elementary School",
    "Daniel Quizon is the eighteenth Filipino Grandmaster. He became a FIDE Master in 2018, International Master in the same year, and Grandmaster in 2024.\n\nHe won the AQ Prime ASEAN Chess Championship in February 2023, earning him his first GM norm. In June 2023, he earned his second norm after going unbeaten at the ASEAN+ Age Group Chess Championships in Bangkok, Thailand. On March 31, 2024, Quizon defeated Nguyễn Anh Dũng and won the Hanoi Grandmaster Chess Tournament, claiming his third GM norm in Vietnam, and clinched his final grandmaster norm on September 14, 2024, after defeating GM Igor Efimov at the 45th Chess Olympiad. Quizon also qualified for the Chess World Cup 2025.",
    ["Ruy López", "Sicilian Defense", "King's Indian Attack", "French Defense", "Caro-Kann Defense"],
    ["Sicilian Defense", "King's Indian Defense", "Benko Gambit", "Modern Benoni", "Sicilian Defense: Kan Variation"])
};  

