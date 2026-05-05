import type { VercelRequest, VercelResponse } from '@vercel/node';
import { WC_COUNTRIES, WC_GROUPS } from './_data';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const groups = WC_GROUPS.map((group) => ({
    groupname: group.letter,
    countries: group.teams.map((key) => {
      const c = WC_COUNTRIES[key];
      return {
        code: c.code,
        name: c.name,
        nick: c.nick,
        ranking: c.ranking,
        appearances: c.appearances,
      };
    }),
  }));

  res.status(200).json({
    header: 'WC26',
    title: 'World Cup Trivia',
    subtitle: 'FIFA 2026',
    groups,
  });
}
