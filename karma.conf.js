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
    mime: {
      'text/x-typescript': ['ts','tsx']
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
              {loader: "webpack-espower-loader"}
            ]
          },
          {
            test: /\.tsx?$/,
            use: [
              {loader: "ts-loader"}
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
    // autoWatch: false,
    browsers: ['Chrome'],
    // singleRun: true,
    concurrency: Infinity,
    failOnEmptyTestSuite: false
  })
};
