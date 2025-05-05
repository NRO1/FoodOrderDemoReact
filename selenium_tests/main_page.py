from base_page import BasePage
from selenium.webdriver.common.by import By


class MainPage(BasePage):
    ## locators
    _url = 'http://localhost:3000/'
    _header_locator = (By.XPATH, '//h1[text()="Super meals"]')

    ########################################
    def __init__(self, driver):
        super().__init__(driver)
        self._driver = driver
   ########################################
   
    def go_to_main_page(self):
        self._driver.get(self._url)
        
    def verify_header(self):
        try:
            self._find_element(self._header_locator)
            return True
        except Exception as error:
            print(f'Could Not find header element: {error}')
            return False

