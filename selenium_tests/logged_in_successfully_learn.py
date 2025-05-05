from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec

class LoggedInSuccessfullyPage:
    _url = 'https://practicetestautomation.com/logged-in-successfully/'
    __expected_text_locator = (By.TAG_NAME, 'h1')
    __logout_btn_locator = (By.LINK_TEXT, "Log out")
    
    def __init__(self, driver: WebDriver):
        self._driver = driver
    
    @property
    def current_url(self) -> str:
        return self._driver.current_url
    
    @property
    def expected_url(self) -> str:
        return self._url
    
    @property
    def header(self) -> str:
        return self._driver.find_element(self.__expected_text_locator).text
    
    def is_logout_button_displayed(self) -> bool:
        return self._driver.find_element(self.__logout_btn_locator).is_displayed()
        
    
    
    
    

    
    
    

    