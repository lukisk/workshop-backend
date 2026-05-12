import type { VercelRequest, VercelResponse } from '@vercel/node';
import { WC_COUNTRIES, WC_GROUPS, flagUrl } from './_data';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const groups = WC_GROUPS.map((group) => ({
    name: group.letter,
    countries: group.teams.map((key) => {
      const c = WC_COUNTRIES[key];
      return {
        code: c.code,
        name: c.name,
        ranking: c.ranking,
        appearances: c.appearances,
        flagUrl: flagUrl(c.code)
      };
    }),
  }));

  res.status(200).json({
    header: 'Edition · XXIII  /  June 11 — July 19',
    title: 'The Draw \'26',
    subtitle: '48 nations. 12 groups. Tap any country to dig into its World Cup trivia.',
    kickoff: '2026-06-11T19:00:00Z',
    stadium: 'Estadio Azteca',
    groups,
  });
}
