/**
 * Resolves chamber member image URLs with GitHub Pages subpath support.
 * Ensures images resolve correctly on both local environments (/chamber/...)
 * and GitHub Pages deployments (/wdd231/chamber/...).
 *
 * @param {string|null|undefined} img - Image path or URL from members dataset
 * @returns {string} - Fully qualified absolute pathname or URL for the image
 */
export function getMemberImageUrl(img) {
    const isGitHub = window.location.pathname.includes('/wdd231');
    const base = isGitHub ? '/wdd231/chamber/' : '/chamber/';
    const fallback = `${base}images/favicon/android-chrome-192x192.png`;

    if (!img) return fallback;
    if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('//')) return img;

    // Strip any leading slashes or 'chamber/' prefixes so we have a clean relative path
    const cleanPath = img.replace(/^\/?(chamber\/)?/, '');

    return `${base}${cleanPath}`;
}

export default getMemberImageUrl;
