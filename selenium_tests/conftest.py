import pytest
from selenium import webdriver
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.chrome.options import Options as ChromeOptions

@pytest.fixture(params=["chrome", "edge"])
def driver(request):
    browser = request.param
    print(f'Creating {browser} driver')
    if browser == 'chrome':
        chrome_options = ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--ignore-certificate-errors')
        new_driver = webdriver.Chrome(options=chrome_options)
    elif browser == 'edge':
        edge_options = EdgeOptions()
        edge_options.add_argument('--headless')
        edge_options.add_argument('--ignore-certificate-errors')
        new_driver = webdriver.Edge(options=edge_options)
    else:
        raise TypeError(f"Expected 'chrome' or 'edge' but got {browser}")
    yield new_driver
    print(f'Closing {browser} driver')
    new_driver.quit()
    
    
