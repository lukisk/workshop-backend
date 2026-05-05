import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const teamParam = req.query.team;
  const team = Array.isArray(teamParam) ? teamParam[0] : teamParam;

  if (!team) {
    res.status(400).json({ error: 'Missing required query parameter: team' });
    return;
  }

  res.status(200).json({
    team,
    detail: {},
  });
}
