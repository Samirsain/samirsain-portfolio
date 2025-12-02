import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      {
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      }
    );

    if (!res.ok) {
      console.warn(
        `Failed to fetch GitHub contributions: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
  } catch (error) {
    console.warn("Failed to fetch GitHub contributions:", error);
    return [];
  }
}
