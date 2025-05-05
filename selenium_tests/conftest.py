import pytest
from selenium import webdriver

@pytest.fixture
def driver(request):
    browser = request.config.getoption("--browser")
    print(f'Creating {browser} driver')
    if browser == 'chrome':
        new_driver = webdriver.Chrome()
    elif browser == 'edge':
        new_driver = webdriver.Edge()
    else:
        raise TypeError(f"Expected 'chrome' or 'edge' but got {browser}")
    yield new_driver
    print(f'Closing {browser} driver')
    new_driver.quit()
    
    
# adding option for the cli command
def pytest_addoption(parser):
    parser.addoption("--browser", action='store', default='chrome', help='browser to exceute tests')
    
    

    
### running tests on several browsers
# @pytest.fixture(params=["chrome", "edge"])
# def driver(request):
#     browser = request.param
#     print(f'Creating {browser} driver')
#     if browser == 'chrome':
#         new_driver = webdriver.Chrome()
#     elif browser == 'edge':
#         new_driver = webdriver.Edge()
#     else:
#         raise TypeError(f"Expected 'chrome' or 'edge' but got {browser}")
#     yield new_driver
#     print(f'Closing {browser} driver')
#     new_driver.quit()