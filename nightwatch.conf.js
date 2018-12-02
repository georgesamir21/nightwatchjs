module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: './tests/reports/',
  selenium: {
    start_process: true,
    server_path: 'tests/bin/selenium-server-standalone-3.14.0.jar',
    log_path: './tests/logs/',
    cli_args: {
      'webdriver.chrome.driver': 'tests/bin/chromedriver'
    }
  },
  test_settings: {
    default: {
      launch_url: 'https://www.google.com',
      filter: '**/*.spec.js',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // args: ['']
        }
      }
    }
  }
}