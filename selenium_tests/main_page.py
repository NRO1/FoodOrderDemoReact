from base_page import BasePage
from selenium.webdriver.common.by import By
import platform

class MainPage(BasePage):
    ## locators
    _header_locator = (By.XPATH, '//h1[text()="Super meals"]')
    _cart_locator = (By.XPATH, '//span[text()="Cart"]')

    ########################################
    def __init__(self, driver):
        super().__init__(driver)
        self._driver = driver
   ########################################
   
    @property
    def url(self):
        if platform.system() == 'Windows':
            self._url = 'http://localhost:3000/'
        else:
            self._url = 'http://foodapp.natiroth.com/'
        return self._url
   
    def go_to_main_page(self):
        self._driver.get(self.url)
        
    def verify_header(self):
        try:
            self._find_element(self._header_locator)
            return True
        except Exception as error:
            print(f'Could Not find header element: {error}')
            return False
        
    def verify_cart(self):
        try:
            self._find_element(self._cart_locator)
            return True
        except Exception as error:
            print(f'Could Not find cart element: {error}')
            return False

