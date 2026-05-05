export type Country = {
  name: string;
  code: string;
  nick: string;
  appearances: number;
  best: string;
  ranking: number;
  topScorer: string;
  star: string;
  moment: string;
  fact: string;
};

export type Group = { letter: string; teams: string[] };

export const WC_COUNTRIES: Record<string, Country> = {
  MEX: { name: 'Mexico',        code: 'mx',     nick: 'El Tri',          appearances: 17, best: 'QF (1970, 1986)',             ranking: 14, topScorer: 'Rafael Márquez — 3',     star: 'Santiago Giménez',       moment: 'Hosting the 1986 "Hand of God" QF',     fact: 'First nation to host the World Cup three times.' },
  CAN: { name: 'Canada',        code: 'ca',     nick: 'Les Rouges',      appearances: 2,  best: 'Group stage',                  ranking: 36, topScorer: 'Alphonso Davies — 1',    star: 'Alphonso Davies',        moment: 'First WC goal vs Croatia, 2022',        fact: 'Co-hosts in 2026; playing first ever home WC match.' },
  USA: { name: 'United States', code: 'us',     nick: 'USMNT',           appearances: 12, best: 'SF (1930)',                    ranking: 13, topScorer: 'Clint Dempsey — 4',      star: 'Christian Pulisic',      moment: '1950 upset of England 1–0',             fact: 'Opened the 1994 WC final in Pasadena.' },

  ARG: { name: 'Argentina',     code: 'ar',     nick: 'La Albiceleste',  appearances: 19, best: 'Champions (1978, 1986, 2022)', ranking: 1,  topScorer: 'Lionel Messi — 13',      star: 'Lionel Messi',           moment: '2022 final vs France',                   fact: 'Reigning champions entering 2026.' },
  BRA: { name: 'Brazil',        code: 'br',     nick: 'Seleção',         appearances: 22, best: 'Champions (×5)',               ranking: 5,  topScorer: 'Ronaldo — 15',           star: 'Vinícius Jr.',           moment: 'Pelé lifting the trophy, 1970',          fact: 'Only nation to play every World Cup.' },
  FRA: { name: 'France',        code: 'fr',     nick: 'Les Bleus',       appearances: 17, best: 'Champions (1998, 2018)',       ranking: 2,  topScorer: 'Just Fontaine — 13',     star: 'Kylian Mbappé',          moment: 'Zidane headbutt, 2006 final',            fact: "Fontaine's 13 goals in one WC still stands." },
  ENG: { name: 'England',       code: 'gb-eng', nick: 'Three Lions',     appearances: 17, best: 'Champions (1966)',             ranking: 4,  topScorer: 'Harry Kane — 8',         star: 'Jude Bellingham',        moment: 'Geoff Hurst hat-trick, 1966',            fact: 'Only WC title won on home soil.' },
  GER: { name: 'Germany',       code: 'de',     nick: 'Die Mannschaft',  appearances: 21, best: 'Champions (×4)',               ranking: 10, topScorer: 'Miroslav Klose — 16',    star: 'Jamal Musiala',          moment: 'Klose breaks the record, 2014',          fact: 'Klose holds the all-time WC scoring record.' },
  ESP: { name: 'Spain',         code: 'es',     nick: 'La Roja',         appearances: 17, best: 'Champions (2010)',             ranking: 8,  topScorer: 'David Villa — 9',        star: 'Lamine Yamal',           moment: 'Iniesta 116th-min winner, 2010',         fact: "Yamal's teen scoring rate is Spain's best in 40 years." },
  POR: { name: 'Portugal',      code: 'pt',     nick: 'A Seleção',       appearances: 9,  best: '3rd (1966)',                   ranking: 6,  topScorer: 'Eusébio — 9',            star: 'Rafael Leão',            moment: 'Eusébio vs North Korea, 1966',           fact: 'Eusébio scored 4 to erase a 0–3 deficit.' },
  NED: { name: 'Netherlands',   code: 'nl',     nick: 'Oranje',          appearances: 12, best: 'Runners-up (×3)',              ranking: 7,  topScorer: 'Dennis Bergkamp — 5',    star: 'Cody Gakpo',             moment: 'Cruyff Turn vs Sweden, 1974',            fact: 'The only nation to lose three WC finals.' },
  BEL: { name: 'Belgium',       code: 'be',     nick: 'Red Devils',      appearances: 14, best: '3rd (2018)',                   ranking: 9,  topScorer: 'Romelu Lukaku — 5',      star: 'Jérémy Doku',            moment: 'Comeback vs Japan, 2018',                fact: 'Belgium trailed 0–2 and won 3–2 in added time.' },
  CRO: { name: 'Croatia',       code: 'hr',     nick: 'Vatreni',         appearances: 6,  best: 'Runners-up (2018)',            ranking: 11, topScorer: 'Davor Šuker — 6',        star: 'Luka Modrić',            moment: 'SF vs England, 2018',                    fact: 'Smallest country (by population) in a WC final.' },
  SUI: { name: 'Switzerland',   code: 'ch',     nick: 'Nati',            appearances: 12, best: 'QF (1934, 1938, 1954)',        ranking: 20, topScorer: 'Xherdan Shaqiri — 4',    star: 'Granit Xhaka',           moment: 'Hat-trick vs Honduras, 2014',            fact: 'Hosted the highest-scoring WC ever in 1954.' },
  DEN: { name: 'Denmark',       code: 'dk',     nick: 'Danish Dynamite',  appearances: 6,  best: 'QF (1998)',                    ranking: 19, topScorer: 'Preben Elkjær — 4',      star: 'Rasmus Højlund',         moment: 'Laudrups vs Uruguay, 1986',              fact: "Denmark's 6–1 demolition of Uruguay is folklore." },
  POL: { name: 'Poland',        code: 'pl',     nick: 'Biało-Czerwoni',  appearances: 9,  best: '3rd (1974, 1982)',             ranking: 28, topScorer: 'Grzegorz Lato — 10',     star: 'Robert Lewandowski',     moment: 'Lato wins Golden Boot, 1974',            fact: 'Poland finished 3rd twice in a decade.' },
  SRB: { name: 'Serbia',        code: 'rs',     nick: 'Orlovi',          appearances: 13, best: '4th (1930, 1962 as YUG)',      ranking: 33, topScorer: 'Predrag Mijatović — 2',  star: 'Dušan Vlahović',         moment: 'Stojković screamer vs Zaire, 1998',      fact: 'Inherits Yugoslavia’s strong WC pedigree.' },
  AUT: { name: 'Austria',       code: 'at',     nick: 'Das Team',        appearances: 7,  best: '3rd (1954)',                   ranking: 25, topScorer: 'Erich Probst — 4',       star: 'Marcel Sabitzer',        moment: 'Reaching SF, 1954',                      fact: "Austria's 1954 team was nicknamed the Wunderteam." },
  NOR: { name: 'Norway',        code: 'no',     nick: 'Drillos',         appearances: 3,  best: 'R16 (1998)',                   ranking: 29, topScorer: 'Kjetil Rekdal — 2',      star: 'Erling Haaland',         moment: 'Beating Brazil, 1998',                   fact: "Haaland's first senior WC appearance." },
  TUR: { name: 'Türkiye',       code: 'tr',     nick: 'Ay-Yıldızlılar',  appearances: 2,  best: '3rd (2002)',                   ranking: 26, topScorer: 'Hakan Şükür — 3',        star: 'Arda Güler',             moment: '11-second goal vs Korea, 2002',          fact: 'Şükür scored the fastest WC goal ever: 10.8s.' },

  JPN: { name: 'Japan',         code: 'jp',     nick: 'Samurai Blue',    appearances: 8,  best: 'R16 (×4)',                     ranking: 17, topScorer: 'Keisuke Honda — 4',      star: 'Takefusa Kubo',          moment: 'Beating Germany & Spain, 2022',          fact: 'First Asian team to beat two ex-champions at one WC.' },
  KOR: { name: 'South Korea',   code: 'kr',     nick: 'Taegeuk Warriors', appearances: 12, best: '4th (2002)',                   ranking: 24, topScorer: 'Ahn Jung-hwan — 3',      star: 'Son Heung-min',          moment: 'Home SF run, 2002',                      fact: 'Only Asian nation to reach a WC semifinal.' },
  AUS: { name: 'Australia',     code: 'au',     nick: 'Socceroos',       appearances: 6,  best: 'R16 (2006, 2022)',             ranking: 27, topScorer: 'Tim Cahill — 5',         star: 'Harry Souttar',          moment: "Cahill's volley vs Netherlands",         fact: 'Cahill scored in 3 different World Cups.' },
  IRN: { name: 'Iran',          code: 'ir',     nick: 'Team Melli',      appearances: 7,  best: 'Group stage',                  ranking: 22, topScorer: 'Karim Bagheri — 2',      star: 'Mehdi Taremi',           moment: 'Beating USA, 1998',                      fact: 'Record holder for most AFC WC qualifications.' },
  KSA: { name: 'Saudi Arabia',  code: 'sa',     nick: 'Green Falcons',   appearances: 7,  best: 'R16 (1994)',                   ranking: 58, topScorer: 'Sami Al-Jaber — 3',      star: 'Salem Al-Dawsari',       moment: 'Upset of Argentina, 2022',               fact: 'Beat the eventual 2022 champions in their opener.' },
  UZB: { name: 'Uzbekistan',    code: 'uz',     nick: 'White Wolves',    appearances: 1,  best: 'Debut',                        ranking: 57, topScorer: '—',                      star: 'Eldor Shomurodov',       moment: 'Qualifying for the first time, 2025',    fact: 'Making their World Cup debut in 2026.' },
  JOR: { name: 'Jordan',        code: 'jo',     nick: 'Al-Nashama',      appearances: 1,  best: 'Debut',                        ranking: 64, topScorer: '—',                      star: 'Musa Al-Taamari',        moment: 'First-ever WC qualification, 2025',      fact: 'Qualifying for their first World Cup.' },
  IRQ: { name: 'Iraq',          code: 'iq',     nick: 'Lions of Mesopotamia', appearances: 1, best: 'Group stage (1986)',       ranking: 55, topScorer: 'Ahmed Radhi — 1',        star: 'Aymen Hussein',          moment: 'WC debut, 1986',                         fact: 'Returning to the WC after a 40-year gap.' },
  QAT: { name: 'Qatar',         code: 'qa',     nick: 'Al-Annabi',       appearances: 2,  best: 'Group stage',                  ranking: 51, topScorer: 'Mohammed Muntari — 1',   star: 'Akram Afif',             moment: 'Hosting in 2022',                        fact: 'First Arab nation to host a World Cup.' },

  MAR: { name: 'Morocco',       code: 'ma',     nick: 'Atlas Lions',     appearances: 7,  best: '4th (2022)',                   ranking: 15, topScorer: 'Salaheddine Bassir — 2', star: 'Achraf Hakimi',          moment: 'SF run in Qatar, 2022',                  fact: 'First African team to reach a WC semifinal.' },
  SEN: { name: 'Senegal',       code: 'sn',     nick: 'Lions of Teranga', appearances: 4,  best: 'QF (2002)',                    ranking: 18, topScorer: 'Papa Bouba Diop — 3',    star: 'Sadio Mané',             moment: 'Opening shock vs France, 2002',          fact: 'Beat the defending champs in their first-ever WC match.' },
  EGY: { name: 'Egypt',         code: 'eg',     nick: 'The Pharaohs',    appearances: 3,  best: 'Group stage',                  ranking: 35, topScorer: 'Mohamed Salah — 1',      star: 'Mohamed Salah',          moment: "Salah's 2018 goal vs Russia",            fact: 'First African team to ever qualify (1934).' },
  TUN: { name: 'Tunisia',       code: 'tn',     nick: 'Eagles of Carthage', appearances: 6, best: 'Group stage',                  ranking: 41, topScorer: 'Wahbi Khazri — 2',       star: 'Hannibal Mejbri',        moment: 'Beating France, 2022',                   fact: 'Shocked defending champions France in 2022.' },
  CIV: { name: 'Ivory Coast',   code: 'ci',     nick: 'Les Éléphants',   appearances: 3,  best: 'Group stage',                  ranking: 40, topScorer: 'Didier Drogba — 2',      star: 'Simon Adingra',          moment: 'Drogba era of the mid-2000s',            fact: "Drogba once helped halt a civil war with a WC plea." },
  ALG: { name: 'Algeria',       code: 'dz',     nick: 'Les Fennecs',     appearances: 4,  best: 'R16 (2014)',                   ranking: 38, topScorer: 'Islam Slimani — 2',      star: 'Riyad Mahrez',           moment: 'Beating West Germany, 1982',             fact: 'Their 1982 win triggered the "Disgrace of Gijón" rule change.' },
  GHA: { name: 'Ghana',         code: 'gh',     nick: 'Black Stars',     appearances: 4,  best: 'QF (2010)',                    ranking: 66, topScorer: 'Asamoah Gyan — 6',       star: 'Mohammed Kudus',         moment: 'Suárez handball vs Ghana, 2010',         fact: 'Closest any African team came to a semi until 2022.' },
  CPV: { name: 'Cape Verde',    code: 'cv',     nick: 'Tubarões Azuis',  appearances: 1,  best: 'Debut',                        ranking: 72, topScorer: '—',                      star: 'Ryan Mendes',            moment: 'First qualification, 2025',              fact: 'Second-smallest nation (by population) at the WC.' },
  NGA: { name: 'Nigeria',       code: 'ng',     nick: 'Super Eagles',    appearances: 6,  best: 'R16 (×3)',                     ranking: 37, topScorer: 'Ahmed Musa — 4',         star: 'Victor Osimhen',         moment: 'Beating Spain, 2018 (wait, 1998)',       fact: 'Won Olympic gold before their first WC win.' },

  URU: { name: 'Uruguay',       code: 'uy',     nick: 'La Celeste',      appearances: 15, best: 'Champions (1930, 1950)',       ranking: 12, topScorer: 'Óscar Míguez — 8',       star: 'Darwin Núñez',           moment: 'Maracanazo, 1950',                       fact: 'Won the inaugural World Cup on home soil.' },
  ECU: { name: 'Ecuador',       code: 'ec',     nick: 'La Tri',          appearances: 5,  best: 'R16 (2006)',                   ranking: 32, topScorer: 'Enner Valencia — 6',     star: 'Moisés Caicedo',         moment: "Valencia's opener vs Qatar, 2022",       fact: "Valencia has scored all of Ecuador's recent WC goals." },
  COL: { name: 'Colombia',      code: 'co',     nick: 'Los Cafeteros',   appearances: 6,  best: 'QF (2014)',                    ranking: 16, topScorer: 'James Rodríguez — 6',    star: 'Luis Díaz',              moment: 'James volley vs Uruguay, 2014',          fact: 'James won the Golden Boot on debut in 2014.' },
  PAR: { name: 'Paraguay',      code: 'py',     nick: 'La Albirroja',    appearances: 8,  best: 'QF (2010)',                    ranking: 48, topScorer: 'José Saldívar — 2',      star: 'Julio Enciso',           moment: 'Chilavert era, late 1990s',              fact: 'Had a goalkeeper (Chilavert) who took free kicks.' },

  NZL: { name: 'New Zealand',   code: 'nz',     nick: 'All Whites',      appearances: 2,  best: 'Unbeaten group stage (2010)',  ranking: 89, topScorer: 'Winston Reid — 1',       star: 'Chris Wood',             moment: 'Three clean-sheet draws, 2010',          fact: 'Only unbeaten team at the 2010 World Cup.' },
  CUW: { name: 'Curaçao',       code: 'cw',     nick: 'Blou-Geel-Blou',  appearances: 1,  best: 'Debut',                        ranking: 82, topScorer: '—',                      star: 'Leandro Bacuna',         moment: 'First qualification, 2025',              fact: 'At ~150k people, the smallest nation ever to qualify.' },
  HAI: { name: 'Haiti',         code: 'ht',     nick: 'Les Grenadiers',  appearances: 2,  best: 'Group stage',                  ranking: 83, topScorer: 'Emmanuel Sanon — 2',     star: 'Duckens Nazon',          moment: 'Sanon beats Zoff, 1974',                 fact: "Sanon ended Zoff's 1,143-minute clean-sheet streak." },
  PAN: { name: 'Panama',        code: 'pa',     nick: 'La Marea Roja',   appearances: 2,  best: 'Group stage',                  ranking: 39, topScorer: 'Felipe Baloy — 1',       star: 'Adalberto Carrasquilla', moment: 'First-ever WC goal, 2018',               fact: "Baloy's goal vs England triggered a national holiday." },
  CRC: { name: 'Costa Rica',    code: 'cr',     nick: 'Los Ticos',       appearances: 6,  best: 'QF (2014)',                    ranking: 45, topScorer: 'Paulo Wanchope — 3',     star: 'Keylor Navas',           moment: 'Shock 2014 group win',                   fact: 'Topped a group with Uruguay, Italy, and England.' },
  JAM: { name: 'Jamaica',       code: 'jm',     nick: 'Reggae Boyz',     appearances: 1,  best: 'Group stage (1998)',           ranking: 54, topScorer: 'Theodore Whitmore — 2',  star: 'Leon Bailey',            moment: 'Whitmore double vs Japan, 1998',         fact: "Jamaica's only WC win, and Whitmore scored both goals." },
};

