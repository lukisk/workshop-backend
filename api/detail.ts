import type { VercelRequest, VercelResponse } from '@vercel/node';
import { WC_COUNTRIES, findByCode, findGroupOf } from './_data';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const codeParam = req.query.code;
  const code = Array.isArray(codeParam) ? codeParam[0] : codeParam;

  if (!code) {
    res.status(400).json({ error: 'Missing required query parameter: code' });
    return;
  }

  const match = findByCode(code);
  if (!match) {
    res.status(404).json({ error: `No country with code: ${code}` });
    return;
  }

  const { key, country } = match;
  const group = findGroupOf(key);
  const teammates = group
    ? group.teams
        .filter((teamKey) => teamKey !== key)
        .map((teamKey) => {
          const t = WC_COUNTRIES[teamKey];
          return { code: t.code, name: t.name, nick: t.nick };
        })
    : [];

  res.status(200).json({
    code: country.code,
    name: country.name,
    nick: country.nick,
    appearances: country.appearances,
    best: country.best,
    ranking: country.ranking,
    topScorer: country.topScorer,
    star: country.star,
    moment: country.moment,
    fact: country.fact,
    country_in_same_group: teammates,
  });
}
