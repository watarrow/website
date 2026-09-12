const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

export const assetUrl = (id) =>
  id ? `${DIRECTUS_CDN_URL}/assets/${id}` : null;

// Used for the per-aircraft anchor, e.g. /aircraft#dart
export const aircraftSlug = (name) =>
  String(name || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const cleanContributors = (list) => {
  const raw = Array.isArray(list)
    ? list
    : typeof list === "string"
    ? list.split(",")
    : [];

  if (!raw.length) return [];

  const seen = new Set();

  return raw
    .map((name) => String(name).trim())
    .filter((name) => {
      const key = name.toLowerCase();
      if (!name || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

export const fileIds = (list) => {
  if (!Array.isArray(list)) return [];

  return list
    .map((entry) =>
      typeof entry === "string" ? entry : entry?.directus_files_id
    )
    .filter((id) => typeof id === "string" && id.length > 0);
};

// case insensitivity
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
  image: item.Image ?? item.image ?? null,
  gallery: fileIds(item.Gallery ?? item.gallery),
  yaw: Number(item.Model_yaw ?? item.model_yaw ?? 0),
});
