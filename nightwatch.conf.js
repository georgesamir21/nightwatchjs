module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: './tests/reports/',
  selenium: {
    start_process: true,
    server_path: 'path_to_selenium_standalone_server',
    log_path: './tests/logs/',
    cli_args: {
      'webdriver.chrome.driver': 'path_to_chrome_driver'
    }
  },
  test_settings: {
    default: {
      launch_url: 'url/to/test',
      filter: '**/*.spec.js',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['Array of arguments']
        }
      }
    }
  }
}