export const WC_GROUPS: Group[] = [
  { letter: 'A', teams: ['MEX', 'NED', 'EGY', 'UZB'] },
  { letter: 'B', teams: ['CAN', 'BEL', 'SEN', 'JOR'] },
  { letter: 'C', teams: ['USA', 'POR', 'GHA', 'CPV'] },
  { letter: 'D', teams: ['ARG', 'CRO', 'JPN', 'NZL'] },
  { letter: 'E', teams: ['BRA', 'SUI', 'KOR', 'HAI'] },
  { letter: 'F', teams: ['FRA', 'URU', 'IRN', 'PAN'] },
  { letter: 'G', teams: ['ENG', 'DEN', 'AUS', 'CUW'] },
  { letter: 'H', teams: ['GER', 'POL', 'TUN', 'ECU'] },
  { letter: 'I', teams: ['ESP', 'SRB', 'KSA', 'PAR'] },
  { letter: 'J', teams: ['COL', 'MAR', 'CIV', 'JAM'] },
  { letter: 'K', teams: ['NOR', 'ALG', 'IRQ', 'CRC'] },
  { letter: 'L', teams: ['TUR', 'AUT', 'NGA', 'QAT'] },
];

export function findByCode(code: string): { key: string; country: Country } | null {
  const target = code.toLowerCase();
  for (const [key, country] of Object.entries(WC_COUNTRIES)) {
    if (country.code.toLowerCase() === target) {
      return { key, country };
    }
  }
  return null;
}

export function findGroupOf(key: string): Group | null {
  for (const group of WC_GROUPS) {
    if (group.teams.includes(key)) return group;
  }
  return null;
}
