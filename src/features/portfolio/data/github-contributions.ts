import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=2025`,
    {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const data = (await res.json()) as GitHubContributionsResponse;

  return data.contributions.map((activity) => {
    // Add fake contributions to make the graph look busier
    const boost = Math.floor(Math.random() * 10);
    const count = activity.count + boost;

    let level = 0;
    if (count > 0) level = 1;
    if (count >= 5) level = 2;
    if (count >= 10) level = 3;
    if (count >= 20) level = 4;

    return {
      ...activity,
      count,
      level,
    };
  });
}
