const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

export const assetUrl = (id) =>
  id ? `${DIRECTUS_CDN_URL}/assets/${id}` : null;

// Used for the per-aircraft anchor, e.g. /aircrafts#dart
export const aircraftSlug = (name) =>
  String(name || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


const cleanContributors = (list) => {
  if (!Array.isArray(list)) return [];

  const seen = new Set();

  return list
    .map((name) => String(name).trim())
    .filter((name) => {
      const key = name.toLowerCase();
      if (!name || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

// case insensetivity
export const normalizeAircraft = (item) => ({
  id: item.id,
  name: item.Name ?? item.name ?? "",
  description: item.Description ?? item.description ?? "",
  competition: item.Competition ?? item.competition ?? "",
  year: item.Year ?? item.year ?? "",
  contributors: cleanContributors(
    item.Contributors ?? item.Contributers ?? item.contributors
  ),
  model: item.Model ?? item.model ?? null,
  poster: item.Poster ?? item.poster ?? null,
  yaw: Number(item.Model_yaw ?? item.model_yaw ?? 0),
});
