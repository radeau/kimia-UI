const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

module.exports = withMDX({
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/components/input',
        destination: '/components/field',
        permanent: true,
      },
      {
        source: '/components/input/with-formik',
        destination: '/components/field/with-formik',
        permanent: true,
      },
      {
        source: '/components/input/with-react-hook-form',
        destination: '/components/field/with-react-hook-form',
        permanent: true,
      },
    ];
  },
});
