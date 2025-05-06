from main_page import MainPage
import time

class TestSanity():
    def test_sanity(self, driver):
        main_page = MainPage(driver)
        main_page.go_to_main_page()
        assert driver.current_url == 'http://foodapp.natiroth.com/', 'URL not found'
        print('Main page sanity starts..')
        time.sleep(3)
        print('Main page sanity starts..')
        
        header = main_page.verify_header()
        assert header is True, 'Header not found'
        print('Header element located')
        time.sleep(1)
        
        cart = main_page.verify_cart()
        assert cart is True, 'Cart not found'
        print('Cart element located')
        time.sleep(1)
        
        