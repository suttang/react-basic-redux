const args = process.argv;
args.splice(0, 4);

const polyfills = [];

const files = polyfills.concat(args);

module.exports = (config) => {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: files,

    preprocessors: {
      'src/**/*.spec.ts': ['webpack'],
      'src/**/*.spec.tsx': ['webpack']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    webpack: {
      resolve: {
        extensions: ['.ts', '.js', ".tsx"]
      },
      module: {
        rules: [
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
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    // autoWatch: false,
    browsers: ['Chrome'],
    // singleRun: true,
    concurrency: Infinity,
    failOnEmptyTestSuite: false
  })
};
