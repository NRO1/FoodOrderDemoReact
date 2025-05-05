from main_page import MainPage
import time

class TestSanity():

        
    def test_sanity(self, driver):
        main_page = MainPage(driver)
        main_page.go_to_main_page()
        assert driver.current_url == 'http://foodapp.natiroth.com/'
        time.sleep(3)
        
        header = main_page.verify_header()
        print(header)
        assert header is True, 'Header not found'
        time.sleep(3)