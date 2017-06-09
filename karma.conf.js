module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      { pattern: 'src/**/*.spec.ts' },
      { pattern: 'src/**/*.spec.tsx' }
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack'],
      'src/**/*.spec.tsx': ['webpack']
    },
    reporters: ['mocha'],
    webpack: {
      resolve: {
        extensions: ['.ts', '.js', ".tsx"]
      },
      module: {
        exprContextCritical: false,
        rules: [
          {
            test: /\.spec\.tsx?$/,
            use: [
              { loader: "webpack-espower-loader" }
            ]
          },
          {
            test: /\.tsx?$/,
            use: [
              { loader: "ts-loader" }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'ignore-loader' }
            ]
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    client: {
      mocha: {
        reporter: 'spec',
        ui: 'bdd'
      }
    },
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    concurrency: Infinity,
    failOnEmptyTestSuite: false
  })
};
