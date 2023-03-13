module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    };
  },
};
