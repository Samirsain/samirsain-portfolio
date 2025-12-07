import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";
import { GitHubStars } from "@/registry/github-stars";

async function getStargazerCount() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 0 }, // Disable cache for debugging
      }
    );

    if (!response.ok) {
      console.error("GitHub API Error:", response.status, response.statusText);
      return 0;
    }

    const json = (await response.json()) as { stargazers_count?: number };
    console.log("GitHub Stars Fetched:", json.stargazers_count);
    return Number(json?.stargazers_count) || 0;
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return 0;
  }
}

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount();

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  );
}
